// @flow

import * as React from "react";
import { NavLink, withRouter } from "react-router-dom";

import { Site, RouterContextProvider } from "tabler-react";

import useStore from "~/store";

function SiteWrapper(props) {
  const { user } = useStore();

  console.log("user type", user);

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
          value: "Padrão",
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
        value: "Questionários",
        icon: "check-square",
        useExact: false,
        subItems: [
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
        imageURL: "/assets/logo.png",

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
