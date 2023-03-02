import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom"
import { ThemeContext } from "../providers/ThemeProvider";
import NavList from "./NavBar";
import PageUI from "./UI/PageUI";

export default function AppRouter(){
    const theme = useContext(ThemeContext)

    return (                    
    <div style={{backgroundColor: theme.background1, minHeight: '100vh'}}>
        <NavList />
        <div style={{padding: 15}}>
            <Routes>
                <Route path="/" element={<div>Home</div>} />
                <Route path="/ui" element={<PageUI />} />
            </Routes>
        </div>
    </div>
)}