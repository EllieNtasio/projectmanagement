import { forwardRef } from "react";

const Input= forwardRef( function Input({label,textarea, ...props},ref){
    const classes = "w-full p-1 border-b-2  rounded-sm border-sky-950 bg-zinc-100 text-stone-800 focus:outline-none focus:border-navy";
    return <p className="flex flex-col gap-1 my-4">
        <label className="text-sm font-bold uppercase text-sky-950">{label}</label>
        {textarea ? <textarea ref={ref} className={classes} {...props}/> : <input ref={ref} className={classes} {...props}/>}
    </p>
});

export default Input;