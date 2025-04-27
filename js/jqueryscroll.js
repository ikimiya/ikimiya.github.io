$(document).ready(function() {
    var navbarHeight = $('.navbar').outerHeight(); // Adjust the selector if needed

    $('.nav-list a').on('click', function(event) {
        event.preventDefault();
        var target = this.hash;

        $('html, body').animate({
            scrollTop: $(target).offset().top - navbarHeight // Adjust by navbar height
        }, 400);
    });
});
