
$(document).ready(function(){
    $(".cuatro").css({"background-color": "white"});
    $("#tres").css({"background-color": "white"});
    $("#dos").css({"background-color": "white"});
    $(".uno").css({"background-color": "green"});
    $("#click").css({"background-color": "yellow"});
    $("#btn-hide").css({"background-color": "yellow"});
    $("#btn-show").css({"background-color": "yellow"});
    $("h1").css({"background-color": "red"})
    $("h2").css({"background-color": "blue"})
    $(".5").css({"background-color": "green"});

    
    $("#click").click(function(){
        alert("HOLA GAAAAAAAAAAA >:)");
    });
    
    $("#btn-hide").dblclick(function(){
        alert("Esconder");
        $(".uno").hide();
    //dblclick para doble click
    });
    
    $("#btn-show").dblclick(function(){
        alert("Mostrar");
        $(".uno").show();
        
    });
    
    $(".cuatro").mouseenter(function(){
        $("#tres").slideUp();
        
    });
    
    $(".cuatro").mouseleave(function(){
        $("#tres").slideDown();
        
    });

    $("#btn-hider").click(function(){
        alert("Desea Esconder el primer parrado");
        $(".5").hide();
    //dblclick para doble click
    });
    
    $("#btn-shower").click(function(){
        alert("Desea Mostrar el primer parrado");
        $(".5").show();
        
    });
    
    
    });
