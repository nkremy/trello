export function Task({tache}){
    return <div className="item" style={{color:"white"}}>
        {tache.nom}
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