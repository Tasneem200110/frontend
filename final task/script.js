const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
    const menu = dropdown.querySelector('.dropdown-menu');

    if (!menu) {
        console.warn('Dropdown menu not found for:', dropdown);
        return;
    }

    dropdown.addEventListener('mouseover', () => {
        menu.classList.add('show');
    });

    dropdown.addEventListener('mouseout', (event) => {
        if (!dropdown.contains(event.relatedTarget)) {
            menu.classList.remove('show');
        }
    });
});


const buttons = document.querySelectorAll('#slider button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        buttons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
    });
});

var myCarousel = document.querySelector('#carouselExampleCaptions');
var carousel = new bootstrap.Carousel(myCarousel, {
    interval: 2000,
    ride: 'carousel'
});

const services = document.querySelectorAll(".service")

services.forEach(service => {
    service.addEventListener('mouseover', function () {
        const title = this.getAttribute('data-title');
        const description = this.getAttribute('data-description');
        if (!this.querySelector('.hover-content')) {
            const hoverContent = document.createElement('div');
            hoverContent.classList.add('hover-content');
            hoverContent.innerHTML = `
                <div style="background-color:white">
                <h2 class="py-2">${title}</h2>
                <p class="text-black">${description}</p>
                <button href="#" class="btn btn-primary">Read More</button>
                </div>
            `;

            this.appendChild(hoverContent);
        }
    });

    service.addEventListener('mouseleave', function () {
        const hoverContent = this.querySelector('.hover-content');
        if (hoverContent) {
            hoverContent.remove();
        }
    });
});

//pricing
const perYearButton = document.getElementById("perYear");
const perMonthButton = document.getElementById("perMonth");
const pricingCards = document.querySelector(".pricing-cards");
const defaultPricing = pricingCards.innerHTML;

const yearlyPricing = `
    <div class="card business">
        <div class="price-item">
            <h3>Business</h3>
            <p class="pricing">From <span class="price">$399</span></p>
        </div>
        <ul>
            <div class="feature-item">
                <li ><i class="fa-solid fa-check text-primary"></i> 03 PSD Pack</li>
                <p class="text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div class="feature-item">
                <li ><i class="fa-solid fa-check text-primary"></i> 03 Wordpress Pack</li>
                <p class="text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div class="feature-item">
                <li><i class="fa-solid fa-check text-primary"></i> 1200 Support Ticket</li>
                <p class="text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
        </ul>
        <button class="get-started business-btn">Get Started Now</button>
    </div>
    <div class="card Ultimate">
        <div class="price-item">
            <h3>Ultimate</h3>
            <p class="pricing">From <span class="price">$799</span></p>
        </div>
        <ul>
            <div class="feature-item">
                <li ><i class="fa-solid fa-check text-primary"></i> 05 PSD Pack</li>
                <p class="text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div class="feature-item">
                <li ><i class="fa-solid fa-check text-primary"></i> 20 Wordpress Pack</li>
                <p class="text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div class="feature-item">
                <li><i class="fa-solid fa-check text-primary"></i> 1000 Support Ticket</li>
                <p class="text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
        </ul>
        <button class="get-started">Get Started Now</button>
    </div>
    <div class="card personal">
        <div class="price-item">
            <h3>Personal</h3>
            <p class="pricing">From <span class="price">$1499</span></p>
        </div>
        <ul>
            <div class="feature-item">
                <li ><i class="fa-solid fa-check text-primary"></i> 20 PSD Pack</li>
                <p class="text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div class="feature-item">
                <li ><i class="fa-solid fa-check text-primary"></i> 30 Wordpress Pack</li>
                <p class="text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div class="feature-item">
                <li ><i class="fa-solid fa-check text-primary"></i> 1500 Support Ticket</li>
                <p class="text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
        </ul>
        <button class="get-started">Get Started Now</button>
    </div>
`;


function updatePricing(content) {
    pricingCards.innerHTML = content;
}

perYearButton.addEventListener("click", () => {
    updatePricing(yearlyPricing);
    perYearButton.classList.add("bg-primary", "text-white");
    perMonthButton.classList.remove("bg-primary", "text-white");
    perMonthButton.style.background = "white";
    perMonthButton.style.color = "#0c65ed";
    const businessCard = document.querySelector(".card.business");
    const personalCard = document.querySelector(".card.personal");
    personalCard.classList.add("business"); 
    businessCard.classList.remove("business")
});

perMonthButton.addEventListener("click", () => {
    updatePricing(defaultPricing);
    perMonthButton.classList.add("bg-primary", "text-white");
    perYearButton.classList.remove("bg-primary", "text-white");
    perYearButton.style.background = "white";
    perYearButton.style.color = "#0c65ed";
});

//subscribe

document.getElementById('subscribeButton').addEventListener('click', function () {
    const emailInput = document.getElementById('email');
    const errorMessage = document.getElementById('error-message');

    if (!emailInput.value.trim()) {
        errorMessage.style.display = 'block';
    } else {
        errorMessage.style.display = 'none';
        alert('Subscription successful!');
    }
});


//slider-testomanial
const slider = document.querySelector('.slider-testimonial');
const testimonials = document.querySelectorAll('.testimonial');
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');

let currentIndex = 0; 

function updateSliderPosition() {
    slider.style.transition = 'transform 0.5s ease-in-out'; 
    slider.style.transform = `translateX(-${currentIndex * 100 / 6}%)`;
}

function slideRight() {
    currentIndex++;
    updateSliderPosition();
    if (currentIndex >= testimonials.length) {
        setTimeout(() => {
            slider.style.transition = 'none'; 
            currentIndex = 0; 
            slider.style.transform = `translateX(-${currentIndex * 100 / 6}%)`;
        }, 500); 
    }
}

function slideLeft() {
    currentIndex--;
    updateSliderPosition();

    if (currentIndex < 0) {
        setTimeout(() => {
            slider.style.transition = 'none'; 
            currentIndex = testimonials.length - 1; 
            slider.style.transform = `translateX(-${currentIndex * 100 / 6}%)`;
        }, 5);
    }
}

leftArrow.addEventListener('click', slideLeft);
rightArrow.addEventListener('click', slideRight);


const scrollToTopBtn = document.getElementById('scrollToTopBtn');

window.onscroll = function() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        scrollToTopBtn.style.display = 'block';
    } else {
        scrollToTopBtn.style.display = 'none';
    }
};


scrollToTopBtn.addEventListener('click', function() {
        window.scrollTo({
        top: 0,
        behavior: 'smooth' 
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll('.counter');
    
    counters.forEach(counter => {
    const target = +counter.getAttribute('data-target'); 
    const speed = 200; 

    const updateCount = () => {
    const current = +counter.innerText;
    const increment = target / speed;

    if (current < target) {
        counter.innerText = Math.ceil(current + increment);
        setTimeout(updateCount, 5); 
    } else {
        counter.innerText = target; 
    }
    };

    updateCount();
});
});
