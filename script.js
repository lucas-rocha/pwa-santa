

async function getCountries() {
    const response = await fetch("https://restcountries.com/v3.1/all")
    const data = response.json()

    const countries = []
    data.forEach(element => {
        countries.push({
            "nome": element.name.common,
            "continente": element.continents[0],
            "bandeiras": {
                "png": element.flags.png,
                "svg": element.flags.svg,
                "alt": element.flags.alt
            },
            "moedas": element.currencies,
            "populacao": element.population,
            "lingua": element.languages,
            "capital": element.capital
        })
    });

    return data
}

async function getCountry(country) {// 
    const response = await fetch(`https://restcountries.com/v3.1/name/${country}`)
    const data = response.json()[0]
    return data
}

getCountries("brazil")
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