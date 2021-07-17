//https://auth-deploy-test.netlify.app/
//https://adm-auth-test.netlify.app/
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
function enviaDados() {
        
       let img = document.getElementById('img').value
       let descri = document.getElementById('descri').value
       let checkout = document.getElementById('checkout').value

       if(img == ''      || img == null       ||
          descri == ''   || descri == null    ||
          checkout == '' || checkout == null    ) {

                alert('por favor, preencha todos os canpos!')

       }else{

                const url = 'http://localhost:81/insert'

                let data = {
                    img,
                    descri,
                    checkout
                }
        
                const config = {
                method :'POST',
                status :201,
                cache  :'default',
                body:JSON.stringify(data),
                headers:{
                    'content-type':'application/json'
                },
                mode :'cors'
            }
        
            fetch(url, config)
                            .then(response => response.json())
                            .then(_=> _)
                            .catch(err => console.log('error:' + err))

       }

    limpar() 
}
function obtemDadosPorId() {
    let id = document.getElementById('id').value
    
    if(id == '' || id == null){
        alert('insira um valor de entrada!')
        limpar()
    }else{
        const url = `http://localhost:81/${id}`

        const config = {
            method :'GET'
        }

        fetch(url, config)
                        .then(response => response.json())
                        .then(response => {
                            response.filter((e) => {
                                
                                let imgBkd = e.img
                                let img = document.getElementById('img')
                                img.value = imgBkd

                                let descriBkd = e.descri
                                let descri = document.getElementById('descri')
                                descri.value = descriBkd

                                let chkBkd = e.checkout
                                let checkout = document.getElementById('checkout')
                                checkout.value = chkBkd
                         
                            })
                        })
                        .catch(err => console.log(err)) 
    }
}
function alteraDados() {
    let id = document.getElementById('id').value

    if(id == '' || id == null ){
        alert('insira um valor de entrada!')
        limpar()
    }else{
        let img = document.getElementById('img').value
        let descri = document.getElementById('descri').value
        let checkout = document.getElementById('checkout').value 

        if(img == ''      || img == null       ||
           descri == ''   || descri == null    ||
           checkout == '' || checkout == null    ){
            alert('por favor, preencha todos os campos!')
        }else{
            const url = `http://localhost:81/update/${id}`

            const data = {
                img,
                descri,
                checkout
            }
    
            const config = {
                method :'PUT',
                body:JSON.stringify(data),
                headers :{
                    'content-type':'application/json'
                }
            }
            fetch(url,config)
                            .then(response => response.json())
                            .then(_=> _)
                            .catch(err => console.log(err))
        }
    }
}
function deletaDados() {
    let id = document.getElementById('id').value

    if(id == '' || id == null){
        alert('insira um valor de entrada!')
        limpar()
    }else{
        const url = `http://localhost:81/delete/${id}`
        const config = {
            method :'DELETE'
        }
        fetch(url,config)
                        .then(response => response.json())
                        .then(_=> _)
                        .catch(err => console.log(err))
    }
}
function fabricaDados(posicao,e) {
    let ul = document.createElement('ul')
    ul.style.fontSize   = 'x-small'
    ul.style.fontWeight = 'bold'
    ul.append(e)
    posicao.append(ul)
}
function limparConsulta() {
    document.location.reload()
}

