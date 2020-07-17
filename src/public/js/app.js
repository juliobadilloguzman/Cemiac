$(document).ready(function() {

    AOS.init();

    $('body').on('click', '.btn-fotoModal', function() {


        let id = parseInt($(this).data('id'));


        let integrantes = [
            {},
            {
                id: 1,
                nombre: 'Marco',
                apellido: 'Luna',
                carrera: 'Estudiante Lic. Administración y Estrategia de Negocios',
                imagen: 'marco2.jpg',
                estado: 'Morelos',
                puesto: 'Presidente',
                frase: `"El cambio verdadero empieza cuando la ayuda que das, provoca que alguien más también lo haga."`
            },
            {
                id: 2,
                nombre: 'Andrea',
                apellido: 'Reyna',
                carrera: 'Estudiante de la Lic. en Arquitectura',
                imagen: 'andrea2.jpg',
                estado: 'Durango',
                puesto: 'Arquitectura',
                frase: `"Cuando hay problemas, cualquiera con la capacidad de hacer algo tiene la responsabilidad de hacerlo."`
            },
            {
                id: 3,
                nombre: 'Leonardo',
                apellido: 'Medina',
                carrera: 'Arquitecto',
                imagen: 'leonardo2.jpg',
                estado: 'Coahuila',
                puesto: 'Arquitectura',
                frase: `"El verdadero éxito de uno se puede encontrar en la sonrisa de alguien más."`
            },
            {
                id: 4,
                nombre: 'María',
                apellido: 'Gama',
                carrera: 'Estudiante de Ingeniería en Mecatrónica',
                imagen: 'maria2.jpg',
                estado: 'Morelos',
                puesto: 'Estrategia y logística',
                frase: `"Ayudar no solo aporta un beneficio a los que la reciben, también a quien la da."`
            },
            {
                id: 5,
                nombre: 'Rodrigo',
                apellido: 'Barreto',
                carrera: 'Estudiante Arquitectura ',
                imagen: 'rodrigob2.jpg',
                estado: 'Morelos',
                puesto: 'Arquitectura',
                frase: `"Un minuto de tu tiempo para otro es un mundo, regálaselo."`
            },
            {
                id: 6,
                nombre: 'Rodrigo',
                apellido: 'Unda',
                carrera: 'Lic. en Administración Financiera',
                imagen: 'rodrigou2.jpg',
                estado: 'Morelos',
                puesto: 'Finanzas',
                frase: `"Ayudar no solo aporta un beneficio a los que la reciben, también a quien la da."`
            },
            {
                id: 7,
                nombre: 'Job',
                apellido: 'Rigoberto',
                carrera: 'Estudiante de Ingeniería Civil',
                imagen: 'job2.jpg',
                estado: 'Querétaro',
                puesto: 'Construcción y validación',
                frase: `"Siempre da lo mejor de ti, y lo demás sólo se logrará."`
            },
        ]

        $('#modal-title').html(integrantes[id].nombre);
        $('#nombre-modal').html(`${integrantes[id].nombre} ${integrantes[id].apellido}`);
        $('#carrera-modal').html(integrantes[id].carrera);
        $('#estado-modal').html(integrantes[id].estado);
        $('#frase-modal').html(integrantes[id].frase);
        $('#puesto-modal').html(integrantes[id].puesto);
        $(".img-modal").attr("src", "/img/integrantes/" + integrantes[id].imagen);
        $('#frase-modal').html(integrantes[id].frase);

        $('#modalQuienesSomos').modal('show');

    });

    $('body').on('click', '.btn-modalLogros', function() {

        $('#modalLogros').modal('show');

    });

    $('body').on('click', '.btn-modalTalleres', function() {

        $('#modalTalleres').modal('show');

    });

    $('body').on('click', '.btn-modalCasa', function() {

        $('#modalCasa').modal('show');

    });

    $('.team_slider').slick({
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 3,
        dots: true,
        centerMode: true,
        centerPadding: '350px',
        responsive: [{
                breakpoint: 1600,
                settings: {
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 1199,
                settings: {
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 991,
                settings: {
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 600,
                settings: {
                    centerMode: true,
                    centerPadding: '30px',
                    slidesToShow: 1
                }
            }
        ]
    });

    $('.masInfoEva').hide();

    $('#btn-verInfo').on('click', function() {



        if ($('.masInfoEva').css("display") == "none") {
            $('.masInfoEva').show();
            $('#btn-verInfo').html("Ver menos");

        } else {
            $('#btn-verInfo').html("Ver más");
            $('.masInfoEva').hide();
        }

    });


    $('.client_slider').slick({
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 3,
        dots: true,
        arrows: true,
        centerMode: true,
        centerPadding: '350px',
        responsive: [{
                breakpoint: 1600,
                settings: {
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 1199,
                settings: {
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 991,
                settings: {
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 600,
                settings: {
                    centerMode: true,
                    centerPadding: '30px',
                    slidesToShow: 1
                }
            }
        ]
    });


    var accrodionGrp = $('.accrodion-grp');
    accrodionGrp.each(function() {
        var accrodionName = $(this).data('grp-name');
        var Self = $(this);
        var accordion = Self.find('.accrodion');
        Self.addClass(accrodionName);
        Self.find('.accrodion .accrodion-content').hide();
        Self.find('.accrodion.active').find('.accrodion-content').show();
        accordion.each(function() {
            $(this).find('.accrodion-title').on('click', function() {
                if ($(this).parent().hasClass('active') === false) {
                    $('.accrodion-grp.' + accrodionName).find('.accrodion').removeClass('active');
                    $('.accrodion-grp.' + accrodionName).find('.accrodion').find('.accrodion-content').slideUp();
                    $(this).parent().addClass('active');
                    $(this).parent().find('.accrodion-content').slideDown();
                };


            });
        });
    });

    var btn = $('#buttonTop');

    $(window).scroll(function() {
        if ($(window).scrollTop() > 300) {
            btn.addClass('show');
        } else {
            btn.removeClass('show');
        }
    });

    btn.on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: 0 }, '300');
    });


    $('.menuTop li.nav-item').click(function(e) {
        e.preventDefault();
        var target = $(this).attr('id');

        $('html, body').animate({ scrollTop: $('#' + target + '-content').offset().top }, 1000);
    });

    $('.btn-conoce').click(function() {

        $('html, body').animate({ scrollTop: $('#acerca-content').offset().top }, 1000);
    });

    $('.btn-contacto-banner').click(function() {

        $('html, body').animate({ scrollTop: $('#contacto-content').offset().top }, 1000);
    });

    $('#con_submit').on('click', function() {

        $.ajax({
                url: 'enviarCorreo',
                method: 'POST',
            })
            .done(function(response) {
                console.log(response);
            });

    });

});