function logar(){
    var login = document.getElementById('login').value;
    var senha = document.getElementById('senha').value;
    
    if(login == "paciente@hotmail.com" && senha == "paciente123"){

        location.href = "home.html";
    }else{
        alert('Usuário ou senha incorretos');
    }
}