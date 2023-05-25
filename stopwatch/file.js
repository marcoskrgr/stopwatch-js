window.onload = function(){

    var segundos = 00;
    var milesimos = 00;
    var appedSegundos =
        document.getElementById('segundos');
    var appedMilesimos =
        document.getElementById('milesimos');
    var buttonStart =
        document.getElementById('botao-start');
    var buttonStop =
        document.getElementById('botao-stop');
    var buttonReset =
        document.getElementById('botao-reset');    
    var interval;

    buttonStart.onclick = function() {

        clearInterval(interval);
        interval = setInterval(starTimer, 10);
    }
    
    buttonStop.onclick = function() {
        
        clearInterval(interval);
    }

    buttonReset.onclick = function() {
        clearInterval(interval);
        milesimos = '00';
        segundos = '00';
        appedMilesimos.innerHTML = milesimos;
        appedSegundos.innerHTML = segundos;
    }

    function starTimer() {
        milesimos++;

        if(milesimos <= 9){
            
            appedMilesimos.innerHTML = '0' + milesimos;
        }

        if(milesimos > 9){
            
            appedMilesimos.innerHTML = '' + milesimos;
        }

        if(milesimos > 99) {
            
            console.log('segundos');
            segundos++;
            appedSegundos.innerHTML = '0' + segundos;
            milesimos = 0;
            appedMilesimos.innerHTML = '0' + 0;
        }

        if(segundos > 9) {
            appedSegundos.innerHTML = segundos;
        }
    }

}
