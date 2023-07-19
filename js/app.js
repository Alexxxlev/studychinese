// Открыть/закрыть показать ещё больше для teacher-office_personal-account и teacher-office_payment
// lessons в teacher-office_personal-account
function showMore_lessons() {
  var hidden = document.querySelectorAll('.personal-account-all-lessons .hidden');
  for (let i = 0; i < 3 && i < hidden.length; i++) {
    hidden[i].classList.remove('hidden');
  }
}

// tasks в teacher-office_personal-account
function showMore_tasks() {
  var hidden = document.querySelectorAll('.personal-account-all-tasks .hidden');
  for (let i = 0; i < 3 && i < hidden.length; i++) {
    hidden[i].classList.remove('hidden');
  }
}

// tables в teacher-office_payment
function showMore_tables() {
  var hidden = document.querySelectorAll('.table.table_teacher-office .hidden');
  for (let i = 0; i < 3 && i < hidden.length; i++) {
    hidden[i].classList.remove('hidden');
  }
}

// add-links__add-more в teacher-office_personal-account для viewing-homework
function viewing_homework() {
  var hidden = document.querySelectorAll('.add-links_viewing-homework .hidden');
  for (let i = 0; i < 1 && i < hidden.length; i++) {
    hidden[i].classList.remove('hidden');
  }
}

// добавить пример для hieroglyph-card
function hieroglyph_card() {
  var hidden = document.querySelectorAll('.hieroglyph-card__main .hidden');
  for (let i = 0; i < 1 && i < hidden.length; i++) {
    hidden[i].classList.remove('hidden');
  }
}

/* удалить пример для hieroglyph-card
========================================================================== */
$(function() {
  let btnClose = $(".hieroglyph-card__footer-btn__delete");
  let item = $(".hieroglyph-card-items.hieroglyph-card-items_hidden");

  btnClose.on('click', function() {
    item.addClass('hidden');
  });
});

$(function() {
  $('.datepicker').mousedown(function() {
    $('.air-datepicker-button.save').click(function() {
      ('.air-datepicker-overlay').removeClass('active');
      ('.air-datepicker').removeClass('active');
    });
  });
});

// teacher-registration__education-links в сonversational-club-teacher-registration для viewing_education
function viewing_education() {
  var hidden = document.querySelectorAll('.teacher-registration__education-links .hidden');
  for (let i = 0; i < 1 && i < hidden.length; i++) {
    hidden[i].classList.remove('hidden');
  }
}

// add-links__add-more в teacher-office_personal-account для add-homework
function add_homework() {
  var hidden = document.querySelectorAll('.add-links_add-homework .hidden');
  for (let i = 0; i < 1 && i < hidden.length; i++) {
    hidden[i].classList.remove('hidden');
  }
}

// добавить диапазон времени в сonversational-club-teacher-registration
function add_timeRange() {
  var hidden = document.querySelectorAll('.modal-select-days__time-blocks .hidden');
  for (let i = 0; i < 1 && i < hidden.length; i++) {
    hidden[i].classList.remove('hidden');
  }
}
function add_timeRange2() {
  var hidden2 = document.querySelectorAll('.modal-select-days__time-blocks-2 .hidden');
  for (let i = 0; i < 1 && i < hidden2.length; i++) {
    hidden2[i].classList.remove('hidden');
  }
}


// add-links__add-more в teacher-office_personal-account для answer-homework
function answer_homework() {
  var hidden = document.querySelectorAll('.add-links_answer-homework .hidden');
  for (let i = 0; i < 1 && i < hidden.length; i++) {
    hidden[i].classList.remove('hidden');
  }
}

// notification-block__button-show-more_lessons в teacher-office_lessons
function showMore_notificationLessons() {
  var hidden = document.querySelectorAll('.notification-block__list .hidden');
  for (let i = 0; i < 2 && i < hidden.length; i++) {
    hidden[i].classList.remove('hidden');
  }
}

/* Nav Toggle для teacher-office_personal-account и teacher-office_payment */
let navToggle = $("#to-navToggle");
let content = $(".teacher-office__mobile-submenu");

navToggle.on("click", function(event) {
  event.preventDefault();

  navToggle.toggleClass("show");
});

