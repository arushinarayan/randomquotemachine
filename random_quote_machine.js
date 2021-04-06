async function getquote(){
  const response = await fetch('https://api.quotable.io/random?maxLength=50')
  const data = await response.json()
  const text = document.querySelector('#quotetext')
  text.innerHTML = (`${data.content} —${data.author}`)
}
getquote();
