import React from "react";
import { Route } from "react-router-dom";
import TabNav from "./components/TabNav.js";
import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList.js";
import LocationsList from "./components/LocationsList.js";
import EpisodeList from "./components/EpisodeList.js";
import WelcomePage from "./components/WelcomePage.js";


export default function App() {
  return (
    <main>
      <Header />
      <Route exact path="/" component={WelcomePage}/>
      <Route exact path="/character" component={CharacterList}/>
      <Route exact path="/location" component={LocationsList}/>
      <Route exact path="/episode" component={EpisodeList}/>
      {/* {<EpisodeList />} */}
      {/* {<LocationsList />} */}
      {/* {<CharacterList />} */}
      {/* <TabNav /> */}
    </main>
  );
}
