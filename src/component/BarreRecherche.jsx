import { useState } from 'react';
import loupe from '../images/icons/recherche.png';
import './style.css';
export function BarreRechercher(){
    let [texte,setTexte] = useState();
    console.log(loupe);
    
    return <div className="barre-recherche">
        {/* <img src="loupe" alt="" /> */}
        <input type="text" id='texte_recherche' value={texte}/>
    </div>
}