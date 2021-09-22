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
      value: "Estudos",
      to: "/estudos",
      icon: "book-open",
      LinkComponent: withRouter(NavLink),
      useExact: false,
    },
    {
      value: "Questionários Padrão",
      to: "/questionarios",
      icon: "check-square",
      LinkComponent: withRouter(NavLink),
      useExact: false,
    },
  ];

  if (user.type == "student") {
    navBarItems.push({
      value: "Meus Questionários",
      to: "/meus-questionarios",
      icon: "check-square",
      LinkComponent: withRouter(NavLink),
      useExact: false,
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
        value: "Meus Questionários",
        to: "/meus-questionarios",
        icon: "check-square",
        LinkComponent: withRouter(NavLink),
        useExact: false,
      }
    );
  }

  const accountDropdownProps = {
    avatarURL: "./demo/faces/female/25.jpg",
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
