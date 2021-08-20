AFRAME.registerComponent("enable-touch", {
  init: function () {
    var element = document.querySelector("body");
    this.marker = document.querySelector("a-marker");
    var model = document.querySelector("a-obj-model");
    var hammertime = new Hammer(element);
    var pinch = new Hammer.Pinch(); // Pinch is not by default in the recognisers
    hammertime.add(pinch); // add it to the Manager instance

    hammertime.on("pan", (ev) => {
      let rotation = model.getAttribute("rotation");
      switch (ev.direction) {
        case 2: // left
          rotation.y = rotation.y + 4;
          break;
        case 4: //right
          rotation.y = rotation.y - 4;
          break;
        case 8: // up
          rotation.x = rotation.x - 4;
          break;
        case 16: // down
          rotation.x = rotation.x + 4;
          break;
        default:
          break;
      }

      model.setAttribute("rotation", rotation);
    });

    hammertime.on("pinch", function (ev) {
      if (!model) return;

      const curr = model.getAttribute("scale");
      const scale = (ev.scale - 1) * 0.01;

      model.setAttribute("scale", {
        x: curr.x + scale,
        y: curr.y + scale,
        z: curr.z + scale,
      });
    });
  },
});
