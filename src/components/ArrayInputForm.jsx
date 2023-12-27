/* eslint-disable react/prop-types */
import {useState, useEffect} from 'react';
import { IoIosArrowDropdownCircle } from "react-icons/io";


export default function ArrayInputForm({title, header, formInputValues, onSubmit, formId, activeFormId, onFormClick, onCancel, isEditMode}) {
    const [headerField, setHeaderField] = useState(formInputValues.header);
    const [description, setDescription] = useState(formInputValues.description);
    const [startDate, setStartDate] = useState(formInputValues.startDate);
    const [endDate, setEndDate] = useState(formInputValues.endDate);

    useEffect(() => {
        // Update local state when formInputValues prop changes
        setHeaderField(formInputValues.header);
        setDescription(formInputValues.description);
        setStartDate(formInputValues.startDate);
        setEndDate(formInputValues.endDate);
    }, [formInputValues]);

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(e, headerField, description, startDate, endDate);
        // Clear the input fields after submitting
        setHeaderField('');
        setDescription('');
        setStartDate('');
        setEndDate('');
      };

    const isFormSelected = activeFormId===formId;

    return(
        <div className='array-form-container container' onClick={()=>onFormClick(formId)}>
            <div className='form-header'>
                <h3>{title}</h3>
                {!isFormSelected && <IoIosArrowDropdownCircle size={21}/>}
            </div>
            {
                isFormSelected && (
                    <form className='input-form' onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="header">{header}</label>
                        <input
                        type="text"
                        id="header"
                        name="header"
                        value={headerField}
                        onChange={(e) => setHeaderField(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="description">Description</label>
                        <textarea
                        id="description"
                        name="description"
                        value={description}
                        cols="40"
                        rows="5"
                        onChange={(e) => setDescription(e.target.value)}
                        />
                    </div>
                    <div className='input-dates-container'>
                        <div className='input-dates'>
                            <label htmlFor="startDate">Start Date</label>
                            <input
                            type="date"
                            id="startDate"
                            name="startDate"
                            value={startDate}
                            onChange={(e) => setStartDate(e.target.value)}
                            />
                        </div>
                        <div className='input-dates'>
                            <label htmlFor="endDate">End Date</label>
                            <input
                            type="date"
                            id="endDate"
                            name="endDate"
                            value={endDate}
                            onChange={(e) => setEndDate(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className='form-buttons'>
                        <button type="submit">{isEditMode ? "Update" : "Add"}</button>
                        {isEditMode && <button className='btn-cancel' onClick={onCancel}>Cancel</button>}
                    </div>
                    </form>
                )
            }
        </div>
    )

}