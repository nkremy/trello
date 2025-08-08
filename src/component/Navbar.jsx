import { BarreRechercher } from "./BarreRecherche";

import './style.css';

export function Navbar(){
   return <header>
        <h1>trello</h1>
        <div className="box-create-reseach">
            <BarreRechercher/>
            <button>Create</button>
        </div>
        <div className="options">

        </div>
    </header>
}