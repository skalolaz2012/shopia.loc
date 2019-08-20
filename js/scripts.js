let hoverItem = $('.item');
hoverItem.on('mouseenter', function() {
    $(this).find("img").addClass('reducer');
});
hoverItem.on('mouseleave', function() {
    $(this).find("img").removeClass('reducer');
});