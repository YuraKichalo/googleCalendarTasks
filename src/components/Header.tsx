import React from 'react';

import AuthBtn from "./AuthBtn";

const Header: React.FC = () => {
    return (
        <div className='main-header'>
            Tasks tracker
            <AuthBtn />
        </div>
    );
};

export default Header;