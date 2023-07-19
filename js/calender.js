let save = {
    content: 'Сохранить',
    className: 'air-datepicker-button save',
    Click: function() {
        $("#datepicker").datepicker('hide');
    }
}

// кастомный календарь
new AirDatepicker('#airdatepicker', {
    isMobile: true,
    // inline: true,
    autoClose: true,
    // position: 'top',
    // range: true,
    // multipleDatesSeparator: ' - '
    // timepicker: true,

    // Handle render process
    /*onRenderCell({date, cellType}) {
        let dates = [1, 5, 7, 10, 15, 20, 25],
        emoji = ['💕', '😃', '🍙', '🍣', '🍻', '🎉', '🥁'],
        isDay = cellType === 'day',
        _date = date.getDate(),
        shouldChangeContent = isDay && dates.includes(_date),
        randomEmoji = emoji[Math.floor(Math.random() * emoji.length)];
  
        return {
            html: shouldChangeContent ? randomEmoji : false,
            classes: shouldChangeContent ? '-emoji-cell-' : false
        }
    }*/
    
    buttons: ['clear', save],
    locale: {
        days: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'],
        daysShort: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'],
        daysMin: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'],
        months: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
        monthsShort: ['Янв', 'Фев', 'Март', 'Апр', 'Май', 'Июнь', 'Июль', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'],
        save: 'Сохранить',
        clear: 'Сбросить',
        dateFormat: 'dd.MM.yyyy',
        timeFormat: 'hh:mm aa',
        firstDay: 0
    }
});