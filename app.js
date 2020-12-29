$(document).ready(() => {
    $('#searchBar').on('submit', (e) => {
        console.log($('#searchText').val());
        getMovie(searchText);
        e.preventDefault();
    })
});

function getMovie(searchText){
    axios.get("http://www.omdbapi.com/?i=tt3896198&apikey=64d7fa7"+searchText).then((response) => {
        console.log(response);
    }).catch((err) => {
        console.log(err);
    });
}