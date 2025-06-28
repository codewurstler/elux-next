import React from 'react';
import {SocialIcon} from "react-social-icons";
import * as motion from "motion/react-client";

const ContactModal = () => {
    return (
        <dialog id="contactModal" className="modal">
            <div className="modal-box">
                <h3 className="font-bold text-lg">Contact me now!</h3>

                <div className="flex flex-col justify-center w-100 gap-8 mt-8">
                    <div className="btn-wrapper text-center">
                        <button className="btn btn-neutral btn-lg rounded-lg">contact@elux.com</button>
                    </div>
                    <ul className="menu menu-horizontal">
                        <motion.li>
                            <SocialIcon url="www.instagram.com" borderRadius="8px" className="mx-2"/>
                        </motion.li>
                        <motion.li>
                            <SocialIcon url="www.tiktok.com" borderRadius="8px" className="mx-2"/>
                        </motion.li>
                    </ul>
                </div>
                <div className="modal-action">
                    <form method="dialog">
                        <button className="btn">Close</button>
                    </form>
                </div>
            </div>
        </dialog>
    );
};

export default ContactModal;