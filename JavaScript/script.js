const getBTN = document.getElementById('btn')
const animeBox = document.querySelector('.anime-box')
const anime = document.querySelector('.anime')

const api_url = `https://api.catboys.com/img`

getBTN.addEventListener('click', async function () {
    const response = await fetch(api_url)
    const image = await response.json()
    console.log(image)
    anime.src = image.url
    animeBox.style.display = 'block'
})
