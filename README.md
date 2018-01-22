# javascript_query_parameter
Read and parse and modify the query parameters of an URL by javascript

HTML Boilerplate by
http://htmlshell.com/

What does this do?
- The index.html is just a shell to run the javascript. You have a couple of buttons which attach parameters which are supposed to be parsed. All the magic happens in the console.
- The query_ops.js file. It reads in the URL, checks for the parameters, splits them into pairs and reattaches them based on the ID.

Why did you do this?
For the google tag manager -> The task at hand was to just allow certain parameters being attached to the URL. In case you ware working with marketing partners, you will know what kind of mess they attach.
Keep analytics clean by simply modifying the parsed URL / Page Parameter which is given to the analytics script.
