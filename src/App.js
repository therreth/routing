import { Route, Switch } from "react-router-dom";
import AllMeetupsPage from "./pages/AllMeetups";
import FavoritesPage from "./pages/Favorites";
import NewMeetupsPage from "./pages/NewMeetups";
function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/">
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
