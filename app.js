$(document).ready(() => {
    $('#searchBar').on('submit', (e) => {
        console.log($('#searchText').val());
        getMovie($('#searchText').val());
        e.preventDefault();
    })
});

function getMovie(searchText){
    axios.get('http://www.omdbapi.com/?apikey=64d7fa7'+'&s='+searchText).then((response) => {
        console.log(response);

        let movies = response.data.Search;
        let output = '';
        $.each(movies, (index, movie) => {
            output += `
                <div class="col-md-3">
                    <div class="well text-center">
                        <img src="${movie.Poster}">
                        <h5>${movie.Title}</h5>
                        <a onclick="movieSelected('${movie.imdbID}')" class="btn btn-primary" href="#">Check Review</a>
                    </div>
                </div>       
            `;
        })

        $('#movies').html(output);

    }).catch((err) => {
        console.log(err);
    });
}