function resizeViewport() {
    if (document.documentElement.clientWidth > 1010)
    {
        
        document.getElementById("navbar").style.background = "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.0))";
    }
    else
    {   
        
        document.getElementById("navbar").style.background = "#f3f6ff";
    }
}
resizeViewport();
// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function () {
    scrollFunction()
};

function scrollFunction() {
    if (document.documentElement.clientWidth > 1010){
    if (document.body.scrollTop > 45 || document.documentElement.scrollTop > 45)
    {
        document.getElementById("navbar").style.background = "#f3f6ff";
    }
    else if (document.body.scrollTop == 0 || document.documentElement.scrollTop == 0)
    {
        
        document.getElementById("navbar").style.background = "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.0))";
    }
}
}
visualViewport.onresize = () => {
    resizeViewport();
};