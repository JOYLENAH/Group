import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavbarComponent from "./Components/Navbar";
import Home from "./Pages/Home";
import SignIn from "./Pages/Signin"; // Separate component for Sign In
import SignUp from "./Pages/Signup"; // Separate component for Sign Up
import SignInSignUp from "./Pages/SigninSignup";
import BookSearch from "./Pages/Booksearch";
import BookReservation from "./Pages/Bookreservation";
import AdminDashboard from "./Components/AdminDasboard";
import Books from "./Pages/Books";
function App() {
  return (
    <BrowserRouter>
      <NavbarComponent />
      <Switch>
        {/* Home Route */}
        <Route exact path="/" component={Home} />
        
        {/* Get Started Route (Sign In/Sign Up Options) */}
        <Route path="/get-started" component={SignInSignUp} />

        {/* Sign In Route */}
        <Route path="/signin" component={SignIn} />
        
        {/* Sign Up Route */}
        <Route path="/signup" component={SignUp} />
        <Route path="/book-search" component={BookSearch} />
        <Route path="/book-reservation" component={BookReservation} />
        <Route path="/home" element={<Home />} />
        <Route path="/admin-dashboard" component={AdminDashboard} />
        <Route path="/books" component={Books} /> 
 

        {/* Add more routes here as needed */}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
