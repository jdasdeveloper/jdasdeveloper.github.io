function resizeViewport() {
    if (document.documentElement.clientWidth <= 1009)
    {
        document.getElementById("navbar").style.background = "#f3f6ff";
        document.getElementById("header_logo").style.backgroundImage = "url('../images/logo1.png')";
    }
    else if (document.body.scrollTop == 0 || document.documentElement.scrollTop == 0)
    {   
        document.getElementById("navbar").style.background = "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.0))";
        document.getElementById("header_logo").style.backgroundImage = "url('../images/logo-blanco.png')";
        reset("#f3f6ff");
    }
    
}
// resizeViewport();
// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if (document.documentElement.clientWidth >= 1010){
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0)
    {
        document.getElementById("navbar").style.background = "#f3f6ff";
        document.getElementById("header_logo").style.backgroundImage = "url('../images/logo1.png')";
        reset("rgb(5,5,5)");
    }
    else if (document.body.scrollTop <= 45 || document.documentElement.scrollTop <= 45)
    {
        
        document.getElementById("navbar").style.background = "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.0))";
        document.getElementById("header_logo").style.backgroundImage = "url('../images/logo-blanco.png')";
        reset("#f3f6ff");
    }
}
else{document.getElementById("header_logo").style.backgroundImage = "url('../images/logo1.png')";

}
}
visualViewport.onresize = () => {
    resizeViewport();
};

function reset(color) {
	var elements = document.getElementsByClassName('header-option'); // get all elements
	for(var i = 0; i < elements.length; i++){
		elements[i].style.color = color;
	}
}

window.addEventListener('load', (event) => {
    console.log('page is fully loaded');
    if (document.documentElement.clientWidth <= 1010){
        document.getElementById("header_logo").style.backgroundImage = "url('../images/logo-blanco.png')";
    }
  });