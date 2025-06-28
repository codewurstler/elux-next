"use client";
import React from 'react';
import * as motion from "motion/react-client";

const NavigationLeft = () => {
    return (
        <motion.ul initial={{ opacity: 0, translateY: 50 }} animate={{ opacity: 1, translateY: 0 }} transition={{delay: 0.75}} className="absolute bottom-6 left-6 menu menu-horizontal bg-white rounded-box">
            <motion.li initial={{ opacity: 0, translateY: 50 }} animate={{ opacity: 1, translateY: 0 }} transition={{delay: 1}}><a>Releases <span className="badge badge-xs badge-warning -ms-1 -mt-2">NEW</span></a></motion.li>
            <motion.li initial={{ opacity: 0, translateY: 50 }} animate={{ opacity: 1, translateY: 0 }} transition={{delay: 1.25}}>
                <button onClick={()=>document.getElementById('contactModal').showModal()}>Contact</button>
            </motion.li>
        </motion.ul>
    );
};

export default NavigationLeft;