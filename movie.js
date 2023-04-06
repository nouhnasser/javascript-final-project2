
const moviesHTML = document.querySelector('.showmovies');
async function main() {
  const moviesResponse = await fetch('https://www.omdbapi.com/?apikey=19414da8&s=black');
  const moviesData = await moviesResponse.json();

  if (moviesData.Search) {
    const moviesHTMLContent = moviesData.Search.map((movie) => { 
      
      return  `
        <div class="showmovies">
          <img src="${movie.Poster}" alt=""/>
          <h3 class="title">${movie.Title}</h3>
          <p class="year">${movie.Year}</p>
          <p class="imd"></p>
          <p class="type">${movie.Type}</p>
        </div>
      `;
    }).join('');

    moviesHTML.innerHTML = moviesHTMLContent;
  } else {
    console.error('No movies found ');
  }
}

main( );
