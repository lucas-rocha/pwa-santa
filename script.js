

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

emdev("brazil")
  .then(data => {
    if (data) {
      data.forEach(country => {
        console.log(country);
      });
    } else {
      console.error('Não foi possível obter os dados dos países.');
    }
  })
  .catch(error => {
    console.error('Erro:', error);
  });

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