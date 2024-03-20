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

  document.getElementById('CV').addEventListener('click', function() {
    var pdfUrl = 'Assets/CV.pdf';

    // Crear un enlace temporal
    var a = document.createElement('a');
    a.href = pdfUrl;

    // Establecer el atributo download con el nombre del archivo
    a.download = 'archivo.pdf';

    // Simular un clic en el enlace para iniciar la descarga
    document.body.appendChild(a);
    a.click();

    // Eliminar el enlace temporal
    document.body.removeChild(a);
});
  