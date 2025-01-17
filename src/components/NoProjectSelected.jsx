import noProjectImage from "../assets/vecteezy_papers-and-pen_18246157.png" 

import Button from "./Button.jsx"

export default function NoProjectSelected({onStartAddProject}){
    return <div className="mt-24 text-center  w-2/3">
        <img src={noProjectImage} alt="An empty task list" className="w-16 object-contain mx-auto"/>
        <h2 className="text-xl font-bold text-sky-950 my-4">No Project Selected</h2>
        <p className="text-navy  mb-4">Select a project or start a new one!</p>
        <p className="mt-8">
            <Button onClick={onStartAddProject} >
                Create New Project
            </Button>
        </p>
    </div>
}