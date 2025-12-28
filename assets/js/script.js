// document.addEventListener('DOMContentLoaded', () => {
//   console.log("Portfolio loaded successfully!");
// });



function filterPortfolios(category) {
    const items = document.querySelectorAll('.portfolio-item');

    items.forEach(item => {
        if (category === 'all') {
            item.style.display = 'block';
        } else {
            if (item.classList.contains(category)) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        }
    });
}


