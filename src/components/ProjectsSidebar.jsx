export default function ProjectsSidebar({ onStartAddProject, projects, onSelectProject, selectedProjectId }) {
    return (
        <aside className="w-1/3 px-8 py-16 bg-navy text-beige md:w-72 rounded-r-xl">
            <h2 className="mb-8 font-bold uppercase md:text-xl text-beige">Your Projects</h2>
            <div>
                <button
                    className="px-4 py-2 text-xs md:text-base rounded-md bg-teal text-stone-beige hover:bg-cyan-700 hover:text-beige transition-all duration-300"
                    onClick={onStartAddProject}
                >
                    + Add Project
                </button>
            </div>
            <ul className="mt-8">
                {projects.map(project => {
                    let cssClasses = "w-full text-left px-4 py-2 rounded-md my-1 text-beige transition-all duration-300";

                    if (project.id === selectedProjectId) {
                        cssClasses += " bg-cyan-300 text-navy";
                    } else {
                        cssClasses += " hover:bg-sky-950 hover:text-beige";
                    }

                    return (
                        <li key={project.id}>
                            <button
                                className={cssClasses}
                                onClick={() => onSelectProject(project.id)}
                            >
                                {project.title}
                            </button>
                        </li>
                    );
                })}
            </ul>
        </aside>
    );
}
