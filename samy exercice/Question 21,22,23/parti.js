var donneesJSON = '{"Elections":[{"name" : "43e élection fédérale", "date" : "21 octobre 2019", "type": "Federal"},{"name" : "Élections générales provinciales", "date" : "1er octobre 2018", "type": "Provincial"},{"name" : "42e élection fédérale", "date" : "19 octobre 2015", "type": "Federal"},{"name" : "Élections générales provinciales", "date" : "7 avril 2014", "type": "Provincial"}],"PartisFederaux":[{"abreviation": "P.L.C", "fullname": "Parti libéral du Canada"},{"abreviation": "P.C.C.", "fullname": "Parti conservateur du Canada"},{"abreviation": "B.Q.", "fullname": "Bloc Québécois"},{"abreviation": "N.P.D.", "fullname": "Nouveau parti démocratique"},{"abreviation": "P.V.C.", "fullname": "Parti vert du Canada"},{"abreviation": "P.P.C.", "fullname": "Parti populaire du Canada"}],"PartisProvinciaux":[{"abreviation": "C.A.Q","fullname": "Coalition avenir Quebec"},{"abreviation": "P.L.Q","fullname": "Parti liberal du Quebec"},{"abreviation": "P.Q","fullname": "Parti quebecois"},{"abreviation": "P.V.Q","fullname": "Parti vert du Quebec"},{"abreviation": "Q.S","fullname": "Quebec solidaire"},{"abreviation": "P.C.Q","fullname": "Parti conservateur du Quebec"},{"abreviation": "P.I.Q","fullname": "Parti pour lindependance du Quebec"}]}';


function creerConteneurPartisFederaux(){ 
  let partisJson = JSON.parse(donneesJSON);
  let arrayFederaux= partisJson.PartisFederaux;

  let divNomAbreviation = document.createElement('div');
  for(i = 0; i < arrayFederaux.length; i++){
    
    let divAbreviationParti = document.createElement('p');
    let divNomParti = document.createElement('p');

    divAbreviationParti.className = "divAbreviationParti";
    divNomParti.className = "divNomParti";

    divAbreviationParti.innerHTML = arrayFederaux[i].abreviation;
    divNomParti.innerHTML = arrayFederaux[i].fullname;
    
    divNomAbreviation.appendChild(divAbreviationParti);
    divNomAbreviation.appendChild(divNomParti);
  }
  document.getElementById('tablePartisFederaux').appendChild(divNomAbreviation);
}

function creerContenantPartisProvinciaux(){
  let partisJson = JSON.parse(donneesJSON);
  let arrayProvinciaux= partisJson.PartisProvinciaux; 
  let divMyTablePartisProvinciaux = document.createElement('div');
  let divNomAbreviation = document.createElement('div');
  for(i = 0; i < arrayProvinciaux.length; i++){
    let divAbreviationParti = document.createElement('p');
    let divNomParti = document.createElement('p');
    divAbreviationParti.className = "divAbreviationParti"
    divNomParti.className = "divNomParti";
    divAbreviationParti.innerHTML = arrayProvinciaux[i].abreviation;
    divNomParti.innerHTML = arrayProvinciaux[i].fullname;
    divNomAbreviation.appendChild(divAbreviationParti);
    divNomAbreviation.appendChild(divNomParti);
    divMyTablePartisProvinciaux.appendChild(divNomAbreviation);
  }
  document.getElementById('tablePartisProvinciaux').appendChild(divNomAbreviation);


}

function chargerPartis(){
  
  creerConteneurPartisFederaux();

  creerContenantPartisProvinciaux();
}