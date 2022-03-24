(function(){
    'use strict'
    var $btn = document.getElementById('btn');
    var $html = document.getElementById('html');

    var ariaControl = $btn.getAttribute('aria-controls');
    
    

    var $menu = document.getElementById(ariaControl);
    

    $html.classList.remove('no-js');
    $html.classList.toggle('js');

    $btn.addEventListener('click', function(e){
        $html.classList.toggle('menu-opened');
        var ariaExpanded = this.getAttribute('aria-expanded') === 'true';

        $btn.setAttribute('aria-expanded', !ariaExpanded);
        $menu.setAttribute('aria-expanded', !ariaExpanded);
    })
})()
