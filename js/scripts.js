// function resetInputs(){
//     $("#name").val("");
//     $("#email").val("");
//     $("#message").val("");
    
// }

$(document).ready(function(){
$('.btn').click(function (event){
    var name = $('#name').val();
    var email = $('#email').val();
    var message =$('#message').val();
    if ((name !== '')&& (email !== '')&&(message !== '')){
        alert(name + ' ' + 'We have received your message and we thank you for your time')
    }else{
        alert('please input your contact information')
    }

});

});
