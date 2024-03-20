document.addEventListener('DOMContentLoaded', function() {
    const element = document.getElementById("typed");
    const text = element.textContent.trim();
    element.textContent = '';

    let index = 0;

    typr = document.getElementById("type");

    function typeWriter() {
        if (index < text.length) {
            typr.textContent += text.charAt(index);
            index++;
            setTimeout(typeWriter, 70); 
        }
    }

    typeWriter(); 
});

document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll('.nav-link');
  
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        const targetId = link.dataset.target;
        const targetElement = document.getElementById(targetId);
        targetElement.scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
  });
  