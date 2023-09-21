class CcListeVoitures extends CcListeVehicules {

    constructor() {
    super(); //heriter les attributs et methodes de HTMLElement
    super.vehicules= [
        {
            marque: 'Hyudai',
            modele: 'IONIQ',
            annee: '2020',
            photo: 'assets/ONIQ-Electric.png'
        }, 
        {
            marque: 'Nissan',
            modele: 'LEAF',
            annee: '2019',
            photo: 'assets/ONIQ-Electric.png'
        },
        {
            marque: 'Tesla',
            modele: 'Model 3',
            annee: '2020',
            photo: 'assets/ONIQ-Electric.png'
        },
        {
            marque: 'Toyota',
            modele: 'Mirai',
            annee: '2020',
            photo: 'assets/ONIQ-Electric.png'
        },
        {
            marque: 'Chevrolet',
            modele: 'Bolt EV',
            annee: '2020',
            photo: 'assets/ONIQ-Electric.png'
        },
        {
            marque: 'Kia',
            modele: 'Niro EV',
            annee: '2020',
            photo: "assets/ONIQ-Electric.png"
        }
    ]; 

    }


}//fin de la classe
        
//registre de la classe en dehors de la classe
window.customElements.define('cc-liste-voitures', CcListeVoitures); // (tag , instance)