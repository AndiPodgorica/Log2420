class CcListeVehicules extends HTMLElement {
    constructor() {
        super();//heriter les attributs et methodes de HTMLElement

        //obtient le shadow root pour recevoir le code encapsule'
        this._root = this.attachShadow({ mode: 'open' });

        //proprietes
        this.affiche_marque = new Boolean("false");
        this.affiche_modele = new Boolean("false");
        this.affiche_annee = new Boolean("false");
        this.affiche_photo = new Boolean("false");
        this.couleur = "";
        this.vehicules = [];
    }

    //lorsque connecte'
    connectedCallback() {
        //defini le code encapsule'
        this._root.innerHTML = `
        <style>
        .grid-container {
            display: grid;
            grid-template-columns: 25% 75%;
            padding: 10px;
          }
          .grid-item {
            font-size: 30px;
            text-align: center;
            font-family: Arial, Helvetica, sans-serif;
          }
            .frame {
                //background-color: #33b5e5;
                color: #ffffff;
                margin: 5px;
                padding: 5px;
            }
            h1, h2 {
                color:white;
            }
        </style>
        <template id="template-vehicule" class="grid-container">
            <div class="grid-container frame">
                <div class="grid-item"  id="cadre">
                     <h2 id="marque"></h2>
                      <p id="modele"></p>
                      <p id="annee"></p>
                 </div>

                <div class="grid-item" >
                     <img id="photo">
                </div>
            
            </div>


        </template>
        <div id="result"></div>
    `;
        //cree les variables avec le fragment du code encapsule'
        this.templateContent = this._root.querySelector('#template-vehicule').content;
        
        this.result = this._root.querySelector('#result');

        this.vehicules.map(vehicule => {
            //clone le templateContent
            const clone = document.importNode(this.templateContent, true);
            //met 'a jour le clone avec les donnees de chaque vehicule si demande'
            if (this.affiche_marque === "true") {
                clone.querySelector('#marque').innerHTML = vehicule.marque;
            }
            if (this.affiche_modele === "true") {
                clone.querySelector('#modele').innerHTML = vehicule.modele;
            }
            if (this.affiche_annee === "true") {
                clone.querySelector('#annee').innerHTML = vehicule.annee;
            }
            if (this.affiche_photo === "true") {
                clone.querySelector('#photo').setAttribute("src", vehicule.photo);
                clone.querySelector('#photo').setAttribute("width", "100%" );  
                clone.querySelector('#photo').setAttribute("height", "100%" ); 
            }
            clone.querySelector('#cadre').setAttribute("style", "background-color:" + this.couleur + ";");
            //ajoute le clone au shadow DOM
            this.result.appendChild(clone);
        });
    }


    static get observedAttributes() {
        return ["vehicules", "affiche_marque", "affiche_modele", "affiche_annee", "affiche_photo", "couleur"];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        //this._root.getElementById(name).innerHTML=newValue;   
        console.log('attributCHanged', name, oldValue, newValue);

        if (name === 'vehicules') {
            this.vehicules = newValue;
        }
        if (name === 'affiche_marque') {
            this.affiche_marque = newValue;
        }
        if (name === 'affiche_modele') {
            this.affiche_modele = newValue;
        }
        if (name === 'affiche_annee') {
            this.affiche_annee = newValue;
        }
        if (name === 'affiche_photo') {
            this.affiche_photo = newValue;
        }
        if (name === 'couleur') {
            this.couleur = newValue;
        }

    }/**/



}//fin de la classe

//registre de la classe en dehors de la classe
window.customElements.define('cc-liste-vehicules', CcListeVehicules); // (tag , instance)






