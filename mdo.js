function execucao(){

    //Dados Logísticos dos Eventos//
    var local = document.getElementById("local").value;
    let data = document.getElementById("data").value;
    var datanova = data.split('-').reverse().join('/')
    var horainicio = document.getElementById("horainicio").value
    var horafim = document.getElementById("horafim").value

    //select 1

    var select = document.querySelector('#profissionais');
    var option = select.children[select.selectedIndex];
    var maodeobra = option.textContent;

    if(maodeobra === 'Tipo de Profissional'){
        var precomdo = 0
    }
    if(maodeobra === 'Churrasqueiro'){
        var precomdo = 300
    }
    if(maodeobra === 'Chef de Cozinha'){
        var precomdo = 250
    }
    if(maodeobra === 'Ajudante de Cozinha'){
        var precomdo = 200
    }
    if(maodeobra === 'Garçom'){
        var precomdo = 200
    }
    if(maodeobra === 'Copeiro'){
        var precomdo = 180
    }
    if(maodeobra === 'Bartender'){
        var precomdo = 250
    }

    
    var precomdo1 = precomdo.toFixed(2).replace('.',',')

    var nprof = document.querySelector('#numerodeprofissionais')
    var ndeprofissionais = Number(nprof.value)

    var totprecomdo = precomdo*ndeprofissionais
    var mdoprecototal = totprecomdo.toFixed(2).replace('.',',')

    //select 1 fim

    //select 2

    var select = document.querySelector('#profissionais2');
    var option = select.children[select.selectedIndex];
    var maodeobra2 = option.textContent;

    if(maodeobra2 === 'Tipo de Profissional'){
        var precomdo2 = 0
    }
    if(maodeobra2 === 'Churrasqueiro'){
        var precomdo2 = 300
    }
    if(maodeobra2 === 'Chef de Cozinha'){
        var precomdo2 = 250
    }
    if(maodeobra2 === 'Ajudante de Cozinha'){
        var precomdo2 = 200
    }
    if(maodeobra2 === 'Garçom'){
        var precomdo2 = 200
    }
    if(maodeobra2 === 'Copeiro'){
        var precomdo2 = 180
    }
    if(maodeobra2 === 'Bartender'){
        var precomdo2 = 250
    }

    
    var precomdo3 = precomdo2.toFixed(2).replace('.',',')

    var nprof2 = document.querySelector('#numerodeprofissionais2')
    var ndeprofissionais2 = Number(nprof2.value)

    var totprecomdo2 = precomdo2*ndeprofissionais
    var mdoprecototal2 = totprecomdo2.toFixed(2).replace('.',',')

    //select 2 fim

    //select 3

    var select = document.querySelector('#profissionais3');
    var option = select.children[select.selectedIndex];
    var maodeobra3 = option.textContent;

    if(maodeobra3 === 'Tipo de Profissional'){
        var precomdo4 = 0
    }
    if(maodeobra3 === 'Churrasqueiro'){
        var precomdo4 = 300
    }
    if(maodeobra3 === 'Chef de Cozinha'){
        var precomdo4 = 250
    }
    if(maodeobra3 === 'Ajudante de Cozinha'){
        var precomdo4 = 200
    }
    if(maodeobra3 === 'Garçom'){
        var precomdo4 = 200
    }
    if(maodeobra3 === 'Copeiro'){
        var precomdo4 = 180
    }
    if(maodeobra3 === 'Bartender'){
        var precomdo4 = 250
    }

    
    var precomdo5 = precomdo4.toFixed(2).replace('.',',')

    var nprof3 = document.querySelector('#numerodeprofissionais3')
    var ndeprofissionais3 = Number(nprof3.value)

    var totprecomdo3 = precomdo4*ndeprofissionais
    var mdoprecototal3 = totprecomdo3.toFixed(2).replace('.',',')

    //select 3 fim

    //total

    var totaldeprofissionais = ndeprofissionais + ndeprofissionais2 + ndeprofissionais3
    var precototal = precomdo + precomdo2 + precomdo4
    var precototal1 = precototal.toFixed(2).replace('.',',')


    res.innerHTML = `Orçamento Mão-de-Obra<br><br>
    Profissionais Contratados : ${maodeobra} , ${maodeobra2} e ${maodeobra3}<br>
    Nº de Profissionais : ${totaldeprofissionais}<br>
    Preço por Profissional : R$ ${precomdo1}, R$ ${precomdo3} e R$ ${precomdo5}<br>
    Preço Total : R$ ${precototal1}`



}