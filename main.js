// getting element by their id of paragraph 
const jokeContainer = document.getElementById("joke");
// getting the buttons id
// api of the website which sends the joke 
const url = "https://v2.jokeapi.dev/joke/Programming,Dark?blacklistFlags=religious,political&type=single";

// geting the joke and changing into the randome by clicking the document.getElementById("btn")


let getJoke = async () => { //we use let for change everytime we click the button value may change so we use it
  jokeContainer.classList.remove("fade");//remove the fade elements before changeing the values
  try {
    const response = await fetch(url);
    const data = await response.json();
    jokeContainer.textContent = data.joke;
  } catch (error) {
    console.error(error);
  }
  jokeContainer.classList.add("fade");
};

(document.getElementById("btn")).addEventListener("click", getJoke);
getJoke();
