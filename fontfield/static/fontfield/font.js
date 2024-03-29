/**
 * Font selector plugin
 * turns an ordinary input field into a list of web-safe fonts
 * Usage: $('select').fontSelector();
 *
 * Author     : James Carmichael
 * Website    : www.siteclick.co.uk
 * License    : MIT
 */
jQuery.fn.fontSelector = function (a) {

    var fonts = new Array(
        'Arial,Arial,Helvetica,sans-serif',
        'Arial Black,Arial Black,Gadget,sans-serif',
        'Comic Sans MS,Comic Sans MS,cursive',
        'Courier New,Courier New,Courier,monospace',
        'Georgia,Georgia,serif',
        'Impact,Charcoal,sans-serif',
        'Lucida Console,Monaco,monospace',
        'Lucida Sans Unicode,Lucida Grande,sans-serif',
        'Palatino Linotype,Book Antiqua,Palatino,serif',
        'Tahoma,Geneva,sans-serif',
        'Times New Roman,Times,serif',
        'Trebuchet MS,Helvetica,sans-serif',
        'Verdana,Geneva,sans-serif');

    var onDone = a || function () {};

    $("body").click(function () {
        $(".fontselector").hide();
    });

    return this.each(function () {

        // Get input field
        var sel = this;

        // Add a ul to hold fonts
        var ul = $('<ul class="fontselector"></ul>');
        $('body').prepend(ul);
        $(ul).hide();

        jQuery.each(fonts, function (i, item) {

            $(ul).append('<li><a href="#" class="font_' + i + '" style="font-family: ' + item + '">' + item.split(',')[0] + '</a></li>');

        });
        // Prevent real select from working
        $(sel).click(function (ev) {

            ev.preventDefault();

            // Show font list
            $(ul).show();

            // Position font list
            $(ul).css({
                          top : $(sel).offset().top + $(sel).height() + 4,
                          left : $(sel).offset().left
                      });

            // Blur field
            $(this).blur();
            return false;
        });

        $(ul).find('a').click(function (ev) {
            ev.stopPropagation();
            var font = fonts[$(this).attr('class').split('_')[1]];
            $(sel).val(font);
            $(ul).hide();
            onDone();
            return false;
        });

    });

}

$('input.font').fontSelector(function () {
    alert('hi');

});
