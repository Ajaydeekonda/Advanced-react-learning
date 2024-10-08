
export default function Menuitems({items}){
    return(
        items.map((item)=>{
            return(
                    <button className="button">{item}</button>
                
            )
        })
    )
}