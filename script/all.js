function removeDarkMode() {
    let htmlDocEl = document.querySelector('html');
    let body = document.querySelector('body');
    htmlDocEl.classList.remove('hb-theme-dark');
    body.classList.remove('hb-theme-dark');
    localStorage.removeItem('darkMode');
}

function addDarkMode() {
    let htmlDocEl = document.querySelector('html');
    let body = document.querySelector('body');
    htmlDocEl.classList.add('hb-theme-dark');
    body.classList.add('hb-theme-dark');
    localStorage.setItem('darkMode', 'true');
}

window.addEventListener('DOMContentLoaded', function () {
    /* //preferred theme
     (function () {
         let htmlElement = document.querySelector('html')

         // Function to update the class based on the theme
         function updateThemeClass() {
             if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
                 htmlElement.classList.add('hb-theme-dark');
             } else {
                 htmlElement.classList.remove('hb-theme-dark');
             }
         }

         // Initial check
         updateThemeClass();

         // Listen for changes to the theme preference
         window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', updateThemeClass);
     })();

     if (window.matchMedia) {
         // Check if the dark-mode Media-Query matches
         let htmlDoc = document.querySelector('html');
         if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
             // Dark
             htmlDoc.classList.add('hb-theme-dark')
         }
     }*/

    try {
        let darkModeSession = localStorage.getItem('darkMode');
        let htmlDocEl = document.querySelector('html');
        if (darkModeSession && darkModeSession === 'true') {
            htmlDocEl.classList.add('hb-theme-dark');
            addDarkMode();
        } else {
            removeDarkMode();
        }

    } catch (e) {
        console.log(e);
    }

    //global mode switchers
    try {
        let switchToLight = document.querySelectorAll('.hb-trigger-switch-to-light-mode');
        if (switchToLight.length) {
            switchToLight.forEach(item => {
                item.addEventListener('click', removeDarkMode)
            })
        }

        let switchToDark = document.querySelectorAll('.hb-trigger-switch-to-dark-mode')
        if (switchToDark.length) {
            switchToDark.forEach(item => {
                item.addEventListener('click', addDarkMode);
            })
        }
    } catch (e) {
        console.log(e);
    }

    //header drop logic
    try {
        let headerBtnTrigger = document.querySelector('.hb-header__menu1-trigger'),
            headerBtnMenu = document.querySelector('.hb-header__menu1-content');
        if (headerBtnTrigger && headerBtnMenu) {
            headerBtnTrigger.addEventListener('click', function () {
                headerBtnMenu.classList.toggle('active');
            })
        }
        headerBtnMenu.addEventListener('click', function (e) {
            e.stopPropagation();
        })
        document.body.addEventListener('click', function (e) {
            let current = e.target;
            if (!current.classList.contains('hb-header__menu1-trigger')) {
                headerBtnMenu.classList.remove('active');
            }
        })
    } catch (e) {
        console.log(e);
    }

    //hb hero location logic
    try {
        let heroLocationDialogTrigger = document.querySelector('.hb-hero__location'),
            heroLocationDropDown = document.querySelector('.hb-hero__location-dropdown');
        if (heroLocationDialogTrigger && heroLocationDropDown) {
            heroLocationDialogTrigger.addEventListener('click', function () {
                heroLocationDialogTrigger.classList.toggle('active');
                heroLocationDropDown.classList.toggle('active');
            })
        }
    } catch (e) {
        console.log(e);
    }
})