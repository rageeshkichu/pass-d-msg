const messageinput= document.getElementById("message")
function pass_the_message(){
    document.getElementById("message_output").innerHTML= messageinput.value;
    messageinput.value= "";
}