content.on("click", function(event) {
  event.stopPropagation();
});

/* Modal
================================== */
$(function() {
  const modalCall = $("[data-modal]");
  const modalClose = $("[data-close]");

  modalCall.on("click", function(event) {
    event.preventDefault();

    let $this = $(this);
    let modalId = $this.data('modal');

    $(modalId).addClass('show');
    $("body").addClass('no-scroll');

    var swiperInquiry = new Swiper(".swiper_inquiry", {
      slidesPerView: 1,
      speed: 1200,
      observer: true,
      observeParents: true,
      navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
      },
    });

    setTimeout(function() {
      $(modalId).find(".modal__dialog").css({
        transform: "scale(1)"
      });
    }, 200);
  });


  modalClose.on("click", function(event) {
  event.preventDefault();

  let $this = $(this);
  let modalParent = $this.parents('.modal');

  modalParent.find(".modal__dialog").css({
    transform: "scale(0)"
  });

  setTimeout(function() {
    modalParent.removeClass('show');
    $("body").removeClass('no-scroll');
  }, 200);
  });


  $(".modal").on("click", function(event) {
  let $this = $(this);

  $this.find(".modal__dialog").css({
    transform: "scale(0)"
  });

  setTimeout(function() {
    $this.removeClass('show');
    $("body").removeClass('no-scroll');
  }, 200);
  });

  $(".modal__dialog").on("click", function(event) {
    event.stopPropagation();
  });
});

// teachers-item в сonversational-club-teachers
function showMore_teachers() {
  var hidden = document.querySelectorAll('.teachers__list .hidden');
  var hiddenMobile = document.querySelectorAll('.teachers__list_mobile .hidden');
  for (let i = 0; i < 4 && i < hidden.length; i++) {
    hidden[i].classList.remove('hidden');
  }
  // для mobile
  for (let i = 0; i < 4 && i < hiddenMobile.length; i++) {
    hiddenMobile[i].classList.remove('hidden');
  }
}

/* Отправка промокода для сonversational-club-cost.html и conversation-main.html
========================================================================== */
$(function() {
  let inputBtn = $(".conversation-select__input-btn");
  let promoText = $(".conversation-select__checkbox-sticker_green");

  inputBtn.on('click', function() {
    promoText.addClass('active');
  });
});


/* Смена заданий (Сегодня/завтра/неделя/месяц) для сonversational-club-tasks.html
========================================================================== */
$(function() {
  let todayBtn = $("#today");
  let tomorrowBtn = $("#tomorrow");
  let weekBtn = $("#week");
  let monthBtn = $("#month");

  let content = $(".personal-account-soon-lesson_tasks-list");

  let contentToday = $("#content-today");
  let contentTomorrow = $("#content-tomorrow");
  let contentWeek = $("#content-week");
  let contentMonth = $("#content-month");

  todayBtn.on('click', function() {
    content.removeClass('active');
    contentToday.addClass('active');
  });

  tomorrowBtn.on('click', function() {
    content.removeClass('active');
    contentTomorrow.addClass('active');
  });

  weekBtn.on('click', function() {
    content.removeClass('active');
    contentWeek.addClass('active');
  });

  monthBtn.on('click', function() {
    content.removeClass('active');
    contentMonth.addClass('active');
  });

});

// выбор ребенка для сonversational-club-settings.html
$(function() {

  let items = $(".child-card__header-children-item");
  let contents = $(".child-card__main");

  items.on('click', function() {
    items.removeClass("active");
    $(this).addClass("active");
    contents.toggleClass("active");
  });
});

// принять/отменить урок для учителя
$(function() {
  let item = $(".inquiry-item");

    item.on('click', '.inquiry-item__wrapper', function() {
		  $(this).toggleClass('active');
	  });
});

// открыть inquiry-item в сonversational-club-teacher-registration.html
$(function() {
  let item = $(".inquiry-item.hatching");
  let btnOpen = $(".inquiry-item__btn-open");

    item.on('click', function() {
		  btnOpen.removeClass('active');
      $(this).children(".inquiry-item__btn-open").toggleClass('active');
	  });

    btnOpen.on('click', function(event) {
      event.stopPropagation();
    });
});

