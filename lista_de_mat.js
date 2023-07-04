function clickmenu(){
    if(itens.style.display == 'block'){

        itens.style.display = 'none'
    }else{
        itens.style.display = 'block'

    }
}


function execucao(){

    // Obtenção de Nº de Convidados : Inteiras e Meias

    var int = document.querySelector('#convint').value;
    var mei = document.querySelector('#convmeia').value;

    var total_de_convidados = parseInt(int) + parseInt(mei);

    // Proporção de Pratos : Grandes e Pequenos

    var pratos_grandes = total_de_convidados/1
    var pratos_pequenos = total_de_convidados/1

    // Proporção de Talheres : Garfos de Refeição , Facas de Refeição , Garfos de Sobremesa e Colheres

    var garfos_refeicao = total_de_convidados/1
    var facas_refeicao = total_de_convidados/1
    var garfos_sobremesa = total_de_convidados/1
    var colheres = parseInt(total_de_convidados/2)

    // PACOTES - Proporção de Copos :

    //Copos de Bebidas S/Álcool 

    var select = document.querySelector('#pacotes');
    var option = select.children[select.selectedIndex];
    var text1 = option.textContent;
    if(text1 === 'Basic'){

        if(total_de_convidados == 30){
            copos_s_alcool = 24
        }

        if(total_de_convidados >= 40 && total_de_convidados<=50){
            copos_s_alcool = 48
        }

        if(total_de_convidados >= 51 && total_de_convidados<=70){
            copos_s_alcool = 72
        }
        if(total_de_convidados >= 71 && total_de_convidados<=100){
            copos_s_alcool = 96
        }
        if(total_de_convidados >= 101 && total_de_convidados<=120){
            copos_s_alcool = 120
        }
        if(total_de_convidados >= 121 && total_de_convidados<=150){
            copos_s_alcool = 144
        }

        //Restrição de outras caixas

        var caixa_copos_bebidassalcool = copos_s_alcool/24
        var tulipas = 0
        var caixa_tulipas = tulipas/24
        var long_drink = 0
        var caixa_long_drinks = long_drink/24

  
    }
    if(text1 === 'Premium I'){

        //Copos de Bebidas Sem Álcool
    
        if(total_de_convidados >= 30 && total_de_convidados<=50){
            copos_s_alcool = 24
        }

        if(total_de_convidados >= 51 && total_de_convidados<=70){
            copos_s_alcool = 48
        }
        if(total_de_convidados >= 71 && total_de_convidados<=100){
            copos_s_alcool = 72
        }
        if(total_de_convidados >= 101 && total_de_convidados<=150){
            copos_s_alcool = 96
        }

        //Tulipas

        if(total_de_convidados >= 30 && total_de_convidados<=39){
            tulipas = 24
        }
        if(total_de_convidados >= 40 && total_de_convidados<=99){
            tulipas = 48
        }
        if(total_de_convidados >= 100 && total_de_convidados<=150){
            tulipas = 72
        }
        

        //Restrição de outras caixas

        var caixa_copos_bebidassalcool = copos_s_alcool/24
        var caixa_tulipas = tulipas/24
        var long_drink = 0
        var caixa_long_drinks = long_drink/24

    }
    if(text1 === 'Premium II'){

        //Copos de Bebidas Sem Álcool
    
        if(total_de_convidados >= 30 && total_de_convidados<=50){
            copos_s_alcool = 24
        }

        if(total_de_convidados >= 51 && total_de_convidados<=70){
            copos_s_alcool = 48
        }
        if(total_de_convidados >= 71 && total_de_convidados<=100){
            copos_s_alcool = 72
        }
        if(total_de_convidados >= 101 && total_de_convidados<=150){
            copos_s_alcool = 96
        }

        //Long Drink

        if(total_de_convidados >= 30 && total_de_convidados<=39){
            long_drink = 24
        }
        if(total_de_convidados >= 40 && total_de_convidados<=99){
            long_drink = 48
        }
        if(total_de_convidados >= 100 && total_de_convidados<=150){
            long_drink = 72
        }

        //Restrição de outras caixas

        var caixa_copos_bebidassalcool = copos_s_alcool/24
        var tulipas = 0
        var caixa_tulipas = tulipas/24
        var caixa_long_drinks = long_drink/24
        
    }
    if(text1 === 'VIP'){

        //Copos de Bebidas Sem Álcool
    
        if(total_de_convidados >= 30 && total_de_convidados<=39){
            copos_s_alcool = 24
        }

        if(total_de_convidados >= 40 && total_de_convidados<=79){
            copos_s_alcool = 48
        }
        if(total_de_convidados >= 80 && total_de_convidados<=119){
            copos_s_alcool = 72
        }
        if(total_de_convidados >= 120 && total_de_convidados<=150){
            copos_s_alcool = 96
        }

        //Tulipas

        if(total_de_convidados >= 30 && total_de_convidados<=39){
            tulipas = 24
        }
        if(total_de_convidados >= 40 && total_de_convidados<=100){
            tulipas = 48
        }
        if(total_de_convidados >= 101 && total_de_convidados<=150){
            tulipas = 72
        }
        

        //Long Drink

        if(total_de_convidados >= 30 && total_de_convidados<=39){
            long_drink = 24
        }
        if(total_de_convidados >= 40 && total_de_convidados<=100){
            long_drink = 48
        }
        if(total_de_convidados >= 101 && total_de_convidados<=150){
            long_drink = 72
        }


        //Restrição de outras caixas

        var caixa_copos_bebidassalcool = copos_s_alcool/24
        var caixa_tulipas = tulipas/24
        var caixa_long_drinks = long_drink/24
        
    }

    //Jarras

    if(total_de_convidados >= 30 && total_de_convidados <=100){
        var jarras_de_vidro = 1
    }
    if(total_de_convidados >= 101 && total_de_convidados <=150){
        var jarras_de_vidro = 2
    }

    //Bandejas
 
    if(total_de_convidados >= 30 && total_de_convidados <=100){
        var bandejas = 3
    }
    if(total_de_convidados >= 101 && total_de_convidados <=150){
        var bandejas = 4
    }

    //Latas de Água Tônica

    if(total_de_convidados >= 30 && total_de_convidados <= 100){
        var latas_tonicas = 12
    }
    if(total_de_convidados >= 100 && total_de_convidados <= 150){
        var latas_tonicas = 24
    }
    

    var engradados_latas_tonicas = latas_tonicas/12

    //Rechauds

    if(total_de_convidados>=100){
        var rechaud_mala = 2
    }else{
        var rechaud_mala = 1
    }


    //Toalhas

    var select = document.querySelector('#toalhas');
    var option = select.children[select.selectedIndex];
    var toalha = option.textContent;
    if( toalha === "-"){
        var toalha_escolhida = '-'
    }
    if( toalha === "Branca Lisa"){
        var toalha_escolhida = 'Branca Lisa'
    }
    if( toalha === "Vermelha e Branca Quadriculada<"){
        var toalha_escolhida = 'Vermelha e Branca Quadriculada<'
    }
    if( toalha === "Azul e Branca Quadriculada"){
        var toalha_escolhida = 'Azul e Branca Quadriculada'
    }
    if( toalha === "Verde e Branca Quadriculada"){
        var toalha_escolhida = 'Verde e Branca Quadriculada'
    }
    if( toalha === "Preta e Branca Quadriculada"){
        var toalha_escolhida = 'Preta e Branca Quadriculada'
    }

    var qntd_toalhas = total_de_convidados/4

    //Pastilhas 

    var pastilhas_de_alcool = 4 + (rechaud_mala*1)

    //Copos descartáveis
    if(total_de_convidados >= 30 && total_de_convidados <= 49){
        var copos_descartaveis = 3
    }
    if(total_de_convidados >=50 && total_de_convidados <=69){
        var copos_descartaveis = 4
    }
    if(total_de_convidados >=70 && total_de_convidados <=100){
        var copos_descartaveis = 6
    }
    if(total_de_convidados >=101 && total_de_convidados <=120){
        var copos_descartaveis = 8
    }
    if(total_de_convidados >=121 && total_de_convidados <=150){
        var copos_descartaveis = 9
    }

    //canudos
    if(total_de_convidados >=30 && total_de_convidados <=100){
        var canudos = 3
    }
    if(total_de_convidados >=101 && total_de_convidados <=120){
        var canudos = 5
    }
    if(total_de_convidados >=121 && total_de_convidados <=150){
        var canudos = 6
    }

    //Sobremesa
    //colherzinhas
    if(total_de_convidados >=30 && total_de_convidados <=100){
        var colherzinhas = 1
    }
    if(total_de_convidados >=101 && total_de_convidados <=150){
        var colherzinhas = 2
    }
    //potinhos de sobremesa
    var potinhos_de_sobremesa = total_de_convidados/10


    // ---> Mão de obra <--- //


    

    res.innerHTML = `
    - Caixa de Pratos<br><br>

    Pratos Grandes : ${pratos_grandes} unidades<br> 
    Pratos Pequenos : ${pratos_pequenos} unidades<br><br>

    - Caixa de Talheres<br><br>

    Garfos de Refeição: ${garfos_refeicao} unidades<br> 
    Facas de Refeição: ${facas_refeicao} unidades<br> 
    Garfos de Sobremesa: ${garfos_sobremesa} unidades<br> 
    Colheres: ${colheres} unidades<br><br>

    - Caixas de Copos<br><br>

    Copos de Bebidas S/Álcool : ${caixa_copos_bebidassalcool} caixa(s) (${copos_s_alcool} unidades)<br> 

    Copos Tulipas (Cerveja) : ${caixa_tulipas} caixa(s) (${tulipas} unidades)<br> 

    Copos Long Drink : ${caixa_long_drinks} caixa(s) (${long_drink} unidades)<br><br>

    - Caixa de Jarras<br><br>

    Jarras de Alumínio : 1 unidade<br>
    Jarras de Vidro : ${jarras_de_vidro} unidade(s)<br><br>

    - Caixa de Bandejas<br><br>

    Bandejas Ovais : ${bandejas} unidades <br> 
    Bandejas Redondas : ${bandejas} unidades <br><br>

    - Caixa Adicional (Open-bar)<br><br>

    Balde de Gelo : 1 unidade<br> 
    Latas de Água Tônica : ${engradados_latas_tonicas} engradados (${latas_tonicas} latas) <br><br>

    - Materiais do Buffet<br><br>

    Mesas Retráteis : 2 unidades <br>
    Rechaud Redondo : 4 unidades<br>
    Rechaud Malas : ${rechaud_mala} unidades <br>
    Toalhas : ${qntd_toalhas} unidades - ${toalha_escolhida} <br><br>

    - Materiais de Cozinha<br><br>

    Panelas : 5 unidades<br> 
    Escorredor : 1 unidade<br>
    Frigideira : 1 unidade <br>
    Tachos : 1 unidade<br><br> 
    
    - Caixa de Refratários<br><br>

    Travessas : 8 unidades<br>
    Bowls : 2 unidades <br><br>

    - Caixa de Limpeza <br><br>

    Detergentes : 4 unidades <br>
    Esponjas : 4 unidades<br>
    Palha de Aço : 2 unidades<br>
    Álcool : 2 unidades<br>
    Álcool em Gel : 4 unidades <br>
    Pastilhas de Álcool Sólidas : ${pastilhas_de_alcool} unidades<br>
    Limpa-Pratas : 1 unidade <br><br>

    - Quantidade de Utensílios ( BUFFET | USO )<br> <br> 

    Colheres Grandes (BUFFET) : 8 unidades<br> 
    Conchas Grandes (BUFFET) : 5 unidades<br>
    Conchas Pequenas (BUFFET) : 2 unidades<br>
    Pegadores Grandes (BUFFET) : 3 unidades <br>
    Pegadores Pequenos (BUFFET) : 7 unidades<br>
    Colheres de Pau (USO) : 4 unidades <br>
    Facas de Serra (USO) : 5 unidades<br>
    Espátulas de Bolo (USO) : 1 unidade<br>
    Ralador Pequeno (USO) : 1 unidade <br>
    Ralador Grande (USO) : 1 unidade<br>
    Abridor (USO) : 1 unidade<br>
    Espátula Fritadeira (USO) : 1 unidade <br>
    Escumadeira (USO) : 1 unidade<br>
    Concha (USO) : 1 unidade<br>
    Peneira (USO) : 1 unidade<br>
    Pegador de Massas (USO) : 1unidade <br>
    Colheres (USO) : 5 unidade<br><br>

    - Caixa de Descartáveis <br><br>

    Guardanapos Grandes : 4 unidades<br>
    Guardanapos Pequenos : 6 unidades<br>
    Copos de Plásticos : ${copos_descartaveis} unidades <br>
    Canudos : ${canudos} unidades <br>
    Colherzinhas de Plástico : ${colherzinhas} pacotes<br>
    Potinhos de Sobremesa : ${potinhos_de_sobremesa} pacotes<br><br>



    - Materiais Eletrodomésticos<br><br>

    Fritadeira : 1 unidade<br>
    Liquidificador : 1 unidade<br>

    - Mão-de-Obra<br><br>

    Churrasqueiro : <br>
    Ajudante de Churrasqueiro : <br>
    Chef : <br>
    Ajudante de Cozinha/Lava-Louças : <br>
    Garçom : <br>
    Bartender : <br>

    `

}


