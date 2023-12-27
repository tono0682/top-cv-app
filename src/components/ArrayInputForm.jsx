/* eslint-disable react/prop-types */
import {useState} from 'react'

export default function ArrayInputForm({title, header, onSubmit}) {
    const [headerField, setHeaderField] = useState('');
    const [description, setDescription] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(e, headerField, description, startDate, endDate);
        // Clear the input fields after submitting
        setHeaderField('');
        setDescription('');
        setStartDate('');
        setEndDate('');
      };

    return(
        <div className='array-form-container container'>
            <h3>{title}</h3>
            <form className='input-form' onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="header">{header}</label>
                    <input type="text" id="header" value={headerField} onChange={(e) => setHeaderField(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="description">Description</label>
                    <input type="text" id="description" value={description} onChange={(e) => setDescription(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="startDate">Start Date</label>
                    <input type="date" id="startDate" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="endDate">End Date</label>
                    <input type="date" id="endDate" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
                </div>
                <button type="submit">Add</button>
            </form>
        </div>
    )

}