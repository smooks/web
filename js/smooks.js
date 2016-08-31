(function(){
    
    // Page sizing when there's an iframe.
    function setPageSize() {
        $('body').height($(window).height() - 150);
    }
    setPageSize();
    $(window).resize(function() {
        setPageSize();
    });
    
    // Highlight the right nav
    var nav = $("span[data-page-nav]");
    if (nav.length === 1) {
        var navAnchor = $('nav a[href="' + nav.attr('data-page-nav') + '"]');
        navAnchor.parent().addClass('active');    
    }
}());