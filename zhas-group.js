let part = document.querySelectorAll(".hidden, .footer, .logo-nav, .header, .blur, .features, .services, .main-part, .main-text");
// let delay = 0;

let observer = new IntersectionObserver(function(entries) {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            // entry.target.style.transitionDelay = delay + "s";
            // delay += 0.1;
            entry.target.classList.add("show");
        }
    });
    threshold: 1.0;
});
part.forEach(function(el) {
    observer.observe(el);   
});