/* Выбрать элемент для сonversational-club-cost.html и conversation-main.html
========================================================================== */
$(function() {
  let elementCarrier = $("#elementCarrier");
  let elementRussian = $("#elementRussian");
  let elementAdults = $("#elementAdults");
  let elementСhildren = $("#elementСhildren");

  let contentCarrier = $(".conversation-tariff__main-select.modal-club__replenish #contentCarrier");
  let contentRussian = $(".conversation-tariff__main-select.modal-club__replenish #contentRussian");
  let contentAdults = $(".conversation-tariff__main-select.modal-club__replenish #contentAdults");
  let contentСhildren = $(".conversation-tariff__main-select.modal-club__replenish #contentСhildren");

  elementCarrier.on('click', function() {
    elementCarrier.addClass('active');
    elementRussian.removeClass('active');
    contentCarrier.addClass('active');
    contentRussian.removeClass('active');
  });
  elementRussian.on('click', function() {
    elementRussian.addClass('active');
    elementCarrier.removeClass('active');
    contentRussian.addClass('active');
    contentCarrier.removeClass('active');
  });

  elementAdults.on('click', function() {
    elementСhildren.removeClass('active');
    elementAdults.addClass('active');
    contentСhildren.removeClass('active');
    contentAdults.addClass('active');
  });
  elementСhildren.on('click', function() {
    elementAdults.removeClass('active');
    elementСhildren.addClass('active');
    contentAdults.removeClass('active');
    contentСhildren.addClass('active');
  });
});

/* Время занятий для сonversational-club-cost.html и conversation-main.html
========================================================================== */
$(function() {
  let elementMinute30 = $("#elementMinute30");
  let elementMinute60 = $("#elementMinute60");

  // let contentMinute30 = $(".contentMinute30-block");
  // let contentMinute60 = $(".contentMinute60-block");

  let contentMinute30 = $(".contentMinute30");
  let contentMinute60 = $(".contentMinute60");

  elementMinute30.on('click', function() {
    elementMinute30.addClass('active');
    elementMinute60.removeClass('active');
    contentMinute30.addClass('active');
    contentMinute60.removeClass('active');
  });

  elementMinute60.on('click', function() {
    elementMinute60.addClass('active');
    elementMinute30.removeClass('active');
    contentMinute60.addClass('active');
    contentMinute30.removeClass('active');
  });
});

// уведомление soon для ученика
$(function() {
  let item = $(".inquiry-item__wrapper.pupil");
  let itemBlock = $(".pupil-notification__block");
  let notification = $(".inquiry-item-notification_pupil-item");
  let notificationClose = $(".pupil-notification__btn-close");
  let withoutChanges = $(".pupil-notification__block-without-changes");

  item.on('click', function() {
    $(this).children(".inquiry-item-notification_pupil-item").toggleClass('active');
  });

  itemBlock.on('click', function(event) {
    event.stopPropagation();
  });

  withoutChanges.on('click', function() {
    notification.removeClass('active');
  });

  notificationClose.on('click', function() {
    notification.removeClass('active');
  });
});

/* Smooth scroll
================================ */
$("[data-scroll]").on("click", function(event) {
  event.preventDefault();

  let elementID = $(this).data('scroll');
  let elementOffset = $(elementID).offset().top;

  $("html, body").animate({
    scrollTop: elementOffset -70
  }, 900);
});

// сортировка (PC) для сonversational-club-teachers.html
$(function() {

  let item = $(".teachers-sorting__item");

  item.on('click', function() {
    item.removeClass("active");
    $(this).addClass("active");
  });
});

// выезжающий текст (подробнее) для сonversational-club-teachers-info.html
$(function() {

  let btn = $(".teacher-info-item__footer-btn");

  btn.on('click', function() {
    $(this).parent(".teacher-info-item__footer").toggleClass("active");
  });
});

// добавить урок для ученика
$(function() {

  let inquiryItem = $(".inquiry-item.add");
  let inquiryItem_wrapper = $(".inquiry-item__add-wrapper");

  inquiryItem.on('click', function() {

    $(".inquiry-item__add-wrapper").removeClass('active');
    $(this).children(".inquiry-item__add-wrapper").addClass('active');
  });

  inquiryItem_wrapper.on('click', function(event) {
    event.stopPropagation();
  });
});

