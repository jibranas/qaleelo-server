(this["webpackJsonpquran-app"] = this["webpackJsonpquran-app"] || []).push([
  [0],
  {
    26: function (e, n, t) {},
    32: function (e, n, t) {},
    46: function (e, n, t) {},
    47: function (e, n, t) {},
    51: function (e, n, t) {
      e.exports = { SampleButton: "Buttons_SampleButton__1mfjJ" };
    },
    81: function (e, n, t) {},
    82: function (e, n, t) {},
    83: function (e, n, t) {
      "use strict";
      t.r(n);
      var o = t(0),
        c = t(1),
        r = t.n(c),
        i = t(20),
        s = t.n(i),
        a = t(3),
        l = t(2),
        u = t(9),
        d = t(25),
        b = t(11);
      function f() {
        var e = Object(a.a)([
          "\n  color: #888;\n  margin-right: 10px;\n  &:hover {\n    color: #000;\n  }\n",
        ]);
        return (
          (f = function () {
            return e;
          }),
          e
        );
      }
      function j() {
        var e = Object(a.a)(["\n  margin-top: 10px;\n"]);
        return (
          (j = function () {
            return e;
          }),
          e
        );
      }
      function p() {
        var e = Object(a.a)([
          "\n  margin: 0;\n  font-size: 14px;\n  color: #888;\n",
        ]);
        return (
          (p = function () {
            return e;
          }),
          e
        );
      }
      function m() {
        var e = Object(a.a)([
          "\n  background: #f2f2f2;\n  padding: 10px;\n  text-align: center;\n",
        ]);
        return (
          (m = function () {
            return e;
          }),
          e
        );
      }
      var h = l.b.footer(m()),
        x = l.b.p(p()),
        g = l.b.div(j()),
        v = l.b.a(f()),
        O = function () {
          var e = new Date().getFullYear();
          return Object(o.jsx)("div", {
            children: Object(o.jsxs)(h, {
              children: [
                Object(o.jsxs)(x, {
                  children: [
                    "Copyright \xa9 ",
                    e,
                    " Here for the Hereafter.",
                    Object(o.jsx)("br", {}),
                    "A 501(c)(3) nonprofit organization dedicated to spreading Islamic education.",
                  ],
                }),
                Object(o.jsxs)(g, {
                  children: [
                    Object(o.jsx)(v, {
                      href: "https://www.hereforthehereafter.com",
                      children: Object(o.jsx)(u.a, { icon: b.d, size: "3x" }),
                    }),
                    Object(o.jsx)(v, {
                      href: "https://www.facebook.com/hereforthehereafter",
                      children: Object(o.jsx)(u.a, { icon: d.a, size: "3x" }),
                    }),
                    Object(o.jsx)(v, {
                      href: "https://www.youtube.com/hereforthehereafter",
                      children: Object(o.jsx)(u.a, { icon: d.d, size: "3x" }),
                    }),
                    Object(o.jsx)(v, {
                      href: "https://www.instagram.com/hereforthehereafter",
                      children: Object(o.jsx)(u.a, { icon: d.b, size: "3x" }),
                    }),
                    Object(o.jsx)(v, {
                      href: "https://www.twitter.com/herehereafter",
                      children: Object(o.jsx)(u.a, { icon: d.c, size: "3x" }),
                    }),
                    Object(o.jsx)(v, {
                      href: "mailto:hereforthehereafter@gmail.com",
                      children: Object(o.jsx)(u.a, { icon: b.c, size: "3x" }),
                    }),
                  ],
                }),
              ],
            }),
          });
        },
        w = t(4),
        N = t.p + "static/media/HHLogo.a975645f.png";
      t(26);
      function k(e) {
        return Object(o.jsx)("div", {
          className: "hamburger-btn",
          onClick: e.click,
          children: "\u2630",
        });
      }
      var y = t(18),
        C = t(7),
        S = t.n(C),
        E = r.a.createContext();
      function T() {
        return Object(c.useContext)(E);
      }
      function z(e) {
        var n = Object(c.useState)(!1),
          t = Object(w.a)(n, 2),
          r = t[0],
          i = t[1],
          s = Object(c.useState)(null),
          a = Object(w.a)(s, 2),
          l = a[0],
          u = a[1],
          d = Object(c.useState)(null),
          b = Object(w.a)(d, 2),
          f = b[0],
          j = b[1],
          p = Object(c.useState)([]),
          m = Object(w.a)(p, 2),
          h = m[0],
          x = m[1],
          g = Object(c.useState)([]),
          v = Object(w.a)(g, 2),
          O = v[0],
          N = v[1],
          k = Object(c.useState)([]),
          y = Object(w.a)(k, 2),
          C = y[0],
          T = y[1],
          z = Object(c.useState)(""),
          D = Object(w.a)(z, 2),
          I = D[0],
          B = D[1];
        console.log(I);
        var L = Object(c.useState)({}),
          A = Object(w.a)(L, 2),
          M = A[0],
          F = A[1];
        console.log(M),
          Object(c.useEffect)(function () {
            S()("/".concat(I, "/topicsData")).then(function (e) {
              x(e.data), console.log(e.data);
            });
          }, []),
          Object(c.useEffect)(function () {
            S()("/examplesData").then(function (e) {
              N(e.data);
            });
          }, []),
          Object(c.useEffect)(function () {
            S()("/".concat(I, "/sideBarData")).then(function (e) {
              j(e.data);
            });
          }, []),
          Object(c.useEffect)(function () {
            S()("/".concat(I, "/topicNumbersList")).then(function (e) {
              T(e.data);
            });
          }, []);
        var Q = {
          subContainer: r,
          setSubContainer: i,
          subContainerEntries: l,
          setSubContainerEntries: u,
          entryStore: f,
          setEntryStore: j,
          topicDatafromBackEnd: h,
          setTopicDatafromBackEnd: x,
          exampleDatafromBackEnd: O,
          setExampleDatafromBackEnd: N,
          topicNumbersListfromBackEnd: C,
          setTopicNumbersListfromBackEnd: T,
          courseTitleUserIsOn: I,
          setCourseTitleUserIsOn: B,
          courseDetails: M,
          setCourseDetails: F,
        };
        return Object(o.jsx)(E.Provider, { value: Q, children: e.children });
      }
      function D(e) {
        var n = T(),
          t = n.setSubContainer,
          c = n.setSubContainerEntries;
        return Object(o.jsxs)("div", {
          className: "sidenavRow",
          style: e.styleVariable,
          onClick: function () {
            return e.entries && (t(!0), void c(e.entries));
          },
          children: [
            Object(o.jsxs)("div", {
              className: "sidenavRowText",
              children: [e.number, "\xa0 \xa0", e.title],
            }),
            Object(o.jsx)("i", { class: "fas fa-chevron-right" }),
          ],
        });
      }
      var I = t(89);
      var B = t(5);
      function L() {
        var e = Object(a.a)([
          "\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  left: 10px;\n  font-size: 3vh;\n",
        ]);
        return (
          (L = function () {
            return e;
          }),
          e
        );
      }
      function A() {
        var e = Object(a.a)([
          '\n  width: 100%;\n  height: 80px;\n  padding: 10px;\n  padding-left: 70px;\n  font-family: "Quicksand", sans-serif;\n  font-size: 3vh;\n\n  border: none;\n  border-radius: 4px;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n',
        ]);
        return (
          (A = function () {
            return e;
          }),
          e
        );
      }
      function M() {
        var e = Object(a.a)([
          "\n  position: relative;\n  width: 100%;\n  max-width: 700px;\n  margin-bottom: 20px;\n  margin-right: 50px;\n",
        ]);
        return (
          (M = function () {
            return e;
          }),
          e
        );
      }
      function F() {
        var e = Object(a.a)([
          "\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  height: 100%; /* Ensure the div takes full height */\n",
        ]);
        return (
          (F = function () {
            return e;
          }),
          e
        );
      }
      l.b.div(F());
      var Q = l.b.div(M()),
        U = l.b.input(A()),
        H = l.b.div(L());
      function Y(e) {
        var n = T(),
          t = n.courseTitleUserIsOn,
          r = n.entryStore,
          i = Object(c.useState)(""),
          s = Object(w.a)(i, 2),
          a = s[0],
          l = s[1],
          d = Object(c.useState)([]),
          f = Object(w.a)(d, 2),
          j = f[0],
          p = f[1];
        Object(c.useEffect)(
          function () {
            if (r && a) {
              var e = r
                .map(function (e) {
                  var n = e.entries.filter(function (e) {
                    var n = e.title.toLowerCase().includes(a.toLowerCase()),
                      t =
                        e.entries &&
                        e.entries.some(function (e) {
                          return e.entries.some(function (e) {
                            return (
                              e.title &&
                              e.title.toLowerCase().includes(a.toLowerCase())
                            );
                          });
                        });
                    return n || t;
                  });
                  return Object(y.a)(Object(y.a)({}, e), {}, { entries: n });
                })
                .filter(function (e) {
                  return e.entries.length > 0;
                });
              p(e);
            } else p(r);
          },
          [r, a]
        ),
          console.log(r),
          console.log(r, t);
        var m = Object(c.useState)(null),
          h = Object(w.a)(m, 2),
          x = (h[0], h[1], window.location.href);
        console.log(x);
        var g = x.split("/");
        console.log(g);
        var v = g[g.length - 1];
        console.log(v);
        var O = [];
        (O = v.includes("%") ? v.split("%23") : v.split("#")), console.log(O);
        var N = O[0];
        O[1];
        return (
          console.log(N),
          Object(o.jsxs)("div", {
            className: "sideNavContainer",
            style:
              "exiting" === e.state
                ? { animation: "moveMainContainer .3s forwards" }
                : "entering" === e.state
                ? { animation: "moveMainContainer .3s reverse backwards" }
                : null,
            children: [
              Object(o.jsxs)(Q, {
                children: [
                  Object(o.jsx)(H, {
                    children: Object(o.jsx)(u.a, { icon: b.e }),
                  }),
                  Object(o.jsx)(U, {
                    type: "text",
                    placeholder: "Search for a Topic",
                    value: a,
                    onChange: function (e) {
                      return l(e.target.value);
                    },
                  }),
                ],
              }),
              j &&
                j.map(function (n, c) {
                  return Object(o.jsxs)("div", {
                    children: [
                      Object(o.jsxs)("div", {
                        className: "sidenavContentHeaderMainMenu",
                        children: [
                          n.topicHeaderNumber && n.topicHeaderNumber,
                          "\xa0 \xa0",
                          n.title,
                        ],
                      }),
                      n.entries.map(function (n, c) {
                        return Object(o.jsx)("div", {
                          children: n.rows
                            ? Object(o.jsx)(D, {
                                number: n.topicNumber,
                                title: n.title,
                                entries: n.entries,
                                styleVariable:
                                  n.topicNumber == N
                                    ? { background: "#dfdfdf" }
                                    : {},
                              })
                            : Object(o.jsx)(B.b, {
                                to: "/"
                                  .concat(t, "/topic/")
                                  .concat(n.topicNumber),
                                children: Object(o.jsxs)("div", {
                                  className: "sidenavContent",
                                  onClick: e.closeNav,
                                  style:
                                    n.topicNumber == N
                                      ? { background: "#dfdfdf" }
                                      : {},
                                  children: [
                                    n.topicNumber && n.topicNumber,
                                    "\xa0 \xa0",
                                    n.title,
                                  ],
                                }),
                              }),
                        });
                      }),
                    ],
                  });
                }),
              Object(o.jsx)("div", { style: { minHeight: "60px" } }),
            ],
          })
        );
      }
      var q = t(15);
      function R(e) {
        var n = T(),
          t = n.subContainerEntries,
          r = n.setSubContainer,
          i = n.courseTitleUserIsOn,
          s = Object(c.useState)(""),
          a = Object(w.a)(s, 2),
          l = a[0],
          u = a[1];
        return (
          Object(c.useEffect)(function () {
            var e = window.location.href;
            console.log(e);
            var n = e.split("/");
            console.log(n);
            var t = n[n.length - 1];
            console.log(t);
            var o = [];
            (o = t.includes("%") ? t.split("%23") : t.split("#")),
              console.log(o);
            var c = o[1];
            console.log(c), u(c);
          }, []),
          Object(o.jsxs)("div", {
            className: "sub-container",
            style:
              "entering" === e.state
                ? { animation: "moveSubContainer .3s forwards" }
                : "entered" === e.state
                ? { transform: "translateX(0px)" }
                : { animation: "moveSubContainer .3s reverse backwards" },
            children: [
              Object(o.jsxs)("div", {
                className: "sub-header",
                onClick: function () {
                  return r(!1);
                },
                children: [
                  Object(o.jsx)("i", { class: "fas fa-chevron-left" }),
                  " MAIN MENU",
                ],
              }),
              t.map(function (n) {
                return Object(o.jsxs)(o.Fragment, {
                  children: [
                    Object(o.jsx)(B.b, {
                      to: "/".concat(i, "/topic/").concat(n.topicNumber),
                      children: Object(o.jsxs)("div", {
                        className: "sidenavContentHeaderSubContainer",
                        onClick: e.closeNav,
                        children: [n.topicNumber, "\xa0\xa0", n.title],
                      }),
                    }),
                    n.entries.map(function (t) {
                      return Object(o.jsx)(q.a, {
                        to: "/"
                          .concat(i, "/topic/")
                          .concat(n.topicNumber, "#")
                          .concat(t.sectionNumber),
                        children: Object(o.jsx)("div", {
                          onClick: e.closeNav,
                          children: Object(o.jsx)(D, {
                            number: t.sectionNumber,
                            title: t.title,
                            styleVariable:
                              t.sectionNumber == l
                                ? { background: "#ebebeb" }
                                : {},
                          }),
                        }),
                      });
                    }),
                  ],
                });
              }),
              Object(o.jsx)("div", { style: { minHeight: "60px" } }),
            ],
          })
        );
      }
      function P(e) {
        var n = T(),
          t = n.subContainer,
          c =
            (n.courseTitleUserIsOn, n.setCourseTitleUserIsOn, n.courseDetails);
        n.setCourseDetails,
          n.topicDatafromBackEnd,
          n.setTopicDatafromBackEnd,
          n.exampleDatafromBackEnd,
          n.setExampleDatafromBackEnd,
          n.entryStore,
          n.setEntryStore;
        return Object(o.jsxs)("div", {
          className: "sidenav",
          style:
            "entering" === e.state
              ? { animation: "moveSideBar .3s forwards" }
              : "entered" === e.state
              ? { transform: "translateX(-0px)" }
              : { animation: "moveSideBar .3s reverse backwards" },
          children: [
            Object(o.jsx)(B.b, {
              to: "/".concat(c.courseTitle.replace(/\s/g, ""), "/start"),
              children: Object(o.jsx)("div", {
                className: "sidenavHeader",
                style: { background: "#fcebeb" },
                children: c.courseTitle,
              }),
            }),
            Object(o.jsx)(I.a, {
              in: !t,
              timeout: 300,
              unmountOnExit: !0,
              mountOnEnter: !0,
              children: function (n) {
                return Object(o.jsx)(Y, { state: n, closeNav: e.click });
              },
            }),
            Object(o.jsx)(I.a, {
              in: t,
              timeout: 300,
              unmountOnExit: !0,
              mountOnEnter: !0,
              children: function (n) {
                return Object(o.jsx)(R, { state: n, closeNav: e.click });
              },
            }),
          ],
        });
      }
      var W = function (e) {
        return Object(o.jsx)("div", { children: Object(o.jsx)("p", {}) });
      };
      function V() {
        var e = Object(a.a)([
          '\n  background: none;\n  border: none;\n  font-family: "Quicksand", sans-serif;\n  font-size: 1.5vh;\n  font-weight: bold;\n  color: #f8f6f0;\n  cursor: pointer;\n  outline: none;\n  position: relative;\n  padding: 0;\n  margin: 0;\n  width: 70px;\n  height: 35px;\n  background-color: #bbb;\n  border-radius: 35px;\n  transition: background-color 0.3s;\n\n  &:after {\n    content: "";\n    position: absolute;\n    top: 2.5px;\n    left: 2.5px;\n    width: 30px;\n    height: 30px;\n    border-radius: 50%;\n    background-color: white;\n    transition: left 0.3s;\n  }\n\n  &.study {\n    background-color: #eb8381;\n    &:after {\n      left: 37.5px;\n    }\n  }\n',
        ]);
        return (
          (V = function () {
            return e;
          }),
          e
        );
      }
      function G() {
        var e = Object(a.a)([
          '\n  background: red;\n  position: relative;\n  font-family: "Quicksand", sans-serif;\n  padding: 7px 12px;\n  text-transform: uppercase;\n  /* font-size: 15px; */\n  font-size: 4vh;\n  font-weight: bold;\n  overflow: hidden;\n  border: 0;\n  border-radius: 5px;\n  background: #eb3535;\n  color: #f8f6f0;\n  height: 6vh;\n\n  transition: all 0.25s ease;\n  cursor: pointer;\n  margin-right: 20px;\n\n  &:active {\n    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.5);\n    background: #f2b1ae;\n  }\n',
        ]);
        return (
          (G = function () {
            return e;
          }),
          e
        );
      }
      function X() {
        var e = Object(a.a)([
          "\n  width: 6vh; /* Adjust the width as needed */\n  height: 6vh; /* Adjust the height as needed */\n  margin-left: 70px; /* Adjust the margin as needed */\n",
        ]);
        return (
          (X = function () {
            return e;
          }),
          e
        );
      }
      function _() {
        var e = Object(a.a)(["\n  display: flex;\n  align-items: center;\n"]);
        return (
          (_ = function () {
            return e;
          }),
          e
        );
      }
      function J() {
        var e = Object(a.a)([
          '\n  font-family: "Quicksand", sans-serif;\n  padding: 7px 12px;\n  /* margin: 20px; */\n  text-transform: uppercase;\n  /* font-size: 15px; */\n  font-size: 2.5vh;\n  overflow: hidden;\n  border: 0;\n  border-radius: 5px;\n  background: #967bb6;\n  color: white;\n  transition: all 0.25s ease;\n  cursor: pointer;\n  height: 6vh;\n\n  &:active {\n    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.5);\n    background: #f2b1ae;\n  }\n',
        ]);
        return (
          (J = function () {
            return e;
          }),
          e
        );
      }
      function $() {
        var e = Object(a.a)([
          "\n  background: #eb8381;\n  /* top: 80; */\n  height: 6vh;\n  transform: translateY(",
          ");\n  transition: 0.2s;\n  display: flex;\n  justify-content: space-between;\n",
        ]);
        return (
          ($ = function () {
            return e;
          }),
          e
        );
      }
      var K = l.b.nav($(), function (e) {
          return e.navTop + "vh";
        }),
        Z = l.b.button(J()),
        ee = (l.b.div(_()), l.b.img(X())),
        ne = l.b.button(G());
      l.b.button(V());
      function te(e) {
        var n = Object(c.useState)(!1),
          t = Object(w.a)(n, 2),
          r = t[0],
          i = t[1],
          s = Object(c.useState)([]),
          a = Object(w.a)(s, 2),
          l = a[0],
          d = a[1],
          f = T(),
          j = f.courseTitleUserIsOn,
          p = f.entryStore,
          m = f.setEntryStore,
          h = f.courseDetails,
          x = f.setSubContainerEntries,
          g = f.subContainer,
          v = f.setSubContainer;
        f.rowClicked, f.setRowClicked;
        console.log(j, h, p),
          Object(c.useEffect)(
            function () {
              S()(
                "/"
                  .concat(j, "/topicNumbersList?collectionName=")
                  .concat(h.courseTopicsCollectionName, "&modelName=")
                  .concat(h.courseTopicsModelName)
              ).then(function (e) {
                d(e.data), console.log(e.data);
              });
            },
            [j]
          ),
          console.log(l),
          Object(c.useEffect)(
            function () {
              S()(
                "/"
                  .concat(j, "/sideBarData?collectionName=")
                  .concat(h.courseTopicsCollectionName, "&modelName=")
                  .concat(h.courseTopicsModelName)
              ).then(function (e) {
                m(e.data), console.log(e.data);
              });
            },
            [j]
          ),
          console.log(p);
        var O = Object(c.useState)("0"),
          y = Object(w.a)(O, 2),
          C = (y[0], y[1]),
          E = Object(c.useState)("0"),
          z = Object(w.a)(E, 2),
          D = z[0],
          L = z[1],
          A = Object(c.useState)("0"),
          M = Object(w.a)(A, 2),
          F = M[0],
          Q = M[1],
          U = Object(c.useState)("0"),
          H = Object(w.a)(U, 2),
          Y = H[0],
          q = H[1],
          R = Object(c.useState)(0),
          V = Object(w.a)(R, 2),
          G = V[0],
          X = V[1],
          _ = window.scrollY;
        window.addEventListener("scroll", function () {
          _ < window.scrollY ? X(-6) : X(0), (_ = window.scrollY);
        });
        var J = function () {
          i(!1);
        };
        console.log(l);
        var $ = function () {
          var e = window.location.href;
          C(e),
            console.log(e),
            p &&
              p.forEach(function (e) {
                e.entries.forEach(function (e) {
                  e.topicNumber == F && 1 == e.rows
                    ? (console.log(D),
                      console.log(e.entries),
                      v(!0),
                      x(e.entries))
                    : e.topicNumber == F &&
                      0 == e.rows &&
                      1 == g &&
                      (console.log(e.entries), v(!1));
                });
              });
        };
        return (
          Object(c.useEffect)(function () {
            var e = window.location.href;
            console.log(e);
            var n = e.split("/");
            console.log(n);
            var t = n[n.length - 1];
            console.log(t);
            var o = [];
            (o = t.includes("%") ? t.split("%23") : t.split("#")),
              console.log(o);
            var c = o[0];
            console.log(c), L(c);
            var r = l.findIndex(function (e) {
              return e == c;
            });
            console.log(r);
            var i = r + 1;
            i > l.length - 1 && (i = 0), console.log(i);
            var s = l[i];
            console.log(s), Q(s);
            var a = r - 1;
            a < 0 && (a = l.length - 1), console.log(a);
            var u = l[a];
            console.log(u), q(u), console.log(p);
          }),
          Object(o.jsxs)("div", {
            style: { display: "unset" },
            children: [
              Object(o.jsxs)(K, {
                style: { position: "sticky", top: 0, zIndex: 1 },
                navTop: G,
                children: [
                  Object(o.jsxs)("div", {
                    children: [
                      Object(o.jsx)(k, {
                        click: function () {
                          i(!0);
                        },
                      }),
                      " ",
                      Object(o.jsxs)(B.b, {
                        to: "/",
                        children: [
                          Object(o.jsx)(ee, { src: N, alt: "Logo" }),
                          " ",
                        ],
                      }),
                    ],
                  }),
                  Object(o.jsx)(B.b, {
                    to: "/".concat(j, "/quiz/") + e.selectedTopic.topicNumber,
                    children:
                      0 !== e.selectedTopic.sections.length &&
                      Object(o.jsxs)(Z, {
                        children: [
                          Object(o.jsx)("p", {
                            style: { fontSize: "1.5vh", margin: "0px" },
                            children: "Switch to",
                          }),
                          Object(o.jsx)("b", { children: "Quiz Mode" }),
                        ],
                      }),
                  }),
                  Object(o.jsxs)("div", {
                    children: [
                      0 !==
                        l.findIndex(function (e) {
                          return e == D;
                        }) &&
                        Object(o.jsx)(B.b, {
                          to: "/".concat(j, "/topic/").concat(Y),
                          children: Object(o.jsx)(ne, {
                            onClick: $,
                            children: Object(o.jsx)(u.a, { icon: b.a }),
                          }),
                        }),
                      l.findIndex(function (e) {
                        return e == D;
                      }) >
                      l.length - 2
                        ? Object(o.jsx)("a", {
                            href: "https://subscribepage.io/hhcourses",
                            children: Object(o.jsxs)(ne, {
                              children: [
                                " ",
                                Object(o.jsx)(u.a, { icon: b.b }),
                              ],
                            }),
                          })
                        : Object(o.jsx)(B.b, {
                            to: "/".concat(j, "/topic/").concat(F),
                            children: Object(o.jsxs)(ne, {
                              onClick: $,
                              children: [
                                " ",
                                Object(o.jsx)(u.a, { icon: b.b }),
                              ],
                            }),
                          }),
                    ],
                  }),
                ],
              }),
              Object(o.jsx)(I.a, {
                in: r && p,
                timeout: 300,
                mountOnEnter: !0,
                unmountOnExit: !0,
                children: function (e) {
                  return Object(o.jsxs)(o.Fragment, {
                    children: [
                      Object(o.jsx)(P, { state: e, click: J }),
                      Object(o.jsx)("div", {
                        className: "overlay",
                        style:
                          "entering" === e
                            ? { animation: "show .3s forwards" }
                            : "entered" === e
                            ? { opacity: "1" }
                            : { animation: "show .3s backwards reverse" },
                        onClick: J,
                      }),
                      Object(o.jsx)("div", {
                        className: "closeBtn",
                        style:
                          "entering" === e
                            ? { animation: "show .3s forwards" }
                            : "entered" === e
                            ? { opacity: "1" }
                            : { animation: "show .3s backwards reverse" },
                        onClick: J,
                        children: "\xd7",
                      }),
                    ],
                  });
                },
              }),
              Object(o.jsx)(W, {}),
            ],
          })
        );
      }
      t(51);
      function oe() {
        var e = Object(a.a)([
          '\n  font-family: "Century Gothic", serif;\n  padding: 10px 50px;\n  color: ',
          ";\n  font-size: 50px;\n",
        ]);
        return (
          (oe = function () {
            return e;
          }),
          e
        );
      }
      l.b.button(oe(), function (e) {
        return e.mouse ? "red" : "blue";
      });
      function ce() {
        var e = Object(a.a)([
          '\n  background: red;\n  font-family: "Quicksand", sans-serif;\n  padding: 7px 12px;\n  text-transform: uppercase;\n  font-size: 25px;\n  overflow: hidden;\n  border: 0;\n  border-radius: 5px;\n  background: #eb3535;\n  color: white;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);\n  transition: all 0.25s ease;\n\n  &:active {\n    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.5);\n    background: #f2b1ae;\n  }\n',
        ]);
        return (
          (ce = function () {
            return e;
          }),
          e
        );
      }
      function re() {
        var e = Object(a.a)([
          '\n  background: red;\n  font-family: "Quicksand", sans-serif;\n  padding: 7px 12px;\n  text-transform: uppercase;\n  font-size: 2vh;\n  overflow: hidden;\n  border: 0;\n  border-radius: 5px;\n  background: #eb3535;\n  color: white;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);\n  transition: all 0.25s ease;\n  cursor: pointer;\n  &:active {\n    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.5);\n    background: #f2b1ae;\n  }\n',
        ]);
        return (
          (re = function () {
            return e;
          }),
          e
        );
      }
      l.b.button(re()), l.b.button(ce());
      function ie() {
        var e = Object(a.a)(["\n          fadeIn 1s\n        "]);
        return (
          (ie = function () {
            return e;
          }),
          e
        );
      }
      function se() {
        var e = Object(a.a)(["\n          shakeY 1s\n        "]);
        return (
          (se = function () {
            return e;
          }),
          e
        );
      }
      function ae() {
        var e = Object(a.a)([
          "\n  font-size: 2vh;\n  display: ",
          ";\n  align-items: center;\n  justify-content: center;\n  animation: ",
          ";\n",
        ]);
        return (
          (ae = function () {
            return e;
          }),
          e
        );
      }
      function le() {
        var e = Object(a.a)(["\n          ", " 400ms\n        "]);
        return (
          (le = function () {
            return e;
          }),
          e
        );
      }
      function ue() {
        var e = Object(a.a)([
          "\n          ",
          " 1s cubic-bezier(1,-0.74,.42,.57)\n        ",
        ]);
        return (
          (ue = function () {
            return e;
          }),
          e
        );
      }
      function de() {
        var e = Object(a.a)([
          "\n  font-size: 2.2vh;\n  text-align: center;\n  font-family: Quicksand;\n  border-radius: 15px;\n  padding: 10px;\n  color: #252525;\n  display: flex;\n  background: ",
          ";\n  margin-bottom: 10px;\n  margin-top: 10px;\n  transition: transform 300ms;\n  justify-content: center;\n  animation: ",
          ";\n\n  &:hover {\n    cursor: pointer;\n    box-shadow: 0 0.1rem 0.5rem rgba(0, 0, 0, 0.2);\n    transform: scale(1.02);\n  }\n",
        ]);
        return (
          (de = function () {
            return e;
          }),
          e
        );
      }
      function be() {
        var e = Object(a.a)([
          "\n  /* font-size: 17px; */\n  font-size: 2.5vh;\n  font-weight: bold;\n  text-align: center;\n  color: #eb8381;\n  padding: 20px;\n",
        ]);
        return (
          (be = function () {
            return e;
          }),
          e
        );
      }
      function fe() {
        var e = Object(a.a)([
          '\n  /* box-shadow: 0 0.1rem 0.5rem rgba(0, 0, 0, 0.2); */\n  border-radius: 5px;\n  padding: 10px;\n  /* background: #252525; */\n  margin-top: 40px;\n  font-family: "Quicksand", sans-serif;\n',
        ]);
        return (
          (fe = function () {
            return e;
          }),
          e
        );
      }
      function je() {
        var e = Object(a.a)(["\n0%{opacity: 0}\n100%{opacity: 1}\n"]);
        return (
          (je = function () {
            return e;
          }),
          e
        );
      }
      function pe() {
        var e = Object(a.a)([
          "\n0%{transform: scale(1)}\n50%{transform: scale(2)}\n100%{transform: scale(1)}\n",
        ]);
        return (
          (pe = function () {
            return e;
          }),
          e
        );
      }
      function me() {
        var e = Object(a.a)([
          "\n0%{transform: scale(1)}\n20%{transform: scale(1.2)}\n50%{transform: scale(1)}\n75%{transform: scale(1.2)}\n100%{transform: scale(1)}\n",
        ]);
        return (
          (me = function () {
            return e;
          }),
          e
        );
      }
      var he = Object(l.c)(me()),
        xe = Object(l.c)(pe()),
        ge = (Object(l.c)(je()), l.b.div(fe())),
        ve = l.b.div(be()),
        Oe = l.b.div(
          de(),
          function (e) {
            return e.answerClicked == e.answer ? e.answerColor : "#fcebeb";
          },
          function (e) {
            return e.answerClicked == e.answer && "#DAF7A6" == e.answerColor
              ? Object(l.a)(ue(), xe)
              : e.answerClicked == e.answer && "#ff726f" == e.answerColor
              ? Object(l.a)(le(), he)
              : "none";
          }
        ),
        we = l.b.div(
          ae(),
          function (e) {
            return e.answerClicked == e.answer ? "flex" : "none";
          },
          function (e) {
            return e.answerClicked == e.answer && "#DAF7A6" == e.answerColor
              ? Object(l.a)(se())
              : e.answerClicked == e.answer && "#ff726f" == e.answerColor
              ? Object(l.a)(ie())
              : "none";
          }
        ),
        Ne = function (e) {
          console.log(e);
          var n = T(),
            t = n.exampleDatafromBackEnd;
          n.courseTitleUserIsOn;
          console.log(t);
          var r = Object(c.useState)("#fcebeb"),
            i = Object(w.a)(r, 2),
            s = i[0],
            a = i[1],
            l = Object(c.useState)("NoAnswer"),
            u = Object(w.a)(l, 2),
            d = u[0],
            b = u[1],
            f = Object(c.useState)(!1),
            j = Object(w.a)(f, 2),
            p = (j[0], j[1]);
          var m = Object(c.useState)(
              e.sectionExample && e.sectionExample.answers
            ),
            h = Object(w.a)(m, 2),
            x = h[0],
            g = h[1];
          Object(c.useEffect)(
            function () {
              var n =
                e.sectionExample &&
                (function (e) {
                  for (var n, t = e.length; 0 != t; ) {
                    (n = Math.floor(Math.random() * t)), t--;
                    var o = [e[n], e[t]];
                    (e[t] = o[0]), (e[n] = o[1]);
                  }
                  return e;
                })(e.sectionExample.answers);
              g(n);
            },
            [e.sectionExample]
          ),
            console.log(e.sectionExample && e.sectionExample.answers);
          var v = [],
            O = t.filter(function (n) {
              return n.sectionNumber == e.section;
            });
          return (
            (v =
              O.length > 3
                ? (function (e, n) {
                    for (var t = [], o = 0; o < n; ) {
                      var c = Math.floor(Math.random() * e.length);
                      t.includes(e[c]) || (t.push(e[c]), o++);
                    }
                    return t;
                  })(O, 3)
                : O),
            console.log(v),
            Object(o.jsxs)(ge, {
              children: [
                Object(o.jsx)(ve, {
                  children: e.sectionExample && e.sectionExample.question,
                }),
                x &&
                  x.map(function (e) {
                    return Object(o.jsxs)(o.Fragment, {
                      children: [
                        Object(o.jsx)(Oe, {
                          onClick: function () {
                            return (
                              (n = e.isCorrect),
                              (t = e.answer),
                              b(t),
                              p(!0),
                              console.log(d),
                              void (1 == n
                                ? (a("#DAF7A6"), console.log(s))
                                : a("#ff726f"))
                            );
                            var n, t;
                          },
                          answerColor: s,
                          answer: e.answer,
                          answerClicked: d,
                          children: Object(o.jsx)("p", { children: e.answer }),
                        }),
                        Object(o.jsx)(we, {
                          answerClicked: d,
                          answer: e.answer,
                          answerColor: s,
                          children: e.explanation
                            ? Object(o.jsxs)(o.Fragment, {
                                children: [
                                  Object(o.jsx)("p", {
                                    style: {
                                      color: "red",
                                      display: "inline",
                                      fontSize: "25px",
                                      margin: "0 10px",
                                    },
                                    children: "\u2716",
                                  }),
                                  Object(o.jsx)("p", {
                                    style: { display: "inline" },
                                    children: e.explanation,
                                  }),
                                ],
                              })
                            : Object(o.jsxs)(o.Fragment, {
                                children: [
                                  Object(o.jsx)("p", {
                                    style: {
                                      color: "green",
                                      display: "inline",
                                      fontSize: "25px",
                                      margin: "0 10px 0 0",
                                    },
                                    children: "\u2713",
                                  }),
                                  " ",
                                  Object(o.jsx)("p", { children: "Correct!" }),
                                ],
                              }),
                        }),
                      ],
                    });
                  }),
              ],
            })
          );
        };
      function ke() {
        var e = Object(a.a)([
          "\n  /* font-size: 15px; */\n  font-size: 2vh;\n  margin-left: 30px;\n",
        ]);
        return (
          (ke = function () {
            return e;
          }),
          e
        );
      }
      function ye() {
        var e = Object(a.a)([
          '\n  background: #eb8381;\n  align-items: center;\n  color: #252525;\n  /* font-size: 18px; */\n  font-size: 2vh;\n  display: inline-block;\n  margin-bottom: 10px;\n  padding-right: 10px;\n  font-family: "Quicksand", sans-serif;\n  border-radius: 5px;\n',
        ]);
        return (
          (ye = function () {
            return e;
          }),
          e
        );
      }
      function Ce() {
        var e = Object(a.a)(["\n  margin: 0 auto;\n"]);
        return (
          (Ce = function () {
            return e;
          }),
          e
        );
      }
      function Se() {
        var e = Object(a.a)(["\n          ", " 2s\n        "]);
        return (
          (Se = function () {
            return e;
          }),
          e
        );
      }
      function Ee() {
        var e = Object(a.a)([
          '\n  /* height: 30vh; */\n  /* font-size: 20px; */\n  /* display: flex;\n  flex-direction: column; */\n  background: #252525;\n  color: #f8f6f0;\n  font-size: 2vh;\n  white-space: pre-line;\n  margin: 10px 30px;\n  padding: 20px;\n  box-shadow: 0 0.1rem 0.5rem rgba(0, 0, 0, 0.5);\n  display: block;\n  position: relative;\n  align-items: center;\n  font-family: "Quicksand", sans-serif;\n  border-radius: 1rem;\n  /* padding: 20px; */\n  animation: ',
          ";\n\n  .sectionImage {\n    display: block;\n    margin: 0 auto; /* This will center the image horizontally */\n    border-radius: 4rem;\n    width: 100%;\n    height: 100%;\n    object-fit: contain;\n  }\n\n  @media (min-width: 1050px) {\n    /* Apply styles for desktop devices with a screen width of 768px and above */\n    .sectionImage {\n      max-width: 25%; /* Adjust the maximum width as needed for desktop view */\n      margin-right: 60px; /* Add some spacing between the image and text on desktop */\n      display: inline;\n      vertical-align: middle;\n    }\n\n    .sectionText {\n      display: inline-block;\n      max-width: 70%;\n      font-size: 3vh;\n      vertical-align: middle;\n    }\n  }\n",
        ]);
        return (
          (Ee = function () {
            return e;
          }),
          e
        );
      }
      function Te() {
        var e = Object(a.a)([
          '\n  color: #eb8381;\n  /* font-size: 20px; */\n  /* font-size: clamp(3vh, 20px, 20px); */\n  font-size: 3vh;\n  display: block;\n  margin-bottom: 50px;\n  font-family: "Quicksand", sans-serif;\n',
        ]);
        return (
          (Te = function () {
            return e;
          }),
          e
        );
      }
      function ze() {
        var e = Object(a.a)([
          '\n  background: #f8f6f0;\n  color: #252525;\n  /* height: 30vh; */\n  /* font-size: 1.2rem; */\n  font-size: 2.2vh;\n\n  white-space: pre-line;\n  margin: 10px 30px;\n  padding: 20px;\n  box-shadow: 0 0.1rem 0.1rem rgba(0, 0, 0, 0.2);\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  position: relative;\n\n  font-family: "Quicksand", sans-serif;\n  border-radius: 1rem;\n  /* padding: 20px; */\n',
        ]);
        return (
          (ze = function () {
            return e;
          }),
          e
        );
      }
      function De() {
        var e = Object(a.a)([
          '\n  color: #eb8381;\n  /* font-size: 1rem; */\n  /* font-size: clamp(4vh, 30px, 30px); */\n  /* font-size: min(2rem, 4vh); */\n  font-size: 4vh;\n  display: block;\n  margin: 30px;\n  font-family: "Quicksand", sans-serif;\n\n  /* @media (max-width: 40em) {\n    font-size: 5vh;\n  } */\n\n  /* justify-content: space-between; */\n',
        ]);
        return (
          (De = function () {
            return e;
          }),
          e
        );
      }
      function Ie() {
        var e = Object(a.a)([
          '\n  background: red;\n  font-family: "Quicksand", sans-serif;\n  padding: 7px 12px;\n  margin: 20px;\n  text-transform: uppercase;\n  /* font-size: 15px; */\n  font-size: 3vh;\n  overflow: hidden;\n  border: 0;\n  border-radius: 5px;\n  background: #967bb6;\n  color: white;\n  transition: all 0.25s ease;\n  cursor: pointer;\n\n  &:active {\n    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.5);\n    background: #f2b1ae;\n  }\n',
        ]);
        return (
          (Ie = function () {
            return e;
          }),
          e
        );
      }
      function Be() {
        var e = Object(a.a)([
          '\n  background: red;\n  font-family: "Quicksand", sans-serif;\n  padding: 7px 12px;\n  margin-right: "20px";\n  text-transform: uppercase;\n  /* font-size: 15px; */\n  font-size: 2vh;\n  overflow: hidden;\n  border: 0;\n  border-radius: 5px;\n  background: #fcebeb;\n  color: #252525;\n  transition: all 0.25s ease;\n  cursor: pointer;\n\n  &:active {\n    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.5);\n    background: #fcebeb;\n  }\n',
        ]);
        return (
          (Be = function () {
            return e;
          }),
          e
        );
      }
      function Le() {
        var e = Object(a.a)([
          "\n0%{transform: scale(1); box-shadow: 0 0 0px rgba(0,0,0,0);}\n20%{transform: scale(1.01); background: #fcebeb; box-shadow: 0 0 20px #eb8381;}\n50%{transform: scale(1); box-shadow: 0 0 0px rgba(0,0,0,0);}\n",
        ]);
        return (
          (Le = function () {
            return e;
          }),
          e
        );
      }
      var Ae = Object(l.c)(Le());
      console.log("Rendered");
      var Me = l.b.button(Be()),
        Fe = (l.b.button(Ie()), l.b.div(De())),
        Qe = l.b.div(ze()),
        Ue = l.b.p(Te()),
        He = l.b.div(Ee(), function (e) {
          return e.sectionNumber == e.currentUrlSectionID
            ? Object(l.a)(Se(), Ae)
            : "none";
        }),
        Ye = l.b.div(Ce()),
        qe = l.b.p(ye()),
        Re = l.b.p(ke()),
        Pe = function (e) {
          var n = T(),
            t = n.courseTitleUserIsOn,
            r = n.setCourseTitleUserIsOn,
            i = n.courseDetails,
            s = n.setCourseDetails;
          console.log(i),
            Object(c.useEffect)(function () {
              r(e.match.params.courseTitle);
            }, []),
            console.log(t),
            console.log(e.match.params.courseTitle),
            Object(c.useEffect)(
              function () {
                S()("/coursesData").then(function (n) {
                  console.log(n.data);
                  var t = n.data.find(function (n) {
                    return (
                      n.courseTitle.replace(/\s/g, "") ===
                      e.match.params.courseTitle
                    );
                  });
                  s(t);
                });
              },
              [t]
            ),
            console.log(i);
          var a = Object(c.useState)([]),
            l = Object(w.a)(a, 2),
            u = l[0],
            d = l[1],
            b = Object(c.useState)([]),
            f = Object(w.a)(b, 2),
            j = f[0],
            p = f[1];
          console.log(e.match), console.log(e.match.params.topicNumber);
          var m = e.match.params.topicNumber;
          if (m.includes("%")) {
            var h = m.split("%");
            m = h[0];
          }
          console.log(m),
            Object(c.useEffect)(
              function () {
                S()(
                  "/"
                    .concat(t, "/topicRESTCAll/")
                    .concat(m, "?collectionName=")
                    .concat(i.courseTopicsCollectionName, "&modelName=")
                    .concat(i.courseTopicsModelName)
                ).then(function (e) {
                  p(e.data), console.log(e.data);
                });
              },
              [m, i]
            ),
            console.log(j),
            Object(c.useEffect)(
              function () {
                S()(
                  "/examplesData?collectionName="
                    .concat(i.courseExamplesCollectionName, "&modelName=")
                    .concat(i.courseExamplesModelName)
                ).then(function (e) {
                  d(e.data), console.log(e.data);
                });
              },
              [m, i]
            ),
            console.log(u);
          var x = window.location.href;
          console.log(x);
          var g = x.split("/");
          console.log(g);
          var v = g[g.length - 1];
          console.log(v);
          var O = [];
          (O = v.includes("%") ? v.split("%23") : v.split("#")), console.log(O);
          var N = O[1];
          console.log(N),
            Object(c.useEffect)(
              function () {
                void 0 === N && window.scrollTo({ top: 0, behavior: "smooth" });
              },
              [x]
            ),
            Object(c.useEffect)(function () {
              if (N) {
                var e = document.getElementById(N);
                e && e.scrollIntoView();
              }
            }),
            console.log(x);
          var k = [];
          j.sections &&
            j.sections.map(function (e) {
              return k.push(e.sectionNumber);
            }),
            console.log(k);
          var y = function (e) {
              var n =
                0 !== u.length &&
                u.filter(function (n) {
                  return n.sectionNumber == e;
                });
              return n[Math.floor(Math.random() * n.length)];
            },
            C = function (e, n) {
              for (var t = [], o = 0; o < n; ) {
                var c = Math.floor(Math.random() * e.length);
                t.includes(e[c]) || (t.push(e[c]), o++);
              }
              return t;
            },
            E = Math.ceil(100 / k.length);
          console.log(E);
          var z = [],
            D = [],
            I = [],
            B = [];
          return (
            k.map(function (e) {
              var n =
                0 !== u.length &&
                u.filter(function (n) {
                  return n.sectionNumber == e;
                });
              console.log(n),
                n.length > E
                  ? ((z = C(n, E)), console.log(z), (I = D.concat(I, z)))
                  : (I = D.concat(I, n)),
                console.log(D),
                console.log(I);
            }),
            console.log(D),
            console.log(I),
            (B = I.length > 100 ? C(I, 100) : I),
            console.log(B),
            "undefined" === j || null === j || 0 === j.length
              ? Object(o.jsx)("div", { children: "Loading" })
              : Object(o.jsxs)("div", {
                  children: [
                    Object(o.jsx)(te, {
                      courseTitleUserIsOn: t,
                      courseDetails: i,
                      selectedTopic: j,
                    }),
                    Object(o.jsxs)(Fe, {
                      id: "Topic",
                      children: [
                        j.topicNumber,
                        " \xa0 ",
                        j.topicTitle,
                        j.topicYoutubeLink &&
                          Object(o.jsx)("a", {
                            href: j.topicYoutubeLink,
                            style: { fontSize: 25, marginLeft: "20px" },
                            target: "_blank",
                            rel: "noopener noreferrer",
                            children: Object(o.jsx)(Me, {
                              children: Object(o.jsx)("b", {
                                children: "Watch",
                              }),
                            }),
                          }),
                        "\xa0 \xa0",
                        Object(o.jsx)(Me, {
                          onClick: function () {
                            var e =
                                i.courseTitle +
                                "\nTopic " +
                                j.topicNumber +
                                " - " +
                                j.topicTitle,
                              n =
                                i.courseTitle +
                                "\nTopic " +
                                j.topicNumber +
                                " - " +
                                j.topicTitle +
                                "\n\n" +
                                j.topicDescription;
                            navigator.share
                              ? navigator.share({
                                  title: e,
                                  text: n,
                                  url: "/#/"
                                    .concat(t, "/topic/")
                                    .concat(j.topicNumber),
                                })
                              : navigator.clipboard.writeText(
                                  "/#/"
                                    .concat(t, "/topic/")
                                    .concat(j.topicNumber)
                                );
                          },
                          children: Object(o.jsx)("b", { children: "share" }),
                        }),
                      ],
                    }),
                    Object(o.jsx)(Qe, {
                      children: Object(o.jsx)("p", {
                        children: j.topicDescription,
                      }),
                    }),
                    Object(o.jsx)("hr", {
                      style: {
                        marginTop: 50,
                        marginBottom: 50,
                        width: "70vw",
                        backgroundColor: "#eb8381",
                        height: 2,
                        borderRadius: 20,
                        border: 0,
                      },
                    }),
                    j.sections &&
                      j.sections.map(function (e) {
                        return Object(o.jsxs)("div", {
                          children: [
                            Object(o.jsxs)(He, {
                              currentUrlSectionID: N,
                              sectionNumber: e.sectionNumber,
                              children: [
                                Object(o.jsxs)(Ue, {
                                  id: e.sectionNumber,
                                  children: [
                                    Object(o.jsxs)("b", {
                                      children: [
                                        e.sectionNumber,
                                        " \xa0 ",
                                        e.sectionTitle,
                                      ],
                                    }),
                                    e.sectonYoutubeLink &&
                                      Object(o.jsx)("a", {
                                        href: e.sectonYoutubeLink,
                                        style: { marginLeft: "20px" },
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        children: Object(o.jsx)(Me, {
                                          children: Object(o.jsx)("b", {
                                            children: "Watch",
                                          }),
                                        }),
                                      }),
                                    "\xa0 \xa0",
                                    Object(o.jsx)(Me, {
                                      onClick: function () {
                                        var n = decodeURIComponent(
                                            "/#/"
                                              .concat(t, "/topic/")
                                              .concat(j.topicNumber, "%23")
                                              .concat(e.sectionNumber)
                                          ),
                                          o =
                                            i.courseTitle +
                                            "\nSection " +
                                            e.sectionNumber +
                                            " - " +
                                            e.sectionTitle +
                                            "\n\n" +
                                            e.sectionDescription +
                                            "\n\n" +
                                            e.sectionNotes.join(" "),
                                          c =
                                            i.courseTitle +
                                            "\nSection " +
                                            e.sectionNumber +
                                            " - " +
                                            e.sectionTitle;
                                        navigator.share
                                          ? navigator.share({
                                              title: c,
                                              text: o,
                                              url: n,
                                            })
                                          : navigator.clipboard.writeText(
                                              "/#/"
                                                .concat(t, "/topic/")
                                                .concat(j.topicNumber, "#")
                                                .concat(e.sectionNumber)
                                            );
                                      },
                                      children: Object(o.jsx)("b", {
                                        children: "share",
                                      }),
                                    }),
                                  ],
                                }),
                                Object(o.jsxs)(Ye, {
                                  children: [
                                    Object(o.jsx)("img", {
                                      className: "sectionImage",
                                      src:
                                        "https://qaleelo-assets.s3.us-east-2.amazonaws.com/" +
                                        i.courseTitle.replace(/\s/g, "") +
                                        "/sectionImages/" +
                                        e.sectionNumber +
                                        ".png",
                                      alt: "",
                                    }),
                                    Object(o.jsxs)("div", {
                                      className: "sectionText",
                                      children: [
                                        Object(o.jsx)("p", {
                                          children: e.sectionDescription,
                                        }),
                                        e.sectionNotes &&
                                          e.sectionNotes.map(function (e, n) {
                                            return Object(o.jsxs)("div", {
                                              children: [
                                                Object(o.jsx)(qe, {
                                                  children: Object(o.jsx)(
                                                    "div",
                                                    {
                                                      className: "noteTitle",
                                                      children: Object(o.jsxs)(
                                                        "b",
                                                        {
                                                          children: [
                                                            "\xa0 Note ",
                                                            n + 1,
                                                          ],
                                                        }
                                                      ),
                                                    }
                                                  ),
                                                }),
                                                Object(o.jsx)(Re, {
                                                  className: "noteDescription",
                                                  children: e,
                                                }),
                                              ],
                                            });
                                          }),
                                      ],
                                    }),
                                  ],
                                }),
                                Object(o.jsx)(Ne, {
                                  topicNumber: m,
                                  section: e.sectionNumber,
                                  sectionTitle: e.sectionTitle,
                                  sectionExample: y(e.sectionNumber),
                                }),
                              ],
                            }),
                            Object(o.jsx)("hr", {
                              style: {
                                marginTop: 50,
                                marginBottom: 50,
                                width: "70vw",
                                backgroundColor: "#eb8381",
                                height: 2,
                                borderRadius: 20,
                                border: 0,
                              },
                            }),
                          ],
                        });
                      }),
                  ],
                })
          );
        },
        We = t(8),
        Ve = t(35),
        Ge = Object(c.createContext)(),
        Xe = Object(c.createContext)();
      function _e() {
        var e = Object(a.a)([
          "\n  font-size: 2vh;\n  color: #f8f6f0;\n  display: ",
          ";\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n",
        ]);
        return (
          (_e = function () {
            return e;
          }),
          e
        );
      }
      function Je() {
        var e = Object(a.a)([
          "\n  font-size: 2.2vh;\n  border-radius: 15px;\n  padding: 10px;\n  text-align: center;\n  display: flex;\n  background: ",
          ";\n  margin-bottom: 10px;\n  margin-top: 10px;\n  transition: transform 300ms;\n  justify-content: center;\n  pointer-events: ",
          ";\n\n  &:hover {\n    cursor: pointer;\n    box-shadow: 0 0.1rem 0.5rem rgba(0, 0, 0, 0.2);\n    transform: scale(1.02);\n  }\n",
        ]);
        return (
          (Je = function () {
            return e;
          }),
          e
        );
      }
      function $e() {
        var e = Object(a.a)([
          "\n  /* font-size: 17px; */\n  font-size: 2.5vh;\n  font-weight: bold;\n  text-align: center;\n  color: #d0bad9;\n  padding: 20px;\n",
        ]);
        return (
          ($e = function () {
            return e;
          }),
          e
        );
      }
      function Ke() {
        var e = Object(a.a)([
          '\n  box-shadow: 0 0.1rem 0.5rem rgba(0, 0, 0, 0.2);\n  border-radius: 5px;\n  padding: 10px;\n  background: #252525;\n  margin-left: 50px;\n  margin-right: 50px;\n  margin-top: 50px;\n  margin-bottom: 50px;\n  font-family: "Quicksand", sans-serif;\n',
        ]);
        return (
          (Ke = function () {
            return e;
          }),
          e
        );
      }
      function Ze() {
        var e = Object(a.a)([
          '\n  background: red;\n  font-family: "Quicksand", sans-serif;\n  padding: 7px 12px;\n  text-transform: uppercase;\n  font-size: 2vh;\n  overflow: hidden;\n  border: 0;\n  border-radius: 5px;\n  background: #967bb6;\n  color: white;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);\n  transition: all 0.25s ease;\n  cursor: pointer;\n  &:active {\n    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.5);\n    background: #f2b1ae;\n  }\n',
        ]);
        return (
          (Ze = function () {
            return e;
          }),
          e
        );
      }
      function en() {
        var e = Object(a.a)(["\n0%{opacity: 0}\n100%{opacity: 1}\n"]);
        return (
          (en = function () {
            return e;
          }),
          e
        );
      }
      Object(l.c)(en());
      var nn = l.b.button(Ze()),
        tn = l.b.div(Ke()),
        on = l.b.div($e()),
        cn = l.b.div(
          Je(),
          function (e) {
            return e.answerClicked == e.answer && e.submitted
              ? e.answerColor
              : e.answerClicked == e.answer
              ? "#b8b8b8"
              : "#e8e2ef";
          },
          function (e) {
            return e.submitted ? "none" : "auto";
          }
        ),
        rn = l.b.div(_e(), function (e) {
          return e.answerClicked == e.answer && e.submitted ? "flex" : "none";
        }),
        sn = function (e) {
          var n = T().courseTitleUserIsOn,
            t = Object(c.useContext)(Ge),
            r = Object(w.a)(t, 2),
            i = r[0],
            s = r[1],
            a = Object(c.useContext)(Xe),
            l = Object(w.a)(a, 2),
            u = l[0],
            d = (l[1], Object(c.useState)("#e8e2ef")),
            b = Object(w.a)(d, 2),
            f = b[0],
            j = b[1],
            p = Object(c.useState)("NoAnswer"),
            m = Object(w.a)(p, 2),
            h = m[0],
            x = m[1],
            g = Object(c.useState)(!1),
            v = Object(w.a)(g, 2),
            O = v[0],
            N = v[1],
            k = Object(c.useState)("noSelection"),
            y = Object(w.a)(k, 2),
            C = y[0],
            S = y[1];
          Object(c.useEffect)(
            function () {
              0 == i.length && x("NoAnswer");
            },
            [u]
          );
          var E = function (n, t) {
            x(t),
              N(!0),
              1 == n
                ? (j("#DAF7A6"),
                  S(!0),
                  (function (e) {
                    var n = Object(Ve.a)(i);
                    (n[e] = 1), s(n), console.log(i);
                  })(e.exampleIndex),
                  console.log(e.exampleIndex))
                : (j("#ff726f"),
                  S(!1),
                  (function (e) {
                    var n = Object(Ve.a)(i);
                    (n[e] = 0), s(n), console.log(i);
                  })(e.exampleIndex));
          };
          return Object(o.jsxs)(tn, {
            children: [
              Object(o.jsx)(on, { children: e.example.question }),
              e.example &&
                e.example.answers.map(function (e) {
                  return Object(o.jsxs)(o.Fragment, {
                    children: [
                      Object(o.jsx)(cn, {
                        onClick: function () {
                          return E(e.isCorrect, e.answer);
                        },
                        answerColor: f,
                        answer: e.answer,
                        answerClicked: h,
                        submitted: u,
                        sumCorrect: i,
                        children: Object(o.jsx)("p", { children: e.answer }),
                      }),
                      Object(o.jsx)(rn, {
                        answerClicked: h,
                        answer: e.answer,
                        answerColor: f,
                        selectedAnswer: C,
                        submitted: u,
                        children: e.explanation
                          ? Object(o.jsxs)(o.Fragment, {
                              children: [
                                Object(o.jsx)("p", {
                                  style: {
                                    color: "red",
                                    display: "inline",
                                    fontSize: "25px",
                                    margin: "0 10px",
                                  },
                                  children: "\u2716",
                                }),
                                Object(o.jsx)("p", {
                                  style: { display: "inline" },
                                  children: e.explanation,
                                }),
                              ],
                            })
                          : Object(o.jsxs)(o.Fragment, {
                              children: [
                                Object(o.jsx)("p", {
                                  style: {
                                    color: "green",
                                    display: "inline",
                                    fontSize: "25px",
                                    margin: "0 10px 0 0",
                                  },
                                  children: "\u2713",
                                }),
                                " ",
                                Object(o.jsx)("p", { children: "Correct!" }),
                              ],
                            }),
                      }),
                    ],
                  });
                }),
              Object(o.jsx)("div", {
                style:
                  O && u
                    ? {
                        display: "block",
                        marginTop: "30px",
                        textAlign: "center",
                      }
                    : { display: "none" },
                children: Object(o.jsxs)(q.a, {
                  to: "/"
                    .concat(n, "/topic/")
                    .concat(e.topicNumber, "#")
                    .concat(e.example.sectionNumber),
                  children: [
                    " ",
                    Object(o.jsx)(nn, { children: "Study this Lesson" }),
                  ],
                }),
              }),
            ],
          });
        };
      t(81);
      function an() {
        var e = Object(a.a)([
          "\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n\n  @media (max-width: 1200px) {\n    flex-basis: 100%;\n    margin-top: 30px;\n  }\n",
        ]);
        return (
          (an = function () {
            return e;
          }),
          e
        );
      }
      function ln() {
        var e = Object(a.a)(["\n          shakeX 1s 1s\n        "]);
        return (
          (ln = function () {
            return e;
          }),
          e
        );
      }
      function un() {
        var e = Object(a.a)(["\n          shakeY 1s 1s\n        "]);
        return (
          (un = function () {
            return e;
          }),
          e
        );
      }
      function dn() {
        var e = Object(a.a)([
          "\n  font-size: 3vh;\n  text-align: center;\n  font-weight: 900;\n  margin: 0;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  animation: ",
          ";\n\n  @media (max-width: 1200px) {\n    flex-basis: 100%;\n    margin-bottom: 20px;\n  }\n",
        ]);
        return (
          (dn = function () {
            return e;
          }),
          e
        );
      }
      function bn() {
        var e = Object(a.a)([
          '\n  font-size: 3vh;\n  font-family: "Quicksand", sans-serif;\n  text-align: center;\n  font-weight: 900;\n  margin: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n',
        ]);
        return (
          (bn = function () {
            return e;
          }),
          e
        );
      }
      function fn() {
        var e = Object(a.a)([
          "\n  background: ",
          ";\n  font-size: 40px;\n  white-space: pre-line;\n  margin: 10px 30px;\n  padding: 10px;\n  box-shadow: 0 0.1rem 0.1rem rgba(0, 0, 0, 0.2);\n  display: ",
          '; /* Display score card only when button is clicked, ie. when submitted state is true */\n  flex-wrap: wrap;\n  position: relative;\n  align-items: center;\n  justify-content: space-around;\n  text-align: center;\n  font-family: "Quicksand", sans-serif;\n  border-radius: 1rem;\n  padding: 20px;\n',
        ]);
        return (
          (fn = function () {
            return e;
          }),
          e
        );
      }
      function jn() {
        var e = Object(a.a)([
          '\n  background: red;\n  font-family: "Quicksand", sans-serif;\n  padding: 7px 100px;\n  text-transform: uppercase;\n  font-size: 2vh;\n  overflow: hidden;\n  border: 0;\n  border-radius: 5px;\n  background: #967bb6;\n  color: white;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);\n  transition: all 0.25s ease;\n  cursor: pointer;\n\n  &:active {\n    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.5);\n    background: #f2b1ae;\n  }\n',
        ]);
        return (
          (jn = function () {
            return e;
          }),
          e
        );
      }
      var pn = l.b.button(jn()),
        mn = l.b.div(
          fn(),
          function (e) {
            return 100 == e.scorePercentage ? "#f6ffe6" : "#e8c6c5";
          },
          function (e) {
            return e.submitted ? "flex" : "none";
          }
        ),
        hn = l.b.p(bn()),
        xn = l.b.div(dn(), function (e) {
          return e.submitted && 100 == e.scorePercentage
            ? Object(l.a)(un())
            : e.submitted && e.scorePercentage < 100
            ? Object(l.a)(ln())
            : "none";
        }),
        gn = l.b.div(an()),
        vn = function (e) {
          var n = T(),
            t = n.exampleDatafromBackEnd,
            r = n.courseTitleUserIsOn;
          console.log(t);
          var i = Object(c.useContext)(Ge),
            s = Object(w.a)(i, 2),
            a = s[0],
            l = s[1],
            u = Object(c.useState)("#f8f8f8"),
            d = Object(w.a)(u, 2),
            b = (d[0], d[1], Object(c.useContext)(Xe)),
            f = Object(w.a)(b, 2),
            j = f[0],
            p = f[1],
            m = Object(We.f)(),
            h = a.reduce(function (e, n) {
              return e + n;
            }, 0),
            x = Math.round((h / a.length) * 100),
            g =
              (e.goBackTo,
              "Topic" == e.comingFrom
                ? "/".concat(r, "/topic/").concat(e.topicNumber)
                : "Section" == e.comingFrom
                ? "/"
                    .concat(r, "/topic/")
                    .concat(e.topicNumber, "#")
                    .concat(e.sectionNumber)
                : "ScoreCard" == e.comingFrom && e.sections.constructor == Array
                ? "/".concat(r, "/topic/").concat(e.topicNumber)
                : "ScoreCard" == e.comingFrom
                ? "/"
                    .concat(r, "/topic/")
                    .concat(e.topicNumber, "#")
                    .concat(m.state.sectionNumber)
                : "/".concat(r, "/topic/").concat(e.topicNumber),
              "Topic" == e.comingFrom
                ? "/".concat(r, "/quiz/").concat(e.topicNumber)
                : "Section" == e.comingFrom
                ? "/"
                    .concat(r, "/quiz/")
                    .concat(e.topicNumber, "/")
                    .concat(e.sectionNumber)
                : "ScoreCard" == e.comingFrom && e.sections.constructor == Array
                ? "/".concat(r, "/quiz/").concat(e.topicNumber)
                : "ScoreCard" == e.comingFrom
                ? "/"
                    .concat(r, "/quiz/")
                    .concat(e.topicNumber, "/")
                    .concat(m.state.sectionNumber)
                : "/".concat(r, "/quiz/").concat(e.topicNumber)),
            v = function (e, n) {
              for (var t = [], o = 0; o < n; ) {
                var c = Math.floor(Math.random() * e.length);
                t.includes(e[c]) || (t.push(e[c]), o++);
              }
              return t;
            };
          console.log(e.comingFrom),
            console.log(e.sections),
            console.log(e.topicNumber),
            console.log(e.sectionNumber);
          var O = Math.ceil(5 / e.sections.length),
            N = [],
            k = [],
            y = [],
            C = [];
          if ("Topic" == e.comingFrom)
            e.sections.map(function (e) {
              var n = t.filter(function (n) {
                return n.sectionNumber == e;
              });
              n.length > O
                ? ((N = v(n, O)), k.push.apply(k, N))
                : k.push.apply(k, n);
            }),
              (C = y = k.length > 5 ? v(k, 5) : k);
          else if ("Section" == e.comingFrom) {
            var S = t.filter(function (n) {
              return n.sectionNumber == e.sections;
            });
            C = N = S.length > 5 ? v(S, 5) : S;
          } else if ("ScoreCard" == e.comingFrom)
            if (e.sections.constructor == Array)
              e.sections.map(function (e) {
                var n = t.filter(function (n) {
                  return n.sectionNumber == e;
                });
                n.length > O
                  ? ((N = v(n, O)), k.push.apply(k, N))
                  : k.push.apply(k, n);
              }),
                (C = y = k.length > 5 ? v(k, 5) : k);
            else {
              var E = t.filter(function (n) {
                return n.sectionNumber == e.sections;
              });
              C = N = E.length > 5 ? v(E, 5) : E;
            }
          console.log(y), console.log(N);
          return Object(o.jsxs)(mn, {
            submitted: j,
            scorePercentage: x,
            children: [
              100 == x
                ? Object(o.jsxs)(xn, {
                    submitted: j,
                    scorePercentage: x,
                    children: [
                      Object(o.jsx)("p", {
                        style: {
                          color: "green",
                          display: "inline",
                          fontSize: "50px",
                          margin: "0 10px 0 0",
                        },
                        children: "\u2713",
                      }),
                      Object(o.jsx)("p", {
                        children: "Congratulations you got them all right!",
                      }),
                    ],
                  })
                : Object(o.jsxs)(xn, {
                    submitted: j,
                    scorePercentage: x,
                    children: [
                      Object(o.jsx)("p", {
                        style: {
                          color: "#ff726f",
                          display: "inline",
                          fontSize: "50px",
                          margin: "0 10px",
                        },
                        children: "\u2716",
                      }),
                      Object(o.jsx)("p", { children: "Not quite there yet!" }),
                    ],
                  }),
              Object(o.jsxs)("div", {
                children: [
                  Object(o.jsx)(hn, { children: "Score" }),
                  h,
                  "/",
                  a.length,
                ],
              }),
              Object(o.jsxs)("div", {
                children: [
                  Object(o.jsx)(hn, { children: "Percentage" }),
                  x,
                  "%",
                ],
              }),
              Object(o.jsx)(gn, {
                children: Object(o.jsx)(B.b, {
                  to: {
                    pathname: g,
                    state: {
                      comingFrom: "ScoreCard",
                      sections: e.sections,
                      scoreCardSelectedQuizQuestons: C,
                      sectionNumber: e.sectionNumber,
                    },
                  },
                  children: Object(o.jsx)(pn, {
                    style: { marginBottom: 20 },
                    onClick: function () {
                      p(!1), l([]);
                    },
                    children: "More Practice",
                  }),
                }),
              }),
            ],
          });
        },
        On = t.p + "static/media/HHLogo.a975645f.png";
      t(32);
      function wn(e) {
        return Object(o.jsx)("div", {
          className: "hamburger-btn",
          onClick: e.click,
          children: "\u2630",
        });
      }
      function Nn(e) {
        var n = T(),
          t = n.setSubContainer,
          c = n.setSubContainerEntries;
        return Object(o.jsxs)("div", {
          className: "sidenavRow",
          style: e.styleVariable,
          onClick: function () {
            return e.entries && (t(!0), void c(e.entries));
          },
          children: [
            Object(o.jsxs)("div", {
              className: "sidenavRowText",
              children: [e.number, "\xa0 \xa0", e.title],
            }),
            Object(o.jsx)("i", { class: "fas fa-chevron-right" }),
          ],
        });
      }
      function kn() {
        var e = Object(a.a)([
          "\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  left: 10px;\n  font-size: 3vh;\n",
        ]);
        return (
          (kn = function () {
            return e;
          }),
          e
        );
      }
      function yn() {
        var e = Object(a.a)([
          '\n  width: 100%;\n  height: 80px;\n  padding: 10px;\n  padding-left: 70px;\n  font-family: "Quicksand", sans-serif;\n  font-size: 3vh;\n\n  border: none;\n  border-radius: 4px;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n',
        ]);
        return (
          (yn = function () {
            return e;
          }),
          e
        );
      }
      function Cn() {
        var e = Object(a.a)([
          "\n  position: relative;\n  width: 100%;\n  max-width: 700px;\n  margin-bottom: 20px;\n  margin-right: 50px;\n",
        ]);
        return (
          (Cn = function () {
            return e;
          }),
          e
        );
      }
      function Sn() {
        var e = Object(a.a)([
          "\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  height: 100%; /* Ensure the div takes full height */\n",
        ]);
        return (
          (Sn = function () {
            return e;
          }),
          e
        );
      }
      l.b.div(Sn());
      var En = l.b.div(Cn()),
        Tn = l.b.input(yn()),
        zn = l.b.div(kn());
      function Dn(e) {
        var n = T(),
          t = n.courseTitleUserIsOn,
          r = n.entryStore,
          i = Object(c.useState)(""),
          s = Object(w.a)(i, 2),
          a = s[0],
          l = s[1],
          d = Object(c.useState)([]),
          f = Object(w.a)(d, 2),
          j = f[0],
          p = f[1];
        Object(c.useEffect)(
          function () {
            if (r && a) {
              var e = r
                .map(function (e) {
                  var n = e.entries.filter(function (e) {
                    var n = e.title.toLowerCase().includes(a.toLowerCase()),
                      t =
                        e.entries &&
                        e.entries.some(function (e) {
                          return e.entries.some(function (e) {
                            return (
                              e.title &&
                              e.title.toLowerCase().includes(a.toLowerCase())
                            );
                          });
                        });
                    return n || t;
                  });
                  return Object(y.a)(Object(y.a)({}, e), {}, { entries: n });
                })
                .filter(function (e) {
                  return e.entries.length > 0;
                });
              p(e);
            } else p(r);
          },
          [r, a]
        ),
          console.log(r),
          console.log(r, t);
        var m = Object(c.useState)(null),
          h = Object(w.a)(m, 2),
          x = (h[0], h[1], window.location.href);
        console.log(x);
        var g = x.split("/");
        console.log(g);
        var v = g[g.length - 1];
        console.log(v);
        var O = [];
        (O = v.includes("%") ? v.split("%23") : v.split("#")), console.log(O);
        var N = O[0];
        O[1];
        return (
          console.log(N),
          Object(o.jsxs)("div", {
            className: "sideNavContainer",
            style:
              "exiting" === e.state
                ? { animation: "moveMainContainer .3s forwards" }
                : "entering" === e.state
                ? { animation: "moveMainContainer .3s reverse backwards" }
                : null,
            children: [
              Object(o.jsxs)(En, {
                children: [
                  Object(o.jsx)(zn, {
                    children: Object(o.jsx)(u.a, { icon: b.e }),
                  }),
                  Object(o.jsx)(Tn, {
                    type: "text",
                    placeholder: "Search for a Topic",
                    value: a,
                    onChange: function (e) {
                      return l(e.target.value);
                    },
                  }),
                ],
              }),
              j &&
                j.map(function (n, c) {
                  return Object(o.jsxs)("div", {
                    children: [
                      Object(o.jsxs)("div", {
                        className: "sidenavContentHeaderMainMenu",
                        children: [
                          n.topicHeaderNumber && n.topicHeaderNumber,
                          "\xa0 \xa0",
                          n.title,
                        ],
                      }),
                      n.entries.map(function (n, c) {
                        return Object(o.jsx)("div", {
                          children: Object(o.jsx)(B.b, {
                            to: "/".concat(t, "/quiz/").concat(n.topicNumber),
                            children: Object(o.jsxs)("div", {
                              className: "sidenavContent",
                              onClick: e.closeNav,
                              style:
                                n.topicNumber == N
                                  ? { background: "#dfdfdf" }
                                  : {},
                              children: [
                                n.topicNumber && n.topicNumber,
                                "\xa0 \xa0",
                                n.title,
                              ],
                            }),
                          }),
                        });
                      }),
                    ],
                  });
                }),
              Object(o.jsx)("div", { style: { minHeight: "60px" } }),
            ],
          })
        );
      }
      function In(e) {
        var n = T(),
          t = n.subContainerEntries,
          r = n.setSubContainer,
          i = n.courseTitleUserIsOn,
          s = Object(c.useState)(""),
          a = Object(w.a)(s, 2),
          l = a[0],
          u = a[1];
        return (
          Object(c.useEffect)(function () {
            var e = window.location.href;
            console.log(e);
            var n = e.split("/");
            console.log(n);
            var t = n[n.length - 1];
            console.log(t);
            var o = [];
            (o = t.includes("%") ? t.split("%23") : t.split("#")),
              console.log(o);
            var c = o[1];
            console.log(c), u(c);
          }, []),
          Object(o.jsxs)("div", {
            className: "sub-container",
            style:
              "entering" === e.state
                ? { animation: "moveSubContainer .3s forwards" }
                : "entered" === e.state
                ? { transform: "translateX(0px)" }
                : { animation: "moveSubContainer .3s reverse backwards" },
            children: [
              Object(o.jsxs)("div", {
                className: "sub-header",
                onClick: function () {
                  return r(!1);
                },
                children: [
                  Object(o.jsx)("i", { class: "fas fa-chevron-left" }),
                  " MAIN MENU",
                ],
              }),
              t.map(function (n) {
                return Object(o.jsxs)(o.Fragment, {
                  children: [
                    Object(o.jsx)(B.b, {
                      to: "/".concat(i, "/quiz/").concat(n.topicNumber),
                      children: Object(o.jsxs)("div", {
                        className: "sidenavContentHeaderSubContainer",
                        onClick: e.closeNav,
                        children: [n.topicNumber, "\xa0\xa0", n.title],
                      }),
                    }),
                    n.entries.map(function (t) {
                      return Object(o.jsx)(q.a, {
                        to: "/"
                          .concat(i, "/quiz/")
                          .concat(n.topicNumber, "#")
                          .concat(t.sectionNumber),
                        children: Object(o.jsx)("div", {
                          onClick: e.closeNav,
                          children: Object(o.jsx)(Nn, {
                            number: t.sectionNumber,
                            title: t.title,
                            styleVariable:
                              t.sectionNumber == l
                                ? { background: "#ebebeb" }
                                : {},
                          }),
                        }),
                      });
                    }),
                  ],
                });
              }),
              Object(o.jsx)("div", { style: { minHeight: "60px" } }),
            ],
          })
        );
      }
      function Bn(e) {
        var n = T(),
          t = n.subContainer,
          c =
            (n.courseTitleUserIsOn, n.setCourseTitleUserIsOn, n.courseDetails);
        n.setCourseDetails,
          n.topicDatafromBackEnd,
          n.setTopicDatafromBackEnd,
          n.exampleDatafromBackEnd,
          n.setExampleDatafromBackEnd,
          n.entryStore,
          n.setEntryStore;
        return Object(o.jsxs)("div", {
          className: "sidenav",
          style:
            "entering" === e.state
              ? { animation: "moveSideBar .3s forwards" }
              : "entered" === e.state
              ? { transform: "translateX(-0px)" }
              : { animation: "moveSideBar .3s reverse backwards" },
          children: [
            Object(o.jsx)(B.b, {
              to: "/".concat(c.courseTitle.replace(/\s/g, ""), "/start"),
              children: Object(o.jsx)("div", {
                className: "sidenavHeader",
                style: { background: "#e8e2ef" },
                children: c.courseTitle,
              }),
            }),
            Object(o.jsx)(I.a, {
              in: !t,
              timeout: 300,
              unmountOnExit: !0,
              mountOnEnter: !0,
              children: function (n) {
                return Object(o.jsx)(Dn, { state: n, closeNav: e.click });
              },
            }),
            Object(o.jsx)(I.a, {
              in: t,
              timeout: 300,
              unmountOnExit: !0,
              mountOnEnter: !0,
              children: function (n) {
                return Object(o.jsx)(In, { state: n, closeNav: e.click });
              },
            }),
          ],
        });
      }
      var Ln = function (e) {
        return Object(o.jsx)("div", { children: Object(o.jsx)("p", {}) });
      };
      function An() {
        var e = Object(a.a)([
          '\n  background: red;\n  font-family: "Quicksand", sans-serif;\n  padding: 7px 12px;\n  /* margin: 20px; */\n  text-transform: uppercase;\n  /* font-size: 15px; */\n  font-size: 2.5vh;\n  overflow: hidden;\n  border: 0;\n  border-radius: 5px;\n  background: #eb3535;\n  color: white;\n  transition: all 0.25s ease;\n  cursor: pointer;\n  height: 6vh;\n\n  &:active {\n    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.5);\n    background: #f2b1ae;\n  }\n',
        ]);
        return (
          (An = function () {
            return e;
          }),
          e
        );
      }
      function Mn() {
        var e = Object(a.a)([
          '\n  background: red;\n  position: relative;\n  font-family: "Quicksand", sans-serif;\n  padding: 7px 12px;\n  text-transform: uppercase;\n  /* font-size: 15px; */\n  font-size: 4vh;\n  font-weight: bold;\n  overflow: hidden;\n  border: 0;\n  border-radius: 5px;\n  background: #967bb6;\n  color: #f8f6f0;\n  height: 6vh;\n\n  transition: all 0.25s ease;\n  cursor: pointer;\n  margin-right: 20px;\n\n  &:active {\n    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.5);\n    background: #f2b1ae;\n  }\n',
        ]);
        return (
          (Mn = function () {
            return e;
          }),
          e
        );
      }
      function Fn() {
        var e = Object(a.a)([
          "\n  width: 6vh; /* Adjust the width as needed */\n  height: 6vh; /* Adjust the height as needed */\n  margin-left: 70px; /* Adjust the margin as needed */\n",
        ]);
        return (
          (Fn = function () {
            return e;
          }),
          e
        );
      }
      function Qn() {
        var e = Object(a.a)(["\n  display: flex;\n  align-items: center;\n"]);
        return (
          (Qn = function () {
            return e;
          }),
          e
        );
      }
      function Un() {
        var e = Object(a.a)([
          "\n  background: #d0bad9;\n  /* top: 80; */\n  height: 6vh;\n  transform: translateY(",
          ");\n  transition: 0.2s;\n  display: flex;\n  justify-content: space-between;\n",
        ]);
        return (
          (Un = function () {
            return e;
          }),
          e
        );
      }
      var Hn = l.b.nav(Un(), function (e) {
          return e.navTop + "vh";
        }),
        Yn = (l.b.div(Qn()), l.b.img(Fn())),
        qn = l.b.button(Mn()),
        Rn = l.b.button(An());
      function Pn(e) {
        var n = Object(c.useState)(!1),
          t = Object(w.a)(n, 2),
          r = t[0],
          i = t[1],
          s = T(),
          a = s.courseTitleUserIsOn,
          l = s.courseDetails,
          d = s.setSubContainerEntries,
          f = s.subContainer,
          j = s.setSubContainer;
        s.rowClicked, s.setRowClicked;
        console.log(a, l, e.entryStore);
        var p = Object(c.useState)("0"),
          m = Object(w.a)(p, 2),
          h = (m[0], m[1]),
          x = Object(c.useState)("0"),
          g = Object(w.a)(x, 2),
          v = g[0],
          O = g[1],
          N = Object(c.useState)("0"),
          k = Object(w.a)(N, 2),
          y = k[0],
          C = k[1],
          S = Object(c.useState)("0"),
          E = Object(w.a)(S, 2),
          z = E[0],
          D = E[1],
          L = Object(c.useState)(0),
          A = Object(w.a)(L, 2),
          M = A[0],
          F = A[1],
          Q = window.scrollY;
        window.addEventListener("scroll", function () {
          Q < window.scrollY ? F(-6) : F(0), (Q = window.scrollY);
        });
        var U = function () {
          i(!1);
        };
        console.log(e.topicNumbersListfromBackEnd);
        var H = function () {
          var n = window.location.href;
          h(n),
            console.log(n),
            e.entryStore &&
              e.entryStore.forEach(function (e) {
                e.entries.forEach(function (e) {
                  e.topicNumber == y && 1 == e.rows
                    ? (console.log(v),
                      console.log(e.entries),
                      j(!0),
                      d(e.entries))
                    : e.topicNumber == y &&
                      0 == e.rows &&
                      1 == f &&
                      (console.log(e.entries), j(!1));
                });
              });
        };
        return (
          Object(c.useEffect)(function () {
            var n = window.location.href;
            console.log(n);
            var t = n.split("/");
            console.log(t);
            var o = t[t.length - 1];
            console.log(o);
            var c = [];
            (c = o.includes("%") ? o.split("%23") : o.split("#")),
              console.log(c);
            var r = c[0];
            console.log(r), O(r);
            var i = e.topicNumbersListfromBackEnd.findIndex(function (e) {
              return e == r;
            });
            console.log(i);
            var s = i + 1;
            s > e.topicNumbersListfromBackEnd.length - 1 && (s = 0),
              console.log(s);
            var a = e.topicNumbersListfromBackEnd[s];
            console.log(a), C(a);
            var l = i - 1;
            l < 0 && (l = e.topicNumbersListfromBackEnd.length - 1),
              console.log(l);
            var u = e.topicNumbersListfromBackEnd[l];
            console.log(u), D(u), console.log(e.entryStore);
          }),
          Object(o.jsxs)("div", {
            style: { display: "unset" },
            children: [
              Object(o.jsxs)(Hn, {
                style: { position: "sticky", top: 0, zIndex: 1 },
                navTop: M,
                children: [
                  Object(o.jsxs)("div", {
                    children: [
                      Object(o.jsx)(wn, {
                        click: function () {
                          i(!0);
                        },
                      }),
                      " ",
                      Object(o.jsxs)(B.b, {
                        to: "/",
                        children: [
                          Object(o.jsx)(Yn, { src: On, alt: "Logo" }),
                          " ",
                        ],
                      }),
                    ],
                  }),
                  Object(o.jsxs)("div", {
                    children: [
                      " ",
                      Object(o.jsx)(B.b, {
                        to:
                          "/".concat(a, "/topic/") +
                          e.selectedTopic.topicNumber,
                        children: Object(o.jsxs)(Rn, {
                          children: [
                            Object(o.jsx)("p", {
                              style: { fontSize: "1.5vh", margin: "0px" },
                              children: "Switch to",
                            }),
                            Object(o.jsx)("b", { children: "Study Mode" }),
                          ],
                        }),
                      }),
                    ],
                  }),
                  Object(o.jsxs)("div", {
                    children: [
                      0 !==
                        e.topicNumbersListfromBackEnd.findIndex(function (e) {
                          return e == v;
                        }) &&
                        Object(o.jsx)(B.b, {
                          to: "/".concat(a, "/quiz/").concat(z),
                          children: Object(o.jsx)(qn, {
                            onClick: H,
                            children: Object(o.jsx)(u.a, { icon: b.a }),
                          }),
                        }),
                      e.topicNumbersListfromBackEnd.findIndex(function (e) {
                        return e == v;
                      }) >
                      e.topicNumbersListfromBackEnd.length - 2
                        ? Object(o.jsx)("a", {
                            href: "https://subscribepage.io/hhcourses",
                            children: Object(o.jsxs)(qn, {
                              children: [
                                " ",
                                Object(o.jsx)(u.a, { icon: b.b }),
                              ],
                            }),
                          })
                        : Object(o.jsx)(B.b, {
                            to: "/".concat(a, "/quiz/").concat(y),
                            children: Object(o.jsxs)(qn, {
                              onClick: H,
                              children: [
                                " ",
                                Object(o.jsx)(u.a, { icon: b.b }),
                              ],
                            }),
                          }),
                    ],
                  }),
                ],
              }),
              Object(o.jsx)(I.a, {
                in: r && e.entryStore,
                timeout: 300,
                mountOnEnter: !0,
                unmountOnExit: !0,
                children: function (e) {
                  return Object(o.jsxs)(o.Fragment, {
                    children: [
                      Object(o.jsx)(Bn, { state: e, click: U }),
                      Object(o.jsx)("div", {
                        className: "overlay",
                        style:
                          "entering" === e
                            ? { animation: "show .3s forwards" }
                            : "entered" === e
                            ? { opacity: "1" }
                            : { animation: "show .3s backwards reverse" },
                        onClick: U,
                      }),
                      Object(o.jsx)("div", {
                        className: "closeBtn",
                        style:
                          "entering" === e
                            ? { animation: "show .3s forwards" }
                            : "entered" === e
                            ? { opacity: "1" }
                            : { animation: "show .3s backwards reverse" },
                        onClick: U,
                        children: "\xd7",
                      }),
                    ],
                  });
                },
              }),
              Object(o.jsx)(Ln, {}),
            ],
          })
        );
      }
      function Wn() {
        var e = Object(a.a)([
          '\n  color: #9589be;\n  /* font-size: 1rem; */\n  /* font-size: clamp(4vh, 30px, 30px); */\n  /* font-size: min(2rem, 4vh); */\n  font-size: 4vh;\n  display: block;\n  margin: 30px;\n  font-family: "Quicksand", sans-serif;\n\n  /* @media (max-width: 40em) {\n    font-size: 5vh;\n  } */\n\n  /* justify-content: space-between; */\n',
        ]);
        return (
          (Wn = function () {
            return e;
          }),
          e
        );
      }
      function Vn() {
        var e = Object(a.a)([
          '\n  background: red;\n  font-family: "Quicksand", sans-serif;\n  padding: 7px 12px;\n  margin-right: "20px";\n  text-transform: uppercase;\n  /* font-size: 15px; */\n  font-size: 2vh;\n  overflow: hidden;\n  border: 0;\n  border-radius: 5px;\n  background: #e8e2ef;\n  color: #252525;\n  transition: all 0.25s ease;\n  cursor: pointer;\n\n  &:active {\n    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.5);\n    background: #e8e2ef;\n  }\n',
        ]);
        return (
          (Vn = function () {
            return e;
          }),
          e
        );
      }
      function Gn() {
        var e = Object(a.a)([
          '\n  background: red;\n  font-family: "Quicksand", sans-serif;\n  padding: 7px 12px;\n  text-transform: uppercase;\n  font-size: 3vh;\n  overflow: hidden;\n  border: 0;\n  border-radius: 5px;\n  background: #967bb6;\n  color: white;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);\n  transition: all 0.25s ease;\n  cursor: pointer;\n\n  &:active {\n    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.5);\n    background: #f2b1ae;\n  }\n',
        ]);
        return (
          (Gn = function () {
            return e;
          }),
          e
        );
      }
      function Xn() {
        var e = Object(a.a)([
          '\n  background: red;\n  font-family: "Quicksand", sans-serif;\n  padding: 7px 12px;\n  margin: 20px;\n  text-transform: uppercase;\n  /* font-size: 15px; */\n  font-size: 3vh;\n  overflow: hidden;\n  border: 0;\n  border-radius: 5px;\n  background: #eb3535;\n  color: white;\n  transition: all 0.25s ease;\n  cursor: pointer;\n\n  &:active {\n    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.5);\n    background: #f2b1ae;\n  }\n',
        ]);
        return (
          (Xn = function () {
            return e;
          }),
          e
        );
      }
      function _n() {
        var e = Object(a.a)([
          "\n  display: flex;\n  justify-content: center;\n",
        ]);
        return (
          (_n = function () {
            return e;
          }),
          e
        );
      }
      function Jn() {
        var e = Object(a.a)([
          '\n  color: #eb8381;\n  /* font-size: 3vh; */\n  font-family: "Quicksand", sans-serif;\n  justify-content: center;\n  text-align: center;\n  /* margin: 30px 30px; */\n  display: flex;\n\n  /* justify-content: space-between; */\n',
        ]);
        return (
          (Jn = function () {
            return e;
          }),
          e
        );
      }
      var $n = l.b.p(Jn()),
        Kn = (l.b.div(_n()), l.b.button(Xn()), l.b.button(Gn())),
        Zn = l.b.button(Vn()),
        et = l.b.div(Wn()),
        nt = function (e) {
          var n = T(),
            t = n.courseTitleUserIsOn,
            r = n.setCourseTitleUserIsOn,
            i = n.courseDetails,
            s = n.setCourseDetails,
            a = n.entryStore,
            l = n.setEntryStore;
          console.log(i),
            Object(c.useEffect)(function () {
              r(e.match.params.courseTitle);
            }, []),
            console.log(t),
            console.log(e.match.params.courseTitle),
            console.log(i);
          var u = Object(c.useState)(!1),
            d = Object(w.a)(u, 2),
            b = d[0],
            f = d[1],
            j = Object(c.useState)([]),
            p = Object(w.a)(j, 2),
            m = p[0],
            h = p[1],
            x = Object(c.useState)("none"),
            g = Object(w.a)(x, 2),
            v = g[0],
            O = (g[1], Object(We.f)());
          Object(c.useEffect)(
            function () {
              return window.scrollTo({ top: 0, behavior: "smooth" });
            },
            [b]
          ),
            console.log(v),
            console.log(O),
            console.log(O.state),
            Object(c.useEffect)(
              function () {
                S()("/coursesData").then(function (n) {
                  console.log(n.data);
                  var t = n.data.find(function (n) {
                    return (
                      n.courseTitle.replace(/\s/g, "") ===
                      e.match.params.courseTitle
                    );
                  });
                  s(t);
                });
              },
              [t]
            ),
            console.log(i),
            console.log(e.match),
            console.log(e.match.params.topicNumber);
          var N = e.match.params.topicNumber;
          console.log(N), console.log(i);
          var k = Object(c.useState)([]),
            y = Object(w.a)(k, 2),
            C = y[0],
            E = y[1];
          Object(c.useEffect)(
            function () {
              S()(
                "/examplesData?collectionName="
                  .concat(i.courseExamplesCollectionName, "&modelName=")
                  .concat(i.courseExamplesModelName)
              ).then(function (e) {
                E(e.data), console.log(e.data);
              });
            },
            [i]
          ),
            console.log(C);
          var z = Object(c.useState)([]),
            D = Object(w.a)(z, 2),
            I = D[0],
            B = D[1];
          console.log(t),
            Object(c.useEffect)(
              function () {
                S()(
                  "/"
                    .concat(t, "/topicRESTCAll/")
                    .concat(N, "?collectionName=")
                    .concat(i.courseTopicsCollectionName, "&modelName=")
                    .concat(i.courseTopicsModelName)
                ).then(function (e) {
                  B(e.data), console.log(e.data);
                });
              },
              [N, i]
            ),
            console.log(I),
            Object(c.useEffect)(
              function () {
                S()(
                  "/"
                    .concat(t, "/sideBarData?collectionName=")
                    .concat(i.courseTopicsCollectionName, "&modelName=")
                    .concat(i.courseTopicsModelName)
                ).then(function (e) {
                  l(e.data), console.log(e.data);
                });
              },
              [I.topicNumber]
            ),
            console.log(a);
          var L = Object(c.useState)([]),
            A = Object(w.a)(L, 2),
            M = A[0],
            F = A[1];
          Object(c.useEffect)(
            function () {
              S()(
                "/"
                  .concat(t, "/topicNumbersList?collectionName=")
                  .concat(i.courseTopicsCollectionName, "&modelName=")
                  .concat(i.courseTopicsModelName)
              ).then(function (e) {
                F(e.data), console.log(e.data);
              });
            },
            [I.topicNumber]
          ),
            console.log(M);
          var Q = [];
          I.sections &&
            I.sections.map(function (e) {
              return Q.push(e.sectionNumber);
            }),
            console.log(Q);
          var U = Math.ceil(100 / Q.length);
          console.log(U);
          var H = [],
            Y = [],
            q = [],
            R = [],
            P = function (e, n) {
              for (var t = [], o = 0; o < n; ) {
                var c = Math.floor(Math.random() * e.length);
                t.includes(e[c]) || (t.push(e[c]), o++);
              }
              return t;
            };
          return (
            Q.map(function (e) {
              var n =
                C &&
                0 !== C.length &&
                C.filter(function (n) {
                  return n.sectionNumber == e;
                });
              console.log(n),
                n.length > U
                  ? ((H = P(n, U)), console.log(H), (q = Y.concat(q, H)))
                  : (q = Y.concat(q, n)),
                console.log(Y),
                console.log(q);
            }),
            console.log(Y),
            console.log(q),
            (R = q.length > 100 ? P(q, 100) : q),
            console.log(R),
            Object(c.useEffect)(
              function () {
                f(!1), h([]);
              },
              [I.topicNumber]
            ),
            Object(o.jsx)(Ge.Provider, {
              value: [m, h],
              children: Object(o.jsx)(Xe.Provider, {
                value: [b, f],
                children: Object(o.jsxs)(o.Fragment, {
                  children: [
                    Object(o.jsx)(Pn, {
                      entryStore: a,
                      topicNumbersListfromBackEnd: M,
                      selectedTopic: I,
                    }),
                    Object(o.jsxs)(et, {
                      id: "Topic",
                      children: [
                        I.topicNumber,
                        " \xa0 ",
                        I.topicTitle,
                        "\xa0 \xa0",
                        Object(o.jsx)(Zn, {
                          onClick: function () {
                            var e =
                                "Quiz on " +
                                I.topicTitle +
                                "\nFrom the course: " +
                                i.courseTitle,
                              n =
                                "Quiz on " +
                                I.topicTitle +
                                "\nFrom the course: " +
                                i.courseTitle;
                            navigator.share
                              ? navigator.share({
                                  title: e,
                                  text: n,
                                  url: "/#/"
                                    .concat(t, "/quiz/")
                                    .concat(I.topicNumber),
                                })
                              : navigator.clipboard.writeText(
                                  "/#/"
                                    .concat(t, "/quiz/")
                                    .concat(I.topicNumber)
                                );
                          },
                          children: Object(o.jsx)("b", {
                            children: "share quiz",
                          }),
                        }),
                      ],
                    }),
                    b
                      ? Object(o.jsx)(vn, {
                          sections: O.state
                            ? "Topic" == O.state.comingFrom
                              ? O.state.sectionList
                              : "Section" == O.state.comingFrom
                              ? O.state.section
                              : "ScoreCard" == O.state.comingFrom
                              ? O.state.sections
                              : "none"
                            : Q,
                          comingFrom:
                            O.state &&
                            ("Topic" == O.state.comingFrom
                              ? "Topic"
                              : "Section" == O.state.comingFrom
                              ? "Section"
                              : "ScoreCard" == O.state.comingFrom
                              ? "ScoreCard"
                              : "none"),
                          whereDidIComeFrom: v,
                          topicNumber: e.match.params.topicNumber,
                          sectionNumber:
                            O.state &&
                            ("Section" == O.state.comingFrom
                              ? O.state.section
                              : "ScoreCard" == O.state.comingFrom
                              ? O.state.sectionNumber
                              : "none"),
                        })
                      : Object(o.jsx)($n, {}),
                    R.map(function (n, t) {
                      return Object(o.jsxs)("div", {
                        children: [
                          Object(o.jsx)(sn, {
                            topicNumber: e.match.params.topicNumber,
                            example: n,
                            exampleIndex: t,
                          }),
                          Object(o.jsx)("hr", {
                            style: {
                              width: "70vw",
                              backgroundColor: "#9589be",
                              height: 2,
                              borderRadius: 20,
                              border: 0,
                            },
                          }),
                        ],
                      });
                    }),
                    0 == m.includes(void 0) && m.length == R.length && 0 == b
                      ? Object(o.jsx)("div", {
                          style: {
                            display: "flex",
                            justifyContent: "center",
                            margin: "30px 0px",
                          },
                          children: Object(o.jsx)(Kn, {
                            onClick: function () {
                              return f(!0);
                            },
                            children: Object(o.jsx)("b", {
                              children: "Submit",
                            }),
                          }),
                        })
                      : null,
                  ],
                }),
              }),
            })
          );
        };
      t(82), t(46);
      var tt = function (e) {
        return Object(o.jsx)(B.b, {
          to: "/".concat(e.title.replace(/\s/g, ""), "/start"),
          children: Object(o.jsxs)("div", {
            className: "courseIconAndTitle",
            children: [
              Object(o.jsx)("img", {
                className: "courseImage",
                src: e.img,
                alt: "",
              }),
              " ",
              Object(o.jsx)("h3", { children: e.description }),
            ],
          }),
        });
      };
      var ot = function () {
        var e = Object(c.useState)([]),
          n = Object(w.a)(e, 2),
          t = n[0],
          r = n[1];
        return (
          Object(c.useEffect)(function () {
            S()("/coursesData").then(function (e) {
              r(e.data), console.log(e.data);
            });
          }, []),
          console.log(t),
          Object(o.jsxs)("div", {
            children: [
              Object(o.jsx)("div", {
                className: "title-container",
                children: Object(o.jsx)("h1", {
                  className: "fancy-title",
                  children: "Welcome to Our Courses",
                }),
              }),
              Object(o.jsx)("div", {
                children: t.map(function (e, n) {
                  return Object(o.jsx)(tt, {
                    img:
                      "https://qaleelo-assets.s3.us-east-2.amazonaws.com/" +
                      e.courseTitle.replace(/\s/g, "") +
                      "/courseImage/" +
                      e.courseTitle.replace(/\s/g, "") +
                      ".png",
                    title: e.courseTitle,
                    description: e.courseDescription,
                  });
                }),
              }),
            ],
          })
        );
      };
      t(47);
      var ct = function (e) {
        var n = T(),
          t = n.entryStore,
          r = n.courseTitleUserIsOn;
        console.log(t);
        var i = Object(c.useState)(!1),
          s = Object(w.a)(i, 2),
          a = s[0],
          l = s[1];
        return e.topic.rows
          ? Object(o.jsxs)("div", {
              onClick: function () {
                return l(!a);
              },
              children: [
                Object(o.jsxs)("div", {
                  className: "sidenavContentCC",
                  children: [
                    e.topic.topicNumber,
                    "\xa0 \xa0",
                    e.topic.title,
                    Object(o.jsx)("i", {
                      class: a
                        ? "fas fa-chevron-up toggle-btn"
                        : "fas fa-chevron-up toggle-btn-down",
                    }),
                  ],
                }),
                Object(o.jsxs)("div", {
                  className: a
                    ? "sidenavRow-submenu"
                    : "sidenavRow-submenu-notOpen",
                  children: [
                    Object(o.jsx)(B.b, {
                      to: "/".concat(r, "/topic/").concat(e.topic.topicNumber),
                      children: Object(o.jsxs)("div", {
                        className: "sidenavRowCC",
                        children: [
                          e.topic.topicNumber,
                          "\xa0 \xa0 Introduction",
                        ],
                      }),
                    }),
                    e.topic.entries.map(function (n, t) {
                      return Object(o.jsx)("div", {
                        children: n.entries.map(function (n, t) {
                          return Object(o.jsx)("div", {
                            children: Object(o.jsx)(q.a, {
                              to: "/"
                                .concat(r, "/topic/")
                                .concat(e.topic.topicNumber, "#")
                                .concat(n.sectionNumber),
                              children: Object(o.jsx)("div", {
                                className: "sidenavRowCC",
                                children: Object(o.jsxs)("div", {
                                  className: "sidenavRowTextCC",
                                  children: [
                                    n.sectionNumber,
                                    "\xa0 \xa0",
                                    n.title,
                                  ],
                                }),
                              }),
                            }),
                          });
                        }),
                      });
                    }),
                  ],
                }),
              ],
            })
          : Object(o.jsx)(B.b, {
              to: "/".concat(r, "/topic/").concat(e.topic.topicNumber),
              children: Object(o.jsxs)("div", {
                className: "sidenavContentCC",
                children: [e.topic.topicNumber, "\xa0 \xa0", e.topic.title],
              }),
            });
      };
      function rt() {
        var e = Object(a.a)([
          "\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  left: 10px;\n  font-size: 3vh;\n",
        ]);
        return (
          (rt = function () {
            return e;
          }),
          e
        );
      }
      function it() {
        var e = Object(a.a)([
          '\n  width: 100%;\n  height: 80px;\n  padding: 10px;\n  padding-left: 100px;\n  font-family: "Quicksand", sans-serif;\n  font-size: 3vh;\n\n  border: none;\n  border-radius: 4px;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n',
        ]);
        return (
          (it = function () {
            return e;
          }),
          e
        );
      }
      function st() {
        var e = Object(a.a)([
          "\n  position: relative;\n  width: 100%;\n  max-width: 700px;\n  margin-bottom: 20px;\n  margin-right: 90px;\n",
        ]);
        return (
          (st = function () {
            return e;
          }),
          e
        );
      }
      function at() {
        var e = Object(a.a)([
          "\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  height: 100%; /* Ensure the div takes full height */\n",
        ]);
        return (
          (at = function () {
            return e;
          }),
          e
        );
      }
      var lt = l.b.div(at()),
        ut = l.b.div(st()),
        dt = l.b.input(it()),
        bt = l.b.div(rt());
      var ft = function () {
        var e = T(),
          n = (e.courseTitleUserIsOn, e.courseDetails, e.entryStore),
          t = Object(c.useState)(""),
          r = Object(w.a)(t, 2),
          i = r[0],
          s = r[1],
          a = Object(c.useState)([]),
          l = Object(w.a)(a, 2),
          d = l[0],
          f = l[1];
        return (
          Object(c.useEffect)(
            function () {
              if (n && i) {
                var e = n
                  .map(function (e) {
                    var n = e.entries.filter(function (e) {
                      var n = e.title.toLowerCase().includes(i.toLowerCase()),
                        t =
                          e.entries &&
                          e.entries.some(function (e) {
                            return e.entries.some(function (e) {
                              return (
                                e.title &&
                                e.title.toLowerCase().includes(i.toLowerCase())
                              );
                            });
                          });
                      return n || t;
                    });
                    return Object(y.a)(Object(y.a)({}, e), {}, { entries: n });
                  })
                  .filter(function (e) {
                    return e.entries.length > 0;
                  });
                f(e);
              } else f(n);
            },
            [n, i]
          ),
          Object(o.jsxs)("div", {
            className: "courseContent",
            children: [
              Object(o.jsxs)(lt, {
                children: [
                  Object(o.jsx)("div", {
                    className: "courseContentHeader",
                    children: "Course Content",
                  }),
                  Object(o.jsxs)(ut, {
                    children: [
                      Object(o.jsx)(dt, {
                        type: "text",
                        placeholder: "Search for a topic",
                        value: i,
                        onChange: function (e) {
                          return s(e.target.value);
                        },
                      }),
                      Object(o.jsx)(bt, {
                        children: Object(o.jsx)(u.a, { icon: b.e }),
                      }),
                    ],
                  }),
                ],
              }),
              d &&
                d.map(function (e, n) {
                  return Object(o.jsxs)(
                    "div",
                    {
                      children: [
                        Object(o.jsx)("div", {
                          className: "sidenavContentHeaderMainMenuCC",
                          children: e.title,
                        }),
                        e.entries.map(function (e, n) {
                          return Object(o.jsx)(
                            "div",
                            { children: Object(o.jsx)(ct, { topic: e }) },
                            n
                          );
                        }),
                      ],
                    },
                    n
                  );
                }),
            ],
          })
        );
      };
      var jt = function () {
        for (
          var e = T(),
            n = e.topicDatafromBackEnd,
            t = e.exampleDatafromBackEnd,
            c = 0,
            r = 0,
            i = 0,
            s = 0;
          s < n.length;
          s++
        )
          (c += n[s].sections.length),
            0 !== n[s].sections.length && (i += 1),
            n[s].topicYoutubeLink && (r += 1);
        console.log(c), console.log(r), console.log(i), console.log(n);
        var a = t.length;
        console.log(a);
        var l = 0.5 * c;
        return (
          console.log(l),
          Object(o.jsxs)("div", {
            className: "courseStatBanner",
            children: [
              Object(o.jsxs)("div", {
                className: "courseStat",
                children: [
                  Object(o.jsx)("div", {
                    className: "courseStatImage",
                    children: Object(o.jsx)("img", {
                      src: "https://img.icons8.com/external-outline-wichaiwi/100/1A1A1A/external-questionnaire-statistical-analysis-outline-wichaiwi.png",
                    }),
                  }),
                  Object(o.jsxs)("div", {
                    className: "courseStatDescription",
                    children: [
                      Object(o.jsx)("div", {
                        className: "courseStatNumber",
                        children: a,
                      }),
                      " ",
                      Object(o.jsx)("div", {
                        className: "courseStatName",
                        children: "Quiz Questions",
                      }),
                    ],
                  }),
                ],
              }),
              Object(o.jsxs)("div", {
                className: "courseStat",
                children: [
                  Object(o.jsx)("div", {
                    className: "courseStatImage",
                    children: Object(o.jsx)("img", {
                      src: "https://img.icons8.com/dotty/100/1A1A1A/saving-book.png",
                    }),
                  }),
                  Object(o.jsxs)("div", {
                    className: "courseStatDescription",
                    children: [
                      Object(o.jsx)("div", {
                        className: "courseStatNumber",
                        children: c,
                      }),
                      " ",
                      Object(o.jsx)("div", {
                        className: "courseStatName",
                        children: "Lessons",
                      }),
                    ],
                  }),
                ],
              }),
              r > 0 &&
                Object(o.jsxs)("div", {
                  className: "courseStat",
                  children: [
                    Object(o.jsx)("div", {
                      className: "courseStatImage",
                      children: Object(o.jsx)("img", {
                        src: "https://img.icons8.com/ios/100/1A1A1A/video.png",
                      }),
                    }),
                    Object(o.jsxs)("div", {
                      className: "courseStatDescription",
                      children: [
                        Object(o.jsx)("div", {
                          className: "courseStatNumber",
                          children: r,
                        }),
                        " ",
                        Object(o.jsx)("div", {
                          className: "courseStatName",
                          children: "Videos",
                        }),
                      ],
                    }),
                  ],
                }),
              Object(o.jsxs)("div", {
                className: "courseStat",
                children: [
                  Object(o.jsxs)("div", {
                    className: "courseStatImage",
                    children: [
                      Object(o.jsx)("img", {
                        src: "https://img.icons8.com/external-others-iconmarket/100/1A1A1A/external-clock-essential-others-iconmarket-3.png",
                      }),
                      " ",
                    ],
                  }),
                  Object(o.jsxs)("div", {
                    className: "courseStatDescription",
                    children: [
                      Object(o.jsxs)("div", {
                        className: "courseStatNumber",
                        children: [l, " mins"],
                      }),
                      " ",
                      Object(o.jsx)("div", {
                        className: "courseStatName",
                        children: "Approx Course Duration",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          })
        );
      };
      function pt() {
        var e = Object(a.a)([
          '\n  background: red;\n  font-family: "Quicksand", sans-serif;\n  padding: 7px 12px;\n  /* margin-right: "20px"; */\n  text-transform: uppercase;\n  /* font-size: 15px; */\n  font-size: 5vh;\n  overflow: hidden;\n  border: 0;\n  border-radius: 5px;\n  background: #eb3535;\n  color: white;\n  /* box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5); */\n  transition: all 0.25s ease;\n  cursor: pointer;\n  display: block;\n  margin: 0 auto;\n  /* margin-top: 40px; */\n  display: block;\n  textdecoration: none;\n\n  &:active {\n    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.5);\n    background: #f2b1ae;\n  }\n',
        ]);
        return (
          (pt = function () {
            return e;
          }),
          e
        );
      }
      function mt() {
        var e = Object(a.a)([
          "\n  background: #eb8381;\n  /* top: 80; */\n  /* height: ",
          "vh; */\n  transform: translateY(",
          ");\n  transition: 0.2s;\n  display: block;\n  justify-content: center;\n  align-items: center;\n\n  font-family: Quicksand;\n  /* justify-content: space-between; */\n",
        ]);
        return (
          (mt = function () {
            return e;
          }),
          e
        );
      }
      var ht = l.b.nav(mt(), 10, function (e) {
          return e.navTop + "vh";
        }),
        xt = l.b.button(pt());
      var gt = function (e) {
        var n = T(),
          t = n.courseTitleUserIsOn,
          r = n.setCourseTitleUserIsOn,
          i = n.courseDetails,
          s = n.setCourseDetails,
          a = n.topicDatafromBackEnd,
          l = n.setTopicDatafromBackEnd,
          u = n.exampleDatafromBackEnd,
          d = n.setExampleDatafromBackEnd,
          b = n.entryStore,
          f = n.setEntryStore;
        Object(c.useEffect)(function () {
          r(e.match.params.courseTitle);
        }, []),
          console.log(t),
          Object(c.useEffect)(
            function () {
              S()("/coursesData").then(function (e) {
                console.log(e.data);
                var n = e.data.find(function (e) {
                  return e.courseTitle.replace(/\s/g, "") === t;
                });
                s(n);
              });
            },
            [t]
          ),
          console.log(i),
          Object(c.useEffect)(
            function () {
              i &&
                S()(
                  "/"
                    .concat(t, "/sideBarData?collectionName=")
                    .concat(i.courseTopicsCollectionName, "&modelName=")
                    .concat(i.courseTopicsModelName)
                ).then(function (e) {
                  f(e.data), console.log(e.data);
                }),
                i &&
                  S()(
                    "/"
                      .concat(t, "/topicsData?collectionName=")
                      .concat(i.courseTopicsCollectionName, "&modelName=")
                      .concat(i.courseTopicsModelName)
                  ).then(function (e) {
                    l(e.data), console.log(e.data);
                  }),
                i &&
                  S()(
                    "/examplesData?collectionName="
                      .concat(i.courseExamplesCollectionName, "&modelName=")
                      .concat(i.courseExamplesModelName)
                  ).then(function (e) {
                    d(e.data), console.log(e.data);
                  });
            },
            [i]
          ),
          console.log(b, a, u);
        var j = Object(c.useState)(0),
          p = Object(w.a)(j, 2),
          m = p[0],
          h = p[1],
          x = window.scrollY;
        return (
          window.addEventListener("scroll", function () {
            x < window.scrollY ? h(-{ navBarHeight: 10 }) : h(0),
              (x = window.scrollY);
          }),
          i
            ? Object(o.jsxs)("div", {
                children: [
                  Object(o.jsxs)(ht, {
                    style: { position: "sticky", top: 0, zIndex: 1 },
                    navTop: m,
                    children: [
                      Object(o.jsx)("div", {
                        className: "navHeader",
                        children: i.courseTitle,
                      }),
                      Object(o.jsx)(B.b, {
                        to: "/".concat(t, "/topic/1.1"),
                        style: { margin: "60px" },
                        children: Object(o.jsx)(xt, { children: " Start" }),
                      }),
                    ],
                  }),
                  Object(o.jsxs)("h1", {
                    className: "courseDescription",
                    children: [i.courseDescription, "\u200b"],
                  }),
                  Object(o.jsxs)("div", {
                    className: "courseGoals",
                    children: [
                      Object(o.jsx)("div", {
                        className: "courseGoalsHeader",
                        children: "What you get",
                      }),
                      Object(o.jsx)("div", {
                        className: "courseGoalsDescription",
                        children:
                          0 === Object.entries(i).length
                            ? Object(o.jsx)("div", { children: "Loading" })
                            : i.courseGoals.map(function (e, n) {
                                return Object(o.jsx)("p", { children: e });
                              }),
                      }),
                    ],
                  }),
                  Object(o.jsx)(jt, { courseDetails: i }),
                  Object(o.jsx)(ft, {}),
                ],
              })
            : Object(o.jsx)("div", { children: "Loading" })
        );
      };
      var vt = function () {
          return Object(o.jsxs)(B.a, {
            children: [
              Object(o.jsxs)(We.c, {
                children: [
                  Object(o.jsx)(We.a, { path: "/", exact: !0, component: ot }),
                  Object(o.jsx)(We.a, {
                    path: "/:courseTitle/topic/:topicNumber",
                    component: Pe,
                  }),
                  Object(o.jsx)(We.a, {
                    path: "/:courseTitle/quiz/:topicNumber",
                    component: nt,
                  }),
                  Object(o.jsx)(We.a, {
                    path: "/:courseTitle/start",
                    component: gt,
                  }),
                ],
              }),
              Object(o.jsx)(O, {}),
            ],
          });
        },
        Ot = Boolean(
          "localhost" === window.location.hostname ||
            "[::1]" === window.location.hostname ||
            window.location.hostname.match(
              /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
            )
        );
      function wt(e, n) {
        navigator.serviceWorker
          .register(e)
          .then(function (e) {
            e.onupdatefound = function () {
              var t = e.installing;
              null != t &&
                (t.onstatechange = function () {
                  "installed" === t.state &&
                    (navigator.serviceWorker.controller
                      ? (console.log(
                          "New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."
                        ),
                        n && n.onUpdate && n.onUpdate(e))
                      : (console.log("Content is cached for offline use."),
                        n && n.onSuccess && n.onSuccess(e)));
                });
            };
          })
          .catch(function (e) {
            console.error("Error during service worker registration:", e);
          });
      }
      s.a.render(
        Object(o.jsx)("div", {
          children: Object(o.jsx)(z, { children: Object(o.jsx)(vt, {}) }),
        }),
        document.getElementById("root")
      ),
        (function (e) {
          if ("serviceWorker" in navigator) {
            if (
              new URL("", window.location.href).origin !==
              window.location.origin
            )
              return;
            window.addEventListener("load", function () {
              var n = "".concat("", "/service-worker.js");
              Ot
                ? (!(function (e, n) {
                    fetch(e, { headers: { "Service-Worker": "script" } })
                      .then(function (t) {
                        var o = t.headers.get("content-type");
                        404 === t.status ||
                        (null != o && -1 === o.indexOf("javascript"))
                          ? navigator.serviceWorker.ready.then(function (e) {
                              e.unregister().then(function () {
                                window.location.reload();
                              });
                            })
                          : wt(e, n);
                      })
                      .catch(function () {
                        console.log(
                          "No internet connection found. App is running in offline mode."
                        );
                      });
                  })(n, e),
                  navigator.serviceWorker.ready.then(function () {
                    console.log(
                      "This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA"
                    );
                  }))
                : wt(n, e);
            });
          }
        })();
    },
  },
  [[83, 1, 2]],
]);
//# sourceMappingURL=main.1f8088a8.chunk.js.map
