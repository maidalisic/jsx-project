'use strict';

document.addEventListener('DOMContentLoaded', () => {
    let isDarkTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
    updateTheme(isDarkTheme);

    const themeToggle = document.getElementById('theme-toggle');
    themeToggle.addEventListener('click', () => {
        isDarkTheme = !isDarkTheme;
        updateTheme(isDarkTheme);
    });

    function updateTheme(isDark) {
        document.body.classList.toggle('dark-theme', isDark);
        document.body.classList.toggle('light-theme', !isDark);
    }

    async function loadCodeSnippet(filePath, elementId) {
        try {
            const response = await fetch(filePath);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const code = await response.text();
            const element = document.getElementById(elementId);
            if (!element) {
                throw new Error(`Element with ID ${elementId} not found.`);
            }
            element.textContent = code;
            Prism.highlightAll();
        } catch (error) {
            console.error('Error loading the code snippet:', error);
        }
    }

    loadCodeSnippet('../doc/Element.js', 'elementCode');
    loadCodeSnippet('../doc/KomponentenProps.js', 'komponentenPropsCode');
    loadCodeSnippet('../doc/Zustandsmanagement.js', 'zustandsmanagementCode');

    let currentExampleIndex = 0;
    const exampleContainers = document.querySelectorAll('.example-container');

    function showExample(index) {
        exampleContainers.forEach((container, i) => {
            container.style.display = i === index ? 'block' : 'none';
        });
    }

    const prevButton = document.getElementById('prevButton');
    const nextButton = document.getElementById('nextButton');

    prevButton.addEventListener('click', () => {
        currentExampleIndex = (currentExampleIndex - 1 + exampleContainers.length) % exampleContainers.length;
        showExample(currentExampleIndex);
    });

    nextButton.addEventListener('click', () => {
        currentExampleIndex = (currentExampleIndex + 1) % exampleContainers.length;
        showExample(currentExampleIndex);
    });

    showExample(currentExampleIndex);
});

window.addEventListener('scroll', () => {
    const offset = 300;

    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav a');
    const fromTop = window.scrollY + offset;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (
            sectionTop <= fromTop &&
            sectionTop + sectionHeight > fromTop
        ) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (section.getAttribute('id') === link.getAttribute('href').substring(1)) {
                    link.classList.add('active');
                }
            });
        }
    });
});