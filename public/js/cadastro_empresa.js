$("#txtCel").mask("(00) 00000-0000");
$(" #txtTel").mask("(00) 0000-0000");
function validacaoEmail(field) {
    usuario = field.value.substring(0, field.value.indexOf("@"));
    dominio = field.value.substring(field.value.indexOf("@")+ 1, field.value.length);
    
    if ((usuario.length >=1) &&
        (dominio.length >=3) &&
        (usuario.search("@")==-1) &&
        (dominio.search("@")==-1) &&
        (usuario.search(" ")==-1) &&
        (dominio.search(" ")==-1) &&
        (dominio.search(".")!=-1) &&
        (dominio.indexOf(".") >=1)&&
        (dominio.lastIndexOf(".") < dominio.length - 1)) {
    // document.getElementById("msgemail").innerHTML="E-mail válido";
     }
    else{
    // document.getElementById("msgemail").innerHTML="<font color='red'>E-mail inválido </font>";
    swal({
        title: "Ops!",
        text: "E-mail invalido!",
        icon: "error"
      });
    }
}
// $(document).ready(function(){
//     $('').mask("(99) 99999-9999");
// });