// уведомление колокольчик для ученика
$(function() {
  let item = $(".inquiry-item__designations.normal");

  item.on('click', function(event) {
    event.stopPropagation();

    $(this).children(".inquiry-item-notification_record").toggleClass('active');
  });
});

// уроки уведомления для учителя
$(function() {

  let item = $(".teacher-office__lessons-notifications_lessons");
  let content = $(".header__user-info-notification-block_lessons");

    item.on('click', item, function() {
		  $(this).toggleClass('active');
	  });

    content.on('click', function(event) {
		  event.stopPropagation();
	  });
});

/* Textarea
================================== */
const textArea = document.querySelectorAll('[data-autoresize]');

textArea.forEach(item => {
    let textAreaH = item.offsetHeight;
    item.addEventListener('input', event => {
        let $this = event.target;

        $this.style.height = textAreaH + 'px';
        $this.style.height = $this.scrollHeight + 'px';
    });
});

/* Табы для сonversational-club-balance.html
========================================================================== */
$(function() {
  let tab_btn_1 = $(".line-block-buttons .tab-btn-1");
  let tab_btn_2 = $(".line-block-buttons .tab-btn-2");
  let line_tab_1 = $(".line-tab-1");
  let line_tab_2 = $(".line-tab-2");

  tab_btn_1.on('click', function() {
    tab_btn_1.addClass('active');
    tab_btn_2.removeClass('active');
    line_tab_1.addClass('active');
    line_tab_2.removeClass('active');
  });

  tab_btn_2.on('click', function() {
    tab_btn_2.addClass('active');
    tab_btn_1.removeClass('active');
    line_tab_2.addClass('active');
    line_tab_1.removeClass('active');
  });
});

/* Табы для training-manual.html
========================================================================== */
$(function() {
  let tab_btn_1 = $(".choice .choice__button_adults");
  let tab_btn_2 = $(".choice .choice__button_children");
  let line_tab_1 = $(".choice-block_adults");
  let line_tab_2 = $(".choice-block_children");

  tab_btn_1.on('click', function() {
    tab_btn_1.addClass('active');
    tab_btn_2.removeClass('active');
    line_tab_1.addClass('active');
    line_tab_2.removeClass('active');
  });

  tab_btn_2.on('click', function() {
    tab_btn_2.addClass('active');
    tab_btn_1.removeClass('active');
    line_tab_2.addClass('active');
    line_tab_1.removeClass('active');
  });
});

/* Табы для сonversational-club-teachers.html
========================================================================== */
$(function() {
  let tabBtn = $(".teachers-item__right .teachers__tab-btn");

  tabBtn.on('click', function() {
    if (!$(this).hasClass('active')) {
      var parentTabs = $(this).closest('.teachers-item__right');
      parentTabs.find('.teachers__tab-btn.active, .teachers__line-tab.active').removeClass('active');
      var elemIndex = $(this).index();
      $(this).addClass('active');
      parentTabs.find('.teachers__line-tab').eq(elemIndex).addClass('active');
    }
  });
});

/* Закрытие рекламы для сonversational-club-tasks */
let advertisementBtnClose = $(".soon-lesson__notifications-btn-close");
let advertisementItem = $(".personal-account-soon-lesson.tasks.advertisement");


advertisementBtnClose.on("click", function(event) {
  event.preventDefault();

  advertisementItem.addClass("closed");
});

/* Открытие сообщения для сonversational-club-messages.html
========================================================================== */
let sidebarItem = $(".messages__sidebar-item");
let messagesNotifications = $(".messages__sidebar-header__block-notifications");
let ccMessages = $(".conversational-club-messages");
let ccMessages_sidebar = $(".conversational-club-messages__sidebar");

let messagesSearchBtn = $(".messages__search-btn");
let searchClose = $(".header-search-block__close");
let navigationButtons = $(".messages__navigation-buttons");
let navigationButtons_search = $(".messages__navigation-buttons_search");
let messagesBlock_title = $(".messages__sidebar-header__block-title");


