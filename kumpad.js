// plugin ทำให้ element เท่ากัน
(function($) {
    $.fn.equalizeHeight = function() {
        return this.each(function() {
            var $elements = $(this).find('[data-equalize="height"]');
            var maxHeight = 0;
            $elements.each(function() {
                var elementHeight = $(this).outerHeight();
                if (elementHeight > maxHeight) {
                    maxHeight = elementHeight;
                }
            });
            $elements.outerHeight(maxHeight);
        });
    };
})(jQuery);
