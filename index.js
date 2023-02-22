const btnEl = document.getElementById("btn")

const jokeEl = document.getElementById("joke")

const apikey = "+doWDWoo6ysAOHWcL8HF3A==iV8XaPqRniA1RIIe";//API url

const apiURL="https://api.api-ninjas.com/v1/dadjokes?limit=1"//in MyAccount on website "API Ninjas"

const options = {
    method:"GET",
    headers:{
       "X-Api-Key": apikey,
    },
};



async function getJoke(){

    try {
        jokeEl.innerText = "Updating..."

    btnEl.disabled = true;

    btnEl.innerText = "Loading..."

    
  const response = await fetch(apiURL,options)
  const data = await response.json()
  console.log(data[0].joke)
  jokeEl.innerText = data[0].joke;

  btnEl.disabled = false;
  btnEl.innerText = "Tell Me A Joke"

    } catch (error) {
        jokeEl.innerText = "Error, check Internet connection"
        btnEl.innerText = "Tell Me A Joke"
        console.log(error)
    }

    
}

btnEl.addEventListener("click", getJoke)