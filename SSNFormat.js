<script>
// Format the ssn as the user types it
document.getElementById('datatel_ssn').addEventListener('keyup',function(evt){
        var datatel_ssn = document.getElementById('datatel_ssn');
        var charCode = (evt.which) ? evt.which : evt.keyCode;
        datatel_ssn.value = ssnFormat(datatel_ssn.value);
});

// We need to manually format the ssn on page load
document.getElementById('datatel_ssn').value = ssnFormat(document.getElementById('datatel_ssn').value);

// A function to determine if the pressed key is an integer
function numberPressed(evt){
        var charCode = (evt.which) ? evt.which : evt.keyCode;
        if(charCode > 31 && (charCode < 48 || charCode > 57) && (charCode < 36 || charCode > 40)){
                return false;
        }
        return true;
}

// A function to format text to look like a ssn
function ssnFormat(input){
        // Strip all characters from the input except digits
        input = input.replace(/\D/g,'');
        
        // Trim the remaining input to ten characters, to preserve ssn format
        input = input.substring(0,9);

        // Based upon the length of the string, we add formatting as necessary
        var size = input.length;
        if(size == 0){
                input = input;
        }else if(size < 4){
                input = +input;
        }else if(size < 6){
                input = +input.substring(0,3)+'-'+input.substring(3,5);
        }else{
                input = +input.substring(0,3)+'-'+input.substring(3,5)+'-'+input.substring(5,9);
        }
        return input; 
}

// Mask the SSN field
 pField = document.getElementById("datatel_ssn");
        pField.onblur = function(){
            pField.type = "password";
        }
        pField.onfocus = function(){
            pField.type = "text";
        }
</script>
