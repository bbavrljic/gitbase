function addRevealEvent(stateName, desc, style) {
    Reveal.addEventListener(stateName, function (event) {
        var footer = document.getElementsByTagName("footer")[0];
        footer.innerHTML = '[ ' + desc + ' ]';
        footer.style = style || 'display:block; color:#000;';
    });
}

addRevealEvent('gitignore', 'za generisanje inicjalnog .gitignore file-a');
addRevealEvent('editorconf', 'za definisanje konzistentnog stila koda');
addRevealEvent('cheatsheet', 'interaktivni cheatsheet za git');
addRevealEvent('gitintuition', 'git tutrial sa vizualizaciom stabla', 'display:block; color:#eee;');
addRevealEvent('gitcodecademy', 'git tutorial sa realnim okruzenjem', 'display:block; color:#000; left:3em;');
addRevealEvent('gitbmodel', 'git branching model - detaljno');
