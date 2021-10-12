function goToMovieAgree() {
    window.location.assign("movie.html")
}

const movie = document.getElementById('movieBtn')
const tvShow = document.getElementById('tvShowBtn')


movie.addEventListener("click", () => {
    window.location.assign("/movie.html")
})

tvShow.addEventListener("click", () => {
    window.location.assign("/tvShows.html")
})
