const textElement = document.querySelector('[data-text]')
const URL = 'https://api.chucknorris.io/jokes/random'

const fetchApi = async () => {
  const response = await fetch(URL);
  const data = await response.json();
    
    textElement.textContent = data.value
}
fetchApi()
let isLight = true;
const toggle = document.querySelector('[data-night]')
const nightMode = ()=>{
  isLight = !isLight;
  isLight ? toggle.innerText = "🌞" : toggle.innerText = "🌚";
  var rootElement = document.body;
  rootElement.classList.toggle("lightMode");
}