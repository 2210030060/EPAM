
document.addEventListener("DOMContentLoaded", function() {
    console.log("Flower Garden website loaded successfully!");
});


function printPage() {
    window.print();
}

document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 50,
                behavior: "smooth"
            });
        }
    });
});
