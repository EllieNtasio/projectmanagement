import noProjectImage from "../assets/no-projects.png" 

export default function NoProjectSelected(){
    return <div className="mt-24 text-center  w-2/3">
        <img src={noProjectImage} alt="An empty task list" className="w-16 object-contain mx-auto"/>
        <h2 className="text-xl font-bold text-sky-950 my-4">No Project Selected</h2>
        <p className="text-navy  mb-4">Select a project or start a new one!</p>
        <p className="mt-8">
            <button className=" px-6 py-2 rounded-md bg-navy text-beige hover:bg-teal">
                Create New Project
            </button>
        </p>
    </div>
}