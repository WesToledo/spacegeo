// @flow

import * as React from "react";
import { NavLink, withRouter } from "react-router-dom";

import { Site, RouterContextProvider } from "tabler-react";

import useStore from "~/store";

function SiteWrapper(props) {
  const { user } = useStore();

  const navBarItems = [
    {
      value: "Estudos",
      to: "/estudos",
      icon: "book-open",
      LinkComponent: withRouter(NavLink),
      useExact: true,
    },
    {
      value: "Questionários",
      to: "/questionarios",
      icon: "check-square",
      LinkComponent: withRouter(NavLink),
      useExact: true,
    },
    {
      value: "Turmas",
      to: "/turmas",
      icon: "check-square",
      LinkComponent: withRouter(NavLink),
      useExact: true,
    },
  ];

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
