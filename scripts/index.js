// scripts for date and time for layer 2


function updateDateTime() {
  const dateFields = document.querySelectorAll('.date-field');
  const timeTexts = document.querySelectorAll('.date-time-text span');

  const now = new Date();

  // Format date as dd/mm/yy
  const day = String(now.getDate()).padStart(2, '0');
  const month = String(now.getMonth() + 1).padStart(2, '0'); // Months are zero-based
  const year = String(now.getFullYear()).slice(-2); // Get last two digits of the year
  const formattedDate = `${day}/${month}/${year}`;

  // Format time as hh:mm AM/PM
  let hours = now.getHours();
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12 || 12; // Convert to 12-hour format
  const formattedTime = `${String(hours).padStart(2, '0')}:${minutes} ${ampm}`;

  // Set the formatted date and time for all fields
  dateFields.forEach(field => field.value = formattedDate);
  timeTexts.forEach(text => text.innerHTML = formattedTime);
}

// Run the function to update date and time
updateDateTime();

// Optionally, update the time every minute
setInterval(updateDateTime, 60000);


// ***********************************************************************************************************************




// Data for carousel slides
const images = [
  {
    src: "./img/Layer_3.svg",
    text1: "Receive guaranteed",
    buttonText: "GIFT VOUCHER",
    text2: "on a monthly hire or lease",
    link: "https://example.com/"
  },
  {
    src: "./img/Layer_3.svg",
    text1: "Another promotion",
    buttonText: "CLAIM NOW",
    text2: "Limited time offer",
    link: "https://example.com/"
  },
  {
    src: "./img/Layer_3.svg",
    text1: "Special offer",
    buttonText: "GET STARTED",
    text2: "Sign up today",
    link: "https://example.com/"
  }
];

let currentIndex = 0;

// Function to display the slide based on index
function showSlide(index) {
  const carouselImages = document.querySelector(".carousel-images");
  const text1 = document.getElementById("carousel-text1");
  const button = document.getElementById("carousel-button");
  const text2 = document.getElementById("carousel-text2");

  // Update image and transform
  carouselImages.style.transform = `translateX(${-index * 100}%)`;

  // Update text content and button
  text1.textContent = images[index].text1;
  button.textContent = images[index].buttonText;
  text2.textContent = images[index].text2;
  button.setAttribute("onclick", `window.location.href='${images[index].link}'`);

  // Update active dot
  document.querySelectorAll(".dot").forEach((dot, i) => {
    dot.classList.toggle("active", i === index);
  });
}

// Function to initialize the carousel
function createCarousel() {
  const carouselImages = document.querySelector(".carousel-images");
  const carouselDots = document.querySelector(".carousel-dots");

  // Generate carousel images and dots
  images.forEach((image, index) => {
    // Create image elements
    const imgElement = document.createElement("img");
    imgElement.src = image.src;
    carouselImages.appendChild(imgElement);

    // Create dot elements
    const dotElement = document.createElement("div");
    dotElement.classList.add("dot");
    dotElement.addEventListener("click", () => {
      currentIndex = index;
      showSlide(index);
    });
    carouselDots.appendChild(dotElement);
  });

  // Display the first slide
  showSlide(currentIndex);

  // Auto-slide functionality (optional)
  setInterval(() => {
    currentIndex = (currentIndex + 1) % images.length;
    showSlide(currentIndex);
  }, 3000);
}

// Initialize the carousel on page load
document.addEventListener("DOMContentLoaded", createCarousel);



// ***********************************************************************************************************************

//data to dynamically add car details
const carData = [
  {
    imageSrc: './img/car1.svg',
    heading: 'Mitsubishi Eclipse',
    description: 'Eclipse Cross is a fusion of sharp coupe looks and dynamic SUV mobility with signature Mitsubishi styling, technology, and driving confidence.',
    people: 6,
    transmission: 'Automatic',
    doors: 5,
    ac: true,
    price: 'AED 2700 / Monthly'
  },
  {
    imageSrc: './img/car2.svg',
    heading: 'Toyota Corolla',
    description: 'The Toyota Corolla is known for its reliability, fuel efficiency, and comfort. A perfect blend of style and substance.',
    people: 5,
    transmission: 'Manual',
    doors: 4,
    ac: true,
    price: 'AED 2000 / Monthly'
  },
  {
    imageSrc: './img/car1.svg',
    heading: 'Mitsubishi Eclipse',
    description: 'Eclipse Cross is a fusion of sharp coupe looks and dynamic SUV mobility with signature Mitsubishi styling, technology, and driving confidence.',
    people: 6,
    transmission: 'Automatic',
    doors: 5,
    ac: true,
    price: 'AED 2700 / Monthly'
  },
  {
    imageSrc: './img/car2.svg',
    heading: 'Toyota Corolla',
    description: 'The Toyota Corolla is known for its reliability, fuel efficiency, and comfort. A perfect blend of style and substance.',
    people: 4,
    transmission: 'Manual',
    doors: 4,
    ac: true,
    price: 'AED 2000 / Monthly'
  }
  // Add more car objects here...
];

