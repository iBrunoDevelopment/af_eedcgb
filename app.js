/* ================================================
   NAVEGAÇÃO ENTRE SLIDES
================================================ */

const slides = document.querySelectorAll(".slide");
const pills = document.querySelectorAll(".timeline-pill");
let currentSlide = 0;

function goToSlide(n) {
    slides[currentSlide].classList.remove("active");
    pills[currentSlide].classList.remove("active");

    currentSlide = n;

    slides[currentSlide].classList.add("active");
    pills[currentSlide].classList.add("active");
}

pills.forEach((pill, index) => {
    pill.addEventListener("click", () => goToSlide(index));
});

/* ================================================
   ACCORDION
================================================ */

document.querySelectorAll(".accordion-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        const section = btn.parentElement;
        section.classList.toggle("open");
    });
});

/* ================================================
   DADOS FINANCEIROS (CALCULADOS NOS BASTIDORES)
================================================ */

// =======================
// PDDE MANUTENÇÃO
// =======================
const pddeManut = {
    saldoInicial: 421.69 + 294.35 + 4396.00 + 1099.00,
    despesas: 4387.38 + 420.90 + 294.35,
    saldoCusteio: 9.41,
    saldoCapital: 1099,
};
pddeManut.saldoFinal = pddeManut.saldoInicial - pddeManut.despesas;

// =======================
// QUALIDADE
// =======================
const qualidade = {
    saldoInicial: 75.12 + 1049.26,
    despesas: 1048.00,
    saldoCusteio: 75.12,
    saldoCapital: 1.26,
};
qualidade.saldoFinal = qualidade.saldoInicial - qualidade.despesas;

// =======================
// FARDAMENTO
// =======================
const fardamento = {
    saldoInicial: 11938.00,
    despesas: 11900.00,
};
fardamento.saldoFinal = fardamento.saldoInicial - fardamento.despesas;

// =======================
// MANUTENÇÃO PREDIAL (CUSTEIO + CAPITAL GERAL)
// =======================
const predial = {
    saldoInicial: (-7754.73) + 9928,
    despesas: 1300.00 + 1316.55,
    saldoCusteio: -443.28,
    saldoCapital: 5289.21,
};
predial.saldoFinal = predial.saldoInicial - predial.despesas;

// =======================
// GÁS
// =======================
const gas = {
    saldoInicial: 8540,
    despesas: 0,
    
};
gas.saldoFinal = gas.saldoInicial - gas.despesas;

// =======================
// INTERNET
// =======================
const internet = {
    saldoInicial: 5480.69 + 5000,
    despesas: 1150.00 + 450.00 + 1980.00,
    saldoMensalidade: 5480.69,
    saldoManutencao: 1420,
    
};
internet.saldoFinal = internet.saldoInicial - internet.despesas;

// =======================
// PARQUE AQUÁTICO
// =======================
const parque = {
    saldoInicial: -241.39,
    despesas: 8446.50,
};
parque.saldoFinal = parque.saldoInicial - parque.despesas;

// =======================
// GINÁSIO / QUADRA
// =======================
const ginasio = {
    saldoInicial: 2320.00 + 1000.00 + 1500.00,
    despesas: 0,
};
ginasio.saldoFinal = ginasio.saldoInicial - ginasio.despesas;

// =======================
// PMM – Mais Merenda
// =======================
const pmm = {
    saldoInicial: 1882.00 + 93637.82,
    despesas:
        13768.70 + 10102.00 + 9634.00 + 10990.00 + 11432.00 +
        9414.10 + 13768.70 + 1666.00 + 19189.60 + 10102.00 +
        13019.95 + 8424.74 + 2734.80 + 16145.75,
};
pmm.saldoFinal = pmm.saldoInicial - pmm.despesas;

// =======================
// PNAE
// =======================
const pnae = {
    saldoInicial: 2000.00 + 55505.99 + 27843.04 + 132652.18,
    despesas:
        10402.77 + 2922.81 + 2254.98 + 17923.05 + 2992.81 +
        7581.20 + 20961.85 + 22147.80 + 9848.66,
};
pnae.saldoFinal = pnae.saldoInicial - pnae.despesas;

/* ================================================
   GERAR GRÁFICOS
================================================ */

