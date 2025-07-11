document.addEventListener('DOMContentLoaded', () => {
        const categoryButtons = document.querySelectorAll('.category-btn');
        let currentActiveButton = null;

        // Function to apply/remove active styles
        function setActiveButton(buttonToActivate) {
            // 1. Remove active classes from the previously active button
            if (currentActiveButton) {
                currentActiveButton.classList.remove('bg-gray-900', 'text-white', 'shadow-md', 'hover:bg-gray-900');
                currentActiveButton.classList.add('bg-gray-100', 'text-gray-700', 'hover:bg-gray-200');
            }

            // 2. Add active classes to the newly clicked button
            buttonToActivate.classList.remove('bg-gray-100', 'text-gray-700', 'hover:bg-gray-200');
            buttonToActivate.classList.add('bg-gray-900', 'text-white', 'shadow-md', 'hover:bg-gray-900'); // Add hover:bg-gray-900 to ensure active button stays dark on hover
            
            // 3. Update the tracking variable
            currentActiveButton = buttonToActivate;
        }

        // Initialize the first button as active on page load
        if (categoryButtons.length > 0) {
            setActiveButton(categoryButtons[0]);
        }

        // Add click event listeners to all category buttons
        categoryButtons.forEach(button => {
            button.addEventListener('click', () => {
                setActiveButton(button);
            });
        });
    });