sidebarItem.on('click', function() {
  ccMessages.addClass('active');
  ccMessages_sidebar.removeClass('active');
});
messagesNotifications.on('click', function() {
  ccMessages.removeClass('active');
  ccMessages_sidebar.addClass('active');
});

messagesSearchBtn.on('click', function() {
  navigationButtons.removeClass('active');
  messagesBlock_title.removeClass('active');
  navigationButtons_search.addClass('open');
});
searchClose.on('click', function() {
  navigationButtons.addClass('active');
  messagesBlock_title.addClass('active');
  navigationButtons_search.removeClass('open');
});

/* Модалка add-lesson ребенок/время 
========================================================================== */
$(document).ready(function() {

  let btnKid_1 = $(".btn-kid_1");
  let btnKid_2 = $(".btn-kid_2");

  let btnTime_1 = $(".btn-time_1");
  let btnTime_2 = $(".btn-time_2");

  btnKid_1.on('click', function() {
    btnKid_2.removeClass('active');
    btnKid_1.addClass('active');
  });
  btnKid_2.on('click', function() {
    btnKid_1.removeClass('active');
    btnKid_2.addClass('active');
  });

  btnTime_1.on('click', function() {
    btnTime_2.removeClass('active');
    btnTime_1.addClass('active');
  });
  btnTime_2.on('click', function() {
    btnTime_1.removeClass('active');
    btnTime_2.addClass('active');
  });
});


/* Избранное для сonversational-club-teachers.html
========================================================================== */
$(function() {
  let btnStar = $(".teachers-item__center-name__btn-star");

  btnStar.on('click', function() {
    btnStar.toggleClass('active');
  });
});

/* Навигация для сonversational-club-teachers.html
========================================================================== */
$(function() {
  let navItem = $(".teachers-navigation-list__item");
  let navLink = $(".teachers-navigation-list__item-link");

  navLink.on('click', function() {
    navItem.removeClass('active');
    $(this).parents(".teachers-navigation-list__item").addClass('active');
  });
});

/* Чекбоксы для сonversational-club-teachers.html
========================================================================== */
$(function() {
  let label = $(".modal-add-lesson__time-btn__label_teachers");

  label.on('click', function() {
    $(this).parent(".modal-add-lesson__time-btn").toggleClass('active');
  });
});

// input ограничение кол-ва слов (10 слов)
const input = document.querySelector('#field');

input.addEventListener('input', updateValue);

oldText = input.value;

function updateValue(e) {

  // подсчитать кол-во слов
  const seperators = [' ', '.', ','];
  
  let wordsCount = 0;
  let lastLetter = ' ';

  for (let letter of e.target.value + " ") {

    if (seperators.includes(letter) && !seperators.includes(lastLetter)) {
      wordsCount ++;
    }
    
    lastLetter = letter;
  }

  // сформировать условие ввода текста в поле ввода
  const isCorrect = (wordsCount <= 10);

  // если текст введён некорректный, вернуть старый текст
  if (isCorrect == true) {
    //  input.value = e.target.value;
    oldText = e.target.value;
  }
  else {
    input.value = oldText;
  }
}

/* attached-files для сonversational-club-teacher-registration.html
========================================================================== */
$(function() {
  let btnPhoto = $(".attached-files__photo-item__close");
  let btnDocument = $(".attached-files__document-item__close");

  btnPhoto.on('click', function() {
    $(this).parent(".attached-files__photo-item").addClass('d-none');
  });

  btnDocument.on('click', function() {
    $(this).parent(".attached-files__document-item").addClass('d-none');
  });
});

/* удалить диапазон времени для сonversational-club-teacher-registration.html
========================================================================== */
$(function() {
  let btnClose = $(".modal-select-days__time-block__btn-close");

  btnClose.on('click', function() {
    $(this).parent(".modal-select-days__time-block").addClass('d-none');
  });
});

// временно закрыть запись в сonversational-club-teacher-registration.html
$(function() {

  let checkbox = $(".teacher-registration__tasks-checkbox__label");
  let inquiry1 = $(".inquiry_teacher-registration-1");
  let inquiry2 = $(".inquiry_teacher-registration-2");

  checkbox.on('click', function() {
		inquiry1.toggleClass('d-none');
		inquiry2.toggleClass('active');
	});
});