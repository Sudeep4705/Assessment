import { Outlet } from "react-router-dom";
import TopBar from "../src/Components/Topbar";


export default function UserLayout(){
    return(
        <>
           <div className="layout">
        <TopBar/>
        <main className="main-content">
            <Outlet/>
        </main>
    </div>
        </>
    )
 
}