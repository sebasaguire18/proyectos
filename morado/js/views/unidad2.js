$( document ).ready(function() {
    slide_predeterminado();
    console.log(tema);
    slide_link(tema);
    $('#smartwizard').smartWizard({
        loader:"show",
        theme:'arrows',
        toolbarSettings: {
              showNextButton: false, // show/hide a Next button
              showPreviousButton: false, // show/hide a Previous button
              toolbarExtraButtons: [] // Extra buttons to show on toolbar, array of jQuery input/buttons elements
        },
        transition: {
            animation: 'slide-horizontal', // Effect on navigation, none/fade/slide-horizontal/slide-vertical/slide-swing
            speed: '500', // Transion animation speed
            easing:'' // Transition animation easing. Not supported without a jQuery easing plugin
        }
    });

    $('#next').on('click', function () {
        $('#smartwizard').smartWizard("next");
        slide();
        actualizarprogress();
    });
    
    $('#prev').on('click', function () {
        $('#smartwizard').smartWizard("prev");
        slide();
        actualizarprogress();
    });
    /*funcion_vanvas();
    funcion_canvas2();*/
    /*setMigaja("Unidades de aprendizaje","2. Conjuntos","Definición, notación, determinación y clasificación de conjuntos");*/
    /*slide_predeterminado();*/

    /*$(".t_1").on('click', cambiacontenido2(1));
    $(".t_2").on('click', cambiacontenido2(2));
    $(".t_3").on('click', cambiacontenido2(3));*/
    
});

function slide(){
    var stepIndex = $('#smartwizard').smartWizard("getStepIndex");
    controlSlides(stepIndex);
}

function slide_predeterminado(){
    $(".nav-link").removeClass('done');
    $(".nav-link").removeClass('active');
    controlSlides(1);
    window.location.href ="#unidad2-1";
}

function slide_link(num){
    $(".nav-link").removeClass('done');
    $(".nav-link").removeClass('active');
    window.location.href ="#unidad2-"+num;
    controlSlides(num);
}

function controlSlides(num){
    switch (parseInt(num)) {
        case 0:
            setMigaja("Unidades de aprendizaje","2. Conjuntos","Definición, notación, determinación y clasificación de conjuntos");
            $("#content-ova").load("base/unidades/unidad1.html");
            tema = 10;
            break;
        case 1:
            setMigaja("Unidades de aprendizaje","2. Conjuntos","Definición, notación, determinación y clasificación de conjuntos");
            break;
        case 2:
            setMigaja("Unidades de aprendizaje","2. Conjuntos","Definición, notación, determinación y clasificación de conjuntos");
            break;
        case 3:
            setMigaja("Unidades de aprendizaje","2. Conjuntos","Definición, notación, determinación y clasificación de conjuntos");
            $("#content").html('');
            $("#img_cont").html('');
            break;
        case 4:
            setMigaja("Unidades de aprendizaje","2. Conjuntos","Relaciones, operaciones entre conjuntos y sus propiedades. (representación gráfica)");
            //$("#pregunta_cont").html('');
            $("#contenido2").html('');
            $("#img_2").html('');
            break;
        case 5:
            setMigaja("Unidades de aprendizaje","2. Conjuntos","Relaciones, operaciones entre conjuntos y sus propiedades. (representación gráfica)");
            break;
        case 6:
            setMigaja("Unidades de aprendizaje","2. Conjuntos","Número de elementos de la unión entre conjuntos");
            break;
        case 7:
            setMigaja("Unidades de aprendizaje","2. Conjuntos","Número de elementos de la unión entre conjuntos");
            break;
        case 8:
            setMigaja("Unidades de aprendizaje","2. Conjuntos","Número de elementos de la unión entre conjuntos");
            break;
        case 9:
            setMigaja("Unidades de aprendizaje","2. Conjuntos","Número de elementos de la unión entre conjuntos");
            break;
        case 10:
            setMigaja("Unidades de aprendizaje","2. Conjuntos","Número de elementos de la unión entre conjuntos");
            break;
        case 11:
            setMigaja("Unidades de aprendizaje","2. Conjuntos","Número de elementos de la unión entre conjuntos");
            break;
        case 12:
            setMigaja("Unidades de aprendizaje","2. Conjuntos","Número de elementos de la unión entre conjuntos");
            break;
        case 13:
            setMigaja("Unidades de aprendizaje","2. Conjuntos","Número de elementos de la unión entre conjuntos");
            break;
        default:
            break;
    }
}



