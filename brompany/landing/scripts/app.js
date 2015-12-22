var $W = $(window),
    $D = $(document),
    $H = $("html"),
    $B = $("body");
$(function() {
    $W.on("resize", function() {
        var e = $W.width();
        e < g__options.breakWidth && (window.location = g__options.url)
    }), $W.resize()
}), $(function() {
    function e(e) {
        c = !0;
        //Animate sidebar buttons
        $('.central-nav__item-circle_inner').each(function(i, obj) {
            TweenLite.to($(this), .5, {
                attr: {
                    r: 5.5
                },
                fill: "#faf2f0"
            });
            var x = i+1;
            $(this).attr("class", "central-nav__item-circle_inner inactive-inner-circle circle-in-" + x);
        });

        $('.central-nav__item-circle_outer').each(function(i, obj) {
            TweenLite.to($(this), .5, {
                attr: {
                    r: 9.5
                },
                fill: "rgba(24, 226, 143, 0)",
                stroke: "rgba(250, 242, 240, 0.5)"
            });
            var x = i+1;
            $(this).attr("class", "central-nav__item-circle_outer inactive-outer-circle circle-out-" + x);
        });

        $(".circle-out-" + e).each(function(i, obj){
            TweenLite.to($(this), .5, {
                attr: {
                    r: 13.5
                },
                fill: "rgba(24, 226, 143, 0.05)",
                stroke: "rgba(24, 226, 143, 0)"
            });
        });
        $(".circle-in-" + e).each(function(i, obj){
            TweenLite.to($(this), .5, {
                attr: {
                    r: 10.5
                },
                fill: "#18e28f"
            });
        });

        //End of animating side bar buttons
        
        var s = e,
            a = s - 1,
            o = s + 1;
        n = s, h.removeClass("_hidden"), 1 == s ? h.addClass("_hidden") : s == i && h.filter("._next").addClass("_hidden"), 1 == s ? (t("menu"), m.removeClass("_hide"), _.removeClass("active inactive")) : (t("close"), m.addClass("_hide")), 1 != s ? p.addClass("_filled") : p.removeClass("_filled"),
         $(".page-" + s).removeClass("active").addClass("inactive"), 
         $(".page-" + s).removeClass("inactive").addClass("active"),
          $(".page-" + o).removeClass("active"), setTimeout(function() {
            $(".page-" + a).addClass("active inactive"), 



             c = !1
        }, l)
    }

    function s() {
        1 !== n && e(n - 1)
    }

    function a() {
        n !== i && e(n + 1)
    }

    function o() {
        f.removeClass("_small _big _opened"), $B.removeClass("_open-how"), h.removeClass("_hidden"), setTimeout(function() {
            f.hasClass("_hover") || f.css("zIndex", 0)
        }, r)
    }

    function t(e) {
        v.removeClass("_close _menu _back").addClass("_" + e)
    }
    var n = 1,
        i = 5,
        l = 1e3,
        r = 600,
        c = !1,
        d = !1,
        _ = $(".page"),
        p = $(".js-footer"),
        v = $(".js-menu-btn"),
        m = $(".js-user-btn"),
        u = $(".js-goto-btn"),
        h = $(".js-page-nav"),
        C = $(".js-mob-menu-close"),
        f = $(".js-how-to-block");
    u.on("click", function() {
        if (!c) {
            var s = $(this),
                a = s.data("href");
            s.hasClass("_mob") ? ($B.removeClass("_menu-open"), setTimeout(function() {
                e(a)
            }, 300)) : e(a)
        }
    }), h.on("click", function() {
        if (!c) {
            var s = $(this);
            if (s.hasClass("_prev")) {
                if (1 === n) return;
                e(n - 1)
            } else if (s.hasClass("_next")) {
                if (n === i) return;
                e(n + 1)
            }
        }
    }), f.on("click", function() {
        if (!d) {
            var e = $(this);
            d = !0, e.hasClass("_big") ? (o(), t("close"), h.removeClass("_hidden")) : (f.addClass("_small"), h.addClass("_hidden"), e.css("zIndex", 2).addClass("_big").removeClass("_small"), t("back"), setTimeout(function() {
                e.addClass("_opened"), $B.addClass("_open-how")
            }, r)), setTimeout(function() {
                d = !1
            }, r)
        }
    }), v.on("click", function() {
        var s = $(this);
        s.hasClass("_close") ? (n = 1, e(n)) : s.hasClass("_menu") ? $B.hasClass("_menu-open") ? $B.removeClass("_menu-open") : $B.addClass("_menu-open") : s.hasClass("_back") && (o(), t("close"))
    }), C.on("click", function() {
        $B.removeClass("_menu-open")
    }), $(document).on("click", function(e) {
        !$B.hasClass("_menu-open") || $(e.target).closest(".js-mob-menu").length || $(e.target).closest(".js-menu-btn").length || $B.removeClass("_menu-open")
    }), $(function() {
        function e(e) {
            var s = TweenLite.to(".preloader__start, .preloader__progress, .rotater", _, {
                    opacity: 0
                }),
                a = TweenLite.to(t, p, {
                    x: "+=540%",
                    y: "-=600%",
                    ease: Back.easeIn
                }),
                o = TweenLite.to(n, r, {
                    x: "+=270%",
                    y: "-=300%",
                    opacity: 1
                }),
                i = TweenLite.to(".logo__path-dot", r, {
                    opacity: 1
                }),
                l = d + _,
                c = l + p;
            m.add(s, d), m.add(a, l), m.add(o, c), m.add(i, c), m.play()
        }

        function o() {
            $(".central-nav").addClass("active"), $(".central-desc").addClass("active"), $(".js-header-logo").addClass("_complete"), $B.addClass("_loaded"), $(document).on("mousemove", B), $(document).on("mousewheel DOMMouseScroll", function(e) {
                c || $B.hasClass("_popup") || $B.hasClass("_open-how") || $B.hasClass("_menu-open") || (e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0 ? s() : a())
            })
        }
        var t = ".preloader__plane-path",
            n = ".logo__path-plane",
            i = g__options.preloader.animTime || 2.3,
            l = 7,
            r = i / l,
            d = .2,
            _ = .3,
            p = g__options.preloader.planeFlyAnimTime || .7,
            v = new TimelineLite({
                onComplete: e
            }),
            m = new TimelineLite({
                paused: !0,
                onComplete: o
            });
        TweenLite.set(n, {
            x: "-=270%",
            y: "+=300%"
        }), TweenLite.to(".rotater", i, {
            rotation: "+=360",
            ease: Power1.easeIn
        }), TweenLite.to(".preloader__progress", i, {
            drawSVG: "0% 100%",
            ease: Power1.easeIn
        });
        for (var u = 1; l >= u; u++) {
            var h = TweenLite.to(t, r, {
                morphSVG: {
                    shape: ".preloader__plane-step-" + u
                }
            });
            v.add(h, (u - 1) * r)
        }
        var C = $(window).width() / 2,
            f = $(window).height() / 2,
            w = 14,
            g = parseFloat(C / w),
            b = parseFloat(f / w),
            T = $(".central-nav__rotating-plane"),
            k = function() {
                C = $(window).width() / 2, f = $(window).height() / 2, g = +parseFloat(C / w), b = +parseFloat(f / w)
            };
        $(window).resize(k);
        var B = function(e) {
                var s = parseFloat((e.pageX - C) / g),
                    a = parseFloat((e.pageY - f) / b);
                T.css("transform", "rotateX(" + (0 - a) + "deg) rotateY(" + s + "deg) rotateZ(0)")
            },
            j = .3;
        $(".central-nav__item").hover(function() {
            var e = $(".inactive-inner-circle", this),
                s = $(".inactive-outer-circle", this);
            TweenLite.to(e, j, {
                attr: {
                    r: 10.5
                },
                fill: "#18e28f"
            }), TweenLite.to(s, j, {
                attr: {
                    r: 13.5
                },
                fill: "rgba(24, 226, 143, 0.05)",
                stroke: "rgba(24, 226, 143, 0)"
            })
        }, function() {
            var e = $(".inactive-inner-circle", this),
                s = $(".inactive-outer-circle", this);
            TweenLite.to(e, j, {
                attr: {
                    r: 5.5
                },
                fill: "#faf2f0"
            }), TweenLite.to(s, j, {
                attr: {
                    r: 9.5
                },
                fill: "rgba(24, 226, 143, 0)",
                stroke: "rgba(250, 242, 240, 0.5)"
            })
        })
    })
}), $(function() {
    var e = $(".js-if-slider");
    if (e.length) {
        var s = $(".js-if-slider-btn");
        s.on("click", function() {
            var a = $(this),
                o = a.data("id"),
                t = $(".js-if-slide", e);
            s.removeClass("_active"), a.addClass("_active"), t.removeClass("_active"), t.eq(o).addClass("_active")
        })
    }
}), $(function() {
    var e = $(".js-ic-popup");
    if (e.length) {
        var s = {
            btn: $(".js-case"),
            btnClose: $(".js-ic-popup-close"),
            sliderWr: $(".js-ic-slider")
        };
        s.sliderWr.slick({
            infinite: !0,
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: !1,
            arrows: !1,
            mobileFirst: !0,
            accessibility: !1,
            responsive: [{
                breakpoint: 768,
                settings: {
                    arrows: !0
                }
            }]
        });
        s.btn.on("click", function() {
            var a = $(this),
                o = a.data("id");
            wScroll = $W.scrollTop(), e.css("top", wScroll), $B.hasClass("_popup") || $B.addClass("_popup"), e.hasClass("_active") ? s.sliderWr[0].slick.slickGoTo(o, !1) : (s.sliderWr[0].slick.slickGoTo(o, !0), e.addClass("_active"))
        }), s.btnClose.on("click", function() {
            $B.removeClass("_popup"), e.removeClass("_active")
        })
    }
});