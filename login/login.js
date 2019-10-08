$(document).ready(function() {
    var form = $("#contact");
    form.validate({
        errorPlacement: function errorPlacement(error, element) { element.before(error); },
        rules: {
            confirm: {
                equalTo: "#password"
            }
        }
    });
    form.children("#example-basic").steps({
        headerTag: "h3",
        bodyTag: "section",
        transitionEffect: "fade",
        labels: {
            previous: 'BACK',
            next: 'NEXT',
            finish: 'STRART YOUR TRIAL',
            current: '',
            // loading: "index2.php"
        },
        onStepChanging: function(event, currentIndex, newIndex) {
            form.validate().settings.ignore = ":disabled,:hidden";
            return form.valid();
        },
        onFinishing: function(event, currentIndex) {
            form.validate().settings.ignore = ":disabled";
            return form.valid();
        },
        onFinished: function(event, currentIndex) {
            Swal.fire({
                title: 'Welcome, dung',
                html: 'Create your frist arena</br>' + '<img src="https://i.pinimg.com/564x/82/ba/6c/82ba6cc54cca8d993e065febd50bde88.jpg" alt="">' + '<p>An arena is the place to maintain a competive set that can be based around your site or the site of a competitor</p>',
                confirmButtonText: 'LET	&#39;S GO'
            })
        }
    });
    $(".toggle-password").click(function() {

        $(this).toggleClass("password-icon-eye-close password-icon-eye-opend");
        var input = $($(this).attr("toggle"));
        if (input.attr("type") == "password") {
            input.attr("type", "text");
        } else {
            input.attr("type", "password");
        }
    });

});
$(function() {
    $('.service ul li').on('click', function() {
        $(this).parent().find('li.active').removeClass('active');
        $(this).addClass('active');
    });
});