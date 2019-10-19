$(".reveal").on('click',function() {
    var $item = $(".item");
    var input = $($(this).attr("toggle"));
    $(this).toggleClass("fa-eye-slash fa-eye");
    if ($item.attr('type') === 'password') {
        $item.attr('type', 'text');
    } else {
        $item.attr('type', 'password');

    }
});