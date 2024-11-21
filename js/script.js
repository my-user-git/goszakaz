document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('.main-content__button').addEventListener('click', function () {
        document.querySelectorAll('.main-content__article section').forEach(item => {
            const hidden = getComputedStyle(item);
            if (hidden.display === 'none') {
                item.style.display = 'grid';
            }
        })
    })
})