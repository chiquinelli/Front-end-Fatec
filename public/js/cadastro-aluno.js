$(document).ready(function(){ 
   $('#name').change( function(){   		
        var name = $('#name').val();

        if (validate(name) === false) {
            $('#validateName').show();
        } else {
            $('#validateName').hide();
        }
     });
});

function validate(name) {
    var regex = /^([A-Za-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s]*)$/
    return regex.test(name)
}