export function Task({tache}){
    let style  = tache.priorite == 1 ? "simple" : tache.priorite == 2 ? "moyen" :  "important"
        return <div className={"item " + style}  style={{color:"white",}}>
            <div className="header-item">
                <input type="checkbox" name="" id="" /> 
                <div className="title-item" >
                    {tache.nom}
                </div>
            </div>

        {/* <div className="info">
            <div className="heure"> {tache.date} </div>
        </div> */}
        <div className="info">
            <div className="heure">
                {tache.getDate( )}
            </div>
        </div>
    </div>
}