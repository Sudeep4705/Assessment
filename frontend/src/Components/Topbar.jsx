import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "./Drawer";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import { useNavigate } from "react-router-dom";
export default function Topbar() {
  const usenavigate = useNavigate()
  const handlesubmit = ()=>{
    usenavigate("/team")
  }
  const [open, setOpen] = useState(false);
  const [logout,setlogout] = useState(false)
  return (
    <>
      <div className="navbar">
        <div className="navbar-start">
          <button
            className="btn btn-ghost"
            onClick={() => setOpen(true)} 
          >
            <MenuIcon />
          </button>
        </div>

        <div className="navbar-end">
          <div className="inviteTeam mr-9">
            <button className="text-center text-sm" onClick={handlesubmit}>
                 <GroupAddIcon className="mb-0.5 mr-0.5"/>INVITE 
            </button>
            
          </div>
          <div className="avatar avatar-ring avatar-md">
            <div className="dropdown-container">
              <div className="dropdown">
                <label
                  className="btn btn-ghost flex cursor-pointer px-0"
                  tabIndex="0"
                >
                 <AccountCircleIcon/>
                </label>
                <div className="dropdown-menu dropdown-menu-bottom-left">
                  <a className="dropdown-item text-sm" href="/profile">Profile</a>
                  <a className="dropdown-item text-sm" href="/account">Account settings</a>
                  <a className="dropdown-item text-sm" href="/login">Login</a>
                  <a className="dropdown-item text-sm" href="/signup">SignUp</a>
                  {logout && (
                    <a className="dropdown-item text-sm">Logout</a>
                  )}
                  
                  <a className="dropdown-item text-sm flex ">
                    <span>Dark Mode <input type="checkbox" className="switch" /></span>
  
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Drawer open={open} setOpen={setOpen} />
    </>
  );
}
