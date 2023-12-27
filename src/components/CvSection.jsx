/* eslint-disable react/prop-types */
import { FaDeleteLeft } from "react-icons/fa6";
import { MdModeEditOutline } from "react-icons/md";


export default function CvSection({header, fields, label, onEdit, onDelete}) {

    const formatDate = (dateString) => {
        const options = { year: '2-digit', month: 'short'}
        return new Date(dateString).toLocaleDateString('en-US', options)
    };
    return(
        <div className="cv-section">
            <p className='section-header'>{header}</p>
            <div className="cv-items-container">
                {
                    [...fields].sort((a, b) => new Date(b.endDate) - new Date(a.endDate))
                    .map( f => {
                        const startDate = formatDate(f.startDate);
                        const endDate = formatDate(f.endDate)
                        return(
                            <div className='cv-item' key={f.id}>
                                <div className="cv-item-header">
                                    <p className="cv-item-title">{f[label]}</p>  
                                    <p className="cv-item-date">({startDate} - {endDate})</p>
                                </div>
                                <div className='cv-item-description'>
                                    <p >{f.description}</p>
                                </div>
                                <MdModeEditOutline className="cv-item-icon" onClick={() =>onEdit(f.id, label)}/>
                                <FaDeleteLeft className="cv-item-icon" onClick={() =>onDelete(f.id, label)}/>
                            </div> 
                        )
                    })
                }
            </div>
        </div>
    )
}