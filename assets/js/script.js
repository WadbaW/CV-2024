let observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        };
    });
});

let hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

for (let i = 1; i < 5; i++) {
    let tabArray = document.getElementsByClassName(`tab${i}`);
    for (tab of tabArray) {
        tab.style.padding = `0 0 0 ${2*i}vw`;
    };
};
