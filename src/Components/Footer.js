import React from "react";
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import "../Styles/footer.css";

 const Footer =()=>{
    return (
        <div className="footer">
            <div className="socialMedia">
                <a href="https://www.facebook.com/le2met.setti" target="_blank">
                <FacebookIcon/>
                </a>
                <a href="https://wa.me/+96170660069" target="_blank">
                <WhatsAppIcon/>
                </a>
                <a href="https://www.instagram.com/le2met.setti/" target="_blank">
                <InstagramIcon/>
                </a>
                
            </div>
            <p> &copy; 2023 Nour.H</p>
        </div>
    )
 }

 export default Footer;