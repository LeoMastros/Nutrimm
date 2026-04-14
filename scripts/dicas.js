function calcularIMC() {
  // Pegando os elementos do DOM
  const inputPeso = document.getElementById("peso");
  const inputAltura = document.getElementById("altura");
  const resultado = document.getElementById("resultado");

  // Convertendo valores
  const peso = parseFloat(inputPeso.value);
  const altura = parseFloat(inputAltura.value);

  // Validação simples
  if (isNaN(peso) || isNaN(altura) || altura <= 0) {
    alert("Por favor, insira valores válidos para peso e altura.");
    return;
  }

  // Cálculo
  const imc = peso / (altura * altura);
  let classificacao = "";

  if (imc < 18.5) {
    classificacao = "Abaixo do peso";
  } else if (imc < 25) {
    classificacao = "Peso normal";
  } else if (imc < 30) {
    classificacao = "Sobrepeso";
  } else {
    classificacao = "Obesidade";
  }

  // Exibindo na tela
  resultado.innerHTML = `Seu IMC é ${imc.toFixed(2)} (${classificacao})`;
}

function calcularAgua() {
    // Busca pelo ID específico da Água
    const peso = parseFloat(document.getElementById('pesoAgua').value);
    const campo = document.getElementById('Camporesultado');

    if (peso > 0) {
        const litros = (peso * 36) / 1000;
        campo.innerHTML = `Sua meta é: <strong>${litros.toFixed(2)}L</strong>`;
    } else {
        alert("Por favor, insira o seu peso na calculadora de água.");
    }
}
