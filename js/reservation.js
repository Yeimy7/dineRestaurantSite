'use strict'
window.addEventListener('load', () => {
    const month = document.getElementById('month');
    const day = document.getElementById('day');
    const year = document.getElementById('year');
    const hour = document.getElementById('hour');
    const minute = document.getElementById('minute');
    const time = document.getElementById('time');
    const less = document.getElementById('less');
    const more = document.getElementById('more');
    const amount = document.getElementById('amount');
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const reservation = document.getElementById('reservation');
    const inputs = document.querySelectorAll('input');
    const selects = document.querySelectorAll('select');
    const ok = document.querySelector('#ok');

    const error = document.querySelectorAll('.error');


    var modal = document.getElementById("myModal");

    var close = document.getElementsByClassName("close")[0];

    close.onclick = function () {
        modal.style.display = "none";
    }

    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    function fillSelector(selector, index) {
        for (let i = 1; i <= index; i++) {
            let x = document.createElement('option');
            x.appendChild(document.createTextNode(i))
            selector.appendChild(x);

        }
    }
    fillSelector(month, 12);
    fillSelector(day, 31);
    fillSelector(hour, 12);

    less.addEventListener('click', (e) => {
        e.preventDefault();
        if (parseInt(amount.textContent) > 1)
            amount.innerText = (parseInt(amount.textContent) - 1);
    })

    more.addEventListener('click', (e) => {
        e.preventDefault();
        if (parseInt(amount.textContent) < 25)
            amount.innerText = (parseInt(amount.textContent) + 1);
    })
    reservation.addEventListener('click', (e) => {
        e.preventDefault();
        if (verifyName(name.value)) {
            if (verifyEmail(email.value)) {
                if (verifyDate()) {
                    console.log('se realizo su reservacion!!!')
                    modal.style.display = "block";
                }
            }
        }
        else {
            verifyEmail(email.value)
            verifyDate();
        }
    })
    function verifyName(nameVerify) {

        if (nameVerify != '') {
            let result = /^[a-zA-Z ]+$/
            if (result.test(nameVerify))
                return true;
        }
        error[0].style.display = "block";
        inputs[0].style.borderBottom = "1px solid #b64949";
        return false;
    }
    function verifyEmail(emailVerify) {
        if (emailVerify != '') {
            let result = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
            if (result.test(emailVerify))
                return true;
        }
        error[1].style.display = "block";
        inputs[1].style.borderBottom = "1px solid #b64949";
        return false;
    }
    function verifyDate() {
        if (month.value !== 'mm' && day.value !== 'dd' && year.value !== 'yy') {
            const dateReservartion = `${year.value}-${month.value}-${day.value} 23:00:00`; // día lunes
            const numberDay = new Date(dateReservartion).getDay();
            return verifyHour(numberDay);
        }
        else {
            error[2].style.display = "block";
            return false
        }
    }
    function verifyHour(verifyDay) {
        if (hour.value === '00') {
            error[3].style.display = "block"
            return false
        }
        if (time.value === 'am') {
            if ((Number(hour.value) >= 0 && Number(hour.value) <= 8) || Number(hour.value) === 12) {
                error[3].innerHTML = 'Invalid time'
                error[3].style.display = "block"
                return false
            }
        } else {
            if (time.value === 'pm') {
                if (verifyDay === 6 || verifyDay === 0) {
                    if (hour.value === '11' && Number(minute.value) > 0) {
                        error[3].innerHTML = 'Invalid time'
                        error[3].style.display = "block"
                        return false
                    }
                } else {
                    if (Number(hour.value) >= 9 && hour.value !== '12') {
                        if (Number(minute.value) > 0) {
                            error[3].innerHTML = 'Invalid time'
                            error[3].style.display = "block"
                            return false
                        }
                    }
                }

            }
        }
        return true;
    }
    inputs.forEach((e, index) => {
        e.addEventListener('focus', () => {
            error[index].style.display = 'none'
            inputs[index].style.borderBottom = "1px solid hsl(216, 14%, 42%)"
        })
    })
    selects.forEach((e, index) => {
        e.addEventListener('change', () => {
            if (index === 0 || index === 1 || index === 2) {
                error[2].style.display = 'none';
            }
            else {
                error[3].style.display = 'none';
            }
        })
    })





})