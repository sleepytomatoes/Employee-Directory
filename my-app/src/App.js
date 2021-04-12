import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Employees from "./pages/Employees";
import SearchDepartment from "./pages/SearchDepartment";
import SearchRole from "./pages/SearchRole";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Wrapper>
          <Route exact path="/Employee-Directory" component={Home} />
          <Route exact path="/" component={Home} />
          <Route exact path="/employees" component={Employees} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/searchDepartment" component={SearchDepartment} />
          <Route exact path="/searchRole" component={SearchRole} />
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;