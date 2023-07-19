/* регулировка
========================================================================== */
$(function() {
  $('input[type=range]').on('input', function(e){
    var min = e.target.min,
        max = e.target.max,
        val = e.target.value;
    
    $(e.target).css({
      'backgroundSize': (val - min) * 100 / (max - min) + '% 100%'
    });
  }).trigger('input');
});

/* input +-
========================================================================== */
jQuery(function() {
  var j = jQuery;
  var addInput = '.tool-font-input';
  var n = 48;

  j(addInput).val(n + ' pt');

  j('.plus').on('click', function() {
    j(addInput).val(++n + ' pt');
  });

  j('.min').on('click', function() {
    if (n >=1) {
      j(addInput).val(--n + ' pt');
    } else {

    }
  });
});

/* switch-btn
========================================================================== */
$(function(){
  $('.switch-btn').click(function (e, changeState) {
    if (changeState === undefined) {
      $(this).toggleClass('switch-on');
    }
    if ($(this).hasClass('switch-on')) {
      $(this).trigger('on.switch');
    } else {
      $(this).trigger('off.switch');
    }
  });

  $('.switch-btn').each(function(){
    $(this).triggerHandler('click', false);
  });

});

/* закрыть видео
========================================================================== */
$(function() {
  let btnVideo = $(".screen-content-video__btn-close");

  btnVideo.on('click', function() {
    $(this).parent(".screen-content-video").addClass('d-none');
  });
});

/* Выбор итема в add-board
========================================================================== */
$(function() {
  let item = $(".modal-add-board__item");

  item.on('click', function() {
    item.removeClass('active');
    $(this).addClass('active');
  });
});

/* Чекбоксы для study-room-tests.html
========================================================================== */
$(function() {
  let input = $(".tests__list-item-input");

  input.bind('change', function (v) {

    if($(this).is(':checked')) {
      $(this).parent().addClass('active');
    } else {
      $(this).parent().removeClass('active');
    }
  });
});

/* Поиск и варианты поиска для study-room-tests.html
========================================================================== */
$(function() {
  let search = $(".tests-create__input-btn-search");

  search.on('focus', function () {
    let searchBlock = $(".options-search__block-items");

    searchBlock.addClass('open');

    searchBlock.slideDown();
  })
});

/* Уведомление раскадки en/ru для study-room-board-1.html
========================================================================== */
$(function() {
  let input = $(".board-1__main-input");

  input.on('focus', function () {
    let notification = $(".board-1__main-label__notification");

    notification.addClass('open');

    notification.slideDown();
  })
});

/* Смена раскладки раскадки en/ru для study-room-board-1.html
========================================================================== */
$(function() {
  let labelBtn = $(".board-1__main-label-btn");

  labelBtn.on('click', function() {
    $(this).children(".board-1__main-label-btn-span").toggleClass('active');
  })
});

/* добавить ещё в study-room-tests-create
========================================================================== */
function add_option1() {
  var hidden = document.querySelectorAll('.tests-create__item-option-1.hidden');
  for (let i = 0; i < 1 && i < hidden.length; i++) {
    hidden[i].classList.remove('hidden');
  }
}
function add_option2() {
  var hidden = document.querySelectorAll('.tests-create__item-option-2.hidden');
  for (let i = 0; i < 1 && i < hidden.length; i++) {
    hidden[i].classList.remove('hidden');
  }
}

/* Показать/скрыть панель инструментов
========================================================================== */
$(function() {
  let btnHide = $(".screen-toolbar-curtain__btn-hide");
  let curtain = $(".screen-toolbar-curtain");

  btnHide.on('click', function() {
    btnHide.toggleClass('active');
    curtain.toggleClass('active');
  })
});

/* Панель инструментов
========================================================================== */
$(function() {
  let toolFigure = $(".screen-toolbar-curtain__tool-figure");
  let toolPen = $(".screen-toolbar-curtain__tool-pencil-pen");

  let toolBold = $(".screen-toolbar-curtain__tool-tags-bold");
  let toolUnderline = $(".screen-toolbar-curtain__tool-tags-underline");
  let toolEraser = $(".screen-toolbar-curtain__tool-pencil-eraser");

  let FigureBlock = $(".tool-figure__block");
  let penBlock = $(".tool-pencil-pen__block");

  toolFigure.on('click', function() {
    toolFigure.toggleClass('active');
    FigureBlock.toggleClass('active');
  })
  toolPen.on('click', function() {
    toolPen.toggleClass('active');
    penBlock.toggleClass('active');
  })

  toolBold.on('click', function() {
    toolBold.toggleClass('active');
  })
  toolUnderline.on('click', function() {
    toolUnderline.toggleClass('active');
  })
  toolEraser.on('click', function() {
    toolEraser.toggleClass('active');
  })

  FigureBlock.on('click', function(event) {
    event.stopPropagation();
  })
  penBlock.on('click', function(event) {
    event.stopPropagation();
  })
});

