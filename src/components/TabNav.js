import React from "react";
import { Route } from "react-router-dom";

import { Tab, Menu, Icon } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

import WelcomePage from "./WelcomePage";
import CharacterList from "./CharacterList";
import LocationsList from "./LocationsList";
import EpisodesList from "./EpisodesList";

// TODO: Add missing tabs below
export default function TabNav() {
  return (
    <Tab panes={panes} />
  )
};

const panes = [
  {
    menuItem: (
      <Menu.Item as={NavLink} name="homepage" key="homepage" exact to="/">
        <Icon name="home" />
        Home Page
      </Menu.Item>
    ),
    render: () => <Tab.Pane><Route exact path="/" component={WelcomePage} /></Tab.Pane>,
  },
  {
    menuItem: (
      <Menu.Item as={NavLink} name="characters" key="characters" to="/characters">
        <Icon name="users" />
        Characters
      </Menu.Item>
    ),
    render: () => <Tab.Pane><Route path="/characters" component={CharacterList} /></Tab.Pane>,
  },
  {
    menuItem: (
      <Menu.Item as={NavLink} name="locations" key="locations" to="/locations">
        <Icon name="map outline" />
        Locations
      </Menu.Item>
    ),
    render: () => <Tab.Pane><Route path="/locations" component={LocationsList} /></Tab.Pane>,
  },
  {
    menuItem: (
      <Menu.Item as={NavLink} name="episodes" key="episodes" to="/episodes">
        <Icon name="video" />
        Episodes
      </Menu.Item>
    ),
    render: () => <Tab.Pane><Route path="/episodes" component={EpisodesList} /></Tab.Pane>
  }
]