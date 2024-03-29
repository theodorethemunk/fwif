/*
any Image Comparison Slider jQuery/js plugin

Copyright (c) 2020 Niklas Knaack (@niklaswebdev)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
*/

! function() {
    var t;

    function e(t, e) {
        var o = Math.floor(Math.random() * Math.floor(Math.random() * Date.now())),
            n = t.getAttribute("id") ? t.getAttribute("id") : o,
            i = "any-image-comparison-slider",
            r = "data-slider-type",
            a = {
                orientation: "horizontal",
                initialPosition: 0,
                width: "100%",
                backgroundColor: "none",
                onPointerDown: !1,
                cursor: "ew-resize",
                dividingLine: "solid 1px rgba(255, 255, 255, .5)",
                followEasingFactor: 0,
                interactive: !0,
                autoAnimation: !0,
                autoAnimationSpeed: 8,
                autoAnimationPause: 1,
                autoAnimationEasing: "inOutCubic",
                controlOthers: !1,
                controlledByOthers: !1,
                controlledReverse: !1,
                group: "",
                groupSync: !1,
                loading: "lazy",
                viewportOffset: "100px",
                sleepMode: !0,
                onReady: function() {}
            };
        if (void 0 !== e)
            for (var s in e) e.hasOwnProperty(s) && a.hasOwnProperty(s) && (a[s] = e[s]);
        for (var l = t.attributes, u = [{
                attr: "data-orientation",
                prop: "orientation",
                type: String
            }, {
                attr: "data-initial-position",
                prop: "initialPosition",
                type: Number
            }, {
                attr: "data-width",
                prop: "width",
                type: String
            }, {
                attr: "data-background-color",
                prop: "backgroundColor",
                type: String
            }, {
                attr: "data-on-pointer-down",
                prop: "onPointerDown",
                type: Boolean
            }, {
                attr: "data-cursor",
                prop: "cursor",
                type: String
            }, {
                attr: "data-dividing-line",
                prop: "dividingLine",
                type: String
            }, {
                attr: "data-follow-easing-factor",
                prop: "followEasingFactor",
                type: Number
            }, {
                attr: "data-interactive",
                prop: "interactive",
                type: Boolean
            }, {
                attr: "data-auto-animation",
                prop: "autoAnimation",
                type: Boolean
            }, {
                attr: "data-auto-animation-speed",
                prop: "autoAnimationSpeed",
                type: Number
            }, {
                attr: "data-auto-animation-pause",
                prop: "autoAnimationPause",
                type: Number
            }, {
                attr: "data-auto-animation-easing",
                prop: "autoAnimationEasing",
                type: String
            }, {
                attr: "data-control-others",
                prop: "controlOthers",
                type: Boolean
            }, {
                attr: "data-controlled-by-others",
                prop: "controlledByOthers",
                type: Boolean
            }, {
                attr: "data-controlled-reverse",
                prop: "controlledReverse",
                type: Boolean
            }, {
                attr: "data-group",
                prop: "group",
                type: String
            }, {
                attr: "data-group-sync",
                prop: "groupSync",
                type: Boolean
            }, {
                attr: "data-loading",
                prop: "loading",
                type: String
            }, {
                attr: "data-viewport-offset",
                prop: "viewportOffset",
                type: String
            }, {
                attr: "data-sleep-mode",
                prop: "sleepMode",
                type: Boolean
            }], d = 0, f = l.length; d < f; d++)
            for (var p = l[d], c = 0, g = u.length; c < g; c++) {
                var m = u[c];
                if (m.attr === p.nodeName) {
                    m.type === String ? a[m.prop] = p.nodeValue : m.type === Number ? a[m.prop] = parseFloat(p.nodeValue) : m.type === Boolean && (a[m.prop] = "true" === p.nodeValue.toLowerCase());
                    break
                }
            }
        if ("string" != typeof a.orientation ? yt("orientation must be of type string") : a.orientation = a.orientation.toLowerCase(), "horizontal" !== a.orientation && "h" !== a.orientation && "vertical" !== a.orientation && "v" !== a.orientation && "default" !== a.orientation ? yt("orientation must be horizontal, h, vertical, v or default") : "h" === a.orientation || "default" === a.orientation ? a.orientation = "horizontal" : "v" === a.orientation && (a.orientation = "vertical"), "number" != typeof a.initialPosition || a.initialPosition < 0 || a.initialPosition > 1 ? yt("initialPosition must be of type number and the value must be between 0 to 1") : a.initialPosition < .01 ? a.initialPosition = .01 : a.initialPosition > .99 && (a.initialPosition = .99), "string" != typeof a.width ? yt("width must be of type string") : a.width = a.width.toLowerCase(), a.width.indexOf("px") < 0 && a.width.indexOf("pt") < 0 && a.width.indexOf("%") < 0 && a.width.indexOf("em") < 0 && a.width.indexOf("vw") < 0 && yt("width must be given in px, pt, %, em or vw"), "string" != typeof a.backgroundColor ? yt("backgroundColor must be of type string") : a.backgroundColor = a.backgroundColor.toLowerCase(), a.backgroundColor.indexOf("none") < 0 && a.backgroundColor.indexOf("#") < 0 && a.backgroundColor.indexOf("rgb") < 0 && yt("backgroundColor must be none, hex, rgb or rgba value"), "boolean" != typeof a.onPointerDown && yt("onPointerDown must be of type boolean"), "string" != typeof a.cursor && yt("cursor must be of type string"), "string" == typeof a.cursor && a.cursor.length > 0 && "" !== a.cursor && " " !== a.cursor) {
            var y = ["ew-resize", "ns-resize", "grab", "grabbing", "w-resize", "s-resize", "e-resize", "n-resize", "row-resize", "col-resize", "all-scroll", "move", "crosshair", "pointer", "default", "auto", "inherit", "initial", "unset", "none"],
                h = !0;
            for (var b in y) a.cursor === y[b] && (h = !1);
            !0 === h && a.cursor.indexOf("url") > -1 && a.cursor.indexOf(".cur") > -1 && (h = !1), !0 === h && yt("cursor must contain one of the following values: " + y.join(", ") + ', url("http://yourcursor.cur") 0 0, auto')
        }
        if ("string" != typeof a.dividingLine && yt("dividingLine must be of type string"), a.dividingLine.length < 4 && yt("dividingLine should look for example as follows: solid 1px rgba(255, 255, 255, .5) or none"), "number" != typeof a.followEasingFactor && yt("followEasingFactor must be of type number"), (a.followEasingFactor < 0 || a.followEasingFactor > 100) && yt("followEasingFactor must be between 0 and 100"), "boolean" != typeof a.interactive && yt("interactive must be of type boolean"), "boolean" != typeof a.autoAnimation && yt("autoAnimation must be of type boolean"), "number" != typeof a.autoAnimationSpeed && !0 === a.autoAnimation && yt("autoAnimationSpeed must be of type number"), a.autoAnimationSpeed < 1 && !0 === a.autoAnimation && yt("autoAnimationSpeed must be 1 or higher"), "number" != typeof a.autoAnimationPause && !0 === a.autoAnimation && yt("autoAnimationPause must be of type number"), a.autoAnimationPause < 0 && !0 === a.autoAnimation && yt("autoAnimationPause must be 0 or higher"), !0 === a.autoAnimation) {
            var v = ["linear", "inQuad", "outQuad", "inOutQuad", "inCubic", "outCubic", "inOutCubic", "inQuart", "outQuart", "inOutQuart", "inQuint", "outQuint", "inOutQuint", "inSine", "outSine", "inOutSine"],
                w = !0;
            for (var A in v) a.autoAnimationEasing === v[A] && (w = !1);
            !0 === w && yt("autoAnimationEasing must contain one of the following values: " + v.join(", "))
        }
        "boolean" != typeof a.controlOthers && yt("controlOthers must be of type boolean"), "boolean" != typeof a.controlledByOthers && yt("controlledByOthers must be of type boolean"), "boolean" != typeof a.controlledReverse && yt("controlledReverse must be of type boolean"), "string" != typeof a.group && yt("group must be of type string"), "boolean" != typeof a.groupSync && yt("groupSync must be of type boolean"), "string" != typeof a.loading && yt("loading must be of type string"), "lazy" !== a.loading && "eager" !== a.loading && yt("loading must be given in either lazy or eager"), "lazy" === a.loading && ("string" != typeof a.viewportOffset && yt("viewportOffset must be of type string"), -1 !== a.viewportOffset.indexOf("px") && "px" === a.viewportOffset.slice(a.viewportOffset.indexOf("px")) || yt("viewportOffset must be given in px")), "boolean" != typeof a.sleepMode && yt("sleepMode must be of type boolean"), "function" != typeof a.onReady && yt("onReady must be of type function"), t || yt("No slider div element found");
        var x = a.group.length > 0 ? i + "-" + a.group : i,
            O = this;
        t.setAttribute(r, x), !0 !== a.controlOthers && !0 !== a.groupSync || (t.aics = O), O.loaded = !1;
        var C = {
                HORIZONTAL: "horizontal",
                VERTICAL: "vertical"
            },
            E = !1,
            S = !1,
            I = !!document.attachEvent,
            R = I ? "attachEvent" : "addEventListener",
            P = I ? "detachEvent" : "removeEventListener",
            L = !1,
            N = !1,
            T = {
                x: -1,
                y: -1
            },
            B = {
                x: 0,
                y: 0
            },
            H = null,
            M = null,
            F = -1,
            k = .0166666666666667,
            z = a.autoAnimationSpeed,
            W = z,
            Q = a.autoAnimationPause,
            V = t.getElementsByClassName("ui")[0],
            D = null,
            Z = null,
            q = null;
        void 0 !== V && (D = V.getElementsByClassName("button-lft")[0] || V.getElementsByClassName("button-top")[0], Z = V.getElementsByClassName("button-rgt")[0] || V.getElementsByClassName("button-btm")[0], q = V.getElementsByClassName("dragger")[0]);
        var j = t.getElementsByClassName("images")[0],
            _ = j.getElementsByClassName("image-lft")[0] || j.getElementsByClassName("image-top")[0],
            X = j.getElementsByClassName("image-rgt")[0] || j.getElementsByClassName("image-btm")[0],
            Y = 0,
            G = 2,
            J = function(t) {
                ++Y === G && (U.width === $.width && U.height === $.height || yt("Images must have same dimensions"), O.loaded = !0, function() {
                    if (!0 === a.groupSync) {
                        H = wt();
                        var t = setInterval(function() {
                            for (var e = 0, o = 0, n = H.length; o < n; o++) {
                                var i = H[o];
                                i.aics && !0 === i.aics.loaded && e++
                            }
                            e === H.length && (clearInterval(t), ut())
                        }, 10)
                    } else ut()
                }())
            },
            K = function(t) {
                yt("Image " + this.src + " could not be loaded")
            },
            U = null,
            $ = null,
            tt = null,
            et = null;
        j || yt("No images div element found"), _ || yt("No imageLft div element found"), X || yt("No imageRgt div element found");
        var ot = !1;
        a.initialPosition > .5 && (ot = !0);
        var nt = 0,
            it = 0,
            rt = 0,
            at = 0,
            st = {
                linear: function(t, e, o, n) {
                    return o * t / n + e
                },
                inQuad: function(t, e, o, n) {
                    return o * (t /= n) * t + e
                },
                outQuad: function(t, e, o, n) {
                    return -o * (t /= n) * (t - 2) + e
                },
                inOutQuad: function(t, e, o, n) {
                    return (t /= n / 2) < 1 ? o / 2 * t * t + e : -o / 2 * (--t * (t - 2) - 1) + e
                },
                inCubic: function(t, e, o, n) {
                    return o * (t /= n) * t * t + e
                },
                outCubic: function(t, e, o, n) {
                    return t /= n, o * (--t * t * t + 1) + e
                },
                inOutCubic: function(t, e, o, n) {
                    return (t /= n / 2) < 1 ? o / 2 * t * t * t + e : o / 2 * ((t -= 2) * t * t + 2) + e
                },
                inQuart: function(t, e, o, n) {
                    return o * (t /= n) * t * t * t + e
                },
                outQuart: function(t, e, o, n) {
                    return t /= n, -o * (--t * t * t * t - 1) + e
                },
                inOutQuart: function(t, e, o, n) {
                    return (t /= n / 2) < 1 ? o / 2 * t * t * t * t + e : -o / 2 * ((t -= 2) * t * t * t - 2) + e
                },
                inQuint: function(t, e, o, n) {
                    return o * (t /= n) * t * t * t * t + e
                },
                outQuint: function(t, e, o, n) {
                    return t /= n, o * (--t * t * t * t * t + 1) + e
                },
                inOutQuint: function(t, e, o, n) {
                    return (t /= n / 2) < 1 ? o / 2 * t * t * t * t * t + e : o / 2 * ((t -= 2) * t * t * t * t + 2) + e
                },
                inSine: function(t, e, o, n) {
                    return -o * Math.cos(t / n * (Math.PI / 2)) + o + e
                },
                outSine: function(t, e, o, n) {
                    return o * Math.sin(t / n * (Math.PI / 2)) + e
                },
                inOutSine: function(t, e, o, n) {
                    return -o / 2 * (Math.cos(Math.PI * t / n) - 1) + e
                }
            },
            lt = {};

        function ut() {
            var e = function(e) {
                    var o = function(e, o) {
                        var n = {};
                        return n.x = Math.min(Math.max(e, 0), t.offsetWidth), n.y = Math.min(Math.max(o, 0), t.offsetHeight), n
                    }(e.offsetX || e.layerX, e.offsetY || e.layerY);
                    (!0 === a.onPointerDown && !0 === N || !1 === a.onPointerDown && !1 === N) && (T.x = o.x, T.y = o.y, !0 === a.controlOthers && bt(!0))
                },
                o = function(t) {
                    (!0 === a.onPointerDown && !0 === N || !1 === a.onPointerDown && !1 === N) && (L = !0), e(t)
                },
                n = function(t) {
                    (!0 === a.onPointerDown && !0 === N || !1 === a.onPointerDown && !1 === N) && (L = !1, F = -1, Q = a.autoAnimationPause, !0 === a.controlOthers && bt(!1))
                },
                i = function(t) {
                    !0 === a.onPointerDown && ("grab" === a.cursor && "grab" === _.style.cursor && "grab" === X.style.cursor && (_.style.cursor = "grabbing", X.style.cursor = "grabbing"), L = !0, N = !0, e(t))
                },
                r = function(t) {
                    !0 === a.onPointerDown && ("grab" === a.cursor && "grabbing" === _.style.cursor && "grabbing" === X.style.cursor && (_.style.cursor = "grab", X.style.cursor = "grab"), n(), L = !1, N = !1)
                };
            if (a.interactive && (window.PointerEvent ? (j[R](I ? "onpointermove" : "pointermove", e), j[R](I ? "onpointerenter" : "pointerenter", o), j[R](I ? "onpointerleave" : "pointerleave", n), j[R](I ? "onpointerdown" : "pointerdown", i), j[R](I ? "onpointerup" : "pointerup", r)) : (j[R](I ? "onmousemove" : "mousemove", e), j[R](I ? "onmouseover" : "mouseover", o), j[R](I ? "onmouseout" : "mouseout", n), j[R](I ? "onmousedown" : "mousedown", i), j[R](I ? "onmouseup" : "mouseup", r))), j.style.position = "relative", j.style.overflow = "hidden", _.style.backgroundImage = 'url("' + _.getAttribute("data-src") + '")', _.style.backgroundRepeat = "no-repeat", _.style.backgroundSize = "cover", _.style.position = "absolute", _.style.cursor = !0 === a.interactive ? a.cursor : "default", _.style.touchAction = !0 === a.interactive ? "none" : "auto", a.orientation === C.HORIZONTAL ? _.style.borderRight = a.dividingLine : a.orientation === C.VERTICAL && (_.style.borderBottom = a.dividingLine), X.style.backgroundImage = 'url("' + X.getAttribute("data-src") + '")', X.style.backgroundRepeat = "no-repeat", X.style.backgroundSize = "cover", X.style.position = "absolute", X.style.cursor = !0 === a.interactive ? a.cursor : "default", X.style.touchAction = !0 === a.interactive ? "none" : "auto", void 0 !== V) {
                var s = function(t, e, o) {
                        t.style.pointerEvents = "auto", t.style.position = "absolute", t.style.backgroundColor = "rgba(0, 0, 0, 0.6)", t.style.color = "#fff", t.style.fontFamily = "Arial, sans-serif", t.style.fontSize = "12px", t.style.fontWeight = "bold", t.style.minWidth = "70px", t.style.textAlign = "center", t.style.lineHeight = "26px", t.style.textDecoration = "none", t.style.transition = "all ease-in-out .3s", t.setAttribute("href", e.getAttribute("data-src")), "tl" === o ? t.style.borderRadius = "0 0 4px 0" : "tr" === o ? (t.style.right = "0px", t.style.borderRadius = "0 0 0 4px") : "bl" === o ? (t.style.bottom = "0px", t.style.borderRadius = "0 4px 0 0") : "br" === o && (t.style.bottom = "0px", t.style.right = "0px", t.style.borderRadius = "4px 0 0 0"), window.PointerEvent ? (t[R](I ? "onpointerenter" : "pointerenter", l), t[R](I ? "onpointerleave" : "pointerleave", u)) : (t[R](I ? "onmouseover" : "mouseover", l), t[R](I ? "onmouseout" : "mouseout", u))
                    },
                    l = function(t) {
                        t.target.style.backgroundColor = "rgba(0, 0, 0, 0.8)", t.target.style.color = "#ddd"
                    },
                    u = function(t) {
                        t.target.style.backgroundColor = "rgba(0, 0, 0, 0.6)", t.target.style.color = "#fff"
                    };
                V.style.position = "absolute", V.style.pointerEvents = "none", V.style.top = "0px", V.style.left = "0px", void 0 !== D && s(D, _, "tl"), void 0 !== Z && (a.orientation === C.HORIZONTAL ? s(Z, X, "tr") : a.orientation === C.VERTICAL && s(Z, X, "bl")), void 0 !== q ? q.style.position = "absolute" : q = null
            }
            window[R](I ? "onresize" : "resize", gt), mt(), !0 === a.controlOthers && null === H && (H = wt()), a.initialPosition > 0 && (a.orientation === C.HORIZONTAL ? T.x = ft(a.initialPosition, t.offsetWidth) : a.orientation === C.VERTICAL && (T.y = ft(a.initialPosition, t.offsetHeight)), B.x = T.x, B.y = T.y, ot = null), null != M && cancelAnimFrame(M), M = requestAnimFrame(ct), a.onReady()
        }

        function dt(t, e) {
            var o = {};
            return o.v = t / e, o
        }

        function ft(t, e) {
            !0 === a.controlledReverse && (t = 1 - t);
            var o = {};
            return o.v = t * e, o.v
        }

        function pt(t, e, o, n) {
            var i = t - e,
                r = o - n;
            return Math.sqrt(i * i + r * r)
        }

        function ct(e) {
            var o = !0;
            if (!0 === E && (o = !1), !0 === a.sleepMode && !1 === S && (o = !1), !0 === o) {
                if (!0 === L && (0 === a.followEasingFactor ? (B.x = T.x, B.y = T.y) : (B.x += (T.x - B.x) / a.followEasingFactor, B.y += (T.y - B.y) / a.followEasingFactor), ot = null), !1 === L && !0 === a.autoAnimation) {
                    if (0 === F) {
                        var n = 0,
                            i = 0;
                        if (a.orientation === C.HORIZONTAL) {
                            if (null === ot) {
                                n = B.x, B.x >= t.offsetWidth / 2 ? (i = it, ot = !0) : (i = nt, ot = !1);
                                var r = 1 - Math.abs(pt(B.x, t.offsetWidth / 2, 0, 0)) / (t.offsetWidth / 2);
                                W = z * r
                            } else W = z, !0 === ot ? (n = it, i = nt) : (n = nt, i = it), ot = !ot;
                            lt.init([{
                                from: n,
                                to: i,
                                property: "x"
                            }], W)
                        } else if (a.orientation === C.VERTICAL) {
                            if (null === ot) {
                                n = B.y, B.y >= t.offsetHeight / 2 ? (i = at, ot = !0) : (i = rt, ot = !1);
                                r = 1 - Math.abs(pt(0, 0, B.y, t.offsetHeight / 2)) / (t.offsetHeight / 2);
                                W = z * r
                            } else W = z, !0 === ot ? (n = at, i = rt) : (n = rt, i = at), ot = !ot;
                            lt.init([{
                                from: n,
                                to: i,
                                property: "y"
                            }], W)
                        }
                    }
                    F >= 0 && (lt.props[0].from !== lt.props[0].to ? (lt.run(F), F += k) : F = W + 1), F > W && (F = -1, Q = a.autoAnimationPause), -1 === F && (Q -= k), Q <= 0 && -1 === F && (F = 0)
                }
                a.orientation === C.HORIZONTAL ? (B.x > t.offsetWidth ? B.x = t.offsetWidth : B.x < 1 && (B.x = 1), _.style.width = B.x + "px", null !== q && (q.style.left = B.x - q.offsetWidth / 2 + "px")) : a.orientation === C.VERTICAL && (B.y > t.offsetHeight ? B.y = t.offsetHeight : B.y < 1 && (B.y = 1), _.style.height = B.y + "px", null !== q && (q.style.top = B.y - q.offsetHeight / 2 + "px"))
            }
            M = requestAnimFrame(ct)
        }

        function gt(t) {
            mt()
        }

        function mt() {
            t.style.width = a.width, tt = "100%", et = Math.round(U.height / (U.width / t.offsetWidth)).toString() + "px", t.style.height = et, void 0 !== V && (V.style.width = tt, V.style.height = et), j.style.width = tt, j.style.height = et, a.orientation === C.HORIZONTAL ? (_.style.width = T.x + "px", _.style.height = et, null !== q && (q.style.top = t.offsetHeight / 2 - q.offsetHeight / 2 + "px", q.style.left = T.x - q.offsetWidth / 2 + "px")) : a.orientation === C.VERTICAL && (_.style.width = tt, _.style.height = T.y + "px", null !== q && (q.style.left = t.offsetWidth / 2 - q.offsetWidth / 2 + "px", q.style.top = T.y - q.offsetHeight / 2 + "px")), X.style.width = tt, X.style.height = et, it = Math.round(t.offsetWidth), at = Math.round(U.height / (U.width / t.offsetWidth)) - 1, F = 0, Q = 0
        }

        function yt(t) {
            throw Error('\nSlider (id="' + n + '") reports following error: ' + t)
        }

        function ht(e, o) {
            !0 !== E && !0 === a.controlledByOthers && (!0 === e ? (L = !0, a.orientation === C.HORIZONTAL ? T.x = ft(o.v, t.offsetWidth) : a.orientation === C.VERTICAL && (T.y = ft(o.v, t.offsetHeight))) : (L = !1, F = -1, Q = a.autoAnimationPause))
        }

        function bt(e) {
            for (var o = 0, n = H.length; o < n; o++) {
                var i = H[o];
                i.aics && (a.orientation === C.HORIZONTAL ? i.aics.controlThisSlider(e, dt(T.x, t.offsetWidth)) : a.orientation === C.VERTICAL && i.aics.controlThisSlider(e, dt(T.y, t.offsetHeight)))
            }
        }

        function vt(e, o) {
            if (e = void 0 !== e && e, !0 === !!window.IntersectionObserver) {
                var n = new IntersectionObserver(function(t, i) {
                    var r = t[0];
                    !0 === (S = r.isIntersecting) && (!0 === e && n.unobserve(r.target), o && o())
                }, {
                    rootMargin: a.viewportOffset + " " + a.viewportOffset + " " + a.viewportOffset + " " + a.viewportOffset
                });
                n.observe(t)
            } else {
                var i = parseInt(a.viewportOffset.slice(0, a.viewportOffset.indexOf("px"))),
                    r = function(n) {
                        var a;
                        a = t.getBoundingClientRect(), !0 === (S = a.top <= (window.innerHeight || document.documentElement.clientHeight) + i && a.top + a.height + i >= 0 && a.left <= (window.innerWidth || document.documentElement.clientWidth) + i && a.left + a.width + i >= 0) && (!0 === e && window[P](I ? "onscroll" : "scroll", r), o && o())
                    };
                window[R](I ? "onscroll" : "scroll", r), r()
            }
        }

        function wt() {
            var t = i + "-" + a.group,
                e = null,
                o = [];
            if (document.querySelectorAll)
                if (Array.from) o = Array.from(document.body.querySelectorAll("*[" + r + '="' + t + '"]:not([id="' + n + '"])'));
                else
                    for (var s = 0, l = (e = document.body.querySelectorAll("*[" + r + '="' + t + '"]:not([id="' + n + '"])')).length; s < l; s++) o.push(e[s]);
            else
                for (s = 0, l = (e = document.body.getElementsByTagName("*")).length; s < l; s++) {
                    var u = e[s],
                        d = u.getAttribute(r),
                        f = u.getAttribute("id");
                    null !== d && null !== f && d === t && f !== n && o.push(u)
                }
            return o
        }!0 === a.autoAnimation && (lt.props = null, lt.time = 0, lt.duration = 0, lt.increment = 0, lt.easing = st[a.autoAnimationEasing], lt.init = function(t, e) {
                this.props = t, this.duration = e;
                for (let t = 0, e = this.props.length; t < e; t++) {
                    var o = this.props[t];
                    o.change = o.to - o.from
                }
            }, lt.run = function(t) {
                this.time = t, this.increment = this.duration / 100, this.time += this.increment;
                for (let t = 0, e = this.props.length; t < e; t++) {
                    const e = this.props[t];
                    "x" === e.property ? B.x = this.easing(this.time, e.from, e.change, this.duration) : "y" === e.property && (B.y = this.easing(this.time, e.from, e.change, this.duration))
                }
            }), window.requestAnimFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oCancelAnimationFrame || window.msRequestAnimationFrame || function(t) {
                window.setTimeout(t, 1e3 / 60)
            }, window.cancelAnimFrame = window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || window.oCancelAnimationFrame || window.msCancelAnimationFrame || function(t) {
                window.clearTimeout(t)
            }, O.controlThisSlider = ht, O.controlOtherSliders = bt, O.intersectsViewport = function() {
                return S
            }, O.pause = function() {
                E = !0
            }, O.unpause = function() {
                E = !1
            }, O.controlByExternalSource = function(t, e, o) {
                ht(t, {
                    v: e / o
                })
            }, O.getAllOthers = wt, O.getOrientation = function() {
                return a.orientation === C.HORIZONTAL ? C.HORIZONTAL : a.orientation === C.VERTICAL ? C.VERTICAL : void 0
            }, O.getId = function() {
                return n
            }, O.getPos = function() {
                return a.orientation === C.HORIZONTAL ? dt(B.x, t.offsetWidth).v : a.orientation === C.VERTICAL ? dt(B.y, t.offsetHeight).v : void 0
            },
            function() {
                var e = function() {
                    (U = new Image).onload = J, U.onerror = K, U.src = _.getAttribute("data-src"), ($ = new Image).onload = J, $.onerror = K, $.src = _.getAttribute("data-src")
                };
                if ("eager" === a.loading ? e() : "lazy" === a.loading && vt(!0, function() {
                        !0 === a.sleepMode && vt(!1), e()
                    }), t.style.overflow = "hidden", t.style.position = "relative", t.style.backgroundColor = a.backgroundColor, t.style.width = a.width, null !== _.getAttribute("data-width") && null !== _.getAttribute("data-height")) {
                    var o = parseInt(_.getAttribute("data-width")),
                        n = parseInt(_.getAttribute("data-height")),
                        i = t.offsetWidth;
                    o > n ? i = t.offsetWidth / (o / n) : o < n && (i = t.offsetWidth * (n / o)), t.style.height = i.toString() + "px"
                }
            }()
    }
    e.VERSION = "1.0.4", window.AnyImageComparisonSlider = e, t = function() {
        for (var t = document.getElementsByTagName("div"), o = 0, n = t.length; o < n; o++) {
            var i = t[o];
            i.id.length > 0 && i.id.indexOf("aics") > -1 && i.id.indexOf("autostart") > -1 && new e(i)
        }
    }, "loading" !== document.readyState ? t() : document.addEventListener ? document.addEventListener("DOMContentLoaded", t) : document.attachEvent("onreadystatechange", function() {
        "complete" === document.readyState && t()
    })
}(), "undefined" != typeof jQuery && function(t) {
    t.fn.anyImageComparisonSlider = function(e) {
        var o = arguments;
        return this.each(function() {
            if (t.data(this, "plugin_AnyImageComparisonSlider")) {
                var n = t.data(this, "plugin_AnyImageComparisonSlider");
                if (n[e]) {
                    var i = Array.prototype.slice.call(o, 1);
                    "function" == typeof i[i.length - 1] ? i[i.length - 1](n[e].apply(this, Array.prototype.slice.call(i, 0, i.length - 1))) : n[e].apply(this, i)
                } else t.error("Method " + e + " does not exist on jQuery.anyImageComparisonSlider")
            } else t.data(this, "plugin_AnyImageComparisonSlider", new AnyImageComparisonSlider(this, e))
        })
    }
}(jQuery);