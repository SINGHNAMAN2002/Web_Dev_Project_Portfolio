const projects = [
    {
        title: "Recipe Provider System",
        description: "A web application that provides recipes using the Spoonacular API.",
        fullDescription: "The Recipe Provider System is a comprehensive web application that leverages the Spoonacular API to offer users a vast array of recipes. Users can search for recipes based on ingredients, dietary restrictions, or cuisine types. The system provides detailed cooking instructions, nutritional information, and even suggests wine pairings for meals.",
        technologies: "HTML5, CSS3, JavaScript, Spoonacular API, Responsive Design",
        link: "#",
        image: "images/spooancular.png"
    },
    {
        title: "Museubot",
        description: "An AI-powered chatbot for enhancing museum experiences.",
        fullDescription: "Museubot is an innovative AI-powered chatbot designed to enhance the museum experience for visitors. It provides real-time information about exhibits, answers visitor questions, and offers personalized tour recommendations based on user preferences. The bot integrates with museum databases to provide accurate and up-to-date information, making it an invaluable tool for both visitors and museum staff.",
        technologies: "JavaScript, Natural Language Processing, Machine Learning, API Integration",
        link: "#",
        image: "images/museubot.png"
    },
];

// Populate projects
const projectsGrid = document.getElementById('projectsGrid');
projects.forEach((project, index) => {
    const projectCard = document.createElement('div');
    projectCard.className = 'project-card';
    projectCard.innerHTML = `
        <img src="${project.image}" alt="${project.title}" class="project-image">
        <div class="project-info">
            <h3 class="project-title">${project.title}</h3>
            <p class="project-description">${project.description}</p>
        </div>
    `;
    projectCard.addEventListener('click', () => openModal(index));
    projectsGrid.appendChild(projectCard);
});

// Modal functionality
const modal = document.getElementById("projectModal");
const modalImage = document.getElementById("modalImage");
const modalTitle = document.getElementById("modalTitle");
const modalDescription = document.getElementById("modalDescription");
const modalTechnologies = document.getElementById("modalTechnologies");
const modalLink = document.getElementById("modalLink");
const closeBtn = document.querySelector(".close");

function openModal(index) {
    const project = projects[index];
    modalImage.src = project.image;
    modalTitle.textContent = project.title;
    modalDescription.textContent = project.fullDescription;
    modalTechnologies.textContent = `Technologies used: ${project.technologies}`;
    modalLink.href = project.link;
    modal.style.display = "block";
}

closeBtn.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Form submission
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for your message! I will get back to you soon.');
    this.reset();
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Navbar background change on scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = 'rgba(26, 26, 26, 1)';
    } else {
        navbar.style.backgroundColor = 'rgba(26, 26, 26, 0.8)';
    }
});
