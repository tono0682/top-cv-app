/* eslint-disable react/prop-types */
import '../styles/ContactForm.css'

export default function ContactForm({ name, email, phone, onNameChange, onEmailChange, onPhoneChange }) {
    return(
        <div className='container'>
            <h3>Personal Details</h3>
            <form className='input-form'>
                <div>
                    <label htmlFor="name">Name</label>
                    <input type="text" value={name} onChange={onNameChange} id="name" />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="text" value={email} onChange={onEmailChange}  id="email" />
                </div>
                <div>
                    <label htmlFor="phone">Phone</label>
                    <input type="text" value={phone} onChange={onPhoneChange}  id="phone" />
                </div>
            </form>
        </div>
    )
}


