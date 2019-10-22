(function ($) {
    if (typeof AOS == 'undefined') {
        var timer = setInterval(function () {
            if (typeof AOS == 'undefined') {
                return false;
            }
            AOS.init();
            clearInterval(timer);
        }, 50);
    } else {
        AOS.init();
    }


  /* $('.highlight').each(function(i, block) {
        hljs.highlightBlock(block);
    });*/

 // hljs.initHighlightingOnLoad();



    /* $("#toggleSideBarBtn").click(()=>{
         $(".m-xs-sidebar").toggle(300);
     });


     $('.m-article').each(function(i){
         $(this).find('img').each(function(){
             if ($(this).parent().hasClass('fancybox')) return;

             var alt = this.alt;

             if (alt) $(this).after('<span class="caption">' + alt + '</span>');

             $(this).wrap('<a href="' + this.src + '" title="' + alt + '" class="fancybox"></a>');
         });

         $(this).find('.fancybox').each(function(){
             $(this).attr('rel', 'article' + i);
         });
     });*/

    /*   if ($.fancybox){
           $('.fancybox').fancybox();
       }*/


})(jQuery);