// Function to create a car item dynamically
function createCarItem(car) {
  const carDiv = document.createElement('div');
  carDiv.className = 'cars';

  const carImage = document.createElement('img');
  carImage.src = car.imageSrc;
  carImage.alt = car.heading;

  const carDetailsDiv = document.createElement('div');
  carDetailsDiv.className = 'car-details';

  const headingP = document.createElement('p');
  headingP.className = 'headingP';
  headingP.textContent = car.heading;

  const contentP = document.createElement('p');
  contentP.className = 'contentP';
  contentP.textContent = car.description;

  const carDetailsLists = document.createElement('ul');
  carDetailsLists.className = 'car-details-lists';

  const peopleLi = document.createElement('li');
  peopleLi.innerHTML = `<img src="./img/6people.svg" alt="">${car.people} people`;

  const transmissionLi = document.createElement('li');
  transmissionLi.innerHTML = `<img src="./img/automatic.svg" alt="">${car.transmission}`;

  const doorsLi = document.createElement('li');
  doorsLi.innerHTML = `<img src="./img/5doors.svg" alt="">${car.doors} Doors`;

  const acLi = document.createElement('li');
  acLi.innerHTML = `<img src="./img/Ac.svg" alt="">${car.ac ? 'AC' : 'No AC'}`;

  carDetailsLists.appendChild(peopleLi);
  carDetailsLists.appendChild(transmissionLi);
  carDetailsLists.appendChild(doorsLi);
  carDetailsLists.appendChild(acLi);

  const carPriceBookingDiv = document.createElement('div');
  carPriceBookingDiv.className = 'car-price-booking';

  const priceP = document.createElement('p');
  priceP.className = 'priceP';
  priceP.textContent = car.price;

  const bookButton = document.createElement('button');
  bookButton.className = 'car-price-btn';
  bookButton.textContent = 'Book Now';

  carPriceBookingDiv.appendChild(priceP);
  carPriceBookingDiv.appendChild(bookButton);

  carDetailsDiv.appendChild(headingP);
  carDetailsDiv.appendChild(contentP);
  carDetailsDiv.appendChild(carDetailsLists);
  carDetailsDiv.appendChild(carPriceBookingDiv);

  carDiv.appendChild(carImage);
  carDiv.appendChild(carDetailsDiv);

  return carDiv;
}

// Function to populate the cars container with dynamic data
function populateCarsContainer(cars) {
  const carsContainer = document.getElementById('cars-container');
  cars.forEach(car => {
    const carItem = createCarItem(car);
    carsContainer.appendChild(carItem);
  });
}

// Call the function with the data to populate the cars container
populateCarsContainer(carData);

// ***********************************************************************************************************************


// FAQ data array
const faqs = [
  {
    question: "What is my eligibility to book a car?",
    answer: "You should be 18 years old or above and you must possess a valid driving license."
  },
  {
    question: "Can I book for any period of time?",
    answer: "Yes, you can book for any period of time as per your convenience."
  },
  {
    question: "Can I opt for a longer period?",
    answer: "Yes, you can extend your booking for a longer period."
  },
  {
    question: "Can I book a one-way trip?",
    answer: "Yes, one-way trips are available."
  },
  {
    question: "Is there a home delivery option available?",
    answer: "Yes, we offer home delivery for your convenience."
  },
  {
    question: "How can I make the payment?",
    answer: "Payments can be made online through various methods."
  }
];

