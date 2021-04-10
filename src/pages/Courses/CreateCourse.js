import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import axios from 'axios'
import './CreateCourse.css'
const CreateCourse = (props) =>{
    const [course, setCourse] = useState(
        {
            course_name: "", course_description: "", author: props.author, video: "", slug: "", goals: ['g', 'hi'], concepts: []
        }
    )
    const [showGoal, setShowGoal] = useState(false)
    const [showConcept, setShowConcept] = useState(false)
    const [goal, setGoal] = useState("")
    const [concept, setConcept] = useState("")

    const handleChange = (e) =>{
        const {name, value } = e.target
        if(name==="goal"){
            setGoal(value)
        }else if(name==="concept"){
            setConcept(value)
        }else{
            console.log(showGoal)
            var changedCourse = {...course}
            changedCourse[`${name}`] = value        
            setCourse(changedCourse)
        }
    }
    const handleAdd = (e)=>{
        const {name} = e.target
        if(name==="goal"){
            var Goal = [...course.goals, goal]
            var changedCourse = {...course}
            changedCourse[`${name}`] = Goal       
            setCourse(changedCourse)
            setGoal("")
            setShowGoal(false)
        }else if(name==="concept"){
            var Concept = [...course.goals, concept]
            var changedCourse = {...course}
            changedCourse[`${name}`] = Concept      
            setCourse(changedCourse)
            setConcept("")
            setShowConcept(false)
        }
    }
    const handleSubmit = async() =>{
        try{
            const {data} = await axios.post('https://lms-seg.herokuapp.com/api/teacher/createCourse', course)
            console.log(data)
        }catch(e){
            console.log(e)
        }
    }
    
    return(
        <>
            <div className="Form">
                <form>
                    <div>
                        <label><h2>Course name</h2></label><br/>
                        <input type="text" className = "form-control" name="course_name" value={course.course_name} onChange={handleChange}/>
                    </div>
                    <div className="course-desc">
                        <label><h2>Course description</h2></label><br/>
                        <textarea type="text" name="course_description" value={course.course_description} onChange={handleChange}/>
                    </div>
                    <div>
                        <label><h2>Video</h2></label><br/>
                        <input type="url" className = "form-control" name="video" value={course.video} onChange={handleChange}/>
                    </div>
                    <div>
                        {/* <button onClick={()=>setShowGoal(true)}>+</button>
                        {
                            showGoal ? 
                                (<>
                                    <input type="text" name="goal" value={goal} onChange={handleChange}/>
                                    <button onClick={handleAdd} name="goal">Add</button>
                                </>) : 
                                (<></>)
                        }

                        {
                            course.goals.map((goal) => (
                                <div key={goal}>
                                    {goal}
                                </div>
                            ))
                        } */}

                    </div>
                    <div>
                        {/* <button onClick={()=>setShowConcept(true)}>+</button>
                        {
                            showConcept ? 
                                (<>
                                    <input type="text" name="concept" value={concept} onChange={handleChange}/>
                                    <button onClick={handleAdd} name="concept">Add</button>
                                </>) : 
                                (<></>)
                        }

                        {
                            course.concepts.map((concept) => (
                                <div key={concept}>
                                    {concept}
                                </div>
                            ))
                        } */}

                    </div>
                    <Link to="/teacherdashboard">
                    <button style={{backgroundColor: "#c21a1a"}}>
                        Cancel
                    </button>
                    </Link>

                    <button onClick={handleSubmit}>
                        Add Course
                    </button>
                </form>
            </div>
        </>
    )
    

}

export default CreateCourse
