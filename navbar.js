$(function(){
    initNavbar();
    addButton("Home", "index.html");
	addButton("Game", "game.html");
	addButton("NextOS", "nextos.html");
	addButton("NxKrnl", "nxkrnl.html");
	addButton("GOS", "gos.html");
	addButton("GKernel", "gkernel.html");
    addButton("GitHub", "https://www.github.com/Glowman554");
});

function initNavbar(){
    $(".navbar").append("<div align='center' class='pages'></div>");
    //$(".content").append("<iframe class='cframe' frameborder='0'>")
}

function addButton(name, src){
    let id = genId();
    $(".pages").append("<button class='pbutton' id='" + id + "'>" + name + "</button>");
    $("#" + id).click(function(){
        //$('.cframe').attr('src', src)
        window.open(src, "_self")
    });
}

function genId(){
    return Math.floor(Math.random() * 99999999);
}