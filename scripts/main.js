window.addEventListener('click', function(e) {
    var target = e.target;
        if (target.classList.contains('js-title')) {
            section = target.parentNode.parentNode.parentNode;
            arrow = target.nextElementSibling;
            article = target.nextElementSibling.nextElementSibling;
            section.classList.toggle('section--active');
            arrow.classList.toggle('mobile-arrow_active');
            article.classList.toggle('article_active');
        }
});


$('[placeholder]').focus(function() {
    var input = $(this);
    if (input.val() == input.attr('placeholder')) {
        input.val('');
        input.removeClass('placeholder');
    }
}).blur(function() {
    var input = $(this);
    if (input.val() == '' || input.val() == input.attr('placeholder')) {
        input.addClass('placeholder');
        input.val(input.attr('placeholder'));
    }
}).blur();

$('[placeholder]').parents('form').submit(function() {
    $(this).find('[placeholder]').each(function() {
        var input = $(this);
        if (input.val() == input.attr('placeholder')) {
            input.val('');
        }
    })
});