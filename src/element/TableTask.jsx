import { useState } from 'react';
import './style.css';
import { Task } from './Task';
import { CenterExpanded } from '../component/CenterExpanded';
import { FormTache } from '../component/FormTache';

class Tache{
    nom;
    date = new Date();
    constructor(nom){
        this.nom = nom;
    }

    getDate(){
        // console.log(`${String(this.date.getHours)} : ${this.date.getMinutes} : ${String(this.date.getSeconds)}`)
        // return `${this.date.getHours} : ${this.date.getMinutes} : ${this.date.getSeconds}`;
    }
}



export function TableTask({title}){

    let [visible,setVisible] = useState(false);
    let[taches,setTaches]=useState([new Tache("talla"),new Tache("talla")]);
    let ajouterTache = (nomTache)=>{
        setTaches([...taches,new Tache(nomTache)]);
        console.log(taches);
    }

   return <>
        {visible? 
                <CenterExpanded>
            <FormTache setVisible={setVisible} ajouterTache={ajouterTache}></FormTache>
        </CenterExpanded>:null}

        <div className="table">
            <div className="title">
                {title}
            </div>
            <div className="items">
                {taches.map( (tache)=>(<Task tache={tache} />))}
            </div>
            <div className="options">
                <div className="btn-create-task"   onClick={()=>setVisible(!visible)}>
                    + ajouter une tache 
                </div>
            </div>
        </div>    
    </>

}