This repository contains various notes, it's the source
that's used to build <http://notes.zerodogg.org>.

Directories contained here are used as categories for the
generated HTML. New directories will be automatically included.

The syntax of the actual note files in the subdirectories is
rather simple. The first line is the title that will be displayed
on the website optionally followed by an empty line. The rest of
the file is treated as markdown-formatted and is used as the content
of the note file itself.

The final HTML is generated by src/build, based upon the src/template.html
template.

This work is licensed under the Creative Commons Attribution-ShareAlike 3.0
Unported License. To view a copy of this license, visit
<http://creativecommons.org/licenses/by-sa/3.0/> or send a letter to Creative
Commons, 444 Castro Street, Suite 900, Mountain View, California, 94041, USA.
