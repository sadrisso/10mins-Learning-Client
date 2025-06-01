import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer className="footer footer-center bg-[#160929] text-white p-4">
                <aside>
                    <p>Copyright © {new Date().getFullYear()} - Developed by SHOEB DRISSO</p>
                </aside>
            </footer>
        </div>
    );
};

export default Footer;