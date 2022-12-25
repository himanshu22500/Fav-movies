const moviesDiv=document.getElementById('bottom-div')
let items =localStorage.getItem('watchList')
let itemsArray=JSON.parse(items)
function getWatchlist(){
    if( items){
        if(itemsArray.length>0){
            let html=``
            for (const item of itemsArray) {
        
                fetch(`https://www.omdbapi.com/?apikey=ca0aec9d&i=${item}`)
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
                                <button class='btn red-background' id=${data.imdbID}> 
                                <i class="fa-sharp fa-solid fa-circle-xmark"></i> Remove from watch list
        
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
            
        }
    
}
    }
    

getWatchlist()
function renderMovies(movie){
    moviesDiv.innerHTML=movie
}
moviesDiv.addEventListener('click',e=>{
    if(e.target.classList.value.includes('red-background')){
        itemsArray.splice(itemsArray.indexOf(e.target.id),1)
        if (itemsArray.length>0) {
            localStorage.setItem('watchList',JSON.stringify(itemsArray))
            getWatchlist()
        }else{
            localStorage.clear('watchList')
            moviesDiv.innerHTML=`
            <div class="default-state" id="default-state">
            <p>Your watchlist is looking a little empty...</p>
             <a class='add-movie' href="index.html"><i class="fa-solid fa-circle-plus"></i> Let’s add some movies!</a>
        </div>
            `
        }
        
    }
})