const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },
});

const birthdaySection = document.querySelector('.birthday__section');

const images = [
    {
        imageUrl: 'https://media.giphy.com/media/zbzdiXxWcLazap6Klk/giphy.gif',
        imageWidth: 400,
        imageAlt: 'Birthday',
    },
    {
        imageUrl: 'https://media.giphy.com/media/m6OomwWCojfS8/giphy.gif',
        imageWidth: 400,
        imageAlt: 'Birthday',
    },
];

const sweetAlert = (text, imageUrl, imageWidth, imageAlt) => {
    return Swal.fire({
        text,
        width: 400,
        padding: '3em',
        imageUrl,
        imageWidth,
        imageAlt,
        backdrop: `rgba(0,0,123,0.4)`,
    });
};

const start = async () => {
    // Ucapan Pertama
    let { isConfirmed: text1 } = await sweetAlert('Happy Birthday, Ari', images[0].imageUrl, images[0].imageWidth, images[0].imageAlt);

    // Ucapan Kedua
    if (text1) {
        await sweetAlert('Semoga sehat selalu yaa', images[1].imageUrl, images[1].imageWidth, images[1].imageAlt);
    }

    startConfetti();
    birthdaySection.style.display = 'flex';
};

start();