function cambiacontenido(opcion){
    switch (parseInt(opcion)) {
        case 1:
            var img = `<img src="assets/img/img_ova/dibujo_union.png" style="max-width: 90%;">`;
            var cont = `<p>Si se tienen dos conjuntos A y B, se llama unión al conjunto formado por los elementos que pertenecen a estos conjuntos, es decir:</p>
                                    <p>𝐴 ∪𝐵= {𝑥 / 𝑥∈𝐴 ∨ 𝑥∈𝐵}.</p>
                                    <p>Sombreado <img src="assets/img/img_ova/señalar.png" style="max-width: 15%;"></p>`;
            $("#content").html(cont);
            $("#img_cont").html(img);
            break;
        case 2:
            var img = `<img src="assets/img/img_ova/dibujo_interseccion.png" style="max-width: 90%;">`;
            var cont = `<p>Si se tienen dos conjuntos A y B, se llama intersección al conjunto formado por los elementos en común de estos conjuntos, es decir:</p>
                                    <p>𝐴 ∩𝐵= {𝑥 / 𝑥∈𝐴  ∧   𝑥∈𝐵}.</p>
                                    <p>Sombreado <img src="assets/img/img_ova/señalar.png" style="max-width: 15%;"></p>`;
            $("#content").html(cont);
            $("#img_cont").html(img);
            break;
        case 3:
            var img = `<img src="assets/img/img_ova/dibujo_diferencia.png" style="max-width: 90%;">`;
            var cont = `<p>Dados dos conjuntos A y B, se llama diferencia al conjunto al formado por los elementos que son del primero pero que no son del segundo, es decir:</p>
                                    <p>𝐴 ∩𝐵= 𝐴−𝐵= {𝑥 / 𝑥∈𝐴  ∧   𝑥∉𝐵}.</p>
                                    <p>Sombreado <img src="assets/img/img_ova/señalar.png" style="max-width: 15%;"></p>`;
            $("#content").html(cont);
            $("#img_cont").html(img);
            break;
        case 4:
            var img = `<img src="assets/img/img_ova/dibujo_diferenciasimetrica.png" style="max-width: 90%;">`;
            var cont = `<p>Se llama diferencia simétrica entre A y B al conjunto de los elementos exclusivos de los dos conjuntos, es decir:</p>
                                    <p>𝐴△𝐵= {𝑥 / 𝑥∈(𝐴−𝐵)    ⋁   𝑥∈(𝐵−𝐴)}
                                    𝐴△𝐵=(𝐴−𝐵)  ∪(𝐵−𝐴)</p>
                                    <p>Propiedad; una forma equivalente</p>
                                    <p>𝐴△𝐵=(𝐴∪𝐵)−(𝐴∩𝐵)</p>`;
            $("#content").html(cont);
            $("#img_cont").html(img);
            break;
        case 5:
            var img = `<img src="assets/img/img_ova/dibujo_complemento.png" style="max-width: 90%;">`;
            var cont = `<p>𝐴^𝐶 o 𝐴′  o  𝐴 ̅,  o también la diferencia  𝑈−𝐴 , se le llama complemento de 𝐴 con respecto a 𝑈,  o simplemente complemento de 𝐴.</p>
                                    <p>Está conformado por los elementos que NO pertenecen al conjunto A. (Que están por fuera de 𝐴)</p>`;
            $("#content").html(cont);
            $("#img_cont").html(img);
            break;
        case 6:
            // $("#content").html('');
            // $("#img_cont").html('');
            break;
        default:
            break;
    }
}

