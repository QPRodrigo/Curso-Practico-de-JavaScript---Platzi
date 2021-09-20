//Codigo del Cuadrado
console.group("Cuadrados")

function perimetroCuadrado(lado){
    return lado*4;
} 

function areaCuadrado(lado){
    return lado*lado;
} 

console.groupEnd()


//Codigo del Triangulo
console.group("Triangulo")

function perimetroTriangulo(ladoTriangulo1, ladoTriangulo2, baseTriangulo){
    
    return Number(ladoTriangulo1) + Number(ladoTriangulo2) + Number(baseTriangulo);
}

function areaTriangulo(alturaTriangulo, baseTriangulo){
    return (alturaTriangulo * baseTriangulo)/2;
}

function alturaTriangulo(ladoTriangulo1, ladoTriangulo2, baseTriangulo){
    if (ladoTriangulo1 !=  ladoTriangulo2){
        return "No es un triangulo isoceles"
    }
    else{
        const basePequeña = baseTriangulo/2;
        const ladoTrianguloCuadrado = ladoTriangulo1*ladoTriangulo1;
        const basePequeñaCuadrado = basePequeña*basePequeña;
        const alturaTriangulo = Math.sqrt(ladoTrianguloCuadrado - basePequeñaCuadrado);
        return alturaTriangulo;
    }
}

console.groupEnd()


//Codigo del circulo
console.group("Circulos");

const PI = Math.PI;

function diametroCirculo(radioCirculo){
    return radioCirculo * 2;
}

function perimetroCirculo(radioCirculo){
    return radioCirculo * 2 * PI;
}

function areaCirculo(radioCirculo){
    return radioCirculo * radioCirculo * PI;
}

console.groupEnd()



// Aqui interactuamos con el HTML - Cuadrado
function CalcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function CalcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}

// Aqui interactuamos con el HTML - Triangulo
function CalcularPerimetroTriangulo(){
    const input_1 = document.getElementById("InputTrianguloLado1");
    const value_1 = input_1.value;

    const input_2 = document.getElementById("InputTrianguloLado2");
    const value_2 = input_2.value;

    const input_3 = document.getElementById("InputTrianguloBase");
    const value_3 = input_3.value;

    const perimetro = perimetroTriangulo(value_1,value_2,value_3);
    alert(perimetro);
}

function CalcularAlturaTrianguloIsoceles(){
    const input_1 = document.getElementById("InputTrianguloLado1");
    const value_1 = input_1.value;

    const input_2 = document.getElementById("InputTrianguloLado2");
    const value_2 = input_2.value;

    const input_3 = document.getElementById("InputTrianguloBase");
    const value_3 = input_3.value;

    const altura = alturaTriangulo(value_1,value_2,value_3);
    alert(altura);
}


function CalcularAreaTriangulo(){
    const input_b = document.getElementById("InputTrianguloBase");
    const value_b = input_b.value;

    const input_h = document.getElementById("InputTrianguloAltura");
    const value_h = input_h.value;

    const area = areaTriangulo(value_b, value_h);
    alert(area);
}

// Aqui interactuamos con el HTML - Circulo
function CalcularDiametroCirculo(){
    const input = document.getElementById("InputCirculo");
    const value = input.value;

    const diametro = diametroCirculo(value);
    alert(diametro);
}

function CalcularPerimetroCirculo(){
    const input = document.getElementById("InputCirculo");
    const value = input.value;

    const perimetro = perimetroCirculo(value);
    alert(perimetro);
}

function CalcularAreaCirculo(){
    const input = document.getElementById("InputCirculo");
    const value = input.value;

    const area = areaCirculo(value);
    alert(area);
}