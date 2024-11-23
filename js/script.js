document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('.main-content__button').addEventListener('click', function (event) {
        event.preventDefault();
        const windowInnerWidth = window.innerWidth;
        let arrSections = document.querySelectorAll('.main-content__article section');
        console.log(arrSections);
        arrSections.forEach(item => {
            const hidden = getComputedStyle(item);
            if (hidden.display === 'none') {
                if (windowInnerWidth <= 600) {
                    item.style.display = 'flex';
                } else {
                    item.style.display = 'grid';
                }
            }
        })
        arrSections[3].scrollIntoView({ behavior: "smooth", block: "start", inline: "start" });
    })
})