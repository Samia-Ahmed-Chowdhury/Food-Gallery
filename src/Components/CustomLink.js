import React from 'react';
import { Link, useMatch, useResolvedPath } from "react-router-dom";

const CustomLink = ({children, to, ...props}) => {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });
    
    return (
        <div>
            <Link
                style={{ color: match ? "#D31B27": "black"}}
                to={to}
                {...props}
            >
                {children}
            </Link>
        </div>
    );
};


export default CustomLink;