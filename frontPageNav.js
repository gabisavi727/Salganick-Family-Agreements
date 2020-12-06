function goToMovieAgree() {
    window.location.assign("movie.html")
}

const movieNavCardBtn = document.getElementById('movieBtn')

movieNavCardBtn.addEventListener("click", () => {
    window.location.assign("/movie.html")
})