function gerarGrafico(idCanvas, titulo, dados) {
    new Chart(document.getElementById(idCanvas), {
        type: "bar",
        data: {
            labels: ["Saldo Inicial", "Despesas", "Saldo Final"],
            datasets: [
                {
                    label: titulo,
                    data: [dados.saldoInicial, dados.despesas, dados.saldoFinal],
                    backgroundColor: ["#3498db", "#e74c3c", "#2c3e50"],
                },
            ],
        },
        options: { responsive: true, maintainAspectRatio: false },
    });
}

// Slide 1 – Geral
new Chart(document.getElementById("chart-geral"), {
    type: "pie",
    data: {
        labels: ["Reprogramado", "Creditado", "Despesas"],
        datasets: [
            {
                data: [122727.26, 256695.00, 288471.20],
                backgroundColor: ["#2c3e50", "#3498db", "#e74c3c"],
            },
        ],
    },
    options: { responsive: true, maintainAspectRatio: false },
});

// Demais slides
gerarGrafico("chart-pdde-manut", "PDDE Manutenção", pddeManut);
gerarGrafico("chart-qualidade", "PDDE Qualidade", qualidade);
gerarGrafico("chart-fardamento", "Fardamento", fardamento);
gerarGrafico("chart-predial", "Manutenção Predial", predial);
gerarGrafico("chart-internet", "Internet", internet);
gerarGrafico("chart-gas", "Gás", gas);
gerarGrafico("chart-parque", "Parque Aquático", parque);
gerarGrafico("chart-ginasio", "Ginásio / Quadra", ginasio);
gerarGrafico("chart-pmm", "PMM – Mais Merenda", pmm);
gerarGrafico("chart-pnae", "PNAE – Alimentação Escolar", pnae);

/* ================================================
   DETALHAMENTO AUTOMÁTICO NOS ACCORDIONS
================================================ */

// Função para formatar moeda no padrão brasileiro
function formatarMoeda(valor) {
    return valor.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    });
}

// Seu código corrigido
 document.getElementById("detalhe-pdde-manut").innerHTML = `
            <p><strong>⭐Saldo Inicial:</strong> ${formatarMoeda(pddeManut.saldoInicial)}
            <span style="
                color: #7f8c8d;
                font-size: 0.9em;
                font-style: italic;
                margin-left: 5px;
            ">
                ← saldo reprogramado + saldo creditado.
            </span> </p>

            <p><strong>Despesas:</strong> ${formatarMoeda(pddeManut.despesas)}</p>
            <hr style="margin: 15px 0; border: none; border-top: 1px dashed #ddd;">
            <p><strong>Saldo Final Custeio:</strong> ${formatarMoeda(pddeManut.saldoCusteio)}</p>
            <p><strong>Saldo Final Capital:</strong> ${formatarMoeda(pddeManut.saldoCapital)}</p>
            <hr style="margin: 15px 0; border: none; border-top: 1px dashed #ddd;">
            
            <div style="
                background: linear-gradient(135deg, #e8f5e8, #c8e6c9);
                padding: 20px;
                border-radius: 10px;
                border-left: 5px solid #27ae60;
                box-shadow: 0 4px 8px rgba(0,0,0,0.1);
                margin-top: 20px;
                text-align: center;
            ">
                <p style="
                    margin: 0;
                    font-size: 1.4em;
                    font-weight: bold;
                    color: #2c3e50;
                ">
                    💰 SALDO FINAL GERAL: 
                    <span style="color: #27ae60; font-size: 1.5em;">
                        ${formatarMoeda(pddeManut.saldoFinal)}
                    </span>
                </p>
                <p style="margin: 8px 0 0 0; color: #7f8c8d; font-style: italic;">
                    Valor total disponível para utilização
                </p>
            </div>
        `;
document.getElementById("detalhe-qualidade").innerHTML = `
            <p><strong>⭐Saldo Inicial:</strong> ${formatarMoeda(qualidade.saldoInicial)}
            <span style="
                color: #7f8c8d;
                font-size: 0.9em;
                font-style: italic;
                margin-left: 5px;
            ">
                ← saldo reprogramado + saldo creditado.
            </span> </p>

            <p><strong>Despesas:</strong> ${formatarMoeda(qualidade.despesas)}</p>
            <hr style="margin: 15px 0; border: none; border-top: 1px dashed #ddd;">
            <p><strong>Saldo Final Custeio:</strong> ${formatarMoeda(qualidade.saldoCusteio)}</p>
            <p><strong>Saldo Final Capital:</strong> ${formatarMoeda(qualidade.saldoCapital)}</p>
            <hr style="margin: 15px 0; border: none; border-top: 1px dashed #ddd;">
            
            <div style="
                background: linear-gradient(135deg, #e8f5e8, #c8e6c9);
                padding: 20px;
                border-radius: 10px;
                border-left: 5px solid #27ae60;
                box-shadow: 0 4px 8px rgba(0,0,0,0.1);
                margin-top: 20px;
                text-align: center;
            ">
                <p style="
                    margin: 0;
                    font-size: 1.4em;
                    font-weight: bold;
                    color: #2c3e50;
                ">
                    💰 SALDO FINAL GERAL: 
                    <span style="color: #27ae60; font-size: 1.5em;">
                        ${formatarMoeda(qualidade.saldoFinal)}
                    </span>
                </p>
                <p style="margin: 8px 0 0 0; color: #7f8c8d; font-style: italic;">
                    Valor total disponível para utilização
                </p>
            </div>
        `;

