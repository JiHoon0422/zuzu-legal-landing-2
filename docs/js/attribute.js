document.getElementsByTagName("H1")[0].setAttribute("role", "heading");
document.getElementsByTagName("H2")[0].setAttribute("role", "heading");
document.getElementsByTagName("H3")[0].setAttribute("role", "heading");
document.getElementsByTagName("H4")[0].setAttribute("role", "heading");
document.getElementsByTagName("H5")[0].setAttribute("role", "heading");
document.getElementsByTagName("p")[0].setAttribute("role", "paragraph");

$('img').each(function () {
    var $img = $(this);
    var filename = $img.attr('src')
    $img.attr('alt', filename.substring(0, filename.lastIndexOf('.')));
});
