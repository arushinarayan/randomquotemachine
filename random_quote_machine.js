async function getquote(){
  const response = await fetch('https://api.quotable.io/random?maxLength=50')
  const data = await response.json()
  const text = document.querySelector('#quotetext')
  text.innerHTML = (`${data.content} —${data.author}`)

  $('#tweet-button').attr(
    'href',
    'https://twitter.com/intent/tweet?&related=freecodecamp&text=' +
      encodeURIComponent('"' + data.content + '" -' + data.author)
  );

  $('#fb-share-button').attr(
    'href',
    'https://facebook.com/sharer.php?display=popup&u=https://arushinarayan.github.io/randomquotemachine/&p[quote]=' +encodeURIComponent('"' + data.content + '" -' + data.author)
  );
}
getquote();

