(this["webpackJsonpquran-app"] = this["webpackJsonpquran-app"] || []).push([
  [0],
  {
    151: function (e, n, t) {},
    166: function (e, n, t) {},
    170: function (e, n, t) {
      e.exports = { SampleButton: "Buttons_SampleButton__1mfjJ" };
    },
    175: function (e) {
      e.exports = JSON.parse(
        '[{"exampleId":"2","sectionNumber":"2.1.2","sectionTitle":"The Meaning","type":"Identify","subType":"","question":"What is the meaning of Kalima Tawheed","answers":[{"answer":"\u0645\u064e\u0639\u0652\u0628\u064f\u0648\u062f\u064e \u0628\u0650\u062d\u064e\u0642\u0651\u064d\u200b","explanation":"This only a part of the meaning.","isCorrect":false},{"answer":"\u0644\u0627\u064e \u0645\u064e\u0639\u0652\u0628\u064f\u0648\u062f\u064e \u0628\u0650\u062d\u064e\u0642\u0651\u064d\u200b \u0627\u0650\u0644\u0627\u0651\u064e\u200b \u0627\u0644\u0644\u0647","isCorrect":true},{"answer":" \u0644\u0627 \u0625\u0644\u0647 \u0625\u0644\u0627 \u0627\u0644\u0644\u0647","explanation":"These are the words of Kalima Tawheed, but what is the meaning?","isCorrect":false},{"answer":"\u0644\u0627\u064e \u0645\u064e\u0639\u0652\u0628\u064f\u0648\u062f\u064e \u0628\u0650\u062d\u064e\u0642\u0651\u064d\u200b","explanation":"This only a part of the meaning.","isCorrect":false}]},{"exampleId":"2","sectionNumber":"2.1.2","sectionTitle":"The Meaning","type":"Identify","subType":"","question":"Which word in Kalima Tawheed has the meaning \u0645\u064e\u0639\u0652\u0628\u064f\u0648\u062f\u064e \u0628\u0650\u062d\u064e\u0642\u0651\u064d\u200b","answers":[{"answer":"\u0644\u0627\u064e","explanation":"Try again.","isCorrect":false},{"answer":"\u0627\u0644\u0644\u0647","explanation":"Try again.","isCorrect":false},{"answer":"\u0627\u0650\u0644\u0627\u0651\u064e","explanation":"Try again.","isCorrect":false},{"answer":"\u0627\u0650\u0644\u0647\u064e","isCorrect":true}]},{"exampleId":"2","sectionNumber":"2.1.2","sectionTitle":"The Meaning","type":"Identify","subType":"","question":"What is the translation of \u0645\u064e\u0639\u0652\u0628\u064f\u0648\u062f\u064e \u0628\u0650\u062d\u064e\u0642\u0651\u064d\u200b","answers":[{"answer":"Deity who is truthful","explanation":"Nope","isCorrect":false},{"answer":"Deity who is worshipped","explanation":"Try again.","isCorrect":false},{"answer":"Deity worthy of worship","isCorrect":true},{"answer":"Deity","explanation":"Try again.","isCorrect":false}]}]'
      );
    },
    330: function (e, n, t) {},
    36: function (e, n, t) {},
    408: function (e, n, t) {},
    433: function (e, n) {},
    451: function (e) {
      e.exports = JSON.parse("{}");
    },
    454: function (e, n, t) {
      "use strict";
      t.r(n);
      var o = t(0),
        r = t(1),
        c = t.n(r),
        a = t(30),
        s = t.n(a),
        i = t(2),
        l = t(7),
        u = t.n(l),
        d = c.a.createContext();
      function b() {
        return Object(r.useContext)(d);
      }
      function f(e) {
        var n = Object(r.useState)(!1),
          t = Object(i.a)(n, 2),
          c = t[0],
          a = t[1],
          s = Object(r.useState)(null),
          l = Object(i.a)(s, 2),
          b = l[0],
          f = l[1],
          m = Object(r.useState)(null),
          p = Object(i.a)(m, 2),
          j = p[0],
          h = p[1],
          x = Object(r.useState)([]),
          g = Object(i.a)(x, 2),
          v = g[0],
          O = g[1],
          w = Object(r.useState)([]),
          N = Object(i.a)(w, 2),
          y = N[0],
          k = N[1],
          C = Object(r.useState)([]),
          T = Object(i.a)(C, 2),
          S = T[0],
          E = T[1],
          D = Object(r.useState)(""),
          z = Object(i.a)(D, 2),
          I = z[0],
          L = z[1];
        console.log(I);
        var M = Object(r.useState)({}),
          A = Object(i.a)(M, 2),
          B = A[0],
          F = A[1];
        console.log(B);
        var Q = Object(r.useState)({}),
          R = Object(i.a)(Q, 2),
          U = R[0],
          Y = R[1];
        console.log(B);
        var q = localStorage.getItem("preferredMode"),
          H = Object(r.useState)("dark" === q),
          P = Object(i.a)(H, 2),
          W = P[0],
          V = P[1];
        Object(r.useEffect)(
          function () {
            localStorage.setItem("preferredMode", W ? "dark" : "light");
          },
          [W]
        ),
          Object(r.useEffect)(function () {
            u()("/".concat(I, "/topicsData")).then(function (e) {
              O(e.data), console.log(e.data);
            });
          }, []),
          Object(r.useEffect)(function () {
            u()("/examplesData").then(function (e) {
              k(e.data);
            });
          }, []),
          Object(r.useEffect)(function () {
            u()("/".concat(I, "/sideBarData")).then(function (e) {
              h(e.data);
            });
          }, []),
          Object(r.useEffect)(function () {
            u()("/".concat(I, "/topicNumbersList")).then(function (e) {
              E(e.data);
            });
          }, []);
        var G = {
          subContainer: c,
          setSubContainer: a,
          subContainerEntries: b,
          setSubContainerEntries: f,
          entryStore: j,
          setEntryStore: h,
          topicDatafromBackEnd: v,
          setTopicDatafromBackEnd: O,
          exampleDatafromBackEnd: y,
          setExampleDatafromBackEnd: k,
          topicNumbersListfromBackEnd: S,
          setTopicNumbersListfromBackEnd: E,
          courseTitleUserIsOn: I,
          setCourseTitleUserIsOn: L,
          courseDetails: B,
          setCourseDetails: F,
          selectedLesson: U,
          setSelectedLesson: Y,
          isDarkMode: W,
          setIsDarkMode: V,
        };
        return Object(o.jsx)(d.Provider, { value: G, children: e.children });
      }
      var m = t(4),
        p = t(3);
      t(10), t(54), t(12);
      function j() {
        var e = Object(m.a)([
          "\n  color: #888;\n  margin-right: 10px;\n  &:hover {\n    color: #000;\n  }\n",
        ]);
        return (
          (j = function () {
            return e;
          }),
          e
        );
      }
      function h() {
        var e = Object(m.a)(["\n  margin-top: 10px;\n"]);
        return (
          (h = function () {
            return e;
          }),
          e
        );
      }
      function x() {
        var e = Object(m.a)([
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
        var e = Object(m.a)([
          "\n  background: #f2f2f2;\n  padding: 10px;\n  text-align: center;\n",
        ]);
        return (
          (g = function () {
            return e;
          }),
          e
        );
      }
      p.b.footer(g()), p.b.p(x()), p.b.div(h()), p.b.a(j());
      var v = t(35);
      t.p, t(36);
      function O(e) {
        return Object(o.jsx)("div", {
          className: "hamburger-btn",
          onClick: e.click,
          children: "\u2630",
        });
      }
      var w = t(19),
        N = t(27),
        y = t.n(N),
        k = t(42),
        C = t(34);
      function T(e) {
        var n = b(),
          t = n.setSubContainer,
          c = n.setSubContainerEntries,
          a = n.courseDetails,
          s = Object(r.useState)(""),
          l = Object(i.a)(s, 2),
          u = l[0],
          d = l[1],
          f = Object(r.useState)(""),
          m = Object(i.a)(f, 2),
          p = m[0],
          j = m[1],
          h = Object(r.useState)(!0),
          x = Object(i.a)(h, 2),
          g = x[0],
          v = x[1];
        Object(r.useEffect)(function () {
          var n =
            "https://qaleelo-assets.s3.us-east-2.amazonaws.com/" +
            a.courseTitle.replace(/\s/g, "") +
            "/sectionImages/" +
            e.number +
            ".1.png";
          O(n);
        }, []);
        var O = (function () {
            var e = Object(k.a)(
              y.a.mark(function e(n) {
                var t, o, r, c;
                return y.a.wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (!(t = localStorage.getItem(n))) {
                            e.next = 5;
                            break;
                          }
                          N(t), (e.next = 24);
                          break;
                        case 5:
                          return (
                            (e.prev = 5),
                            (e.next = 8),
                            fetch(n, {
                              method: "GET",
                              headers: { "Cache-Control": "no-cache" },
                            })
                          );
                        case 8:
                          if (!(o = e.sent).ok) {
                            e.next = 18;
                            break;
                          }
                          return (e.next = 12), o.blob();
                        case 12:
                          (r = e.sent),
                            (c = new FileReader()).readAsDataURL(r),
                            (c.onloadend = function () {
                              var e = c.result,
                                t = new Image();
                              (t.src = e),
                                (t.onload = function () {
                                  var e = new C.a().getColor(t),
                                    o = "rgb("
                                      .concat(e[0], ", ")
                                      .concat(e[1], ", ")
                                      .concat(e[2], ")");
                                  N(o), localStorage.setItem(n, o);
                                });
                            }),
                            (e.next = 19);
                          break;
                        case 18:
                          console.error("Image fetch failed:", o.status);
                        case 19:
                          e.next = 24;
                          break;
                        case 21:
                          (e.prev = 21),
                            (e.t0 = e.catch(5)),
                            console.error("Error fetching image:", e.t0);
                        case 24:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[5, 21]]
                );
              })
            );
            return function (n) {
              return e.apply(this, arguments);
            };
          })(),
          N = function (e) {
            d(e);
            var n = T(e);
            j(n > 0.5 ? "#000" : "#fff"), v(!1);
          },
          T = function (e) {
            var n = e.match(/\d+/g);
            return (0.299 * n[0] + 0.587 * n[1] + 0.114 * n[2]) / 255;
          };
        return Object(o.jsxs)("div", {
          className: "sidenavRow",
          style: Object(w.a)(
            Object(w.a)({}, e.styleVariable),
            {},
            { backgroundColor: u }
          ),
          onClick: function () {
            return e.entries && (t(!0), void c(e.entries));
          },
          children: [
            Object(o.jsx)("div", {
              className: "circle",
              children: Object(o.jsx)("span", {
                className: "circle-number",
                children: e.number,
              }),
            }),
            a.courseTitle &&
              Object(o.jsx)("img", {
                className: "sideNavRowImage",
                src:
                  "https://qaleelo-assets.s3.us-east-2.amazonaws.com/" +
                  a.courseTitle.replace(/\s/g, "") +
                  "/sectionImages/" +
                  e.number +
                  ".1.png",
                alt: "",
                crossOrigin: "anonymous",
              }),
            Object(o.jsx)("p", {
              className: "sidenavRowText",
              style: { color: p },
              children: g ? "Loading..." : "".concat(e.title),
            }),
          ],
        });
      }
      var S = t(461);
      var E = t(5);
      function D() {
        var e = Object(m.a)([
          "\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  left: 10px;\n  font-size: 2vh;\n  margin-left: 20%;\n",
        ]);
        return (
          (D = function () {
            return e;
          }),
          e
        );
      }
      function z() {
        var e = Object(m.a)([
          '\n  width: 100%;\n  height: 80px;\n  padding: 10px;\n  padding-left: 70px;\n  font-family: "Quicksand", sans-serif;\n  font-size: 3vh;\n  margin-left: 29%;\n  border: none;\n  border-radius: 4px;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n',
        ]);
        return (
          (z = function () {
            return e;
          }),
          e
        );
      }
      function I() {
        var e = Object(m.a)([
          "\n  position: relative;\n  width: 60%;\n  /* max-width: 700px; */\n  /* margin: 50px; */\n  margin-right: 50px;\n",
        ]);
        return (
          (I = function () {
            return e;
          }),
          e
        );
      }
      function L() {
        var e = Object(m.a)([
          "\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  height: 100%; /* Ensure the div takes full height */\n",
        ]);
        return (
          (L = function () {
            return e;
          }),
          e
        );
      }
      p.b.div(L());
      var M = p.b.div(I()),
        A = p.b.input(z());
      p.b.div(D());
      function B(e) {
        var n = b(),
          t = n.courseTitleUserIsOn,
          c = n.entryStore,
          a = n.isDarkMode,
          s = (n.setIsDarkMode, Object(r.useState)("")),
          l = Object(i.a)(s, 2),
          u = l[0],
          d = l[1],
          f = Object(r.useState)([]),
          m = Object(i.a)(f, 2),
          p = m[0],
          j = m[1];
        Object(r.useEffect)(
          function () {
            if (c && u) {
              var e = c
                .map(function (e) {
                  var n = e.entries.filter(function (e) {
                    var n = e.title.toLowerCase().includes(u.toLowerCase()),
                      t =
                        e.entries &&
                        e.entries.some(function (e) {
                          return e.entries.some(function (e) {
                            return (
                              e.title &&
                              e.title.toLowerCase().includes(u.toLowerCase())
                            );
                          });
                        });
                    return n || t;
                  });
                  return Object(w.a)(Object(w.a)({}, e), {}, { entries: n });
                })
                .filter(function (e) {
                  return e.entries.length > 0;
                });
              j(e);
            } else j(c);
          },
          [c, u]
        ),
          console.log(c),
          console.log(c, t);
        var h = Object(r.useState)(null),
          x = Object(i.a)(h, 2),
          g = (x[0], x[1], window.location.href);
        console.log(g);
        var v = g.split("/");
        console.log(v);
        var O = v[v.length - 1];
        console.log(O);
        var N = [];
        (N = O.includes("%") ? O.split("%23") : O.split("#")), console.log(N);
        var y = N[0];
        N[1];
        return (
          console.log(y),
          Object(o.jsxs)("div", {
            className: "sideNavContainer ".concat(a ? "dark" : "light"),
            style:
              "exiting" === e.state
                ? { animation: "moveMainContainer .3s forwards" }
                : "entering" === e.state
                ? { animation: "moveMainContainer .3s reverse backwards" }
                : null,
            children: [
              Object(o.jsx)(M, {
                style: { marginTop: "3vh" },
                children: Object(o.jsx)(A, {
                  style: { borderRadius: "2% 2% 2% 2% / 15% 15% 15% 15%" },
                  type: "text",
                  placeholder: "Search",
                  value: u,
                  onChange: function (e) {
                    return d(e.target.value);
                  },
                }),
              }),
              Object(o.jsx)("div", {
                className: "sideNavChapterHeader",
                children: Object(o.jsx)("p", { children: "Chapters" }),
              }),
              p &&
                p.map(function (n, r) {
                  return Object(o.jsxs)("div", {
                    className: "sidenavContentChapter",
                    children: [
                      Object(o.jsxs)("div", {
                        className: "sidenavContentHeaderMainMenu",
                        children: [
                          n.topicHeaderNumber && n.topicHeaderNumber,
                          ": \xa0",
                          n.title,
                        ],
                      }),
                      n.entries.map(function (n, r) {
                        return Object(o.jsx)(o.Fragment, {
                          children: n.rows
                            ? Object(o.jsx)(T, {
                                number: n.topicNumber,
                                title: n.title,
                                entries: n.entries,
                                styleVariable:
                                  n.topicNumber == y
                                    ? { background: "#dfdfdf" }
                                    : {},
                              })
                            : Object(o.jsx)(E.b, {
                                to: "/"
                                  .concat(t, "/topic/")
                                  .concat(n.topicNumber),
                                children: Object(o.jsxs)("div", {
                                  className: "sidenavContent",
                                  onClick: e.closeNav,
                                  style:
                                    n.topicNumber == y
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
              Object(o.jsx)("div", { style: { minHeight: "400px" } }),
            ],
          })
        );
      }
      t(111);
      function F(e) {
        var n = b(),
          t = (n.setSubContainer, n.setSubContainerEntries, n.courseDetails),
          c = Object(r.useState)(""),
          a = Object(i.a)(c, 2),
          s = (a[0], a[1]),
          l = Object(r.useState)(""),
          u = Object(i.a)(l, 2),
          d = (u[0], u[1]);
        Object(r.useEffect)(function () {
          var n =
            "https://qaleelo-assets.s3.us-east-2.amazonaws.com/" +
            t.courseTitle.replace(/\s/g, "") +
            "/sectionImages/" +
            e.number +
            ".png";
          f(n);
        }, []);
        var f = (function () {
            var e = Object(k.a)(
              y.a.mark(function e(n) {
                var t, o, r;
                return y.a.wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.prev = 0),
                            (e.next = 3),
                            fetch(n, {
                              method: "GET",
                              headers: { "Cache-Control": "no-cache" },
                            })
                          );
                        case 3:
                          if (!(t = e.sent).ok) {
                            e.next = 13;
                            break;
                          }
                          return (e.next = 7), t.blob();
                        case 7:
                          (o = e.sent),
                            (r = new FileReader()).readAsDataURL(o),
                            (r.onloadend = function () {
                              var e = r.result,
                                n = new Image();
                              (n.src = e),
                                (n.onload = function () {
                                  var e = new C.a().getColor(n),
                                    t = "rgb("
                                      .concat(e[0], ", ")
                                      .concat(e[1], ", ")
                                      .concat(e[2], ")");
                                  m(t);
                                });
                            }),
                            (e.next = 14);
                          break;
                        case 13:
                          console.error("Image fetch failed:", t.status);
                        case 14:
                          e.next = 19;
                          break;
                        case 16:
                          (e.prev = 16),
                            (e.t0 = e.catch(0)),
                            console.error("Error fetching image:", e.t0);
                        case 19:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[0, 16]]
                );
              })
            );
            return function (n) {
              return e.apply(this, arguments);
            };
          })(),
          m = function (e) {
            s(e);
            var n = p(e);
            d(n > 0.5 ? "#000" : "#fff");
          },
          p = function (e) {
            var n = e.match(/\d+/g);
            return (0.299 * n[0] + 0.587 * n[1] + 0.114 * n[2]) / 255;
          };
        console.log(e.entries);
        return Object(o.jsxs)("div", {
          className: "sidenavRowLesson",
          style: {
            backgroundColor: "white",
            width: e.width,
            marginLeft: e.marginLeft,
            borderRadius: e.borderRadius,
          },
          children: [
            Object(o.jsx)("div", {
              className: "circleLesson",
              children: Object(o.jsx)("span", {
                className: "circle-numberLesson",
                children: e.number,
              }),
            }),
            t.courseTitle &&
              Object(o.jsx)("img", {
                className: "sideNavRowLessonImage",
                src:
                  "https://qaleelo-assets.s3.us-east-2.amazonaws.com/" +
                  t.courseTitle.replace(/\s/g, "") +
                  "/sectionImages/" +
                  e.number +
                  ".png",
                alt: "",
                crossOrigin: "anonymous",
              }),
            Object(o.jsx)("p", {
              className: "sidenavRowLessonText",
              children: e.title,
            }),
          ],
        });
      }
      function Q(e) {
        var n = b(),
          t =
            (n.setSubContainer,
            n.setSubContainerEntries,
            n.courseDetails,
            Object(r.useState)("")),
          c = Object(i.a)(t, 2),
          a = (c[0], c[1], Object(r.useState)("")),
          s = Object(i.a)(a, 2);
        s[0], s[1];
        return Object(o.jsxs)("div", {
          className: "sidenavRowLesson",
          style: {
            backgroundColor: "white",
            width: e.width,
            marginLeft: e.marginLeft,
            borderRadius: e.borderRadius,
          },
          children: [
            Object(o.jsx)("div", {
              className: "circleQuiz",
              children: Object(o.jsx)("span", {
                className: "circle-numberLesson",
                children: e.number,
              }),
            }),
            Object(o.jsx)("img", {
              className: "sideNavRowLessonImage",
              src: "https://qaleelo-assets.s3.us-east-2.amazonaws.com/General/QuizImage.png",
              alt: "",
              crossOrigin: "anonymous",
            }),
            Object(o.jsxs)("div", {
              children: [
                Object(o.jsx)("p", {
                  style: {
                    margin: 0,
                    marginTop: "25px",
                    color: "#a678de",
                    fontSize: "2vh",
                    fontWeight: "bold",
                  },
                  children: "Chapter Quiz",
                }),
                Object(o.jsx)("p", {
                  className: "sidenavRowLessonText",
                  style: { marginTop: 0 },
                  children: e.title,
                }),
              ],
            }),
          ],
        });
      }
      function R(e) {
        var n = b(),
          t = n.subContainerEntries,
          c = n.setSubContainer,
          a = n.courseTitleUserIsOn,
          s = n.isDarkMode,
          l = Object(r.useState)(""),
          u = Object(i.a)(l, 2),
          d = u[0],
          f = u[1];
        return (
          Object(r.useEffect)(function () {
            var e = window.location.href;
            console.log(e);
            var n = e.split("/");
            console.log(n);
            var t = n[n.length - 1];
            console.log(t);
            var o = [];
            (o = t.includes("%") ? t.split("%23") : t.split("#")),
              console.log(o);
            var r = o[1];
            console.log(r), f(r);
          }, []),
          Object(o.jsxs)("div", {
            className: "sub-container ".concat(s ? "dark" : "light"),
            style:
              "entering" === e.state
                ? { animation: "moveSubContainer .3s forwards" }
                : "entered" === e.state
                ? { transform: "translateX(0px)" }
                : { animation: "moveSubContainer .3s reverse backwards" },
            children: [
              Object(o.jsx)("div", {
                className: "sub-header",
                onClick: function () {
                  return c(!1);
                },
                children: Object(o.jsx)("i", { class: "fas fa-arrow-left" }),
              }),
              Object(o.jsx)("div", {
                className: "sideNavChapterHeader",
                children: Object(o.jsx)("p", { children: "Lessons" }),
              }),
              t.map(function (n, r) {
                return Object(o.jsxs)(o.Fragment, {
                  children: [
                    Object(o.jsxs)("div", {
                      style: {},
                      className: "LessonTitleContainerOnSideNav",
                      children: [
                        Object(o.jsxs)("span", {
                          className: "LessonNumber",
                          children: ["Chapter ", n.topicNumber],
                        }),
                        " ",
                        Object(o.jsx)("br", {}),
                        Object(o.jsx)("span", {
                          className: "LessonTitle",
                          children: n.title,
                        }),
                      ],
                    }),
                    n.entries.map(function (n) {
                      return Object(o.jsx)(E.b, {
                        to: "/".concat(a, "/lesson/").concat(n.sectionNumber),
                        children: Object(o.jsx)("div", {
                          onClick: e.closeNav,
                          children: Object(o.jsx)(F, {
                            number: n.sectionNumber,
                            title: n.title,
                            styleVariable:
                              n.sectionNumber == d
                                ? { background: "#ebebeb" }
                                : {},
                          }),
                        }),
                      });
                    }),
                    r === t.length - 1 &&
                      Object(o.jsx)(E.b, {
                        to: "/".concat(a, "/quiz/").concat(n.topicNumber),
                        children: Object(o.jsx)("div", {
                          onClick: e.closeNav,
                          style: { marginTop: "100px" },
                          children: Object(o.jsx)(Q, {
                            title: n.title,
                            number: n.topicNumber,
                          }),
                        }),
                      }),
                  ],
                });
              }),
              Object(o.jsx)("div", { style: { minHeight: "400px" } }),
            ],
          })
        );
      }
      function U(e) {
        var n = b(),
          t = n.subContainer,
          r =
            (n.courseTitleUserIsOn, n.setCourseTitleUserIsOn, n.courseDetails);
        n.setCourseDetails,
          n.topicDatafromBackEnd,
          n.setTopicDatafromBackEnd,
          n.exampleDatafromBackEnd,
          n.setExampleDatafromBackEnd,
          n.entryStore,
          n.setEntryStore,
          n.isDarkMode,
          n.setIsDarkMode;
        return Object(o.jsxs)("div", {
          className: "sidenav",
          style:
            "entering" === e.state
              ? { animation: "moveSideBar .3s forwards" }
              : "entered" === e.state
              ? { transform: "translateX(-0px)" }
              : { animation: "moveSideBar .3s reverse backwards" },
          children: [
            Object(o.jsxs)("div", {
              className: "sidenavHeader",
              style: { background: "#dd6260" },
              children: [
                r.courseTitle &&
                  Object(o.jsx)("img", {
                    className: "courseSideNavImage",
                    src:
                      "https://qaleelo-assets.s3.us-east-2.amazonaws.com/" +
                      r.courseTitle.replace(/\s/g, "") +
                      "/courseImage/" +
                      r.courseTitle.replace(/\s/g, "") +
                      ".png",
                    alt: "",
                  }),
                Object(o.jsx)("div", {
                  className: "newCloseBtn",
                  onClick: e.click,
                  children: Object(o.jsx)("i", { class: "fa-solid fa-xmark" }),
                }),
              ],
            }),
            Object(o.jsx)(S.a, {
              in: !t,
              timeout: 300,
              unmountOnExit: !0,
              mountOnEnter: !0,
              children: function (n) {
                return Object(o.jsx)(B, { state: n, closeNav: e.click });
              },
            }),
            Object(o.jsx)(S.a, {
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
      function Y() {
        var e = Object(m.a)([
          '\n  background: none;\n  border: none;\n  font-family: "Quicksand", sans-serif;\n  font-size: 1.5vh;\n  font-weight: bold;\n  color: #f8f6f0;\n  cursor: pointer;\n  outline: none;\n  position: relative;\n  padding: 0;\n  margin: 0;\n  width: 70px;\n  height: 35px;\n  background-color: #bbb;\n  border-radius: 35px;\n  transition: background-color 0.3s;\n\n  &:after {\n    content: "";\n    position: absolute;\n    top: 2.5px;\n    left: 2.5px;\n    width: 30px;\n    height: 30px;\n    border-radius: 50%;\n    background-color: white;\n    transition: left 0.3s;\n  }\n\n  &.study {\n    background-color: #eb8381;\n    &:after {\n      left: 37.5px;\n    }\n  }\n',
        ]);
        return (
          (Y = function () {
            return e;
          }),
          e
        );
      }
      function q() {
        var e = Object(m.a)([
          '\n  background: red;\n  position: relative;\n  font-family: "Quicksand", sans-serif;\n  padding: 7px 12px;\n  text-transform: uppercase;\n  /* font-size: 15px; */\n  font-size: 4vh;\n  font-weight: bold;\n  overflow: hidden;\n  border: 0;\n  border-radius: 5px;\n  background: #eb3535;\n  color: #f8f6f0;\n  height: 6vh;\n\n  transition: all 0.25s ease;\n  cursor: pointer;\n  margin-right: 20px;\n\n  &:active {\n    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.5);\n    background: #f2b1ae;\n  }\n',
        ]);
        return (
          (q = function () {
            return e;
          }),
          e
        );
      }
      function H() {
        var e = Object(m.a)([
          "\n  width: 6vh; /* Adjust the width as needed */\n  height: 6vh; /* Adjust the height as needed */\n  margin-left: 70px; /* Adjust the margin as needed */\n",
        ]);
        return (
          (H = function () {
            return e;
          }),
          e
        );
      }
      function P() {
        var e = Object(m.a)(["\n  display: flex;\n  align-items: center;\n"]);
        return (
          (P = function () {
            return e;
          }),
          e
        );
      }
      function W() {
        var e = Object(m.a)([
          '\n  font-family: "Quicksand", sans-serif;\n  padding: 7px 12px;\n  /* margin: 20px; */\n  text-transform: uppercase;\n  /* font-size: 15px; */\n  font-size: 2.5vh;\n  overflow: hidden;\n  border: 0;\n  border-radius: 5px;\n  background: #8747d4;\n  color: white;\n  transition: all 0.25s ease;\n  cursor: pointer;\n  height: 6vh;\n\n  &:active {\n    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.5);\n    background: #f2b1ae;\n  }\n',
        ]);
        return (
          (W = function () {
            return e;
          }),
          e
        );
      }
      function V() {
        var e = Object(m.a)([
          "\n  background: #eb8381;\n  /* top: 80; */\n  height: 6vh;\n  transform: translateY(",
          ");\n  transition: 0.2s;\n  display: flex;\n  justify-content: space-between;\n",
        ]);
        return (
          (V = function () {
            return e;
          }),
          e
        );
      }
      p.b.nav(V(), function (e) {
        return e.navTop + "vh";
      }),
        p.b.button(W()),
        p.b.div(P()),
        p.b.img(H()),
        p.b.button(q()),
        p.b.button(Y());
      t(328), t(170);
      function G() {
        var e = Object(m.a)([
          '\n  font-family: "Century Gothic", serif;\n  padding: 10px 50px;\n  color: ',
          ";\n  font-size: 50px;\n",
        ]);
        return (
          (G = function () {
            return e;
          }),
          e
        );
      }
      p.b.button(G(), function (e) {
        return e.mouse ? "red" : "blue";
      });
      function _() {
        var e = Object(m.a)([
          '\n  background: red;\n  font-family: "Quicksand", sans-serif;\n  padding: 7px 12px;\n  text-transform: uppercase;\n  font-size: 25px;\n  overflow: hidden;\n  border: 0;\n  border-radius: 5px;\n  background: #eb3535;\n  color: white;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);\n  transition: all 0.25s ease;\n\n  &:active {\n    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.5);\n    background: #f2b1ae;\n  }\n',
        ]);
        return (
          (_ = function () {
            return e;
          }),
          e
        );
      }
      function J() {
        var e = Object(m.a)([
          '\n  background: red;\n  font-family: "Quicksand", sans-serif;\n  padding: 7px 12px;\n  text-transform: uppercase;\n  font-size: 2vh;\n  overflow: hidden;\n  border: 0;\n  border-radius: 5px;\n  background: #eb3535;\n  color: white;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);\n  transition: all 0.25s ease;\n  cursor: pointer;\n  &:active {\n    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.5);\n    background: #f2b1ae;\n  }\n',
        ]);
        return (
          (J = function () {
            return e;
          }),
          e
        );
      }
      p.b.button(J()), p.b.button(_());
      function K() {
        var e = Object(m.a)(["\n          fadeIn 1s\n        "]);
        return (
          (K = function () {
            return e;
          }),
          e
        );
      }
      function X() {
        var e = Object(m.a)(["\n          shakeY 1s\n        "]);
        return (
          (X = function () {
            return e;
          }),
          e
        );
      }
      function $() {
        var e = Object(m.a)([
          "\n  font-size: 2vh;\n  display: ",
          ";\n  align-items: center;\n  justify-content: center;\n  animation: ",
          ";\n",
        ]);
        return (
          ($ = function () {
            return e;
          }),
          e
        );
      }
      function Z() {
        var e = Object(m.a)(["\n          ", " 400ms\n        "]);
        return (
          (Z = function () {
            return e;
          }),
          e
        );
      }
      function ee() {
        var e = Object(m.a)([
          "\n          ",
          " 1s cubic-bezier(1,-0.74,.42,.57)\n        ",
        ]);
        return (
          (ee = function () {
            return e;
          }),
          e
        );
      }
      function ne() {
        var e = Object(m.a)([
          "\n  font-size: 2.2vh;\n  text-align: center;\n  font-family: Quicksand;\n  border-radius: 15px;\n  padding: 10px;\n  color: #252525;\n  display: flex;\n  background: ",
          ";\n  margin-bottom: 10px;\n  margin-top: 10px;\n  transition: transform 300ms;\n  justify-content: center;\n  animation: ",
          ";\n\n  &:hover {\n    cursor: pointer;\n    box-shadow: 0 0.1rem 0.5rem rgba(0, 0, 0, 0.2);\n    transform: scale(1.02);\n  }\n",
        ]);
        return (
          (ne = function () {
            return e;
          }),
          e
        );
      }
      function te() {
        var e = Object(m.a)([
          "\n  /* font-size: 17px; */\n  font-size: 2.5vh;\n  font-weight: bold;\n  text-align: center;\n  color: #eb8381;\n  padding: 20px;\n",
        ]);
        return (
          (te = function () {
            return e;
          }),
          e
        );
      }
      function oe() {
        var e = Object(m.a)([
          '\n  /* box-shadow: 0 0.1rem 0.5rem rgba(0, 0, 0, 0.2); */\n  border-radius: 5px;\n  padding: 10px;\n  /* background: #252525; */\n  margin-top: 40px;\n  font-family: "Quicksand", sans-serif;\n',
        ]);
        return (
          (oe = function () {
            return e;
          }),
          e
        );
      }
      function re() {
        var e = Object(m.a)(["\n0%{opacity: 0}\n100%{opacity: 1}\n"]);
        return (
          (re = function () {
            return e;
          }),
          e
        );
      }
      function ce() {
        var e = Object(m.a)([
          "\n0%{transform: scale(1)}\n50%{transform: scale(2)}\n100%{transform: scale(1)}\n",
        ]);
        return (
          (ce = function () {
            return e;
          }),
          e
        );
      }
      function ae() {
        var e = Object(m.a)([
          "\n0%{transform: scale(1)}\n20%{transform: scale(1.2)}\n50%{transform: scale(1)}\n75%{transform: scale(1.2)}\n100%{transform: scale(1)}\n",
        ]);
        return (
          (ae = function () {
            return e;
          }),
          e
        );
      }
      var se = Object(p.c)(ae()),
        ie = Object(p.c)(ce()),
        le = (Object(p.c)(re()), p.b.div(oe())),
        ue = p.b.div(te()),
        de = p.b.div(
          ne(),
          function (e) {
            return e.answerClicked == e.answer ? e.answerColor : "#fcebeb";
          },
          function (e) {
            return e.answerClicked == e.answer && "#DAF7A6" == e.answerColor
              ? Object(p.a)(ee(), ie)
              : e.answerClicked == e.answer && "#ff726f" == e.answerColor
              ? Object(p.a)(Z(), se)
              : "none";
          }
        ),
        be = p.b.div(
          $(),
          function (e) {
            return e.answerClicked == e.answer ? "flex" : "none";
          },
          function (e) {
            return e.answerClicked == e.answer && "#DAF7A6" == e.answerColor
              ? Object(p.a)(X())
              : e.answerClicked == e.answer && "#ff726f" == e.answerColor
              ? Object(p.a)(K())
              : "none";
          }
        ),
        fe = function (e) {
          console.log(e);
          var n = b(),
            t = n.exampleDatafromBackEnd;
          n.courseTitleUserIsOn;
          console.log(t);
          var c = Object(r.useState)("#fcebeb"),
            a = Object(i.a)(c, 2),
            s = a[0],
            l = a[1],
            u = Object(r.useState)("NoAnswer"),
            d = Object(i.a)(u, 2),
            f = d[0],
            m = d[1],
            p = Object(r.useState)(!1),
            j = Object(i.a)(p, 2),
            h = (j[0], j[1]);
          var x = Object(r.useState)(
              e.sectionExample && e.sectionExample.answers
            ),
            g = Object(i.a)(x, 2),
            v = g[0],
            O = g[1];
          Object(r.useEffect)(
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
              O(n);
            },
            [e.sectionExample]
          ),
            console.log(e.sectionExample && e.sectionExample.answers);
          var w = [],
            N = t.filter(function (n) {
              return n.sectionNumber == e.section;
            });
          return (
            (w =
              N.length > 3
                ? (function (e, n) {
                    for (var t = [], o = 0; o < n; ) {
                      var r = Math.floor(Math.random() * e.length);
                      t.includes(e[r]) || (t.push(e[r]), o++);
                    }
                    return t;
                  })(N, 3)
                : N),
            console.log(w),
            Object(o.jsxs)(le, {
              children: [
                Object(o.jsx)(ue, {
                  children: e.sectionExample && e.sectionExample.question,
                }),
                v &&
                  v.map(function (e) {
                    return Object(o.jsxs)(o.Fragment, {
                      children: [
                        Object(o.jsx)(de, {
                          onClick: function () {
                            return (
                              (n = e.isCorrect),
                              (t = e.answer),
                              m(t),
                              h(!0),
                              console.log(f),
                              void (1 == n
                                ? (l("#DAF7A6"), console.log(s))
                                : l("#ff726f"))
                            );
                            var n, t;
                          },
                          answerColor: s,
                          answer: e.answer,
                          answerClicked: f,
                          children: Object(o.jsx)("p", { children: e.answer }),
                        }),
                        Object(o.jsx)(be, {
                          answerClicked: f,
                          answer: e.answer,
                          answerColor: s,
                          children:
                            0 == e.isCorrect
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
                                    Object(o.jsx)("p", {
                                      children: "Correct!",
                                    }),
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
      function me() {
        var e = Object(m.a)([
          "\n  /* font-size: 15px; */\n  font-size: 2vh;\n  margin-left: 30px;\n",
        ]);
        return (
          (me = function () {
            return e;
          }),
          e
        );
      }
      function pe() {
        var e = Object(m.a)([
          '\n  background: #eb8381;\n  align-items: center;\n  color: #252525;\n  /* font-size: 18px; */\n  font-size: 2.5vh;\n  display: inline-block;\n  margin-bottom: 10px;\n  padding-right: 10px;\n  font-family: "Quicksand", sans-serif;\n  border-radius: 5px;\n',
        ]);
        return (
          (pe = function () {
            return e;
          }),
          e
        );
      }
      function je() {
        var e = Object(m.a)(["\n  margin: 0 auto;\n"]);
        return (
          (je = function () {
            return e;
          }),
          e
        );
      }
      function he() {
        var e = Object(m.a)(["\n          ", " 2s\n        "]);
        return (
          (he = function () {
            return e;
          }),
          e
        );
      }
      function xe() {
        var e = Object(m.a)([
          '\n  /* height: 30vh; */\n  /* font-size: 20px; */\n  /* display: flex;\n  flex-direction: column; */\n  background: #252525;\n  color: #f8f6f0;\n  font-size: 2vh;\n  white-space: pre-line;\n  margin: 10px 30px;\n  padding: 20px;\n  box-shadow: 0 0.1rem 0.5rem rgba(0, 0, 0, 0.5);\n  display: block;\n  position: relative;\n  align-items: center;\n  font-family: "Quicksand", sans-serif;\n  border-radius: 1rem;\n  /* padding: 20px; */\n  animation: ',
          ';\n\n  .sectionImage {\n    display: block;\n    margin: 0 auto; /* This will center the image horizontally */\n    border-radius: 4rem;\n    width: 100%;\n    height: 100%;\n    object-fit: contain;\n  }\n\n  @media (min-width: 1050px) {\n    /* Apply styles for desktop devices with a screen width of 768px and above */\n    .sectionImage {\n      max-width: 25%; /* Adjust the maximum width as needed for desktop view */\n      margin-right: 60px; /* Add some spacing between the image and text on desktop */\n      display: inline;\n      vertical-align: middle;\n    }\n\n    .sectionText {\n      display: inline-block;\n      max-width: 70%;\n      font-size: 3vh;\n      vertical-align: middle;\n    }\n  }\n\n  .complete-button {\n    background: #fcebeb;\n    color: black;\n    padding: 7px 12px;\n    border: none;\n    border-radius: 15px;\n    cursor: pointer;\n    font-size: 14px;\n    display: block;\n    margin: auto;\n    font-family: "Quicksand", sans-serif;\n    font-size: 2vh;\n    margin-top: 75px;\n    text-transform: uppercase;\n    cursor: pointer;\n  }\n\n  .completed-button {\n    background: #18a558;\n    color: white;\n    padding: 7px 12px;\n    border: none;\n    border-radius: 15px;\n    cursor: pointer;\n    font-size: 14px;\n    display: block;\n    margin: auto;\n    font-family: "Quicksand", sans-serif;\n    font-size: 2.5vh;\n    margin-top: 75px;\n    text-transform: uppercase;\n    cursor: pointer;\n  }\n',
        ]);
        return (
          (xe = function () {
            return e;
          }),
          e
        );
      }
      function ge() {
        var e = Object(m.a)([
          '\n  color: #eb8381;\n  /* font-size: 20px; */\n  /* font-size: clamp(3vh, 20px, 20px); */\n  font-size: 3vh;\n  display: block;\n  margin-bottom: 50px;\n  font-family: "Quicksand", sans-serif;\n',
        ]);
        return (
          (ge = function () {
            return e;
          }),
          e
        );
      }
      function ve() {
        var e = Object(m.a)([
          '\n  background: #f8f6f0;\n  color: #252525;\n  /* height: 30vh; */\n  /* font-size: 1.2rem; */\n  font-size: 2.2vh;\n\n  white-space: pre-line;\n  margin: 10px 30px;\n  padding: 20px;\n  box-shadow: 0 0.1rem 0.1rem rgba(0, 0, 0, 0.2);\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  position: relative;\n\n  font-family: "Quicksand", sans-serif;\n  border-radius: 1rem;\n  /* padding: 20px; */\n',
        ]);
        return (
          (ve = function () {
            return e;
          }),
          e
        );
      }
      function Oe() {
        var e = Object(m.a)([
          '\n  color: #eb8381;\n  /* font-size: 1rem; */\n  /* font-size: clamp(4vh, 30px, 30px); */\n  /* font-size: min(2rem, 4vh); */\n  font-size: 4vh;\n  display: block;\n  margin: 30px;\n  font-family: "Quicksand", sans-serif;\n\n  /* @media (max-width: 40em) {\n    font-size: 5vh;\n  } */\n\n  /* justify-content: space-between; */\n',
        ]);
        return (
          (Oe = function () {
            return e;
          }),
          e
        );
      }
      function we() {
        var e = Object(m.a)([
          '\n  background: red;\n  font-family: "Quicksand", sans-serif;\n  padding: 7px 12px;\n  margin: 20px;\n  text-transform: uppercase;\n  /* font-size: 15px; */\n  font-size: 3vh;\n  overflow: hidden;\n  border: 0;\n  border-radius: 5px;\n  background: #967bb6;\n  color: white;\n  transition: all 0.25s ease;\n  cursor: pointer;\n\n  &:active {\n    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.5);\n    background: #f2b1ae;\n  }\n',
        ]);
        return (
          (we = function () {
            return e;
          }),
          e
        );
      }
      function Ne() {
        var e = Object(m.a)([
          '\n  background: red;\n  font-family: "Quicksand", sans-serif;\n  padding: 7px 12px;\n  margin-right: "20px";\n  text-transform: uppercase;\n  /* font-size: 15px; */\n  font-size: 2vh;\n  overflow: hidden;\n  border: 0;\n  border-radius: 5px;\n  background: #fcebeb;\n  color: #252525;\n  transition: all 0.25s ease;\n  cursor: pointer;\n\n  &:active {\n    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.5);\n    background: #fcebeb;\n  }\n',
        ]);
        return (
          (Ne = function () {
            return e;
          }),
          e
        );
      }
      function ye() {
        var e = Object(m.a)([
          "\n0%{transform: scale(1); box-shadow: 0 0 0px rgba(0,0,0,0);}\n20%{transform: scale(1.01); background: #fcebeb; box-shadow: 0 0 20px #eb8381;}\n50%{transform: scale(1); box-shadow: 0 0 0px rgba(0,0,0,0);}\n",
        ]);
        return (
          (ye = function () {
            return e;
          }),
          e
        );
      }
      navigator.vibrate =
        navigator.vibrate ||
        navigator.webkitVibrate ||
        navigator.mozVibrate ||
        navigator.msVibrate;
      var ke = Object(p.c)(ye());
      console.log("Rendered");
      var Ce = p.b.button(Ne()),
        Te = (p.b.button(we()), p.b.div(Oe())),
        Se = p.b.div(ve()),
        Ee = p.b.p(ge()),
        De = p.b.div(xe(), function (e) {
          return e.sectionNumber == e.currentUrlSectionID
            ? Object(p.a)(he(), ke)
            : "none";
        }),
        ze = p.b.div(je()),
        Ie = p.b.p(pe()),
        Le = p.b.p(me()),
        Me = function (e) {
          var n = b(),
            t = n.courseTitleUserIsOn,
            c = n.setCourseTitleUserIsOn,
            a = n.courseDetails,
            s = n.setCourseDetails;
          console.log(a),
            Object(r.useEffect)(function () {
              c(e.match.params.courseTitle);
            }, []),
            console.log(t),
            console.log(e.match.params.courseTitle),
            Object(r.useEffect)(
              function () {
                u()("/coursesData").then(function (n) {
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
            console.log(a);
          var l = Object(r.useState)([]),
            d = Object(i.a)(l, 2),
            f = d[0],
            m = d[1],
            p = Object(r.useState)([]),
            j = Object(i.a)(p, 2),
            h = j[0],
            x = j[1];
          console.log(e.match), console.log(e.match.params.topicNumber);
          var g = e.match.params.topicNumber;
          if (g.includes("%")) {
            var v = g.split("%");
            g = v[0];
          }
          console.log(g),
            Object(r.useEffect)(
              function () {
                u()(
                  "/"
                    .concat(t, "/topicRESTCAll/")
                    .concat(g, "?collectionName=")
                    .concat(a.courseTopicsCollectionName, "&modelName=")
                    .concat(a.courseTopicsModelName)
                ).then(function (e) {
                  x(e.data), console.log(e.data);
                });
              },
              [g, a]
            ),
            Object(r.useEffect)(
              function () {
                u()(
                  "/"
                    .concat(t, "/lessonRESTCAll/2.1.2?collectionName=")
                    .concat(a.courseTopicsCollectionName, "&modelName=")
                    .concat(a.courseTopicsModelName)
                ).then(function (e) {
                  console.log(e.data);
                });
              },
              [g, a]
            ),
            console.log(h),
            Object(r.useEffect)(
              function () {
                u()(
                  "/examplesData?collectionName="
                    .concat(a.courseExamplesCollectionName, "&modelName=")
                    .concat(a.courseExamplesModelName)
                ).then(function (e) {
                  m(e.data), console.log(e.data);
                });
              },
              [g, a]
            ),
            console.log(f);
          var O = window.location.href;
          console.log(O);
          var w = O.split("/");
          console.log(w);
          var N = w[w.length - 1];
          console.log(N);
          var y = [];
          (y = N.includes("%") ? N.split("%23") : N.split("#")), console.log(y);
          var k = y[1];
          console.log(k),
            Object(r.useEffect)(
              function () {
                void 0 === k && window.scrollTo({ top: 0, behavior: "smooth" });
              },
              [O]
            ),
            Object(r.useEffect)(function () {
              if (k) {
                var e = document.getElementById(k);
                e && e.scrollIntoView();
              }
            }),
            console.log(O);
          var C = [];
          h.sections &&
            h.sections.map(function (e) {
              return C.push(e.sectionNumber);
            }),
            console.log(C);
          var T = function (e) {
              var n =
                0 !== f.length &&
                f.filter(function (n) {
                  return n.sectionNumber == e;
                });
              return n[Math.floor(Math.random() * n.length)];
            },
            S = function (e, n) {
              for (var t = [], o = 0; o < n; ) {
                var r = Math.floor(Math.random() * e.length);
                t.includes(e[r]) || (t.push(e[r]), o++);
              }
              return t;
            },
            E = Math.ceil(100 / C.length);
          console.log(E);
          var D = [],
            z = [],
            I = [],
            L = [];
          C.map(function (e) {
            var n =
              0 !== f.length &&
              f.filter(function (n) {
                return n.sectionNumber == e;
              });
            console.log(n),
              n.length > E
                ? ((D = S(n, E)), console.log(D), (I = z.concat(I, D)))
                : (I = z.concat(I, n)),
              console.log(z),
              console.log(I);
          }),
            console.log(z),
            console.log(I),
            (L = I.length > 100 ? S(I, 100) : I),
            console.log(L);
          var M = Object(r.useState)([]),
            A = Object(i.a)(M, 2);
          A[0], A[1];
          return "undefined" === h || null === h || 0 === h.length
            ? Object(o.jsx)("div", { children: "Loading" })
            : Object(o.jsxs)("div", {
                children: [
                  Object(o.jsxs)(Te, {
                    id: "Topic",
                    children: [
                      h.topicNumber,
                      " \xa0 ",
                      h.topicTitle,
                      h.topicYoutubeLink &&
                        Object(o.jsx)("a", {
                          href: h.topicYoutubeLink,
                          style: { fontSize: 25, marginLeft: "20px" },
                          target: "_blank",
                          rel: "noopener noreferrer",
                          children: Object(o.jsx)(Ce, {
                            children: Object(o.jsx)("b", { children: "Watch" }),
                          }),
                        }),
                      "\xa0 \xa0",
                      Object(o.jsx)(Ce, {
                        onClick: function () {
                          var e =
                              a.courseTitle +
                              "\nTopic " +
                              h.topicNumber +
                              " - " +
                              h.topicTitle,
                            n =
                              a.courseTitle +
                              "\nTopic " +
                              h.topicNumber +
                              " - " +
                              h.topicTitle +
                              "\n\n" +
                              h.topicDescription;
                          navigator.share
                            ? navigator.share({
                                title: e,
                                text: n,
                                url: "/#/"
                                  .concat(t, "/topic/")
                                  .concat(h.topicNumber),
                              })
                            : navigator.clipboard.writeText(
                                "/#/".concat(t, "/topic/").concat(h.topicNumber)
                              );
                        },
                        children: Object(o.jsx)("b", { children: "share" }),
                      }),
                    ],
                  }),
                  Object(o.jsx)(Se, {
                    children: Object(o.jsx)("p", {
                      children: h.topicDescription,
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
                  h.sections &&
                    h.sections.map(function (e) {
                      return Object(o.jsxs)("div", {
                        children: [
                          Object(o.jsxs)(De, {
                            currentUrlSectionID: k,
                            sectionNumber: e.sectionNumber,
                            id: e.sectionNumber,
                            children: [
                              Object(o.jsxs)(Ee, {
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
                                      children: Object(o.jsx)(Ce, {
                                        children: Object(o.jsx)("b", {
                                          children: "Watch",
                                        }),
                                      }),
                                    }),
                                  "\xa0 \xa0",
                                  Object(o.jsx)(Ce, {
                                    onClick: function () {
                                      var n = decodeURIComponent(
                                          "/#/"
                                            .concat(t, "/topic/")
                                            .concat(h.topicNumber, "%23")
                                            .concat(e.sectionNumber)
                                        ),
                                        o =
                                          a.courseTitle +
                                          "\nSection " +
                                          e.sectionNumber +
                                          " - " +
                                          e.sectionTitle +
                                          "\n\n" +
                                          e.sectionDescription +
                                          "\n\n" +
                                          e.sectionNotes.join(" "),
                                        r =
                                          a.courseTitle +
                                          "\nSection " +
                                          e.sectionNumber +
                                          " - " +
                                          e.sectionTitle;
                                      navigator.share
                                        ? navigator.share({
                                            title: r,
                                            text: o,
                                            url: n,
                                          })
                                        : navigator.clipboard.writeText(
                                            "/#/"
                                              .concat(t, "/topic/")
                                              .concat(h.topicNumber, "#")
                                              .concat(e.sectionNumber)
                                          );
                                    },
                                    children: Object(o.jsx)("b", {
                                      children: "share",
                                    }),
                                  }),
                                ],
                              }),
                              Object(o.jsxs)(ze, {
                                children: [
                                  Object(o.jsx)("img", {
                                    className: "sectionImage",
                                    src:
                                      "https://qaleelo-assets.s3.us-east-2.amazonaws.com/" +
                                      a.courseTitle.replace(/\s/g, "") +
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
                                          return Object(o.jsx)(o.Fragment, {
                                            children:
                                              0 !== e.length &&
                                              Object(o.jsxs)("div", {
                                                children: [
                                                  Object(o.jsx)(Ie, {
                                                    children: Object(o.jsx)(
                                                      "div",
                                                      {
                                                        className: "noteTitle",
                                                        children: Object(
                                                          o.jsxs
                                                        )("b", {
                                                          children: [
                                                            "\xa0 Note ",
                                                            n + 1,
                                                          ],
                                                        }),
                                                      }
                                                    ),
                                                  }),
                                                  Object(o.jsx)(Le, {
                                                    className:
                                                      "noteDescription",
                                                    children: e,
                                                  }),
                                                ],
                                              }),
                                          });
                                        }),
                                    ],
                                  }),
                                ],
                              }),
                              a.isQuizInStudyMode &&
                                Object(o.jsx)(fe, {
                                  topicNumber: g,
                                  section: e.sectionNumber,
                                  sectionTitle: e.sectionTitle,
                                  sectionExample: T(e.sectionNumber),
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
              });
        },
        Ae = t(9),
        Be = t(17),
        Fe = Object(r.createContext)(),
        Qe = Object(r.createContext)(),
        Re = t(460);
      function Ue() {
        var e = Object(m.a)([
          "\n  /* font-size: 2vh; */\n  display: ",
          ";\n  align-items: center;\n  justify-content: center;\n",
        ]);
        return (
          (Ue = function () {
            return e;
          }),
          e
        );
      }
      function Ye() {
        var e = Object(m.a)([
          "\n  font-size: 2.5vh;\n  font-weight: bold;\n  /* border-radius: 15px; */\n  /* padding: 10px; */\n  text-align: center;\n  font-family: Quicksand;\n  display: flex;\n  background: ",
          ";\n\n  transition: transform 300ms;\n  justify-content: center;\n  pointer-events: ",
          ";\n\n  &:hover {\n    cursor: pointer;\n  }\n",
        ]);
        return (
          (Ye = function () {
            return e;
          }),
          e
        );
      }
      function qe() {
        var e = Object(m.a)([
          "\n  /* font-size: 17px; */\n  font-size: 2.5vh;\n  font-weight: bold;\n  text-align: center;\n  color: #a678de;\n  padding: 20px;\n",
        ]);
        return (
          (qe = function () {
            return e;
          }),
          e
        );
      }
      function He() {
        var e = Object(m.a)([
          '\n  /* box-shadow: 0 0.1rem 0.5rem rgba(0, 0, 0, 0.2); */\n  border-radius: 5px;\n  padding: 10px;\n  /* background: #252525; */\n  /* margin-top: 80px; */\n  font-family: "Quicksand", sans-serif;\n',
        ]);
        return (
          (He = function () {
            return e;
          }),
          e
        );
      }
      function Pe() {
        var e = Object(m.a)([
          '\n  background: red;\n  font-family: "Quicksand", sans-serif;\n  padding: 7px 12px;\n  text-transform: uppercase;\n  font-size: 2vh;\n  overflow: hidden;\n  border: 0;\n  border-radius: 5px;\n  background: #967bb6;\n  color: white;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);\n  transition: all 0.25s ease;\n  cursor: pointer;\n  &:active {\n    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.5);\n    background: #f2b1ae;\n  }\n',
        ]);
        return (
          (Pe = function () {
            return e;
          }),
          e
        );
      }
      function We() {
        var e = Object(m.a)(["\n0%{opacity: 0}\n100%{opacity: 1}\n"]);
        return (
          (We = function () {
            return e;
          }),
          e
        );
      }
      Object(p.c)(We()), p.b.button(Pe());
      var Ve = p.b.div(He()),
        Ge = p.b.div(qe()),
        _e = Object(p.b)(Re.a.div)(
          Ye(),
          function (e) {
            return e.answerClicked == e.answer && e.submitted
              ? e.answerColor
              : e.answerClicked == e.answer
              ? "#b8b8b8"
              : "#D2CFE6";
          },
          function (e) {
            return e.submitted ? "none" : "auto";
          }
        ),
        Je = p.b.div(Ue(), function (e) {
          return e.answerClicked == e.answer && e.submitted ? "flex" : "none";
        }),
        Ke = function (e) {
          var n = b(),
            t = n.courseTitleUserIsOn,
            c = n.entryStore,
            a = n.isDarkMode,
            s = Object(r.useContext)(Fe),
            l = Object(i.a)(s, 2),
            u = l[0],
            d = l[1],
            f = Object(r.useContext)(Qe),
            m = Object(i.a)(f, 2),
            p = m[0],
            j = (m[1], Object(r.useState)("#e8e2ef")),
            h = Object(i.a)(j, 2),
            x = h[0],
            g = h[1],
            O = Object(r.useState)("NoAnswer"),
            w = Object(i.a)(O, 2),
            N = w[0],
            y = w[1],
            k = Object(r.useState)(!1),
            C = Object(i.a)(k, 2),
            T = (C[0], C[1]),
            S = Object(r.useState)("noSelection"),
            D = Object(i.a)(S, 2),
            z = D[0],
            I = D[1];
          Object(r.useEffect)(
            function () {
              0 == u.length && y("NoAnswer");
            },
            [p]
          );
          var L = function (n, t) {
            y(t),
              T(!0),
              1 == n
                ? (g("#DAF7A6"),
                  I(!0),
                  (function (e) {
                    var n = Object(v.a)(u);
                    (n[e] = 1), d(n), console.log(u);
                  })(e.exampleIndex),
                  console.log(e.exampleIndex))
                : (g("#ff726f"),
                  I(!1),
                  (function (e) {
                    var n = Object(v.a)(u);
                    (n[e] = 0), d(n), console.log(u);
                  })(e.exampleIndex));
          };
          var M = e.example.sectionNumber,
            A = (function (e) {
              if (c) {
                var n,
                  t = Object(Be.a)(c);
                try {
                  for (t.s(); !(n = t.n()).done; ) {
                    var o,
                      r = n.value,
                      a = Object(Be.a)(r.entries);
                    try {
                      for (a.s(); !(o = a.n()).done; ) {
                        var s,
                          i = o.value,
                          l = Object(Be.a)(i.entries);
                        try {
                          for (l.s(); !(s = l.n()).done; ) {
                            var u,
                              d = s.value,
                              b = Object(Be.a)(d.entries);
                            try {
                              for (b.s(); !(u = b.n()).done; ) {
                                var f = u.value;
                                if (f.sectionNumber === e) return f.title;
                              }
                            } catch (m) {
                              b.e(m);
                            } finally {
                              b.f();
                            }
                          }
                        } catch (m) {
                          l.e(m);
                        } finally {
                          l.f();
                        }
                      }
                    } catch (m) {
                      a.e(m);
                    } finally {
                      a.f();
                    }
                  }
                } catch (m) {
                  t.e(m);
                } finally {
                  t.f();
                }
              }
              return null;
            })(M);
          return (
            null !== A
              ? console.log("Section Title for ".concat(M, ": ").concat(A))
              : console.log(
                  "Section with Section Number ".concat(M, " not found.")
                ),
            Object(o.jsxs)(Ve, {
              className: "LessonExampleBox",
              children: [
                Object(o.jsx)(Ge, { children: e.example.question }),
                e.example &&
                  e.example.answers.map(function (n) {
                    return Object(o.jsxs)(o.Fragment, {
                      children: [
                        Object(o.jsx)(_e, {
                          className: "LessonExampleAnswerBox",
                          whileHover: { scale: 1.2 },
                          whileTap: { scale: 0.8 },
                          transition: {
                            type: "spring",
                            stiffness: 400,
                            damping: 17,
                          },
                          onClick: function () {
                            return L(n.isCorrect, n.answer);
                          },
                          answerColor: x,
                          answer: n.answer,
                          answerClicked: N,
                          submitted: p,
                          sumCorrect: u,
                          children: Object(o.jsx)("div", {
                            className: "LessonExampleAnswer",
                            children: n.answer,
                          }),
                        }),
                        Object(o.jsx)(Je, {
                          answerClicked: N,
                          answer: n.answer,
                          answerColor: x,
                          selectedAnswer: z,
                          submitted: p,
                          children:
                            0 == n.isCorrect
                              ? Object(o.jsxs)("div", {
                                  style: { width: "90% " },
                                  children: [
                                    Object(o.jsxs)("div", {
                                      className:
                                        "LessonExampleAnswerExplanationContainer ".concat(
                                          a ? "darkThemeFont" : "lightThemeFont"
                                        ),
                                      children: [
                                        Object(o.jsx)("i", {
                                          class: "wrongCross fa-solid fa-xmark",
                                        }),
                                        Object(o.jsx)("p", {
                                          style: { display: "inline" },
                                          className:
                                            "LessonExampleAnswerExplanation",
                                          children: n.explanation,
                                        }),
                                      ],
                                    }),
                                    Object(o.jsxs)(Re.a.div, {
                                      className: "LessonExampleNextLessonBox",
                                      style: {
                                        marginTop: "0",
                                        marginBottom: "4vh",
                                      },
                                      initial: { opacity: 0, scale: 0.5 },
                                      animate: {
                                        opacity: 1,
                                        scale: [1, 1.03, 1],
                                      },
                                      transition: {
                                        duration: 0.8,
                                        delay: 0.3,
                                        ease: [0, 0.71, 0.2, 1.01],
                                      },
                                      children: [
                                        Object(o.jsxs)("div", {
                                          style: {},
                                          className: "LessonTitleContainer",
                                          children: [
                                            Object(o.jsx)("span", {
                                              className: "LessonNumber",
                                              children: "Revise Lesson",
                                            }),
                                            " ",
                                          ],
                                        }),
                                        Object(o.jsx)(E.b, {
                                          to: "/"
                                            .concat(t, "/lesson/")
                                            .concat(e.example.sectionNumber),
                                          children: Object(o.jsx)(Re.a.div, {
                                            whileTap: { scale: 0.8 },
                                            transition: {
                                              type: "spring",
                                              stiffness: 400,
                                              damping: 17,
                                            },
                                            children: Object(o.jsx)(F, {
                                              number: e.example.sectionNumber,
                                              title: A,
                                              width: "100%",
                                              marginLeft: "0",
                                              borderRadius:
                                                "14% 2% 2% 14% / 50% 10% 10% 50%",
                                            }),
                                          }),
                                        }),
                                      ],
                                    }),
                                  ],
                                })
                              : Object(o.jsxs)(o.Fragment, {
                                  children: [
                                    Object(o.jsx)("i", {
                                      class:
                                        "correctCheckMark fa-solid fa-check",
                                    }),
                                    Object(o.jsx)("p", {
                                      className:
                                        "LessonExampleAnswerExplanation ".concat(
                                          a ? "darkThemeFont" : "lightThemeFont"
                                        ),
                                      children: "Correct!",
                                    }),
                                  ],
                                }),
                        }),
                      ],
                    });
                  }),
              ],
            })
          );
        },
        Xe = (t(330), t(43));
      function $e() {
        var e = Object(m.a)([
          "\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n\n  @media (max-width: 1200px) {\n    flex-basis: 100%;\n    margin-top: 30px;\n  }\n",
        ]);
        return (
          ($e = function () {
            return e;
          }),
          e
        );
      }
      function Ze() {
        var e = Object(m.a)(["\n          shakeX 1s 1s\n        "]);
        return (
          (Ze = function () {
            return e;
          }),
          e
        );
      }
      function en() {
        var e = Object(m.a)(["\n          shakeY 1s 1s\n        "]);
        return (
          (en = function () {
            return e;
          }),
          e
        );
      }
      function nn() {
        var e = Object(m.a)([
          "\n  font-size: 3vh;\n  text-align: center;\n  font-weight: 900;\n  margin: 0;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  animation: ",
          ";\n\n  @media (max-width: 1200px) {\n    flex-basis: 100%;\n    margin-bottom: 20px;\n  }\n",
        ]);
        return (
          (nn = function () {
            return e;
          }),
          e
        );
      }
      function tn() {
        var e = Object(m.a)([
          '\n  font-size: 5vh;\n  font-family: "Quicksand", sans-serif;\n  text-align: center;\n  font-weight: 900;\n  margin: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n',
        ]);
        return (
          (tn = function () {
            return e;
          }),
          e
        );
      }
      function on() {
        var e = Object(m.a)([
          "\n  background: ",
          ";\n  font-size: 40px;\n  white-space: pre-line;\n  margin: 10px 30px;\n  padding: 10px;\n  box-shadow: 10px 15px 15px rgba(0, 0, 0, 0.767);\n  display: ",
          '; /* Display score card only when button is clicked, ie. when submitted state is true */\n  flex-wrap: wrap;\n  position: relative;\n  align-items: center;\n  justify-content: space-around;\n  text-align: center;\n  flex-direction: column;\n  font-family: "Quicksand", sans-serif;\n  border-radius: 1rem;\n  padding: 20px;\n',
        ]);
        return (
          (on = function () {
            return e;
          }),
          e
        );
      }
      function rn() {
        var e = Object(m.a)([
          '\n  background: red;\n  font-family: "Quicksand", sans-serif;\n  padding: 7px 100px;\n  text-transform: uppercase;\n  font-size: 2vh;\n  overflow: hidden;\n  border: 0;\n  border-radius: 5px;\n  background: #967bb6;\n  color: white;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);\n  transition: all 0.25s ease;\n  cursor: pointer;\n\n  &:active {\n    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.5);\n    background: #f2b1ae;\n  }\n',
        ]);
        return (
          (rn = function () {
            return e;
          }),
          e
        );
      }
      var cn = p.b.button(rn()),
        an = p.b.div(
          on(),
          function (e) {
            return 100 == e.scorePercentage ? "#f6ffe6" : "#e8c6c5";
          },
          function (e) {
            return e.submitted ? "flex" : "none";
          }
        ),
        sn = p.b.p(tn()),
        ln = p.b.div(nn(), function (e) {
          return e.submitted && 100 == e.scorePercentage
            ? Object(p.a)(en())
            : e.submitted && e.scorePercentage < 100
            ? Object(p.a)(Ze())
            : "none";
        }),
        un = p.b.div($e()),
        dn = function (e) {
          var n = b(),
            t = n.exampleDatafromBackEnd,
            c = n.courseTitleUserIsOn;
          console.log(t);
          var a = Object(r.useContext)(Fe),
            s = Object(i.a)(a, 2),
            l = s[0],
            u = s[1],
            d = Object(r.useState)("#f8f8f8"),
            f = Object(i.a)(d, 2),
            m = (f[0], f[1], Object(r.useContext)(Qe)),
            p = Object(i.a)(m, 2),
            j = p[0],
            h = p[1],
            x = Object(Ae.f)(),
            g = l.reduce(function (e, n) {
              return e + n;
            }, 0),
            v = Math.round((g / l.length) * 100),
            O =
              (e.goBackTo,
              "Topic" == e.comingFrom
                ? "/".concat(c, "/topic/").concat(e.topicNumber)
                : "Section" == e.comingFrom
                ? "/"
                    .concat(c, "/topic/")
                    .concat(e.topicNumber, "#")
                    .concat(e.sectionNumber)
                : "ScoreCard" == e.comingFrom && e.sections.constructor == Array
                ? "/".concat(c, "/topic/").concat(e.topicNumber)
                : "ScoreCard" == e.comingFrom
                ? "/"
                    .concat(c, "/topic/")
                    .concat(e.topicNumber, "#")
                    .concat(x.state.sectionNumber)
                : "/".concat(c, "/topic/").concat(e.topicNumber),
              "Topic" == e.comingFrom
                ? "/".concat(c, "/quiz/").concat(e.topicNumber)
                : "Section" == e.comingFrom
                ? "/"
                    .concat(c, "/quiz/")
                    .concat(e.topicNumber, "/")
                    .concat(e.sectionNumber)
                : "ScoreCard" == e.comingFrom && e.sections.constructor == Array
                ? "/".concat(c, "/quiz/").concat(e.topicNumber)
                : "ScoreCard" == e.comingFrom
                ? "/"
                    .concat(c, "/quiz/")
                    .concat(e.topicNumber, "/")
                    .concat(x.state.sectionNumber)
                : "/".concat(c, "/quiz/").concat(e.topicNumber)),
            w = function (e, n) {
              for (var t = [], o = 0; o < n; ) {
                var r = Math.floor(Math.random() * e.length);
                t.includes(e[r]) || (t.push(e[r]), o++);
              }
              return t;
            };
          console.log(e.comingFrom),
            console.log(e.sections),
            console.log(e.topicNumber),
            console.log(e.sectionNumber);
          var N = Math.ceil(5 / e.sections.length),
            y = [],
            k = [],
            C = [],
            T = [];
          if ("Topic" == e.comingFrom)
            e.sections.map(function (e) {
              var n = t.filter(function (n) {
                return n.sectionNumber == e;
              });
              n.length > N
                ? ((y = w(n, N)), k.push.apply(k, y))
                : k.push.apply(k, n);
            }),
              (T = C = k.length > 5 ? w(k, 5) : k);
          else if ("Section" == e.comingFrom) {
            var S = t.filter(function (n) {
              return n.sectionNumber == e.sections;
            });
            T = y = S.length > 5 ? w(S, 5) : S;
          } else if ("ScoreCard" == e.comingFrom)
            if (e.sections.constructor == Array)
              e.sections.map(function (e) {
                var n = t.filter(function (n) {
                  return n.sectionNumber == e;
                });
                n.length > N
                  ? ((y = w(n, N)), k.push.apply(k, y))
                  : k.push.apply(k, n);
              }),
                (T = C = k.length > 5 ? w(k, 5) : k);
            else {
              var D = t.filter(function (n) {
                return n.sectionNumber == e.sections;
              });
              T = y = D.length > 5 ? w(D, 5) : D;
            }
          console.log(C), console.log(y);
          return Object(o.jsxs)(an, {
            submitted: j,
            scorePercentage: v,
            children: [
              100 == v
                ? Object(o.jsxs)(ln, {
                    submitted: j,
                    scorePercentage: v,
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
                : Object(o.jsxs)(ln, {
                    submitted: j,
                    scorePercentage: v,
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
                  Object(o.jsxs)("div", {
                    style: {
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-around",
                      fontSize: "3vh",
                    },
                    children: [
                      Object(o.jsx)("p", { children: "Score" }),
                      Object(o.jsxs)(sn, { children: [g, "/", l.length] }),
                    ],
                  }),
                  Object(o.jsxs)("div", {
                    style: {
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-around",
                      fontSize: "3vh",
                    },
                    children: [
                      Object(o.jsx)("p", {
                        style: { marginRight: "50px" },
                        children: "Percentage",
                      }),
                      Object(o.jsxs)(sn, { children: [v, "%"] }),
                    ],
                  }),
                ],
              }),
              Object(o.jsx)(un, {
                children: Object(o.jsx)(E.b, {
                  to: {
                    pathname: O,
                    state: {
                      comingFrom: "ScoreCard",
                      sections: e.sections,
                      scoreCardSelectedQuizQuestons: T,
                      sectionNumber: e.sectionNumber,
                    },
                  },
                  children: Object(o.jsx)(cn, {
                    style: { marginBottom: 20 },
                    onClick: function () {
                      h(!1), u([]);
                    },
                    children: "More Practice",
                  }),
                }),
              }),
            ],
          });
        };
      t.p, t(96);
      function bn() {
        var e = Object(m.a)([
          "\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  left: 10px;\n  font-size: 3vh;\n",
        ]);
        return (
          (bn = function () {
            return e;
          }),
          e
        );
      }
      function fn() {
        var e = Object(m.a)([
          '\n  width: 100%;\n  height: 80px;\n  padding: 10px;\n  padding-left: 70px;\n  font-family: "Quicksand", sans-serif;\n  font-size: 3vh;\n\n  border: none;\n  border-radius: 4px;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n',
        ]);
        return (
          (fn = function () {
            return e;
          }),
          e
        );
      }
      function mn() {
        var e = Object(m.a)([
          "\n  position: relative;\n  width: 100%;\n  max-width: 700px;\n  margin-bottom: 20px;\n  margin-right: 50px;\n",
        ]);
        return (
          (mn = function () {
            return e;
          }),
          e
        );
      }
      function pn() {
        var e = Object(m.a)([
          "\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  height: 100%; /* Ensure the div takes full height */\n",
        ]);
        return (
          (pn = function () {
            return e;
          }),
          e
        );
      }
      p.b.div(pn()), p.b.div(mn()), p.b.input(fn()), p.b.div(bn());
      t(22);
      function jn() {
        var e = Object(m.a)([
          '\n  background: red;\n  font-family: "Quicksand", sans-serif;\n  padding: 7px 12px;\n  /* margin: 20px; */\n  text-transform: uppercase;\n  /* font-size: 15px; */\n  font-size: 2.5vh;\n  overflow: hidden;\n  border: 0;\n  border-radius: 5px;\n  background: #eb3535;\n  color: white;\n  transition: all 0.25s ease;\n  cursor: pointer;\n  height: 6vh;\n\n  &:active {\n    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.5);\n    background: #f2b1ae;\n  }\n',
        ]);
        return (
          (jn = function () {
            return e;
          }),
          e
        );
      }
      function hn() {
        var e = Object(m.a)([
          '\n  background: red;\n  position: relative;\n  font-family: "Quicksand", sans-serif;\n  padding: 7px 12px;\n  text-transform: uppercase;\n  /* font-size: 15px; */\n  font-size: 4vh;\n  font-weight: bold;\n  overflow: hidden;\n  border: 0;\n  border-radius: 5px;\n  background: #8747d4;\n  color: #f8f6f0;\n  height: 6vh;\n\n  transition: all 0.25s ease;\n  cursor: pointer;\n  margin-right: 20px;\n\n  &:active {\n    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.5);\n    background: #f2b1ae;\n  }\n',
        ]);
        return (
          (hn = function () {
            return e;
          }),
          e
        );
      }
      function xn() {
        var e = Object(m.a)([
          "\n  width: 6vh; /* Adjust the width as needed */\n  height: 6vh; /* Adjust the height as needed */\n  margin-left: 70px; /* Adjust the margin as needed */\n",
        ]);
        return (
          (xn = function () {
            return e;
          }),
          e
        );
      }
      function gn() {
        var e = Object(m.a)(["\n  display: flex;\n  align-items: center;\n"]);
        return (
          (gn = function () {
            return e;
          }),
          e
        );
      }
      function vn() {
        var e = Object(m.a)([
          "\n  background: #d0bad9;\n  /* top: 80; */\n  height: 6vh;\n  transform: translateY(",
          ");\n  transition: 0.2s;\n  display: flex;\n  justify-content: space-between;\n",
        ]);
        return (
          (vn = function () {
            return e;
          }),
          e
        );
      }
      p.b.nav(vn(), function (e) {
        return e.navTop + "vh";
      }),
        p.b.div(gn()),
        p.b.img(xn()),
        p.b.button(hn()),
        p.b.button(jn());
      function On() {
        var e = Object(m.a)([
          "\n  background: #dd6260;\n  /* top: 80; */\n  height: 6vh;\n  transform: translateY(",
          ");\n  transition: 0.2s;\n  display: flex;\n  justify-content: space-between;\n",
        ]);
        return (
          (On = function () {
            return e;
          }),
          e
        );
      }
      var wn = p.b.nav(On(), function (e) {
        return e.navTop + "vh";
      });
      function Nn(e) {
        var n = Object(r.useState)(!1),
          t = Object(i.a)(n, 2),
          c = t[0],
          a = t[1],
          s = Object(r.useState)([]),
          l = Object(i.a)(s, 2),
          d = (l[0], l[1], b()),
          f = d.courseTitleUserIsOn,
          m = d.entryStore,
          p = d.setEntryStore,
          j = d.courseDetails,
          h =
            (d.setSubContainerEntries,
            d.subContainer,
            d.setSubContainer,
            d.rowClicked,
            d.setRowClicked,
            d.isDarkMode),
          x = d.setIsDarkMode;
        console.log(f, j, m);
        Object(r.useEffect)(
          function () {
            u()(
              "/"
                .concat(f, "/sideBarData?collectionName=")
                .concat(j.courseTopicsCollectionName, "&modelName=")
                .concat(j.courseTopicsModelName)
            ).then(function (e) {
              p(e.data), console.log(e.data);
            });
          },
          [j]
        ),
          console.log(
            "/"
              .concat(f, "/sideBarData?collectionName=")
              .concat(j.courseTopicsCollectionName, "&modelName=")
              .concat(j.courseTopicsModelName)
          ),
          console.log(m);
        var g = Object(r.useState)("0"),
          v = Object(i.a)(g, 2),
          w = (v[0], v[1], Object(r.useState)("0")),
          N = Object(i.a)(w, 2),
          y = (N[0], N[1], Object(r.useState)("0")),
          k = Object(i.a)(y, 2),
          C = (k[0], k[1], Object(r.useState)("0")),
          T = Object(i.a)(C, 2),
          E = (T[0], T[1], Object(r.useState)(0)),
          D = Object(i.a)(E, 2),
          z = D[0],
          I = D[1],
          L = window.scrollY;
        window.addEventListener("scroll", function () {
          L < window.scrollY ? I(-6) : I(0), (L = window.scrollY);
        });
        var M = function () {
          a(!1);
        };
        return Object(o.jsxs)("div", {
          style: { display: "unset" },
          children: [
            Object(o.jsxs)(wn, {
              style: { position: "sticky", top: 0, zIndex: 1 },
              navTop: z,
              children: [
                Object(o.jsxs)("div", {
                  children: [
                    Object(o.jsx)(O, {
                      click: function () {
                        a(!0);
                      },
                    }),
                    " ",
                  ],
                }),
                Object(o.jsxs)("div", {
                  className: "toggle-container",
                  children: [
                    " ",
                    Object(o.jsx)("input", {
                      type: "checkbox",
                      id: "toggle_checkbox",
                      checked: h,
                      onChange: function () {
                        x(!h);
                      },
                    }),
                    Object(o.jsxs)("label", {
                      for: "toggle_checkbox",
                      children: [
                        Object(o.jsxs)("div", {
                          id: "star",
                          children: [
                            Object(o.jsx)("div", {
                              class: "star",
                              id: "star-1",
                              children: "\u2605",
                            }),
                            Object(o.jsx)("div", {
                              class: "star",
                              id: "star-2",
                              children: "\u2605",
                            }),
                          ],
                        }),
                        Object(o.jsx)("div", { id: "moon" }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            Object(o.jsx)(S.a, {
              in: c && m,
              timeout: 300,
              mountOnEnter: !0,
              unmountOnExit: !0,
              children: function (e) {
                return Object(o.jsx)(o.Fragment, {
                  children: Object(o.jsx)(U, { state: e, click: M }),
                });
              },
            }),
          ],
        });
      }
      function yn() {
        var e = Object(m.a)([
          '\n  color: #9589be;\n  /* font-size: 1rem; */\n  /* font-size: clamp(4vh, 30px, 30px); */\n  /* font-size: min(2rem, 4vh); */\n  font-size: 4vh;\n  display: block;\n  margin: 30px;\n  font-family: "Quicksand", sans-serif;\n\n  /* @media (max-width: 40em) {\n    font-size: 5vh;\n  } */\n\n  /* justify-content: space-between; */\n',
        ]);
        return (
          (yn = function () {
            return e;
          }),
          e
        );
      }
      function kn() {
        var e = Object(m.a)([
          '\n  background: red;\n  font-family: "Quicksand", sans-serif;\n  padding: 7px 12px;\n  margin-right: "20px";\n  text-transform: uppercase;\n  /* font-size: 15px; */\n  font-size: 2vh;\n  overflow: hidden;\n  border: 0;\n  border-radius: 5px;\n  background: #e8e2ef;\n  color: #252525;\n  transition: all 0.25s ease;\n  cursor: pointer;\n\n  &:active {\n    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.5);\n    background: #e8e2ef;\n  }\n',
        ]);
        return (
          (kn = function () {
            return e;
          }),
          e
        );
      }
      function Cn() {
        var e = Object(m.a)([
          '\n  background: red;\n  font-family: "Quicksand", sans-serif;\n  padding: 7px 12px;\n  text-transform: uppercase;\n  font-size: 3vh;\n  overflow: hidden;\n  border: 0;\n  border-radius: 5px;\n  background: #8747d4;\n  color: white;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);\n  transition: all 0.25s ease;\n  cursor: pointer;\n\n  &:active {\n    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.5);\n    background: #f2b1ae;\n  }\n',
        ]);
        return (
          (Cn = function () {
            return e;
          }),
          e
        );
      }
      function Tn() {
        var e = Object(m.a)([
          '\n  background: red;\n  font-family: "Quicksand", sans-serif;\n  padding: 7px 12px;\n  margin: 20px;\n  text-transform: uppercase;\n  /* font-size: 15px; */\n  font-size: 3vh;\n  overflow: hidden;\n  border: 0;\n  border-radius: 5px;\n  background: #eb3535;\n  color: white;\n  transition: all 0.25s ease;\n  cursor: pointer;\n\n  &:active {\n    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.5);\n    background: #f2b1ae;\n  }\n',
        ]);
        return (
          (Tn = function () {
            return e;
          }),
          e
        );
      }
      function Sn() {
        var e = Object(m.a)([
          "\n  display: flex;\n  justify-content: center;\n",
        ]);
        return (
          (Sn = function () {
            return e;
          }),
          e
        );
      }
      function En() {
        var e = Object(m.a)([
          '\n  color: #eb8381;\n  /* font-size: 3vh; */\n  font-family: "Quicksand", sans-serif;\n  justify-content: center;\n  text-align: center;\n  /* margin: 30px 30px; */\n  display: flex;\n\n  /* justify-content: space-between; */\n',
        ]);
        return (
          (En = function () {
            return e;
          }),
          e
        );
      }
      var Dn = p.b.p(En()),
        zn = (p.b.div(Sn()), p.b.button(Tn()), p.b.button(Cn())),
        In =
          (p.b.button(kn()),
          p.b.div(yn()),
          function (e) {
            var n = b(),
              t = n.courseTitleUserIsOn,
              c = n.setCourseTitleUserIsOn,
              a = n.courseDetails,
              s = n.setCourseDetails,
              l = n.entryStore,
              d = n.setEntryStore;
            console.log(a),
              Object(r.useEffect)(function () {
                c(e.match.params.courseTitle);
              }, []),
              console.log(t),
              console.log(e.match.params.courseTitle),
              console.log(a);
            var f = Object(r.useState)(!1),
              m = Object(i.a)(f, 2),
              p = m[0],
              j = m[1],
              h = Object(r.useState)([]),
              x = Object(i.a)(h, 2),
              g = x[0],
              v = x[1],
              O = Object(r.useState)("none"),
              w = Object(i.a)(O, 2),
              N = w[0],
              y = (w[1], Object(Ae.f)());
            Object(r.useEffect)(
              function () {
                return window.scrollTo({ top: 0, behavior: "smooth" });
              },
              [p]
            ),
              console.log(N),
              console.log(y),
              console.log(y.state),
              Object(r.useEffect)(
                function () {
                  u()("/coursesData").then(function (n) {
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
              console.log(a),
              console.log(e.match),
              console.log(e.match.params.topicNumber);
            var k = e.match.params.topicNumber;
            console.log(k), console.log(a);
            var C = Object(r.useState)([]),
              T = Object(i.a)(C, 2),
              S = T[0],
              E = T[1];
            Object(r.useEffect)(
              function () {
                u()(
                  "/examplesData?collectionName="
                    .concat(a.courseExamplesCollectionName, "&modelName=")
                    .concat(a.courseExamplesModelName)
                ).then(function (e) {
                  E(e.data), console.log(e.data);
                });
              },
              [a]
            ),
              console.log(S);
            var D = Object(r.useState)([]),
              z = Object(i.a)(D, 2),
              I = z[0],
              L = z[1];
            console.log(t),
              Object(r.useEffect)(
                function () {
                  u()(
                    "/"
                      .concat(t, "/topicRESTCAll/")
                      .concat(k, "?collectionName=")
                      .concat(a.courseTopicsCollectionName, "&modelName=")
                      .concat(a.courseTopicsModelName)
                  ).then(function (e) {
                    L(e.data), console.log(e.data);
                  });
                },
                [k, a]
              ),
              console.log(I),
              Object(r.useEffect)(
                function () {
                  u()(
                    "/"
                      .concat(t, "/sideBarData?collectionName=")
                      .concat(a.courseTopicsCollectionName, "&modelName=")
                      .concat(a.courseTopicsModelName)
                  ).then(function (e) {
                    d(e.data), console.log(e.data);
                  });
                },
                [I.topicNumber]
              ),
              console.log(l);
            var M = Object(r.useState)([]),
              A = Object(i.a)(M, 2),
              B = A[0],
              F = A[1];
            Object(r.useEffect)(
              function () {
                u()(
                  "/"
                    .concat(t, "/topicNumbersList?collectionName=")
                    .concat(a.courseTopicsCollectionName, "&modelName=")
                    .concat(a.courseTopicsModelName)
                ).then(function (e) {
                  F(e.data), console.log(e.data);
                });
              },
              [I.topicNumber]
            ),
              console.log(B);
            var Q = [];
            I.sections &&
              I.sections.map(function (e) {
                return Q.push(e.sectionNumber);
              }),
              console.log(Q);
            var R = Math.ceil(100 / Q.length);
            console.log(R);
            var U = [],
              Y = [],
              q = [],
              H = [],
              P = function (e, n) {
                for (var t = [], o = 0; o < n; ) {
                  var r = Math.floor(Math.random() * e.length);
                  t.includes(e[r]) || (t.push(e[r]), o++);
                }
                return t;
              };
            Q.map(function (e) {
              var n =
                S &&
                0 !== S.length &&
                S.filter(function (n) {
                  return n.sectionNumber == e;
                });
              console.log(n),
                n.length > R
                  ? ((U = P(n, R)), console.log(U), (q = Y.concat(q, U)))
                  : (q = Y.concat(q, n)),
                console.log(Y),
                console.log(q);
            }),
              console.log(Y),
              console.log(q),
              (H = q.length > 100 ? P(q, 100) : q),
              console.log(H),
              Object(r.useEffect)(
                function () {
                  j(!1), v([]);
                },
                [I.topicNumber]
              );
            var W = g.reduce(function (e, n) {
                return e + n;
              }, 0),
              V = Math.round((W / g.length) * 100);
            return Object(o.jsx)(Fe.Provider, {
              value: [g, v],
              children: Object(o.jsx)(Qe.Provider, {
                value: [p, j],
                children: Object(o.jsxs)(o.Fragment, {
                  children: [
                    Object(o.jsx)(Nn, {}),
                    Object(o.jsx)("div", {
                      className: "Quiz",
                      children: Object(o.jsxs)("div", {
                        className: "QuizContainer",
                        children: [
                          Object(o.jsxs)("div", {
                            style: {},
                            className: "LessonTitleContainer",
                            children: [
                              Object(o.jsxs)("span", {
                                className: "LessonNumber",
                                children: ["Chapter Quiz ", I.topicNumber],
                              }),
                              " ",
                              Object(o.jsx)("br", {}),
                              Object(o.jsx)("span", {
                                className: "LessonTitle",
                                children: I.topicTitle,
                              }),
                              p &&
                                100 == V &&
                                Object(o.jsx)(Xe.a, {
                                  height: "1000vh",
                                  particleSize: 30,
                                  autoStart: !0,
                                  duration: 5e3,
                                  particleCount: 350,
                                  spread: 360,
                                  origin: { x: 0.8, y: 0.5 },
                                  force: 0.8,
                                  width: 1600,
                                }),
                            ],
                          }),
                          p
                            ? Object(o.jsx)(dn, {
                                sections: y.state
                                  ? "Topic" == y.state.comingFrom
                                    ? y.state.sectionList
                                    : "Section" == y.state.comingFrom
                                    ? y.state.section
                                    : "ScoreCard" == y.state.comingFrom
                                    ? y.state.sections
                                    : "none"
                                  : Q,
                                comingFrom:
                                  y.state &&
                                  ("Topic" == y.state.comingFrom
                                    ? "Topic"
                                    : "Section" == y.state.comingFrom
                                    ? "Section"
                                    : "ScoreCard" == y.state.comingFrom
                                    ? "ScoreCard"
                                    : "none"),
                                whereDidIComeFrom: N,
                                topicNumber: e.match.params.topicNumber,
                                sectionNumber:
                                  y.state &&
                                  ("Section" == y.state.comingFrom
                                    ? y.state.section
                                    : "ScoreCard" == y.state.comingFrom
                                    ? y.state.sectionNumber
                                    : "none"),
                              })
                            : Object(o.jsx)(Dn, {}),
                          H.map(function (n, t) {
                            return Object(o.jsxs)("div", {
                              children: [
                                Object(o.jsx)(Ke, {
                                  topicNumber: e.match.params.topicNumber,
                                  example: n,
                                  exampleIndex: t,
                                }),
                                Object(o.jsx)("hr", {
                                  style: {
                                    width: "70%",
                                    backgroundColor: "#9589be",
                                    height: 2,
                                    borderRadius: 20,
                                    border: 0,
                                    marginTop: "10%",
                                    marginBottom: "10%",
                                  },
                                }),
                              ],
                            });
                          }),
                          0 == g.includes(void 0) &&
                          g.length == H.length &&
                          0 == p
                            ? Object(o.jsx)("div", {
                                style: {
                                  display: "flex",
                                  justifyContent: "center",
                                  margin: "30px 0px",
                                },
                                children: Object(o.jsx)(zn, {
                                  onClick: function () {
                                    return j(!0);
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
                  ],
                }),
              }),
            });
          });
      t(408), t(97);
      var Ln = function (e) {
        return Object(o.jsx)("div", {
          className: "courseIconAndTitle",
          children: Object(o.jsxs)("div", {
            children: [
              Object(o.jsx)("img", {
                className: "courseImage",
                src: e.img,
                alt: "",
              }),
              " ",
            ],
          }),
        });
      };
      t(151);
      var Mn = function (e) {
        var n = b(),
          t = n.topicDatafromBackEnd,
          c = n.exampleDatafromBackEnd,
          a = Object(r.useState)(0),
          s = Object(i.a)(a, 2),
          l = s[0],
          d = s[1],
          f = Object(r.useState)(0),
          m = Object(i.a)(f, 2),
          p = m[0],
          j = m[1],
          h = Object(r.useState)(0),
          x = Object(i.a)(h, 2),
          g = x[0],
          v = x[1],
          O = Object(r.useState)(0),
          w = Object(i.a)(O, 2),
          N = w[0],
          y = w[1],
          k = b(),
          C =
            (k.courseTitleUserIsOn,
            k.setCourseTitleUserIsOn,
            k.courseDetails,
            k.setCourseDetails,
            k.setTopicDatafromBackEnd,
            k.setExampleDatafromBackEnd,
            k.entryStore);
        return (
          k.setEntryStore,
          k.subContainer,
          Object(r.useEffect)(
            function () {
              e.courseDetails &&
                u()(
                  "/"
                    .concat(
                      e.courseDetails.courseTitle.replace(/\s/g, ""),
                      "/topicsData?collectionName="
                    )
                    .concat(
                      e.courseDetails.courseTopicsCollectionName,
                      "&modelName="
                    )
                    .concat(e.courseDetails.courseTopicsModelName)
                ).then(function (e) {
                  for (var n = 0, t = 0, o = 0; o < e.data.length; o++)
                    (n += e.data[o].sections.length),
                      0 !== e.data[o].sections.length && 1,
                      e.data[o].topicYoutubeLink && (t += 1);
                  j(n), v(t);
                  y(0.5 * n), console.log(e.data);
                }),
                e.courseDetails &&
                  u()(
                    "/examplesData?collectionName="
                      .concat(
                        e.courseDetails.courseExamplesCollectionName,
                        "&modelName="
                      )
                      .concat(e.courseDetails.courseExamplesModelName)
                  ).then(function (e) {
                    d(e.data.length), console.log(e.data);
                  });
            },
            [e.courseDetails]
          ),
          console.log(C, t, c),
          console.log(p),
          console.log(g),
          console.log(0),
          console.log(t),
          console.log(l),
          console.log(N),
          Object(o.jsxs)("div", {
            className: "courseStatBanner",
            style: { color: e.color },
            children: [
              Object(o.jsxs)("div", {
                className: "courseStat",
                children: [
                  Object(o.jsx)("div", {
                    className: "courseStatImage",
                    children: Object(o.jsx)("i", {
                      class: "fa-solid fa-clipboard-question",
                    }),
                  }),
                  Object(o.jsxs)("div", {
                    className: "courseStatDescription",
                    children: [
                      Object(o.jsx)("div", {
                        className: "courseStatNumber",
                        children: l,
                      }),
                      " ",
                      Object(o.jsx)("div", {
                        className: "courseStatName",
                        children: "Questions",
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
                    children: Object(o.jsx)("i", {
                      class: "fa-solid fa-graduation-cap",
                    }),
                  }),
                  Object(o.jsxs)("div", {
                    className: "courseStatDescription",
                    children: [
                      Object(o.jsx)("div", {
                        className: "courseStatNumber",
                        children: p,
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
              g > 0 &&
                Object(o.jsxs)("div", {
                  className: "courseStat",
                  children: [
                    Object(o.jsx)("div", {
                      className: "courseStatImage",
                      children: Object(o.jsx)("i", {
                        class: "fa-solid fa-play",
                      }),
                    }),
                    Object(o.jsxs)("div", {
                      className: "courseStatDescription",
                      children: [
                        Object(o.jsx)("div", {
                          className: "courseStatNumber",
                          children: g,
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
                  Object(o.jsx)("div", {
                    className: "courseStatImage",
                    children: Object(o.jsx)("i", {
                      class: "fa-solid fa-clock",
                    }),
                  }),
                  Object(o.jsxs)("div", {
                    className: "courseStatDescription",
                    children: [
                      Object(o.jsx)("div", {
                        className: "courseStatNumber",
                        children: N,
                      }),
                      " ",
                      Object(o.jsx)("div", {
                        className: "courseStatName",
                        children: "~ mins",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          })
        );
      };
      function An() {
        var e = Object(m.a)([
          '\n  background: red;\n  position: relative;\n  font-family: "Quicksand", sans-serif;\n  padding-left: 15px;\n  padding-right: 15px;\n  /* margin-bottom: 10px; */\n  text-transform: uppercase;\n  /* font-size: 15px; */\n  font-size: 1.8vh;\n  font-weight: bold;\n  overflow: hidden;\n  border: 0;\n  border-radius: 20% 20% 20% 20% / 50% 50% 50% 50%;\n  background: none;\n  color: yellow;\n  height: 6vh;\n\n  transition: all 0.25s ease;\n  cursor: pointer;\n  margin-right: 20px;\n\n  &:active {\n    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.5);\n    background: #f2b1ae;\n  }\n',
        ]);
        return (
          (An = function () {
            return e;
          }),
          e
        );
      }
      function Bn() {
        var e = Object(m.a)([
          '\n  background: red;\n  position: relative;\n  font-family: "Quicksand", sans-serif;\n  /* padding-left: 15px; */\n  /* padding-right: 15px; */\n  /* margin: 30px; */\n  text-transform: uppercase;\n  /* font-size: 15px; */\n  font-size: 1.4vh;\n  font-weight: bold;\n  overflow: hidden;\n  border: 0;\n  border-radius: 20% 20% 20% 20% / 50% 50% 50% 50%;\n  background: none;\n  color: #dd6260;\n  height: 6vh;\n  text-decoration: underline;\n\n  transition: all 0.25s ease;\n  cursor: pointer;\n  margin-right: 20px;\n',
        ]);
        return (
          (Bn = function () {
            return e;
          }),
          e
        );
      }
      var Fn = p.b.button(Bn()),
        Qn = p.b.button(An());
      var Rn = function (e) {
        var n = Object(r.useState)(""),
          t = Object(i.a)(n, 2),
          c = t[0],
          a = t[1],
          s = Object(r.useState)(""),
          l = Object(i.a)(s, 2),
          u = l[0],
          d = l[1],
          b = Object(r.useState)(!0),
          f = Object(i.a)(b, 2),
          m = (f[0], f[1]),
          p = Object(r.useState)(!1),
          j = Object(i.a)(p, 2),
          h = j[0],
          x = j[1],
          g = (function () {
            var e = Object(k.a)(
              y.a.mark(function e(n) {
                var t, o, r, c;
                return y.a.wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (!(t = localStorage.getItem(n))) {
                            e.next = 5;
                            break;
                          }
                          v(t), (e.next = 24);
                          break;
                        case 5:
                          return (
                            (e.prev = 5),
                            (e.next = 8),
                            fetch(n, {
                              method: "GET",
                              headers: { "Cache-Control": "no-cache" },
                            })
                          );
                        case 8:
                          if (!(o = e.sent).ok) {
                            e.next = 18;
                            break;
                          }
                          return (e.next = 12), o.blob();
                        case 12:
                          (r = e.sent),
                            (c = new FileReader()).readAsDataURL(r),
                            (c.onloadend = function () {
                              var e = c.result,
                                t = new Image();
                              (t.src = e),
                                (t.onload = function () {
                                  var e = new C.a().getColor(t),
                                    o = "rgb("
                                      .concat(e[0], ", ")
                                      .concat(e[1], ", ")
                                      .concat(e[2], ")");
                                  v(o), localStorage.setItem(n, o);
                                });
                            }),
                            (e.next = 19);
                          break;
                        case 18:
                          console.error("Image fetch failed:", o.status);
                        case 19:
                          e.next = 24;
                          break;
                        case 21:
                          (e.prev = 21),
                            (e.t0 = e.catch(5)),
                            console.error("Error fetching image:", e.t0);
                        case 24:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[5, 21]]
                );
              })
            );
            return function (n) {
              return e.apply(this, arguments);
            };
          })(),
          v = function (e) {
            a(e);
            var n = O(e);
            d(n > 0.5 ? "#000" : "#fff"), m(!1);
          },
          O = function (e) {
            var n = e.match(/\d+/g);
            return (0.299 * n[0] + 0.587 * n[1] + 0.114 * n[2]) / 255;
          };
        return (
          Object(r.useEffect)(function () {
            var n =
              "https://qaleelo-assets.s3.us-east-2.amazonaws.com/" +
              e.course.courseTitle.replace(/\s/g, "") +
              "/courseImage/" +
              e.course.courseTitle.replace(/\s/g, "") +
              ".png";
            g(n);
          }, []),
          Object(o.jsxs)("div", {
            className: "courseFullDetails",
            style: { backgroundColor: c },
            children: [
              Object(o.jsxs)("div", {
                className: "courseHeader",
                children: [
                  Object(o.jsx)(Ln, {
                    img:
                      "https://qaleelo-assets.s3.us-east-2.amazonaws.com/" +
                      e.course.courseTitle.replace(/\s/g, "") +
                      "/courseImage/" +
                      e.course.courseTitle.replace(/\s/g, "") +
                      ".png",
                    title: e.course.courseTitle,
                    description: e.course.courseDescription,
                  }),
                  Object(o.jsx)("div", {
                    className: "courseDescriptionANDGoals",
                    children: Object(o.jsx)(Mn, {
                      courseDetails: e.course,
                      color: u,
                    }),
                  }),
                ],
              }),
              Object(o.jsxs)("h1", {
                className: "courseDescription",
                style: { color: u },
                children: [
                  e.course.courseDescription,
                  Object(o.jsx)("br", {}),
                  Object(o.jsx)(Fn, {
                    onClick: function () {
                      x(!h);
                    },
                    style: { color: u },
                    children: h ? "Hide Course Details" : "Show Course Details",
                  }),
                  "\u200b",
                ],
              }),
              Object(o.jsx)("div", {
                style: { textAlign: "center" },
                children: Object(o.jsx)(E.b, {
                  to: "/".concat(
                    e.course.courseTitle.replace(/\s/g, ""),
                    "/start"
                  ),
                  children: Object(o.jsx)(Qn, { children: "Go to Course" }),
                }),
              }),
              h &&
                Object(o.jsxs)("div", {
                  className: "courseGoals",
                  children: [
                    Object(o.jsxs)("div", {
                      className: "courseGoalsDescription",
                      style: { color: u },
                      children: [
                        Object(o.jsx)("div", {
                          className: "courseGoalsHeader",
                          style: { color: u },
                          children: "You will learn",
                        }),
                        0 === Object.entries(e.course).length
                          ? Object(o.jsx)("div", { children: "Loading" })
                          : e.course.courseGoals.map(function (e, n) {
                              return Object(o.jsx)("p", { children: e });
                            }),
                      ],
                    }),
                    Object(o.jsxs)("div", {
                      className: "courseReference",
                      children: [
                        e.course.courseTitle &&
                          Object(o.jsx)("img", {
                            className: "courseReferenceImage",
                            src:
                              "https://qaleelo-assets.s3.us-east-2.amazonaws.com/" +
                              e.course.courseTitle.replace(/\s/g, "") +
                              "/courseReferenceImage/" +
                              e.course.courseTitle.replace(/\s/g, "") +
                              ".png",
                            alt: "",
                          }),
                        Object(o.jsx)("div", {
                          className: "courseReferenceDescription",
                          style: { color: u },
                          children: e.course.courseReferenceDescription,
                        }),
                      ],
                    }),
                  ],
                }),
            ],
          })
        );
      };
      var Un = function () {
        var e = Object(r.useState)([]),
          n = Object(i.a)(e, 2),
          t = n[0],
          c = n[1];
        return (
          Object(r.useEffect)(function () {
            u()("/coursesData").then(function (e) {
              c(e.data), console.log(e.data);
            });
          }, []),
          console.log(t),
          Object(o.jsxs)("div", {
            children: [
              Object(o.jsx)("div", {
                className: "sideNavChapterHeader",
                children: Object(o.jsx)("p", { children: "Courses" }),
              }),
              Object(o.jsx)("div", {
                className: "courseCardsContainer",
                children: t.map(function (e, n) {
                  return Object(o.jsx)(o.Fragment, {
                    children:
                      e.courseIsActive && Object(o.jsx)(Rn, { course: e }),
                  });
                }),
              }),
            ],
          })
        );
      };
      function Yn() {
        var e = Object(m.a)([
          "\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  left: 10px;\n  font-size: 3vh;\n",
        ]);
        return (
          (Yn = function () {
            return e;
          }),
          e
        );
      }
      function qn() {
        var e = Object(m.a)([
          '\n  width: 100%;\n  height: 80px;\n  padding: 10px;\n  padding-left: 100px;\n  font-family: "Quicksand", sans-serif;\n  font-size: 3vh;\n\n  border: none;\n  border-radius: 4px;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n',
        ]);
        return (
          (qn = function () {
            return e;
          }),
          e
        );
      }
      function Hn() {
        var e = Object(m.a)([
          "\n  position: relative;\n  width: 100%;\n  max-width: 700px;\n  margin-bottom: 20px;\n  margin-right: 90px;\n",
        ]);
        return (
          (Hn = function () {
            return e;
          }),
          e
        );
      }
      function Pn() {
        var e = Object(m.a)([
          "\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  height: 100%; /* Ensure the div takes full height */\n",
        ]);
        return (
          (Pn = function () {
            return e;
          }),
          e
        );
      }
      p.b.div(Pn()), p.b.div(Hn()), p.b.input(qn()), p.b.div(Yn());
      function Wn(e) {
        var n = b(),
          t = n.subContainer;
        n.courseTitleUserIsOn,
          n.setCourseTitleUserIsOn,
          n.courseDetails,
          n.setCourseDetails,
          n.topicDatafromBackEnd,
          n.setTopicDatafromBackEnd,
          n.exampleDatafromBackEnd,
          n.setExampleDatafromBackEnd,
          n.entryStore,
          n.setEntryStore;
        return Object(o.jsxs)("div", {
          className: "SidenavLandingPage",
          children: [
            Object(o.jsx)(S.a, {
              in: !t,
              timeout: 300,
              unmountOnExit: !0,
              mountOnEnter: !0,
              children: function (n) {
                return Object(o.jsx)(B, { state: n, closeNav: e.click });
              },
            }),
            Object(o.jsx)(S.a, {
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
      function Vn() {
        var e = Object(m.a)([
          '\n  background: red;\n  font-family: "Quicksand", sans-serif;\n  padding: 7px 12px;\n  /* margin-right: "20px"; */\n  text-transform: uppercase;\n  /* font-size: 15px; */\n  font-size: 5vh;\n  overflow: hidden;\n  border: 0;\n  border-radius: 15px;\n  background: #eb3535;\n  color: white;\n  /* box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5); */\n  transition: all 0.25s ease;\n  cursor: pointer;\n  display: block;\n  margin: 0 auto;\n  /* margin-top: 40px; */\n  display: block;\n  textdecoration: none;\n\n  &:active {\n    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.5);\n    background: #f2b1ae;\n  }\n',
        ]);
        return (
          (Vn = function () {
            return e;
          }),
          e
        );
      }
      function Gn() {
        var e = Object(m.a)([
          "\n  background: #dd6260;\n  /* top: 80; */\n  /* height: ",
          "vh; */\n  transform: translateY(",
          ");\n  transition: 0.2s;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  font-family: Quicksand;\n  /* justify-content: space-between; */\n",
        ]);
        return (
          (Gn = function () {
            return e;
          }),
          e
        );
      }
      var _n = p.b.nav(Gn(), 10, function (e) {
          return e.navTop + "vh";
        }),
        Jn = p.b.button(Vn());
      var Kn = function (e) {
          var n = b(),
            t = n.courseTitleUserIsOn,
            c = n.setCourseTitleUserIsOn,
            a = n.courseDetails,
            s = n.setCourseDetails,
            l = n.topicDatafromBackEnd,
            d = n.setTopicDatafromBackEnd,
            f = n.exampleDatafromBackEnd,
            m = n.setExampleDatafromBackEnd,
            p = n.entryStore,
            j = n.setEntryStore,
            h = (n.subContainer, window.location.href);
          console.log(h);
          var x = h.split("/");
          console.log(x);
          var g = x[x.length - 1];
          console.log(g);
          var v = [];
          (v = g.includes("%") ? g.split("%23") : g.split("#")), console.log(v);
          var O = v[1];
          console.log(O),
            Object(r.useEffect)(
              function () {
                void 0 === O && window.scrollTo({ top: 0, behavior: "smooth" });
              },
              [h]
            ),
            Object(r.useEffect)(function () {
              if (O) {
                var e = document.getElementById(O);
                e && e.scrollIntoView();
              }
            }),
            console.log(h),
            Object(r.useEffect)(function () {
              c(e.match.params.courseTitle);
            }, []),
            console.log(t),
            Object(r.useEffect)(
              function () {
                u()("/coursesData").then(function (e) {
                  console.log(e.data);
                  var n = e.data.find(function (e) {
                    return e.courseTitle.replace(/\s/g, "") === t;
                  });
                  s(n);
                });
              },
              [t]
            ),
            console.log(a),
            Object(r.useEffect)(
              function () {
                a &&
                  u()(
                    "/"
                      .concat(t, "/sideBarData?collectionName=")
                      .concat(a.courseTopicsCollectionName, "&modelName=")
                      .concat(a.courseTopicsModelName)
                  ).then(function (e) {
                    j(e.data), console.log(e.data);
                  }),
                  a &&
                    u()(
                      "/"
                        .concat(t, "/topicsData?collectionName=")
                        .concat(a.courseTopicsCollectionName, "&modelName=")
                        .concat(a.courseTopicsModelName)
                    ).then(function (e) {
                      d(e.data), console.log(e.data);
                    }),
                  a &&
                    u()(
                      "/examplesData?collectionName="
                        .concat(a.courseExamplesCollectionName, "&modelName=")
                        .concat(a.courseExamplesModelName)
                    ).then(function (e) {
                      m(e.data), console.log(e.data);
                    });
              },
              [a]
            ),
            console.log(p, l, f);
          var w = Object(r.useState)(0),
            N = Object(i.a)(w, 2),
            y = N[0],
            k = N[1],
            C = window.scrollY;
          return (
            window.addEventListener("scroll", function () {
              C < window.scrollY ? k(-{ navBarHeight: 10 }) : k(0),
                (C = window.scrollY);
            }),
            a
              ? Object(o.jsxs)("div", {
                  children: [
                    Object(o.jsxs)(_n, {
                      style: { position: "sticky", top: 0, zIndex: 1 },
                      navTop: y,
                      children: [
                        a.courseTitle &&
                          Object(o.jsx)("img", {
                            className: "landingPageCourseImage",
                            src:
                              "https://qaleelo-assets.s3.us-east-2.amazonaws.com/" +
                              a.courseTitle.replace(/\s/g, "") +
                              "/courseImage/" +
                              a.courseTitle.replace(/\s/g, "") +
                              ".png",
                            alt: "",
                          }),
                        Object(o.jsx)(E.b, {
                          to: "/".concat(t, "/lesson/1.1.1"),
                          style: { margin: "60px" },
                          children: Object(o.jsx)(Jn, { children: " Start" }),
                        }),
                      ],
                    }),
                    Object(o.jsx)(Wn, {}),
                  ],
                })
              : Object(o.jsx)("div", { children: "Loading" })
          );
        },
        Xn = t(174),
        $n = t.n(Xn),
        Zn = (t(451), t(166), t(175));
      function et() {
        var e = Object(m.a)([
          "\n  /* font-size: 2vh; */\n  display: ",
          ";\n  align-items: center;\n  justify-content: center;\n",
        ]);
        return (
          (et = function () {
            return e;
          }),
          e
        );
      }
      function nt() {
        var e = Object(m.a)([
          "\n  font-size: 2.5vh;\n  font-weight: bold;\n  text-align: center;\n  font-family: Quicksand;\n  /* border-radius: 15px; */\n  /* padding: 10px; */\n  color: #252525;\n  display: flex;\n  background: ",
          ";\n  /* margin: 20px; */\n  transition: transform 300ms;\n  justify-content: center;\n\n  &:hover {\n    cursor: pointer;\n  }\n",
        ]);
        return (
          (nt = function () {
            return e;
          }),
          e
        );
      }
      function tt() {
        var e = Object(m.a)([
          "\n  /* font-size: 17px; */\n  font-size: 2.5vh;\n  font-weight: bold;\n  text-align: center;\n  color: #a678de;\n  padding: 20px;\n",
        ]);
        return (
          (tt = function () {
            return e;
          }),
          e
        );
      }
      function ot() {
        var e = Object(m.a)([
          '\n  /* box-shadow: 0 0.1rem 0.5rem rgba(0, 0, 0, 0.2); */\n  border-radius: 5px;\n  padding: 10px;\n  /* background: #252525; */\n  /* margin-top: 80px; */\n  font-family: "Quicksand", sans-serif;\n',
        ]);
        return (
          (ot = function () {
            return e;
          }),
          e
        );
      }
      var rt = p.b.div(ot()),
        ct = p.b.div(tt()),
        at = Object(p.b)(Re.a.div)(nt(), function (e) {
          return e.answerClicked == e.answer ? e.answerColor : "#D2CFE6";
        }),
        st = p.b.div(et(), function (e) {
          return e.answerClicked == e.answer ? "flex" : "none";
        }),
        it = function (e) {
          console.log(e);
          var n = b(),
            t = n.courseTitleUserIsOn,
            c = n.entryStore,
            a = n.isDarkMode;
          console.log(Zn), console.log(c);
          var s = Object(r.useState)("#e8e2ef"),
            l = Object(i.a)(s, 2),
            u = l[0],
            d = l[1],
            f = Object(r.useState)("NoAnswer"),
            m = Object(i.a)(f, 2),
            p = m[0],
            j = m[1],
            h = Object(r.useState)(!1),
            x = Object(i.a)(h, 2),
            g = (x[0], x[1]),
            O = Object(r.useRef)(null),
            w = Object(r.useState)(!1),
            N = Object(i.a)(w, 2),
            y = N[0],
            k = N[1],
            C = Object(r.useState)([]),
            T = Object(i.a)(C, 2),
            S = T[0],
            D = T[1],
            z = window.innerWidth <= 768;
          return (
            Object(r.useEffect)(function () {
              D(
                (function (e) {
                  for (var n = Object(v.a)(e), t = n.length - 1; t > 0; t--) {
                    var o = Math.floor(Math.random() * (t + 1)),
                      r = [n[o], n[t]];
                    (n[t] = r[0]), (n[o] = r[1]);
                  }
                  return n;
                })(e.sectionExample.answers)
              );
            }, []),
            Object(o.jsxs)(rt, {
              className: "LessonExampleBox",
              children: [
                Object(o.jsx)(ct, {
                  children: e.sectionExample && e.sectionExample.question,
                }),
                S.map(function (e) {
                  return Object(o.jsxs)(o.Fragment, {
                    children: [
                      Object(o.jsx)(at, {
                        className: "LessonExampleAnswerBox",
                        whileHover: { scale: 1.2 },
                        whileTap: { scale: 0.8 },
                        transition: {
                          type: "spring",
                          stiffness: 400,
                          damping: 17,
                        },
                        onClick: function () {
                          return (function (e, n) {
                            if ((j(n), g(!0), console.log(p), 1 == e)) {
                              d("#DAF7A6"), k(!0);
                              var t = z ? 1e3 : 300;
                              setTimeout(function () {
                                window.scrollBy({ top: t, behavior: "smooth" });
                              }, 300),
                                console.log(u);
                            } else d("#ff726f");
                          })(e.isCorrect, e.answer);
                        },
                        answerColor: u,
                        answer: e.answer,
                        answerClicked: p,
                        children: Object(o.jsx)("div", {
                          className: "LessonExampleAnswer",
                          children: e.answer,
                        }),
                      }),
                      Object(o.jsx)(st, {
                        answerClicked: p,
                        answer: e.answer,
                        answerColor: u,
                        children:
                          0 == e.isCorrect
                            ? Object(o.jsxs)("div", {
                                className:
                                  "LessonExampleAnswerExplanationContainer ".concat(
                                    a ? "darkThemeFont" : "lightThemeFont"
                                  ),
                                children: [
                                  Object(o.jsx)("i", {
                                    class: "wrongCross fa-solid fa-xmark",
                                  }),
                                  Object(o.jsx)("p", {
                                    style: { display: "inline" },
                                    className: "LessonExampleAnswerExplanation",
                                    children: e.explanation,
                                  }),
                                ],
                              })
                            : Object(o.jsxs)(o.Fragment, {
                                children: [
                                  Object(o.jsx)("i", {
                                    class: "correctCheckMark fa-solid fa-check",
                                  }),
                                  y &&
                                    Object(o.jsx)(Xe.a, {
                                      autoStart: !0,
                                      duration: 5e3,
                                      particleCount: 100,
                                      spread: 360,
                                      origin: { x: 0.8, y: 0.5 },
                                      force: 0.8,
                                      width: 1600,
                                    }),
                                  Object(o.jsx)("p", {
                                    className:
                                      "LessonExampleAnswerExplanation ".concat(
                                        a ? "darkThemeFont" : "lightThemeFont"
                                      ),
                                    children: "Correct!",
                                  }),
                                  y &&
                                    Object(o.jsx)(Xe.a, {
                                      autoStart: !0,
                                      duration: 5e3,
                                      particleCount: 100,
                                      spread: 360,
                                      origin: { x: 0.8, y: 0.5 },
                                      force: 0.8,
                                      width: 1600,
                                    }),
                                ],
                              }),
                      }),
                    ],
                  });
                }),
                y &&
                  0 == e.nextLessonNumber &&
                  Object(o.jsxs)(Re.a.div, {
                    ref: O,
                    className: "LessonExampleNextLessonBox",
                    initial: { opacity: 0, scale: 0.5 },
                    animate: { opacity: 1, scale: [1, 1.03, 1] },
                    transition: {
                      duration: 0.8,
                      delay: 0.3,
                      ease: [0, 0.71, 0.2, 1.01],
                    },
                    children: [
                      Object(o.jsxs)("div", {
                        style: {},
                        className: "LessonTitleContainer",
                        children: [
                          Object(o.jsx)("span", {
                            className: "LessonNumber",
                            children: "End Of Chapter",
                          }),
                          " ",
                        ],
                      }),
                      Object(o.jsx)(E.b, {
                        to: "/".concat(t, "/quiz/").concat(e.chapterNumber),
                        children: Object(o.jsx)(Re.a.div, {
                          whileTap: { scale: 0.8 },
                          transition: {
                            type: "spring",
                            stiffness: 400,
                            damping: 17,
                          },
                          children: Object(o.jsx)(Q, {
                            number: e.chapterNumber,
                            title: e.chapterTitle,
                            width: "90%",
                            marginLeft: "5%",
                          }),
                        }),
                      }),
                    ],
                  }),
                " ",
                y &&
                  !1 !== e.nextLessonNumber &&
                  Object(o.jsxs)(Re.a.div, {
                    ref: O,
                    className: "LessonExampleNextLessonBox",
                    initial: { opacity: 0, scale: 0.5 },
                    animate: { opacity: 1, scale: [1, 1.03, 1] },
                    transition: {
                      duration: 0.8,
                      delay: 0.3,
                      ease: [0, 0.71, 0.2, 1.01],
                    },
                    children: [
                      Object(o.jsxs)("div", {
                        style: {},
                        className: "LessonTitleContainer",
                        children: [
                          Object(o.jsx)("span", {
                            className: "LessonNumber",
                            children: "Next Lesson",
                          }),
                          " ",
                        ],
                      }),
                      Object(o.jsx)(E.b, {
                        to: "/"
                          .concat(t, "/lesson/")
                          .concat(e.nextLessonNumber),
                        children: Object(o.jsx)(Re.a.div, {
                          whileTap: { scale: 0.8 },
                          transition: {
                            type: "spring",
                            stiffness: 400,
                            damping: 17,
                          },
                          children: Object(o.jsx)(F, {
                            number: e.nextLessonNumber,
                            title: e.nextLessonTitle,
                            width: "90%",
                            marginLeft: "5%",
                            borderRadius: "14% 2% 2% 14% / 50% 10% 10% 50%",
                          }),
                        }),
                      }),
                    ],
                  }),
              ],
            })
          );
        },
        lt = t(176),
        ut = t.n(lt);
      var dt = function (e) {
          var n = Object(r.useState)(null),
            t = Object(i.a)(n, 2),
            c = t[0],
            a = t[1];
          return (
            Object(r.useEffect)(function () {
              var n = e.lottieFile;
              fetch(n)
                .then(function (e) {
                  return e.json();
                })
                .then(function (e) {
                  return a(e);
                })
                .catch(function (e) {
                  return console.error("Error fetching animation:", e);
                });
            }, []),
            Object(o.jsx)(Re.a.div, {
              className: e.className,
              style: e.style,
              initial: e.initial,
              animate: e.animate,
              exit: e.exit,
              transition: e.transition,
              children:
                c &&
                Object(o.jsx)(ut.a, {
                  animationData: c,
                  speed: e.speed,
                  loop: e.loop,
                }),
            })
          );
        },
        bt = function (e) {
          var n = Object(r.useState)(0),
            t = Object(i.a)(n, 2),
            c = t[0],
            a = t[1],
            s = Object(r.useState)({}),
            l = Object(i.a)(s, 2),
            d = l[0],
            f = l[1],
            m = b(),
            p = m.courseDetails,
            j = m.setCourseDetails,
            h = m.courseTitleUserIsOn,
            x = m.setCourseTitleUserIsOn,
            g = m.entryStore,
            v = m.isDarkMode;
          var O = (function (e) {
              var n = null,
                t = null,
                o = !1;
              if (g) {
                var r,
                  c = Object(Be.a)(g);
                try {
                  for (c.s(); !(r = c.n()).done; ) {
                    var a,
                      s = r.value,
                      i = Object(Be.a)(s.entries);
                    try {
                      for (i.s(); !(a = i.n()).done; ) {
                        var l,
                          u = a.value,
                          d = Object(Be.a)(u.entries);
                        try {
                          for (d.s(); !(l = d.n()).done; ) {
                            var b,
                              f = l.value,
                              m = Object(Be.a)(f.entries);
                            try {
                              for (m.s(); !(b = m.n()).done; ) {
                                if (b.value.sectionNumber === e) {
                                  o = !0;
                                  var p = f.entries.findIndex(function (n) {
                                    return n.sectionNumber === e;
                                  });
                                  if (p !== f.entries.length - 1) {
                                    var j = f.entries[p + 1];
                                    (n = j.sectionNumber), (t = j.title);
                                  }
                                  break;
                                }
                              }
                            } catch (h) {
                              m.e(h);
                            } finally {
                              m.f();
                            }
                            if (o) break;
                          }
                        } catch (h) {
                          d.e(h);
                        } finally {
                          d.f();
                        }
                        if (o) break;
                      }
                    } catch (h) {
                      i.e(h);
                    } finally {
                      i.f();
                    }
                    if (o) break;
                  }
                } catch (h) {
                  c.e(h);
                } finally {
                  c.f();
                }
              }
              return (
                null !== n && { nextSectionNumber: n, nextSectionTitle: t }
              );
            })(d.sectionNumber),
            w = "",
            N = "";
          !1 === O
            ? (console.log("No next section."), (w = !1), (N = !1))
            : (console.log("Next Section Number:", O.nextSectionNumber),
              console.log("Next Section Title:", O.nextSectionTitle),
              (w = O.nextSectionNumber),
              (N = O.nextSectionTitle)),
            console.log(w, N);
          var y = (function (e, n) {
              if (n) {
                var t,
                  o = Object(Be.a)(n);
                try {
                  for (o.s(); !(t = o.n()).done; ) {
                    var r,
                      c = t.value,
                      a = Object(Be.a)(c.entries);
                    try {
                      for (a.s(); !(r = a.n()).done; ) {
                        var s,
                          i = r.value,
                          l = Object(Be.a)(i.entries);
                        try {
                          for (l.s(); !(s = l.n()).done; ) {
                            var u,
                              d = s.value,
                              b = Object(Be.a)(d.entries);
                            try {
                              for (b.s(); !(u = b.n()).done; ) {
                                if (u.value.sectionNumber === e)
                                  return {
                                    chapterTitle: d.title,
                                    chapterNumber: d.topicNumber,
                                  };
                              }
                            } catch (f) {
                              b.e(f);
                            } finally {
                              b.f();
                            }
                          }
                        } catch (f) {
                          l.e(f);
                        } finally {
                          l.f();
                        }
                      }
                    } catch (f) {
                      a.e(f);
                    } finally {
                      a.f();
                    }
                  }
                } catch (f) {
                  o.e(f);
                } finally {
                  o.f();
                }
              }
              return null;
            })(d.sectionNumber, g),
            k = "",
            C = "";
          y
            ? (console.log("Chapter Title:", y.chapterTitle),
              console.log("Chapter Number:", y.chapterNumber),
              (k = y.chapterTitle),
              (C = y.chapterNumber))
            : console.log("Section not found."),
            console.log(p),
            console.log(g),
            Object(r.useEffect)(function () {
              x(e.match.params.courseTitle);
            }, []),
            console.log(h),
            console.log(e.match.params.courseTitle),
            Object(r.useEffect)(
              function () {
                u()("/coursesData").then(function (n) {
                  console.log(n.data);
                  var t = n.data.find(function (n) {
                    return (
                      n.courseTitle.replace(/\s/g, "") ===
                      e.match.params.courseTitle
                    );
                  });
                  j(t);
                });
              },
              [h]
            ),
            console.log(p),
            console.log(p),
            console.log(e.match.params.courseTitle),
            console.log(e.match),
            console.log(e.match.params.lessonNumber);
          var T = e.match.params.lessonNumber;
          console.log(T),
            console.log(p.courseTopicsCollectionName),
            console.log(p.courseTopicsModelName),
            Object(r.useEffect)(
              function () {
                u()(
                  "/"
                    .concat(e.match.params.courseTitle, "/lessonRESTCAll/")
                    .concat(T, "?collectionName=")
                    .concat(p.courseTopicsCollectionName, "&modelName=")
                    .concat(p.courseTopicsModelName)
                ).then(function (e) {
                  f(e.data);
                });
              },
              [T, p]
            ),
            console.log(
              "/"
                .concat(e.match.params.courseTitle, "/lessonRESTCAll/")
                .concat(T, "?collectionName=")
                .concat(p.courseTopicsCollectionName, "&modelName=")
                .concat(p.courseTopicsModelName)
            ),
            console.log(d);
          var S = Object(r.useState)([]),
            E = Object(i.a)(S, 2),
            D = E[0],
            z = E[1];
          Object(r.useEffect)(
            function () {
              u()(
                "/examplesData?collectionName="
                  .concat(p.courseExamplesCollectionName, "&modelName=")
                  .concat(p.courseExamplesModelName)
              ).then(function (e) {
                z(e.data), console.log(e.data);
              });
            },
            [T, p]
          ),
            console.log(D);
          var I = function () {
              a(function (e) {
                return e + 1;
              });
            },
            L = window.innerWidth <= 768;
          Object(r.useEffect)(
            function () {
              if (d.lessonAnimation && c == d.lessonAnimation.length - 1) {
                var e = L ? 1e3 : 300;
                setTimeout(function () {
                  window.scrollBy({ top: e, behavior: "smooth" });
                }, 1500);
              } else if (c > 0) {
                var n = document.getElementById("section-".concat(c - 1));
                n && n.scrollIntoView({ behavior: "smooth" });
              }
            },
            [c]
          ),
            Object(r.useEffect)(
              function () {
                a(0);
              },
              [T, d]
            );
          return "undefined" === d || null === d || 0 === d.length
            ? Object(o.jsx)("div", { children: "Loading" })
            : Object(o.jsxs)("div", {
                children: [
                  Object(o.jsx)(Nn, {}),
                  Object(o.jsxs)("div", {
                    className: "Lesson",
                    children: [
                      Object(o.jsxs)("div", {
                        className: "LessonContainer",
                        children: [
                          Object(o.jsxs)("div", {
                            style: {},
                            className: "LessonTitleContainer",
                            children: [
                              Object(o.jsxs)("span", {
                                className: "LessonNumber",
                                children: ["Lesson ", d.sectionNumber],
                              }),
                              " ",
                              Object(o.jsx)("br", {}),
                              Object(o.jsx)("span", {
                                className: "LessonTitle",
                                children: d.sectionTitle,
                              }),
                            ],
                          }),
                          d.lessonAnimation &&
                            d.lessonAnimation.map(function (e, n) {
                              return (
                                n <= c &&
                                Object(o.jsx)(
                                  Re.a.div,
                                  {
                                    id: "section-".concat(n),
                                    className: e.className,
                                    style: e.style,
                                    initial: e.initial,
                                    animate: e.animate,
                                    exit: e.exit,
                                    transition: e.transition,
                                    children: e.subSections.map(function (
                                      e,
                                      n
                                    ) {
                                      return "LottieAnimation" == e.className
                                        ? Object(o.jsx)(
                                            dt,
                                            {
                                              lottieFile: e.lottieFilePath,
                                              className: e.className,
                                              style: e.style,
                                              initial: e.initial,
                                              animate: e.animate,
                                              exit: e.exit,
                                              transition: e.transition,
                                              speed: e.speed,
                                              loop: e.loop,
                                            },
                                            n
                                          )
                                        : Object(o.jsx)(
                                            Re.a.div,
                                            {
                                              className: ""
                                                .concat(e.className, " ")
                                                .concat(
                                                  v
                                                    ? "darkThemeFont"
                                                    : "lightThemeFont"
                                                ),
                                              style: e.style,
                                              initial: e.initial,
                                              animate: e.animate,
                                              exit: e.exit,
                                              transition: e.transition,
                                              children: Object(o.jsxs)("div", {
                                                style: e.contentStyle,
                                                children: [
                                                  $n()(e.content),
                                                  " ",
                                                ],
                                              }),
                                            },
                                            n
                                          );
                                    }),
                                  },
                                  n
                                )
                              );
                            }),
                          " ",
                          d.lessonAnimation &&
                            c == d.lessonAnimation.length - 1 &&
                            Object(o.jsx)(Re.a.div, {
                              initial: { opacity: 0 },
                              animate: { opacity: 1 },
                              transition: { delay: 1.5 },
                              children: Object(o.jsx)(it, {
                                nextLessonNumber: w,
                                nextLessonTitle: N,
                                chapterNumber: C,
                                chapterTitle: k,
                                sectionExample: (function (e) {
                                  var n =
                                    0 !== D.length &&
                                    D.filter(function (n) {
                                      return n.sectionNumber == e;
                                    });
                                  return n[
                                    Math.floor(Math.random() * n.length)
                                  ];
                                })(d.sectionNumber),
                              }),
                            }),
                          Object(o.jsx)("div", {
                            style: { minHeight: "1000px" },
                          }),
                        ],
                      }),
                      d.lessonAnimation &&
                        c < d.lessonAnimation.length - 1 &&
                        Object(o.jsx)("div", {
                          className: "forwardButton",
                          onClick: I,
                        }),
                      0 == c &&
                        Object(o.jsxs)(Re.a.div, {
                          className: "".concat(
                            v
                              ? "forwardButtonVisibleDark"
                              : "forwardButtonVisibleLight"
                          ),
                          onClick: I,
                          initial: { opacity: 0 },
                          animate: { opacity: 1 },
                          transition: {
                            duration: 0.5,
                            repeat: 1 / 0,
                            repeatType: "reverse",
                          },
                          children: [
                            "Tap anywhere ",
                            Object(o.jsx)("br", {}),
                            "to continue learning",
                          ],
                        }),
                    ],
                  }),
                ],
              });
        };
      var ft = function () {
          var e = b(),
            n = (e.courseTitleUserIsOn, e.entryStore, e.isDarkMode);
          return (
            e.setIsDarkMode,
            (document.body.className = n ? "darkbody" : "lightbody"),
            Object(o.jsx)(E.a, {
              children: Object(o.jsxs)(Ae.c, {
                children: [
                  Object(o.jsx)(Ae.a, { path: "/", exact: !0, component: Un }),
                  Object(o.jsx)(Ae.a, {
                    path: "/:courseTitle/topic/:topicNumber",
                    component: Me,
                  }),
                  Object(o.jsx)(Ae.a, {
                    path: "/:courseTitle/quiz/:topicNumber",
                    component: In,
                  }),
                  Object(o.jsx)(Ae.a, {
                    path: "/:courseTitle/start",
                    component: Kn,
                  }),
                  Object(o.jsx)(Ae.a, {
                    path: "/:courseTitle/lesson/:lessonNumber",
                    component: bt,
                  }),
                ],
              }),
            })
          );
        },
        mt = Boolean(
          "localhost" === window.location.hostname ||
            "[::1]" === window.location.hostname ||
            window.location.hostname.match(
              /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
            )
        );
      function pt(e, n) {
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
          children: Object(o.jsx)(f, { children: Object(o.jsx)(ft, {}) }),
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
              mt
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
                          : pt(e, n);
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
                : pt(n, e);
            });
          }
        })();
    },
    96: function (e, n, t) {},
    97: function (e, n, t) {},
  },
  [[454, 1, 2]],
]);
//# sourceMappingURL=main.90cc888a.chunk.js.map
