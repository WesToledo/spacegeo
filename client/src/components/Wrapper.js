import React, { useEffect } from "react";
import { NavLink, withRouter } from "react-router-dom";

import { Site, RouterContextProvider } from "tabler-react";

import useStore from "~/store";
import api from "~/services/api";

function SiteWrapper(props) {
  const { user } = useStore();

  useEffect(() => {
    async function sendLog() {
      try {
        await api.post("/log", { user: user._id });
      } catch (err) {
        console.log(err);
      }
    }

    return () => {
      sendLog();
      console.warn("Log sended");
    };
  }, []);

  console.log("user", user);

  const navBarItems = [
    {
      value: "Instruções",
      to: "/instrucoes",
      icon: "book-open",
      LinkComponent: withRouter(NavLink),
      useExact: false,
    },
    {
      value: "Tópicos",
      to: "/topicos",
      icon: "book-open",
      LinkComponent: withRouter(NavLink),
      useExact: false,
    },
    // {
    //   value: "Questionários Padrão",
    //   to: "/questionarios",
    //   icon: "check-square",
    //   LinkComponent: withRouter(NavLink),
    //   useExact: false,
    // },
  ];

  if (user.type == "student") {
    navBarItems.push({
      value: "Questionários",
      icon: "check-square",
      useExact: false,
      subItems: [
        {
          value: "Questionários Padrões",
          to: "/questionarios-padrao",
          LinkComponent: withRouter(NavLink),
          useExact: false,
        },
        {
          value: "Meus questionários",
          to: "/meus-questionarios",
          LinkComponent: withRouter(NavLink),
          useExact: false,
        },
      ],
    });
  }

  if (user.type === "teacher") {
    navBarItems.push(
      {
        value: "Turmas",
        to: "/turmas",
        icon: "check-square",
        LinkComponent: withRouter(NavLink),
        useExact: false,
      },
      {
        value: "Alunos",
        to: "/alunos",
        icon: "user",
        LinkComponent: withRouter(NavLink),
        useExact: false,
      },
      {
        value: "Questionários",
        icon: "check-square",
        useExact: false,
        subItems: [
          {
            value: "Questionários Padrões",
            to: "/questionarios-padrao",
            LinkComponent: withRouter(NavLink),
            useExact: false,
          },
          {
            value: "Meus questionários",
            to: "/meus-questionarios",
            LinkComponent: withRouter(NavLink),
            useExact: false,
          },
        ],
      }
    );
  }

  const accountDropdownProps = {
    avatarURL: user.picture
      ? user.picture
      : "https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png",
    name: user.name,
    options: [
      {
        icon: "log-out",
        value: "Sair",
        to: "/",
        LinkComponent: withRouter(NavLink),
      },
    ],
  };

  return (
    <Site.Wrapper
      headerProps={{
        href: "/",
        imageURL: "/assets/logo_novo.png",

        accountDropdown: accountDropdownProps,
      }}
      navProps={{ itemsObjects: navBarItems }}
      routerContextComponentType={withRouter(RouterContextProvider)}
    >
      {props.children}
    </Site.Wrapper>
  );
}

export default SiteWrapper;
