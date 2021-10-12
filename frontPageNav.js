function goToMovieAgree() {
    window.location.assign("movie.html")
}

const movieNavCardBtn = document.getElementById('movieBtn')
const tvShowNavCardBtn = document.getElementById('tvShowBtn')


movieNavCardBtn.addEventListener("click", () => {
    window.location.assign("/movie.html")
})

tvShowNavCardBtn.addEventListener("click", () => {
    window.location.assign("/tvShows.html")
})
