export default function Menubutton({buttontext,toggle}){
    return(
        <>
            <button onClick={toggle} className="button">{buttontext}</button>
        </>
    )
}