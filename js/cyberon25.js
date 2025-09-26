// Hover-toggle logic for event banners
// when hovering over an event, show its details in the highlighted section
const eventItems = document.querySelectorAll('.event-banner');
const highlightedEvent = document.getElementById('highlighted-event');
const defaultEvent = document.getElementById('default-event');

eventItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        const title = item.getAttribute('data-event');
        const imgSrc = item.getAttribute('data-event-logo');
        const description = item.getAttribute('data-event-desc');
        const teamSize = item.getAttribute('data-event-team');

        highlightedEvent.innerHTML = `
            <div class="event-heading text-4xl text-lime-400 font-extrabold tracking-wide mb-2 drop-shadow-lg transition-all duration-500 ease-in-out transform scale-95 opacity-0 animate-fade-in skew-x-12">${title.toUpperCase()}</div>
            <div class="text-base text-gray-200 text-center max-w-xl leading-relaxed transition-all duration-500 ease-in-out transform scale-95 opacity-0 animate-fade-in skew-x-12">${description}</div>
            <div class="text-base text-yellow-300 text-center max-w-xl leading-relaxed font-semibold mt-4 transition-all duration-500 ease-in-out transform scale-95 opacity-0 animate-fade-in skew-x-12">Team Size: <span class="text-lime-400">${teamSize} Members</span></div>
        `;
        highlightedEvent.style.display = 'flex';
        defaultEvent.style.display = 'none';
    });
    item.addEventListener('mouseleave', () => {
        highlightedEvent.style.display = 'none';
        defaultEvent.style.display = 'flex';
    });
});

// make the registration open button redirect to link
// https://unstop.com/college-fests/cyberon-2025-symbiosis-center-for-information-technology-scit-pune-392359

document.addEventListener('DOMContentLoaded', () => {
    const registerBtn = document.getElementById('register-btn');
    registerBtn.addEventListener('click', () => {
        window.location.href = 'https://unstop.com/college-fests/cyberon-2025-symbiosis-center-for-information-technology-scit-pune-392359';
    });
});

function toUnstop(link) {
    window.location.href = link;
}


// when last-slide is reached, show a button to scroll to top
const lastSlide = document.getElementById('last-slide');
const scrollFooterBtn = document.getElementById('footer-arrow');
scrollFooterBtn.style.display = 'block'; // hide initially

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            scrollFooterBtn.style.display = 'none'; // show button
        } else {
            scrollFooterBtn.style.display = 'block'; // hide button
        }
    });
}, { threshold: 0.5 });

observer.observe(lastSlide);

// redirect to the url from data-backlink attribute in new page
function toBack(link) {
    if (link) {
        window.open(link, '_blank');
    }
}