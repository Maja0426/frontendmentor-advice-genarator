const quoute = document.querySelector('.quoute')
const id = document.querySelector('.advice-id')
const btn = document.querySelector('.dice')

async function sendGetRequest() {
  const response = await fetch('https://api.adviceslip.com/advice')
  const data = await response.json()
  id.innerText = data.slip.id
  quoute.innerText = data.slip.advice
}

btn.addEventListener('click', sendGetRequest)

sendGetRequest()
