// Datas iniciais
const inicio = new Date("2025-12-06").getTime();
const viagem = new Date("2026-01-22").getTime();

function atualizar() {
    const agora = new Date().getTime();

    // CONTAGEM REGRESSIVA
    const tempoRestante = viagem - agora;

    if (tempoRestante <= 0) {
        document.getElementById("contador").innerHTML = "É hoje! Boa viagem! ✈️";
        document.getElementById("onibus").style.left = "100%";
        document.getElementById("progresso").style.width = "100%";
        return;
    }

    const dias = Math.floor(tempoRestante / (1000 * 60 * 60 * 24));
    const horas = Math.floor((tempoRestante % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((tempoRestante % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((tempoRestante % (1000 * 60)) / 1000);

    document.getElementById("contador").innerHTML =
        `${dias} dias · ${horas}h · ${minutos}m · ${segundos}s`;

    // MOVIMENTO DO ÔNIBUS + BARRA DE PROGRESSO
    const totalDias = viagem - inicio;
    const diasPassados = agora - inicio;
    let progresso = diasPassados / totalDias;
    
    progresso = Math.min(Math.max(progresso, 0), 1); // limita entre 0 e 1

    const porcentagem = progresso * 100;

    // Move o ônibus
    document.getElementById("onibus").style.left = `${porcentagem}%`;

    // Preenche a barra
    document.getElementById("progresso").style.width = `${porcentagem}%`;
}

atualizar();
setInterval(atualizar, 1000);
