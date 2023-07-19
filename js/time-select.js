/* Селект время для teacher-office_personal-account.html 
========================================================================== */
let selectTime = function () {
    let selectHeader = document.querySelectorAll('.time-select__header');
    let selectItem = document.querySelectorAll('.time-select__item');

    selectHeader.forEach(item => {
        item.addEventListener('click', selectToggle)
    });

    selectItem.forEach(item => {
        item.addEventListener('click', selectChoose)
    });

    function selectToggle() {
        this.parentElement.classList.toggle('is-active');
    }

    function selectChoose() {
        let text = this.innerText,
            select = this.closest('.time-select'),
            currentText = select.querySelector('.time-select__current');
        currentText.innerText = text;
        select.classList.remove('is-active');

    }

};

selectTime();

/* Селект дата для сonversational-club-settings.html 
========================================================================== */
let selectDate = function () {
    let selectHeader = document.querySelectorAll('.date-select__header');
    let selectItem = document.querySelectorAll('.date-select__item');

    selectHeader.forEach(item => {
        item.addEventListener('click', selectToggle)
    });

    selectItem.forEach(item => {
        item.addEventListener('click', selectChoose)
    });

    function selectToggle() {
        this.parentElement.classList.toggle('is-active');
    }

    function selectChoose() {
        let text = this.innerText,
            select = this.closest('.date-select'),
            currentText = select.querySelector('.date-select__current');
        currentText.innerText = text;
        select.classList.remove('is-active');

    }

};

selectDate();