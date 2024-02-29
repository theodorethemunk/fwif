(function(P, $) {
    typeof exports == "object" && typeof module < "u" ? module.exports = $() : typeof define == "function" && define.amd ? define($) : (P = typeof globalThis < "u" ? globalThis : P || self, P.AwesomeMenu = $())
})(this, function() {
    "use strict";
    var _o = Object.defineProperty;
    var Io = (P, $, q) => $ in P ? _o(P, $, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: q
    }) : P[$] = q;
    var z = (P, $, q) => (Io(P, typeof $ != "symbol" ? $ + "" : $, q), q);
    var P = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};

    function $(n) {
        return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n
    }
    var q = {
        exports: {}
    };
    q.exports,
        function(n, e) {
            var t = 200,
                o = "__lodash_hash_undefined__",
                s = 800,
                a = 16,
                c = 9007199254740991,
                u = "[object Arguments]",
                p = "[object Array]",
                g = "[object AsyncFunction]",
                m = "[object Boolean]",
                h = "[object Date]",
                d = "[object Error]",
                f = "[object Function]",
                b = "[object GeneratorFunction]",
                w = "[object Map]",
                k = "[object Number]",
                O = "[object Null]",
                T = "[object Object]",
                D = "[object Proxy]",
                I = "[object RegExp]",
                M = "[object Set]",
                U = "[object String]",
                Y = "[object Undefined]",
                _ = "[object WeakMap]",
                F = "[object ArrayBuffer]",
                j = "[object DataView]",
                ae = "[object Float32Array]",
                Q = "[object Float64Array]",
                N = "[object Int8Array]",
                B = "[object Int16Array]",
                le = "[object Int32Array]",
                ce = "[object Uint8Array]",
                H = "[object Uint8ClampedArray]",
                di = "[object Uint16Array]",
                fi = "[object Uint32Array]",
                hi = /[\\^$.*+?()[\]{}|]/g,
                pi = /^\[object .+?Constructor\]$/,
                gi = /^(?:0|[1-9]\d*)$/,
                A = {};
            A[ae] = A[Q] = A[N] = A[B] = A[le] = A[ce] = A[H] = A[di] = A[fi] = !0, A[u] = A[p] = A[F] = A[m] = A[j] = A[h] = A[d] = A[f] = A[w] = A[k] = A[T] = A[I] = A[M] = A[U] = A[_] = !1;
            var Ht = typeof P == "object" && P && P.Object === Object && P,
                mi = typeof self == "object" && self && self.Object === Object && self,
                ve = Ht || mi || Function("return this")(),
                Wt = e && !e.nodeType && e,
                Ee = Wt && !0 && n && !n.nodeType && n,
                zt = Ee && Ee.exports === Wt,
                Xe = zt && Ht.process,
                jt = function() {
                    try {
                        var i = Ee && Ee.require && Ee.require("util").types;
                        return i || Xe && Xe.binding && Xe.binding("util")
                    } catch {}
                }(),
                qt = jt && jt.isTypedArray;

            function yi(i, r, l) {
                switch (l.length) {
                    case 0:
                        return i.call(r);
                    case 1:
                        return i.call(r, l[0]);
                    case 2:
                        return i.call(r, l[0], l[1]);
                    case 3:
                        return i.call(r, l[0], l[1], l[2])
                }
                return i.apply(r, l)
            }

            function bi(i, r) {
                for (var l = -1, y = Array(i); ++l < i;) y[l] = r(l);
                return y
            }

            function wi(i) {
                return function(r) {
                    return i(r)
                }
            }

            function vi(i, r) {
                return i == null ? void 0 : i[r]
            }

            function Ei(i, r) {
                return function(l) {
                    return i(r(l))
                }
            }
            var ki = Array.prototype,
                xi = Function.prototype,
                Me = Object.prototype,
                Je = ve["__core-js_shared__"],
                _e = xi.toString,
                X = Me.hasOwnProperty,
                Vt = function() {
                    var i = /[^.]+$/.exec(Je && Je.keys && Je.keys.IE_PROTO || "");
                    return i ? "Symbol(src)_1." + i : ""
                }(),
                Ut = Me.toString,
                Ai = _e.call(Object),
                Ci = RegExp("^" + _e.call(X).replace(hi, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
                Ie = zt ? ve.Buffer : void 0,
                Nt = ve.Symbol,
                Kt = ve.Uint8Array,
                Gt = Ie ? Ie.allocUnsafe : void 0,
                Yt = Ei(Object.getPrototypeOf, Object),
                Qt = Object.create,
                Li = Me.propertyIsEnumerable,
                Ti = ki.splice,
                ue = Nt ? Nt.toStringTag : void 0,
                Fe = function() {
                    try {
                        var i = tt(Object, "defineProperty");
                        return i({}, "", {}), i
                    } catch {}
                }(),
                Oi = Ie ? Ie.isBuffer : void 0,
                Xt = Math.max,
                Di = Date.now,
                Jt = tt(ve, "Map"),
                ke = tt(Object, "create"),
                Mi = function() {
                    function i() {}
                    return function(r) {
                        if (!fe(r)) return {};
                        if (Qt) return Qt(r);
                        i.prototype = r;
                        var l = new i;
                        return i.prototype = void 0, l
                    }
                }();

            function de(i) {
                var r = -1,
                    l = i == null ? 0 : i.length;
                for (this.clear(); ++r < l;) {
                    var y = i[r];
                    this.set(y[0], y[1])
                }
            }

            function _i() {
                this.__data__ = ke ? ke(null) : {}, this.size = 0
            }

            function Ii(i) {
                var r = this.has(i) && delete this.__data__[i];
                return this.size -= r ? 1 : 0, r
            }

            function Fi(i) {
                var r = this.__data__;
                if (ke) {
                    var l = r[i];
                    return l === o ? void 0 : l
                }
                return X.call(r, i) ? r[i] : void 0
            }

            function Pi(i) {
                var r = this.__data__;
                return ke ? r[i] !== void 0 : X.call(r, i)
            }

            function $i(i, r) {
                var l = this.__data__;
                return this.size += this.has(i) ? 0 : 1, l[i] = ke && r === void 0 ? o : r, this
            }
            de.prototype.clear = _i, de.prototype.delete = Ii, de.prototype.get = Fi, de.prototype.has = Pi, de.prototype.set = $i;

            function J(i) {
                var r = -1,
                    l = i == null ? 0 : i.length;
                for (this.clear(); ++r < l;) {
                    var y = i[r];
                    this.set(y[0], y[1])
                }
            }

            function Ri() {
                this.__data__ = [], this.size = 0
            }

            function Bi(i) {
                var r = this.__data__,
                    l = Pe(r, i);
                if (l < 0) return !1;
                var y = r.length - 1;
                return l == y ? r.pop() : Ti.call(r, l, 1), --this.size, !0
            }

            function Si(i) {
                var r = this.__data__,
                    l = Pe(r, i);
                return l < 0 ? void 0 : r[l][1]
            }

            function Hi(i) {
                return Pe(this.__data__, i) > -1
            }

            function Wi(i, r) {
                var l = this.__data__,
                    y = Pe(l, i);
                return y < 0 ? (++this.size, l.push([i, r])) : l[y][1] = r, this
            }
            J.prototype.clear = Ri, J.prototype.delete = Bi, J.prototype.get = Si, J.prototype.has = Hi, J.prototype.set = Wi;

            function pe(i) {
                var r = -1,
                    l = i == null ? 0 : i.length;
                for (this.clear(); ++r < l;) {
                    var y = i[r];
                    this.set(y[0], y[1])
                }
            }

            function zi() {
                this.size = 0, this.__data__ = {
                    hash: new de,
                    map: new(Jt || J),
                    string: new de
                }
            }

            function ji(i) {
                var r = Re(this, i).delete(i);
                return this.size -= r ? 1 : 0, r
            }

            function qi(i) {
                return Re(this, i).get(i)
            }

            function Vi(i) {
                return Re(this, i).has(i)
            }

            function Ui(i, r) {
                var l = Re(this, i),
                    y = l.size;
                return l.set(i, r), this.size += l.size == y ? 0 : 1, this
            }
            pe.prototype.clear = zi, pe.prototype.delete = ji, pe.prototype.get = qi, pe.prototype.has = Vi, pe.prototype.set = Ui;

            function ge(i) {
                var r = this.__data__ = new J(i);
                this.size = r.size
            }

            function Ni() {
                this.__data__ = new J, this.size = 0
            }

            function Ki(i) {
                var r = this.__data__,
                    l = r.delete(i);
                return this.size = r.size, l
            }

            function Gi(i) {
                return this.__data__.get(i)
            }

            function Yi(i) {
                return this.__data__.has(i)
            }

            function Qi(i, r) {
                var l = this.__data__;
                if (l instanceof J) {
                    var y = l.__data__;
                    if (!Jt || y.length < t - 1) return y.push([i, r]), this.size = ++l.size, this;
                    l = this.__data__ = new pe(y)
                }
                return l.set(i, r), this.size = l.size, this
            }
            ge.prototype.clear = Ni, ge.prototype.delete = Ki, ge.prototype.get = Gi, ge.prototype.has = Yi, ge.prototype.set = Qi;

            function Xi(i, r) {
                var l = ot(i),
                    y = !l && it(i),
                    E = !l && !y && on(i),
                    x = !l && !y && !E && rn(i),
                    C = l || y || E || x,
                    v = C ? bi(i.length, String) : [],
                    L = v.length;
                for (var W in i)(r || X.call(i, W)) && !(C && (W == "length" || E && (W == "offset" || W == "parent") || x && (W == "buffer" || W == "byteLength" || W == "byteOffset") || tn(W, L))) && v.push(W);
                return v
            }

            function Ze(i, r, l) {
                (l !== void 0 && !Be(i[r], l) || l === void 0 && !(r in i)) && et(i, r, l)
            }

            function Ji(i, r, l) {
                var y = i[r];
                (!(X.call(i, r) && Be(y, l)) || l === void 0 && !(r in i)) && et(i, r, l)
            }

            function Pe(i, r) {
                for (var l = i.length; l--;)
                    if (Be(i[l][0], r)) return l;
                return -1
            }

            function et(i, r, l) {
                r == "__proto__" && Fe ? Fe(i, r, {
                    configurable: !0,
                    enumerable: !0,
                    value: l,
                    writable: !0
                }) : i[r] = l
            }
            var Zi = ho();

            function $e(i) {
                return i == null ? i === void 0 ? Y : O : ue && ue in Object(i) ? po(i) : vo(i)
            }

            function Zt(i) {
                return xe(i) && $e(i) == u
            }

            function eo(i) {
                if (!fe(i) || bo(i)) return !1;
                var r = rt(i) ? Ci : pi;
                return r.test(Ao(i))
            }

            function to(i) {
                return xe(i) && sn(i.length) && !!A[$e(i)]
            }

            function no(i) {
                if (!fe(i)) return wo(i);
                var r = nn(i),
                    l = [];
                for (var y in i) y == "constructor" && (r || !X.call(i, y)) || l.push(y);
                return l
            }

            function en(i, r, l, y, E) {
                i !== r && Zi(r, function(x, C) {
                    if (E || (E = new ge), fe(x)) io(i, r, C, l, en, y, E);
                    else {
                        var v = y ? y(nt(i, C), x, C + "", i, r, E) : void 0;
                        v === void 0 && (v = x), Ze(i, C, v)
                    }
                }, an)
            }

            function io(i, r, l, y, E, x, C) {
                var v = nt(i, l),
                    L = nt(r, l),
                    W = C.get(L);
                if (W) {
                    Ze(i, l, W);
                    return
                }
                var S = x ? x(v, L, l + "", i, r, C) : void 0,
                    Ae = S === void 0;
                if (Ae) {
                    var at = ot(L),
                        lt = !at && on(L),
                        cn = !at && !lt && rn(L);
                    S = L, at || lt || cn ? ot(v) ? S = v : Co(v) ? S = co(v) : lt ? (Ae = !1, S = ro(L, !0)) : cn ? (Ae = !1, S = lo(L, !0)) : S = [] : Lo(L) || it(L) ? (S = v, it(v) ? S = To(v) : (!fe(v) || rt(v)) && (S = go(L))) : Ae = !1
                }
                Ae && (C.set(L, S), E(S, L, y, x, C), C.delete(L)), Ze(i, l, S)
            }

            function oo(i, r) {
                return ko(Eo(i, r, ln), i + "")
            }
            var so = Fe ? function(i, r) {
                return Fe(i, "toString", {
                    configurable: !0,
                    enumerable: !1,
                    value: Do(r),
                    writable: !0
                })
            } : ln;

            function ro(i, r) {
                if (r) return i.slice();
                var l = i.length,
                    y = Gt ? Gt(l) : new i.constructor(l);
                return i.copy(y), y
            }

            function ao(i) {
                var r = new i.constructor(i.byteLength);
                return new Kt(r).set(new Kt(i)), r
            }

            function lo(i, r) {
                var l = r ? ao(i.buffer) : i.buffer;
                return new i.constructor(l, i.byteOffset, i.length)
            }

            function co(i, r) {
                var l = -1,
                    y = i.length;
                for (r || (r = Array(y)); ++l < y;) r[l] = i[l];
                return r
            }

            function uo(i, r, l, y) {
                var E = !l;
                l || (l = {});
                for (var x = -1, C = r.length; ++x < C;) {
                    var v = r[x],
                        L = y ? y(l[v], i[v], v, l, i) : void 0;
                    L === void 0 && (L = i[v]), E ? et(l, v, L) : Ji(l, v, L)
                }
                return l
            }

            function fo(i) {
                return oo(function(r, l) {
                    var y = -1,
                        E = l.length,
                        x = E > 1 ? l[E - 1] : void 0,
                        C = E > 2 ? l[2] : void 0;
                    for (x = i.length > 3 && typeof x == "function" ? (E--, x) : void 0, C && mo(l[0], l[1], C) && (x = E < 3 ? void 0 : x, E = 1), r = Object(r); ++y < E;) {
                        var v = l[y];
                        v && i(r, v, y, x)
                    }
                    return r
                })
            }

            function ho(i) {
                return function(r, l, y) {
                    for (var E = -1, x = Object(r), C = y(r), v = C.length; v--;) {
                        var L = C[i ? v : ++E];
                        if (l(x[L], L, x) === !1) break
                    }
                    return r
                }
            }

            function Re(i, r) {
                var l = i.__data__;
                return yo(r) ? l[typeof r == "string" ? "string" : "hash"] : l.map
            }

            function tt(i, r) {
                var l = vi(i, r);
                return eo(l) ? l : void 0
            }

            function po(i) {
                var r = X.call(i, ue),
                    l = i[ue];
                try {
                    i[ue] = void 0;
                    var y = !0
                } catch {}
                var E = Ut.call(i);
                return y && (r ? i[ue] = l : delete i[ue]), E
            }

            function go(i) {
                return typeof i.constructor == "function" && !nn(i) ? Mi(Yt(i)) : {}
            }

            function tn(i, r) {
                var l = typeof i;
                return r = r ? ? c, !!r && (l == "number" || l != "symbol" && gi.test(i)) && i > -1 && i % 1 == 0 && i < r
            }

            function mo(i, r, l) {
                if (!fe(l)) return !1;
                var y = typeof r;
                return (y == "number" ? st(l) && tn(r, l.length) : y == "string" && r in l) ? Be(l[r], i) : !1
            }

            function yo(i) {
                var r = typeof i;
                return r == "string" || r == "number" || r == "symbol" || r == "boolean" ? i !== "__proto__" : i === null
            }

            function bo(i) {
                return !!Vt && Vt in i
            }

            function nn(i) {
                var r = i && i.constructor,
                    l = typeof r == "function" && r.prototype || Me;
                return i === l
            }

            function wo(i) {
                var r = [];
                if (i != null)
                    for (var l in Object(i)) r.push(l);
                return r
            }

            function vo(i) {
                return Ut.call(i)
            }

            function Eo(i, r, l) {
                return r = Xt(r === void 0 ? i.length - 1 : r, 0),
                    function() {
                        for (var y = arguments, E = -1, x = Xt(y.length - r, 0), C = Array(x); ++E < x;) C[E] = y[r + E];
                        E = -1;
                        for (var v = Array(r + 1); ++E < r;) v[E] = y[E];
                        return v[r] = l(C), yi(i, this, v)
                    }
            }

            function nt(i, r) {
                if (!(r === "constructor" && typeof i[r] == "function") && r != "__proto__") return i[r]
            }
            var ko = xo(so);

            function xo(i) {
                var r = 0,
                    l = 0;
                return function() {
                    var y = Di(),
                        E = a - (y - l);
                    if (l = y, E > 0) {
                        if (++r >= s) return arguments[0]
                    } else r = 0;
                    return i.apply(void 0, arguments)
                }
            }

            function Ao(i) {
                if (i != null) {
                    try {
                        return _e.call(i)
                    } catch {}
                    try {
                        return i + ""
                    } catch {}
                }
                return ""
            }

            function Be(i, r) {
                return i === r || i !== i && r !== r
            }
            var it = Zt(function() {
                    return arguments
                }()) ? Zt : function(i) {
                    return xe(i) && X.call(i, "callee") && !Li.call(i, "callee")
                },
                ot = Array.isArray;

            function st(i) {
                return i != null && sn(i.length) && !rt(i)
            }

            function Co(i) {
                return xe(i) && st(i)
            }
            var on = Oi || Mo;

            function rt(i) {
                if (!fe(i)) return !1;
                var r = $e(i);
                return r == f || r == b || r == g || r == D
            }

            function sn(i) {
                return typeof i == "number" && i > -1 && i % 1 == 0 && i <= c
            }

            function fe(i) {
                var r = typeof i;
                return i != null && (r == "object" || r == "function")
            }

            function xe(i) {
                return i != null && typeof i == "object"
            }

            function Lo(i) {
                if (!xe(i) || $e(i) != T) return !1;
                var r = Yt(i);
                if (r === null) return !0;
                var l = X.call(r, "constructor") && r.constructor;
                return typeof l == "function" && l instanceof l && _e.call(l) == Ai
            }
            var rn = qt ? wi(qt) : to;

            function To(i) {
                return uo(i, an(i))
            }

            function an(i) {
                return st(i) ? Xi(i, !0) : no(i)
            }
            var Oo = fo(function(i, r, l) {
                en(i, r, l)
            });

            function Do(i) {
                return function() {
                    return i
                }
            }

            function ln(i) {
                return i
            }

            function Mo() {
                return !1
            }
            n.exports = Oo
        }(q, q.exports);
    var un = q.exports;
    const dn = $(un),
        fn = n => {
            const e = new Set;
            do
                for (const t of Reflect.ownKeys(n)) e.add([n, t]); while ((n = Reflect.getPrototypeOf(n)) && n !== Object.prototype);
            return e
        };
    var hn = (n, {
        include: e,
        exclude: t
    } = {}) => {
        const o = s => {
            const a = c => typeof c == "string" ? s === c : c.test(s);
            return e ? e.some(a) : t ? !t.some(a) : !0
        };
        for (const [s, a] of fn(n.constructor.prototype)) {
            if (a === "constructor" || !o(a)) continue;
            const c = Reflect.getOwnPropertyDescriptor(s, a);
            c && typeof c.value == "function" && (n[a] = n[a].bind(n))
        }
        return n
    };
    const Se = $(hn),
        ct = "button, [href], input, select, textarea, [tabindex]:not([tabindex='-1'])";
    class He {
        constructor(e, t) {
            z(this, "element");
            z(this, "parent");
            const o = pn(e);
            if (!o) throw "Element not found.";
            this.element = o, this.parent = t
        }
        query(e, t) {
            return (t ? ? this.element).querySelector(e)
        }
        queryAll(e, t) {
            const o = t ? ? this.element;
            return Array.from(o.querySelectorAll(e))
        }
        get() {
            return this.element
        }
        add(e) {
            this.get().classList.add(e)
        }
        has(e) {
            return this.get().classList.contains(e)
        }
        remove(e) {
            this.get().classList.remove(e)
        }
        getVariable(e) {
            return getComputedStyle(this.get()).getPropertyValue(`--${e}`)
        }
        setVariable(e, t) {
            this.get().style.setProperty(`--${e}`, t)
        }
        setVariables(e) {
            for (const [t, o] of Object.entries(e)) this.setVariable(t, o)
        }
        removeVariable(e) {
            this.get().style.removeProperty(`--${e}`)
        }
        bounds() {
            return this.get().getBoundingClientRect()
        }
        getFocusContainer() {
            return this.get()
        }
        isFocusWithin() {
            return this.get().contains(document.activeElement)
        }
        getFirstFocusableElement() {
            return this.getFocusContainer().querySelector(ct)
        }
        getFocusableElements() {
            return Array.from(this.getFocusContainer().querySelectorAll(ct))
        }
        focusInside() {
            const e = this.getFirstFocusableElement();
            e && e.focus()
        }
    }

    function pn(n) {
        return typeof n == "string" ? document.querySelector(n) : n
    }
    const gn = "text/plain",
        mn = "us-ascii",
        ut = (n, e) => e.some(t => t instanceof RegExp ? t.test(n) : t === n),
        yn = (n, {
            stripHash: e
        }) => {
            const t = /^data:(?<type>[^,]*?),(?<data>[^#]*?)(?:#(?<hash>.*))?$/.exec(n);
            if (!t) throw new Error(`Invalid URL: ${n}`);
            let {
                type: o,
                data: s,
                hash: a
            } = t.groups;
            const c = o.split(";");
            a = e ? "" : a;
            let u = !1;
            c[c.length - 1] === "base64" && (c.pop(), u = !0);
            const p = (c.shift() || "").toLowerCase(),
                m = [...c.map(h => {
                    let [d, f = ""] = h.split("=").map(b => b.trim());
                    return d === "charset" && (f = f.toLowerCase(), f === mn) ? "" : `${d}${f?`=${f}`:""}`
                }).filter(Boolean)];
            return u && m.push("base64"), (m.length > 0 || p && p !== gn) && m.unshift(p), `data:${m.join(";")},${u?s.trim():s}${a?`#${a}`:""}`
        };

    function dt(n, e) {
        if (e = {
                defaultProtocol: "http:",
                normalizeProtocol: !0,
                forceHttp: !1,
                forceHttps: !1,
                stripAuthentication: !0,
                stripHash: !1,
                stripTextFragment: !0,
                stripWWW: !0,
                removeQueryParameters: [/^utm_\w+/i],
                removeTrailingSlash: !0,
                removeSingleSlash: !0,
                removeDirectoryIndex: !1,
                sortQueryParameters: !0,
                ...e
            }, n = n.trim(), /^data:/i.test(n)) return yn(n, e);
        if (/^view-source:/i.test(n)) throw new Error("`view-source:` is not supported as it is a non-standard protocol");
        const t = n.startsWith("//");
        !t && /^\.*\//.test(n) || (n = n.replace(/^(?!(?:\w+:)?\/\/)|^\/\//, e.defaultProtocol));
        const s = new URL(n);
        if (e.forceHttp && e.forceHttps) throw new Error("The `forceHttp` and `forceHttps` options cannot be used together");
        if (e.forceHttp && s.protocol === "https:" && (s.protocol = "http:"), e.forceHttps && s.protocol === "http:" && (s.protocol = "https:"), e.stripAuthentication && (s.username = "", s.password = ""), e.stripHash ? s.hash = "" : e.stripTextFragment && (s.hash = s.hash.replace(/#?:~:text.*?$/i, "")), s.pathname) {
            const c = /\b[a-z][a-z\d+\-.]{1,50}:\/\//g;
            let u = 0,
                p = "";
            for (;;) {
                const m = c.exec(s.pathname);
                if (!m) break;
                const h = m[0],
                    d = m.index,
                    f = s.pathname.slice(u, d);
                p += f.replace(/\/{2,}/g, "/"), p += h, u = d + h.length
            }
            const g = s.pathname.slice(u, s.pathname.length);
            p += g.replace(/\/{2,}/g, "/"), s.pathname = p
        }
        if (s.pathname) try {
            s.pathname = decodeURI(s.pathname)
        } catch {}
        if (e.removeDirectoryIndex === !0 && (e.removeDirectoryIndex = [/^index\.[a-z]+$/]), Array.isArray(e.removeDirectoryIndex) && e.removeDirectoryIndex.length > 0) {
            let c = s.pathname.split("/");
            const u = c[c.length - 1];
            ut(u, e.removeDirectoryIndex) && (c = c.slice(0, -1), s.pathname = c.slice(1).join("/") + "/")
        }
        if (s.hostname && (s.hostname = s.hostname.replace(/\.$/, ""), e.stripWWW && /^www\.(?!www\.)[a-z\-\d]{1,63}\.[a-z.\-\d]{2,63}$/.test(s.hostname) && (s.hostname = s.hostname.replace(/^www\./, ""))), Array.isArray(e.removeQueryParameters))
            for (const c of [...s.searchParams.keys()]) ut(c, e.removeQueryParameters) && s.searchParams.delete(c);
        e.removeQueryParameters === !0 && (s.search = ""), e.sortQueryParameters && s.searchParams.sort(), e.removeTrailingSlash && (s.pathname = s.pathname.replace(/\/$/, ""));
        const a = n;
        return n = s.toString(), !e.removeSingleSlash && s.pathname === "/" && !a.endsWith("/") && s.hash === "" && (n = n.replace(/\/$/, "")), (e.removeTrailingSlash || s.pathname === "/") && s.hash === "" && e.removeSingleSlash && (n = n.replace(/\/$/, "")), t && !e.normalizeProtocol && (n = n.replace(/^http:\/\//, "//")), e.stripProtocol && (n = n.replace(/^(?:https?:)?\/\//, "")), n
    }

    function bn(n) {
        n.offsetHeight
    }
    async function ft(n) {
        return getComputedStyle(n).getPropertyValue("transition-duration") === "0s" ? Promise.resolve() : new Promise(o => {
            n.addEventListener("transitionend", o, {
                once: !0
            })
        })
    }

    function ht(n) {
        const e = n.getBoundingClientRect().height;
        return Math.max(n.scrollHeight, e)
    }
    async function We(n) {
        const e = n.classList.contains("is-visible");
        if (n.classList.contains("is-collapsing") || e) return;
        n.classList.add("is-collapsing"), n.style.height = "0";
        const o = ht(n);
        n.style.height = `${o}px`, await ft(n), n.classList.add("is-visible"), n.classList.remove("is-collapsing"), n.style.height = ""
    }
    async function ze(n) {
        const e = n.classList.contains("is-visible");
        if (n.classList.contains("is-collapsing") || !e) return;
        const o = ht(n);
        n.style.height = `${o}px`, bn(n), n.classList.add("is-collapsing"), n.classList.remove("is-visible"), n.style.height = "", await ft(n), n.classList.remove("is-collapsing")
    }

    function wn(n, e, t) {
        n.setAttribute("aria-expanded", "true"), e.setAttribute("aria-hidden", "false"), t && t.setAttribute("aria-expanded", "true")
    }

    function vn(n, e, t) {
        n.setAttribute("aria-expanded", "false"), e.setAttribute("aria-hidden", "true"), t && t.setAttribute("aria-expanded", "false")
    }

    function En(n, e) {
        n.removeAttribute("aria-expanded"), e.removeAttribute("aria-hidden")
    }

    function kn(n) {
        n.forEach(e => {
            e.setAttribute("aria-expanded", "true")
        })
    }

    function xn(n) {
        n.forEach(e => {
            e.setAttribute("aria-expanded", "false")
        })
    }
    const Z = {
        afterMenuIsOpened: wn,
        afterMenuIsClosed: vn,
        clear: En,
        afterMobileMenuIsOpened: kn,
        afterMobileMenuIsClosed: xn
    };
    class An extends He {
        constructor() {
            super(...arguments);
            z(this, "responsiveOpenClass", "breakdance-responsive-menu--open");
            z(this, "bottomClass", "breakdance-responsive-menu--bottom")
        }
        canCollapse() {
            const {
                mode: t
            } = this.parent.options.mobile, o = ["offcanvas", "fullscreen"].includes(t);
            return this.parent.isMobile() && !o
        }
        getList() {
            return this.query(".breakdance-menu-list")
        }
        getAllToggle() {
            return this.queryAll(".breakdance-menu-toggle")
        }
        getAllCloseButtons() {
            return this.queryAll(".breakdance-menu-close-button")
        }
        getAllBackButtons() {
            return this.queryAll(".breakdance-dropdown-back-button")
        }
        getAllCollapsibleColumns() {
            return this.queryAll(".breakdance-menu--collapse .breakdance-dropdown-column--collapsible").map(t => wt(t, this.parent))
        }
        getAllDropdowns() {
            return this.queryAll(".breakdance-dropdown").map(t => ie(t, this.parent))
        }
        getAllCustomDropdowns() {
            return this.queryAll(".breakdance-dropdown--custom").map(t => ie(t, this.parent))
        }
        getAllLinks() {
            return this.queryAll("a.breakdance-menu-link, a.breakdance-link, a.breakdance-dropdown-link")
        }
        getAllFloaters() {
            return this.queryAll(".breakdance-dropdown-floater")
        }
        getOpenDropdown() {
            const t = this.query(".breakdance-dropdown--open");
            return t ? ie(t, this.parent) : null
        }
        getOverlay() {
            return this.query(".breakdance-menu-overlay")
        }
        isMobileMenuOpen() {
            return this.has(this.responsiveOpenClass)
        }
        shouldStopScrolling() {
            const {
                mode: t
            } = this.parent.options.mobile;
            return ["offcanvas", "fullscreen"].includes(t)
        }
        async openMobileMenu() {
            const t = this.getList();
            this.reposition(), this.add(this.responsiveOpenClass), document.documentElement.classList.add("is-breakdance-menu-open"), this.shouldStopScrolling() && document.documentElement.classList.add("bde-stop-scrolling"), this.canCollapse() && await We(t), Z.afterMobileMenuIsOpened(this.getAllToggle())
        }
        async closeMobileMenu() {
            if (!this.isMobileMenuOpen()) return;
            const t = this.getList();
            this.remove(this.responsiveOpenClass), this.canCollapse() && await ze(t), document.documentElement.classList.remove("is-breakdance-menu-open"), document.documentElement.classList.remove("bde-stop-scrolling"), this.closeAllDropdowns(), Z.afterMobileMenuIsClosed(this.getAllToggle())
        }
        async toggleMobileMenu() {
            this.getList().classList.contains("is-collapsing") || (this.isMobileMenuOpen() ? await this.closeMobileMenu() : await this.openMobileMenu())
        }
        reposition() {
            this.isBottom() ? this.add(this.bottomClass) : this.remove(this.bottomClass), this.calcMobileOffset()
        }
        calcMobileOffset() {
            const t = this.isBottom() ? "bottom" : "top",
                o = $n(this.getList(), t);
            this.setVariable("mobile-buffer-y", `${o}px`), this.alignMobileMenuToLeftEdgeOfTheViewport()
        }
        alignMobileMenuToLeftEdgeOfTheViewport() {
            const t = this.getList();
            this.setVariable("mobile-offset-x", null);
            const {
                left: o
            } = t.getBoundingClientRect();
            this.setVariable("mobile-offset-x", `-${Math.abs(o)}px`)
        }
        closeAllDropdowns() {
            this.getAllDropdowns().forEach(t => t.close())
        }
        closeAllDropdownsExceptFor(t) {
            this.getAllDropdowns().filter(o => o.get() !== t.get()).forEach(o => o.close())
        }
        closeAllColumns() {
            this.getAllCollapsibleColumns().forEach(t => t.close())
        }
        isBottom() {
            const {
                y: t
            } = this.getAllToggle()[0].getBoundingClientRect();
            return t > window.innerHeight * .65
        }
        focusInside() {
            const t = this.getAllLinks();
            setTimeout(() => {
                t.length && t[0].focus()
            }, 50)
        }
        focusToggle() {
            this.getAllToggle()[0].focus()
        }
    }
    class Cn extends He {
        getLinks() {
            return this.query(".breakdance-dropdown-links")
        }
        getTitle() {
            return this.query(".breakdance-dropdown-column__title")
        }
        getDropdown() {
            const e = this.get().closest(".breakdance-dropdown");
            return ie(e, this.parent)
        }
        isOpen() {
            return this.has("breakdance-dropdown-column--open")
        }
        async open() {
            const e = this.getLinks();
            this.add("breakdance-dropdown-column--open"), Z.afterMenuIsOpened(this.getTitle(), e), await We(e)
        }
        async close() {
            const e = this.getLinks();
            this.remove("breakdance-dropdown-column--open"), Z.afterMenuIsClosed(this.getTitle(), e), await ze(e)
        }
        async toggle() {
            this.isOpen() ? await this.close() : await this.open()
        }
    }
    let ne = null,
        me = null;

    function pt() {
        me = null, ne == null || ne.abort()
    }

    function gt(n, e) {
        if (!me) return !1;
        const {
            bottom: t,
            left: o,
            right: s,
            top: a
        } = me;
        return e >= Math.floor(a) && e <= t && n > o && n < s
    }

    function Ln(n) {
        ne && ne.abort(), ne = new AbortController;
        const e = t => {
            const o = n.getToggle().getBoundingClientRect(),
                s = n.getFloater().getBoundingClientRect();
            o.top > s.top ? me = {
                top: s.bottom,
                bottom: o.top,
                left: s.left,
                right: s.right
            } : me = {
                top: o.bottom,
                bottom: s.top,
                left: s.left,
                right: s.right
            };
            const a = t.target,
                c = gt(t.clientX, t.clientY),
                u = n.get().contains(a);
            c || u || (n.close(), pt())
        };
        addEventListener("mousemove", e, {
            signal: ne.signal
        })
    }

    function Tn(n) {
        const {
            homeUrl: e
        } = BreakdanceFrontend.data, t = n.getAttribute("href");
        if (t) try {
            const o = new URL(t, e).href;
            if (Mn(location.href, o)) {
                const a = n.classList.contains("breakdance-dropdown-link"),
                    c = a ? "breakdance-dropdown-item--active" : "breakdance-menu-item--active";
                (a ? n.parentElement : n.closest(".breakdance-menu-item")).classList.add(c), n.setAttribute("aria-current", "page")
            }
        } catch {}
    }

    function On(n) {
        try {
            const {
                matchMedia: e
            } = BreakdanceFrontend.utils, {
                BASE_BREAKPOINT_ID: t
            } = BreakdanceFrontend.data;
            return n === t ? !0 : e(n)
        } catch {
            return window.matchMedia("(max-width: 767px)").matches
        }
    }

    function Dn(n, e) {
        const t = document.createElement("span");
        return t.classList.add("breakdance-menu-overlay"), t.addEventListener("click", () => {
            n.closeMobileMenu()
        }, {
            signal: e.signal
        }), t
    }

    function Mn(n, e) {
        if (n === e) return !0;
        if (!e) return !1;
        const t = {
            defaultProtocol: "https:"
        };
        return dt(n, t) === dt(e, t)
    }

    function _n() {
        try {
            return window.parent.Breakdance
        } catch {
            return null
        }
    }

    function je(n) {
        return n ? ["spacing-bar", "node-titlebar-wrapper"].some(o => n.classList.contains(o)) : !1
    }

    function In(n, e) {
        const t = e.get(),
            o = n.target,
            s = V(n, e.parent),
            a = s == null ? void 0 : s.get(),
            c = a && t.contains(a);
        return je(o) ? !1 : !s || !c
    }

    function mt() {
        return window.innerWidth || document.documentElement.clientWidth
    }

    function yt() {
        return window.innerWidth - document.documentElement.clientWidth
    }

    function Fn(n) {
        return n === "full-width" ? `calc(100vw - ${yt()}px)` : `${Math.min(n,mt())}px`
    }
    const Pn = {
        name: "viewportCenter",
        fn({
            y: n,
            elements: e
        }) {
            const t = e.floating.getBoundingClientRect(),
                o = yt(),
                s = mt() - o;
            return {
                x: (t.x - (s - t.width) / 2) * -1,
                y: n
            }
        }
    };

    function $n(n, e = "top") {
        const t = n.getBoundingClientRect();
        return e === "bottom" ? window.innerHeight - t.bottom : t.top
    }

    function qe(n, e, t, o) {
        (Array.isArray(e) ? e : [e]).forEach(a => {
            a.addEventListener(n, t, o)
        })
    }

    function bt(n, e) {
        return new An(n, e)
    }

    function ie(n, e) {
        return new ti(n, e)
    }

    function wt(n, e) {
        return new Cn(n, e)
    }

    function oe(n) {
        return n.split("-")[0]
    }

    function se(n) {
        return n.split("-")[1]
    }

    function ye(n) {
        return ["top", "bottom"].includes(oe(n)) ? "x" : "y"
    }

    function Ve(n) {
        return n === "y" ? "height" : "width"
    }

    function vt(n, e, t) {
        let {
            reference: o,
            floating: s
        } = n;
        const a = o.x + o.width / 2 - s.width / 2,
            c = o.y + o.height / 2 - s.height / 2,
            u = ye(e),
            p = Ve(u),
            g = o[p] / 2 - s[p] / 2,
            m = u === "x";
        let h;
        switch (oe(e)) {
            case "top":
                h = {
                    x: a,
                    y: o.y - s.height
                };
                break;
            case "bottom":
                h = {
                    x: a,
                    y: o.y + o.height
                };
                break;
            case "right":
                h = {
                    x: o.x + o.width,
                    y: c
                };
                break;
            case "left":
                h = {
                    x: o.x - s.width,
                    y: c
                };
                break;
            default:
                h = {
                    x: o.x,
                    y: o.y
                }
        }
        switch (se(e)) {
            case "start":
                h[u] -= g * (t && m ? -1 : 1);
                break;
            case "end":
                h[u] += g * (t && m ? -1 : 1)
        }
        return h
    }
    const Rn = async (n, e, t) => {
        const {
            placement: o = "bottom",
            strategy: s = "absolute",
            middleware: a = [],
            platform: c
        } = t, u = a.filter(Boolean), p = await (c.isRTL == null ? void 0 : c.isRTL(e));
        let g = await c.getElementRects({
                reference: n,
                floating: e,
                strategy: s
            }),
            {
                x: m,
                y: h
            } = vt(g, o, p),
            d = o,
            f = {},
            b = 0;
        for (let w = 0; w < u.length; w++) {
            const {
                name: k,
                fn: O
            } = u[w], {
                x: T,
                y: D,
                data: I,
                reset: M
            } = await O({
                x: m,
                y: h,
                initialPlacement: o,
                placement: d,
                strategy: s,
                middlewareData: f,
                rects: g,
                platform: c,
                elements: {
                    reference: n,
                    floating: e
                }
            });
            m = T ? ? m, h = D ? ? h, f = { ...f,
                [k]: { ...f[k],
                    ...I
                }
            }, M && b <= 50 && (b++, typeof M == "object" && (M.placement && (d = M.placement), M.rects && (g = M.rects === !0 ? await c.getElementRects({
                reference: n,
                floating: e,
                strategy: s
            }) : M.rects), {
                x: m,
                y: h
            } = vt(g, d, p)), w = -1)
        }
        return {
            x: m,
            y: h,
            placement: d,
            strategy: s,
            middlewareData: f
        }
    };

    function Et(n) {
        return typeof n != "number" ? function(e) {
            return {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
                ...e
            }
        }(n) : {
            top: n,
            right: n,
            bottom: n,
            left: n
        }
    }

    function Ce(n) {
        return { ...n,
            top: n.y,
            left: n.x,
            right: n.x + n.width,
            bottom: n.y + n.height
        }
    }
    async function Ue(n, e) {
        var t;
        e === void 0 && (e = {});
        const {
            x: o,
            y: s,
            platform: a,
            rects: c,
            elements: u,
            strategy: p
        } = n, {
            boundary: g = "clippingAncestors",
            rootBoundary: m = "viewport",
            elementContext: h = "floating",
            altBoundary: d = !1,
            padding: f = 0
        } = e, b = Et(f), w = u[d ? h === "floating" ? "reference" : "floating" : h], k = Ce(await a.getClippingRect({
            element: (t = await (a.isElement == null ? void 0 : a.isElement(w))) == null || t ? w : w.contextElement || await (a.getDocumentElement == null ? void 0 : a.getDocumentElement(u.floating)),
            boundary: g,
            rootBoundary: m,
            strategy: p
        })), O = Ce(a.convertOffsetParentRelativeRectToViewportRelativeRect ? await a.convertOffsetParentRelativeRectToViewportRelativeRect({
            rect: h === "floating" ? { ...c.floating,
                x: o,
                y: s
            } : c.reference,
            offsetParent: await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(u.floating)),
            strategy: p
        }) : c[h]);
        return {
            top: k.top - O.top + b.top,
            bottom: O.bottom - k.bottom + b.bottom,
            left: k.left - O.left + b.left,
            right: O.right - k.right + b.right
        }
    }
    const Bn = Math.min,
        Sn = Math.max;

    function Ne(n, e, t) {
        return Sn(n, Bn(e, t))
    }
    const Hn = n => ({
            name: "arrow",
            options: n,
            async fn(e) {
                const {
                    element: t,
                    padding: o = 0
                } = n ? ? {}, {
                    x: s,
                    y: a,
                    placement: c,
                    rects: u,
                    platform: p
                } = e;
                if (t == null) return {};
                const g = Et(o),
                    m = {
                        x: s,
                        y: a
                    },
                    h = ye(c),
                    d = se(c),
                    f = Ve(h),
                    b = await p.getDimensions(t),
                    w = h === "y" ? "top" : "left",
                    k = h === "y" ? "bottom" : "right",
                    O = u.reference[f] + u.reference[h] - m[h] - u.floating[f],
                    T = m[h] - u.reference[h],
                    D = await (p.getOffsetParent == null ? void 0 : p.getOffsetParent(t));
                let I = D ? h === "y" ? D.clientHeight || 0 : D.clientWidth || 0 : 0;
                I === 0 && (I = u.floating[f]);
                const M = O / 2 - T / 2,
                    U = g[w],
                    Y = I - b[f] - g[k],
                    _ = I / 2 - b[f] / 2 + M,
                    F = Ne(U, _, Y),
                    j = (d === "start" ? g[w] : g[k]) > 0 && _ !== F && u.reference[f] <= u.floating[f];
                return {
                    [h]: m[h] - (j ? _ < U ? U - _ : Y - _ : 0),
                    data: {
                        [h]: F,
                        centerOffset: _ - F
                    }
                }
            }
        }),
        Wn = {
            left: "right",
            right: "left",
            bottom: "top",
            top: "bottom"
        };

    function Le(n) {
        return n.replace(/left|right|bottom|top/g, e => Wn[e])
    }

    function kt(n, e, t) {
        t === void 0 && (t = !1);
        const o = se(n),
            s = ye(n),
            a = Ve(s);
        let c = s === "x" ? o === (t ? "end" : "start") ? "right" : "left" : o === "start" ? "bottom" : "top";
        return e.reference[a] > e.floating[a] && (c = Le(c)), {
            main: c,
            cross: Le(c)
        }
    }
    const zn = {
        start: "end",
        end: "start"
    };

    function Ke(n) {
        return n.replace(/start|end/g, e => zn[e])
    }
    const jn = ["top", "right", "bottom", "left"],
        qn = jn.reduce((n, e) => n.concat(e, e + "-start", e + "-end"), []),
        Vn = function(n) {
            return n === void 0 && (n = {}), {
                name: "autoPlacement",
                options: n,
                async fn(e) {
                    var t, o, s, a, c;
                    const {
                        x: u,
                        y: p,
                        rects: g,
                        middlewareData: m,
                        placement: h,
                        platform: d,
                        elements: f
                    } = e, {
                        alignment: b = null,
                        allowedPlacements: w = qn,
                        autoAlignment: k = !0,
                        ...O
                    } = n, T = function(B, le, ce) {
                        return (B ? [...ce.filter(H => se(H) === B), ...ce.filter(H => se(H) !== B)] : ce.filter(H => oe(H) === H)).filter(H => !B || se(H) === B || !!le && Ke(H) !== H)
                    }(b, k, w), D = await Ue(e, O), I = (t = (o = m.autoPlacement) == null ? void 0 : o.index) != null ? t : 0, M = T[I];
                    if (M == null) return {};
                    const {
                        main: U,
                        cross: Y
                    } = kt(M, g, await (d.isRTL == null ? void 0 : d.isRTL(f.floating)));
                    if (h !== M) return {
                        x: u,
                        y: p,
                        reset: {
                            placement: T[0]
                        }
                    };
                    const _ = [D[oe(M)], D[U], D[Y]],
                        F = [...(s = (a = m.autoPlacement) == null ? void 0 : a.overflows) != null ? s : [], {
                            placement: M,
                            overflows: _
                        }],
                        j = T[I + 1];
                    if (j) return {
                        data: {
                            index: I + 1,
                            overflows: F
                        },
                        reset: {
                            placement: j
                        }
                    };
                    const ae = F.slice().sort((B, le) => B.overflows[0] - le.overflows[0]),
                        Q = (c = ae.find(B => {
                            let {
                                overflows: le
                            } = B;
                            return le.every(ce => ce <= 0)
                        })) == null ? void 0 : c.placement,
                        N = Q ? ? ae[0].placement;
                    return N !== h ? {
                        data: {
                            index: I + 1,
                            overflows: F
                        },
                        reset: {
                            placement: N
                        }
                    } : {}
                }
            }
        },
        Un = function(n) {
            return n === void 0 && (n = {}), {
                name: "flip",
                options: n,
                async fn(e) {
                    var t;
                    const {
                        placement: o,
                        middlewareData: s,
                        rects: a,
                        initialPlacement: c,
                        platform: u,
                        elements: p
                    } = e, {
                        mainAxis: g = !0,
                        crossAxis: m = !0,
                        fallbackPlacements: h,
                        fallbackStrategy: d = "bestFit",
                        flipAlignment: f = !0,
                        ...b
                    } = n, w = oe(o), k = h || (w === c || !f ? [Le(c)] : function(_) {
                        const F = Le(_);
                        return [Ke(_), F, Ke(F)]
                    }(c)), O = [c, ...k], T = await Ue(e, b), D = [];
                    let I = ((t = s.flip) == null ? void 0 : t.overflows) || [];
                    if (g && D.push(T[w]), m) {
                        const {
                            main: _,
                            cross: F
                        } = kt(o, a, await (u.isRTL == null ? void 0 : u.isRTL(p.floating)));
                        D.push(T[_], T[F])
                    }
                    if (I = [...I, {
                            placement: o,
                            overflows: D
                        }], !D.every(_ => _ <= 0)) {
                        var M, U;
                        const _ = ((M = (U = s.flip) == null ? void 0 : U.index) != null ? M : 0) + 1,
                            F = O[_];
                        if (F) return {
                            data: {
                                index: _,
                                overflows: I
                            },
                            reset: {
                                placement: F
                            }
                        };
                        let j = "bottom";
                        switch (d) {
                            case "bestFit":
                                {
                                    var Y;
                                    const ae = (Y = I.map(Q => [Q, Q.overflows.filter(N => N > 0).reduce((N, B) => N + B, 0)]).sort((Q, N) => Q[1] - N[1])[0]) == null ? void 0 : Y[0].placement;ae && (j = ae);
                                    break
                                }
                            case "initialPlacement":
                                j = c
                        }
                        if (o !== j) return {
                            reset: {
                                placement: j
                            }
                        }
                    }
                    return {}
                }
            }
        },
        Nn = function(n) {
            return n === void 0 && (n = 0), {
                name: "offset",
                options: n,
                async fn(e) {
                    const {
                        x: t,
                        y: o
                    } = e, s = await async function(a, c) {
                        const {
                            placement: u,
                            platform: p,
                            elements: g
                        } = a, m = await (p.isRTL == null ? void 0 : p.isRTL(g.floating)), h = oe(u), d = se(u), f = ye(u) === "x", b = ["left", "top"].includes(h) ? -1 : 1, w = m && f ? -1 : 1, k = typeof c == "function" ? c(a) : c;
                        let {
                            mainAxis: O,
                            crossAxis: T,
                            alignmentAxis: D
                        } = typeof k == "number" ? {
                            mainAxis: k,
                            crossAxis: 0,
                            alignmentAxis: null
                        } : {
                            mainAxis: 0,
                            crossAxis: 0,
                            alignmentAxis: null,
                            ...k
                        };
                        return d && typeof D == "number" && (T = d === "end" ? -1 * D : D), f ? {
                            x: T * w,
                            y: O * b
                        } : {
                            x: O * b,
                            y: T * w
                        }
                    }(e, n);
                    return {
                        x: t + s.x,
                        y: o + s.y,
                        data: s
                    }
                }
            }
        };

    function Kn(n) {
        return n === "x" ? "y" : "x"
    }
    const xt = function(n) {
        return n === void 0 && (n = {}), {
            name: "shift",
            options: n,
            async fn(e) {
                const {
                    x: t,
                    y: o,
                    placement: s
                } = e, {
                    mainAxis: a = !0,
                    crossAxis: c = !1,
                    limiter: u = {
                        fn: k => {
                            let {
                                x: O,
                                y: T
                            } = k;
                            return {
                                x: O,
                                y: T
                            }
                        }
                    },
                    ...p
                } = n, g = {
                    x: t,
                    y: o
                }, m = await Ue(e, p), h = ye(oe(s)), d = Kn(h);
                let f = g[h],
                    b = g[d];
                if (a) {
                    const k = h === "y" ? "bottom" : "right";
                    f = Ne(f + m[h === "y" ? "top" : "left"], f, f - m[k])
                }
                if (c) {
                    const k = d === "y" ? "bottom" : "right";
                    b = Ne(b + m[d === "y" ? "top" : "left"], b, b - m[k])
                }
                const w = u.fn({ ...e,
                    [h]: f,
                    [d]: b
                });
                return { ...w,
                    data: {
                        x: w.x - t,
                        y: w.y - o
                    }
                }
            }
        }
    };

    function At(n) {
        return n && n.document && n.location && n.alert && n.setInterval
    }

    function R(n) {
        if (n == null) return window;
        if (!At(n)) {
            const e = n.ownerDocument;
            return e && e.defaultView || window
        }
        return n
    }

    function K(n) {
        return R(n).getComputedStyle(n)
    }

    function ee(n) {
        return At(n) ? "" : n ? (n.nodeName || "").toLowerCase() : ""
    }

    function Ct() {
        const n = navigator.userAgentData;
        return n && Array.isArray(n.brands) ? n.brands.map(e => e.brand + "/" + e.version).join(" ") : navigator.userAgent
    }

    function G(n) {
        try {
            return n instanceof R(n).HTMLElement || n instanceof R(n).parent.HTMLElement
        } catch {
            return n instanceof R(n).HTMLElement
        }
    }

    function he(n) {
        try {
            return n instanceof R(n).Element || n instanceof R(n).parent.Element
        } catch {
            return n instanceof R(n).Element
        }
    }

    function Lt(n) {
        return typeof ShadowRoot > "u" ? !1 : n instanceof R(n).ShadowRoot || n instanceof ShadowRoot
    }

    function Te(n) {
        const {
            overflow: e,
            overflowX: t,
            overflowY: o,
            display: s
        } = K(n);
        return /auto|scroll|overlay|hidden/.test(e + o + t) && !["inline", "contents"].includes(s)
    }

    function Gn(n) {
        return ["table", "td", "th"].includes(ee(n))
    }

    function Ge(n) {
        const e = /firefox/i.test(Ct()),
            t = K(n),
            o = t.backdropFilter || t.WebkitBackdropFilter;
        return t.transform !== "none" || t.perspective !== "none" || !!o && o !== "none" || e && t.willChange === "filter" || e && !!t.filter && t.filter !== "none" || ["transform", "perspective"].some(s => t.willChange.includes(s)) || ["paint", "layout", "strict", "content"].some(s => {
            const a = t.contain;
            return a != null && a.includes(s)
        })
    }

    function Tt() {
        return !/^((?!chrome|android).)*safari/i.test(Ct())
    }

    function Ye(n) {
        return ["html", "body", "#document"].includes(ee(n))
    }
    const Ot = Math.min,
        be = Math.max,
        Oe = Math.round;

    function re(n, e, t) {
        var o, s, a, c;
        e === void 0 && (e = !1), t === void 0 && (t = !1);
        const u = n.getBoundingClientRect();
        let p = 1,
            g = 1;
        e && G(n) && (p = n.offsetWidth > 0 && Oe(u.width) / n.offsetWidth || 1, g = n.offsetHeight > 0 && Oe(u.height) / n.offsetHeight || 1);
        const m = he(n) ? R(n) : window,
            h = !Tt() && t,
            d = (u.left + (h && (o = (s = m.visualViewport) == null ? void 0 : s.offsetLeft) != null ? o : 0)) / p,
            f = (u.top + (h && (a = (c = m.visualViewport) == null ? void 0 : c.offsetTop) != null ? a : 0)) / g,
            b = u.width / p,
            w = u.height / g;
        return {
            width: b,
            height: w,
            top: f,
            right: d + b,
            bottom: f + w,
            left: d,
            x: d,
            y: f
        }
    }

    function te(n) {
        return (e = n, (e instanceof R(e).Node || e instanceof R(e).parent.Node ? n.ownerDocument : n.document) || window.document).documentElement;
        var e
    }

    function De(n) {
        return he(n) ? {
            scrollLeft: n.scrollLeft,
            scrollTop: n.scrollTop
        } : {
            scrollLeft: n.pageXOffset,
            scrollTop: n.pageYOffset
        }
    }

    function Dt(n) {
        return re(te(n)).left + De(n).scrollLeft
    }

    function Yn(n, e, t) {
        const o = G(e),
            s = te(e),
            a = re(n, o && function(p) {
                const g = re(p);
                return Oe(g.width) !== p.offsetWidth || Oe(g.height) !== p.offsetHeight
            }(e), t === "fixed");
        let c = {
            scrollLeft: 0,
            scrollTop: 0
        };
        const u = {
            x: 0,
            y: 0
        };
        if (o || !o && t !== "fixed")
            if ((ee(e) !== "body" || Te(s)) && (c = De(e)), G(e)) {
                const p = re(e, !0);
                u.x = p.x + e.clientLeft, u.y = p.y + e.clientTop
            } else s && (u.x = Dt(s));
        return {
            x: a.left + c.scrollLeft - u.x,
            y: a.top + c.scrollTop - u.y,
            width: a.width,
            height: a.height
        }
    }

    function we(n) {
        if (ee(n) === "html") return n;
        const e = n.assignedSlot || n.parentNode || (Lt(n) ? n.host : null) || te(n);
        return Lt(e) ? e.host : e
    }

    function Mt(n) {
        return G(n) && K(n).position !== "fixed" ? n.offsetParent : null
    }

    function _t(n) {
        const e = R(n);
        let t = Mt(n);
        for (; t && Gn(t) && K(t).position === "static";) t = Mt(t);
        return t && (ee(t) === "html" || ee(t) === "body" && K(t).position === "static" && !Ge(t)) ? e : t || function(o) {
            let s = we(o);
            for (; G(s) && !Ye(s);) {
                if (Ge(s)) return s;
                s = we(s)
            }
            return null
        }(n) || e
    }

    function It(n) {
        const e = we(n);
        return Ye(e) ? n.ownerDocument.body : G(e) && Te(e) ? e : It(e)
    }

    function Ft(n, e) {
        var t;
        e === void 0 && (e = []);
        const o = It(n),
            s = o === ((t = n.ownerDocument) == null ? void 0 : t.body),
            a = R(o),
            c = s ? [a].concat(a.visualViewport || [], Te(o) ? o : []) : o,
            u = e.concat(c);
        return s ? u : u.concat(Ft(c))
    }

    function Pt(n, e, t) {
        return e === "viewport" ? Ce(function(o, s) {
            const a = R(o),
                c = te(o),
                u = a.visualViewport;
            let p = c.clientWidth,
                g = c.clientHeight,
                m = 0,
                h = 0;
            if (u) {
                p = u.width, g = u.height;
                const d = Tt();
                (d || !d && s === "fixed") && (m = u.offsetLeft, h = u.offsetTop)
            }
            return {
                width: p,
                height: g,
                x: m,
                y: h
            }
        }(n, t)) : he(e) ? function(o, s) {
            const a = re(o, !1, s === "fixed"),
                c = a.top + o.clientTop,
                u = a.left + o.clientLeft;
            return {
                top: c,
                left: u,
                x: u,
                y: c,
                right: u + o.clientWidth,
                bottom: c + o.clientHeight,
                width: o.clientWidth,
                height: o.clientHeight
            }
        }(e, t) : Ce(function(o) {
            var s;
            const a = te(o),
                c = De(o),
                u = (s = o.ownerDocument) == null ? void 0 : s.body,
                p = be(a.scrollWidth, a.clientWidth, u ? u.scrollWidth : 0, u ? u.clientWidth : 0),
                g = be(a.scrollHeight, a.clientHeight, u ? u.scrollHeight : 0, u ? u.clientHeight : 0);
            let m = -c.scrollLeft + Dt(o);
            const h = -c.scrollTop;
            return K(u || a).direction === "rtl" && (m += be(a.clientWidth, u ? u.clientWidth : 0) - p), {
                width: p,
                height: g,
                x: m,
                y: h
            }
        }(te(n)))
    }
    const Qn = {
            getClippingRect: function(n) {
                let {
                    element: e,
                    boundary: t,
                    rootBoundary: o,
                    strategy: s
                } = n;
                const a = t === "clippingAncestors" ? function(g) {
                        let m = Ft(g).filter(b => he(b) && ee(b) !== "body"),
                            h = null;
                        const d = K(g).position === "fixed";
                        let f = d ? we(g) : g;
                        for (; he(f) && !Ye(f);) {
                            const b = K(f),
                                w = Ge(f);
                            (d ? w || h : w || b.position !== "static" || !h || !["absolute", "fixed"].includes(h.position)) ? h = b: m = m.filter(k => k !== f), f = we(f)
                        }
                        return m
                    }(e) : [].concat(t),
                    c = [...a, o],
                    u = c[0],
                    p = c.reduce((g, m) => {
                        const h = Pt(e, m, s);
                        return g.top = be(h.top, g.top), g.right = Ot(h.right, g.right), g.bottom = Ot(h.bottom, g.bottom), g.left = be(h.left, g.left), g
                    }, Pt(e, u, s));
                return {
                    width: p.right - p.left,
                    height: p.bottom - p.top,
                    x: p.left,
                    y: p.top
                }
            },
            convertOffsetParentRelativeRectToViewportRelativeRect: function(n) {
                let {
                    rect: e,
                    offsetParent: t,
                    strategy: o
                } = n;
                const s = G(t),
                    a = te(t);
                if (t === a) return e;
                let c = {
                    scrollLeft: 0,
                    scrollTop: 0
                };
                const u = {
                    x: 0,
                    y: 0
                };
                if ((s || !s && o !== "fixed") && ((ee(t) !== "body" || Te(a)) && (c = De(t)), G(t))) {
                    const p = re(t, !0);
                    u.x = p.x + t.clientLeft, u.y = p.y + t.clientTop
                }
                return { ...e,
                    x: e.x - c.scrollLeft + u.x,
                    y: e.y - c.scrollTop + u.y
                }
            },
            isElement: he,
            getDimensions: function(n) {
                if (G(n)) return {
                    width: n.offsetWidth,
                    height: n.offsetHeight
                };
                const e = re(n);
                return {
                    width: e.width,
                    height: e.height
                }
            },
            getOffsetParent: _t,
            getDocumentElement: te,
            async getElementRects(n) {
                let {
                    reference: e,
                    floating: t,
                    strategy: o
                } = n;
                const s = this.getOffsetParent || _t,
                    a = this.getDimensions;
                return {
                    reference: Yn(e, await s(t), o),
                    floating: {
                        x: 0,
                        y: 0,
                        ...await a(t)
                    }
                }
            },
            getClientRects: n => Array.from(n.getClientRects()),
            isRTL: n => K(n).direction === "rtl"
        },
        $t = (n, e, t) => Rn(n, e, {
            platform: Qn,
            ...t
        }),
        Xn = (n, e, t) => {
            e.createCaretIfDoesntExist();
            const o = e.getFloater(),
                s = e.getToggle(),
                a = e.getCaret(),
                c = () => {
                    const g = "bottom";
                    return {
                        center: g,
                        left: `${g}-start`,
                        right: `${g}-end`,
                        "full-width": g,
                        "section-width": `${g}-start`
                    }[t]
                },
                u = () => parseInt(n.getVariable("dropdown-edge-offset"), 10),
                p = () => {
                    const m = getComputedStyle(e.getFloater()).getPropertyValue("--bde-dropdown-width");
                    if (m.endsWith("%")) {
                        const h = m.replace("%", "vw");
                        e.getFloater().style.setProperty("--bde-dropdown-width", h)
                    }
                };
            return {
                async align() {
                    const g = u(),
                        m = c(),
                        h = [xt({
                            padding: g
                        }), Un(), Hn({
                            element: a
                        })];
                    t === "section-width" && (h.unshift(Pn), p());
                    const {
                        x: d,
                        y: f,
                        middlewareData: b,
                        placement: w
                    } = await $t(s, o, {
                        placement: m,
                        middleware: h
                    });
                    if (e.setVariables({
                            "dropdown-offset-x": `${d}px`,
                            "dropdown-offset-y": `${f}px`
                        }), b.arrow) {
                        const {
                            x: k,
                            y: O,
                            centerOffset: T
                        } = b.arrow;
                        e.alignCaret(w, k, O, T)
                    }
                    w.startsWith("top") ? e.add("breakdance-dropdown--top") : e.remove("breakdance-dropdown--top")
                },
                beforeOpen() {},
                beforeClose() {}
            }
        },
        Jn = (n, e, t) => ({
            align() {},
            beforeOpen() {},
            beforeClose() {}
        }),
        Zn = (n, e, t) => ({
            align() {
                const o = n.bounds(),
                    s = e.bounds(),
                    a = o.y - s.y;
                e.setVariable("dropdown-offset-y", `${a}px`)
            },
            beforeOpen() {
                if (e.createBackButtonIfDoesntExist(), e.parent.isDesktop()) {
                    const s = e.getFloater().getBoundingClientRect();
                    n.setVariable("menu-height", `${s.height}px`)
                }
            },
            beforeClose() {
                n.removeVariable("menu-height")
            }
        }),
        ei = (n, e, t) => {
            const o = e.getFloater(),
                s = e.getToggle();
            return {
                async align() {
                    const a = [Nn(10), xt(), Vn({
                            allowedPlacements: ["right", "right-start", "right-end", "bottom", "bottom-start", "bottom-end"],
                            alignment: "start"
                        })],
                        {
                            x: c,
                            y: u
                        } = await $t(s, o, {
                            middleware: a
                        });
                    e.setVariables({
                        "dropdown-offset-x": `${c}px`,
                        "dropdown-offset-y": `${u}px`
                    })
                },
                beforeOpen() {},
                beforeClose() {}
            }
        };
    class ti extends He {
        canCollapse() {
            return this.parent.getCurrentDropdownMode() === "accordion"
        }
        isOpen() {
            return this.has("breakdance-dropdown--open")
        }
        getToggle() {
            return this.query(".breakdance-menu-link")
        }
        getArrow() {
            return this.query(".breakdance-menu-link-arrow")
        }
        getFloater() {
            return this.query(".breakdance-dropdown-floater")
        }
        getBody() {
            return this.query(".breakdance-dropdown-body")
        }
        getMenu() {
            const e = this.get().closest(".breakdance-menu");
            return bt(e, this.parent)
        }
        getCaret() {
            return this.query(".breakdance-dropdown-caret")
        }
        getBackButton() {
            return this.query(".breakdance-dropdown-back-button")
        }
        hasLink() {
            return this.has("breakdance-dropdown--with-link")
        }
        get mode() {
            const {
                placement: e
            } = this.parent.options.dropdown, t = this.getMenu(), o = this.parent.getCurrentDropdownMode(), s = {
                dropdown: Xn,
                accordion: Jn,
                slide: Zn,
                side: ei
            };
            if (!s[o]) throw new Error(`Unknown dropdown mode "${o}" specified.`);
            return s[o](t, this, e)
        }
        align() {
            this.removeVariable("dropdown-offset-x"), this.removeVariable("dropdown-offset-y"), this.mode.align()
        }
        createBackButtonIfDoesntExist() {
            if (this.getBackButton()) return;
            const e = document.createElement("button");
            e.classList.add("breakdance-dropdown-back-button");
            const t = document.createTextNode("Back");
            e.appendChild(t), this.getBody().prepend(e), e.addEventListener("click", () => {
                this.close()
            })
        }
        createCaretIfDoesntExist() {
            if (this.getCaret()) return;
            const e = document.createElement("span");
            e.classList.add("breakdance-dropdown-caret"), this.getFloater().appendChild(e)
        }
        alignCaret(e, t, o, s) {
            if (t) {
                const c = this.getArrow(),
                    u = c.offsetParent !== null ? c.offsetWidth / 2 : 0;
                this.setVariable("dropdown-caret-x", `${t+u}px`)
            }
            o && this.setVariable("dropdown-caret-y", `${o}px`);
            const a = this.getCaret();
            s !== 0 ? a.classList.add("breakdance-dropdown-caret--hide") : a.classList.remove("breakdance-dropdown-caret--hide")
        }
        async open() {
            if (this.isOpen()) return;
            this.align(), this.mode.beforeOpen();
            const e = this.getFloater(),
                t = this.getToggle(),
                o = this.getArrow();
            this.getMenu().add("breakdance-menu--dp-open"), this.add("breakdance-dropdown--open"), Z.afterMenuIsOpened(t, e, o), this.canCollapse() && await We(e)
        }
        async close() {
            if (!this.isOpen()) return;
            this.mode.beforeClose();
            const e = this.getFloater(),
                t = this.getToggle(),
                o = this.getArrow();
            this.getMenu().remove("breakdance-menu--dp-open"), this.remove("breakdance-dropdown--open"), Z.afterMenuIsClosed(t, e, o), this.canCollapse() && await ze(e)
        }
        async toggle() {
            this.isOpen() ? await this.close() : await this.open()
        }
        getFocusContainer() {
            return this.getFloater()
        }
        focusToggle() {
            const e = this.getArrow();
            if (e && e.offsetParent !== null) {
                e.focus();
                return
            }
            this.getToggle().focus()
        }
    }

    function V(n, e) {
        const o = n.target.closest(".breakdance-dropdown");
        return o ? ie(o, e) : null
    }

    function ni() {
        return {
            dropdown: {
                openOnClick: !1,
                mode: {
                    desktop: "dropdown",
                    mobile: "accordion"
                },
                placement: "left",
                animation: "fade",
                keyboardNavigation: !0,
                clickOutsideToClose: !0,
                overlay: !1
            },
            mobile: {
                showMultiple: !1,
                followLinks: !1,
                mode: "default"
            },
            link: {},
            isBuilder: !1
        }
    }

    function Rt() {
        const n = _n();
        return n == null ? void 0 : n.stores.uiStore.isCanvasElementBeingDragged
    }

    function ii(n, e) {
        const t = e.get();
        t.addEventListener("mouseenter", () => {
            Rt() && (n.closeAllDropdownsExceptFor(e), e.open())
        }, {
            signal: n.parent.ac.signal
        }), t.addEventListener("mouseleave", () => {
            Rt() && e.close()
        }, {
            signal: n.parent.ac.signal
        })
    }

    function oi(n) {
        n.getAllCustomDropdowns().forEach(e => {
            ii(n, e)
        })
    }
    var Bt = {
            exports: {}
        },
        Qe = {
            exports: {}
        },
        St;

    function si() {
        return St || (St = 1, function(n) {
            (function(e, t) {
                n.exports ? n.exports = t() : e.EvEmitter = t()
            })(typeof window < "u" ? window : P, function() {
                function e() {}
                let t = e.prototype;
                return t.on = function(o, s) {
                    if (!o || !s) return this;
                    let a = this._events = this._events || {},
                        c = a[o] = a[o] || [];
                    return c.includes(s) || c.push(s), this
                }, t.once = function(o, s) {
                    if (!o || !s) return this;
                    this.on(o, s);
                    let a = this._onceEvents = this._onceEvents || {},
                        c = a[o] = a[o] || {};
                    return c[s] = !0, this
                }, t.off = function(o, s) {
                    let a = this._events && this._events[o];
                    if (!a || !a.length) return this;
                    let c = a.indexOf(s);
                    return c != -1 && a.splice(c, 1), this
                }, t.emitEvent = function(o, s) {
                    let a = this._events && this._events[o];
                    if (!a || !a.length) return this;
                    a = a.slice(0), s = s || [];
                    let c = this._onceEvents && this._onceEvents[o];
                    for (let u of a) c && c[u] && (this.off(o, u), delete c[u]), u.apply(this, s);
                    return this
                }, t.allOff = function() {
                    return delete this._events, delete this._onceEvents, this
                }, e
            })
        }(Qe)), Qe.exports
    }
    /*!
     * imagesLoaded v5.0.0
     * JavaScript is all like "You images are done yet or what?"
     * MIT License
     */
    (function(n) {
        (function(e, t) {
            n.exports ? n.exports = t(e, si()) : e.imagesLoaded = t(e, e.EvEmitter)
        })(typeof window < "u" ? window : P, function(t, o) {
            let s = t.jQuery,
                a = t.console;

            function c(d) {
                return Array.isArray(d) ? d : typeof d == "object" && typeof d.length == "number" ? [...d] : [d]
            }

            function u(d, f, b) {
                if (!(this instanceof u)) return new u(d, f, b);
                let w = d;
                if (typeof d == "string" && (w = document.querySelectorAll(d)), !w) {
                    a.error(`Bad element for imagesLoaded ${w||d}`);
                    return
                }
                this.elements = c(w), this.options = {}, typeof f == "function" ? b = f : Object.assign(this.options, f), b && this.on("always", b), this.getImages(), s && (this.jqDeferred = new s.Deferred), setTimeout(this.check.bind(this))
            }
            u.prototype = Object.create(o.prototype), u.prototype.getImages = function() {
                this.images = [], this.elements.forEach(this.addElementImages, this)
            };
            const p = [1, 9, 11];
            u.prototype.addElementImages = function(d) {
                d.nodeName === "IMG" && this.addImage(d), this.options.background === !0 && this.addElementBackgroundImages(d);
                let {
                    nodeType: f
                } = d;
                if (!f || !p.includes(f)) return;
                let b = d.querySelectorAll("img");
                for (let w of b) this.addImage(w);
                if (typeof this.options.background == "string") {
                    let w = d.querySelectorAll(this.options.background);
                    for (let k of w) this.addElementBackgroundImages(k)
                }
            };
            const g = /url\((['"])?(.*?)\1\)/gi;
            u.prototype.addElementBackgroundImages = function(d) {
                let f = getComputedStyle(d);
                if (!f) return;
                let b = g.exec(f.backgroundImage);
                for (; b !== null;) {
                    let w = b && b[2];
                    w && this.addBackground(w, d), b = g.exec(f.backgroundImage)
                }
            }, u.prototype.addImage = function(d) {
                let f = new m(d);
                this.images.push(f)
            }, u.prototype.addBackground = function(d, f) {
                let b = new h(d, f);
                this.images.push(b)
            }, u.prototype.check = function() {
                if (this.progressedCount = 0, this.hasAnyBroken = !1, !this.images.length) {
                    this.complete();
                    return
                }
                let d = (f, b, w) => {
                    setTimeout(() => {
                        this.progress(f, b, w)
                    })
                };
                this.images.forEach(function(f) {
                    f.once("progress", d), f.check()
                })
            }, u.prototype.progress = function(d, f, b) {
                this.progressedCount++, this.hasAnyBroken = this.hasAnyBroken || !d.isLoaded, this.emitEvent("progress", [this, d, f]), this.jqDeferred && this.jqDeferred.notify && this.jqDeferred.notify(this, d), this.progressedCount === this.images.length && this.complete(), this.options.debug && a && a.log(`progress: ${b}`, d, f)
            }, u.prototype.complete = function() {
                let d = this.hasAnyBroken ? "fail" : "done";
                if (this.isComplete = !0, this.emitEvent(d, [this]), this.emitEvent("always", [this]), this.jqDeferred) {
                    let f = this.hasAnyBroken ? "reject" : "resolve";
                    this.jqDeferred[f](this)
                }
            };

            function m(d) {
                this.img = d
            }
            m.prototype = Object.create(o.prototype), m.prototype.check = function() {
                if (this.getIsImageComplete()) {
                    this.confirm(this.img.naturalWidth !== 0, "naturalWidth");
                    return
                }
                this.proxyImage = new Image, this.img.crossOrigin && (this.proxyImage.crossOrigin = this.img.crossOrigin), this.proxyImage.addEventListener("load", this), this.proxyImage.addEventListener("error", this), this.img.addEventListener("load", this), this.img.addEventListener("error", this), this.proxyImage.src = this.img.currentSrc || this.img.src
            }, m.prototype.getIsImageComplete = function() {
                return this.img.complete && this.img.naturalWidth
            }, m.prototype.confirm = function(d, f) {
                this.isLoaded = d;
                let {
                    parentNode: b
                } = this.img, w = b.nodeName === "PICTURE" ? b : this.img;
                this.emitEvent("progress", [this, w, f])
            }, m.prototype.handleEvent = function(d) {
                let f = "on" + d.type;
                this[f] && this[f](d)
            }, m.prototype.onload = function() {
                this.confirm(!0, "onload"), this.unbindEvents()
            }, m.prototype.onerror = function() {
                this.confirm(!1, "onerror"), this.unbindEvents()
            }, m.prototype.unbindEvents = function() {
                this.proxyImage.removeEventListener("load", this), this.proxyImage.removeEventListener("error", this), this.img.removeEventListener("load", this), this.img.removeEventListener("error", this)
            };

            function h(d, f) {
                this.url = d, this.element = f, this.img = new Image
            }
            return h.prototype = Object.create(m.prototype), h.prototype.check = function() {
                this.img.addEventListener("load", this), this.img.addEventListener("error", this), this.img.src = this.url, this.getIsImageComplete() && (this.confirm(this.img.naturalWidth !== 0, "naturalWidth"), this.unbindEvents())
            }, h.prototype.unbindEvents = function() {
                this.img.removeEventListener("load", this), this.img.removeEventListener("error", this)
            }, h.prototype.confirm = function(d, f) {
                this.isLoaded = d, this.emitEvent("progress", [this, this.element, f])
            }, u.makeJQueryPlugin = function(d) {
                d = d || t.jQuery, d && (s = d, s.fn.imagesLoaded = function(f, b) {
                    return new u(this, f, b).jqDeferred.promise(s(this))
                })
            }, u.makeJQueryPlugin(), u
        })
    })(Bt);
    var ri = Bt.exports;
    const ai = $(ri),
        Fo = "";
    class li {
        constructor(e, t, o) {
            z(this, "initialized", !1);
            this.am = e, this.menu = t, this.ac = o, Se(this), this.init()
        }
        init() {
            this.initialized || this.am.isMobile() || (this.initialized = !0, this.setColumnTitleAsHeading(), this.bindDropdownListeners(), addEventListener("keydown", this.onEscClick, {
                signal: this.ac.signal
            }), addEventListener("keydown", this.onArrowKeysClick, {
                signal: this.ac.signal
            }))
        }
        destroy() {
            if (!this.initialized) return;
            this.initialized = !1, removeEventListener("keydown", this.onEscClick), removeEventListener("keydown", this.onArrowKeysClick), this.menu.getAllDropdowns().forEach(t => {
                t.getToggle().removeEventListener("keyup", this.onDropdownEnterClick), t.getArrow().removeEventListener("keyup", this.onDropdownEnterClick), t.get().removeEventListener("keydown", this.onDropdownSpaceClick), t.get().removeEventListener("focusout", this.onDropdownFocusOut)
            })
        }
        onResize() {
            this.am.isDesktop() ? this.init() : this.destroy()
        }
        setColumnTitleAsHeading() {
            this.menu.getAllCollapsibleColumns().forEach(e => {
                const t = e.getTitle(),
                    o = e.getLinks();
                Z.clear(t, o), t.setAttribute("role", "heading"), t.removeAttribute("tabindex"), t.setAttribute("aria-level", "3")
            })
        }
        bindDropdownListeners() {
            this.menu.getAllDropdowns().forEach(t => {
                const o = t.get(),
                    s = t.getToggle(),
                    a = t.getArrow();
                s.addEventListener("keyup", this.onDropdownEnterClick, {
                    signal: this.ac.signal
                }), a.addEventListener("keyup", this.onDropdownEnterClick, {
                    signal: this.ac.signal
                }), o.addEventListener("keydown", this.onDropdownSpaceClick, {
                    signal: this.ac.signal
                })
            })
        }
        listenForFocusOut(e) {
            e.get().addEventListener("focusout", this.onDropdownFocusOut, {
                signal: this.ac.signal
            })
        }
        onDropdownEnterClick(e) {
            if (e.key !== "Enter") return;
            const t = V(e, this.am);
            t != null && t.isOpen() && (t.focusInside(), this.listenForFocusOut(t))
        }
        onDropdownSpaceClick(e) {
            if (e.key !== " ") return;
            const t = V(e, this.am);
            t && (e.preventDefault(), t.isOpen() ? (t.close(), t.focusToggle()) : (t.open(), this.listenForFocusOut(t), setTimeout(() => {
                t.focusInside()
            }, 50)))
        }
        onDropdownFocusOut(e) {
            const t = V(e, this.am),
                o = e.relatedTarget,
                s = t == null ? void 0 : t.get().contains(o);
            je(o) || t != null && t.isOpen() && !s && (t.close(), t == null || t.get().removeEventListener("focusout", this.onDropdownFocusOut))
        }
        onEscClick(e) {
            if (e.key !== "Escape") return;
            const t = this.menu.getOpenDropdown();
            t && (t.isFocusWithin() && t.focusToggle(), t.close())
        }
        onArrowKeysClick(e) {
            if (!["ArrowUp", "ArrowDown"].includes(e.key)) return;
            const t = this.menu.getOpenDropdown();
            if (!t || !t.isFocusWithin()) return;
            e.preventDefault();
            const o = t.getFocusableElements(),
                s = o.findIndex(a => a === document.activeElement);
            if (e.key === "ArrowUp") {
                const a = s === 0 ? o.length - 1 : s - 1;
                o[a].focus()
            }
            if (e.key === "ArrowDown") {
                const a = s === o.length - 1 ? 0 : s + 1;
                o[a].focus()
            }
        }
    }
    class ci {
        constructor(e, t, o) {
            z(this, "initialized", !1);
            this.am = e, this.menu = t, this.ac = o, Se(this), this.init()
        }
        init() {
            this.initialized || this.am.isDesktop() || (this.initialized = !0, this.setColumnTitleAsButton(), this.bindColumnListeners(), this.bindDropdownListeners(), this.menu.getAllToggle().forEach(e => {
                e.addEventListener("keypress", this.onTogglePress, {
                    signal: this.ac.signal
                })
            }), addEventListener("keydown", this.onEscClick, {
                signal: this.ac.signal
            }), addEventListener("keydown", this.onArrowKeysClick, {
                signal: this.ac.signal
            }))
        }
        destroy() {
            if (!this.initialized) return;
            this.initialized = !1, removeEventListener("keydown", this.onEscClick), removeEventListener("keydown", this.onArrowKeysClick), this.menu.getAllToggle().forEach(t => {
                t.removeEventListener("keypress", this.onTogglePress)
            }), this.menu.getAllCollapsibleColumns().forEach(t => {
                t.getTitle().removeEventListener("keyup", this.onColumnTitleKeyUp)
            }), this.menu.getAllDropdowns().forEach(t => {
                t.getToggle().removeEventListener("keyup", this.onDropdownEnterClick), t.get().removeEventListener("keydown", this.onDropdownSpaceClick)
            }), this.menu.get().removeEventListener("focusout", this.onMenuFocusOut)
        }
        onResize() {
            this.am.isMobile() ? this.init() : this.destroy()
        }
        setColumnTitleAsButton() {
            this.menu.getAllCollapsibleColumns().forEach(e => {
                const t = e.getTitle(),
                    o = e.getLinks();
                Z.afterMenuIsClosed(t, o), t.setAttribute("role", "button"), t.setAttribute("tabindex", "0"), t.removeAttribute("aria-level")
            })
        }
        bindColumnListeners() {
            this.menu.getAllCollapsibleColumns().forEach(e => {
                e.getTitle().addEventListener("keyup", this.onColumnTitleKeyUp, {
                    signal: this.ac.signal
                })
            })
        }
        onTogglePress(e) {
            ["Enter", " "].includes(e.key) && (this.menu.isMobileMenuOpen() || (this.menu.focusInside(), this.menu.get().addEventListener("focusout", this.onMenuFocusOut, {
                signal: this.ac.signal
            })))
        }
        onColumnTitleKeyUp(e) {
            if (!["Enter", " "].includes(e.key)) return;
            e.preventDefault();
            const o = e.target.closest(".breakdance-dropdown-column");
            if (!o) return;
            const s = wt(o, this.am);
            s.isOpen() ? (s.close(), s.getTitle().focus()) : (s.open(), s.focusInside())
        }
        bindDropdownListeners() {
            this.menu.getAllDropdowns().forEach(t => {
                const o = t.getToggle();
                o.addEventListener("keyup", this.onDropdownEnterClick, {
                    signal: this.ac.signal
                }), o.addEventListener("keyup", this.onDropdownSpaceClick, {
                    signal: this.ac.signal
                })
            })
        }
        listenForDropdownFocusOut(e) {
            e.get().addEventListener("focusout", this.onDropdownFocusOut, {
                signal: this.ac.signal
            })
        }
        onDropdownEnterClick(e) {
            if (e.key !== "Enter") return;
            const t = V(e, this.am);
            t != null && t.isOpen() && (t.focusInside(), this.listenForDropdownFocusOut(t))
        }
        onDropdownSpaceClick(e) {
            if (e.key !== " ") return;
            const t = V(e, this.am);
            t && (e.preventDefault(), t.isOpen() ? (t.close(), t.focusToggle()) : (t.open(), this.listenForDropdownFocusOut(t), setTimeout(() => {
                t.focusInside()
            }, 50)))
        }
        onDropdownFocusOut(e) {
            const t = V(e, this.am),
                o = e.relatedTarget,
                s = t == null ? void 0 : t.get().contains(o);
            je(o) || t != null && t.isOpen() && !s && (t.close(), t == null || t.get().removeEventListener("focusout", this.onDropdownFocusOut))
        }
        onMenuFocusOut(e) {
            if (!this.menu.isMobileMenuOpen()) return;
            const t = e.relatedTarget;
            this.menu.get().contains(t) || (this.menu.closeMobileMenu(), this.menu.get().removeEventListener("focusout", this.onMenuFocusOut))
        }
        onEscClick(e) {
            if (e.key !== "Escape") return;
            const t = this.menu.getOpenDropdown();
            t ? (t.isFocusWithin() && t.focusToggle(), t.close()) : this.menu.isMobileMenuOpen() && (this.menu.closeMobileMenu(), this.menu.focusToggle())
        }
        onArrowKeysClick(e) {
            if (!["ArrowUp", "ArrowDown"].includes(e.key) || !this.menu.isMobileMenuOpen()) return;
            e.preventDefault();
            const t = this.menu.getFocusableElements().slice(1).filter(s => !s.closest('[aria-hidden="true"]')),
                o = t.findIndex(s => s === document.activeElement);
            if (e.key === "ArrowUp") {
                const s = o === 0 ? t.length - 1 : o - 1;
                t[s].focus()
            }
            if (e.key === "ArrowDown") {
                const s = o === t.length - 1 ? 0 : o + 1;
                t[s].focus()
            }
        }
    }
    class ui {
        constructor(e, t) {
            z(this, "menu");
            z(this, "ac");
            z(this, "options", ni());
            z(this, "modules", []);
            z(this, "isTouch", window.matchMedia("(pointer: coarse)").matches);
            Se(this), this.menu = bt(e, this), this.options = dn(this.options, t), this.menu.get().bdMenu = this, this.init()
        }
        setupDropdownListeners(e) {
            const t = this.menu.getAllDropdowns(),
                o = !e;
            t.forEach(s => {
                const a = s.get(),
                    c = s.getToggle(),
                    u = s.getArrow();
                s.align(), c.addEventListener("click", this.maybeOpenDropdownOnClick, {
                    signal: this.ac.signal
                }), u.addEventListener("click", this.maybeOpenDropdownOnClick, {
                    signal: this.ac.signal
                }), (o || s.hasLink()) && !this.isTouch && (c.addEventListener("mouseenter", this.maybeOpenDropdownOnHover, {
                    signal: this.ac.signal
                }), u.addEventListener("mouseenter", this.maybeOpenDropdownOnHover, {
                    signal: this.ac.signal
                }), a.addEventListener("mouseleave", this.onMouseLeave, {
                    signal: this.ac.signal
                }))
            })
        }
        maybeOpenDropdownOnClick(e) {
            const t = V(e, this),
                o = e.target === (t == null ? void 0 : t.getToggle());
            if (!t) return;
            if (t.hasLink() && o && !this.options.isBuilder)
                if (this.isMobile() && !this.options.mobile.followLinks) e.preventDefault();
                else return;
            const {
                showMultiple: s
            } = this.options.mobile;
            t.toggle(), (!s || this.isDesktop()) && this.menu.closeAllDropdownsExceptFor(t), this.listenForClicksOutside()
        }
        maybeOpenDropdownOnHover(e) {
            const t = V(e, this);
            gt(e.pageX, e.pageY) || (pt(), t && this.isDesktop() && (t.open(), this.menu.closeAllDropdownsExceptFor(t)))
        }
        onMouseLeave(e) {
            const t = V(e, this);
            if (e.pageY < 0) {
                t == null || t.close();
                return
            }!t || !this.isDesktop() || Ln(t)
        }
        listenForClicksOutside() {
            const {
                clickOutsideToClose: e
            } = this.options.dropdown;
            e && addEventListener("pointerup", this.onClickOutside, {
                signal: this.ac.signal
            })
        }
        stopListenForClicksOutside() {
            removeEventListener("pointerup", this.onClickOutside)
        }
        onClickOutside(e) {
            In(e, this.menu) && (this.menu.closeAllDropdowns(), this.stopListenForClicksOutside())
        }
        setupGlobalListeners() {
            qe("click", this.menu.getAllToggle(), this.toggleMobileMenu, {
                signal: this.ac.signal
            }), qe("click", this.menu.getAllCloseButtons(), () => this.menu.closeMobileMenu(), {
                signal: this.ac.signal
            }), addEventListener("resize", this.onResize, {
                signal: this.ac.signal
            }), addEventListener("scroll", this.onScroll, {
                signal: this.ac.signal,
                passive: !0
            })
        }
        setupColumnsListeners() {
            this.menu.getAllCollapsibleColumns().forEach(e => {
                const t = e.getTitle();
                qe("click", t, () => this.isMobile() && e.toggle(), {
                    signal: this.ac.signal
                })
            })
        }
        onResize() {
            this.menu.reposition(), this.toggleDropdownMode(), this.modules.forEach(e => {
                var t;
                (t = e == null ? void 0 : e.onResize) == null || t.call(e)
            }), this.isDesktop() && (this.refreshDropdowns(), this.menu.closeMobileMenu())
        }
        onScroll() {
            if (!this.isDesktop()) return;
            const e = this.menu.getOpenDropdown();
            e == null || e.align()
        }
        getCurrentDropdownMode() {
            const e = this.isDesktop() ? "desktop" : "mobile";
            return e === "desktop" && !this.isVertical() ? "dropdown" : this.options.dropdown.mode[e]
        }
        toggleDropdownMode() {
            const {
                mode: e,
                animation: t
            } = this.options.dropdown, o = this.isDesktop() ? e.mobile : e.desktop, s = this.isDesktop() ? e.desktop : e.mobile;
            this.menu.remove(`breakdance-menu--dropdown-${o}`), this.menu.add(`breakdance-menu--dropdown-${s}`), t && (this.canAnimate() ? this.menu.add(`breakdance-menu--anim-${t}`) : this.menu.remove(`breakdance-menu--anim-${t}`))
        }
        init() {
            this.ac && this.ac.abort(), this.ac = new AbortController;
            const {
                mobile: e
            } = this.options, {
                placement: t,
                openOnClick: o,
                animation: s
            } = this.options.dropdown, a = t === "full-width" ? "full-width" : this.options.dropdown.width;
            if (this.menu.add(`breakdance-menu--placement-${t}`), this.toggleDropdownMode(), t && this.menu.add(`breakdance-menu--placement-${t}`), a) {
                this.menu.add("breakdance-menu--custom-width");
                const c = Fn(a);
                this.menu.setVariable("dropdown-custom-width", c)
            }
            if (e.mode && this.menu.add(`breakdance-menu--${e.mode}`), e.mode === "offcanvas" && e.offcanvasPosition && this.menu.add(`breakdance-menu--offcanvas-${e.offcanvasPosition}`), this.shouldShowOverlay()) {
                const c = Dn(this.menu, this.ac);
                this.menu.get().appendChild(c), c.addEventListener("click", () => {
                    this.menu.closeMobileMenu()
                }, {
                    signal: this.ac.signal
                })
            }
            this.options.link.effect && (this.menu.add("breakdance-menu--effect"), this.menu.add(`breakdance-menu--effect-${this.options.link.effect}`), this.menu.add(`breakdance-menu--effect-${this.options.link.effectDirection||"none"}`)), this.options.isBuilder && oi(this.menu), this.setupDropdownListeners(o), this.setupGlobalListeners(), this.setupColumnsListeners(), this.setActiveLink(), this.addModule(li), this.addModule(ci), s && this.canAnimate() && this.menu.add(`breakdance-menu--anim-${s}`), this.menu.add("breakdance-menu--enabled"), this.menu.reposition(), ai(this.menu.get(), () => this.refreshDropdowns())
        }
        destroy() {
            var u;
            const {
                placement: e,
                animation: t
            } = this.options.dropdown, {
                offcanvasPosition: o,
                mode: s
            } = this.options.mobile, {
                effect: a,
                effectDirection: c
            } = this.options.link;
            this.menu.remove(`breakdance-menu--anim-${t}`), this.menu.remove(`breakdance-menu--placement-${e}`), this.menu.remove(`breakdance-menu--dropdown-${this.getCurrentDropdownMode()}`), this.menu.remove("breakdance-menu--custom-width"), this.menu.remove(`breakdance-menu--${s}`), (u = this.menu.getOverlay()) == null || u.remove(), o && this.menu.remove(`breakdance-menu--offcanvas-${o}`), a && (this.menu.remove("breakdance-menu--effect"), this.menu.remove(`breakdance-menu--effect-${a}`), this.menu.remove(`breakdance-menu--effect-${c||"none"}`)), this.menu.get().removeAttribute("style"), this.menu.getAllBackButtons().forEach(p => p.remove()), this.ac.abort(), removeEventListener("resize", this.onResize), this.modules.forEach(p => {
                var g;
                (g = p == null ? void 0 : p.destroy) == null || g.call(p)
            })
        }
        refresh() {
            this.destroy(), this.init(), this.listenForClicksOutside()
        }
        addModule(e) {
            this.modules.push(new e(this, this.menu, this.ac))
        }
        setActiveLink() {
            const e = this.menu.getAllLinks();
            e.forEach(Tn), e.forEach(t => {
                var a;
                const o = t.getAttribute("href");
                ((a = t.parentElement) == null ? void 0 : a.classList.contains("breakdance-dropdown-toggle")) || t.addEventListener("click", () => {
                    o != null && o.includes("#") && this.menu.closeMobileMenu()
                }, {
                    signal: this.ac.signal
                })
            })
        }
        shouldShowOverlay() {
            return this.options.mobile.mode === "offcanvas" || this.options.dropdown.overlay
        }
        isDesktop() {
            return !this.isMobile()
        }
        isMobile() {
            const e = this.options.mobile.breakpoint || "breakpoint_tablet_landscape";
            return On(e)
        }
        isVertical() {
            return this.menu.has("breakdance-menu--vertical")
        }
        canAnimate() {
            return this.getCurrentDropdownMode() !== "accordion"
        }
        toggleMobileMenu() {
            return this.menu.toggleMobileMenu()
        }
        getOpenDropdown() {
            return this.menu.getOpenDropdown()
        }
        openDropdown(e) {
            const t = ie(e, this);
            this.menu.closeAllDropdownsExceptFor(t), t.open(), this.listenForClicksOutside()
        }
        closeDropdown(e) {
            ie(e, this).close(), this.stopListenForClicksOutside()
        }
        closeAll() {
            this.menu.closeAllDropdowns(), this.stopListenForClicksOutside()
        }
        refreshDropdowns() {
            this.menu.getAllDropdowns().forEach(t => t.align())
        }
    }
    return ui
});