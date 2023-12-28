/* eslint-disable react/prop-types */
import '../styles/Cv.css'
import { FaPhoneAlt  } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import CvSection from './CvSection';



export default function Cv({ name, email, phone, experience, education, onEdit, onDelete}) {
    
    return(
        <div className='cv-container'>
            <div className="cv-contact">
                <p className="cv-name">{name ? name:"Joe Blogs"}</p>
                <div>
                    <MdEmail className='secondary-color'/>
                    <p>{email ? email:"joe.blogs@xyz.com"}</p>
                </div>
                <div>
                    <FaPhoneAlt className='secondary-color'/>
                    <p>{phone ? phone:"1234 5678"}</p>
                </div>
                <hr />
            </div>
            <CvSection header="Experience" fields={experience} label="company" onEdit={onEdit} onDelete={onDelete}/>
            <CvSection header="Education" fields={education} label="institution" onEdit={onEdit} onDelete={onDelete}/>
        </div>
    )
}