function clickmenu(){
        if(itens.style.display == 'block'){

            itens.style.display = 'none'

        }else if(itens.style.display == 'flex'){
            
            itens.style.display == 'flex'

        }else{
            itens.style.display = 'block'

        }
}


function execucao(){
    var local = document.getElementById("local").value;
    var data = document.getElementById("data").value;
    var horainicio = document.getElementById("horainicio").value
    var horafim = document.getElementById("horafim").value
    var select = document.querySelector('#cardapios');
    var option = select.children[select.selectedIndex];
    var texto = option.textContent;

    var horadif = Number(horafim) - Number(horainicio)

    var mei = document.querySelector('#convmeia')
    var int = document.querySelector('#convint')
    var integrais = Number(int.value)
    var meias = Number(mei.value)
    var totconv = integrais + meias


    //Restrição do Churras Master

    if(texto === 'Churras Master' && totconv<30){
        var precoconv = 180
    }
    if(texto === 'Churras Master' && totconv>=30 && totconv<=50){
        var precoconv = 120
    }
    if(texto === 'Churras Master' && totconv>=51 && totconv<=70){
        var precoconv = 115
    }
    if(texto === 'Churras Master' && totconv>=71 && totconv<=100){
        var precoconv = 112.5
    }
    if(texto === 'Churras Master' && totconv>=101 && totconv<=130){
        var precoconv = 110
    }
    if(texto === 'Churras Master' && totconv>=131 && totconv<=150){
        var precoconv = 107.5
    }

    //Fim da Restrição do Churras Master

    //Restrição do Churras Gold

    if(texto === 'Churras Gold' && totconv<30){
        var precoconv = 160
    }
    if(texto === 'Churras Gold' && totconv>=30 && totconv<=50){
        var precoconv = 90
    }
    if(texto === 'Churras Gold' && totconv>=51 && totconv<=70){
        var precoconv = 85
    }
    if(texto === 'Churras Gold' && totconv>=71 && totconv<=100){
        var precoconv = 80
    }
    if(texto === 'Churras Gold' && totconv>=101 && totconv<=130){
        var precoconv = 77.5
    }
    if(texto === 'Churras Gold' && totconv>=131 && totconv<=150){
        var precoconv = 75
    }

    //Fim da Restrição do Churras Gold
    

    //Restrições do Churras Silver

    if(texto === 'Churras Silver' && totconv<30){
        var precoconv = 150
    }
    if(texto === 'Churras Silver' && totconv>=30 && totconv<=50){
        var precoconv = 85
    }
    if(texto === 'Churras Silver' && totconv>=51 && totconv<=70){
        var precoconv = 80
    }
    if(texto === 'Churras Silver' && totconv>=71 && totconv<=100){
        var precoconv = 75
    }
    if(texto === 'Churras Silver' && totconv>=101 && totconv<=130){
        var precoconv = 72.5
    }
    if(texto === 'Churras Silver' && totconv>=131 && totconv<=150){
        var precoconv = 70
    }

    //Fim da Restrição do Churras Silver


    //Restrições do Almoço/Jantar

    if(texto === 'Almoço/Jantar' && totconv<30){
        var precoconv = 160
    }
    if(texto === 'Almoço/Jantar' && totconv>=30 && totconv<=50){
        var precoconv = 85
    }
    if(texto === 'Almoço/Jantar' && totconv>=51 && totconv<=70){
        var precoconv = 80
    }
    if(texto === 'Almoço/Jantar' && totconv>=71 && totconv<=100){
        var precoconv = 75
    }
    if(texto === 'Almoço/Jantar' && totconv>=101 && totconv<=130){
        var precoconv = 72.5
    }
    if(texto === 'Almoço/Jantar' && totconv>=131 && totconv<=150){
        var precoconv = 70
    }

    //Fim da Restrição Almoço/Jantar



    //Restrições do Feijoada

    if(texto === 'Feijoada' && totconv<30){
        var precoconv = 150
    }
    if(texto === 'Feijoada' && totconv>=30 && totconv<=50){
        var precoconv = 85
    }
    if(texto === 'Feijoada' && totconv>=51 && totconv<=70){
        var precoconv = 80
    }
    if(texto === 'Feijoada' && totconv>=71 && totconv<=100){
        var precoconv = 75
    }
    if(texto === 'Feijoada' && totconv>=101 && totconv<=130){
        var precoconv = 72.5
    }
    if(texto === 'Feijoada' && totconv>=131 && totconv<=150){
        var precoconv = 70
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
        var precoconv = 77.5
    }
    if(texto === 'Festa Botequim' && totconv>=71 && totconv<=100){
        var precoconv = 75
    }
    if(texto === 'Festa Botequim' && totconv>=101 && totconv<=130){
        var precoconv = 72.5
    }
    if(texto === 'Festa Botequim' && totconv>=131 && totconv<=150){
        var precoconv = 70
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


    
    var totprecoconv = precopack + precoconv
    var totprecoconv1 = totprecoconv.toFixed(2).replace('.',',')
    var precomeia = totprecoconv/2
    precomeia1 = precomeia.toFixed(2).replace('.',',')
    var precototal = (totprecoconv*integrais)+(precomeia*meias)
   precototal1 =  precototal.toFixed(2).replace('.',',')


    res.innerHTML = `Local: ${local} 🗺️<br>Data: ${data} 📅<br>Horário : Das ${horainicio} até às ${horafim}⏰<br><br>Cardápio: ${texto} 🍽️<br>Pacote: ${text1} 📦 <br><br>Preço Por Convidado (Integral) : R$ ${totprecoconv1} 🕺
    <br>Preço Por Convidado (Meia) : R$ ${precomeia1} 🧒<br><br>
    Preço Total : R$ ${precototal1} 💸 `

}


