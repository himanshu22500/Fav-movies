import {getMovies} from '/getMovies.js'
export{input}
export {renderMovies}
export{watchList}
export { watchListBtn}
export {watchListDiv}

const watchListDiv=document.getElementById('watchlist-div')
const watchListBtn=document.getElementById('watchlist-btn')
const input=document.querySelector('input')
const moviesDiv=document.getElementById('bottom-div')
const serchBtn=document.getElementById('search-btn')
const watchList=[]
serchBtn.addEventListener('click',getMovies)
function renderMovies (movie) {
    moviesDiv.innerHTML=movie
    
}
moviesDiv.addEventListener('click',function (e) {
    if (e.target.className==='btn' & !watchList.includes(e.composedPath()[3])) {
        watchList.push(e.target.id)
       console.log(watchList)
       localStorage.setItem('watchList',JSON.stringify(watchList))
       
       e.target.classList.add('red-background')
       e.target.innerHTML=`
        <i class="fa-sharp fa-solid fa-circle-xmark"></i> Remove from watch list
    `
    }
    else if(e.target.classList.value.includes('red-background')){
        watchList.splice(watchList.indexOf(e.composedPath()[3]),1)
        localStorage.setItem('watchList',JSON.stringify(watchList))
        e.target.classList.remove('red-background')
        e.target.innerHTML=
        `
            <i class="fa-solid fa-circle-plus"></i> Add to watchlist
        `
        console.log(watchList)
 }
})

 
