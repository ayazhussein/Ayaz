(function ($) {
    var mobileMenuToggleBtn = $('.mobile-nav-toggle');

    function toggleMobileMenu(event) {
        var $selectors = $(".mobile-nav-toggle, .site-nav");
        console.log('clicked');
        $selectors.toggleClass("is-open");


    }

    $(document).ready(function () {
        mobileMenuToggleBtn.on("click", toggleMobileMenu);
    })
})(jQuery);