var wtf = function() {
	function wtf_hover(){
		$('.img-avatar').hover( 
			function (){
				$('h1').addClass('stripe');
				$('p').addClass('stripe');
				$('.navbar-inverse').addClass('color');
			},
			function (){
				$('h1').removeClass('stripe');
				$('p').removeClass('stripe');
				$('.navbar-inverse').removeClass('color');

			}
		);
	}
	function wtf_box(){
		 $('.zoom.blue').hoverZoom({
                overlayColor: '#3498db',
                zoom: 0
            });
            
            $('.green').hoverZoom({
                overlayColor: '#1abc9c',
                zoom: 0
            });
            
            $('.pink').hoverZoom({
                overlayColor: '#bd2e75',
                zoom: 0
            });
            
            $('.black').hoverZoom({
                overlayColor: '#2f2f2f',
                zoom: 0
            });
            
            $('.alizarin').hoverZoom({
                overlayColor: '#e74c3c',
                zoom: 0
            });
	}

  return {
        init: function() {
        	wtf_hover();    
        	wtf_box();
        }
    };
}();
$(function() {
    "use strict";
    wtf.init();
});