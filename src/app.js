import React from 'react'
import NavbarComp from './NavbarComp'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

export default function App(){
    return(
        <>
        <Router>
        <NavbarComp />
        </Router>
      
        </>
    )
}