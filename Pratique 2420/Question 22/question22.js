var donneesJSON = JSON.parse( '{"Elections":[{"name" : "43e élection fédérale", "date" : "21 octobre 2019", "type": "Federal"},{"name" : "Élections générales provinciales", "date" : "1er octobre 2018", "type": "Provincial"},{"name" : "42e élection fédérale", "date" : "19 octobre 2015", "type": "Federal"},{"name" : "Élections générales provinciales", "date" : "7 avril 2014", "type": "Provincial"}],"PartisFederaux":[{"abreviation": "P.L.C", "fullname": "Parti libéral du Canada"},{"abreviation": "P.C.C.", "fullname": "Parti conservateur du Canada"},{"abreviation": "B.Q.", "fullname": "Bloc Québécois"},{"abreviation": "N.P.D.", "fullname": "Nouveau parti démocratique"},{"abreviation": "P.V.C.", "fullname": "Parti vert du Canada"},{"abreviation": "P.P.C.", "fullname": "Parti populaire du Canada"}],"PartisProvinciaux":[{"abreviation": "C.A.Q","fullname": "Coalition avenir Quebec"},{"abreviation": "P.L.Q","fullname": "Parti liberal du Quebec"},{"abreviation": "P.Q","fullname": "Parti quebecois"},{"abreviation": "P.V.Q","fullname": "Parti vert du Quebec"},{"abreviation": "Q.S","fullname": "Quebec solidaire"},{"abreviation": "P.C.Q","fullname": "Parti conservateur du Quebec"},{"abreviation": "P.I.Q","fullname": "Parti pour lindependance du Quebec"}]}');

// creer 2 tableaux
let tabPartisFederaux = donneesJSON.PartisFederaux;
let tabPartisProvinciaux = donneesJSON.PartisProvinciaux;

function tableauPartisFederaux(){
    for(let i =0; i<tabPartisFederaux.length; i++){

    // creer div
    let div_Nom_Et_Abreviation = document.createElement('div');

    // creer p
    let p_abreviation = document.createElement('p');
    let p_nom = document.createElement('p');

    // creer classes à partir des p
    p_abreviation.className = "p_abreviation";
    p_nom.className = "p_nom";

    // mettre les abreviations et nom dans le tableau 1 à 1
    p_abreviation.innerHTML = tabPartisFederaux[i].abreviation;
    p_nom.innerHTML = tabPartisFederaux[i].fullname;

    // ajouter les éléments de p au div
    div_Nom_Et_Abreviation.appendChild(p_abreviation);
    div_Nom_Et_Abreviation.appendChild(p_nom);
}
// ajouter le div à la table
document.getElementById('tablePartisFederaux').appendChild(div_Nom_Et_Abreviation);
} 

function tableauPartisProvinciaux(){
for(let i=0; i<tabPartisProvinciaux; i++){

    let div_Nom_Et_Abreviation = document.createElement('div');
    let p_abreviation = document.createElement('p');
    let p_nom = document.createElement('p');
    p_abreviation.className = "p_abreviation";
    p_nom.className = "p_nom";
    p_abreviation.innerHTML = tabPartisProvinciaux[i].abreviation;
    p_nom.innerHTML = tabPartisProvinciaux[i].fullname;
    div_Nom_Et_Abreviation.appendChild(p_abreviation);
    div_Nom_Et_Abreviation.appendChild(p_nom);
}
document.getElementById('tablePartisProvinciaux').appendChild(div_Nom_Et_Abreviation);
}


function tableauRelierDeuxPartis(){
    this.tableauPartisProvinciaux();
    this.tableauPartisFederaux();
}