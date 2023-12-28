import {useState} from 'react'
import '../styles/App.css'
import ContactForm from './ContactForm'
import CV from './Cv.jsx'
import ArrayInputForm from './ArrayInputForm.jsx';
import ColorPicker from './ColorPicker.jsx';

let nextId = 3;



const fakeExperienceArray = [
  {
    id: 0,
    company: "Tech Innovators Inc.",
    description: "Contributed significantly to the development and maintenance of innovative software solutions at Tech Innovators Inc. Collaborated cross-functionally to design and implement robust software architectures, ensuring scalability and reliability. Recognized for outstanding problem-solving skills and technical expertise in successful project deliveries.",
    startDate: "2016-07-01",
    endDate: "2020-12-31"
  },
  {
    id: 1,
    company: "Global Solutions Co.",
    description: "Led front-end development initiatives at Global Solutions Co., driving enhanced user interfaces and experiences through cutting-edge technologies. Managed a dynamic development team, achieving project milestones ahead of schedule. Implemented responsive design principles, resulting in a 20% boost in user engagement.",
    startDate: "2021-01-01",
    endDate: "2023-06-30"
  },
  {
    id: 2,
    company: "Future Robotics Solutions",
    description: "Served as a Robotics Engineer at Future Robotics Solutions, contributing to the development of autonomous robotic systems. Collaborated with cross-functional teams to enhance robotic functionalities, resulting in increased efficiency.",
    startDate: "2018-03-01",
    endDate: "2022-08-31"
  }
];

const fakeEducationArray = [
  {
    id: 0,
    institution: "University of Fictional Studies",
    description: "Earned a Bachelor's in Imaginary Sciences, acquiring a solid foundation in theoretical and practical concepts. Demonstrated strong analytical and problem-solving skills through hands-on projects and collaborative coursework.",
    startDate: "2018-09-01",
    endDate: "2022-06-30"
  },
  {
    id: 1,
    institution: "Fictional Tech Institute",
    description: "Pursued a Master's in Virtual Engineering, gaining expertise in simulation, virtual reality, and immersive technologies. Engaged in impactful research projects focused on real-world applications of virtual engineering.",
    startDate: "2022-09-01",
    endDate: "2024-06-30"
  },
  {
    id: 2,
    institution: "Future Tech Academy",
    description: "Completed a Bachelor's in Quantum Computing, delving into the principles of quantum mechanics and their applications in computing. Executed independent research projects exploring the potential of quantum algorithms.",
    startDate: "2017-09-01",
    endDate: "2021-06-30"
  }
];

const defaultFormInputs = {
  header: "",
  description: "",
  startDate:"",
  endDate:""
}

function App() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [activeFormId, setActiveFormId] = useState(0);
  const [selectedItemId, setSelectedItemId] = useState(null);
  const [arrayFormValues, setArrayFormValues] = useState(defaultFormInputs);
  const [experience, setExperience] = useState(fakeExperienceArray);
  const [education, setEducation] = useState(fakeEducationArray);

  const isEditMode = selectedItemId !== null;

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
    if(isEditMode) {
      const updatedExperience = experience.map((exp)=> {
        if(selectedItemId === exp.id) {
          return (
            {
              id: exp.id,
              company: company,
              description: description,
              startDate: startDate,
              endDate: endDate
            }
          )
        } else {
          return exp
        }
      })
      setExperience(updatedExperience);
      setSelectedItemId(null);
    }

    if(!isEditMode) {
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

  function handleEdit(recordId, label) {
    if (label === 'company') {
      setActiveFormId(1);
      setSelectedItemId(recordId);
      const record = experience.find(exp => exp.id === recordId); 
      setArrayFormValues(prevValues => ({
        ...prevValues,
        header: record.company,
        description: record.description,
        startDate: record.startDate,
        endDate: record.endDate
      }));
    }

    if (label === 'institution') {
      setActiveFormId(2);
      setSelectedItemId(recordId);
      const record = education.find(edu => edu.id === recordId); 
      setArrayFormValues(prevValues => ({
        ...prevValues,
        header: record.institution,
        description: record.description,
        startDate: record.startDate,
        endDate: record.endDate
      }));
    }
  }

  function handleCancelEdit() {
    setSelectedItemId(null);
    setArrayFormValues(defaultFormInputs)
  }

  function handleOpenForm(formId) {
    setActiveFormId(formId);
  }

  return (
      <div className='main-container '>
        <header className="header">
          <h1><span className='h1-capital'>C</span>reate <span className='h1-capital'>V</span>itae</h1>
        </header>
        <section className="editorForm">
          <h2>Editor</h2>
          <ColorPicker/>
          <ContactForm 
            name={name} 
            email={email} 
            phone={phone} 
            onNameChange={handleNameChange} 
            onEmailChange={handleEmailChange}
            onPhoneChange={handlePhoneChange}
            formId = {0}
            activeFormId={activeFormId}
            onFormClick={handleOpenForm}
          />
          <ArrayInputForm
            title="Experience"
            header="Company"
            formInputValues={arrayFormValues}
            onSubmit= {handleExperienceSubmit}
            formId = {1}
            activeFormId={activeFormId}
            onFormClick={handleOpenForm}
            isEditMode={isEditMode}
            onCancel={handleCancelEdit}
          />
          <ArrayInputForm
            title="Education"
            header="Institution"
            formInputValues={arrayFormValues}
            onSubmit= {handleEducationSubmit}
            formId = {2}
            activeFormId={activeFormId}
            onFormClick={handleOpenForm}
            isEditMode={isEditMode}
            onCancel={handleCancelEdit}
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
            onEdit={handleEdit}
          />
        </section>
      </div>
  )
}

export default App
 