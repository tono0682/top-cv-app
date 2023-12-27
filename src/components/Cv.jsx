/* eslint-disable react/prop-types */
import '../styles/Cv.css'
import { FaPhoneAlt  } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import CvSection from './CvSection';



export default function Cv({ name, email, phone, experience, education, onDelete}) {
    
    return(
        <div className='cv-container'>
            <div className="cv-contact">
                <p className="cv-name">{name ? name:"Full Name"}</p>
                <div>
                    <MdEmail color="#00a8e8"/>
                    <p>{email ? email:"abc@xyz.com"}</p>
                </div>
                <div>
                    <FaPhoneAlt color="#00a8e8" />
                    <p>{phone ? phone:"1234 5678"}</p>
                </div>
                <hr />
            </div>
            <CvSection header="Experience" fields={experience} label="company" onDelete={onDelete}/>
            <CvSection header="Education" fields={education} label="institution" onDelete={onDelete}/>
        </div>
    )
}