$(document).ready(function() {
    // Function to load the appropriate header and footer based on screen width
    function loadHeaderFooter() {
        if ($(window).width() >= 768) {
            // Load desktop header and footer
            $('#header-container').load('components/header-desktop.html');
            $('#footer-container').load('components/footer-desktop.html');
        } else {
            // Load mobile header and footer
            $('#header-container').load('components/header-mobile.html');
            $('#footer-container').load('components/footer-mobile.html');
        }
    }

    // Initial load
    loadHeaderFooter();

    // Reload header and footer on window resize
    $(window).resize(function() {
        $('#header-container').empty(); // Clear the current header
        $('#footer-container').empty(); // Clear the current footer
        loadHeaderFooter();
    });

    // Load other components if needed
    // $('#some-other-component').load('components/some-other-component.html', function() {
    //   $.getScript('js/components/some-other-component.js');
    // });
});
