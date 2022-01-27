function addStyles(){
    var link = document.createElement('link');
    link.setAttribute('rel', 'stylesheet');
    link.setAttribute('href', `https://www.ivelt.com/kfmdm/assets/appcss.css`);
    link.setAttribute('type', 'text/css');
    document.head.appendChild(link);
}
addStyles();

function addJS(jsAssetFile){
   var script = document.createElement('script');
   script.setAttribute('type', 'text/javascript');
   script.setAttribute('src', `https://www.ivelt.com/kfmdm/assets/${jsAssetFile}`);
   document.head.appendChild(script);
}

addJS('loadjs.js');
