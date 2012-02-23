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
        $('.category .title').click(function()
        {
            var $this = $(this);
            var $parent = $this.parent().find('.content, .category').first();
            if ($parent.is(':hidden'))
            {
                /* In addition to toggling the content, also scroll so that the
                 * top of it is visible */
                $('body, html').animate({ scrollTop: $this.offset().top}, 400);
            }
            $parent.slideToggle();
            /* Set the hash parameter so that linking works */
            var entryT = $this.parent('.note').data('entry');
            if(entryT != null)
            {
                window.location.href = '#'+entryT;
            }
        });

        /*
         * Scroll to an existing item if a hash parameter is supplied
         */
        if (/#/.test(location.href))
        {
            var entry = location.href.replace(/^[^#]+#/,'');
            var found = false;
            $('.note').each(function()
            {
                if($(this).data('entry') == entry)
                {
                    $(this).find('.title').click();
                    found = true;
                    return false;
                }
            });
            if (!found)
            {
                if ($('.section:#'+entry).length)
                {
                    $('.section:not(#'+entry+')').hide();
                    $('#'+entry).show();
                }
            }
        }
    });
})(jQuery);
