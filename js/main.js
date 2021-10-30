'use strict'
window.addEventListener('load', () => {
    let information = [
        {
            title: 'Family gathering',
            description: `We love catering for entire families. So please bring everyone along for a special meal with your loved ones. We'll provide a memorable experience for all.`,
            desk: './assets/homepage/family-gathering-desktop.jpg',
            tablet: './assets/homepage/family-gathering-tablet.jpg',
            mobile: './assets/homepage/family-gathering-mobile.jpg'
        },
        {
            title: 'Special events',
            description: `Whether it's a romantic dinner or special dte you're celebrating with others we'll look after you. We'll be sure to mark your special date with an unforgettable meal.`,
            desk: './assets/homepage/special-events-desktop.jpg',
            tablet: './assets/homepage/special-events-tablet.jpg',
            mobile: './assets/homepage/special-events-mobile.jpg'
        },
        {
            title: 'Social events',
            description: `Are you looking to have a larger social event? No problem! We're more than happy to cater for big parties. We'll work with you to make your event a hit with everyone.`,
            desk: './assets/homepage/social-events-desktop.jpg',
            tablet: './assets/homepage/social-events-tablet.jpg',
            mobile: './assets/homepage/social-events-mobile.jpg'
        },
    ];
    let item = document.querySelectorAll('.list__item');
    const img = document.getElementById('image');
    const title = document.getElementById('title');
    const description = document.getElementById('description');

    item.forEach((elem, index) => {
        elem.addEventListener('click', () => {
            resetActive();
            elem.classList.add('list__item--active');
            title.innerText = information[index].title;
            description.innerText = information[index].description;
            if (screen.width < 426) {
                img.style.content = `url(${information[index].mobile})`;
            } else {
                if (screen.width < 1025) {
                    img.style.content = `url(${information[index].tablet})`;
                } else {
                    img.style.content = `url(${information[index].desk})`;
                }
            }
            img.classList.toggle('focus');
    
            setTimeout(() => {
                img.classList.toggle('focus');
            }, 1000);
        })
    });

    function resetActive() {
        item.forEach(e => {
            e.classList.remove('list__item--active');
        });
    }
})