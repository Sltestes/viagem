// Data/hora EXATA em que o percurso começou
const dataInicio = new Date("2025-12-06T00:00:00").getTime();

// Data/hora da viagem (dia 23)
const dataViagem = new Date("2026-01-23T21:30:00").getTime();

function atualizar() {
    const agora = new Date().getTime();

    // ===== CONTAGEM REGRESSIVA =====
    const tempoRestante = dataViagem - agora;

    if (tempoRestante <= 0) {
        document.getElementById("contador").innerHTML = "É hoje! Boa viagem! ✈️";
        document.getElementById("progresso").style.width = "100%";
        document.getElementById("onibus").style.left = "100%";
        return;
    }

    const dias = Math.floor(tempoRestante / (1000 * 60 * 60 * 24));
    const horas = Math.floor((tempoRestante / (1000 * 60 * 60)) % 24);
    const minutos = Math.floor((tempoRestante / (1000 * 60)) % 60);
    const segundos = Math.floor((tempoRestante / 1000) % 60);

    document.getElementById("contador").innerHTML =
        `${dias} dias · ${horas}h · ${minutos}m · ${segundos}s`;

    // ===== PROGRESSO EM TEMPO REAL =====
    const tempoTotal = dataViagem - dataInicio;
    const tempoPassado = agora - dataInicio;

    let progresso = tempoPassado / tempoTotal;
    progresso = Math.min(Math.max(progresso, 0), 1); // trava entre 0 e 1

    const porcentagem = progresso * 100;

    // Barra preenchida
    document.getElementById("progresso").style.width = `${porcentagem}%`;

    // Ônibus acompanha a barra
    document.getElementById("onibus").style.left = `calc(${porcentagem}% - 14px)`;
}

atualizar();
setInterval(atualizar, 1000);