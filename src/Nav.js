import "./styling/Header.css";
import React from "react";

function Header() {
    return(
        <header>
<nav>
    <img src="./aim.jpg" alt="logo-pic" className="nav-logo"/>
    <ul className="nav-list">
        <li><a href="#">Work</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
    </ul>
</nav>
        </header>
    )
};

export default Header;

// export default function Header() {
//     return(
//         <>
// <nav>
//     <img src="./aim.jpg" alt="logo-pic" className="nav-logo"/>
//     <ul className="nav-list">
//         <li>Work</li>
//         <li>About</li>
//         <li>Contact</li>
//     </ul>
// </nav>
//         </>
//     )
// };