document.getElementById("detalhe-fardamento").innerHTML = `
     <p><strong>⭐Saldo Inicial:</strong> ${formatarMoeda(fardamento.saldoInicial)}
            <span style="
                color: #7f8c8d;
                font-size: 0.9em;
                font-style: italic;
                margin-left: 5px;
            ">
                ← sem saldo creditado no exercício 2025.2.
            </span> </p>

    <p><strong>Despesas:</strong> ${formatarMoeda(fardamento.despesas)}</p>

    <div style="
                background: linear-gradient(135deg, #e8f5e8, #c8e6c9);
                padding: 20px;
                border-radius: 10px;
                border-left: 5px solid #27ae60;
                box-shadow: 0 4px 8px rgba(0,0,0,0.1);
                margin-top: 20px;
                text-align: center;
            ">
                <p style="
                    margin: 0;
                    font-size: 1.4em;
                    font-weight: bold;
                    color: #2c3e50;
                ">
                    💰 SALDO FINAL GERAL: 
                    <span style="color: #27ae60; font-size: 1.5em;">
                        ${formatarMoeda(fardamento.saldoFinal)}
                    </span>
                </p>
                <p style="margin: 8px 0 0 0; color: #7f8c8d; font-style: italic;">
                    Valor total disponível para utilização
                </p>
            </div>
        `;

document.getElementById("detalhe-predial").innerHTML = `
    <p><strong>⭐Saldo Inicial:</strong> ${formatarMoeda(predial.saldoInicial)}
            <span style="
                color: #7f8c8d;
                font-size: 0.9em;
                font-style: italic;
                margin-left: 5px;
            ">
                ← saldo reprogramado + saldo creditado.
            </span> </p>

    <p><strong>Despesas:</strong> ${formatarMoeda(predial.despesas)}</p>
    <hr style="margin: 15px 0; border: none; border-top: 1px dashed #ddd;">
    <p><strong>Saldo Final Custeio:</strong> ${formatarMoeda(qualidade.saldoCusteio)}</p>
    <p><strong>Saldo Final Capital:</strong> ${formatarMoeda(qualidade.saldoCapital)}</p>
    <hr style="margin: 15px 0; border: none; border-top: 1px dashed #ddd;">

    <div style="
                background: linear-gradient(135deg, #e8f5e8, #c8e6c9);
                padding: 20px;
                border-radius: 10px;
                border-left: 5px solid #27ae60;
                box-shadow: 0 4px 8px rgba(0,0,0,0.1);
                margin-top: 20px;
                text-align: center;
            ">
                <p style="
                    margin: 0;
                    font-size: 1.4em;
                    font-weight: bold;
                    color: #2c3e50;
                ">
                    💰 SALDO FINAL GERAL: 
                    <span style="color: #27ae60; font-size: 1.5em;">
                        ${formatarMoeda(predial.saldoFinal)}
                    </span>
                </p>
                <p style="margin: 8px 0 0 0; color: #7f8c8d; font-style: italic;">
                    Valor total disponível para utilização
                </p>
            </div>
        `;

