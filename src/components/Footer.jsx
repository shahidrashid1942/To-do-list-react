import React from "react";

function Footer() {

const date = new Date().getFullYear();

    return (
        < div className="footer" >
            <a href="https://github.com/shahidrashid1942">
                <p>&#169;{date} Shahid Rashid</p>
            </a>
        </div >
    )
}

export default Footer;