function cambiacontenido2(opcion){
    switch (parseInt(opcion)) {
        case 1:
            var img = `<img src="assets/img/img_ova/ejp_union.png" style="max-width: 75%;">`;
            var cont = `<b>Complemento de la unión entre dos conjuntos:</b>
                                      <p>〖(𝑨∪𝑩)〗^𝑪 o (𝑨∪𝑩)′  o  ((𝑨∪𝑩)) ̅, </p>
                                      <p>O también la diferencia 𝐔−(𝐀∪𝐁</p>`;
            $("#contenido2").html(cont);
            $("#img_2").html(img);
            
            //$("#pregunta_cont").html('');
            break;
        case 2:
            var img = `<img src="assets/img/img_ova/ejp_complementointerseccion.png" style="max-width: 75%;">`;
            var cont = `<b>Complemento de la intersección entre dos conjuntos:</b>
                                      <p>〖(𝐴∩𝐵)〗^𝐶 o (𝐴∩𝐵)′  o  ((𝐴∩𝐵)) </p>
                                      <p>O también la diferencia  𝑈−(𝐴∩𝐵)</p>`;
            $("#contenido2").html(cont);
            $("#img_2").html(img);
            //$("#pregunta_cont").html('');
            break;
        case 3:
            var img = `<img src="assets/img/img_ova/ejp_doblemente.png" style="max-width: 75%;">`;
            var cont = `<p>Si se quisiera graficar
                        〖(𝐴∩𝐵)〗^𝐶∪𝐶 
                        Los conjuntos 〖(𝐴∩𝐵)〗^𝐶 y 𝐶, se rayan en sentidos diferentes.
                        La unión ∪, será todo lo rayado; Si se quisiera graficar la intersección
                        (𝐴∩𝐵)^𝐶∩𝐶 
                        <p>Será todo lo doblemente rayado</p>`;
            $("#contenido2").html(cont);
            $("#img_2").html(img);
            
            break;
        default:
            break;
    }
}

// function conjuntos(num){
//     $(".info_conjuntos").removeClass('fondo_azul_claro');
//     $(".info_conjuntos"+num).addClass('fondo_azul_claro');
//     $(".info_conjuntos").removeClass('shadow');
//     $(".info_conjuntos"+num).addClass('shadow');
//     if (num == 1) {
//         var conjunto = `
//                     <div class="col-lg-12 col-md-12">
//                       <b>Definiciones básicas</b>
//                       <div class="mt-2">
//                         <p class="justificado">Un conjunto es una colección o reunión de objetos o cosas.  Se llaman “elementos” a aquellos objetos o cosas que constituyen el conjunto, o que lo conforman</p>
//                       </div>
//                     </div>
                    
//                     <div><img src="assets/img/img_template/ejemplos.png" alt="" class="img-icon"> <b>Por ejemplo: </b></div>

//                     <div class="m-0 row">
//                       <div class="col-lg-4">
//                         <div class="mt-5">
//                           <center><h5>Son conjuntos los siguientes</h5></center>
//                         </div>
//                         <div>
//                           <center><img src="assets/img/img_ova/flecha_punteada.png"></center>
//                         </div>
//                       </div>
//                       <div class="col-lg-4">
//                         <p class="justificado size_13">
//                           <b>a</b>. Las letras del alfabeto castellano. <br>
//                           <b>b</b>. Los estudiantes de Ingenierías y de Economía de UNAULA.<br>
//                           <b>c</b>. Los números pares.<br>
//                           <b>d</b>. El conjunto de todos los habitantes de Colombia.<br>
//                           <b>e</b>. Los ciudadanos de Colombia que han sido presidentes.<br>
//                           <b>f</b>. Los estudiantes de Ingeniería Informática de Colombia que han leído la Constitución.<br>
//                           <b>g</b>. Los números Enteros.
//                         </p>
//                       </div>
//                       <div class="col-lg-4">
//                         <img src="assets/img/img_ova/geometricos.png" style="max-width: 70%;">
//                       </div>
//                     </div>
//                     `;
//         $("#info_unidad2").html(conjunto)
//     }if (num == 2) {
//         var conjunto = `
//                     <div class="col-lg-12 row">
//                       <div class="col-md-4 row" style="border-right: solid 1px #4141f3;">
//                           <div class="col-lg-4">
//                             <img src="assets/img/img_ova/mayuscula.png" style="max-width: 100%;">
//                           </div>
//                           <div class="col-lg-8">
//                             <p class="size_13">Se acostumbra a utilizar las letras <b>mayúsculas</b> para denotar conjuntos.</p>
//                           </div>
//                           <div class="col-lg-4">
//                             <img src="assets/img/img_ova/minuscula.png" style="max-width: 100%;">
//                           </div>
//                           <div class="col-lg-8">
//                             <p class="size_13">Y las letras <b>minúsculas</b> para denotar sus elementos</p>
//                           </div>
//                       </div>
//                       <div class="col-md-4" style="border-right: solid 1px #4141f3; padding-left: 20px;">
//                           <div class="mb-2">
//                             <p>Se tiene que para indicar que el elemento 𝒙 pertenece al conjunto B escribiremos  <b>𝒙∈𝑩;</b> Que se lee:</p>
//                           </div>
//                           <div class="content-banner">
//                             <div class="banner">
//                                 <p class="text-white text-banner">“x pertenece a B”, “x es un elemento de B”.</p>
//                             </div>
//                           </div>
//                       </div>
//                       <div class="col-md-4" style="padding-left: 20px;">
//                           <div class="mb-2">
//                             <p>Si el elemento 𝒂 no pertenece al conjunto <b>𝑩</b> escribiremos</p>
//                           </div>
//                           <div class="content-banner">
//                               <div class="banner">
//                                 <p class="text-white text-banner">𝒙∉𝑩</p>
//                               </div>
//                           </div>
//                       </div>
//                       <div class="col-md-12" style="padding: 5%;">
                        
