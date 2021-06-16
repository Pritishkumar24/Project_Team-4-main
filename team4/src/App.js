import Home from './Components/home.js'
import Header from './Components/Header/header';
import SecondHeader from './Components/Header/secondheader';
import SecondPage from './Components/Search_sort/secondpage';
import Footer from './Components/Footer/footer';
import TodayDeals from './Components/Body/todaydeals';
import NewRelease from './Components/Body/newrelease';
import PopularBooks from './Components/Body/popularbook.js';

import {Link} from "react-router-dom";
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";

function App() {
  return (
    <div className="app">

        <Header/>
        <SecondHeader/>

        <Router>
            <Link to="/secondpage"></Link>
            <Link to="/todaydeals"></Link>
            <Link to="/newrelease"></Link>

            <Route path="/" exact component={Home}></Route>

            <Switch>
              <Route path="/secondpage" component={SecondPage}></Route>
              <Route path="/todaydeals" component={TodayDeals}></Route>
              <Route path="/newrelease" component={NewRelease}></Route>
              <Route path="/popularbooks" component={PopularBooks}></Route>
            </Switch>

        </Router>
        <Footer/>
    </div>
   
  );
}

export default App;
