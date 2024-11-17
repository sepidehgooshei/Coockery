import React from "react";
import { Outlet } from "react-router-dom";
import AppHeader from "../Header/AppHeader";

export default function DefaultLayout() {
    return(
        <>
<AppHeader/>
<div>
<Outlet/>
</div>
</>

    )
}