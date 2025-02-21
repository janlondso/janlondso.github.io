let mainInfo = document.getElementById("info");

let moreInfo = document.getElementById('more-info');

let readMore = document.getElementById("read-more");

// Let's add a click event listener to the readMore button

function showMoreInfo(event){
    moreInfo.style.display = 'block';

}
readMore.addEventListener('click', showMoreInfo);


// This function will close the more-info text when user click on it

function hideMoreInfo(event){
    moreInfo.style.display = 'none';
}
moreInfo.addEventListener('click', hideMoreInfo);

