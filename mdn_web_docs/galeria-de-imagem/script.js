const displayImage = document.querySelector('.display-img');
const thumbBar = document.querySelector('.thumb-bar');

const images = [
    '1.jpeg',
    '2.jpeg',
    '3.jpeg',
    '4.jpeg',
    '5.jpeg',
];

for (const image of images) {
    const criandoImagem = document.createElement('img');
    criandoImagem.setAttribute('src', `../galeria-de-imagem/assets/images/${image}`);
    criandoImagem.classList.add(
        "rounded-xl", 
        "w-32", 
        "h-32",
        "cursor-pointer",
    );

    thumbBar.appendChild(criandoImagem);

    criandoImagem.addEventListener('click', subindoImagem => {
        displayImage.src = subindoImagem.target.src;
    });
}