/* добавить видео в study-room-board-3.html
========================================================================== */
$(function() {
  let labelBtn = $(".insert-video__label-btn");
  let video = $(".screen-content-video.screen-content-video_board");

  labelBtn.on('click', function() {
    video.removeClass('d-none');
  })
});

/* добавить/удалить инструмент "иероглиф"
========================================================================== */
$(function() {
  let btn = $(".screen-toolbar-curtain__tool-hieroglyph");
  let item = $(".screen-content__draw-hieroglyph");

  btn.on('click', function() {
    btn.toggleClass('active');
    item.toggleClass('active');
  })
});
/* добавить/удалить инструмент "текст"
========================================================================== */
$(function() {
  let btn = $(".screen-toolbar-curtain__tool-text");
  let item = $(".screen-content-text");

  btn.on('click', function() {
    btn.toggleClass('active');
    item.toggleClass('active');
  })
});
/* добавить/удалить инструмент "рисунок"
========================================================================== */
$(function() {
  let btn = $(".screen-toolbar-curtain__tool-image");

  btn.on('click', function() {
    btn.toggleClass('active');
  })
});

/* добавить свой в study-room-tests-create.html
========================================================================== */
$(function() {
  let add = $(".options-search__block-add__tab");
  let item = $(".options-search__block-add-item__content");

  add.on('click', function() {
    item.removeClass('hidden');
  })
});

/* открыть файлы и сообщения
========================================================================== */
$(function() {
  let itemFiles = $(".screen-tab__files");
  let contentFiles = $(".screen-tab__files-block");

  let itemMessages = $(".screen-tab__messages");
  let contentMessages = $(".screen-tab__messages-block");

  itemFiles.on('click', function() {
    itemFiles.toggleClass('active');
    contentFiles.toggleClass('active');
    itemMessages.removeClass('active');
    contentMessages.removeClass('active');
  })

  itemMessages.on('click', function() {
    itemMessages.toggleClass('active');
    contentMessages.toggleClass('active');
    itemFiles.removeClass('active');
    contentFiles.removeClass('active');
  })

  $(document).on('click', function(e) {
    if (!$(e.target).closest(".screen-tab__messages").length) {
      itemMessages.removeClass('active');
      contentMessages.removeClass('active');
    }
  });

  $(document).on('click', function(e) {
    if (!$(e.target).closest(".screen-tab__files").length) {
      itemFiles.removeClass('active');
      contentFiles.removeClass('active');
    }
  });

  contentMessages.on('click', function(event) {
    event.stopPropagation();
  })

  contentFiles.on('click', function(event) {
    event.stopPropagation();
  })
});

/* выбор диапазона input rande для study-room-settings.html
========================================================================== */
$( function() {
  $( "#slider-range" ).slider({
    range: true,
    min: 0,
    max: 150000,
    values: [ 0, 70000 ],
    slide: function( event, ui ) {
    
      $( "#from-1" ).val(ui.values[ 0 ] );
      $( "#to-1" ).val(ui.values[ 1 ] );
      $( "#from-2" ).val(ui.values[ 0 ] );
      $( "#to-2" ).val(ui.values[ 1 ] );
    }
  });

  $( "#from-1" ).val($( "#slider-range" ).slider( "values", 0 ) );
  $( "#to-1" ).val($( "#slider-range" ).slider( "values", 1 ) );
  $( "#from-2" ).val($( "#slider-range" ).slider( "values", 0 ) );
  $( "#to-2" ).val($( "#slider-range" ).slider( "values", 1 ) );
});

