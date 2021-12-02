((_gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window)._gsQueue || (_gsScope._gsQueue = [])).push(function() {
        "use strict";

        function t(t, e, i, s) { return i = parseFloat(i) - parseFloat(t), s = parseFloat(s) - parseFloat(e), Math.sqrt(i * i + s * s) }

        function e(t) { return "string" != typeof t && t.nodeType || (t = _gsScope.TweenLite.selector(t)).length && (t = t[0]), t }

        function i(i) {
            if (!i) return 0;
            var s, n, r, o, a, l, h, c, u = (i = e(i)).tagName.toLowerCase();
            if ("path" === u) a = i.style.strokeDasharray, i.style.strokeDasharray = "none", s = i.getTotalLength() || 0, n = i.getBBox(), i.style.strokeDasharray = a;
            else if ("rect" === u) s = 2 * ((n = i.getBBox()).width + n.height);
            else if ("circle" === u) s = 2 * Math.PI * parseFloat(i.getAttribute("r"));
            else if ("line" === u) s = t(i.getAttribute("x1"), i.getAttribute("y1"), i.getAttribute("x2"), i.getAttribute("y2"));
            else if ("polyline" === u || "polygon" === u)
                for (s = 0, a = (r = i.getAttribute("points").split(" "))[0].split(","), "polygon" === u && (r.push(r[0]), -1 === r[0].indexOf(",") && r.push(r[1])), l = 1; l < r.length; l++) 1 === (o = r[l].split(",")).length && (o[1] = r[l++]), 2 === o.length && (s += t(a[0], a[1], o[0], o[1]) || 0, a = o);
            else "ellipse" === u && (h = parseFloat(i.getAttribute("rx")), c = parseFloat(i.getAttribute("ry")), s = Math.PI * (3 * (h + c) - Math.sqrt((3 * h + c) * (h + 3 * c))));
            return s || 0
        }

        function s(t, s) {
            if (!t) return [0, 0];
            t = e(t), s = s || i(t) + 1;
            var n = r(t),
                o = n.strokeDasharray || "",
                a = parseFloat(n.strokeDashoffset),
                l = o.indexOf(",");
            return 0 > l && (l = o.indexOf(" ")), (o = 0 > l ? s : parseFloat(o.substr(0, l)) || 1e-5) > s && (o = s), [Math.max(0, -a), Math.max(0, o - a)]
        }
        var n, r = document.defaultView ? document.defaultView.getComputedStyle : function() {};
        (n = _gsScope._gsDefine.plugin({ propName: "drawSVG", API: 2, version: "0.0.7", global: !0, overwriteProps: ["drawSVG"], init: function(t, e, n) { if (!t.getBBox) return !1; var r, o, a, l, h, c, u, p, d, f = i(t) + 1; return this._style = t.style, !0 === e || "true" === e ? e = "0 100%" : e ? -1 === (e + "").indexOf(" ") && (e = "0 " + e) : e = "0 0", r = s(t, f), l = e, h = f, c = r[0], -1 === (d = l.indexOf(" ")) ? (u = void 0 !== c ? c + "" : l, p = l) : (u = l.substr(0, d), p = l.substr(d + 1)), o = (u = -1 !== u.indexOf("%") ? parseFloat(u) / 100 * h : parseFloat(u)) > (p = -1 !== p.indexOf("%") ? parseFloat(p) / 100 * h : parseFloat(p)) ? [p, u] : [u, p], this._length = f + 10, 0 === r[0] && 0 === o[0] ? (a = Math.max(1e-5, o[1] - f), this._dash = f + a, this._offset = f - r[1] + a, this._addTween(this, "_offset", this._offset, f - o[1] + a, "drawSVG")) : (this._dash = r[1] - r[0] || 1e-6, this._offset = -r[0], this._addTween(this, "_dash", this._dash, o[1] - o[0] || 1e-5, "drawSVG"), this._addTween(this, "_offset", this._offset, -o[0], "drawSVG")), !0 }, set: function(t) { this._firstPT && (this._super.setRatio.call(this, t), this._style.strokeDashoffset = this._offset, this._style.strokeDasharray = 1 === t || 0 === t ? this._offset < .001 && this._length - this._dash <= 10 ? "none" : this._offset === this._dash ? "0px, 999999px" : this._dash + "px," + this._length + "px" : this._dash + "px," + this._length + "px") } })).getLength = i, n.getPosition = s
    }), _gsScope._gsDefine && _gsScope._gsQueue.pop()(),
    function(t, e, i, s) {
        "use strict";

        function n(t, e, i) { return setTimeout(h(t, i), e) }

        function r(t, e, i) { return !!Array.isArray(t) && (o(t, i[e], i), !0) }

        function o(t, e, i) {
            var n;
            if (t)
                if (t.forEach) t.forEach(e, i);
                else if (t.length !== s)
                for (n = 0; n < t.length;) e.call(i, t[n], n, t), n++;
            else
                for (n in t) t.hasOwnProperty(n) && e.call(i, t[n], n, t)
        }

        function a(e, i, s) {
            var n = "DEPRECATED METHOD: " + i + "\n" + s + " AT \n";
            return function() {
                var i = new Error("get-stack-trace"),
                    s = i && i.stack ? i.stack.replace(/^[^\(]+?[\n$]/gm, "").replace(/^\s+at\s+/gm, "").replace(/^Object.<anonymous>\s*\(/gm, "{anonymous}()@") : "Unknown Stack Trace",
                    r = t.console && (t.console.warn || t.console.log);
                return r && r.call(t.console, n, s), e.apply(this, arguments)
            }
        }

        function l(t, e, i) {
            var s, n = e.prototype;
            (s = t.prototype = Object.create(n)).constructor = t, s._super = n, i && Q(s, i)
        }

        function h(t, e) { return function() { return t.apply(e, arguments) } }

        function c(t, e) { return typeof t == tt ? t.apply(e && e[0] || s, e) : t }

        function u(t, e) { return t === s ? e : t }

        function p(t, e, i) { o(m(e), function(e) { t.addEventListener(e, i, !1) }) }

        function d(t, e, i) { o(m(e), function(e) { t.removeEventListener(e, i, !1) }) }

        function f(t, e) {
            for (; t;) {
                if (t == e) return !0;
                t = t.parentNode
            }
            return !1
        }

        function _(t, e) { return t.indexOf(e) > -1 }

        function m(t) { return t.trim().split(/\s+/g) }

        function g(t, e, i) {
            if (t.indexOf && !i) return t.indexOf(e);
            for (var s = 0; s < t.length;) {
                if (i && t[s][i] == e || !i && t[s] === e) return s;
                s++
            }
            return -1
        }

        function v(t) { return Array.prototype.slice.call(t, 0) }

        function y(t, e, i) {
            for (var s = [], n = [], r = 0; r < t.length;) {
                var o = e ? t[r][e] : t[r];
                g(n, o) < 0 && s.push(t[r]), n[r] = o, r++
            }
            return i && (s = e ? s.sort(function(t, i) { return t[e] > i[e] }) : s.sort()), s
        }

        function T(t, e) {
            for (var i, n, r = e[0].toUpperCase() + e.slice(1), o = 0; o < K.length;) {
                if ((n = (i = K[o]) ? i + r : e) in t) return n;
                o++
            }
            return s
        }

        function x(e) { var i = e.ownerDocument || e; return i.defaultView || i.parentWindow || t }

        function w(t, e) {
            var i = this;
            this.manager = t, this.callback = e, this.element = t.element, this.target = t.options.inputTarget, this.domHandler = function(e) { c(t.options.enable, [t]) && i.handler(e) }, this.init()
        }

        function b(t, e, i) {
            var n = i.pointers.length,
                r = i.changedPointers.length,
                o = e & dt && n - r == 0,
                a = e & (_t | mt) && n - r == 0;
            i.isFirst = !!o, i.isFinal = !!a, o && (t.session = {}), i.eventType = e,
                function(t, e) {
                    var i = t.session,
                        n = e.pointers,
                        r = n.length;
                    i.firstInput || (i.firstInput = k(e)), r > 1 && !i.firstMultiple ? i.firstMultiple = k(e) : 1 === r && (i.firstMultiple = !1);
                    var o = i.firstInput,
                        a = i.firstMultiple,
                        l = a ? a.center : o.center,
                        h = e.center = S(n);
                    e.timeStamp = st(), e.deltaTime = e.timeStamp - o.timeStamp, e.angle = A(l, h), e.distance = C(l, h), c = i, u = e, p = u.center, d = c.offsetDelta || {}, _ = c.prevDelta || {}, m = c.prevInput || {}, u.eventType !== dt && m.eventType !== _t || (_ = c.prevDelta = { x: m.deltaX || 0, y: m.deltaY || 0 }, d = c.offsetDelta = { x: p.x, y: p.y }), u.deltaX = _.x + (p.x - d.x), u.deltaY = _.y + (p.y - d.y), e.offsetDirection = O(e.deltaX, e.deltaY);
                    var c, u, p, d, _, m;
                    var g = P(e.deltaTime, e.deltaX, e.deltaY);
                    e.overallVelocityX = g.x, e.overallVelocityY = g.y, e.overallVelocity = it(g.x) > it(g.y) ? g.x : g.y, e.scale = a ? (T = a.pointers, x = n, C(x[0], x[1], Pt) / C(T[0], T[1], Pt)) : 1, e.rotation = a ? (v = a.pointers, y = n, A(y[1], y[0], Pt) + A(v[1], v[0], Pt)) : 0, e.maxPointers = i.prevInput ? e.pointers.length > i.prevInput.maxPointers ? e.pointers.length : i.prevInput.maxPointers : e.pointers.length,
                        function(t, e) {
                            var i, n, r, o, a = t.lastInterval || e,
                                l = e.timeStamp - a.timeStamp;
                            if (e.eventType != mt && (l > pt || a.velocity === s)) {
                                var h = e.deltaX - a.deltaX,
                                    c = e.deltaY - a.deltaY,
                                    u = P(l, h, c);
                                n = u.x, r = u.y, i = it(u.x) > it(u.y) ? u.x : u.y, o = O(h, c), t.lastInterval = e
                            } else i = a.velocity, n = a.velocityX, r = a.velocityY, o = a.direction;
                            e.velocity = i, e.velocityX = n, e.velocityY = r, e.direction = o
                        }(i, e);
                    var v, y;
                    var T, x;
                    var w = t.element;
                    f(e.srcEvent.target, w) && (w = e.srcEvent.target), e.target = w
                }(t, i), t.emit("hammer.input", i), t.recognize(i), t.session.prevInput = i
        }

        function k(t) { for (var e = [], i = 0; i < t.pointers.length;) e[i] = { clientX: et(t.pointers[i].clientX), clientY: et(t.pointers[i].clientY) }, i++; return { timeStamp: st(), pointers: e, center: S(e), deltaX: t.deltaX, deltaY: t.deltaY } }

        function S(t) { var e = t.length; if (1 === e) return { x: et(t[0].clientX), y: et(t[0].clientY) }; for (var i = 0, s = 0, n = 0; e > n;) i += t[n].clientX, s += t[n].clientY, n++; return { x: et(i / e), y: et(s / e) } }

        function P(t, e, i) { return { x: e / t || 0, y: i / t || 0 } }

        function O(t, e) { return t === e ? gt : it(t) >= it(e) ? 0 > t ? vt : yt : 0 > e ? Tt : xt }

        function C(t, e, i) {
            i || (i = St);
            var s = e[i[0]] - t[i[0]],
                n = e[i[1]] - t[i[1]];
            return Math.sqrt(s * s + n * n)
        }

        function A(t, e, i) {
            i || (i = St);
            var s = e[i[0]] - t[i[0]],
                n = e[i[1]] - t[i[1]];
            return 180 * Math.atan2(n, s) / Math.PI
        }

        function R() { this.evEl = Ct, this.evWin = At, this.pressed = !1, w.apply(this, arguments) }

        function M() { this.evEl = Dt, this.evWin = Et, w.apply(this, arguments), this.store = this.manager.session.pointerEvents = [] }

        function D() { this.evTarget = zt, this.evWin = Lt, this.started = !1, w.apply(this, arguments) }

        function E() { this.evTarget = Ft, this.targetIds = {}, w.apply(this, arguments) }

        function $() {
            w.apply(this, arguments);
            var t = h(this.handler, this);
            this.touch = new E(this.manager, t), this.mouse = new R(this.manager, t), this.primaryTouch = null, this.lastTouches = []
        }

        function z(t) {
            var e = t.changedPointers[0];
            if (e.identifier === this.primaryTouch) {
                var i = { x: e.clientX, y: e.clientY };
                this.lastTouches.push(i);
                var s = this.lastTouches;
                setTimeout(function() {
                    var t = s.indexOf(i);
                    t > -1 && s.splice(t, 1)
                }, Nt)
            }
        }

        function L(t, e) { this.manager = t, this.set(e) }

        function I(t) { this.options = Q({}, this.defaults, t || {}), this.id = ot++, this.manager = null, this.options.enable = u(this.options.enable, !0), this.state = Zt, this.simultaneous = {}, this.requireFail = [] }

        function F(t) { return t & ee ? "cancel" : t & Jt ? "end" : t & Kt ? "move" : t & Qt ? "start" : "" }

        function N(t) { return t == xt ? "down" : t == Tt ? "up" : t == vt ? "left" : t == yt ? "right" : "" }

        function j(t, e) { var i = e.manager; return i ? i.get(t) : t }

        function X() { I.apply(this, arguments) }

        function B() { X.apply(this, arguments), this.pX = null, this.pY = null }

        function q() { X.apply(this, arguments) }

        function H() { I.apply(this, arguments), this._timer = null, this._input = null }

        function Y() { X.apply(this, arguments) }

        function U() { X.apply(this, arguments) }

        function W() { I.apply(this, arguments), this.pTime = !1, this.pCenter = !1, this._timer = null, this._input = null, this.count = 0 }

        function V(t, e) { return (e = e || {}).recognizers = u(e.recognizers, V.defaults.preset), new G(t, e) }

        function G(t, e) {
            var i;
            this.options = Q({}, V.defaults, e || {}), this.options.inputTarget = this.options.inputTarget || t, this.handlers = {}, this.session = {}, this.recognizers = [], this.oldCssProps = {}, this.element = t, this.input = new((i = this).options.inputClass || (lt ? M : ht ? E : at ? $ : R))(i, b), this.touchAction = new L(this, this.options.touchAction), Z(this, !0), o(this.options.recognizers, function(t) {
                var e = this.add(new t[0](t[1]));
                t[2] && e.recognizeWith(t[2]), t[3] && e.requireFailure(t[3])
            }, this)
        }

        function Z(t, e) {
            var i, s = t.element;
            s.style && (o(t.options.cssProps, function(n, r) { i = T(s.style, r), e ? (t.oldCssProps[i] = s.style[i], s.style[i] = n) : s.style[i] = t.oldCssProps[i] || "" }), e || (t.oldCssProps = {}))
        }
        var Q, K = ["", "webkit", "Moz", "MS", "ms", "o"],
            J = e.createElement("div"),
            tt = "function",
            et = Math.round,
            it = Math.abs,
            st = Date.now;
        Q = "function" != typeof Object.assign ? function(t) {
            if (t === s || null === t) throw new TypeError("Cannot convert undefined or null to object");
            for (var e = Object(t), i = 1; i < arguments.length; i++) {
                var n = arguments[i];
                if (n !== s && null !== n)
                    for (var r in n) n.hasOwnProperty(r) && (e[r] = n[r])
            }
            return e
        } : Object.assign;
        var nt = a(function(t, e, i) { for (var n = Object.keys(e), r = 0; r < n.length;)(!i || i && t[n[r]] === s) && (t[n[r]] = e[n[r]]), r++; return t }, "extend", "Use `assign`."),
            rt = a(function(t, e) { return nt(t, e, !0) }, "merge", "Use `assign`."),
            ot = 1,
            at = "ontouchstart" in t,
            lt = T(t, "PointerEvent") !== s,
            ht = at && /mobile|tablet|ip(ad|hone|od)|android/i.test(navigator.userAgent),
            ct = "touch",
            ut = "mouse",
            pt = 25,
            dt = 1,
            ft = 2,
            _t = 4,
            mt = 8,
            gt = 1,
            vt = 2,
            yt = 4,
            Tt = 8,
            xt = 16,
            wt = vt | yt,
            bt = Tt | xt,
            kt = wt | bt,
            St = ["x", "y"],
            Pt = ["clientX", "clientY"];
        w.prototype = { handler: function() {}, init: function() { this.evEl && p(this.element, this.evEl, this.domHandler), this.evTarget && p(this.target, this.evTarget, this.domHandler), this.evWin && p(x(this.element), this.evWin, this.domHandler) }, destroy: function() { this.evEl && d(this.element, this.evEl, this.domHandler), this.evTarget && d(this.target, this.evTarget, this.domHandler), this.evWin && d(x(this.element), this.evWin, this.domHandler) } };
        var Ot = { mousedown: dt, mousemove: ft, mouseup: _t },
            Ct = "mousedown",
            At = "mousemove mouseup";
        l(R, w, {
            handler: function(t) {
                var e = Ot[t.type];
                e & dt && 0 === t.button && (this.pressed = !0), e & ft && 1 !== t.which && (e = _t), this.pressed && (e & _t && (this.pressed = !1), this.callback(this.manager, e, { pointers: [t], changedPointers: [t], pointerType: ut, srcEvent: t }))
            }
        });
        var Rt = { pointerdown: dt, pointermove: ft, pointerup: _t, pointercancel: mt, pointerout: mt },
            Mt = { 2: ct, 3: "pen", 4: ut, 5: "kinect" },
            Dt = "pointerdown",
            Et = "pointermove pointerup pointercancel";
        t.MSPointerEvent && !t.PointerEvent && (Dt = "MSPointerDown", Et = "MSPointerMove MSPointerUp MSPointerCancel"), l(M, w, {
            handler: function(t) {
                var e = this.store,
                    i = !1,
                    s = t.type.toLowerCase().replace("ms", ""),
                    n = Rt[s],
                    r = Mt[t.pointerType] || t.pointerType,
                    o = r == ct,
                    a = g(e, t.pointerId, "pointerId");
                n & dt && (0 === t.button || o) ? 0 > a && (e.push(t), a = e.length - 1) : n & (_t | mt) && (i = !0), 0 > a || (e[a] = t, this.callback(this.manager, n, { pointers: e, changedPointers: [t], pointerType: r, srcEvent: t }), i && e.splice(a, 1))
            }
        });
        var $t = { touchstart: dt, touchmove: ft, touchend: _t, touchcancel: mt },
            zt = "touchstart",
            Lt = "touchstart touchmove touchend touchcancel";
        l(D, w, {
            handler: function(t) {
                var e = $t[t.type];
                if (e === dt && (this.started = !0), this.started) {
                    var i = function(t, e) {
                        var i = v(t.touches),
                            s = v(t.changedTouches);
                        return e & (_t | mt) && (i = y(i.concat(s), "identifier", !0)), [i, s]
                    }.call(this, t, e);
                    e & (_t | mt) && i[0].length - i[1].length == 0 && (this.started = !1), this.callback(this.manager, e, { pointers: i[0], changedPointers: i[1], pointerType: ct, srcEvent: t })
                }
            }
        });
        var It = { touchstart: dt, touchmove: ft, touchend: _t, touchcancel: mt },
            Ft = "touchstart touchmove touchend touchcancel";
        l(E, w, {
            handler: function(t) {
                var e = It[t.type],
                    i = function(t, e) {
                        var i = v(t.touches),
                            s = this.targetIds;
                        if (e & (dt | ft) && 1 === i.length) return s[i[0].identifier] = !0, [i, i];
                        var n, r, o = v(t.changedTouches),
                            a = [],
                            l = this.target;
                        if (r = i.filter(function(t) { return f(t.target, l) }), e === dt)
                            for (n = 0; n < r.length;) s[r[n].identifier] = !0, n++;
                        for (n = 0; n < o.length;) s[o[n].identifier] && a.push(o[n]), e & (_t | mt) && delete s[o[n].identifier], n++;
                        return a.length ? [y(r.concat(a), "identifier", !0), a] : void 0
                    }.call(this, t, e);
                i && this.callback(this.manager, e, { pointers: i[0], changedPointers: i[1], pointerType: ct, srcEvent: t })
            }
        });
        var Nt = 2500,
            jt = 25;
        l($, w, {
            handler: function(t, e, i) {
                var s = i.pointerType == ct,
                    n = i.pointerType == ut;
                if (!(n && i.sourceCapabilities && i.sourceCapabilities.firesTouchEvents)) {
                    if (s)(function(t, e) { t & dt ? (this.primaryTouch = e.changedPointers[0].identifier, z.call(this, e)) : t & (_t | mt) && z.call(this, e) }).call(this, e, i);
                    else if (n && function(t) {
                            for (var e = t.srcEvent.clientX, i = t.srcEvent.clientY, s = 0; s < this.lastTouches.length; s++) {
                                var n = this.lastTouches[s],
                                    r = Math.abs(e - n.x),
                                    o = Math.abs(i - n.y);
                                if (jt >= r && jt >= o) return !0
                            }
                            return !1
                        }.call(this, i)) return;
                    this.callback(t, e, i)
                }
            },
            destroy: function() { this.touch.destroy(), this.mouse.destroy() }
        });
        var Xt = T(J.style, "touchAction"),
            Bt = Xt !== s,
            qt = "compute",
            Ht = "auto",
            Yt = "manipulation",
            Ut = "none",
            Wt = "pan-x",
            Vt = "pan-y",
            Gt = function() {
                if (!Bt) return !1;
                var e = {},
                    i = t.CSS && t.CSS.supports;
                return ["auto", "manipulation", "pan-y", "pan-x", "pan-x pan-y", "none"].forEach(function(s) { e[s] = !i || t.CSS.supports("touch-action", s) }), e
            }();
        L.prototype = {
            set: function(t) { t == qt && (t = this.compute()), Bt && this.manager.element.style && Gt[t] && (this.manager.element.style[Xt] = t), this.actions = t.toLowerCase().trim() },
            update: function() { this.set(this.manager.options.touchAction) },
            compute: function() {
                var t = [];
                return o(this.manager.recognizers, function(e) { c(e.options.enable, [e]) && (t = t.concat(e.getTouchAction())) }),
                    function(t) {
                        if (_(t, Ut)) return Ut;
                        var e = _(t, Wt),
                            i = _(t, Vt);
                        return e && i ? Ut : e || i ? e ? Wt : Vt : _(t, Yt) ? Yt : Ht
                    }(t.join(" "))
            },
            preventDefaults: function(t) {
                var e = t.srcEvent,
                    i = t.offsetDirection;
                if (!this.manager.session.prevented) {
                    var s = this.actions,
                        n = _(s, Ut) && !Gt[Ut],
                        r = _(s, Vt) && !Gt[Vt],
                        o = _(s, Wt) && !Gt[Wt];
                    if (n) {
                        var a = 1 === t.pointers.length,
                            l = t.distance < 2,
                            h = t.deltaTime < 250;
                        if (a && l && h) return
                    }
                    return o && r ? void 0 : n || r && i & wt || o && i & bt ? this.preventSrc(e) : void 0
                }
                e.preventDefault()
            },
            preventSrc: function(t) { this.manager.session.prevented = !0, t.preventDefault() }
        };
        var Zt = 1,
            Qt = 2,
            Kt = 4,
            Jt = 8,
            te = Jt,
            ee = 16;
        I.prototype = {
            defaults: {},
            set: function(t) { return Q(this.options, t), this.manager && this.manager.touchAction.update(), this },
            recognizeWith: function(t) { if (r(t, "recognizeWith", this)) return this; var e = this.simultaneous; return e[(t = j(t, this)).id] || (e[t.id] = t, t.recognizeWith(this)), this },
            dropRecognizeWith: function(t) { return r(t, "dropRecognizeWith", this) ? this : (t = j(t, this), delete this.simultaneous[t.id], this) },
            requireFailure: function(t) { if (r(t, "requireFailure", this)) return this; var e = this.requireFail; return -1 === g(e, t = j(t, this)) && (e.push(t), t.requireFailure(this)), this },
            dropRequireFailure: function(t) {
                if (r(t, "dropRequireFailure", this)) return this;
                t = j(t, this);
                var e = g(this.requireFail, t);
                return e > -1 && this.requireFail.splice(e, 1), this
            },
            hasRequireFailures: function() { return this.requireFail.length > 0 },
            canRecognizeWith: function(t) { return !!this.simultaneous[t.id] },
            emit: function(t) {
                function e(e) { i.manager.emit(e, t) }
                var i = this,
                    s = this.state;
                Jt > s && e(i.options.event + F(s)), e(i.options.event), t.additionalEvent && e(t.additionalEvent), s >= Jt && e(i.options.event + F(s))
            },
            tryEmit: function(t) { return this.canEmit() ? this.emit(t) : void(this.state = 32) },
            canEmit: function() {
                for (var t = 0; t < this.requireFail.length;) {
                    if (!(this.requireFail[t].state & (32 | Zt))) return !1;
                    t++
                }
                return !0
            },
            recognize: function(t) { var e = Q({}, t); return c(this.options.enable, [this, e]) ? (this.state & (te | ee | 32) && (this.state = Zt), this.state = this.process(e), void(this.state & (Qt | Kt | Jt | ee) && this.tryEmit(e))) : (this.reset(), void(this.state = 32)) },
            process: function(t) {},
            getTouchAction: function() {},
            reset: function() {}
        }, l(X, I, {
            defaults: { pointers: 1 },
            attrTest: function(t) { var e = this.options.pointers; return 0 === e || t.pointers.length === e },
            process: function(t) {
                var e = this.state,
                    i = t.eventType,
                    s = e & (Qt | Kt),
                    n = this.attrTest(t);
                return s && (i & mt || !n) ? e | ee : s || n ? i & _t ? e | Jt : e & Qt ? e | Kt : Qt : 32
            }
        }), l(B, X, {
            defaults: { event: "pan", threshold: 10, pointers: 1, direction: kt },
            getTouchAction: function() {
                var t = this.options.direction,
                    e = [];
                return t & wt && e.push(Vt), t & bt && e.push(Wt), e
            },
            directionTest: function(t) {
                var e = this.options,
                    i = !0,
                    s = t.distance,
                    n = t.direction,
                    r = t.deltaX,
                    o = t.deltaY;
                return n & e.direction || (e.direction & wt ? (n = 0 === r ? gt : 0 > r ? vt : yt, i = r != this.pX, s = Math.abs(t.deltaX)) : (n = 0 === o ? gt : 0 > o ? Tt : xt, i = o != this.pY, s = Math.abs(t.deltaY))), t.direction = n, i && s > e.threshold && n & e.direction
            },
            attrTest: function(t) { return X.prototype.attrTest.call(this, t) && (this.state & Qt || !(this.state & Qt) && this.directionTest(t)) },
            emit: function(t) {
                this.pX = t.deltaX, this.pY = t.deltaY;
                var e = N(t.direction);
                e && (t.additionalEvent = this.options.event + e), this._super.emit.call(this, t)
            }
        }), l(q, X, {
            defaults: { event: "pinch", threshold: 0, pointers: 2 },
            getTouchAction: function() { return [Ut] },
            attrTest: function(t) { return this._super.attrTest.call(this, t) && (Math.abs(t.scale - 1) > this.options.threshold || this.state & Qt) },
            emit: function(t) {
                if (1 !== t.scale) {
                    var e = t.scale < 1 ? "in" : "out";
                    t.additionalEvent = this.options.event + e
                }
                this._super.emit.call(this, t)
            }
        }), l(H, I, {
            defaults: { event: "press", pointers: 1, time: 251, threshold: 9 },
            getTouchAction: function() { return [Ht] },
            process: function(t) {
                var e = this.options,
                    i = t.pointers.length === e.pointers,
                    s = t.distance < e.threshold,
                    r = t.deltaTime > e.time;
                if (this._input = t, !s || !i || t.eventType & (_t | mt) && !r) this.reset();
                else if (t.eventType & dt) this.reset(), this._timer = n(function() { this.state = te, this.tryEmit() }, e.time, this);
                else if (t.eventType & _t) return te;
                return 32
            },
            reset: function() { clearTimeout(this._timer) },
            emit: function(t) { this.state === te && (t && t.eventType & _t ? this.manager.emit(this.options.event + "up", t) : (this._input.timeStamp = st(), this.manager.emit(this.options.event, this._input))) }
        }), l(Y, X, { defaults: { event: "rotate", threshold: 0, pointers: 2 }, getTouchAction: function() { return [Ut] }, attrTest: function(t) { return this._super.attrTest.call(this, t) && (Math.abs(t.rotation) > this.options.threshold || this.state & Qt) } }), l(U, X, {
            defaults: { event: "swipe", threshold: 10, velocity: .3, direction: wt | bt, pointers: 1 },
            getTouchAction: function() { return B.prototype.getTouchAction.call(this) },
            attrTest: function(t) { var e, i = this.options.direction; return i & (wt | bt) ? e = t.overallVelocity : i & wt ? e = t.overallVelocityX : i & bt && (e = t.overallVelocityY), this._super.attrTest.call(this, t) && i & t.offsetDirection && t.distance > this.options.threshold && t.maxPointers == this.options.pointers && it(e) > this.options.velocity && t.eventType & _t },
            emit: function(t) {
                var e = N(t.offsetDirection);
                e && this.manager.emit(this.options.event + e, t), this.manager.emit(this.options.event, t)
            }
        }), l(W, I, {
            defaults: { event: "tap", pointers: 1, taps: 1, interval: 300, time: 250, threshold: 9, posThreshold: 10 },
            getTouchAction: function() { return [Yt] },
            process: function(t) {
                var e = this.options,
                    i = t.pointers.length === e.pointers,
                    s = t.distance < e.threshold,
                    r = t.deltaTime < e.time;
                if (this.reset(), t.eventType & dt && 0 === this.count) return this.failTimeout();
                if (s && r && i) {
                    if (t.eventType != _t) return this.failTimeout();
                    var o = !this.pTime || t.timeStamp - this.pTime < e.interval,
                        a = !this.pCenter || C(this.pCenter, t.center) < e.posThreshold;
                    if (this.pTime = t.timeStamp, this.pCenter = t.center, a && o ? this.count += 1 : this.count = 1, this._input = t, 0 === this.count % e.taps) return this.hasRequireFailures() ? (this._timer = n(function() { this.state = te, this.tryEmit() }, e.interval, this), Qt) : te
                }
                return 32
            },
            failTimeout: function() { return this._timer = n(function() { this.state = 32 }, this.options.interval, this), 32 },
            reset: function() { clearTimeout(this._timer) },
            emit: function() { this.state == te && (this._input.tapCount = this.count, this.manager.emit(this.options.event, this._input)) }
        }), V.VERSION = "2.0.8", V.defaults = {
            domEvents: !1,
            touchAction: qt,
            enable: !0,
            inputTarget: null,
            inputClass: null,
            preset: [
                [Y, { enable: !1 }],
                [q, { enable: !1 },
                    ["rotate"]
                ],
                [U, { direction: wt }],
                [B, { direction: wt },
                    ["swipe"]
                ],
                [W],
                [W, { event: "doubletap", taps: 2 },
                    ["tap"]
                ],
                [H]
            ],
            cssProps: { userSelect: "none", touchSelect: "none", touchCallout: "none", contentZooming: "none", userDrag: "none", tapHighlightColor: "rgba(0,0,0,0)" }
        };
        G.prototype = {
            set: function(t) { return Q(this.options, t), t.touchAction && this.touchAction.update(), t.inputTarget && (this.input.destroy(), this.input.target = t.inputTarget, this.input.init()), this },
            stop: function(t) { this.session.stopped = t ? 2 : 1 },
            recognize: function(t) {
                var e = this.session;
                if (!e.stopped) {
                    this.touchAction.preventDefaults(t);
                    var i, s = this.recognizers,
                        n = e.curRecognizer;
                    (!n || n && n.state & te) && (n = e.curRecognizer = null);
                    for (var r = 0; r < s.length;) i = s[r], 2 === e.stopped || n && i != n && !i.canRecognizeWith(n) ? i.reset() : i.recognize(t), !n && i.state & (Qt | Kt | Jt) && (n = e.curRecognizer = i), r++
                }
            },
            get: function(t) {
                if (t instanceof I) return t;
                for (var e = this.recognizers, i = 0; i < e.length; i++)
                    if (e[i].options.event == t) return e[i];
                return null
            },
            add: function(t) { if (r(t, "add", this)) return this; var e = this.get(t.options.event); return e && this.remove(e), this.recognizers.push(t), t.manager = this, this.touchAction.update(), t },
            remove: function(t) {
                if (r(t, "remove", this)) return this;
                if (t = this.get(t)) {
                    var e = this.recognizers,
                        i = g(e, t); - 1 !== i && (e.splice(i, 1), this.touchAction.update())
                }
                return this
            },
            on: function(t, e) { if (t !== s && e !== s) { var i = this.handlers; return o(m(t), function(t) { i[t] = i[t] || [], i[t].push(e) }), this } },
            off: function(t, e) { if (t !== s) { var i = this.handlers; return o(m(t), function(t) { e ? i[t] && i[t].splice(g(i[t], e), 1) : delete i[t] }), this } },
            emit: function(t, i) {
                var s, n, r;
                this.options.domEvents && (s = t, n = i, (r = e.createEvent("Event")).initEvent(s, !0, !0), r.gesture = n, n.target.dispatchEvent(r));
                var o = this.handlers[t] && this.handlers[t].slice();
                if (o && o.length) { i.type = t, i.preventDefault = function() { i.srcEvent.preventDefault() }; for (var a = 0; a < o.length;) o[a](i), a++ }
            },
            destroy: function() { this.element && Z(this, !1), this.handlers = {}, this.session = {}, this.input.destroy(), this.element = null }
        }, Q(V, { INPUT_START: dt, INPUT_MOVE: ft, INPUT_END: _t, INPUT_CANCEL: mt, STATE_POSSIBLE: Zt, STATE_BEGAN: Qt, STATE_CHANGED: Kt, STATE_ENDED: Jt, STATE_RECOGNIZED: te, STATE_CANCELLED: ee, STATE_FAILED: 32, DIRECTION_NONE: gt, DIRECTION_LEFT: vt, DIRECTION_RIGHT: yt, DIRECTION_UP: Tt, DIRECTION_DOWN: xt, DIRECTION_HORIZONTAL: wt, DIRECTION_VERTICAL: bt, DIRECTION_ALL: kt, Manager: G, Input: w, TouchAction: L, TouchInput: E, MouseInput: R, PointerEventInput: M, TouchMouseInput: $, SingleTouchInput: D, Recognizer: I, AttrRecognizer: X, Tap: W, Pan: B, Swipe: U, Pinch: q, Rotate: Y, Press: H, on: p, off: d, each: o, merge: rt, extend: nt, assign: Q, inherit: l, bindFn: h, prefixed: T }), (void 0 !== t ? t : "undefined" != typeof self ? self : {}).Hammer = V, "function" == typeof define && define.amd ? define(function() { return V }) : "undefined" != typeof module && module.exports ? module.exports = V : t.Hammer = V
    }(window, document),
    function(t) {
        var e, i;
        e = function() {
            function e(e, i) {
                var s;
                this.options = i, this.$element = t(e), this.didInit = !1, s = this, this.$element.on("click.slickLightbox", this.options.itemSelector, function(e) { var i, n; if (e.preventDefault(), (i = t(this)).blur(), "function" != typeof s.options.shouldOpen || s.options.shouldOpen(s, i, e)) return n = s.filterOutSlickClones(s.$element.find(s.options.itemSelector)), s.init(n.index(i)) })
            }
            return e.prototype.init = function(t) { return this.didInit = !0, this.detectIE(), this.createModal(), this.bindEvents(), this.initSlick(t), this.open() }, e.prototype.createModalItems = function() { var e, i, s, n, r, o, a; return n = this.options.lazyPlaceholder || "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7", s = function(t, e, i) { return '<div class="slick-lightbox-slick-item">\n  <div class="slick-lightbox-slick-item-inner">\n    <img class="slick-lightbox-slick-img" ' + (!0 === i ? ' data-lazy="' + t + '" src="' + n + '" ' : ' src="' + t + '" ') + " />\n    " + e + "\n  </div>\n</div>" }, this.options.images ? o = t.map(this.options.images, function(t) { return s(t, this.options.lazy) }) : (e = this.filterOutSlickClones(this.$element.find(this.options.itemSelector)), r = e.length, a = this, i = function(t, e) { var i, n, o; return n = { index: e, length: r }, i = a.getElementCaption(t, n), o = a.getElementSrc(t), s(o, i, a.options.lazy) }, o = t.map(e, i)), o }, e.prototype.createModal = function() { var e, i; return i = this.createModalItems(), e = '<div class="slick-lightbox slick-lightbox-hide-init' + (this.isIE ? " slick-lightbox-ie" : "") + '" style="background: ' + this.options.background + ';">\n  <div class="slick-lightbox-inner">\n    <div class="slick-lightbox-slick slick-caption-' + this.options.captionPosition + '">' + i.join("") + "</div>\n  <div>\n<div>", this.$modalElement = t(e), this.$parts = {}, this.$parts.closeButton = t(this.options.layouts.closeButton), this.$modalElement.find(".slick-lightbox-inner").append(this.$parts.closeButton), t("body").append(this.$modalElement) }, e.prototype.initSlick = function(e) { var i; return i = { initialSlide: e }, this.options.lazy && (i.lazyLoad = "ondemand"), null != this.options.slick ? "function" == typeof this.options.slick ? this.slick = this.options.slick(this.$modalElement) : this.slick = this.$modalElement.find(".slick-lightbox-slick").slick(t.extend({}, this.options.slick, i)) : this.slick = this.$modalElement.find(".slick-lightbox-slick").slick(i), this.$modalElement.trigger("init.slickLightbox") }, e.prototype.open = function() { var t; return this.options.useHistoryApi && this.writeHistory(), this.$element.trigger("show.slickLightbox"), setTimeout((t = this, function() { return t.$element.trigger("shown.slickLightbox") }), this.getTransitionDuration()), this.$modalElement.removeClass("slick-lightbox-hide-init") }, e.prototype.close = function() { var t; return this.$element.trigger("hide.slickLightbox"), setTimeout((t = this, function() { return t.$element.trigger("hidden.slickLightbox") }), this.getTransitionDuration()), this.$modalElement.addClass("slick-lightbox-hide"), this.destroy() }, e.prototype.bindEvents = function() { var e, i, s, n, r, o, a, l; if (i = this, e = function() { var t; return t = i.$modalElement.find(".slick-lightbox-inner").height(), i.$modalElement.find(".slick-lightbox-slick-item").height(t), i.$modalElement.find(".slick-lightbox-slick-img, .slick-lightbox-slick-item-inner").css("max-height", Math.round(i.options.imageMaxHeight * t)) }, t(window).on("orientationchange.slickLightbox resize.slickLightbox", e), this.options.useHistoryApi && t(window).on("popstate.slickLightbox", (s = this, function() { return s.close() })), this.$modalElement.on("init.slickLightbox", e), this.$modalElement.on("destroy.slickLightbox", (n = this, function() { return n.destroy() })), this.$element.on("destroy.slickLightbox", (r = this, function() { return r.destroy(!0) })), this.$parts.closeButton.on("click.slickLightbox touchstart.slickLightbox", (o = this, function(t) { return t.preventDefault(), o.close() })), (this.options.closeOnEscape || this.options.navigateByKeyboard) && t(document).on("keydown.slickLightbox", (a = this, function(t) { var e; if (e = t.keyCode ? t.keyCode : t.which, a.options.navigateByKeyboard && (37 === e ? a.slideSlick("left") : 39 === e && a.slideSlick("right")), a.options.closeOnEscape && 27 === e) return a.close() })), this.options.closeOnBackdropClick) return this.$modalElement.on("click.slickLightbox touchstart.slickLightbox", ".slick-lightbox-slick-img", function(t) { return t.stopPropagation() }), this.$modalElement.on("click.slickLightbox", ".slick-lightbox-slick-item", (l = this, function(t) { return t.preventDefault(), l.close() })) }, e.prototype.slideSlick = function(t) { return "left" === t ? this.slick.slick("slickPrev") : this.slick.slick("slickNext") }, e.prototype.detectIE = function() { if (this.isIE = !1, /MSIE (\d+\.\d+);/.test(navigator.userAgent) && new Number(RegExp.$1) < 9) return this.isIE = !0 }, e.prototype.getElementCaption = function(e, i) {
                return this.options.caption ? '<span class="slick-lightbox-slick-caption">' + function() {
                    switch (typeof this.options.caption) {
                        case "function":
                            return this.options.caption(e, i);
                        case "string":
                            return t(e).data(this.options.caption)
                    }
                }.call(this) + "</span>" : ""
            }, e.prototype.getElementSrc = function(e) {
                switch (typeof this.options.src) {
                    case "function":
                        return this.options.src(e);
                    case "string":
                        return t(e).attr(this.options.src);
                    default:
                        return e.href
                }
            }, e.prototype.unbindEvents = function() { return t(window).off(".slickLightbox"), t(document).off(".slickLightbox"), this.$modalElement.off(".slickLightbox") }, e.prototype.destroy = function(t) { var e; if (null == t && (t = !1), this.didInit && (this.unbindEvents(), setTimeout((e = this, function() { return e.$modalElement.remove() }), this.options.destroyTimeout)), t) return this.$element.off(".slickLightbox"), this.$element.off(".slickLightbox", this.options.itemSelector) }, e.prototype.destroyPrevious = function() { return t("body").children(".slick-lightbox").trigger("destroy.slickLightbox") }, e.prototype.getTransitionDuration = function() { var t; return this.transitionDuration ? this.transitionDuration : (t = this.$modalElement.css("transition-duration"), this.transitionDuration = void 0 === t ? 500 : t.indexOf("ms") > -1 ? parseFloat(t) : 1e3 * parseFloat(t)) }, e.prototype.writeHistory = function() { return "undefined" != typeof history && null !== history && "function" == typeof history.pushState ? history.pushState(null, null, "") : void 0 }, e.prototype.filterOutSlickClones = function(e) { return this.$element.hasClass("slick-slider") ? e.filter(function() { var e; return !(e = t(this)).hasClass("slick-cloned") && 0 === e.parents(".slick-cloned").length }) : e }, e
        }(), i = { background: "rgba(0,0,0,.8)", closeOnEscape: !0, closeOnBackdropClick: !0, destroyTimeout: 500, itemSelector: "a", navigateByKeyboard: !0, src: !1, caption: !1, captionPosition: "dynamic", images: !1, slick: {}, useHistoryApi: !1, layouts: { closeButton: '<button type="button" class="slick-lightbox-close"></button>' }, shouldOpen: null, imageMaxHeight: .9, lazy: !1 }, t.fn.slickLightbox = function(s) { return s = t.extend({}, i, s), t(this).each(function() { return this.slickLightbox = new e(this, s) }), this }, t.fn.unslickLightbox = function() { return t(this).trigger("destroy.slickLightbox").each(function() { return this.slickLightbox = null }) }
    }(jQuery),
    function(t) { "use strict"; "function" == typeof define && define.amd ? define(["jquery"], t) : "undefined" != typeof exports ? module.exports = t(require("jquery")) : t(jQuery) }(function(t) {
        "use strict";
        var e = window.Slick || {};
        (e = function() {
            var e = 0;
            return function(i, s) {
                var n, r = this;
                r.defaults = { accessibility: !0, adaptiveHeight: !1, appendArrows: t(i), appendDots: t(i), arrows: !0, asNavFor: null, prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>', nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>', autoplay: !1, autoplaySpeed: 3e3, centerMode: !1, centerPadding: "50px", cssEase: "ease", customPaging: function(e, i) { return t('<button type="button" data-role="none" role="button" tabindex="0" />').text(i + 1) }, dots: !1, dotsClass: "slick-dots", draggable: !0, easing: "linear", edgeFriction: .35, fade: !1, focusOnSelect: !1, infinite: !0, initialSlide: 0, lazyLoad: "ondemand", mobileFirst: !1, pauseOnHover: !0, pauseOnFocus: !0, pauseOnDotsHover: !1, respondTo: "window", responsive: null, rows: 1, rtl: !1, slide: "", slidesPerRow: 1, slidesToShow: 1, slidesToScroll: 1, speed: 500, swipe: !0, swipeToSlide: !1, touchMove: !0, touchThreshold: 5, useCSS: !0, useTransform: !0, variableWidth: !1, vertical: !1, verticalSwiping: !1, waitForAnimate: !0, zIndex: 1e3 }, r.initials = { animating: !1, dragging: !1, autoPlayTimer: null, currentDirection: 0, currentLeft: null, currentSlide: 0, direction: 1, $dots: null, listWidth: null, listHeight: null, loadIndex: 0, $nextArrow: null, $prevArrow: null, slideCount: null, slideWidth: null, $slideTrack: null, $slides: null, sliding: !1, slideOffset: 0, swipeLeft: null, $list: null, touchObject: {}, transformsEnabled: !1, unslicked: !1 }, t.extend(r, r.initials), r.activeBreakpoint = null, r.animType = null, r.animProp = null, r.breakpoints = [], r.breakpointSettings = [], r.cssTransitions = !1, r.focussed = !1, r.interrupted = !1, r.hidden = "hidden", r.paused = !0, r.positionProp = null, r.respondTo = null, r.rowCount = 1, r.shouldClick = !0, r.$slider = t(i), r.$slidesCache = null, r.transformType = null, r.transitionType = null, r.visibilityChange = "visibilitychange", r.windowWidth = 0, r.windowTimer = null, n = t(i).data("slick") || {}, r.options = t.extend({}, r.defaults, s, n), r.currentSlide = r.options.initialSlide, r.originalSettings = r.options, void 0 !== document.mozHidden ? (r.hidden = "mozHidden", r.visibilityChange = "mozvisibilitychange") : void 0 !== document.webkitHidden && (r.hidden = "webkitHidden", r.visibilityChange = "webkitvisibilitychange"), r.autoPlay = t.proxy(r.autoPlay, r), r.autoPlayClear = t.proxy(r.autoPlayClear, r), r.autoPlayIterator = t.proxy(r.autoPlayIterator, r), r.changeSlide = t.proxy(r.changeSlide, r), r.clickHandler = t.proxy(r.clickHandler, r), r.selectHandler = t.proxy(r.selectHandler, r), r.setPosition = t.proxy(r.setPosition, r), r.swipeHandler = t.proxy(r.swipeHandler, r), r.dragHandler = t.proxy(r.dragHandler, r), r.keyHandler = t.proxy(r.keyHandler, r), r.instanceUid = e++, r.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, r.registerBreakpoints(), r.init(!0)
            }
        }()).prototype.activateADA = function() { this.$slideTrack.find(".slick-active").attr({ "aria-hidden": "false" }).find("a, input, button, select").attr({ tabindex: "0" }) }, e.prototype.addSlide = e.prototype.slickAdd = function(e, i, s) {
            var n = this;
            if ("boolean" == typeof i) s = i, i = null;
            else if (i < 0 || i >= n.slideCount) return !1;
            n.unload(), "number" == typeof i ? 0 === i && 0 === n.$slides.length ? t(e).appendTo(n.$slideTrack) : s ? t(e).insertBefore(n.$slides.eq(i)) : t(e).insertAfter(n.$slides.eq(i)) : !0 === s ? t(e).prependTo(n.$slideTrack) : t(e).appendTo(n.$slideTrack), n.$slides = n.$slideTrack.children(this.options.slide), n.$slideTrack.children(this.options.slide).detach(), n.$slideTrack.append(n.$slides), n.$slides.each(function(e, i) { t(i).attr("data-slick-index", e) }), n.$slidesCache = n.$slides, n.reinit()
        }, e.prototype.animateHeight = function() {
            var t = this;
            if (1 === t.options.slidesToShow && !0 === t.options.adaptiveHeight && !1 === t.options.vertical) {
                var e = t.$slides.eq(t.currentSlide).outerHeight(!0);
                t.$list.animate({ height: e }, t.options.speed)
            }
        }, e.prototype.animateSlide = function(e, i) {
            var s = {},
                n = this;
            n.animateHeight(), !0 === n.options.rtl && !1 === n.options.vertical && (e = -e), !1 === n.transformsEnabled ? !1 === n.options.vertical ? n.$slideTrack.animate({ left: e }, n.options.speed, n.options.easing, i) : n.$slideTrack.animate({ top: e }, n.options.speed, n.options.easing, i) : !1 === n.cssTransitions ? (!0 === n.options.rtl && (n.currentLeft = -n.currentLeft), t({ animStart: n.currentLeft }).animate({ animStart: e }, { duration: n.options.speed, easing: n.options.easing, step: function(t) { t = Math.ceil(t), !1 === n.options.vertical ? (s[n.animType] = "translate(" + t + "px, 0px)", n.$slideTrack.css(s)) : (s[n.animType] = "translate(0px," + t + "px)", n.$slideTrack.css(s)) }, complete: function() { i && i.call() } })) : (n.applyTransition(), e = Math.ceil(e), !1 === n.options.vertical ? s[n.animType] = "translate3d(" + e + "px, 0px, 0px)" : s[n.animType] = "translate3d(0px," + e + "px, 0px)", n.$slideTrack.css(s), i && setTimeout(function() { n.disableTransition(), i.call() }, n.options.speed))
        }, e.prototype.getNavTarget = function() { var e = this.options.asNavFor; return e && null !== e && (e = t(e).not(this.$slider)), e }, e.prototype.asNavFor = function(e) {
            var i = this.getNavTarget();
            null !== i && "object" == typeof i && i.each(function() {
                var i = t(this).slick("getSlick");
                i.unslicked || i.slideHandler(e, !0)
            })
        }, e.prototype.applyTransition = function(t) {
            var e = this,
                i = {};
            !1 === e.options.fade ? i[e.transitionType] = e.transformType + " " + e.options.speed + "ms " + e.options.cssEase : i[e.transitionType] = "opacity " + e.options.speed + "ms " + e.options.cssEase, !1 === e.options.fade ? e.$slideTrack.css(i) : e.$slides.eq(t).css(i)
        }, e.prototype.autoPlay = function() {
            var t = this;
            t.autoPlayClear(), t.slideCount > t.options.slidesToShow && (t.autoPlayTimer = setInterval(t.autoPlayIterator, t.options.autoplaySpeed))
        }, e.prototype.autoPlayClear = function() { this.autoPlayTimer && clearInterval(this.autoPlayTimer) }, e.prototype.autoPlayIterator = function() {
            var t = this,
                e = t.currentSlide + t.options.slidesToScroll;
            t.paused || t.interrupted || t.focussed || (!1 === t.options.infinite && (1 === t.direction && t.currentSlide + 1 === t.slideCount - 1 ? t.direction = 0 : 0 === t.direction && (e = t.currentSlide - t.options.slidesToScroll, t.currentSlide - 1 == 0 && (t.direction = 1))), t.slideHandler(e))
        }, e.prototype.buildArrows = function() { var e = this;!0 === e.options.arrows && (e.$prevArrow = t(e.options.prevArrow).addClass("slick-arrow"), e.$nextArrow = t(e.options.nextArrow).addClass("slick-arrow"), e.slideCount > e.options.slidesToShow ? (e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.prependTo(e.options.appendArrows), e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.appendTo(e.options.appendArrows), !0 !== e.options.infinite && e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({ "aria-disabled": "true", tabindex: "-1" })) }, e.prototype.buildDots = function() {
            var e, i, s = this;
            if (!0 === s.options.dots && s.slideCount > s.options.slidesToShow) {
                for (s.$slider.addClass("slick-dotted"), i = t("<ul />").addClass(s.options.dotsClass), e = 0; e <= s.getDotCount(); e += 1) i.append(t("<li />").append(s.options.customPaging.call(this, s, e)));
                s.$dots = i.appendTo(s.options.appendDots), s.$dots.find("li").first().addClass("slick-active").attr("aria-hidden", "false")
            }
        }, e.prototype.buildOut = function() {
            var e = this;
            e.$slides = e.$slider.children(e.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), e.slideCount = e.$slides.length, e.$slides.each(function(e, i) { t(i).attr("data-slick-index", e).data("originalStyling", t(i).attr("style") || "") }), e.$slider.addClass("slick-slider"), e.$slideTrack = 0 === e.slideCount ? t('<div class="slick-track"/>').appendTo(e.$slider) : e.$slides.wrapAll('<div class="slick-track"/>').parent(), e.$list = e.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent(), e.$slideTrack.css("opacity", 0), !0 !== e.options.centerMode && !0 !== e.options.swipeToSlide || (e.options.slidesToScroll = 1), t("img[data-lazy]", e.$slider).not("[src]").addClass("slick-loading"), e.setupInfinite(), e.buildArrows(), e.buildDots(), e.updateDots(), e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0), !0 === e.options.draggable && e.$list.addClass("draggable")
        }, e.prototype.buildRows = function() {
            var t, e, i, s, n, r, o, a = this;
            if (s = document.createDocumentFragment(), r = a.$slider.children(), a.options.rows > 1) {
                for (o = a.options.slidesPerRow * a.options.rows, n = Math.ceil(r.length / o), t = 0; t < n; t++) {
                    var l = document.createElement("div");
                    for (e = 0; e < a.options.rows; e++) {
                        var h = document.createElement("div");
                        for (i = 0; i < a.options.slidesPerRow; i++) {
                            var c = t * o + (e * a.options.slidesPerRow + i);
                            r.get(c) && h.appendChild(r.get(c))
                        }
                        l.appendChild(h)
                    }
                    s.appendChild(l)
                }
                a.$slider.empty().append(s), a.$slider.children().children().children().css({ width: 100 / a.options.slidesPerRow + "%", display: "inline-block" })
            }
        }, e.prototype.checkResponsive = function(e, i) {
            var s, n, r, o = this,
                a = !1,
                l = o.$slider.width(),
                h = window.innerWidth || t(window).width();
            if ("window" === o.respondTo ? r = h : "slider" === o.respondTo ? r = l : "min" === o.respondTo && (r = Math.min(h, l)), o.options.responsive && o.options.responsive.length && null !== o.options.responsive) {
                for (s in n = null, o.breakpoints) o.breakpoints.hasOwnProperty(s) && (!1 === o.originalSettings.mobileFirst ? r < o.breakpoints[s] && (n = o.breakpoints[s]) : r > o.breakpoints[s] && (n = o.breakpoints[s]));
                null !== n ? null !== o.activeBreakpoint ? (n !== o.activeBreakpoint || i) && (o.activeBreakpoint = n, "unslick" === o.breakpointSettings[n] ? o.unslick(n) : (o.options = t.extend({}, o.originalSettings, o.breakpointSettings[n]), !0 === e && (o.currentSlide = o.options.initialSlide), o.refresh(e)), a = n) : (o.activeBreakpoint = n, "unslick" === o.breakpointSettings[n] ? o.unslick(n) : (o.options = t.extend({}, o.originalSettings, o.breakpointSettings[n]), !0 === e && (o.currentSlide = o.options.initialSlide), o.refresh(e)), a = n) : null !== o.activeBreakpoint && (o.activeBreakpoint = null, o.options = o.originalSettings, !0 === e && (o.currentSlide = o.options.initialSlide), o.refresh(e), a = n), e || !1 === a || o.$slider.trigger("breakpoint", [o, a])
            }
        }, e.prototype.changeSlide = function(e, i) {
            var s, n, r = this,
                o = t(e.currentTarget);
            switch (o.is("a") && e.preventDefault(), o.is("li") || (o = o.closest("li")), s = r.slideCount % r.options.slidesToScroll != 0 ? 0 : (r.slideCount - r.currentSlide) % r.options.slidesToScroll, e.data.message) {
                case "previous":
                    n = 0 === s ? r.options.slidesToScroll : r.options.slidesToShow - s, r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide - n, !1, i);
                    break;
                case "next":
                    n = 0 === s ? r.options.slidesToScroll : s, r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide + n, !1, i);
                    break;
                case "index":
                    var a = 0 === e.data.index ? 0 : e.data.index || o.index() * r.options.slidesToScroll;
                    r.slideHandler(r.checkNavigable(a), !1, i), o.children().trigger("focus");
                    break;
                default:
                    return
            }
        }, e.prototype.checkNavigable = function(t) {
            var e, i;
            if (i = 0, t > (e = this.getNavigableIndexes())[e.length - 1]) t = e[e.length - 1];
            else
                for (var s in e) {
                    if (t < e[s]) { t = i; break }
                    i = e[s]
                }
            return t
        }, e.prototype.cleanUpEvents = function() {
            var e = this;
            e.options.dots && null !== e.$dots && t("li", e.$dots).off("click.slick", e.changeSlide).off("mouseenter.slick", t.proxy(e.interrupt, e, !0)).off("mouseleave.slick", t.proxy(e.interrupt, e, !1)), e.$slider.off("focus.slick blur.slick"), !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow && e.$prevArrow.off("click.slick", e.changeSlide), e.$nextArrow && e.$nextArrow.off("click.slick", e.changeSlide)), e.$list.off("touchstart.slick mousedown.slick", e.swipeHandler), e.$list.off("touchmove.slick mousemove.slick", e.swipeHandler), e.$list.off("touchend.slick mouseup.slick", e.swipeHandler), e.$list.off("touchcancel.slick mouseleave.slick", e.swipeHandler), e.$list.off("click.slick", e.clickHandler), t(document).off(e.visibilityChange, e.visibility), e.cleanUpSlideEvents(), !0 === e.options.accessibility && e.$list.off("keydown.slick", e.keyHandler), !0 === e.options.focusOnSelect && t(e.$slideTrack).children().off("click.slick", e.selectHandler), t(window).off("orientationchange.slick.slick-" + e.instanceUid, e.orientationChange), t(window).off("resize.slick.slick-" + e.instanceUid, e.resize), t("[draggable!=true]", e.$slideTrack).off("dragstart", e.preventDefault), t(window).off("load.slick.slick-" + e.instanceUid, e.setPosition)
        }, e.prototype.cleanUpSlideEvents = function() {
            var e = this;
            e.$list.off("mouseenter.slick", t.proxy(e.interrupt, e, !0)), e.$list.off("mouseleave.slick", t.proxy(e.interrupt, e, !1))
        }, e.prototype.cleanUpRows = function() {
            var t;
            this.options.rows > 1 && ((t = this.$slides.children().children()).removeAttr("style"), this.$slider.empty().append(t))
        }, e.prototype.clickHandler = function(t) {!1 === this.shouldClick && (t.stopImmediatePropagation(), t.stopPropagation(), t.preventDefault()) }, e.prototype.destroy = function(e) {
            var i = this;
            i.autoPlayClear(), i.touchObject = {}, i.cleanUpEvents(), t(".slick-cloned", i.$slider).detach(), i.$dots && i.$dots.remove(), i.$prevArrow && i.$prevArrow.length && (i.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), i.htmlExpr.test(i.options.prevArrow) && i.$prevArrow.remove()), i.$nextArrow && i.$nextArrow.length && (i.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), i.htmlExpr.test(i.options.nextArrow) && i.$nextArrow.remove()), i.$slides && (i.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function() { t(this).attr("style", t(this).data("originalStyling")) }), i.$slideTrack.children(this.options.slide).detach(), i.$slideTrack.detach(), i.$list.detach(), i.$slider.append(i.$slides)), i.cleanUpRows(), i.$slider.removeClass("slick-slider"), i.$slider.removeClass("slick-initialized"), i.$slider.removeClass("slick-dotted"), i.unslicked = !0, e || i.$slider.trigger("destroy", [i])
        }, e.prototype.disableTransition = function(t) {
            var e = {};
            e[this.transitionType] = "", !1 === this.options.fade ? this.$slideTrack.css(e) : this.$slides.eq(t).css(e)
        }, e.prototype.fadeSlide = function(t, e) { var i = this;!1 === i.cssTransitions ? (i.$slides.eq(t).css({ zIndex: i.options.zIndex }), i.$slides.eq(t).animate({ opacity: 1 }, i.options.speed, i.options.easing, e)) : (i.applyTransition(t), i.$slides.eq(t).css({ opacity: 1, zIndex: i.options.zIndex }), e && setTimeout(function() { i.disableTransition(t), e.call() }, i.options.speed)) }, e.prototype.fadeSlideOut = function(t) { var e = this;!1 === e.cssTransitions ? e.$slides.eq(t).animate({ opacity: 0, zIndex: e.options.zIndex - 2 }, e.options.speed, e.options.easing) : (e.applyTransition(t), e.$slides.eq(t).css({ opacity: 0, zIndex: e.options.zIndex - 2 })) }, e.prototype.filterSlides = e.prototype.slickFilter = function(t) {
            var e = this;
            null !== t && (e.$slidesCache = e.$slides, e.unload(), e.$slideTrack.children(this.options.slide).detach(), e.$slidesCache.filter(t).appendTo(e.$slideTrack), e.reinit())
        }, e.prototype.focusHandler = function() {
            var e = this;
            e.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*:not(.slick-arrow)", function(i) {
                i.stopImmediatePropagation();
                var s = t(this);
                setTimeout(function() { e.options.pauseOnFocus && (e.focussed = s.is(":focus"), e.autoPlay()) }, 0)
            })
        }, e.prototype.getCurrent = e.prototype.slickCurrentSlide = function() { return this.currentSlide }, e.prototype.getDotCount = function() {
            var t = this,
                e = 0,
                i = 0,
                s = 0;
            if (!0 === t.options.infinite)
                for (; e < t.slideCount;) ++s, e = i + t.options.slidesToScroll, i += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow;
            else if (!0 === t.options.centerMode) s = t.slideCount;
            else if (t.options.asNavFor)
                for (; e < t.slideCount;) ++s, e = i + t.options.slidesToScroll, i += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow;
            else s = 1 + Math.ceil((t.slideCount - t.options.slidesToShow) / t.options.slidesToScroll);
            return s - 1
        }, e.prototype.getLeft = function(t) {
            var e, i, s, n = this,
                r = 0;
            return n.slideOffset = 0, i = n.$slides.first().outerHeight(!0), !0 === n.options.infinite ? (n.slideCount > n.options.slidesToShow && (n.slideOffset = n.slideWidth * n.options.slidesToShow * -1, r = i * n.options.slidesToShow * -1), n.slideCount % n.options.slidesToScroll != 0 && t + n.options.slidesToScroll > n.slideCount && n.slideCount > n.options.slidesToShow && (t > n.slideCount ? (n.slideOffset = (n.options.slidesToShow - (t - n.slideCount)) * n.slideWidth * -1, r = (n.options.slidesToShow - (t - n.slideCount)) * i * -1) : (n.slideOffset = n.slideCount % n.options.slidesToScroll * n.slideWidth * -1, r = n.slideCount % n.options.slidesToScroll * i * -1))) : t + n.options.slidesToShow > n.slideCount && (n.slideOffset = (t + n.options.slidesToShow - n.slideCount) * n.slideWidth, r = (t + n.options.slidesToShow - n.slideCount) * i), n.slideCount <= n.options.slidesToShow && (n.slideOffset = 0, r = 0), !0 === n.options.centerMode && n.slideCount <= n.options.slidesToShow ? n.slideOffset = n.slideWidth * Math.floor(n.options.slidesToShow) / 2 - n.slideWidth * n.slideCount / 2 : !0 === n.options.centerMode && !0 === n.options.infinite ? n.slideOffset += n.slideWidth * Math.floor(n.options.slidesToShow / 2) - n.slideWidth : !0 === n.options.centerMode && (n.slideOffset = 0, n.slideOffset += n.slideWidth * Math.floor(n.options.slidesToShow / 2)), e = !1 === n.options.vertical ? t * n.slideWidth * -1 + n.slideOffset : t * i * -1 + r, !0 === n.options.variableWidth && (s = n.slideCount <= n.options.slidesToShow || !1 === n.options.infinite ? n.$slideTrack.children(".slick-slide").eq(t) : n.$slideTrack.children(".slick-slide").eq(t + n.options.slidesToShow), e = !0 === n.options.rtl ? s[0] ? -1 * (n.$slideTrack.width() - s[0].offsetLeft - s.width()) : 0 : s[0] ? -1 * s[0].offsetLeft : 0, !0 === n.options.centerMode && (s = n.slideCount <= n.options.slidesToShow || !1 === n.options.infinite ? n.$slideTrack.children(".slick-slide").eq(t) : n.$slideTrack.children(".slick-slide").eq(t + n.options.slidesToShow + 1), e = !0 === n.options.rtl ? s[0] ? -1 * (n.$slideTrack.width() - s[0].offsetLeft - s.width()) : 0 : s[0] ? -1 * s[0].offsetLeft : 0, e += (n.$list.width() - s.outerWidth()) / 2)), e
        }, e.prototype.getOption = e.prototype.slickGetOption = function(t) { return this.options[t] }, e.prototype.getNavigableIndexes = function() {
            var t, e = this,
                i = 0,
                s = 0,
                n = [];
            for (!1 === e.options.infinite ? t = e.slideCount : (i = -1 * e.options.slidesToScroll, s = -1 * e.options.slidesToScroll, t = 2 * e.slideCount); i < t;) n.push(i), i = s + e.options.slidesToScroll, s += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
            return n
        }, e.prototype.getSlick = function() { return this }, e.prototype.getSlideCount = function() { var e, i, s = this; return i = !0 === s.options.centerMode ? s.slideWidth * Math.floor(s.options.slidesToShow / 2) : 0, !0 === s.options.swipeToSlide ? (s.$slideTrack.find(".slick-slide").each(function(n, r) { if (r.offsetLeft - i + t(r).outerWidth() / 2 > -1 * s.swipeLeft) return e = r, !1 }), Math.abs(t(e).attr("data-slick-index") - s.currentSlide) || 1) : s.options.slidesToScroll }, e.prototype.goTo = e.prototype.slickGoTo = function(t, e) { this.changeSlide({ data: { message: "index", index: parseInt(t) } }, e) }, e.prototype.init = function(e) {
            var i = this;
            t(i.$slider).hasClass("slick-initialized") || (t(i.$slider).addClass("slick-initialized"), i.buildRows(), i.buildOut(), i.setProps(), i.startLoad(), i.loadSlider(), i.initializeEvents(), i.updateArrows(), i.updateDots(), i.checkResponsive(!0), i.focusHandler()), e && i.$slider.trigger("init", [i]), !0 === i.options.accessibility && i.initADA(), i.options.autoplay && (i.paused = !1, i.autoPlay())
        }, e.prototype.initADA = function() {
            var e = this;
            e.$slides.add(e.$slideTrack.find(".slick-cloned")).attr({ "aria-hidden": "true", tabindex: "-1" }).find("a, input, button, select").attr({ tabindex: "-1" }), e.$slideTrack.attr("role", "listbox"), e.$slides.not(e.$slideTrack.find(".slick-cloned")).each(function(i) { t(this).attr("role", "option"); var s = e.options.centerMode ? i : Math.floor(i / e.options.slidesToShow);!0 === e.options.dots && t(this).attr("aria-describedby", "slick-slide" + e.instanceUid + s) }), null !== e.$dots && e.$dots.attr("role", "tablist").find("li").each(function(i) { t(this).attr({ role: "presentation", "aria-selected": "false", "aria-controls": "navigation" + e.instanceUid + i, id: "slick-slide" + e.instanceUid + i }) }).first().attr("aria-selected", "true").end().find("button").attr("role", "button").end().closest("div").attr("role", "toolbar"), e.activateADA()
        }, e.prototype.initArrowEvents = function() { var t = this;!0 === t.options.arrows && t.slideCount > t.options.slidesToShow && (t.$prevArrow.off("click.slick").on("click.slick", { message: "previous" }, t.changeSlide), t.$nextArrow.off("click.slick").on("click.slick", { message: "next" }, t.changeSlide)) }, e.prototype.initDotEvents = function() { var e = this;!0 === e.options.dots && e.slideCount > e.options.slidesToShow && t("li", e.$dots).on("click.slick", { message: "index" }, e.changeSlide), !0 === e.options.dots && !0 === e.options.pauseOnDotsHover && t("li", e.$dots).on("mouseenter.slick", t.proxy(e.interrupt, e, !0)).on("mouseleave.slick", t.proxy(e.interrupt, e, !1)) }, e.prototype.initSlideEvents = function() {
            var e = this;
            e.options.pauseOnHover && (e.$list.on("mouseenter.slick", t.proxy(e.interrupt, e, !0)), e.$list.on("mouseleave.slick", t.proxy(e.interrupt, e, !1)))
        }, e.prototype.initializeEvents = function() {
            var e = this;
            e.initArrowEvents(), e.initDotEvents(), e.initSlideEvents(), e.$list.on("touchstart.slick mousedown.slick", { action: "start" }, e.swipeHandler), e.$list.on("touchmove.slick mousemove.slick", { action: "move" }, e.swipeHandler), e.$list.on("touchend.slick mouseup.slick", { action: "end" }, e.swipeHandler), e.$list.on("touchcancel.slick mouseleave.slick", { action: "end" }, e.swipeHandler), e.$list.on("click.slick", e.clickHandler), t(document).on(e.visibilityChange, t.proxy(e.visibility, e)), !0 === e.options.accessibility && e.$list.on("keydown.slick", e.keyHandler), !0 === e.options.focusOnSelect && t(e.$slideTrack).children().on("click.slick", e.selectHandler), t(window).on("orientationchange.slick.slick-" + e.instanceUid, t.proxy(e.orientationChange, e)), t(window).on("resize.slick.slick-" + e.instanceUid, t.proxy(e.resize, e)), t("[draggable!=true]", e.$slideTrack).on("dragstart", e.preventDefault), t(window).on("load.slick.slick-" + e.instanceUid, e.setPosition), t(document).ready(e.setPosition)
        }, e.prototype.initUI = function() { var t = this;!0 === t.options.arrows && t.slideCount > t.options.slidesToShow && (t.$prevArrow.show(), t.$nextArrow.show()), !0 === t.options.dots && t.slideCount > t.options.slidesToShow && t.$dots.show() }, e.prototype.keyHandler = function(t) {
            var e = this;
            t.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === t.keyCode && !0 === e.options.accessibility ? e.changeSlide({ data: { message: !0 === e.options.rtl ? "next" : "previous" } }) : 39 === t.keyCode && !0 === e.options.accessibility && e.changeSlide({ data: { message: !0 === e.options.rtl ? "previous" : "next" } }))
        }, e.prototype.lazyLoad = function() {
            var e, i, s, n = this;

            function r(e) {
                t("img[data-lazy]", e).each(function() {
                    var e = t(this),
                        i = t(this).attr("data-lazy"),
                        s = t(this).attr("data-srcset"),
                        r = t(this).attr("data-sizes") || n.$slider.attr("data-sizes"),
                        o = document.createElement("img");
                    o.onload = function() { e.animate({ opacity: 0 }, 100, function() { s && (e.attr("srcset", s), r && e.attr("sizes", r)), e.attr("src", i).animate({ opacity: 1 }, 200, function() { e.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading") }), n.$slider.trigger("lazyLoaded", [n, e, i]) }) }, o.onerror = function() { e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), n.$slider.trigger("lazyLoadError", [n, e, i]) }, o.src = i
                })
            }
            if (!0 === n.options.centerMode ? !0 === n.options.infinite ? s = (i = n.currentSlide + (n.options.slidesToShow / 2 + 1)) + n.options.slidesToShow + 2 : (i = Math.max(0, n.currentSlide - (n.options.slidesToShow / 2 + 1)), s = n.options.slidesToShow / 2 + 1 + 2 + n.currentSlide) : (i = n.options.infinite ? n.options.slidesToShow + n.currentSlide : n.currentSlide, s = Math.ceil(i + n.options.slidesToShow), !0 === n.options.fade && (i > 0 && i--, s <= n.slideCount && s++)), e = n.$slider.find(".slick-slide").slice(i, s), "anticipated" === n.options.lazyLoad)
                for (var o = i - 1, a = s, l = n.$slider.find(".slick-slide"), h = 0; h < n.options.slidesToScroll; h++) o < 0 && (o = n.slideCount - 1), e = (e = e.add(l.eq(o))).add(l.eq(a)), o--, a++;
            r(e), n.slideCount <= n.options.slidesToShow ? r(n.$slider.find(".slick-slide")) : n.currentSlide >= n.slideCount - n.options.slidesToShow ? r(n.$slider.find(".slick-cloned").slice(0, n.options.slidesToShow)) : 0 === n.currentSlide && r(n.$slider.find(".slick-cloned").slice(-1 * n.options.slidesToShow))
        }, e.prototype.loadSlider = function() {
            var t = this;
            t.setPosition(), t.$slideTrack.css({ opacity: 1 }), t.$slider.removeClass("slick-loading"), t.initUI(), "progressive" === t.options.lazyLoad && t.progressiveLazyLoad()
        }, e.prototype.next = e.prototype.slickNext = function() { this.changeSlide({ data: { message: "next" } }) }, e.prototype.orientationChange = function() { this.checkResponsive(), this.setPosition() }, e.prototype.pause = e.prototype.slickPause = function() { this.autoPlayClear(), this.paused = !0 }, e.prototype.play = e.prototype.slickPlay = function() {
            var t = this;
            t.autoPlay(), t.options.autoplay = !0, t.paused = !1, t.focussed = !1, t.interrupted = !1
        }, e.prototype.postSlide = function(t) {
            var e = this;
            e.unslicked || (e.$slider.trigger("afterChange", [e, t]), e.animating = !1, e.setPosition(), e.swipeLeft = null, e.options.autoplay && e.autoPlay(), !0 === e.options.accessibility && e.initADA())
        }, e.prototype.prev = e.prototype.slickPrev = function() { this.changeSlide({ data: { message: "previous" } }) }, e.prototype.preventDefault = function(t) { t.preventDefault() }, e.prototype.progressiveLazyLoad = function(e) {
            e = e || 1;
            var i, s, n, r, o, a = this,
                l = t("img[data-lazy]", a.$slider);
            l.length ? (i = l.first(), s = i.attr("data-lazy"), n = i.attr("data-srcset"), r = i.attr("data-sizes") || a.$slider.attr("data-sizes"), (o = document.createElement("img")).onload = function() { n && (i.attr("srcset", n), r && i.attr("sizes", r)), i.attr("src", s).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"), !0 === a.options.adaptiveHeight && a.setPosition(), a.$slider.trigger("lazyLoaded", [a, i, s]), a.progressiveLazyLoad() }, o.onerror = function() { e < 3 ? setTimeout(function() { a.progressiveLazyLoad(e + 1) }, 500) : (i.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), a.$slider.trigger("lazyLoadError", [a, i, s]), a.progressiveLazyLoad()) }, o.src = s) : a.$slider.trigger("allImagesLoaded", [a])
        }, e.prototype.refresh = function(e) {
            var i, s, n = this;
            s = n.slideCount - n.options.slidesToShow, !n.options.infinite && n.currentSlide > s && (n.currentSlide = s), n.slideCount <= n.options.slidesToShow && (n.currentSlide = 0), i = n.currentSlide, n.destroy(!0), t.extend(n, n.initials, { currentSlide: i }), n.init(), e || n.changeSlide({ data: { message: "index", index: i } }, !1)
        }, e.prototype.registerBreakpoints = function() {
            var e, i, s, n = this,
                r = n.options.responsive || null;
            if ("array" === t.type(r) && r.length) {
                for (e in n.respondTo = n.options.respondTo || "window", r)
                    if (s = n.breakpoints.length - 1, r.hasOwnProperty(e)) {
                        for (i = r[e].breakpoint; s >= 0;) n.breakpoints[s] && n.breakpoints[s] === i && n.breakpoints.splice(s, 1), s--;
                        n.breakpoints.push(i), n.breakpointSettings[i] = r[e].settings
                    }
                n.breakpoints.sort(function(t, e) { return n.options.mobileFirst ? t - e : e - t })
            }
        }, e.prototype.reinit = function() {
            var e = this;
            e.$slides = e.$slideTrack.children(e.options.slide).addClass("slick-slide"), e.slideCount = e.$slides.length, e.currentSlide >= e.slideCount && 0 !== e.currentSlide && (e.currentSlide = e.currentSlide - e.options.slidesToScroll), e.slideCount <= e.options.slidesToShow && (e.currentSlide = 0), e.registerBreakpoints(), e.setProps(), e.setupInfinite(), e.buildArrows(), e.updateArrows(), e.initArrowEvents(), e.buildDots(), e.updateDots(), e.initDotEvents(), e.cleanUpSlideEvents(), e.initSlideEvents(), e.checkResponsive(!1, !0), !0 === e.options.focusOnSelect && t(e.$slideTrack).children().on("click.slick", e.selectHandler), e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0), e.setPosition(), e.focusHandler(), e.paused = !e.options.autoplay, e.autoPlay(), e.$slider.trigger("reInit", [e])
        }, e.prototype.resize = function() {
            var e = this;
            t(window).width() !== e.windowWidth && (clearTimeout(e.windowDelay), e.windowDelay = window.setTimeout(function() { e.windowWidth = t(window).width(), e.checkResponsive(), e.unslicked || e.setPosition() }, 50))
        }, e.prototype.removeSlide = e.prototype.slickRemove = function(t, e, i) {
            var s = this;
            if (t = "boolean" == typeof t ? !0 === (e = t) ? 0 : s.slideCount - 1 : !0 === e ? --t : t, s.slideCount < 1 || t < 0 || t > s.slideCount - 1) return !1;
            s.unload(), !0 === i ? s.$slideTrack.children().remove() : s.$slideTrack.children(this.options.slide).eq(t).remove(), s.$slides = s.$slideTrack.children(this.options.slide), s.$slideTrack.children(this.options.slide).detach(), s.$slideTrack.append(s.$slides), s.$slidesCache = s.$slides, s.reinit()
        }, e.prototype.setCSS = function(t) {
            var e, i, s = this,
                n = {};
            !0 === s.options.rtl && (t = -t), e = "left" == s.positionProp ? Math.ceil(t) + "px" : "0px", i = "top" == s.positionProp ? Math.ceil(t) + "px" : "0px", n[s.positionProp] = t, !1 === s.transformsEnabled ? s.$slideTrack.css(n) : (n = {}, !1 === s.cssTransitions ? (n[s.animType] = "translate(" + e + ", " + i + ")", s.$slideTrack.css(n)) : (n[s.animType] = "translate3d(" + e + ", " + i + ", 0px)", s.$slideTrack.css(n)))
        }, e.prototype.setDimensions = function() { var t = this;!1 === t.options.vertical ? !0 === t.options.centerMode && t.$list.css({ padding: "0px " + t.options.centerPadding }) : (t.$list.height(t.$slides.first().outerHeight(!0) * t.options.slidesToShow), !0 === t.options.centerMode && t.$list.css({ padding: t.options.centerPadding + " 0px" })), t.listWidth = t.$list.width(), t.listHeight = t.$list.height(), !1 === t.options.vertical && !1 === t.options.variableWidth ? (t.slideWidth = Math.ceil(t.listWidth / t.options.slidesToShow), t.$slideTrack.width(Math.ceil(t.slideWidth * t.$slideTrack.children(".slick-slide").length))) : !0 === t.options.variableWidth ? t.$slideTrack.width(5e3 * t.slideCount) : (t.slideWidth = Math.ceil(t.listWidth), t.$slideTrack.height(Math.ceil(t.$slides.first().outerHeight(!0) * t.$slideTrack.children(".slick-slide").length))); var e = t.$slides.first().outerWidth(!0) - t.$slides.first().width();!1 === t.options.variableWidth && t.$slideTrack.children(".slick-slide").width(t.slideWidth - e) }, e.prototype.setFade = function() {
            var e, i = this;
            i.$slides.each(function(s, n) { e = i.slideWidth * s * -1, !0 === i.options.rtl ? t(n).css({ position: "relative", right: e, top: 0, zIndex: i.options.zIndex - 2, opacity: 0 }) : t(n).css({ position: "relative", left: e, top: 0, zIndex: i.options.zIndex - 2, opacity: 0 }) }), i.$slides.eq(i.currentSlide).css({ zIndex: i.options.zIndex - 1, opacity: 1 })
        }, e.prototype.setHeight = function() {
            var t = this;
            if (1 === t.options.slidesToShow && !0 === t.options.adaptiveHeight && !1 === t.options.vertical) {
                var e = t.$slides.eq(t.currentSlide).outerHeight(!0);
                t.$list.css("height", e)
            }
        }, e.prototype.setOption = e.prototype.slickSetOption = function() {
            var e, i, s, n, r, o = this,
                a = !1;
            if ("object" === t.type(arguments[0]) ? (s = arguments[0], a = arguments[1], r = "multiple") : "string" === t.type(arguments[0]) && (s = arguments[0], n = arguments[1], a = arguments[2], "responsive" === arguments[0] && "array" === t.type(arguments[1]) ? r = "responsive" : void 0 !== arguments[1] && (r = "single")), "single" === r) o.options[s] = n;
            else if ("multiple" === r) t.each(s, function(t, e) { o.options[t] = e });
            else if ("responsive" === r)
                for (i in n)
                    if ("array" !== t.type(o.options.responsive)) o.options.responsive = [n[i]];
                    else {
                        for (e = o.options.responsive.length - 1; e >= 0;) o.options.responsive[e].breakpoint === n[i].breakpoint && o.options.responsive.splice(e, 1), e--;
                        o.options.responsive.push(n[i])
                    }
            a && (o.unload(), o.reinit())
        }, e.prototype.setPosition = function() {
            var t = this;
            t.setDimensions(), t.setHeight(), !1 === t.options.fade ? t.setCSS(t.getLeft(t.currentSlide)) : t.setFade(), t.$slider.trigger("setPosition", [t])
        }, e.prototype.setProps = function() {
            var t = this,
                e = document.body.style;
            t.positionProp = !0 === t.options.vertical ? "top" : "left", "top" === t.positionProp ? t.$slider.addClass("slick-vertical") : t.$slider.removeClass("slick-vertical"), void 0 === e.WebkitTransition && void 0 === e.MozTransition && void 0 === e.msTransition || !0 === t.options.useCSS && (t.cssTransitions = !0), t.options.fade && ("number" == typeof t.options.zIndex ? t.options.zIndex < 3 && (t.options.zIndex = 3) : t.options.zIndex = t.defaults.zIndex), void 0 !== e.OTransform && (t.animType = "OTransform", t.transformType = "-o-transform", t.transitionType = "OTransition", void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (t.animType = !1)), void 0 !== e.MozTransform && (t.animType = "MozTransform", t.transformType = "-moz-transform", t.transitionType = "MozTransition", void 0 === e.perspectiveProperty && void 0 === e.MozPerspective && (t.animType = !1)), void 0 !== e.webkitTransform && (t.animType = "webkitTransform", t.transformType = "-webkit-transform", t.transitionType = "webkitTransition", void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (t.animType = !1)), void 0 !== e.msTransform && (t.animType = "msTransform", t.transformType = "-ms-transform", t.transitionType = "msTransition", void 0 === e.msTransform && (t.animType = !1)), void 0 !== e.transform && !1 !== t.animType && (t.animType = "transform", t.transformType = "transform", t.transitionType = "transition"), t.transformsEnabled = t.options.useTransform && null !== t.animType && !1 !== t.animType
        }, e.prototype.setSlideClasses = function(t) {
            var e, i, s, n, r = this;
            i = r.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), r.$slides.eq(t).addClass("slick-current"), !0 === r.options.centerMode ? (e = Math.floor(r.options.slidesToShow / 2), !0 === r.options.infinite && (t >= e && t <= r.slideCount - 1 - e ? r.$slides.slice(t - e, t + e + 1).addClass("slick-active").attr("aria-hidden", "false") : (s = r.options.slidesToShow + t, i.slice(s - e + 1, s + e + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === t ? i.eq(i.length - 1 - r.options.slidesToShow).addClass("slick-center") : t === r.slideCount - 1 && i.eq(r.options.slidesToShow).addClass("slick-center")), r.$slides.eq(t).addClass("slick-center")) : t >= 0 && t <= r.slideCount - r.options.slidesToShow ? r.$slides.slice(t, t + r.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : i.length <= r.options.slidesToShow ? i.addClass("slick-active").attr("aria-hidden", "false") : (n = r.slideCount % r.options.slidesToShow, s = !0 === r.options.infinite ? r.options.slidesToShow + t : t, r.options.slidesToShow == r.options.slidesToScroll && r.slideCount - t < r.options.slidesToShow ? i.slice(s - (r.options.slidesToShow - n), s + n).addClass("slick-active").attr("aria-hidden", "false") : i.slice(s, s + r.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false")), "ondemand" !== r.options.lazyLoad && "anticipated" !== r.options.lazyLoad || r.lazyLoad()
        }, e.prototype.setupInfinite = function() {
            var e, i, s, n = this;
            if (!0 === n.options.fade && (n.options.centerMode = !1), !0 === n.options.infinite && !1 === n.options.fade && (i = null, n.slideCount > n.options.slidesToShow)) {
                for (s = !0 === n.options.centerMode ? n.options.slidesToShow + 1 : n.options.slidesToShow, e = n.slideCount; e > n.slideCount - s; e -= 1) i = e - 1, t(n.$slides[i]).clone(!0).attr("id", "").attr("data-slick-index", i - n.slideCount).prependTo(n.$slideTrack).addClass("slick-cloned");
                for (e = 0; e < s; e += 1) i = e, t(n.$slides[i]).clone(!0).attr("id", "").attr("data-slick-index", i + n.slideCount).appendTo(n.$slideTrack).addClass("slick-cloned");
                n.$slideTrack.find(".slick-cloned").find("[id]").each(function() { t(this).attr("id", "") })
            }
        }, e.prototype.interrupt = function(t) { t || this.autoPlay(), this.interrupted = t }, e.prototype.selectHandler = function(e) {
            var i = this,
                s = t(e.target).is(".slick-slide") ? t(e.target) : t(e.target).parents(".slick-slide"),
                n = parseInt(s.attr("data-slick-index"));
            if (n || (n = 0), i.slideCount <= i.options.slidesToShow) return i.setSlideClasses(n), void i.asNavFor(n);
            i.slideHandler(n)
        }, e.prototype.slideHandler = function(e, i, s) {
            var n, r, o, a, l, h, c = this;
            if (i = i || !1, (!0 !== c.animating || !0 !== c.options.waitForAnimate) && !(!0 === c.options.fade && c.currentSlide === e || c.slideCount <= c.options.slidesToShow))
                if (!1 === i && c.asNavFor(e), n = e, l = c.getLeft(n), a = c.getLeft(c.currentSlide), c.currentLeft = null === c.swipeLeft ? a : c.swipeLeft, !1 === c.options.infinite && !1 === c.options.centerMode && (e < 0 || e > c.getDotCount() * c.options.slidesToScroll)) !1 === c.options.fade && (n = c.currentSlide, !0 !== s ? c.animateSlide(a, function() { c.postSlide(n) }) : c.postSlide(n));
                else if (!1 === c.options.infinite && !0 === c.options.centerMode && (e < 0 || e > c.slideCount - c.options.slidesToScroll)) !1 === c.options.fade && (n = c.currentSlide, !0 !== s ? c.animateSlide(a, function() { c.postSlide(n) }) : c.postSlide(n));
            else {
                if (c.options.autoplay && clearInterval(c.autoPlayTimer), r = n < 0 ? c.slideCount % c.options.slidesToScroll != 0 ? c.slideCount - c.slideCount % c.options.slidesToScroll : c.slideCount + n : n >= c.slideCount ? c.slideCount % c.options.slidesToScroll != 0 ? 0 : n - c.slideCount : n, c.animating = !0, c.$slider.trigger("beforeChange", [c, c.currentSlide, r]), o = c.currentSlide, c.currentSlide = r, c.setSlideClasses(c.currentSlide), c.options.asNavFor && null !== (h = c.getNavTarget()) && "object" == typeof h && h.each(function() {
                        var e = t(this).slick("getSlick");
                        e.slideCount <= e.options.slidesToShow && e.setSlideClasses(c.currentSlide)
                    }), c.updateDots(), c.updateArrows(), !0 === c.options.fade) return !0 !== s ? (c.fadeSlideOut(o), c.fadeSlide(r, function() { c.postSlide(r) })) : c.postSlide(r), void c.animateHeight();
                !0 !== s ? c.animateSlide(l, function() { c.postSlide(r) }) : c.postSlide(r)
            }
        }, e.prototype.startLoad = function() { var t = this;!0 === t.options.arrows && t.slideCount > t.options.slidesToShow && (t.$prevArrow.hide(), t.$nextArrow.hide()), !0 === t.options.dots && t.slideCount > t.options.slidesToShow && t.$dots.hide(), t.$slider.addClass("slick-loading") }, e.prototype.swipeDirection = function() { var t, e, i, s, n = this; return t = n.touchObject.startX - n.touchObject.curX, e = n.touchObject.startY - n.touchObject.curY, i = Math.atan2(e, t), (s = Math.round(180 * i / Math.PI)) < 0 && (s = 360 - Math.abs(s)), s <= 45 && s >= 0 ? !1 === n.options.rtl ? "left" : "right" : s <= 360 && s >= 315 ? !1 === n.options.rtl ? "left" : "right" : s >= 135 && s <= 225 ? !1 === n.options.rtl ? "right" : "left" : !0 === n.options.verticalSwiping ? s >= 35 && s <= 135 ? "down" : "up" : "vertical" }, e.prototype.swipeEnd = function(t) {
            var e, i, s = this;
            if (s.dragging = !1, s.interrupted = !1, s.shouldClick = !(s.touchObject.swipeLength > 10), s.$list.removeClass("is-dragging"), void 0 === s.touchObject.curX) return !1;
            if (!0 === s.touchObject.edgeHit && s.$slider.trigger("edge", [s, s.swipeDirection()]), s.touchObject.swipeLength >= s.touchObject.minSwipe) {
                switch (i = s.swipeDirection()) {
                    case "left":
                    case "down":
                        e = s.options.swipeToSlide ? s.checkNavigable(s.currentSlide + s.getSlideCount()) : s.currentSlide + s.getSlideCount(), s.currentDirection = 0;
                        break;
                    case "right":
                    case "up":
                        e = s.options.swipeToSlide ? s.checkNavigable(s.currentSlide - s.getSlideCount()) : s.currentSlide - s.getSlideCount(), s.currentDirection = 1
                }
                "vertical" != i && (s.slideHandler(e), s.touchObject = {}, s.$slider.trigger("swipe", [s, i]))
            } else s.touchObject.startX !== s.touchObject.curX && (s.slideHandler(s.currentSlide), s.touchObject = {})
        }, e.prototype.swipeHandler = function(t) {
            var e = this;
            if (!(!1 === e.options.swipe || "ontouchend" in document && !1 === e.options.swipe || !1 === e.options.draggable && -1 !== t.type.indexOf("mouse"))) switch (e.touchObject.fingerCount = t.originalEvent && void 0 !== t.originalEvent.touches ? t.originalEvent.touches.length : 1, e.touchObject.minSwipe = e.listWidth / e.options.touchThreshold, !0 === e.options.verticalSwiping && (e.touchObject.minSwipe = e.listHeight / e.options.touchThreshold), t.data.action) {
                case "start":
                    e.swipeStart(t);
                    break;
                case "move":
                    e.swipeMove(t);
                    break;
                case "end":
                    e.swipeEnd(t)
            }
        }, e.prototype.swipeMove = function(t) { var e, i, s, n, r, o = this; return r = void 0 !== t.originalEvent ? t.originalEvent.touches : null, !(!o.dragging || r && 1 !== r.length) && (e = o.getLeft(o.currentSlide), o.touchObject.curX = void 0 !== r ? r[0].pageX : t.clientX, o.touchObject.curY = void 0 !== r ? r[0].pageY : t.clientY, o.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(o.touchObject.curX - o.touchObject.startX, 2))), !0 === o.options.verticalSwiping && (o.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(o.touchObject.curY - o.touchObject.startY, 2)))), "vertical" !== (i = o.swipeDirection()) ? (void 0 !== t.originalEvent && o.touchObject.swipeLength > 4 && t.preventDefault(), n = (!1 === o.options.rtl ? 1 : -1) * (o.touchObject.curX > o.touchObject.startX ? 1 : -1), !0 === o.options.verticalSwiping && (n = o.touchObject.curY > o.touchObject.startY ? 1 : -1), s = o.touchObject.swipeLength, o.touchObject.edgeHit = !1, !1 === o.options.infinite && (0 === o.currentSlide && "right" === i || o.currentSlide >= o.getDotCount() && "left" === i) && (s = o.touchObject.swipeLength * o.options.edgeFriction, o.touchObject.edgeHit = !0), !1 === o.options.vertical ? o.swipeLeft = e + s * n : o.swipeLeft = e + s * (o.$list.height() / o.listWidth) * n, !0 === o.options.verticalSwiping && (o.swipeLeft = e + s * n), !0 !== o.options.fade && !1 !== o.options.touchMove && (!0 === o.animating ? (o.swipeLeft = null, !1) : void o.setCSS(o.swipeLeft))) : void 0) }, e.prototype.swipeStart = function(t) {
            var e, i = this;
            if (i.interrupted = !0, 1 !== i.touchObject.fingerCount || i.slideCount <= i.options.slidesToShow) return i.touchObject = {}, !1;
            void 0 !== t.originalEvent && void 0 !== t.originalEvent.touches && (e = t.originalEvent.touches[0]), i.touchObject.startX = i.touchObject.curX = void 0 !== e ? e.pageX : t.clientX, i.touchObject.startY = i.touchObject.curY = void 0 !== e ? e.pageY : t.clientY, i.dragging = !0, i.$list.addClass("is-dragging")
        }, e.prototype.unfilterSlides = e.prototype.slickUnfilter = function() {
            var t = this;
            null !== t.$slidesCache && (t.unload(), t.$slideTrack.children(this.options.slide).detach(), t.$slidesCache.appendTo(t.$slideTrack), t.reinit())
        }, e.prototype.unload = function() {
            var e = this;
            t(".slick-cloned", e.$slider).remove(), e.$dots && e.$dots.remove(), e.$prevArrow && e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.remove(), e.$nextArrow && e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.remove(), e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
        }, e.prototype.unslick = function(t) { this.$slider.trigger("unslick", [this, t]), this.destroy() }, e.prototype.updateArrows = function() {
            var t = this;
            Math.floor(t.options.slidesToShow / 2), !0 === t.options.arrows && t.slideCount > t.options.slidesToShow && !t.options.infinite && (t.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), t.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === t.currentSlide ? (t.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), t.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : t.currentSlide >= t.slideCount - t.options.slidesToShow && !1 === t.options.centerMode ? (t.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), t.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : t.currentSlide >= t.slideCount - 1 && !0 === t.options.centerMode && (t.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), t.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
        }, e.prototype.updateDots = function() {
            var t = this;
            null !== t.$dots && (t.$dots.find("li").removeClass("slick-active").attr("aria-hidden", "true"), t.$dots.find("li").eq(Math.floor(t.currentSlide / t.options.slidesToScroll)).addClass("slick-active").attr("aria-hidden", "false"))
        }, e.prototype.visibility = function() { this.options.autoplay && (document[this.hidden] ? this.interrupted = !0 : this.interrupted = !1) }, t.fn.slick = function() {
            var t, i, s = this,
                n = arguments[0],
                r = Array.prototype.slice.call(arguments, 1),
                o = s.length;
            for (t = 0; t < o; t++)
                if ("object" == typeof n || void 0 === n ? s[t].slick = new e(s[t], n) : i = s[t].slick[n].apply(s[t].slick, r), void 0 !== i) return i;
            return s
        }
    }), ((_gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window)._gsQueue || (_gsScope._gsQueue = [])).push(function() {
        "use strict";
        var t, e, i, s, n, r, o, a, l, h, c, u, p, d, f, _, m;
        _gsScope._gsDefine("TweenMax", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function(t, e, i) {
            var s = function(t) {
                    var e, i = [],
                        s = t.length;
                    for (e = 0; e !== s; i.push(t[e++]));
                    return i
                },
                n = function(t, e, i) {
                    var s, n, r = t.cycle;
                    for (s in r) n = r[s], t[s] = "function" == typeof n ? n(i, e[i]) : n[i % n.length];
                    delete t.cycle
                },
                r = function(t, e, s) { i.call(this, t, e, s), this._cycle = 0, this._yoyo = !0 === this.vars.yoyo || !!this.vars.yoyoEase, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._repeat && this._uncache(!0), this.render = r.prototype.render },
                o = 1e-10,
                a = i._internals,
                l = a.isSelector,
                h = a.isArray,
                c = r.prototype = i.to({}, .1, {}),
                u = [];
            r.version = "1.20.3", c.constructor = r, c.kill()._gc = !1, r.killTweensOf = r.killDelayedCallsTo = i.killTweensOf, r.getTweensOf = i.getTweensOf, r.lagSmoothing = i.lagSmoothing, r.ticker = i.ticker, r.render = i.render, c.invalidate = function() { return this._yoyo = !0 === this.vars.yoyo || !!this.vars.yoyoEase, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._yoyoEase = null, this._uncache(!0), i.prototype.invalidate.call(this) }, c.updateTo = function(t, e) {
                var s, n = this.ratio,
                    r = this.vars.immediateRender || t.immediateRender;
                for (s in e && this._startTime < this._timeline._time && (this._startTime = this._timeline._time, this._uncache(!1), this._gc ? this._enabled(!0, !1) : this._timeline.insert(this, this._startTime - this._delay)), t) this.vars[s] = t[s];
                if (this._initted || r)
                    if (e) this._initted = !1, r && this.render(0, !0, !0);
                    else if (this._gc && this._enabled(!0, !1), this._notifyPluginsOfEnabled && this._firstPT && i._onPluginEvent("_onDisable", this), this._time / this._duration > .998) {
                    var o = this._totalTime;
                    this.render(0, !0, !1), this._initted = !1, this.render(o, !0, !1)
                } else if (this._initted = !1, this._init(), this._time > 0 || r)
                    for (var a, l = 1 / (1 - n), h = this._firstPT; h;) a = h.s + h.c, h.c *= l, h.s = a - h.c, h = h._next;
                return this
            }, c.render = function(t, e, s) {
                this._initted || 0 === this._duration && this.vars.repeat && this.invalidate();
                var n, r, l, h, c, u, p, d, f, _ = this._dirty ? this.totalDuration() : this._totalDuration,
                    m = this._time,
                    g = this._totalTime,
                    v = this._cycle,
                    y = this._duration,
                    T = this._rawPrevTime;
                if (t >= _ - 1e-7 && t >= 0 ? (this._totalTime = _, this._cycle = this._repeat, this._yoyo && 0 != (1 & this._cycle) ? (this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0) : (this._time = y, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1), this._reversed || (n = !0, r = "onComplete", s = s || this._timeline.autoRemoveChildren), 0 === y && (this._initted || !this.vars.lazy || s) && (this._startTime === this._timeline._duration && (t = 0), (0 > T || 0 >= t && t >= -1e-7 || T === o && "isPause" !== this.data) && T !== t && (s = !0, T > o && (r = "onReverseComplete")), this._rawPrevTime = d = !e || t || T === t ? t : o)) : 1e-7 > t ? (this._totalTime = this._time = this._cycle = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== g || 0 === y && T > 0) && (r = "onReverseComplete", n = this._reversed), 0 > t && (this._active = !1, 0 === y && (this._initted || !this.vars.lazy || s) && (T >= 0 && (s = !0), this._rawPrevTime = d = !e || t || T === t ? t : o)), this._initted || (s = !0)) : (this._totalTime = this._time = t, 0 !== this._repeat && (h = y + this._repeatDelay, this._cycle = this._totalTime / h >> 0, 0 !== this._cycle && this._cycle === this._totalTime / h && t >= g && this._cycle--, this._time = this._totalTime - this._cycle * h, this._yoyo && 0 != (1 & this._cycle) && (this._time = y - this._time, (f = this._yoyoEase || this.vars.yoyoEase) && (this._yoyoEase || (!0 !== f || this._initted ? this._yoyoEase = f = !0 === f ? this._ease : f instanceof Ease ? f : Ease.map[f] : (f = this.vars.ease, this._yoyoEase = f = f ? f instanceof Ease ? f : "function" == typeof f ? new Ease(f, this.vars.easeParams) : Ease.map[f] || i.defaultEase : i.defaultEase)), this.ratio = f ? 1 - f.getRatio((y - this._time) / y) : 0)), this._time > y ? this._time = y : this._time < 0 && (this._time = 0)), this._easeType && !f ? (c = this._time / y, (1 === (u = this._easeType) || 3 === u && c >= .5) && (c = 1 - c), 3 === u && (c *= 2), 1 === (p = this._easePower) ? c *= c : 2 === p ? c *= c * c : 3 === p ? c *= c * c * c : 4 === p && (c *= c * c * c * c), 1 === u ? this.ratio = 1 - c : 2 === u ? this.ratio = c : this._time / y < .5 ? this.ratio = c / 2 : this.ratio = 1 - c / 2) : f || (this.ratio = this._ease.getRatio(this._time / y))), m !== this._time || s || v !== this._cycle) {
                    if (!this._initted) { if (this._init(), !this._initted || this._gc) return; if (!s && this._firstPT && (!1 !== this.vars.lazy && this._duration || this.vars.lazy && !this._duration)) return this._time = m, this._totalTime = g, this._rawPrevTime = T, this._cycle = v, a.lazyTweens.push(this), void(this._lazy = [t, e]);!this._time || n || f ? n && this._ease._calcEnd && !f && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1)) : this.ratio = this._ease.getRatio(this._time / y) }
                    for (!1 !== this._lazy && (this._lazy = !1), this._active || !this._paused && this._time !== m && t >= 0 && (this._active = !0), 0 === g && (2 === this._initted && t > 0 && this._init(), this._startAt && (t >= 0 ? this._startAt.render(t, !0, s) : r || (r = "_dummyGS")), this.vars.onStart && (0 !== this._totalTime || 0 === y) && (e || this._callback("onStart"))), l = this._firstPT; l;) l.f ? l.t[l.p](l.c * this.ratio + l.s) : l.t[l.p] = l.c * this.ratio + l.s, l = l._next;
                    this._onUpdate && (0 > t && this._startAt && this._startTime && this._startAt.render(t, !0, s), e || (this._totalTime !== g || r) && this._callback("onUpdate")), this._cycle !== v && (e || this._gc || this.vars.onRepeat && this._callback("onRepeat")), r && (!this._gc || s) && (0 > t && this._startAt && !this._onUpdate && this._startTime && this._startAt.render(t, !0, s), n && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[r] && this._callback(r), 0 === y && this._rawPrevTime === o && d !== o && (this._rawPrevTime = 0))
                } else g !== this._totalTime && this._onUpdate && (e || this._callback("onUpdate"))
            }, r.to = function(t, e, i) { return new r(t, e, i) }, r.from = function(t, e, i) { return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, new r(t, e, i) }, r.fromTo = function(t, e, i, s) { return s.startAt = i, s.immediateRender = 0 != s.immediateRender && 0 != i.immediateRender, new r(t, e, s) }, r.staggerTo = r.allTo = function(t, e, o, a, c, p, d) {
                a = a || 0;
                var f, _, m, g, v = 0,
                    y = [],
                    T = function() { o.onComplete && o.onComplete.apply(o.onCompleteScope || this, arguments), c.apply(d || o.callbackScope || this, p || u) },
                    x = o.cycle,
                    w = o.startAt && o.startAt.cycle;
                for (h(t) || ("string" == typeof t && (t = i.selector(t) || t), l(t) && (t = s(t))), t = t || [], 0 > a && ((t = s(t)).reverse(), a *= -1), f = t.length - 1, m = 0; f >= m; m++) {
                    for (g in _ = {}, o) _[g] = o[g];
                    if (x && (n(_, t, m), null != _.duration && (e = _.duration, delete _.duration)), w) {
                        for (g in w = _.startAt = {}, o.startAt) w[g] = o.startAt[g];
                        n(_.startAt, t, m)
                    }
                    _.delay = v + (_.delay || 0), m === f && c && (_.onComplete = T), y[m] = new r(t[m], e, _), v += a
                }
                return y
            }, r.staggerFrom = r.allFrom = function(t, e, i, s, n, o, a) { return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, r.staggerTo(t, e, i, s, n, o, a) }, r.staggerFromTo = r.allFromTo = function(t, e, i, s, n, o, a, l) { return s.startAt = i, s.immediateRender = 0 != s.immediateRender && 0 != i.immediateRender, r.staggerTo(t, e, s, n, o, a, l) }, r.delayedCall = function(t, e, i, s, n) { return new r(e, 0, { delay: t, onComplete: e, onCompleteParams: i, callbackScope: s, onReverseComplete: e, onReverseCompleteParams: i, immediateRender: !1, useFrames: n, overwrite: 0 }) }, r.set = function(t, e) { return new r(t, 0, e) }, r.isTweening = function(t) { return i.getTweensOf(t, !0).length > 0 };
            var p = function(t, e) { for (var s = [], n = 0, r = t._first; r;) r instanceof i ? s[n++] = r : (e && (s[n++] = r), n = (s = s.concat(p(r, e))).length), r = r._next; return s },
                d = r.getAllTweens = function(e) { return p(t._rootTimeline, e).concat(p(t._rootFramesTimeline, e)) };
            r.killAll = function(t, i, s, n) {
                null == i && (i = !0), null == s && (s = !0);
                var r, o, a, l = d(0 != n),
                    h = l.length,
                    c = i && s && n;
                for (a = 0; h > a; a++) o = l[a], (c || o instanceof e || (r = o.target === o.vars.onComplete) && s || i && !r) && (t ? o.totalTime(o._reversed ? 0 : o.totalDuration()) : o._enabled(!1, !1))
            }, r.killChildTweensOf = function(t, e) {
                if (null != t) {
                    var n, o, c, u, p, d = a.tweenLookup;
                    if ("string" == typeof t && (t = i.selector(t) || t), l(t) && (t = s(t)), h(t))
                        for (u = t.length; --u > -1;) r.killChildTweensOf(t[u], e);
                    else {
                        for (c in n = [], d)
                            for (o = d[c].target.parentNode; o;) o === t && (n = n.concat(d[c].tweens)), o = o.parentNode;
                        for (p = n.length, u = 0; p > u; u++) e && n[u].totalTime(n[u].totalDuration()), n[u]._enabled(!1, !1)
                    }
                }
            };
            var f = function(t, i, s, n) { i = !1 !== i, s = !1 !== s; for (var r, o, a = d(n = !1 !== n), l = i && s && n, h = a.length; --h > -1;) o = a[h], (l || o instanceof e || (r = o.target === o.vars.onComplete) && s || i && !r) && o.paused(t) };
            return r.pauseAll = function(t, e, i) { f(!0, t, e, i) }, r.resumeAll = function(t, e, i) { f(!1, t, e, i) }, r.globalTimeScale = function(e) {
                var s = t._rootTimeline,
                    n = i.ticker.time;
                return arguments.length ? (e = e || o, s._startTime = n - (n - s._startTime) * s._timeScale / e, s = t._rootFramesTimeline, n = i.ticker.frame, s._startTime = n - (n - s._startTime) * s._timeScale / e, s._timeScale = t._rootTimeline._timeScale = e, e) : s._timeScale
            }, c.progress = function(t, e) { return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 != (1 & this._cycle) ? 1 - t : t) + this._cycle * (this._duration + this._repeatDelay), e) : this._time / this.duration() }, c.totalProgress = function(t, e) { return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this._totalTime / this.totalDuration() }, c.time = function(t, e) { return arguments.length ? (this._dirty && this.totalDuration(), t > this._duration && (t = this._duration), this._yoyo && 0 != (1 & this._cycle) ? t = this._duration - t + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (t += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(t, e)) : this._time }, c.duration = function(e) { return arguments.length ? t.prototype.duration.call(this, e) : this._duration }, c.totalDuration = function(t) { return arguments.length ? -1 === this._repeat ? this : this.duration((t - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat, this._dirty = !1), this._totalDuration) }, c.repeat = function(t) { return arguments.length ? (this._repeat = t, this._uncache(!0)) : this._repeat }, c.repeatDelay = function(t) { return arguments.length ? (this._repeatDelay = t, this._uncache(!0)) : this._repeatDelay }, c.yoyo = function(t) { return arguments.length ? (this._yoyo = t, this) : this._yoyo }, r
        }, !0), _gsScope._gsDefine("TimelineLite", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function(t, e, i) {
            var s = function(t) {
                    e.call(this, t), this._labels = {}, this.autoRemoveChildren = !0 === this.vars.autoRemoveChildren, this.smoothChildTiming = !0 === this.vars.smoothChildTiming, this._sortChildren = !0, this._onUpdate = this.vars.onUpdate;
                    var i, s, n = this.vars;
                    for (s in n) i = n[s], l(i) && -1 !== i.join("").indexOf("{self}") && (n[s] = this._swapSelfInParams(i));
                    l(n.tweens) && this.add(n.tweens, 0, n.align, n.stagger)
                },
                n = 1e-10,
                r = i._internals,
                o = s._internals = {},
                a = r.isSelector,
                l = r.isArray,
                h = r.lazyTweens,
                c = r.lazyRender,
                u = _gsScope._gsDefine.globals,
                p = function(t) { var e, i = {}; for (e in t) i[e] = t[e]; return i },
                d = function(t, e, i) {
                    var s, n, r = t.cycle;
                    for (s in r) n = r[s], t[s] = "function" == typeof n ? n(i, e[i]) : n[i % n.length];
                    delete t.cycle
                },
                f = o.pauseCallback = function() {},
                _ = function(t) {
                    var e, i = [],
                        s = t.length;
                    for (e = 0; e !== s; i.push(t[e++]));
                    return i
                },
                m = s.prototype = new e;
            return s.version = "1.20.3", m.constructor = s, m.kill()._gc = m._forcingPlayhead = m._hasPause = !1, m.to = function(t, e, s, n) { var r = s.repeat && u.TweenMax || i; return e ? this.add(new r(t, e, s), n) : this.set(t, s, n) }, m.from = function(t, e, s, n) { return this.add((s.repeat && u.TweenMax || i).from(t, e, s), n) }, m.fromTo = function(t, e, s, n, r) { var o = n.repeat && u.TweenMax || i; return e ? this.add(o.fromTo(t, e, s, n), r) : this.set(t, n, r) }, m.staggerTo = function(t, e, n, r, o, l, h, c) {
                var u, f, m = new s({ onComplete: l, onCompleteParams: h, callbackScope: c, smoothChildTiming: this.smoothChildTiming }),
                    g = n.cycle;
                for ("string" == typeof t && (t = i.selector(t) || t), a(t = t || []) && (t = _(t)), 0 > (r = r || 0) && ((t = _(t)).reverse(), r *= -1), f = 0; f < t.length; f++)(u = p(n)).startAt && (u.startAt = p(u.startAt), u.startAt.cycle && d(u.startAt, t, f)), g && (d(u, t, f), null != u.duration && (e = u.duration, delete u.duration)), m.to(t[f], e, u, f * r);
                return this.add(m, o)
            }, m.staggerFrom = function(t, e, i, s, n, r, o, a) { return i.immediateRender = 0 != i.immediateRender, i.runBackwards = !0, this.staggerTo(t, e, i, s, n, r, o, a) }, m.staggerFromTo = function(t, e, i, s, n, r, o, a, l) { return s.startAt = i, s.immediateRender = 0 != s.immediateRender && 0 != i.immediateRender, this.staggerTo(t, e, s, n, r, o, a, l) }, m.call = function(t, e, s, n) { return this.add(i.delayedCall(0, t, e, s), n) }, m.set = function(t, e, s) { return s = this._parseTimeOrLabel(s, 0, !0), null == e.immediateRender && (e.immediateRender = s === this._time && !this._paused), this.add(new i(t, 0, e), s) }, s.exportRoot = function(t, e) {
                null == (t = t || {}).smoothChildTiming && (t.smoothChildTiming = !0);
                var n, r, o, a, l = new s(t),
                    h = l._timeline;
                for (null == e && (e = !0), h._remove(l, !0), l._startTime = 0, l._rawPrevTime = l._time = l._totalTime = h._time, o = h._first; o;) a = o._next, e && o instanceof i && o.target === o.vars.onComplete || (0 > (r = o._startTime - o._delay) && (n = 1), l.add(o, r)), o = a;
                return h.add(l, 0), n && l.totalDuration(), l
            }, m.add = function(n, r, o, a) {
                var h, c, u, p, d, f;
                if ("number" != typeof r && (r = this._parseTimeOrLabel(r, 0, !0, n)), !(n instanceof t)) {
                    if (n instanceof Array || n && n.push && l(n)) { for (o = o || "normal", a = a || 0, h = r, c = n.length, u = 0; c > u; u++) l(p = n[u]) && (p = new s({ tweens: p })), this.add(p, h), "string" != typeof p && "function" != typeof p && ("sequence" === o ? h = p._startTime + p.totalDuration() / p._timeScale : "start" === o && (p._startTime -= p.delay())), h += a; return this._uncache(!0) }
                    if ("string" == typeof n) return this.addLabel(n, r);
                    if ("function" != typeof n) throw "Cannot add " + n + " into the timeline; it is not a tween, timeline, function, or string.";
                    n = i.delayedCall(0, n)
                }
                if (e.prototype.add.call(this, n, r), n._time && n.render((this.rawTime() - n._startTime) * n._timeScale, !1, !1), (this._gc || this._time === this._duration) && !this._paused && this._duration < this.duration())
                    for (f = (d = this).rawTime() > n._startTime; d._timeline;) f && d._timeline.smoothChildTiming ? d.totalTime(d._totalTime, !0) : d._gc && d._enabled(!0, !1), d = d._timeline;
                return this
            }, m.remove = function(e) { if (e instanceof t) { this._remove(e, !1); var i = e._timeline = e.vars.useFrames ? t._rootFramesTimeline : t._rootTimeline; return e._startTime = (e._paused ? e._pauseTime : i._time) - (e._reversed ? e.totalDuration() - e._totalTime : e._totalTime) / e._timeScale, this } if (e instanceof Array || e && e.push && l(e)) { for (var s = e.length; --s > -1;) this.remove(e[s]); return this } return "string" == typeof e ? this.removeLabel(e) : this.kill(null, e) }, m._remove = function(t, i) { return e.prototype._remove.call(this, t, i), this._last ? this._time > this.duration() && (this._time = this._duration, this._totalTime = this._totalDuration) : this._time = this._totalTime = this._duration = this._totalDuration = 0, this }, m.append = function(t, e) { return this.add(t, this._parseTimeOrLabel(null, e, !0, t)) }, m.insert = m.insertMultiple = function(t, e, i, s) { return this.add(t, e || 0, i, s) }, m.appendMultiple = function(t, e, i, s) { return this.add(t, this._parseTimeOrLabel(null, e, !0, t), i, s) }, m.addLabel = function(t, e) { return this._labels[t] = this._parseTimeOrLabel(e), this }, m.addPause = function(t, e, s, n) { var r = i.delayedCall(0, f, s, n || this); return r.vars.onComplete = r.vars.onReverseComplete = e, r.data = "isPause", this._hasPause = !0, this.add(r, t) }, m.removeLabel = function(t) { return delete this._labels[t], this }, m.getLabelTime = function(t) { return null != this._labels[t] ? this._labels[t] : -1 }, m._parseTimeOrLabel = function(e, i, s, n) {
                var r, o;
                if (n instanceof t && n.timeline === this) this.remove(n);
                else if (n && (n instanceof Array || n.push && l(n)))
                    for (o = n.length; --o > -1;) n[o] instanceof t && n[o].timeline === this && this.remove(n[o]);
                if (r = "number" != typeof e || i ? this.duration() > 99999999999 ? this.recent().endTime(!1) : this._duration : 0, "string" == typeof i) return this._parseTimeOrLabel(i, s && "number" == typeof e && null == this._labels[i] ? e - r : 0, s);
                if (i = i || 0, "string" != typeof e || !isNaN(e) && null == this._labels[e]) null == e && (e = r);
                else {
                    if (-1 === (o = e.indexOf("="))) return null == this._labels[e] ? s ? this._labels[e] = r + i : i : this._labels[e] + i;
                    i = parseInt(e.charAt(o - 1) + "1", 10) * Number(e.substr(o + 1)), e = o > 1 ? this._parseTimeOrLabel(e.substr(0, o - 1), 0, s) : r
                }
                return Number(e) + i
            }, m.seek = function(t, e) { return this.totalTime("number" == typeof t ? t : this._parseTimeOrLabel(t), !1 !== e) }, m.stop = function() { return this.paused(!0) }, m.gotoAndPlay = function(t, e) { return this.play(t, e) }, m.gotoAndStop = function(t, e) { return this.pause(t, e) }, m.render = function(t, e, i) {
                this._gc && this._enabled(!0, !1);
                var s, r, o, a, l, u, p, d = this._time,
                    f = this._dirty ? this.totalDuration() : this._totalDuration,
                    _ = this._startTime,
                    m = this._timeScale,
                    g = this._paused;
                if (d !== this._time && (t += this._time - d), t >= f - 1e-7 && t >= 0) this._totalTime = this._time = f, this._reversed || this._hasPausedChild() || (r = !0, a = "onComplete", l = !!this._timeline.autoRemoveChildren, 0 === this._duration && (0 >= t && t >= -1e-7 || this._rawPrevTime < 0 || this._rawPrevTime === n) && this._rawPrevTime !== t && this._first && (l = !0, this._rawPrevTime > n && (a = "onReverseComplete"))), this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : n, t = f + 1e-4;
                else if (1e-7 > t)
                    if (this._totalTime = this._time = 0, (0 !== d || 0 === this._duration && this._rawPrevTime !== n && (this._rawPrevTime > 0 || 0 > t && this._rawPrevTime >= 0)) && (a = "onReverseComplete", r = this._reversed), 0 > t) this._active = !1, this._timeline.autoRemoveChildren && this._reversed ? (l = r = !0, a = "onReverseComplete") : this._rawPrevTime >= 0 && this._first && (l = !0), this._rawPrevTime = t;
                    else {
                        if (this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : n, 0 === t && r)
                            for (s = this._first; s && 0 === s._startTime;) s._duration || (r = !1), s = s._next;
                        t = 0, this._initted || (l = !0)
                    }
                else {
                    if (this._hasPause && !this._forcingPlayhead && !e) {
                        if (t >= d)
                            for (s = this._first; s && s._startTime <= t && !u;) s._duration || "isPause" !== s.data || s.ratio || 0 === s._startTime && 0 === this._rawPrevTime || (u = s), s = s._next;
                        else
                            for (s = this._last; s && s._startTime >= t && !u;) s._duration || "isPause" === s.data && s._rawPrevTime > 0 && (u = s), s = s._prev;
                        u && (this._time = t = u._startTime, this._totalTime = t + this._cycle * (this._totalDuration + this._repeatDelay))
                    }
                    this._totalTime = this._time = this._rawPrevTime = t
                }
                if (this._time !== d && this._first || i || l || u) {
                    if (this._initted || (this._initted = !0), this._active || !this._paused && this._time !== d && t > 0 && (this._active = !0), 0 === d && this.vars.onStart && (0 === this._time && this._duration || e || this._callback("onStart")), (p = this._time) >= d)
                        for (s = this._first; s && (o = s._next, p === this._time && (!this._paused || g));)(s._active || s._startTime <= p && !s._paused && !s._gc) && (u === s && this.pause(), s._reversed ? s.render((s._dirty ? s.totalDuration() : s._totalDuration) - (t - s._startTime) * s._timeScale, e, i) : s.render((t - s._startTime) * s._timeScale, e, i)), s = o;
                    else
                        for (s = this._last; s && (o = s._prev, p === this._time && (!this._paused || g));) {
                            if (s._active || s._startTime <= d && !s._paused && !s._gc) {
                                if (u === s) {
                                    for (u = s._prev; u && u.endTime() > this._time;) u.render(u._reversed ? u.totalDuration() - (t - u._startTime) * u._timeScale : (t - u._startTime) * u._timeScale, e, i), u = u._prev;
                                    u = null, this.pause()
                                }
                                s._reversed ? s.render((s._dirty ? s.totalDuration() : s._totalDuration) - (t - s._startTime) * s._timeScale, e, i) : s.render((t - s._startTime) * s._timeScale, e, i)
                            }
                            s = o
                        }
                    this._onUpdate && (e || (h.length && c(), this._callback("onUpdate"))), a && (this._gc || (_ === this._startTime || m !== this._timeScale) && (0 === this._time || f >= this.totalDuration()) && (r && (h.length && c(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[a] && this._callback(a)))
                }
            }, m._hasPausedChild = function() {
                for (var t = this._first; t;) {
                    if (t._paused || t instanceof s && t._hasPausedChild()) return !0;
                    t = t._next
                }
                return !1
            }, m.getChildren = function(t, e, s, n) { n = n || -9999999999; for (var r = [], o = this._first, a = 0; o;) o._startTime < n || (o instanceof i ? !1 !== e && (r[a++] = o) : (!1 !== s && (r[a++] = o), !1 !== t && (a = (r = r.concat(o.getChildren(!0, e, s))).length))), o = o._next; return r }, m.getTweensOf = function(t, e) {
                var s, n, r = this._gc,
                    o = [],
                    a = 0;
                for (r && this._enabled(!0, !0), n = (s = i.getTweensOf(t)).length; --n > -1;)(s[n].timeline === this || e && this._contains(s[n])) && (o[a++] = s[n]);
                return r && this._enabled(!1, !0), o
            }, m.recent = function() { return this._recent }, m._contains = function(t) {
                for (var e = t.timeline; e;) {
                    if (e === this) return !0;
                    e = e.timeline
                }
                return !1
            }, m.shiftChildren = function(t, e, i) {
                i = i || 0;
                for (var s, n = this._first, r = this._labels; n;) n._startTime >= i && (n._startTime += t), n = n._next;
                if (e)
                    for (s in r) r[s] >= i && (r[s] += t);
                return this._uncache(!0)
            }, m._kill = function(t, e) { if (!t && !e) return this._enabled(!1, !1); for (var i = e ? this.getTweensOf(e) : this.getChildren(!0, !0, !1), s = i.length, n = !1; --s > -1;) i[s]._kill(t, e) && (n = !0); return n }, m.clear = function(t) {
                var e = this.getChildren(!1, !0, !0),
                    i = e.length;
                for (this._time = this._totalTime = 0; --i > -1;) e[i]._enabled(!1, !1);
                return !1 !== t && (this._labels = {}), this._uncache(!0)
            }, m.invalidate = function() { for (var e = this._first; e;) e.invalidate(), e = e._next; return t.prototype.invalidate.call(this) }, m._enabled = function(t, i) {
                if (t === this._gc)
                    for (var s = this._first; s;) s._enabled(t, !0), s = s._next;
                return e.prototype._enabled.call(this, t, i)
            }, m.totalTime = function(e, i, s) { this._forcingPlayhead = !0; var n = t.prototype.totalTime.apply(this, arguments); return this._forcingPlayhead = !1, n }, m.duration = function(t) { return arguments.length ? (0 !== this.duration() && 0 !== t && this.timeScale(this._duration / t), this) : (this._dirty && this.totalDuration(), this._duration) }, m.totalDuration = function(t) {
                if (!arguments.length) {
                    if (this._dirty) {
                        for (var e, i, s = 0, n = this._last, r = 999999999999; n;) e = n._prev, n._dirty && n.totalDuration(), n._startTime > r && this._sortChildren && !n._paused && !this._calculatingDuration ? (this._calculatingDuration = 1, this.add(n, n._startTime - n._delay), this._calculatingDuration = 0) : r = n._startTime, n._startTime < 0 && !n._paused && (s -= n._startTime, this._timeline.smoothChildTiming && (this._startTime += n._startTime / this._timeScale, this._time -= n._startTime, this._totalTime -= n._startTime, this._rawPrevTime -= n._startTime), this.shiftChildren(-n._startTime, !1, -9999999999), r = 0), (i = n._startTime + n._totalDuration / n._timeScale) > s && (s = i), n = e;
                        this._duration = this._totalDuration = s, this._dirty = !1
                    }
                    return this._totalDuration
                }
                return t && this.totalDuration() ? this.timeScale(this._totalDuration / t) : this
            }, m.paused = function(e) {
                if (!e)
                    for (var i = this._first, s = this._time; i;) i._startTime === s && "isPause" === i.data && (i._rawPrevTime = 0), i = i._next;
                return t.prototype.paused.apply(this, arguments)
            }, m.usesFrames = function() { for (var e = this._timeline; e._timeline;) e = e._timeline; return e === t._rootFramesTimeline }, m.rawTime = function(t) { return t && (this._paused || this._repeat && this.time() > 0 && this.totalProgress() < 1) ? this._totalTime % (this._duration + this._repeatDelay) : this._paused ? this._totalTime : (this._timeline.rawTime(t) - this._startTime) * this._timeScale }, s
        }, !0), _gsScope._gsDefine("TimelineMax", ["TimelineLite", "TweenLite", "easing.Ease"], function(t, e, i) {
            var s = function(e) { t.call(this, e), this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._cycle = 0, this._yoyo = !0 === this.vars.yoyo, this._dirty = !0 },
                n = 1e-10,
                r = e._internals,
                o = r.lazyTweens,
                a = r.lazyRender,
                l = _gsScope._gsDefine.globals,
                h = new i(null, null, 1, 0),
                c = s.prototype = new t;
            return c.constructor = s, c.kill()._gc = !1, s.version = "1.20.3", c.invalidate = function() { return this._yoyo = !0 === this.vars.yoyo, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), t.prototype.invalidate.call(this) }, c.addCallback = function(t, i, s, n) { return this.add(e.delayedCall(0, t, s, n), i) }, c.removeCallback = function(t, e) {
                if (t)
                    if (null == e) this._kill(null, t);
                    else
                        for (var i = this.getTweensOf(t, !1), s = i.length, n = this._parseTimeOrLabel(e); --s > -1;) i[s]._startTime === n && i[s]._enabled(!1, !1);
                return this
            }, c.removePause = function(e) { return this.removeCallback(t._internals.pauseCallback, e) }, c.tweenTo = function(t, i) {
                i = i || {};
                var s, n, r, o = { ease: h, useFrames: this.usesFrames(), immediateRender: !1 },
                    a = i.repeat && l.TweenMax || e;
                for (n in i) o[n] = i[n];
                return o.time = this._parseTimeOrLabel(t), s = Math.abs(Number(o.time) - this._time) / this._timeScale || .001, r = new a(this, s, o), o.onStart = function() { r.target.paused(!0), r.vars.time !== r.target.time() && s === r.duration() && r.duration(Math.abs(r.vars.time - r.target.time()) / r.target._timeScale), i.onStart && i.onStart.apply(i.onStartScope || i.callbackScope || r, i.onStartParams || []) }, r
            }, c.tweenFromTo = function(t, e, i) { i = i || {}, t = this._parseTimeOrLabel(t), i.startAt = { onComplete: this.seek, onCompleteParams: [t], callbackScope: this }, i.immediateRender = !1 !== i.immediateRender; var s = this.tweenTo(e, i); return s.duration(Math.abs(s.vars.time - t) / this._timeScale || .001) }, c.render = function(t, e, i) {
                this._gc && this._enabled(!0, !1);
                var s, r, l, h, c, u, p, d, f = this._time,
                    _ = this._dirty ? this.totalDuration() : this._totalDuration,
                    m = this._duration,
                    g = this._totalTime,
                    v = this._startTime,
                    y = this._timeScale,
                    T = this._rawPrevTime,
                    x = this._paused,
                    w = this._cycle;
                if (f !== this._time && (t += this._time - f), t >= _ - 1e-7 && t >= 0) this._locked || (this._totalTime = _, this._cycle = this._repeat), this._reversed || this._hasPausedChild() || (r = !0, h = "onComplete", c = !!this._timeline.autoRemoveChildren, 0 === this._duration && (0 >= t && t >= -1e-7 || 0 > T || T === n) && T !== t && this._first && (c = !0, T > n && (h = "onReverseComplete"))), this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : n, this._yoyo && 0 != (1 & this._cycle) ? this._time = t = 0 : (this._time = m, t = m + 1e-4);
                else if (1e-7 > t)
                    if (this._locked || (this._totalTime = this._cycle = 0), this._time = 0, (0 !== f || 0 === m && T !== n && (T > 0 || 0 > t && T >= 0) && !this._locked) && (h = "onReverseComplete", r = this._reversed), 0 > t) this._active = !1, this._timeline.autoRemoveChildren && this._reversed ? (c = r = !0, h = "onReverseComplete") : T >= 0 && this._first && (c = !0), this._rawPrevTime = t;
                    else {
                        if (this._rawPrevTime = m || !e || t || this._rawPrevTime === t ? t : n, 0 === t && r)
                            for (s = this._first; s && 0 === s._startTime;) s._duration || (r = !1), s = s._next;
                        t = 0, this._initted || (c = !0)
                    }
                else if (0 === m && 0 > T && (c = !0), this._time = this._rawPrevTime = t, this._locked || (this._totalTime = t, 0 !== this._repeat && (u = m + this._repeatDelay, this._cycle = this._totalTime / u >> 0, 0 !== this._cycle && this._cycle === this._totalTime / u && t >= g && this._cycle--, this._time = this._totalTime - this._cycle * u, this._yoyo && 0 != (1 & this._cycle) && (this._time = m - this._time), this._time > m ? (this._time = m, t = m + 1e-4) : this._time < 0 ? this._time = t = 0 : t = this._time)), this._hasPause && !this._forcingPlayhead && !e) {
                    if ((t = this._time) >= f || this._repeat && w !== this._cycle)
                        for (s = this._first; s && s._startTime <= t && !p;) s._duration || "isPause" !== s.data || s.ratio || 0 === s._startTime && 0 === this._rawPrevTime || (p = s), s = s._next;
                    else
                        for (s = this._last; s && s._startTime >= t && !p;) s._duration || "isPause" === s.data && s._rawPrevTime > 0 && (p = s), s = s._prev;
                    p && p._startTime < m && (this._time = t = p._startTime, this._totalTime = t + this._cycle * (this._totalDuration + this._repeatDelay))
                }
                if (this._cycle !== w && !this._locked) {
                    var b = this._yoyo && 0 != (1 & w),
                        k = b === (this._yoyo && 0 != (1 & this._cycle)),
                        S = this._totalTime,
                        P = this._cycle,
                        O = this._rawPrevTime,
                        C = this._time;
                    if (this._totalTime = w * m, this._cycle < w ? b = !b : this._totalTime += m, this._time = f, this._rawPrevTime = 0 === m ? T - 1e-4 : T, this._cycle = w, this._locked = !0, f = b ? 0 : m, this.render(f, e, 0 === m), e || this._gc || this.vars.onRepeat && (this._cycle = P, this._locked = !1, this._callback("onRepeat")), f !== this._time) return;
                    if (k && (this._cycle = w, this._locked = !0, f = b ? m + 1e-4 : -1e-4, this.render(f, !0, !1)), this._locked = !1, this._paused && !x) return;
                    this._time = C, this._totalTime = S, this._cycle = P, this._rawPrevTime = O
                }
                if (this._time !== f && this._first || i || c || p) {
                    if (this._initted || (this._initted = !0), this._active || !this._paused && this._totalTime !== g && t > 0 && (this._active = !0), 0 === g && this.vars.onStart && (0 === this._totalTime && this._totalDuration || e || this._callback("onStart")), (d = this._time) >= f)
                        for (s = this._first; s && (l = s._next, d === this._time && (!this._paused || x));)(s._active || s._startTime <= this._time && !s._paused && !s._gc) && (p === s && this.pause(), s._reversed ? s.render((s._dirty ? s.totalDuration() : s._totalDuration) - (t - s._startTime) * s._timeScale, e, i) : s.render((t - s._startTime) * s._timeScale, e, i)), s = l;
                    else
                        for (s = this._last; s && (l = s._prev, d === this._time && (!this._paused || x));) {
                            if (s._active || s._startTime <= f && !s._paused && !s._gc) {
                                if (p === s) {
                                    for (p = s._prev; p && p.endTime() > this._time;) p.render(p._reversed ? p.totalDuration() - (t - p._startTime) * p._timeScale : (t - p._startTime) * p._timeScale, e, i), p = p._prev;
                                    p = null, this.pause()
                                }
                                s._reversed ? s.render((s._dirty ? s.totalDuration() : s._totalDuration) - (t - s._startTime) * s._timeScale, e, i) : s.render((t - s._startTime) * s._timeScale, e, i)
                            }
                            s = l
                        }
                    this._onUpdate && (e || (o.length && a(), this._callback("onUpdate"))), h && (this._locked || this._gc || (v === this._startTime || y !== this._timeScale) && (0 === this._time || _ >= this.totalDuration()) && (r && (o.length && a(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[h] && this._callback(h)))
                } else g !== this._totalTime && this._onUpdate && (e || this._callback("onUpdate"))
            }, c.getActive = function(t, e, i) {
                null == t && (t = !0), null == e && (e = !0), null == i && (i = !1);
                var s, n, r = [],
                    o = this.getChildren(t, e, i),
                    a = 0,
                    l = o.length;
                for (s = 0; l > s; s++)(n = o[s]).isActive() && (r[a++] = n);
                return r
            }, c.getLabelAfter = function(t) {
                t || 0 !== t && (t = this._time);
                var e, i = this.getLabelsArray(),
                    s = i.length;
                for (e = 0; s > e; e++)
                    if (i[e].time > t) return i[e].name;
                return null
            }, c.getLabelBefore = function(t) {
                null == t && (t = this._time);
                for (var e = this.getLabelsArray(), i = e.length; --i > -1;)
                    if (e[i].time < t) return e[i].name;
                return null
            }, c.getLabelsArray = function() {
                var t, e = [],
                    i = 0;
                for (t in this._labels) e[i++] = { time: this._labels[t], name: t };
                return e.sort(function(t, e) { return t.time - e.time }), e
            }, c.invalidate = function() { return this._locked = !1, t.prototype.invalidate.call(this) }, c.progress = function(t, e) { return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 != (1 & this._cycle) ? 1 - t : t) + this._cycle * (this._duration + this._repeatDelay), e) : this._time / this.duration() || 0 }, c.totalProgress = function(t, e) { return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this._totalTime / this.totalDuration() || 0 }, c.totalDuration = function(e) { return arguments.length ? -1 !== this._repeat && e ? this.timeScale(this.totalDuration() / e) : this : (this._dirty && (t.prototype.totalDuration.call(this), this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat), this._totalDuration) }, c.time = function(t, e) { return arguments.length ? (this._dirty && this.totalDuration(), t > this._duration && (t = this._duration), this._yoyo && 0 != (1 & this._cycle) ? t = this._duration - t + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (t += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(t, e)) : this._time }, c.repeat = function(t) { return arguments.length ? (this._repeat = t, this._uncache(!0)) : this._repeat }, c.repeatDelay = function(t) { return arguments.length ? (this._repeatDelay = t, this._uncache(!0)) : this._repeatDelay }, c.yoyo = function(t) { return arguments.length ? (this._yoyo = t, this) : this._yoyo }, c.currentLabel = function(t) { return arguments.length ? this.seek(t, !0) : this.getLabelBefore(this._time + 1e-8) }, s
        }, !0), s = 180 / Math.PI, n = [], r = [], o = [], a = {}, l = _gsScope._gsDefine.globals, h = function(t, e, i, s) { i === s && (i = s - (s - e) / 1e6), t === e && (e = t + (i - t) / 1e6), this.a = t, this.b = e, this.c = i, this.d = s, this.da = s - t, this.ca = i - t, this.ba = e - t }, c = function(t, e, i, s) {
            var n = { a: t },
                r = {},
                o = {},
                a = { c: s },
                l = (t + e) / 2,
                h = (e + i) / 2,
                c = (i + s) / 2,
                u = (l + h) / 2,
                p = (h + c) / 2,
                d = (p - u) / 8;
            return n.b = l + (t - l) / 4, r.b = u + d, n.c = r.a = (n.b + r.b) / 2, r.c = o.a = (u + p) / 2, o.b = p - d, a.b = c + (s - c) / 4, o.c = a.a = (o.b + a.b) / 2, [n, r, o, a]
        }, u = function(t, e, i, s, a) {
            var l, h, u, p, d, f, _, m, g, v, y, T, x, w = t.length - 1,
                b = 0,
                k = t[0].a;
            for (l = 0; w > l; l++) h = (d = t[b]).a, u = d.d, p = t[b + 1].d, a ? (y = n[l], x = ((T = r[l]) + y) * e * .25 / (s ? .5 : o[l] || .5), m = u - ((f = u - (u - h) * (s ? .5 * e : 0 !== y ? x / y : 0)) + (((_ = u + (p - u) * (s ? .5 * e : 0 !== T ? x / T : 0)) - f) * (3 * y / (y + T) + .5) / 4 || 0))) : m = u - ((f = u - (u - h) * e * .5) + (_ = u + (p - u) * e * .5)) / 2, f += m, _ += m, d.c = g = f, d.b = 0 !== l ? k : k = d.a + .6 * (d.c - d.a), d.da = u - h, d.ca = g - h, d.ba = k - h, i ? (v = c(h, k, g, u), t.splice(b, 1, v[0], v[1], v[2], v[3]), b += 4) : b++, k = _;
            (d = t[b]).b = k, d.c = k + .4 * (d.d - k), d.da = d.d - d.a, d.ca = d.c - d.a, d.ba = k - d.a, i && (v = c(d.a, k, d.c, d.d), t.splice(b, 1, v[0], v[1], v[2], v[3]))
        }, p = function(t, e, i, s) {
            var o, a, l, c, u, p, d = [];
            if (s)
                for (a = (t = [s].concat(t)).length; --a > -1;) "string" == typeof(p = t[a][e]) && "=" === p.charAt(1) && (t[a][e] = s[e] + Number(p.charAt(0) + p.substr(2)));
            if (0 > (o = t.length - 2)) return d[0] = new h(t[0][e], 0, 0, t[0][e]), d;
            for (a = 0; o > a; a++) l = t[a][e], c = t[a + 1][e], d[a] = new h(l, 0, 0, c), i && (u = t[a + 2][e], n[a] = (n[a] || 0) + (c - l) * (c - l), r[a] = (r[a] || 0) + (u - c) * (u - c));
            return d[a] = new h(t[a][e], 0, 0, t[a + 1][e]), d
        }, d = function(t, e, i, s, l, h) {
            var c, d, f, _, m, g, v, y, T = {},
                x = [],
                w = h || t[0];
            for (d in l = "string" == typeof l ? "," + l + "," : ",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,", null == e && (e = 1), t[0]) x.push(d);
            if (t.length > 1) {
                for (y = t[t.length - 1], v = !0, c = x.length; --c > -1;)
                    if (d = x[c], Math.abs(w[d] - y[d]) > .05) { v = !1; break }
                v && (t = t.concat(), h && t.unshift(h), t.push(t[1]), h = t[t.length - 3])
            }
            for (n.length = r.length = o.length = 0, c = x.length; --c > -1;) d = x[c], a[d] = -1 !== l.indexOf("," + d + ","), T[d] = p(t, d, a[d], h);
            for (c = n.length; --c > -1;) n[c] = Math.sqrt(n[c]), r[c] = Math.sqrt(r[c]);
            if (!s) {
                for (c = x.length; --c > -1;)
                    if (a[d])
                        for (g = (f = T[x[c]]).length - 1, _ = 0; g > _; _++) m = f[_ + 1].da / r[_] + f[_].da / n[_] || 0, o[_] = (o[_] || 0) + m * m;
                for (c = o.length; --c > -1;) o[c] = Math.sqrt(o[c])
            }
            for (c = x.length, _ = i ? 4 : 1; --c > -1;) f = T[d = x[c]], u(f, e, i, s, a[d]), v && (f.splice(0, _), f.splice(f.length - _, _));
            return T
        }, f = function(t, e, i) {
            for (var s, n, r, o, a, l, h, c, u, p, d, f = 1 / i, _ = t.length; --_ > -1;)
                for (r = (p = t[_]).a, o = p.d - r, a = p.c - r, l = p.b - r, s = n = 0, c = 1; i >= c; c++) s = n - (n = ((h = f * c) * h * o + 3 * (u = 1 - h) * (h * a + u * l)) * h), e[d = _ * i + c - 1] = (e[d] || 0) + s * s
        }, _ = _gsScope._gsDefine.plugin({
            propName: "bezier",
            priority: -1,
            version: "1.3.8",
            API: 2,
            global: !0,
            init: function(t, e, i) {
                this._target = t, e instanceof Array && (e = { values: e }), this._func = {}, this._mod = {}, this._props = [], this._timeRes = null == e.timeResolution ? 6 : parseInt(e.timeResolution, 10);
                var s, n, r, o, a, l = e.values || [],
                    c = {},
                    u = l[0],
                    p = e.autoRotate || i.vars.orientToBezier;
                for (s in this._autoRotate = p ? p instanceof Array ? p : [
                        ["x", "y", "rotation", !0 === p ? 0 : Number(p) || 0]
                    ] : null, u) this._props.push(s);
                for (r = this._props.length; --r > -1;) s = this._props[r], this._overwriteProps.push(s), n = this._func[s] = "function" == typeof t[s], c[s] = n ? t[s.indexOf("set") || "function" != typeof t["get" + s.substr(3)] ? s : "get" + s.substr(3)]() : parseFloat(t[s]), a || c[s] !== l[0][s] && (a = c);
                if (this._beziers = "cubic" !== e.type && "quadratic" !== e.type && "soft" !== e.type ? d(l, isNaN(e.curviness) ? 1 : e.curviness, !1, "thruBasic" === e.type, e.correlate, a) : function(t, e, i) {
                        var s, n, r, o, a, l, c, u, p, d, f, _ = {},
                            m = "cubic" === (e = e || "soft") ? 3 : 2,
                            g = "soft" === e,
                            v = [];
                        if (g && i && (t = [i].concat(t)), null == t || t.length < m + 1) throw "invalid Bezier data";
                        for (p in t[0]) v.push(p);
                        for (l = v.length; --l > -1;) {
                            for (_[p = v[l]] = a = [], d = 0, u = t.length, c = 0; u > c; c++) s = null == i ? t[c][p] : "string" == typeof(f = t[c][p]) && "=" === f.charAt(1) ? i[p] + Number(f.charAt(0) + f.substr(2)) : Number(f), g && c > 1 && u - 1 > c && (a[d++] = (s + a[d - 2]) / 2), a[d++] = s;
                            for (u = d - m + 1, d = 0, c = 0; u > c; c += m) s = a[c], n = a[c + 1], r = a[c + 2], o = 2 === m ? 0 : a[c + 3], a[d++] = f = 3 === m ? new h(s, n, r, o) : new h(s, (2 * n + s) / 3, (2 * n + r) / 3, r);
                            a.length = d
                        }
                        return _
                    }(l, e.type, c), this._segCount = this._beziers[s].length, this._timeRes) {
                    var _ = function(t, e) {
                        var i, s, n, r, o = [],
                            a = [],
                            l = 0,
                            h = 0,
                            c = (e = e >> 0 || 6) - 1,
                            u = [],
                            p = [];
                        for (i in t) f(t[i], o, e);
                        for (n = o.length, s = 0; n > s; s++) l += Math.sqrt(o[s]), p[r = s % e] = l, r === c && (h += l, u[r = s / e >> 0] = p, a[r] = h, l = 0, p = []);
                        return { length: h, lengths: a, segments: u }
                    }(this._beziers, this._timeRes);
                    this._length = _.length, this._lengths = _.lengths, this._segments = _.segments, this._l1 = this._li = this._s1 = this._si = 0, this._l2 = this._lengths[0], this._curSeg = this._segments[0], this._s2 = this._curSeg[0], this._prec = 1 / this._curSeg.length
                }
                if (p = this._autoRotate)
                    for (this._initialRotations = [], p[0] instanceof Array || (this._autoRotate = p = [p]), r = p.length; --r > -1;) {
                        for (o = 0; 3 > o; o++) s = p[r][o], this._func[s] = "function" == typeof t[s] && t[s.indexOf("set") || "function" != typeof t["get" + s.substr(3)] ? s : "get" + s.substr(3)];
                        s = p[r][2], this._initialRotations[r] = (this._func[s] ? this._func[s].call(this._target) : this._target[s]) || 0, this._overwriteProps.push(s)
                    }
                return this._startRatio = i.vars.runBackwards ? 1 : 0, !0
            },
            set: function(t) {
                var e, i, n, r, o, a, l, h, c, u, p = this._segCount,
                    d = this._func,
                    f = this._target,
                    _ = t !== this._startRatio;
                if (this._timeRes) {
                    if (c = this._lengths, u = this._curSeg, t *= this._length, n = this._li, t > this._l2 && p - 1 > n) {
                        for (h = p - 1; h > n && (this._l2 = c[++n]) <= t;);
                        this._l1 = c[n - 1], this._li = n, this._curSeg = u = this._segments[n], this._s2 = u[this._s1 = this._si = 0]
                    } else if (t < this._l1 && n > 0) {
                        for (; n > 0 && (this._l1 = c[--n]) >= t;);
                        0 === n && t < this._l1 ? this._l1 = 0 : n++, this._l2 = c[n], this._li = n, this._curSeg = u = this._segments[n], this._s1 = u[(this._si = u.length - 1) - 1] || 0, this._s2 = u[this._si]
                    }
                    if (e = n, t -= this._l1, n = this._si, t > this._s2 && n < u.length - 1) {
                        for (h = u.length - 1; h > n && (this._s2 = u[++n]) <= t;);
                        this._s1 = u[n - 1], this._si = n
                    } else if (t < this._s1 && n > 0) {
                        for (; n > 0 && (this._s1 = u[--n]) >= t;);
                        0 === n && t < this._s1 ? this._s1 = 0 : n++, this._s2 = u[n], this._si = n
                    }
                    a = (n + (t - this._s1) / (this._s2 - this._s1)) * this._prec || 0
                } else a = (t - (e = 0 > t ? 0 : t >= 1 ? p - 1 : p * t >> 0) * (1 / p)) * p;
                for (i = 1 - a, n = this._props.length; --n > -1;) r = this._props[n], l = (a * a * (o = this._beziers[r][e]).da + 3 * i * (a * o.ca + i * o.ba)) * a + o.a, this._mod[r] && (l = this._mod[r](l, f)), d[r] ? f[r](l) : f[r] = l;
                if (this._autoRotate) { var m, g, v, y, T, x, w, b = this._autoRotate; for (n = b.length; --n > -1;) r = b[n][2], x = b[n][3] || 0, w = !0 === b[n][4] ? 1 : s, o = this._beziers[b[n][0]], m = this._beziers[b[n][1]], o && m && (o = o[e], m = m[e], g = o.a + (o.b - o.a) * a, g += ((y = o.b + (o.c - o.b) * a) - g) * a, y += (o.c + (o.d - o.c) * a - y) * a, v = m.a + (m.b - m.a) * a, v += ((T = m.b + (m.c - m.b) * a) - v) * a, T += (m.c + (m.d - m.c) * a - T) * a, l = _ ? Math.atan2(T - v, y - g) * w + x : this._initialRotations[n], this._mod[r] && (l = this._mod[r](l, f)), d[r] ? f[r](l) : f[r] = l) }
            }
        }), m = _.prototype, _.bezierThrough = d, _.cubicToQuadratic = c, _._autoCSS = !0, _.quadraticToCubic = function(t, e, i) { return new h(t, (2 * e + t) / 3, (2 * e + i) / 3, i) }, _._cssRegister = function() {
            var t = l.CSSPlugin;
            if (t) {
                var e = t._internals,
                    i = e._parseToProxy,
                    s = e._setPluginRatio,
                    n = e.CSSPropTween;
                e._registerComplexSpecialProp("bezier", {
                    parser: function(t, e, r, o, a, l) {
                        e instanceof Array && (e = { values: e }), l = new _;
                        var h, c, u, p = e.values,
                            d = p.length - 1,
                            f = [],
                            m = {};
                        if (0 > d) return a;
                        for (h = 0; d >= h; h++) u = i(t, p[h], o, a, l, d !== h), f[h] = u.end;
                        for (c in e) m[c] = e[c];
                        return m.values = f, (a = new n(t, "bezier", 0, 0, u.pt, 2)).data = u, a.plugin = l, a.setRatio = s, 0 === m.autoRotate && (m.autoRotate = !0), !m.autoRotate || m.autoRotate instanceof Array || (h = !0 === m.autoRotate ? 0 : Number(m.autoRotate), m.autoRotate = null != u.end.left ? [
                            ["left", "top", "rotation", h, !1]
                        ] : null != u.end.x && [
                            ["x", "y", "rotation", h, !1]
                        ]), m.autoRotate && (o._transform || o._enableTransforms(!1), u.autoRotate = o._target._gsTransform, u.proxy.rotation = u.autoRotate.rotation || 0, o._overwriteProps.push("rotation")), l._onInitTween(u.proxy, m, o._tween), a
                    }
                })
            }
        }, m._mod = function(t) { for (var e, i = this._overwriteProps, s = i.length; --s > -1;)(e = t[i[s]]) && "function" == typeof e && (this._mod[i[s]] = e) }, m._kill = function(t) {
            var e, i, s = this._props;
            for (e in this._beziers)
                if (e in t)
                    for (delete this._beziers[e], delete this._func[e], i = s.length; --i > -1;) s[i] === e && s.splice(i, 1);
            if (s = this._autoRotate)
                for (i = s.length; --i > -1;) t[s[i][2]] && s.splice(i, 1);
            return this._super._kill.call(this, t)
        }, _gsScope._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin", "TweenLite"], function(t, e) {
            var i, s, n, r, o = function() { t.call(this, "css"), this._overwriteProps.length = 0, this.setRatio = o.prototype.setRatio },
                a = _gsScope._gsDefine.globals,
                l = {},
                h = o.prototype = new t("css");
            h.constructor = o, o.version = "1.20.3", o.API = 2, o.defaultTransformPerspective = 0, o.defaultSkewType = "compensated", o.defaultSmoothOrigin = !0, h = "px", o.suffixMap = { top: h, right: h, bottom: h, left: h, width: h, height: h, fontSize: h, padding: h, margin: h, perspective: h, lineHeight: "" };
            var c, u, p, d, f, _, m, g, v, y, T = /(?:\-|\.|\b)(\d|\.|e\-)+/g,
                x = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
                w = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,
                b = /(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,
                k = /(?:\d|\-|\+|=|#|\.)*/g,
                S = /opacity *= *([^)]*)/i,
                P = /opacity:([^;]*)/i,
                O = /alpha\(opacity *=.+?\)/i,
                C = /^(rgb|hsl)/,
                A = /([A-Z])/g,
                R = /-([a-z])/gi,
                M = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,
                D = function(t, e) { return e.toUpperCase() },
                E = /(?:Left|Right|Width)/i,
                $ = /(M11|M12|M21|M22)=[\d\-\.e]+/gi,
                z = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,
                L = /,(?=[^\)]*(?:\(|$))/gi,
                I = /[\s,\(]/i,
                F = Math.PI / 180,
                N = 180 / Math.PI,
                j = {},
                X = { style: {} },
                B = _gsScope.document || { createElement: function() { return X } },
                q = function(t, e) { return B.createElementNS ? B.createElementNS(e || "http://www.w3.org/1999/xhtml", t) : B.createElement(t) },
                H = q("div"),
                Y = q("img"),
                U = o._internals = { _specialProps: l },
                W = (_gsScope.navigator || {}).userAgent || "",
                V = (v = W.indexOf("Android"), y = q("a"), p = -1 !== W.indexOf("Safari") && -1 === W.indexOf("Chrome") && (-1 === v || parseFloat(W.substr(v + 8, 2)) > 3), f = p && parseFloat(W.substr(W.indexOf("Version/") + 8, 2)) < 6, d = -1 !== W.indexOf("Firefox"), (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(W) || /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(W)) && (_ = parseFloat(RegExp.$1)), !!y && (y.style.cssText = "top:1px;opacity:.55;", /^0.55/.test(y.style.opacity))),
                G = function(t) { return S.test("string" == typeof t ? t : (t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1 },
                Z = function(t) { _gsScope.console && console.log(t) },
                Q = "",
                K = "",
                J = function(t, e) { var i, s, n = (e = e || H).style; if (void 0 !== n[t]) return t; for (t = t.charAt(0).toUpperCase() + t.substr(1), i = ["O", "Moz", "ms", "Ms", "Webkit"], s = 5; --s > -1 && void 0 === n[i[s] + t];); return s >= 0 ? (Q = "-" + (K = 3 === s ? "ms" : i[s]).toLowerCase() + "-", K + t) : null },
                tt = B.defaultView ? B.defaultView.getComputedStyle : function() {},
                et = o.getStyle = function(t, e, i, s, n) { var r; return V || "opacity" !== e ? (!s && t.style[e] ? r = t.style[e] : (i = i || tt(t)) ? r = i[e] || i.getPropertyValue(e) || i.getPropertyValue(e.replace(A, "-$1").toLowerCase()) : t.currentStyle && (r = t.currentStyle[e]), null == n || r && "none" !== r && "auto" !== r && "auto auto" !== r ? r : n) : G(t) },
                it = U.convertToPixels = function(t, i, s, n, r) {
                    if ("px" === n || !n && "lineHeight" !== i) return s;
                    if ("auto" === n || !s) return 0;
                    var a, l, h, c = E.test(i),
                        u = t,
                        p = H.style,
                        d = 0 > s,
                        f = 1 === s;
                    if (d && (s = -s), f && (s *= 100), "lineHeight" !== i || n)
                        if ("%" === n && -1 !== i.indexOf("border")) a = s / 100 * (c ? t.clientWidth : t.clientHeight);
                        else {
                            if (p.cssText = "border:0 solid red;position:" + et(t, "position") + ";line-height:0;", "%" !== n && u.appendChild && "v" !== n.charAt(0) && "rem" !== n) p[c ? "borderLeftWidth" : "borderTopWidth"] = s + n;
                            else {
                                if (u = t.parentNode || B.body, -1 !== et(u, "display").indexOf("flex") && (p.position = "absolute"), l = u._gsCache, h = e.ticker.frame, l && c && l.time === h) return l.width * s / 100;
                                p[c ? "width" : "height"] = s + n
                            }
                            u.appendChild(H), a = parseFloat(H[c ? "offsetWidth" : "offsetHeight"]), u.removeChild(H), c && "%" === n && !1 !== o.cacheWidths && ((l = u._gsCache = u._gsCache || {}).time = h, l.width = a / s * 100), 0 !== a || r || (a = it(t, i, s, n, !0))
                        }
                    else l = tt(t).lineHeight, t.style.lineHeight = s, a = parseFloat(tt(t).lineHeight), t.style.lineHeight = l;
                    return f && (a /= 100), d ? -a : a
                },
                st = U.calculateOffset = function(t, e, i) {
                    if ("absolute" !== et(t, "position", i)) return 0;
                    var s = "left" === e ? "Left" : "Top",
                        n = et(t, "margin" + s, i);
                    return t["offset" + s] - (it(t, e, parseFloat(n), n.replace(k, "")) || 0)
                },
                nt = function(t, e) {
                    var i, s, n, r = {};
                    if (e = e || tt(t, null))
                        if (i = e.length)
                            for (; --i > -1;)(-1 === (n = e[i]).indexOf("-transform") || zt === n) && (r[n.replace(R, D)] = e.getPropertyValue(n));
                        else
                            for (i in e)(-1 === i.indexOf("Transform") || $t === i) && (r[i] = e[i]);
                    else if (e = t.currentStyle || t.style)
                        for (i in e) "string" == typeof i && void 0 === r[i] && (r[i.replace(R, D)] = e[i]);
                    return V || (r.opacity = G(t)), s = Vt(t, e, !1), r.rotation = s.rotation, r.skewX = s.skewX, r.scaleX = s.scaleX, r.scaleY = s.scaleY, r.x = s.x, r.y = s.y, It && (r.z = s.z, r.rotationX = s.rotationX, r.rotationY = s.rotationY, r.scaleZ = s.scaleZ), r.filters && delete r.filters, r
                },
                rt = function(t, e, i, s, n) {
                    var r, o, a, l = {},
                        h = t.style;
                    for (o in i) "cssText" !== o && "length" !== o && isNaN(o) && (e[o] !== (r = i[o]) || n && n[o]) && -1 === o.indexOf("Origin") && ("number" == typeof r || "string" == typeof r) && (l[o] = "auto" !== r || "left" !== o && "top" !== o ? "" !== r && "auto" !== r && "none" !== r || "string" != typeof e[o] || "" === e[o].replace(b, "") ? r : 0 : st(t, o), void 0 !== h[o] && (a = new Tt(h, o, h[o], a)));
                    if (s)
                        for (o in s) "className" !== o && (l[o] = s[o]);
                    return { difs: l, firstMPT: a }
                },
                ot = { width: ["Left", "Right"], height: ["Top", "Bottom"] },
                at = ["marginLeft", "marginRight", "marginTop", "marginBottom"],
                lt = function(t, e, i) {
                    if ("svg" === (t.nodeName + "").toLowerCase()) return (i || tt(t))[e] || 0;
                    if (t.getCTM && Yt(t)) return t.getBBox()[e] || 0;
                    var s = parseFloat("width" === e ? t.offsetWidth : t.offsetHeight),
                        n = ot[e],
                        r = n.length;
                    for (i = i || tt(t, null); --r > -1;) s -= parseFloat(et(t, "padding" + n[r], i, !0)) || 0, s -= parseFloat(et(t, "border" + n[r] + "Width", i, !0)) || 0;
                    return s
                },
                ht = function(t, e) {
                    if ("contain" === t || "auto" === t || "auto auto" === t) return t + " ";
                    (null == t || "" === t) && (t = "0 0");
                    var i, s = t.split(" "),
                        n = -1 !== t.indexOf("left") ? "0%" : -1 !== t.indexOf("right") ? "100%" : s[0],
                        r = -1 !== t.indexOf("top") ? "0%" : -1 !== t.indexOf("bottom") ? "100%" : s[1];
                    if (s.length > 3 && !e) { for (s = t.split(", ").join(",").split(","), t = [], i = 0; i < s.length; i++) t.push(ht(s[i])); return t.join(",") }
                    return null == r ? r = "center" === n ? "50%" : "0" : "center" === r && (r = "50%"), ("center" === n || isNaN(parseFloat(n)) && -1 === (n + "").indexOf("=")) && (n = "50%"), t = n + " " + r + (s.length > 2 ? " " + s[2] : ""), e && (e.oxp = -1 !== n.indexOf("%"), e.oyp = -1 !== r.indexOf("%"), e.oxr = "=" === n.charAt(1), e.oyr = "=" === r.charAt(1), e.ox = parseFloat(n.replace(b, "")), e.oy = parseFloat(r.replace(b, "")), e.v = t), e || t
                },
                ct = function(t, e) { return "function" == typeof t && (t = t(g, m)), "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) : parseFloat(t) - parseFloat(e) || 0 },
                ut = function(t, e) { return "function" == typeof t && (t = t(g, m)), null == t ? e : "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) + e : parseFloat(t) || 0 },
                pt = function(t, e, i, s) { var n, r, o, a, l; return "function" == typeof t && (t = t(g, m)), null == t ? a = e : "number" == typeof t ? a = t : (n = 360, r = t.split("_"), o = ((l = "=" === t.charAt(1)) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(r[0].substr(2)) : parseFloat(r[0])) * (-1 === t.indexOf("rad") ? 1 : N) - (l ? 0 : e), r.length && (s && (s[i] = e + o), -1 !== t.indexOf("short") && ((o %= n) !== o % 180 && (o = 0 > o ? o + n : o - n)), -1 !== t.indexOf("_cw") && 0 > o ? o = (o + 3599999999640) % n - (o / n | 0) * n : -1 !== t.indexOf("ccw") && o > 0 && (o = (o - 3599999999640) % n - (o / n | 0) * n)), a = e + o), 1e-6 > a && a > -1e-6 && (a = 0), a },
                dt = { aqua: [0, 255, 255], lime: [0, 255, 0], silver: [192, 192, 192], black: [0, 0, 0], maroon: [128, 0, 0], teal: [0, 128, 128], blue: [0, 0, 255], navy: [0, 0, 128], white: [255, 255, 255], fuchsia: [255, 0, 255], olive: [128, 128, 0], yellow: [255, 255, 0], orange: [255, 165, 0], gray: [128, 128, 128], purple: [128, 0, 128], green: [0, 128, 0], red: [255, 0, 0], pink: [255, 192, 203], cyan: [0, 255, 255], transparent: [255, 255, 255, 0] },
                ft = function(t, e, i) { return 255 * (1 > 6 * (t = 0 > t ? t + 1 : t > 1 ? t - 1 : t) ? e + (i - e) * t * 6 : .5 > t ? i : 2 > 3 * t ? e + (i - e) * (2 / 3 - t) * 6 : e) + .5 | 0 },
                _t = o.parseColor = function(t, e) {
                    var i, s, n, r, o, a, l, h, c, u, p;
                    if (t)
                        if ("number" == typeof t) i = [t >> 16, t >> 8 & 255, 255 & t];
                        else {
                            if ("," === t.charAt(t.length - 1) && (t = t.substr(0, t.length - 1)), dt[t]) i = dt[t];
                            else if ("#" === t.charAt(0)) 4 === t.length && (t = "#" + (s = t.charAt(1)) + s + (n = t.charAt(2)) + n + (r = t.charAt(3)) + r), i = [(t = parseInt(t.substr(1), 16)) >> 16, t >> 8 & 255, 255 & t];
                            else if ("hsl" === t.substr(0, 3))
                                if (i = p = t.match(T), e) { if (-1 !== t.indexOf("=")) return t.match(x) } else o = Number(i[0]) % 360 / 360, a = Number(i[1]) / 100, s = 2 * (l = Number(i[2]) / 100) - (n = .5 >= l ? l * (a + 1) : l + a - l * a), i.length > 3 && (i[3] = Number(i[3])), i[0] = ft(o + 1 / 3, s, n), i[1] = ft(o, s, n), i[2] = ft(o - 1 / 3, s, n);
                            else i = t.match(T) || dt.transparent;
                            i[0] = Number(i[0]), i[1] = Number(i[1]), i[2] = Number(i[2]), i.length > 3 && (i[3] = Number(i[3]))
                        }
                    else i = dt.black;
                    return e && !p && (s = i[0] / 255, n = i[1] / 255, r = i[2] / 255, l = ((h = Math.max(s, n, r)) + (c = Math.min(s, n, r))) / 2, h === c ? o = a = 0 : (u = h - c, a = l > .5 ? u / (2 - h - c) : u / (h + c), o = h === s ? (n - r) / u + (r > n ? 6 : 0) : h === n ? (r - s) / u + 2 : (s - n) / u + 4, o *= 60), i[0] = o + .5 | 0, i[1] = 100 * a + .5 | 0, i[2] = 100 * l + .5 | 0), i
                },
                mt = function(t, e) {
                    var i, s, n, r = t.match(gt) || [],
                        o = 0,
                        a = "";
                    if (!r.length) return t;
                    for (i = 0; i < r.length; i++) s = r[i], o += (n = t.substr(o, t.indexOf(s, o) - o)).length + s.length, 3 === (s = _t(s, e)).length && s.push(1), a += n + (e ? "hsla(" + s[0] + "," + s[1] + "%," + s[2] + "%," + s[3] : "rgba(" + s.join(",")) + ")";
                    return a + t.substr(o)
                },
                gt = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";
            for (h in dt) gt += "|" + h + "\\b";
            gt = new RegExp(gt + ")", "gi"), o.colorStringFilter = function(t) {
                var e, i = t[0] + " " + t[1];
                gt.test(i) && (e = -1 !== i.indexOf("hsl(") || -1 !== i.indexOf("hsla("), t[0] = mt(t[0], e), t[1] = mt(t[1], e)), gt.lastIndex = 0
            }, e.defaultStringFilter || (e.defaultStringFilter = o.colorStringFilter);
            var vt = function(t, e, i, s) {
                    if (null == t) return function(t) { return t };
                    var n, r = e ? (t.match(gt) || [""])[0] : "",
                        o = t.split(r).join("").match(w) || [],
                        a = t.substr(0, t.indexOf(o[0])),
                        l = ")" === t.charAt(t.length - 1) ? ")" : "",
                        h = -1 !== t.indexOf(" ") ? " " : ",",
                        c = o.length,
                        u = c > 0 ? o[0].replace(T, "") : "";
                    return c ? n = e ? function(t) {
                        var e, p, d, f;
                        if ("number" == typeof t) t += u;
                        else if (s && L.test(t)) { for (f = t.replace(L, "|").split("|"), d = 0; d < f.length; d++) f[d] = n(f[d]); return f.join(",") }
                        if (e = (t.match(gt) || [r])[0], d = (p = t.split(e).join("").match(w) || []).length, c > d--)
                            for (; ++d < c;) p[d] = i ? p[(d - 1) / 2 | 0] : o[d];
                        return a + p.join(h) + h + e + l + (-1 !== t.indexOf("inset") ? " inset" : "")
                    } : function(t) {
                        var e, r, p;
                        if ("number" == typeof t) t += u;
                        else if (s && L.test(t)) { for (r = t.replace(L, "|").split("|"), p = 0; p < r.length; p++) r[p] = n(r[p]); return r.join(",") }
                        if (p = (e = t.match(w) || []).length, c > p--)
                            for (; ++p < c;) e[p] = i ? e[(p - 1) / 2 | 0] : o[p];
                        return a + e.join(h) + l
                    } : function(t) { return t }
                },
                yt = function(t) {
                    return t = t.split(","),
                        function(e, i, s, n, r, o, a) { var l, h = (i + "").split(" "); for (a = {}, l = 0; 4 > l; l++) a[t[l]] = h[l] = h[l] || h[(l - 1) / 2 >> 0]; return n.parse(e, a, r, o) }
                },
                Tt = (U._setPluginRatio = function(t) {
                    this.plugin.setRatio(t);
                    for (var e, i, s, n, r, o = this.data, a = o.proxy, l = o.firstMPT; l;) e = a[l.v], l.r ? e = Math.round(e) : 1e-6 > e && e > -1e-6 && (e = 0), l.t[l.p] = e, l = l._next;
                    if (o.autoRotate && (o.autoRotate.rotation = o.mod ? o.mod(a.rotation, this.t) : a.rotation), 1 === t || 0 === t)
                        for (l = o.firstMPT, r = 1 === t ? "e" : "b"; l;) {
                            if ((i = l.t).type) {
                                if (1 === i.type) {
                                    for (n = i.xs0 + i.s + i.xs1, s = 1; s < i.l; s++) n += i["xn" + s] + i["xs" + (s + 1)];
                                    i[r] = n
                                }
                            } else i[r] = i.s + i.xs0;
                            l = l._next
                        }
                }, function(t, e, i, s, n) { this.t = t, this.p = e, this.v = i, this.r = n, s && (s._prev = this, this._next = s) }),
                xt = (U._parseToProxy = function(t, e, i, s, n, r) {
                    var o, a, l, h, c, u = s,
                        p = {},
                        d = {},
                        f = i._transform,
                        _ = j;
                    for (i._transform = null, j = e, s = c = i.parse(t, e, s, n), j = _, r && (i._transform = f, u && (u._prev = null, u._prev && (u._prev._next = null))); s && s !== u;) {
                        if (s.type <= 1 && (d[a = s.p] = s.s + s.c, p[a] = s.s, r || (h = new Tt(s, "s", a, h, s.r), s.c = 0), 1 === s.type))
                            for (o = s.l; --o > 0;) l = "xn" + o, d[a = s.p + "_" + l] = s.data[l], p[a] = s[l], r || (h = new Tt(s, l, a, h, s.rxp[l]));
                        s = s._next
                    }
                    return { proxy: p, end: d, firstMPT: h, pt: c }
                }, U.CSSPropTween = function(t, e, s, n, o, a, l, h, c, u, p) { this.t = t, this.p = e, this.s = s, this.c = n, this.n = l || e, t instanceof xt || r.push(this.n), this.r = h, this.type = a || 0, c && (this.pr = c, i = !0), this.b = void 0 === u ? s : u, this.e = void 0 === p ? s + n : p, o && (this._next = o, o._prev = this) }),
                wt = function(t, e, i, s, n, r) { var o = new xt(t, e, i, s - i, n, -1, r); return o.b = i, o.e = o.xs0 = s, o },
                bt = o.parseComplex = function(t, e, i, s, n, r, a, l, h, u) {
                    i = i || r || "", "function" == typeof s && (s = s(g, m)), a = new xt(t, e, 0, 0, a, u ? 2 : 1, null, !1, l, i, s), s += "", n && gt.test(s + i) && (s = [i, s], o.colorStringFilter(s), i = s[0], s = s[1]);
                    var p, d, f, _, v, y, w, b, k, S, P, O, C, A = i.split(", ").join(",").split(" "),
                        R = s.split(", ").join(",").split(" "),
                        M = A.length,
                        D = !1 !== c;
                    for ((-1 !== s.indexOf(",") || -1 !== i.indexOf(",")) && (-1 !== (s + i).indexOf("rgb") || -1 !== (s + i).indexOf("hsl") ? (A = A.join(" ").replace(L, ", ").split(" "), R = R.join(" ").replace(L, ", ").split(" ")) : (A = A.join(" ").split(",").join(", ").split(" "), R = R.join(" ").split(",").join(", ").split(" ")), M = A.length), M !== R.length && (M = (A = (r || "").split(" ")).length), a.plugin = h, a.setRatio = u, gt.lastIndex = 0, p = 0; M > p; p++)
                        if (_ = A[p], v = R[p], (b = parseFloat(_)) || 0 === b) a.appendXtra("", b, ct(v, b), v.replace(x, ""), D && -1 !== v.indexOf("px"), !0);
                        else if (n && gt.test(_)) O = ")" + ((O = v.indexOf(")") + 1) ? v.substr(O) : ""), C = -1 !== v.indexOf("hsl") && V, S = v, _ = _t(_, C), v = _t(v, C), (k = _.length + v.length > 6) && !V && 0 === v[3] ? (a["xs" + a.l] += a.l ? " transparent" : "transparent", a.e = a.e.split(R[p]).join("transparent")) : (V || (k = !1), C ? a.appendXtra(S.substr(0, S.indexOf("hsl")) + (k ? "hsla(" : "hsl("), _[0], ct(v[0], _[0]), ",", !1, !0).appendXtra("", _[1], ct(v[1], _[1]), "%,", !1).appendXtra("", _[2], ct(v[2], _[2]), k ? "%," : "%" + O, !1) : a.appendXtra(S.substr(0, S.indexOf("rgb")) + (k ? "rgba(" : "rgb("), _[0], v[0] - _[0], ",", !0, !0).appendXtra("", _[1], v[1] - _[1], ",", !0).appendXtra("", _[2], v[2] - _[2], k ? "," : O, !0), k && (_ = _.length < 4 ? 1 : _[3], a.appendXtra("", _, (v.length < 4 ? 1 : v[3]) - _, O, !1))), gt.lastIndex = 0;
                    else if (y = _.match(T)) {
                        if (!(w = v.match(x)) || w.length !== y.length) return a;
                        for (f = 0, d = 0; d < y.length; d++) P = y[d], S = _.indexOf(P, f), a.appendXtra(_.substr(f, S - f), Number(P), ct(w[d], P), "", D && "px" === _.substr(S + P.length, 2), 0 === d), f = S + P.length;
                        a["xs" + a.l] += _.substr(f)
                    } else a["xs" + a.l] += a.l || a["xs" + a.l] ? " " + v : v;
                    if (-1 !== s.indexOf("=") && a.data) {
                        for (O = a.xs0 + a.data.s, p = 1; p < a.l; p++) O += a["xs" + p] + a.data["xn" + p];
                        a.e = O + a["xs" + p]
                    }
                    return a.l || (a.type = -1, a.xs0 = a.e), a.xfirst || a
                },
                kt = 9;
            for ((h = xt.prototype).l = h.pr = 0; --kt > 0;) h["xn" + kt] = 0, h["xs" + kt] = "";
            h.xs0 = "", h._next = h._prev = h.xfirst = h.data = h.plugin = h.setRatio = h.rxp = null, h.appendXtra = function(t, e, i, s, n, r) {
                var o = this,
                    a = o.l;
                return o["xs" + a] += r && (a || o["xs" + a]) ? " " + t : t || "", i || 0 === a || o.plugin ? (o.l++, o.type = o.setRatio ? 2 : 1, o["xs" + o.l] = s || "", a > 0 ? (o.data["xn" + a] = e + i, o.rxp["xn" + a] = n, o["xn" + a] = e, o.plugin || (o.xfirst = new xt(o, "xn" + a, e, i, o.xfirst || o, 0, o.n, n, o.pr), o.xfirst.xs0 = 0), o) : (o.data = { s: e + i }, o.rxp = {}, o.s = e, o.c = i, o.r = n, o)) : (o["xs" + a] += e + (s || ""), o)
            };
            var St = function(t, e) { e = e || {}, this.p = e.prefix && J(t) || t, l[t] = l[this.p] = this, this.format = e.formatter || vt(e.defaultValue, e.color, e.collapsible, e.multi), e.parser && (this.parse = e.parser), this.clrs = e.color, this.multi = e.multi, this.keyword = e.keyword, this.dflt = e.defaultValue, this.pr = e.priority || 0 },
                Pt = U._registerComplexSpecialProp = function(t, e, i) {
                    "object" != typeof e && (e = { parser: i });
                    var s, n = t.split(","),
                        r = e.defaultValue;
                    for (i = i || [r], s = 0; s < n.length; s++) e.prefix = 0 === s && e.prefix, e.defaultValue = i[s] || r, new St(n[s], e)
                },
                Ot = U._registerPluginProp = function(t) {
                    if (!l[t]) {
                        var e = t.charAt(0).toUpperCase() + t.substr(1) + "Plugin";
                        Pt(t, { parser: function(t, i, s, n, r, o, h) { var c = a.com.greensock.plugins[e]; return c ? (c._cssRegister(), l[s].parse(t, i, s, n, r, o, h)) : (Z("Error: " + e + " js file not loaded."), r) } })
                    }
                };
            (h = St.prototype).parseComplex = function(t, e, i, s, n, r) {
                var o, a, l, h, c, u, p = this.keyword;
                if (this.multi && (L.test(i) || L.test(e) ? (a = e.replace(L, "|").split("|"), l = i.replace(L, "|").split("|")) : p && (a = [e], l = [i])), l) {
                    for (h = l.length > a.length ? l.length : a.length, o = 0; h > o; o++) e = a[o] = a[o] || this.dflt, i = l[o] = l[o] || this.dflt, p && ((c = e.indexOf(p)) !== (u = i.indexOf(p)) && (-1 === u ? a[o] = a[o].split(p).join("") : -1 === c && (a[o] += " " + p)));
                    e = a.join(", "), i = l.join(", ")
                }
                return bt(t, this.p, e, i, this.clrs, this.dflt, s, this.pr, n, r)
            }, h.parse = function(t, e, i, s, r, o, a) { return this.parseComplex(t.style, this.format(et(t, this.p, n, !1, this.dflt)), this.format(e), r, o) }, o.registerSpecialProp = function(t, e, i) { Pt(t, { parser: function(t, s, n, r, o, a, l) { var h = new xt(t, n, 0, 0, o, 2, n, !1, i); return h.plugin = a, h.setRatio = e(t, s, r._tween, n), h }, priority: i }) }, o.useSVGTransformAttr = !0;
            var Ct, At, Rt, Mt, Dt, Et = "scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","),
                $t = J("transform"),
                zt = Q + "transform",
                Lt = J("transformOrigin"),
                It = null !== J("perspective"),
                Ft = U.Transform = function() { this.perspective = parseFloat(o.defaultTransformPerspective) || 0, this.force3D = !(!1 === o.defaultForce3D || !It) && (o.defaultForce3D || "auto") },
                Nt = _gsScope.SVGElement,
                jt = function(t, e, i) {
                    var s, n = B.createElementNS("http://www.w3.org/2000/svg", t),
                        r = /([a-z])([A-Z])/g;
                    for (s in i) n.setAttributeNS(null, s.replace(r, "$1-$2").toLowerCase(), i[s]);
                    return e.appendChild(n), n
                },
                Xt = B.documentElement || {},
                Bt = (Dt = _ || /Android/i.test(W) && !_gsScope.chrome, B.createElementNS && !Dt && (At = jt("svg", Xt), Mt = (Rt = jt("rect", At, { width: 100, height: 50, x: 100 })).getBoundingClientRect().width, Rt.style[Lt] = "50% 50%", Rt.style[$t] = "scaleX(0.5)", Dt = Mt === Rt.getBoundingClientRect().width && !(d && It), Xt.removeChild(At)), Dt),
                qt = function(t, e, i, s, n, r) {
                    var a, l, h, c, u, p, d, f, _, m, g, v, y, T, x = t._gsTransform,
                        w = Wt(t, !0);
                    x && (y = x.xOrigin, T = x.yOrigin), (!s || (a = s.split(" ")).length < 2) && (0 === (d = t.getBBox()).x && 0 === d.y && d.width + d.height === 0 && (d = { x: parseFloat(t.hasAttribute("x") ? t.getAttribute("x") : t.hasAttribute("cx") ? t.getAttribute("cx") : 0) || 0, y: parseFloat(t.hasAttribute("y") ? t.getAttribute("y") : t.hasAttribute("cy") ? t.getAttribute("cy") : 0) || 0, width: 0, height: 0 }), a = [(-1 !== (e = ht(e).split(" "))[0].indexOf("%") ? parseFloat(e[0]) / 100 * d.width : parseFloat(e[0])) + d.x, (-1 !== e[1].indexOf("%") ? parseFloat(e[1]) / 100 * d.height : parseFloat(e[1])) + d.y]), i.xOrigin = c = parseFloat(a[0]), i.yOrigin = u = parseFloat(a[1]), s && w !== Ut && (p = w[0], d = w[1], f = w[2], _ = w[3], m = w[4], g = w[5], (v = p * _ - d * f) && (l = c * (_ / v) + u * (-f / v) + (f * g - _ * m) / v, h = c * (-d / v) + u * (p / v) - (p * g - d * m) / v, c = i.xOrigin = a[0] = l, u = i.yOrigin = a[1] = h)), x && (r && (i.xOffset = x.xOffset, i.yOffset = x.yOffset, x = i), n || !1 !== n && !1 !== o.defaultSmoothOrigin ? (l = c - y, h = u - T, x.xOffset += l * w[0] + h * w[2] - l, x.yOffset += l * w[1] + h * w[3] - h) : x.xOffset = x.yOffset = 0), r || t.setAttribute("data-svg-origin", a.join(" "))
                },
                Ht = function(t) {
                    var e, i = q("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
                        s = this.parentNode,
                        n = this.nextSibling,
                        r = this.style.cssText;
                    if (Xt.appendChild(i), i.appendChild(this), this.style.display = "block", t) try { e = this.getBBox(), this._originalGetBBox = this.getBBox, this.getBBox = Ht } catch (t) {} else this._originalGetBBox && (e = this._originalGetBBox());
                    return n ? s.insertBefore(this, n) : s.appendChild(this), Xt.removeChild(i), this.style.cssText = r, e
                },
                Yt = function(t) { return !(!Nt || !t.getCTM || t.parentNode && !t.ownerSVGElement || ! function(t) { try { return t.getBBox() } catch (e) { return Ht.call(t, !0) } }(t)) },
                Ut = [1, 0, 0, 1, 0, 0],
                Wt = function(t, e) {
                    var i, s, n, r, o, a, l = t._gsTransform || new Ft,
                        h = t.style;
                    if ($t ? s = et(t, zt, null, !0) : t.currentStyle && (s = (s = t.currentStyle.filter.match($)) && 4 === s.length ? [s[0].substr(4), Number(s[2].substr(4)), Number(s[1].substr(4)), s[3].substr(4), l.x || 0, l.y || 0].join(",") : ""), i = !s || "none" === s || "matrix(1, 0, 0, 1, 0, 0)" === s, !$t || !(a = !tt(t) || "none" === tt(t).display) && t.parentNode || (a && (r = h.display, h.display = "block"), t.parentNode || (o = 1, Xt.appendChild(t)), i = !(s = et(t, zt, null, !0)) || "none" === s || "matrix(1, 0, 0, 1, 0, 0)" === s, r ? h.display = r : a && Kt(h, "display"), o && Xt.removeChild(t)), (l.svg || t.getCTM && Yt(t)) && (i && -1 !== (h[$t] + "").indexOf("matrix") && (s = h[$t], i = 0), n = t.getAttribute("transform"), i && n && (-1 !== n.indexOf("matrix") ? (s = n, i = 0) : -1 !== n.indexOf("translate") && (s = "matrix(1,0,0,1," + n.match(/(?:\-|\b)[\d\-\.e]+\b/gi).join(",") + ")", i = 0))), i) return Ut;
                    for (n = (s || "").match(T) || [], kt = n.length; --kt > -1;) r = Number(n[kt]), n[kt] = (o = r - (r |= 0)) ? (1e5 * o + (0 > o ? -.5 : .5) | 0) / 1e5 + r : r;
                    return e && n.length > 6 ? [n[0], n[1], n[4], n[5], n[12], n[13]] : n
                },
                Vt = U.getTransform = function(t, i, s, n) {
                    if (t._gsTransform && s && !n) return t._gsTransform;
                    var r, a, l, h, c, u, p = s && t._gsTransform || new Ft,
                        d = p.scaleX < 0,
                        f = It && (parseFloat(et(t, Lt, i, !1, "0 0 0").split(" ")[2]) || p.zOrigin) || 0,
                        _ = parseFloat(o.defaultTransformPerspective) || 0;
                    if (p.svg = !(!t.getCTM || !Yt(t)), p.svg && (qt(t, et(t, Lt, i, !1, "50% 50%") + "", p, t.getAttribute("data-svg-origin")), Ct = o.useSVGTransformAttr || Bt), (r = Wt(t)) !== Ut) {
                        if (16 === r.length) {
                            var m, g, v, y, T, x = r[0],
                                w = r[1],
                                b = r[2],
                                k = r[3],
                                S = r[4],
                                P = r[5],
                                O = r[6],
                                C = r[7],
                                A = r[8],
                                R = r[9],
                                M = r[10],
                                D = r[12],
                                E = r[13],
                                $ = r[14],
                                z = r[11],
                                L = Math.atan2(O, M);
                            p.zOrigin && (D = A * ($ = -p.zOrigin) - r[12], E = R * $ - r[13], $ = M * $ + p.zOrigin - r[14]), p.rotationX = L * N, L && (m = S * (y = Math.cos(-L)) + A * (T = Math.sin(-L)), g = P * y + R * T, v = O * y + M * T, A = S * -T + A * y, R = P * -T + R * y, M = O * -T + M * y, z = C * -T + z * y, S = m, P = g, O = v), L = Math.atan2(-b, M), p.rotationY = L * N, L && (g = w * (y = Math.cos(-L)) - R * (T = Math.sin(-L)), v = b * y - M * T, R = w * T + R * y, M = b * T + M * y, z = k * T + z * y, x = m = x * y - A * T, w = g, b = v), L = Math.atan2(w, x), p.rotation = L * N, L && (m = x * (y = Math.cos(L)) + w * (T = Math.sin(L)), g = S * y + P * T, v = A * y + R * T, w = w * y - x * T, P = P * y - S * T, R = R * y - A * T, x = m, S = g, A = v), p.rotationX && Math.abs(p.rotationX) + Math.abs(p.rotation) > 359.9 && (p.rotationX = p.rotation = 0, p.rotationY = 180 - p.rotationY), L = Math.atan2(S, P), p.scaleX = (1e5 * Math.sqrt(x * x + w * w + b * b) + .5 | 0) / 1e5, p.scaleY = (1e5 * Math.sqrt(P * P + O * O) + .5 | 0) / 1e5, p.scaleZ = (1e5 * Math.sqrt(A * A + R * R + M * M) + .5 | 0) / 1e5, x /= p.scaleX, S /= p.scaleY, w /= p.scaleX, P /= p.scaleY, Math.abs(L) > 2e-5 ? (p.skewX = L * N, S = 0, "simple" !== p.skewType && (p.scaleY *= 1 / Math.cos(L))) : p.skewX = 0, p.perspective = z ? 1 / (0 > z ? -z : z) : 0, p.x = D, p.y = E, p.z = $, p.svg && (p.x -= p.xOrigin - (p.xOrigin * x - p.yOrigin * S), p.y -= p.yOrigin - (p.yOrigin * w - p.xOrigin * P))
                        } else if (!It || n || !r.length || p.x !== r[4] || p.y !== r[5] || !p.rotationX && !p.rotationY) {
                            var I = r.length >= 6,
                                F = I ? r[0] : 1,
                                j = r[1] || 0,
                                X = r[2] || 0,
                                B = I ? r[3] : 1;
                            p.x = r[4] || 0, p.y = r[5] || 0, l = Math.sqrt(F * F + j * j), h = Math.sqrt(B * B + X * X), c = F || j ? Math.atan2(j, F) * N : p.rotation || 0, u = X || B ? Math.atan2(X, B) * N + c : p.skewX || 0, p.scaleX = l, p.scaleY = h, p.rotation = c, p.skewX = u, It && (p.rotationX = p.rotationY = p.z = 0, p.perspective = _, p.scaleZ = 1), p.svg && (p.x -= p.xOrigin - (p.xOrigin * F + p.yOrigin * X), p.y -= p.yOrigin - (p.xOrigin * j + p.yOrigin * B))
                        }
                        for (a in Math.abs(p.skewX) > 90 && Math.abs(p.skewX) < 270 && (d ? (p.scaleX *= -1, p.skewX += p.rotation <= 0 ? 180 : -180, p.rotation += p.rotation <= 0 ? 180 : -180) : (p.scaleY *= -1, p.skewX += p.skewX <= 0 ? 180 : -180)), p.zOrigin = f, p) p[a] < 2e-5 && p[a] > -2e-5 && (p[a] = 0)
                    }
                    return s && (t._gsTransform = p, p.svg && (Ct && t.style[$t] ? e.delayedCall(.001, function() { Kt(t.style, $t) }) : !Ct && t.getAttribute("transform") && e.delayedCall(.001, function() { t.removeAttribute("transform") }))), p
                },
                Gt = function(t) {
                    var e, i, s = this.data,
                        n = -s.rotation * F,
                        r = n + s.skewX * F,
                        o = 1e5,
                        a = (Math.cos(n) * s.scaleX * o | 0) / o,
                        l = (Math.sin(n) * s.scaleX * o | 0) / o,
                        h = (Math.sin(r) * -s.scaleY * o | 0) / o,
                        c = (Math.cos(r) * s.scaleY * o | 0) / o,
                        u = this.t.style,
                        p = this.t.currentStyle;
                    if (p) {
                        i = l, l = -h, h = -i, e = p.filter, u.filter = "";
                        var d, f, m = this.t.offsetWidth,
                            g = this.t.offsetHeight,
                            v = "absolute" !== p.position,
                            y = "progid:DXImageTransform.Microsoft.Matrix(M11=" + a + ", M12=" + l + ", M21=" + h + ", M22=" + c,
                            T = s.x + m * s.xPercent / 100,
                            x = s.y + g * s.yPercent / 100;
                        if (null != s.ox && (T += (d = (s.oxp ? m * s.ox * .01 : s.ox) - m / 2) - (d * a + (f = (s.oyp ? g * s.oy * .01 : s.oy) - g / 2) * l), x += f - (d * h + f * c)), v ? y += ", Dx=" + ((d = m / 2) - (d * a + (f = g / 2) * l) + T) + ", Dy=" + (f - (d * h + f * c) + x) + ")" : y += ", sizingMethod='auto expand')", -1 !== e.indexOf("DXImageTransform.Microsoft.Matrix(") ? u.filter = e.replace(z, y) : u.filter = y + " " + e, (0 === t || 1 === t) && 1 === a && 0 === l && 0 === h && 1 === c && (v && -1 === y.indexOf("Dx=0, Dy=0") || S.test(e) && 100 !== parseFloat(RegExp.$1) || -1 === e.indexOf(e.indexOf("Alpha")) && u.removeAttribute("filter")), !v) { var w, b, P, O = 8 > _ ? 1 : -1; for (d = s.ieOffsetX || 0, f = s.ieOffsetY || 0, s.ieOffsetX = Math.round((m - ((0 > a ? -a : a) * m + (0 > l ? -l : l) * g)) / 2 + T), s.ieOffsetY = Math.round((g - ((0 > c ? -c : c) * g + (0 > h ? -h : h) * m)) / 2 + x), kt = 0; 4 > kt; kt++) P = (i = -1 !== (w = p[b = at[kt]]).indexOf("px") ? parseFloat(w) : it(this.t, b, parseFloat(w), w.replace(k, "")) || 0) !== s[b] ? 2 > kt ? -s.ieOffsetX : -s.ieOffsetY : 2 > kt ? d - s.ieOffsetX : f - s.ieOffsetY, u[b] = (s[b] = Math.round(i - P * (0 === kt || 2 === kt ? 1 : O))) + "px" }
                    }
                },
                Zt = U.set3DTransformRatio = U.setTransformRatio = function(t) {
                    var e, i, s, n, r, o, a, l, h, c, u, p, f, _, m, g, v, y, T, x, w, b, k, S = this.data,
                        P = this.t.style,
                        O = S.rotation,
                        C = S.rotationX,
                        A = S.rotationY,
                        R = S.scaleX,
                        M = S.scaleY,
                        D = S.scaleZ,
                        E = S.x,
                        $ = S.y,
                        z = S.z,
                        L = S.svg,
                        I = S.perspective,
                        N = S.force3D,
                        j = S.skewY,
                        X = S.skewX;
                    if (j && (X += j, O += j), !((1 !== t && 0 !== t || "auto" !== N || this.tween._totalTime !== this.tween._totalDuration && this.tween._totalTime) && N || z || I || A || C || 1 !== D) || Ct && L || !It) O || X || L ? (O *= F, b = X * F, k = 1e5, i = Math.cos(O) * R, r = Math.sin(O) * R, s = Math.sin(O - b) * -M, o = Math.cos(O - b) * M, b && "simple" === S.skewType && (e = Math.tan(b - j * F), s *= e = Math.sqrt(1 + e * e), o *= e, j && (e = Math.tan(j * F), i *= e = Math.sqrt(1 + e * e), r *= e)), L && (E += S.xOrigin - (S.xOrigin * i + S.yOrigin * s) + S.xOffset, $ += S.yOrigin - (S.xOrigin * r + S.yOrigin * o) + S.yOffset, Ct && (S.xPercent || S.yPercent) && (m = this.t.getBBox(), E += .01 * S.xPercent * m.width, $ += .01 * S.yPercent * m.height), (m = 1e-6) > E && E > -m && (E = 0), m > $ && $ > -m && ($ = 0)), T = (i * k | 0) / k + "," + (r * k | 0) / k + "," + (s * k | 0) / k + "," + (o * k | 0) / k + "," + E + "," + $ + ")", L && Ct ? this.t.setAttribute("transform", "matrix(" + T) : P[$t] = (S.xPercent || S.yPercent ? "translate(" + S.xPercent + "%," + S.yPercent + "%) matrix(" : "matrix(") + T) : P[$t] = (S.xPercent || S.yPercent ? "translate(" + S.xPercent + "%," + S.yPercent + "%) matrix(" : "matrix(") + R + ",0,0," + M + "," + E + "," + $ + ")";
                    else {
                        if (d && ((m = 1e-4) > R && R > -m && (R = D = 2e-5), m > M && M > -m && (M = D = 2e-5), !I || S.z || S.rotationX || S.rotationY || (I = 0)), O || X) O *= F, g = i = Math.cos(O), v = r = Math.sin(O), X && (O -= X * F, g = Math.cos(O), v = Math.sin(O), "simple" === S.skewType && (e = Math.tan((X - j) * F), g *= e = Math.sqrt(1 + e * e), v *= e, S.skewY && (e = Math.tan(j * F), i *= e = Math.sqrt(1 + e * e), r *= e))), s = -v, o = g;
                        else {
                            if (!(A || C || 1 !== D || I || L)) return void(P[$t] = (S.xPercent || S.yPercent ? "translate(" + S.xPercent + "%," + S.yPercent + "%) translate3d(" : "translate3d(") + E + "px," + $ + "px," + z + "px)" + (1 !== R || 1 !== M ? " scale(" + R + "," + M + ")" : ""));
                            i = o = 1, s = r = 0
                        }
                        c = 1, n = a = l = h = u = p = 0, f = I ? -1 / I : 0, _ = S.zOrigin, m = 1e-6, x = ",", w = "0", (O = A * F) && (g = Math.cos(O), l = -(v = Math.sin(O)), u = f * -v, n = i * v, a = r * v, c = g, f *= g, i *= g, r *= g), (O = C * F) && (e = s * (g = Math.cos(O)) + n * (v = Math.sin(O)), y = o * g + a * v, h = c * v, p = f * v, n = s * -v + n * g, a = o * -v + a * g, c *= g, f *= g, s = e, o = y), 1 !== D && (n *= D, a *= D, c *= D, f *= D), 1 !== M && (s *= M, o *= M, h *= M, p *= M), 1 !== R && (i *= R, r *= R, l *= R, u *= R), (_ || L) && (_ && (E += n * -_, $ += a * -_, z += c * -_ + _), L && (E += S.xOrigin - (S.xOrigin * i + S.yOrigin * s) + S.xOffset, $ += S.yOrigin - (S.xOrigin * r + S.yOrigin * o) + S.yOffset), m > E && E > -m && (E = w), m > $ && $ > -m && ($ = w), m > z && z > -m && (z = 0)), T = S.xPercent || S.yPercent ? "translate(" + S.xPercent + "%," + S.yPercent + "%) matrix3d(" : "matrix3d(", T += (m > i && i > -m ? w : i) + x + (m > r && r > -m ? w : r) + x + (m > l && l > -m ? w : l), T += x + (m > u && u > -m ? w : u) + x + (m > s && s > -m ? w : s) + x + (m > o && o > -m ? w : o), C || A || 1 !== D ? (T += x + (m > h && h > -m ? w : h) + x + (m > p && p > -m ? w : p) + x + (m > n && n > -m ? w : n), T += x + (m > a && a > -m ? w : a) + x + (m > c && c > -m ? w : c) + x + (m > f && f > -m ? w : f) + x) : T += ",0,0,0,0,1,0,", T += E + x + $ + x + z + x + (I ? 1 + -z / I : 1) + ")", P[$t] = T
                    }
                };
            (h = Ft.prototype).x = h.y = h.z = h.skewX = h.skewY = h.rotation = h.rotationX = h.rotationY = h.zOrigin = h.xPercent = h.yPercent = h.xOffset = h.yOffset = 0, h.scaleX = h.scaleY = h.scaleZ = 1, Pt("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin", {
                parser: function(t, e, i, s, r, a, l) {
                    if (s._lastParsedTransform === l) return r;
                    s._lastParsedTransform = l;
                    var h, c = l.scale && "function" == typeof l.scale ? l.scale : 0;
                    "function" == typeof l[i] && (h = l[i], l[i] = e), c && (l.scale = c(g, t));
                    var u, p, d, f, _, v, y, T, x, w = t._gsTransform,
                        b = t.style,
                        k = Et.length,
                        S = l,
                        P = {},
                        O = "transformOrigin",
                        C = Vt(t, n, !0, S.parseTransform),
                        A = S.transform && ("function" == typeof S.transform ? S.transform(g, m) : S.transform);
                    if (C.skewType = S.skewType || C.skewType || o.defaultSkewType, s._transform = C, A && "string" == typeof A && $t)(p = H.style)[$t] = A, p.display = "block", p.position = "absolute", B.body.appendChild(H), u = Vt(H, null, !1), "simple" === C.skewType && (u.scaleY *= Math.cos(u.skewX * F)), C.svg && (v = C.xOrigin, y = C.yOrigin, u.x -= C.xOffset, u.y -= C.yOffset, (S.transformOrigin || S.svgOrigin) && (A = {}, qt(t, ht(S.transformOrigin), A, S.svgOrigin, S.smoothOrigin, !0), v = A.xOrigin, y = A.yOrigin, u.x -= A.xOffset - C.xOffset, u.y -= A.yOffset - C.yOffset), (v || y) && (T = Wt(H, !0), u.x -= v - (v * T[0] + y * T[2]), u.y -= y - (v * T[1] + y * T[3]))), B.body.removeChild(H), u.perspective || (u.perspective = C.perspective), null != S.xPercent && (u.xPercent = ut(S.xPercent, C.xPercent)), null != S.yPercent && (u.yPercent = ut(S.yPercent, C.yPercent));
                    else if ("object" == typeof S) {
                        if (u = { scaleX: ut(null != S.scaleX ? S.scaleX : S.scale, C.scaleX), scaleY: ut(null != S.scaleY ? S.scaleY : S.scale, C.scaleY), scaleZ: ut(S.scaleZ, C.scaleZ), x: ut(S.x, C.x), y: ut(S.y, C.y), z: ut(S.z, C.z), xPercent: ut(S.xPercent, C.xPercent), yPercent: ut(S.yPercent, C.yPercent), perspective: ut(S.transformPerspective, C.perspective) }, null != (_ = S.directionalRotation))
                            if ("object" == typeof _)
                                for (p in _) S[p] = _[p];
                            else S.rotation = _;
                            "string" == typeof S.x && -1 !== S.x.indexOf("%") && (u.x = 0, u.xPercent = ut(S.x, C.xPercent)), "string" == typeof S.y && -1 !== S.y.indexOf("%") && (u.y = 0, u.yPercent = ut(S.y, C.yPercent)), u.rotation = pt("rotation" in S ? S.rotation : "shortRotation" in S ? S.shortRotation + "_short" : "rotationZ" in S ? S.rotationZ : C.rotation, C.rotation, "rotation", P), It && (u.rotationX = pt("rotationX" in S ? S.rotationX : "shortRotationX" in S ? S.shortRotationX + "_short" : C.rotationX || 0, C.rotationX, "rotationX", P), u.rotationY = pt("rotationY" in S ? S.rotationY : "shortRotationY" in S ? S.shortRotationY + "_short" : C.rotationY || 0, C.rotationY, "rotationY", P)), u.skewX = pt(S.skewX, C.skewX), u.skewY = pt(S.skewY, C.skewY)
                    }
                    for (It && null != S.force3D && (C.force3D = S.force3D, f = !0), (d = C.force3D || C.z || C.rotationX || C.rotationY || u.z || u.rotationX || u.rotationY || u.perspective) || null == S.scale || (u.scaleZ = 1); --k > -1;)((A = u[x = Et[k]] - C[x]) > 1e-6 || -1e-6 > A || null != S[x] || null != j[x]) && (f = !0, r = new xt(C, x, C[x], A, r), x in P && (r.e = P[x]), r.xs0 = 0, r.plugin = a, s._overwriteProps.push(r.n));
                    return A = S.transformOrigin, C.svg && (A || S.svgOrigin) && (v = C.xOffset, y = C.yOffset, qt(t, ht(A), u, S.svgOrigin, S.smoothOrigin), r = wt(C, "xOrigin", (w ? C : u).xOrigin, u.xOrigin, r, O), r = wt(C, "yOrigin", (w ? C : u).yOrigin, u.yOrigin, r, O), (v !== C.xOffset || y !== C.yOffset) && (r = wt(C, "xOffset", w ? v : C.xOffset, C.xOffset, r, O), r = wt(C, "yOffset", w ? y : C.yOffset, C.yOffset, r, O)), A = "0px 0px"), (A || It && d && C.zOrigin) && ($t ? (f = !0, x = Lt, A = (A || et(t, x, n, !1, "50% 50%")) + "", (r = new xt(b, x, 0, 0, r, -1, O)).b = b[x], r.plugin = a, It ? (p = C.zOrigin, A = A.split(" "), C.zOrigin = (A.length > 2 && (0 === p || "0px" !== A[2]) ? parseFloat(A[2]) : p) || 0, r.xs0 = r.e = A[0] + " " + (A[1] || "50%") + " 0px", (r = new xt(C, "zOrigin", 0, 0, r, -1, r.n)).b = p, r.xs0 = r.e = C.zOrigin) : r.xs0 = r.e = A) : ht(A + "", C)), f && (s._transformType = C.svg && Ct || !d && 3 !== this._transformType ? 2 : 3), h && (l[i] = h), c && (l.scale = c), r
                },
                prefix: !0
            }), Pt("boxShadow", { defaultValue: "0px 0px 0px 0px #999", prefix: !0, color: !0, multi: !0, keyword: "inset" }), Pt("borderRadius", {
                defaultValue: "0px",
                parser: function(t, e, i, r, o, a) {
                    e = this.format(e);
                    var l, h, c, u, p, d, f, _, m, g, v, y, T, x, w, b, k = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"],
                        S = t.style;
                    for (m = parseFloat(t.offsetWidth), g = parseFloat(t.offsetHeight), l = e.split(" "), h = 0; h < k.length; h++) this.p.indexOf("border") && (k[h] = J(k[h])), -1 !== (p = u = et(t, k[h], n, !1, "0px")).indexOf(" ") && (p = (u = p.split(" "))[0], u = u[1]), d = c = l[h], f = parseFloat(p), y = p.substr((f + "").length), (T = "=" === d.charAt(1)) ? (_ = parseInt(d.charAt(0) + "1", 10), d = d.substr(2), _ *= parseFloat(d), v = d.substr((_ + "").length - (0 > _ ? 1 : 0)) || "") : (_ = parseFloat(d), v = d.substr((_ + "").length)), "" === v && (v = s[i] || y), v !== y && (x = it(t, "borderLeft", f, y), w = it(t, "borderTop", f, y), "%" === v ? (p = x / m * 100 + "%", u = w / g * 100 + "%") : "em" === v ? (p = x / (b = it(t, "borderLeft", 1, "em")) + "em", u = w / b + "em") : (p = x + "px", u = w + "px"), T && (d = parseFloat(p) + _ + v, c = parseFloat(u) + _ + v)), o = bt(S, k[h], p + " " + u, d + " " + c, !1, "0px", o);
                    return o
                },
                prefix: !0,
                formatter: vt("0px 0px 0px 0px", !1, !0)
            }), Pt("borderBottomLeftRadius,borderBottomRightRadius,borderTopLeftRadius,borderTopRightRadius", { defaultValue: "0px", parser: function(t, e, i, s, r, o) { return bt(t.style, i, this.format(et(t, i, n, !1, "0px 0px")), this.format(e), !1, "0px", r) }, prefix: !0, formatter: vt("0px 0px", !1, !0) }), Pt("backgroundPosition", {
                defaultValue: "0 0",
                parser: function(t, e, i, s, r, o) {
                    var a, l, h, c, u, p, d = "background-position",
                        f = n || tt(t, null),
                        m = this.format((f ? _ ? f.getPropertyValue(d + "-x") + " " + f.getPropertyValue(d + "-y") : f.getPropertyValue(d) : t.currentStyle.backgroundPositionX + " " + t.currentStyle.backgroundPositionY) || "0 0"),
                        g = this.format(e);
                    if (-1 !== m.indexOf("%") != (-1 !== g.indexOf("%")) && g.split(",").length < 2 && ((p = et(t, "backgroundImage").replace(M, "")) && "none" !== p)) {
                        for (a = m.split(" "), l = g.split(" "), Y.setAttribute("src", p), h = 2; --h > -1;)(c = -1 !== (m = a[h]).indexOf("%")) !== (-1 !== l[h].indexOf("%")) && (u = 0 === h ? t.offsetWidth - Y.width : t.offsetHeight - Y.height, a[h] = c ? parseFloat(m) / 100 * u + "px" : parseFloat(m) / u * 100 + "%");
                        m = a.join(" ")
                    }
                    return this.parseComplex(t.style, m, g, r, o)
                },
                formatter: ht
            }), Pt("backgroundSize", { defaultValue: "0 0", formatter: function(t) { return ht(-1 === (t += "").indexOf(" ") ? t + " " + t : t) } }), Pt("perspective", { defaultValue: "0px", prefix: !0 }), Pt("perspectiveOrigin", { defaultValue: "50% 50%", prefix: !0 }), Pt("transformStyle", { prefix: !0 }), Pt("backfaceVisibility", { prefix: !0 }), Pt("userSelect", { prefix: !0 }), Pt("margin", { parser: yt("marginTop,marginRight,marginBottom,marginLeft") }), Pt("padding", { parser: yt("paddingTop,paddingRight,paddingBottom,paddingLeft") }), Pt("clip", { defaultValue: "rect(0px,0px,0px,0px)", parser: function(t, e, i, s, r, o) { var a, l, h; return 9 > _ ? (l = t.currentStyle, h = 8 > _ ? " " : ",", a = "rect(" + l.clipTop + h + l.clipRight + h + l.clipBottom + h + l.clipLeft + ")", e = this.format(e).split(",").join(h)) : (a = this.format(et(t, this.p, n, !1, this.dflt)), e = this.format(e)), this.parseComplex(t.style, a, e, r, o) } }), Pt("textShadow", { defaultValue: "0px 0px 0px #999", color: !0, multi: !0 }), Pt("autoRound,strictUnits", { parser: function(t, e, i, s, n) { return n } }), Pt("border", {
                defaultValue: "0px solid #000",
                parser: function(t, e, i, s, r, o) {
                    var a = et(t, "borderTopWidth", n, !1, "0px"),
                        l = this.format(e).split(" "),
                        h = l[0].replace(k, "");
                    return "px" !== h && (a = parseFloat(a) / it(t, "borderTopWidth", 1, h) + h), this.parseComplex(t.style, this.format(a + " " + et(t, "borderTopStyle", n, !1, "solid") + " " + et(t, "borderTopColor", n, !1, "#000")), l.join(" "), r, o)
                },
                color: !0,
                formatter: function(t) { var e = t.split(" "); return e[0] + " " + (e[1] || "solid") + " " + (t.match(gt) || ["#000"])[0] }
            }), Pt("borderWidth", { parser: yt("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth") }), Pt("float,cssFloat,styleFloat", {
                parser: function(t, e, i, s, n, r) {
                    var o = t.style,
                        a = "cssFloat" in o ? "cssFloat" : "styleFloat";
                    return new xt(o, a, 0, 0, n, -1, i, !1, 0, o[a], e)
                }
            });
            var Qt = function(t) {
                var e, i = this.t,
                    s = i.filter || et(this.data, "filter") || "",
                    n = this.s + this.c * t | 0;
                100 === n && (-1 === s.indexOf("atrix(") && -1 === s.indexOf("radient(") && -1 === s.indexOf("oader(") ? (i.removeAttribute("filter"), e = !et(this.data, "filter")) : (i.filter = s.replace(O, ""), e = !0)), e || (this.xn1 && (i.filter = s = s || "alpha(opacity=" + n + ")"), -1 === s.indexOf("pacity") ? 0 === n && this.xn1 || (i.filter = s + " alpha(opacity=" + n + ")") : i.filter = s.replace(S, "opacity=" + n))
            };
            Pt("opacity,alpha,autoAlpha", {
                defaultValue: "1",
                parser: function(t, e, i, s, r, o) {
                    var a = parseFloat(et(t, "opacity", n, !1, "1")),
                        l = t.style,
                        h = "autoAlpha" === i;
                    return "string" == typeof e && "=" === e.charAt(1) && (e = ("-" === e.charAt(0) ? -1 : 1) * parseFloat(e.substr(2)) + a), h && 1 === a && "hidden" === et(t, "visibility", n) && 0 !== e && (a = 0), V ? r = new xt(l, "opacity", a, e - a, r) : ((r = new xt(l, "opacity", 100 * a, 100 * (e - a), r)).xn1 = h ? 1 : 0, l.zoom = 1, r.type = 2, r.b = "alpha(opacity=" + r.s + ")", r.e = "alpha(opacity=" + (r.s + r.c) + ")", r.data = t, r.plugin = o, r.setRatio = Qt), h && ((r = new xt(l, "visibility", 0, 0, r, -1, null, !1, 0, 0 !== a ? "inherit" : "hidden", 0 === e ? "hidden" : "inherit")).xs0 = "inherit", s._overwriteProps.push(r.n), s._overwriteProps.push(i)), r
                }
            });
            var Kt = function(t, e) { e && (t.removeProperty ? (("ms" === e.substr(0, 2) || "webkit" === e.substr(0, 6)) && (e = "-" + e), t.removeProperty(e.replace(A, "-$1").toLowerCase())) : t.removeAttribute(e)) },
                Jt = function(t) {
                    if (this.t._gsClassPT = this, 1 === t || 0 === t) {
                        this.t.setAttribute("class", 0 === t ? this.b : this.e);
                        for (var e = this.data, i = this.t.style; e;) e.v ? i[e.p] = e.v : Kt(i, e.p), e = e._next;
                        1 === t && this.t._gsClassPT === this && (this.t._gsClassPT = null)
                    } else this.t.getAttribute("class") !== this.e && this.t.setAttribute("class", this.e)
                };
            Pt("className", {
                parser: function(t, e, s, r, o, a, l) {
                    var h, c, u, p, d, f = t.getAttribute("class") || "",
                        _ = t.style.cssText;
                    if ((o = r._classNamePT = new xt(t, s, 0, 0, o, 2)).setRatio = Jt, o.pr = -11, i = !0, o.b = f, c = nt(t, n), u = t._gsClassPT) {
                        for (p = {}, d = u.data; d;) p[d.p] = 1, d = d._next;
                        u.setRatio(1)
                    }
                    return t._gsClassPT = o, o.e = "=" !== e.charAt(1) ? e : f.replace(new RegExp("(?:\\s|^)" + e.substr(2) + "(?![\\w-])"), "") + ("+" === e.charAt(0) ? " " + e.substr(2) : ""), t.setAttribute("class", o.e), h = rt(t, c, nt(t), l, p), t.setAttribute("class", f), o.data = h.firstMPT, t.style.cssText = _, o.xfirst = r.parse(t, h.difs, o, a)
                }
            });
            var te = function(t) {
                if ((1 === t || 0 === t) && this.data._totalTime === this.data._totalDuration && "isFromStart" !== this.data.data) {
                    var e, i, s, n, r, o = this.t.style,
                        a = l.transform.parse;
                    if ("all" === this.e) o.cssText = "", n = !0;
                    else
                        for (s = (e = this.e.split(" ").join("").split(",")).length; --s > -1;) i = e[s], l[i] && (l[i].parse === a ? n = !0 : i = "transformOrigin" === i ? Lt : l[i].p), Kt(o, i);
                    n && (Kt(o, $t), (r = this.t._gsTransform) && (r.svg && (this.t.removeAttribute("data-svg-origin"), this.t.removeAttribute("transform")), delete this.t._gsTransform))
                }
            };
            for (Pt("clearProps", { parser: function(t, e, s, n, r) { return (r = new xt(t, s, 0, 0, r, 2)).setRatio = te, r.e = e, r.pr = -10, r.data = n._tween, i = !0, r } }), h = "bezier,throwProps,physicsProps,physics2D".split(","), kt = h.length; kt--;) Ot(h[kt]);
            (h = o.prototype)._firstPT = h._lastParsedTransform = h._transform = null, h._onInitTween = function(t, e, a, h) {
                if (!t.nodeType) return !1;
                this._target = m = t, this._tween = a, this._vars = e, g = h, c = e.autoRound, i = !1, s = e.suffixMap || o.suffixMap, n = tt(t, ""), r = this._overwriteProps;
                var d, _, v, y, T, x, w, b, k, S = t.style;
                if (u && "" === S.zIndex && (("auto" === (d = et(t, "zIndex", n)) || "" === d) && this._addLazySet(S, "zIndex", 0)), "string" == typeof e && (y = S.cssText, d = nt(t, n), S.cssText = y + ";" + e, d = rt(t, d, nt(t)).difs, !V && P.test(e) && (d.opacity = parseFloat(RegExp.$1)), e = d, S.cssText = y), e.className ? this._firstPT = _ = l.className.parse(t, e.className, "className", this, null, null, e) : this._firstPT = _ = this.parse(t, e, null), this._transformType) {
                    for (k = 3 === this._transformType, $t ? p && (u = !0, "" === S.zIndex && (("auto" === (w = et(t, "zIndex", n)) || "" === w) && this._addLazySet(S, "zIndex", 0)), f && this._addLazySet(S, "WebkitBackfaceVisibility", this._vars.WebkitBackfaceVisibility || (k ? "visible" : "hidden"))) : S.zoom = 1, v = _; v && v._next;) v = v._next;
                    b = new xt(t, "transform", 0, 0, null, 2), this._linkCSSP(b, null, v), b.setRatio = $t ? Zt : Gt, b.data = this._transform || Vt(t, n, !0), b.tween = a, b.pr = -1, r.pop()
                }
                if (i) {
                    for (; _;) {
                        for (x = _._next, v = y; v && v.pr > _.pr;) v = v._next;
                        (_._prev = v ? v._prev : T) ? _._prev._next = _: y = _, (_._next = v) ? v._prev = _ : T = _, _ = x
                    }
                    this._firstPT = y
                }
                return !0
            }, h.parse = function(t, e, i, r) {
                var o, a, h, u, p, d, f, _, v, y, T = t.style;
                for (o in e) {
                    if ("function" == typeof(d = e[o]) && (d = d(g, m)), a = l[o]) i = a.parse(t, d, o, this, i, r, e);
                    else {
                        if ("--" === o.substr(0, 2)) { this._tween._propLookup[o] = this._addTween.call(this._tween, t.style, "setProperty", tt(t).getPropertyValue(o) + "", d + "", o, !1, o); continue }
                        p = et(t, o, n) + "", v = "string" == typeof d, "color" === o || "fill" === o || "stroke" === o || -1 !== o.indexOf("Color") || v && C.test(d) ? (v || (d = ((d = _t(d)).length > 3 ? "rgba(" : "rgb(") + d.join(",") + ")"), i = bt(T, o, p, d, !0, "transparent", i, 0, r)) : v && I.test(d) ? i = bt(T, o, p, d, !0, null, i, 0, r) : (f = (h = parseFloat(p)) || 0 === h ? p.substr((h + "").length) : "", ("" === p || "auto" === p) && ("width" === o || "height" === o ? (h = lt(t, o, n), f = "px") : "left" === o || "top" === o ? (h = st(t, o, n), f = "px") : (h = "opacity" !== o ? 0 : 1, f = "")), (y = v && "=" === d.charAt(1)) ? (u = parseInt(d.charAt(0) + "1", 10), d = d.substr(2), u *= parseFloat(d), _ = d.replace(k, "")) : (u = parseFloat(d), _ = v ? d.replace(k, "") : ""), "" === _ && (_ = o in s ? s[o] : f), d = u || 0 === u ? (y ? u + h : u) + _ : e[o], f !== _ && ("" !== _ || "lineHeight" === o) && (u || 0 === u) && h && (h = it(t, o, h, f), "%" === _ ? (h /= it(t, o, 100, "%") / 100, !0 !== e.strictUnits && (p = h + "%")) : "em" === _ || "rem" === _ || "vw" === _ || "vh" === _ ? h /= it(t, o, 1, _) : "px" !== _ && (u = it(t, o, u, _), _ = "px"), y && (u || 0 === u) && (d = u + h + _)), y && (u += h), !h && 0 !== h || !u && 0 !== u ? void 0 !== T[o] && (d || d + "" != "NaN" && null != d) ? (i = new xt(T, o, u || h || 0, 0, i, -1, o, !1, 0, p, d)).xs0 = "none" !== d || "display" !== o && -1 === o.indexOf("Style") ? d : p : Z("invalid " + o + " tween value: " + e[o]) : (i = new xt(T, o, h, u - h, i, 0, o, !1 !== c && ("px" === _ || "zIndex" === o), 0, p, d)).xs0 = _)
                    }
                    r && i && !i.plugin && (i.plugin = r)
                }
                return i
            }, h.setRatio = function(t) {
                var e, i, s, n = this._firstPT;
                if (1 !== t || this._tween._time !== this._tween._duration && 0 !== this._tween._time)
                    if (t || this._tween._time !== this._tween._duration && 0 !== this._tween._time || -1e-6 === this._tween._rawPrevTime)
                        for (; n;) {
                            if (e = n.c * t + n.s, n.r ? e = Math.round(e) : 1e-6 > e && e > -1e-6 && (e = 0), n.type)
                                if (1 === n.type)
                                    if (2 === (s = n.l)) n.t[n.p] = n.xs0 + e + n.xs1 + n.xn1 + n.xs2;
                                    else if (3 === s) n.t[n.p] = n.xs0 + e + n.xs1 + n.xn1 + n.xs2 + n.xn2 + n.xs3;
                            else if (4 === s) n.t[n.p] = n.xs0 + e + n.xs1 + n.xn1 + n.xs2 + n.xn2 + n.xs3 + n.xn3 + n.xs4;
                            else if (5 === s) n.t[n.p] = n.xs0 + e + n.xs1 + n.xn1 + n.xs2 + n.xn2 + n.xs3 + n.xn3 + n.xs4 + n.xn4 + n.xs5;
                            else {
                                for (i = n.xs0 + e + n.xs1, s = 1; s < n.l; s++) i += n["xn" + s] + n["xs" + (s + 1)];
                                n.t[n.p] = i
                            } else -1 === n.type ? n.t[n.p] = n.xs0 : n.setRatio && n.setRatio(t);
                            else n.t[n.p] = e + n.xs0;
                            n = n._next
                        } else
                            for (; n;) 2 !== n.type ? n.t[n.p] = n.b : n.setRatio(t), n = n._next;
                    else
                        for (; n;) {
                            if (2 !== n.type)
                                if (n.r && -1 !== n.type)
                                    if (e = Math.round(n.s + n.c), n.type) {
                                        if (1 === n.type) {
                                            for (s = n.l, i = n.xs0 + e + n.xs1, s = 1; s < n.l; s++) i += n["xn" + s] + n["xs" + (s + 1)];
                                            n.t[n.p] = i
                                        }
                                    } else n.t[n.p] = e + n.xs0;
                            else n.t[n.p] = n.e;
                            else n.setRatio(t);
                            n = n._next
                        }
            }, h._enableTransforms = function(t) { this._transform = this._transform || Vt(this._target, n, !0), this._transformType = this._transform.svg && Ct || !t && 3 !== this._transformType ? 2 : 3 };
            var ee = function(t) { this.t[this.p] = this.e, this.data._linkCSSP(this, this._next, null, !0) };
            h._addLazySet = function(t, e, i) {
                var s = this._firstPT = new xt(t, e, 0, 0, this._firstPT, 2);
                s.e = i, s.setRatio = ee, s.data = this
            }, h._linkCSSP = function(t, e, i, s) { return t && (e && (e._prev = t), t._next && (t._next._prev = t._prev), t._prev ? t._prev._next = t._next : this._firstPT === t && (this._firstPT = t._next, s = !0), i ? i._next = t : s || null !== this._firstPT || (this._firstPT = t), t._next = e, t._prev = i), t }, h._mod = function(t) { for (var e = this._firstPT; e;) "function" == typeof t[e.p] && t[e.p] === Math.round && (e.r = 1), e = e._next }, h._kill = function(e) {
                var i, s, n, r = e;
                if (e.autoAlpha || e.alpha) {
                    for (s in r = {}, e) r[s] = e[s];
                    r.opacity = 1, r.autoAlpha && (r.visibility = 1)
                }
                for (e.className && (i = this._classNamePT) && ((n = i.xfirst) && n._prev ? this._linkCSSP(n._prev, i._next, n._prev._prev) : n === this._firstPT && (this._firstPT = i._next), i._next && this._linkCSSP(i._next, i._next._next, n._prev), this._classNamePT = null), i = this._firstPT; i;) i.plugin && i.plugin !== s && i.plugin._kill && (i.plugin._kill(e), s = i.plugin), i = i._next;
                return t.prototype._kill.call(this, r)
            };
            var ie = function(t, e, i) {
                var s, n, r, o;
                if (t.slice)
                    for (n = t.length; --n > -1;) ie(t[n], e, i);
                else
                    for (n = (s = t.childNodes).length; --n > -1;) o = (r = s[n]).type, r.style && (e.push(nt(r)), i && i.push(r)), 1 !== o && 9 !== o && 11 !== o || !r.childNodes.length || ie(r, e, i)
            };
            return o.cascadeTo = function(t, i, s) {
                var n, r, o, a, l = e.to(t, i, s),
                    h = [l],
                    c = [],
                    u = [],
                    p = [],
                    d = e._internals.reservedProps;
                for (t = l._targets || l.target, ie(t, c, p), l.render(i, !0, !0), ie(t, u), l.render(0, !0, !0), l._enabled(!0), n = p.length; --n > -1;)
                    if ((r = rt(p[n], c[n], u[n])).firstMPT) {
                        for (o in r = r.difs, s) d[o] && (r[o] = s[o]);
                        for (o in a = {}, r) a[o] = c[n][o];
                        h.push(e.fromTo(p[n], i, a, r))
                    }
                return h
            }, t.activate([o]), o
        }, !0), t = _gsScope._gsDefine.plugin({ propName: "roundProps", version: "1.6.0", priority: -1, API: 2, init: function(t, e, i) { return this._tween = i, !0 } }), e = function(t) { for (; t;) t.f || t.blob || (t.m = Math.round), t = t._next }, (i = t.prototype)._onInitAllProps = function() {
            for (var t, i, s, n = this._tween, r = n.vars.roundProps.join ? n.vars.roundProps : n.vars.roundProps.split(","), o = r.length, a = {}, l = n._propLookup.roundProps; --o > -1;) a[r[o]] = Math.round;
            for (o = r.length; --o > -1;)
                for (t = r[o], i = n._firstPT; i;) s = i._next, i.pg ? i.t._mod(a) : i.n === t && (2 === i.f && i.t ? e(i.t._firstPT) : (this._add(i.t, t, i.s, i.c), s && (s._prev = i._prev), i._prev ? i._prev._next = s : n._firstPT === i && (n._firstPT = s), i._next = i._prev = null, n._propLookup[t] = l)), i = s;
            return !1
        }, i._add = function(t, e, i, s) { this._addTween(t, e, i, i + s, e, Math.round), this._overwriteProps.push(e) }, _gsScope._gsDefine.plugin({ propName: "attr", API: 2, version: "0.6.1", init: function(t, e, i, s) { var n, r; if ("function" != typeof t.setAttribute) return !1; for (n in e) "function" == typeof(r = e[n]) && (r = r(s, t)), this._addTween(t, "setAttribute", t.getAttribute(n) + "", r + "", n, !1, n), this._overwriteProps.push(n); return !0 } }), _gsScope._gsDefine.plugin({
            propName: "directionalRotation",
            version: "0.3.1",
            API: 2,
            init: function(t, e, i, s) { "object" != typeof e && (e = { rotation: e }), this.finals = {}; var n, r, o, a, l, h, c = !0 === e.useRadians ? 2 * Math.PI : 360; for (n in e) "useRadians" !== n && ("function" == typeof(a = e[n]) && (a = a(s, t)), r = (h = (a + "").split("_"))[0], o = parseFloat("function" != typeof t[n] ? t[n] : t[n.indexOf("set") || "function" != typeof t["get" + n.substr(3)] ? n : "get" + n.substr(3)]()), l = (a = this.finals[n] = "string" == typeof r && "=" === r.charAt(1) ? o + parseInt(r.charAt(0) + "1", 10) * Number(r.substr(2)) : Number(r) || 0) - o, h.length && (-1 !== (r = h.join("_")).indexOf("short") && ((l %= c) !== l % (c / 2) && (l = 0 > l ? l + c : l - c)), -1 !== r.indexOf("_cw") && 0 > l ? l = (l + 9999999999 * c) % c - (l / c | 0) * c : -1 !== r.indexOf("ccw") && l > 0 && (l = (l - 9999999999 * c) % c - (l / c | 0) * c)), (l > 1e-6 || -1e-6 > l) && (this._addTween(t, n, o, o + l, n), this._overwriteProps.push(n))); return !0 },
            set: function(t) {
                var e;
                if (1 !== t) this._super.setRatio.call(this, t);
                else
                    for (e = this._firstPT; e;) e.f ? e.t[e.p](this.finals[e.p]) : e.t[e.p] = this.finals[e.p], e = e._next
            }
        })._autoCSS = !0, _gsScope._gsDefine("easing.Back", ["easing.Ease"], function(t) {
            var e, i, s, n = _gsScope.GreenSockGlobals || _gsScope,
                r = n.com.greensock,
                o = 2 * Math.PI,
                a = Math.PI / 2,
                l = r._class,
                h = function(e, i) {
                    var s = l("easing." + e, function() {}, !0),
                        n = s.prototype = new t;
                    return n.constructor = s, n.getRatio = i, s
                },
                c = t.register || function() {},
                u = function(t, e, i, s, n) { var r = l("easing." + t, { easeOut: new e, easeIn: new i, easeInOut: new s }, !0); return c(r, t), r },
                p = function(t, e, i) { this.t = t, this.v = e, i && (this.next = i, i.prev = this, this.c = i.v - e, this.gap = i.t - t) },
                d = function(e, i) {
                    var s = l("easing." + e, function(t) { this._p1 = t || 0 === t ? t : 1.70158, this._p2 = 1.525 * this._p1 }, !0),
                        n = s.prototype = new t;
                    return n.constructor = s, n.getRatio = i, n.config = function(t) { return new s(t) }, s
                },
                f = u("Back", d("BackOut", function(t) { return (t -= 1) * t * ((this._p1 + 1) * t + this._p1) + 1 }), d("BackIn", function(t) { return t * t * ((this._p1 + 1) * t - this._p1) }), d("BackInOut", function(t) { return (t *= 2) < 1 ? .5 * t * t * ((this._p2 + 1) * t - this._p2) : .5 * ((t -= 2) * t * ((this._p2 + 1) * t + this._p2) + 2) })),
                _ = l("easing.SlowMo", function(t, e, i) { e = e || 0 === e ? e : .7, null == t ? t = .7 : t > 1 && (t = 1), this._p = 1 !== t ? e : 0, this._p1 = (1 - t) / 2, this._p2 = t, this._p3 = this._p1 + this._p2, this._calcEnd = !0 === i }, !0),
                m = _.prototype = new t;
            return m.constructor = _, m.getRatio = function(t) { var e = t + (.5 - t) * this._p; return t < this._p1 ? this._calcEnd ? 1 - (t = 1 - t / this._p1) * t : e - (t = 1 - t / this._p1) * t * t * t * e : t > this._p3 ? this._calcEnd ? 1 === t ? 0 : 1 - (t = (t - this._p3) / this._p1) * t : e + (t - e) * (t = (t - this._p3) / this._p1) * t * t * t : this._calcEnd ? 1 : e }, _.ease = new _(.7, .7), m.config = _.config = function(t, e, i) { return new _(t, e, i) }, (m = (e = l("easing.SteppedEase", function(t, e) { t = t || 1, this._p1 = 1 / t, this._p2 = t + (e ? 0 : 1), this._p3 = e ? 1 : 0 }, !0)).prototype = new t).constructor = e, m.getRatio = function(t) { return 0 > t ? t = 0 : t >= 1 && (t = .999999999), ((this._p2 * t | 0) + this._p3) * this._p1 }, m.config = e.config = function(t, i) { return new e(t, i) }, (m = (i = l("easing.RoughEase", function(e) {
                for (var i, s, n, r, o, a, l = (e = e || {}).taper || "none", h = [], c = 0, u = 0 | (e.points || 20), d = u, f = !1 !== e.randomize, _ = !0 === e.clamp, m = e.template instanceof t ? e.template : null, g = "number" == typeof e.strength ? .4 * e.strength : .4; --d > -1;) i = f ? Math.random() : 1 / u * d, s = m ? m.getRatio(i) : i, "none" === l ? n = g : "out" === l ? n = (r = 1 - i) * r * g : "in" === l ? n = i * i * g : .5 > i ? n = (r = 2 * i) * r * .5 * g : n = (r = 2 * (1 - i)) * r * .5 * g, f ? s += Math.random() * n - .5 * n : d % 2 ? s += .5 * n : s -= .5 * n, _ && (s > 1 ? s = 1 : 0 > s && (s = 0)), h[c++] = { x: i, y: s };
                for (h.sort(function(t, e) { return t.x - e.x }), a = new p(1, 1, null), d = u; --d > -1;) o = h[d], a = new p(o.x, o.y, a);
                this._prev = new p(0, 0, 0 !== a.t ? a : a.next)
            }, !0)).prototype = new t).constructor = i, m.getRatio = function(t) {
                var e = this._prev;
                if (t > e.t) {
                    for (; e.next && t >= e.t;) e = e.next;
                    e = e.prev
                } else
                    for (; e.prev && t <= e.t;) e = e.prev;
                return this._prev = e, e.v + (t - e.t) / e.gap * e.c
            }, m.config = function(t) { return new i(t) }, i.ease = new i, u("Bounce", h("BounceOut", function(t) { return 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375 }), h("BounceIn", function(t) { return (t = 1 - t) < 1 / 2.75 ? 1 - 7.5625 * t * t : 2 / 2.75 > t ? 1 - (7.5625 * (t -= 1.5 / 2.75) * t + .75) : 2.5 / 2.75 > t ? 1 - (7.5625 * (t -= 2.25 / 2.75) * t + .9375) : 1 - (7.5625 * (t -= 2.625 / 2.75) * t + .984375) }), h("BounceInOut", function(t) { var e = .5 > t; return t = 1 / 2.75 > (t = e ? 1 - 2 * t : 2 * t - 1) ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375, e ? .5 * (1 - t) : .5 * t + .5 })), u("Circ", h("CircOut", function(t) { return Math.sqrt(1 - (t -= 1) * t) }), h("CircIn", function(t) { return -(Math.sqrt(1 - t * t) - 1) }), h("CircInOut", function(t) { return (t *= 2) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1) })), u("Elastic", (s = function(e, i, s) {
                var n = l("easing." + e, function(t, e) { this._p1 = t >= 1 ? t : 1, this._p2 = (e || s) / (1 > t ? t : 1), this._p3 = this._p2 / o * (Math.asin(1 / this._p1) || 0), this._p2 = o / this._p2 }, !0),
                    r = n.prototype = new t;
                return r.constructor = n, r.getRatio = i, r.config = function(t, e) { return new n(t, e) }, n
            })("ElasticOut", function(t) { return this._p1 * Math.pow(2, -10 * t) * Math.sin((t - this._p3) * this._p2) + 1 }, .3), s("ElasticIn", function(t) { return -this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2) }, .3), s("ElasticInOut", function(t) { return (t *= 2) < 1 ? this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2) * -.5 : this._p1 * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2) * .5 + 1 }, .45)), u("Expo", h("ExpoOut", function(t) { return 1 - Math.pow(2, -10 * t) }), h("ExpoIn", function(t) { return Math.pow(2, 10 * (t - 1)) - .001 }), h("ExpoInOut", function(t) { return (t *= 2) < 1 ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (2 - Math.pow(2, -10 * (t - 1))) })), u("Sine", h("SineOut", function(t) { return Math.sin(t * a) }), h("SineIn", function(t) { return 1 - Math.cos(t * a) }), h("SineInOut", function(t) { return -.5 * (Math.cos(Math.PI * t) - 1) })), l("easing.EaseLookup", { find: function(e) { return t.map[e] } }, !0), c(n.SlowMo, "SlowMo", "ease,"), c(i, "RoughEase", "ease,"), c(e, "SteppedEase", "ease,"), f
        }, !0)
    }), _gsScope._gsDefine && _gsScope._gsQueue.pop()(),
    function(t, e) {
        "use strict";
        var i, s, n = {},
            r = t.document,
            o = t.GreenSockGlobals = t.GreenSockGlobals || t;
        if (!o.TweenLite) {
            var a, l, h, c, u, p = function(t) {
                    var e, i = t.split("."),
                        s = o;
                    for (e = 0; e < i.length; e++) s[i[e]] = s = s[i[e]] || {};
                    return s
                },
                d = p("com.greensock"),
                f = 1e-10,
                _ = function(t) {
                    var e, i = [],
                        s = t.length;
                    for (e = 0; e !== s; i.push(t[e++]));
                    return i
                },
                m = function() {},
                g = (i = Object.prototype.toString, s = i.call([]), function(t) { return null != t && (t instanceof Array || "object" == typeof t && !!t.push && i.call(t) === s) }),
                v = {},
                y = function(i, s, r, a) {
                    this.sc = v[i] ? v[i].sc : [], v[i] = this, this.gsClass = null, this.func = r;
                    var l = [];
                    this.check = function(h) {
                        for (var c, u, d, f, _ = s.length, m = _; --_ > -1;)(c = v[s[_]] || new y(s[_], [])).gsClass ? (l[_] = c.gsClass, m--) : h && c.sc.push(this);
                        if (0 === m && r) {
                            if (d = (u = ("com.greensock." + i).split(".")).pop(), f = p(u.join("."))[d] = this.gsClass = r.apply(r, l), a)
                                if (o[d] = n[d] = f, "undefined" != typeof module && module.exports)
                                    if (i === e)
                                        for (_ in module.exports = n[e] = f, n) f[_] = n[_];
                                    else n[e] && (n[e][d] = f);
                            else "function" == typeof define && define.amd && define((t.GreenSockAMDPath ? t.GreenSockAMDPath + "/" : "") + i.split(".").pop(), [], function() { return f });
                            for (_ = 0; _ < this.sc.length; _++) this.sc[_].check()
                        }
                    }, this.check(!0)
                },
                T = t._gsDefine = function(t, e, i, s) { return new y(t, e, i, s) },
                x = d._class = function(t, e, i) { return e = e || function() {}, T(t, [], function() { return e }, i), e };
            T.globals = o;
            var w = [0, 0, 1, 1],
                b = x("easing.Ease", function(t, e, i, s) { this._func = t, this._type = i || 0, this._power = s || 0, this._params = e ? w.concat(e) : w }, !0),
                k = b.map = {},
                S = b.register = function(t, e, i, s) {
                    for (var n, r, o, a, l = e.split(","), h = l.length, c = (i || "easeIn,easeOut,easeInOut").split(","); --h > -1;)
                        for (r = l[h], n = s ? x("easing." + r, null, !0) : d.easing[r] || {}, o = c.length; --o > -1;) a = c[o], k[r + "." + a] = k[a + r] = n[a] = t.getRatio ? t : t[a] || new t
                };
            for ((h = b.prototype)._calcEnd = !1, h.getRatio = function(t) {
                    if (this._func) return this._params[0] = t, this._func.apply(null, this._params);
                    var e = this._type,
                        i = this._power,
                        s = 1 === e ? 1 - t : 2 === e ? t : .5 > t ? 2 * t : 2 * (1 - t);
                    return 1 === i ? s *= s : 2 === i ? s *= s * s : 3 === i ? s *= s * s * s : 4 === i && (s *= s * s * s * s), 1 === e ? 1 - s : 2 === e ? s : .5 > t ? s / 2 : 1 - s / 2
                }, l = (a = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"]).length; --l > -1;) h = a[l] + ",Power" + l, S(new b(null, null, 1, l), h, "easeOut", !0), S(new b(null, null, 2, l), h, "easeIn" + (0 === l ? ",easeNone" : "")), S(new b(null, null, 3, l), h, "easeInOut");
            k.linear = d.easing.Linear.easeIn, k.swing = d.easing.Quad.easeInOut;
            var P = x("events.EventDispatcher", function(t) { this._listeners = {}, this._eventTarget = t || this });
            (h = P.prototype).addEventListener = function(t, e, i, s, n) {
                n = n || 0;
                var r, o, a = this._listeners[t],
                    l = 0;
                for (this !== c || u || c.wake(), null == a && (this._listeners[t] = a = []), o = a.length; --o > -1;)(r = a[o]).c === e && r.s === i ? a.splice(o, 1) : 0 === l && r.pr < n && (l = o + 1);
                a.splice(l, 0, { c: e, s: i, up: s, pr: n })
            }, h.removeEventListener = function(t, e) {
                var i, s = this._listeners[t];
                if (s)
                    for (i = s.length; --i > -1;)
                        if (s[i].c === e) return void s.splice(i, 1)
            }, h.dispatchEvent = function(t) {
                var e, i, s, n = this._listeners[t];
                if (n)
                    for ((e = n.length) > 1 && (n = n.slice(0)), i = this._eventTarget; --e > -1;)(s = n[e]) && (s.up ? s.c.call(s.s || i, { type: t, target: i }) : s.c.call(s.s || i))
            };
            var O = t.requestAnimationFrame,
                C = t.cancelAnimationFrame,
                A = Date.now || function() { return (new Date).getTime() },
                R = A();
            for (l = (a = ["ms", "moz", "webkit", "o"]).length; --l > -1 && !O;) O = t[a[l] + "RequestAnimationFrame"], C = t[a[l] + "CancelAnimationFrame"] || t[a[l] + "CancelRequestAnimationFrame"];
            x("Ticker", function(t, e) {
                var i, s, n, o, a, l = this,
                    h = A(),
                    p = !(!1 === e || !O) && "auto",
                    d = 500,
                    f = 33,
                    _ = function(t) {
                        var e, r, c = A() - R;
                        c > d && (h += c - f), R += c, l.time = (R - h) / 1e3, e = l.time - a, (!i || e > 0 || !0 === t) && (l.frame++, a += e + (e >= o ? .004 : o - e), r = !0), !0 !== t && (n = s(_)), r && l.dispatchEvent("tick")
                    };
                P.call(l), l.time = l.frame = 0, l.tick = function() { _(!0) }, l.lagSmoothing = function(t, e) { return arguments.length ? (d = t || 1e10, void(f = Math.min(e, d, 0))) : 1e10 > d }, l.sleep = function() { null != n && (p && C ? C(n) : clearTimeout(n), s = m, n = null, l === c && (u = !1)) }, l.wake = function(t) { null !== n ? l.sleep() : t ? h += -R + (R = A()) : l.frame > 10 && (R = A() - d + 5), s = 0 === i ? m : p && O ? O : function(t) { return setTimeout(t, 1e3 * (a - l.time) + 1 | 0) }, l === c && (u = !0), _(2) }, l.fps = function(t) { return arguments.length ? (o = 1 / ((i = t) || 60), a = this.time + o, void l.wake()) : i }, l.useRAF = function(t) { return arguments.length ? (l.sleep(), p = t, void l.fps(i)) : p }, l.fps(t), setTimeout(function() { "auto" === p && l.frame < 5 && "hidden" !== r.visibilityState && l.useRAF(!1) }, 1500)
            }), (h = d.Ticker.prototype = new d.events.EventDispatcher).constructor = d.Ticker;
            var M = x("core.Animation", function(t, e) {
                if (this.vars = e = e || {}, this._duration = this._totalDuration = t || 0, this._delay = Number(e.delay) || 0, this._timeScale = 1, this._active = !0 === e.immediateRender, this.data = e.data, this._reversed = !0 === e.reversed, Z) {
                    u || c.wake();
                    var i = this.vars.useFrames ? G : Z;
                    i.add(this, i._time), this.vars.paused && this.paused(!0)
                }
            });
            c = M.ticker = new d.Ticker, (h = M.prototype)._dirty = h._gc = h._initted = h._paused = !1, h._totalTime = h._time = 0, h._rawPrevTime = -1, h._next = h._last = h._onUpdate = h._timeline = h.timeline = null, h._paused = !1;
            var D = function() {
                u && A() - R > 2e3 && ("hidden" !== r.visibilityState || !c.lagSmoothing()) && c.wake();
                var t = setTimeout(D, 2e3);
                t.unref && t.unref()
            };
            D(), h.play = function(t, e) { return null != t && this.seek(t, e), this.reversed(!1).paused(!1) }, h.pause = function(t, e) { return null != t && this.seek(t, e), this.paused(!0) }, h.resume = function(t, e) { return null != t && this.seek(t, e), this.paused(!1) }, h.seek = function(t, e) { return this.totalTime(Number(t), !1 !== e) }, h.restart = function(t, e) { return this.reversed(!1).paused(!1).totalTime(t ? -this._delay : 0, !1 !== e, !0) }, h.reverse = function(t, e) { return null != t && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1) }, h.render = function(t, e, i) {}, h.invalidate = function() { return this._time = this._totalTime = 0, this._initted = this._gc = !1, this._rawPrevTime = -1, (this._gc || !this.timeline) && this._enabled(!0), this }, h.isActive = function() {
                var t, e = this._timeline,
                    i = this._startTime;
                return !e || !this._gc && !this._paused && e.isActive() && (t = e.rawTime(!0)) >= i && t < i + this.totalDuration() / this._timeScale - 1e-7
            }, h._enabled = function(t, e) { return u || c.wake(), this._gc = !t, this._active = this.isActive(), !0 !== e && (t && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !t && this.timeline && this._timeline._remove(this, !0)), !1 }, h._kill = function(t, e) { return this._enabled(!1, !1) }, h.kill = function(t, e) { return this._kill(t, e), this }, h._uncache = function(t) { for (var e = t ? this : this.timeline; e;) e._dirty = !0, e = e.timeline; return this }, h._swapSelfInParams = function(t) { for (var e = t.length, i = t.concat(); --e > -1;) "{self}" === t[e] && (i[e] = this); return i }, h._callback = function(t) {
                var e = this.vars,
                    i = e[t],
                    s = e[t + "Params"],
                    n = e[t + "Scope"] || e.callbackScope || this;
                switch (s ? s.length : 0) {
                    case 0:
                        i.call(n);
                        break;
                    case 1:
                        i.call(n, s[0]);
                        break;
                    case 2:
                        i.call(n, s[0], s[1]);
                        break;
                    default:
                        i.apply(n, s)
                }
            }, h.eventCallback = function(t, e, i, s) {
                if ("on" === (t || "").substr(0, 2)) {
                    var n = this.vars;
                    if (1 === arguments.length) return n[t];
                    null == e ? delete n[t] : (n[t] = e, n[t + "Params"] = g(i) && -1 !== i.join("").indexOf("{self}") ? this._swapSelfInParams(i) : i, n[t + "Scope"] = s), "onUpdate" === t && (this._onUpdate = e)
                }
                return this
            }, h.delay = function(t) { return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + t - this._delay), this._delay = t, this) : this._delay }, h.duration = function(t) { return arguments.length ? (this._duration = this._totalDuration = t, this._uncache(!0), this._timeline.smoothChildTiming && this._time > 0 && this._time < this._duration && 0 !== t && this.totalTime(this._totalTime * (t / this._duration), !0), this) : (this._dirty = !1, this._duration) }, h.totalDuration = function(t) { return this._dirty = !1, arguments.length ? this.duration(t) : this._totalDuration }, h.time = function(t, e) { return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(t > this._duration ? this._duration : t, e)) : this._time }, h.totalTime = function(t, e, i) {
                if (u || c.wake(), !arguments.length) return this._totalTime;
                if (this._timeline) {
                    if (0 > t && !i && (t += this.totalDuration()), this._timeline.smoothChildTiming) {
                        this._dirty && this.totalDuration();
                        var s = this._totalDuration,
                            n = this._timeline;
                        if (t > s && !i && (t = s), this._startTime = (this._paused ? this._pauseTime : n._time) - (this._reversed ? s - t : t) / this._timeScale, n._dirty || this._uncache(!1), n._timeline)
                            for (; n._timeline;) n._timeline._time !== (n._startTime + n._totalTime) / n._timeScale && n.totalTime(n._totalTime, !0), n = n._timeline
                    }
                    this._gc && this._enabled(!0, !1), (this._totalTime !== t || 0 === this._duration) && (L.length && K(), this.render(t, e, !1), L.length && K())
                }
                return this
            }, h.progress = h.totalProgress = function(t, e) { var i = this.duration(); return arguments.length ? this.totalTime(i * t, e) : i ? this._time / i : this.ratio }, h.startTime = function(t) { return arguments.length ? (t !== this._startTime && (this._startTime = t, this.timeline && this.timeline._sortChildren && this.timeline.add(this, t - this._delay)), this) : this._startTime }, h.endTime = function(t) { return this._startTime + (0 != t ? this.totalDuration() : this.duration()) / this._timeScale }, h.timeScale = function(t) { if (!arguments.length) return this._timeScale; var e, i; for (t = t || f, this._timeline && this._timeline.smoothChildTiming && (i = (e = this._pauseTime) || 0 === e ? e : this._timeline.totalTime(), this._startTime = i - (i - this._startTime) * this._timeScale / t), this._timeScale = t, i = this.timeline; i && i.timeline;) i._dirty = !0, i.totalDuration(), i = i.timeline; return this }, h.reversed = function(t) { return arguments.length ? (t != this._reversed && (this._reversed = t, this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, !0)), this) : this._reversed }, h.paused = function(t) { if (!arguments.length) return this._paused; var e, i, s = this._timeline; return t != this._paused && s && (u || t || c.wake(), i = (e = s.rawTime()) - this._pauseTime, !t && s.smoothChildTiming && (this._startTime += i, this._uncache(!1)), this._pauseTime = t ? e : null, this._paused = t, this._active = this.isActive(), !t && 0 !== i && this._initted && this.duration() && (e = s.smoothChildTiming ? this._totalTime : (e - this._startTime) / this._timeScale, this.render(e, e === this._totalTime, !0))), this._gc && !t && this._enabled(!0, !1), this };
            var E = x("core.SimpleTimeline", function(t) { M.call(this, 0, t), this.autoRemoveChildren = this.smoothChildTiming = !0 });
            (h = E.prototype = new M).constructor = E, h.kill()._gc = !1, h._first = h._last = h._recent = null, h._sortChildren = !1, h.add = h.insert = function(t, e, i, s) {
                var n, r;
                if (t._startTime = Number(e || 0) + t._delay, t._paused && this !== t._timeline && (t._pauseTime = t._startTime + (this.rawTime() - t._startTime) / t._timeScale), t.timeline && t.timeline._remove(t, !0), t.timeline = t._timeline = this, t._gc && t._enabled(!0, !0), n = this._last, this._sortChildren)
                    for (r = t._startTime; n && n._startTime > r;) n = n._prev;
                return n ? (t._next = n._next, n._next = t) : (t._next = this._first, this._first = t), t._next ? t._next._prev = t : this._last = t, t._prev = n, this._recent = t, this._timeline && this._uncache(!0), this
            }, h._remove = function(t, e) { return t.timeline === this && (e || t._enabled(!1, !0), t._prev ? t._prev._next = t._next : this._first === t && (this._first = t._next), t._next ? t._next._prev = t._prev : this._last === t && (this._last = t._prev), t._next = t._prev = t.timeline = null, t === this._recent && (this._recent = this._last), this._timeline && this._uncache(!0)), this }, h.render = function(t, e, i) { var s, n = this._first; for (this._totalTime = this._time = this._rawPrevTime = t; n;) s = n._next, (n._active || t >= n._startTime && !n._paused && !n._gc) && (n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)), n = s }, h.rawTime = function() { return u || c.wake(), this._totalTime };
            var $ = x("TweenLite", function(e, i, s) {
                    if (M.call(this, i, s), this.render = $.prototype.render, null == e) throw "Cannot tween a null target.";
                    this.target = e = "string" != typeof e ? e : $.selector(e) || e;
                    var n, r, o, a = e.jquery || e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType),
                        l = this.vars.overwrite;
                    if (this._overwrite = l = null == l ? V[$.defaultOverwrite] : "number" == typeof l ? l >> 0 : V[l], (a || e instanceof Array || e.push && g(e)) && "number" != typeof e[0])
                        for (this._targets = o = _(e), this._propLookup = [], this._siblings = [], n = 0; n < o.length; n++)(r = o[n]) ? "string" != typeof r ? r.length && r !== t && r[0] && (r[0] === t || r[0].nodeType && r[0].style && !r.nodeType) ? (o.splice(n--, 1), this._targets = o = o.concat(_(r))) : (this._siblings[n] = J(r, this, !1), 1 === l && this._siblings[n].length > 1 && et(r, this, null, 1, this._siblings[n])) : "string" == typeof(r = o[n--] = $.selector(r)) && o.splice(n + 1, 1) : o.splice(n--, 1);
                    else this._propLookup = {}, this._siblings = J(e, this, !1), 1 === l && this._siblings.length > 1 && et(e, this, null, 1, this._siblings);
                    (this.vars.immediateRender || 0 === i && 0 === this._delay && !1 !== this.vars.immediateRender) && (this._time = -f, this.render(Math.min(0, -this._delay)))
                }, !0),
                z = function(e) { return e && e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType) };
            (h = $.prototype = new M).constructor = $, h.kill()._gc = !1, h.ratio = 0, h._firstPT = h._targets = h._overwrittenProps = h._startAt = null, h._notifyPluginsOfEnabled = h._lazy = !1, $.version = "1.20.3", $.defaultEase = h._ease = new b(null, null, 1, 1), $.defaultOverwrite = "auto", $.ticker = c, $.autoSleep = 120, $.lagSmoothing = function(t, e) { c.lagSmoothing(t, e) }, $.selector = t.$ || t.jQuery || function(e) { var i = t.$ || t.jQuery; return i ? ($.selector = i, i(e)) : void 0 === r ? e : r.querySelectorAll ? r.querySelectorAll(e) : r.getElementById("#" === e.charAt(0) ? e.substr(1) : e) };
            var L = [],
                I = {},
                F = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
                N = /[\+-]=-?[\.\d]/,
                j = function(t) { for (var e, i = this._firstPT; i;) e = i.blob ? 1 === t && null != this.end ? this.end : t ? this.join("") : this.start : i.c * t + i.s, i.m ? e = i.m(e, this._target || i.t) : 1e-6 > e && e > -1e-6 && !i.blob && (e = 0), i.f ? i.fp ? i.t[i.p](i.fp, e) : i.t[i.p](e) : i.t[i.p] = e, i = i._next },
                X = function(t, e, i, s) {
                    var n, r, o, a, l, h, c, u = [],
                        p = 0,
                        d = "",
                        f = 0;
                    for (u.start = t, u.end = e, t = u[0] = t + "", e = u[1] = e + "", i && (i(u), t = u[0], e = u[1]), u.length = 0, n = t.match(F) || [], r = e.match(F) || [], s && (s._next = null, s.blob = 1, u._firstPT = u._applyPT = s), l = r.length, a = 0; l > a; a++) c = r[a], d += (h = e.substr(p, e.indexOf(c, p) - p)) || !a ? h : ",", p += h.length, f ? f = (f + 1) % 5 : "rgba(" === h.substr(-5) && (f = 1), c === n[a] || n.length <= a ? d += c : (d && (u.push(d), d = ""), o = parseFloat(n[a]), u.push(o), u._firstPT = { _next: u._firstPT, t: u, p: u.length - 1, s: o, c: ("=" === c.charAt(1) ? parseInt(c.charAt(0) + "1", 10) * parseFloat(c.substr(2)) : parseFloat(c) - o) || 0, f: 0, m: f && 4 > f ? Math.round : 0 }), p += c.length;
                    return (d += e.substr(p)) && u.push(d), u.setRatio = j, N.test(e) && (u.end = null), u
                },
                B = function(t, e, i, s, n, r, o, a, l) {
                    "function" == typeof s && (s = s(l || 0, t));
                    var h = typeof t[e],
                        c = "function" !== h ? "" : e.indexOf("set") || "function" != typeof t["get" + e.substr(3)] ? e : "get" + e.substr(3),
                        u = "get" !== i ? i : c ? o ? t[c](o) : t[c]() : t[e],
                        p = "string" == typeof s && "=" === s.charAt(1),
                        d = { t: t, p: e, s: u, f: "function" === h, pg: 0, n: n || e, m: r ? "function" == typeof r ? r : Math.round : 0, pr: 0, c: p ? parseInt(s.charAt(0) + "1", 10) * parseFloat(s.substr(2)) : parseFloat(s) - u || 0 };
                    return ("number" != typeof u || "number" != typeof s && !p) && (o || isNaN(u) || !p && isNaN(s) || "boolean" == typeof u || "boolean" == typeof s ? (d.fp = o, d = { t: X(u, p ? parseFloat(d.s) + d.c : s, a || $.defaultStringFilter, d), p: "setRatio", s: 0, c: 1, f: 2, pg: 0, n: n || e, pr: 0, m: 0 }) : (d.s = parseFloat(u), p || (d.c = parseFloat(s) - d.s || 0))), d.c ? ((d._next = this._firstPT) && (d._next._prev = d), this._firstPT = d, d) : void 0
                },
                q = $._internals = { isArray: g, isSelector: z, lazyTweens: L, blobDif: X },
                H = $._plugins = {},
                Y = q.tweenLookup = {},
                U = 0,
                W = q.reservedProps = { ease: 1, delay: 1, overwrite: 1, onComplete: 1, onCompleteParams: 1, onCompleteScope: 1, useFrames: 1, runBackwards: 1, startAt: 1, onUpdate: 1, onUpdateParams: 1, onUpdateScope: 1, onStart: 1, onStartParams: 1, onStartScope: 1, onReverseComplete: 1, onReverseCompleteParams: 1, onReverseCompleteScope: 1, onRepeat: 1, onRepeatParams: 1, onRepeatScope: 1, easeParams: 1, yoyo: 1, immediateRender: 1, repeat: 1, repeatDelay: 1, data: 1, paused: 1, reversed: 1, autoCSS: 1, lazy: 1, onOverwrite: 1, callbackScope: 1, stringFilter: 1, id: 1, yoyoEase: 1 },
                V = { none: 0, all: 1, auto: 2, concurrent: 3, allOnStart: 4, preexisting: 5, true: 1, false: 0 },
                G = M._rootFramesTimeline = new E,
                Z = M._rootTimeline = new E,
                Q = 30,
                K = q.lazyRender = function() {
                    var t, e = L.length;
                    for (I = {}; --e > -1;)(t = L[e]) && !1 !== t._lazy && (t.render(t._lazy[0], t._lazy[1], !0), t._lazy = !1);
                    L.length = 0
                };
            Z._startTime = c.time, G._startTime = c.frame, Z._active = G._active = !0, setTimeout(K, 1), M._updateRoot = $.render = function() {
                var t, e, i;
                if (L.length && K(), Z.render((c.time - Z._startTime) * Z._timeScale, !1, !1), G.render((c.frame - G._startTime) * G._timeScale, !1, !1), L.length && K(), c.frame >= Q) {
                    for (i in Q = c.frame + (parseInt($.autoSleep, 10) || 120), Y) {
                        for (t = (e = Y[i].tweens).length; --t > -1;) e[t]._gc && e.splice(t, 1);
                        0 === e.length && delete Y[i]
                    }
                    if ((!(i = Z._first) || i._paused) && $.autoSleep && !G._first && 1 === c._listeners.tick.length) {
                        for (; i && i._paused;) i = i._next;
                        i || c.sleep()
                    }
                }
            }, c.addEventListener("tick", M._updateRoot);
            var J = function(t, e, i) {
                    var s, n, r = t._gsTweenID;
                    if (Y[r || (t._gsTweenID = r = "t" + U++)] || (Y[r] = { target: t, tweens: [] }), e && ((s = Y[r].tweens)[n = s.length] = e, i))
                        for (; --n > -1;) s[n] === e && s.splice(n, 1);
                    return Y[r].tweens
                },
                tt = function(t, e, i, s) { var n, r, o = t.vars.onOverwrite; return o && (n = o(t, e, i, s)), (o = $.onOverwrite) && (r = o(t, e, i, s)), !1 !== n && !1 !== r },
                et = function(t, e, i, s, n) {
                    var r, o, a, l;
                    if (1 === s || s >= 4) {
                        for (l = n.length, r = 0; l > r; r++)
                            if ((a = n[r]) !== e) a._gc || a._kill(null, t, e) && (o = !0);
                            else if (5 === s) break;
                        return o
                    }
                    var h, c = e._startTime + f,
                        u = [],
                        p = 0,
                        d = 0 === e._duration;
                    for (r = n.length; --r > -1;)(a = n[r]) === e || a._gc || a._paused || (a._timeline !== e._timeline ? (h = h || it(e, 0, d), 0 === it(a, h, d) && (u[p++] = a)) : a._startTime <= c && a._startTime + a.totalDuration() / a._timeScale > c && ((d || !a._initted) && c - a._startTime <= 2e-10 || (u[p++] = a)));
                    for (r = p; --r > -1;)
                        if (a = u[r], 2 === s && a._kill(i, t, e) && (o = !0), 2 !== s || !a._firstPT && a._initted) {
                            if (2 !== s && !tt(a, e)) continue;
                            a._enabled(!1, !1) && (o = !0)
                        }
                    return o
                },
                it = function(t, e, i) {
                    for (var s = t._timeline, n = s._timeScale, r = t._startTime; s._timeline;) {
                        if (r += s._startTime, n *= s._timeScale, s._paused) return -100;
                        s = s._timeline
                    }
                    return (r /= n) > e ? r - e : i && r === e || !t._initted && 2 * f > r - e ? f : (r += t.totalDuration() / t._timeScale / n) > e + f ? 0 : r - e - f
                };
            h._init = function() {
                var t, e, i, s, n, r, o = this.vars,
                    a = this._overwrittenProps,
                    l = this._duration,
                    h = !!o.immediateRender,
                    c = o.ease;
                if (o.startAt) {
                    for (s in this._startAt && (this._startAt.render(-1, !0), this._startAt.kill()), n = {}, o.startAt) n[s] = o.startAt[s];
                    if (n.data = "isStart", n.overwrite = !1, n.immediateRender = !0, n.lazy = h && !1 !== o.lazy, n.startAt = n.delay = null, n.onUpdate = o.onUpdate, n.onUpdateParams = o.onUpdateParams, n.onUpdateScope = o.onUpdateScope || o.callbackScope || this, this._startAt = $.to(this.target, 0, n), h)
                        if (this._time > 0) this._startAt = null;
                        else if (0 !== l) return
                } else if (o.runBackwards && 0 !== l)
                    if (this._startAt) this._startAt.render(-1, !0), this._startAt.kill(), this._startAt = null;
                    else { for (s in 0 !== this._time && (h = !1), i = {}, o) W[s] && "autoCSS" !== s || (i[s] = o[s]); if (i.overwrite = 0, i.data = "isFromStart", i.lazy = h && !1 !== o.lazy, i.immediateRender = h, this._startAt = $.to(this.target, 0, i), h) { if (0 === this._time) return } else this._startAt._init(), this._startAt._enabled(!1), this.vars.immediateRender && (this._startAt = null) }
                if (this._ease = c = c ? c instanceof b ? c : "function" == typeof c ? new b(c, o.easeParams) : k[c] || $.defaultEase : $.defaultEase, o.easeParams instanceof Array && c.config && (this._ease = c.config.apply(c, o.easeParams)), this._easeType = this._ease._type, this._easePower = this._ease._power, this._firstPT = null, this._targets)
                    for (r = this._targets.length, t = 0; r > t; t++) this._initProps(this._targets[t], this._propLookup[t] = {}, this._siblings[t], a ? a[t] : null, t) && (e = !0);
                else e = this._initProps(this.target, this._propLookup, this._siblings, a, 0);
                if (e && $._onPluginEvent("_onInitAllProps", this), a && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)), o.runBackwards)
                    for (i = this._firstPT; i;) i.s += i.c, i.c = -i.c, i = i._next;
                this._onUpdate = o.onUpdate, this._initted = !0
            }, h._initProps = function(e, i, s, n, r) {
                var o, a, l, h, c, u;
                if (null == e) return !1;
                for (o in I[e._gsTweenID] && K(), this.vars.css || e.style && e !== t && e.nodeType && H.css && !1 !== this.vars.autoCSS && function(t, e) {
                        var i, s = {};
                        for (i in t) W[i] || i in e && "transform" !== i && "x" !== i && "y" !== i && "width" !== i && "height" !== i && "className" !== i && "border" !== i || !(!H[i] || H[i] && H[i]._autoCSS) || (s[i] = t[i], delete t[i]);
                        t.css = s
                    }(this.vars, e), this.vars)
                    if (u = this.vars[o], W[o]) u && (u instanceof Array || u.push && g(u)) && -1 !== u.join("").indexOf("{self}") && (this.vars[o] = u = this._swapSelfInParams(u, this));
                    else if (H[o] && (h = new H[o])._onInitTween(e, this.vars[o], this, r)) {
                    for (this._firstPT = c = { _next: this._firstPT, t: h, p: "setRatio", s: 0, c: 1, f: 1, n: o, pg: 1, pr: h._priority, m: 0 }, a = h._overwriteProps.length; --a > -1;) i[h._overwriteProps[a]] = this._firstPT;
                    (h._priority || h._onInitAllProps) && (l = !0), (h._onDisable || h._onEnable) && (this._notifyPluginsOfEnabled = !0), c._next && (c._next._prev = c)
                } else i[o] = B.call(this, e, o, "get", u, o, 0, null, this.vars.stringFilter, r);
                return n && this._kill(n, e) ? this._initProps(e, i, s, n, r) : this._overwrite > 1 && this._firstPT && s.length > 1 && et(e, this, i, this._overwrite, s) ? (this._kill(i, e), this._initProps(e, i, s, n, r)) : (this._firstPT && (!1 !== this.vars.lazy && this._duration || this.vars.lazy && !this._duration) && (I[e._gsTweenID] = !0), l)
            }, h.render = function(t, e, i) {
                var s, n, r, o, a = this._time,
                    l = this._duration,
                    h = this._rawPrevTime;
                if (t >= l - 1e-7 && t >= 0) this._totalTime = this._time = l, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1, this._reversed || (s = !0, n = "onComplete", i = i || this._timeline.autoRemoveChildren), 0 === l && (this._initted || !this.vars.lazy || i) && (this._startTime === this._timeline._duration && (t = 0), (0 > h || 0 >= t && t >= -1e-7 || h === f && "isPause" !== this.data) && h !== t && (i = !0, h > f && (n = "onReverseComplete")), this._rawPrevTime = o = !e || t || h === t ? t : f);
                else if (1e-7 > t) this._totalTime = this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== a || 0 === l && h > 0) && (n = "onReverseComplete", s = this._reversed), 0 > t && (this._active = !1, 0 === l && (this._initted || !this.vars.lazy || i) && (h >= 0 && (h !== f || "isPause" !== this.data) && (i = !0), this._rawPrevTime = o = !e || t || h === t ? t : f)), (!this._initted || this._startAt && this._startAt.progress()) && (i = !0);
                else if (this._totalTime = this._time = t, this._easeType) {
                    var c = t / l,
                        u = this._easeType,
                        p = this._easePower;
                    (1 === u || 3 === u && c >= .5) && (c = 1 - c), 3 === u && (c *= 2), 1 === p ? c *= c : 2 === p ? c *= c * c : 3 === p ? c *= c * c * c : 4 === p && (c *= c * c * c * c), this.ratio = 1 === u ? 1 - c : 2 === u ? c : .5 > t / l ? c / 2 : 1 - c / 2
                } else this.ratio = this._ease.getRatio(t / l);
                if (this._time !== a || i) {
                    if (!this._initted) {
                        if (this._init(), !this._initted || this._gc) return;
                        if (!i && this._firstPT && (!1 !== this.vars.lazy && this._duration || this.vars.lazy && !this._duration)) return this._time = this._totalTime = a, this._rawPrevTime = h, L.push(this), void(this._lazy = [t, e]);
                        this._time && !s ? this.ratio = this._ease.getRatio(this._time / l) : s && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                    }
                    for (!1 !== this._lazy && (this._lazy = !1), this._active || !this._paused && this._time !== a && t >= 0 && (this._active = !0), 0 === a && (this._startAt && (t >= 0 ? this._startAt.render(t, !0, i) : n || (n = "_dummyGS")), this.vars.onStart && (0 !== this._time || 0 === l) && (e || this._callback("onStart"))), r = this._firstPT; r;) r.f ? r.t[r.p](r.c * this.ratio + r.s) : r.t[r.p] = r.c * this.ratio + r.s, r = r._next;
                    this._onUpdate && (0 > t && this._startAt && -1e-4 !== t && this._startAt.render(t, !0, i), e || (this._time !== a || s || i) && this._callback("onUpdate")), n && (!this._gc || i) && (0 > t && this._startAt && !this._onUpdate && -1e-4 !== t && this._startAt.render(t, !0, i), s && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[n] && this._callback(n), 0 === l && this._rawPrevTime === f && o !== f && (this._rawPrevTime = 0))
                }
            }, h._kill = function(t, e, i) {
                if ("all" === t && (t = null), null == t && (null == e || e === this.target)) return this._lazy = !1, this._enabled(!1, !1);
                e = "string" != typeof e ? e || this._targets || this.target : $.selector(e) || e;
                var s, n, r, o, a, l, h, c, u, p = i && this._time && i._startTime === this._startTime && this._timeline === i._timeline;
                if ((g(e) || z(e)) && "number" != typeof e[0])
                    for (s = e.length; --s > -1;) this._kill(t, e[s], i) && (l = !0);
                else {
                    if (this._targets) {
                        for (s = this._targets.length; --s > -1;)
                            if (e === this._targets[s]) { a = this._propLookup[s] || {}, this._overwrittenProps = this._overwrittenProps || [], n = this._overwrittenProps[s] = t ? this._overwrittenProps[s] || {} : "all"; break }
                    } else {
                        if (e !== this.target) return !1;
                        a = this._propLookup, n = this._overwrittenProps = t ? this._overwrittenProps || {} : "all"
                    }
                    if (a) { if (h = t || a, c = t !== n && "all" !== n && t !== a && ("object" != typeof t || !t._tempKill), i && ($.onOverwrite || this.vars.onOverwrite)) { for (r in h) a[r] && (u || (u = []), u.push(r)); if ((u || !t) && !tt(this, i, e, u)) return !1 } for (r in h)(o = a[r]) && (p && (o.f ? o.t[o.p](o.s) : o.t[o.p] = o.s, l = !0), o.pg && o.t._kill(h) && (l = !0), o.pg && 0 !== o.t._overwriteProps.length || (o._prev ? o._prev._next = o._next : o === this._firstPT && (this._firstPT = o._next), o._next && (o._next._prev = o._prev), o._next = o._prev = null), delete a[r]), c && (n[r] = 1);!this._firstPT && this._initted && this._enabled(!1, !1) }
                }
                return l
            }, h.invalidate = function() { return this._notifyPluginsOfEnabled && $._onPluginEvent("_onDisable", this), this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null, this._notifyPluginsOfEnabled = this._active = this._lazy = !1, this._propLookup = this._targets ? {} : [], M.prototype.invalidate.call(this), this.vars.immediateRender && (this._time = -f, this.render(Math.min(0, -this._delay))), this }, h._enabled = function(t, e) {
                if (u || c.wake(), t && this._gc) {
                    var i, s = this._targets;
                    if (s)
                        for (i = s.length; --i > -1;) this._siblings[i] = J(s[i], this, !0);
                    else this._siblings = J(this.target, this, !0)
                }
                return M.prototype._enabled.call(this, t, e), !(!this._notifyPluginsOfEnabled || !this._firstPT) && $._onPluginEvent(t ? "_onEnable" : "_onDisable", this)
            }, $.to = function(t, e, i) { return new $(t, e, i) }, $.from = function(t, e, i) { return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, new $(t, e, i) }, $.fromTo = function(t, e, i, s) { return s.startAt = i, s.immediateRender = 0 != s.immediateRender && 0 != i.immediateRender, new $(t, e, s) }, $.delayedCall = function(t, e, i, s, n) { return new $(e, 0, { delay: t, onComplete: e, onCompleteParams: i, callbackScope: s, onReverseComplete: e, onReverseCompleteParams: i, immediateRender: !1, lazy: !1, useFrames: n, overwrite: 0 }) }, $.set = function(t, e) { return new $(t, 0, e) }, $.getTweensOf = function(t, e) {
                if (null == t) return [];
                var i, s, n, r;
                if (t = "string" != typeof t ? t : $.selector(t) || t, (g(t) || z(t)) && "number" != typeof t[0]) {
                    for (i = t.length, s = []; --i > -1;) s = s.concat($.getTweensOf(t[i], e));
                    for (i = s.length; --i > -1;)
                        for (r = s[i], n = i; --n > -1;) r === s[n] && s.splice(i, 1)
                } else if (t._gsTweenID)
                    for (i = (s = J(t).concat()).length; --i > -1;)(s[i]._gc || e && !s[i].isActive()) && s.splice(i, 1);
                return s || []
            }, $.killTweensOf = $.killDelayedCallsTo = function(t, e, i) { "object" == typeof e && (i = e, e = !1); for (var s = $.getTweensOf(t, e), n = s.length; --n > -1;) s[n]._kill(i, t) };
            var st = x("plugins.TweenPlugin", function(t, e) { this._overwriteProps = (t || "").split(","), this._propName = this._overwriteProps[0], this._priority = e || 0, this._super = st.prototype }, !0);
            if (h = st.prototype, st.version = "1.19.0", st.API = 2, h._firstPT = null, h._addTween = B, h.setRatio = j, h._kill = function(t) {
                    var e, i = this._overwriteProps,
                        s = this._firstPT;
                    if (null != t[this._propName]) this._overwriteProps = [];
                    else
                        for (e = i.length; --e > -1;) null != t[i[e]] && i.splice(e, 1);
                    for (; s;) null != t[s.n] && (s._next && (s._next._prev = s._prev), s._prev ? (s._prev._next = s._next, s._prev = null) : this._firstPT === s && (this._firstPT = s._next)), s = s._next;
                    return !1
                }, h._mod = h._roundProps = function(t) { for (var e, i = this._firstPT; i;)(e = t[this._propName] || null != i.n && t[i.n.split(this._propName + "_").join("")]) && "function" == typeof e && (2 === i.f ? i.t._applyPT.m = e : i.m = e), i = i._next }, $._onPluginEvent = function(t, e) {
                    var i, s, n, r, o, a = e._firstPT;
                    if ("_onInitAllProps" === t) {
                        for (; a;) {
                            for (o = a._next, s = n; s && s.pr > a.pr;) s = s._next;
                            (a._prev = s ? s._prev : r) ? a._prev._next = a: n = a, (a._next = s) ? s._prev = a : r = a, a = o
                        }
                        a = e._firstPT = n
                    }
                    for (; a;) a.pg && "function" == typeof a.t[t] && a.t[t]() && (i = !0), a = a._next;
                    return i
                }, st.activate = function(t) { for (var e = t.length; --e > -1;) t[e].API === st.API && (H[(new t[e])._propName] = t[e]); return !0 }, T.plugin = function(t) {
                    if (!(t && t.propName && t.init && t.API)) throw "illegal plugin definition.";
                    var e, i = t.propName,
                        s = t.priority || 0,
                        n = t.overwriteProps,
                        r = { init: "_onInitTween", set: "setRatio", kill: "_kill", round: "_mod", mod: "_mod", initAll: "_onInitAllProps" },
                        o = x("plugins." + i.charAt(0).toUpperCase() + i.substr(1) + "Plugin", function() { st.call(this, i, s), this._overwriteProps = n || [] }, !0 === t.global),
                        a = o.prototype = new st(i);
                    for (e in a.constructor = o, o.API = t.API, r) "function" == typeof t[e] && (a[r[e]] = t[e]);
                    return o.version = t.version, st.activate([o]), o
                }, a = t._gsQueue) { for (l = 0; l < a.length; l++) a[l](); for (h in v) v[h].func || t.console.log("GSAP encountered missing dependency: " + h) }
            u = !1
        }
    }("undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window, "TweenMax"),
    function(t) {
        if ("object" == typeof exports && "undefined" != typeof module) module.exports = t();
        else if ("function" == typeof define && define.amd) define([], t);
        else {
            ("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this).Pjax = t()
        }
    }(function() {
        return function t(e, i, s) {
            function n(o, a) {
                if (!i[o]) {
                    if (!e[o]) { var l = "function" == typeof require && require; if (!a && l) return l(o, !0); if (r) return r(o, !0); var h = new Error("Cannot find module '" + o + "'"); throw h.code = "MODULE_NOT_FOUND", h }
                    var c = i[o] = { exports: {} };
                    e[o][0].call(c.exports, function(t) { var i = e[o][1][t]; return n(i || t) }, c, c.exports, t, e, i, s)
                }
                return i[o].exports
            }
            for (var r = "function" == typeof require && require, o = 0; o < s.length; o++) n(s[o]);
            return n
        }({
            1: [function(t, e, i) {
                var s = t("./lib/clone.js"),
                    n = t("./lib/execute-scripts.js"),
                    r = t("./lib/foreach-els.js"),
                    o = t("./lib/switches"),
                    a = t("./lib/uniqueid.js"),
                    l = t("./lib/events/on.js"),
                    h = t("./lib/events/trigger.js"),
                    c = t("./lib/util/contains.js"),
                    u = t("./lib/util/noop"),
                    p = function(e) {
                        this.state = { numPendingSwitches: 0, href: null, options: null }, t("./lib/proto/parse-options.js").call(this, e), this.log("Pjax options", this.options), this.options.scrollRestoration && "scrollRestoration" in history && (history.scrollRestoration = "manual"), this.maxUid = this.lastUid = a(), this.parseDOM(document), l(window, "popstate", function(t) {
                            if (t.state) {
                                var e = s(this.options);
                                e.url = t.state.url, e.title = t.state.title, e.history = !1, e.requestOptions = {}, e.scrollPos = t.state.scrollPos, t.state.uid < this.lastUid ? e.backward = !0 : e.forward = !0, this.lastUid = t.state.uid, this.loadUrl(t.state.url, e)
                            }
                        }.bind(this))
                    };
                if (p.switches = o, p.prototype = {
                        log: t("./lib/proto/log.js"),
                        getElements: function(t) { return t.querySelectorAll(this.options.elements) },
                        parseDOM: function(e) {
                            var i = t("./lib/proto/parse-element");
                            r(this.getElements(e), i, this)
                        },
                        refresh: function(t) { this.parseDOM(t || document) },
                        reload: function() { window.location.reload() },
                        attachLink: t("./lib/proto/attach-link.js"),
                        attachForm: t("./lib/proto/attach-form.js"),
                        forEachSelectors: function(e, i, s) { return t("./lib/foreach-selectors.js").bind(this)(this.options.selectors, e, i, s) },
                        switchSelectors: function(e, i, s, n) { return t("./lib/switches-selectors.js").bind(this)(this.options.switches, this.options.switchesOptions, e, i, s, n) },
                        latestChance: function(t) { window.location = t },
                        onSwitch: function() { h(window, "resize scroll"), this.state.numPendingSwitches--, 0 === this.state.numPendingSwitches && this.afterAllSwitches() },
                        loadContent: function(t, e) {
                            var i = document.implementation.createHTMLDocument("pjax"),
                                s = t.match(/<html[^>]+>/gi);
                            if (s && s.length && (s = s[0].match(/\s?[a-z:]+(?:\=(?:\'|\")[^\'\">]+(?:\'|\"))*/gi)).length && (s.shift(), s.forEach(function(t) {
                                    var e = t.trim().split("=");
                                    1 === e.length ? i.documentElement.setAttribute(e[0], !0) : i.documentElement.setAttribute(e[0], e[1].slice(1, -1))
                                })), i.documentElement.innerHTML = t, this.log("load content", i.documentElement.attributes, i.documentElement.innerHTML.length), document.activeElement && c(this.options.selectors, document.activeElement)) try { document.activeElement.blur() } catch (t) {}
                            this.switchSelectors(this.options.selectors, i, document, e)
                        },
                        abortRequest: t("./lib/abort-request.js"),
                        doRequest: t("./lib/send-request.js"),
                        loadUrl: function(t, e) {
                            this.log("load href", t, e), this.abortRequest(this.request), h(document, "pjax:send", e), e.requestOptions.timeout = this.options.timeout, this.request = this.doRequest(t, e.requestOptions, function(i, n) {
                                if (!1 !== i) {
                                    var r = window.history.state || {};
                                    window.history.replaceState({ url: r.url || window.location.href, title: r.title || document.title, uid: r.uid || a(), scrollPos: [document.documentElement.scrollLeft || document.body.scrollLeft, document.documentElement.scrollTop || document.body.scrollTop] }, document.title, window.location);
                                    var o = t;
                                    n.responseURL ? t !== n.responseURL && (t = n.responseURL) : n.getResponseHeader("X-PJAX-URL") ? t = n.getResponseHeader("X-PJAX-URL") : n.getResponseHeader("X-XHR-Redirected-To") && (t = n.getResponseHeader("X-XHR-Redirected-To"));
                                    var l = document.createElement("a");
                                    l.href = o;
                                    var c = l.hash;
                                    l.href = t, c && !l.hash && (l.hash = c, t = l.href), this.state.href = t, this.state.options = s(e);
                                    try { this.loadContent(i, e) } catch (e) { if (this.options.debug) throw e; return console && console.error && console.error("Pjax switch fail: ", e), this.latestChance(t) }
                                } else h(document, "pjax:complete pjax:error", e)
                            }.bind(this))
                        },
                        afterAllSwitches: function() {
                            var t = Array.prototype.slice.call(document.querySelectorAll("[autofocus]")).pop();
                            t && document.activeElement !== t && t.focus(), this.options.selectors.forEach(function(t) { r(document.querySelectorAll(t), function(t) { n(t) }) });
                            var e = this.state;
                            if (e.options.history && (window.history.state || (this.lastUid = this.maxUid = a(), window.history.replaceState({ url: window.location.href, title: document.title, uid: this.maxUid, scrollPos: [0, 0] }, document.title)), this.lastUid = this.maxUid = a(), window.history.pushState({ url: e.href, title: e.options.title, uid: this.maxUid, scrollPos: [0, 0] }, e.options.title, e.href)), this.forEachSelectors(function(t) { this.parseDOM(t) }, this), h(document, "pjax:complete pjax:success", e.options), "function" == typeof e.options.analytics && e.options.analytics(), e.options.history) {
                                var i = document.createElement("a");
                                if (i.href = this.state.href, i.hash) {
                                    var s = i.hash.slice(1);
                                    s = decodeURIComponent(s);
                                    var o = 0,
                                        l = document.getElementById(s) || document.getElementsByName(s)[0];
                                    if (l && l.offsetParent)
                                        for (; o += l.offsetTop, l = l.offsetParent;);
                                    window.scrollTo(0, o)
                                } else !1 !== e.options.scrollTo && (e.options.scrollTo.length > 1 ? window.scrollTo(e.options.scrollTo[0], e.options.scrollTo[1]) : window.scrollTo(0, e.options.scrollTo))
                            } else e.options.scrollRestoration && e.options.scrollPos && window.scrollTo(e.options.scrollPos[0], e.options.scrollPos[1]);
                            this.state = { numPendingSwitches: 0, href: null, options: null }
                        }
                    }, p.isSupported = t("./lib/is-supported.js"), p.isSupported()) e.exports = p;
                else {
                    var d = u;
                    for (var f in p.prototype) p.prototype.hasOwnProperty(f) && "function" == typeof p.prototype[f] && (d[f] = u);
                    e.exports = d
                }
            }, { "./lib/abort-request.js": 2, "./lib/clone.js": 3, "./lib/events/on.js": 5, "./lib/events/trigger.js": 6, "./lib/execute-scripts.js": 7, "./lib/foreach-els.js": 8, "./lib/foreach-selectors.js": 9, "./lib/is-supported.js": 10, "./lib/proto/attach-form.js": 11, "./lib/proto/attach-link.js": 12, "./lib/proto/log.js": 13, "./lib/proto/parse-element": 14, "./lib/proto/parse-options.js": 15, "./lib/send-request.js": 16, "./lib/switches": 18, "./lib/switches-selectors.js": 17, "./lib/uniqueid.js": 19, "./lib/util/contains.js": 20, "./lib/util/noop": 21 }],
            2: [function(t, e, i) {
                var s = t("./util/noop");
                e.exports = function(t) { t && t.readyState < 4 && (t.onreadystatechange = s, t.abort()) }
            }, { "./util/noop": 21 }],
            3: [function(t, e, i) { e.exports = function(t) { if (null === t || "object" != typeof t) return t; var e = t.constructor(); for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i]); return e } }, {}],
            4: [function(t, e, i) {
                e.exports = function(t) {
                    var e = t.text || t.textContent || t.innerHTML || "",
                        i = t.src || "",
                        s = t.parentNode || document.querySelector("head") || document.documentElement,
                        n = document.createElement("script");
                    if (e.match("document.write")) return console && console.log && console.log("Script contains document.write. Can’t be executed correctly. Code skipped ", t), !1;
                    if (n.type = "text/javascript", "" !== i && (n.src = i, n.async = !1), "" !== e) try { n.appendChild(document.createTextNode(e)) } catch (t) { n.text = e }
                    return s.appendChild(n), ["head", "body"].indexOf(s.tagName.toLowerCase()) > 0 && s.removeChild(n), !0
                }
            }, {}],
            5: [function(t, e, i) {
                var s = t("../foreach-els");
                e.exports = function(t, e, i, n) {
                    (e = "string" == typeof e ? e.split(" ") : e).forEach(function(e) { s(t, function(t) { t.addEventListener(e, i, n) }) })
                }
            }, { "../foreach-els": 8 }],
            6: [function(t, e, i) {
                var s = t("../foreach-els");
                e.exports = function(t, e, i) {
                    (e = "string" == typeof e ? e.split(" ") : e).forEach(function(e) {
                        var n;
                        (n = document.createEvent("HTMLEvents")).initEvent(e, !0, !0), n.eventName = e, i && Object.keys(i).forEach(function(t) { n[t] = i[t] }), s(t, function(t) {
                            var e = !1;
                            t.parentNode || t === document || t === window || (e = !0, document.body.appendChild(t)), t.dispatchEvent(n), e && t.parentNode.removeChild(t)
                        })
                    })
                }
            }, { "../foreach-els": 8 }],
            7: [function(t, e, i) {
                var s = t("./foreach-els"),
                    n = t("./eval-script");
                e.exports = function(t) { "script" === t.tagName.toLowerCase() && n(t), s(t.querySelectorAll("script"), function(t) { t.type && "text/javascript" !== t.type.toLowerCase() || (t.parentNode && t.parentNode.removeChild(t), n(t)) }) }
            }, { "./eval-script": 4, "./foreach-els": 8 }],
            8: [function(t, e, i) { e.exports = function(t, e, i) { return t instanceof HTMLCollection || t instanceof NodeList || t instanceof Array ? Array.prototype.forEach.call(t, e, i) : e.call(i, t) } }, {}],
            9: [function(t, e, i) {
                var s = t("./foreach-els");
                e.exports = function(t, e, i, n) { n = n || document, t.forEach(function(t) { s(n.querySelectorAll(t), e, i) }) }
            }, { "./foreach-els": 8 }],
            10: [function(t, e, i) { e.exports = function() { return window.history && window.history.pushState && window.history.replaceState && !navigator.userAgent.match(/((iPod|iPhone|iPad).+\bOS\s+[1-4]\D|WebApps\/.+CFNetwork)/) } }, {}],
            11: [function(t, e, i) {
                var s = t("../events/on"),
                    n = t("../clone"),
                    r = "data-pjax-click-state",
                    o = function(t, e) {
                        var i = n(this.options);
                        i.requestOptions = { requestUrl: t.getAttribute("action") || window.location.href, requestMethod: t.getAttribute("method") || "GET" };
                        var s = document.createElement("a");
                        if (s.setAttribute("href", i.requestOptions.requestUrl), s.protocol === window.location.protocol && s.host === window.location.host)
                            if (s.pathname === window.location.pathname && s.hash.length > 0) t.setAttribute(r, "anchor-present");
                            else if (s.href !== window.location.href.split("#")[0] + "#")
                            if (i.currentUrlFullReload) t.setAttribute(r, "reload");
                            else {
                                e.preventDefault();
                                var o = [];
                                for (var a in t.elements) {
                                    var l = t.elements[a];
                                    l.name && void 0 !== l.attributes && "button" !== l.tagName.toLowerCase() && ("checkbox" !== l.attributes.type && "radio" !== l.attributes.type || l.checked) && o.push({ name: encodeURIComponent(l.name), value: encodeURIComponent(l.value) })
                                }
                                var h = o.map(function(t) { return t.name + "=" + t.value }).join("&");
                                i.requestOptions.requestPayload = o, i.requestOptions.requestPayloadString = h, t.setAttribute(r, "submit"), i.triggerElement = t, this.loadUrl(s.href, i)
                            }
                        else t.setAttribute(r, "anchor-empty");
                        else t.setAttribute(r, "external")
                    },
                    a = function(t) { return t.defaultPrevented || !1 === t.returnValue };
                e.exports = function(t) {
                    var e = this;
                    s(t, "submit", function(i) { a(i) || o.call(e, t, i) }), s(t, "keyup", function(i) { a(i) || 13 === i.keyCode && o.call(e, t, i) }.bind(this))
                }
            }, { "../clone": 3, "../events/on": 5 }],
            12: [function(t, e, i) {
                var s = t("../events/on"),
                    n = t("../clone"),
                    r = "data-pjax-click-state",
                    o = function(t, e) {
                        var i = n(this.options);
                        if (i.requestOptions = {}, e.which > 1 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) t.setAttribute(r, "modifier");
                        else if (t.protocol === window.location.protocol && t.host === window.location.host)
                            if (t.pathname === window.location.pathname && t.hash.length > 0) t.setAttribute(r, "anchor-present");
                            else if (t.hash && t.href.replace(t.hash, "") === window.location.href.replace(location.hash, "")) t.setAttribute(r, "anchor");
                        else if (t.href !== window.location.href.split("#")[0] + "#") {
                            if (e.preventDefault(), this.options.currentUrlFullReload && t.href === window.location.href.split("#")[0]) return t.setAttribute(r, "reload"), void this.reload();
                            t.setAttribute(r, "load"), i.triggerElement = t, this.loadUrl(t.href, i)
                        } else t.setAttribute(r, "anchor-empty");
                        else t.setAttribute(r, "external")
                    },
                    a = function(t) { return t.defaultPrevented || !1 === t.returnValue };
                e.exports = function(t) {
                    var e = this;
                    s(t, "click", function(i) { a(i) || o.call(e, t, i) }), s(t, "keyup", function(i) { a(i) || (i.which > 1 || i.metaKey || i.ctrlKey || i.shiftKey || i.altKey ? t.setAttribute("data-pjax-keyup-state", "modifier") : 13 === i.keyCode && o.call(e, t, i)) }.bind(this))
                }
            }, { "../clone": 3, "../events/on": 5 }],
            13: [function(t, e, i) { e.exports = function() { this.options.debug && console && ("function" == typeof console.log ? console.log.apply(console, arguments) : console.log && console.log(arguments)) } }, {}],
            14: [function(t, e, i) {
                e.exports = function(t) {
                    switch (t.tagName.toLowerCase()) {
                        case "a":
                            t.hasAttribute("data-pjax-click-state") || this.attachLink(t);
                            break;
                        case "form":
                            t.hasAttribute("data-pjax-click-state") || this.attachForm(t);
                            break;
                        default:
                            throw "Pjax can only be applied on <a> or <form> submit"
                    }
                }
            }, {}],
            15: [function(t, e, i) {
                var s = t("../switches");
                e.exports = function(t) {
                    (t = t || {}).elements = t.elements || "a[href], form[action]", t.selectors = t.selectors || ["title", ".js-Pjax"], t.switches = t.switches || {}, t.switchesOptions = t.switchesOptions || {}, t.history = t.history || !0, t.analytics = "function" == typeof t.analytics || !1 === t.analytics ? t.analytics : function() { window._gaq && _gaq.push(["_trackPageview"]), window.ga && ga("send", "pageview", { page: location.pathname, title: document.title }) }, t.scrollTo = void 0 === t.scrollTo ? 0 : t.scrollTo, t.scrollRestoration = void 0 === t.scrollRestoration || t.scrollRestoration, t.cacheBust = void 0 === t.cacheBust || t.cacheBust, t.debug = t.debug || !1, t.timeout = t.timeout || 0, t.currentUrlFullReload = void 0 !== t.currentUrlFullReload && t.currentUrlFullReload, t.switches.head || (t.switches.head = s.switchElementsAlt), t.switches.body || (t.switches.body = s.switchElementsAlt), this.options = t
                }
            }, { "../switches": 18 }],
            16: [function(t, e, i) {
                e.exports = function(t, e, i) {
                    var s = (e = e || {}).requestMethod || "GET",
                        n = e.requestPayloadString || null,
                        r = new XMLHttpRequest;
                    return r.onreadystatechange = function() { 4 === r.readyState && (200 === r.status ? i(r.responseText, r) : i(null, r)) }, r.onerror = function(t) { console.log(t), i(null, r) }, r.ontimeout = function() { i(null, r) }, this.options.cacheBust && (t += (/[?&]/.test(t) ? "&" : "?") + (new Date).getTime()), r.open(s.toUpperCase(), t, !0), r.timeout = e.timeout, r.setRequestHeader("X-Requested-With", "XMLHttpRequest"), r.setRequestHeader("X-PJAX", "true"), void 0 !== e.requestPayloadString && "" !== e.requestPayloadString && r.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), r.send(n), r
                }
            }, {}],
            17: [function(t, e, i) {
                var s = t("./foreach-els"),
                    n = t("./switches");
                e.exports = function(t, e, i, r, o, a) {
                    var l = [];
                    i.forEach(function(i) {
                        var h = r.querySelectorAll(i),
                            c = o.querySelectorAll(i);
                        if (this.log && this.log("Pjax switch", i, h, c), h.length !== c.length) throw "DOM doesn’t look the same on new loaded page: ’" + i + "’ - new " + h.length + ", old " + c.length;
                        s(h, function(s, r) {
                            var o = c[r];
                            this.log && this.log("newEl", s, "oldEl", o);
                            var h = t[i] ? t[i].bind(this, o, s, a, e[i]) : n.outerHTML.bind(this, o, s, a);
                            l.push(h)
                        }, this)
                    }, this), this.state.numPendingSwitches = l.length, l.forEach(function(t) { t() })
                }
            }, { "./foreach-els": 8, "./switches": 18 }],
            18: [function(t, e, i) {
                var s = t("./events/on.js");
                e.exports = {
                    outerHTML: function(t, e) { t.outerHTML = e.outerHTML, this.onSwitch() },
                    innerHTML: function(t, e) { t.innerHTML = e.innerHTML, t.className = e.className, this.onSwitch() },
                    switchElementsAlt: function(t, e) {
                        if (t.innerHTML = e.innerHTML, e.hasAttributes())
                            for (var i = e.attributes, s = 0; s < i.length; s++) t.attributes.setNamedItem(i[s].cloneNode());
                        this.onSwitch()
                    },
                    sideBySide: function(t, e, i, n) {
                        var r = Array.prototype.forEach,
                            o = [],
                            a = [],
                            l = document.createDocumentFragment(),
                            h = "animationend webkitAnimationEnd MSAnimationEnd oanimationend",
                            c = 0,
                            u = function(t) { t.target === t.currentTarget && --c <= 0 && o && (o.forEach(function(t) { t.parentNode && t.parentNode.removeChild(t) }), a.forEach(function(t) { t.className = t.className.replace(t.getAttribute("data-pjax-classes"), ""), t.removeAttribute("data-pjax-classes") }), a = null, o = null, this.onSwitch()) }.bind(this);
                        n = n || {}, r.call(t.childNodes, function(t) { o.push(t), t.classList && !t.classList.contains("js-Pjax-remove") && (t.hasAttribute("data-pjax-classes") && (t.className = t.className.replace(t.getAttribute("data-pjax-classes"), ""), t.removeAttribute("data-pjax-classes")), t.classList.add("js-Pjax-remove"), n.callbacks && n.callbacks.removeElement && n.callbacks.removeElement(t), n.classNames && (t.className += " " + n.classNames.remove + " " + (i.backward ? n.classNames.backward : n.classNames.forward)), c++, s(t, h, u, !0)) }), r.call(e.childNodes, function(t) {
                            if (t.classList) {
                                var e = "";
                                n.classNames && (e = " js-Pjax-add " + n.classNames.add + " " + (i.backward ? n.classNames.forward : n.classNames.backward)), n.callbacks && n.callbacks.addElement && n.callbacks.addElement(t), t.className += e, t.setAttribute("data-pjax-classes", e), a.push(t), l.appendChild(t), c++, s(t, h, u, !0)
                            }
                        }), t.className = e.className, t.appendChild(l)
                    }
                }
            }, { "./events/on.js": 5 }],
            19: [function(t, e, i) {
                var s;
                e.exports = (s = 0, function() { var t = "pjax" + (new Date).getTime() + "_" + s; return s++, t })
            }, {}],
            20: [function(t, e, i) {
                e.exports = function(t, e, i) {
                    for (var s = 0; s < e.length; s++)
                        for (var n = t.querySelectorAll(e[s]), r = 0; r < n.length; r++)
                            if (n[r].contains(i)) return !0;
                    return !1
                }
            }, {}],
            21: [function(t, e, i) { e.exports = function() {} }, {}]
        }, {}, [1])(1)
    }),
    function(t, e) { "function" == typeof define && define.amd ? define([], function() { return t.svg4everybody = e() }) : "object" == typeof module && module.exports ? module.exports = e() : t.svg4everybody = e() }(this, function() {
        function t(t, e, i) {
            if (i) {
                var s = document.createDocumentFragment(),
                    n = !e.hasAttribute("viewBox") && i.getAttribute("viewBox");
                n && e.setAttribute("viewBox", n);
                for (var r = i.cloneNode(!0); r.childNodes.length;) s.appendChild(r.firstChild);
                t.appendChild(s)
            }
        }

        function e(e) {
            e.onreadystatechange = function() {
                if (4 === e.readyState) {
                    var i = e._cachedDocument;
                    i || ((i = e._cachedDocument = document.implementation.createHTMLDocument("")).body.innerHTML = e.responseText, e._cachedTarget = {}), e._embeds.splice(0).map(function(s) {
                        var n = e._cachedTarget[s.id];
                        n || (n = e._cachedTarget[s.id] = i.getElementById(s.id)), t(s.parent, s.svg, n)
                    })
                }
            }, e.onreadystatechange()
        }

        function i(t) {
            for (var e = t;
                "svg" !== e.nodeName.toLowerCase() && (e = e.parentNode););
            return e
        }
        return function(s) {
            var n, r = Object(s),
                o = window.top !== window.self;
            n = "polyfill" in r ? r.polyfill : /\bTrident\/[567]\b|\bMSIE (?:9|10)\.0\b/.test(navigator.userAgent) || (navigator.userAgent.match(/\bEdge\/12\.(\d+)\b/) || [])[1] < 10547 || (navigator.userAgent.match(/\bAppleWebKit\/(\d+)\b/) || [])[1] < 537 || /\bEdge\/.(\d+)\b/.test(navigator.userAgent) && o;
            var a = {},
                l = window.requestAnimationFrame || setTimeout,
                h = document.getElementsByTagName("use"),
                c = 0;
            n && function s() {
                for (var o = 0; o < h.length;) {
                    var u = h[o],
                        p = u.parentNode,
                        d = i(p),
                        f = u.getAttribute("xlink:href") || u.getAttribute("href");
                    if (!f && r.attributeName && (f = u.getAttribute(r.attributeName)), d && f) {
                        if (n)
                            if (!r.validate || r.validate(f, d, u)) {
                                p.removeChild(u);
                                var _ = f.split("#"),
                                    m = _.shift(),
                                    g = _.join("#");
                                if (m.length) {
                                    var v = a[m];
                                    v || ((v = a[m] = new XMLHttpRequest).open("GET", m), v.send(), v._embeds = []), v._embeds.push({ parent: p, svg: d, id: g }), e(v)
                                } else t(p, d, document.getElementById(g))
                            } else ++o, ++c
                    } else ++o
                }(!h.length || h.length - c > 0) && l(s, 67)
            }()
        }
    });
var _gsScope, WheelIndicator = function(t, e) {
    var i = "onwheel" in e ? "wheel" : "mousewheel",
        s = { callback: function() {}, elem: e, preventMouse: !0 };

    function n(e) {
        this._options = a(s, e), this._deltaArray = [0, 0, 0], this._isAcceleration = !1, this._isStopped = !0, this._direction = "", this._timer = "", this._isWorking = !0;
        var n, l, h, c = this;
        this._wheelHandler = function(e) {
            var i;
            c._isWorking && (function(t) {
                var e = this,
                    i = o(t);
                if (0 === i) return;
                var s, n = i > 0 ? "down" : "up",
                    a = e._deltaArray.length,
                    l = !1,
                    h = 0;
                for (clearTimeout(e._timer), e._timer = setTimeout(function() { e._deltaArray = [0, 0, 0], e._isStopped = !0, e._direction = n }, 150), s = 0; s < a; s++) 0 !== e._deltaArray[s] && (e._deltaArray[s] > 0 ? ++h : --h);
                Math.abs(h) === a && (h > 0 ? "down" : "up") !== e._direction && (l = !0, e._direction = n);
                e._isStopped || (l ? (e._isAcceleration = !0, r.call(this, t)) : Math.abs(h) === a && function(t) {
                    var e = Math.abs(this._deltaArray[0]),
                        i = Math.abs(this._deltaArray[1]),
                        s = Math.abs(this._deltaArray[2]),
                        n = Math.abs(o(t));
                    n > s && s > i && i > e && (this._isAcceleration || (r.call(this, t), this._isAcceleration = !0));
                    n < s && s <= i && (this._isAcceleration = !1)
                }.call(this, t));
                e._isStopped && (e._isStopped = !1, e._isAcceleration = !0, e._direction = n, r.call(this, t));
                e._deltaArray.shift(), e._deltaArray.push(i)
            }.call(c, e), c._options.preventMouse && ((i = (i = e) || t.event).preventDefault ? i.preventDefault() : i.returnValue = !1))
        }, n = this._options.elem, l = i, h = this._wheelHandler, n.addEventListener ? n.addEventListener(l, h, !1) : n.attachEvent && n.attachEvent("on" + l, h)
    }

    function r(t) { t.direction = this._direction, this._options.callback.call(this, t) }
    n.prototype = { constructor: n, turnOn: function() { return this._isWorking = !0, this }, turnOff: function() { return this._isWorking = !1, this }, setOptions: function(t) { return this._options = a(this._options, t), this }, getOption: function(t) { var e = this._options[t]; if (void 0 !== e) return e; throw new Error("Unknown option") }, destroy: function() { var t, e, s; return t = this._options.elem, e = i, s = this._wheelHandler, t.removeEventListener ? t.removeEventListener(e, s, !1) : t.detachEvent && t.detachEvent("on" + e, s), this } };
    var o = function(t) { return (o = t.wheelDelta && !t.deltaY ? function(t) { return -1 * t.wheelDelta } : function(t) { return t.deltaY })(t) };

    function a(t, e) { var i, s = {}; for (i in t) Object.prototype.hasOwnProperty.call(t, i) && (s[i] = t[i]); for (i in e) Object.prototype.hasOwnProperty.call(e, i) && (s[i] = e[i]); return s }
    return n
}(window, document);
"object" == typeof exports && (module.exports = WheelIndicator), ((_gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window)._gsQueue || (_gsScope._gsQueue = [])).push(function() {
        "use strict";
        var t, e, i, s, n, r, o, a, l, h, c, u, p, d, f, _, m;
        _gsScope._gsDefine("TweenMax", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function(t, e, i) {
            var s = function(t) {
                    var e, i = [],
                        s = t.length;
                    for (e = 0; e !== s; i.push(t[e++]));
                    return i
                },
                n = function(t, e, i) {
                    var s, n, r = t.cycle;
                    for (s in r) n = r[s], t[s] = "function" == typeof n ? n(i, e[i]) : n[i % n.length];
                    delete t.cycle
                },
                r = function(t, e, s) { i.call(this, t, e, s), this._cycle = 0, this._yoyo = !0 === this.vars.yoyo || !!this.vars.yoyoEase, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._repeat && this._uncache(!0), this.render = r.prototype.render },
                o = 1e-10,
                a = i._internals,
                l = a.isSelector,
                h = a.isArray,
                c = r.prototype = i.to({}, .1, {}),
                u = [];
            r.version = "1.20.4", c.constructor = r, c.kill()._gc = !1, r.killTweensOf = r.killDelayedCallsTo = i.killTweensOf, r.getTweensOf = i.getTweensOf, r.lagSmoothing = i.lagSmoothing, r.ticker = i.ticker, r.render = i.render, c.invalidate = function() { return this._yoyo = !0 === this.vars.yoyo || !!this.vars.yoyoEase, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._yoyoEase = null, this._uncache(!0), i.prototype.invalidate.call(this) }, c.updateTo = function(t, e) {
                var s, n = this.ratio,
                    r = this.vars.immediateRender || t.immediateRender;
                for (s in e && this._startTime < this._timeline._time && (this._startTime = this._timeline._time, this._uncache(!1), this._gc ? this._enabled(!0, !1) : this._timeline.insert(this, this._startTime - this._delay)), t) this.vars[s] = t[s];
                if (this._initted || r)
                    if (e) this._initted = !1, r && this.render(0, !0, !0);
                    else if (this._gc && this._enabled(!0, !1), this._notifyPluginsOfEnabled && this._firstPT && i._onPluginEvent("_onDisable", this), this._time / this._duration > .998) {
                    var o = this._totalTime;
                    this.render(0, !0, !1), this._initted = !1, this.render(o, !0, !1)
                } else if (this._initted = !1, this._init(), this._time > 0 || r)
                    for (var a, l = 1 / (1 - n), h = this._firstPT; h;) a = h.s + h.c, h.c *= l, h.s = a - h.c, h = h._next;
                return this
            }, c.render = function(t, e, s) {
                this._initted || 0 === this._duration && this.vars.repeat && this.invalidate();
                var n, r, l, h, c, u, p, d, f, _ = this._dirty ? this.totalDuration() : this._totalDuration,
                    m = this._time,
                    g = this._totalTime,
                    v = this._cycle,
                    y = this._duration,
                    T = this._rawPrevTime;
                if (t >= _ - 1e-7 && t >= 0 ? (this._totalTime = _, this._cycle = this._repeat, this._yoyo && 0 != (1 & this._cycle) ? (this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0) : (this._time = y, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1), this._reversed || (n = !0, r = "onComplete", s = s || this._timeline.autoRemoveChildren), 0 === y && (this._initted || !this.vars.lazy || s) && (this._startTime === this._timeline._duration && (t = 0), (0 > T || 0 >= t && t >= -1e-7 || T === o && "isPause" !== this.data) && T !== t && (s = !0, T > o && (r = "onReverseComplete")), this._rawPrevTime = d = !e || t || T === t ? t : o)) : 1e-7 > t ? (this._totalTime = this._time = this._cycle = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== g || 0 === y && T > 0) && (r = "onReverseComplete", n = this._reversed), 0 > t && (this._active = !1, 0 === y && (this._initted || !this.vars.lazy || s) && (T >= 0 && (s = !0), this._rawPrevTime = d = !e || t || T === t ? t : o)), this._initted || (s = !0)) : (this._totalTime = this._time = t, 0 !== this._repeat && (h = y + this._repeatDelay, this._cycle = this._totalTime / h >> 0, 0 !== this._cycle && this._cycle === this._totalTime / h && t >= g && this._cycle--, this._time = this._totalTime - this._cycle * h, this._yoyo && 0 != (1 & this._cycle) && (this._time = y - this._time, (f = this._yoyoEase || this.vars.yoyoEase) && (this._yoyoEase || (!0 !== f || this._initted ? this._yoyoEase = f = !0 === f ? this._ease : f instanceof Ease ? f : Ease.map[f] : (f = this.vars.ease, this._yoyoEase = f = f ? f instanceof Ease ? f : "function" == typeof f ? new Ease(f, this.vars.easeParams) : Ease.map[f] || i.defaultEase : i.defaultEase)), this.ratio = f ? 1 - f.getRatio((y - this._time) / y) : 0)), this._time > y ? this._time = y : this._time < 0 && (this._time = 0)), this._easeType && !f ? (c = this._time / y, (1 === (u = this._easeType) || 3 === u && c >= .5) && (c = 1 - c), 3 === u && (c *= 2), 1 === (p = this._easePower) ? c *= c : 2 === p ? c *= c * c : 3 === p ? c *= c * c * c : 4 === p && (c *= c * c * c * c), 1 === u ? this.ratio = 1 - c : 2 === u ? this.ratio = c : this._time / y < .5 ? this.ratio = c / 2 : this.ratio = 1 - c / 2) : f || (this.ratio = this._ease.getRatio(this._time / y))), m !== this._time || s || v !== this._cycle) {
                    if (!this._initted) { if (this._init(), !this._initted || this._gc) return; if (!s && this._firstPT && (!1 !== this.vars.lazy && this._duration || this.vars.lazy && !this._duration)) return this._time = m, this._totalTime = g, this._rawPrevTime = T, this._cycle = v, a.lazyTweens.push(this), void(this._lazy = [t, e]);!this._time || n || f ? n && this._ease._calcEnd && !f && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1)) : this.ratio = this._ease.getRatio(this._time / y) }
                    for (!1 !== this._lazy && (this._lazy = !1), this._active || !this._paused && this._time !== m && t >= 0 && (this._active = !0), 0 === g && (2 === this._initted && t > 0 && this._init(), this._startAt && (t >= 0 ? this._startAt.render(t, !0, s) : r || (r = "_dummyGS")), this.vars.onStart && (0 !== this._totalTime || 0 === y) && (e || this._callback("onStart"))), l = this._firstPT; l;) l.f ? l.t[l.p](l.c * this.ratio + l.s) : l.t[l.p] = l.c * this.ratio + l.s, l = l._next;
                    this._onUpdate && (0 > t && this._startAt && this._startTime && this._startAt.render(t, !0, s), e || (this._totalTime !== g || r) && this._callback("onUpdate")), this._cycle !== v && (e || this._gc || this.vars.onRepeat && this._callback("onRepeat")), r && (!this._gc || s) && (0 > t && this._startAt && !this._onUpdate && this._startTime && this._startAt.render(t, !0, s), n && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[r] && this._callback(r), 0 === y && this._rawPrevTime === o && d !== o && (this._rawPrevTime = 0))
                } else g !== this._totalTime && this._onUpdate && (e || this._callback("onUpdate"))
            }, r.to = function(t, e, i) { return new r(t, e, i) }, r.from = function(t, e, i) { return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, new r(t, e, i) }, r.fromTo = function(t, e, i, s) { return s.startAt = i, s.immediateRender = 0 != s.immediateRender && 0 != i.immediateRender, new r(t, e, s) }, r.staggerTo = r.allTo = function(t, e, o, a, c, p, d) {
                a = a || 0;
                var f, _, m, g, v = 0,
                    y = [],
                    T = function() { o.onComplete && o.onComplete.apply(o.onCompleteScope || this, arguments), c.apply(d || o.callbackScope || this, p || u) },
                    x = o.cycle,
                    w = o.startAt && o.startAt.cycle;
                for (h(t) || ("string" == typeof t && (t = i.selector(t) || t), l(t) && (t = s(t))), t = t || [], 0 > a && ((t = s(t)).reverse(), a *= -1), f = t.length - 1, m = 0; f >= m; m++) {
                    for (g in _ = {}, o) _[g] = o[g];
                    if (x && (n(_, t, m), null != _.duration && (e = _.duration, delete _.duration)), w) {
                        for (g in w = _.startAt = {}, o.startAt) w[g] = o.startAt[g];
                        n(_.startAt, t, m)
                    }
                    _.delay = v + (_.delay || 0), m === f && c && (_.onComplete = T), y[m] = new r(t[m], e, _), v += a
                }
                return y
            }, r.staggerFrom = r.allFrom = function(t, e, i, s, n, o, a) { return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, r.staggerTo(t, e, i, s, n, o, a) }, r.staggerFromTo = r.allFromTo = function(t, e, i, s, n, o, a, l) { return s.startAt = i, s.immediateRender = 0 != s.immediateRender && 0 != i.immediateRender, r.staggerTo(t, e, s, n, o, a, l) }, r.delayedCall = function(t, e, i, s, n) { return new r(e, 0, { delay: t, onComplete: e, onCompleteParams: i, callbackScope: s, onReverseComplete: e, onReverseCompleteParams: i, immediateRender: !1, useFrames: n, overwrite: 0 }) }, r.set = function(t, e) { return new r(t, 0, e) }, r.isTweening = function(t) { return i.getTweensOf(t, !0).length > 0 };
            var p = function(t, e) { for (var s = [], n = 0, r = t._first; r;) r instanceof i ? s[n++] = r : (e && (s[n++] = r), n = (s = s.concat(p(r, e))).length), r = r._next; return s },
                d = r.getAllTweens = function(e) { return p(t._rootTimeline, e).concat(p(t._rootFramesTimeline, e)) };
            r.killAll = function(t, i, s, n) {
                null == i && (i = !0), null == s && (s = !0);
                var r, o, a, l = d(0 != n),
                    h = l.length,
                    c = i && s && n;
                for (a = 0; h > a; a++) o = l[a], (c || o instanceof e || (r = o.target === o.vars.onComplete) && s || i && !r) && (t ? o.totalTime(o._reversed ? 0 : o.totalDuration()) : o._enabled(!1, !1))
            }, r.killChildTweensOf = function(t, e) {
                if (null != t) {
                    var n, o, c, u, p, d = a.tweenLookup;
                    if ("string" == typeof t && (t = i.selector(t) || t), l(t) && (t = s(t)), h(t))
                        for (u = t.length; --u > -1;) r.killChildTweensOf(t[u], e);
                    else {
                        for (c in n = [], d)
                            for (o = d[c].target.parentNode; o;) o === t && (n = n.concat(d[c].tweens)), o = o.parentNode;
                        for (p = n.length, u = 0; p > u; u++) e && n[u].totalTime(n[u].totalDuration()), n[u]._enabled(!1, !1)
                    }
                }
            };
            var f = function(t, i, s, n) { i = !1 !== i, s = !1 !== s; for (var r, o, a = d(n = !1 !== n), l = i && s && n, h = a.length; --h > -1;) o = a[h], (l || o instanceof e || (r = o.target === o.vars.onComplete) && s || i && !r) && o.paused(t) };
            return r.pauseAll = function(t, e, i) { f(!0, t, e, i) }, r.resumeAll = function(t, e, i) { f(!1, t, e, i) }, r.globalTimeScale = function(e) {
                var s = t._rootTimeline,
                    n = i.ticker.time;
                return arguments.length ? (e = e || o, s._startTime = n - (n - s._startTime) * s._timeScale / e, s = t._rootFramesTimeline, n = i.ticker.frame, s._startTime = n - (n - s._startTime) * s._timeScale / e, s._timeScale = t._rootTimeline._timeScale = e, e) : s._timeScale
            }, c.progress = function(t, e) { return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 != (1 & this._cycle) ? 1 - t : t) + this._cycle * (this._duration + this._repeatDelay), e) : this._time / this.duration() }, c.totalProgress = function(t, e) { return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this._totalTime / this.totalDuration() }, c.time = function(t, e) { return arguments.length ? (this._dirty && this.totalDuration(), t > this._duration && (t = this._duration), this._yoyo && 0 != (1 & this._cycle) ? t = this._duration - t + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (t += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(t, e)) : this._time }, c.duration = function(e) { return arguments.length ? t.prototype.duration.call(this, e) : this._duration }, c.totalDuration = function(t) { return arguments.length ? -1 === this._repeat ? this : this.duration((t - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat, this._dirty = !1), this._totalDuration) }, c.repeat = function(t) { return arguments.length ? (this._repeat = t, this._uncache(!0)) : this._repeat }, c.repeatDelay = function(t) { return arguments.length ? (this._repeatDelay = t, this._uncache(!0)) : this._repeatDelay }, c.yoyo = function(t) { return arguments.length ? (this._yoyo = t, this) : this._yoyo }, r
        }, !0), _gsScope._gsDefine("TimelineLite", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function(t, e, i) {
            var s = function(t) {
                    e.call(this, t), this._labels = {}, this.autoRemoveChildren = !0 === this.vars.autoRemoveChildren, this.smoothChildTiming = !0 === this.vars.smoothChildTiming, this._sortChildren = !0, this._onUpdate = this.vars.onUpdate;
                    var i, s, n = this.vars;
                    for (s in n) i = n[s], l(i) && -1 !== i.join("").indexOf("{self}") && (n[s] = this._swapSelfInParams(i));
                    l(n.tweens) && this.add(n.tweens, 0, n.align, n.stagger)
                },
                n = 1e-10,
                r = i._internals,
                o = s._internals = {},
                a = r.isSelector,
                l = r.isArray,
                h = r.lazyTweens,
                c = r.lazyRender,
                u = _gsScope._gsDefine.globals,
                p = function(t) { var e, i = {}; for (e in t) i[e] = t[e]; return i },
                d = function(t, e, i) {
                    var s, n, r = t.cycle;
                    for (s in r) n = r[s], t[s] = "function" == typeof n ? n(i, e[i]) : n[i % n.length];
                    delete t.cycle
                },
                f = o.pauseCallback = function() {},
                _ = function(t) {
                    var e, i = [],
                        s = t.length;
                    for (e = 0; e !== s; i.push(t[e++]));
                    return i
                },
                m = s.prototype = new e;
            return s.version = "1.20.4", m.constructor = s, m.kill()._gc = m._forcingPlayhead = m._hasPause = !1, m.to = function(t, e, s, n) { var r = s.repeat && u.TweenMax || i; return e ? this.add(new r(t, e, s), n) : this.set(t, s, n) }, m.from = function(t, e, s, n) { return this.add((s.repeat && u.TweenMax || i).from(t, e, s), n) }, m.fromTo = function(t, e, s, n, r) { var o = n.repeat && u.TweenMax || i; return e ? this.add(o.fromTo(t, e, s, n), r) : this.set(t, n, r) }, m.staggerTo = function(t, e, n, r, o, l, h, c) {
                var u, f, m = new s({ onComplete: l, onCompleteParams: h, callbackScope: c, smoothChildTiming: this.smoothChildTiming }),
                    g = n.cycle;
                for ("string" == typeof t && (t = i.selector(t) || t), a(t = t || []) && (t = _(t)), 0 > (r = r || 0) && ((t = _(t)).reverse(), r *= -1), f = 0; f < t.length; f++)(u = p(n)).startAt && (u.startAt = p(u.startAt), u.startAt.cycle && d(u.startAt, t, f)), g && (d(u, t, f), null != u.duration && (e = u.duration, delete u.duration)), m.to(t[f], e, u, f * r);
                return this.add(m, o)
            }, m.staggerFrom = function(t, e, i, s, n, r, o, a) { return i.immediateRender = 0 != i.immediateRender, i.runBackwards = !0, this.staggerTo(t, e, i, s, n, r, o, a) }, m.staggerFromTo = function(t, e, i, s, n, r, o, a, l) { return s.startAt = i, s.immediateRender = 0 != s.immediateRender && 0 != i.immediateRender, this.staggerTo(t, e, s, n, r, o, a, l) }, m.call = function(t, e, s, n) { return this.add(i.delayedCall(0, t, e, s), n) }, m.set = function(t, e, s) { return s = this._parseTimeOrLabel(s, 0, !0), null == e.immediateRender && (e.immediateRender = s === this._time && !this._paused), this.add(new i(t, 0, e), s) }, s.exportRoot = function(t, e) {
                null == (t = t || {}).smoothChildTiming && (t.smoothChildTiming = !0);
                var n, r, o, a, l = new s(t),
                    h = l._timeline;
                for (null == e && (e = !0), h._remove(l, !0), l._startTime = 0, l._rawPrevTime = l._time = l._totalTime = h._time, o = h._first; o;) a = o._next, e && o instanceof i && o.target === o.vars.onComplete || (0 > (r = o._startTime - o._delay) && (n = 1), l.add(o, r)), o = a;
                return h.add(l, 0), n && l.totalDuration(), l
            }, m.add = function(n, r, o, a) {
                var h, c, u, p, d, f;
                if ("number" != typeof r && (r = this._parseTimeOrLabel(r, 0, !0, n)), !(n instanceof t)) {
                    if (n instanceof Array || n && n.push && l(n)) { for (o = o || "normal", a = a || 0, h = r, c = n.length, u = 0; c > u; u++) l(p = n[u]) && (p = new s({ tweens: p })), this.add(p, h), "string" != typeof p && "function" != typeof p && ("sequence" === o ? h = p._startTime + p.totalDuration() / p._timeScale : "start" === o && (p._startTime -= p.delay())), h += a; return this._uncache(!0) }
                    if ("string" == typeof n) return this.addLabel(n, r);
                    if ("function" != typeof n) throw "Cannot add " + n + " into the timeline; it is not a tween, timeline, function, or string.";
                    n = i.delayedCall(0, n)
                }
                if (e.prototype.add.call(this, n, r), n._time && n.render((this.rawTime() - n._startTime) * n._timeScale, !1, !1), (this._gc || this._time === this._duration) && !this._paused && this._duration < this.duration())
                    for (f = (d = this).rawTime() > n._startTime; d._timeline;) f && d._timeline.smoothChildTiming ? d.totalTime(d._totalTime, !0) : d._gc && d._enabled(!0, !1), d = d._timeline;
                return this
            }, m.remove = function(e) { if (e instanceof t) { this._remove(e, !1); var i = e._timeline = e.vars.useFrames ? t._rootFramesTimeline : t._rootTimeline; return e._startTime = (e._paused ? e._pauseTime : i._time) - (e._reversed ? e.totalDuration() - e._totalTime : e._totalTime) / e._timeScale, this } if (e instanceof Array || e && e.push && l(e)) { for (var s = e.length; --s > -1;) this.remove(e[s]); return this } return "string" == typeof e ? this.removeLabel(e) : this.kill(null, e) }, m._remove = function(t, i) { return e.prototype._remove.call(this, t, i), this._last ? this._time > this.duration() && (this._time = this._duration, this._totalTime = this._totalDuration) : this._time = this._totalTime = this._duration = this._totalDuration = 0, this }, m.append = function(t, e) { return this.add(t, this._parseTimeOrLabel(null, e, !0, t)) }, m.insert = m.insertMultiple = function(t, e, i, s) { return this.add(t, e || 0, i, s) }, m.appendMultiple = function(t, e, i, s) { return this.add(t, this._parseTimeOrLabel(null, e, !0, t), i, s) }, m.addLabel = function(t, e) { return this._labels[t] = this._parseTimeOrLabel(e), this }, m.addPause = function(t, e, s, n) { var r = i.delayedCall(0, f, s, n || this); return r.vars.onComplete = r.vars.onReverseComplete = e, r.data = "isPause", this._hasPause = !0, this.add(r, t) }, m.removeLabel = function(t) { return delete this._labels[t], this }, m.getLabelTime = function(t) { return null != this._labels[t] ? this._labels[t] : -1 }, m._parseTimeOrLabel = function(e, i, s, n) {
                var r, o;
                if (n instanceof t && n.timeline === this) this.remove(n);
                else if (n && (n instanceof Array || n.push && l(n)))
                    for (o = n.length; --o > -1;) n[o] instanceof t && n[o].timeline === this && this.remove(n[o]);
                if (r = "number" != typeof e || i ? this.duration() > 99999999999 ? this.recent().endTime(!1) : this._duration : 0, "string" == typeof i) return this._parseTimeOrLabel(i, s && "number" == typeof e && null == this._labels[i] ? e - r : 0, s);
                if (i = i || 0, "string" != typeof e || !isNaN(e) && null == this._labels[e]) null == e && (e = r);
                else {
                    if (-1 === (o = e.indexOf("="))) return null == this._labels[e] ? s ? this._labels[e] = r + i : i : this._labels[e] + i;
                    i = parseInt(e.charAt(o - 1) + "1", 10) * Number(e.substr(o + 1)), e = o > 1 ? this._parseTimeOrLabel(e.substr(0, o - 1), 0, s) : r
                }
                return Number(e) + i
            }, m.seek = function(t, e) { return this.totalTime("number" == typeof t ? t : this._parseTimeOrLabel(t), !1 !== e) }, m.stop = function() { return this.paused(!0) }, m.gotoAndPlay = function(t, e) { return this.play(t, e) }, m.gotoAndStop = function(t, e) { return this.pause(t, e) }, m.render = function(t, e, i) {
                this._gc && this._enabled(!0, !1);
                var s, r, o, a, l, u, p, d = this._time,
                    f = this._dirty ? this.totalDuration() : this._totalDuration,
                    _ = this._startTime,
                    m = this._timeScale,
                    g = this._paused;
                if (d !== this._time && (t += this._time - d), t >= f - 1e-7 && t >= 0) this._totalTime = this._time = f, this._reversed || this._hasPausedChild() || (r = !0, a = "onComplete", l = !!this._timeline.autoRemoveChildren, 0 === this._duration && (0 >= t && t >= -1e-7 || this._rawPrevTime < 0 || this._rawPrevTime === n) && this._rawPrevTime !== t && this._first && (l = !0, this._rawPrevTime > n && (a = "onReverseComplete"))), this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : n, t = f + 1e-4;
                else if (1e-7 > t)
                    if (this._totalTime = this._time = 0, (0 !== d || 0 === this._duration && this._rawPrevTime !== n && (this._rawPrevTime > 0 || 0 > t && this._rawPrevTime >= 0)) && (a = "onReverseComplete", r = this._reversed), 0 > t) this._active = !1, this._timeline.autoRemoveChildren && this._reversed ? (l = r = !0, a = "onReverseComplete") : this._rawPrevTime >= 0 && this._first && (l = !0), this._rawPrevTime = t;
                    else {
                        if (this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : n, 0 === t && r)
                            for (s = this._first; s && 0 === s._startTime;) s._duration || (r = !1), s = s._next;
                        t = 0, this._initted || (l = !0)
                    }
                else {
                    if (this._hasPause && !this._forcingPlayhead && !e) {
                        if (t >= d)
                            for (s = this._first; s && s._startTime <= t && !u;) s._duration || "isPause" !== s.data || s.ratio || 0 === s._startTime && 0 === this._rawPrevTime || (u = s), s = s._next;
                        else
                            for (s = this._last; s && s._startTime >= t && !u;) s._duration || "isPause" === s.data && s._rawPrevTime > 0 && (u = s), s = s._prev;
                        u && (this._time = t = u._startTime, this._totalTime = t + this._cycle * (this._totalDuration + this._repeatDelay))
                    }
                    this._totalTime = this._time = this._rawPrevTime = t
                }
                if (this._time !== d && this._first || i || l || u) {
                    if (this._initted || (this._initted = !0), this._active || !this._paused && this._time !== d && t > 0 && (this._active = !0), 0 === d && this.vars.onStart && (0 === this._time && this._duration || e || this._callback("onStart")), (p = this._time) >= d)
                        for (s = this._first; s && (o = s._next, p === this._time && (!this._paused || g));)(s._active || s._startTime <= p && !s._paused && !s._gc) && (u === s && this.pause(), s._reversed ? s.render((s._dirty ? s.totalDuration() : s._totalDuration) - (t - s._startTime) * s._timeScale, e, i) : s.render((t - s._startTime) * s._timeScale, e, i)), s = o;
                    else
                        for (s = this._last; s && (o = s._prev, p === this._time && (!this._paused || g));) {
                            if (s._active || s._startTime <= d && !s._paused && !s._gc) {
                                if (u === s) {
                                    for (u = s._prev; u && u.endTime() > this._time;) u.render(u._reversed ? u.totalDuration() - (t - u._startTime) * u._timeScale : (t - u._startTime) * u._timeScale, e, i), u = u._prev;
                                    u = null, this.pause()
                                }
                                s._reversed ? s.render((s._dirty ? s.totalDuration() : s._totalDuration) - (t - s._startTime) * s._timeScale, e, i) : s.render((t - s._startTime) * s._timeScale, e, i)
                            }
                            s = o
                        }
                    this._onUpdate && (e || (h.length && c(), this._callback("onUpdate"))), a && (this._gc || (_ === this._startTime || m !== this._timeScale) && (0 === this._time || f >= this.totalDuration()) && (r && (h.length && c(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[a] && this._callback(a)))
                }
            }, m._hasPausedChild = function() {
                for (var t = this._first; t;) {
                    if (t._paused || t instanceof s && t._hasPausedChild()) return !0;
                    t = t._next
                }
                return !1
            }, m.getChildren = function(t, e, s, n) { n = n || -9999999999; for (var r = [], o = this._first, a = 0; o;) o._startTime < n || (o instanceof i ? !1 !== e && (r[a++] = o) : (!1 !== s && (r[a++] = o), !1 !== t && (a = (r = r.concat(o.getChildren(!0, e, s))).length))), o = o._next; return r }, m.getTweensOf = function(t, e) {
                var s, n, r = this._gc,
                    o = [],
                    a = 0;
                for (r && this._enabled(!0, !0), n = (s = i.getTweensOf(t)).length; --n > -1;)(s[n].timeline === this || e && this._contains(s[n])) && (o[a++] = s[n]);
                return r && this._enabled(!1, !0), o
            }, m.recent = function() { return this._recent }, m._contains = function(t) {
                for (var e = t.timeline; e;) {
                    if (e === this) return !0;
                    e = e.timeline
                }
                return !1
            }, m.shiftChildren = function(t, e, i) {
                i = i || 0;
                for (var s, n = this._first, r = this._labels; n;) n._startTime >= i && (n._startTime += t), n = n._next;
                if (e)
                    for (s in r) r[s] >= i && (r[s] += t);
                return this._uncache(!0)
            }, m._kill = function(t, e) { if (!t && !e) return this._enabled(!1, !1); for (var i = e ? this.getTweensOf(e) : this.getChildren(!0, !0, !1), s = i.length, n = !1; --s > -1;) i[s]._kill(t, e) && (n = !0); return n }, m.clear = function(t) {
                var e = this.getChildren(!1, !0, !0),
                    i = e.length;
                for (this._time = this._totalTime = 0; --i > -1;) e[i]._enabled(!1, !1);
                return !1 !== t && (this._labels = {}), this._uncache(!0)
            }, m.invalidate = function() { for (var e = this._first; e;) e.invalidate(), e = e._next; return t.prototype.invalidate.call(this) }, m._enabled = function(t, i) {
                if (t === this._gc)
                    for (var s = this._first; s;) s._enabled(t, !0), s = s._next;
                return e.prototype._enabled.call(this, t, i)
            }, m.totalTime = function(e, i, s) { this._forcingPlayhead = !0; var n = t.prototype.totalTime.apply(this, arguments); return this._forcingPlayhead = !1, n }, m.duration = function(t) { return arguments.length ? (0 !== this.duration() && 0 !== t && this.timeScale(this._duration / t), this) : (this._dirty && this.totalDuration(), this._duration) }, m.totalDuration = function(t) {
                if (!arguments.length) {
                    if (this._dirty) {
                        for (var e, i, s = 0, n = this._last, r = 999999999999; n;) e = n._prev, n._dirty && n.totalDuration(), n._startTime > r && this._sortChildren && !n._paused && !this._calculatingDuration ? (this._calculatingDuration = 1, this.add(n, n._startTime - n._delay), this._calculatingDuration = 0) : r = n._startTime, n._startTime < 0 && !n._paused && (s -= n._startTime, this._timeline.smoothChildTiming && (this._startTime += n._startTime / this._timeScale, this._time -= n._startTime, this._totalTime -= n._startTime, this._rawPrevTime -= n._startTime), this.shiftChildren(-n._startTime, !1, -9999999999), r = 0), (i = n._startTime + n._totalDuration / n._timeScale) > s && (s = i), n = e;
                        this._duration = this._totalDuration = s, this._dirty = !1
                    }
                    return this._totalDuration
                }
                return t && this.totalDuration() ? this.timeScale(this._totalDuration / t) : this
            }, m.paused = function(e) {
                if (!e)
                    for (var i = this._first, s = this._time; i;) i._startTime === s && "isPause" === i.data && (i._rawPrevTime = 0), i = i._next;
                return t.prototype.paused.apply(this, arguments)
            }, m.usesFrames = function() { for (var e = this._timeline; e._timeline;) e = e._timeline; return e === t._rootFramesTimeline }, m.rawTime = function(t) { return t && (this._paused || this._repeat && this.time() > 0 && this.totalProgress() < 1) ? this._totalTime % (this._duration + this._repeatDelay) : this._paused ? this._totalTime : (this._timeline.rawTime(t) - this._startTime) * this._timeScale }, s
        }, !0), _gsScope._gsDefine("TimelineMax", ["TimelineLite", "TweenLite", "easing.Ease"], function(t, e, i) {
            var s = function(e) { t.call(this, e), this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._cycle = 0, this._yoyo = !0 === this.vars.yoyo, this._dirty = !0 },
                n = e._internals,
                r = n.lazyTweens,
                o = n.lazyRender,
                a = _gsScope._gsDefine.globals,
                l = new i(null, null, 1, 0),
                h = s.prototype = new t;
            return h.constructor = s, h.kill()._gc = !1, s.version = "1.20.4", h.invalidate = function() { return this._yoyo = !0 === this.vars.yoyo, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), t.prototype.invalidate.call(this) }, h.addCallback = function(t, i, s, n) { return this.add(e.delayedCall(0, t, s, n), i) }, h.removeCallback = function(t, e) {
                if (t)
                    if (null == e) this._kill(null, t);
                    else
                        for (var i = this.getTweensOf(t, !1), s = i.length, n = this._parseTimeOrLabel(e); --s > -1;) i[s]._startTime === n && i[s]._enabled(!1, !1);
                return this
            }, h.removePause = function(e) { return this.removeCallback(t._internals.pauseCallback, e) }, h.tweenTo = function(t, i) {
                i = i || {};
                var s, n, r, o = { ease: l, useFrames: this.usesFrames(), immediateRender: !1, lazy: !1 },
                    h = i.repeat && a.TweenMax || e;
                for (n in i) o[n] = i[n];
                return o.time = this._parseTimeOrLabel(t), s = Math.abs(Number(o.time) - this._time) / this._timeScale || .001, r = new h(this, s, o), o.onStart = function() { r.target.paused(!0), r.vars.time === r.target.time() || s !== r.duration() || r.isFromTo || r.duration(Math.abs(r.vars.time - r.target.time()) / r.target._timeScale).render(r.time(), !0, !0), i.onStart && i.onStart.apply(i.onStartScope || i.callbackScope || r, i.onStartParams || []) }, r
            }, h.tweenFromTo = function(t, e, i) { i = i || {}, t = this._parseTimeOrLabel(t), i.startAt = { onComplete: this.seek, onCompleteParams: [t], callbackScope: this }, i.immediateRender = !1 !== i.immediateRender; var s = this.tweenTo(e, i); return s.isFromTo = 1, s.duration(Math.abs(s.vars.time - t) / this._timeScale || .001) }, h.render = function(t, e, i) {
                this._gc && this._enabled(!0, !1);
                var s, n, a, l, h, c, u, p, d = this._time,
                    f = this._dirty ? this.totalDuration() : this._totalDuration,
                    _ = this._duration,
                    m = this._totalTime,
                    g = this._startTime,
                    v = this._timeScale,
                    y = this._rawPrevTime,
                    T = this._paused,
                    x = this._cycle;
                if (d !== this._time && (t += this._time - d), t >= f - 1e-7 && t >= 0) this._locked || (this._totalTime = f, this._cycle = this._repeat), this._reversed || this._hasPausedChild() || (n = !0, l = "onComplete", h = !!this._timeline.autoRemoveChildren, 0 === this._duration && (0 >= t && t >= -1e-7 || 0 > y || 1e-10 === y) && y !== t && this._first && (h = !0, y > 1e-10 && (l = "onReverseComplete"))), this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : 1e-10, this._yoyo && 0 != (1 & this._cycle) ? this._time = t = 0 : (this._time = _, t = _ + 1e-4);
                else if (1e-7 > t)
                    if (this._locked || (this._totalTime = this._cycle = 0), this._time = 0, (0 !== d || 0 === _ && 1e-10 !== y && (y > 0 || 0 > t && y >= 0) && !this._locked) && (l = "onReverseComplete", n = this._reversed), 0 > t) this._active = !1, this._timeline.autoRemoveChildren && this._reversed ? (h = n = !0, l = "onReverseComplete") : y >= 0 && this._first && (h = !0), this._rawPrevTime = t;
                    else {
                        if (this._rawPrevTime = _ || !e || t || this._rawPrevTime === t ? t : 1e-10, 0 === t && n)
                            for (s = this._first; s && 0 === s._startTime;) s._duration || (n = !1), s = s._next;
                        t = 0, this._initted || (h = !0)
                    }
                else if (0 === _ && 0 > y && (h = !0), this._time = this._rawPrevTime = t, this._locked || (this._totalTime = t, 0 !== this._repeat && (c = _ + this._repeatDelay, this._cycle = this._totalTime / c >> 0, 0 !== this._cycle && this._cycle === this._totalTime / c && t >= m && this._cycle--, this._time = this._totalTime - this._cycle * c, this._yoyo && 0 != (1 & this._cycle) && (this._time = _ - this._time), this._time > _ ? (this._time = _, t = _ + 1e-4) : this._time < 0 ? this._time = t = 0 : t = this._time)), this._hasPause && !this._forcingPlayhead && !e) {
                    if ((t = this._time) >= d || this._repeat && x !== this._cycle)
                        for (s = this._first; s && s._startTime <= t && !u;) s._duration || "isPause" !== s.data || s.ratio || 0 === s._startTime && 0 === this._rawPrevTime || (u = s), s = s._next;
                    else
                        for (s = this._last; s && s._startTime >= t && !u;) s._duration || "isPause" === s.data && s._rawPrevTime > 0 && (u = s), s = s._prev;
                    u && u._startTime < _ && (this._time = t = u._startTime, this._totalTime = t + this._cycle * (this._totalDuration + this._repeatDelay))
                }
                if (this._cycle !== x && !this._locked) {
                    var w = this._yoyo && 0 != (1 & x),
                        b = w === (this._yoyo && 0 != (1 & this._cycle)),
                        k = this._totalTime,
                        S = this._cycle,
                        P = this._rawPrevTime,
                        O = this._time;
                    if (this._totalTime = x * _, this._cycle < x ? w = !w : this._totalTime += _, this._time = d, this._rawPrevTime = 0 === _ ? y - 1e-4 : y, this._cycle = x, this._locked = !0, d = w ? 0 : _, this.render(d, e, 0 === _), e || this._gc || this.vars.onRepeat && (this._cycle = S, this._locked = !1, this._callback("onRepeat")), d !== this._time) return;
                    if (b && (this._cycle = x, this._locked = !0, d = w ? _ + 1e-4 : -1e-4, this.render(d, !0, !1)), this._locked = !1, this._paused && !T) return;
                    this._time = O, this._totalTime = k, this._cycle = S, this._rawPrevTime = P
                }
                if (this._time !== d && this._first || i || h || u) {
                    if (this._initted || (this._initted = !0), this._active || !this._paused && this._totalTime !== m && t > 0 && (this._active = !0), 0 === m && this.vars.onStart && (0 === this._totalTime && this._totalDuration || e || this._callback("onStart")), (p = this._time) >= d)
                        for (s = this._first; s && (a = s._next, p === this._time && (!this._paused || T));)(s._active || s._startTime <= this._time && !s._paused && !s._gc) && (u === s && this.pause(), s._reversed ? s.render((s._dirty ? s.totalDuration() : s._totalDuration) - (t - s._startTime) * s._timeScale, e, i) : s.render((t - s._startTime) * s._timeScale, e, i)), s = a;
                    else
                        for (s = this._last; s && (a = s._prev, p === this._time && (!this._paused || T));) {
                            if (s._active || s._startTime <= d && !s._paused && !s._gc) {
                                if (u === s) {
                                    for (u = s._prev; u && u.endTime() > this._time;) u.render(u._reversed ? u.totalDuration() - (t - u._startTime) * u._timeScale : (t - u._startTime) * u._timeScale, e, i), u = u._prev;
                                    u = null, this.pause()
                                }
                                s._reversed ? s.render((s._dirty ? s.totalDuration() : s._totalDuration) - (t - s._startTime) * s._timeScale, e, i) : s.render((t - s._startTime) * s._timeScale, e, i)
                            }
                            s = a
                        }
                    this._onUpdate && (e || (r.length && o(), this._callback("onUpdate"))), l && (this._locked || this._gc || (g === this._startTime || v !== this._timeScale) && (0 === this._time || f >= this.totalDuration()) && (n && (r.length && o(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[l] && this._callback(l)))
                } else m !== this._totalTime && this._onUpdate && (e || this._callback("onUpdate"))
            }, h.getActive = function(t, e, i) {
                null == t && (t = !0), null == e && (e = !0), null == i && (i = !1);
                var s, n, r = [],
                    o = this.getChildren(t, e, i),
                    a = 0,
                    l = o.length;
                for (s = 0; l > s; s++)(n = o[s]).isActive() && (r[a++] = n);
                return r
            }, h.getLabelAfter = function(t) {
                t || 0 !== t && (t = this._time);
                var e, i = this.getLabelsArray(),
                    s = i.length;
                for (e = 0; s > e; e++)
                    if (i[e].time > t) return i[e].name;
                return null
            }, h.getLabelBefore = function(t) {
                null == t && (t = this._time);
                for (var e = this.getLabelsArray(), i = e.length; --i > -1;)
                    if (e[i].time < t) return e[i].name;
                return null
            }, h.getLabelsArray = function() {
                var t, e = [],
                    i = 0;
                for (t in this._labels) e[i++] = { time: this._labels[t], name: t };
                return e.sort(function(t, e) { return t.time - e.time }), e
            }, h.invalidate = function() { return this._locked = !1, t.prototype.invalidate.call(this) }, h.progress = function(t, e) { return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 != (1 & this._cycle) ? 1 - t : t) + this._cycle * (this._duration + this._repeatDelay), e) : this._time / this.duration() || 0 }, h.totalProgress = function(t, e) { return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this._totalTime / this.totalDuration() || 0 }, h.totalDuration = function(e) { return arguments.length ? -1 !== this._repeat && e ? this.timeScale(this.totalDuration() / e) : this : (this._dirty && (t.prototype.totalDuration.call(this), this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat), this._totalDuration) }, h.time = function(t, e) { return arguments.length ? (this._dirty && this.totalDuration(), t > this._duration && (t = this._duration), this._yoyo && 0 != (1 & this._cycle) ? t = this._duration - t + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (t += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(t, e)) : this._time }, h.repeat = function(t) { return arguments.length ? (this._repeat = t, this._uncache(!0)) : this._repeat }, h.repeatDelay = function(t) { return arguments.length ? (this._repeatDelay = t, this._uncache(!0)) : this._repeatDelay }, h.yoyo = function(t) { return arguments.length ? (this._yoyo = t, this) : this._yoyo }, h.currentLabel = function(t) { return arguments.length ? this.seek(t, !0) : this.getLabelBefore(this._time + 1e-8) }, s
        }, !0), s = 180 / Math.PI, n = [], r = [], o = [], a = {}, l = _gsScope._gsDefine.globals, h = function(t, e, i, s) { i === s && (i = s - (s - e) / 1e6), t === e && (e = t + (i - t) / 1e6), this.a = t, this.b = e, this.c = i, this.d = s, this.da = s - t, this.ca = i - t, this.ba = e - t }, c = function(t, e, i, s) {
            var n = { a: t },
                r = {},
                o = {},
                a = { c: s },
                l = (t + e) / 2,
                h = (e + i) / 2,
                c = (i + s) / 2,
                u = (l + h) / 2,
                p = (h + c) / 2,
                d = (p - u) / 8;
            return n.b = l + (t - l) / 4, r.b = u + d, n.c = r.a = (n.b + r.b) / 2, r.c = o.a = (u + p) / 2, o.b = p - d, a.b = c + (s - c) / 4, o.c = a.a = (o.b + a.b) / 2, [n, r, o, a]
        }, u = function(t, e, i, s, a) {
            var l, h, u, p, d, f, _, m, g, v, y, T, x, w = t.length - 1,
                b = 0,
                k = t[0].a;
            for (l = 0; w > l; l++) h = (d = t[b]).a, u = d.d, p = t[b + 1].d, a ? (y = n[l], x = ((T = r[l]) + y) * e * .25 / (s ? .5 : o[l] || .5), m = u - ((f = u - (u - h) * (s ? .5 * e : 0 !== y ? x / y : 0)) + (((_ = u + (p - u) * (s ? .5 * e : 0 !== T ? x / T : 0)) - f) * (3 * y / (y + T) + .5) / 4 || 0))) : m = u - ((f = u - (u - h) * e * .5) + (_ = u + (p - u) * e * .5)) / 2, f += m, _ += m, d.c = g = f, d.b = 0 !== l ? k : k = d.a + .6 * (d.c - d.a), d.da = u - h, d.ca = g - h, d.ba = k - h, i ? (v = c(h, k, g, u), t.splice(b, 1, v[0], v[1], v[2], v[3]), b += 4) : b++, k = _;
            (d = t[b]).b = k, d.c = k + .4 * (d.d - k), d.da = d.d - d.a, d.ca = d.c - d.a, d.ba = k - d.a, i && (v = c(d.a, k, d.c, d.d), t.splice(b, 1, v[0], v[1], v[2], v[3]))
        }, p = function(t, e, i, s) {
            var o, a, l, c, u, p, d = [];
            if (s)
                for (a = (t = [s].concat(t)).length; --a > -1;) "string" == typeof(p = t[a][e]) && "=" === p.charAt(1) && (t[a][e] = s[e] + Number(p.charAt(0) + p.substr(2)));
            if (0 > (o = t.length - 2)) return d[0] = new h(t[0][e], 0, 0, t[0][e]), d;
            for (a = 0; o > a; a++) l = t[a][e], c = t[a + 1][e], d[a] = new h(l, 0, 0, c), i && (u = t[a + 2][e], n[a] = (n[a] || 0) + (c - l) * (c - l), r[a] = (r[a] || 0) + (u - c) * (u - c));
            return d[a] = new h(t[a][e], 0, 0, t[a + 1][e]), d
        }, d = function(t, e, i, s, l, h) {
            var c, d, f, _, m, g, v, y, T = {},
                x = [],
                w = h || t[0];
            for (d in l = "string" == typeof l ? "," + l + "," : ",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,", null == e && (e = 1), t[0]) x.push(d);
            if (t.length > 1) {
                for (y = t[t.length - 1], v = !0, c = x.length; --c > -1;)
                    if (d = x[c], Math.abs(w[d] - y[d]) > .05) { v = !1; break }
                v && (t = t.concat(), h && t.unshift(h), t.push(t[1]), h = t[t.length - 3])
            }
            for (n.length = r.length = o.length = 0, c = x.length; --c > -1;) d = x[c], a[d] = -1 !== l.indexOf("," + d + ","), T[d] = p(t, d, a[d], h);
            for (c = n.length; --c > -1;) n[c] = Math.sqrt(n[c]), r[c] = Math.sqrt(r[c]);
            if (!s) {
                for (c = x.length; --c > -1;)
                    if (a[d])
                        for (g = (f = T[x[c]]).length - 1, _ = 0; g > _; _++) m = f[_ + 1].da / r[_] + f[_].da / n[_] || 0, o[_] = (o[_] || 0) + m * m;
                for (c = o.length; --c > -1;) o[c] = Math.sqrt(o[c])
            }
            for (c = x.length, _ = i ? 4 : 1; --c > -1;) f = T[d = x[c]], u(f, e, i, s, a[d]), v && (f.splice(0, _), f.splice(f.length - _, _));
            return T
        }, f = function(t, e, i) {
            for (var s, n, r, o, a, l, h, c, u, p, d, f = 1 / i, _ = t.length; --_ > -1;)
                for (r = (p = t[_]).a, o = p.d - r, a = p.c - r, l = p.b - r, s = n = 0, c = 1; i >= c; c++) s = n - (n = ((h = f * c) * h * o + 3 * (u = 1 - h) * (h * a + u * l)) * h), e[d = _ * i + c - 1] = (e[d] || 0) + s * s
        }, _ = _gsScope._gsDefine.plugin({
            propName: "bezier",
            priority: -1,
            version: "1.3.8",
            API: 2,
            global: !0,
            init: function(t, e, i) {
                this._target = t, e instanceof Array && (e = { values: e }), this._func = {}, this._mod = {}, this._props = [], this._timeRes = null == e.timeResolution ? 6 : parseInt(e.timeResolution, 10);
                var s, n, r, o, a, l = e.values || [],
                    c = {},
                    u = l[0],
                    p = e.autoRotate || i.vars.orientToBezier;
                for (s in this._autoRotate = p ? p instanceof Array ? p : [
                        ["x", "y", "rotation", !0 === p ? 0 : Number(p) || 0]
                    ] : null, u) this._props.push(s);
                for (r = this._props.length; --r > -1;) s = this._props[r], this._overwriteProps.push(s), n = this._func[s] = "function" == typeof t[s], c[s] = n ? t[s.indexOf("set") || "function" != typeof t["get" + s.substr(3)] ? s : "get" + s.substr(3)]() : parseFloat(t[s]), a || c[s] !== l[0][s] && (a = c);
                if (this._beziers = "cubic" !== e.type && "quadratic" !== e.type && "soft" !== e.type ? d(l, isNaN(e.curviness) ? 1 : e.curviness, !1, "thruBasic" === e.type, e.correlate, a) : function(t, e, i) {
                        var s, n, r, o, a, l, c, u, p, d, f, _ = {},
                            m = "cubic" === (e = e || "soft") ? 3 : 2,
                            g = "soft" === e,
                            v = [];
                        if (g && i && (t = [i].concat(t)), null == t || t.length < m + 1) throw "invalid Bezier data";
                        for (p in t[0]) v.push(p);
                        for (l = v.length; --l > -1;) {
                            for (_[p = v[l]] = a = [], d = 0, u = t.length, c = 0; u > c; c++) s = null == i ? t[c][p] : "string" == typeof(f = t[c][p]) && "=" === f.charAt(1) ? i[p] + Number(f.charAt(0) + f.substr(2)) : Number(f), g && c > 1 && u - 1 > c && (a[d++] = (s + a[d - 2]) / 2), a[d++] = s;
                            for (u = d - m + 1, d = 0, c = 0; u > c; c += m) s = a[c], n = a[c + 1], r = a[c + 2], o = 2 === m ? 0 : a[c + 3], a[d++] = f = 3 === m ? new h(s, n, r, o) : new h(s, (2 * n + s) / 3, (2 * n + r) / 3, r);
                            a.length = d
                        }
                        return _
                    }(l, e.type, c), this._segCount = this._beziers[s].length, this._timeRes) {
                    var _ = function(t, e) {
                        var i, s, n, r, o = [],
                            a = [],
                            l = 0,
                            h = 0,
                            c = (e = e >> 0 || 6) - 1,
                            u = [],
                            p = [];
                        for (i in t) f(t[i], o, e);
                        for (n = o.length, s = 0; n > s; s++) l += Math.sqrt(o[s]), p[r = s % e] = l, r === c && (h += l, u[r = s / e >> 0] = p, a[r] = h, l = 0, p = []);
                        return { length: h, lengths: a, segments: u }
                    }(this._beziers, this._timeRes);
                    this._length = _.length, this._lengths = _.lengths, this._segments = _.segments, this._l1 = this._li = this._s1 = this._si = 0, this._l2 = this._lengths[0], this._curSeg = this._segments[0], this._s2 = this._curSeg[0], this._prec = 1 / this._curSeg.length
                }
                if (p = this._autoRotate)
                    for (this._initialRotations = [], p[0] instanceof Array || (this._autoRotate = p = [p]), r = p.length; --r > -1;) {
                        for (o = 0; 3 > o; o++) s = p[r][o], this._func[s] = "function" == typeof t[s] && t[s.indexOf("set") || "function" != typeof t["get" + s.substr(3)] ? s : "get" + s.substr(3)];
                        s = p[r][2], this._initialRotations[r] = (this._func[s] ? this._func[s].call(this._target) : this._target[s]) || 0, this._overwriteProps.push(s)
                    }
                return this._startRatio = i.vars.runBackwards ? 1 : 0, !0
            },
            set: function(t) {
                var e, i, n, r, o, a, l, h, c, u, p = this._segCount,
                    d = this._func,
                    f = this._target,
                    _ = t !== this._startRatio;
                if (this._timeRes) {
                    if (c = this._lengths, u = this._curSeg, t *= this._length, n = this._li, t > this._l2 && p - 1 > n) {
                        for (h = p - 1; h > n && (this._l2 = c[++n]) <= t;);
                        this._l1 = c[n - 1], this._li = n, this._curSeg = u = this._segments[n], this._s2 = u[this._s1 = this._si = 0]
                    } else if (t < this._l1 && n > 0) {
                        for (; n > 0 && (this._l1 = c[--n]) >= t;);
                        0 === n && t < this._l1 ? this._l1 = 0 : n++, this._l2 = c[n], this._li = n, this._curSeg = u = this._segments[n], this._s1 = u[(this._si = u.length - 1) - 1] || 0, this._s2 = u[this._si]
                    }
                    if (e = n, t -= this._l1, n = this._si, t > this._s2 && n < u.length - 1) {
                        for (h = u.length - 1; h > n && (this._s2 = u[++n]) <= t;);
                        this._s1 = u[n - 1], this._si = n
                    } else if (t < this._s1 && n > 0) {
                        for (; n > 0 && (this._s1 = u[--n]) >= t;);
                        0 === n && t < this._s1 ? this._s1 = 0 : n++, this._s2 = u[n], this._si = n
                    }
                    a = (n + (t - this._s1) / (this._s2 - this._s1)) * this._prec || 0
                } else a = (t - (e = 0 > t ? 0 : t >= 1 ? p - 1 : p * t >> 0) * (1 / p)) * p;
                for (i = 1 - a, n = this._props.length; --n > -1;) r = this._props[n], l = (a * a * (o = this._beziers[r][e]).da + 3 * i * (a * o.ca + i * o.ba)) * a + o.a, this._mod[r] && (l = this._mod[r](l, f)), d[r] ? f[r](l) : f[r] = l;
                if (this._autoRotate) { var m, g, v, y, T, x, w, b = this._autoRotate; for (n = b.length; --n > -1;) r = b[n][2], x = b[n][3] || 0, w = !0 === b[n][4] ? 1 : s, o = this._beziers[b[n][0]], m = this._beziers[b[n][1]], o && m && (o = o[e], m = m[e], g = o.a + (o.b - o.a) * a, g += ((y = o.b + (o.c - o.b) * a) - g) * a, y += (o.c + (o.d - o.c) * a - y) * a, v = m.a + (m.b - m.a) * a, v += ((T = m.b + (m.c - m.b) * a) - v) * a, T += (m.c + (m.d - m.c) * a - T) * a, l = _ ? Math.atan2(T - v, y - g) * w + x : this._initialRotations[n], this._mod[r] && (l = this._mod[r](l, f)), d[r] ? f[r](l) : f[r] = l) }
            }
        }), m = _.prototype, _.bezierThrough = d, _.cubicToQuadratic = c, _._autoCSS = !0, _.quadraticToCubic = function(t, e, i) { return new h(t, (2 * e + t) / 3, (2 * e + i) / 3, i) }, _._cssRegister = function() {
            var t = l.CSSPlugin;
            if (t) {
                var e = t._internals,
                    i = e._parseToProxy,
                    s = e._setPluginRatio,
                    n = e.CSSPropTween;
                e._registerComplexSpecialProp("bezier", {
                    parser: function(t, e, r, o, a, l) {
                        e instanceof Array && (e = { values: e }), l = new _;
                        var h, c, u, p = e.values,
                            d = p.length - 1,
                            f = [],
                            m = {};
                        if (0 > d) return a;
                        for (h = 0; d >= h; h++) u = i(t, p[h], o, a, l, d !== h), f[h] = u.end;
                        for (c in e) m[c] = e[c];
                        return m.values = f, (a = new n(t, "bezier", 0, 0, u.pt, 2)).data = u, a.plugin = l, a.setRatio = s, 0 === m.autoRotate && (m.autoRotate = !0), !m.autoRotate || m.autoRotate instanceof Array || (h = !0 === m.autoRotate ? 0 : Number(m.autoRotate), m.autoRotate = null != u.end.left ? [
                            ["left", "top", "rotation", h, !1]
                        ] : null != u.end.x && [
                            ["x", "y", "rotation", h, !1]
                        ]), m.autoRotate && (o._transform || o._enableTransforms(!1), u.autoRotate = o._target._gsTransform, u.proxy.rotation = u.autoRotate.rotation || 0, o._overwriteProps.push("rotation")), l._onInitTween(u.proxy, m, o._tween), a
                    }
                })
            }
        }, m._mod = function(t) { for (var e, i = this._overwriteProps, s = i.length; --s > -1;)(e = t[i[s]]) && "function" == typeof e && (this._mod[i[s]] = e) }, m._kill = function(t) {
            var e, i, s = this._props;
            for (e in this._beziers)
                if (e in t)
                    for (delete this._beziers[e], delete this._func[e], i = s.length; --i > -1;) s[i] === e && s.splice(i, 1);
            if (s = this._autoRotate)
                for (i = s.length; --i > -1;) t[s[i][2]] && s.splice(i, 1);
            return this._super._kill.call(this, t)
        }, _gsScope._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin", "TweenLite"], function(t, e) {
            var i, s, n, r, o = function() { t.call(this, "css"), this._overwriteProps.length = 0, this.setRatio = o.prototype.setRatio },
                a = _gsScope._gsDefine.globals,
                l = {},
                h = o.prototype = new t("css");
            h.constructor = o, o.version = "1.20.4", o.API = 2, o.defaultTransformPerspective = 0, o.defaultSkewType = "compensated", o.defaultSmoothOrigin = !0, h = "px", o.suffixMap = { top: h, right: h, bottom: h, left: h, width: h, height: h, fontSize: h, padding: h, margin: h, perspective: h, lineHeight: "" };
            var c, u, p, d, f, _, m, g, v, y, T = /(?:\-|\.|\b)(\d|\.|e\-)+/g,
                x = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
                w = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,
                b = /(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,
                k = /(?:\d|\-|\+|=|#|\.)*/g,
                S = /opacity *= *([^)]*)/i,
                P = /opacity:([^;]*)/i,
                O = /alpha\(opacity *=.+?\)/i,
                C = /^(rgb|hsl)/,
                A = /([A-Z])/g,
                R = /-([a-z])/gi,
                M = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,
                D = function(t, e) { return e.toUpperCase() },
                E = /(?:Left|Right|Width)/i,
                $ = /(M11|M12|M21|M22)=[\d\-\.e]+/gi,
                z = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,
                L = /,(?=[^\)]*(?:\(|$))/gi,
                I = /[\s,\(]/i,
                F = Math.PI / 180,
                N = 180 / Math.PI,
                j = {},
                X = { style: {} },
                B = _gsScope.document || { createElement: function() { return X } },
                q = function(t, e) { return B.createElementNS ? B.createElementNS(e || "http://www.w3.org/1999/xhtml", t) : B.createElement(t) },
                H = q("div"),
                Y = q("img"),
                U = o._internals = { _specialProps: l },
                W = (_gsScope.navigator || {}).userAgent || "",
                V = (v = W.indexOf("Android"), y = q("a"), p = -1 !== W.indexOf("Safari") && -1 === W.indexOf("Chrome") && (-1 === v || parseFloat(W.substr(v + 8, 2)) > 3), f = p && parseFloat(W.substr(W.indexOf("Version/") + 8, 2)) < 6, d = -1 !== W.indexOf("Firefox"), (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(W) || /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(W)) && (_ = parseFloat(RegExp.$1)), !!y && (y.style.cssText = "top:1px;opacity:.55;", /^0.55/.test(y.style.opacity))),
                G = function(t) { return S.test("string" == typeof t ? t : (t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1 },
                Z = function(t) { _gsScope.console && console.log(t) },
                Q = "",
                K = "",
                J = function(t, e) { var i, s, n = (e = e || H).style; if (void 0 !== n[t]) return t; for (t = t.charAt(0).toUpperCase() + t.substr(1), i = ["O", "Moz", "ms", "Ms", "Webkit"], s = 5; --s > -1 && void 0 === n[i[s] + t];); return s >= 0 ? (Q = "-" + (K = 3 === s ? "ms" : i[s]).toLowerCase() + "-", K + t) : null },
                tt = B.defaultView ? B.defaultView.getComputedStyle : function() {},
                et = o.getStyle = function(t, e, i, s, n) { var r; return V || "opacity" !== e ? (!s && t.style[e] ? r = t.style[e] : (i = i || tt(t)) ? r = i[e] || i.getPropertyValue(e) || i.getPropertyValue(e.replace(A, "-$1").toLowerCase()) : t.currentStyle && (r = t.currentStyle[e]), null == n || r && "none" !== r && "auto" !== r && "auto auto" !== r ? r : n) : G(t) },
                it = U.convertToPixels = function(t, i, s, n, r) {
                    if ("px" === n || !n && "lineHeight" !== i) return s;
                    if ("auto" === n || !s) return 0;
                    var a, l, h, c = E.test(i),
                        u = t,
                        p = H.style,
                        d = 0 > s,
                        f = 1 === s;
                    if (d && (s = -s), f && (s *= 100), "lineHeight" !== i || n)
                        if ("%" === n && -1 !== i.indexOf("border")) a = s / 100 * (c ? t.clientWidth : t.clientHeight);
                        else {
                            if (p.cssText = "border:0 solid red;position:" + et(t, "position") + ";line-height:0;", "%" !== n && u.appendChild && "v" !== n.charAt(0) && "rem" !== n) p[c ? "borderLeftWidth" : "borderTopWidth"] = s + n;
                            else {
                                if (u = t.parentNode || B.body, -1 !== et(u, "display").indexOf("flex") && (p.position = "absolute"), l = u._gsCache, h = e.ticker.frame, l && c && l.time === h) return l.width * s / 100;
                                p[c ? "width" : "height"] = s + n
                            }
                            u.appendChild(H), a = parseFloat(H[c ? "offsetWidth" : "offsetHeight"]), u.removeChild(H), c && "%" === n && !1 !== o.cacheWidths && ((l = u._gsCache = u._gsCache || {}).time = h, l.width = a / s * 100), 0 !== a || r || (a = it(t, i, s, n, !0))
                        }
                    else l = tt(t).lineHeight, t.style.lineHeight = s, a = parseFloat(tt(t).lineHeight), t.style.lineHeight = l;
                    return f && (a /= 100), d ? -a : a
                },
                st = U.calculateOffset = function(t, e, i) {
                    if ("absolute" !== et(t, "position", i)) return 0;
                    var s = "left" === e ? "Left" : "Top",
                        n = et(t, "margin" + s, i);
                    return t["offset" + s] - (it(t, e, parseFloat(n), n.replace(k, "")) || 0)
                },
                nt = function(t, e) {
                    var i, s, n, r = {};
                    if (e = e || tt(t, null))
                        if (i = e.length)
                            for (; --i > -1;)(-1 === (n = e[i]).indexOf("-transform") || zt === n) && (r[n.replace(R, D)] = e.getPropertyValue(n));
                        else
                            for (i in e)(-1 === i.indexOf("Transform") || $t === i) && (r[i] = e[i]);
                    else if (e = t.currentStyle || t.style)
                        for (i in e) "string" == typeof i && void 0 === r[i] && (r[i.replace(R, D)] = e[i]);
                    return V || (r.opacity = G(t)), s = Vt(t, e, !1), r.rotation = s.rotation, r.skewX = s.skewX, r.scaleX = s.scaleX, r.scaleY = s.scaleY, r.x = s.x, r.y = s.y, It && (r.z = s.z, r.rotationX = s.rotationX, r.rotationY = s.rotationY, r.scaleZ = s.scaleZ), r.filters && delete r.filters, r
                },
                rt = function(t, e, i, s, n) {
                    var r, o, a, l = {},
                        h = t.style;
                    for (o in i) "cssText" !== o && "length" !== o && isNaN(o) && (e[o] !== (r = i[o]) || n && n[o]) && -1 === o.indexOf("Origin") && ("number" == typeof r || "string" == typeof r) && (l[o] = "auto" !== r || "left" !== o && "top" !== o ? "" !== r && "auto" !== r && "none" !== r || "string" != typeof e[o] || "" === e[o].replace(b, "") ? r : 0 : st(t, o), void 0 !== h[o] && (a = new Tt(h, o, h[o], a)));
                    if (s)
                        for (o in s) "className" !== o && (l[o] = s[o]);
                    return { difs: l, firstMPT: a }
                },
                ot = { width: ["Left", "Right"], height: ["Top", "Bottom"] },
                at = ["marginLeft", "marginRight", "marginTop", "marginBottom"],
                lt = function(t, e, i) {
                    if ("svg" === (t.nodeName + "").toLowerCase()) return (i || tt(t))[e] || 0;
                    if (t.getCTM && Yt(t)) return t.getBBox()[e] || 0;
                    var s = parseFloat("width" === e ? t.offsetWidth : t.offsetHeight),
                        n = ot[e],
                        r = n.length;
                    for (i = i || tt(t, null); --r > -1;) s -= parseFloat(et(t, "padding" + n[r], i, !0)) || 0, s -= parseFloat(et(t, "border" + n[r] + "Width", i, !0)) || 0;
                    return s
                },
                ht = function(t, e) {
                    if ("contain" === t || "auto" === t || "auto auto" === t) return t + " ";
                    (null == t || "" === t) && (t = "0 0");
                    var i, s = t.split(" "),
                        n = -1 !== t.indexOf("left") ? "0%" : -1 !== t.indexOf("right") ? "100%" : s[0],
                        r = -1 !== t.indexOf("top") ? "0%" : -1 !== t.indexOf("bottom") ? "100%" : s[1];
                    if (s.length > 3 && !e) { for (s = t.split(", ").join(",").split(","), t = [], i = 0; i < s.length; i++) t.push(ht(s[i])); return t.join(",") }
                    return null == r ? r = "center" === n ? "50%" : "0" : "center" === r && (r = "50%"), ("center" === n || isNaN(parseFloat(n)) && -1 === (n + "").indexOf("=")) && (n = "50%"), t = n + " " + r + (s.length > 2 ? " " + s[2] : ""), e && (e.oxp = -1 !== n.indexOf("%"), e.oyp = -1 !== r.indexOf("%"), e.oxr = "=" === n.charAt(1), e.oyr = "=" === r.charAt(1), e.ox = parseFloat(n.replace(b, "")), e.oy = parseFloat(r.replace(b, "")), e.v = t), e || t
                },
                ct = function(t, e) { return "function" == typeof t && (t = t(g, m)), "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) : parseFloat(t) - parseFloat(e) || 0 },
                ut = function(t, e) { return "function" == typeof t && (t = t(g, m)), null == t ? e : "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) + e : parseFloat(t) || 0 },
                pt = function(t, e, i, s) { var n, r, o, a; return "function" == typeof t && (t = t(g, m)), null == t ? o = e : "number" == typeof t ? o = t : (360, n = t.split("_"), r = ((a = "=" === t.charAt(1)) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(n[0].substr(2)) : parseFloat(n[0])) * (-1 === t.indexOf("rad") ? 1 : N) - (a ? 0 : e), n.length && (s && (s[i] = e + r), -1 !== t.indexOf("short") && ((r %= 360) !== r % 180 && (r = 0 > r ? r + 360 : r - 360)), -1 !== t.indexOf("_cw") && 0 > r ? r = (r + 3599999999640) % 360 - 360 * (r / 360 | 0) : -1 !== t.indexOf("ccw") && r > 0 && (r = (r - 3599999999640) % 360 - 360 * (r / 360 | 0))), o = e + r), 1e-6 > o && o > -1e-6 && (o = 0), o },
                dt = { aqua: [0, 255, 255], lime: [0, 255, 0], silver: [192, 192, 192], black: [0, 0, 0], maroon: [128, 0, 0], teal: [0, 128, 128], blue: [0, 0, 255], navy: [0, 0, 128], white: [255, 255, 255], fuchsia: [255, 0, 255], olive: [128, 128, 0], yellow: [255, 255, 0], orange: [255, 165, 0], gray: [128, 128, 128], purple: [128, 0, 128], green: [0, 128, 0], red: [255, 0, 0], pink: [255, 192, 203], cyan: [0, 255, 255], transparent: [255, 255, 255, 0] },
                ft = function(t, e, i) { return 255 * (1 > 6 * (t = 0 > t ? t + 1 : t > 1 ? t - 1 : t) ? e + (i - e) * t * 6 : .5 > t ? i : 2 > 3 * t ? e + (i - e) * (2 / 3 - t) * 6 : e) + .5 | 0 },
                _t = o.parseColor = function(t, e) {
                    var i, s, n, r, o, a, l, h, c, u, p;
                    if (t)
                        if ("number" == typeof t) i = [t >> 16, t >> 8 & 255, 255 & t];
                        else {
                            if ("," === t.charAt(t.length - 1) && (t = t.substr(0, t.length - 1)), dt[t]) i = dt[t];
                            else if ("#" === t.charAt(0)) 4 === t.length && (t = "#" + (s = t.charAt(1)) + s + (n = t.charAt(2)) + n + (r = t.charAt(3)) + r), i = [(t = parseInt(t.substr(1), 16)) >> 16, t >> 8 & 255, 255 & t];
                            else if ("hsl" === t.substr(0, 3))
                                if (i = p = t.match(T), e) { if (-1 !== t.indexOf("=")) return t.match(x) } else o = Number(i[0]) % 360 / 360, a = Number(i[1]) / 100, s = 2 * (l = Number(i[2]) / 100) - (n = .5 >= l ? l * (a + 1) : l + a - l * a), i.length > 3 && (i[3] = Number(i[3])), i[0] = ft(o + 1 / 3, s, n), i[1] = ft(o, s, n), i[2] = ft(o - 1 / 3, s, n);
                            else i = t.match(T) || dt.transparent;
                            i[0] = Number(i[0]), i[1] = Number(i[1]), i[2] = Number(i[2]), i.length > 3 && (i[3] = Number(i[3]))
                        }
                    else i = dt.black;
                    return e && !p && (s = i[0] / 255, n = i[1] / 255, r = i[2] / 255, l = ((h = Math.max(s, n, r)) + (c = Math.min(s, n, r))) / 2, h === c ? o = a = 0 : (u = h - c, a = l > .5 ? u / (2 - h - c) : u / (h + c), o = h === s ? (n - r) / u + (r > n ? 6 : 0) : h === n ? (r - s) / u + 2 : (s - n) / u + 4, o *= 60), i[0] = o + .5 | 0, i[1] = 100 * a + .5 | 0, i[2] = 100 * l + .5 | 0), i
                },
                mt = function(t, e) {
                    var i, s, n, r = t.match(gt) || [],
                        o = 0,
                        a = "";
                    if (!r.length) return t;
                    for (i = 0; i < r.length; i++) s = r[i], o += (n = t.substr(o, t.indexOf(s, o) - o)).length + s.length, 3 === (s = _t(s, e)).length && s.push(1), a += n + (e ? "hsla(" + s[0] + "," + s[1] + "%," + s[2] + "%," + s[3] : "rgba(" + s.join(",")) + ")";
                    return a + t.substr(o)
                },
                gt = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";
            for (h in dt) gt += "|" + h + "\\b";
            gt = new RegExp(gt + ")", "gi"), o.colorStringFilter = function(t) {
                var e, i = t[0] + " " + t[1];
                gt.test(i) && (e = -1 !== i.indexOf("hsl(") || -1 !== i.indexOf("hsla("), t[0] = mt(t[0], e), t[1] = mt(t[1], e)), gt.lastIndex = 0
            }, e.defaultStringFilter || (e.defaultStringFilter = o.colorStringFilter);
            var vt = function(t, e, i, s) {
                    if (null == t) return function(t) { return t };
                    var n, r = e ? (t.match(gt) || [""])[0] : "",
                        o = t.split(r).join("").match(w) || [],
                        a = t.substr(0, t.indexOf(o[0])),
                        l = ")" === t.charAt(t.length - 1) ? ")" : "",
                        h = -1 !== t.indexOf(" ") ? " " : ",",
                        c = o.length,
                        u = c > 0 ? o[0].replace(T, "") : "";
                    return c ? n = e ? function(t) {
                        var e, p, d, f;
                        if ("number" == typeof t) t += u;
                        else if (s && L.test(t)) { for (f = t.replace(L, "|").split("|"), d = 0; d < f.length; d++) f[d] = n(f[d]); return f.join(",") }
                        if (e = (t.match(gt) || [r])[0], d = (p = t.split(e).join("").match(w) || []).length, c > d--)
                            for (; ++d < c;) p[d] = i ? p[(d - 1) / 2 | 0] : o[d];
                        return a + p.join(h) + h + e + l + (-1 !== t.indexOf("inset") ? " inset" : "")
                    } : function(t) {
                        var e, r, p;
                        if ("number" == typeof t) t += u;
                        else if (s && L.test(t)) { for (r = t.replace(L, "|").split("|"), p = 0; p < r.length; p++) r[p] = n(r[p]); return r.join(",") }
                        if (p = (e = t.match(w) || []).length, c > p--)
                            for (; ++p < c;) e[p] = i ? e[(p - 1) / 2 | 0] : o[p];
                        return a + e.join(h) + l
                    } : function(t) { return t }
                },
                yt = function(t) {
                    return t = t.split(","),
                        function(e, i, s, n, r, o, a) { var l, h = (i + "").split(" "); for (a = {}, l = 0; 4 > l; l++) a[t[l]] = h[l] = h[l] || h[(l - 1) / 2 >> 0]; return n.parse(e, a, r, o) }
                },
                Tt = (U._setPluginRatio = function(t) {
                    this.plugin.setRatio(t);
                    for (var e, i, s, n, r, o = this.data, a = o.proxy, l = o.firstMPT; l;) e = a[l.v], l.r ? e = Math.round(e) : 1e-6 > e && e > -1e-6 && (e = 0), l.t[l.p] = e, l = l._next;
                    if (o.autoRotate && (o.autoRotate.rotation = o.mod ? o.mod(a.rotation, this.t) : a.rotation), 1 === t || 0 === t)
                        for (l = o.firstMPT, r = 1 === t ? "e" : "b"; l;) {
                            if ((i = l.t).type) {
                                if (1 === i.type) {
                                    for (n = i.xs0 + i.s + i.xs1, s = 1; s < i.l; s++) n += i["xn" + s] + i["xs" + (s + 1)];
                                    i[r] = n
                                }
                            } else i[r] = i.s + i.xs0;
                            l = l._next
                        }
                }, function(t, e, i, s, n) { this.t = t, this.p = e, this.v = i, this.r = n, s && (s._prev = this, this._next = s) }),
                xt = (U._parseToProxy = function(t, e, i, s, n, r) {
                    var o, a, l, h, c, u = s,
                        p = {},
                        d = {},
                        f = i._transform,
                        _ = j;
                    for (i._transform = null, j = e, s = c = i.parse(t, e, s, n), j = _, r && (i._transform = f, u && (u._prev = null, u._prev && (u._prev._next = null))); s && s !== u;) {
                        if (s.type <= 1 && (d[a = s.p] = s.s + s.c, p[a] = s.s, r || (h = new Tt(s, "s", a, h, s.r), s.c = 0), 1 === s.type))
                            for (o = s.l; --o > 0;) l = "xn" + o, d[a = s.p + "_" + l] = s.data[l], p[a] = s[l], r || (h = new Tt(s, l, a, h, s.rxp[l]));
                        s = s._next
                    }
                    return { proxy: p, end: d, firstMPT: h, pt: c }
                }, U.CSSPropTween = function(t, e, s, n, o, a, l, h, c, u, p) { this.t = t, this.p = e, this.s = s, this.c = n, this.n = l || e, t instanceof xt || r.push(this.n), this.r = h, this.type = a || 0, c && (this.pr = c, i = !0), this.b = void 0 === u ? s : u, this.e = void 0 === p ? s + n : p, o && (this._next = o, o._prev = this) }),
                wt = function(t, e, i, s, n, r) { var o = new xt(t, e, i, s - i, n, -1, r); return o.b = i, o.e = o.xs0 = s, o },
                bt = o.parseComplex = function(t, e, i, s, n, r, a, l, h, u) {
                    i = i || r || "", "function" == typeof s && (s = s(g, m)), a = new xt(t, e, 0, 0, a, u ? 2 : 1, null, !1, l, i, s), s += "", n && gt.test(s + i) && (s = [i, s], o.colorStringFilter(s), i = s[0], s = s[1]);
                    var p, d, f, _, v, y, w, b, k, S, P, O, C, A = i.split(", ").join(",").split(" "),
                        R = s.split(", ").join(",").split(" "),
                        M = A.length,
                        D = !1 !== c;
                    for ((-1 !== s.indexOf(",") || -1 !== i.indexOf(",")) && (-1 !== (s + i).indexOf("rgb") || -1 !== (s + i).indexOf("hsl") ? (A = A.join(" ").replace(L, ", ").split(" "), R = R.join(" ").replace(L, ", ").split(" ")) : (A = A.join(" ").split(",").join(", ").split(" "), R = R.join(" ").split(",").join(", ").split(" ")), M = A.length), M !== R.length && (M = (A = (r || "").split(" ")).length), a.plugin = h, a.setRatio = u, gt.lastIndex = 0, p = 0; M > p; p++)
                        if (_ = A[p], v = R[p], (b = parseFloat(_)) || 0 === b) a.appendXtra("", b, ct(v, b), v.replace(x, ""), D && -1 !== v.indexOf("px"), !0);
                        else if (n && gt.test(_)) O = ")" + ((O = v.indexOf(")") + 1) ? v.substr(O) : ""), C = -1 !== v.indexOf("hsl") && V, S = v, _ = _t(_, C), v = _t(v, C), (k = _.length + v.length > 6) && !V && 0 === v[3] ? (a["xs" + a.l] += a.l ? " transparent" : "transparent", a.e = a.e.split(R[p]).join("transparent")) : (V || (k = !1), C ? a.appendXtra(S.substr(0, S.indexOf("hsl")) + (k ? "hsla(" : "hsl("), _[0], ct(v[0], _[0]), ",", !1, !0).appendXtra("", _[1], ct(v[1], _[1]), "%,", !1).appendXtra("", _[2], ct(v[2], _[2]), k ? "%," : "%" + O, !1) : a.appendXtra(S.substr(0, S.indexOf("rgb")) + (k ? "rgba(" : "rgb("), _[0], v[0] - _[0], ",", !0, !0).appendXtra("", _[1], v[1] - _[1], ",", !0).appendXtra("", _[2], v[2] - _[2], k ? "," : O, !0), k && (_ = _.length < 4 ? 1 : _[3], a.appendXtra("", _, (v.length < 4 ? 1 : v[3]) - _, O, !1))), gt.lastIndex = 0;
                    else if (y = _.match(T)) {
                        if (!(w = v.match(x)) || w.length !== y.length) return a;
                        for (f = 0, d = 0; d < y.length; d++) P = y[d], S = _.indexOf(P, f), a.appendXtra(_.substr(f, S - f), Number(P), ct(w[d], P), "", D && "px" === _.substr(S + P.length, 2), 0 === d), f = S + P.length;
                        a["xs" + a.l] += _.substr(f)
                    } else a["xs" + a.l] += a.l || a["xs" + a.l] ? " " + v : v;
                    if (-1 !== s.indexOf("=") && a.data) {
                        for (O = a.xs0 + a.data.s, p = 1; p < a.l; p++) O += a["xs" + p] + a.data["xn" + p];
                        a.e = O + a["xs" + p]
                    }
                    return a.l || (a.type = -1, a.xs0 = a.e), a.xfirst || a
                },
                kt = 9;
            for ((h = xt.prototype).l = h.pr = 0; --kt > 0;) h["xn" + kt] = 0, h["xs" + kt] = "";
            h.xs0 = "", h._next = h._prev = h.xfirst = h.data = h.plugin = h.setRatio = h.rxp = null, h.appendXtra = function(t, e, i, s, n, r) {
                var o = this,
                    a = o.l;
                return o["xs" + a] += r && (a || o["xs" + a]) ? " " + t : t || "", i || 0 === a || o.plugin ? (o.l++, o.type = o.setRatio ? 2 : 1, o["xs" + o.l] = s || "", a > 0 ? (o.data["xn" + a] = e + i, o.rxp["xn" + a] = n, o["xn" + a] = e, o.plugin || (o.xfirst = new xt(o, "xn" + a, e, i, o.xfirst || o, 0, o.n, n, o.pr), o.xfirst.xs0 = 0), o) : (o.data = { s: e + i }, o.rxp = {}, o.s = e, o.c = i, o.r = n, o)) : (o["xs" + a] += e + (s || ""), o)
            };
            var St = function(t, e) { e = e || {}, this.p = e.prefix && J(t) || t, l[t] = l[this.p] = this, this.format = e.formatter || vt(e.defaultValue, e.color, e.collapsible, e.multi), e.parser && (this.parse = e.parser), this.clrs = e.color, this.multi = e.multi, this.keyword = e.keyword, this.dflt = e.defaultValue, this.pr = e.priority || 0 },
                Pt = U._registerComplexSpecialProp = function(t, e, i) {
                    "object" != typeof e && (e = { parser: i });
                    var s, n = t.split(","),
                        r = e.defaultValue;
                    for (i = i || [r], s = 0; s < n.length; s++) e.prefix = 0 === s && e.prefix, e.defaultValue = i[s] || r, new St(n[s], e)
                },
                Ot = U._registerPluginProp = function(t) {
                    if (!l[t]) {
                        var e = t.charAt(0).toUpperCase() + t.substr(1) + "Plugin";
                        Pt(t, { parser: function(t, i, s, n, r, o, h) { var c = a.com.greensock.plugins[e]; return c ? (c._cssRegister(), l[s].parse(t, i, s, n, r, o, h)) : (Z("Error: " + e + " js file not loaded."), r) } })
                    }
                };
            (h = St.prototype).parseComplex = function(t, e, i, s, n, r) {
                var o, a, l, h, c, u, p = this.keyword;
                if (this.multi && (L.test(i) || L.test(e) ? (a = e.replace(L, "|").split("|"), l = i.replace(L, "|").split("|")) : p && (a = [e], l = [i])), l) {
                    for (h = l.length > a.length ? l.length : a.length, o = 0; h > o; o++) e = a[o] = a[o] || this.dflt, i = l[o] = l[o] || this.dflt, p && ((c = e.indexOf(p)) !== (u = i.indexOf(p)) && (-1 === u ? a[o] = a[o].split(p).join("") : -1 === c && (a[o] += " " + p)));
                    e = a.join(", "), i = l.join(", ")
                }
                return bt(t, this.p, e, i, this.clrs, this.dflt, s, this.pr, n, r)
            }, h.parse = function(t, e, i, s, r, o, a) { return this.parseComplex(t.style, this.format(et(t, this.p, n, !1, this.dflt)), this.format(e), r, o) }, o.registerSpecialProp = function(t, e, i) { Pt(t, { parser: function(t, s, n, r, o, a, l) { var h = new xt(t, n, 0, 0, o, 2, n, !1, i); return h.plugin = a, h.setRatio = e(t, s, r._tween, n), h }, priority: i }) }, o.useSVGTransformAttr = !0;
            var Ct, At, Rt, Mt, Dt, Et = "scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","),
                $t = J("transform"),
                zt = Q + "transform",
                Lt = J("transformOrigin"),
                It = null !== J("perspective"),
                Ft = U.Transform = function() { this.perspective = parseFloat(o.defaultTransformPerspective) || 0, this.force3D = !(!1 === o.defaultForce3D || !It) && (o.defaultForce3D || "auto") },
                Nt = _gsScope.SVGElement,
                jt = function(t, e, i) {
                    var s, n = B.createElementNS("http://www.w3.org/2000/svg", t),
                        r = /([a-z])([A-Z])/g;
                    for (s in i) n.setAttributeNS(null, s.replace(r, "$1-$2").toLowerCase(), i[s]);
                    return e.appendChild(n), n
                },
                Xt = B.documentElement || {},
                Bt = (Dt = _ || /Android/i.test(W) && !_gsScope.chrome, B.createElementNS && !Dt && (At = jt("svg", Xt), Mt = (Rt = jt("rect", At, { width: 100, height: 50, x: 100 })).getBoundingClientRect().width, Rt.style[Lt] = "50% 50%", Rt.style[$t] = "scaleX(0.5)", Dt = Mt === Rt.getBoundingClientRect().width && !(d && It), Xt.removeChild(At)), Dt),
                qt = function(t, e, i, s, n, r) {
                    var a, l, h, c, u, p, d, f, _, m, g, v, y, T, x = t._gsTransform,
                        w = Wt(t, !0);
                    x && (y = x.xOrigin, T = x.yOrigin), (!s || (a = s.split(" ")).length < 2) && (0 === (d = t.getBBox()).x && 0 === d.y && d.width + d.height === 0 && (d = { x: parseFloat(t.hasAttribute("x") ? t.getAttribute("x") : t.hasAttribute("cx") ? t.getAttribute("cx") : 0) || 0, y: parseFloat(t.hasAttribute("y") ? t.getAttribute("y") : t.hasAttribute("cy") ? t.getAttribute("cy") : 0) || 0, width: 0, height: 0 }), a = [(-1 !== (e = ht(e).split(" "))[0].indexOf("%") ? parseFloat(e[0]) / 100 * d.width : parseFloat(e[0])) + d.x, (-1 !== e[1].indexOf("%") ? parseFloat(e[1]) / 100 * d.height : parseFloat(e[1])) + d.y]), i.xOrigin = c = parseFloat(a[0]), i.yOrigin = u = parseFloat(a[1]), s && w !== Ut && (p = w[0], d = w[1], f = w[2], _ = w[3], m = w[4], g = w[5], (v = p * _ - d * f) && (l = c * (_ / v) + u * (-f / v) + (f * g - _ * m) / v, h = c * (-d / v) + u * (p / v) - (p * g - d * m) / v, c = i.xOrigin = a[0] = l, u = i.yOrigin = a[1] = h)), x && (r && (i.xOffset = x.xOffset, i.yOffset = x.yOffset, x = i), n || !1 !== n && !1 !== o.defaultSmoothOrigin ? (l = c - y, h = u - T, x.xOffset += l * w[0] + h * w[2] - l, x.yOffset += l * w[1] + h * w[3] - h) : x.xOffset = x.yOffset = 0), r || t.setAttribute("data-svg-origin", a.join(" "))
                },
                Ht = function(t) {
                    var e, i = q("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
                        s = this.parentNode,
                        n = this.nextSibling,
                        r = this.style.cssText;
                    if (Xt.appendChild(i), i.appendChild(this), this.style.display = "block", t) try { e = this.getBBox(), this._originalGetBBox = this.getBBox, this.getBBox = Ht } catch (t) {} else this._originalGetBBox && (e = this._originalGetBBox());
                    return n ? s.insertBefore(this, n) : s.appendChild(this), Xt.removeChild(i), this.style.cssText = r, e
                },
                Yt = function(t) { return !(!Nt || !t.getCTM || t.parentNode && !t.ownerSVGElement || ! function(t) { try { return t.getBBox() } catch (e) { return Ht.call(t, !0) } }(t)) },
                Ut = [1, 0, 0, 1, 0, 0],
                Wt = function(t, e) {
                    var i, s, n, r, o, a, l = t._gsTransform || new Ft,
                        h = t.style;
                    if ($t ? s = et(t, zt, null, !0) : t.currentStyle && (s = (s = t.currentStyle.filter.match($)) && 4 === s.length ? [s[0].substr(4), Number(s[2].substr(4)), Number(s[1].substr(4)), s[3].substr(4), l.x || 0, l.y || 0].join(",") : ""), i = !s || "none" === s || "matrix(1, 0, 0, 1, 0, 0)" === s, !$t || !(a = !tt(t) || "none" === tt(t).display) && t.parentNode || (a && (r = h.display, h.display = "block"), t.parentNode || (o = 1, Xt.appendChild(t)), i = !(s = et(t, zt, null, !0)) || "none" === s || "matrix(1, 0, 0, 1, 0, 0)" === s, r ? h.display = r : a && Kt(h, "display"), o && Xt.removeChild(t)), (l.svg || t.getCTM && Yt(t)) && (i && -1 !== (h[$t] + "").indexOf("matrix") && (s = h[$t], i = 0), n = t.getAttribute("transform"), i && n && (s = "matrix(" + (n = t.transform.baseVal.consolidate().matrix).a + "," + n.b + "," + n.c + "," + n.d + "," + n.e + "," + n.f + ")", i = 0)), i) return Ut;
                    for (n = (s || "").match(T) || [], kt = n.length; --kt > -1;) r = Number(n[kt]), n[kt] = (o = r - (r |= 0)) ? (1e5 * o + (0 > o ? -.5 : .5) | 0) / 1e5 + r : r;
                    return e && n.length > 6 ? [n[0], n[1], n[4], n[5], n[12], n[13]] : n
                },
                Vt = U.getTransform = function(t, i, s, n) {
                    if (t._gsTransform && s && !n) return t._gsTransform;
                    var r, a, l, h, c, u, p = s && t._gsTransform || new Ft,
                        d = p.scaleX < 0,
                        f = It && (parseFloat(et(t, Lt, i, !1, "0 0 0").split(" ")[2]) || p.zOrigin) || 0,
                        _ = parseFloat(o.defaultTransformPerspective) || 0;
                    if (p.svg = !(!t.getCTM || !Yt(t)), p.svg && (qt(t, et(t, Lt, i, !1, "50% 50%") + "", p, t.getAttribute("data-svg-origin")), Ct = o.useSVGTransformAttr || Bt), (r = Wt(t)) !== Ut) {
                        if (16 === r.length) {
                            var m, g, v, y, T, x = r[0],
                                w = r[1],
                                b = r[2],
                                k = r[3],
                                S = r[4],
                                P = r[5],
                                O = r[6],
                                C = r[7],
                                A = r[8],
                                R = r[9],
                                M = r[10],
                                D = r[12],
                                E = r[13],
                                $ = r[14],
                                z = r[11],
                                L = Math.atan2(O, M);
                            p.zOrigin && (D = A * ($ = -p.zOrigin) - r[12], E = R * $ - r[13], $ = M * $ + p.zOrigin - r[14]), p.rotationX = L * N, L && (m = S * (y = Math.cos(-L)) + A * (T = Math.sin(-L)), g = P * y + R * T, v = O * y + M * T, A = S * -T + A * y, R = P * -T + R * y, M = O * -T + M * y, z = C * -T + z * y, S = m, P = g, O = v), L = Math.atan2(-b, M), p.rotationY = L * N, L && (g = w * (y = Math.cos(-L)) - R * (T = Math.sin(-L)), v = b * y - M * T, R = w * T + R * y, M = b * T + M * y, z = k * T + z * y, x = m = x * y - A * T, w = g, b = v), L = Math.atan2(w, x), p.rotation = L * N, L && (m = x * (y = Math.cos(L)) + w * (T = Math.sin(L)), g = S * y + P * T, v = A * y + R * T, w = w * y - x * T, P = P * y - S * T, R = R * y - A * T, x = m, S = g, A = v), p.rotationX && Math.abs(p.rotationX) + Math.abs(p.rotation) > 359.9 && (p.rotationX = p.rotation = 0, p.rotationY = 180 - p.rotationY), L = Math.atan2(S, P), p.scaleX = (1e5 * Math.sqrt(x * x + w * w + b * b) + .5 | 0) / 1e5, p.scaleY = (1e5 * Math.sqrt(P * P + O * O) + .5 | 0) / 1e5, p.scaleZ = (1e5 * Math.sqrt(A * A + R * R + M * M) + .5 | 0) / 1e5, x /= p.scaleX, S /= p.scaleY, w /= p.scaleX, P /= p.scaleY, Math.abs(L) > 2e-5 ? (p.skewX = L * N, S = 0, "simple" !== p.skewType && (p.scaleY *= 1 / Math.cos(L))) : p.skewX = 0, p.perspective = z ? 1 / (0 > z ? -z : z) : 0, p.x = D, p.y = E, p.z = $, p.svg && (p.x -= p.xOrigin - (p.xOrigin * x - p.yOrigin * S), p.y -= p.yOrigin - (p.yOrigin * w - p.xOrigin * P))
                        } else if (!It || n || !r.length || p.x !== r[4] || p.y !== r[5] || !p.rotationX && !p.rotationY) {
                            var I = r.length >= 6,
                                F = I ? r[0] : 1,
                                j = r[1] || 0,
                                X = r[2] || 0,
                                B = I ? r[3] : 1;
                            p.x = r[4] || 0, p.y = r[5] || 0, l = Math.sqrt(F * F + j * j), h = Math.sqrt(B * B + X * X), c = F || j ? Math.atan2(j, F) * N : p.rotation || 0, u = X || B ? Math.atan2(X, B) * N + c : p.skewX || 0, p.scaleX = l, p.scaleY = h, p.rotation = c, p.skewX = u, It && (p.rotationX = p.rotationY = p.z = 0, p.perspective = _, p.scaleZ = 1), p.svg && (p.x -= p.xOrigin - (p.xOrigin * F + p.yOrigin * X), p.y -= p.yOrigin - (p.xOrigin * j + p.yOrigin * B))
                        }
                        for (a in Math.abs(p.skewX) > 90 && Math.abs(p.skewX) < 270 && (d ? (p.scaleX *= -1, p.skewX += p.rotation <= 0 ? 180 : -180, p.rotation += p.rotation <= 0 ? 180 : -180) : (p.scaleY *= -1, p.skewX += p.skewX <= 0 ? 180 : -180)), p.zOrigin = f, p) p[a] < 2e-5 && p[a] > -2e-5 && (p[a] = 0)
                    }
                    return s && (t._gsTransform = p, p.svg && (Ct && t.style[$t] ? e.delayedCall(.001, function() { Kt(t.style, $t) }) : !Ct && t.getAttribute("transform") && e.delayedCall(.001, function() { t.removeAttribute("transform") }))), p
                },
                Gt = function(t) {
                    var e, i, s = this.data,
                        n = -s.rotation * F,
                        r = n + s.skewX * F,
                        o = (Math.cos(n) * s.scaleX * 1e5 | 0) / 1e5,
                        a = (Math.sin(n) * s.scaleX * 1e5 | 0) / 1e5,
                        l = (Math.sin(r) * -s.scaleY * 1e5 | 0) / 1e5,
                        h = (Math.cos(r) * s.scaleY * 1e5 | 0) / 1e5,
                        c = this.t.style,
                        u = this.t.currentStyle;
                    if (u) {
                        i = a, a = -l, l = -i, e = u.filter, c.filter = "";
                        var p, d, f = this.t.offsetWidth,
                            m = this.t.offsetHeight,
                            g = "absolute" !== u.position,
                            v = "progid:DXImageTransform.Microsoft.Matrix(M11=" + o + ", M12=" + a + ", M21=" + l + ", M22=" + h,
                            y = s.x + f * s.xPercent / 100,
                            T = s.y + m * s.yPercent / 100;
                        if (null != s.ox && (y += (p = (s.oxp ? f * s.ox * .01 : s.ox) - f / 2) - (p * o + (d = (s.oyp ? m * s.oy * .01 : s.oy) - m / 2) * a), T += d - (p * l + d * h)), g ? v += ", Dx=" + ((p = f / 2) - (p * o + (d = m / 2) * a) + y) + ", Dy=" + (d - (p * l + d * h) + T) + ")" : v += ", sizingMethod='auto expand')", -1 !== e.indexOf("DXImageTransform.Microsoft.Matrix(") ? c.filter = e.replace(z, v) : c.filter = v + " " + e, (0 === t || 1 === t) && 1 === o && 0 === a && 0 === l && 1 === h && (g && -1 === v.indexOf("Dx=0, Dy=0") || S.test(e) && 100 !== parseFloat(RegExp.$1) || -1 === e.indexOf(e.indexOf("Alpha")) && c.removeAttribute("filter")), !g) { var x, w, b, P = 8 > _ ? 1 : -1; for (p = s.ieOffsetX || 0, d = s.ieOffsetY || 0, s.ieOffsetX = Math.round((f - ((0 > o ? -o : o) * f + (0 > a ? -a : a) * m)) / 2 + y), s.ieOffsetY = Math.round((m - ((0 > h ? -h : h) * m + (0 > l ? -l : l) * f)) / 2 + T), kt = 0; 4 > kt; kt++) b = (i = -1 !== (x = u[w = at[kt]]).indexOf("px") ? parseFloat(x) : it(this.t, w, parseFloat(x), x.replace(k, "")) || 0) !== s[w] ? 2 > kt ? -s.ieOffsetX : -s.ieOffsetY : 2 > kt ? p - s.ieOffsetX : d - s.ieOffsetY, c[w] = (s[w] = Math.round(i - b * (0 === kt || 2 === kt ? 1 : P))) + "px" }
                    }
                },
                Zt = U.set3DTransformRatio = U.setTransformRatio = function(t) {
                    var e, i, s, n, r, o, a, l, h, c, u, p, f, _, m, g, v, y, T, x, w = this.data,
                        b = this.t.style,
                        k = w.rotation,
                        S = w.rotationX,
                        P = w.rotationY,
                        O = w.scaleX,
                        C = w.scaleY,
                        A = w.scaleZ,
                        R = w.x,
                        M = w.y,
                        D = w.z,
                        E = w.svg,
                        $ = w.perspective,
                        z = w.force3D,
                        L = w.skewY,
                        I = w.skewX;
                    if (L && (I += L, k += L), !((1 !== t && 0 !== t || "auto" !== z || this.tween._totalTime !== this.tween._totalDuration && this.tween._totalTime) && z || D || $ || P || S || 1 !== A) || Ct && E || !It) k || I || E ? (k *= F, x = I * F, 1e5, i = Math.cos(k) * O, r = Math.sin(k) * O, s = Math.sin(k - x) * -C, o = Math.cos(k - x) * C, x && "simple" === w.skewType && (e = Math.tan(x - L * F), s *= e = Math.sqrt(1 + e * e), o *= e, L && (e = Math.tan(L * F), i *= e = Math.sqrt(1 + e * e), r *= e)), E && (R += w.xOrigin - (w.xOrigin * i + w.yOrigin * s) + w.xOffset, M += w.yOrigin - (w.xOrigin * r + w.yOrigin * o) + w.yOffset, Ct && (w.xPercent || w.yPercent) && (m = this.t.getBBox(), R += .01 * w.xPercent * m.width, M += .01 * w.yPercent * m.height), (m = 1e-6) > R && R > -m && (R = 0), m > M && M > -m && (M = 0)), T = (1e5 * i | 0) / 1e5 + "," + (1e5 * r | 0) / 1e5 + "," + (1e5 * s | 0) / 1e5 + "," + (1e5 * o | 0) / 1e5 + "," + R + "," + M + ")", E && Ct ? this.t.setAttribute("transform", "matrix(" + T) : b[$t] = (w.xPercent || w.yPercent ? "translate(" + w.xPercent + "%," + w.yPercent + "%) matrix(" : "matrix(") + T) : b[$t] = (w.xPercent || w.yPercent ? "translate(" + w.xPercent + "%," + w.yPercent + "%) matrix(" : "matrix(") + O + ",0,0," + C + "," + R + "," + M + ")";
                    else {
                        if (d && ((m = 1e-4) > O && O > -m && (O = A = 2e-5), m > C && C > -m && (C = A = 2e-5), !$ || w.z || w.rotationX || w.rotationY || ($ = 0)), k || I) k *= F, g = i = Math.cos(k), v = r = Math.sin(k), I && (k -= I * F, g = Math.cos(k), v = Math.sin(k), "simple" === w.skewType && (e = Math.tan((I - L) * F), g *= e = Math.sqrt(1 + e * e), v *= e, w.skewY && (e = Math.tan(L * F), i *= e = Math.sqrt(1 + e * e), r *= e))), s = -v, o = g;
                        else {
                            if (!(P || S || 1 !== A || $ || E)) return void(b[$t] = (w.xPercent || w.yPercent ? "translate(" + w.xPercent + "%," + w.yPercent + "%) translate3d(" : "translate3d(") + R + "px," + M + "px," + D + "px)" + (1 !== O || 1 !== C ? " scale(" + O + "," + C + ")" : ""));
                            i = o = 1, s = r = 0
                        }
                        c = 1, n = a = l = h = u = p = 0, f = $ ? -1 / $ : 0, _ = w.zOrigin, m = 1e-6, ",", "0", (k = P * F) && (g = Math.cos(k), l = -(v = Math.sin(k)), u = f * -v, n = i * v, a = r * v, c = g, f *= g, i *= g, r *= g), (k = S * F) && (e = s * (g = Math.cos(k)) + n * (v = Math.sin(k)), y = o * g + a * v, h = c * v, p = f * v, n = s * -v + n * g, a = o * -v + a * g, c *= g, f *= g, s = e, o = y), 1 !== A && (n *= A, a *= A, c *= A, f *= A), 1 !== C && (s *= C, o *= C, h *= C, p *= C), 1 !== O && (i *= O, r *= O, l *= O, u *= O), (_ || E) && (_ && (R += n * -_, M += a * -_, D += c * -_ + _), E && (R += w.xOrigin - (w.xOrigin * i + w.yOrigin * s) + w.xOffset, M += w.yOrigin - (w.xOrigin * r + w.yOrigin * o) + w.yOffset), m > R && R > -m && (R = "0"), m > M && M > -m && (M = "0"), m > D && D > -m && (D = 0)), T = w.xPercent || w.yPercent ? "translate(" + w.xPercent + "%," + w.yPercent + "%) matrix3d(" : "matrix3d(", T += (m > i && i > -m ? "0" : i) + "," + (m > r && r > -m ? "0" : r) + "," + (m > l && l > -m ? "0" : l), T += "," + (m > u && u > -m ? "0" : u) + "," + (m > s && s > -m ? "0" : s) + "," + (m > o && o > -m ? "0" : o), S || P || 1 !== A ? (T += "," + (m > h && h > -m ? "0" : h) + "," + (m > p && p > -m ? "0" : p) + "," + (m > n && n > -m ? "0" : n), T += "," + (m > a && a > -m ? "0" : a) + "," + (m > c && c > -m ? "0" : c) + "," + (m > f && f > -m ? "0" : f) + ",") : T += ",0,0,0,0,1,0,", T += R + "," + M + "," + D + "," + ($ ? 1 + -D / $ : 1) + ")", b[$t] = T
                    }
                };
            (h = Ft.prototype).x = h.y = h.z = h.skewX = h.skewY = h.rotation = h.rotationX = h.rotationY = h.zOrigin = h.xPercent = h.yPercent = h.xOffset = h.yOffset = 0, h.scaleX = h.scaleY = h.scaleZ = 1, Pt("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin", {
                parser: function(t, e, i, s, r, a, l) {
                    if (s._lastParsedTransform === l) return r;
                    s._lastParsedTransform = l;
                    var h, c = l.scale && "function" == typeof l.scale ? l.scale : 0;
                    "function" == typeof l[i] && (h = l[i], l[i] = e), c && (l.scale = c(g, t));
                    var u, p, d, f, _, v, y, T, x, w = t._gsTransform,
                        b = t.style,
                        k = Et.length,
                        S = l,
                        P = {},
                        O = "transformOrigin",
                        C = Vt(t, n, !0, S.parseTransform),
                        A = S.transform && ("function" == typeof S.transform ? S.transform(g, m) : S.transform);
                    if (C.skewType = S.skewType || C.skewType || o.defaultSkewType, s._transform = C, A && "string" == typeof A && $t)(p = H.style)[$t] = A, p.display = "block", p.position = "absolute", B.body.appendChild(H), u = Vt(H, null, !1), "simple" === C.skewType && (u.scaleY *= Math.cos(u.skewX * F)), C.svg && (v = C.xOrigin, y = C.yOrigin, u.x -= C.xOffset, u.y -= C.yOffset, (S.transformOrigin || S.svgOrigin) && (A = {}, qt(t, ht(S.transformOrigin), A, S.svgOrigin, S.smoothOrigin, !0), v = A.xOrigin, y = A.yOrigin, u.x -= A.xOffset - C.xOffset, u.y -= A.yOffset - C.yOffset), (v || y) && (T = Wt(H, !0), u.x -= v - (v * T[0] + y * T[2]), u.y -= y - (v * T[1] + y * T[3]))), B.body.removeChild(H), u.perspective || (u.perspective = C.perspective), null != S.xPercent && (u.xPercent = ut(S.xPercent, C.xPercent)), null != S.yPercent && (u.yPercent = ut(S.yPercent, C.yPercent));
                    else if ("object" == typeof S) {
                        if (u = { scaleX: ut(null != S.scaleX ? S.scaleX : S.scale, C.scaleX), scaleY: ut(null != S.scaleY ? S.scaleY : S.scale, C.scaleY), scaleZ: ut(S.scaleZ, C.scaleZ), x: ut(S.x, C.x), y: ut(S.y, C.y), z: ut(S.z, C.z), xPercent: ut(S.xPercent, C.xPercent), yPercent: ut(S.yPercent, C.yPercent), perspective: ut(S.transformPerspective, C.perspective) }, null != (_ = S.directionalRotation))
                            if ("object" == typeof _)
                                for (p in _) S[p] = _[p];
                            else S.rotation = _;
                            "string" == typeof S.x && -1 !== S.x.indexOf("%") && (u.x = 0, u.xPercent = ut(S.x, C.xPercent)), "string" == typeof S.y && -1 !== S.y.indexOf("%") && (u.y = 0, u.yPercent = ut(S.y, C.yPercent)), u.rotation = pt("rotation" in S ? S.rotation : "shortRotation" in S ? S.shortRotation + "_short" : "rotationZ" in S ? S.rotationZ : C.rotation, C.rotation, "rotation", P), It && (u.rotationX = pt("rotationX" in S ? S.rotationX : "shortRotationX" in S ? S.shortRotationX + "_short" : C.rotationX || 0, C.rotationX, "rotationX", P), u.rotationY = pt("rotationY" in S ? S.rotationY : "shortRotationY" in S ? S.shortRotationY + "_short" : C.rotationY || 0, C.rotationY, "rotationY", P)), u.skewX = pt(S.skewX, C.skewX), u.skewY = pt(S.skewY, C.skewY)
                    }
                    for (It && null != S.force3D && (C.force3D = S.force3D, f = !0), (d = C.force3D || C.z || C.rotationX || C.rotationY || u.z || u.rotationX || u.rotationY || u.perspective) || null == S.scale || (u.scaleZ = 1); --k > -1;)((A = u[x = Et[k]] - C[x]) > 1e-6 || -1e-6 > A || null != S[x] || null != j[x]) && (f = !0, r = new xt(C, x, C[x], A, r), x in P && (r.e = P[x]), r.xs0 = 0, r.plugin = a, s._overwriteProps.push(r.n));
                    return A = S.transformOrigin, C.svg && (A || S.svgOrigin) && (v = C.xOffset, y = C.yOffset, qt(t, ht(A), u, S.svgOrigin, S.smoothOrigin), r = wt(C, "xOrigin", (w ? C : u).xOrigin, u.xOrigin, r, O), r = wt(C, "yOrigin", (w ? C : u).yOrigin, u.yOrigin, r, O), (v !== C.xOffset || y !== C.yOffset) && (r = wt(C, "xOffset", w ? v : C.xOffset, C.xOffset, r, O), r = wt(C, "yOffset", w ? y : C.yOffset, C.yOffset, r, O)), A = "0px 0px"), (A || It && d && C.zOrigin) && ($t ? (f = !0, x = Lt, A = (A || et(t, x, n, !1, "50% 50%")) + "", (r = new xt(b, x, 0, 0, r, -1, O)).b = b[x], r.plugin = a, It ? (p = C.zOrigin, A = A.split(" "), C.zOrigin = (A.length > 2 && (0 === p || "0px" !== A[2]) ? parseFloat(A[2]) : p) || 0, r.xs0 = r.e = A[0] + " " + (A[1] || "50%") + " 0px", (r = new xt(C, "zOrigin", 0, 0, r, -1, r.n)).b = p, r.xs0 = r.e = C.zOrigin) : r.xs0 = r.e = A) : ht(A + "", C)), f && (s._transformType = C.svg && Ct || !d && 3 !== this._transformType ? 2 : 3), h && (l[i] = h), c && (l.scale = c), r
                },
                prefix: !0
            }), Pt("boxShadow", { defaultValue: "0px 0px 0px 0px #999", prefix: !0, color: !0, multi: !0, keyword: "inset" }), Pt("borderRadius", {
                defaultValue: "0px",
                parser: function(t, e, i, r, o, a) {
                    e = this.format(e);
                    var l, h, c, u, p, d, f, _, m, g, v, y, T, x, w, b, k = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"],
                        S = t.style;
                    for (m = parseFloat(t.offsetWidth), g = parseFloat(t.offsetHeight), l = e.split(" "), h = 0; h < k.length; h++) this.p.indexOf("border") && (k[h] = J(k[h])), -1 !== (p = u = et(t, k[h], n, !1, "0px")).indexOf(" ") && (p = (u = p.split(" "))[0], u = u[1]), d = c = l[h], f = parseFloat(p), y = p.substr((f + "").length), (T = "=" === d.charAt(1)) ? (_ = parseInt(d.charAt(0) + "1", 10), d = d.substr(2), _ *= parseFloat(d), v = d.substr((_ + "").length - (0 > _ ? 1 : 0)) || "") : (_ = parseFloat(d), v = d.substr((_ + "").length)), "" === v && (v = s[i] || y), v !== y && (x = it(t, "borderLeft", f, y), w = it(t, "borderTop", f, y), "%" === v ? (p = x / m * 100 + "%", u = w / g * 100 + "%") : "em" === v ? (p = x / (b = it(t, "borderLeft", 1, "em")) + "em", u = w / b + "em") : (p = x + "px", u = w + "px"), T && (d = parseFloat(p) + _ + v, c = parseFloat(u) + _ + v)), o = bt(S, k[h], p + " " + u, d + " " + c, !1, "0px", o);
                    return o
                },
                prefix: !0,
                formatter: vt("0px 0px 0px 0px", !1, !0)
            }), Pt("borderBottomLeftRadius,borderBottomRightRadius,borderTopLeftRadius,borderTopRightRadius", { defaultValue: "0px", parser: function(t, e, i, s, r, o) { return bt(t.style, i, this.format(et(t, i, n, !1, "0px 0px")), this.format(e), !1, "0px", r) }, prefix: !0, formatter: vt("0px 0px", !1, !0) }), Pt("backgroundPosition", {
                defaultValue: "0 0",
                parser: function(t, e, i, s, r, o) {
                    var a, l, h, c, u, p, d = "background-position",
                        f = n || tt(t, null),
                        m = this.format((f ? _ ? f.getPropertyValue(d + "-x") + " " + f.getPropertyValue(d + "-y") : f.getPropertyValue(d) : t.currentStyle.backgroundPositionX + " " + t.currentStyle.backgroundPositionY) || "0 0"),
                        g = this.format(e);
                    if (-1 !== m.indexOf("%") != (-1 !== g.indexOf("%")) && g.split(",").length < 2 && ((p = et(t, "backgroundImage").replace(M, "")) && "none" !== p)) {
                        for (a = m.split(" "), l = g.split(" "), Y.setAttribute("src", p), h = 2; --h > -1;)(c = -1 !== (m = a[h]).indexOf("%")) !== (-1 !== l[h].indexOf("%")) && (u = 0 === h ? t.offsetWidth - Y.width : t.offsetHeight - Y.height, a[h] = c ? parseFloat(m) / 100 * u + "px" : parseFloat(m) / u * 100 + "%");
                        m = a.join(" ")
                    }
                    return this.parseComplex(t.style, m, g, r, o)
                },
                formatter: ht
            }), Pt("backgroundSize", { defaultValue: "0 0", formatter: function(t) { return ht(-1 === (t += "").indexOf(" ") ? t + " " + t : t) } }), Pt("perspective", { defaultValue: "0px", prefix: !0 }), Pt("perspectiveOrigin", { defaultValue: "50% 50%", prefix: !0 }), Pt("transformStyle", { prefix: !0 }), Pt("backfaceVisibility", { prefix: !0 }), Pt("userSelect", { prefix: !0 }), Pt("margin", { parser: yt("marginTop,marginRight,marginBottom,marginLeft") }), Pt("padding", { parser: yt("paddingTop,paddingRight,paddingBottom,paddingLeft") }), Pt("clip", { defaultValue: "rect(0px,0px,0px,0px)", parser: function(t, e, i, s, r, o) { var a, l, h; return 9 > _ ? (l = t.currentStyle, h = 8 > _ ? " " : ",", a = "rect(" + l.clipTop + h + l.clipRight + h + l.clipBottom + h + l.clipLeft + ")", e = this.format(e).split(",").join(h)) : (a = this.format(et(t, this.p, n, !1, this.dflt)), e = this.format(e)), this.parseComplex(t.style, a, e, r, o) } }), Pt("textShadow", { defaultValue: "0px 0px 0px #999", color: !0, multi: !0 }), Pt("autoRound,strictUnits", { parser: function(t, e, i, s, n) { return n } }), Pt("border", {
                defaultValue: "0px solid #000",
                parser: function(t, e, i, s, r, o) {
                    var a = et(t, "borderTopWidth", n, !1, "0px"),
                        l = this.format(e).split(" "),
                        h = l[0].replace(k, "");
                    return "px" !== h && (a = parseFloat(a) / it(t, "borderTopWidth", 1, h) + h), this.parseComplex(t.style, this.format(a + " " + et(t, "borderTopStyle", n, !1, "solid") + " " + et(t, "borderTopColor", n, !1, "#000")), l.join(" "), r, o)
                },
                color: !0,
                formatter: function(t) { var e = t.split(" "); return e[0] + " " + (e[1] || "solid") + " " + (t.match(gt) || ["#000"])[0] }
            }), Pt("borderWidth", { parser: yt("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth") }), Pt("float,cssFloat,styleFloat", {
                parser: function(t, e, i, s, n, r) {
                    var o = t.style,
                        a = "cssFloat" in o ? "cssFloat" : "styleFloat";
                    return new xt(o, a, 0, 0, n, -1, i, !1, 0, o[a], e)
                }
            });
            var Qt = function(t) {
                var e, i = this.t,
                    s = i.filter || et(this.data, "filter") || "",
                    n = this.s + this.c * t | 0;
                100 === n && (-1 === s.indexOf("atrix(") && -1 === s.indexOf("radient(") && -1 === s.indexOf("oader(") ? (i.removeAttribute("filter"), e = !et(this.data, "filter")) : (i.filter = s.replace(O, ""), e = !0)), e || (this.xn1 && (i.filter = s = s || "alpha(opacity=" + n + ")"), -1 === s.indexOf("pacity") ? 0 === n && this.xn1 || (i.filter = s + " alpha(opacity=" + n + ")") : i.filter = s.replace(S, "opacity=" + n))
            };
            Pt("opacity,alpha,autoAlpha", {
                defaultValue: "1",
                parser: function(t, e, i, s, r, o) {
                    var a = parseFloat(et(t, "opacity", n, !1, "1")),
                        l = t.style,
                        h = "autoAlpha" === i;
                    return "string" == typeof e && "=" === e.charAt(1) && (e = ("-" === e.charAt(0) ? -1 : 1) * parseFloat(e.substr(2)) + a), h && 1 === a && "hidden" === et(t, "visibility", n) && 0 !== e && (a = 0), V ? r = new xt(l, "opacity", a, e - a, r) : ((r = new xt(l, "opacity", 100 * a, 100 * (e - a), r)).xn1 = h ? 1 : 0, l.zoom = 1, r.type = 2, r.b = "alpha(opacity=" + r.s + ")", r.e = "alpha(opacity=" + (r.s + r.c) + ")", r.data = t, r.plugin = o, r.setRatio = Qt), h && ((r = new xt(l, "visibility", 0, 0, r, -1, null, !1, 0, 0 !== a ? "inherit" : "hidden", 0 === e ? "hidden" : "inherit")).xs0 = "inherit", s._overwriteProps.push(r.n), s._overwriteProps.push(i)), r
                }
            });
            var Kt = function(t, e) { e && (t.removeProperty ? (("ms" === e.substr(0, 2) || "webkit" === e.substr(0, 6)) && (e = "-" + e), t.removeProperty(e.replace(A, "-$1").toLowerCase())) : t.removeAttribute(e)) },
                Jt = function(t) {
                    if (this.t._gsClassPT = this, 1 === t || 0 === t) {
                        this.t.setAttribute("class", 0 === t ? this.b : this.e);
                        for (var e = this.data, i = this.t.style; e;) e.v ? i[e.p] = e.v : Kt(i, e.p), e = e._next;
                        1 === t && this.t._gsClassPT === this && (this.t._gsClassPT = null)
                    } else this.t.getAttribute("class") !== this.e && this.t.setAttribute("class", this.e)
                };
            Pt("className", {
                parser: function(t, e, s, r, o, a, l) {
                    var h, c, u, p, d, f = t.getAttribute("class") || "",
                        _ = t.style.cssText;
                    if ((o = r._classNamePT = new xt(t, s, 0, 0, o, 2)).setRatio = Jt, o.pr = -11, i = !0, o.b = f, c = nt(t, n), u = t._gsClassPT) {
                        for (p = {}, d = u.data; d;) p[d.p] = 1, d = d._next;
                        u.setRatio(1)
                    }
                    return t._gsClassPT = o, o.e = "=" !== e.charAt(1) ? e : f.replace(new RegExp("(?:\\s|^)" + e.substr(2) + "(?![\\w-])"), "") + ("+" === e.charAt(0) ? " " + e.substr(2) : ""), t.setAttribute("class", o.e), h = rt(t, c, nt(t), l, p), t.setAttribute("class", f), o.data = h.firstMPT, t.style.cssText = _, o.xfirst = r.parse(t, h.difs, o, a)
                }
            });
            var te = function(t) {
                if ((1 === t || 0 === t) && this.data._totalTime === this.data._totalDuration && "isFromStart" !== this.data.data) {
                    var e, i, s, n, r, o = this.t.style,
                        a = l.transform.parse;
                    if ("all" === this.e) o.cssText = "", n = !0;
                    else
                        for (s = (e = this.e.split(" ").join("").split(",")).length; --s > -1;) i = e[s], l[i] && (l[i].parse === a ? n = !0 : i = "transformOrigin" === i ? Lt : l[i].p), Kt(o, i);
                    n && (Kt(o, $t), (r = this.t._gsTransform) && (r.svg && (this.t.removeAttribute("data-svg-origin"), this.t.removeAttribute("transform")), delete this.t._gsTransform))
                }
            };
            for (Pt("clearProps", { parser: function(t, e, s, n, r) { return (r = new xt(t, s, 0, 0, r, 2)).setRatio = te, r.e = e, r.pr = -10, r.data = n._tween, i = !0, r } }), h = "bezier,throwProps,physicsProps,physics2D".split(","), kt = h.length; kt--;) Ot(h[kt]);
            (h = o.prototype)._firstPT = h._lastParsedTransform = h._transform = null, h._onInitTween = function(t, e, a, h) {
                if (!t.nodeType) return !1;
                this._target = m = t, this._tween = a, this._vars = e, g = h, c = e.autoRound, i = !1, s = e.suffixMap || o.suffixMap, n = tt(t, ""), r = this._overwriteProps;
                var d, _, v, y, T, x, w, b, k, S = t.style;
                if (u && "" === S.zIndex && (("auto" === (d = et(t, "zIndex", n)) || "" === d) && this._addLazySet(S, "zIndex", 0)), "string" == typeof e && (y = S.cssText, d = nt(t, n), S.cssText = y + ";" + e, d = rt(t, d, nt(t)).difs, !V && P.test(e) && (d.opacity = parseFloat(RegExp.$1)), e = d, S.cssText = y), e.className ? this._firstPT = _ = l.className.parse(t, e.className, "className", this, null, null, e) : this._firstPT = _ = this.parse(t, e, null), this._transformType) {
                    for (k = 3 === this._transformType, $t ? p && (u = !0, "" === S.zIndex && (("auto" === (w = et(t, "zIndex", n)) || "" === w) && this._addLazySet(S, "zIndex", 0)), f && this._addLazySet(S, "WebkitBackfaceVisibility", this._vars.WebkitBackfaceVisibility || (k ? "visible" : "hidden"))) : S.zoom = 1, v = _; v && v._next;) v = v._next;
                    b = new xt(t, "transform", 0, 0, null, 2), this._linkCSSP(b, null, v), b.setRatio = $t ? Zt : Gt, b.data = this._transform || Vt(t, n, !0), b.tween = a, b.pr = -1, r.pop()
                }
                if (i) {
                    for (; _;) {
                        for (x = _._next, v = y; v && v.pr > _.pr;) v = v._next;
                        (_._prev = v ? v._prev : T) ? _._prev._next = _: y = _, (_._next = v) ? v._prev = _ : T = _, _ = x
                    }
                    this._firstPT = y
                }
                return !0
            }, h.parse = function(t, e, i, r) {
                var o, a, h, u, p, d, f, _, v, y, T = t.style;
                for (o in e) {
                    if ("function" == typeof(d = e[o]) && (d = d(g, m)), a = l[o]) i = a.parse(t, d, o, this, i, r, e);
                    else {
                        if ("--" === o.substr(0, 2)) { this._tween._propLookup[o] = this._addTween.call(this._tween, t.style, "setProperty", tt(t).getPropertyValue(o) + "", d + "", o, !1, o); continue }
                        p = et(t, o, n) + "", v = "string" == typeof d, "color" === o || "fill" === o || "stroke" === o || -1 !== o.indexOf("Color") || v && C.test(d) ? (v || (d = ((d = _t(d)).length > 3 ? "rgba(" : "rgb(") + d.join(",") + ")"), i = bt(T, o, p, d, !0, "transparent", i, 0, r)) : v && I.test(d) ? i = bt(T, o, p, d, !0, null, i, 0, r) : (f = (h = parseFloat(p)) || 0 === h ? p.substr((h + "").length) : "", ("" === p || "auto" === p) && ("width" === o || "height" === o ? (h = lt(t, o, n), f = "px") : "left" === o || "top" === o ? (h = st(t, o, n), f = "px") : (h = "opacity" !== o ? 0 : 1, f = "")), (y = v && "=" === d.charAt(1)) ? (u = parseInt(d.charAt(0) + "1", 10), d = d.substr(2), u *= parseFloat(d), _ = d.replace(k, "")) : (u = parseFloat(d), _ = v ? d.replace(k, "") : ""), "" === _ && (_ = o in s ? s[o] : f), d = u || 0 === u ? (y ? u + h : u) + _ : e[o], f !== _ && ("" !== _ || "lineHeight" === o) && (u || 0 === u) && h && (h = it(t, o, h, f), "%" === _ ? (h /= it(t, o, 100, "%") / 100, !0 !== e.strictUnits && (p = h + "%")) : "em" === _ || "rem" === _ || "vw" === _ || "vh" === _ ? h /= it(t, o, 1, _) : "px" !== _ && (u = it(t, o, u, _), _ = "px"), y && (u || 0 === u) && (d = u + h + _)), y && (u += h), !h && 0 !== h || !u && 0 !== u ? void 0 !== T[o] && (d || d + "" != "NaN" && null != d) ? (i = new xt(T, o, u || h || 0, 0, i, -1, o, !1, 0, p, d)).xs0 = "none" !== d || "display" !== o && -1 === o.indexOf("Style") ? d : p : Z("invalid " + o + " tween value: " + e[o]) : (i = new xt(T, o, h, u - h, i, 0, o, !1 !== c && ("px" === _ || "zIndex" === o), 0, p, d)).xs0 = _)
                    }
                    r && i && !i.plugin && (i.plugin = r)
                }
                return i
            }, h.setRatio = function(t) {
                var e, i, s, n = this._firstPT;
                if (1 !== t || this._tween._time !== this._tween._duration && 0 !== this._tween._time)
                    if (t || this._tween._time !== this._tween._duration && 0 !== this._tween._time || -1e-6 === this._tween._rawPrevTime)
                        for (; n;) {
                            if (e = n.c * t + n.s, n.r ? e = Math.round(e) : 1e-6 > e && e > -1e-6 && (e = 0), n.type)
                                if (1 === n.type)
                                    if (2 === (s = n.l)) n.t[n.p] = n.xs0 + e + n.xs1 + n.xn1 + n.xs2;
                                    else if (3 === s) n.t[n.p] = n.xs0 + e + n.xs1 + n.xn1 + n.xs2 + n.xn2 + n.xs3;
                            else if (4 === s) n.t[n.p] = n.xs0 + e + n.xs1 + n.xn1 + n.xs2 + n.xn2 + n.xs3 + n.xn3 + n.xs4;
                            else if (5 === s) n.t[n.p] = n.xs0 + e + n.xs1 + n.xn1 + n.xs2 + n.xn2 + n.xs3 + n.xn3 + n.xs4 + n.xn4 + n.xs5;
                            else {
                                for (i = n.xs0 + e + n.xs1, s = 1; s < n.l; s++) i += n["xn" + s] + n["xs" + (s + 1)];
                                n.t[n.p] = i
                            } else -1 === n.type ? n.t[n.p] = n.xs0 : n.setRatio && n.setRatio(t);
                            else n.t[n.p] = e + n.xs0;
                            n = n._next
                        } else
                            for (; n;) 2 !== n.type ? n.t[n.p] = n.b : n.setRatio(t), n = n._next;
                    else
                        for (; n;) {
                            if (2 !== n.type)
                                if (n.r && -1 !== n.type)
                                    if (e = Math.round(n.s + n.c), n.type) {
                                        if (1 === n.type) {
                                            for (s = n.l, i = n.xs0 + e + n.xs1, s = 1; s < n.l; s++) i += n["xn" + s] + n["xs" + (s + 1)];
                                            n.t[n.p] = i
                                        }
                                    } else n.t[n.p] = e + n.xs0;
                            else n.t[n.p] = n.e;
                            else n.setRatio(t);
                            n = n._next
                        }
            }, h._enableTransforms = function(t) { this._transform = this._transform || Vt(this._target, n, !0), this._transformType = this._transform.svg && Ct || !t && 3 !== this._transformType ? 2 : 3 };
            var ee = function(t) { this.t[this.p] = this.e, this.data._linkCSSP(this, this._next, null, !0) };
            h._addLazySet = function(t, e, i) {
                var s = this._firstPT = new xt(t, e, 0, 0, this._firstPT, 2);
                s.e = i, s.setRatio = ee, s.data = this
            }, h._linkCSSP = function(t, e, i, s) { return t && (e && (e._prev = t), t._next && (t._next._prev = t._prev), t._prev ? t._prev._next = t._next : this._firstPT === t && (this._firstPT = t._next, s = !0), i ? i._next = t : s || null !== this._firstPT || (this._firstPT = t), t._next = e, t._prev = i), t }, h._mod = function(t) { for (var e = this._firstPT; e;) "function" == typeof t[e.p] && t[e.p] === Math.round && (e.r = 1), e = e._next }, h._kill = function(e) {
                var i, s, n, r = e;
                if (e.autoAlpha || e.alpha) {
                    for (s in r = {}, e) r[s] = e[s];
                    r.opacity = 1, r.autoAlpha && (r.visibility = 1)
                }
                for (e.className && (i = this._classNamePT) && ((n = i.xfirst) && n._prev ? this._linkCSSP(n._prev, i._next, n._prev._prev) : n === this._firstPT && (this._firstPT = i._next), i._next && this._linkCSSP(i._next, i._next._next, n._prev), this._classNamePT = null), i = this._firstPT; i;) i.plugin && i.plugin !== s && i.plugin._kill && (i.plugin._kill(e), s = i.plugin), i = i._next;
                return t.prototype._kill.call(this, r)
            };
            var ie = function(t, e, i) {
                var s, n, r, o;
                if (t.slice)
                    for (n = t.length; --n > -1;) ie(t[n], e, i);
                else
                    for (n = (s = t.childNodes).length; --n > -1;) o = (r = s[n]).type, r.style && (e.push(nt(r)), i && i.push(r)), 1 !== o && 9 !== o && 11 !== o || !r.childNodes.length || ie(r, e, i)
            };
            return o.cascadeTo = function(t, i, s) {
                var n, r, o, a, l = e.to(t, i, s),
                    h = [l],
                    c = [],
                    u = [],
                    p = [],
                    d = e._internals.reservedProps;
                for (t = l._targets || l.target, ie(t, c, p), l.render(i, !0, !0), ie(t, u), l.render(0, !0, !0), l._enabled(!0), n = p.length; --n > -1;)
                    if ((r = rt(p[n], c[n], u[n])).firstMPT) {
                        for (o in r = r.difs, s) d[o] && (r[o] = s[o]);
                        for (o in a = {}, r) a[o] = c[n][o];
                        h.push(e.fromTo(p[n], i, a, r))
                    }
                return h
            }, t.activate([o]), o
        }, !0), t = _gsScope._gsDefine.plugin({ propName: "roundProps", version: "1.6.0", priority: -1, API: 2, init: function(t, e, i) { return this._tween = i, !0 } }), e = function(t) { for (; t;) t.f || t.blob || (t.m = Math.round), t = t._next }, (i = t.prototype)._onInitAllProps = function() {
            for (var t, i, s, n = this._tween, r = n.vars.roundProps.join ? n.vars.roundProps : n.vars.roundProps.split(","), o = r.length, a = {}, l = n._propLookup.roundProps; --o > -1;) a[r[o]] = Math.round;
            for (o = r.length; --o > -1;)
                for (t = r[o], i = n._firstPT; i;) s = i._next, i.pg ? i.t._mod(a) : i.n === t && (2 === i.f && i.t ? e(i.t._firstPT) : (this._add(i.t, t, i.s, i.c), s && (s._prev = i._prev), i._prev ? i._prev._next = s : n._firstPT === i && (n._firstPT = s), i._next = i._prev = null, n._propLookup[t] = l)), i = s;
            return !1
        }, i._add = function(t, e, i, s) { this._addTween(t, e, i, i + s, e, Math.round), this._overwriteProps.push(e) }, _gsScope._gsDefine.plugin({ propName: "attr", API: 2, version: "0.6.1", init: function(t, e, i, s) { var n, r; if ("function" != typeof t.setAttribute) return !1; for (n in e) "function" == typeof(r = e[n]) && (r = r(s, t)), this._addTween(t, "setAttribute", t.getAttribute(n) + "", r + "", n, !1, n), this._overwriteProps.push(n); return !0 } }), _gsScope._gsDefine.plugin({
            propName: "directionalRotation",
            version: "0.3.1",
            API: 2,
            init: function(t, e, i, s) { "object" != typeof e && (e = { rotation: e }), this.finals = {}; var n, r, o, a, l, h, c = !0 === e.useRadians ? 2 * Math.PI : 360; for (n in e) "useRadians" !== n && ("function" == typeof(a = e[n]) && (a = a(s, t)), r = (h = (a + "").split("_"))[0], o = parseFloat("function" != typeof t[n] ? t[n] : t[n.indexOf("set") || "function" != typeof t["get" + n.substr(3)] ? n : "get" + n.substr(3)]()), l = (a = this.finals[n] = "string" == typeof r && "=" === r.charAt(1) ? o + parseInt(r.charAt(0) + "1", 10) * Number(r.substr(2)) : Number(r) || 0) - o, h.length && (-1 !== (r = h.join("_")).indexOf("short") && ((l %= c) !== l % (c / 2) && (l = 0 > l ? l + c : l - c)), -1 !== r.indexOf("_cw") && 0 > l ? l = (l + 9999999999 * c) % c - (l / c | 0) * c : -1 !== r.indexOf("ccw") && l > 0 && (l = (l - 9999999999 * c) % c - (l / c | 0) * c)), (l > 1e-6 || -1e-6 > l) && (this._addTween(t, n, o, o + l, n), this._overwriteProps.push(n))); return !0 },
            set: function(t) {
                var e;
                if (1 !== t) this._super.setRatio.call(this, t);
                else
                    for (e = this._firstPT; e;) e.f ? e.t[e.p](this.finals[e.p]) : e.t[e.p] = this.finals[e.p], e = e._next
            }
        })._autoCSS = !0, _gsScope._gsDefine("easing.Back", ["easing.Ease"], function(t) {
            var e, i, s, n, r = _gsScope.GreenSockGlobals || _gsScope,
                o = r.com.greensock,
                a = 2 * Math.PI,
                l = Math.PI / 2,
                h = o._class,
                c = function(e, i) {
                    var s = h("easing." + e, function() {}, !0),
                        n = s.prototype = new t;
                    return n.constructor = s, n.getRatio = i, s
                },
                u = t.register || function() {},
                p = function(t, e, i, s, n) { var r = h("easing." + t, { easeOut: new e, easeIn: new i, easeInOut: new s }, !0); return u(r, t), r },
                d = function(t, e, i) { this.t = t, this.v = e, i && (this.next = i, i.prev = this, this.c = i.v - e, this.gap = i.t - t) },
                f = function(e, i) {
                    var s = h("easing." + e, function(t) { this._p1 = t || 0 === t ? t : 1.70158, this._p2 = 1.525 * this._p1 }, !0),
                        n = s.prototype = new t;
                    return n.constructor = s, n.getRatio = i, n.config = function(t) { return new s(t) }, s
                },
                _ = p("Back", f("BackOut", function(t) { return (t -= 1) * t * ((this._p1 + 1) * t + this._p1) + 1 }), f("BackIn", function(t) { return t * t * ((this._p1 + 1) * t - this._p1) }), f("BackInOut", function(t) { return (t *= 2) < 1 ? .5 * t * t * ((this._p2 + 1) * t - this._p2) : .5 * ((t -= 2) * t * ((this._p2 + 1) * t + this._p2) + 2) })),
                m = h("easing.SlowMo", function(t, e, i) { e = e || 0 === e ? e : .7, null == t ? t = .7 : t > 1 && (t = 1), this._p = 1 !== t ? e : 0, this._p1 = (1 - t) / 2, this._p2 = t, this._p3 = this._p1 + this._p2, this._calcEnd = !0 === i }, !0),
                g = m.prototype = new t;
            return g.constructor = m, g.getRatio = function(t) { var e = t + (.5 - t) * this._p; return t < this._p1 ? this._calcEnd ? 1 - (t = 1 - t / this._p1) * t : e - (t = 1 - t / this._p1) * t * t * t * e : t > this._p3 ? this._calcEnd ? 1 === t ? 0 : 1 - (t = (t - this._p3) / this._p1) * t : e + (t - e) * (t = (t - this._p3) / this._p1) * t * t * t : this._calcEnd ? 1 : e }, m.ease = new m(.7, .7), g.config = m.config = function(t, e, i) { return new m(t, e, i) }, (g = (e = h("easing.SteppedEase", function(t, e) { t = t || 1, this._p1 = 1 / t, this._p2 = t + (e ? 0 : 1), this._p3 = e ? 1 : 0 }, !0)).prototype = new t).constructor = e, g.getRatio = function(t) { return 0 > t ? t = 0 : t >= 1 && (t = .999999999), ((this._p2 * t | 0) + this._p3) * this._p1 }, g.config = e.config = function(t, i) { return new e(t, i) }, (g = (i = h("easing.ExpoScaleEase", function(t, e, i) { this._p1 = Math.log(e / t), this._p2 = e - t, this._p3 = t, this._ease = i }, !0)).prototype = new t).constructor = i, g.getRatio = function(t) { return this._ease && (t = this._ease.getRatio(t)), (this._p3 * Math.exp(this._p1 * t) - this._p3) / this._p2 }, g.config = i.config = function(t, e, s) { return new i(t, e, s) }, (g = (s = h("easing.RoughEase", function(e) {
                for (var i, s, n, r, o, a, l = (e = e || {}).taper || "none", h = [], c = 0, u = 0 | (e.points || 20), p = u, f = !1 !== e.randomize, _ = !0 === e.clamp, m = e.template instanceof t ? e.template : null, g = "number" == typeof e.strength ? .4 * e.strength : .4; --p > -1;) i = f ? Math.random() : 1 / u * p, s = m ? m.getRatio(i) : i, "none" === l ? n = g : "out" === l ? n = (r = 1 - i) * r * g : "in" === l ? n = i * i * g : .5 > i ? n = (r = 2 * i) * r * .5 * g : n = (r = 2 * (1 - i)) * r * .5 * g, f ? s += Math.random() * n - .5 * n : p % 2 ? s += .5 * n : s -= .5 * n, _ && (s > 1 ? s = 1 : 0 > s && (s = 0)), h[c++] = { x: i, y: s };
                for (h.sort(function(t, e) { return t.x - e.x }), a = new d(1, 1, null), p = u; --p > -1;) o = h[p], a = new d(o.x, o.y, a);
                this._prev = new d(0, 0, 0 !== a.t ? a : a.next)
            }, !0)).prototype = new t).constructor = s, g.getRatio = function(t) {
                var e = this._prev;
                if (t > e.t) {
                    for (; e.next && t >= e.t;) e = e.next;
                    e = e.prev
                } else
                    for (; e.prev && t <= e.t;) e = e.prev;
                return this._prev = e, e.v + (t - e.t) / e.gap * e.c
            }, g.config = function(t) { return new s(t) }, s.ease = new s, p("Bounce", c("BounceOut", function(t) { return 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375 }), c("BounceIn", function(t) { return (t = 1 - t) < 1 / 2.75 ? 1 - 7.5625 * t * t : 2 / 2.75 > t ? 1 - (7.5625 * (t -= 1.5 / 2.75) * t + .75) : 2.5 / 2.75 > t ? 1 - (7.5625 * (t -= 2.25 / 2.75) * t + .9375) : 1 - (7.5625 * (t -= 2.625 / 2.75) * t + .984375) }), c("BounceInOut", function(t) { var e = .5 > t; return t = 1 / 2.75 > (t = e ? 1 - 2 * t : 2 * t - 1) ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375, e ? .5 * (1 - t) : .5 * t + .5 })), p("Circ", c("CircOut", function(t) { return Math.sqrt(1 - (t -= 1) * t) }), c("CircIn", function(t) { return -(Math.sqrt(1 - t * t) - 1) }), c("CircInOut", function(t) { return (t *= 2) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1) })), p("Elastic", (n = function(e, i, s) {
                var n = h("easing." + e, function(t, e) { this._p1 = t >= 1 ? t : 1, this._p2 = (e || s) / (1 > t ? t : 1), this._p3 = this._p2 / a * (Math.asin(1 / this._p1) || 0), this._p2 = a / this._p2 }, !0),
                    r = n.prototype = new t;
                return r.constructor = n, r.getRatio = i, r.config = function(t, e) { return new n(t, e) }, n
            })("ElasticOut", function(t) { return this._p1 * Math.pow(2, -10 * t) * Math.sin((t - this._p3) * this._p2) + 1 }, .3), n("ElasticIn", function(t) { return -this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2) }, .3), n("ElasticInOut", function(t) { return (t *= 2) < 1 ? this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2) * -.5 : this._p1 * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2) * .5 + 1 }, .45)), p("Expo", c("ExpoOut", function(t) { return 1 - Math.pow(2, -10 * t) }), c("ExpoIn", function(t) { return Math.pow(2, 10 * (t - 1)) - .001 }), c("ExpoInOut", function(t) { return (t *= 2) < 1 ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (2 - Math.pow(2, -10 * (t - 1))) })), p("Sine", c("SineOut", function(t) { return Math.sin(t * l) }), c("SineIn", function(t) { return 1 - Math.cos(t * l) }), c("SineInOut", function(t) { return -.5 * (Math.cos(Math.PI * t) - 1) })), h("easing.EaseLookup", { find: function(e) { return t.map[e] } }, !0), u(r.SlowMo, "SlowMo", "ease,"), u(s, "RoughEase", "ease,"), u(e, "SteppedEase", "ease,"), _
        }, !0)
    }), _gsScope._gsDefine && _gsScope._gsQueue.pop()(),
    function(t, e) {
        "use strict";
        var i, s, n = {},
            r = t.document,
            o = t.GreenSockGlobals = t.GreenSockGlobals || t;
        if (!o.TweenLite) {
            var a, l, h, c, u, p = function(t) {
                    var e, i = t.split("."),
                        s = o;
                    for (e = 0; e < i.length; e++) s[i[e]] = s = s[i[e]] || {};
                    return s
                },
                d = p("com.greensock"),
                f = 1e-10,
                _ = function(t) {
                    var e, i = [],
                        s = t.length;
                    for (e = 0; e !== s; i.push(t[e++]));
                    return i
                },
                m = function() {},
                g = (i = Object.prototype.toString, s = i.call([]), function(t) { return null != t && (t instanceof Array || "object" == typeof t && !!t.push && i.call(t) === s) }),
                v = {},
                y = function(i, s, r, a) {
                    this.sc = v[i] ? v[i].sc : [], v[i] = this, this.gsClass = null, this.func = r;
                    var l = [];
                    this.check = function(h) {
                        for (var c, u, d, f, _ = s.length, m = _; --_ > -1;)(c = v[s[_]] || new y(s[_], [])).gsClass ? (l[_] = c.gsClass, m--) : h && c.sc.push(this);
                        if (0 === m && r) {
                            if (d = (u = ("com.greensock." + i).split(".")).pop(), f = p(u.join("."))[d] = this.gsClass = r.apply(r, l), a)
                                if (o[d] = n[d] = f, "undefined" != typeof module && module.exports)
                                    if (i === e)
                                        for (_ in module.exports = n[e] = f, n) f[_] = n[_];
                                    else n[e] && (n[e][d] = f);
                            else "function" == typeof define && define.amd && define((t.GreenSockAMDPath ? t.GreenSockAMDPath + "/" : "") + i.split(".").pop(), [], function() { return f });
                            for (_ = 0; _ < this.sc.length; _++) this.sc[_].check()
                        }
                    }, this.check(!0)
                },
                T = t._gsDefine = function(t, e, i, s) { return new y(t, e, i, s) },
                x = d._class = function(t, e, i) { return e = e || function() {}, T(t, [], function() { return e }, i), e };
            T.globals = o;
            var w = [0, 0, 1, 1],
                b = x("easing.Ease", function(t, e, i, s) { this._func = t, this._type = i || 0, this._power = s || 0, this._params = e ? w.concat(e) : w }, !0),
                k = b.map = {},
                S = b.register = function(t, e, i, s) {
                    for (var n, r, o, a, l = e.split(","), h = l.length, c = (i || "easeIn,easeOut,easeInOut").split(","); --h > -1;)
                        for (r = l[h], n = s ? x("easing." + r, null, !0) : d.easing[r] || {}, o = c.length; --o > -1;) a = c[o], k[r + "." + a] = k[a + r] = n[a] = t.getRatio ? t : t[a] || new t
                };
            for ((h = b.prototype)._calcEnd = !1, h.getRatio = function(t) {
                    if (this._func) return this._params[0] = t, this._func.apply(null, this._params);
                    var e = this._type,
                        i = this._power,
                        s = 1 === e ? 1 - t : 2 === e ? t : .5 > t ? 2 * t : 2 * (1 - t);
                    return 1 === i ? s *= s : 2 === i ? s *= s * s : 3 === i ? s *= s * s * s : 4 === i && (s *= s * s * s * s), 1 === e ? 1 - s : 2 === e ? s : .5 > t ? s / 2 : 1 - s / 2
                }, l = (a = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"]).length; --l > -1;) h = a[l] + ",Power" + l, S(new b(null, null, 1, l), h, "easeOut", !0), S(new b(null, null, 2, l), h, "easeIn" + (0 === l ? ",easeNone" : "")), S(new b(null, null, 3, l), h, "easeInOut");
            k.linear = d.easing.Linear.easeIn, k.swing = d.easing.Quad.easeInOut;
            var P = x("events.EventDispatcher", function(t) { this._listeners = {}, this._eventTarget = t || this });
            (h = P.prototype).addEventListener = function(t, e, i, s, n) {
                n = n || 0;
                var r, o, a = this._listeners[t],
                    l = 0;
                for (this !== c || u || c.wake(), null == a && (this._listeners[t] = a = []), o = a.length; --o > -1;)(r = a[o]).c === e && r.s === i ? a.splice(o, 1) : 0 === l && r.pr < n && (l = o + 1);
                a.splice(l, 0, { c: e, s: i, up: s, pr: n })
            }, h.removeEventListener = function(t, e) {
                var i, s = this._listeners[t];
                if (s)
                    for (i = s.length; --i > -1;)
                        if (s[i].c === e) return void s.splice(i, 1)
            }, h.dispatchEvent = function(t) {
                var e, i, s, n = this._listeners[t];
                if (n)
                    for ((e = n.length) > 1 && (n = n.slice(0)), i = this._eventTarget; --e > -1;)(s = n[e]) && (s.up ? s.c.call(s.s || i, { type: t, target: i }) : s.c.call(s.s || i))
            };
            var O = t.requestAnimationFrame,
                C = t.cancelAnimationFrame,
                A = Date.now || function() { return (new Date).getTime() },
                R = A();
            for (l = (a = ["ms", "moz", "webkit", "o"]).length; --l > -1 && !O;) O = t[a[l] + "RequestAnimationFrame"], C = t[a[l] + "CancelAnimationFrame"] || t[a[l] + "CancelRequestAnimationFrame"];
            x("Ticker", function(t, e) {
                var i, s, n, o, a, l = this,
                    h = A(),
                    p = !(!1 === e || !O) && "auto",
                    d = 500,
                    f = 33,
                    _ = function(t) {
                        var e, r, c = A() - R;
                        c > d && (h += c - f), R += c, l.time = (R - h) / 1e3, e = l.time - a, (!i || e > 0 || !0 === t) && (l.frame++, a += e + (e >= o ? .004 : o - e), r = !0), !0 !== t && (n = s(_)), r && l.dispatchEvent("tick")
                    };
                P.call(l), l.time = l.frame = 0, l.tick = function() { _(!0) }, l.lagSmoothing = function(t, e) { return arguments.length ? (d = t || 1e10, void(f = Math.min(e, d, 0))) : 1e10 > d }, l.sleep = function() { null != n && (p && C ? C(n) : clearTimeout(n), s = m, n = null, l === c && (u = !1)) }, l.wake = function(t) { null !== n ? l.sleep() : t ? h += -R + (R = A()) : l.frame > 10 && (R = A() - d + 5), s = 0 === i ? m : p && O ? O : function(t) { return setTimeout(t, 1e3 * (a - l.time) + 1 | 0) }, l === c && (u = !0), _(2) }, l.fps = function(t) { return arguments.length ? (o = 1 / ((i = t) || 60), a = this.time + o, void l.wake()) : i }, l.useRAF = function(t) { return arguments.length ? (l.sleep(), p = t, void l.fps(i)) : p }, l.fps(t), setTimeout(function() { "auto" === p && l.frame < 5 && "hidden" !== (r || {}).visibilityState && l.useRAF(!1) }, 1500)
            }), (h = d.Ticker.prototype = new d.events.EventDispatcher).constructor = d.Ticker;
            var M = x("core.Animation", function(t, e) {
                if (this.vars = e = e || {}, this._duration = this._totalDuration = t || 0, this._delay = Number(e.delay) || 0, this._timeScale = 1, this._active = !0 === e.immediateRender, this.data = e.data, this._reversed = !0 === e.reversed, Z) {
                    u || c.wake();
                    var i = this.vars.useFrames ? G : Z;
                    i.add(this, i._time), this.vars.paused && this.paused(!0)
                }
            });
            c = M.ticker = new d.Ticker, (h = M.prototype)._dirty = h._gc = h._initted = h._paused = !1, h._totalTime = h._time = 0, h._rawPrevTime = -1, h._next = h._last = h._onUpdate = h._timeline = h.timeline = null, h._paused = !1;
            var D = function() {
                u && A() - R > 2e3 && ("hidden" !== (r || {}).visibilityState || !c.lagSmoothing()) && c.wake();
                var t = setTimeout(D, 2e3);
                t.unref && t.unref()
            };
            D(), h.play = function(t, e) { return null != t && this.seek(t, e), this.reversed(!1).paused(!1) }, h.pause = function(t, e) { return null != t && this.seek(t, e), this.paused(!0) }, h.resume = function(t, e) { return null != t && this.seek(t, e), this.paused(!1) }, h.seek = function(t, e) { return this.totalTime(Number(t), !1 !== e) }, h.restart = function(t, e) { return this.reversed(!1).paused(!1).totalTime(t ? -this._delay : 0, !1 !== e, !0) }, h.reverse = function(t, e) { return null != t && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1) }, h.render = function(t, e, i) {}, h.invalidate = function() { return this._time = this._totalTime = 0, this._initted = this._gc = !1, this._rawPrevTime = -1, (this._gc || !this.timeline) && this._enabled(!0), this }, h.isActive = function() {
                var t, e = this._timeline,
                    i = this._startTime;
                return !e || !this._gc && !this._paused && e.isActive() && (t = e.rawTime(!0)) >= i && t < i + this.totalDuration() / this._timeScale - 1e-7
            }, h._enabled = function(t, e) { return u || c.wake(), this._gc = !t, this._active = this.isActive(), !0 !== e && (t && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !t && this.timeline && this._timeline._remove(this, !0)), !1 }, h._kill = function(t, e) { return this._enabled(!1, !1) }, h.kill = function(t, e) { return this._kill(t, e), this }, h._uncache = function(t) { for (var e = t ? this : this.timeline; e;) e._dirty = !0, e = e.timeline; return this }, h._swapSelfInParams = function(t) { for (var e = t.length, i = t.concat(); --e > -1;) "{self}" === t[e] && (i[e] = this); return i }, h._callback = function(t) {
                var e = this.vars,
                    i = e[t],
                    s = e[t + "Params"],
                    n = e[t + "Scope"] || e.callbackScope || this;
                switch (s ? s.length : 0) {
                    case 0:
                        i.call(n);
                        break;
                    case 1:
                        i.call(n, s[0]);
                        break;
                    case 2:
                        i.call(n, s[0], s[1]);
                        break;
                    default:
                        i.apply(n, s)
                }
            }, h.eventCallback = function(t, e, i, s) {
                if ("on" === (t || "").substr(0, 2)) {
                    var n = this.vars;
                    if (1 === arguments.length) return n[t];
                    null == e ? delete n[t] : (n[t] = e, n[t + "Params"] = g(i) && -1 !== i.join("").indexOf("{self}") ? this._swapSelfInParams(i) : i, n[t + "Scope"] = s), "onUpdate" === t && (this._onUpdate = e)
                }
                return this
            }, h.delay = function(t) { return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + t - this._delay), this._delay = t, this) : this._delay }, h.duration = function(t) { return arguments.length ? (this._duration = this._totalDuration = t, this._uncache(!0), this._timeline.smoothChildTiming && this._time > 0 && this._time < this._duration && 0 !== t && this.totalTime(this._totalTime * (t / this._duration), !0), this) : (this._dirty = !1, this._duration) }, h.totalDuration = function(t) { return this._dirty = !1, arguments.length ? this.duration(t) : this._totalDuration }, h.time = function(t, e) { return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(t > this._duration ? this._duration : t, e)) : this._time }, h.totalTime = function(t, e, i) {
                if (u || c.wake(), !arguments.length) return this._totalTime;
                if (this._timeline) {
                    if (0 > t && !i && (t += this.totalDuration()), this._timeline.smoothChildTiming) {
                        this._dirty && this.totalDuration();
                        var s = this._totalDuration,
                            n = this._timeline;
                        if (t > s && !i && (t = s), this._startTime = (this._paused ? this._pauseTime : n._time) - (this._reversed ? s - t : t) / this._timeScale, n._dirty || this._uncache(!1), n._timeline)
                            for (; n._timeline;) n._timeline._time !== (n._startTime + n._totalTime) / n._timeScale && n.totalTime(n._totalTime, !0), n = n._timeline
                    }
                    this._gc && this._enabled(!0, !1), (this._totalTime !== t || 0 === this._duration) && (L.length && K(), this.render(t, e, !1), L.length && K())
                }
                return this
            }, h.progress = h.totalProgress = function(t, e) { var i = this.duration(); return arguments.length ? this.totalTime(i * t, e) : i ? this._time / i : this.ratio }, h.startTime = function(t) { return arguments.length ? (t !== this._startTime && (this._startTime = t, this.timeline && this.timeline._sortChildren && this.timeline.add(this, t - this._delay)), this) : this._startTime }, h.endTime = function(t) { return this._startTime + (0 != t ? this.totalDuration() : this.duration()) / this._timeScale }, h.timeScale = function(t) { if (!arguments.length) return this._timeScale; var e, i; for (t = t || f, this._timeline && this._timeline.smoothChildTiming && (i = (e = this._pauseTime) || 0 === e ? e : this._timeline.totalTime(), this._startTime = i - (i - this._startTime) * this._timeScale / t), this._timeScale = t, i = this.timeline; i && i.timeline;) i._dirty = !0, i.totalDuration(), i = i.timeline; return this }, h.reversed = function(t) { return arguments.length ? (t != this._reversed && (this._reversed = t, this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, !0)), this) : this._reversed }, h.paused = function(t) { if (!arguments.length) return this._paused; var e, i, s = this._timeline; return t != this._paused && s && (u || t || c.wake(), i = (e = s.rawTime()) - this._pauseTime, !t && s.smoothChildTiming && (this._startTime += i, this._uncache(!1)), this._pauseTime = t ? e : null, this._paused = t, this._active = this.isActive(), !t && 0 !== i && this._initted && this.duration() && (e = s.smoothChildTiming ? this._totalTime : (e - this._startTime) / this._timeScale, this.render(e, e === this._totalTime, !0))), this._gc && !t && this._enabled(!0, !1), this };
            var E = x("core.SimpleTimeline", function(t) { M.call(this, 0, t), this.autoRemoveChildren = this.smoothChildTiming = !0 });
            (h = E.prototype = new M).constructor = E, h.kill()._gc = !1, h._first = h._last = h._recent = null, h._sortChildren = !1, h.add = h.insert = function(t, e, i, s) {
                var n, r;
                if (t._startTime = Number(e || 0) + t._delay, t._paused && this !== t._timeline && (t._pauseTime = t._startTime + (this.rawTime() - t._startTime) / t._timeScale), t.timeline && t.timeline._remove(t, !0), t.timeline = t._timeline = this, t._gc && t._enabled(!0, !0), n = this._last, this._sortChildren)
                    for (r = t._startTime; n && n._startTime > r;) n = n._prev;
                return n ? (t._next = n._next, n._next = t) : (t._next = this._first, this._first = t), t._next ? t._next._prev = t : this._last = t, t._prev = n, this._recent = t, this._timeline && this._uncache(!0), this
            }, h._remove = function(t, e) { return t.timeline === this && (e || t._enabled(!1, !0), t._prev ? t._prev._next = t._next : this._first === t && (this._first = t._next), t._next ? t._next._prev = t._prev : this._last === t && (this._last = t._prev), t._next = t._prev = t.timeline = null, t === this._recent && (this._recent = this._last), this._timeline && this._uncache(!0)), this }, h.render = function(t, e, i) { var s, n = this._first; for (this._totalTime = this._time = this._rawPrevTime = t; n;) s = n._next, (n._active || t >= n._startTime && !n._paused && !n._gc) && (n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)), n = s }, h.rawTime = function() { return u || c.wake(), this._totalTime };
            var $ = x("TweenLite", function(e, i, s) {
                    if (M.call(this, i, s), this.render = $.prototype.render, null == e) throw "Cannot tween a null target.";
                    this.target = e = "string" != typeof e ? e : $.selector(e) || e;
                    var n, r, o, a = e.jquery || e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType),
                        l = this.vars.overwrite;
                    if (this._overwrite = l = null == l ? V[$.defaultOverwrite] : "number" == typeof l ? l >> 0 : V[l], (a || e instanceof Array || e.push && g(e)) && "number" != typeof e[0])
                        for (this._targets = o = _(e), this._propLookup = [], this._siblings = [], n = 0; n < o.length; n++)(r = o[n]) ? "string" != typeof r ? r.length && r !== t && r[0] && (r[0] === t || r[0].nodeType && r[0].style && !r.nodeType) ? (o.splice(n--, 1), this._targets = o = o.concat(_(r))) : (this._siblings[n] = J(r, this, !1), 1 === l && this._siblings[n].length > 1 && et(r, this, null, 1, this._siblings[n])) : "string" == typeof(r = o[n--] = $.selector(r)) && o.splice(n + 1, 1) : o.splice(n--, 1);
                    else this._propLookup = {}, this._siblings = J(e, this, !1), 1 === l && this._siblings.length > 1 && et(e, this, null, 1, this._siblings);
                    (this.vars.immediateRender || 0 === i && 0 === this._delay && !1 !== this.vars.immediateRender) && (this._time = -f, this.render(Math.min(0, -this._delay)))
                }, !0),
                z = function(e) { return e && e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType) };
            (h = $.prototype = new M).constructor = $, h.kill()._gc = !1, h.ratio = 0, h._firstPT = h._targets = h._overwrittenProps = h._startAt = null, h._notifyPluginsOfEnabled = h._lazy = !1, $.version = "1.20.4", $.defaultEase = h._ease = new b(null, null, 1, 1), $.defaultOverwrite = "auto", $.ticker = c, $.autoSleep = 120, $.lagSmoothing = function(t, e) { c.lagSmoothing(t, e) }, $.selector = t.$ || t.jQuery || function(e) { var i = t.$ || t.jQuery; return i ? ($.selector = i, i(e)) : void 0 === r ? e : r.querySelectorAll ? r.querySelectorAll(e) : r.getElementById("#" === e.charAt(0) ? e.substr(1) : e) };
            var L = [],
                I = {},
                F = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
                N = /[\+-]=-?[\.\d]/,
                j = function(t) { for (var e, i = this._firstPT; i;) e = i.blob ? 1 === t && null != this.end ? this.end : t ? this.join("") : this.start : i.c * t + i.s, i.m ? e = i.m(e, this._target || i.t) : 1e-6 > e && e > -1e-6 && !i.blob && (e = 0), i.f ? i.fp ? i.t[i.p](i.fp, e) : i.t[i.p](e) : i.t[i.p] = e, i = i._next },
                X = function(t, e, i, s) {
                    var n, r, o, a, l, h, c, u = [],
                        p = 0,
                        d = "",
                        f = 0;
                    for (u.start = t, u.end = e, t = u[0] = t + "", e = u[1] = e + "", i && (i(u), t = u[0], e = u[1]), u.length = 0, n = t.match(F) || [], r = e.match(F) || [], s && (s._next = null, s.blob = 1, u._firstPT = u._applyPT = s), l = r.length, a = 0; l > a; a++) c = r[a], d += (h = e.substr(p, e.indexOf(c, p) - p)) || !a ? h : ",", p += h.length, f ? f = (f + 1) % 5 : "rgba(" === h.substr(-5) && (f = 1), c === n[a] || n.length <= a ? d += c : (d && (u.push(d), d = ""), o = parseFloat(n[a]), u.push(o), u._firstPT = { _next: u._firstPT, t: u, p: u.length - 1, s: o, c: ("=" === c.charAt(1) ? parseInt(c.charAt(0) + "1", 10) * parseFloat(c.substr(2)) : parseFloat(c) - o) || 0, f: 0, m: f && 4 > f ? Math.round : 0 }), p += c.length;
                    return (d += e.substr(p)) && u.push(d), u.setRatio = j, N.test(e) && (u.end = null), u
                },
                B = function(t, e, i, s, n, r, o, a, l) {
                    "function" == typeof s && (s = s(l || 0, t));
                    var h = typeof t[e],
                        c = "function" !== h ? "" : e.indexOf("set") || "function" != typeof t["get" + e.substr(3)] ? e : "get" + e.substr(3),
                        u = "get" !== i ? i : c ? o ? t[c](o) : t[c]() : t[e],
                        p = "string" == typeof s && "=" === s.charAt(1),
                        d = { t: t, p: e, s: u, f: "function" === h, pg: 0, n: n || e, m: r ? "function" == typeof r ? r : Math.round : 0, pr: 0, c: p ? parseInt(s.charAt(0) + "1", 10) * parseFloat(s.substr(2)) : parseFloat(s) - u || 0 };
                    return ("number" != typeof u || "number" != typeof s && !p) && (o || isNaN(u) || !p && isNaN(s) || "boolean" == typeof u || "boolean" == typeof s ? (d.fp = o, d = { t: X(u, p ? parseFloat(d.s) + d.c + (d.s + "").replace(/[0-9\-\.]/g, "") : s, a || $.defaultStringFilter, d), p: "setRatio", s: 0, c: 1, f: 2, pg: 0, n: n || e, pr: 0, m: 0 }) : (d.s = parseFloat(u), p || (d.c = parseFloat(s) - d.s || 0))), d.c ? ((d._next = this._firstPT) && (d._next._prev = d), this._firstPT = d, d) : void 0
                },
                q = $._internals = { isArray: g, isSelector: z, lazyTweens: L, blobDif: X },
                H = $._plugins = {},
                Y = q.tweenLookup = {},
                U = 0,
                W = q.reservedProps = { ease: 1, delay: 1, overwrite: 1, onComplete: 1, onCompleteParams: 1, onCompleteScope: 1, useFrames: 1, runBackwards: 1, startAt: 1, onUpdate: 1, onUpdateParams: 1, onUpdateScope: 1, onStart: 1, onStartParams: 1, onStartScope: 1, onReverseComplete: 1, onReverseCompleteParams: 1, onReverseCompleteScope: 1, onRepeat: 1, onRepeatParams: 1, onRepeatScope: 1, easeParams: 1, yoyo: 1, immediateRender: 1, repeat: 1, repeatDelay: 1, data: 1, paused: 1, reversed: 1, autoCSS: 1, lazy: 1, onOverwrite: 1, callbackScope: 1, stringFilter: 1, id: 1, yoyoEase: 1 },
                V = { none: 0, all: 1, auto: 2, concurrent: 3, allOnStart: 4, preexisting: 5, true: 1, false: 0 },
                G = M._rootFramesTimeline = new E,
                Z = M._rootTimeline = new E,
                Q = 30,
                K = q.lazyRender = function() {
                    var t, e = L.length;
                    for (I = {}; --e > -1;)(t = L[e]) && !1 !== t._lazy && (t.render(t._lazy[0], t._lazy[1], !0), t._lazy = !1);
                    L.length = 0
                };
            Z._startTime = c.time, G._startTime = c.frame, Z._active = G._active = !0, setTimeout(K, 1), M._updateRoot = $.render = function() {
                var t, e, i;
                if (L.length && K(), Z.render((c.time - Z._startTime) * Z._timeScale, !1, !1), G.render((c.frame - G._startTime) * G._timeScale, !1, !1), L.length && K(), c.frame >= Q) {
                    for (i in Q = c.frame + (parseInt($.autoSleep, 10) || 120), Y) {
                        for (t = (e = Y[i].tweens).length; --t > -1;) e[t]._gc && e.splice(t, 1);
                        0 === e.length && delete Y[i]
                    }
                    if ((!(i = Z._first) || i._paused) && $.autoSleep && !G._first && 1 === c._listeners.tick.length) {
                        for (; i && i._paused;) i = i._next;
                        i || c.sleep()
                    }
                }
            }, c.addEventListener("tick", M._updateRoot);
            var J = function(t, e, i) {
                    var s, n, r = t._gsTweenID;
                    if (Y[r || (t._gsTweenID = r = "t" + U++)] || (Y[r] = { target: t, tweens: [] }), e && ((s = Y[r].tweens)[n = s.length] = e, i))
                        for (; --n > -1;) s[n] === e && s.splice(n, 1);
                    return Y[r].tweens
                },
                tt = function(t, e, i, s) { var n, r, o = t.vars.onOverwrite; return o && (n = o(t, e, i, s)), (o = $.onOverwrite) && (r = o(t, e, i, s)), !1 !== n && !1 !== r },
                et = function(t, e, i, s, n) {
                    var r, o, a, l;
                    if (1 === s || s >= 4) {
                        for (l = n.length, r = 0; l > r; r++)
                            if ((a = n[r]) !== e) a._gc || a._kill(null, t, e) && (o = !0);
                            else if (5 === s) break;
                        return o
                    }
                    var h, c = e._startTime + f,
                        u = [],
                        p = 0,
                        d = 0 === e._duration;
                    for (r = n.length; --r > -1;)(a = n[r]) === e || a._gc || a._paused || (a._timeline !== e._timeline ? (h = h || it(e, 0, d), 0 === it(a, h, d) && (u[p++] = a)) : a._startTime <= c && a._startTime + a.totalDuration() / a._timeScale > c && ((d || !a._initted) && c - a._startTime <= 2e-10 || (u[p++] = a)));
                    for (r = p; --r > -1;)
                        if (a = u[r], 2 === s && a._kill(i, t, e) && (o = !0), 2 !== s || !a._firstPT && a._initted) {
                            if (2 !== s && !tt(a, e)) continue;
                            a._enabled(!1, !1) && (o = !0)
                        }
                    return o
                },
                it = function(t, e, i) {
                    for (var s = t._timeline, n = s._timeScale, r = t._startTime; s._timeline;) {
                        if (r += s._startTime, n *= s._timeScale, s._paused) return -100;
                        s = s._timeline
                    }
                    return (r /= n) > e ? r - e : i && r === e || !t._initted && 2e-10 > r - e ? f : (r += t.totalDuration() / t._timeScale / n) > e + f ? 0 : r - e - f
                };
            h._init = function() {
                var t, e, i, s, n, r, o = this.vars,
                    a = this._overwrittenProps,
                    l = this._duration,
                    h = !!o.immediateRender,
                    c = o.ease;
                if (o.startAt) {
                    for (s in this._startAt && (this._startAt.render(-1, !0), this._startAt.kill()), n = {}, o.startAt) n[s] = o.startAt[s];
                    if (n.data = "isStart", n.overwrite = !1, n.immediateRender = !0, n.lazy = h && !1 !== o.lazy, n.startAt = n.delay = null, n.onUpdate = o.onUpdate, n.onUpdateParams = o.onUpdateParams, n.onUpdateScope = o.onUpdateScope || o.callbackScope || this, this._startAt = $.to(this.target, 0, n), h)
                        if (this._time > 0) this._startAt = null;
                        else if (0 !== l) return
                } else if (o.runBackwards && 0 !== l)
                    if (this._startAt) this._startAt.render(-1, !0), this._startAt.kill(), this._startAt = null;
                    else { for (s in 0 !== this._time && (h = !1), i = {}, o) W[s] && "autoCSS" !== s || (i[s] = o[s]); if (i.overwrite = 0, i.data = "isFromStart", i.lazy = h && !1 !== o.lazy, i.immediateRender = h, this._startAt = $.to(this.target, 0, i), h) { if (0 === this._time) return } else this._startAt._init(), this._startAt._enabled(!1), this.vars.immediateRender && (this._startAt = null) }
                if (this._ease = c = c ? c instanceof b ? c : "function" == typeof c ? new b(c, o.easeParams) : k[c] || $.defaultEase : $.defaultEase, o.easeParams instanceof Array && c.config && (this._ease = c.config.apply(c, o.easeParams)), this._easeType = this._ease._type, this._easePower = this._ease._power, this._firstPT = null, this._targets)
                    for (r = this._targets.length, t = 0; r > t; t++) this._initProps(this._targets[t], this._propLookup[t] = {}, this._siblings[t], a ? a[t] : null, t) && (e = !0);
                else e = this._initProps(this.target, this._propLookup, this._siblings, a, 0);
                if (e && $._onPluginEvent("_onInitAllProps", this), a && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)), o.runBackwards)
                    for (i = this._firstPT; i;) i.s += i.c, i.c = -i.c, i = i._next;
                this._onUpdate = o.onUpdate, this._initted = !0
            }, h._initProps = function(e, i, s, n, r) {
                var o, a, l, h, c, u;
                if (null == e) return !1;
                for (o in I[e._gsTweenID] && K(), this.vars.css || e.style && e !== t && e.nodeType && H.css && !1 !== this.vars.autoCSS && function(t, e) {
                        var i, s = {};
                        for (i in t) W[i] || i in e && "transform" !== i && "x" !== i && "y" !== i && "width" !== i && "height" !== i && "className" !== i && "border" !== i || !(!H[i] || H[i] && H[i]._autoCSS) || (s[i] = t[i], delete t[i]);
                        t.css = s
                    }(this.vars, e), this.vars)
                    if (u = this.vars[o], W[o]) u && (u instanceof Array || u.push && g(u)) && -1 !== u.join("").indexOf("{self}") && (this.vars[o] = u = this._swapSelfInParams(u, this));
                    else if (H[o] && (h = new H[o])._onInitTween(e, this.vars[o], this, r)) {
                    for (this._firstPT = c = { _next: this._firstPT, t: h, p: "setRatio", s: 0, c: 1, f: 1, n: o, pg: 1, pr: h._priority, m: 0 }, a = h._overwriteProps.length; --a > -1;) i[h._overwriteProps[a]] = this._firstPT;
                    (h._priority || h._onInitAllProps) && (l = !0), (h._onDisable || h._onEnable) && (this._notifyPluginsOfEnabled = !0), c._next && (c._next._prev = c)
                } else i[o] = B.call(this, e, o, "get", u, o, 0, null, this.vars.stringFilter, r);
                return n && this._kill(n, e) ? this._initProps(e, i, s, n, r) : this._overwrite > 1 && this._firstPT && s.length > 1 && et(e, this, i, this._overwrite, s) ? (this._kill(i, e), this._initProps(e, i, s, n, r)) : (this._firstPT && (!1 !== this.vars.lazy && this._duration || this.vars.lazy && !this._duration) && (I[e._gsTweenID] = !0), l)
            }, h.render = function(t, e, i) {
                var s, n, r, o, a = this._time,
                    l = this._duration,
                    h = this._rawPrevTime;
                if (t >= l - 1e-7 && t >= 0) this._totalTime = this._time = l, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1, this._reversed || (s = !0, n = "onComplete", i = i || this._timeline.autoRemoveChildren), 0 === l && (this._initted || !this.vars.lazy || i) && (this._startTime === this._timeline._duration && (t = 0), (0 > h || 0 >= t && t >= -1e-7 || h === f && "isPause" !== this.data) && h !== t && (i = !0, h > f && (n = "onReverseComplete")), this._rawPrevTime = o = !e || t || h === t ? t : f);
                else if (1e-7 > t) this._totalTime = this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== a || 0 === l && h > 0) && (n = "onReverseComplete", s = this._reversed), 0 > t && (this._active = !1, 0 === l && (this._initted || !this.vars.lazy || i) && (h >= 0 && (h !== f || "isPause" !== this.data) && (i = !0), this._rawPrevTime = o = !e || t || h === t ? t : f)), (!this._initted || this._startAt && this._startAt.progress()) && (i = !0);
                else if (this._totalTime = this._time = t, this._easeType) {
                    var c = t / l,
                        u = this._easeType,
                        p = this._easePower;
                    (1 === u || 3 === u && c >= .5) && (c = 1 - c), 3 === u && (c *= 2), 1 === p ? c *= c : 2 === p ? c *= c * c : 3 === p ? c *= c * c * c : 4 === p && (c *= c * c * c * c), this.ratio = 1 === u ? 1 - c : 2 === u ? c : .5 > t / l ? c / 2 : 1 - c / 2
                } else this.ratio = this._ease.getRatio(t / l);
                if (this._time !== a || i) {
                    if (!this._initted) {
                        if (this._init(), !this._initted || this._gc) return;
                        if (!i && this._firstPT && (!1 !== this.vars.lazy && this._duration || this.vars.lazy && !this._duration)) return this._time = this._totalTime = a, this._rawPrevTime = h, L.push(this), void(this._lazy = [t, e]);
                        this._time && !s ? this.ratio = this._ease.getRatio(this._time / l) : s && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                    }
                    for (!1 !== this._lazy && (this._lazy = !1), this._active || !this._paused && this._time !== a && t >= 0 && (this._active = !0), 0 === a && (this._startAt && (t >= 0 ? this._startAt.render(t, !0, i) : n || (n = "_dummyGS")), this.vars.onStart && (0 !== this._time || 0 === l) && (e || this._callback("onStart"))), r = this._firstPT; r;) r.f ? r.t[r.p](r.c * this.ratio + r.s) : r.t[r.p] = r.c * this.ratio + r.s, r = r._next;
                    this._onUpdate && (0 > t && this._startAt && -1e-4 !== t && this._startAt.render(t, !0, i), e || (this._time !== a || s || i) && this._callback("onUpdate")), n && (!this._gc || i) && (0 > t && this._startAt && !this._onUpdate && -1e-4 !== t && this._startAt.render(t, !0, i), s && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[n] && this._callback(n), 0 === l && this._rawPrevTime === f && o !== f && (this._rawPrevTime = 0))
                }
            }, h._kill = function(t, e, i) {
                if ("all" === t && (t = null), null == t && (null == e || e === this.target)) return this._lazy = !1, this._enabled(!1, !1);
                e = "string" != typeof e ? e || this._targets || this.target : $.selector(e) || e;
                var s, n, r, o, a, l, h, c, u, p = i && this._time && i._startTime === this._startTime && this._timeline === i._timeline;
                if ((g(e) || z(e)) && "number" != typeof e[0])
                    for (s = e.length; --s > -1;) this._kill(t, e[s], i) && (l = !0);
                else {
                    if (this._targets) {
                        for (s = this._targets.length; --s > -1;)
                            if (e === this._targets[s]) { a = this._propLookup[s] || {}, this._overwrittenProps = this._overwrittenProps || [], n = this._overwrittenProps[s] = t ? this._overwrittenProps[s] || {} : "all"; break }
                    } else {
                        if (e !== this.target) return !1;
                        a = this._propLookup, n = this._overwrittenProps = t ? this._overwrittenProps || {} : "all"
                    }
                    if (a) { if (h = t || a, c = t !== n && "all" !== n && t !== a && ("object" != typeof t || !t._tempKill), i && ($.onOverwrite || this.vars.onOverwrite)) { for (r in h) a[r] && (u || (u = []), u.push(r)); if ((u || !t) && !tt(this, i, e, u)) return !1 } for (r in h)(o = a[r]) && (p && (o.f ? o.t[o.p](o.s) : o.t[o.p] = o.s, l = !0), o.pg && o.t._kill(h) && (l = !0), o.pg && 0 !== o.t._overwriteProps.length || (o._prev ? o._prev._next = o._next : o === this._firstPT && (this._firstPT = o._next), o._next && (o._next._prev = o._prev), o._next = o._prev = null), delete a[r]), c && (n[r] = 1);!this._firstPT && this._initted && this._enabled(!1, !1) }
                }
                return l
            }, h.invalidate = function() { return this._notifyPluginsOfEnabled && $._onPluginEvent("_onDisable", this), this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null, this._notifyPluginsOfEnabled = this._active = this._lazy = !1, this._propLookup = this._targets ? {} : [], M.prototype.invalidate.call(this), this.vars.immediateRender && (this._time = -f, this.render(Math.min(0, -this._delay))), this }, h._enabled = function(t, e) {
                if (u || c.wake(), t && this._gc) {
                    var i, s = this._targets;
                    if (s)
                        for (i = s.length; --i > -1;) this._siblings[i] = J(s[i], this, !0);
                    else this._siblings = J(this.target, this, !0)
                }
                return M.prototype._enabled.call(this, t, e), !(!this._notifyPluginsOfEnabled || !this._firstPT) && $._onPluginEvent(t ? "_onEnable" : "_onDisable", this)
            }, $.to = function(t, e, i) { return new $(t, e, i) }, $.from = function(t, e, i) { return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, new $(t, e, i) }, $.fromTo = function(t, e, i, s) { return s.startAt = i, s.immediateRender = 0 != s.immediateRender && 0 != i.immediateRender, new $(t, e, s) }, $.delayedCall = function(t, e, i, s, n) { return new $(e, 0, { delay: t, onComplete: e, onCompleteParams: i, callbackScope: s, onReverseComplete: e, onReverseCompleteParams: i, immediateRender: !1, lazy: !1, useFrames: n, overwrite: 0 }) }, $.set = function(t, e) { return new $(t, 0, e) }, $.getTweensOf = function(t, e) {
                if (null == t) return [];
                var i, s, n, r;
                if (t = "string" != typeof t ? t : $.selector(t) || t, (g(t) || z(t)) && "number" != typeof t[0]) {
                    for (i = t.length, s = []; --i > -1;) s = s.concat($.getTweensOf(t[i], e));
                    for (i = s.length; --i > -1;)
                        for (r = s[i], n = i; --n > -1;) r === s[n] && s.splice(i, 1)
                } else if (t._gsTweenID)
                    for (i = (s = J(t).concat()).length; --i > -1;)(s[i]._gc || e && !s[i].isActive()) && s.splice(i, 1);
                return s || []
            }, $.killTweensOf = $.killDelayedCallsTo = function(t, e, i) { "object" == typeof e && (i = e, e = !1); for (var s = $.getTweensOf(t, e), n = s.length; --n > -1;) s[n]._kill(i, t) };
            var st = x("plugins.TweenPlugin", function(t, e) { this._overwriteProps = (t || "").split(","), this._propName = this._overwriteProps[0], this._priority = e || 0, this._super = st.prototype }, !0);
            if (h = st.prototype, st.version = "1.19.0", st.API = 2, h._firstPT = null, h._addTween = B, h.setRatio = j, h._kill = function(t) {
                    var e, i = this._overwriteProps,
                        s = this._firstPT;
                    if (null != t[this._propName]) this._overwriteProps = [];
                    else
                        for (e = i.length; --e > -1;) null != t[i[e]] && i.splice(e, 1);
                    for (; s;) null != t[s.n] && (s._next && (s._next._prev = s._prev), s._prev ? (s._prev._next = s._next, s._prev = null) : this._firstPT === s && (this._firstPT = s._next)), s = s._next;
                    return !1
                }, h._mod = h._roundProps = function(t) { for (var e, i = this._firstPT; i;)(e = t[this._propName] || null != i.n && t[i.n.split(this._propName + "_").join("")]) && "function" == typeof e && (2 === i.f ? i.t._applyPT.m = e : i.m = e), i = i._next }, $._onPluginEvent = function(t, e) {
                    var i, s, n, r, o, a = e._firstPT;
                    if ("_onInitAllProps" === t) {
                        for (; a;) {
                            for (o = a._next, s = n; s && s.pr > a.pr;) s = s._next;
                            (a._prev = s ? s._prev : r) ? a._prev._next = a: n = a, (a._next = s) ? s._prev = a : r = a, a = o
                        }
                        a = e._firstPT = n
                    }
                    for (; a;) a.pg && "function" == typeof a.t[t] && a.t[t]() && (i = !0), a = a._next;
                    return i
                }, st.activate = function(t) { for (var e = t.length; --e > -1;) t[e].API === st.API && (H[(new t[e])._propName] = t[e]); return !0 }, T.plugin = function(t) {
                    if (!(t && t.propName && t.init && t.API)) throw "illegal plugin definition.";
                    var e, i = t.propName,
                        s = t.priority || 0,
                        n = t.overwriteProps,
                        r = { init: "_onInitTween", set: "setRatio", kill: "_kill", round: "_mod", mod: "_mod", initAll: "_onInitAllProps" },
                        o = x("plugins." + i.charAt(0).toUpperCase() + i.substr(1) + "Plugin", function() { st.call(this, i, s), this._overwriteProps = n || [] }, !0 === t.global),
                        a = o.prototype = new st(i);
                    for (e in a.constructor = o, o.API = t.API, r) "function" == typeof t[e] && (a[r[e]] = t[e]);
                    return o.version = t.version, st.activate([o]), o
                }, a = t._gsQueue) { for (l = 0; l < a.length; l++) a[l](); for (h in v) v[h].func || t.console.log("GSAP encountered missing dependency: " + h) }
            u = !1
        }
    }("undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window, "TweenMax");