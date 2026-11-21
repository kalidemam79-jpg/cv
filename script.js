
// =====================================
// السنة الحالية في أسفل السيرة الذاتية
// =====================================

const yearElement = document.getElementById("currentYear");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}


// =====================================
// زر طباعة السيرة الذاتية وحفظها PDF
// =====================================

const printButton = document.getElementById("printButton");

if (printButton) {
    printButton.addEventListener("click", function () {
        window.print();
    });
}


// =====================================
// تأثير ظهور الأقسام عند التمرير
// =====================================

const sections = document.querySelectorAll(
    ".section, .contact-section, .hero"
);

if ("IntersectionObserver" in window) {

    const observer = new IntersectionObserver(
        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    observer.unobserve(entry.target);
                }

            });

        },
        {
            threshold: 0.08
        }
    );

    sections.forEach(function (section) {
        observer.observe(section);
    });

}
