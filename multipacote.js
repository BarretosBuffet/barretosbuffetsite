function execucao(){

    //Dados Logísticos dos Eventos//
    var local = document.getElementById("local").value;
    let data = document.getElementById("data").value;
    var datanova = data.split('-').reverse().join('/')
    var horainicio = document.getElementById("horainicio").value
    var horafim = document.getElementById("horafim").value

    var mei = document.querySelector('#convmeia')
    var int = document.querySelector('#convint')
    var integrais = Number(int.value)
    var meias = Number(mei.value)
    var totconv = integrais + meias

    var select = document.querySelector('#cardapios');
    var option = select.children[select.selectedIndex];
    var texto = option.textContent;


    //Restrição do Churras Master

    if(texto === 'Churras Master' && totconv<30){
        var precoconv = 200
    }
    if(texto === 'Churras Master' && totconv>=30 && totconv<=50){
        var precoconv = 125
    }
    if(texto === 'Churras Master' && totconv>=51 && totconv<=70){
        var precoconv = 120
    }
    if(texto === 'Churras Master' && totconv>=71 && totconv<=90){
        var precoconv = 115
    }
    if(texto === 'Churras Master' && totconv>=91 && totconv<=110){
        var precoconv = 110
    }
    if(texto === 'Churras Master' && totconv>=111 && totconv<=130){
        var precoconv = 107.5
    }
    if(texto === 'Churras Master' && totconv>=131 && totconv<=150){
        var precoconv = 105
    }

    //Fim da Restrição do Churras Master

    //Restrição do Churras Gold

    if(texto === 'Churras Gold' && totconv<30){
        var precoconv = 155
    }
    if(texto === 'Churras Gold' && totconv>=30 && totconv<=50){
        var precoconv = 90
    }
    if(texto === 'Churras Gold' && totconv>=51 && totconv<=70){
        var precoconv = 85
    }
    if(texto === 'Churras Gold' && totconv>=71 && totconv<=90){
        var precoconv = 80
    }
    if(texto === 'Churras Gold' && totconv>=91 && totconv<=110){
        var precoconv = 75
    }
    if(texto === 'Churras Gold' && totconv>=111 && totconv<=130){
        var precoconv = 72.5
    }
    if(texto === 'Churras Gold' && totconv>=131 && totconv<=150){
        var precoconv = 70
    }

    //Fim da Restrição do Churras Gold
    

    //Restrições do Churras Silver

    if(texto === 'Churras Silver' && totconv<30){
        var precoconv = 142.5
    }
    if(texto === 'Churras Silver' && totconv>=30 && totconv<=50){
        var precoconv = 85
    }
    if(texto === 'Churras Silver' && totconv>=51 && totconv<=70){
        var precoconv = 80
    }
    if(texto === 'Churras Silver' && totconv>=71 && totconv<=90){
        var precoconv = 75
    }
    if(texto === 'Churras Silver' && totconv>=91 && totconv<=110){
        var precoconv = 70
    }
    if(texto === 'Churras Silver' && totconv>=111 && totconv<=130){
        var precoconv = 67.5
    }
    if(texto === 'Churras Silver' && totconv>=131 && totconv<=150){
        var precoconv = 65
    }

    //Fim da Restrição do Churras Silver


    //Restrições do Almoço/Jantar

    if(texto === 'Almoço/Jantar' && totconv<30){
        var precoconv = 145.5
    }
    if(texto === 'Almoço/Jantar' && totconv>=30 && totconv<=50){
        var precoconv = 85
    }
    if(texto === 'Almoço/Jantar' && totconv>=51 && totconv<=70){
        var precoconv = 80
    }
    if(texto === 'Almoço/Jantar' && totconv>=71 && totconv<=90){
        var precoconv = 75
    }
    if(texto === 'Almoço/Jantar' && totconv>=91 && totconv<=110){
        var precoconv = 70
    }
    if(texto === 'Almoço/Jantar' && totconv>=111 && totconv<=130){
        var precoconv = 67.5
    }
    if(texto === 'Almoço/Jantar' && totconv>=131 && totconv<=150){
        var precoconv = 65
    }

    //Fim da Restrição Almoço/Jantar



    //Restrições do Feijoada

    if(texto === 'Feijoada' && totconv<30){
        var precoconv = 150
    }
    if(texto === 'Feijoada' && totconv>=30 && totconv<=50){
        var precoconv = 82.5
    }
    if(texto === 'Feijoada' && totconv>=51 && totconv<=70){
        var precoconv = 77.5
    }
    if(texto === 'Feijoada' && totconv>=71 && totconv<=90){
        var precoconv = 72.5
    }
    if(texto === 'Feijoada' && totconv>=91 && totconv<=110){
        var precoconv = 67.5
    }
    if(texto === 'Feijoada' && totconv>=111 && totconv<=130){
        var precoconv = 65
    }
    if(texto === 'Feijoada' && totconv>=131 && totconv<=150){
        var precoconv = 62.5
    }
    
    //Fim das Restrições de Feijoada
    
    //Restrições de Festa Botequim

    if(texto === 'Festa Botequim' && totconv<30){
        var precoconv = 140
    }
    if(texto === 'Festa Botequim' && totconv>=30 && totconv<=50){
        var precoconv = 80
    }
    if(texto === 'Festa Botequim' && totconv>=51 && totconv<=70){
        var precoconv = 75
    }
    if(texto === 'Festa Botequim' && totconv>=71 && totconv<=90){
        var precoconv = 70
    }
    if(texto === 'Festa Botequim' && totconv>=91 && totconv<=110){
        var precoconv = 65
    }
    if(texto === 'Festa Botequim' && totconv>=111 && totconv<=130){
        var precoconv = 62.5
    }
    if(texto === 'Festa Botequim' && totconv>=131 && totconv<=150){
        var precoconv = 60
    }

    //Fim das Restrições de Festa Botequim

    //Escolha de Cerveja
    var select = document.querySelector('#cervejas');
    var option = select.children[select.selectedIndex];
    var cerva = option.textContent;
    if( cerva=== '-'){
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
    if( openbar=== "-"){
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


    //Pacotes
    var basic = 0
    var premiumI = 10
    var premiumII = 20
    var vip = 30

    //Basic

    var totprecoconvbasic = precoconv + basic 
    var totprecoconvbasic1 = totprecoconvbasic.toFixed(2).replace('.',',')
    var precomeiabasic = totprecoconvbasic/2
    precomeiabasic1 = precomeiabasic.toFixed(2).replace('.',',')
    let precototalbasic = (totprecoconvbasic*integrais)+(precomeiabasic*meias)
    precototalbasic1 =  precototalbasic.toFixed(2).replace('.',',')
    
    //Premium I

    var totprecoconvpremiumI = precoconv + premiumI + precocerva
    var totprecoconvpremiumI1 = totprecoconvpremiumI.toFixed(2).replace('.',',')
    var precomeiapremiumI = totprecoconvpremiumI/2
    precomeiapremiumI1 = precomeiapremiumI.toFixed(2).replace('.',',')
    let precototalpremiumI = (totprecoconvpremiumI*integrais)+(precomeiapremiumI*meias)
    precototalpremiumI1 =  precototalpremiumI.toFixed(2).replace('.',',')

    //Premium II

    var totprecoconvpremiumII = precoconv + premiumII + precoopen
    var totprecoconvpremiumII1 = totprecoconvpremiumII.toFixed(2).replace('.',',')
    var precomeiapremiumII = totprecoconvpremiumII/2
    precomeiapremiumII1 = precomeiapremiumII.toFixed(2).replace('.',',')
    let precototalpremiumII = (totprecoconvpremiumII*integrais)+(precomeiapremiumII*meias)
    precototalpremiumII1 =  precototalpremiumII.toFixed(2).replace('.',',')

    //VIP

    var totprecoconvvip = precoconv + vip + precoopen + precocerva
    var totprecoconvvip1 = totprecoconvvip.toFixed(2).replace('.',',')
    var precomeiavip = totprecoconvvip/2
    precomeiavip1 = precomeiavip.toFixed(2).replace('.',',')
    let precototalvip = (totprecoconvvip*integrais)+(precomeiavip*meias)
    precototalvip1 =  precototalvip.toFixed(2).replace('.',',')

    







    res.innerHTML = `Local: ${local} 🗺️<br>
    Data : ${datanova}📅<br>
    Horário: Das ${horainicio} até às ${horafim}⏰<br><br>
    Convidados (Integrais): ${integrais} convidados🕺💃<br>
    Convidados (Meias): ${meias} convidados🧒<br><br>
    
    Basic<br><br>
    Preço por Convidado (Inteira) : R$ ${totprecoconvbasic1}<br>
    Preço por Convidado (Meia) : R$ ${precomeiabasic1}<br>
    Preço Total : R$ ${precototalbasic1}<br><br>
    
    Premium I<br><br>
    Preço por Convidado (Inteira) : R$ ${totprecoconvpremiumI1}<br>
    Preço por Convidado (Meia) : R$ ${precomeiapremiumI1}<br>
    Preço Total : R$ ${precototalpremiumI1}<br><br>
    
    Premium II<br><br>
    Preço por Convidado (Inteira) : R$ ${totprecoconvpremiumII1}<br>
    Preço por Convidado (Meia) : R$ ${precomeiapremiumII1}<br>
    Preço Total : R$ ${precototalpremiumII1}<br><br>
    
    VIP<br><br>
    Preço por Convidado (Inteira) : R$ ${totprecoconvvip1}<br>
    Preço por Convidado (Meia) : R$ ${precomeiavip1}<br>
    Preço Total : R$ ${precototalvip1}<br><br>`
}
