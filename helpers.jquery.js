'use strict';

var helpers
  ;

helpers.heightOfTallestOf = function ($els) {
  var max = 0;
  $els.each(function () {
    max = $(this).outerHeight() > max ? $(this).outerHeight() : max;
  });
  return max;
};

helpers.getFloatedRows = function ($els) {
  var rows = []
    , curr = false
    , prev = false
    , i = 0
    ;

  $els.each(function () {
    var $current = $(this).get(0);
    curr = $current.getBoundingClientRect().top;
    if ( prev && curr !== prev ) {
      i = i + 1;
    }
    if ( rows[i] instanceof jQuery !== true ) {
      rows[i] = $();
    }
    rows[i] = rows[i].add($(this));
    prev = curr;
  });

  return rows;
};

helpers.hdpi = function () {
  return window.devicePixelRatio > 1;
};

helpers.firefox = function () {
  return navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
};
