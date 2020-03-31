import React from 'react';

function TopMenu(props) {
    const {title,desc} = props;
    
    return (
        
        <li>{title} - {desc}</li>   
        
    );
}      

export default TopMenu;

