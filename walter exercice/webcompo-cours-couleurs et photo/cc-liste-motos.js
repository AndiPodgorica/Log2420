class CcListeMotos extends CcListeVehicules {

    constructor() {
    super(); //heriter les attributs et methodes de HTMLElement
    super.vehicules= [
        {
            marque: 'CSC',
            modele: 'City Slicker',
            annee: '2019',
            photo: 'assets/Zero-FX.png'
        }, 
        {
            marque: 'Zero',
            modele: 'FX',
            annee: '2020',
            photo: 'assets/Zero-FX.png'
        },
        {
            marque: 'Cake',
            modele: 'Kalk&',
            annee: '2020',
            photo: 'assets/Zero-FX.png'
        },
        {
            marque: 'Evoke',
            modele: 'Urban',
            annee: '2020',
            photo: 'assets/Zero-FX.png'
        },
        {
            marque: 'Emflux',
            modele: 'One',
            annee: '2020',
            photo: 'assets/Zero-FX.png'
        },{
            marque: 'Harey Davidson',
            modele: 'LiveWire',
            annee: '2019',
            photo: 'assets/Zero-FX.png'
        }
    ]; 

    }


}//fin de la classe
        
//registre de la classe en dehors de la classe
window.customElements.define('cc-liste-motos', CcListeMotos); // (tag , instance)