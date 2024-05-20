document.getElementById("calc").addEventListener('click', function(){
    let altura = document.getElementById("altura").value
    let peso = document.getElementById("peso").value
    let imc = peso / altura**2

    if((imc >= 18.5) && (imc < 25)){
        document.getElementById("res").innerHTML = `IMC = ${imc.toFixed(2)} <br> Pesso normal`
    }else if((imc >=25) && (imc < 30)){
        document.getElementById("res").innerHTML = `IMC = ${imc.toFixed(2)} <br> Sobrepeso I`
    }else if((imc >= 30) && (imc < 40)){
        document.getElementById("res").innerHTML = `IMC = ${imc.toFixed(2)} <br> Obesidade II`
    }else if((ima > 40)){
        document.getElementById("res").innerHTML = `IMC = ${imc.toFixed(2)} <br> Obesidade Grave III`
    }else{
        document.getElementById("res").innerHTML = `IMC = ${imc.toFixed(2)} <br> Magreza`
    }

})