// Function to initialize FAQ content
function initFAQs() {
  const faqContainer = document.querySelector('.faq-container');

  faqs.forEach(faq => {
    const faqItem = document.createElement('div');
    faqItem.classList.add('faq-item');

    const questionDiv = document.createElement('div');
    questionDiv.classList.add('question');
    questionDiv.setAttribute('onclick', 'toggleAnswer(this)');
    questionDiv.innerHTML = `
                ${faq.question}
                <span class="icon">+</span>
            `;

    const answerDiv = document.createElement('div');
    answerDiv.classList.add('answer');
    answerDiv.textContent = faq.answer;

    faqItem.appendChild(questionDiv);
    faqItem.appendChild(answerDiv);
    faqContainer.appendChild(faqItem);
  });
}

// Function to toggle the answer display
function toggleAnswer(element) {
  const currentlyOpenItem = document.querySelector('.faq-item.open');
  const faqItem = element.parentNode;
  const answer = faqItem.querySelector('.answer');
  const icon = faqItem.querySelector('.icon');

  // Close the currently open item (if any) before opening the new one
  if (currentlyOpenItem && currentlyOpenItem !== faqItem) {
    const currentlyOpenAnswer = currentlyOpenItem.querySelector('.answer');
    const currentlyOpenIcon = currentlyOpenItem.querySelector('.icon');
    currentlyOpenAnswer.style.display = 'none';
    currentlyOpenIcon.imgElement = './img/+mark.svg';
    currentlyOpenItem.classList.remove('open');
  }

  // Toggle the current item
  if (faqItem.classList.contains('open')) {
    faqItem.classList.remove('open');
    answer.style.display = 'none';
    icon.imgElement = './img/+mark.svg';
  } else {
    faqItem.classList.add('open');
    answer.style.display = 'block';
    iconimgElement = './img/xmark.svg';
  }
}

// Initialize FAQs on page load
document.addEventListener('DOMContentLoaded', initFAQs);


// Select all list items
const listItems = document.querySelectorAll('.contact-btn li');

// Add click event listener to each list item
listItems.forEach(item => {
  item.addEventListener('click', function () {
    // Remove 'expanded' class from all list items
    listItems.forEach(li => li.classList.remove('expanded'));

    // Add 'expanded' class to the clicked item
    this.classList.add('expanded');
  });
});


// ***********************************************************************************************************************
// ***********************************************mobile scripts starts****************************************************
// ***********************************************************************************************************************

// mobile screen responsive scripts


// mobile screen toggle buttom

document.querySelector('.mobile-toggle').addEventListener('click', () => {
  const mobileMenu = document.getElementById('mobileMenu')

  mobileMenu.classList.toggle('mobile-nav-active');
});


document.querySelector('.close-icon').addEventListener('click', () => {
  const mobileMenu = document.getElementById('mobileMenu');
  mobileMenu.classList.toggle('mobile-nav-active');
});


// ***********************************************************************************************************************


// booking scripts 

document.addEventListener('DOMContentLoaded', () => {
  const bookCarBtn = document.getElementById('bookCarBtn');
  const quickBookBtn = document.getElementById('quickBookBtn');
  const tripOptions = document.getElementById('tripOptions');
  const samePickUpBtn = document.getElementById('samePickUpBtn');
  const differentDropOffBtn = document.getElementById('differentDropOffBtn');
  const pickUpOptions = document.getElementById('pickUpOptions');
  const dropOffOptions = document.getElementById('dropOffOptions');


  bookCarBtn.addEventListener('click', () => {
    if (tripOptions.style.display === 'block') {
      tripOptions.style.display = 'none';
      bookCarBtn.classList.remove('active-button');
    } else {
      tripOptions.style.display = 'block';
      bookCarBtn.classList.add('active-button');
      quickBookBtn.classList.remove('active-button');
    }
  });


  bookCarBtn.addEventListener('click', () => {
    if (tripOptions.style.display === 'none') {
      tripOptions.style.display = 'none';
      bookCarBtn.classList.remove('active-button');
    } else {
      tripOptions.style.display = 'block';
      bookCarBtn.classList.add('active-button');
      quickBookBtn.classList.remove('active-button');
    }
  });


  // Toggle Pick-Up options
  samePickUpBtn.addEventListener('click', () => {
    pickUpOptions.style.display = pickUpOptions.style.display === 'none' ? 'block' : 'none';
    dropOffOptions.style.display = 'none'; // Hide Drop-Off options
  });

  // Toggle Drop-Off options
  differentDropOffBtn.addEventListener('click', () => {
    dropOffOptions.style.display = dropOffOptions.style.display === 'none' ? 'block' : 'none';
    pickUpOptions.style.display = 'none'; // Hide Pick-Up options
  });
});




// ***********************************************************************************************************************
