const SELECT_CURSO = document.getElementById("select-curso");
const ARR = ["Gestão da T.I", "Secretariado", "Gestão Comercial", "EAD - Gestão Empresarial"];
             
for(var i = 0; i < ARR.length; i++) {
    const OPTION = document.createElement("option")
    const TXT = document.createTextNode(ARR[i]);
    
    OPTION.appendChild(TXT);
    OPTION.setAttribute("value", ARR[i]);
    SELECT_CURSO.insertBefore(OPTION, SELECT_CURSO.lastChild);
}

// quantidade de vagas
function increaseValue() {
    var value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 1 : value;
    value++;
    document.getElementById('number').value = value;
  }
  
  function decreaseValue() {
    var value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 1 : value;
    value < 1 ? value = 1 : '';
    value--;
    document.getElementById('number').value = value;
  }