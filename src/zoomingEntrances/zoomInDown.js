/*! Animate.js | The MIT License (MIT) | Copyright (c) 2017 GibboK */
; (function (animate) {
    'use strict';
    animate.zoomInDown = function (selector, options) {
        var keyframeset = [
            {
                opacity: 0,
                transform: 'scale3d(.1, .1, .1) translate3d(0, -1000px, 0)',
                animationTimingFunction: 'cubic-bezier(0.550, 0.055, 0.675, 0.190)',
                offset: 0
            },
            {
                opacity: 1,
                transform: 'scale3d(.475, .475, .475) translate3d(0, 60px, 0)',
                animationTimingFunction: 'cubic-bezier(0.175, 0.885, 0.320, 1)',
                offset: 0.6
            },
            {
                opacity: 1,
                transform: 'none',
                offset: 1
            }
        ];
        return animate._animate(selector, keyframeset, options);
    }
})(window.animate = window.animate || {});
