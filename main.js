import './style.css'

async function fetchDataFromAPIEndpoint(){
    const cards = await fetch('/api/fetchNotion')
    .then((res)=>res.json()
    .then((data)=> data.results));

    document.querySelector('.card-container').innerHTML =
    cards.map((card)=> `
    
    <article class="card">
    <a href = "${card.properties.Link.url}">
<img
class="card__image"
style = "width:200px"
  src="${card.properties.Image.files[0].external.url}"
  alt="${card.properties.Name.title[0].plain_text}"
  
/>
<h2 class="card__heading">${card.properties.Name.title[0].plain_text}</h2>
<br>
<div class="card__content">
  <p id = "card__content__text" style = "font-size: 1.5vh">
  ${card.properties.Content.rich_text[0].plain_text}
  </p>
</div>
</a>
</article>

    `).join('')

   
}

fetchDataFromAPIEndpoint();

// <a href="${card.properties.Link.url}" class="card__btn">${card.properties.Btn_text.rich_text[0].plain_text}</a>

