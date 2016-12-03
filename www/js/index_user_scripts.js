/*jshint browser:true */
/*global $ */(function()
{
 "use strict";
 /*
   hook up event handlers 
 */
 function register_event_handlers()
 {
    
    
     /* listitem  Pancakes */
    $(document).on("click", ".uib_w_4", function(evt)
    {
         /*global activate_page */
         activate_page("#uib_page_pancakes"); 
         return false;
    });
    
        /* button  #backBtnPancakes */
    $(document).on("click", "#backBtnPancakes", function(evt)
    {
         /*global activate_page */
         activate_page("#mainpage"); 
         return false;
    });
     
     
     
     
    var iabRef = null;

    function iabClose(event) {
         iabRef.removeEventListener('exit', iabClose);
    }
     
     
     
    
        /* button  #takeAwayBtn */
    $(document).on("click", "#takeAwayBtn", function(evt)
    {
         iabRef = window.open('http://www.shawacademy.com', '_blank', 'location=yes');
         iabRef.addEventListener('exit', iabClose);
         return false;
    });
    
    }
 document.addEventListener("app.Ready", register_event_handlers, false);
})();
