import React from 'react';
import Menu from '../../Components/Menu/Menu';

const Navbar = () => {
    return (
        <div>
            <Menu menus={["home", "conacts"]}/>
        </div>
    )
}

export default Navbar;
