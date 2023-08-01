let datausuario = { correo: "admin@admin.com", pass:"admin123"}



let formularioLogin = document.querySelector('#formLogin')
formularioLogin.addEventListener("submit", (evento) => {
    evento.preventDefault();
    let regexCorreo = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i

    let correoInput = evento.target.correologin.value 
    if (correoInput != "" && evento.target.passlogin.value != "") {
        if (regexCorreo.test(correoInput)) {
            if (datausuario.correo == correoInput) {
                if (datausuario.pass == evento.target.passlogin.value) {
                    alert("Ingresaste!!") 
                    location.href = ("iniciouser.html")
                } else {
                    alert("Su correo o contraseña no son validos")
                }
                
            } else 
                alert("Su correo o contraseña no son validos")
            
        } else 
            alert("Su correo o contraseña no son validos")
        
    }else 
    alert("Su correo o contraseña no son validos")
})





