 
document.onclick = addEventListener('click', (e) => {
    e.preventDefault()
})
function validar() {

    let usuario = document.getElementById('usuario').value
    let senha   = document.getElementById('senha').value
    let erro    = document.getElementById('erro')

    let frbs  = firebase.database()
                        .ref('auth')    
                        .child('admin1')
                        .once('value')
                        .then((snapshot) =>{
                            let user = snapshot.val().user //adm011
                            let password = snapshot.val().password //dv110ea 
             
    
                            if(usuario == user && senha == password) {
                               document.location.href = '../adm/adm.html'
                            }else{
                               erro.style.display = 'flex'
                            }
                            
                        })


    limparCampos()

}
function limparCampos() {
    let usuario = document.getElementById('usuario')
    let senha   = document.getElementById('senha')

    usuario.value = ''
    senha.value   = ''
}
document.onmouseup = addEventListener('mouseup',() => {
    erro.style.display = 'none'
})

