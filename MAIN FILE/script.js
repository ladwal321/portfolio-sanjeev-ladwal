// JavaScript for smooth scrolling between sections
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        
        window.scrollTo({
            top: targetElement.offsetTop - 20, // Adjust for a slight top margin
            behavior: 'smooth'
        });
    });
});

// JavaScript for dynamic greeting based on the time of day
window.onload = function() {
    const greetingElement = document.querySelector('.profile-description h2');
    const currentHour = new Date().getHours();
    let greetingMessage = "Welcome to Sanjeev's Profile";
    
    if (currentHour >= 5 && currentHour < 12) {
        greetingMessage = "Good Morning! Welcome to Sanjeev's Profile";
    } else if (currentHour >= 12 && currentHour < 18) {
        greetingMessage = "Good Afternoon! Welcome to Sanjeev's Profile";
    } else if (currentHour >= 18 && currentHour < 22) {
        greetingMessage = "Good Evening! Welcome to Sanjeev's Profile";
    } else {
        greetingMessage = "Good Night! Welcome to Sanjeev's Profile";
    }

    greetingElement.textContent = greetingMessage;
};