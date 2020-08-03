var app = angular.module('myApp', []);
app.controller('myCtrl', function ($scope, $sce, $http, $timeout) {
    $scope.categoria = '';
    $scope.name = '';
    $scope.email = '';
    $scope.phone = '';
    $scope.date = '';
    $scope.time = '';
    $scope.people = '';
    $scope.message = '';
    $scope.subject = '';
    $scope.name2 = '';
    $scope.email2 = '';
    $scope.message2 = '';
   

    $scope.slickParams = {
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    };

    $scope.enviar = function () {
        $http.post("http://localhost/put_reservas.php", { nombre: $scope.name, telefono: $scope.phone, email: $scope.email, fecha: $scope.date.toISOString().substr(0, 10), hora: $scope.time, personas: $scope.people, mensaje: $scope.message }).then(function (datos) {
            $scope.reservas = datos.data;
            console.log($scope.reservas);
            Swal.fire({
               title: 'Reserva realizada',
               text: 'Puede confirmar su reserva en la lista',
                icon: 'success',
                confirmButtonColor: "#ffb03b",
            })
        });
    }

    $scope.contactar = function () {
        $http.post("http://localhost/put_contacto.php", { nombre: $scope.name2, subject: $scope.subject, email: $scope.email2,  mensaje: $scope.message2 }).then(function (datos) {
            $scope.contactar = datos.data;
            console.log($scope.contactar);
            Swal.fire({
               title: 'Mensaje enviado',
               text: 'Pronto nos pondremos en contacto con usted',
                icon:'success',
                confirmButtonColor: "#ffb03b",
             })
        });
    }

    $http.get("http://localhost/get_reservas.php").then(function (datos) {
        $scope.reservas = datos.data;
        console.log($scope.reservas);
    });

    $scope.opiniones = [{
        nombre: "Pepa",
        work: "Empresaria",
        puntuacion: 5,
        comentario: "Estaba todo muy bueno",
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcStR_oHPFhNjf6e3-OTT-0O3kqQCMogSioopUQudgsyDtp4PxoQ&usqp=CAU",
    },
    {
        nombre: "Jorge",
        work: "Camarero",
        puntuacion: 5,
        comentario: "Estaba todo muy RICO",
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcStR_oHPFhNjf6e3-OTT-0O3kqQCMogSioopUQudgsyDtp4PxoQ&usqp=CAU"
    },
    {
        nombre: "Fernando",
        work: "Programador",
        puntuacion: 3,
        comentario: "Estaba todo muy MALO",
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcStR_oHPFhNjf6e3-OTT-0O3kqQCMogSioopUQudgsyDtp4PxoQ&usqp=CAU"
    },
    ];
    $scope.texto = [
        ["Check our menu", "Prueba nuestro menú", "Prova el teu menu"],
        ['Check our specials', 'Prueba nuestros platos especiales', 'Prova els nostres plats especials'],
        ['Book a Table', 'Reserva una mesa', 'Reserva una taula'],
        ['Language', 'Idioma', 'Idioma'],
        ['About', 'Acerca de', 'Sobre'],
        ['Our menu', 'Nuestro menu', 'El nostre menu'],
        ['Events', 'Eventos', 'Esdeveniments'],
        ['Reserve your table immediately', 'Reserva tu mesa de forma inmediata', 'Reserva la teua taula de manera immediata'],
        ['Your booking request was sent. We will call back or send an Email to confirm your reservation. Thank you!', 'Su solicitud de reserva fue enviada. Le devolveremos la llamada o le enviaremos un correo electrónico para confirmar su reserva. ¡Gracias!', 'La seua sol·licitud de reserva va ser enviada. Li retornarem la crida o li enviarem un correu electrònic per a confirmar la seua reserva. Gràcies!'],
        ['Your online menu card', 'Tu carta de menu online', 'La teua carta de menu online'],
        ['Cheese mix with rice', 'Mezclum de queso con arroz', 'Mescla de formatge en arros'],
        ['Fruit desert', 'Postre de frutas', 'Postre de fruites'],
        ['Chicken Rammen ', 'Rammen de pollo', 'Rammen de pollastre'],
        ['All', 'Todo', 'Tot'],
        ['Starters', 'Entrantes', 'Tapes'],
        ['Salads', 'Ensaladas', 'Amanida'],
        ['Sandwiches', 'Bocadillos', 'Entrepans'],
        ['Cakes', 'Tartas', 'Pastissos'],
        ['Drinks', 'Bebidas', 'Begudes'],
        ['Specials', 'Especialidades', 'Especialitats'],
        ['Book a table', 'Reserva tu mesa', 'Reserva una taula'],
        ['Check our specials plates', 'Mira nuestros platos especiales', 'Mira els nostres plats especials'],
        ['Contact', 'Contacto', 'Contacte'],
    ];
    $scope.idioma = 1;

    $http.get("http://localhost/get_idiomas.php").then(function (datos) {
        $scope.selectidiom = datos.data;
        console.log($scope.selectidiom);
    });

    $http.get("http://localhost/get_restaurantes.php").then(function (datos) {
        $timeout(function () {
            $scope.restaurantes = datos.data;


            $scope.restaurantes.forEach(restaurante => {
                restaurante.ubicacion = $sce.trustAsResourceUrl(restaurante.ubicacion);
                $http.get("http://localhost/get_imagenes.php?restaurante=" + restaurante.id).then(function (datos) {
                    $timeout(function () {
                        restaurante.imagenes = datos.data;
                        console.log(datos.data)
                    }, 0);
                });
            });

            console.log($scope.restaurantes);

            $timeout(function () {
                $('select').selectpicker({ liveSearch: true });
            }, 500);
        }, 0);
    });

    $scope.numrest = 0;
    $http.get("http://localhost/get_carta.php?restaurante=" + $scope.numrest).then(function (datos) {
        $timeout(function () {
            $scope.productos = datos.data;
            console.log($scope.productos);
        }, 0);
    });
    $scope.$watch("numrest", function (newValue, oldValue) {
        if (newValue != oldValue) {
            $http.get("http://localhost/get_carta.php?restaurante=" + $scope.numrest).then(function (datos) {
                $timeout(function () {
                    $scope.productos = datos.data;
                    console.log($scope.productos);
                }, 0);
            });

        }
    });

});