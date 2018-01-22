function javascript_vars_function () {
    //Removes all parameter except for id and aud_c
    var path = window.location.pathname;
    var p = document.location.search;

    function getVars(p) {
        var vars = [],
            hash;
        var hashes = p.slice(p.indexOf('?') + 1).split('&');
        for (var i = 0; i < hashes.length; i++) {
            hash = hashes[i].split('=');
            vars.push({
                p: hash[0],
                v: hash[1]
            });
        }
        return vars;
    };

    var vars = getVars(p);

    for (var i = 0; i < vars.length; i++) {
       path = (path.indexOf('?') > -1 ? path = path + "&" : path = path + "?")
        if (vars[i].p == "id") {
            path = path + vars[i].p + "=" + vars[i].v;
        }
        else if (vars[i].p == "aud_c") {
            path = path + vars[i].p + "=" + vars[i].v;
        }
        else {
          path = window.location.pathname;
        }
      }
      console.log("path - Results - Start");
    console.log(path);
      console.log("path - Results - End");
    return path;
}