//                       </div>
//                     </div>
//                     `;
//         $("#info_unidad2").html(conjunto)
//     }if (num == 3) {
//         var conjunto = `
//                     <div class="col-lg-12 col-md-12 mt-3">
//                       <h5>Determinación de conjuntos:</h5>
//                       <p>Un conjunto se puede describir o determinar, por:</p>
//                     </div>
//                     <div class="col-lg-12 col-md-12 row">
//                       <center class="col-lg-6">
//                         <div>
//                           <div class="card1-2">
//                               <div class="card_top2">
//                                   <div class="m-0 p-0">
//                                       <p class="text-white text-center azul_card p-2 rounded">a. Extensión</p>
//                                   </div>
//                                   <br>
//                                   <p>Se escriben todos sus elementos separados por comas, y encerrándolos dentro de llaves  { . . . . }</p>
//                               </div>
//                               <div class="card1_bottom2">
//                                   <div class="row">
//                                       <div class="col-lg-12">
//                                         <p class="text-white"><img src="assets/img/img_template/ejemplos.png" alt="" class="img-icon"> <b>Por ejemplo: </b></p>
//                                         <p class="text-white">
//                                         Al conjunto A formado por las vocales, puedes representarlo por:  𝐴 = { 𝑎, 𝑒, 𝑖, 𝑜, 𝑢 }</p>
//                                       </div>
//                                   </div>
//                               </div>
//                           </div>
//                         </div>
//                       </center>
//                       <div class="col-lg-6">
//                         <div class="card1-2">
//                             <div class="card_top2">
//                                 <div class="m-0 p-0">
//                                     <p class="text-white text-center azul_card p-2 rounded">b. Comprensión</p>
//                                 </div>
//                                 <br>
//                                 <p>Se escriben todos sus elementos separados por comas, y encerrándolos dentro de llaves  { . . . . }</p>
//                             </div>
//                             <div class="card1_bottom2">
//                                 <div class="row">
//                                     <div class="col-lg-12">
//                                       <p class="text-white"><img src="assets/img/img_template/ejemplos.png" alt="" class="img-icon"> <b>Por ejemplo: </b></p>
//                                       <p class="text-white">Si 𝑀 es el conjunto de los números impares: 𝑀 = { 𝒙 / 𝒙 𝑒𝑠 𝑛ú𝑚𝑒𝑟𝑜 𝑖𝑚𝑝𝑎𝑟 }
//                               Que se lee “𝑀 es el conjunto de elementos 𝒙,  tal que 𝒙 es número impar”.</p>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                       </div>
//                     </div>
//                     `;
//         $("#info_unidad2").html(conjunto)
//     }if (num == 4) {
//         var conjunto = `
//                     <div class="col-lg-12 row m-2">
//                       <h5>Representación de conjuntos:</h5>
//                       <p class="justificado">Los conjuntos pueden representarse en DIAGRAMA DE VENN
//                       Todo conjunto se puede representar gráficamente por medio de un área plana delimitada por una curva cerrada (óvalos, círculo, triángulo, rectángulo, etc.)</p>
//                     </div>
//                     <div class="row m-1">
//                       <div class="col-lg-2">
//                         <img src="assets/img/img_ova/ejemplos.png" style="max-width: 100%;">
//                       </div>
//                       <div class="col-lg-5">
//                         <b>Ejemplo</b>
//                         <p>Los conjuntos 𝐴 = {1, 2, 3 }  y 𝐵={ 2, 4 }  gráficamente:</p>
//                         <img src="assets/img/img_ova/flecha_punteada.png">
//                       </div>
//                       <div class="col-lg-5">
//                         <img src="assets/img/img_ova/representacion_conjuntos.png" style="max-width: 70%;">
//                       </div>
//                     </div>
//                     `;
//         $("#info_unidad2").html(conjunto)
//     }if (num == 5) {
//         var conjunto = `
//                     <div class="d-flex justify-content-center col-md-12">
//                       <div class="row">
//                         <div class="fondo_canvas col-lg-12 m-0 p-0">
//                           <p class="rueda1 cursor" data-toggle="modal" data-target="#modalconjunto">Conjunto universal (referencial)</p>
//                           <p class="rueda2 cursor" data-toggle="modal" data-target="#modalconjunto2">Conjuntos finitos e infinitos</p>
//                           <p class="rueda3 cursor" data-toggle="modal" data-target="#modalconjunto3">Subconjuntos</p>
//                           <p class="rueda4 cursor" data-toggle="modal" data-target="#modalconjunto4">Conjunto vacío</p>
//                         </div>
//                       </div>
//                     </div>
//                     `;
//         $("#info_unidad2").html(conjunto)
//     }
// }

