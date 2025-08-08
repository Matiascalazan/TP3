// Lado del cuadrado
    let lado = 7;

// Cálculos
    let area = lado * lado;
    let perimetro = lado * 4;

// Mostrar resultados
    console.log("Lado del cuadrado:", lado);
    console.log("Área:", area);
    console.log("Perímetro:", perimetro);

    document.getElementById("resultado").innerHTML =
        "Lado = " + lado + "<br>" +
        "Área = " + area + "<br>" +
        "Perímetro = " + perimetro;