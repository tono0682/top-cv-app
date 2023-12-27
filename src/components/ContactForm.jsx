/* eslint-disable react/prop-types */
import '../styles/ContactForm.css'
import { IoIosArrowDropdownCircle } from "react-icons/io";


export default function ContactForm({ name, email, phone, onNameChange, onEmailChange, onPhoneChange, formId, activeFormId, onFormClick }) {

    const isFormSelected = activeFormId===formId;
    
    return(
        <div className='container' onClick={()=>onFormClick(formId)}>
            <div className='form-header'>
              <h3>Personal Details</h3>
              {!isFormSelected && <IoIosArrowDropdownCircle size={21}/>}
            </div>
            {
                isFormSelected &&
                <form className='input-form'>
                    <div>
                        <label htmlFor="name">Name</label>
                        <input type="text" value={name} onChange={onNameChange} id="name" />
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input type="email" value={email} onChange={onEmailChange}  id="email" />
                    </div>
                    <div>
                        <label htmlFor="phone">Phone</label>
                        <input type="tel" value={phone} onChange={onPhoneChange}  id="phone" />
                    </div>
                </form>
            }
        </div>
    )
}


