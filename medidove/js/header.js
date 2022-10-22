function resizeViewport() {
    if (document.documentElement.clientWidth <= 992)
    {
        if (document.body.scrollTop < 1 || document.documentElement.scrollTop < 1)
        {  
            document.getElementById("navbar").style.backdropFilter = "blur(2px)"; 
        }
        else
        {
            document.getElementById("header_logo").style.backgroundImage = "url('./images/logo1.png')";
            document.getElementById("navbar").style.backdropFilter = "blur(10px)";
        }
            
    }
    else if (document.body.scrollTop < 45 || document.documentElement.scrollTop < 45)
    {   
        document.getElementById("navbar").style.backdropFilter = "blur(0)";
        document.getElementById("navbar").style.background = "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.0))";
        document.getElementById("header_logo").style.backgroundImage = "url('./images/logo-blanco.png')";
    }
    else{
        
    }
}
window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if (document.documentElement.clientWidth >= 1010){
        if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0)
        {
            document.getElementById("navbar").style.backdropFilter = "blur(10px)";
            document.getElementById("navbar").style.webkitBackdropFilter = "blur(10px)";
            document.getElementById("header_logo").style.backgroundImage = "url('./images/logo1.png')";
        }
        else if (document.body.scrollTop <= 45 || document.documentElement.scrollTop <= 45)
        {
            $("#navbar").animate({
                background: "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.0))",
            }, 1000 );
            document.getElementById("navbar").style.backdropFilter = "blur(0)";
            document.getElementById("navbar").style.webkitBackdropFilter = "blur(0px)";
            document.getElementById("header_logo").style.backgroundImage = "url('./images/logo-blanco.png')";
        }
}
else{
    document.getElementById("header_logo").style.backgroundImage = "url('./images/logo1.png')";
    document.getElementById("navbar").style.background = "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.0)";

    if (document.body.scrollTop > 1 || document.documentElement.scrollTop > 1)
    {  
    document.getElementById("header_logo").style.backgroundImage = "url('./images/logo1.png')";
    document.getElementById("navbar").style.backdropFilter = "blur(10px)"; 
    	}
    else{
        document.getElementById("navbar").style.backdropFilter = "blur(2px)"; 
    }
}
}
visualViewport.onresize = () => {
    resizeViewport();
};

  $(document).ready(function(){
    if (document.documentElement.clientWidth <= 1010){
        document.getElementById("header_logo").style.backgroundImage = "url('./images/logo-blanco.png')";
    }
 })