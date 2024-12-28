document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Reset previous error states
    document.querySelectorAll('.error').forEach(function(error) {
        error.style.display = 'none';
    });
    let isValid = true;

    // Check each field for empty value
    if (document.getElementById("name").value.trim() === "") {
        document.getElementById("nameError").style.display = 'block';
        isValid = false;
    }

    if (document.getElementById("email").value.trim() === "") {
        document.getElementById("emailError").style.display = 'inline';
        isValid = false;
    }

    if (document.getElementById("subject").value.trim() === "") {
        document.getElementById("subjectError").style.display = 'inline';
        isValid = false;
    }

    if (document.getElementById("message").value.trim() === "") {
        document.getElementById("messageError").style.display = 'inline';
        isValid = false;
    }

    // If all fields are valid, show success message or proceed with form submission
    if (isValid) {
        // Handle successful form submission (e.g., submit the form)
        alert("Form submitted successfully!");
    } else {
        document.getElementById("formError").style.display = 'inline';
    }
});



const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
    const menu = dropdown.querySelector('.dropdown-menu');

    if (!menu) {
        console.warn('Dropdown menu not found for:', dropdown);
        return;
    }

    // Add mouseover and mouseout events
    dropdown.addEventListener('mouseover', () => {
        menu.classList.add('show');
    });

    dropdown.addEventListener('mouseout', (event) => {
        if (!dropdown.contains(event.relatedTarget)) {
            menu.classList.remove('show');
        }
    });
});

const scrollToTopBtn = document.getElementById('scrollToTopBtn');

window.onscroll = function() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        scrollToTopBtn.style.display = 'block';
    } else {
        scrollToTopBtn.style.display = 'none';
    }
};

// Scroll to the top when the button is clicked
scrollToTopBtn.addEventListener('click', function() {
        window.scrollTo({
        top: 0,
        behavior: 'smooth' 
    });
});
