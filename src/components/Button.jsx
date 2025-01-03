export default function Button({children}){
    return <button className="px-4 py-2 text-xs md:text-base rounded-md bg-teal text-stone-beige hover:bg-cyan-700 hover:text-beige">
    {children}
</button>
}