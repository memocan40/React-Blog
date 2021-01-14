
import './App.css';
import {NavLink,Switch, Route}from "react-router-dom";
import Buncer from "./views/Buncer";
import Sagrada from "./views/Sagrada";
import Next from "./views/Next";

function App() {

 
  return (
    <div className="App">
    

      
<ul>
 <NavLink activeClassName="current" to="/home"> <li><a>Home</a></li></NavLink>
 <NavLink activeClassName="current" to="/buncer"> <li><a href="#news">Buncer Del Carmel</a></li></NavLink>
 <NavLink activeClassName="current" to="/sagrada"> <li><a href="#contact">Sagrada</a></li></NavLink>
  <NavLink activeClassName="current" to="/next"><li><a href="#about">About</a></li></NavLink>
</ul>

  <Switch>
      <Route path="/buncer">
      <Buncer/>
      </Route>
      <Route path="/next">
        <Next/>
      </Route>

      <Route path="/sagrada">
        <Sagrada/>
      </Route>
      <Route path="/">
        <div className="text">
        <div className="first" >Welcome to Barcelona</div>
        <div className="second"><h4>This is a short presentation about my last visit to Barcelona <br></br><br></br>
        The City has some awesome places to go and I will show you some of these <br></br><br></br>
        enjoy!</h4></div>

        <div><iframe className="video" width="560" height="315" src="https://www.youtube.com/embed/0cHbqAIw4zc?start=17" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
        </div>
      </Route>
      

      </Switch>



    </div>
  );
}

export default App;
