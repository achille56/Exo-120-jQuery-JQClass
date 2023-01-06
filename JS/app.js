// colorier tous les éléments.
$("#allFill").click(function () {
    $("#ligne1 div, #ligne2 div, #ligne3 div, #ligne4 div, #ligne5 div").addClass("choiceColor");
})

// remettre la couleur d'origine des éléments.
$("#allEmpty").click(function () {
    $("#ligne1 div, #ligne2 div, #ligne3 div, #ligne4 div, #ligne5 div").removeClass("choiceColor");
})

// colorie et retire la couleur des cercles.
$(".circle").click(function () {
    $(this).toggleClass("choiceColor");
})

$(".square").click(function (){
    if ($(this).is (".choiceColor")) {
        $(this).removeClass("choiceColor");
        $(this).siblings().removeClass("choiceColor");
    }
    else {
        $(this).addClass("choiceColor");
        $(this).siblings().addClass("choiceColor");
    }
})

$(".lozenge").click(function (){
    if ($(this).is (".choiceColor")) {
        $(this).removeClass("choiceColor");
        $(this).siblings().removeClass("choiceColor");
        $("#ligne1 div:eq(2), #ligne2 div:eq(2), #ligne4 div:eq(2), #ligne5 div:eq(2)").removeClass("choiceColor");
    }
    else {
        $(this).addClass("choiceColor");
        $(this).siblings().addClass("choiceColor");
        $("#ligne1 div:eq(2), #ligne2 div:eq(2), #ligne4 div:eq(2), #ligne5 div:eq(2)").addClass("choiceColor");
    }
})

