import { useState } from "react";

export function FormTache({tache,setTache}){
    let [nom,setNom] = useState('');
    function ajouter(){
        setTache(tache.push());
    }

    return <div className="form">
        <table border={2} align="center">
            <tr>
                <td colSpan={2}  >
                    <textarea name="" id="" value={nom} placeholder="entrer la tache">
                        
                    </textarea>
                </td>
            </tr>
            <tr align="center">
                <td colSpan={"2"}>
                    <select name="" id="">
                        <option>simple</option>
                        <option>moyen</option>
                        <option>important</option>
                    </select>
                </td>
            </tr>
            <tr>
                <td align="center"><button>ajouter</button></td>
                <td align="center"><button>annuler</button></td>
            </tr>
        </table>

        
    </div>
}