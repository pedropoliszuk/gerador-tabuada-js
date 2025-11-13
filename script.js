document.getElementById("gerar").addEventListener("click", function() {
  const numero = parseInt(document.getElementById("numero").value);
  const resultadoDiv = document.getElementById("resultado");

  resultadoDiv.innerHTML = ""; // Limpa o resultado anterior

  if (isNaN(numero) || numero < 1 || numero > 10) {
    resultadoDiv.innerHTML = "<p style='color:red;'>Por favor, insira um número entre 1 e 10.</p>";
    return;
  }

  let tabuadaHTML = `<h2>Tabuada do ${numero}</h2>`;
  for (let i = 1; i <= 10; i++) {
    tabuadaHTML += `<p>${numero} x ${i} = ${numero * i}</p>`;
  }

  resultadoDiv.innerHTML = tabuadaHTML;
});
