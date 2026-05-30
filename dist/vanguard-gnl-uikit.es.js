import * as e from "react";
import { createContext as t, createElement as n, forwardRef as r, useCallback as i, useContext as a, useEffect as o, useRef as s, useState as c } from "react";
import { Fragment as l, jsx as u, jsxs as d } from "react/jsx-runtime";
//#region node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs
function f(e) {
	var t, n, r = "";
	if (typeof e == "string" || typeof e == "number") r += e;
	else if (typeof e == "object") if (Array.isArray(e)) {
		var i = e.length;
		for (t = 0; t < i; t++) e[t] && (n = f(e[t])) && (r && (r += " "), r += n);
	} else for (n in e) e[n] && (r && (r += " "), r += n);
	return r;
}
function p() {
	for (var e, t, n = 0, r = "", i = arguments.length; n < i; n++) (e = arguments[n]) && (t = f(e)) && (r && (r += " "), r += t);
	return r;
}
//#endregion
//#region node_modules/.pnpm/tailwind-merge@3.6.0/node_modules/tailwind-merge/dist/bundle-mjs.mjs
var m = (e, t) => {
	let n = Array(e.length + t.length);
	for (let t = 0; t < e.length; t++) n[t] = e[t];
	for (let r = 0; r < t.length; r++) n[e.length + r] = t[r];
	return n;
}, h = (e, t) => ({
	classGroupId: e,
	validator: t
}), g = (e = /* @__PURE__ */ new Map(), t = null, n) => ({
	nextPart: e,
	validators: t,
	classGroupId: n
}), _ = "-", v = [], y = "arbitrary..", b = (e) => {
	let t = te(e), { conflictingClassGroups: n, conflictingClassGroupModifiers: r } = e;
	return {
		getClassGroupId: (e) => {
			if (e.startsWith("[") && e.endsWith("]")) return ee(e);
			let n = e.split(_);
			return x(n, +(n[0] === "" && n.length > 1), t);
		},
		getConflictingClassGroupIds: (e, t) => {
			if (t) {
				let t = r[e], i = n[e];
				return t ? i ? m(i, t) : t : i || v;
			}
			return n[e] || v;
		}
	};
}, x = (e, t, n) => {
	if (e.length - t === 0) return n.classGroupId;
	let r = e[t], i = n.nextPart.get(r);
	if (i) {
		let n = x(e, t + 1, i);
		if (n) return n;
	}
	let a = n.validators;
	if (a === null) return;
	let o = t === 0 ? e.join(_) : e.slice(t).join(_), s = a.length;
	for (let e = 0; e < s; e++) {
		let t = a[e];
		if (t.validator(o)) return t.classGroupId;
	}
}, ee = (e) => e.slice(1, -1).indexOf(":") === -1 ? void 0 : (() => {
	let t = e.slice(1, -1), n = t.indexOf(":"), r = t.slice(0, n);
	return r ? y + r : void 0;
})(), te = (e) => {
	let { theme: t, classGroups: n } = e;
	return S(n, t);
}, S = (e, t) => {
	let n = g();
	for (let r in e) {
		let i = e[r];
		C(i, n, r, t);
	}
	return n;
}, C = (e, t, n, r) => {
	let i = e.length;
	for (let a = 0; a < i; a++) {
		let i = e[a];
		ne(i, t, n, r);
	}
}, ne = (e, t, n, r) => {
	if (typeof e == "string") {
		re(e, t, n);
		return;
	}
	if (typeof e == "function") {
		w(e, t, n, r);
		return;
	}
	ie(e, t, n, r);
}, re = (e, t, n) => {
	let r = e === "" ? t : T(t, e);
	r.classGroupId = n;
}, w = (e, t, n, r) => {
	if (E(e)) {
		C(e(r), t, n, r);
		return;
	}
	t.validators === null && (t.validators = []), t.validators.push(h(n, e));
}, ie = (e, t, n, r) => {
	let i = Object.entries(e), a = i.length;
	for (let e = 0; e < a; e++) {
		let [a, o] = i[e];
		C(o, T(t, a), n, r);
	}
}, T = (e, t) => {
	let n = e, r = t.split(_), i = r.length;
	for (let e = 0; e < i; e++) {
		let t = r[e], i = n.nextPart.get(t);
		i || (i = g(), n.nextPart.set(t, i)), n = i;
	}
	return n;
}, E = (e) => "isThemeGetter" in e && e.isThemeGetter === !0, D = (e) => {
	if (e < 1) return {
		get: () => void 0,
		set: () => {}
	};
	let t = 0, n = Object.create(null), r = Object.create(null), i = (i, a) => {
		n[i] = a, t++, t > e && (t = 0, r = n, n = Object.create(null));
	};
	return {
		get(e) {
			let t = n[e];
			if (t !== void 0) return t;
			if ((t = r[e]) !== void 0) return i(e, t), t;
		},
		set(e, t) {
			e in n ? n[e] = t : i(e, t);
		}
	};
}, O = "!", k = ":", ae = [], A = (e, t, n, r, i) => ({
	modifiers: e,
	hasImportantModifier: t,
	baseClassName: n,
	maybePostfixModifierPosition: r,
	isExternal: i
}), oe = (e) => {
	let { prefix: t, experimentalParseClassName: n } = e, r = (e) => {
		let t = [], n = 0, r = 0, i = 0, a, o = e.length;
		for (let s = 0; s < o; s++) {
			let o = e[s];
			if (n === 0 && r === 0) {
				if (o === k) {
					t.push(e.slice(i, s)), i = s + 1;
					continue;
				}
				if (o === "/") {
					a = s;
					continue;
				}
			}
			o === "[" ? n++ : o === "]" ? n-- : o === "(" ? r++ : o === ")" && r--;
		}
		let s = t.length === 0 ? e : e.slice(i), c = s, l = !1;
		s.endsWith(O) ? (c = s.slice(0, -1), l = !0) : s.startsWith(O) && (c = s.slice(1), l = !0);
		let u = a && a > i ? a - i : void 0;
		return A(t, l, c, u);
	};
	if (t) {
		let e = t + k, n = r;
		r = (t) => t.startsWith(e) ? n(t.slice(e.length)) : A(ae, !1, t, void 0, !0);
	}
	if (n) {
		let e = r;
		r = (t) => n({
			className: t,
			parseClassName: e
		});
	}
	return r;
}, se = (e) => {
	let t = /* @__PURE__ */ new Map();
	return e.orderSensitiveModifiers.forEach((e, n) => {
		t.set(e, 1e6 + n);
	}), (e) => {
		let n = [], r = [];
		for (let i = 0; i < e.length; i++) {
			let a = e[i], o = a[0] === "[", s = t.has(a);
			o || s ? (r.length > 0 && (r.sort(), n.push(...r), r = []), n.push(a)) : r.push(a);
		}
		return r.length > 0 && (r.sort(), n.push(...r)), n;
	};
}, ce = (e) => ({
	cache: D(e.cacheSize),
	parseClassName: oe(e),
	sortModifiers: se(e),
	postfixLookupClassGroupIds: le(e),
	...b(e)
}), le = (e) => {
	let t = Object.create(null), n = e.postfixLookupClassGroups;
	if (n) for (let e = 0; e < n.length; e++) t[n[e]] = !0;
	return t;
}, j = /\s+/, M = (e, t) => {
	let { parseClassName: n, getClassGroupId: r, getConflictingClassGroupIds: i, sortModifiers: a, postfixLookupClassGroupIds: o } = t, s = [], c = e.trim().split(j), l = "";
	for (let e = c.length - 1; e >= 0; --e) {
		let t = c[e], { isExternal: u, modifiers: d, hasImportantModifier: f, baseClassName: p, maybePostfixModifierPosition: m } = n(t);
		if (u) {
			l = t + (l.length > 0 ? " " + l : l);
			continue;
		}
		let h = !!m, g;
		if (h) {
			g = r(p.substring(0, m));
			let e = g && o[g] ? r(p) : void 0;
			e && e !== g && (g = e, h = !1);
		} else g = r(p);
		if (!g) {
			if (!h) {
				l = t + (l.length > 0 ? " " + l : l);
				continue;
			}
			if (g = r(p), !g) {
				l = t + (l.length > 0 ? " " + l : l);
				continue;
			}
			h = !1;
		}
		let _ = d.length === 0 ? "" : d.length === 1 ? d[0] : a(d).join(":"), v = f ? _ + O : _, y = v + g;
		if (s.indexOf(y) > -1) continue;
		s.push(y);
		let b = i(g, h);
		for (let e = 0; e < b.length; ++e) {
			let t = b[e];
			s.push(v + t);
		}
		l = t + (l.length > 0 ? " " + l : l);
	}
	return l;
}, ue = (...e) => {
	let t = 0, n, r, i = "";
	for (; t < e.length;) (n = e[t++]) && (r = de(n)) && (i && (i += " "), i += r);
	return i;
}, de = (e) => {
	if (typeof e == "string") return e;
	let t, n = "";
	for (let r = 0; r < e.length; r++) e[r] && (t = de(e[r])) && (n && (n += " "), n += t);
	return n;
}, N = (e, ...t) => {
	let n, r, i, a, o = (o) => (n = ce(t.reduce((e, t) => t(e), e())), r = n.cache.get, i = n.cache.set, a = s, s(o)), s = (e) => {
		let t = r(e);
		if (t) return t;
		let a = M(e, n);
		return i(e, a), a;
	};
	return a = o, (...e) => a(ue(...e));
}, fe = [], P = (e) => {
	let t = (t) => t[e] || fe;
	return t.isThemeGetter = !0, t;
}, F = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, I = /^\((?:(\w[\w-]*):)?(.+)\)$/i, pe = /^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/, L = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, me = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, he = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, ge = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, _e = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, R = (e) => pe.test(e), z = (e) => !!e && !Number.isNaN(Number(e)), B = (e) => !!e && Number.isInteger(Number(e)), ve = (e) => e.endsWith("%") && z(e.slice(0, -1)), V = (e) => L.test(e), ye = () => !0, be = (e) => me.test(e) && !he.test(e), xe = () => !1, Se = (e) => ge.test(e), Ce = (e) => _e.test(e), we = (e) => !H(e) && !W(e), Te = (e) => e.startsWith("@container") && (e[10] === "/" && e[11] !== void 0 || e[11] === "s" && e[16] !== void 0 && e.startsWith("-size/", 10) || e[11] === "n" && e[18] !== void 0 && e.startsWith("-normal/", 10)), Ee = (e) => G(e, He, xe), H = (e) => F.test(e), U = (e) => G(e, Ue, be), De = (e) => G(e, We, z), Oe = (e) => G(e, Ke, ye), ke = (e) => G(e, Ge, xe), Ae = (e) => G(e, Be, xe), je = (e) => G(e, Ve, Ce), Me = (e) => G(e, qe, Se), W = (e) => I.test(e), Ne = (e) => K(e, Ue), Pe = (e) => K(e, Ge), Fe = (e) => K(e, Be), Ie = (e) => K(e, He), Le = (e) => K(e, Ve), Re = (e) => K(e, qe, !0), ze = (e) => K(e, Ke, !0), G = (e, t, n) => {
	let r = F.exec(e);
	return r ? r[1] ? t(r[1]) : n(r[2]) : !1;
}, K = (e, t, n = !1) => {
	let r = I.exec(e);
	return r ? r[1] ? t(r[1]) : n : !1;
}, Be = (e) => e === "position" || e === "percentage", Ve = (e) => e === "image" || e === "url", He = (e) => e === "length" || e === "size" || e === "bg-size", Ue = (e) => e === "length", We = (e) => e === "number", Ge = (e) => e === "family-name", Ke = (e) => e === "number" || e === "weight", qe = (e) => e === "shadow", Je = /* @__PURE__ */ N(() => {
	let e = P("color"), t = P("font"), n = P("text"), r = P("font-weight"), i = P("tracking"), a = P("leading"), o = P("breakpoint"), s = P("container"), c = P("spacing"), l = P("radius"), u = P("shadow"), d = P("inset-shadow"), f = P("text-shadow"), p = P("drop-shadow"), m = P("blur"), h = P("perspective"), g = P("aspect"), _ = P("ease"), v = P("animate"), y = () => [
		"auto",
		"avoid",
		"all",
		"avoid-page",
		"page",
		"left",
		"right",
		"column"
	], b = () => [
		"center",
		"top",
		"bottom",
		"left",
		"right",
		"top-left",
		"left-top",
		"top-right",
		"right-top",
		"bottom-right",
		"right-bottom",
		"bottom-left",
		"left-bottom"
	], x = () => [
		...b(),
		W,
		H
	], ee = () => [
		"auto",
		"hidden",
		"clip",
		"visible",
		"scroll"
	], te = () => [
		"auto",
		"contain",
		"none"
	], S = () => [
		W,
		H,
		c
	], C = () => [
		R,
		"full",
		"auto",
		...S()
	], ne = () => [
		B,
		"none",
		"subgrid",
		W,
		H
	], re = () => [
		"auto",
		{ span: [
			"full",
			B,
			W,
			H
		] },
		B,
		W,
		H
	], w = () => [
		B,
		"auto",
		W,
		H
	], ie = () => [
		"auto",
		"min",
		"max",
		"fr",
		W,
		H
	], T = () => [
		"start",
		"end",
		"center",
		"between",
		"around",
		"evenly",
		"stretch",
		"baseline",
		"center-safe",
		"end-safe"
	], E = () => [
		"start",
		"end",
		"center",
		"stretch",
		"center-safe",
		"end-safe"
	], D = () => ["auto", ...S()], O = () => [
		R,
		"auto",
		"full",
		"dvw",
		"dvh",
		"lvw",
		"lvh",
		"svw",
		"svh",
		"min",
		"max",
		"fit",
		...S()
	], k = () => [
		R,
		"screen",
		"full",
		"dvw",
		"lvw",
		"svw",
		"min",
		"max",
		"fit",
		...S()
	], ae = () => [
		R,
		"screen",
		"full",
		"lh",
		"dvh",
		"lvh",
		"svh",
		"min",
		"max",
		"fit",
		...S()
	], A = () => [
		e,
		W,
		H
	], oe = () => [
		...b(),
		Fe,
		Ae,
		{ position: [W, H] }
	], se = () => ["no-repeat", { repeat: [
		"",
		"x",
		"y",
		"space",
		"round"
	] }], ce = () => [
		"auto",
		"cover",
		"contain",
		Ie,
		Ee,
		{ size: [W, H] }
	], le = () => [
		ve,
		Ne,
		U
	], j = () => [
		"",
		"none",
		"full",
		l,
		W,
		H
	], M = () => [
		"",
		z,
		Ne,
		U
	], ue = () => [
		"solid",
		"dashed",
		"dotted",
		"double"
	], de = () => [
		"normal",
		"multiply",
		"screen",
		"overlay",
		"darken",
		"lighten",
		"color-dodge",
		"color-burn",
		"hard-light",
		"soft-light",
		"difference",
		"exclusion",
		"hue",
		"saturation",
		"color",
		"luminosity"
	], N = () => [
		z,
		ve,
		Fe,
		Ae
	], fe = () => [
		"",
		"none",
		m,
		W,
		H
	], F = () => [
		"none",
		z,
		W,
		H
	], I = () => [
		"none",
		z,
		W,
		H
	], pe = () => [
		z,
		W,
		H
	], L = () => [
		R,
		"full",
		...S()
	];
	return {
		cacheSize: 500,
		theme: {
			animate: [
				"spin",
				"ping",
				"pulse",
				"bounce"
			],
			aspect: ["video"],
			blur: [V],
			breakpoint: [V],
			color: [ye],
			container: [V],
			"drop-shadow": [V],
			ease: [
				"in",
				"out",
				"in-out"
			],
			font: [we],
			"font-weight": [
				"thin",
				"extralight",
				"light",
				"normal",
				"medium",
				"semibold",
				"bold",
				"extrabold",
				"black"
			],
			"inset-shadow": [V],
			leading: [
				"none",
				"tight",
				"snug",
				"normal",
				"relaxed",
				"loose"
			],
			perspective: [
				"dramatic",
				"near",
				"normal",
				"midrange",
				"distant",
				"none"
			],
			radius: [V],
			shadow: [V],
			spacing: ["px", z],
			text: [V],
			"text-shadow": [V],
			tracking: [
				"tighter",
				"tight",
				"normal",
				"wide",
				"wider",
				"widest"
			]
		},
		classGroups: {
			aspect: [{ aspect: [
				"auto",
				"square",
				R,
				H,
				W,
				g
			] }],
			container: ["container"],
			"container-type": [{ "@container": [
				"",
				"normal",
				"size",
				W,
				H
			] }],
			"container-named": [Te],
			columns: [{ columns: [
				z,
				H,
				W,
				s
			] }],
			"break-after": [{ "break-after": y() }],
			"break-before": [{ "break-before": y() }],
			"break-inside": [{ "break-inside": [
				"auto",
				"avoid",
				"avoid-page",
				"avoid-column"
			] }],
			"box-decoration": [{ "box-decoration": ["slice", "clone"] }],
			box: [{ box: ["border", "content"] }],
			display: [
				"block",
				"inline-block",
				"inline",
				"flex",
				"inline-flex",
				"table",
				"inline-table",
				"table-caption",
				"table-cell",
				"table-column",
				"table-column-group",
				"table-footer-group",
				"table-header-group",
				"table-row-group",
				"table-row",
				"flow-root",
				"grid",
				"inline-grid",
				"contents",
				"list-item",
				"hidden"
			],
			sr: ["sr-only", "not-sr-only"],
			float: [{ float: [
				"right",
				"left",
				"none",
				"start",
				"end"
			] }],
			clear: [{ clear: [
				"left",
				"right",
				"both",
				"none",
				"start",
				"end"
			] }],
			isolation: ["isolate", "isolation-auto"],
			"object-fit": [{ object: [
				"contain",
				"cover",
				"fill",
				"none",
				"scale-down"
			] }],
			"object-position": [{ object: x() }],
			overflow: [{ overflow: ee() }],
			"overflow-x": [{ "overflow-x": ee() }],
			"overflow-y": [{ "overflow-y": ee() }],
			overscroll: [{ overscroll: te() }],
			"overscroll-x": [{ "overscroll-x": te() }],
			"overscroll-y": [{ "overscroll-y": te() }],
			position: [
				"static",
				"fixed",
				"absolute",
				"relative",
				"sticky"
			],
			inset: [{ inset: C() }],
			"inset-x": [{ "inset-x": C() }],
			"inset-y": [{ "inset-y": C() }],
			start: [{
				"inset-s": C(),
				start: C()
			}],
			end: [{
				"inset-e": C(),
				end: C()
			}],
			"inset-bs": [{ "inset-bs": C() }],
			"inset-be": [{ "inset-be": C() }],
			top: [{ top: C() }],
			right: [{ right: C() }],
			bottom: [{ bottom: C() }],
			left: [{ left: C() }],
			visibility: [
				"visible",
				"invisible",
				"collapse"
			],
			z: [{ z: [
				B,
				"auto",
				W,
				H
			] }],
			basis: [{ basis: [
				R,
				"full",
				"auto",
				s,
				...S()
			] }],
			"flex-direction": [{ flex: [
				"row",
				"row-reverse",
				"col",
				"col-reverse"
			] }],
			"flex-wrap": [{ flex: [
				"nowrap",
				"wrap",
				"wrap-reverse"
			] }],
			flex: [{ flex: [
				z,
				R,
				"auto",
				"initial",
				"none",
				H
			] }],
			grow: [{ grow: [
				"",
				z,
				W,
				H
			] }],
			shrink: [{ shrink: [
				"",
				z,
				W,
				H
			] }],
			order: [{ order: [
				B,
				"first",
				"last",
				"none",
				W,
				H
			] }],
			"grid-cols": [{ "grid-cols": ne() }],
			"col-start-end": [{ col: re() }],
			"col-start": [{ "col-start": w() }],
			"col-end": [{ "col-end": w() }],
			"grid-rows": [{ "grid-rows": ne() }],
			"row-start-end": [{ row: re() }],
			"row-start": [{ "row-start": w() }],
			"row-end": [{ "row-end": w() }],
			"grid-flow": [{ "grid-flow": [
				"row",
				"col",
				"dense",
				"row-dense",
				"col-dense"
			] }],
			"auto-cols": [{ "auto-cols": ie() }],
			"auto-rows": [{ "auto-rows": ie() }],
			gap: [{ gap: S() }],
			"gap-x": [{ "gap-x": S() }],
			"gap-y": [{ "gap-y": S() }],
			"justify-content": [{ justify: [...T(), "normal"] }],
			"justify-items": [{ "justify-items": [...E(), "normal"] }],
			"justify-self": [{ "justify-self": ["auto", ...E()] }],
			"align-content": [{ content: ["normal", ...T()] }],
			"align-items": [{ items: [...E(), { baseline: ["", "last"] }] }],
			"align-self": [{ self: [
				"auto",
				...E(),
				{ baseline: ["", "last"] }
			] }],
			"place-content": [{ "place-content": T() }],
			"place-items": [{ "place-items": [...E(), "baseline"] }],
			"place-self": [{ "place-self": ["auto", ...E()] }],
			p: [{ p: S() }],
			px: [{ px: S() }],
			py: [{ py: S() }],
			ps: [{ ps: S() }],
			pe: [{ pe: S() }],
			pbs: [{ pbs: S() }],
			pbe: [{ pbe: S() }],
			pt: [{ pt: S() }],
			pr: [{ pr: S() }],
			pb: [{ pb: S() }],
			pl: [{ pl: S() }],
			m: [{ m: D() }],
			mx: [{ mx: D() }],
			my: [{ my: D() }],
			ms: [{ ms: D() }],
			me: [{ me: D() }],
			mbs: [{ mbs: D() }],
			mbe: [{ mbe: D() }],
			mt: [{ mt: D() }],
			mr: [{ mr: D() }],
			mb: [{ mb: D() }],
			ml: [{ ml: D() }],
			"space-x": [{ "space-x": S() }],
			"space-x-reverse": ["space-x-reverse"],
			"space-y": [{ "space-y": S() }],
			"space-y-reverse": ["space-y-reverse"],
			size: [{ size: O() }],
			"inline-size": [{ inline: ["auto", ...k()] }],
			"min-inline-size": [{ "min-inline": ["auto", ...k()] }],
			"max-inline-size": [{ "max-inline": ["none", ...k()] }],
			"block-size": [{ block: ["auto", ...ae()] }],
			"min-block-size": [{ "min-block": ["auto", ...ae()] }],
			"max-block-size": [{ "max-block": ["none", ...ae()] }],
			w: [{ w: [
				s,
				"screen",
				...O()
			] }],
			"min-w": [{ "min-w": [
				s,
				"screen",
				"none",
				...O()
			] }],
			"max-w": [{ "max-w": [
				s,
				"screen",
				"none",
				"prose",
				{ screen: [o] },
				...O()
			] }],
			h: [{ h: [
				"screen",
				"lh",
				...O()
			] }],
			"min-h": [{ "min-h": [
				"screen",
				"lh",
				"none",
				...O()
			] }],
			"max-h": [{ "max-h": [
				"screen",
				"lh",
				...O()
			] }],
			"font-size": [{ text: [
				"base",
				n,
				Ne,
				U
			] }],
			"font-smoothing": ["antialiased", "subpixel-antialiased"],
			"font-style": ["italic", "not-italic"],
			"font-weight": [{ font: [
				r,
				ze,
				Oe
			] }],
			"font-stretch": [{ "font-stretch": [
				"ultra-condensed",
				"extra-condensed",
				"condensed",
				"semi-condensed",
				"normal",
				"semi-expanded",
				"expanded",
				"extra-expanded",
				"ultra-expanded",
				ve,
				H
			] }],
			"font-family": [{ font: [
				Pe,
				ke,
				t
			] }],
			"font-features": [{ "font-features": [H] }],
			"fvn-normal": ["normal-nums"],
			"fvn-ordinal": ["ordinal"],
			"fvn-slashed-zero": ["slashed-zero"],
			"fvn-figure": ["lining-nums", "oldstyle-nums"],
			"fvn-spacing": ["proportional-nums", "tabular-nums"],
			"fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
			tracking: [{ tracking: [
				i,
				W,
				H
			] }],
			"line-clamp": [{ "line-clamp": [
				z,
				"none",
				W,
				De
			] }],
			leading: [{ leading: [a, ...S()] }],
			"list-image": [{ "list-image": [
				"none",
				W,
				H
			] }],
			"list-style-position": [{ list: ["inside", "outside"] }],
			"list-style-type": [{ list: [
				"disc",
				"decimal",
				"none",
				W,
				H
			] }],
			"text-alignment": [{ text: [
				"left",
				"center",
				"right",
				"justify",
				"start",
				"end"
			] }],
			"placeholder-color": [{ placeholder: A() }],
			"text-color": [{ text: A() }],
			"text-decoration": [
				"underline",
				"overline",
				"line-through",
				"no-underline"
			],
			"text-decoration-style": [{ decoration: [...ue(), "wavy"] }],
			"text-decoration-thickness": [{ decoration: [
				z,
				"from-font",
				"auto",
				W,
				U
			] }],
			"text-decoration-color": [{ decoration: A() }],
			"underline-offset": [{ "underline-offset": [
				z,
				"auto",
				W,
				H
			] }],
			"text-transform": [
				"uppercase",
				"lowercase",
				"capitalize",
				"normal-case"
			],
			"text-overflow": [
				"truncate",
				"text-ellipsis",
				"text-clip"
			],
			"text-wrap": [{ text: [
				"wrap",
				"nowrap",
				"balance",
				"pretty"
			] }],
			indent: [{ indent: S() }],
			"tab-size": [{ tab: [
				B,
				W,
				H
			] }],
			"vertical-align": [{ align: [
				"baseline",
				"top",
				"middle",
				"bottom",
				"text-top",
				"text-bottom",
				"sub",
				"super",
				W,
				H
			] }],
			whitespace: [{ whitespace: [
				"normal",
				"nowrap",
				"pre",
				"pre-line",
				"pre-wrap",
				"break-spaces"
			] }],
			break: [{ break: [
				"normal",
				"words",
				"all",
				"keep"
			] }],
			wrap: [{ wrap: [
				"break-word",
				"anywhere",
				"normal"
			] }],
			hyphens: [{ hyphens: [
				"none",
				"manual",
				"auto"
			] }],
			content: [{ content: [
				"none",
				W,
				H
			] }],
			"bg-attachment": [{ bg: [
				"fixed",
				"local",
				"scroll"
			] }],
			"bg-clip": [{ "bg-clip": [
				"border",
				"padding",
				"content",
				"text"
			] }],
			"bg-origin": [{ "bg-origin": [
				"border",
				"padding",
				"content"
			] }],
			"bg-position": [{ bg: oe() }],
			"bg-repeat": [{ bg: se() }],
			"bg-size": [{ bg: ce() }],
			"bg-image": [{ bg: [
				"none",
				{
					linear: [
						{ to: [
							"t",
							"tr",
							"r",
							"br",
							"b",
							"bl",
							"l",
							"tl"
						] },
						B,
						W,
						H
					],
					radial: [
						"",
						W,
						H
					],
					conic: [
						B,
						W,
						H
					]
				},
				Le,
				je
			] }],
			"bg-color": [{ bg: A() }],
			"gradient-from-pos": [{ from: le() }],
			"gradient-via-pos": [{ via: le() }],
			"gradient-to-pos": [{ to: le() }],
			"gradient-from": [{ from: A() }],
			"gradient-via": [{ via: A() }],
			"gradient-to": [{ to: A() }],
			rounded: [{ rounded: j() }],
			"rounded-s": [{ "rounded-s": j() }],
			"rounded-e": [{ "rounded-e": j() }],
			"rounded-t": [{ "rounded-t": j() }],
			"rounded-r": [{ "rounded-r": j() }],
			"rounded-b": [{ "rounded-b": j() }],
			"rounded-l": [{ "rounded-l": j() }],
			"rounded-ss": [{ "rounded-ss": j() }],
			"rounded-se": [{ "rounded-se": j() }],
			"rounded-ee": [{ "rounded-ee": j() }],
			"rounded-es": [{ "rounded-es": j() }],
			"rounded-tl": [{ "rounded-tl": j() }],
			"rounded-tr": [{ "rounded-tr": j() }],
			"rounded-br": [{ "rounded-br": j() }],
			"rounded-bl": [{ "rounded-bl": j() }],
			"border-w": [{ border: M() }],
			"border-w-x": [{ "border-x": M() }],
			"border-w-y": [{ "border-y": M() }],
			"border-w-s": [{ "border-s": M() }],
			"border-w-e": [{ "border-e": M() }],
			"border-w-bs": [{ "border-bs": M() }],
			"border-w-be": [{ "border-be": M() }],
			"border-w-t": [{ "border-t": M() }],
			"border-w-r": [{ "border-r": M() }],
			"border-w-b": [{ "border-b": M() }],
			"border-w-l": [{ "border-l": M() }],
			"divide-x": [{ "divide-x": M() }],
			"divide-x-reverse": ["divide-x-reverse"],
			"divide-y": [{ "divide-y": M() }],
			"divide-y-reverse": ["divide-y-reverse"],
			"border-style": [{ border: [
				...ue(),
				"hidden",
				"none"
			] }],
			"divide-style": [{ divide: [
				...ue(),
				"hidden",
				"none"
			] }],
			"border-color": [{ border: A() }],
			"border-color-x": [{ "border-x": A() }],
			"border-color-y": [{ "border-y": A() }],
			"border-color-s": [{ "border-s": A() }],
			"border-color-e": [{ "border-e": A() }],
			"border-color-bs": [{ "border-bs": A() }],
			"border-color-be": [{ "border-be": A() }],
			"border-color-t": [{ "border-t": A() }],
			"border-color-r": [{ "border-r": A() }],
			"border-color-b": [{ "border-b": A() }],
			"border-color-l": [{ "border-l": A() }],
			"divide-color": [{ divide: A() }],
			"outline-style": [{ outline: [
				...ue(),
				"none",
				"hidden"
			] }],
			"outline-offset": [{ "outline-offset": [
				z,
				W,
				H
			] }],
			"outline-w": [{ outline: [
				"",
				z,
				Ne,
				U
			] }],
			"outline-color": [{ outline: A() }],
			shadow: [{ shadow: [
				"",
				"none",
				u,
				Re,
				Me
			] }],
			"shadow-color": [{ shadow: A() }],
			"inset-shadow": [{ "inset-shadow": [
				"none",
				d,
				Re,
				Me
			] }],
			"inset-shadow-color": [{ "inset-shadow": A() }],
			"ring-w": [{ ring: M() }],
			"ring-w-inset": ["ring-inset"],
			"ring-color": [{ ring: A() }],
			"ring-offset-w": [{ "ring-offset": [z, U] }],
			"ring-offset-color": [{ "ring-offset": A() }],
			"inset-ring-w": [{ "inset-ring": M() }],
			"inset-ring-color": [{ "inset-ring": A() }],
			"text-shadow": [{ "text-shadow": [
				"none",
				f,
				Re,
				Me
			] }],
			"text-shadow-color": [{ "text-shadow": A() }],
			opacity: [{ opacity: [
				z,
				W,
				H
			] }],
			"mix-blend": [{ "mix-blend": [
				...de(),
				"plus-darker",
				"plus-lighter"
			] }],
			"bg-blend": [{ "bg-blend": de() }],
			"mask-clip": [{ "mask-clip": [
				"border",
				"padding",
				"content",
				"fill",
				"stroke",
				"view"
			] }, "mask-no-clip"],
			"mask-composite": [{ mask: [
				"add",
				"subtract",
				"intersect",
				"exclude"
			] }],
			"mask-image-linear-pos": [{ "mask-linear": [z] }],
			"mask-image-linear-from-pos": [{ "mask-linear-from": N() }],
			"mask-image-linear-to-pos": [{ "mask-linear-to": N() }],
			"mask-image-linear-from-color": [{ "mask-linear-from": A() }],
			"mask-image-linear-to-color": [{ "mask-linear-to": A() }],
			"mask-image-t-from-pos": [{ "mask-t-from": N() }],
			"mask-image-t-to-pos": [{ "mask-t-to": N() }],
			"mask-image-t-from-color": [{ "mask-t-from": A() }],
			"mask-image-t-to-color": [{ "mask-t-to": A() }],
			"mask-image-r-from-pos": [{ "mask-r-from": N() }],
			"mask-image-r-to-pos": [{ "mask-r-to": N() }],
			"mask-image-r-from-color": [{ "mask-r-from": A() }],
			"mask-image-r-to-color": [{ "mask-r-to": A() }],
			"mask-image-b-from-pos": [{ "mask-b-from": N() }],
			"mask-image-b-to-pos": [{ "mask-b-to": N() }],
			"mask-image-b-from-color": [{ "mask-b-from": A() }],
			"mask-image-b-to-color": [{ "mask-b-to": A() }],
			"mask-image-l-from-pos": [{ "mask-l-from": N() }],
			"mask-image-l-to-pos": [{ "mask-l-to": N() }],
			"mask-image-l-from-color": [{ "mask-l-from": A() }],
			"mask-image-l-to-color": [{ "mask-l-to": A() }],
			"mask-image-x-from-pos": [{ "mask-x-from": N() }],
			"mask-image-x-to-pos": [{ "mask-x-to": N() }],
			"mask-image-x-from-color": [{ "mask-x-from": A() }],
			"mask-image-x-to-color": [{ "mask-x-to": A() }],
			"mask-image-y-from-pos": [{ "mask-y-from": N() }],
			"mask-image-y-to-pos": [{ "mask-y-to": N() }],
			"mask-image-y-from-color": [{ "mask-y-from": A() }],
			"mask-image-y-to-color": [{ "mask-y-to": A() }],
			"mask-image-radial": [{ "mask-radial": [W, H] }],
			"mask-image-radial-from-pos": [{ "mask-radial-from": N() }],
			"mask-image-radial-to-pos": [{ "mask-radial-to": N() }],
			"mask-image-radial-from-color": [{ "mask-radial-from": A() }],
			"mask-image-radial-to-color": [{ "mask-radial-to": A() }],
			"mask-image-radial-shape": [{ "mask-radial": ["circle", "ellipse"] }],
			"mask-image-radial-size": [{ "mask-radial": [{
				closest: ["side", "corner"],
				farthest: ["side", "corner"]
			}] }],
			"mask-image-radial-pos": [{ "mask-radial-at": b() }],
			"mask-image-conic-pos": [{ "mask-conic": [z] }],
			"mask-image-conic-from-pos": [{ "mask-conic-from": N() }],
			"mask-image-conic-to-pos": [{ "mask-conic-to": N() }],
			"mask-image-conic-from-color": [{ "mask-conic-from": A() }],
			"mask-image-conic-to-color": [{ "mask-conic-to": A() }],
			"mask-mode": [{ mask: [
				"alpha",
				"luminance",
				"match"
			] }],
			"mask-origin": [{ "mask-origin": [
				"border",
				"padding",
				"content",
				"fill",
				"stroke",
				"view"
			] }],
			"mask-position": [{ mask: oe() }],
			"mask-repeat": [{ mask: se() }],
			"mask-size": [{ mask: ce() }],
			"mask-type": [{ "mask-type": ["alpha", "luminance"] }],
			"mask-image": [{ mask: [
				"none",
				W,
				H
			] }],
			filter: [{ filter: [
				"",
				"none",
				W,
				H
			] }],
			blur: [{ blur: fe() }],
			brightness: [{ brightness: [
				z,
				W,
				H
			] }],
			contrast: [{ contrast: [
				z,
				W,
				H
			] }],
			"drop-shadow": [{ "drop-shadow": [
				"",
				"none",
				p,
				Re,
				Me
			] }],
			"drop-shadow-color": [{ "drop-shadow": A() }],
			grayscale: [{ grayscale: [
				"",
				z,
				W,
				H
			] }],
			"hue-rotate": [{ "hue-rotate": [
				z,
				W,
				H
			] }],
			invert: [{ invert: [
				"",
				z,
				W,
				H
			] }],
			saturate: [{ saturate: [
				z,
				W,
				H
			] }],
			sepia: [{ sepia: [
				"",
				z,
				W,
				H
			] }],
			"backdrop-filter": [{ "backdrop-filter": [
				"",
				"none",
				W,
				H
			] }],
			"backdrop-blur": [{ "backdrop-blur": fe() }],
			"backdrop-brightness": [{ "backdrop-brightness": [
				z,
				W,
				H
			] }],
			"backdrop-contrast": [{ "backdrop-contrast": [
				z,
				W,
				H
			] }],
			"backdrop-grayscale": [{ "backdrop-grayscale": [
				"",
				z,
				W,
				H
			] }],
			"backdrop-hue-rotate": [{ "backdrop-hue-rotate": [
				z,
				W,
				H
			] }],
			"backdrop-invert": [{ "backdrop-invert": [
				"",
				z,
				W,
				H
			] }],
			"backdrop-opacity": [{ "backdrop-opacity": [
				z,
				W,
				H
			] }],
			"backdrop-saturate": [{ "backdrop-saturate": [
				z,
				W,
				H
			] }],
			"backdrop-sepia": [{ "backdrop-sepia": [
				"",
				z,
				W,
				H
			] }],
			"border-collapse": [{ border: ["collapse", "separate"] }],
			"border-spacing": [{ "border-spacing": S() }],
			"border-spacing-x": [{ "border-spacing-x": S() }],
			"border-spacing-y": [{ "border-spacing-y": S() }],
			"table-layout": [{ table: ["auto", "fixed"] }],
			caption: [{ caption: ["top", "bottom"] }],
			transition: [{ transition: [
				"",
				"all",
				"colors",
				"opacity",
				"shadow",
				"transform",
				"none",
				W,
				H
			] }],
			"transition-behavior": [{ transition: ["normal", "discrete"] }],
			duration: [{ duration: [
				z,
				"initial",
				W,
				H
			] }],
			ease: [{ ease: [
				"linear",
				"initial",
				_,
				W,
				H
			] }],
			delay: [{ delay: [
				z,
				W,
				H
			] }],
			animate: [{ animate: [
				"none",
				v,
				W,
				H
			] }],
			backface: [{ backface: ["hidden", "visible"] }],
			perspective: [{ perspective: [
				h,
				W,
				H
			] }],
			"perspective-origin": [{ "perspective-origin": x() }],
			rotate: [{ rotate: F() }],
			"rotate-x": [{ "rotate-x": F() }],
			"rotate-y": [{ "rotate-y": F() }],
			"rotate-z": [{ "rotate-z": F() }],
			scale: [{ scale: I() }],
			"scale-x": [{ "scale-x": I() }],
			"scale-y": [{ "scale-y": I() }],
			"scale-z": [{ "scale-z": I() }],
			"scale-3d": ["scale-3d"],
			skew: [{ skew: pe() }],
			"skew-x": [{ "skew-x": pe() }],
			"skew-y": [{ "skew-y": pe() }],
			transform: [{ transform: [
				W,
				H,
				"",
				"none",
				"gpu",
				"cpu"
			] }],
			"transform-origin": [{ origin: x() }],
			"transform-style": [{ transform: ["3d", "flat"] }],
			translate: [{ translate: L() }],
			"translate-x": [{ "translate-x": L() }],
			"translate-y": [{ "translate-y": L() }],
			"translate-z": [{ "translate-z": L() }],
			"translate-none": ["translate-none"],
			zoom: [{ zoom: [
				B,
				W,
				H
			] }],
			accent: [{ accent: A() }],
			appearance: [{ appearance: ["none", "auto"] }],
			"caret-color": [{ caret: A() }],
			"color-scheme": [{ scheme: [
				"normal",
				"dark",
				"light",
				"light-dark",
				"only-dark",
				"only-light"
			] }],
			cursor: [{ cursor: [
				"auto",
				"default",
				"pointer",
				"wait",
				"text",
				"move",
				"help",
				"not-allowed",
				"none",
				"context-menu",
				"progress",
				"cell",
				"crosshair",
				"vertical-text",
				"alias",
				"copy",
				"no-drop",
				"grab",
				"grabbing",
				"all-scroll",
				"col-resize",
				"row-resize",
				"n-resize",
				"e-resize",
				"s-resize",
				"w-resize",
				"ne-resize",
				"nw-resize",
				"se-resize",
				"sw-resize",
				"ew-resize",
				"ns-resize",
				"nesw-resize",
				"nwse-resize",
				"zoom-in",
				"zoom-out",
				W,
				H
			] }],
			"field-sizing": [{ "field-sizing": ["fixed", "content"] }],
			"pointer-events": [{ "pointer-events": ["auto", "none"] }],
			resize: [{ resize: [
				"none",
				"",
				"y",
				"x"
			] }],
			"scroll-behavior": [{ scroll: ["auto", "smooth"] }],
			"scrollbar-thumb-color": [{ "scrollbar-thumb": A() }],
			"scrollbar-track-color": [{ "scrollbar-track": A() }],
			"scrollbar-gutter": [{ "scrollbar-gutter": [
				"auto",
				"stable",
				"both"
			] }],
			"scrollbar-w": [{ scrollbar: [
				"auto",
				"thin",
				"none"
			] }],
			"scroll-m": [{ "scroll-m": S() }],
			"scroll-mx": [{ "scroll-mx": S() }],
			"scroll-my": [{ "scroll-my": S() }],
			"scroll-ms": [{ "scroll-ms": S() }],
			"scroll-me": [{ "scroll-me": S() }],
			"scroll-mbs": [{ "scroll-mbs": S() }],
			"scroll-mbe": [{ "scroll-mbe": S() }],
			"scroll-mt": [{ "scroll-mt": S() }],
			"scroll-mr": [{ "scroll-mr": S() }],
			"scroll-mb": [{ "scroll-mb": S() }],
			"scroll-ml": [{ "scroll-ml": S() }],
			"scroll-p": [{ "scroll-p": S() }],
			"scroll-px": [{ "scroll-px": S() }],
			"scroll-py": [{ "scroll-py": S() }],
			"scroll-ps": [{ "scroll-ps": S() }],
			"scroll-pe": [{ "scroll-pe": S() }],
			"scroll-pbs": [{ "scroll-pbs": S() }],
			"scroll-pbe": [{ "scroll-pbe": S() }],
			"scroll-pt": [{ "scroll-pt": S() }],
			"scroll-pr": [{ "scroll-pr": S() }],
			"scroll-pb": [{ "scroll-pb": S() }],
			"scroll-pl": [{ "scroll-pl": S() }],
			"snap-align": [{ snap: [
				"start",
				"end",
				"center",
				"align-none"
			] }],
			"snap-stop": [{ snap: ["normal", "always"] }],
			"snap-type": [{ snap: [
				"none",
				"x",
				"y",
				"both"
			] }],
			"snap-strictness": [{ snap: ["mandatory", "proximity"] }],
			touch: [{ touch: [
				"auto",
				"none",
				"manipulation"
			] }],
			"touch-x": [{ "touch-pan": [
				"x",
				"left",
				"right"
			] }],
			"touch-y": [{ "touch-pan": [
				"y",
				"up",
				"down"
			] }],
			"touch-pz": ["touch-pinch-zoom"],
			select: [{ select: [
				"none",
				"text",
				"all",
				"auto"
			] }],
			"will-change": [{ "will-change": [
				"auto",
				"scroll",
				"contents",
				"transform",
				W,
				H
			] }],
			fill: [{ fill: ["none", ...A()] }],
			"stroke-w": [{ stroke: [
				z,
				Ne,
				U,
				De
			] }],
			stroke: [{ stroke: ["none", ...A()] }],
			"forced-color-adjust": [{ "forced-color-adjust": ["auto", "none"] }]
		},
		conflictingClassGroups: {
			"container-named": ["container-type"],
			overflow: ["overflow-x", "overflow-y"],
			overscroll: ["overscroll-x", "overscroll-y"],
			inset: [
				"inset-x",
				"inset-y",
				"inset-bs",
				"inset-be",
				"start",
				"end",
				"top",
				"right",
				"bottom",
				"left"
			],
			"inset-x": ["right", "left"],
			"inset-y": ["top", "bottom"],
			flex: [
				"basis",
				"grow",
				"shrink"
			],
			gap: ["gap-x", "gap-y"],
			p: [
				"px",
				"py",
				"ps",
				"pe",
				"pbs",
				"pbe",
				"pt",
				"pr",
				"pb",
				"pl"
			],
			px: ["pr", "pl"],
			py: ["pt", "pb"],
			m: [
				"mx",
				"my",
				"ms",
				"me",
				"mbs",
				"mbe",
				"mt",
				"mr",
				"mb",
				"ml"
			],
			mx: ["mr", "ml"],
			my: ["mt", "mb"],
			size: ["w", "h"],
			"font-size": ["leading"],
			"fvn-normal": [
				"fvn-ordinal",
				"fvn-slashed-zero",
				"fvn-figure",
				"fvn-spacing",
				"fvn-fraction"
			],
			"fvn-ordinal": ["fvn-normal"],
			"fvn-slashed-zero": ["fvn-normal"],
			"fvn-figure": ["fvn-normal"],
			"fvn-spacing": ["fvn-normal"],
			"fvn-fraction": ["fvn-normal"],
			"line-clamp": ["display", "overflow"],
			rounded: [
				"rounded-s",
				"rounded-e",
				"rounded-t",
				"rounded-r",
				"rounded-b",
				"rounded-l",
				"rounded-ss",
				"rounded-se",
				"rounded-ee",
				"rounded-es",
				"rounded-tl",
				"rounded-tr",
				"rounded-br",
				"rounded-bl"
			],
			"rounded-s": ["rounded-ss", "rounded-es"],
			"rounded-e": ["rounded-se", "rounded-ee"],
			"rounded-t": ["rounded-tl", "rounded-tr"],
			"rounded-r": ["rounded-tr", "rounded-br"],
			"rounded-b": ["rounded-br", "rounded-bl"],
			"rounded-l": ["rounded-tl", "rounded-bl"],
			"border-spacing": ["border-spacing-x", "border-spacing-y"],
			"border-w": [
				"border-w-x",
				"border-w-y",
				"border-w-s",
				"border-w-e",
				"border-w-bs",
				"border-w-be",
				"border-w-t",
				"border-w-r",
				"border-w-b",
				"border-w-l"
			],
			"border-w-x": ["border-w-r", "border-w-l"],
			"border-w-y": ["border-w-t", "border-w-b"],
			"border-color": [
				"border-color-x",
				"border-color-y",
				"border-color-s",
				"border-color-e",
				"border-color-bs",
				"border-color-be",
				"border-color-t",
				"border-color-r",
				"border-color-b",
				"border-color-l"
			],
			"border-color-x": ["border-color-r", "border-color-l"],
			"border-color-y": ["border-color-t", "border-color-b"],
			translate: [
				"translate-x",
				"translate-y",
				"translate-none"
			],
			"translate-none": [
				"translate",
				"translate-x",
				"translate-y",
				"translate-z"
			],
			"scroll-m": [
				"scroll-mx",
				"scroll-my",
				"scroll-ms",
				"scroll-me",
				"scroll-mbs",
				"scroll-mbe",
				"scroll-mt",
				"scroll-mr",
				"scroll-mb",
				"scroll-ml"
			],
			"scroll-mx": ["scroll-mr", "scroll-ml"],
			"scroll-my": ["scroll-mt", "scroll-mb"],
			"scroll-p": [
				"scroll-px",
				"scroll-py",
				"scroll-ps",
				"scroll-pe",
				"scroll-pbs",
				"scroll-pbe",
				"scroll-pt",
				"scroll-pr",
				"scroll-pb",
				"scroll-pl"
			],
			"scroll-px": ["scroll-pr", "scroll-pl"],
			"scroll-py": ["scroll-pt", "scroll-pb"],
			touch: [
				"touch-x",
				"touch-y",
				"touch-pz"
			],
			"touch-x": ["touch"],
			"touch-y": ["touch"],
			"touch-pz": ["touch"]
		},
		conflictingClassGroupModifiers: { "font-size": ["leading"] },
		postfixLookupClassGroups: ["container-type"],
		orderSensitiveModifiers: [
			"*",
			"**",
			"after",
			"backdrop",
			"before",
			"details-content",
			"file",
			"first-letter",
			"first-line",
			"marker",
			"placeholder",
			"selection"
		]
	};
});
//#endregion
//#region src/lib/utils.ts
function q(...e) {
	return Je(p(e));
}
//#endregion
//#region src/lib/tailwind-utils.ts
function Ye() {
	return "bg-white/5 backdrop-blur-xl border border-white/10";
}
function J() {
	return "bg-gradient-to-br from-white/10 via-white/5 to-white/[0.02] backdrop-blur-2xl border border-white/15 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]";
}
function Y() {
	return "bg-[#0a0a0b] shadow-[8px_8px_16px_rgba(0,0,0,0.4),-8px_-8px_16px_rgba(255,255,255,0.03)] border border-white/5";
}
function X() {
	return "bg-gradient-to-br from-white/[0.08] via-white/[0.02] to-transparent backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.1)]";
}
function Xe(e = "md") {
	return `shadow-[0_0_${{
		sm: "12px",
		md: "20px",
		lg: "32px"
	}[e]}_hsl(217_91%_60%/_0.5)]`;
}
function Ze() {
	return "shadow-vgn-accent hover:translate-y-[-2px]";
}
function Z(e) {
	return {
		fast: "transition-all duration-300 ease-out",
		slow: "transition-all duration-500 cubic-bezier(0.23, 1, 0.32, 1)",
		liquid: "transition-all duration-700 cubic-bezier(0.34, 1.56, 0.64, 1)",
		bounce: "transition-transform duration-300 cubic-bezier(0.68, -0.55, 0.265, 1.55)",
		elastic: "transition-all duration-500 cubic-bezier(0.68, -0.6, 0.32, 1.6)"
	}[e];
}
function Qe() {
	return "shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]";
}
function $e(e = "subtle") {
	return {
		subtle: "bg-gradient-to-br from-white/5 to-transparent",
		medium: "bg-gradient-to-br from-white/10 to-white/5",
		strong: "bg-gradient-to-br from-white/20 to-white/10",
		primary: "bg-gradient-to-br from-blue-600/20 to-blue-600/5"
	}[e];
}
//#endregion
//#region node_modules/.pnpm/lucide-react@0.294.0_react@18.3.1/node_modules/lucide-react/dist/esm/defaultAttributes.js
var et = {
	xmlns: "http://www.w3.org/2000/svg",
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	strokeWidth: 2,
	strokeLinecap: "round",
	strokeLinejoin: "round"
}, tt = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase().trim(), Q = (e, t) => {
	let i = r(({ color: r = "currentColor", size: i = 24, strokeWidth: a = 2, absoluteStrokeWidth: o, className: s = "", children: c, ...l }, u) => n("svg", {
		ref: u,
		...et,
		width: i,
		height: i,
		stroke: r,
		strokeWidth: o ? Number(a) * 24 / Number(i) : a,
		className: [
			"lucide",
			`lucide-${tt(e)}`,
			s
		].join(" "),
		...l
	}, [...t.map(([e, t]) => n(e, t)), ...Array.isArray(c) ? c : [c]]));
	return i.displayName = `${e}`, i;
}, nt = Q("AlertTriangle", [
	["path", {
		d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z",
		key: "c3ski4"
	}],
	["path", {
		d: "M12 9v4",
		key: "juzpu7"
	}],
	["path", {
		d: "M12 17h.01",
		key: "p32p05"
	}]
]), rt = Q("ArrowDownRight", [["path", {
	d: "m7 7 10 10",
	key: "1fmybs"
}], ["path", {
	d: "M17 7v10H7",
	key: "6fjiku"
}]]), it = Q("ArrowUpRight", [["path", {
	d: "M7 7h10v10",
	key: "1tivn9"
}], ["path", {
	d: "M7 17 17 7",
	key: "1vkiza"
}]]), at = Q("Bell", [["path", {
	d: "M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9",
	key: "1qo2s2"
}], ["path", {
	d: "M10.3 21a1.94 1.94 0 0 0 3.4 0",
	key: "qgo35s"
}]]), ot = Q("Box", [
	["path", {
		d: "M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",
		key: "hh9hay"
	}],
	["path", {
		d: "m3.3 7 8.7 5 8.7-5",
		key: "g66t2b"
	}],
	["path", {
		d: "M12 22V12",
		key: "d0xqtd"
	}]
]), st = Q("Calendar", [
	["rect", {
		width: "18",
		height: "18",
		x: "3",
		y: "4",
		rx: "2",
		ry: "2",
		key: "eu3xkr"
	}],
	["line", {
		x1: "16",
		x2: "16",
		y1: "2",
		y2: "6",
		key: "m3sa8f"
	}],
	["line", {
		x1: "8",
		x2: "8",
		y1: "2",
		y2: "6",
		key: "18kwsl"
	}],
	["line", {
		x1: "3",
		x2: "21",
		y1: "10",
		y2: "10",
		key: "xt86sb"
	}]
]), ct = Q("CheckCircle", [["path", {
	d: "M22 11.08V12a10 10 0 1 1-5.93-9.14",
	key: "g774vq"
}], ["path", {
	d: "m9 11 3 3L22 4",
	key: "1pflzl"
}]]), lt = Q("Check", [["path", {
	d: "M20 6 9 17l-5-5",
	key: "1gmf2c"
}]]), ut = Q("ChevronDown", [["path", {
	d: "m6 9 6 6 6-6",
	key: "qrunsl"
}]]), dt = Q("ChevronLeft", [["path", {
	d: "m15 18-6-6 6-6",
	key: "1wnfg3"
}]]), ft = Q("ChevronRight", [["path", {
	d: "m9 18 6-6-6-6",
	key: "mthhwq"
}]]), pt = Q("Clock", [["circle", {
	cx: "12",
	cy: "12",
	r: "10",
	key: "1mglay"
}], ["polyline", {
	points: "12 6 12 12 16 14",
	key: "68esgv"
}]]), mt = Q("Code", [["polyline", {
	points: "16 18 22 12 16 6",
	key: "z7tu5w"
}], ["polyline", {
	points: "8 6 2 12 8 18",
	key: "1eg1df"
}]]), ht = Q("Command", [["path", {
	d: "M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3",
	key: "11bfej"
}]]), gt = Q("Copy", [["rect", {
	width: "14",
	height: "14",
	x: "8",
	y: "8",
	rx: "2",
	ry: "2",
	key: "17jyea"
}], ["path", {
	d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",
	key: "zix9uf"
}]]), _t = Q("Download", [
	["path", {
		d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",
		key: "ih7n3h"
	}],
	["polyline", {
		points: "7 10 12 15 17 10",
		key: "2ggqvy"
	}],
	["line", {
		x1: "12",
		x2: "12",
		y1: "15",
		y2: "3",
		key: "1vk2je"
	}]
]), vt = Q("ExternalLink", [
	["path", {
		d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",
		key: "a6xqqp"
	}],
	["polyline", {
		points: "15 3 21 3 21 9",
		key: "mznyad"
	}],
	["line", {
		x1: "10",
		x2: "21",
		y1: "14",
		y2: "3",
		key: "18c3s4"
	}]
]), yt = Q("Eye", [["path", {
	d: "M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",
	key: "rwhkz3"
}], ["circle", {
	cx: "12",
	cy: "12",
	r: "3",
	key: "1v7zrd"
}]]), bt = Q("FileText", [
	["path", {
		d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",
		key: "1nnpy2"
	}],
	["polyline", {
		points: "14 2 14 8 20 8",
		key: "1ew0cm"
	}],
	["line", {
		x1: "16",
		x2: "8",
		y1: "13",
		y2: "13",
		key: "14keom"
	}],
	["line", {
		x1: "16",
		x2: "8",
		y1: "17",
		y2: "17",
		key: "17nazh"
	}],
	["line", {
		x1: "10",
		x2: "8",
		y1: "9",
		y2: "9",
		key: "1a5vjj"
	}]
]), xt = Q("File", [["path", {
	d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",
	key: "1nnpy2"
}], ["polyline", {
	points: "14 2 14 8 20 8",
	key: "1ew0cm"
}]]), St = Q("Github", [["path", {
	d: "M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",
	key: "tonef"
}], ["path", {
	d: "M9 18c-4.51 2-5-2-7-2",
	key: "9comsn"
}]]), Ct = Q("Heart", [["path", {
	d: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",
	key: "c3ymky"
}]]), wt = Q("Info", [
	["circle", {
		cx: "12",
		cy: "12",
		r: "10",
		key: "1mglay"
	}],
	["path", {
		d: "M12 16v-4",
		key: "1dtifu"
	}],
	["path", {
		d: "M12 8h.01",
		key: "e9boi3"
	}]
]), Tt = Q("Linkedin", [
	["path", {
		d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",
		key: "c2jq9f"
	}],
	["rect", {
		width: "4",
		height: "12",
		x: "2",
		y: "9",
		key: "mk3on5"
	}],
	["circle", {
		cx: "4",
		cy: "4",
		r: "2",
		key: "bt5ra8"
	}]
]), Et = Q("LogOut", [
	["path", {
		d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",
		key: "1uf3rs"
	}],
	["polyline", {
		points: "16 17 21 12 16 7",
		key: "1gabdz"
	}],
	["line", {
		x1: "21",
		x2: "9",
		y1: "12",
		y2: "12",
		key: "1uyos4"
	}]
]), Dt = Q("Menu", [
	["line", {
		x1: "4",
		x2: "20",
		y1: "12",
		y2: "12",
		key: "1e0a9i"
	}],
	["line", {
		x1: "4",
		x2: "20",
		y1: "6",
		y2: "6",
		key: "1owob3"
	}],
	["line", {
		x1: "4",
		x2: "20",
		y1: "18",
		y2: "18",
		key: "yk5zj1"
	}]
]), Ot = Q("Search", [["circle", {
	cx: "11",
	cy: "11",
	r: "8",
	key: "4ej97u"
}], ["path", {
	d: "m21 21-4.3-4.3",
	key: "1qie3q"
}]]), kt = Q("Settings", [["path", {
	d: "M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",
	key: "1qme2f"
}], ["circle", {
	cx: "12",
	cy: "12",
	r: "3",
	key: "1v7zrd"
}]]), At = Q("Share2", [
	["circle", {
		cx: "18",
		cy: "5",
		r: "3",
		key: "gq8acd"
	}],
	["circle", {
		cx: "6",
		cy: "12",
		r: "3",
		key: "w7nqdw"
	}],
	["circle", {
		cx: "18",
		cy: "19",
		r: "3",
		key: "1xt0gg"
	}],
	["line", {
		x1: "8.59",
		x2: "15.42",
		y1: "13.51",
		y2: "17.49",
		key: "47mynk"
	}],
	["line", {
		x1: "15.41",
		x2: "8.59",
		y1: "6.51",
		y2: "10.49",
		key: "1n3mei"
	}]
]), jt = Q("Star", [["polygon", {
	points: "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",
	key: "8f66p6"
}]]), Mt = Q("Twitter", [["path", {
	d: "M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",
	key: "pff0z6"
}]]), Nt = Q("Upload", [
	["path", {
		d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",
		key: "ih7n3h"
	}],
	["polyline", {
		points: "17 8 12 3 7 8",
		key: "t8dd8p"
	}],
	["line", {
		x1: "12",
		x2: "12",
		y1: "3",
		y2: "15",
		key: "widbto"
	}]
]), Pt = Q("User", [["path", {
	d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",
	key: "975kel"
}], ["circle", {
	cx: "12",
	cy: "7",
	r: "4",
	key: "17ys0d"
}]]), Ft = Q("XCircle", [
	["circle", {
		cx: "12",
		cy: "12",
		r: "10",
		key: "1mglay"
	}],
	["path", {
		d: "m15 9-6 6",
		key: "1uzhvr"
	}],
	["path", {
		d: "m9 9 6 6",
		key: "z0biqf"
	}]
]), It = Q("X", [["path", {
	d: "M18 6 6 18",
	key: "1bl5f8"
}], ["path", {
	d: "m6 6 12 12",
	key: "d8bk6v"
}]]), Lt = e.forwardRef(function({ items: t, allowMultiple: n = !1, defaultOpen: r = [], className: i, ...a }, o) {
	let [s, c] = e.useState(r), l = (e) => {
		c(n ? (t) => t.includes(e) ? t.filter((t) => t !== e) : [...t, e] : (t) => t.includes(e) ? [] : [e]);
	};
	return /* @__PURE__ */ u("div", {
		ref: o,
		className: q("space-y-2", i),
		...a,
		children: t.map((e) => {
			let t = s.includes(e.id);
			return /* @__PURE__ */ d("div", {
				className: q("rounded-2xl overflow-hidden", X(), "transition-all duration-500"),
				children: [/* @__PURE__ */ d("button", {
					onClick: () => l(e.id),
					className: "w-full flex items-center justify-between p-5 text-left",
					children: [/* @__PURE__ */ u("span", {
						className: "text-[11px] font-black uppercase tracking-widest text-white/70",
						children: e.title
					}), /* @__PURE__ */ u(ut, {
						size: 16,
						className: q("text-white/40 transition-transform duration-300", t && "rotate-180")
					})]
				}), /* @__PURE__ */ u("div", {
					className: q("overflow-hidden transition-all duration-500", t ? "max-h-96 opacity-100" : "max-h-0 opacity-0"),
					children: /* @__PURE__ */ u("div", {
						className: "px-5 pb-5 text-sm text-white/50 leading-relaxed",
						children: e.content
					})
				})]
			}, e.id);
		})
	});
});
Lt.displayName = "Accordion";
//#endregion
//#region src/components/ui/alert-item.tsx
var Rt = {
	info: {
		border: "border-blue-500/20",
		icon: "text-blue-400",
		dot: "bg-blue-500"
	},
	warning: {
		border: "border-white/20",
		icon: "text-white/70",
		dot: "bg-white"
	},
	error: {
		border: "border-white/20",
		icon: "text-white/70",
		dot: "bg-white"
	},
	success: {
		border: "border-blue-500/20",
		icon: "text-blue-400",
		dot: "bg-blue-500"
	}
}, zt = e.forwardRef(function({ title: e, description: t, variant: n = "info", onDismiss: r, className: i, ...a }, o) {
	let s = Rt[n];
	return /* @__PURE__ */ d("div", {
		ref: o,
		className: q("flex items-start gap-3 p-4 rounded-2xl", "bg-gradient-to-br from-white/[0.04] to-transparent backdrop-blur-xl border", s.border, Z("fast"), i),
		...a,
		children: [
			/* @__PURE__ */ u("div", { className: q("mt-0.5 h-2 w-2 rounded-full flex-shrink-0", s.dot) }),
			/* @__PURE__ */ d("div", {
				className: "flex-1 min-w-0",
				children: [/* @__PURE__ */ u("p", {
					className: q("text-sm font-semibold", s.icon),
					children: e
				}), t && /* @__PURE__ */ u("p", {
					className: "text-xs text-white/40 mt-1 leading-relaxed",
					children: t
				})]
			}),
			r && /* @__PURE__ */ u("button", {
				onClick: r,
				className: "p-1 rounded-lg text-white/20 hover:text-white/50 hover:bg-white/5 transition-colors",
				children: /* @__PURE__ */ u(It, { size: 14 })
			})
		]
	});
});
zt.displayName = "AlertItem";
//#endregion
//#region src/components/ui/animations.tsx
var Bt = e.forwardRef(function({ className: e, delay: t = 0, duration: n = 700, style: r, children: i, ...a }, o) {
	return /* @__PURE__ */ u("div", {
		ref: o,
		className: q("animate-in fade-in", e),
		style: {
			animationDuration: `${n}ms`,
			animationDelay: `${t}ms`,
			...r
		},
		...a,
		children: i
	});
});
Bt.displayName = "FadeIn";
var Vt = e.forwardRef(function({ className: e, delay: t = 0, duration: n = 700, style: r, children: i, ...a }, o) {
	return /* @__PURE__ */ u("div", {
		ref: o,
		className: q("animate-in fade-out", e),
		style: {
			animationDuration: `${n}ms`,
			animationDelay: `${t}ms`,
			...r
		},
		...a,
		children: i
	});
});
Vt.displayName = "FadeOut";
var Ht = e.forwardRef(function({ className: e, direction: t = "up", delay: n = 0, duration: r = 700, style: i, children: a, ...o }, s) {
	return /* @__PURE__ */ u("div", {
		ref: s,
		className: q("animate-in fade-in", {
			up: "slide-in-from-bottom-10",
			down: "slide-in-from-top-10",
			left: "slide-in-from-left-10",
			right: "slide-in-from-right-10"
		}[t], e),
		style: {
			animationDuration: `${r}ms`,
			animationDelay: `${n}ms`,
			...i
		},
		...o,
		children: a
	});
});
Ht.displayName = "SlideIn";
var Ut = e.forwardRef(function({ className: e, delay: t = 0, duration: n = 700, style: r, children: i, ...a }, o) {
	return /* @__PURE__ */ u("div", {
		ref: o,
		className: q("animate-in zoom-in-95 fade-in", e),
		style: {
			animationDuration: `${n}ms`,
			animationDelay: `${t}ms`,
			...r
		},
		...a,
		children: i
	});
});
Ut.displayName = "ScaleIn";
var Wt = e.forwardRef(function({ className: e, children: t, ...n }, r) {
	return /* @__PURE__ */ u("div", {
		ref: r,
		className: q("animate-spin", e),
		...n,
		children: t
	});
});
Wt.displayName = "Spin";
var Gt = e.forwardRef(function({ className: e, children: t, ...n }, r) {
	return /* @__PURE__ */ u("div", {
		ref: r,
		className: q("animate-pulse", e),
		...n,
		children: t
	});
});
Gt.displayName = "Pulse";
var Kt = e.forwardRef(function({ className: e, children: t, ...n }, r) {
	return /* @__PURE__ */ u("div", {
		ref: r,
		className: q("animate-bounce", e),
		...n,
		children: t
	});
});
Kt.displayName = "Bounce";
//#endregion
//#region src/components/ui/aspect-ratio.tsx
var qt = e.forwardRef(function({ className: e, ratio: t = 16 / 9, style: n, children: r, ...i }, a) {
	return /* @__PURE__ */ u("div", {
		ref: a,
		className: q("relative w-full", e),
		style: {
			paddingBottom: `${1 / t * 100}%`,
			...n
		},
		...i,
		children: /* @__PURE__ */ u("div", {
			className: "absolute inset-0",
			children: r
		})
	});
});
qt.displayName = "AspectRatio";
//#endregion
//#region node_modules/.pnpm/class-variance-authority@0.7.1/node_modules/class-variance-authority/dist/index.mjs
var Jt = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, Yt = p, $ = (e, t) => (n) => {
	if (t?.variants == null) return Yt(e, n?.class, n?.className);
	let { variants: r, defaultVariants: i } = t, a = Object.keys(r).map((e) => {
		let t = n?.[e], a = i?.[e];
		if (t === null) return null;
		let o = Jt(t) || Jt(a);
		return r[e][o];
	}), o = n && Object.entries(n).reduce((e, t) => {
		let [n, r] = t;
		return r === void 0 || (e[n] = r), e;
	}, {});
	return Yt(e, a, t?.compoundVariants?.reduce((e, t) => {
		let { class: n, className: r, ...a } = t;
		return Object.entries(a).every((e) => {
			let [t, n] = e;
			return Array.isArray(n) ? n.includes({
				...i,
				...o
			}[t]) : {
				...i,
				...o
			}[t] === n;
		}) ? [
			...e,
			n,
			r
		] : e;
	}, []), n?.class, n?.className);
}, Xt = $(q("relative inline-flex items-center justify-center overflow-hidden", "bg-gradient-to-tr from-blue-500 to-blue-400 p-[2px]", "cursor-pointer hover:rotate-6", Z("liquid"), "shadow-[0_4px_16px_rgba(59,130,246,0.3)]"), {
	variants: {
		size: {
			sm: "h-8 w-8 text-[10px]",
			md: "h-10 w-10 text-xs",
			lg: "h-14 w-14 text-sm",
			xl: "h-20 w-20 text-base"
		},
		radius: {
			full: "rounded-full",
			lg: "rounded-2xl",
			xl: "rounded-3xl"
		}
	},
	defaultVariants: {
		size: "md",
		radius: "full"
	}
});
function Zt(e) {
	return e.split(" ").map((e) => e[0]).join("").toUpperCase().slice(0, 2);
}
var Qt = e.forwardRef(function({ src: e, alt: t = "", fallback: n = "", size: r, radius: i, className: a, ...o }, s) {
	let c = Zt(n);
	return /* @__PURE__ */ u("div", {
		ref: s,
		className: q(Xt({
			size: r,
			radius: i
		}), a),
		...o,
		children: /* @__PURE__ */ u("div", {
			className: q("w-full h-full bg-black flex items-center justify-center overflow-hidden", i === "lg" ? "rounded-2xl" : i === "xl" ? "rounded-3xl" : "rounded-full"),
			children: e ? /* @__PURE__ */ u("img", {
				src: e,
				alt: t || n,
				className: "w-full h-full object-cover"
			}) : /* @__PURE__ */ u("span", {
				className: "text-white/70 font-bold",
				children: c || "?"
			})
		})
	});
});
Qt.displayName = "Avatar";
//#endregion
//#region src/components/ui/avatar-group.tsx
var $t = e.forwardRef(function({ children: t, max: n = 4, size: r = "md", className: i, ...a }, o) {
	let s = e.Children.toArray(t), c = s.slice(0, n), l = s.length - n, f = {
		sm: "h-8 w-8 text-[10px]",
		md: "h-10 w-10 text-xs",
		lg: "h-14 w-14 text-sm"
	};
	return /* @__PURE__ */ d("div", {
		ref: o,
		className: q("flex -space-x-3", i),
		...a,
		children: [c.map((e, t) => /* @__PURE__ */ u("div", {
			className: "relative",
			style: { zIndex: c.length - t },
			children: e
		}, t)), l > 0 && /* @__PURE__ */ d("div", {
			className: q("relative flex items-center justify-center rounded-full", X(), Z("fast"), "text-white/70 font-bold", f[r]),
			style: { zIndex: 0 },
			children: ["+", l]
		})]
	});
});
$t.displayName = "AvatarGroup";
//#endregion
//#region src/components/ui/background-decor.tsx
var en = e.forwardRef(function({ variant: e = "default", className: t, ...n }, r) {
	return /* @__PURE__ */ d("div", {
		ref: r,
		className: q("absolute inset-0 overflow-hidden pointer-events-none", t),
		...n,
		children: [
			e === "default" && /* @__PURE__ */ d(l, { children: [
				/* @__PURE__ */ u("div", { className: "absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-blue-500/20 via-blue-500/10 to-transparent blur-3xl animate-pulse" }),
				/* @__PURE__ */ u("div", {
					className: "absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-gradient-to-tr from-blue-500/15 via-blue-500/10 to-transparent blur-3xl animate-pulse",
					style: { animationDelay: "2s" }
				}),
				/* @__PURE__ */ u("div", {
					className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[400px] w-[400px] rounded-full bg-gradient-to-r from-blue-500/10 to-white/10 blur-3xl animate-pulse",
					style: { animationDelay: "4s" }
				})
			] }),
			e === "radial" && /* @__PURE__ */ d(l, { children: [/* @__PURE__ */ u("div", { className: "absolute top-0 left-1/2 -translate-x-1/2 h-[600px] w-[800px] bg-gradient-to-b from-blue-500/15 via-blue-500/5 to-transparent blur-3xl" }), /* @__PURE__ */ u("div", { className: "absolute bottom-0 left-1/4 h-[300px] w-[300px] rounded-full bg-gradient-to-t from-white/10 to-transparent blur-2xl" })] }),
			e === "mesh" && /* @__PURE__ */ d(l, { children: [
				/* @__PURE__ */ u("div", { className: "absolute top-0 left-0 h-[400px] w-[400px] rounded-full bg-blue-500/10 blur-[100px]" }),
				/* @__PURE__ */ u("div", { className: "absolute top-20 right-0 h-[350px] w-[350px] rounded-full bg-blue-500/10 blur-[100px]" }),
				/* @__PURE__ */ u("div", { className: "absolute bottom-0 left-1/3 h-[300px] w-[300px] rounded-full bg-white/10 blur-[100px]" }),
				/* @__PURE__ */ u("div", { className: "absolute bottom-20 right-1/4 h-[250px] w-[250px] rounded-full bg-white/8 blur-[100px]" })
			] })
		]
	});
});
en.displayName = "BackgroundDecor";
//#endregion
//#region src/components/ui/badge.tsx
var tn = $(q("inline-flex items-center font-black uppercase tracking-widest rounded-full border backdrop-blur-md"), {
	variants: {
		variant: {
			default: "bg-white/5 text-white/60 border-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]",
			blue: "bg-gradient-to-br from-blue-500/20 to-blue-500/10 text-blue-300 border-blue-400/30 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]"
		},
		size: {
			sm: "px-2 py-0.5 text-[8px]",
			md: "px-3 py-1 text-[9px]",
			lg: "px-4 py-1.5 text-[10px]"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "md"
	}
}), nn = e.forwardRef(({ className: e, variant: t, size: n, ...r }, i) => /* @__PURE__ */ u("span", {
	ref: i,
	className: q(tn({
		variant: t,
		size: n
	}), e),
	...r
}));
nn.displayName = "Badge";
//#endregion
//#region src/components/ui/bar-chart.tsx
var rn = e.forwardRef(function({ data: e, max: t, color: n = "from-blue-500 to-blue-400", className: r, ...i }, a) {
	let o = t ?? Math.max(...e.map((e) => e.value), 1);
	return /* @__PURE__ */ u("div", {
		ref: a,
		className: q("w-full", r),
		...i,
		children: /* @__PURE__ */ u("div", {
			className: "flex items-end gap-2 h-32",
			children: e.map((e, t) => {
				let r = e.value / o * 100;
				return /* @__PURE__ */ d("div", {
					className: "flex-1 flex flex-col items-center gap-1.5",
					children: [/* @__PURE__ */ u("div", {
						className: "w-full relative flex-1 flex items-end",
						children: /* @__PURE__ */ u("div", {
							className: q("w-full rounded-t-xl bg-gradient-to-t", n, Z("slow"), "hover:opacity-80 cursor-pointer", "shadow-[0_0_12px_rgba(59,130,246,0.2)]"),
							style: {
								height: `${r}%`,
								minHeight: "4px"
							}
						})
					}), /* @__PURE__ */ u("span", {
						className: "text-[9px] text-white/30 font-medium truncate w-full text-center",
						children: e.label
					})]
				}, t);
			})
		})
	});
});
rn.displayName = "BarChart";
//#endregion
//#region src/components/ui/breadcrumb.tsx
var an = e.forwardRef(function({ items: e, separator: t, className: n, ...r }, i) {
	return /* @__PURE__ */ u("nav", {
		ref: i,
		"aria-label": "Breadcrumb",
		className: q("", n),
		...r,
		children: /* @__PURE__ */ u("ol", {
			className: "flex items-center gap-1",
			children: e.map((n, r) => {
				let i = r === e.length - 1;
				return /* @__PURE__ */ d("li", {
					className: "flex items-center gap-1",
					children: [n.href && !i ? /* @__PURE__ */ u("a", {
						href: n.href,
						className: q("text-sm text-white/40 hover:text-white/70", Z("fast")),
						children: n.label
					}) : /* @__PURE__ */ u("span", {
						className: q("text-sm font-medium", i ? "bg-gradient-to-br from-white to-white/70 bg-clip-text text-transparent" : "text-white/40"),
						"aria-current": i ? "page" : void 0,
						children: n.label
					}), !i && /* @__PURE__ */ u("span", {
						className: "text-white/20",
						children: t || /* @__PURE__ */ u(ft, { size: 12 })
					})]
				}, n.label);
			})
		})
	});
});
an.displayName = "Breadcrumb";
//#endregion
//#region node_modules/.pnpm/@radix-ui+react-compose-refs@1.1.2_@types+react@18.3.29_react@18.3.1/node_modules/@radix-ui/react-compose-refs/dist/index.mjs
function on(e, t) {
	if (typeof e == "function") return e(t);
	e != null && (e.current = t);
}
function sn(...e) {
	return (t) => {
		let n = !1, r = e.map((e) => {
			let r = on(e, t);
			return !n && typeof r == "function" && (n = !0), r;
		});
		if (n) return () => {
			for (let t = 0; t < r.length; t++) {
				let n = r[t];
				typeof n == "function" ? n() : on(e[t], null);
			}
		};
	};
}
//#endregion
//#region node_modules/.pnpm/@radix-ui+react-slot@1.2.4_@types+react@18.3.29_react@18.3.1/node_modules/@radix-ui/react-slot/dist/index.mjs
var cn = Symbol.for("react.lazy"), ln = e.use;
function un(e) {
	return typeof e == "object" && !!e && "then" in e;
}
function dn(e) {
	return typeof e == "object" && !!e && "$$typeof" in e && e.$$typeof === cn && "_payload" in e && un(e._payload);
}
/* @__NO_SIDE_EFFECTS__ */
function fn(t) {
	let n = /* @__PURE__ */ mn(t), r = e.forwardRef((t, r) => {
		let { children: i, ...a } = t;
		dn(i) && typeof ln == "function" && (i = ln(i._payload));
		let o = e.Children.toArray(i), s = o.find(gn);
		if (s) {
			let t = s.props.children, i = o.map((n) => n === s ? e.Children.count(t) > 1 ? e.Children.only(null) : e.isValidElement(t) ? t.props.children : null : n);
			return /* @__PURE__ */ u(n, {
				...a,
				ref: r,
				children: e.isValidElement(t) ? e.cloneElement(t, void 0, i) : null
			});
		}
		return /* @__PURE__ */ u(n, {
			...a,
			ref: r,
			children: i
		});
	});
	return r.displayName = `${t}.Slot`, r;
}
var pn = /* @__PURE__ */ fn("Slot");
/* @__NO_SIDE_EFFECTS__ */
function mn(t) {
	let n = e.forwardRef((t, n) => {
		let { children: r, ...i } = t;
		if (dn(r) && typeof ln == "function" && (r = ln(r._payload)), e.isValidElement(r)) {
			let t = vn(r), a = _n(i, r.props);
			return r.type !== e.Fragment && (a.ref = n ? sn(n, t) : t), e.cloneElement(r, a);
		}
		return e.Children.count(r) > 1 ? e.Children.only(null) : null;
	});
	return n.displayName = `${t}.SlotClone`, n;
}
var hn = Symbol("radix.slottable");
function gn(t) {
	return e.isValidElement(t) && typeof t.type == "function" && "__radixId" in t.type && t.type.__radixId === hn;
}
function _n(e, t) {
	let n = { ...t };
	for (let r in t) {
		let i = e[r], a = t[r];
		/^on[A-Z]/.test(r) ? i && a ? n[r] = (...e) => {
			let t = a(...e);
			return i(...e), t;
		} : i && (n[r] = i) : r === "style" ? n[r] = {
			...i,
			...a
		} : r === "className" && (n[r] = [i, a].filter(Boolean).join(" "));
	}
	return {
		...e,
		...n
	};
}
function vn(e) {
	let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning;
	return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
//#endregion
//#region src/components/ui/button.tsx
var yn = $(q("inline-flex items-center justify-center gap-3", "rounded-2xl font-black uppercase tracking-[0.2em]", "transition-all duration-500 ease-out", "active:scale-95", "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50", "disabled:pointer-events-none disabled:opacity-50", "overflow-hidden relative group"), {
	variants: {
		variant: {
			primary: q("bg-gradient-to-br from-white via-white/90 to-white/80 text-black", "border border-white/30", "hover:shadow-[0_0_50px_rgba(255,255,255,0.3),inset_0_1px_2px_rgba(255,255,255,0.5)]"),
			accent: q("bg-gradient-to-br from-blue-600 to-blue-700 text-white", "shadow-[0_8px_24px_rgba(59,130,246,0.4),inset_0_1px_1px_rgba(255,255,255,0.2)]", "hover:shadow-[0_12px_32px_rgba(59,130,246,0.5),inset_0_1px_1px_rgba(255,255,255,0.3)]", "hover:-translate-y-0.5"),
			glass: q("bg-gradient-to-br from-white/10 via-white/5 to-white/[0.02]", "backdrop-blur-xl border border-white/15", "shadow-[0_8px_32px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.1)]", "hover:from-white/15 hover:via-white/8 hover:to-white/[0.03]", "hover:shadow-[0_12px_40px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.15)]", "text-white"),
			ghost: q("bg-transparent text-white/60", "hover:text-white hover:bg-gradient-to-br hover:from-white/5 hover:to-transparent", "hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]"),
			danger: q("bg-gradient-to-br from-white/10 to-white/5 text-white/70 border border-white/10", "hover:from-white/15 hover:to-white/10 hover:text-white", "hover:-translate-y-0.5")
		},
		size: {
			sm: "px-4 py-2 text-[9px]",
			md: "px-6 py-3.5 text-[10px]",
			lg: "px-8 py-4 text-xs"
		}
	},
	defaultVariants: {
		variant: "primary",
		size: "md"
	}
}), bn = e.forwardRef(({ className: e, variant: t, size: n, asChild: r = !1, loading: i, icon: a, children: o, disabled: s, ...c }, l) => /* @__PURE__ */ d(r ? pn : "button", {
	className: q(yn({
		variant: t,
		size: n
	}), e),
	ref: l,
	disabled: s || i,
	...c,
	children: [/* @__PURE__ */ u("div", { className: "absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" }), /* @__PURE__ */ d("span", {
		className: "relative z-10 flex items-center gap-3",
		children: [
			i && /* @__PURE__ */ d("svg", {
				className: "animate-spin h-3 w-3",
				viewBox: "0 0 24 24",
				children: [/* @__PURE__ */ u("circle", {
					className: "opacity-25",
					cx: "12",
					cy: "12",
					r: "10",
					stroke: "currentColor",
					strokeWidth: "4",
					fill: "none"
				}), /* @__PURE__ */ u("path", {
					className: "opacity-75",
					fill: "currentColor",
					d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
				})]
			}),
			o,
			a && /* @__PURE__ */ u(a, {
				size: 14,
				className: "group-hover:translate-x-1 group-hover:rotate-12 transition-all duration-300"
			})
		]
	})]
}));
bn.displayName = "Button";
//#endregion
//#region src/components/ui/calendar.tsx
var xn = [
	"Su",
	"Mo",
	"Tu",
	"We",
	"Th",
	"Fr",
	"Sa"
], Sn = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December"
];
function Cn(e, t) {
	return new Date(t, e + 1, 0).getDate();
}
function wn(e, t) {
	return new Date(t, e, 1).getDay();
}
var Tn = e.forwardRef(function({ month: e, year: t, selectedDate: n, onSelectDate: r, className: i, ...a }, o) {
	let s = /* @__PURE__ */ new Date(), c = e ?? s.getMonth(), l = t ?? s.getFullYear(), f = Cn(c, l), p = wn(c, l), m = (e) => n ? n.getDate() === e && n.getMonth() === c && n.getFullYear() === l : !1, h = (e) => s.getDate() === e && s.getMonth() === c && s.getFullYear() === l;
	return /* @__PURE__ */ d("div", {
		ref: o,
		className: q(X(), "rounded-3xl p-5", i),
		...a,
		children: [
			/* @__PURE__ */ d("div", {
				className: "text-sm font-bold text-white mb-4",
				children: [
					Sn[c],
					" ",
					l
				]
			}),
			/* @__PURE__ */ u("div", {
				className: "grid grid-cols-7 gap-1 mb-2",
				children: xn.map((e) => /* @__PURE__ */ u("div", {
					className: "text-center text-[9px] font-bold uppercase tracking-widest text-white/30 py-1",
					children: e
				}, e))
			}),
			/* @__PURE__ */ d("div", {
				className: "grid grid-cols-7 gap-1",
				children: [Array.from({ length: p }).map((e, t) => /* @__PURE__ */ u("div", {}, `empty-${t}`)), Array.from({ length: f }).map((e, t) => {
					let n = t + 1;
					return /* @__PURE__ */ u("button", {
						onClick: () => r?.(new Date(l, c, n)),
						className: q("aspect-square flex items-center justify-center rounded-xl text-xs font-medium", Z("fast"), m(n) ? "bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-[0_4px_12px_rgba(59,130,246,0.4)]" : h(n) ? "bg-white/10 text-white border border-white/20" : "text-white/40 hover:bg-white/5 hover:text-white"),
						children: n
					}, n);
				})]
			})
		]
	});
});
Tn.displayName = "Calendar";
//#endregion
//#region src/components/ui/callout.tsx
var En = {
	info: {
		bg: "from-blue-500/10 to-transparent",
		border: "border-blue-500/20",
		text: "text-blue-300"
	},
	warning: {
		bg: "from-white/10 to-transparent",
		border: "border-white/20",
		text: "text-white/70"
	},
	error: {
		bg: "from-white/10 to-transparent",
		border: "border-white/20",
		text: "text-white/70"
	},
	success: {
		bg: "from-blue-500/10 to-transparent",
		border: "border-blue-500/20",
		text: "text-blue-300"
	},
	tip: {
		bg: "from-white/10 to-transparent",
		border: "border-white/20",
		text: "text-white/70"
	}
}, Dn = e.forwardRef(function({ children: e, title: t, variant: n = "info", icon: r, className: i, ...a }, o) {
	let s = En[n];
	return /* @__PURE__ */ u("div", {
		ref: o,
		className: q("rounded-2xl p-4 border backdrop-blur-xl", `bg-gradient-to-r ${s.bg}`, s.border, Z("fast"), i),
		...a,
		children: /* @__PURE__ */ d("div", {
			className: "flex gap-3",
			children: [r && /* @__PURE__ */ u("div", {
				className: q("flex-shrink-0 mt-0.5", s.text),
				children: /* @__PURE__ */ u(r, { size: 16 })
			}), /* @__PURE__ */ d("div", { children: [t && /* @__PURE__ */ u("p", {
				className: q("text-sm font-bold mb-1", s.text),
				children: t
			}), /* @__PURE__ */ u("div", {
				className: "text-xs text-white/50 leading-relaxed",
				children: e
			})] })]
		})
	});
});
Dn.displayName = "Callout";
//#endregion
//#region src/components/ui/card.tsx
var On = $(q("rounded-[2rem] transition-all duration-500", "overflow-hidden relative"), {
	variants: {
		variant: {
			glass: q("bg-gradient-to-br from-white/[0.1] via-white/[0.05] to-white/[0.02]", "backdrop-blur-2xl border border-white/15", "shadow-[0_8px_32px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.1)]"),
			neuro: q("bg-[#0a0a0b]", "shadow-[8px_8px_16px_rgba(0,0,0,0.4),-8px_-8px_16px_rgba(255,255,255,0.03)]", "border border-white/5"),
			liquid: q("bg-gradient-to-br from-white/[0.08] via-white/[0.02] to-transparent", "backdrop-blur-xl border border-white/10", "shadow-[0_8px_32px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.1)]")
		},
		hoverable: {
			true: "hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)] cursor-pointer",
			false: ""
		}
	},
	defaultVariants: {
		variant: "glass",
		hoverable: !1
	}
}), kn = e.forwardRef(({ className: e, variant: t, hoverable: n, ...r }, i) => /* @__PURE__ */ u("div", {
	ref: i,
	className: q(On({
		variant: t,
		hoverable: n
	}), "p-6", e),
	...r
}));
kn.displayName = "Card";
var An = e.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ u("div", {
	ref: n,
	className: q("pb-4 border-b border-white/5", e),
	...t
}));
An.displayName = "CardHeader";
var jn = e.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ u("div", {
	ref: n,
	className: q("py-4", e),
	...t
}));
jn.displayName = "CardBody";
var Mn = e.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ u("div", {
	ref: n,
	className: q("pt-4 border-t border-white/5", e),
	...t
}));
Mn.displayName = "CardFooter";
//#endregion
//#region src/components/ui/carousel.tsx
var Nn = e.forwardRef(function({ children: t, showDots: n = !0, autoPlay: r = !1, interval: i = 5e3, className: a, ...o }, s) {
	let [c, l] = e.useState(0), f = e.Children.toArray(t), p = f.length, m = e.useCallback((e) => {
		l(e);
	}, []), h = e.useCallback(() => {
		l((e) => (e + 1) % p);
	}, [p]), g = e.useCallback(() => {
		l((e) => (e - 1 + p) % p);
	}, [p]);
	return e.useEffect(() => {
		if (!r) return;
		let e = setInterval(h, i);
		return () => clearInterval(e);
	}, [
		r,
		i,
		h
	]), /* @__PURE__ */ d("div", {
		ref: s,
		className: q("relative", a),
		...o,
		children: [
			/* @__PURE__ */ u("div", {
				className: q("overflow-hidden rounded-2xl", J()),
				children: /* @__PURE__ */ u("div", {
					className: "flex transition-transform duration-700 ease-out",
					style: { transform: `translateX(-${c * 100}%)` },
					children: f.map((e, t) => /* @__PURE__ */ u("div", {
						className: "flex-shrink-0 w-full",
						children: e
					}, t))
				})
			}),
			/* @__PURE__ */ u("button", {
				onClick: g,
				className: q("absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full", "bg-black/50 backdrop-blur-xl border border-white/10 text-white/70", "hover:text-white hover:bg-black/70", Z("fast"), "flex items-center justify-center"),
				children: /* @__PURE__ */ u(dt, { size: 20 })
			}),
			/* @__PURE__ */ u("button", {
				onClick: h,
				className: q("absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full", "bg-black/50 backdrop-blur-xl border border-white/10 text-white/70", "hover:text-white hover:bg-black/70", Z("fast"), "flex items-center justify-center"),
				children: /* @__PURE__ */ u(ft, { size: 20 })
			}),
			n && /* @__PURE__ */ u("div", {
				className: "flex items-center justify-center gap-2 mt-4",
				children: Array.from({ length: p }).map((e, t) => /* @__PURE__ */ u("button", {
					onClick: () => m(t),
					className: q("w-2 h-2 rounded-full transition-all", t === c ? "bg-blue-500 w-6" : "bg-white/20 hover:bg-white/40")
				}, t))
			})
		]
	});
});
Nn.displayName = "Carousel";
var Pn = e.forwardRef(function({ className: e, children: t, ...n }, r) {
	return /* @__PURE__ */ u("div", {
		ref: r,
		className: q("w-full", e),
		...n,
		children: t
	});
});
Pn.displayName = "CarouselItem";
//#endregion
//#region src/components/ui/checkbox.tsx
var Fn = e.forwardRef(function({ checked: e = !1, onChange: t, label: n, className: r, ...i }, a) {
	return /* @__PURE__ */ d("label", {
		ref: a,
		className: q("flex items-center gap-3 cursor-pointer group", r),
		...i,
		children: [/* @__PURE__ */ d("div", {
			className: q("relative w-5 h-5 rounded-lg", "flex items-center justify-center", e ? "bg-gradient-to-br from-blue-500 to-blue-600 shadow-[0_2px_8px_rgba(59,130,246,0.4)]" : Y(), Z("fast")),
			children: [/* @__PURE__ */ u("input", {
				type: "checkbox",
				className: "sr-only",
				checked: e,
				onChange: (e) => t?.(e.target.checked)
			}), e && /* @__PURE__ */ u(lt, {
				size: 12,
				className: "text-white"
			})]
		}), n && /* @__PURE__ */ u("span", {
			className: "text-xs font-bold text-white/70",
			children: n
		})]
	});
});
Fn.displayName = "Checkbox";
//#endregion
//#region src/components/ui/circular-progress.tsx
var In = { blue: {
	text: "text-blue-500",
	glow: "rgba(59,130,246,0.4)"
} }, Ln = e.forwardRef(({ value: e, variant: t = "blue", size: n = 64, className: r, ...i }, a) => {
	let o = (n - 4) / 2, s = 2 * Math.PI * o, c = s - Math.min(100, Math.max(0, e)) / 100 * s, l = In[t];
	return /* @__PURE__ */ d("div", {
		ref: a,
		className: q("relative inline-flex items-center justify-center", r),
		style: {
			width: n,
			height: n
		},
		...i,
		children: [/* @__PURE__ */ d("svg", {
			className: "transform -rotate-90",
			width: n,
			height: n,
			children: [/* @__PURE__ */ u("circle", {
				className: "text-white/5",
				strokeWidth: 4,
				stroke: "currentColor",
				fill: "transparent",
				r: o,
				cx: n / 2,
				cy: n / 2
			}), /* @__PURE__ */ u("circle", {
				className: q(l.text, "transition-all duration-700"),
				strokeWidth: 4,
				strokeDasharray: s,
				strokeDashoffset: c,
				strokeLinecap: "round",
				stroke: "currentColor",
				fill: "transparent",
				r: o,
				cx: n / 2,
				cy: n / 2,
				style: { filter: `drop-shadow(0 2px 8px ${l.glow})` }
			})]
		}), /* @__PURE__ */ d("span", {
			className: "absolute text-[9px] font-bold text-white/70",
			children: [e, "%"]
		})]
	});
});
Ln.displayName = "CircularProgress";
//#endregion
//#region src/components/ui/code-block.tsx
var Rn = e.forwardRef(function({ code: t, language: n, className: r, ...i }, a) {
	let [o, s] = e.useState(!1), c = () => {
		navigator.clipboard.writeText(t), s(!0), setTimeout(() => s(!1), 2e3);
	};
	return /* @__PURE__ */ d("div", {
		ref: a,
		className: q("group rounded-2xl overflow-hidden", X(), r),
		...i,
		children: [/* @__PURE__ */ d("div", {
			className: "flex items-center justify-between px-4 py-2 border-b border-white/5",
			children: [n ? /* @__PURE__ */ u("span", {
				className: "text-[9px] font-bold uppercase tracking-widest text-white/30",
				children: n
			}) : /* @__PURE__ */ u("span", {}), /* @__PURE__ */ u("button", {
				onClick: c,
				className: q("p-1.5 rounded-lg transition-colors", o ? "text-blue-400" : "text-white/30 hover:text-white/60"),
				children: u(o ? lt : gt, { size: 14 })
			})]
		}), /* @__PURE__ */ u("pre", {
			className: "p-4 overflow-x-auto",
			children: /* @__PURE__ */ u("code", {
				className: "text-xs text-white/60 font-mono leading-relaxed",
				children: t
			})
		})]
	});
});
Rn.displayName = "CodeBlock";
//#endregion
//#region src/components/ui/collapsible.tsx
var zn = e.forwardRef(function({ trigger: t, defaultOpen: n = !1, children: r, className: i, ...a }, o) {
	let [s, c] = e.useState(n);
	return /* @__PURE__ */ d("div", {
		ref: o,
		className: q("rounded-2xl overflow-hidden", X(), i),
		...a,
		children: [/* @__PURE__ */ d("button", {
			onClick: () => c(!s),
			className: "w-full flex items-center justify-between p-4 text-left",
			children: [/* @__PURE__ */ u("span", {
				className: "text-[11px] font-black uppercase tracking-widest text-white/70",
				children: t
			}), /* @__PURE__ */ u(ut, {
				size: 16,
				className: q("text-white/40 transition-transform duration-300", s && "rotate-180")
			})]
		}), /* @__PURE__ */ u("div", {
			className: q("overflow-hidden transition-all duration-500", s ? "max-h-96 opacity-100" : "max-h-0 opacity-0"),
			children: /* @__PURE__ */ u("div", {
				className: "px-4 pb-4",
				children: r
			})
		})]
	});
});
zn.displayName = "Collapsible";
//#endregion
//#region src/components/ui/color-picker.tsx
var Bn = e.forwardRef(function({ value: e = "#3b82f6", onChange: t, className: n, ...r }, i) {
	return /* @__PURE__ */ d("div", {
		className: q("flex items-center gap-3 p-3", X(), "rounded-2xl", n),
		children: [/* @__PURE__ */ u("input", {
			ref: i,
			type: "color",
			value: e,
			onChange: (e) => t?.(e.target.value),
			className: q("w-8 h-8 rounded-lg bg-transparent border-none cursor-pointer", "[&::-webkit-color-swatch-wrapper]:p-0", "[&::-webkit-color-swatch]:rounded-lg [&::-webkit-color-swatch]:border-none"),
			...r
		}), /* @__PURE__ */ u("span", {
			className: "text-xs font-bold text-white/60 uppercase",
			children: e
		})]
	});
});
Bn.displayName = "ColorPicker";
//#endregion
//#region src/components/ui/command.tsx
var Vn = e.forwardRef(function({ isOpen: t, onClose: n, items: r, placeholder: i = "Type a command...", className: a, ...o }, s) {
	let [c, l] = e.useState(""), [f, p] = e.useState(0), m = r.filter((e) => e.label.toLowerCase().includes(c.toLowerCase()));
	return e.useEffect(() => {
		p(0);
	}, [c]), e.useEffect(() => {
		t || l("");
	}, [t]), t ? /* @__PURE__ */ d("div", {
		className: "fixed inset-0 z-[300] flex items-start justify-center pt-[15vh]",
		children: [/* @__PURE__ */ u("div", {
			className: "absolute inset-0 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200",
			onClick: n
		}), /* @__PURE__ */ d("div", {
			ref: s,
			className: q("relative w-full max-w-lg mx-4", "bg-gradient-to-br from-white/[0.1] via-white/[0.05] to-white/[0.02] backdrop-blur-2xl", "border border-white/15 rounded-2xl", "shadow-[0_20px_60px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.1)]", "animate-in zoom-in-95 fade-in duration-200", "overflow-hidden", a),
			...o,
			children: [/* @__PURE__ */ d("div", {
				className: "flex items-center gap-3 px-4 py-3 border-b border-white/5",
				children: [
					/* @__PURE__ */ u(Ot, {
						size: 16,
						className: "text-white/30"
					}),
					/* @__PURE__ */ u("input", {
						type: "text",
						value: c,
						onChange: (e) => l(e.target.value),
						placeholder: i,
						className: "flex-1 bg-transparent border-none outline-none text-sm text-white placeholder:text-white/30",
						autoFocus: !0
					}),
					/* @__PURE__ */ u("kbd", {
						className: "text-[9px] font-mono text-white/30 px-1.5 py-0.5 rounded border border-white/10 bg-white/5",
						children: "ESC"
					})
				]
			}), /* @__PURE__ */ u("div", {
				className: "max-h-64 overflow-auto py-2",
				children: m.length === 0 ? /* @__PURE__ */ u("div", {
					className: "px-4 py-8 text-center text-white/30 text-sm",
					children: "No results found."
				}) : m.map((e, t) => {
					let r = e.icon;
					return /* @__PURE__ */ d("button", {
						onClick: () => {
							e.onSelect?.(), n();
						},
						onMouseEnter: () => p(t),
						className: q("w-full flex items-center gap-3 px-4 py-2.5 text-left transition-colors", t === f ? "bg-white/10" : "hover:bg-white/5"),
						children: [
							r && /* @__PURE__ */ u(r, {
								size: 16,
								className: "text-white/40"
							}),
							/* @__PURE__ */ u("span", {
								className: "flex-1 text-sm text-white/70",
								children: e.label
							}),
							e.shortcut && /* @__PURE__ */ u("kbd", {
								className: "text-[9px] font-mono text-white/30 px-1.5 py-0.5 rounded border border-white/10 bg-white/5",
								children: e.shortcut
							})
						]
					}, e.id);
				})
			})]
		})]
	}) : null;
});
Vn.displayName = "Command";
//#endregion
//#region src/components/ui/modal.tsx
var Hn = e.forwardRef(({ isOpen: e, onClose: t, title: n, children: r, size: i = "md", showClose: a = !0, className: o, ...s }, c) => e ? /* @__PURE__ */ d("div", {
	className: "fixed inset-0 z-[200] flex items-center justify-center",
	children: [/* @__PURE__ */ u("div", {
		className: "absolute inset-0 bg-black/80 backdrop-blur-sm animate-in fade-in duration-300",
		onClick: t
	}), /* @__PURE__ */ d("div", {
		ref: c,
		className: q("relative w-full mx-4 rounded-[2rem]", "bg-gradient-to-br from-white/[0.1] via-white/[0.05] to-white/[0.02] backdrop-blur-2xl", "border border-white/15", "shadow-[0_20px_60px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.1)]", "animate-in zoom-in-95 fade-in duration-300", {
			sm: "max-w-md",
			md: "max-w-lg",
			lg: "max-w-2xl",
			xl: "max-w-4xl",
			full: "max-w-[90vw]"
		}[i], o),
		...s,
		children: [n && /* @__PURE__ */ d("div", {
			className: "flex items-center justify-between p-6 border-b border-white/5",
			children: [/* @__PURE__ */ u("h3", {
				className: "text-xl font-bold bg-gradient-to-br from-white to-white/70 bg-clip-text text-transparent",
				children: n
			}), a && /* @__PURE__ */ u("button", {
				onClick: t,
				className: "p-2 hover:bg-white/5 rounded-xl transition-colors",
				children: /* @__PURE__ */ u(It, {
					size: 20,
					className: "text-white/60"
				})
			})]
		}), /* @__PURE__ */ u("div", {
			className: "p-6",
			children: r
		})]
	})]
}) : null);
Hn.displayName = "Modal";
//#endregion
//#region src/components/ui/dialog.tsx
var Un = e.forwardRef(({ isOpen: e, onClose: t, title: n, children: r, footer: i, className: a, ...o }, s) => /* @__PURE__ */ u(Hn, {
	ref: s,
	isOpen: e,
	onClose: t,
	title: n,
	showClose: !1,
	className: a,
	...o,
	children: /* @__PURE__ */ d("div", {
		className: "space-y-4",
		children: [r, i && /* @__PURE__ */ u("div", {
			className: "flex justify-end gap-4 pt-4 border-t border-white/5",
			children: i
		})]
	})
}));
Un.displayName = "Dialog";
//#endregion
//#region src/components/ui/confirm-dialog.tsx
var Wn = e.forwardRef(({ onConfirm: e, onClose: t, confirmText: n = "Confirm", cancelText: r = "Cancel", variant: i = "danger", ...a }, o) => /* @__PURE__ */ u(Un, {
	ref: o,
	onClose: t,
	footer: /* @__PURE__ */ d(l, { children: [/* @__PURE__ */ u(bn, {
		variant: "ghost",
		size: "sm",
		onClick: t,
		children: r
	}), /* @__PURE__ */ u(bn, {
		variant: i,
		size: "sm",
		onClick: e,
		children: n
	})] }),
	...a
}));
Wn.displayName = "ConfirmDialog";
//#endregion
//#region src/components/ui/counter.tsx
var Gn = e.forwardRef(function({ value: t, duration: n = 1e3, prefix: r = "", suffix: i = "", className: a, ...o }, s) {
	let [c, l] = e.useState(0);
	return e.useEffect(() => {
		let e = performance.now();
		function r(i) {
			let a = i - e, o = Math.min(a / n, 1), s = 1 - (1 - o) ** 3;
			l(Math.round(s * t)), o < 1 && requestAnimationFrame(r);
		}
		requestAnimationFrame(r);
	}, [t, n]), /* @__PURE__ */ d("span", {
		ref: s,
		className: q(Z("slow"), "font-black tabular-nums", a),
		...o,
		children: [
			r,
			c.toLocaleString(),
			i
		]
	});
});
Gn.displayName = "Counter";
//#endregion
//#region src/components/ui/date-picker.tsx
var Kn = e.forwardRef(function({ value: e, onChange: t, className: n, ...r }, i) {
	return /* @__PURE__ */ d("div", {
		className: q("flex items-center gap-3 px-5 py-3", X(), "rounded-2xl", Z("slow"), n),
		children: [/* @__PURE__ */ u(st, {
			size: 16,
			className: "text-white/30"
		}), /* @__PURE__ */ u("input", {
			ref: i,
			type: "date",
			value: e,
			onChange: (e) => t?.(e.target.value),
			className: q("bg-transparent border-none outline-none", "text-xs font-bold text-white/70", "calendar-dark", "[&::-webkit-calendar-picker-indicator]:invert [&::-webkit-calendar-picker-indicator]:opacity-50", "[&::-webkit-calendar-picker-indicator]:cursor-pointer"),
			...r
		})]
	});
});
Kn.displayName = "DatePicker";
//#endregion
//#region src/components/ui/divider.tsx
var qn = e.forwardRef(function({ className: e, orientation: t = "horizontal", ...n }, r) {
	return /* @__PURE__ */ u("div", {
		ref: r,
		className: q(t === "horizontal" ? "h-px w-full" : "w-px h-full", Ye(), e),
		...n
	});
});
qn.displayName = "Divider";
//#endregion
//#region src/components/ui/dropdown.tsx
var Jn = e.createContext({ close: () => {} }), Yn = e.forwardRef(({ trigger: t, align: n = "left", children: r, className: i, ...a }, o) => {
	let [s, c] = e.useState(!1), f = e.useCallback(() => c(!1), []);
	return /* @__PURE__ */ d("div", {
		ref: o,
		className: q("relative inline-block", i),
		...a,
		children: [/* @__PURE__ */ u("div", {
			onClick: () => c(!s),
			children: t
		}), s && /* @__PURE__ */ d(l, { children: [/* @__PURE__ */ u("div", {
			className: "fixed inset-0 z-40",
			onClick: () => c(!1)
		}), /* @__PURE__ */ u(Jn.Provider, {
			value: { close: f },
			children: /* @__PURE__ */ u("div", {
				className: q("absolute z-50 mt-2 min-w-[200px] py-2 rounded-2xl", "bg-gradient-to-br from-white/[0.1] via-white/[0.05] to-white/[0.02] backdrop-blur-2xl", "border border-white/15", "shadow-[0_12px_40px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.1)]", "animate-in fade-in slide-in-from-top-2 duration-200", n === "left" ? "left-0" : "right-0"),
				children: r
			})
		})] })]
	});
});
Yn.displayName = "Dropdown";
var Xn = e.forwardRef(({ className: t, icon: n, children: r, onClick: i, ...a }, o) => {
	let { close: s } = e.useContext(Jn);
	return /* @__PURE__ */ d("button", {
		ref: o,
		onClick: (e) => {
			i?.(e), s();
		},
		className: q("flex items-center gap-3 w-full px-4 py-2.5 text-xs font-bold text-white/60", "hover:bg-white/5 hover:text-white transition-all", t),
		...a,
		children: [n && /* @__PURE__ */ u(n, { size: 16 }), r]
	});
});
Xn.displayName = "DropdownItem";
var Zn = () => /* @__PURE__ */ u("div", { className: "my-2 h-px bg-white/5" });
//#endregion
//#region src/components/ui/file-card.tsx
function Qn(e) {
	return e ? e.includes("pdf") || e.includes("doc") || e.includes("txt") ? bt : e.includes("js") || e.includes("ts") || e.includes("json") || e.includes("html") || e.includes("css") ? mt : xt : xt;
}
var $n = e.forwardRef(function({ name: e, size: t, type: n, onDownload: r, className: i, ...a }, o) {
	let s = Qn(n);
	return /* @__PURE__ */ d("div", {
		ref: o,
		className: q("group flex items-center gap-4 p-4 rounded-2xl", X(), Z("fast"), "hover:shadow-[0_0_20px_rgba(59,130,246,0.08)]", i),
		...a,
		children: [
			/* @__PURE__ */ u("div", {
				className: "p-3 rounded-xl bg-white/[0.05] border border-white/10 text-blue-400",
				children: /* @__PURE__ */ u(s, { size: 20 })
			}),
			/* @__PURE__ */ d("div", {
				className: "flex-1 min-w-0",
				children: [/* @__PURE__ */ u("p", {
					className: "text-sm font-semibold text-white truncate",
					children: e
				}), /* @__PURE__ */ d("div", {
					className: "flex items-center gap-2 mt-0.5",
					children: [/* @__PURE__ */ u("span", {
						className: "text-[10px] text-white/30",
						children: t
					}), n && /* @__PURE__ */ u("span", {
						className: "text-[10px] text-white/20 uppercase",
						children: n
					})]
				})]
			}),
			r && /* @__PURE__ */ u("button", {
				onClick: r,
				className: "p-2 rounded-xl text-white/30 hover:text-blue-400 hover:bg-white/5 transition-colors",
				children: /* @__PURE__ */ u(_t, { size: 16 })
			})
		]
	});
});
$n.displayName = "FileCard";
//#endregion
//#region src/components/ui/file-upload.tsx
var er = e.forwardRef(function({ onChange: e, accept: t, multiple: n, description: r = "Drop files here or click to upload", hint: i = "PNG, JPG, GIF up to 10MB", className: a, ...o }, s) {
	return /* @__PURE__ */ d("label", {
		className: q("flex flex-col items-center justify-center gap-3 p-8", X(), "rounded-2xl", "cursor-pointer", "hover:bg-gradient-to-br hover:from-white/[0.08] hover:via-white/[0.04] hover:to-white/[0.02]", Z("fast"), a),
		children: [
			/* @__PURE__ */ u(Nt, {
				size: 32,
				className: "text-white/30"
			}),
			/* @__PURE__ */ d("div", {
				className: "text-center",
				children: [/* @__PURE__ */ u("p", {
					className: "text-sm font-bold text-white/70",
					children: r
				}), i && /* @__PURE__ */ u("p", {
					className: "text-xs text-white/40 mt-1",
					children: i
				})]
			}),
			/* @__PURE__ */ u("input", {
				ref: s,
				type: "file",
				className: "hidden",
				accept: t,
				multiple: n,
				onChange: e,
				...o
			})
		]
	});
});
er.displayName = "FileUpload";
//#endregion
//#region src/components/ui/form-field.tsx
var tr = e.forwardRef(function({ label: e, error: t, required: n, description: r, children: i, className: a, ...o }, s) {
	return /* @__PURE__ */ d("div", {
		ref: s,
		className: q("space-y-2", a),
		...o,
		children: [
			e && /* @__PURE__ */ d("label", {
				className: "block text-[10px] font-black uppercase tracking-widest text-white/60",
				children: [e, n && /* @__PURE__ */ u("span", {
					className: "ml-1 text-white/70",
					children: "*"
				})]
			}),
			r && /* @__PURE__ */ u("p", {
				className: "text-[9px] text-white/40 -mt-1",
				children: r
			}),
			i,
			t && /* @__PURE__ */ u("p", {
				className: "text-[9px] text-white/70",
				children: t
			})
		]
	});
});
tr.displayName = "FormField";
//#endregion
//#region src/components/ui/footer.tsx
var nr = e.forwardRef(function({ brand: e, sections: t = [], socials: n, copyright: r, className: i, ...a }, o) {
	let s = [
		n?.twitter && {
			icon: Mt,
			href: n.twitter,
			label: "Twitter"
		},
		n?.github && {
			icon: St,
			href: n.github,
			label: "GitHub"
		},
		n?.linkedin && {
			icon: Tt,
			href: n.linkedin,
			label: "LinkedIn"
		}
	].filter(Boolean);
	return /* @__PURE__ */ u("footer", {
		ref: o,
		className: q("border-t border-white/5", "bg-gradient-to-b from-transparent to-white/[0.02]", i),
		...a,
		children: /* @__PURE__ */ d("div", {
			className: "mx-auto max-w-7xl px-4 sm:px-6 py-12 lg:py-16",
			children: [/* @__PURE__ */ d("div", {
				className: "grid grid-cols-1 gap-8 lg:grid-cols-5",
				children: [/* @__PURE__ */ u("div", {
					className: "lg:col-span-2",
					children: e || /* @__PURE__ */ d("div", { children: [/* @__PURE__ */ d("a", {
						href: "/",
						className: "inline-flex items-center gap-2",
						children: [/* @__PURE__ */ u("div", {
							className: q("p-2 rounded-xl", J(), "text-blue-400"),
							children: /* @__PURE__ */ u(ot, { size: 18 })
						}), /* @__PURE__ */ u("span", {
							className: "font-bold text-sm tracking-tight bg-gradient-to-br from-white to-white/60 bg-clip-text text-transparent",
							children: "Vanguard"
						})]
					}), /* @__PURE__ */ u("p", {
						className: "mt-4 text-sm text-white/30 max-w-xs leading-relaxed",
						children: "A modern dark-themed UI component library with glassmorphism, neuromorphism, and liquid glass aesthetics."
					})] })
				}), t.map((e) => /* @__PURE__ */ d("div", { children: [/* @__PURE__ */ u("h3", {
					className: "text-xs font-bold uppercase tracking-widest text-white/50 mb-4",
					children: e.title
				}), /* @__PURE__ */ u("ul", {
					className: "space-y-2",
					children: e.links.map((e) => /* @__PURE__ */ u("li", { children: /* @__PURE__ */ u("a", {
						href: e.href,
						className: q("text-sm text-white/30 hover:text-white/70", Z("fast")),
						children: e.label
					}) }, e.label))
				})] }, e.title))]
			}), /* @__PURE__ */ d("div", {
				className: "mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4",
				children: [/* @__PURE__ */ u("p", {
					className: "text-xs text-white/20",
					children: r || `© ${(/* @__PURE__ */ new Date()).getFullYear()} Vanguard. All rights reserved.`
				}), s.length > 0 && /* @__PURE__ */ u("div", {
					className: "flex items-center gap-2",
					children: s.map((e) => /* @__PURE__ */ u("a", {
						href: e.href,
						target: "_blank",
						rel: "noopener noreferrer",
						"aria-label": e.label,
						className: q("p-2 rounded-xl", "bg-white/5 hover:bg-white/10 border border-white/10", "text-white/30 hover:text-white/60", Z("fast")),
						children: /* @__PURE__ */ u(e.icon, { size: 14 })
					}, e.label))
				})]
			})]
		})
	});
});
nr.displayName = "Footer";
//#endregion
//#region src/components/ui/glass-panel.tsx
var rr = e.forwardRef(function({ children: e, glow: t = !1, className: n, ...r }, i) {
	return /* @__PURE__ */ u("div", {
		ref: i,
		className: q(X(), Z("slow"), "rounded-3xl p-6", t && "shadow-[0_0_40px_rgba(59,130,246,0.15)]", n),
		...r,
		children: e
	});
});
rr.displayName = "GlassPanel";
//#endregion
//#region src/components/ui/heading.tsx
var ir = e.forwardRef(function({ className: e, level: t = 1, uppercase: n = !1, italic: r = !1, children: i, ...a }, o) {
	return /* @__PURE__ */ u(`h${t}`, {
		ref: o,
		className: q("font-black tracking-tighter", n && "uppercase", r && "italic", {
			1: "text-4xl md:text-5xl",
			2: "text-3xl md:text-4xl",
			3: "text-2xl md:text-3xl",
			4: "text-xl md:text-2xl"
		}[t], "bg-gradient-to-br from-white via-white/90 to-white/70 bg-clip-text text-transparent", e),
		...a,
		children: i
	});
});
ir.displayName = "Heading";
//#endregion
//#region src/components/ui/icon-button.tsx
var ar = $(q("inline-flex items-center justify-center", "transition-all duration-700 ease-out", "overflow-hidden relative group", "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50", "disabled:pointer-events-none disabled:opacity-50"), {
	variants: {
		variant: {
			glass: q("bg-gradient-to-br from-white/10 via-white/5 to-white/[0.02]", "backdrop-blur-xl border border-white/15", "shadow-[0_4px_16px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.1)]", "hover:from-white/15 hover:via-white/8 hover:to-white/[0.03]", "hover:shadow-[0_8px_24px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.15)]"),
			primary: q("bg-gradient-to-br from-blue-600 to-blue-700 text-white", "shadow-[0_4px_12px_rgba(59,130,246,0.4),inset_0_1px_1px_rgba(255,255,255,0.2)]", "hover:shadow-[0_8px_20px_rgba(59,130,246,0.5)]"),
			ghost: q("bg-transparent text-white/60", "hover:bg-gradient-to-br hover:from-white/5 hover:to-transparent", "hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]", "hover:text-white")
		},
		size: {
			sm: "w-8 h-8 rounded-lg",
			md: "w-10 h-10 rounded-xl",
			lg: "w-12 h-12 rounded-2xl"
		}
	},
	defaultVariants: {
		variant: "glass",
		size: "md"
	}
}), or = e.forwardRef(({ className: e, variant: t, size: n, icon: r, ...i }, a) => /* @__PURE__ */ d("button", {
	className: q(ar({
		variant: t,
		size: n
	}), e),
	ref: a,
	...i,
	children: [/* @__PURE__ */ u("div", { className: "absolute inset-0 rounded-[inherit] border border-white/5 opacity-0 group-hover:opacity-100 transition-opacity" }), /* @__PURE__ */ u(r, {
		size: 18,
		className: "relative z-10 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300"
	})]
}));
or.displayName = "IconButton";
//#endregion
//#region src/components/ui/input.tsx
var sr = e.forwardRef(function({ icon: e, className: t, ...n }, r) {
	return /* @__PURE__ */ d("div", {
		className: q("flex items-center gap-3 px-5 py-3", X(), "rounded-2xl", "focus-within:border-blue-400/50", "focus-within:shadow-[0_0_20px_rgba(59,130,246,0.2),inset_0_1px_0_rgba(255,255,255,0.1)]", Z("slow"), t),
		children: [
			e && /* @__PURE__ */ u(e, {
				size: 16,
				className: "text-white/30"
			}),
			/* @__PURE__ */ u("input", {
				ref: r,
				type: "text",
				className: q("bg-transparent border-none outline-none", "text-xs font-bold w-full", "placeholder:text-white/20"),
				...n
			}),
			/* @__PURE__ */ u(ht, {
				size: 14,
				className: "text-white/20"
			})
		]
	});
});
sr.displayName = "Input";
//#endregion
//#region src/components/ui/label.tsx
var cr = e.forwardRef(function({ className: e, children: t, ...n }, r) {
	return /* @__PURE__ */ u("label", {
		ref: r,
		className: q("block text-[10px] font-black uppercase tracking-widest text-white/60 mb-2", e),
		...n,
		children: t
	});
});
cr.displayName = "Label";
//#endregion
//#region src/components/ui/layouts.tsx
var lr = e.forwardRef(function({ className: e, columns: t = 2, gap: n = 4, children: r, style: i, ...a }, o) {
	return /* @__PURE__ */ u("div", {
		ref: o,
		className: q("grid", e),
		style: {
			gridTemplateColumns: `repeat(${t}, 1fr)`,
			gap: `${n * .25}rem`,
			...i
		},
		...a,
		children: r
	});
});
lr.displayName = "GridLayout";
var ur = e.forwardRef(function({ className: e, direction: t = "col", gap: n = 4, align: r, justify: i, wrap: a = !1, ...o }, s) {
	return /* @__PURE__ */ u("div", {
		ref: s,
		className: q(t === "row" ? "flex-row" : "flex-col", "flex", a && "flex-wrap", r && {
			start: "items-start",
			center: "items-center",
			end: "items-end",
			stretch: "items-stretch"
		}[r], i && {
			start: "justify-start",
			center: "justify-center",
			end: "justify-end",
			between: "justify-between",
			around: "justify-around",
			evenly: "justify-evenly"
		}[i], e),
		style: { gap: `${n * .25}rem` },
		...o
	});
});
ur.displayName = "Stack";
var dr = e.forwardRef(function(e, t) {
	return /* @__PURE__ */ u(ur, {
		ref: t,
		direction: "row",
		...e
	});
});
dr.displayName = "HStack";
var fr = e.forwardRef(function(e, t) {
	return /* @__PURE__ */ u(ur, {
		ref: t,
		direction: "col",
		...e
	});
});
fr.displayName = "VStack";
var pr = e.forwardRef(function({ className: e, ...t }, n) {
	return /* @__PURE__ */ u("div", {
		ref: n,
		className: q("flex items-center justify-center", e),
		...t
	});
});
pr.displayName = "Center";
var mr = () => /* @__PURE__ */ u("div", { className: "flex-1" });
mr.displayName = "Spacer";
//#endregion
//#region src/components/ui/line-chart.tsx
var hr = e.forwardRef(function({ data: e, labels: t, color: n = "#3b82f6", height: r = 120, className: i, ...a }, o) {
	let s = Math.max(...e, 1), c = Math.min(...e, 0), l = s - c || 1, f = r, p = e.map((t, n) => ({
		x: 4 + n / Math.max(e.length - 1, 1) * 292,
		y: f - 4 - (t - c) / l * (f - 8)
	})), m = p.map((e, t) => t === 0 ? `M ${e.x},${e.y}` : `L ${e.x},${e.y}`).join(" "), h = `${m} L ${p[p.length - 1].x},${f} L ${p[0].x},${f} Z`;
	return /* @__PURE__ */ d("div", {
		ref: o,
		className: q("w-full", i),
		...a,
		children: [/* @__PURE__ */ d("svg", {
			viewBox: `0 0 300 ${f}`,
			className: "w-full",
			style: { height: r },
			children: [
				/* @__PURE__ */ u("defs", { children: /* @__PURE__ */ d("linearGradient", {
					id: "lineGradient",
					x1: "0",
					y1: "0",
					x2: "0",
					y2: "1",
					children: [/* @__PURE__ */ u("stop", {
						offset: "0%",
						stopColor: n,
						stopOpacity: "0.3"
					}), /* @__PURE__ */ u("stop", {
						offset: "100%",
						stopColor: n,
						stopOpacity: "0"
					})]
				}) }),
				/* @__PURE__ */ u("path", {
					d: h,
					fill: "url(#lineGradient)"
				}),
				/* @__PURE__ */ u("path", {
					d: m,
					fill: "none",
					stroke: n,
					strokeWidth: "2",
					strokeLinecap: "round",
					strokeLinejoin: "round"
				}),
				p.map((e, t) => /* @__PURE__ */ u("circle", {
					cx: e.x,
					cy: e.y,
					r: "3",
					fill: n,
					className: "opacity-0 hover:opacity-100 transition-opacity"
				}, t))
			]
		}), t && t.length > 0 && /* @__PURE__ */ u("div", {
			className: "flex justify-between mt-2 px-1",
			children: t.map((e, t) => /* @__PURE__ */ u("span", {
				className: "text-[9px] text-white/30 font-medium",
				children: e
			}, t))
		})]
	});
});
hr.displayName = "LineChart";
//#endregion
//#region src/components/ui/logo.tsx
var gr = e.forwardRef(function({ href: e = "/", src: t, alt: n = "Logo", showText: r = !0, text: i = "Vanguard", size: a = "md", icon: o = ot, className: s, ...c }, l) {
	let f = {
		sm: {
			wrapper: "p-1.5 rounded-lg",
			icon: 14,
			text: "text-xs"
		},
		md: {
			wrapper: "p-2 rounded-xl",
			icon: 18,
			text: "text-sm"
		},
		lg: {
			wrapper: "p-3 rounded-2xl",
			icon: 24,
			text: "text-base"
		}
	}[a];
	return /* @__PURE__ */ d("a", {
		ref: l,
		href: e,
		className: q("inline-flex items-center gap-2 group", s),
		...c,
		children: [t ? /* @__PURE__ */ u("img", {
			src: t,
			alt: n,
			className: "h-8 w-8 rounded-xl object-contain"
		}) : /* @__PURE__ */ u("div", {
			className: q(f.wrapper, J(), "text-blue-400 group-hover:text-blue-300", Z("fast"), "group-hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]"),
			children: /* @__PURE__ */ u(o, { size: f.icon })
		}), r && /* @__PURE__ */ u("span", {
			className: q(f.text, "font-bold tracking-tight", "bg-gradient-to-br from-white to-white/60 bg-clip-text text-transparent"),
			children: i
		})]
	});
});
gr.displayName = "Logo";
//#endregion
//#region src/components/ui/navbar.tsx
var _r = e.forwardRef(function({ brand: t, items: n = [], scrolled: r = !1, search: i, notificationCount: a = 0, onNotificationClick: o, onSettingsClick: s, onLogout: c, avatar: l, actions: f, onMenuToggle: p, className: m, ...h }, g) {
	let [_, v] = e.useState(!1), [y, b] = e.useState("");
	return /* @__PURE__ */ u("header", {
		ref: g,
		className: q("sticky top-0 z-[100] w-full", "transition-all duration-500", r ? q(X(), "shadow-[0_8px_32px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.05)]") : "bg-transparent border-b border-white/5", m),
		...h,
		children: /* @__PURE__ */ u("div", {
			className: "mx-auto max-w-7xl px-4 sm:px-6",
			children: /* @__PURE__ */ d("div", {
				className: "flex h-16 items-center justify-between gap-4",
				children: [
					/* @__PURE__ */ d("div", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ u("button", {
							onClick: p,
							className: q("lg:hidden p-2 rounded-xl", "bg-white/5 hover:bg-white/10 border border-white/10", "text-white/50 hover:text-white", Z("fast")),
							"aria-label": "Toggle menu",
							children: /* @__PURE__ */ u(Dt, { size: 18 })
						}), t || /* @__PURE__ */ d("a", {
							href: "/",
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ u("div", {
								className: q("p-2 rounded-xl", J(), "text-blue-400"),
								children: /* @__PURE__ */ u(ot, { size: 20 })
							}), /* @__PURE__ */ u("span", {
								className: "font-bold text-sm tracking-tight bg-gradient-to-br from-white to-white/60 bg-clip-text text-transparent",
								children: "Vanguard"
							})]
						})]
					}),
					n.length > 0 && /* @__PURE__ */ u("nav", {
						className: "hidden lg:flex items-center gap-1",
						children: n.map((e) => /* @__PURE__ */ d("a", {
							href: e.href,
							className: q("flex items-center gap-1.5 px-3 py-2 rounded-xl text-sm font-medium", Z("fast"), e.active ? "bg-white/10 text-white border border-white/10" : "text-white/50 hover:text-white hover:bg-white/5"),
							children: [
								e.icon && /* @__PURE__ */ u(e.icon, { size: 14 }),
								e.label,
								e.children && e.children.length > 0 && /* @__PURE__ */ u(ut, {
									size: 12,
									className: "opacity-50"
								})
							]
						}, e.label))
					}),
					/* @__PURE__ */ d("div", {
						className: "flex items-center gap-2",
						children: [
							i && /* @__PURE__ */ u("div", {
								className: "relative",
								children: _ ? /* @__PURE__ */ d("div", {
									className: q("flex items-center gap-2 px-3 py-2 rounded-xl", J(), "animate-in fade-in slide-in-from-right-2 duration-200"),
									children: [/* @__PURE__ */ u(Ot, {
										size: 14,
										className: "text-white/40"
									}), /* @__PURE__ */ u("input", {
										autoFocus: !0,
										type: "text",
										placeholder: i.placeholder || "Search...",
										value: y,
										onChange: (e) => b(e.target.value),
										onKeyDown: (e) => {
											e.key === "Enter" && i.onSearch?.(y), e.key === "Escape" && v(!1);
										},
										className: "bg-transparent text-sm text-white placeholder-white/30 outline-none w-40"
									})]
								}) : /* @__PURE__ */ u("button", {
									onClick: () => v(!0),
									className: q("p-2 rounded-xl", "bg-white/5 hover:bg-white/10 border border-white/10", "text-white/50 hover:text-white", Z("fast")),
									"aria-label": "Search",
									children: /* @__PURE__ */ u(Ot, { size: 16 })
								})
							}),
							o && /* @__PURE__ */ d("button", {
								onClick: o,
								className: q("relative p-2 rounded-xl", "bg-white/5 hover:bg-white/10 border border-white/10", "text-white/50 hover:text-white", Z("fast")),
								"aria-label": "Notifications",
								children: [/* @__PURE__ */ u(at, { size: 16 }), a > 0 && /* @__PURE__ */ u("span", {
									className: "absolute -top-0.5 -right-0.5 flex h-4 min-w-[1rem] items-center justify-center rounded-full bg-white px-1 text-[9px] font-bold text-white",
									children: a > 99 ? "99+" : a
								})]
							}),
							f,
							(l || s || c) && /* @__PURE__ */ u("div", { className: "h-6 w-px bg-white/10 mx-1" }),
							s && /* @__PURE__ */ u("button", {
								onClick: s,
								className: q("p-2 rounded-xl", "bg-white/5 hover:bg-white/10 border border-white/10", "text-white/50 hover:text-white", Z("fast")),
								"aria-label": "Settings",
								children: /* @__PURE__ */ u(kt, { size: 16 })
							}),
							l && /* @__PURE__ */ u("button", {
								className: q("flex items-center gap-2 px-2 py-1.5 rounded-xl", "hover:bg-white/5", Z("fast")),
								children: l.src ? /* @__PURE__ */ u("img", {
									src: l.src,
									alt: l.name || "Avatar",
									className: "h-8 w-8 rounded-xl object-cover border border-white/10"
								}) : /* @__PURE__ */ u("div", {
									className: q("h-8 w-8 rounded-xl", J(), "flex items-center justify-center text-sm font-bold text-white/60"),
									children: l.name?.[0]?.toUpperCase() || "U"
								})
							}),
							c && /* @__PURE__ */ u("button", {
								onClick: c,
								className: q("p-2 rounded-xl", "bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20", "text-white/50 hover:text-white", Z("fast")),
								"aria-label": "Logout",
								children: /* @__PURE__ */ u(Et, { size: 16 })
							})
						]
					})
				]
			})
		})
	});
});
_r.displayName = "Navbar";
//#endregion
//#region src/components/ui/product-card.tsx
var vr = e.forwardRef(function({ name: e, image: t, price: n, originalPrice: r, rating: i, reviews: a, tags: o, onFavorite: s, onShare: c, className: l, ...f }, p) {
	return /* @__PURE__ */ d("div", {
		ref: p,
		className: q("group rounded-3xl overflow-hidden", X(), Z("slow"), "hover:shadow-[0_0_30px_rgba(59,130,246,0.1)]", l),
		...f,
		children: [/* @__PURE__ */ d("div", {
			className: "relative aspect-[4/3] bg-gradient-to-br from-white/[0.04] to-transparent overflow-hidden",
			children: [
				t ? /* @__PURE__ */ u("img", {
					src: t,
					alt: e,
					className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
				}) : /* @__PURE__ */ u("div", {
					className: "w-full h-full flex items-center justify-center",
					children: /* @__PURE__ */ u(yt, {
						size: 32,
						className: "text-white/10"
					})
				}),
				o && o.length > 0 && /* @__PURE__ */ u("div", {
					className: "absolute top-3 left-3 flex gap-1.5",
					children: o.map((e, t) => /* @__PURE__ */ u("span", {
						className: "text-[8px] font-bold uppercase tracking-widest px-2 py-1 rounded-full bg-black/60 backdrop-blur-md text-white/70 border border-white/10",
						children: e
					}, t))
				}),
				/* @__PURE__ */ d("div", {
					className: "absolute top-3 right-3 flex flex-col gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity",
					children: [s && /* @__PURE__ */ u("button", {
						onClick: s,
						className: "p-2 rounded-xl bg-black/60 backdrop-blur-md border border-white/10 text-white/50 hover:text-white transition-colors",
						children: /* @__PURE__ */ u(Ct, { size: 14 })
					}), c && /* @__PURE__ */ u("button", {
						onClick: c,
						className: "p-2 rounded-xl bg-black/60 backdrop-blur-md border border-white/10 text-white/50 hover:text-blue-400 transition-colors",
						children: /* @__PURE__ */ u(At, { size: 14 })
					})]
				})
			]
		}), /* @__PURE__ */ d("div", {
			className: "p-5",
			children: [
				/* @__PURE__ */ u("h3", {
					className: "text-sm font-bold text-white truncate mb-2",
					children: e
				}),
				i !== void 0 && /* @__PURE__ */ d("div", {
					className: "flex items-center gap-1.5 mb-2",
					children: [Array.from({ length: 5 }).map((e, t) => /* @__PURE__ */ u(jt, {
						size: 12,
						className: t < i ? "text-white fill-white" : "text-white/10"
					}, t)), a !== void 0 && /* @__PURE__ */ d("span", {
						className: "text-[10px] text-white/30 ml-1",
						children: [
							"(",
							a,
							")"
						]
					})]
				}),
				/* @__PURE__ */ d("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ d("span", {
						className: "text-lg font-black text-white",
						children: ["$", n]
					}), r && /* @__PURE__ */ d("span", {
						className: "text-xs text-white/30 line-through",
						children: ["$", r]
					})]
				})
			]
		})]
	});
});
vr.displayName = "ProductCard";
//#endregion
//#region src/components/ui/progress-bar.tsx
var yr = $("h-full rounded-full transition-all duration-700", {
	variants: { variant: {
		blue: "bg-gradient-to-r from-blue-500 to-blue-600 shadow-[0_2px_12px_rgba(59,130,246,0.4)]",
		gradient: "bg-gradient-to-r from-blue-500 to-blue-400 shadow-[0_2px_12px_rgba(59,130,246,0.4)]"
	} },
	defaultVariants: { variant: "blue" }
}), br = e.forwardRef(({ value: e, variant: t, size: n = "md", showLabel: r = !1, className: i, ...a }, o) => {
	let s = {
		sm: "h-1",
		md: "h-2",
		lg: "h-3"
	};
	return /* @__PURE__ */ d("div", {
		ref: o,
		className: i,
		...a,
		children: [r && /* @__PURE__ */ d("div", {
			className: "flex justify-between mb-2",
			children: [/* @__PURE__ */ u("span", {
				className: "text-[9px] font-bold text-white/60",
				children: "Progress"
			}), /* @__PURE__ */ d("span", {
				className: "text-[9px] font-bold text-white/40",
				children: [e, "%"]
			})]
		}), /* @__PURE__ */ u("div", {
			className: q("w-full rounded-full overflow-hidden", "bg-[#0a0a0b] shadow-[inset_4px_4px_8px_rgba(0,0,0,0.4),inset_-4px_-4px_8px_rgba(255,255,255,0.03)]"),
			children: /* @__PURE__ */ u("div", {
				className: q(yr({ variant: t }), s[n]),
				style: { width: `${Math.min(100, Math.max(0, e))}%` }
			})
		})]
	});
});
br.displayName = "ProgressBar";
//#endregion
//#region src/components/ui/project-row.tsx
var xr = {
	active: "bg-blue-500/20 text-blue-400 border-blue-500/30",
	paused: "bg-white/20 text-white/70 border-white/30",
	completed: "bg-blue-500/20 text-blue-400 border-blue-500/30"
}, Sr = e.forwardRef(function({ name: e, description: t, icon: n, status: r, meta: i, href: a, className: o, ...s }, c) {
	return /* @__PURE__ */ d("div", {
		ref: c,
		className: q("group flex items-center gap-4 p-4 rounded-2xl", "bg-gradient-to-br from-white/[0.04] to-transparent", "border border-white/5 hover:border-white/10", Z("fast"), "hover:bg-white/[0.06] cursor-pointer", o),
		...s,
		children: [
			n && /* @__PURE__ */ u("div", {
				className: "p-3 rounded-xl bg-white/[0.05] border border-white/10 text-white/50 group-hover:text-blue-400 transition-colors",
				children: /* @__PURE__ */ u(n, { size: 18 })
			}),
			/* @__PURE__ */ d("div", {
				className: "flex-1 min-w-0",
				children: [/* @__PURE__ */ d("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ u("span", {
						className: "text-sm font-semibold text-white truncate",
						children: e
					}), r && /* @__PURE__ */ u("span", {
						className: q("text-[8px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full border", xr[r]),
						children: r
					})]
				}), t && /* @__PURE__ */ u("p", {
					className: "text-xs text-white/30 truncate mt-0.5",
					children: t
				})]
			}),
			i && /* @__PURE__ */ u("span", {
				className: "text-[10px] text-white/30 font-medium hidden sm:block",
				children: i
			}),
			a && /* @__PURE__ */ u(vt, {
				size: 14,
				className: "text-white/20 group-hover:text-white/50 transition-colors"
			})
		]
	});
});
Sr.displayName = "ProjectRow";
//#endregion
//#region src/components/ui/radio-group.tsx
var Cr = e.forwardRef(function({ options: e, value: t, onChange: n, name: r = "radio", className: i, ...a }, o) {
	return /* @__PURE__ */ u("div", {
		ref: o,
		className: q("space-y-3", i),
		...a,
		children: e.map((e) => /* @__PURE__ */ d("label", {
			className: "flex items-center gap-3 cursor-pointer group",
			children: [/* @__PURE__ */ d("div", {
				className: q("relative w-4 h-4 rounded-full", "flex items-center justify-center", t === e.value ? "bg-gradient-to-br from-blue-500 to-blue-600 shadow-[0_2px_8px_rgba(59,130,246,0.4)]" : Y(), Z("fast")),
				children: [/* @__PURE__ */ u("input", {
					type: "radio",
					className: "sr-only",
					name: r,
					value: e.value,
					checked: t === e.value,
					onChange: (e) => n?.(e.target.value)
				}), t === e.value && /* @__PURE__ */ u("div", { className: "w-1.5 h-1.5 rounded-full bg-white" })]
			}), /* @__PURE__ */ u("span", {
				className: "text-xs font-bold text-white/70",
				children: e.label
			})]
		}, e.value))
	});
});
Cr.displayName = "RadioGroup";
//#endregion
//#region src/components/ui/rating.tsx
var wr = e.forwardRef(function({ value: t, max: n = 5, size: r = 16, interactive: i = !1, onChange: a, className: o, ...s }, c) {
	let [l, d] = e.useState(null), f = l ?? t;
	return /* @__PURE__ */ u("div", {
		ref: c,
		className: q("flex gap-0.5", o),
		...s,
		children: Array.from({ length: n }).map((e, t) => {
			let n = t < f;
			return /* @__PURE__ */ u("button", {
				type: "button",
				disabled: !i,
				onMouseEnter: () => i && d(t + 1),
				onMouseLeave: () => i && d(null),
				onClick: () => a?.(t + 1),
				className: q(i && "cursor-pointer hover:scale-125", Z("fast"), !i && "cursor-default"),
				children: /* @__PURE__ */ u(jt, {
					size: r,
					className: q(n ? "text-white fill-white" : "text-white/10")
				})
			}, t);
		})
	});
});
wr.displayName = "Rating";
//#endregion
//#region src/components/ui/search-input.tsx
var Tr = e.forwardRef(function({ placeholder: e = "Search...", className: t, ...n }, r) {
	return /* @__PURE__ */ d("div", {
		className: q("flex items-center gap-3 px-5 py-3", X(), "rounded-2xl", "focus-within:border-blue-400/50", "focus-within:shadow-[0_0_20px_rgba(59,130,246,0.2)]", Z("slow"), t),
		children: [
			/* @__PURE__ */ u(Ot, {
				size: 16,
				className: "text-white/30"
			}),
			/* @__PURE__ */ u("input", {
				ref: r,
				type: "text",
				placeholder: e,
				className: q("bg-transparent border-none outline-none", "text-xs font-bold w-full md:w-48", "placeholder:text-white/20"),
				...n
			}),
			/* @__PURE__ */ u(ht, {
				size: 14,
				className: "text-white/20"
			})
		]
	});
});
Tr.displayName = "SearchInput";
//#endregion
//#region src/components/ui/select.tsx
var Er = e.forwardRef(function({ options: e, value: t, onChange: n, placeholder: r = "Select...", className: i, ...a }, o) {
	return /* @__PURE__ */ d("div", {
		className: q("relative", X(), "rounded-2xl", i),
		children: [/* @__PURE__ */ d("select", {
			ref: o,
			value: t,
			onChange: (e) => n?.(e.target.value),
			className: q("w-full appearance-none bg-transparent border-none outline-none", "px-5 py-3 text-xs font-bold text-white cursor-pointer", !t && "text-white/20"),
			...a,
			children: [/* @__PURE__ */ u("option", {
				value: "",
				className: "bg-[#0a0a0b]",
				children: r
			}), e.map((e) => /* @__PURE__ */ u("option", {
				value: e.value,
				className: "bg-[#0a0a0b]",
				children: e.label
			}, e.value))]
		}), /* @__PURE__ */ u(ut, {
			size: 16,
			className: "absolute right-4 top-1/2 -translate-y-1/2 text-white/30 pointer-events-none"
		})]
	});
});
Er.displayName = "Select";
//#endregion
//#region src/components/ui/sheet.tsx
var Dr = e.forwardRef(function({ isOpen: e, onClose: t, title: n, position: r = "right", size: i = "md", children: a, className: o, ...s }, c) {
	if (!e) return null;
	let l = {
		left: {
			sm: "w-80",
			md: "w-96",
			lg: "w-[32rem]",
			xl: "w-[40rem]",
			container: "left-0 top-0 h-full",
			anim: "slide-in-from-left"
		},
		right: {
			sm: "w-80",
			md: "w-96",
			lg: "w-[32rem]",
			xl: "w-[40rem]",
			container: "right-0 top-0 h-full",
			anim: "slide-in-from-right"
		},
		top: {
			sm: "h-80",
			md: "h-96",
			lg: "h-[32rem]",
			xl: "h-[40rem]",
			container: "top-0 left-0 w-full",
			anim: "slide-in-from-top"
		},
		bottom: {
			sm: "h-80",
			md: "h-96",
			lg: "h-[32rem]",
			xl: "h-[40rem]",
			container: "bottom-0 left-0 w-full",
			anim: "slide-in-from-bottom"
		}
	}[r];
	return /* @__PURE__ */ d("div", {
		className: "fixed inset-0 z-[200]",
		children: [/* @__PURE__ */ u("div", {
			className: "absolute inset-0 bg-black/80 backdrop-blur-sm animate-in fade-in duration-300",
			onClick: t
		}), /* @__PURE__ */ d("div", {
			ref: c,
			className: q("fixed", l.container, l[i], "bg-gradient-to-br from-white/[0.08] via-white/[0.02] to-transparent backdrop-blur-2xl", "border-l border-white/10", "shadow-[0_20px_60px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.1)]", "animate-in", l.anim, "duration-300", "flex flex-col", o),
			...s,
			children: [n && /* @__PURE__ */ d("div", {
				className: "flex items-center justify-between p-6 border-b border-white/5",
				children: [/* @__PURE__ */ u("h3", {
					className: "text-lg font-bold bg-gradient-to-br from-white to-white/70 bg-clip-text text-transparent",
					children: n
				}), /* @__PURE__ */ u("button", {
					onClick: t,
					className: "p-2 hover:bg-white/5 rounded-xl transition-colors",
					children: /* @__PURE__ */ u(It, {
						size: 20,
						className: "text-white/60"
					})
				})]
			}), /* @__PURE__ */ u("div", {
				className: "flex-1 overflow-auto p-6",
				children: a
			})]
		})]
	});
});
Dr.displayName = "Sheet";
//#endregion
//#region src/components/ui/skeleton.tsx
var Or = e.forwardRef(function({ className: e, variant: t = "default", ...n }, r) {
	return /* @__PURE__ */ u("div", {
		ref: r,
		className: q("animate-pulse rounded-xl", t === "glass" ? "bg-white/5 backdrop-blur-xl" : "bg-white/10", e),
		...n
	});
});
Or.displayName = "Skeleton";
var kr = e.forwardRef(function({ className: e, lines: t = 3, ...n }, r) {
	return /* @__PURE__ */ u("div", {
		ref: r,
		className: q("space-y-2", e),
		...n,
		children: Array.from({ length: t }).map((e, n) => /* @__PURE__ */ u("div", { className: q("h-3 rounded-lg animate-pulse", n === t - 1 ? "w-3/4" : "w-full", "bg-white/10") }, n))
	});
});
kr.displayName = "SkeletonText";
var Ar = e.forwardRef(function({ className: e, ...t }, n) {
	return /* @__PURE__ */ d("div", {
		ref: n,
		className: q("rounded-2xl p-6 animate-pulse", "bg-gradient-to-br from-white/[0.05] via-white/[0.02] to-transparent", "border border-white/10", e),
		...t,
		children: [/* @__PURE__ */ d("div", {
			className: "flex items-center gap-4 mb-4",
			children: [/* @__PURE__ */ u("div", { className: "w-10 h-10 rounded-xl bg-white/10" }), /* @__PURE__ */ d("div", {
				className: "flex-1 space-y-2",
				children: [/* @__PURE__ */ u("div", { className: "h-3 w-1/2 rounded-lg bg-white/10" }), /* @__PURE__ */ u("div", { className: "h-2 w-1/3 rounded-lg bg-white/5" })]
			})]
		}), /* @__PURE__ */ d("div", {
			className: "space-y-2",
			children: [
				/* @__PURE__ */ u("div", { className: "h-3 rounded-lg bg-white/10" }),
				/* @__PURE__ */ u("div", { className: "h-3 rounded-lg bg-white/10" }),
				/* @__PURE__ */ u("div", { className: "h-3 w-3/4 rounded-lg bg-white/10" })
			]
		})]
	});
});
Ar.displayName = "SkeletonCard";
//#endregion
//#region src/components/ui/slider.tsx
var jr = e.forwardRef(function({ value: e = 0, onChange: t, min: n = 0, max: r = 100, className: i, ...a }, o) {
	let s = (e - n) / (r - n) * 100;
	return /* @__PURE__ */ d("div", {
		className: q("relative w-full", i),
		children: [/* @__PURE__ */ d("div", {
			className: "flex justify-between mb-2",
			children: [
				/* @__PURE__ */ u("span", {
					className: "text-[9px] font-bold text-white/40",
					children: n
				}),
				/* @__PURE__ */ u("span", {
					className: "text-[9px] font-bold text-white/70",
					children: e
				}),
				/* @__PURE__ */ u("span", {
					className: "text-[9px] font-bold text-white/40",
					children: r
				})
			]
		}), /* @__PURE__ */ d("div", {
			className: q("relative w-full h-2 rounded-full", Y()),
			children: [
				/* @__PURE__ */ u("div", {
					className: "absolute h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full shadow-[0_2px_12px_rgba(59,130,246,0.4)]",
					style: { width: `${s}%` }
				}),
				/* @__PURE__ */ u("input", {
					ref: o,
					type: "range",
					min: n,
					max: r,
					value: e,
					onChange: (e) => t?.(Number(e.target.value)),
					className: "absolute inset-0 w-full h-full opacity-0 cursor-pointer",
					...a
				}),
				/* @__PURE__ */ u("div", {
					className: q("absolute top-1/2 -translate-y-1/2 w-5 h-5 rounded-full", "bg-gradient-to-br from-white to-white/90 shadow-lg", "pointer-events-none transition-all duration-100"),
					style: { left: `calc(${s}% - 10px)` }
				})
			]
		})]
	});
});
jr.displayName = "Slider";
//#endregion
//#region src/components/ui/spinner.tsx
var Mr = $("animate-spin rounded-full border-t-transparent", {
	variants: {
		variant: {
			blue: "border-blue-500 shadow-[0_0_12px_rgba(59,130,246,0.4)]",
			white: "border-white/60"
		},
		size: {
			sm: "w-4 h-4 border-2",
			md: "w-8 h-8 border-2",
			lg: "w-12 h-12 border-[3px]",
			xl: "w-16 h-16 border-4"
		}
	},
	defaultVariants: {
		variant: "blue",
		size: "md"
	}
}), Nr = e.forwardRef(function({ className: e, variant: t, size: n, ...r }, i) {
	return /* @__PURE__ */ u("div", {
		ref: i,
		className: q("inline-flex items-center justify-center", e),
		...r,
		children: /* @__PURE__ */ u("div", { className: q(Mr({
			variant: t,
			size: n
		})) })
	});
});
Nr.displayName = "Spinner";
//#endregion
//#region src/components/ui/split-view.tsx
var Pr = e.forwardRef(function({ left: e, right: t, split: n = 50, direction: r = "horizontal", className: i, ...a }, o) {
	let s = r === "horizontal";
	return /* @__PURE__ */ d("div", {
		ref: o,
		className: q("flex", s ? "flex-row" : "flex-col", "rounded-3xl overflow-hidden border border-white/5", i),
		...a,
		children: [
			/* @__PURE__ */ u("div", {
				className: "overflow-auto",
				style: s ? { width: `${n}%` } : { height: `${n}%` },
				children: e
			}),
			/* @__PURE__ */ u("div", { className: "w-px bg-gradient-to-b from-white/10 via-white/5 to-transparent" }),
			/* @__PURE__ */ u("div", {
				className: "flex-1 overflow-auto",
				children: t
			})
		]
	});
});
Pr.displayName = "SplitView";
//#endregion
//#region src/components/ui/stat-card.tsx
var Fr = e.forwardRef(function({ label: e, value: t, change: n, icon: r, className: i, ...a }, o) {
	let s = n === void 0 ? void 0 : n >= 0;
	return /* @__PURE__ */ d("div", {
		ref: o,
		className: q(X(), Z("slow"), "rounded-3xl p-6 group hover:shadow-[0_0_30px_rgba(59,130,246,0.1)]", i),
		...a,
		children: [
			/* @__PURE__ */ d("div", {
				className: "flex items-center justify-between mb-4",
				children: [/* @__PURE__ */ u("span", {
					className: "text-[10px] font-bold uppercase tracking-[0.15em] text-white/40",
					children: e
				}), r && /* @__PURE__ */ u("div", {
					className: "p-2 rounded-xl bg-white/[0.05] border border-white/10 text-white/50 group-hover:text-blue-400 group-hover:border-blue-500/30 transition-colors",
					children: /* @__PURE__ */ u(r, { size: 16 })
				})]
			}),
			/* @__PURE__ */ u("div", {
				className: "text-2xl font-black tracking-tight bg-gradient-to-br from-white to-white/70 bg-clip-text text-transparent mb-1",
				children: t
			}),
			n !== void 0 && /* @__PURE__ */ d("div", {
				className: q("flex items-center gap-1 text-xs font-medium", s ? "text-blue-400" : "text-white/70"),
				children: [u(s ? it : rt, { size: 14 }), /* @__PURE__ */ d("span", { children: [Math.abs(n), "%"] })]
			})
		]
	});
});
Fr.displayName = "StatCard";
//#endregion
//#region src/components/ui/status-badge.tsx
var Ir = { blue: {
	color: "#3b82f6",
	glow: "rgba(59,130,246,0.5)"
} }, Lr = e.forwardRef(({ children: e, variant: t = "blue", className: n, ...r }, i) => {
	let a = Ir[t];
	return /* @__PURE__ */ d("div", {
		ref: i,
		className: q("inline-flex items-center gap-2 px-4 py-2 rounded-full", "bg-gradient-to-br from-white/[0.08] via-white/[0.02] to-transparent", "backdrop-blur-xl border border-white/10", "shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]", n),
		...r,
		children: [/* @__PURE__ */ u("div", {
			className: "w-1.5 h-1.5 rounded-full animate-pulse",
			style: {
				backgroundColor: a.color,
				boxShadow: `0 0 12px ${a.glow}, 0 0 24px ${a.glow}40`
			}
		}), /* @__PURE__ */ u("span", {
			className: "text-[9px] font-black uppercase tracking-[0.2em] text-white/70",
			children: e
		})]
	});
});
Lr.displayName = "StatusBadge";
//#endregion
//#region src/components/ui/stepper.tsx
var Rr = e.forwardRef(function({ steps: t, currentStep: n = 0, onStepClick: r, className: i, ...a }, o) {
	return /* @__PURE__ */ u("div", {
		ref: o,
		className: q("flex items-center justify-between", i),
		...a,
		children: t.map((i, a) => /* @__PURE__ */ d(e.Fragment, { children: [/* @__PURE__ */ d("div", {
			className: "flex flex-col items-center",
			children: [/* @__PURE__ */ u("button", {
				onClick: () => r?.(a),
				disabled: a > n && !r,
				className: q("w-10 h-10 rounded-2xl flex items-center justify-center transition-all", a < n ? "bg-gradient-to-br from-blue-500 to-blue-600 text-white" : a === n ? "bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-[0_4px_16px_rgba(59,130,246,0.4)]" : "bg-white/5 text-white/30"),
				children: a < n ? /* @__PURE__ */ u(lt, { size: 18 }) : a + 1
			}), /* @__PURE__ */ u("span", {
				className: q("mt-2 text-[10px] font-bold uppercase tracking-wider", a <= n ? "text-white" : "text-white/30"),
				children: i.label
			})]
		}), a < t.length - 1 && /* @__PURE__ */ u("div", { className: q("flex-1 h-0.5 mx-4", a < n ? "bg-gradient-to-r from-blue-500 to-blue-400" : "bg-white/10") })] }, a))
	});
});
Rr.displayName = "Stepper";
//#endregion
//#region src/components/ui/switch.tsx
var zr = e.forwardRef(function({ checked: e = !1, onChange: t, label: n, className: r, ...i }, a) {
	return /* @__PURE__ */ d("label", {
		ref: a,
		className: q("flex items-center gap-3 cursor-pointer group", r),
		...i,
		children: [/* @__PURE__ */ d("div", {
			className: q("relative w-10 h-5 rounded-full", e ? "bg-gradient-to-br from-blue-500 to-blue-600 shadow-[0_2px_12px_rgba(59,130,246,0.4)]" : Y(), Z("fast")),
			children: [/* @__PURE__ */ u("input", {
				type: "checkbox",
				className: "sr-only",
				checked: e,
				onChange: (e) => t?.(e.target.checked)
			}), /* @__PURE__ */ u("div", { className: q("absolute top-0.5 left-0.5 w-4 h-4 rounded-full", "bg-gradient-to-br from-white to-white/90 shadow-lg", Z("fast"), e && "translate-x-5") })]
		}), n && /* @__PURE__ */ u("span", {
			className: "text-xs font-bold text-white/70",
			children: n
		})]
	});
});
zr.displayName = "Switch";
//#endregion
//#region src/components/ui/table.tsx
function Br({ columns: e, data: t, emptyMessage: n = "No data", className: r, ...i }) {
	return /* @__PURE__ */ u("div", {
		className: q("overflow-hidden rounded-2xl", X(), r),
		...i,
		children: /* @__PURE__ */ d("table", {
			className: "w-full",
			children: [/* @__PURE__ */ u("thead", { children: /* @__PURE__ */ u("tr", {
				className: "border-b border-white/5",
				children: e.map((e, t) => /* @__PURE__ */ u("th", {
					className: "text-left py-4 px-4 text-[9px] font-black uppercase tracking-widest text-white/40",
					children: e.header
				}, t))
			}) }), /* @__PURE__ */ u("tbody", { children: t.length === 0 ? /* @__PURE__ */ u("tr", { children: /* @__PURE__ */ u("td", {
				colSpan: e.length,
				className: "py-8 text-center text-white/40 text-sm",
				children: n
			}) }) : t.map((t, n) => /* @__PURE__ */ u("tr", {
				className: "border-b border-white/5 last:border-0 hover:bg-white/[0.02] transition-colors",
				children: e.map((e, n) => /* @__PURE__ */ u("td", {
					className: "py-4 px-4 text-sm text-white/70",
					children: e.render ? e.render(t[e.accessor], t) : t[e.accessor]
				}, n))
			}, n)) })]
		})
	});
}
var Vr = e.forwardRef(function({ currentPage: e, totalPages: t, onPageChange: n, className: r, ...i }, a) {
	return /* @__PURE__ */ d("div", {
		ref: a,
		className: q("flex items-center justify-center gap-2", r),
		...i,
		children: [
			/* @__PURE__ */ u("button", {
				onClick: () => n(Math.max(1, e - 1)),
				disabled: e === 1,
				className: q("p-2 rounded-xl transition-all", e === 1 ? "text-white/20 cursor-not-allowed" : "text-white/60 hover:bg-white/5"),
				children: /* @__PURE__ */ u(dt, { size: 16 })
			}),
			Array.from({ length: t }).map((t, r) => /* @__PURE__ */ u("button", {
				onClick: () => n(r + 1),
				className: q("w-8 h-8 rounded-xl text-[10px] font-bold transition-all", e === r + 1 ? "bg-gradient-to-br from-blue-600 to-blue-700 text-white shadow-[0_4px_12px_rgba(59,130,246,0.4)]" : "text-white/40 hover:bg-white/5 hover:text-white"),
				children: r + 1
			}, r)),
			/* @__PURE__ */ u("button", {
				onClick: () => n(Math.min(t, e + 1)),
				disabled: e === t,
				className: q("p-2 rounded-xl transition-all", e === t ? "text-white/20 cursor-not-allowed" : "text-white/60 hover:bg-white/5"),
				children: /* @__PURE__ */ u(ft, { size: 16 })
			})
		]
	});
});
Vr.displayName = "Pagination";
//#endregion
//#region src/components/ui/tabs.tsx
var Hr = e.forwardRef(function({ tabs: t, activeTab: n, onTabChange: r, variant: i = "default", className: a, ...o }, s) {
	let [c, l] = e.useState(t[0]?.id || ""), f = n ?? c, p = (e) => {
		n || l(e), r?.(e);
	};
	return /* @__PURE__ */ u("div", {
		ref: s,
		className: q("flex items-center gap-1", i === "default" && q(X(), "rounded-2xl p-1"), i === "underline" && "border-b border-white/10", a),
		...o,
		children: t.map((e) => {
			let t = e.icon, n = e.id === f;
			return /* @__PURE__ */ d("button", {
				onClick: () => p(e.id),
				className: q("flex items-center gap-2 text-[10px] font-black uppercase tracking-widest transition-all", i === "default" && ["px-4 py-2.5 rounded-xl", n ? "bg-gradient-to-br from-white/10 to-white/5 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]" : "text-white/40 hover:text-white"], i === "pills" && ["px-4 py-2 rounded-full", n ? "bg-gradient-to-br from-blue-600 to-blue-700 text-white shadow-[0_4px_12px_rgba(59,130,246,0.4)]" : "text-white/40 hover:text-white hover:bg-white/5"], i === "underline" && ["px-4 py-3 border-b-2 -mb-px", n ? "border-blue-500 text-white" : "border-transparent text-white/40 hover:text-white"], Z("fast")),
				children: [t && /* @__PURE__ */ u(t, { size: 14 }), e.label]
			}, e.id);
		})
	});
});
Hr.displayName = "Tabs";
var Ur = e.forwardRef(function({ tabId: e, activeTab: t, className: n, children: r, ...i }, a) {
	return e === t ? /* @__PURE__ */ u("div", {
		ref: a,
		className: q("animate-in fade-in duration-300", n),
		...i,
		children: r
	}) : null;
});
Ur.displayName = "TabContent";
//#endregion
//#region src/components/ui/tag.tsx
var Wr = $("inline-flex items-center gap-1.5 rounded-full border backdrop-blur-md transition-all duration-200", {
	variants: {
		variant: {
			default: "bg-white/5 border-white/10 text-white/60",
			blue: "bg-blue-500/15 border-blue-500/30 text-blue-300"
		},
		size: {
			sm: "px-2 py-0.5 text-[9px]",
			md: "px-3 py-1 text-[10px]",
			lg: "px-4 py-1.5 text-xs"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "md"
	}
}), Gr = e.forwardRef(({ className: e, variant: t, size: n, onRemove: r, children: i, ...a }, o) => /* @__PURE__ */ d("span", {
	ref: o,
	className: q(Wr({
		variant: t,
		size: n
	}), e),
	...a,
	children: [/* @__PURE__ */ u("span", {
		className: "font-bold uppercase tracking-wider",
		children: i
	}), r && /* @__PURE__ */ u("button", {
		onClick: (e) => {
			e.stopPropagation(), r();
		},
		className: "ml-0.5 hover:opacity-70 transition-opacity",
		children: /* @__PURE__ */ u(It, { size: 10 })
	})]
}));
Gr.displayName = "Tag";
//#endregion
//#region src/components/ui/textarea.tsx
var Kr = e.forwardRef(function({ placeholder: e, rows: t = 3, className: n, ...r }, i) {
	return /* @__PURE__ */ u("div", {
		className: q(X(), "rounded-2xl p-4", "focus-within:border-blue-400/50", "focus-within:shadow-[0_0_20px_rgba(59,130,246,0.2)]", Z("slow"), n),
		children: /* @__PURE__ */ u("textarea", {
			ref: i,
			placeholder: e,
			rows: t,
			className: q("w-full bg-transparent border-none outline-none", "text-xs font-bold", "placeholder:text-white/20", "resize-none"),
			...r
		})
	});
});
Kr.displayName = "Textarea";
//#endregion
//#region src/components/ui/text.tsx
var qr = $("font-medium leading-relaxed", {
	variants: {
		size: {
			xs: "text-[9px]",
			sm: "text-[10px]",
			md: "text-xs",
			lg: "text-sm",
			xl: "text-base"
		},
		variant: {
			default: "text-white/60",
			muted: "text-white/40",
			subtle: "text-white/20",
			primary: "text-blue-300",
			success: "text-white/70",
			danger: "text-white/70"
		}
	},
	defaultVariants: {
		size: "md",
		variant: "default"
	}
}), Jr = e.forwardRef(function({ className: e, size: t, variant: n, children: r, ...i }, a) {
	return /* @__PURE__ */ u("p", {
		ref: a,
		className: q(qr({
			size: t,
			variant: n
		}), e),
		...i,
		children: r
	});
});
Jr.displayName = "Text";
//#endregion
//#region src/components/ui/timeline.tsx
var Yr = e.forwardRef(function({ items: e, className: t, ...n }, r) {
	return /* @__PURE__ */ u("div", {
		ref: r,
		className: q("space-y-6", t),
		...n,
		children: e.map((t, n) => /* @__PURE__ */ d("div", {
			className: "flex gap-4",
			children: [/* @__PURE__ */ d("div", {
				className: "flex flex-col items-center",
				children: [/* @__PURE__ */ u("div", { className: q("w-3 h-3 rounded-full", t.completed ? "bg-gradient-to-br from-blue-500 to-blue-600 shadow-[0_0_12px_rgba(59,130,246,0.5)]" : "bg-white/10") }), n < e.length - 1 && /* @__PURE__ */ u("div", { className: "flex-1 w-px bg-white/5 my-2" })]
			}), /* @__PURE__ */ d("div", {
				className: "pb-6",
				children: [
					/* @__PURE__ */ u("p", {
						className: q("text-xs font-bold uppercase tracking-wider", t.completed ? "text-white" : "text-white/60"),
						children: t.title
					}),
					t.description && /* @__PURE__ */ u("p", {
						className: "text-[10px] text-white/40 mt-1",
						children: t.description
					}),
					t.date && /* @__PURE__ */ u("p", {
						className: "text-[9px] text-white/20 mt-2",
						children: t.date
					})
				]
			})]
		}, n))
	});
});
Yr.displayName = "Timeline";
//#endregion
//#region src/components/ui/time-picker.tsx
var Xr = e.forwardRef(function({ value: e, onChange: t, className: n, ...r }, i) {
	return /* @__PURE__ */ d("div", {
		className: q("flex items-center gap-3 px-5 py-3", X(), "rounded-2xl", Z("slow"), n),
		children: [/* @__PURE__ */ u(pt, {
			size: 16,
			className: "text-white/30"
		}), /* @__PURE__ */ u("input", {
			ref: i,
			type: "time",
			value: e,
			onChange: (e) => t?.(e.target.value),
			className: q("bg-transparent border-none outline-none", "text-xs font-bold text-white/70", "[&::-webkit-calendar-picker-indicator]:invert [&::-webkit-calendar-picker-indicator]:opacity-50", "[&::-webkit-calendar-picker-indicator]:cursor-pointer"),
			...r
		})]
	});
});
Xr.displayName = "TimePicker";
//#endregion
//#region src/components/ui/toggle.tsx
var Zr = e.forwardRef(function({ checked: e = !1, onChange: t, label: n, className: r, ...i }, a) {
	return /* @__PURE__ */ d("label", {
		ref: a,
		className: q("flex items-center justify-between cursor-pointer group", r),
		...i,
		children: [n && /* @__PURE__ */ u("span", {
			className: "text-xs font-bold text-white/70",
			children: n
		}), /* @__PURE__ */ d("div", {
			className: q("relative w-12 h-6 rounded-full", e ? "bg-gradient-to-br from-blue-500 to-blue-600 shadow-[0_2px_12px_rgba(59,130,246,0.4)]" : Y(), Z("fast")),
			children: [/* @__PURE__ */ u("input", {
				type: "checkbox",
				className: "sr-only",
				checked: e,
				onChange: (e) => t?.(e.target.checked)
			}), /* @__PURE__ */ u("div", { className: q("absolute top-1 left-1 w-4 h-4 rounded-full", "bg-white shadow-md", Z("fast"), e && "translate-x-6") })]
		})]
	});
});
Zr.displayName = "Toggle";
//#endregion
//#region src/components/ui/tooltip.tsx
var Qr = e.forwardRef(({ content: t, position: n = "top", children: r, className: i, ...a }, o) => {
	let [s, c] = e.useState(!1), l = {
		top: "bottom-full left-1/2 -translate-x-1/2 mb-2",
		bottom: "top-full left-1/2 -translate-x-1/2 mt-2",
		left: "right-full top-1/2 -translate-y-1/2 mr-2",
		right: "left-full top-1/2 -translate-y-1/2 ml-2"
	};
	return /* @__PURE__ */ d("div", {
		ref: o,
		className: "relative inline-block",
		onMouseEnter: () => c(!0),
		onMouseLeave: () => c(!1),
		...a,
		children: [r, s && /* @__PURE__ */ u("div", {
			className: q("absolute z-[300] px-3 py-1.5 rounded-xl whitespace-nowrap", "bg-[#0a0a0b] border border-white/10 text-[10px] font-bold text-white/80", "shadow-[0_8px_24px_rgba(0,0,0,0.4)]", "animate-in fade-in duration-200", l[n], i),
			children: t
		})]
	});
});
Qr.displayName = "Tooltip";
//#endregion
//#region src/components/ui/upgrade-card.tsx
var $r = e.forwardRef(function({ title: e, description: t, cta: n = "Upgrade", onAction: r, className: i, ...a }, o) {
	return /* @__PURE__ */ u("div", {
		ref: o,
		className: q("relative rounded-3xl p-[1px] overflow-hidden", "bg-gradient-to-br from-blue-500/30 to-blue-500/10", i),
		...a,
		children: /* @__PURE__ */ d("div", {
			className: "relative rounded-[calc(1.5rem-1px)] bg-gradient-to-br from-white/[0.08] via-white/[0.02] to-transparent backdrop-blur-xl p-6",
			children: [/* @__PURE__ */ u("div", { className: "absolute -top-20 -right-20 h-40 w-40 rounded-full bg-gradient-to-br from-blue-500/20 to-blue-500/10 blur-2xl" }), /* @__PURE__ */ d("div", {
				className: "relative z-10",
				children: [
					/* @__PURE__ */ u("h3", {
						className: "text-lg font-black tracking-tight bg-gradient-to-br from-white to-white/70 bg-clip-text text-transparent mb-2",
						children: e
					}),
					t && /* @__PURE__ */ u("p", {
						className: "text-sm text-white/40 mb-4 leading-relaxed",
						children: t
					}),
					/* @__PURE__ */ u("button", {
						onClick: r,
						className: q("inline-flex items-center px-5 py-2.5 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em]", "bg-gradient-to-br from-blue-600 to-blue-700 text-white", "shadow-[0_8px_24px_rgba(59,130,246,0.4),inset_0_1px_1px_rgba(255,255,255,0.2)]", Z("liquid"), "hover:shadow-[0_12px_32px_rgba(59,130,246,0.5)] hover:translate-y-[-2px]", "active:scale-95"),
						children: n
					})
				]
			})]
		})
	});
});
$r.displayName = "UpgradeCard";
//#endregion
//#region src/components/ui/user-card.tsx
var ei = e.forwardRef(function({ name: e, role: t, avatar: n, stats: r, className: i, ...a }, o) {
	return /* @__PURE__ */ d("div", {
		ref: o,
		className: q(X(), Z("slow"), "rounded-3xl p-6 text-center group hover:shadow-[0_0_30px_rgba(59,130,246,0.1)]", i),
		...a,
		children: [
			/* @__PURE__ */ u("div", {
				className: "mx-auto mb-4 h-16 w-16 rounded-full bg-gradient-to-tr from-blue-500 to-blue-400 p-[2px]",
				children: /* @__PURE__ */ u("div", {
					className: "w-full h-full rounded-full bg-black flex items-center justify-center overflow-hidden",
					children: n ? /* @__PURE__ */ u("img", {
						src: n,
						alt: e,
						className: "w-full h-full object-cover"
					}) : /* @__PURE__ */ u(Pt, {
						size: 24,
						className: "text-white/50"
					})
				})
			}),
			/* @__PURE__ */ u("h3", {
				className: "text-base font-bold bg-gradient-to-br from-white to-white/70 bg-clip-text text-transparent",
				children: e
			}),
			t && /* @__PURE__ */ u("p", {
				className: "text-xs text-white/40 mt-1",
				children: t
			}),
			r && r.length > 0 && /* @__PURE__ */ u("div", {
				className: "flex justify-center gap-6 mt-4 pt-4 border-t border-white/5",
				children: r.map((e, t) => /* @__PURE__ */ d("div", {
					className: "text-center",
					children: [/* @__PURE__ */ u("div", {
						className: "text-sm font-bold text-white",
						children: e.value
					}), /* @__PURE__ */ u("div", {
						className: "text-[9px] uppercase tracking-widest text-white/30",
						children: e.label
					})]
				}, t))
			})
		]
	});
});
ei.displayName = "UserCard";
//#endregion
//#region src/components/ui/vanguard-card.tsx
var ti = e.forwardRef(({ children: e, title: t, description: n, icon: r, tag: i, hoverable: a = !0, glass: o = !0, className: s, delay: c = "0", style: l, ...f }, p) => /* @__PURE__ */ d("div", {
	ref: p,
	className: q("group relative p-[px] rounded-[2.5rem] overflow-hidden", a && "animate-in fade-in slide-in-from-bottom-10 duration-1000 fill-mode-both", s),
	style: {
		animationDelay: `${c}ms`,
		...l
	},
	...f,
	children: [
		/* @__PURE__ */ u("div", { className: "absolute inset-0 z-0 bg-gradient-to-r from-blue-500/30 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" }),
		/* @__PURE__ */ u("div", { className: "absolute inset-0 z-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" }),
		/* @__PURE__ */ d("div", {
			className: q("relative z-10 h-full w-full bg-[#0a0a0b] p-8 md:p-10 rounded-[2.5rem]", "flex flex-col justify-between", o ? "bg-gradient-to-br from-white/[0.1] via-white/[0.05] to-white/[0.02] backdrop-blur-2xl border border-white/15 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]" : "bg-[#0a0a0b] shadow-[8px_8px_16px_rgba(0,0,0,0.4),-8px_-8px_16px_rgba(255,255,255,0.03)] border border-white/5"),
			children: [(t || r || i) && /* @__PURE__ */ d("div", { children: [
				/* @__PURE__ */ d("div", {
					className: "flex justify-between items-start mb-8",
					children: [r && /* @__PURE__ */ u("div", {
						className: q("p-4 rounded-2xl text-blue-400", "bg-gradient-to-br from-white/[0.08] via-white/[0.02] to-transparent backdrop-blur-xl border border-white/10", "shadow-[0_4px_16px_rgba(59,130,246,0.2),inset_0_1px_0_rgba(255,255,255,0.1)]", "group-hover:scale-110 group-hover:rotate-3 transition-all duration-700"),
						children: /* @__PURE__ */ u(r, { size: 24 })
					}), i && /* @__PURE__ */ u("span", {
						className: "text-[9px] font-black uppercase tracking-widest px-3 py-1 rounded-full bg-blue-500/10 text-blue-300 border border-blue-400/30 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] backdrop-blur-md",
						children: i
					})]
				}),
				t && /* @__PURE__ */ u("h3", {
					className: "text-2xl md:text-3xl font-bold tracking-tighter mb-4 bg-gradient-to-br from-white to-white/70 bg-clip-text text-transparent",
					children: t
				}),
				n && /* @__PURE__ */ u("p", {
					className: "text-white/40 leading-relaxed text-sm font-medium",
					children: n
				})
			] }), e]
		})
	]
}));
ti.displayName = "VanguardCard";
//#endregion
//#region src/hooks/use-toast.ts
var ni = t(null);
function ri() {
	let e = a(ni);
	if (!e) throw Error("useToast must be used within a ToastProvider");
	return e;
}
function ii() {
	let [e, t] = c([]);
	return {
		toasts: e,
		addToast: i(({ title: e, message: n, variant: r = "info", duration: i = 4e3 }) => {
			let a = Date.now();
			t((t) => [...t, {
				id: a,
				title: e,
				message: n,
				variant: r,
				duration: i
			}]), setTimeout(() => {
				t((e) => e.filter((e) => e.id !== a));
			}, i);
		}, []),
		removeToast: i((e) => {
			t((t) => t.filter((t) => t.id !== e));
		}, [])
	};
}
//#endregion
//#region src/hooks/use-intersection-observer.ts
function ai(e = {}) {
	let { freezeOnceVisible: t = !1, ...n } = e, r = s(null), [i, a] = c(!1);
	return o(() => {
		let e = r.current;
		if (!e) return;
		let i = new IntersectionObserver(([n]) => {
			let r = n.isIntersecting;
			a(r), t && r && i.unobserve(e);
		}, n);
		return i.observe(e), () => {
			i.disconnect();
		};
	}, [
		t,
		n.threshold,
		n.root,
		n.rootMargin
	]), [r, i];
}
//#endregion
//#region src/hooks/use-animation.ts
function oi(e = {}) {
	let { duration: t = 300, onComplete: n } = e, [r, a] = c(!1), o = s(null);
	return {
		isAnimating: r,
		start: i(() => {
			o.current && clearTimeout(o.current), a(!0), o.current = setTimeout(() => {
				a(!1), n?.();
			}, t);
		}, [t, n]),
		stop: i(() => {
			o.current && clearTimeout(o.current), a(!1);
		}, [])
	};
}
//#endregion
//#region src/hooks/use-keyboard-shortcut.ts
function si(e, t, n = {}) {
	let { modifiers: r = [], preventDefault: a = !0 } = n, s = i((n) => {
		let i = n.key.toLowerCase() === e.toLowerCase(), o = r.every((e) => {
			switch (e) {
				case "ctrl": return n.ctrlKey;
				case "shift": return n.shiftKey;
				case "alt": return n.altKey;
				case "meta": return n.metaKey;
				default: return !1;
			}
		});
		i && o && (a && n.preventDefault(), t());
	}, [
		e,
		t,
		r,
		a
	]);
	o(() => (window.addEventListener("keydown", s), () => {
		window.removeEventListener("keydown", s);
	}), [s]);
}
//#endregion
//#region src/providers/theme-provider.tsx
var ci = t(null);
function li() {
	let e = a(ci);
	if (!e) throw Error("useTheme must be used within a ThemeProvider");
	return e;
}
function ui({ children: e, defaultTheme: t = "dark", storageKey: n = "vgn-theme" }) {
	let [r, i] = c(() => {
		if (typeof window > "u") return t;
		let e = localStorage.getItem(n);
		return e === "light" || e === "dark" ? e : window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
	});
	return o(() => {
		let e = document.documentElement;
		e.classList.remove("light", "dark"), e.classList.add(r), localStorage.setItem(n, r);
	}, [r, n]), /* @__PURE__ */ u(ci.Provider, {
		value: {
			theme: r,
			setTheme: (e) => i(e),
			toggleTheme: () => i((e) => e === "dark" ? "light" : "dark")
		},
		children: e
	});
}
//#endregion
//#region src/providers/toast-provider.tsx
function di({ children: e }) {
	let [t, n] = c([]), r = i(({ title: e, message: t, variant: r = "info", duration: i = 4e3 }) => {
		let a = Date.now();
		n((n) => [...n, {
			id: a,
			title: e,
			message: t,
			variant: r
		}]), i > 0 && setTimeout(() => {
			n((e) => e.filter((e) => e.id !== a));
		}, i);
	}, []), a = i((e) => {
		n((t) => t.filter((t) => t.id !== e));
	}, []);
	return /* @__PURE__ */ d(ni.Provider, {
		value: {
			addToast: r,
			removeToast: a,
			toasts: t
		},
		children: [e, /* @__PURE__ */ u("div", {
			className: "fixed bottom-6 right-6 z-[300] space-y-4",
			children: t.map((e) => /* @__PURE__ */ u(fi, {
				...e,
				onClose: () => a(e.id)
			}, e.id))
		})]
	});
}
function fi({ title: e, message: t, variant: n = "info", onClose: r, className: i }) {
	let a = {
		success: "border-blue-400/30 shadow-[0_8px_24px_rgba(59,130,246,0.2)]",
		error: "border-white/20 shadow-[0_8px_24px_rgba(255,255,255,0.05)]",
		warning: "border-white/20 shadow-[0_8px_24px_rgba(255,255,255,0.05)]",
		info: "border-blue-400/30 shadow-[0_8px_24px_rgba(59,130,246,0.2)]"
	}, o = {
		success: ct,
		error: Ft,
		warning: nt,
		info: wt
	}[n];
	return /* @__PURE__ */ u("div", {
		className: q("liquid-glass-surface rounded-2xl border p-4 min-w-[300px]", "animate-in slide-in-from-right duration-300", a[n], i),
		children: /* @__PURE__ */ d("div", {
			className: "flex items-start gap-3",
			children: [
				/* @__PURE__ */ u(o, {
					size: 20,
					className: {
						success: "text-blue-400",
						error: "text-white/60",
						warning: "text-white/60",
						info: "text-blue-400"
					}[n]
				}),
				/* @__PURE__ */ d("div", {
					className: "flex-1",
					children: [/* @__PURE__ */ u("p", {
						className: "text-sm font-bold text-white",
						children: e
					}), /* @__PURE__ */ u("p", {
						className: "text-xs text-white/60 mt-1",
						children: t
					})]
				}),
				/* @__PURE__ */ u("button", {
					onClick: r,
					className: "p-1 hover:bg-white/5 rounded-lg transition-colors",
					children: /* @__PURE__ */ u(It, { size: 16 })
				})
			]
		})
	});
}
//#endregion
//#region src/tokens/colors.ts
var pi = {
	background: {
		primary: "0 0% 4%",
		surface: "0 0% 6%",
		elevated: "0 0% 8%",
		overlay: "0 0% 0% / 0.8"
	},
	accent: { blue: "217 91% 60%" },
	text: {
		primary: "0 0% 100%",
		secondary: "0 0% 100% / 0.7",
		muted: "0 0% 100% / 0.4",
		subtle: "0 0% 100% / 0.2"
	},
	border: {
		subtle: "0 0% 100% / 0.05",
		light: "0 0% 100% / 0.1",
		medium: "0 0% 100% / 0.15",
		strong: "0 0% 100% / 0.2"
	},
	glass: {
		bg: "0 0% 100% / 0.05",
		border: "0 0% 100% / 0.1",
		highlight: "0 0% 100% / 0.15",
		shadow: "0 0% 0% / 0.3"
	},
	neuro: {
		light: "0 0% 100% / 0.03",
		shadow: "0 0% 0% / 0.4"
	}
}, mi = {
	glass: {
		sm: "0 4px 16px hsl(0 0% 0% / 0.3), inset 0 1px 0 hsl(0 0% 100% / 0.1)",
		md: "0 8px 32px hsl(0 0% 0% / 0.3), inset 0 1px 0 hsl(0 0% 100% / 0.1)",
		lg: "0 12px 40px hsl(0 0% 0% / 0.4), inset 0 1px 0 hsl(0 0% 100% / 0.15)"
	},
	neuro: {
		sm: "4px 4px 8px hsl(0 0% 0% / 0.4), -4px -4px 8px hsl(0 0% 100% / 0.03)",
		md: "8px 8px 16px hsl(0 0% 0% / 0.4), -8px -8px 16px hsl(0 0% 100% / 0.03)",
		lg: "12px 12px 24px hsl(0 0% 0% / 0.4), -12px -12px 24px hsl(0 0% 100% / 0.03)"
	},
	glow: { blue: "0 0 20px hsl(217 91% 60% / 0.5)" },
	accent: { blue: "0 8px 24px hsl(217 91% 60% / 0.4), inset 0 1px 1px hsl(0 0% 100% / 0.2)" }
};
//#endregion
export { Lt as Accordion, zt as AlertItem, qt as AspectRatio, Qt as Avatar, $t as AvatarGroup, en as BackgroundDecor, nn as Badge, rn as BarChart, an as Breadcrumb, bn as Button, Tn as Calendar, Dn as Callout, kn as Card, jn as CardBody, Mn as CardFooter, An as CardHeader, Nn as Carousel, Pn as CarouselItem, pr as Center, Fn as Checkbox, Ln as CircularProgress, Rn as CodeBlock, zn as Collapsible, Bn as ColorPicker, Vn as Command, Wn as ConfirmDialog, Gn as Counter, Kn as DatePicker, Un as Dialog, qn as Divider, Yn as Dropdown, Zn as DropdownDivider, Xn as DropdownItem, Bt as FadeIn, Vt as FadeOut, $n as FileCard, er as FileUpload, nr as Footer, tr as FormField, rr as GlassPanel, lr as GridLayout, dr as HStack, ir as Heading, or as IconButton, sr as Input, cr as Label, hr as LineChart, gr as Logo, Hn as Modal, _r as Navbar, Vr as Pagination, vr as ProductCard, br as ProgressBar, Sr as ProjectRow, Cr as RadioGroup, wr as Rating, Ut as ScaleIn, Tr as SearchInput, Er as Select, Dr as Sheet, Or as Skeleton, Ar as SkeletonCard, kr as SkeletonText, Ht as SlideIn, jr as Slider, Wt as Spin, Nr as Spinner, Pr as SplitView, ur as Stack, Fr as StatCard, Lr as StatusBadge, Rr as Stepper, zr as Switch, Ur as TabContent, Br as Table, Hr as Tabs, Gr as Tag, Jr as Text, Kr as Textarea, ui as ThemeProvider, Xr as TimePicker, Yr as Timeline, fi as Toast, ni as ToastContext, di as ToastProvider, Zr as Toggle, Qr as Tooltip, $r as UpgradeCard, ei as UserCard, fr as VStack, ti as VanguardCard, tn as badgeVariants, yn as buttonVariants, On as cardVariants, q as cn, pi as colors, Z as getAnimation, $e as getDarkGradient, Ye as getGlassBackground, Xe as getGlow, Qe as getInnerHighlight, J as getLiquidGlass, X as getLiquidSurface, Y as getNeuromorphic, ar as iconButtonVariants, yr as progressVariants, mi as shadows, Mr as spinnerVariants, qr as textVariants, oi as useAnimation, ai as useIntersectionObserver, si as useKeyboardShortcut, li as useTheme, ri as useToast, ii as useToastState, Ze as withAccentShadow };

//# sourceMappingURL=vanguard-gnl-uikit.es.js.map