/* вкл/выкл микрофона и камеры
========================================================================== */
$(function() {
  let microphoneBtn = $(".screen-bottom__btn-microphone");
  let videoBtn = $(".screen-bottom__btn-video");

  let microphoneItem = $(".communication-microphone");
  let videoItem = $(".communication-video");

  microphoneBtn.on('click', function() {
    microphoneBtn.toggleClass('active');
    microphoneItem.toggleClass('active');
  })
  microphoneItem.on('click', function() {
    microphoneBtn.toggleClass('active');
    microphoneItem.toggleClass('active');
  })

  videoBtn.on('click', function() {
    videoBtn.toggleClass('active');
    videoItem.toggleClass('active');
  })
  videoItem.on('click', function() {
    videoBtn.toggleClass('active');
    videoItem.toggleClass('active');
  })
});

/* развернуть/скрыть во весь экран для videochat.html
========================================================================== */
$(function() {
  let btn = $(".screen-bottom__full-screen");
  let btnClose = $(".full-screen__btn-close");

  let item = $("[id=full-screen]");

  btn.on('click', function() {

    if(document.documentElement.clientWidth < 991) {
      $('body').toggleClass('no-scroll');
      item.toggleClass('full-screen');
    }
  })

  btnClose.on('click', function() {
    if(document.documentElement.clientWidth < 991) {
      $('body').toggleClass('no-scroll');
      item.toggleClass('full-screen');
    }
  })
});

/* селект в study-room-tests-create.html
========================================================================== */
$(function() {
  $(".date-select__header_tests-create").click(function(){
    $(this).parent().toggleClass("is-active");
  })
  
  $(".date-select__item").click(function(){
    var currentele = $(this).html();
    $(".date-select__header_tests-create li").html(currentele);
    $(this).parents(".date-select_tests-create").removeClass("is-active");
  })
});

/* редактирование и удаление варианта ответа в study-room-tests-create.html
========================================================================== */
$(function() {
  let btEedit = $(".tests-create__item-btn-edit");
  let btnClose = $(".tests-create__item-btn-close");

  btEedit.on('click', function() {
    $(this).addClass('active');
    $(this).parents('.date-select__item-wrapper').find('input').attr('readonly', false);
  })

  btnClose.on('click', function() {
    $(this).parents('.tests-create__item-option-2').addClass('hidden');
    $(this).parents('.tests-create__item-option-2').find('input').attr('readonly', true);
    $(this).parents('.tests-create__item-option-2').find('.tests-create__item-btn-edit').removeClass('active');
  })
});

// /* перетаскивание элементов на экране вариант 1
// ========================================================================== */
// $(function() {
//   let dragMode = false;

//   square.addEventListener('mousedown', function (e) {
//     dragMode = true;
//   });
//   square.addEventListener('mouseup', function (e) {
//     dragMode = false;
//   });

//   document.addEventListener('mousemove', function (e) {
//     if (dragMode) {
//       square.style.left = e.clientX - 162.5 + 'px';
//       square.style.top = e.clientY - 162.5 + 'px';
//     }
// });
// });

/* перетаскивание элементов на экране вариант 2
========================================================================== */
// let currentDroppable = null;

// ball.onmousedown = function(event) {

//   let shiftX = event.clientX - ball.getBoundingClientRect().left;
//   let shiftY = event.clientY - ball.getBoundingClientRect().top;

//   ball.style.position = 'absolute';
//   ball.style.zIndex = 2;
//   document.body.append(ball);

//   moveAt(event.pageX, event.pageY);

//   function moveAt(pageX, pageY) {
//     ball.style.left = pageX - shiftX + 'px';
//     ball.style.top = pageY - shiftY + 'px';
//   }

//   function onMouseMove(event) {
//     moveAt(event.pageX, event.pageY);

//     ball.hidden = true;
//     let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
//     ball.hidden = false;

//     if (!elemBelow) return;

//     let droppableBelow = elemBelow.closest('.droppable');
//     if (currentDroppable != droppableBelow) {
//       if (currentDroppable) { // null если мы были не над droppable до этого события
//         // (например, над пустым пространством)
//         leaveDroppable(currentDroppable);
//       }
//       currentDroppable = droppableBelow;
//       if (currentDroppable) { // null если мы не над droppable сейчас, во время этого события
//         // (например, только что покинули droppable)
//         enterDroppable(currentDroppable);
//       }
//     }
//   }

//   document.addEventListener('mousemove', onMouseMove);

//   ball.onmouseup = function() {
//     document.removeEventListener('mousemove', onMouseMove);
//     ball.onmouseup = null;
//   };

// };

// function enterDroppable(elem) {
//   elem.style.background = 'pink';
// }

// function leaveDroppable(elem) {
//   elem.style.background = '';
// }

// ball.ondragstart = function() {
//   return false;
// };