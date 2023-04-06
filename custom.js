const btnElement = document.getElementById('btn');
const pictureElement = document.getElementById('picture');
const artistName = document.getElementById('picture-name');





const apiUrl = 'https://api.catboys.com/img';

btnElement.addEventListener('click', async() =>{
    try {
        artistName.innerText = `Waiting...`;
        btnElement.disabled = true;
        const response = await fetch(apiUrl)
        const data = await response.json()
        btnElement.disabled = false;

        const anime = data.url;
        const artist = data.artist;
        pictureElement.src = `${anime}`;
        artistName.innerText = `Name: ${artist}`;
    } catch (error) {
        pictureElement.src = '';
        artistName.innerText = `There has an unknown error. Please try again later.`
    }
})