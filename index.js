

  // Function to set a random image as the background.
function setRandomImageAsBackground() {
  let r=Math.floor(Math.random() * 98)+1;
  const randomImageUrl = "./Images/"+r+".jpg";
  document.body.style.backgroundImage = `url('${randomImageUrl}')`;
   
  
}
// Set a random image as the background when the page loads.
setRandomImageAsBackground();

// // To store in local storage
// document.getElementById('addImageButton').addEventListener('click', handleFileInput);


// function handleFileInput() {
//   const input = document.createElement('input');
//   input.type = 'file';
//   input.accept = 'image/*';
//   input.multiple = true;

//   input.addEventListener('change', () => {
//     const selectedImages = Array.from(input.files);

//     // Get the current index from localStorage or initialize it to 0.
//     let currentIndex = parseInt(localStorage.getItem('imageIndex')) || 0;

//     // Store each selected image in local storage with a unique key.
//     selectedImages.forEach((file) => {
//       const key = `image_${currentIndex}`;
//       const reader = new FileReader();

//       reader.onload = function () {
//         localStorage.setItem(key, reader.result);
//         alert(`Image ${file.name} stored as ${key} in local storage.`);

//         // Increment the index for the next image.
//         currentIndex++;
//         localStorage.setItem('imageIndex', currentIndex);
//       };

//       reader.readAsDataURL(file);
//     });
//   });

//   input.click();
// }
// document.getElementById('view').addEventListener('click', storageImages);
// // like button
const heartIcon = document.querySelector(".like-button .heart-icon");
const likesAmountLabel = document.querySelector(".like-button .likes-amount");
let userId = localStorage.getItem('userId');

if (!userId) {
    userId = generateUserId();
    localStorage.setItem('userId', userId);
}

let likedImages = JSON.parse(localStorage.getItem('likedImages')) || {};

updateLikeDisplay(); // Update like button based on stored data

heartIcon.addEventListener("click", () => {
    const currentBackground = document.body.style.backgroundImage;
    const imageUrl = currentBackground.replace('url("', '').replace('")', '');

    let totalLikes = likedImages[imageUrl] || 0;
    let likedByUser = likedImages[`${userId}_${imageUrl}`] || false;

    if (!likedByUser) {
        totalLikes++;
        likedImages[`${userId}_${imageUrl}`] = true;
    } else {
        totalLikes--;
        delete likedImages[`${userId}_${imageUrl}`];
    }

    likedImages[imageUrl] = totalLikes;

    localStorage.setItem('likedImages', JSON.stringify(likedImages));
    updateLikeDisplay();
});

function updateLikeDisplay() {
    const currentBackground = document.body.style.backgroundImage;
    const imageUrl = currentBackground.replace('url("', '').replace('")', '');

    let totalLikes = likedImages[imageUrl] || 0;
    let likedByUser = likedImages[`${userId}_${imageUrl}`] || false;

    heartIcon.classList.toggle("liked", likedByUser);
    likesAmountLabel.innerHTML = totalLikes;
}

function generateUserId() {
    return '_' + Math.random().toString(36).substr(2, 9);
}





//download
const downloadButton = document.querySelector(".download-button");
const downloadLink = document.getElementById("download-link");

downloadButton.addEventListener("click", () => {
    // Get the current background image URL
    const currentBackground = document.body.style.backgroundImage;
    const imageUrl = currentBackground.replace('url("', '').replace('")', '');

    // Set the download link attributes
    downloadLink.href = imageUrl;
    downloadLink.download = "image.jpg";

    // Simulate a click to trigger the download
    downloadLink.click();
});
//Share 
const whatsappButton = document.querySelector('.whatsapp a');
whatsappButton.addEventListener('click', () => {
    // Get the current background image URL
    const currentBackground = document.body.style.backgroundImage;
    const imageUrl = currentBackground.replace('url("', '').replace('")', '');

    // Compose the WhatsApp share message with the image URL
    const whatsappMessage = `Check out this image: ${imageUrl}`;

    // Generate the WhatsApp share link
    const whatsappShareLink = `https://wa.me/?text=${encodeURIComponent(whatsappMessage)}`;

    // Open the WhatsApp share link in a new tab
    window.open(whatsappShareLink);
});
const facebookButton = document.querySelector('.facebook a');
facebookButton.addEventListener('click', () => {
    const currentBackground = document.body.style.backgroundImage;
    const imageUrl = currentBackground.replace('url("', '').replace('")', '');
    const facebookShareLink = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(imageUrl)}`;
    window.open(facebookShareLink);
});

const twitterButton = document.querySelector('.twitter a');
twitterButton.addEventListener('click', () => {
    const currentBackground = document.body.style.backgroundImage;
    const imageUrl = currentBackground.replace('url("', '').replace('")', '');
    const twitterShareLink = `https://twitter.com/intent/tweet?url=${encodeURIComponent(imageUrl)}`;
    window.open(twitterShareLink);
});

const closeButton = document.querySelector('.close a');
closeButton.addEventListener('click', () => {
    // Close action, whatever it might represent
});

const dribbbleButton = document.querySelector('.dribbble a');
dribbbleButton.addEventListener('click', () => {
    const currentBackground = document.body.style.backgroundImage;
    const imageUrl = currentBackground.replace('url("', '').replace('")', '');
    // Assuming Dribbble supports sharing with an image
    const dribbbleShareLink = `URL_TO_SHARE_WITH_DRIBBBLE`;
    window.open(dribbbleShareLink);
});






