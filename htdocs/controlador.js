var app = angular.module('myApp', []);
app.controller('myCtrl', function ($scope,$sce, $http) {
    $scope.categoria = ''; 

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
          
    $scope.productos = [{
        nombre: "Langosta",
        precio: 15.95,
        ingredientes: "Langosta hervida con especias",
        categoria: "Especialidad de la casa",
    },
    {
        nombre: "Ensaladilla casera con pétalos de salmón",
        precio: 6.50,
        ingredientes: "Patatas, huevo duro, zanahoria, pétalos de salmón y salsa mayonesa",
        categoria: "Especialidad de la casa",
    },
    {
        nombre: "Milhojas de calabacín",
        precio: 7.95,
        ingredientes: "Milhojas de calabacín con rulo de cabra y salsa de arandanos",
        categoria: "Especialidad de la casa",
    },
    {
        nombre: "Patatas bravas",
        precio: 4.95,
        ingredientes: "Patatas fritas en dados con especias, salsa brava y ajoaceite",
        categoria: "Entrantes",
    },
    {
        nombre: "Tiras de pollo",
        precio: 8.00,
        ingredientes: "Tiras de pollo crujiente con salsa de queso",
        categoria: "Entrantes",
    },
    {
        nombre: "Crujiente de berenjena",
        precio: 6.00,
        ingredientes: "Crujiente de berenjena con salsa a la miel",
        categoria: "Entrantes",
    },
    {
        nombre: "Ensalada cesar",
        precio: 8.95,
        ingredientes: "Lechuga, tomate, pollo en tiras, cebolla frita, rucula, queso de cabra, salsa cesar",
        categoria: "Ensaladas",

    },
    {
        nombre: "Ensalada Poke",
        precio: 10.05,
        ingredientes: "Brotes de soja, mango, aguacate, pepino y alga wakame",
        categoria: "Ensaladas",

    },
    {
        nombre: "Ensalada Special one",
        precio: 8.95,
        ingredientes: "espinacas baby, manzana, nueces, pasas, parmesano con vinagreta de sidra",
        categoria: "Ensaladas",

    },
    {
        nombre: "Bocadillo Español",
        precio: 6.25,
        ingredientes: "Tortilla de patata y salsa a elegir",
        categoria: "Bocadillos",
    },
    {
        nombre: "The vegan",
        precio: 7.25,
        ingredientes: "Hamburguesa de soja con verduras de temporada y salsa de tofu",
        categoria: "Bocadillos",
    },
    {
        nombre: "Mixou",
        precio: 6.50,
        ingredientes: "Pechuga de pollo, lechuga, tomate y salsa guacamole",
        categoria: "Bocadillos",
    },
    {
        nombre: "Tarta de queso",
        precio: 8,
        ingredientes: "Cheescake",
        categoria: "Tartas",
    },
    {
        nombre: "Cerveza Turia",
        precio: 2.5,
        ingredientes: "Cerveza tostada",
        categoria: "Bebidas",
    }
    ];

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
        ['Check our specials', 'Prueba nuestros platos espciales', 'Prova els nostres plats especials'],
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
    ];

    $scope.idioma = 1;
       
    $http.get("http://localhost/get_idiomas.php").then(function(datos) 
    { 
        $scope.selectidiom = datos.data; 
        console.log($scope.selectidiom);
    });

    $http.get("http://localhost/get_restaurantes.php").then(function(datos) 
    { 
        $scope.restaurantes = datos.data; 
        $scope.restaurantes[0].imagenes = ["https://cdn.pixabay.com/photo/2015/09/02/12/35/bar-918541__340.jpg","https://cdn.pixabay.com/photo/2017/07/31/11/22/people-2557408__340.jpg","https://cdn.pixabay.com/photo/2016/11/18/22/21/architecture-1837150__340.jpg","https://cdn.pixabay.com/photo/2015/03/26/09/54/restaurant-690569__340.jpg"];
        $scope.restaurantes[1].imagenes = ["https://cdn.pixabay.com/photo/2016/11/29/12/54/bar-1869656__340.jpg","https://cdn.pixabay.com/photo/2015/03/26/10/28/restaurant-691397__340.jpg","https://cdn.pixabay.com/photo/2015/04/20/13/30/kitchen-731351__340.jpg","https://cdn.pixabay.com/photo/2015/05/15/14/55/cafe-768771__340.jpg"];

        $scope.restaurantes.forEach(restaurante => {restaurante.ubicacion = $sce.trustAsResourceUrl (restaurante.ubicacion);});

        console.log($scope.restaurantes);
    });

    $scope.numrest = 0;

  //  $scope.restaurantes[1].ubicacion = $sce.trustAsResourceUrl('https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d49271.06757909459!2d-0.4043381403895641!3d39.48193921085968!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x8607121c55502513!2sCafeter%C3%ADa%20Castillo!5e0!3m2!1ses!2ses!4v1592843076612!5m2!1ses!2ses');
 // $scope.restaurantes[0].ubicacion = $sce.trustAsResourceUrl('https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d769.9302746499064!2d-0.32833917074802915!3d39.47562903391004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMznCsDI4JzMyLjMiTiAwwrAxOSc0MC4xIlc!5e0!3m2!1ses!2ses!4v1592842908116!5m2!1ses!2ses');

});