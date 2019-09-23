document.addEventListener(`DOMContentLoaded`, function(){
  console.log("Fine!")
})

fetch(`https://api.adviceslip.com/advice`)
.then(response => response.json())
.then(renderAdvice)

// ************************************************************************************
const mainDiv = document.getElementById("main")
const pTag = document.createElement("p")
const saveBtn = document.createElement("button")
saveBtn.className = "save-btn"
saveBtn.innerText = "SAVE"
mainDiv.append(pTag, saveBtn)
const savedAdvice = document.getElementById("saved-advice")
// ************************************************************************************

function renderAdvice (data){
  let i = data.slip.advice;
  console.log(i)
  pTag.innerHTML = `${i}`
};

saveBtn.addEventListener('click', saveThisAdvice)

function saveThisAdvice (event) {
  event.preventDefault()
  if (event.target.classList.contains("save-btn")) {
  const newAdvice = document.createElement("li")
  newAdvice.innerHTML = pTag.innerHTML
  savedAdvice.append(newAdvice)

  fetch(`http://localhost:3000/advices`,{
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ description: pTag.innerHTML})
  })
  .then(response => response.json())
  .then(renderUserAdvices)
  }
}

function renderUserAdvices (data) {
  console.log(data)
}
