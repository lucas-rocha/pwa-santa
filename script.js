

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