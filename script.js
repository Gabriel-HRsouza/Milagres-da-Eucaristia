function showDetails(milagre) {
    const detalheTexto = document.getElementById('detalhe-texto');

    if(milagre === 'milagre1') {
        detalheTexto.textContent = "Milagre de Lanciano: O pão e o vinho se transformaram em carne e sangue reais, ocorrendo no século VIII, na Itália.";
    } else if(milagre === 'milagre2') {
        detalheTexto.textContent = "Milagre de Buenos Aires: Em 1996, a hóstia se transformou em carne visível e analisada cientificamente.";
    } else {
        detalheTexto.textContent = "Clique em um milagre acima para ver mais informações.";
    }
}


const video = document.getElementById('video-lanciano');
video.addEventListener('contextmenu', e => e.preventDefault());