import {useState} from 'react'
import '../styles/App.css'
import ContactForm from './ContactForm'
import CV from './Cv.jsx'
import ArrayInputForm from './ArrayInputForm.jsx';

let nextId = 2;

const fakeEducationArray = [
  {
    id: 0,
    institution: "University of Fictional Studies",
    description: "Bachelor's in Imaginary Sciences",
    startDate: "2018-09-01",
    endDate: "2022-06-30"
  },
  {
    id: 1,
    institution: "Fictional Tech Institute",
    description: "Master's in Virtual Engineering",
    startDate: "2022-09-01",
    endDate: "2024-06-30"
  }
];

const fakeExperienceArray = [
  {
    id: 0,
    company: "Tech Innovators Inc.",
    description: "Senior Software Engineer",
    startDate: "2016-07-01",
    endDate: "2020-12-31"
  },
  {
    id: 1,
    company: "Global Solutions Co.",
    description: "Lead Frontend Developer",
    startDate: "2021-01-01",
    endDate: "2023-06-30"
  }
];

function App() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const [experience, setExperience] = useState(fakeExperienceArray);
  const [education, setEducation] = useState(fakeEducationArray);

  function handleNameChange(e){
    setName(e.target.value);
  }

  function handleEmailChange(e){
    setEmail(e.target.value);
  }
  
  function handlePhoneChange(e){
    setPhone(e.target.value);
  }

  function handleExperienceSubmit(e, company, description, startDate, endDate) {
    e.preventDefault();
    setExperience(
      [
        ...experience,
        {
          id: nextId++,
          company: company,
          description: description,
          startDate: startDate,
          endDate: endDate
        }
      ]
    )
  }

  function handleEducationSubmit(e, institution, description, startDate, endDate) {
    e.preventDefault();
    setEducation(
      [
        ...education,
        {
          id: nextId++,
          institution: institution,
          description: description,
          startDate: startDate,
          endDate: endDate
        }
      ]
    )
  }

  function handleDelete(recordId, label) {
    if (label === 'company') {
      setExperience(experience.filter(item => item.id !== recordId))
    }

    if (label === 'institution') {
      setEducation(education.filter(item => item.id !== recordId))
    }
  }

  return (
      <div className='main-container '>
        <header className="header">
          <h1><span className='h1-capital'>C</span>reate <span className='h1-capital'>V</span>itae</h1>
        </header>
        <section className="editorForm">
          <h2>Editor</h2>
          <ContactForm 
            name={name} 
            email={email} 
            phone={phone} 
            onNameChange={handleNameChange} 
            onEmailChange={handleEmailChange}
            onPhoneChange={handlePhoneChange}
          />
          <ArrayInputForm
            title="Experience"
            header="Company"
            onSubmit= {handleExperienceSubmit}
          />
          <ArrayInputForm
            title="Education"
            header="Institution"
            onSubmit= {handleEducationSubmit}
          />


        </section>
        <section className="cv">
          <CV 
            name={name}
            email={email}
            phone={phone}
            experience={experience}
            education={education}
            onDelete={handleDelete}
          />
        </section>
      </div>
  )
}

export default App
 