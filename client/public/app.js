import * as THREE from "../libs/three/three.module.js";
import { GLTFLoader } from "../libs/three/jsm/GLTFLoader.js";
import { CanvasUI } from "../libs/CanvasUI.js";
import { ARButton } from "../libs/ARButton.js";
import { LoadingBar } from "../libs/LoadingBar.js";
import { Player } from "../libs/Player.js";
import { RGBELoader } from "../libs/three/jsm/RGBELoader.js";
import { XRGestures } from "../libs/XRGestures.js";

var params = {};
class App {
  constructor() {
    location.search
      .slice(1)
      .split("&")
      .forEach(function (pair) {
        pair = pair.split("=");
        params[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
      });
    console.log("params", params);

    const container = document.createElement("div");
    document.body.appendChild(container);

    this.clock = new THREE.Clock();

    this.camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      0.01,
      20
    );

    this.scene = new THREE.Scene();

    this.scene.add(this.camera);

    this.scene.add(new THREE.HemisphereLight(0x606060, 0x404040));

    const light = new THREE.DirectionalLight(0xffffff);
    light.position.set(1, 1, 1).normalize();
    this.scene.add(light);

    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.outputEncoding = THREE.sRGBEncoding;
    this.setEnvironment();

    container.appendChild(this.renderer.domElement);

    this.origin = new THREE.Vector3();
    this.euler = new THREE.Euler();
    this.quaternion = new THREE.Quaternion();

    this.initScene();
    this.setupXR();

    window.addEventListener("resize", this.resize.bind(this));
  }

  setEnvironment() {
    const loader = new RGBELoader().setDataType(THREE.UnsignedByteType);
    const pmremGenerator = new THREE.PMREMGenerator(this.renderer);
    pmremGenerator.compileEquirectangularShader();

    const self = this;

    loader.load(
      "../assets/venice_sunset_1k.hdr",
      (texture) => {
        const envMap = pmremGenerator.fromEquirectangular(texture).texture;
        pmremGenerator.dispose();

        self.scene.environment = envMap;
      },
      undefined,
      (err) => {
        console.error("Ocorreu um erro ao criar o ambiente");
      }
    );
  }

  initScene() {
    this.loadingBar = new LoadingBar();

    this.assetsPath = "../assets/";
    const loader = new GLTFLoader().setPath(this.assetsPath);
    const self = this;

    // Load a GLTF resource
    loader.load(
      // resource URL
      "/models/" + params.obj + ".glb",
      // called when the resource is loaded
      function (gltf) {
        const object = gltf.scene;

        object.traverse(function (child) {
          if (child.isMesh) {
            child.material.metalness = 0;
            child.material.roughness = 1;
          }
        });

        const options = {
          object: object,
          speed: 0.5,
          animations: gltf.animations,
          clip: gltf.animations[0],
          app: self,
          name: "knight",
          npc: false,
        };

        self.knight = new Player(options);
        self.knight.object.visible = false;

        self.knight.action = "Dance";
        const scale = 0.05;
        self.knight.object.scale.set(scale, scale, scale);

        self.loadingBar.visible = false;
      },
      // called while loading is progressing
      function (xhr) {
        self.loadingBar.progress = xhr.loaded / xhr.total;
      },
      // called when loading has errors
      function (error) {
        console.log("An error happened");
      }
    );

    this.createUI();
  }

  createUI() {
    const config = {
      panelSize: { width: 512, height: 512 },
      height: 128,
      body: {
        backgroundColor: "transparent",
      },
      info: { type: "img" },
    };
    const content = {
      info: "./assets/gif.gif",
    };

    const ui = new CanvasUI(content, config);

    this.ui = ui;
  }

  setupXR() {
    this.renderer.xr.enabled = true;

    const self = this;
    let controller, controller1;

    function onSessionStart() {
      self.ui.mesh.position.set(0, -0.15, -0.3);
      self.camera.add(self.ui.mesh);
    }

    function onSessionEnd() {
      self.camera.remove(self.ui.mesh);
    }

    const btn = new ARButton(this.renderer, { onSessionStart, onSessionEnd });

    this.gestures = new XRGestures(this.renderer);
    this.gestures.addEventListener("tap", (ev) => {
      //console.log( 'tap' );
      self.ui.updateElement("info", "");
      if (!self.knight.object.visible) {
        self.knight.object.visible = true;
        self.knight.object.position.set(0, -0.3, -0.5).add(ev.position);
        self.scene.add(self.knight.object);
      }
    });
    this.gestures.addEventListener("doubletap", (ev) => {
      //console.log( 'doubletap');
      self.ui.updateElement("info", "");
    });
    this.gestures.addEventListener("press", (ev) => {
      //console.log( 'press' );
      self.ui.updateElement("info", "");
    });
    this.gestures.addEventListener("pan", (ev) => {
      //console.log( ev );
      if (ev.initialise !== undefined) {
        self.startPosition = self.knight.object.position.clone();
      } else {
        const pos = self.startPosition.clone().add(ev.delta.multiplyScalar(3));
        self.knight.object.position.copy(pos);
        self.ui.updateElement("info", "");
      }
    });
    this.gestures.addEventListener("swipe", (ev) => {
      //console.log( ev );
      self.ui.updateElement("info", "");
      if (self.knight.object.visible) {
        self.knight.object.visible = false;
        self.scene.remove(self.knight.object);
      }
    });
    this.gestures.addEventListener("pinch", (ev) => {
      //console.log( ev );
      if (ev.initialise !== undefined) {
        self.startScale = self.knight.object.scale.clone();
      } else {
        const scale = self.startScale.clone().multiplyScalar(ev.scale);
        self.knight.object.scale.copy(scale);
        self.ui.updateElement("info", "");
      }
    });
    this.gestures.addEventListener("rotate", (ev) => {
      // console.log("ROTATE", ev.theta);
      if (ev.initialise !== undefined) {
        self.startQuaternion = self.knight.object.quaternion.clone();
      } else {
        self.knight.object.quaternion.copy(self.startQuaternion);
        if (ev.direction == "lateral") {
          self.knight.object.rotateY(ev.theta);
        } else {
          self.knight.object.rotateX(ev.theta);
        }
        self.ui.updateElement("info", "");
      }
    });

    this.renderer.setAnimationLoop(this.render.bind(this));
  }

  resize() {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }

  render() {
    const dt = this.clock.getDelta();
    if (this.renderer.xr.isPresenting) {
      this.gestures.update();
      this.ui.update();
    }
    if (this.knight !== undefined) this.knight.update(dt);
    this.renderer.render(this.scene, this.camera);
  }
}

export { App };
