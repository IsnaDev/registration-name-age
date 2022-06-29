import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./container/home";
import Users from "./container/users"


function MyRoutes() {

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/usuarios" element={<Users />} />
            </Routes>
        </Router>
    )
};

export default MyRoutes