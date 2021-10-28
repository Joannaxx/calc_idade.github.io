const  calculo  =  document.getElementById('calculo');

function calc_idade(){
    const  nome  =  document.getElementById('nome').value;
    const  ano  =  document.getElementById('ano').value;
    const  resultado  =  document.getElementById('resultado');
    //if(nome !== '' && ano_nascimento !==''){
        var data = new Date(ano);
        var calc = (2021 - (data.getFullYear() + 1))
        //var hoje = new Date();
        //var intervalo = 2021 - data;
        var fase = ''
        if (calc <=11) {
            fase="infância.";
        }else

        if(calc <=20){
            fase="adolecência.";
        }else

        if(calc <=65){
            fase="adulta.";
        }else
        
        if(calc>65){
            fase="velhice."
        }
        
        //document.write(data.getDate() + '/' + (data.getMonth() + 1) + '/' + data.getFullYear())
        
        resultado.textContent = `${nome}  voce tem ${calc} anos e está na fase da ${fase}`
       // document.write(calc) 
    //}
        console.log(nome);
        console.log(ano);
        console.log(resultado);
        console.log(calculo);

}


calculo.addEventListener('click',calc_idade);