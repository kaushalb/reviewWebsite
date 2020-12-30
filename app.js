$(document).ready(() => {
    $('#searchBar').on('submit', (e) => {
        console.log($('#searchText').val());
        getMovie(searchText);
        e.preventDefault();
    })
});

function getMovie(searchText){
    axios.get('http://www.omdbapi.com/?apikey=64d7fa7'+'&t'+searchText).then((response) => {
        console.log(response);
    }).catch((err) => {
        console.log(err);
    });
}