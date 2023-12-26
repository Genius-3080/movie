let movieBox = movies.slice(0,100);
let elMovList = document.querySelector('.card__box')

movieBox.forEach((item) => {
    console.log(item);
    let newLi = document.createElement('li')
    newLi.innerHTML = `
    <div class="card" style="width: 18rem;">
    <a href="https://www.youtube.com/watch?v=${item.ytid}" target="_blank"><img src="https://i.ytimg.com/vi/${item.ytid}/hqdefault_live.jpg" class="card-img-top card__img" alt="..." target="_blank" href="https://www.youtube.com/watch?v=EL_ljAD1fno" ></a>
    <div class="card-body">
      <h5 class="card-title">${item.movie_year}</h5>
      <p class="card-text">${item.Title}</p>
     <p class="card-texts">${item.Categories}</p>
  
    </div>
  </div>
    `
    elMovList.appendChild(newLi)
})

