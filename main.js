
const btnDarkLight = document.querySelector('.btn-dark-light');
const userTheme = localStorage.getItem('theme');
const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;

const btnmenu = document.querySelector('.btn-menu');
const mobilemenu = document.querySelector('.mobile-menu');
btnmenu.addEventListener('click', ()=>{
    mobilemenu.classList.toggle('hidden');
})

const iconToggel = ()=>{  
    btnDarkLight.classList.toggle('ri-moon-line');
    btnDarkLight.classList.toggle('ri-sun-line');
    
}


const themeCheck = ()=>{
    if(userTheme === "dark" || (!userTheme && systemTheme)){
        document.documentElement.classList.add('dark');
        // moonIcon.classList.add('hidden');
        btnDarkLight.classList.add('ri-sun-line');
        
        return;
    }
    // sunIcon.classList.add('hidden');
    btnDarkLight.classList.add('ri-moon-line');

}

const swichTheme = ()=>{

    if(document.documentElement.classList.contains('dark')){
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
        btnDarkLight.classList.add('ri-sun-line');
        btnDarkLight.classList.remove('ri-moon-fill');
        // iconToggel();
        return;
    }

    document.documentElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');
    btnDarkLight.classList.add('ri-moon-fill');
    btnDarkLight.classList.remove('ri-sun-line');
    // iconToggel();

}

// sunIcon.addEventListener('click',()=>{
//     iconToggel();
//     swichTheme();
// })

// moonIcon.addEventListener('click', ()=>{
//     iconToggel();
//     swichTheme();
// })
btnDarkLight.addEventListener('click',()=>{
    iconToggel();
    swichTheme();
})


themeCheck();