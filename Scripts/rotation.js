const images = [
    "../Assets/Images/landscape1.jpg",
    "../Assets/Images/landscape2.jpg",
    "../Assets/Images/landscape3.jpg",
    "../Assets/Images/landscape4.jpg",
    "../Assets/Images/landscape5.jpg",
    "../Assets/Images/landscape6.jpg",
    "../Assets/Images/landscape7.jpg",
    "../Assets/Images/landscape8.jpg",
    "../Assets/Images/landscape9.jpg",
    "../Assets/Images/landscape10.jpg",
    "../Assets/Images/landscape11.jpg",
    "../Assets/Images/landscape12.jpg",
    "../Assets/Images/landscape13.jpg",
    "../Assets/Images/landscape14.jpg",
    "../Assets/Images/landscape15.jpg",
    "../Assets/Images/landscape16.jpg",
    "../Assets/Images/landscape17.jpg",
    "../Assets/Images/landscape18.jpg",
    "../Assets/Images/landscape19.jpg",
    "../Assets/Images/landscape20.jpg",
    "../Assets/Images/landscape21.jpg",
    "../Assets/Images/landscape22.jpg",
    "../Assets/Images/landscape23.jpg",
    "../Assets/Images/landscape24.jpg",
    "../Assets/Images/landscape25.jpg",
    "../Assets/Images/landscape26.jpg",
    "../Assets/Images/landscape27.jpg",
    "../Assets/Images/landscape28.jpg",
    "../Assets/Images/landscape29.jpg",
    "../Assets/Images/landscape30.jpg",
    "../Assets/Images/landscape31.jpg",
    "../Assets/Images/landscape32.jpg",
    "../Assets/Images/landscape33.jpg",
    "../Assets/Images/landscape34.jpg",
    "../Assets/Images/landscape35.jpg",
    "../Assets/Images/landscape36.jpg",
    "../Assets/Images/landscape37.jpg",
    "../Assets/Images/landscape38.jpg",
    "../Assets/Images/landscape39.jpg",
    "../Assets/Images/landscape40.jpg",
    "../Assets/Images/landscape41.jpg",
    "../Assets/Images/landscape42.jpg",
    "../Assets/Images/landscape43.jpg",
    "../Assets/Images/landscape44.jpg",
    "../Assets/Images/landscape45.jpg",
    "../Assets/Images/landscape46.jpg",
    "../Assets/Images/landscape47.jpg",
    "../Assets/Images/landscape48.jpg",
    "../Assets/Images/landscape49.jpg",
    "../Assets/Images/landscape50.jpg",
    "../Assets/Images/landscape51.jpg",
    "../Assets/Images/landscape52.jpg",
    "../Assets/Images/landscape53.jpg",
    "../Assets/Images/landscape54.jpg",
    "../Assets/Images/landscape55.jpg",
    "../Assets/Images/landscape56.jpg",
    "../Assets/Images/landscape57.jpg",
    "../Assets/Images/landscape58.jpg",
    "../Assets/Images/landscape59.jpg"
];

// document.getElementById("count").textContent =
    // `Image Count: ${images.length}`;

const carousel = document.getElementById("slideshow");
const fileNameElement = document.getElementById("fileName");

function showRandomImage() {

    carousel.classList.add("fade-out");

    setTimeout(() => {

        const randomImage =
            images[Math.floor(Math.random() * images.length)];

        const fileName =
            randomImage.split("/").pop();

        carousel.style.backgroundImage =
            `url(${randomImage})`;

        fileNameElement.textContent =
            `Background filename: ${fileName}`;

        console.log(fileName);

        carousel.classList.remove("fade-out");

    }, 2000);
}

// Initial image
showRandomImage();

// Change every 5 seconds
setInterval(showRandomImage, 5000);