import { useReducer, useRef } from "react";
import Button from "./Button.jsx";
import Input from "./Input.jsx";
import Modal from "./Modal.jsx";

export default function NewProject({onAdd,onCancel}){
    const modal = useRef();
    const title =useRef();
    const description=useRef();
    const dueDate=useRef();

    function handleSave(){
        const enteredTitle=title.current.value;
        const enteredDescription=description.current.value;
        const enteredDueDate=dueDate.current.value;

        if (enteredTitle.trim()=== '' || enteredDescription.trim()==='' || enteredDueDate.trim()===''){
            modal.current.open();
            return;
        }

        onAdd({
        title: enteredTitle,
        description: enteredDescription,
        dueDate: enteredDueDate,

        });

    }

    return (
    <>
    
    <Modal ref={modal} buttonCaption="Close">
    <h2 className="text-xl font-bold text-sky-950 my-4">Invalid Input</h2>
    <p className="text-navy  mb-4">Looks like you forgot to enter a value!</p>
    <p className="text-navy  mb-4">Please make sure you provide a valid value for every input field.</p>
    </Modal>  
    
    <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
            <li><button className="text-sky-950 hover:text-navy" onClick={onCancel}>Cancel</button></li>
            <li><Button onClick={handleSave}>Save</Button></li>
        </menu>
        <div>
            <Input type="text" ref={title} label="Title"/>
            <Input ref={description} label="Description" textarea={true}/>
            <Input type="date" ref={dueDate} label="Due Date"/>
        </div>
    </div>
    </>
    );
}