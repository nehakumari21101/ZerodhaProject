import React, { useState } from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(true);
  
  const handleMenuclick = (index) =>{
    setSelectedMenu(index);
  }

  const handleProfileClick = (index) => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  }

  const menuClass = "menu";
  const activemenuClass = "menu selected";

  return (
    <>
      <div className="menu-container">
        <img src="logo.png" style={{ width: "50px" }} />
        <div className="menus">
          <ul>
            <li>
              <Link style={{ textDecoration: "none" }} to="/" onClick={() => handleMenuclick(0)}>
                <p className={selectedMenu ===0 ? activemenuClass : menuClass} >Dashboard</p>
              </Link>
            </li>
            <li>
            <Link style={{ textDecoration: "none" }} to="/orders" onClick={() => handleMenuclick(1)}>
                <p className={selectedMenu ===1 ? activemenuClass : menuClass} >Orders</p>
              </Link>
            </li>
            <li>
            <Link style={{ textDecoration: "none" }} to="/holdings" onClick={() => handleMenuclick(2)}>
                <p className={selectedMenu ===2 ? activemenuClass : menuClass} >Holdings</p>
              </Link>
            </li>
            <li>
            <Link style={{ textDecoration: "none" }} to="/positions" onClick={() => handleMenuclick(3)}>
                <p className={selectedMenu ===3 ? activemenuClass : menuClass} >Positions</p>
              </Link>
            </li>
            <li>
            <Link style={{ textDecoration: "none" }} to="/funds" onClick={() => handleMenuclick(4)}>
                <p className={selectedMenu ===4 ? activemenuClass : menuClass} >Funds</p>
              </Link>
            </li>
            <li>
            <Link style={{ textDecoration: "none" }} to="/apps" onClick={() => handleMenuclick(5)}>
                <p className={selectedMenu ===5 ? activemenuClass : menuClass} >Apps</p>
              </Link>
            </li>
          </ul>
          <hr />
          <div className="profile">
            <div className="avatar">ZU</div>
            <p className="username">USERID</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
