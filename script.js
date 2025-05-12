// Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get all the h3 elements within menu-item divs
    const menuHeaders = document.querySelectorAll('.menu-item h3');

    // Loop through each header and add a click event listener
    menuHeaders.forEach(header => {
        header.addEventListener('click', function() {
            // Find the parent menu-item div
            const parentItem = this.closest('.menu-item');

            // Toggle the 'active' class on the parent menu-item
            parentItem.classList.toggle('active');

            // Find the item-content div within the parent
            const content = parentItem.querySelector('.item-content');

            // Toggle the display of the content div
            if (parentItem.classList.contains('active')) {
                content.style.display = 'block';
                // Optional: add simple slide-down effect by animating max-height
                // Requires setting max-height to a value large enough to contain content
                // content.style.maxHeight = content.scrollHeight + 'px';
            } else {
                content.style.display = 'none';
                // Optional: animate max-height back to 0 for slide-up
                // content.style.maxHeight = '0';
            }
        });
    });
});