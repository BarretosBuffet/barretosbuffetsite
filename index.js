function clickmenu(){
        if(itens.style.display == 'block'){

            itens.style.display = 'none'
        }else{
            itens.style.display = 'block'

        }
}


function execucao(){
    var local = document.getElementById("local").value;
    let data = document.getElementById("data").value;
    var datanova = data.split('-').reverse().join('/')
    var horainicio = document.getElementById("horainicio").value
    var horafim = document.getElementById("horafim").value
    var select = document.querySelector('#cardapios');
    var option = select.children[select.selectedIndex];
    var texto = option.textContent;

    

    var mei = document.querySelector('#convmeia')
    var int = document.querySelector('#convint')
    var integrais = Number(int.value)
    var meias = Number(mei.value)
    var precomeia = Number(mei.value/2)    
    var totconv = integrais + precomeia


    //Restrição do Churras Master

    if(texto === 'Churras Master' && totconv<30){
        var precoconv = 145
    }
    if(texto === 'Churras Master' && totconv>=30 && totconv<=49){
        var precoconv = 125
    }
    if(texto === 'Churras Master' && totconv>=50 && totconv<=69){
        var precoconv = 120
    }
    if(texto === 'Churras Master' && totconv>=70 && totconv<=89){
        var precoconv = 115
    }
    if(texto === 'Churras Master' && totconv>=90 && totconv<=109){
        var precoconv = 110
    }
    if(texto === 'Churras Master' && totconv>=110 && totconv<=129){
        var precoconv = 107.5
    }
    if(texto === 'Churras Master' && totconv>=130 && totconv<=150){
        var precoconv = 105
    }

    //Fim da Restrição do Churras Master

    //Restrição do Churras Gold

    if(texto === 'Churras Gold' && totconv<30){
        var precoconv = 125
    }
    if(texto === 'Churras Gold' && totconv>=30 && totconv<=49){
        var precoconv = 90
    }
    if(texto === 'Churras Gold' && totconv>=50 && totconv<=69){
        var precoconv = 85
    }
    if(texto === 'Churras Gold' && totconv>=70 && totconv<=89){
        var precoconv = 80
    }
    if(texto === 'Churras Gold' && totconv>=90 && totconv<=109){
        var precoconv = 75
    }
    if(texto === 'Churras Gold' && totconv>=110 && totconv<=129){
        var precoconv = 72.5
    }
    if(texto === 'Churras Gold' && totconv>=130 && totconv<=150){
        var precoconv = 70
    }

    //Fim da Restrição do Churras Gold
    

    //Restrições do Churras Silver

    if(texto === 'Churras Silver' && totconv<30){
        var precoconv = 125
    }
    if(texto === 'Churras Silver' && totconv>=30 && totconv<=49){
        var precoconv = 85
    }
    if(texto === 'Churras Silver' && totconv>=50 && totconv<=69){
        var precoconv = 80
    }
    if(texto === 'Churras Silver' && totconv>=70 && totconv<=89){
        var precoconv = 75
    }
    if(texto === 'Churras Silver' && totconv>=90 && totconv<=109){
        var precoconv = 70
    }
    if(texto === 'Churras Silver' && totconv>=110 && totconv<=129){
        var precoconv = 67.5
    }
    if(texto === 'Churras Silver' && totconv>=130 && totconv<=150){
        var precoconv = 65
    }

    //Fim da Restrição do Churras Silver


    //Restrições do Almoço/Jantar

    if(texto === 'Almoço/Jantar' && totconv<30){
        var precoconv = 120
    }
    if(texto === 'Almoço/Jantar' && totconv>=30 && totconv<=49){
        var precoconv = 85
    }
    if(texto === 'Almoço/Jantar' && totconv>=50 && totconv<=69){
        var precoconv = 80
    }
    if(texto === 'Almoço/Jantar' && totconv>=70 && totconv<=89){
        var precoconv = 75
    }
    if(texto === 'Almoço/Jantar' && totconv>=90 && totconv<=109){
        var precoconv = 72.5
    }
    if(texto === 'Almoço/Jantar' && totconv>=110 && totconv<=129){
        var precoconv = 70
    }
    if(texto === 'Almoço/Jantar' && totconv>=130 && totconv<=150){
        var precoconv = 67.5
    }

    //Fim da Restrição Almoço/Jantar



    //Restrições do Feijoada

    if(texto === 'Feijoada' && totconv<30){
        var precoconv = 125
    }
    if(texto === 'Feijoada' && totconv>=30 && totconv<=49){
        var precoconv = 85
    }
    if(texto === 'Feijoada' && totconv>=50 && totconv<=69){
        var precoconv = 80
    }
    if(texto === 'Feijoada' && totconv>=70 && totconv<=89){
        var precoconv = 75
    }
    if(texto === 'Feijoada' && totconv>=90 && totconv<=109){
        var precoconv = 70
    }
    if(texto === 'Feijoada' && totconv>=110 && totconv<=129){
        var precoconv = 67.5
    }
    if(texto === 'Feijoada' && totconv>=130 && totconv<=150){
        var precoconv = 65
    }
    
    //Fim das Restrições de Feijoada
    
    //Restrições de Festa Botequim

    if(texto === 'Festa Botequim' && totconv<30){
        var precoconv = 120
    }
    if(texto === 'Festa Botequim' && totconv>=30 && totconv<=49){
        var precoconv = 80
    }
    if(texto === 'Festa Botequim' && totconv>=50 && totconv<=69){
        var precoconv = 75
    }
    if(texto === 'Festa Botequim' && totconv>=70 && totconv<=89){
        var precoconv = 70
    }
    if(texto === 'Festa Botequim' && totconv>=90 && totconv<=109){
        var precoconv = 65
    }
    if(texto === 'Festa Botequim' && totconv>=110 && totconv<=129){
        var precoconv = 62.5
    }
    if(texto === 'Festa Botequim' && totconv>=130 && totconv<=150){
        var precoconv = 60
    }

    //Fim das Restrições de Festa Botequim

    //Escolha dos Pacotes
    
    var select = document.querySelector('#pacotes');
    var option = select.children[select.selectedIndex];
    var text1 = option.textContent;
    if(text1 === 'Basic'){
        var precopack = 0
    }
    if(text1 === 'Premium I'){
        var precopack = 10
    }
    if(text1 === 'Premium II'){
        var precopack = 20
    }
    if(text1 === 'VIP'){
        var precopack = 30
    }

    //Escolha de Cerveja
    var select = document.querySelector('#cervejas');
    var option = select.children[select.selectedIndex];
    var cerva = option.textContent;
    if( cerva=== 'Sem Cerveja'){
        var precocerva = 0
    }
    if( cerva=== 'Brahma + Antarctica'){
        var precocerva = 0
    }
    if( cerva=== 'Brahma Duplo/Puro Malte'){
        var precocerva = 10
    }
    if( cerva=== 'Antarctica Original'){
        var precocerva = 10
    }
    if( cerva=== 'Império'){
        var precocerva = 10
    }
    if( cerva=== 'Amstel'){
        var precocerva = 10
    }
    if( cerva=== 'Heineken'){
        var precocerva = 20
    }
    if( cerva=== 'Corona'){
        var precocerva = 20
    }
    if( cerva=== 'Stella Artois'){
        var precocerva = 20
    }
    if( cerva=== 'Budweiser'){
        var precocerva = 20
    }
    if( cerva=== 'Bohemia'){
        var precocerva = 0
    }


    //Escolha de Open-Bar
    var select = document.querySelector('#open-bar');
    var option = select.children[select.selectedIndex];
    var openbar = option.textContent;
    if( openbar=== "Sem Open-Bar"){
        var precoopen = 0
    }
    if( openbar=== "Open-Bar I"){
        var precoopen = 0
    }
    if( openbar=== "Open-Bar II"){
        var precoopen = 10
    }
    if( openbar=== "Open-Bar III"){
        var precoopen = 20
    }
    if( openbar=== "Open-Bar IV"){
        var precoopen = 15
    }
    
    
    var inicialtime = parseFloat(horainicio)
    var finaltime = parseFloat(horafim)
    var duracao = finaltime - inicialtime

    
    var totprecoconv = precopack + precoconv + precocerva + precoopen
    var totprecoconv1 = totprecoconv.toFixed(2).replace('.',',')
    var precomeia = totprecoconv/2
    precomeia1 = precomeia.toFixed(2).replace('.',',')

    let precototal = (totprecoconv*integrais)+(precomeia*meias)
    precototal1 =  precototal.toFixed(2).replace('.',',')

    var horapreco = precototal/duracao
    horapreco1 = horapreco.toFixed(2).replace('.',',')




    res.innerHTML = `Local: ${local} 🗺️<br>
    Data: ${datanova} 📅<br>
    Horário : Das ${horainicio} até às ${horafim}⏰<br>
    Duração: ${duracao} horas⏱️<br><br>
    Cardápio: ${texto} 🍽️<br>
    Pacote: ${text1} 📦<br>
    Cerveja : ${cerva} 🍺 <br>
    Open-Bar: ${openbar} 🍹 <br><br>
    Nº de Convidados (Acima dos 12 anos - Integrais) : ${integrais} 🧑<br>
    Nº de Convidados (Dos 6 aos 11 anos de Idade - Meias) : ${meias} 🧒<br><br>
    Preço Por Convidado (Integral) : R$ ${totprecoconv1} 🕺<br>
    Preço Por Convidado (Meia) : R$ ${precomeia1} 🧒<br><br>
    Preço Total : R$ ${precototal1} 💸 `

}


