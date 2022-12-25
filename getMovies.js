import {renderMovies} from '/index.js'
import{input} from '/index.js'

function getMovies() {
    let html=''
    if(input.value){
        fetch(`https://www.omdbapi.com/?apikey=ca0aec9d&s=${input.value}`)
        .then(res=>res.json())
        .then(function (data) {
            if(data.Search){
                for (const movie of data.Search) {
                    fetch(`https://www.omdbapi.com/?apikey=ca0aec9d&i=${movie.imdbID}`)
                        .then(res=>res.json())
                        .then(function(data){  
                            html+=`
                            <div class=movie>
                                <img src=${data.Poster}>
                                <div>
                                    <h3 id=title> ${data.Title} ⭐ ${data.imdbRating}</h3>
                                    
                                    <div class=info>
                                        <p>${data.Runtime}</p>
                                        <p>${data.Genre}</p>
                                        <button class=btn id=${data.imdbID}> 
                                            <i class="fa-solid fa-circle-plus"></i> Add to watchlist
        
                                        </button>
                                    </div>
                                    <p>${data.Plot}</p>
                                </div>
                            </div>
                            <hr style=color:black>
                        `
                        
                        renderMovies(html) 
                        }
                        
                        )
                        
                    }
            }else{
                alert('movie not found')
            }
            
                   
        }
        )
    }
   
}
export {getMovies}