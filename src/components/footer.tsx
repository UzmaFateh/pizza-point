import Image from "next/image";
import logo from "../../public/Screenshot__608_-removebg-preview.png"


export default function Footer() {
    return (
        <div className="main_footer">
    <div className="footer">
        <Image
        src={logo}  alt="" 
        width="250" />
        
    </div>
    <br/>
    <div className="footer_content">
        <div className="footer_content1">
            <p>Welcom to pizzaBite, where passion for acceptional food and 
                genuine hospitality come together, Our story is one of dedication to 
                crafting the perfect burger experience,from sourcing the finest ingredients 
                to delivering unbeatable taste in every bite.</p>
        </div>
        <div className="footer_content2">
            <ul className="sub_footer2_ul">
                <li><a href="">Adress : MG Road, Dubai , UAE</a></li>
                <li><a href="">E-Mail : uzmafateh901@gmail.com</a></li>
            <li >
                <a href="">FaceBook</a>
                <a href="">Instagram</a>
                <a href="">Twitter</a>
                <a href="">Linked-inn</a>
                
            </li>
        </ul>
        </div>
    </div>
    <br/><center><p><a href="#">Back To Top</a></p></center><br/>
    <center>Copyright 2024 Uzma Fateh | All right reserved.</center>
</div>

    );
    }