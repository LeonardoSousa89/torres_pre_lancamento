function sair() {
    document.location.href = '../auth/index.html'
}
function loja() {
    document.location.href = '../store/torres.html'
}
function limpar() {
    let id       = document.getElementById('id')
    let img      = document.getElementById('img')
    let descri   = document.getElementById('descri')
    let checkout = document.getElementById('checkout')

    id.value        = ''
    img.value       = ''
    descri.value    = ''
    checkout.value  = ''
}
function modoEdicao(){
    let edit    = document.getElementById('edit')
    let normal  = document.getElementById('normal')

    edit.style.display = 'flex'
    normal.style.display = 'none'
}
function modoNormal() {
    let edit    = document.getElementById('edit')
    let normal  = document.getElementById('normal')

    edit.style.display = 'none'
    normal.style.display = 'flex'
}
function consulta() {
    const url = 'http://localhost:81'
    const config = {
        method :'GET',
        status :200,
        cache  :'default'
    }

    fetch(url,config)
                .then(res => res.json())
                .then(res => {
                    res.map((e) =>{
                          let idBk = e.id
                          let idTb = document.getElementById('idfetch')
                          let imgBk = e.img
                          let imgTb = document.getElementById('imgfetch')
                          let descBk = e.descri
                          let descTb = document.getElementById('descfetch')
                          let chkBk = e.checkout
                          let chkTb = document.getElementById('chkfetch')

                          fabricaDados(idTb,idBk)
                          fabricaDados(imgTb,imgBk)
                          fabricaDados(descTb,descBk)
                          fabricaDados(chkTb,chkBk)
                        })
                })
                .catch(err => {
                    let erro = document.getElementById('erro')
                    erro.style.display = 'flex'
                })
}
function fabricaDados(posicao,e) {
    let ul = document.createElement('ul')
    ul.style.fontSize   = 'small'
    ul.style.fontWeight = 'bold'
    ul.append(e)
    posicao.append(ul)
}
function limparConsulta() {
    document.location.reload()
}

