//
// map.js
// Theme module
//

"use strict";

(function () {
  //
  // Variables
  //

  var map = document.querySelectorAll('[data-toggle="map"]');
  var accessToken =
    "pk.eyJ1IjoiYmF0ZGVtYmVyZWwiLCJhIjoiY2tlM3hsc3JvMG5wYTJ5bnRuanltbG1yaSJ9.--FZkYPuNQUQ8Wuu_7DA1Q";

  //
  // Methods
  //

  function init(el) {
    var elementOptions = el.dataset.options;
    elementOptions = elementOptions ? JSON.parse(elementOptions) : {};
    var defaultOptions = {
      container: el,
      style: "mapbox://styles/mapbox/light-v9",
      scrollZoom: false,
      interactive: false,
    };
    var options = Object.assign(defaultOptions, elementOptions);

    // Get access token
    mapboxgl.accessToken = accessToken;

    // Init map
    new mapboxgl.Map(options);
  }

  //
  // Events
  //

  if (typeof mapboxgl !== "undefined" && map) {
    [].forEach.call(map, function (el) {
      init(el);
    });
  }
})();
