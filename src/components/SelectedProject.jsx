import Tasks from "./Tasks.jsx";

export default function SelectedProject({project, onDelete,onAddTask,onDeleteTask,tasks}){

    const formattedDate= new Date(project.dueDate).toLocaleDateString('en-US', {
        year: 'numeric',
        month:'short',
        day:'numeric'
    });


    return <div className="w-[35rem] mt-16">
        <header className="pb-4 mb-4 border-b-2 border-stone-300"> 
            <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold text-navy mb-2">{project.title}</h1>
            <button className="text-sky-950 hover:text-navy" onClick={onDelete}>Delete</button>
            </div>
            <p className="mb-4 text-gray-400">{formattedDate} </p>
            <p className="text-gray-700 whitespace-pre-wrap">{project.description}</p>
        </header>
        <Tasks onAdd={onAddTask} onDelete={onDeleteTask} tasks={tasks}/>
    </div>
}