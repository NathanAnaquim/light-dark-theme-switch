'use strict';
const switcher = document.querySelector('.btn');

switcher.addEventListener('click', function () {
    if (document.body.className === "light-theme") {
        document.body.className = "dark-theme";
        this.textContent = "Light";
    } else {
        document.body.className = "light-theme";
        this.textContent = "Dark";
    }
    console.log('current class name: ' + document.body.className);
});
