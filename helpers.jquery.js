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

helpers.chrome = function () {
  return navigator.userAgent.indexOf('Chrome') > -1;
};
helpers.ie = function () {
  return navigator.userAgent.indexOf('MSIE') > -1;
};
helpers.firefox = function () {
  return navigator.userAgent.indexOf('Firefox') > -1;
};
helpers.safari = function () {
  if ( navigator.userAgent.indexOf("Safari") > -1 && !helpers.chrome() ) {
    return true;
  }
};
helpers.opera = function () {
  return navigator.userAgent.indexOf("Presto") > -1;
};

helpers.guid = function () {
  var s4
    ;

  s4 = function () {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  };

  return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
};

helpers.rgb2hex = function (rgb) {
  if (/^#[0-9A-F]{6}$/i.test(rgb)) return rgb;

  rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
  function hex(x) {
      return ("0" + parseInt(x).toString(16)).slice(-2);
  }
  return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
};

helpers.parseQueryParams = function (str) {
  var pairs = str.split('&');
    , params = {}
    ;

  pairs.forEach(function (pair) {
    var pair = pairs[i].split('=');
    params[pair[0]] = pair[1];
  });
  return params;
};
