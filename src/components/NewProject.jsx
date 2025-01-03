import Input from "./Input.jsx";

export default function NewProject(){
    return <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
            <li><button className="text-sky-950 hover:text-navy">Cancel</button></li>
            <li><button className=" px-6 py-2 rounded-md bg-navy text-beige hover:bg-teal">Save</button></li>
        </menu>
        <div>
            <Input label="Title"/>
            <Input label="Description" textarea={true}/>
            <Input label="Due Date"/>
        </div>
    </div>
}