document.getElementById("detalhe-gas").innerHTML = `
    <p><strong>⭐Saldo Inicial:</strong> ${formatarMoeda(gas.saldoInicial)}
            <span style="
                color: #7f8c8d;
                font-size: 0.9em;
                font-style: italic;
                margin-left: 5px;
            ">
                ← sem saldo creditado no exercício 2025.2
            </span> </p>

    <p><strong>Despesas:</strong> ${formatarMoeda(gas.despesas)}</p>

    <div style="
                background: linear-gradient(135deg, #e8f5e8, #c8e6c9);
                padding: 20px;
                border-radius: 10px;
                border-left: 5px solid #27ae60;
                box-shadow: 0 4px 8px rgba(0,0,0,0.1);
                margin-top: 20px;
                text-align: center;
            ">
                <p style="
                    margin: 0;
                    font-size: 1.4em;
                    font-weight: bold;
                    color: #2c3e50;
                ">
                    💰 SALDO FINAL GERAL: 
                    <span style="color: #27ae60; font-size: 1.5em;">
                        ${formatarMoeda(gas.saldoFinal)}
                    </span>
                </p>
                <p style="margin: 8px 0 0 0; color: #7f8c8d; font-style: italic;">
                    Valor total disponível para utilização
                </p>
            </div>
`;
document.getElementById("detalhe-internet").innerHTML = `
    <p><strong>⭐Saldo Inicial:</strong> ${formatarMoeda(internet.saldoInicial)}
            <span style="
                color: #7f8c8d;
                font-size: 0.9em;
                font-style: italic;
                margin-left: 5px;
            ">
                ← sem saldo creditado no exercício 2025.2
            </span> </p>

    <p><strong>Despesas:</strong> ${formatarMoeda(internet.despesas)}</p>
    <hr style="margin: 15px 0; border: none; border-top: 1px dashed #ddd;">
    <p><strong>Saldo Final Mensalidade:</strong> ${formatarMoeda(internet.saldoMensalidade)}</p>
    <p><strong>Saldo Final Manutenção:</strong> ${formatarMoeda(internet.saldoManutencao)}</p>
    <hr style="margin: 15px 0; border: none; border-top: 1px dashed #ddd;">

    <div style="
                background: linear-gradient(135deg, #e8f5e8, #c8e6c9);
                padding: 20px;
                border-radius: 10px;
                border-left: 5px solid #27ae60;
                box-shadow: 0 4px 8px rgba(0,0,0,0.1);
                margin-top: 20px;
                text-align: center;
            ">
                <p style="
                    margin: 0;
                    font-size: 1.4em;
                    font-weight: bold;
                    color: #2c3e50;
                ">
                    💰 SALDO FINAL GERAL: 
                    <span style="color: #27ae60; font-size: 1.5em;">
                        ${formatarMoeda(internet.saldoFinal)}
                    </span>
                </p>
                <p style="margin: 8px 0 0 0; color: #7f8c8d; font-style: italic;">
                    Valor total disponível para utilização
                </p>
            </div>
`;

document.getElementById("detalhe-parque").innerHTML = `
    <p><strong>Saldo Inicial:</strong> ${formatarMoeda(parque.saldoInicial)}</p>
    <p><strong>Despesas:</strong> ${formatarMoeda(parque.despesas)}</p>
    <p><strong>Saldo Final:</strong> ${formatarMoeda(parque.saldoFinal)}</p>
`;

document.getElementById("detalhe-ginasio").innerHTML = `
    <p><strong>Saldo Inicial:</strong> ${formatarMoeda(ginasio.saldoInicial)}</p>
    <p><strong>Despesas:</strong> ${formatarMoeda(ginasio.despesas)}</p>
    <p><strong>Saldo Final:</strong> ${formatarMoeda(ginasio.saldoFinal)}</p>
`;

document.getElementById("detalhe-pmm").innerHTML = `
    <p><strong>Saldo Inicial:</strong> ${formatarMoeda(pmm.saldoInicial)}</p>
    <p><strong>Despesas:</strong> ${formatarMoeda(pmm.despesas)}</p>
    <p><strong>Saldo Final:</strong> ${formatarMoeda(pmm.saldoFinal)}</p>
`;

document.getElementById("detalhe-pnae").innerHTML = `
    <p><strong>Saldo Inicial:</strong> ${formatarMoeda(pnae.saldoInicial)}</p>
    <p><strong>Despesas:</strong> ${formatarMoeda(pnae.despesas)}</p>
    <p><strong>Saldo Final:</strong> ${formatarMoeda(pnae.saldoFinal)}</p>
`;

/* ============================================================
   AUTO-SCROLL PARA O ACCORDION ABRIR NO CENTRO DA TELA
============================================================ */

document.querySelectorAll(".accordion-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        const section = btn.parentElement;

        // // Abrir/fechar
        // section.classList.toggle("open");

        // Quando abrir, rolar automaticamente para o accordion
        if (section.classList.contains("open")) {
            setTimeout(() => {
                section.scrollIntoView({
                    behavior: "smooth",
                    block: "center"
                });
            }, 150);
        }
    });
});