function cardPara4(num,ventana){
    if (ventana==0) {
        $("#card4-1").addClass('hidden')
        $("#card4-2").addClass('hidden')
        $("#card4-3").addClass('hidden')
        $("#card4-4").addClass('hidden')
        var conjunto = `<div class="col-6 bg-color-2 text-center border-1" id="card4-1" onclick="cardPara4(1,1)"> <img src="assets/img/img_ova/buscar.png" class="w-50 p-3" id="img-card4-1"></div>
                        <div class="col-6 bg-color text-center border-2" id="card4-2" onclick="cardPara4(2,1)"> <img src="assets/img/img_ova/navegador.png" class="w-50 p-4" id="img-card4-2"></div>
                        <div class="col-6 bg-color-3 text-center border-3" id="card4-3" onclick="cardPara4(3,1)"> <img src="assets/img/img_ova/analitica.png" class="w-50 p-4" id="img-card4-3"></div>
                        <div class="col-6 bg-color-4 text-center border-4" id="card4-4" onclick="cardPara4(4,1)"> <img src="assets/img/img_ova/busqueda.png" class="w-50 p-4" id="img-card4-4"></div>`;
        $("#card4-padre").html(conjunto)
    }
    if (ventana==1) {
        $("#card4-1").addClass('hidden')
        $("#card4-2").addClass('hidden')
        $("#card4-3").addClass('hidden')
        $("#card4-4").addClass('hidden')
        if (num==1) {
            var conjunto = `
            <div class="col-6 bg-white border-1 justify-content pt-2 text-black" id="card4-1" onclick="cardPara4(1,0)> 
                <ul class="text-reducido">
                    <p><b>Inicio de la revisión</b></p>
                    <li class="text-reducido">Creswell (2005) recomienda escribir un título preliminar de la investigación y seleccionar dos o tres palabras “clave” que capten la idea central de la investigación o utilizar las que autores destacados en el campo suelen plantear. Es una buena manera de comenzar una búsqueda.</li>
                    <li class="text-reducido">Se recomienda iniciar la revisión acudiendo a expertos en el tema o a través de fuentes secundarias o terciarias, ya que esas personas se vuelven especialistas en el tema y es fundamental aprovechar su esfuerzo.</li>
                    <li class="text-reducido">Buscar en bancos o bases de datos físicas y electrónicas.</li>
                </ul>
            </div>
            <div class="col-6 bg-color text-center border-2" id="card4-2" onclick="cardPara4(2,0)"> <img src="assets/img/img_ova/navegador.png" class="w-50 p-4" id="img-card4-2"></div>
            <div class="col-6 bg-color-3 text-center border-3" id="card4-3" onclick="cardPara4(3,0)"> <img src="assets/img/img_ova/analitica.png" class="w-50 p-4" id="img-card4-3"></div>
            <div class="col-6 bg-color-4 text-center border-4" id="card4-4" onclick="cardPara4(4,0)"> <img src="assets/img/img_ova/busqueda.png" class="w-50 p-4" id="img-card4-4"></div>
            `;
            $("#card4-padre").html(conjunto)
        }
        if (num==2) {
            var conjunto = `
            <div class="col-6 bg-color-2 text-center border-1" id="card4-1" onclick="cardPara4(1,0)"> <img src="assets/img/img_ova/buscar.png" class="w-50 p-3" id="img-card4-1"></div>
            <div class="col-6 bg-white border-2 justify-content p-4 text-black" id="card4-2"  onclick="cardPara4(2,0)> 
            <ul class="text-reducido">
                <p><b>Obtención de la literatura</b></p><br>
                    <li class="text-reducido">Una vez identificadas las fuentes primarias es necesario localizarlas en las bibliotecas físicas y/o electrónicas.</li>
                </ul>
            </div>
            <div class="col-6 bg-color text-center border-3" id="card4-3" onclick="cardPara4(3,0)"> <img src="assets/img/img_ova/analitica.png" class="w-50 p-4" id="img-card4-3"></div>
            <div class="col-6 bg-color-4 text-center border-4" id="card4-4" onclick="cardPara4(4,0)"> <img src="assets/img/img_ova/busqueda.png" class="w-50 p-4" id="img-card4-4"></div>
            `;
            $("#card4-padre").html(conjunto)
        }
        if (num==3) {
            var conjunto = `
                <div class="col-6 bg-color-2 text-center border-1" id="card4-1" onclick="cardPara4(1,0)"> <img src="assets/img/img_ova/buscar.png" class="w-50 p-3" id="img-card4-1"></div>
                <div class="col-6 bg-color text-center border-2" id="card4-2" onclick="cardPara4(2,0)"> <img src="assets/img/img_ova/navegador.png" class="w-50 p-4" id="img-card4-2"></div>
                <div class="col-6 bg-white border-3 justify-content pt-2 text-black" id="card4-3"  onclick="cardPara4(3,0)> 
                    <ul class="text-reducido">
                        <p><b>Consulta de la literatura</b></p>
                        <p class="text-reducido">Seleccionar las que serán de utilidad para el marco teórico específico, teniendo como base preguntas como: <i>¿La referencia se relaciona con el problema de investigación? ¿Qué aspecto trata? ¿Ayuda a resolver más rápido y profundamente la investigación?</i></p>
                        <li class="text-reducido">La bibliografía extranjera debe manejarse como guía para ayudar a definir el enfoque y tratamiento del problema solamente, ya que la información y teorías presentadas fueron elaboradas para otros contextos y situaciones.</li>
                    </ul>
                </div>
                <div class="col-6 bg-color-4 text-center border-4" id="card4-4" onclick="cardPara4(4,0)"> <img src="assets/img/img_ova/busqueda.png" class="w-50 p-4" id="img-card4-4"></div>
            `;
            $("#card4-padre").html(conjunto)
        }
        if (num==4) {
            var conjunto = `
                <div class="col-6 bg-color-2 text-center border-1" id="card4-1" onclick="cardPara4(1,0)"> <img src="assets/img/img_ova/buscar.png" class="w-50 p-3" id="img-card4-1"></div>
                <div class="col-6 bg-color text-center border-2" id="card4-2" onclick="cardPara4(2,0)"> <img src="assets/img/img_ova/navegador.png" class="w-50 p-4" id="img-card4-2"></div>
                <div class="col-6 bg-color-3 text-center border-3" id="card4-3" onclick="cardPara4(3,0)"> <img src="assets/img/img_ova/analitica.png" class="w-50 p-4" id="img-card4-3"></div>
                <div class="col-6 bg-white border-4  pt-4 text-black" id="card4-4" onclick="cardPara4(4,0)> 
                    <ul class="text-reducido">
                        <p><b>Extracción y recopilación de la información</b></p><br>
                        <li class="text-reducido">Existen diferentes maneras de recopilar la información extraída, lo importante es extraer todos los datos e ideas necesarias para la elaboración del marco teórico.</li>
                        <li class="text-reducido">Una vez extraída y recopilada la información se puede comenzar a elaborar el marco teórico integrando toda la información.</li>
                    </ul>
                </div>
            `;
            $("#card4-padre").html(conjunto)
        }
    }
}