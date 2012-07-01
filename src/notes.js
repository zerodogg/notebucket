(function($)
{
    $(function ()
    {
        /*
         * The logic for the category filtering
         */
        $('.categoryFilter').click(function(e)
        {
            e.preventDefault();
            var id = $(this).attr('href');
            window.location.href = id;
            if(id == '#all')
            {
                $('.section').show();
            }
            else
            {
                $('.section:not('+id+')').hide();
                $(id).show();
            }
        });
        /*
         * Show/hide content when a title is clicked
         */
        $('.category .title').click(function(e)
        {
            e.preventDefault();

            var $this = $(this);
            var $parent = $this.parent().find('.content, .category').first();
            if ($parent.is(':hidden'))
            {
                /* In addition to toggling the content, also scroll so that the
                 * top of it is visible */
                $('body, html').animate({ scrollTop: $this.offset().top}, 400);
            }
            if($parent.html() == '')
            {
                $parent.load($this.attr('href')+' #notecontent',function()
                {
                    $parent.slideToggle();
                });
            }
            else
            {
                $parent.slideToggle();
            }
            if(history)
            {
                if(window.location.pathname != $this.attr('href'))
                {
                    history.pushState(null,null,$this.attr('href'));
                }
            }
        });
        if(history)
        {
            window.onpopstate = function(ev)
            {
            };
        }
    });
})(jQuery);
