import { useState } from 'react';
import './style.css';
import { Task } from './Task';

class Tache{
    nom;
    date = new Date();
}

export function TableTask({title}){
    let [tache,setTache] = useState([]);
    return <div className="table">
        <div className="title">
            {title}
        </div>
        <div className="items">
            <Task>dsdsdsd</Task>
            <Task>dsdsdsd</Task>
            <Task>dsdsdsd</Task>
            dfsd
        </div>
        <div className="options">
            <div className="btn-create-task">
                + ajouter une tache 
            </div>
        </div>
    </div>
}