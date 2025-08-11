import { useState } from "react";

export function FormTache({tache,setTache,setVisible,ajouterTache}){
    let [nom,setNom] = useState('');
    let [priorite,setPriorite] = useState(1);
    function ajouter(){
        if(nom.trim().length != 0 ){
            ajouterTache(nom,priorite);
            setVisible(false);
        }else{
            console.log(nom.trim)
        }
    }

    return <div className="form">
        <table border={2} align="center">
            <tr>
                <td colSpan={2} height={80} >
                    <textarea name="" id="" value={nom} style={{height:"100%"}}  onChange={(e)=>setNom(e.target.value)} placeholder="entrer la tache">
                         
                    </textarea>
                </td>
            </tr>
            <tr align="center">
                <td colSpan={"2"}>
                    <select name="" id="" value={priorite} onChange={(e)=>{setPriorite(e.target.value)}}>
                        <option value={1}>simple</option>
                        <option value={2}>moyen</option>
                        <option value={3}>important</option>
                    </select>
                </td>
            </tr>
            <tr>
                <td align="center"><button onClick={ajouter}>ajouter</button></td>
                <td align="center"><button onClick={()=>setVisible(false)}>annuler</button></td>
            </tr>
        </table>

        
    </div>
}