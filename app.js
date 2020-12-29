$(document).ready(() => {
    $('#searchBar').on('submit', (e) => {
        console.log($('#searchText').val());
        e.preventDefault();
    })
});

function getMovie(searchText){

}