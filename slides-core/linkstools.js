function addRevealEvent(stateName, desc, style) {
    Reveal.addEventListener(stateName, function (event) {
        var footer = document.getElementsByTagName("footer")[0];
        footer.innerHTML = '[ ' + desc + ' ]';
        footer.style = style || 'display:block; color:#586e75;';
    });
}

addRevealEvent('gitignore', '.gitignore generator');
addRevealEvent('editorconf', 'cross-ide codestyle definition');
addRevealEvent('cheatsheet', 'interactive git cheatsheet');
addRevealEvent('gitintuition', 'git tutrial with visualisation');
addRevealEvent('gitcodecademy', 'git tutorial with realistic env');
addRevealEvent('gitbmodel', 'git branching model');
