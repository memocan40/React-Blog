
import './App.css';
import {Link,Switch, Route}from "react-router-dom";
import Buncer from "./views/Buncer"

function App() {

 
  return (
    <div className="App">
    

      
<ul>
 <Link to="/"> <li><a class="active" href="#home">Home</a></li></Link>
 <Link to="/buncer"> <li><a href="#news">Buncer Del Carmel</a></li></Link>
  <li><a href="#contact">Contact</a></li>
  <li><a href="#about">About</a></li>
</ul>

  <Switch>
      <Route path="/buncer">
      <Buncer/>
      </Route>
      <Route path="/">
        <div className="text">
        <div className="first" >Welcome to Barcelona</div>
        <div className="second">Last Summer my friends and me decided to make a Trip to Barcelona</div>
        </div>
      </Route>

      </Switch>



    </div>
  );
}

export default App;
