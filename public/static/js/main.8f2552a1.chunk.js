(this["webpackJsonpquran-app"] = this["webpackJsonpquran-app"] || []).push([
  [0],
  {
    104: function (e, n, t) {},
    105: function (e, n, t) {},
    106: function (e, n, t) {
      "use strict";
      t.r(n);
      var o = t(0),
        c = t(1),
        r = t.n(c),
        i = t(33),
        s = t.n(i),
        a = t(2),
        l = t.n(a),
        u = t(7),
        d = t(4),
        b = t(3),
        f = t(16),
        j = t(41),
        p = t(19);
      function m() {
        var e = Object(d.a)([
          "\n  color: #888;\n  margin-right: 10px;\n  &:hover {\n    color: #000;\n  }\n",
        ]);
        return (
          (m = function () {
            return e;
          }),
          e
        );
      }
      function h() {
        var e = Object(d.a)(["\n  margin-top: 10px;\n"]);
        return (
          (h = function () {
            return e;
          }),
          e
        );
      }
      function x() {
        var e = Object(d.a)([
          "\n  margin: 0;\n  font-size: 14px;\n  color: #888;\n",
        ]);
        return (
          (x = function () {
            return e;
          }),
          e
        );
      }
      function g() {
        var e = Object(d.a)([
          "\n  background: #f2f2f2;\n  padding: 10px;\n  text-align: center;\n",
        ]);
        return (
          (g = function () {
            return e;
          }),
          e
        );
      }
      var v = b.b.footer(g()),
        O = b.b.p(x()),
        w = b.b.div(h()),
        N = b.b.a(m()),
        k = function () {
          var e = new Date().getFullYear();
          return Object(o.jsx)("div", {
            children: Object(o.jsxs)(v, {
              children: [
                Object(o.jsxs)(O, {
                  children: [
                    "Copyright \xa9 ",
                    e,
                    " Here for the Hereafter.",
                    Object(o.jsx)("br", {}),
                    "A 501(c)(3) nonprofit organization dedicated to spreading Islamic education.",
                  ],
                }),
                Object(o.jsxs)(w, {
                  children: [
                    Object(o.jsx)(N, {
                      href: "https://www.hereforthehereafter.com",
                      children: Object(o.jsx)(f.a, { icon: p.d, size: "3x" }),
                    }),
                    Object(o.jsx)(N, {
                      href: "https://www.facebook.com/hereforthehereafter",
                      children: Object(o.jsx)(f.a, { icon: j.a, size: "3x" }),
                    }),
                    Object(o.jsx)(N, {
                      href: "https://www.youtube.com/hereforthehereafter",
                      children: Object(o.jsx)(f.a, { icon: j.d, size: "3x" }),
                    }),
                    Object(o.jsx)(N, {
                      href: "https://www.instagram.com/hereforthehereafter",
                      children: Object(o.jsx)(f.a, { icon: j.b, size: "3x" }),
                    }),
                    Object(o.jsx)(N, {
                      href: "https://www.twitter.com/herehereafter",
                      children: Object(o.jsx)(f.a, { icon: j.c, size: "3x" }),
                    }),
                    Object(o.jsx)(N, {
                      href: "mailto:hereforthehereafter@gmail.com",
                      children: Object(o.jsx)(f.a, { icon: p.c, size: "3x" }),
                    }),
                  ],
                }),
              ],
            }),
          });
        },
        y = t(5),
        C = t.p + "static/media/HHLogo.a975645f.png";
      t(42);
      function S(e) {
        return Object(o.jsx)("div", {
          className: "hamburger-btn",
          onClick: e.click,
          children: "\u2630",
        });
      }
      var T = t(20),
        E = t(11),
        z = t.n(E),
        D = r.a.createContext();
      function I() {
        return Object(c.useContext)(D);
      }
      function B(e) {
        var n = Object(c.useState)(!1),
          t = Object(y.a)(n, 2),
          r = t[0],
          i = t[1],
          s = Object(c.useState)(null),
          a = Object(y.a)(s, 2),
          l = a[0],
          u = a[1],
          d = Object(c.useState)(null),
          b = Object(y.a)(d, 2),
          f = b[0],
          j = b[1],
          p = Object(c.useState)([]),
          m = Object(y.a)(p, 2),
          h = m[0],
          x = m[1],
          g = Object(c.useState)([]),
          v = Object(y.a)(g, 2),
          O = v[0],
          w = v[1],
          N = Object(c.useState)([]),
          k = Object(y.a)(N, 2),
          C = k[0],
          S = k[1],
          T = Object(c.useState)(""),
          E = Object(y.a)(T, 2),
          I = E[0],
          B = E[1];
        console.log(I);
        var A = Object(c.useState)({}),
          L = Object(y.a)(A, 2),
          M = L[0],
          F = L[1];
        console.log(M),
          Object(c.useEffect)(function () {
            z()("/".concat(I, "/topicsData")).then(function (e) {
              x(e.data), console.log(e.data);
            });
          }, []),
          Object(c.useEffect)(function () {
            z()("/examplesData").then(function (e) {
              w(e.data);
            });
          }, []),
          Object(c.useEffect)(function () {
            z()("/".concat(I, "/sideBarData")).then(function (e) {
              j(e.data);
            });
          }, []),
          Object(c.useEffect)(function () {
            z()("/".concat(I, "/topicNumbersList")).then(function (e) {
              S(e.data);
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
          setExampleDatafromBackEnd: w,
          topicNumbersListfromBackEnd: C,
          setTopicNumbersListfromBackEnd: S,
          courseTitleUserIsOn: I,
          setCourseTitleUserIsOn: B,
          courseDetails: M,
          setCourseDetails: F,
        };
        return Object(o.jsx)(D.Provider, { value: Q, children: e.children });
      }
      function A(e) {
        var n = I(),
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
      var L = t(112);
      var M = t(9);
      function F() {
        var e = Object(d.a)([
          "\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  left: 10px;\n  font-size: 3vh;\n",
        ]);
        return (
          (F = function () {
            return e;
          }),
          e
        );
      }
      function Q() {
        var e = Object(d.a)([
          '\n  width: 100%;\n  height: 80px;\n  padding: 10px;\n  padding-left: 70px;\n  font-family: "Quicksand", sans-serif;\n  font-size: 3vh;\n\n  border: none;\n  border-radius: 4px;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n',
        ]);
        return (
          (Q = function () {
            return e;
          }),
          e
        );
      }
      function U() {
        var e = Object(d.a)([
          "\n  position: relative;\n  width: 100%;\n  max-width: 700px;\n  margin-bottom: 20px;\n  margin-right: 50px;\n",
        ]);
        return (
          (U = function () {
            return e;
          }),
          e
        );
      }
      function H() {
        var e = Object(d.a)([
          "\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  height: 100%; /* Ensure the div takes full height */\n",
        ]);
        return (
          (H = function () {
            return e;
          }),
          e
        );
      }
      b.b.div(H());
      var Y = b.b.div(U()),
        q = b.b.input(Q()),
        R = b.b.div(F());
      function P(e) {
        var n = I(),
          t = n.courseTitleUserIsOn,
          r = n.entryStore,
          i = Object(c.useState)(""),
          s = Object(y.a)(i, 2),
          a = s[0],
          l = s[1],
          u = Object(c.useState)([]),
          d = Object(y.a)(u, 2),
          b = d[0],
          j = d[1];
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
                  return Object(T.a)(Object(T.a)({}, e), {}, { entries: n });
                })
                .filter(function (e) {
                  return e.entries.length > 0;
                });
              j(e);
            } else j(r);
          },
          [r, a]
        ),
          console.log(r),
          console.log(r, t);
        var m = Object(c.useState)(null),
          h = Object(y.a)(m, 2),
          x = (h[0], h[1], window.location.href);
        console.log(x);
        var g = x.split("/");
        console.log(g);
        var v = g[g.length - 1];
        console.log(v);
        var O = [];
        (O = v.includes("%") ? v.split("%23") : v.split("#")), console.log(O);
        var w = O[0];
        O[1];
        return (
          console.log(w),
          Object(o.jsxs)("div", {
            className: "sideNavContainer",
            style:
              "exiting" === e.state
                ? { animation: "moveMainContainer .3s forwards" }
                : "entering" === e.state
                ? { animation: "moveMainContainer .3s reverse backwards" }
                : null,
            children: [
              Object(o.jsxs)(Y, {
                children: [
                  Object(o.jsx)(R, {
                    children: Object(o.jsx)(f.a, { icon: p.e }),
                  }),
                  Object(o.jsx)(q, {
                    type: "text",
                    placeholder: "Search for a Topic",
                    value: a,
                    onChange: function (e) {
                      return l(e.target.value);
                    },
                  }),
                ],
              }),
              b &&
                b.map(function (n, c) {
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
                            ? Object(o.jsx)(A, {
                                number: n.topicNumber,
                                title: n.title,
                                entries: n.entries,
                                styleVariable:
                                  n.topicNumber == w
                                    ? { background: "#dfdfdf" }
                                    : {},
                              })
                            : Object(o.jsx)(M.b, {
                                to: "/"
                                  .concat(t, "/topic/")
                                  .concat(n.topicNumber),
                                children: Object(o.jsxs)("div", {
                                  className: "sidenavContent",
                                  onClick: e.closeNav,
                                  style:
                                    n.topicNumber == w
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
      var W = t(26);
      function G(e) {
        var n = I(),
          t = n.subContainerEntries,
          r = n.setSubContainer,
          i = n.courseTitleUserIsOn,
          s = Object(c.useState)(""),
          a = Object(y.a)(s, 2),
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
                    Object(o.jsx)(M.b, {
                      to: "/".concat(i, "/topic/").concat(n.topicNumber),
                      children: Object(o.jsxs)("div", {
                        className: "sidenavContentHeaderSubContainer",
                        onClick: e.closeNav,
                        children: [n.topicNumber, "\xa0\xa0", n.title],
                      }),
                    }),
                    n.entries.map(function (t) {
                      return Object(o.jsx)(W.a, {
                        to: "/"
                          .concat(i, "/topic/")
                          .concat(n.topicNumber, "#")
                          .concat(t.sectionNumber),
                        children: Object(o.jsx)("div", {
                          onClick: e.closeNav,
                          children: Object(o.jsx)(A, {
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
      function V(e) {
        var n = I(),
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
            Object(o.jsx)(M.b, {
              to: "/".concat(c.courseTitle.replace(/\s/g, ""), "/start"),
              children: Object(o.jsx)("div", {
                className: "sidenavHeader",
                style: { background: "#fcebeb" },
                children: c.courseTitle,
              }),
            }),
            Object(o.jsx)(L.a, {
              in: !t,
              timeout: 300,
              unmountOnExit: !0,
              mountOnEnter: !0,
              children: function (n) {
                return Object(o.jsx)(P, { state: n, closeNav: e.click });
              },
            }),
            Object(o.jsx)(L.a, {
              in: t,
              timeout: 300,
              unmountOnExit: !0,
              mountOnEnter: !0,
              children: function (n) {
                return Object(o.jsx)(G, { state: n, closeNav: e.click });
              },
            }),
          ],
        });
      }
      var _ = function (e) {
        return Object(o.jsx)("div", { children: Object(o.jsx)("p", {}) });
      };
      function X() {
        var e = Object(d.a)([
          '\n  background: none;\n  border: none;\n  font-family: "Quicksand", sans-serif;\n  font-size: 1.5vh;\n  font-weight: bold;\n  color: #f8f6f0;\n  cursor: pointer;\n  outline: none;\n  position: relative;\n  padding: 0;\n  margin: 0;\n  width: 70px;\n  height: 35px;\n  background-color: #bbb;\n  border-radius: 35px;\n  transition: background-color 0.3s;\n\n  &:after {\n    content: "";\n    position: absolute;\n    top: 2.5px;\n    left: 2.5px;\n    width: 30px;\n    height: 30px;\n    border-radius: 50%;\n    background-color: white;\n    transition: left 0.3s;\n  }\n\n  &.study {\n    background-color: #eb8381;\n    &:after {\n      left: 37.5px;\n    }\n  }\n',
        ]);
        return (
          (X = function () {
            return e;
          }),
          e
        );
      }
      function J() {
        var e = Object(d.a)([
          '\n  background: red;\n  position: relative;\n  font-family: "Quicksand", sans-serif;\n  padding: 7px 12px;\n  text-transform: uppercase;\n  /* font-size: 15px; */\n  font-size: 4vh;\n  font-weight: bold;\n  overflow: hidden;\n  border: 0;\n  border-radius: 5px;\n  background: #eb3535;\n  color: #f8f6f0;\n  height: 6vh;\n\n  transition: all 0.25s ease;\n  cursor: pointer;\n  margin-right: 20px;\n\n  &:active {\n    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.5);\n    background: #f2b1ae;\n  }\n',
        ]);
        return (
          (J = function () {
            return e;
          }),
          e
        );
      }
      function K() {
        var e = Object(d.a)([
          "\n  width: 6vh; /* Adjust the width as needed */\n  height: 6vh; /* Adjust the height as needed */\n  margin-left: 70px; /* Adjust the margin as needed */\n",
        ]);
        return (
          (K = function () {
            return e;
          }),
          e
        );
      }
      function $() {
        var e = Object(d.a)(["\n  display: flex;\n  align-items: center;\n"]);
        return (
          ($ = function () {
            return e;
          }),
          e
        );
      }
      function Z() {
        var e = Object(d.a)([
          '\n  font-family: "Quicksand", sans-serif;\n  padding: 7px 12px;\n  /* margin: 20px; */\n  text-transform: uppercase;\n  /* font-size: 15px; */\n  font-size: 2.5vh;\n  overflow: hidden;\n  border: 0;\n  border-radius: 5px;\n  background: #967bb6;\n  color: white;\n  transition: all 0.25s ease;\n  cursor: pointer;\n  height: 6vh;\n\n  &:active {\n    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.5);\n    background: #f2b1ae;\n  }\n',
        ]);
        return (
          (Z = function () {
            return e;
          }),
          e
        );
      }
      function ee() {
        var e = Object(d.a)([
          "\n  background: #eb8381;\n  /* top: 80; */\n  height: 6vh;\n  transform: translateY(",
          ");\n  transition: 0.2s;\n  display: flex;\n  justify-content: space-between;\n",
        ]);
        return (
          (ee = function () {
            return e;
          }),
          e
        );
      }
      var ne = b.b.nav(ee(), function (e) {
          return e.navTop + "vh";
        }),
        te = b.b.button(Z()),
        oe = (b.b.div($()), b.b.img(K())),
        ce = b.b.button(J());
      b.b.button(X());
      function re(e) {
        var n = Object(c.useState)(!1),
          t = Object(y.a)(n, 2),
          r = t[0],
          i = t[1],
          s = Object(c.useState)([]),
          a = Object(y.a)(s, 2),
          l = a[0],
          u = a[1],
          d = I(),
          b = d.courseTitleUserIsOn,
          j = d.entryStore,
          m = d.setEntryStore,
          h = d.courseDetails,
          x = d.setSubContainerEntries,
          g = d.subContainer,
          v = d.setSubContainer;
        d.rowClicked, d.setRowClicked;
        console.log(b, h, j),
          Object(c.useEffect)(
            function () {
              z()(
                "/"
                  .concat(b, "/topicNumbersList?collectionName=")
                  .concat(h.courseTopicsCollectionName, "&modelName=")
                  .concat(h.courseTopicsModelName)
              ).then(function (e) {
                u(e.data), console.log(e.data);
              });
            },
            [b]
          ),
          console.log(l),
          Object(c.useEffect)(
            function () {
              z()(
                "/"
                  .concat(b, "/sideBarData?collectionName=")
                  .concat(h.courseTopicsCollectionName, "&modelName=")
                  .concat(h.courseTopicsModelName)
              ).then(function (e) {
                m(e.data), console.log(e.data);
              });
            },
            [b]
          ),
          console.log(j);
        var O = Object(c.useState)("0"),
          w = Object(y.a)(O, 2),
          N = (w[0], w[1]),
          k = Object(c.useState)("0"),
          T = Object(y.a)(k, 2),
          E = T[0],
          D = T[1],
          B = Object(c.useState)("0"),
          A = Object(y.a)(B, 2),
          F = A[0],
          Q = A[1],
          U = Object(c.useState)("0"),
          H = Object(y.a)(U, 2),
          Y = H[0],
          q = H[1],
          R = Object(c.useState)(0),
          P = Object(y.a)(R, 2),
          W = P[0],
          G = P[1],
          X = window.scrollY;
        window.addEventListener("scroll", function () {
          X < window.scrollY ? G(-6) : G(0), (X = window.scrollY);
        });
        var J = function () {
          i(!1);
        };
        console.log(l);
        var K = function () {
          var e = window.location.href;
          N(e),
            console.log(e),
            j &&
              j.forEach(function (e) {
                e.entries.forEach(function (e) {
                  e.topicNumber == F && 1 == e.rows
                    ? (console.log(E),
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
            console.log(c), D(c);
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
            console.log(u), q(u), console.log(j);
          }),
          Object(o.jsxs)("div", {
            style: { display: "unset" },
            children: [
              Object(o.jsxs)(ne, {
                style: { position: "sticky", top: 0, zIndex: 1 },
                navTop: W,
                children: [
                  Object(o.jsxs)("div", {
                    children: [
                      Object(o.jsx)(S, {
                        click: function () {
                          i(!0);
                        },
                      }),
                      " ",
                      Object(o.jsxs)(M.b, {
                        to: "/",
                        children: [
                          Object(o.jsx)(oe, { src: C, alt: "Logo" }),
                          " ",
                        ],
                      }),
                    ],
                  }),
                  Object(o.jsx)(M.b, {
                    to: "/".concat(b, "/quiz/") + e.selectedTopic.topicNumber,
                    children:
                      0 !== e.selectedTopic.sections.length &&
                      Object(o.jsxs)(te, {
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
                      Object(o.jsx)(M.b, {
                        to: "/".concat(b, "/topic/").concat(Y),
                        children: Object(o.jsx)(ce, {
                          onClick: K,
                          children: Object(o.jsx)(f.a, { icon: p.a }),
                        }),
                      }),
                      Object(o.jsx)(M.b, {
                        to: "/".concat(b, "/topic/").concat(F),
                        children: Object(o.jsxs)(ce, {
                          onClick: K,
                          children: [" ", Object(o.jsx)(f.a, { icon: p.b })],
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              Object(o.jsx)(L.a, {
                in: r && j,
                timeout: 300,
                mountOnEnter: !0,
                unmountOnExit: !0,
                children: function (e) {
                  return Object(o.jsxs)(o.Fragment, {
                    children: [
                      Object(o.jsx)(V, { state: e, click: J }),
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
              Object(o.jsx)(_, {}),
            ],
          })
        );
      }
      t(71);
      function ie() {
        var e = Object(d.a)([
          '\n  font-family: "Century Gothic", serif;\n  padding: 10px 50px;\n  color: ',
          ";\n  font-size: 50px;\n",
        ]);
        return (
          (ie = function () {
            return e;
          }),
          e
        );
      }
      b.b.button(ie(), function (e) {
        return e.mouse ? "red" : "blue";
      });
      function se() {
        var e = Object(d.a)([
          '\n  background: red;\n  font-family: "Quicksand", sans-serif;\n  padding: 7px 12px;\n  text-transform: uppercase;\n  font-size: 25px;\n  overflow: hidden;\n  border: 0;\n  border-radius: 5px;\n  background: #eb3535;\n  color: white;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);\n  transition: all 0.25s ease;\n\n  &:active {\n    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.5);\n    background: #f2b1ae;\n  }\n',
        ]);
        return (
          (se = function () {
            return e;
          }),
          e
        );
      }
      function ae() {
        var e = Object(d.a)([
          '\n  background: red;\n  font-family: "Quicksand", sans-serif;\n  padding: 7px 12px;\n  text-transform: uppercase;\n  font-size: 2vh;\n  overflow: hidden;\n  border: 0;\n  border-radius: 5px;\n  background: #eb3535;\n  color: white;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);\n  transition: all 0.25s ease;\n  cursor: pointer;\n  &:active {\n    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.5);\n    background: #f2b1ae;\n  }\n',
        ]);
        return (
          (ae = function () {
            return e;
          }),
          e
        );
      }
      b.b.button(ae()), b.b.button(se());
      function le() {
        var e = Object(d.a)(["\n          fadeIn 1s\n        "]);
        return (
          (le = function () {
            return e;
          }),
          e
        );
      }
      function ue() {
        var e = Object(d.a)(["\n          shakeY 1s\n        "]);
        return (
          (ue = function () {
            return e;
          }),
          e
        );
      }
      function de() {
        var e = Object(d.a)([
          "\n  font-size: 2vh;\n  display: ",
          ";\n  align-items: center;\n  justify-content: center;\n  animation: ",
          ";\n",
        ]);
        return (
          (de = function () {
            return e;
          }),
          e
        );
      }
      function be() {
        var e = Object(d.a)(["\n          ", " 400ms\n        "]);
        return (
          (be = function () {
            return e;
          }),
          e
        );
      }
      function fe() {
        var e = Object(d.a)([
          "\n          ",
          " 1s cubic-bezier(1,-0.74,.42,.57)\n        ",
        ]);
        return (
          (fe = function () {
            return e;
          }),
          e
        );
      }
      function je() {
        var e = Object(d.a)([
          "\n  font-size: 2.2vh;\n  text-align: center;\n  font-family: Quicksand;\n  border-radius: 15px;\n  padding: 10px;\n  color: #252525;\n  display: flex;\n  background: ",
          ";\n  margin-bottom: 10px;\n  margin-top: 10px;\n  transition: transform 300ms;\n  justify-content: center;\n  animation: ",
          ";\n\n  &:hover {\n    cursor: pointer;\n    box-shadow: 0 0.1rem 0.5rem rgba(0, 0, 0, 0.2);\n    transform: scale(1.02);\n  }\n",
        ]);
        return (
          (je = function () {
            return e;
          }),
          e
        );
      }
      function pe() {
        var e = Object(d.a)([
          "\n  /* font-size: 17px; */\n  font-size: 2.5vh;\n  font-weight: bold;\n  text-align: center;\n  color: #eb8381;\n  padding: 20px;\n",
        ]);
        return (
          (pe = function () {
            return e;
          }),
          e
        );
      }
      function me() {
        var e = Object(d.a)([
          '\n  /* box-shadow: 0 0.1rem 0.5rem rgba(0, 0, 0, 0.2); */\n  border-radius: 5px;\n  padding: 10px;\n  /* background: #252525; */\n  margin-top: 40px;\n  font-family: "Quicksand", sans-serif;\n',
        ]);
        return (
          (me = function () {
            return e;
          }),
          e
        );
      }
      function he() {
        var e = Object(d.a)(["\n0%{opacity: 0}\n100%{opacity: 1}\n"]);
        return (
          (he = function () {
            return e;
          }),
          e
        );
      }
      function xe() {
        var e = Object(d.a)([
          "\n0%{transform: scale(1)}\n50%{transform: scale(2)}\n100%{transform: scale(1)}\n",
        ]);
        return (
          (xe = function () {
            return e;
          }),
          e
        );
      }
      function ge() {
        var e = Object(d.a)([
          "\n0%{transform: scale(1)}\n20%{transform: scale(1.2)}\n50%{transform: scale(1)}\n75%{transform: scale(1.2)}\n100%{transform: scale(1)}\n",
        ]);
        return (
          (ge = function () {
            return e;
          }),
          e
        );
      }
      var ve = Object(b.c)(ge()),
        Oe = Object(b.c)(xe()),
        we = (Object(b.c)(he()), b.b.div(me())),
        Ne = b.b.div(pe()),
        ke = b.b.div(
          je(),
          function (e) {
            return e.answerClicked == e.answer ? e.answerColor : "#fcebeb";
          },
          function (e) {
            return e.answerClicked == e.answer && "#DAF7A6" == e.answerColor
              ? Object(b.a)(fe(), Oe)
              : e.answerClicked == e.answer && "#ff726f" == e.answerColor
              ? Object(b.a)(be(), ve)
              : "none";
          }
        ),
        ye = b.b.div(
          de(),
          function (e) {
            return e.answerClicked == e.answer ? "flex" : "none";
          },
          function (e) {
            return e.answerClicked == e.answer && "#DAF7A6" == e.answerColor
              ? Object(b.a)(ue())
              : e.answerClicked == e.answer && "#ff726f" == e.answerColor
              ? Object(b.a)(le())
              : "none";
          }
        ),
        Ce = function (e) {
          console.log(e);
          var n = I(),
            t = n.exampleDatafromBackEnd;
          n.courseTitleUserIsOn;
          console.log(t);
          var r = Object(c.useState)("#fcebeb"),
            i = Object(y.a)(r, 2),
            s = i[0],
            a = i[1],
            l = Object(c.useState)("NoAnswer"),
            u = Object(y.a)(l, 2),
            d = u[0],
            b = u[1],
            f = Object(c.useState)(!1),
            j = Object(y.a)(f, 2),
            p = (j[0], j[1]);
          var m = Object(c.useState)(
              e.sectionExample && e.sectionExample.answers
            ),
            h = Object(y.a)(m, 2),
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
            Object(o.jsxs)(we, {
              children: [
                Object(o.jsx)(Ne, {
                  children: e.sectionExample && e.sectionExample.question,
                }),
                x &&
                  x.map(function (e) {
                    return Object(o.jsxs)(o.Fragment, {
                      children: [
                        Object(o.jsx)(ke, {
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
                        Object(o.jsx)(ye, {
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
      function Se() {
        var e = Object(d.a)([
          "\n  /* font-size: 15px; */\n  font-size: 2vh;\n  margin-left: 30px;\n",
        ]);
        return (
          (Se = function () {
            return e;
          }),
          e
        );
      }
      function Te() {
        var e = Object(d.a)([
          '\n  background: #eb8381;\n  align-items: center;\n  color: #252525;\n  /* font-size: 18px; */\n  font-size: 2vh;\n  display: inline-block;\n  margin-bottom: 10px;\n  padding-right: 10px;\n  font-family: "Quicksand", sans-serif;\n  border-radius: 5px;\n',
        ]);
        return (
          (Te = function () {
            return e;
          }),
          e
        );
      }
      function Ee() {
        var e = Object(d.a)(["\n  margin: 0 auto;\n"]);
        return (
          (Ee = function () {
            return e;
          }),
          e
        );
      }
      function ze() {
        var e = Object(d.a)(["\n          ", " 2s\n        "]);
        return (
          (ze = function () {
            return e;
          }),
          e
        );
      }
      function De() {
        var e = Object(d.a)([
          '\n  /* height: 30vh; */\n  /* font-size: 20px; */\n  /* display: flex;\n  flex-direction: column; */\n  background: #252525;\n  color: #f8f6f0;\n  font-size: 2vh;\n  white-space: pre-line;\n  margin: 10px 30px;\n  padding: 20px;\n  box-shadow: 0 0.1rem 0.5rem rgba(0, 0, 0, 0.5);\n  display: block;\n  position: relative;\n  align-items: center;\n  font-family: "Quicksand", sans-serif;\n  border-radius: 1rem;\n  /* padding: 20px; */\n  animation: ',
          ";\n\n  .sectionImage {\n    display: block;\n    margin: 0 auto; /* This will center the image horizontally */\n    border-radius: 4rem;\n    width: 100%;\n    height: 100%;\n    object-fit: contain;\n  }\n\n  @media (min-width: 1050px) {\n    /* Apply styles for desktop devices with a screen width of 768px and above */\n    .sectionImage {\n      max-width: 25%; /* Adjust the maximum width as needed for desktop view */\n      margin-right: 60px; /* Add some spacing between the image and text on desktop */\n      display: inline;\n      vertical-align: middle;\n    }\n\n    .sectionText {\n      display: inline-block;\n      max-width: 70%;\n      font-size: 3vh;\n      vertical-align: middle;\n    }\n  }\n",
        ]);
        return (
          (De = function () {
            return e;
          }),
          e
        );
      }
      function Ie() {
        var e = Object(d.a)([
          '\n  color: #eb8381;\n  /* font-size: 20px; */\n  /* font-size: clamp(3vh, 20px, 20px); */\n  font-size: 3vh;\n  display: block;\n  margin-bottom: 50px;\n  font-family: "Quicksand", sans-serif;\n',
        ]);
        return (
          (Ie = function () {
            return e;
          }),
          e
        );
      }
      function Be() {
        var e = Object(d.a)([
          '\n  background: #f8f6f0;\n  color: #252525;\n  /* height: 30vh; */\n  /* font-size: 1.2rem; */\n  font-size: 2.2vh;\n\n  white-space: pre-line;\n  margin: 10px 30px;\n  padding: 20px;\n  box-shadow: 0 0.1rem 0.1rem rgba(0, 0, 0, 0.2);\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  position: relative;\n\n  font-family: "Quicksand", sans-serif;\n  border-radius: 1rem;\n  /* padding: 20px; */\n',
        ]);
        return (
          (Be = function () {
            return e;
          }),
          e
        );
      }
      function Ae() {
        var e = Object(d.a)([
          '\n  color: #eb8381;\n  /* font-size: 1rem; */\n  /* font-size: clamp(4vh, 30px, 30px); */\n  /* font-size: min(2rem, 4vh); */\n  font-size: 4vh;\n  display: block;\n  margin: 30px;\n  font-family: "Quicksand", sans-serif;\n\n  /* @media (max-width: 40em) {\n    font-size: 5vh;\n  } */\n\n  /* justify-content: space-between; */\n',
        ]);
        return (
          (Ae = function () {
            return e;
          }),
          e
        );
      }
      function Le() {
        var e = Object(d.a)([
          '\n  background: red;\n  font-family: "Quicksand", sans-serif;\n  padding: 7px 12px;\n  margin: 20px;\n  text-transform: uppercase;\n  /* font-size: 15px; */\n  font-size: 3vh;\n  overflow: hidden;\n  border: 0;\n  border-radius: 5px;\n  background: #967bb6;\n  color: white;\n  transition: all 0.25s ease;\n  cursor: pointer;\n\n  &:active {\n    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.5);\n    background: #f2b1ae;\n  }\n',
        ]);
        return (
          (Le = function () {
            return e;
          }),
          e
        );
      }
      function Me() {
        var e = Object(d.a)([
          '\n  background: red;\n  font-family: "Quicksand", sans-serif;\n  padding: 7px 12px;\n  margin-right: "20px";\n  text-transform: uppercase;\n  /* font-size: 15px; */\n  font-size: 2vh;\n  overflow: hidden;\n  border: 0;\n  border-radius: 5px;\n  background: #fcebeb;\n  color: #252525;\n  transition: all 0.25s ease;\n  cursor: pointer;\n\n  &:active {\n    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.5);\n    background: #fcebeb;\n  }\n',
        ]);
        return (
          (Me = function () {
            return e;
          }),
          e
        );
      }
      function Fe() {
        var e = Object(d.a)([
          "\n0%{transform: scale(1); box-shadow: 0 0 0px rgba(0,0,0,0);}\n20%{transform: scale(1.01); background: #fcebeb; box-shadow: 0 0 20px #eb8381;}\n50%{transform: scale(1); box-shadow: 0 0 0px rgba(0,0,0,0);}\n",
        ]);
        return (
          (Fe = function () {
            return e;
          }),
          e
        );
      }
      var Qe = Object(b.c)(Fe());
      console.log("Rendered");
      var Ue = b.b.button(Me()),
        He = (b.b.button(Le()), b.b.div(Ae())),
        Ye = b.b.div(Be()),
        qe = b.b.p(Ie()),
        Re = b.b.div(De(), function (e) {
          return e.sectionNumber == e.currentUrlSectionID
            ? Object(b.a)(ze(), Qe)
            : "none";
        }),
        Pe = b.b.div(Ee()),
        We = b.b.p(Te()),
        Ge = b.b.p(Se()),
        Ve = function (e) {
          var n = I(),
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
                z()("/coursesData").then(function (n) {
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
            l = Object(y.a)(a, 2),
            u = l[0],
            d = l[1],
            b = Object(c.useState)([]),
            f = Object(y.a)(b, 2),
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
                z()(
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
                z()(
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
          var w = O[1];
          console.log(w),
            Object(c.useEffect)(
              function () {
                void 0 === w && window.scrollTo({ top: 0, behavior: "smooth" });
              },
              [x]
            ),
            Object(c.useEffect)(function () {
              if (w) {
                var e = document.getElementById(w);
                e && e.scrollIntoView();
              }
            }),
            console.log(x);
          var N = [];
          j.sections &&
            j.sections.map(function (e) {
              return N.push(e.sectionNumber);
            }),
            console.log(N);
          var k = function (e) {
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
            S = Math.ceil(100 / N.length);
          console.log(S);
          var T = [],
            E = [],
            D = [],
            B = [];
          return (
            N.map(function (e) {
              var n =
                0 !== u.length &&
                u.filter(function (n) {
                  return n.sectionNumber == e;
                });
              console.log(n),
                n.length > S
                  ? ((T = C(n, S)), console.log(T), (D = E.concat(D, T)))
                  : (D = E.concat(D, n)),
                console.log(E),
                console.log(D);
            }),
            console.log(E),
            console.log(D),
            (B = D.length > 100 ? C(D, 100) : D),
            console.log(B),
            "undefined" === j || null === j || 0 === j.length
              ? Object(o.jsx)("div", { children: "Loading" })
              : Object(o.jsxs)("div", {
                  children: [
                    Object(o.jsx)(re, {
                      courseTitleUserIsOn: t,
                      courseDetails: i,
                      selectedTopic: j,
                    }),
                    Object(o.jsxs)(He, {
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
                            children: Object(o.jsx)(Ue, {
                              children: Object(o.jsx)("b", {
                                children: "Watch",
                              }),
                            }),
                          }),
                        "\xa0 \xa0",
                        Object(o.jsx)(Ue, {
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
                    Object(o.jsx)(Ye, {
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
                            Object(o.jsxs)(Re, {
                              currentUrlSectionID: w,
                              sectionNumber: e.sectionNumber,
                              children: [
                                Object(o.jsxs)(qe, {
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
                                        children: Object(o.jsx)(Ue, {
                                          children: Object(o.jsx)("b", {
                                            children: "Watch",
                                          }),
                                        }),
                                      }),
                                    "\xa0 \xa0",
                                    Object(o.jsx)(Ue, {
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
                                Object(o.jsxs)(Pe, {
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
                                                Object(o.jsx)(We, {
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
                                                Object(o.jsx)(Ge, {
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
                                Object(o.jsx)(Ce, {
                                  topicNumber: m,
                                  section: e.sectionNumber,
                                  sectionTitle: e.sectionTitle,
                                  sectionExample: k(e.sectionNumber),
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
        _e = t(15),
        Xe = t(24),
        Je = Object(c.createContext)(),
        Ke = Object(c.createContext)();
      function $e() {
        var e = Object(d.a)([
          "\n  font-size: 2vh;\n  color: #f8f6f0;\n  display: ",
          ";\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n",
        ]);
        return (
          ($e = function () {
            return e;
          }),
          e
        );
      }
      function Ze() {
        var e = Object(d.a)([
          "\n  font-size: 2.2vh;\n  border-radius: 15px;\n  padding: 10px;\n  text-align: center;\n  display: flex;\n  background: ",
          ";\n  margin-bottom: 10px;\n  margin-top: 10px;\n  transition: transform 300ms;\n  justify-content: center;\n  pointer-events: ",
          ";\n\n  &:hover {\n    cursor: pointer;\n    box-shadow: 0 0.1rem 0.5rem rgba(0, 0, 0, 0.2);\n    transform: scale(1.02);\n  }\n",
        ]);
        return (
          (Ze = function () {
            return e;
          }),
          e
        );
      }
      function en() {
        var e = Object(d.a)([
          "\n  /* font-size: 17px; */\n  font-size: 2.5vh;\n  font-weight: bold;\n  text-align: center;\n  color: #d0bad9;\n  padding: 20px;\n",
        ]);
        return (
          (en = function () {
            return e;
          }),
          e
        );
      }
      function nn() {
        var e = Object(d.a)([
          '\n  box-shadow: 0 0.1rem 0.5rem rgba(0, 0, 0, 0.2);\n  border-radius: 5px;\n  padding: 10px;\n  background: #252525;\n  margin-left: 50px;\n  margin-right: 50px;\n  margin-top: 50px;\n  margin-bottom: 50px;\n  font-family: "Quicksand", sans-serif;\n',
        ]);
        return (
          (nn = function () {
            return e;
          }),
          e
        );
      }
      function tn() {
        var e = Object(d.a)([
          '\n  background: red;\n  font-family: "Quicksand", sans-serif;\n  padding: 7px 12px;\n  text-transform: uppercase;\n  font-size: 2vh;\n  overflow: hidden;\n  border: 0;\n  border-radius: 5px;\n  background: #967bb6;\n  color: white;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);\n  transition: all 0.25s ease;\n  cursor: pointer;\n  &:active {\n    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.5);\n    background: #f2b1ae;\n  }\n',
        ]);
        return (
          (tn = function () {
            return e;
          }),
          e
        );
      }
      function on() {
        var e = Object(d.a)(["\n0%{opacity: 0}\n100%{opacity: 1}\n"]);
        return (
          (on = function () {
            return e;
          }),
          e
        );
      }
      Object(b.c)(on());
      var cn = b.b.button(tn()),
        rn = b.b.div(nn()),
        sn = b.b.div(en()),
        an = b.b.div(
          Ze(),
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
        ln = b.b.div($e(), function (e) {
          return e.answerClicked == e.answer && e.submitted ? "flex" : "none";
        }),
        un = function (e) {
          var n = I().courseTitleUserIsOn,
            t = Object(c.useContext)(Je),
            r = Object(y.a)(t, 2),
            i = r[0],
            s = r[1],
            a = Object(c.useContext)(Ke),
            l = Object(y.a)(a, 2),
            u = l[0],
            d = (l[1], Object(c.useState)("#e8e2ef")),
            b = Object(y.a)(d, 2),
            f = b[0],
            j = b[1],
            p = Object(c.useState)("NoAnswer"),
            m = Object(y.a)(p, 2),
            h = m[0],
            x = m[1],
            g = Object(c.useState)(!1),
            v = Object(y.a)(g, 2),
            O = v[0],
            w = v[1],
            N = Object(c.useState)("noSelection"),
            k = Object(y.a)(N, 2),
            C = k[0],
            S = k[1];
          Object(c.useEffect)(
            function () {
              0 == i.length && x("NoAnswer");
            },
            [u]
          );
          var T = function (n, t) {
            x(t),
              w(!0),
              1 == n
                ? (j("#DAF7A6"),
                  S(!0),
                  (function (e) {
                    var n = Object(Xe.a)(i);
                    (n[e] = 1), s(n), console.log(i);
                  })(e.exampleIndex),
                  console.log(e.exampleIndex))
                : (j("#ff726f"),
                  S(!1),
                  (function (e) {
                    var n = Object(Xe.a)(i);
                    (n[e] = 0), s(n), console.log(i);
                  })(e.exampleIndex));
          };
          return Object(o.jsxs)(rn, {
            children: [
              Object(o.jsx)(sn, { children: e.example.question }),
              e.example &&
                e.example.answers.map(function (e) {
                  return Object(o.jsxs)(o.Fragment, {
                    children: [
                      Object(o.jsx)(an, {
                        onClick: function () {
                          return T(e.isCorrect, e.answer);
                        },
                        answerColor: f,
                        answer: e.answer,
                        answerClicked: h,
                        submitted: u,
                        sumCorrect: i,
                        children: Object(o.jsx)("p", { children: e.answer }),
                      }),
                      Object(o.jsx)(ln, {
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
                children: Object(o.jsxs)(W.a, {
                  to: "/"
                    .concat(n, "/topic/")
                    .concat(e.topicNumber, "#")
                    .concat(e.example.sectionNumber),
                  children: [
                    " ",
                    Object(o.jsx)(cn, { children: "Study this Lesson" }),
                  ],
                }),
              }),
            ],
          });
        };
      t(104);
      function dn() {
        var e = Object(d.a)([
          "\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n\n  @media (max-width: 1200px) {\n    flex-basis: 100%;\n    margin-top: 30px;\n  }\n",
        ]);
        return (
          (dn = function () {
            return e;
          }),
          e
        );
      }
      function bn() {
        var e = Object(d.a)(["\n          shakeX 1s 1s\n        "]);
        return (
          (bn = function () {
            return e;
          }),
          e
        );
      }
      function fn() {
        var e = Object(d.a)(["\n          shakeY 1s 1s\n        "]);
        return (
          (fn = function () {
            return e;
          }),
          e
        );
      }
      function jn() {
        var e = Object(d.a)([
          "\n  font-size: 3vh;\n  text-align: center;\n  font-weight: 900;\n  margin: 0;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  animation: ",
          ";\n\n  @media (max-width: 1200px) {\n    flex-basis: 100%;\n    margin-bottom: 20px;\n  }\n",
        ]);
        return (
          (jn = function () {
            return e;
          }),
          e
        );
      }
      function pn() {
        var e = Object(d.a)([
          '\n  font-size: 3vh;\n  font-family: "Quicksand", sans-serif;\n  text-align: center;\n  font-weight: 900;\n  margin: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n',
        ]);
        return (
          (pn = function () {
            return e;
          }),
          e
        );
      }
      function mn() {
        var e = Object(d.a)([
          "\n  background: ",
          ";\n  font-size: 40px;\n  white-space: pre-line;\n  margin: 10px 30px;\n  padding: 10px;\n  box-shadow: 0 0.1rem 0.1rem rgba(0, 0, 0, 0.2);\n  display: ",
          '; /* Display score card only when button is clicked, ie. when submitted state is true */\n  flex-wrap: wrap;\n  position: relative;\n  align-items: center;\n  justify-content: space-around;\n  text-align: center;\n  font-family: "Quicksand", sans-serif;\n  border-radius: 1rem;\n  padding: 20px;\n',
        ]);
        return (
          (mn = function () {
            return e;
          }),
          e
        );
      }
      function hn() {
        var e = Object(d.a)([
          '\n  background: red;\n  font-family: "Quicksand", sans-serif;\n  padding: 7px 100px;\n  text-transform: uppercase;\n  font-size: 2vh;\n  overflow: hidden;\n  border: 0;\n  border-radius: 5px;\n  background: #967bb6;\n  color: white;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);\n  transition: all 0.25s ease;\n  cursor: pointer;\n\n  &:active {\n    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.5);\n    background: #f2b1ae;\n  }\n',
        ]);
        return (
          (hn = function () {
            return e;
          }),
          e
        );
      }
      var xn = b.b.button(hn()),
        gn = b.b.div(
          mn(),
          function (e) {
            return 100 == e.scorePercentage ? "#f6ffe6" : "#e8c6c5";
          },
          function (e) {
            return e.submitted ? "flex" : "none";
          }
        ),
        vn = b.b.p(pn()),
        On = b.b.div(jn(), function (e) {
          return e.submitted && 100 == e.scorePercentage
            ? Object(b.a)(fn())
            : e.submitted && e.scorePercentage < 100
            ? Object(b.a)(bn())
            : "none";
        }),
        wn = b.b.div(dn()),
        Nn = function (e) {
          var n = I(),
            t = n.exampleDatafromBackEnd,
            r = n.courseTitleUserIsOn;
          console.log(t);
          var i = Object(c.useContext)(Je),
            s = Object(y.a)(i, 2),
            a = s[0],
            l = s[1],
            u = Object(c.useState)("#f8f8f8"),
            d = Object(y.a)(u, 2),
            b = (d[0], d[1], Object(c.useContext)(Ke)),
            f = Object(y.a)(b, 2),
            j = f[0],
            p = f[1],
            m = Object(_e.f)(),
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
            w = [],
            N = [],
            k = [],
            C = [];
          if ("Topic" == e.comingFrom)
            e.sections.map(function (e) {
              var n = t.filter(function (n) {
                return n.sectionNumber == e;
              });
              n.length > O
                ? ((w = v(n, O)), N.push.apply(N, w))
                : N.push.apply(N, n);
            }),
              (C = k = N.length > 5 ? v(N, 5) : N);
          else if ("Section" == e.comingFrom) {
            var S = t.filter(function (n) {
              return n.sectionNumber == e.sections;
            });
            C = w = S.length > 5 ? v(S, 5) : S;
          } else if ("ScoreCard" == e.comingFrom)
            if (e.sections.constructor == Array)
              e.sections.map(function (e) {
                var n = t.filter(function (n) {
                  return n.sectionNumber == e;
                });
                n.length > O
                  ? ((w = v(n, O)), N.push.apply(N, w))
                  : N.push.apply(N, n);
              }),
                (C = k = N.length > 5 ? v(N, 5) : N);
            else {
              var T = t.filter(function (n) {
                return n.sectionNumber == e.sections;
              });
              C = w = T.length > 5 ? v(T, 5) : T;
            }
          console.log(k), console.log(w);
          return Object(o.jsxs)(gn, {
            submitted: j,
            scorePercentage: x,
            children: [
              100 == x
                ? Object(o.jsxs)(On, {
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
                : Object(o.jsxs)(On, {
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
                  Object(o.jsx)(vn, { children: "Score" }),
                  h,
                  "/",
                  a.length,
                ],
              }),
              Object(o.jsxs)("div", {
                children: [
                  Object(o.jsx)(vn, { children: "Percentage" }),
                  x,
                  "%",
                ],
              }),
              Object(o.jsx)(wn, {
                children: Object(o.jsx)(M.b, {
                  to: {
                    pathname: g,
                    state: {
                      comingFrom: "ScoreCard",
                      sections: e.sections,
                      scoreCardSelectedQuizQuestons: C,
                      sectionNumber: e.sectionNumber,
                    },
                  },
                  children: Object(o.jsx)(xn, {
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
        kn = t.p + "static/media/HHLogo.a975645f.png";
      t(49);
      function yn(e) {
        return Object(o.jsx)("div", {
          className: "hamburger-btn",
          onClick: e.click,
          children: "\u2630",
        });
      }
      function Cn(e) {
        var n = I(),
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
      function Sn() {
        var e = Object(d.a)([
          "\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  left: 10px;\n  font-size: 3vh;\n",
        ]);
        return (
          (Sn = function () {
            return e;
          }),
          e
        );
      }
      function Tn() {
        var e = Object(d.a)([
          '\n  width: 100%;\n  height: 80px;\n  padding: 10px;\n  padding-left: 70px;\n  font-family: "Quicksand", sans-serif;\n  font-size: 3vh;\n\n  border: none;\n  border-radius: 4px;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n',
        ]);
        return (
          (Tn = function () {
            return e;
          }),
          e
        );
      }
      function En() {
        var e = Object(d.a)([
          "\n  position: relative;\n  width: 100%;\n  max-width: 700px;\n  margin-bottom: 20px;\n  margin-right: 50px;\n",
        ]);
        return (
          (En = function () {
            return e;
          }),
          e
        );
      }
      function zn() {
        var e = Object(d.a)([
          "\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  height: 100%; /* Ensure the div takes full height */\n",
        ]);
        return (
          (zn = function () {
            return e;
          }),
          e
        );
      }
      b.b.div(zn());
      var Dn = b.b.div(En()),
        In = b.b.input(Tn()),
        Bn = b.b.div(Sn());
      function An(e) {
        var n = I(),
          t = n.courseTitleUserIsOn,
          r = n.entryStore,
          i = Object(c.useState)(""),
          s = Object(y.a)(i, 2),
          a = s[0],
          l = s[1],
          u = Object(c.useState)([]),
          d = Object(y.a)(u, 2),
          b = d[0],
          j = d[1];
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
                  return Object(T.a)(Object(T.a)({}, e), {}, { entries: n });
                })
                .filter(function (e) {
                  return e.entries.length > 0;
                });
              j(e);
            } else j(r);
          },
          [r, a]
        ),
          console.log(r),
          console.log(r, t);
        var m = Object(c.useState)(null),
          h = Object(y.a)(m, 2),
          x = (h[0], h[1], window.location.href);
        console.log(x);
        var g = x.split("/");
        console.log(g);
        var v = g[g.length - 1];
        console.log(v);
        var O = [];
        (O = v.includes("%") ? v.split("%23") : v.split("#")), console.log(O);
        var w = O[0];
        O[1];
        return (
          console.log(w),
          Object(o.jsxs)("div", {
            className: "sideNavContainer",
            style:
              "exiting" === e.state
                ? { animation: "moveMainContainer .3s forwards" }
                : "entering" === e.state
                ? { animation: "moveMainContainer .3s reverse backwards" }
                : null,
            children: [
              Object(o.jsxs)(Dn, {
                children: [
                  Object(o.jsx)(Bn, {
                    children: Object(o.jsx)(f.a, { icon: p.e }),
                  }),
                  Object(o.jsx)(In, {
                    type: "text",
                    placeholder: "Search for a Topic",
                    value: a,
                    onChange: function (e) {
                      return l(e.target.value);
                    },
                  }),
                ],
              }),
              b &&
                b.map(function (n, c) {
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
                          children: Object(o.jsx)(M.b, {
                            to: "/".concat(t, "/quiz/").concat(n.topicNumber),
                            children: Object(o.jsxs)("div", {
                              className: "sidenavContent",
                              onClick: e.closeNav,
                              style:
                                n.topicNumber == w
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
      function Ln(e) {
        var n = I(),
          t = n.subContainerEntries,
          r = n.setSubContainer,
          i = n.courseTitleUserIsOn,
          s = Object(c.useState)(""),
          a = Object(y.a)(s, 2),
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
                    Object(o.jsx)(M.b, {
                      to: "/".concat(i, "/quiz/").concat(n.topicNumber),
                      children: Object(o.jsxs)("div", {
                        className: "sidenavContentHeaderSubContainer",
                        onClick: e.closeNav,
                        children: [n.topicNumber, "\xa0\xa0", n.title],
                      }),
                    }),
                    n.entries.map(function (t) {
                      return Object(o.jsx)(W.a, {
                        to: "/"
                          .concat(i, "/quiz/")
                          .concat(n.topicNumber, "#")
                          .concat(t.sectionNumber),
                        children: Object(o.jsx)("div", {
                          onClick: e.closeNav,
                          children: Object(o.jsx)(Cn, {
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
      function Mn(e) {
        var n = I(),
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
            Object(o.jsx)(M.b, {
              to: "/".concat(c.courseTitle.replace(/\s/g, ""), "/start"),
              children: Object(o.jsx)("div", {
                className: "sidenavHeader",
                style: { background: "#e8e2ef" },
                children: c.courseTitle,
              }),
            }),
            Object(o.jsx)(L.a, {
              in: !t,
              timeout: 300,
              unmountOnExit: !0,
              mountOnEnter: !0,
              children: function (n) {
                return Object(o.jsx)(An, { state: n, closeNav: e.click });
              },
            }),
            Object(o.jsx)(L.a, {
              in: t,
              timeout: 300,
              unmountOnExit: !0,
              mountOnEnter: !0,
              children: function (n) {
                return Object(o.jsx)(Ln, { state: n, closeNav: e.click });
              },
            }),
          ],
        });
      }
      var Fn = function (e) {
        return Object(o.jsx)("div", { children: Object(o.jsx)("p", {}) });
      };
      function Qn() {
        var e = Object(d.a)([
          '\n  background: red;\n  font-family: "Quicksand", sans-serif;\n  padding: 7px 12px;\n  /* margin: 20px; */\n  text-transform: uppercase;\n  /* font-size: 15px; */\n  font-size: 2.5vh;\n  overflow: hidden;\n  border: 0;\n  border-radius: 5px;\n  background: #eb3535;\n  color: white;\n  transition: all 0.25s ease;\n  cursor: pointer;\n  height: 6vh;\n\n  &:active {\n    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.5);\n    background: #f2b1ae;\n  }\n',
        ]);
        return (
          (Qn = function () {
            return e;
          }),
          e
        );
      }
      function Un() {
        var e = Object(d.a)([
          '\n  background: red;\n  position: relative;\n  font-family: "Quicksand", sans-serif;\n  padding: 7px 12px;\n  text-transform: uppercase;\n  /* font-size: 15px; */\n  font-size: 4vh;\n  font-weight: bold;\n  overflow: hidden;\n  border: 0;\n  border-radius: 5px;\n  background: #967bb6;\n  color: #f8f6f0;\n  height: 6vh;\n\n  transition: all 0.25s ease;\n  cursor: pointer;\n  margin-right: 20px;\n\n  &:active {\n    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.5);\n    background: #f2b1ae;\n  }\n',
        ]);
        return (
          (Un = function () {
            return e;
          }),
          e
        );
      }
      function Hn() {
        var e = Object(d.a)([
          "\n  width: 6vh; /* Adjust the width as needed */\n  height: 6vh; /* Adjust the height as needed */\n  margin-left: 70px; /* Adjust the margin as needed */\n",
        ]);
        return (
          (Hn = function () {
            return e;
          }),
          e
        );
      }
      function Yn() {
        var e = Object(d.a)(["\n  display: flex;\n  align-items: center;\n"]);
        return (
          (Yn = function () {
            return e;
          }),
          e
        );
      }
      function qn() {
        var e = Object(d.a)([
          "\n  background: #d0bad9;\n  /* top: 80; */\n  height: 6vh;\n  transform: translateY(",
          ");\n  transition: 0.2s;\n  display: flex;\n  justify-content: space-between;\n",
        ]);
        return (
          (qn = function () {
            return e;
          }),
          e
        );
      }
      var Rn = b.b.nav(qn(), function (e) {
          return e.navTop + "vh";
        }),
        Pn = (b.b.div(Yn()), b.b.img(Hn())),
        Wn = b.b.button(Un()),
        Gn = b.b.button(Qn());
      function Vn(e) {
        var n = Object(c.useState)(!1),
          t = Object(y.a)(n, 2),
          r = t[0],
          i = t[1],
          s = I(),
          a = s.courseTitleUserIsOn,
          l = s.courseDetails,
          u = s.setSubContainerEntries,
          d = s.subContainer,
          b = s.setSubContainer;
        s.rowClicked, s.setRowClicked;
        console.log(a, l, e.entryStore);
        var j = Object(c.useState)("0"),
          m = Object(y.a)(j, 2),
          h = (m[0], m[1]),
          x = Object(c.useState)("0"),
          g = Object(y.a)(x, 2),
          v = g[0],
          O = g[1],
          w = Object(c.useState)("0"),
          N = Object(y.a)(w, 2),
          k = N[0],
          C = N[1],
          S = Object(c.useState)("0"),
          T = Object(y.a)(S, 2),
          E = T[0],
          z = T[1],
          D = Object(c.useState)(0),
          B = Object(y.a)(D, 2),
          A = B[0],
          F = B[1],
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
                  e.topicNumber == k && 1 == e.rows
                    ? (console.log(v),
                      console.log(e.entries),
                      b(!0),
                      u(e.entries))
                    : e.topicNumber == k &&
                      0 == e.rows &&
                      1 == d &&
                      (console.log(e.entries), b(!1));
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
            console.log(u), z(u), console.log(e.entryStore);
          }),
          Object(o.jsxs)("div", {
            style: { display: "unset" },
            children: [
              Object(o.jsxs)(Rn, {
                style: { position: "sticky", top: 0, zIndex: 1 },
                navTop: A,
                children: [
                  Object(o.jsxs)("div", {
                    children: [
                      Object(o.jsx)(yn, {
                        click: function () {
                          i(!0);
                        },
                      }),
                      " ",
                      Object(o.jsxs)(M.b, {
                        to: "/",
                        children: [
                          Object(o.jsx)(Pn, { src: kn, alt: "Logo" }),
                          " ",
                        ],
                      }),
                    ],
                  }),
                  Object(o.jsxs)("div", {
                    children: [
                      " ",
                      Object(o.jsx)(M.b, {
                        to:
                          "/".concat(a, "/topic/") +
                          e.selectedTopic.topicNumber,
                        children: Object(o.jsxs)(Gn, {
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
                      Object(o.jsx)(M.b, {
                        to: "/".concat(a, "/quiz/").concat(E),
                        children: Object(o.jsxs)(Wn, {
                          onClick: H,
                          children: [" ", Object(o.jsx)(f.a, { icon: p.a })],
                        }),
                      }),
                      Object(o.jsx)(M.b, {
                        to: "/".concat(a, "/quiz/").concat(k),
                        children: Object(o.jsx)(Wn, {
                          onClick: H,
                          children: Object(o.jsx)(f.a, { icon: p.b }),
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              Object(o.jsx)(L.a, {
                in: r && e.entryStore,
                timeout: 300,
                mountOnEnter: !0,
                unmountOnExit: !0,
                children: function (e) {
                  return Object(o.jsxs)(o.Fragment, {
                    children: [
                      Object(o.jsx)(Mn, { state: e, click: U }),
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
              Object(o.jsx)(Fn, {}),
            ],
          })
        );
      }
      function _n() {
        var e = Object(d.a)([
          '\n  color: #9589be;\n  /* font-size: 1rem; */\n  /* font-size: clamp(4vh, 30px, 30px); */\n  /* font-size: min(2rem, 4vh); */\n  font-size: 4vh;\n  display: block;\n  margin: 30px;\n  font-family: "Quicksand", sans-serif;\n\n  /* @media (max-width: 40em) {\n    font-size: 5vh;\n  } */\n\n  /* justify-content: space-between; */\n',
        ]);
        return (
          (_n = function () {
            return e;
          }),
          e
        );
      }
      function Xn() {
        var e = Object(d.a)([
          '\n  background: red;\n  font-family: "Quicksand", sans-serif;\n  padding: 7px 12px;\n  margin-right: "20px";\n  text-transform: uppercase;\n  /* font-size: 15px; */\n  font-size: 2vh;\n  overflow: hidden;\n  border: 0;\n  border-radius: 5px;\n  background: #e8e2ef;\n  color: #252525;\n  transition: all 0.25s ease;\n  cursor: pointer;\n\n  &:active {\n    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.5);\n    background: #e8e2ef;\n  }\n',
        ]);
        return (
          (Xn = function () {
            return e;
          }),
          e
        );
      }
      function Jn() {
        var e = Object(d.a)([
          '\n  background: red;\n  font-family: "Quicksand", sans-serif;\n  padding: 7px 12px;\n  text-transform: uppercase;\n  font-size: 3vh;\n  overflow: hidden;\n  border: 0;\n  border-radius: 5px;\n  background: #967bb6;\n  color: white;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);\n  transition: all 0.25s ease;\n  cursor: pointer;\n\n  &:active {\n    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.5);\n    background: #f2b1ae;\n  }\n',
        ]);
        return (
          (Jn = function () {
            return e;
          }),
          e
        );
      }
      function Kn() {
        var e = Object(d.a)([
          '\n  background: red;\n  font-family: "Quicksand", sans-serif;\n  padding: 7px 12px;\n  margin: 20px;\n  text-transform: uppercase;\n  /* font-size: 15px; */\n  font-size: 3vh;\n  overflow: hidden;\n  border: 0;\n  border-radius: 5px;\n  background: #eb3535;\n  color: white;\n  transition: all 0.25s ease;\n  cursor: pointer;\n\n  &:active {\n    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.5);\n    background: #f2b1ae;\n  }\n',
        ]);
        return (
          (Kn = function () {
            return e;
          }),
          e
        );
      }
      function $n() {
        var e = Object(d.a)([
          "\n  display: flex;\n  justify-content: center;\n",
        ]);
        return (
          ($n = function () {
            return e;
          }),
          e
        );
      }
      function Zn() {
        var e = Object(d.a)([
          '\n  color: #eb8381;\n  /* font-size: 3vh; */\n  font-family: "Quicksand", sans-serif;\n  justify-content: center;\n  text-align: center;\n  /* margin: 30px 30px; */\n  display: flex;\n\n  /* justify-content: space-between; */\n',
        ]);
        return (
          (Zn = function () {
            return e;
          }),
          e
        );
      }
      var et = b.b.p(Zn()),
        nt = (b.b.div($n()), b.b.button(Kn()), b.b.button(Jn())),
        tt = b.b.button(Xn()),
        ot = b.b.div(_n()),
        ct = function (e) {
          var n = I(),
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
            d = Object(y.a)(u, 2),
            b = d[0],
            f = d[1],
            j = Object(c.useState)([]),
            p = Object(y.a)(j, 2),
            m = p[0],
            h = p[1],
            x = Object(c.useState)("none"),
            g = Object(y.a)(x, 2),
            v = g[0],
            O = (g[1], Object(_e.f)());
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
                z()("/coursesData").then(function (n) {
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
          var w = e.match.params.topicNumber;
          console.log(w), console.log(i);
          var N = Object(c.useState)([]),
            k = Object(y.a)(N, 2),
            C = k[0],
            S = k[1];
          Object(c.useEffect)(
            function () {
              z()(
                "/examplesData?collectionName="
                  .concat(i.courseExamplesCollectionName, "&modelName=")
                  .concat(i.courseExamplesModelName)
              ).then(function (e) {
                S(e.data), console.log(e.data);
              });
            },
            [i]
          ),
            console.log(C);
          var T = Object(c.useState)([]),
            E = Object(y.a)(T, 2),
            D = E[0],
            B = E[1];
          console.log(t),
            Object(c.useEffect)(
              function () {
                z()(
                  "/"
                    .concat(t, "/topicRESTCAll/")
                    .concat(w, "?collectionName=")
                    .concat(i.courseTopicsCollectionName, "&modelName=")
                    .concat(i.courseTopicsModelName)
                ).then(function (e) {
                  B(e.data), console.log(e.data);
                });
              },
              [w, i]
            ),
            console.log(D),
            Object(c.useEffect)(
              function () {
                z()(
                  "/"
                    .concat(t, "/sideBarData?collectionName=")
                    .concat(i.courseTopicsCollectionName, "&modelName=")
                    .concat(i.courseTopicsModelName)
                ).then(function (e) {
                  l(e.data), console.log(e.data);
                });
              },
              [D.topicNumber]
            ),
            console.log(a);
          var A = Object(c.useState)([]),
            L = Object(y.a)(A, 2),
            M = L[0],
            F = L[1];
          Object(c.useEffect)(
            function () {
              z()(
                "/"
                  .concat(t, "/topicNumbersList?collectionName=")
                  .concat(i.courseTopicsCollectionName, "&modelName=")
                  .concat(i.courseTopicsModelName)
              ).then(function (e) {
                F(e.data), console.log(e.data);
              });
            },
            [D.topicNumber]
          ),
            console.log(M);
          var Q = [];
          D.sections &&
            D.sections.map(function (e) {
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
              [D.topicNumber]
            ),
            Object(o.jsx)(Je.Provider, {
              value: [m, h],
              children: Object(o.jsx)(Ke.Provider, {
                value: [b, f],
                children: Object(o.jsxs)(o.Fragment, {
                  children: [
                    Object(o.jsx)(Vn, {
                      entryStore: a,
                      topicNumbersListfromBackEnd: M,
                      selectedTopic: D,
                    }),
                    Object(o.jsxs)(ot, {
                      id: "Topic",
                      children: [
                        D.topicNumber,
                        " \xa0 ",
                        D.topicTitle,
                        "\xa0 \xa0",
                        Object(o.jsx)(tt, {
                          onClick: function () {
                            var e =
                                "Quiz on " +
                                D.topicTitle +
                                "\nFrom the course: " +
                                i.courseTitle,
                              n =
                                "Quiz on " +
                                D.topicTitle +
                                "\nFrom the course: " +
                                i.courseTitle;
                            navigator.share
                              ? navigator.share({
                                  title: e,
                                  text: n,
                                  url: "/#/"
                                    .concat(t, "/quiz/")
                                    .concat(D.topicNumber),
                                })
                              : navigator.clipboard.writeText(
                                  "/#/"
                                    .concat(t, "/quiz/")
                                    .concat(D.topicNumber)
                                );
                          },
                          children: Object(o.jsx)("b", {
                            children: "share quiz",
                          }),
                        }),
                      ],
                    }),
                    b
                      ? Object(o.jsx)(Nn, {
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
                      : Object(o.jsx)(et, {}),
                    R.map(function (n, t) {
                      return Object(o.jsxs)("div", {
                        children: [
                          Object(o.jsx)(un, {
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
                          children: Object(o.jsx)(nt, {
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
        },
        rt = t(72),
        it = t(73),
        st = t(74),
        at = Object(rt.a)({
          apiKey: "AIzaSyAkeYOQ7wCvA-x8QMIWeGAS_mljL0PS7og",
          authDomain: "hh-courses.firebaseapp.com",
          projectId: "hh-courses",
          storageBucket: "hh-courses.appspot.com",
          messagingSenderId: "937262274332",
          appId: "1:937262274332:web:e98b2124fd94f8d284ccd9",
          measurementId: "G-VNQYRG79J4",
        }),
        lt = (Object(it.a)(at), Object(st.a)(at));
      t(105), t(66);
      var ut = function (e) {
        return Object(o.jsx)(M.b, {
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
      var dt = function () {
        var e = Object(c.useState)([]),
          n = Object(y.a)(e, 2),
          t = n[0],
          r = n[1];
        return (
          Object(c.useEffect)(function () {
            z()("/coursesData").then(function (e) {
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
                  return Object(o.jsx)(ut, {
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
      t(67);
      var bt = function (e) {
        var n = I(),
          t = n.entryStore,
          r = n.courseTitleUserIsOn;
        console.log(t);
        var i = Object(c.useState)(!1),
          s = Object(y.a)(i, 2),
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
                    Object(o.jsx)(M.b, {
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
                            children: Object(o.jsx)(W.a, {
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
          : Object(o.jsx)(M.b, {
              to: "/".concat(r, "/topic/").concat(e.topic.topicNumber),
              children: Object(o.jsxs)("div", {
                className: "sidenavContentCC",
                children: [e.topic.topicNumber, "\xa0 \xa0", e.topic.title],
              }),
            });
      };
      function ft() {
        var e = Object(d.a)([
          "\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  left: 10px;\n  font-size: 3vh;\n",
        ]);
        return (
          (ft = function () {
            return e;
          }),
          e
        );
      }
      function jt() {
        var e = Object(d.a)([
          '\n  width: 100%;\n  height: 80px;\n  padding: 10px;\n  padding-left: 100px;\n  font-family: "Quicksand", sans-serif;\n  font-size: 3vh;\n\n  border: none;\n  border-radius: 4px;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n',
        ]);
        return (
          (jt = function () {
            return e;
          }),
          e
        );
      }
      function pt() {
        var e = Object(d.a)([
          "\n  position: relative;\n  width: 100%;\n  max-width: 700px;\n  margin-bottom: 20px;\n  margin-right: 90px;\n",
        ]);
        return (
          (pt = function () {
            return e;
          }),
          e
        );
      }
      function mt() {
        var e = Object(d.a)([
          "\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  height: 100%; /* Ensure the div takes full height */\n",
        ]);
        return (
          (mt = function () {
            return e;
          }),
          e
        );
      }
      var ht = b.b.div(mt()),
        xt = b.b.div(pt()),
        gt = b.b.input(jt()),
        vt = b.b.div(ft());
      var Ot = function () {
        var e = I(),
          n = (e.courseTitleUserIsOn, e.courseDetails, e.entryStore),
          t = Object(c.useState)(""),
          r = Object(y.a)(t, 2),
          i = r[0],
          s = r[1],
          a = Object(c.useState)([]),
          l = Object(y.a)(a, 2),
          u = l[0],
          d = l[1];
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
                    return Object(T.a)(Object(T.a)({}, e), {}, { entries: n });
                  })
                  .filter(function (e) {
                    return e.entries.length > 0;
                  });
                d(e);
              } else d(n);
            },
            [n, i]
          ),
          Object(o.jsxs)("div", {
            className: "courseContent",
            children: [
              Object(o.jsxs)(ht, {
                children: [
                  Object(o.jsx)("div", {
                    className: "courseContentHeader",
                    children: "Course Content",
                  }),
                  Object(o.jsxs)(xt, {
                    children: [
                      Object(o.jsx)(gt, {
                        type: "text",
                        placeholder: "Search for a topic",
                        value: i,
                        onChange: function (e) {
                          return s(e.target.value);
                        },
                      }),
                      Object(o.jsx)(vt, {
                        children: Object(o.jsx)(f.a, { icon: p.e }),
                      }),
                    ],
                  }),
                ],
              }),
              u &&
                u.map(function (e, n) {
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
                            { children: Object(o.jsx)(bt, { topic: e }) },
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
      var wt = function () {
        for (
          var e = I(),
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
      function Nt() {
        var e = Object(d.a)([
          '\n  background: red;\n  font-family: "Quicksand", sans-serif;\n  padding: 7px 12px;\n  /* margin-right: "20px"; */\n  text-transform: uppercase;\n  /* font-size: 15px; */\n  font-size: 5vh;\n  overflow: hidden;\n  border: 0;\n  border-radius: 5px;\n  background: #eb3535;\n  color: white;\n  /* box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5); */\n  transition: all 0.25s ease;\n  cursor: pointer;\n  display: block;\n  margin: 0 auto;\n  /* margin-top: 40px; */\n  display: block;\n  textdecoration: none;\n\n  &:active {\n    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.5);\n    background: #f2b1ae;\n  }\n',
        ]);
        return (
          (Nt = function () {
            return e;
          }),
          e
        );
      }
      function kt() {
        var e = Object(d.a)([
          "\n  background: #eb8381;\n  /* top: 80; */\n  /* height: ",
          "vh; */\n  transform: translateY(",
          ");\n  transition: 0.2s;\n  display: block;\n  justify-content: center;\n  align-items: center;\n\n  font-family: Quicksand;\n  /* justify-content: space-between; */\n",
        ]);
        return (
          (kt = function () {
            return e;
          }),
          e
        );
      }
      var yt = b.b.nav(kt(), 10, function (e) {
          return e.navTop + "vh";
        }),
        Ct = b.b.button(Nt());
      var St = function (e) {
        var n = I(),
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
              z()("/coursesData").then(function (e) {
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
                z()(
                  "/"
                    .concat(t, "/sideBarData?collectionName=")
                    .concat(i.courseTopicsCollectionName, "&modelName=")
                    .concat(i.courseTopicsModelName)
                ).then(function (e) {
                  f(e.data), console.log(e.data);
                }),
                i &&
                  z()(
                    "/"
                      .concat(t, "/topicsData?collectionName=")
                      .concat(i.courseTopicsCollectionName, "&modelName=")
                      .concat(i.courseTopicsModelName)
                  ).then(function (e) {
                    l(e.data), console.log(e.data);
                  }),
                i &&
                  z()(
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
          p = Object(y.a)(j, 2),
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
                  Object(o.jsxs)(yt, {
                    style: { position: "sticky", top: 0, zIndex: 1 },
                    navTop: m,
                    children: [
                      Object(o.jsx)("div", {
                        className: "navHeader",
                        children: i.courseTitle,
                      }),
                      Object(o.jsx)(M.b, {
                        to: "/".concat(t, "/topic/1.1"),
                        style: { margin: "60px" },
                        children: Object(o.jsx)(Ct, { children: " Start" }),
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
                  Object(o.jsx)(wt, { courseDetails: i }),
                  Object(o.jsx)(Ot, {}),
                ],
              })
            : Object(o.jsx)("div", { children: "Loading" })
        );
      };
      var Tt = function () {
          Object(c.useEffect)(function () {
            Notification.requestPermission()
              .then(function (e) {
                if ("granted" === e)
                  return (
                    console.log("Notification permission granted."),
                    lt.getToken()
                  );
                console.log("Notification permission denied.");
              })
              .then(function (e) {
                e && console.log("FCM Token:", e);
              })
              .catch(function (e) {
                console.log("Error getting permission/token:", e);
              }),
              navigator.serviceWorker.addEventListener("message", function (e) {
                var n,
                  t,
                  o =
                    null === (n = e.data) ||
                    void 0 === n ||
                    null === (t = n.firebaseMessaging) ||
                    void 0 === t
                      ? void 0
                      : t.payload;
                o && console.log("Foreground message received:", o);
              });
          }, []);
          var e = (function () {
            var e = Object(u.a)(
              l.a.mark(function e() {
                var n, t;
                return l.a.wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.prev = 0),
                            (e.next = 3),
                            z()("/sendPushNotification", { method: "POST" })
                          );
                        case 3:
                          return (n = e.sent), (e.next = 6), n.text();
                        case 6:
                          (t = e.sent),
                            console.log("Notification response:", t),
                            (e.next = 13);
                          break;
                        case 10:
                          (e.prev = 10),
                            (e.t0 = e.catch(0)),
                            console.error("Error sending notification:", e.t0);
                        case 13:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[0, 10]]
                );
              })
            );
            return function () {
              return e.apply(this, arguments);
            };
          })();
          return Object(o.jsxs)(M.a, {
            children: [
              Object(o.jsxs)(_e.c, {
                children: [
                  Object(o.jsx)(_e.a, { path: "/", exact: !0, component: dt }),
                  Object(o.jsx)(_e.a, {
                    path: "/:courseTitle/topic/:topicNumber",
                    component: Ve,
                  }),
                  Object(o.jsx)(_e.a, {
                    path: "/:courseTitle/quiz/:topicNumber",
                    component: ct,
                  }),
                  Object(o.jsx)(_e.a, {
                    path: "/:courseTitle/start",
                    component: St,
                  }),
                ],
              }),
              Object(o.jsx)(k, {}),
              Object(o.jsx)("div", {
                children: Object(o.jsx)("button", {
                  onClick: e,
                  children: "Send Notification",
                }),
              }),
            ],
          });
        },
        Et = Boolean(
          "localhost" === window.location.hostname ||
            "[::1]" === window.location.hostname ||
            window.location.hostname.match(
              /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
            )
        );
      function zt(e, n) {
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
          children: Object(o.jsx)(B, { children: Object(o.jsx)(Tt, {}) }),
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
              Et
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
                          : zt(e, n);
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
                : zt(n, e);
            });
          }
        })();
    },
    42: function (e, n, t) {},
    49: function (e, n, t) {},
    66: function (e, n, t) {},
    67: function (e, n, t) {},
    71: function (e, n, t) {
      e.exports = { SampleButton: "Buttons_SampleButton__1mfjJ" };
    },
  },
  [[106, 1, 2]],
]);
//# sourceMappingURL=main.8f2552a1.chunk.js.map
