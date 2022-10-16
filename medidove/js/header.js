function resizeViewport() {
    if (document.documentElement.clientWidth <= 1009)
    {
        // document.getElementById("navbar").style.backdropFilter = "blur(10px)";
        // document.getElementById("navbar").style.background = "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)";
        document.getElementById("header_logo").style.backgroundImage = "url('../images/logo1.png')";
    }
    else if (document.body.scrollTop < 45 || document.documentElement.scrollTop < 45)
    {   
        document.getElementById("navbar").style.backdropFilter = "blur(0)";
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
        $("#navbar").animate({
            background: "linear-gradient(rgba(243, 246, 255, 0.5), rgba(243, 246, 255, 0.5)",
        }, 1000 );
        document.getElementById("navbar").style.backdropFilter = "blur(10px); -webkit-backdrop-filter: blur(10px);";
        // document.getElementById("navbar").style.background = "linear-gradient(rgba(243, 246, 255, 0.5), rgba(243, 246, 255, 0.5)";
        document.getElementById("header_logo").style.backgroundImage = "url('./images/logo1.png')";
        reset("rgb(5,5,5)");
    }
    else if (document.body.scrollTop <= 45 || document.documentElement.scrollTop <= 45)
    {
        $("#navbar").animate({
            background: "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.0))",
        }, 1000 );
        // document.getElementById("navbar").style.background = "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.0))";
        document.getElementById("navbar").style.backdropFilter = "blur(0); -webkit-backdrop-filter: blur(10px);";
        document.getElementById("header_logo").style.backgroundImage = "url('./images/logo-blanco.png')";
        reset("#f3f6ff");
    }
}
else{
    document.getElementById("header_logo").style.backgroundImage = "url('./images/logo1.png')";
    document.getElementById("navbar").style.background = "linear-gradient(rgba(243, 246, 255, 0.5), rgba(243, 246, 255, 0.5)";

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

// document.addEventListener('load', (event) => {
//     console.log('page is fully loaded');
//     if (document.documentElement.clientWidth <= 1010){
//         document.getElementById("header_logo").style.backgroundImage = "url('./images/logo-blanco.png')";
//     }
//   });
  $(document).ready(function(){
    console.log('page is fully loaded');
    if (document.documentElement.clientWidth <= 1010){
        document.getElementById("header_logo").style.backgroundImage = "url('./images/logo-blanco.png')";
    }
 })