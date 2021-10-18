const __CNPJ = document.getElementById("txtCnpj")

__CNPJ.setAttribute("onkeyup", "mask('##.###.###/####-##',this,event,true)")
__CNPJ.setAttribute("maxlength", "18")

const __ARR_ID = ["txtNome", "txtEmail", "cboCidade", "txtSenha", "txtCnpj", "txtConfirmaSenha", "txtTel", "txtCel", "politicas"]

__ARR_ID.forEach((item, index) => {
    if(document.getElementById(`${item}`)){
        document.getElementById(`${item}`).setAttribute("required", "required")
    }
})

var displayGreenToFilled = "#84B082"
var displayRedToUnfilled = "#B21E35"

function changeBorderColors(t){
	var l = t.value
	var m = l.length
	var x = t.maxLength
	if(m==0){
		t.style.borderColor=""
		t.style.backgroundColor=""
	}
	else if(m<x){
		t.style.borderColor = displayRedToUnfilled
	}else{
		t.style.borderColor = displayGreenToFilled
	}
}

function mask(m,t,e,c){
	var cursor = t.selectionStart
	var texto = t.value
	
	texto = texto.replace(/\D/g,'')
	
	var l = texto.length
	var lm = m.length
	
	if(window.event) {                  
	    id = e.keyCode
	} else if(e.which){                 
	    id = e.which
	}
	cursorfixo = false
	
	if(cursor < l)cursorfixo=true
	var livre = false
	
	if(id == 16 || id == 19 || (id >= 33 && id <= 40))livre = true
 	
	ii=0
 	mm=0
 	
	 if(!livre){
	 	if(id!=8){
		 	t.value=""
		 	j=0
		 	for(i=0;i<lm;i++){
		 		if(m.substr(i,1)=="#"){
		 			t.value+=texto.substr(j,1)
		 			j++
		 		}else if(m.substr(i,1)!="#"){
		 			t.value+=m.substr(i,1)
		 		}
		 		if(id!=8 && !cursorfixo)cursor++
		 		if((j)==l+1)break
		 		
		 	} 	
	 	}
	 	if(c)changeBorderColors(t)
 	}
 	if(cursorfixo && !livre)cursor--
 	t.setSelectionRange(cursor, cursor)
}


var password = document.getElementById("txtSenha")
var confirm_password = document.getElementById("txtConfirmaSenha")

const STRONG_PASSWORD = () => {
	const REGEX_PASSWORD = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{6,}$/
	
	if (REGEX_PASSWORD.test(password.value) == false) { 
		password.style.borderColor = displayRedToUnfilled
		const __MESSAGE = document.getElementById("message-password")
		__MESSAGE.innerHTML = `
			<p style="color:${displayRedToUnfilled}; width: 17rem; font-size: .7rem; margin: 0">
				Senha fraca - Use letras maiúsculas, minúsculas, números e caracteres($*&@#)
			</p>
		`
	} else {
		password.style.borderColor = displayGreenToFilled
		const __MESSAGE = document.getElementById("message-password")
		__MESSAGE.innerHTML = `
			<p style="color:${displayGreenToFilled}; font-size: .7rem; margin: 0">
				Senha forte
			</p>
		`
	}
	
}

const VALIDATE_PASSWORD = () => {
  if(password.value != confirm_password.value) {
    confirm_password.style.borderColor = displayRedToUnfilled
  } else {
    confirm_password.style.borderColor = displayGreenToFilled
  }
}

password.onchange = VALIDATE_PASSWORD
confirm_password.onkeyup = VALIDATE_PASSWORD
password.onkeyup = STRONG_PASSWORD

// VALIDAÇÃO NOME
const __NAME = document.getElementById('txtNome')

__NAME.setAttribute("onchange", "VALIDATE_NAME()")

const VALIDATE_NAME = () => {

	const x = document.getElementById("txtNome")
	x.value = x.value.toUpperCase()

	const regexNumber =  /^[0-9$*&@#!%()+=/-]/gm
	var stringToArray = x.value.split('')
	
	stringToArray.forEach((item, index) => {
		stringToArray[index] = item.replaceAll(regexNumber, '')
	})

	x.value = stringToArray.toString().replaceAll(',', '')
}

__NAME.onkeyup = VALIDATE_NAME