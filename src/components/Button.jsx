export default function Button({children,...props}){
    return <button className=" px-6 py-2 rounded-md bg-navy text-beige hover:bg-teal" {...props}>
    {children}
</button>
}