import { Route, Switch } from "react-router-dom";
import AllMeetupsPage from "./pages/AllMeetups";
import FavoritesPage from "./pages/Favorites";
import NewMeetupsPage from "./pages/NewMeetups";
import MainNavigation from "./components/layout/MainNavigation";
function App() {
  return (
    <div className="App">
      <MainNavigation></MainNavigation>
      <Switch>
        <Route path="/" exact>
          <AllMeetupsPage></AllMeetupsPage>
        </Route>
        <Route path="/new-meetup">
          <NewMeetupsPage></NewMeetupsPage>
        </Route>
        <Route path="/favorites">
          <FavoritesPage></FavoritesPage>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
