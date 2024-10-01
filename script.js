document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behaviour:'smooth'
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const projectData = [
        {
            imgSrc: 'images/Project_thumbnail.png',
            title: 'Virtual Garage',
            description: 'A brief description of the project.',
            link: 'https://github.com/Devansh78/Virtual-Garage'
        },
        {
            imgSrc: 'images/ayurveda.png',
            title: 'WhatsMail',
            description: 'A brief description of the project.',
            link: 'https://github.com/thedevanshvala/WhatsMail'
        },
        {
            imgSrc: 'images/zip-file.png',
            title: 'ZipUnzipFolders',
            description: 'A brief description of the project.',
            link: 'https://github.com/thedevanshvala/ZipMaster'
        },
    ];
    document.addEventListener('DOMContentLoaded', function () {
        const projectImages = document.querySelectorAll('.project-item img');
        
        projectImages.forEach(function (img) {
            img.style.width = '100%'; // Adjust width to fill the container
            img.style.height = '150px'; // Set fixed height for all images
            img.style.objectFit = 'cover'; // Ensure images maintain aspect ratio
            img.style.borderRadius = '8px'; // Optional: Keep rounded corners
        });
    });
    

    const projectGrid = document.querySelector('.project-grid');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const seeAllBtn = document.getElementById('seeAllBtn');

    let currentIndex = 0;
    const itemsPerPage = 3; // Projects shown at once
    const totalItems = projectData.length;

    // Function to create project items dynamically
    function createProjectItem(project) {
        const projectDiv = document.createElement('div');
        projectDiv.classList.add('project-item');
        projectDiv.innerHTML = `
            <img src="${project.imgSrc}" alt="${project.title}">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <a href="${project.link}" target="_blank" class="project-link">View Project</a>
        `;
        return projectDiv;
    }

    // Function to update visible projects
    function updateProjects() {
        projectGrid.innerHTML = '';
        const endIndex = currentIndex + itemsPerPage;
        for (let i = currentIndex; i < endIndex && i < totalItems; i++) {
            const project = createProjectItem(projectData[i]);
            projectGrid.appendChild(project);
        }

        // Update buttons state
        prevBtn.disabled = currentIndex === 0;
        nextBtn.disabled = currentIndex + itemsPerPage >= totalItems;
    }

    // Next button event listener
    nextBtn.addEventListener('click', () => {
        if (currentIndex + itemsPerPage < totalItems) {
            currentIndex += itemsPerPage;
            updateProjects();
        }
    });

    // Previous button event listener
    prevBtn.addEventListener('click', () => {
        if (currentIndex - itemsPerPage >= 0) {
            currentIndex -= itemsPerPage;
            updateProjects();
        }
    });

    // See All button event listener
    seeAllBtn.addEventListener('click', () => {
        projectGrid.innerHTML = '';
        projectData.forEach(project => {
            const projectElement = createProjectItem(project);
            projectGrid.appendChild(projectElement);
        });

        // Hide navigation buttons
        prevBtn.style.display = 'none';
        nextBtn.style.display = 'none';
        seeAllBtn.style.display = 'none';
    });

    // Initial setup
    updateProjects();
});


let lastScrollY = window.scrollY;

window.addEventListener('scroll', () => {
    const header = document.getElementById('main-header');

    if (window.scrollY > lastScrollY) {
        // Scrolling down
        header.classList.add('hidden');
    } else {
        // Scrolling up
        header.classList.remove('hidden');
    }

    lastScrollY = window.scrollY;
});
