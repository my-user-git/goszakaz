document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('.main-content__button').addEventListener('click', function () {
        const windowInnerWidth = window.innerWidth;
        document.querySelectorAll('.main-content__article section').forEach(item => {
            const hidden = getComputedStyle(item);
            if (hidden.display === 'none') {
                if (windowInnerWidth <= 600) {
                    item.style.display = 'flex';
                } else {
                    item.style.display = 'grid';
                }
            }
        })
    })
})