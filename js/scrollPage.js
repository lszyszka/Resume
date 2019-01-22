$('a').on('click', function () {
    const id = "#" + $(this).attr('data-id');
    if ($(this).parent().parent().attr('class') === 'menu') { //sprawdzenie czy to element mobilnego menu
        $('html,body').animate({
            "scrollTop": ($(id).offset().top) //scroll do gory danego elementu 
        }, 1000);
        setTimeout(() => {
            showMenu(); //wywolanie funkcji wylaczacej mobile menu
        }, 1300);
    }
    //jesli menu desktop 
    $('html,body').animate({
        "scrollTop": ($(id).offset().top)
    }, 1000);
})

//Klikalnosc przyciskow kolowych
$('.buttons div').on('click', function () {
    const id = "#" + $(this).attr("data-id");
    $('html, body').animate({
        "scrollTop": ($(id).offset().top)
    }, 1000)
})