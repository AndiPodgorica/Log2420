function openPage(pageName,buttonId, styleActivated) {
  var i, tabcontent;
  tabcontent = document.getElementsByClassName("tabcontent");
  navbarButton = document.getElementsByClassName('navbarButton');
  navbarButtonHorizontal = document.getElementsByClassName('navbarButtonHorizontal');
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
    navbarButton[i].style.border = 'none';
    navbarButtonHorizontal[i].style.border = "none";
    navbarButtonHorizontal[i+4].style.border = "none";
    
  }

  document.getElementById(pageName).style.display = "block";
  
  if(styleActivated){
    if(window.innerWidth > 1200 || window.innerWidth <= 575){
      document.getElementById(buttonId).style.borderBottom = '3px solid white';
    }
    else if(window.innerWidth < 1200 && window.innerWidth > 575){
      document.getElementById(buttonId).style.borderLeft = '3px solid white';
    }
  }
}

function openLink(){
  openPage('Reglement', 'reglementsButtonHorizontal', false);
}
  



function checkElements(){ 
  var newAccountSuccess = true;
  var name = document.getElementById('name');
  var userName= document.getElementById('username');
  var passwordConfirmationElement = document.getElementById('passwordConfirmation');
  var passwordElement = document.getElementById('passwordValue'); 
  var passwordName = document.getElementById('passwordName');
  var passwordNameConfirmation = document.getElementById('passwordNameConfirmation');
  var checkbuttonElement = document.getElementById('checkedElement');
  var checkSelectionElement = document.getElementById('checkSelection');
  newAccountSuccess = checkPasswordMatch(passwordConfirmationElement, passwordElement, passwordName, passwordNameConfirmation,checkbuttonElement, checkSelectionElement); 
  if (newAccountSuccess) {
    sendServerInformation(name,userName,passwordElement);
    clearFields(name, username, passwordElement, passwordConfirmation,checkbuttonElement);
    btnInscription();
  }
}

function sendServerInformation(name, username, passwordElement) {
  var accountData = JSON.stringify({ name: (name.value).toString(), email: (username.value).toString(), password: (passwordElement.value).toString() });
  var serverConnection = new XMLHttpRequest();
  serverConnection.open("POST", "http://127.0.0.1:3000/", true);
  serverConnection.setRequestHeader('Content-Type', 'text/plain');
  serverConnection.send(accountData);
}

function btnConnecter(){
  var motDePasse = document.getElementById('motDePasse');
  motDePasse.style.borderBottom = "5px solid #ff4e62";
  var text = "An incorrect password has been entered";
  document.getElementById("error").innerHTML = text;
}


function btnInscription(){
  var modal = document.getElementById("modalInscription");
  modal.style.display = "block";
}

function closeOk(){
  var modal = document.getElementById("modalInscription");
  modal.style.display = "none";
  openPage('Mission','missionButton');
}

function clearFields(name,username, password,passwordConfirmation,checkedElement){
  name.value = "";
  username.value = "";
  password.value = "";
  passwordConfirmation.value = "";
  checkedElement.checked = false;
}

function checkPasswordMatch(passwordConfirmationElement, passwordElement, passwordName, passwordNameConfirmation,checkbuttonElement, checkSelectionElement) {
  if (passwordConfirmationElement.value !== passwordElement.value || checkbuttonElement.checked === false) {
    passwordName.style.borderBottom = '5px solid #ff4e62';
    passwordNameConfirmation.style.borderBottom = '5px solid #ff4e62';
    checkSelectionElement.style.borderBottom = '5px solid #ff4e62'; 
    newAccountSuccess = false;
    return false;
  }
  else{  
    passwordName.style.border = 'none';  
    passwordNameConfirmation.style.border = 'none';
    checkSelectionElement.style.borderBottom = 'none';  
    return true;
    } 
}

function myBtnOnclick(){
  var modal = document.getElementById("myModal");
  modal.style.display = "block";
}

function closeOnClick(){
  var modal = document.getElementById("myModal");
  modal.style.display = "none";
  var motDePasse = document.getElementById('motDePasse');
  motDePasse.style.borderBottom = "none";
  document.getElementById("error").innerHTML = "";
  clearFieldsModal();
}

function clearFieldsModal(){
  var inputStyle = document.getElementsByClassName('modalInput');

  for (i = 0; i < inputStyle.length; i++) {
    inputStyle[i].value = "";
  }
}

