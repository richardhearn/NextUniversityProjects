$(function(){
  var l = new Login();
})


class Login {
  constructor() {
    this.submitEvent()
  }

  submitEvent(){
    $('form').submit((event)=>{
      event.preventDefault()
      this.sendForm()
    })
  }

  sendForm(){
    /*let form_data = new FormData();
    form_data.append('username', $('#user').val())
    form_data.append('password', $('#password').val())*/

    var username = $('#user').val();
    var passw = $('#password').val();

    $.ajax({
      url: '../server/check_login.php',
      /*dataType: "json",*/
      /*cache: false,
      processData: false,
      contentType: false,*/
      data: {username: username, passw: passw},
      type: 'POST',
      success: function(response){
        response = JSON.parse(response);
        console.log(response);
        if (response.acceso == "concedido") {
          window.location.href = 'main.html';
        }else {
          alert(response.motivo/*.msg+" motivo: "+php_response.motivo*/);
        }
      },
      error: function(){
        alert("error en la comunicación con el servidor");
      }
    })
  }
}
