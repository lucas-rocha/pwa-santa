

async function getCountries() {
    const response = await fetch("https://restcountries.com/v3.1/all")
    const data = response.json()
    return data
}

async function getCountry(country) {// 
    const response = await fetch(`https://restcountries.com/v3.1/name/${country}`)
    const data = response.json()[0]
    return data
}

let deferredPrompt; 

if('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('./service-worker.js')
            .then(registration => {
                console.log('Servico registrado: ', registration)
            })
            .catch(error => {
                console.error('Falha ao registrar o Servico: ', error)
            })
    })
}

window.addEventListener('beforeinstallprompt', (e) => {
  // Previne que o navegador mostre o prompt padrão
  e.preventDefault();
  deferredPrompt = e; // Salva o evento para uso posterior

  // Mostra o botão de instalação
  const installButton = document.getElementById('install-button');
  installButton.style.display = 'block';

  installButton.addEventListener('click', () => {
    // Mostra o prompt de instalação
    deferredPrompt.prompt();
    // Verifica a resposta do usuário
    deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === 'accepted') {
        console.log('Usuário aceitou instalar a PWA.');
      } else {
        console.log('Usuário recusou instalar a PWA.');
      }
      deferredPrompt = null; // Reseta o evento
    });
  });
});