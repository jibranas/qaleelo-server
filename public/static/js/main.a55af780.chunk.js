(this["webpackJsonpquran-app"] = this["webpackJsonpquran-app"] || []).push([
  [0],
  {
    132: function (e, s, t) {},
    147: function (e) {
      e.exports = JSON.parse("{}");
    },
    152: function (e, s, t) {
      e.exports = { SampleButton: "Buttons_SampleButton__1mfjJ" };
    },
    30: function (e, s, t) {},
    322: function (e, s) {},
    330: function (e, s, t) {},
    339: function (e, s, t) {},
    340: function (e, s, t) {},
    341: function (e, s, t) {},
    366: function (e, s) {},
    386: function (e, s, t) {
      "use strict";
      t.r(s);
      var n = t(1),
        o = t.n(n),
        a = t(26),
        c = t.n(a);
      t(163);
      var r = t(5),
        i = t.n(r),
        l = t(0);
      const d = o.a.createContext();
      function m() {
        return Object(n.useContext)(d);
      }
      function u(e) {
        const [s, t] = Object(n.useState)(!1),
          [o, a] = Object(n.useState)(null),
          [c, r] = Object(n.useState)(null),
          [i, m] = Object(n.useState)([]),
          [u, h] = Object(n.useState)([]),
          [b, p] = Object(n.useState)([]),
          [g, j] = Object(n.useState)("");
        console.log(g);
        const [x, f] = Object(n.useState)({});
        console.log(x);
        const [O, v] = Object(n.useState)({});
        console.log(x);
        const [N, w] = Object(n.useState)(null);
        console.log(N);
        const [y, k] = Object(n.useState)(!1),
          [T, C] = Object(n.useState)(null);
        console.log(N);
        const [S, I] = Object(n.useState)(null);
        console.log(N);
        const E = localStorage.getItem("preferredMode"),
          [L, z] = Object(n.useState)("dark" === E),
          D = {
            subContainer: s,
            setSubContainer: t,
            subContainerEntries: o,
            setSubContainerEntries: a,
            entryStore: c,
            setEntryStore: r,
            topicDatafromBackEnd: i,
            setTopicDatafromBackEnd: m,
            exampleDatafromBackEnd: u,
            setExampleDatafromBackEnd: h,
            topicNumbersListfromBackEnd: b,
            setTopicNumbersListfromBackEnd: p,
            courseTitleUserIsOn: g,
            setCourseTitleUserIsOn: j,
            courseDetails: x,
            setCourseDetails: f,
            selectedLesson: O,
            setSelectedLesson: v,
            isDarkMode: L,
            setIsDarkMode: z,
            progressData: N,
            setProgressData: w,
            chapterProgressData: T,
            setChapterProgressData: C,
            navOpen: y,
            setNavOpen: k,
          };
        return Object(l.jsx)(d.Provider, { value: D, children: e.children });
      }
      var h,
        b,
        p,
        g,
        j = t(3),
        x = t(2);
      t(9), t(44), t(11);
      x.b.footer(
        h ||
          (h = Object(j.a)([
            "\n  background: #f2f2f2;\n  padding: 10px;\n  text-align: center;\n",
          ]))
      ),
        x.b.p(
          b ||
            (b = Object(j.a)([
              "\n  margin: 0;\n  font-size: 14px;\n  color: #888;\n",
            ]))
        ),
        x.b.div(p || (p = Object(j.a)(["\n  margin-top: 10px;\n"]))),
        x.b.a(
          g ||
            (g = Object(j.a)([
              "\n  color: #888;\n  margin-right: 10px;\n  &:hover {\n    color: #000;\n  }\n",
            ]))
        );
      t.p, t(30);
      function f(e) {
        return Object(l.jsx)("div", {
          className: "hamburger-btn",
          onClick: e.click,
          children: "\u2630",
        });
      }
      var O = t(23),
        v = t(393);
      var N = (e) => {
        const {
          courseTitleUserIsOn: s,
          entryStore: t,
          isDarkMode: o,
          subContainer: a,
          setCourseTitleUserIsOn: c,
          courseDetails: r,
          setCourseDetails: d,
          topicDatafromBackEnd: u,
          setTopicDatafromBackEnd: h,
          exampleDatafromBackEnd: b,
          setExampleDatafromBackEnd: p,
          setEntryStore: g,
          setIsDarkMode: j,
          progressData: x,
          setProgressData: f,
          chapterProgressData: O,
          setChapterProgressData: N,
        } = m();
        Object(n.useEffect)(() => {
          const e = localStorage.getItem("userEmail");
          if (!e)
            return void console.error("User email not found in local storage");
          (async () => {
            try {
              const s = await i.a.get("/fetchProgressRecord", {
                params: { userEmail: e },
              });
              f(s.data);
            } catch (s) {
              console.error("Error fetching progress data:", s);
            }
          })();
        }, []),
          console.log(x),
          console.log(s),
          Object(n.useEffect)(() => {
            const e = localStorage.getItem("userEmail");
            if (!e)
              return void console.error(
                "User email not found in local storage"
              );
            (async () => {
              try {
                const s = await i.a.get("/fetchChapterProgressRecord", {
                  params: { userEmail: e },
                });
                N(s.data);
              } catch (s) {
                console.error("Error fetching chapter progress data:", s);
              }
            })();
          }, []),
          console.log(O),
          console.log(s);
        const w =
          (y = t) &&
          y
            .map((e) =>
              e.entries.map((e) => ({
                chapterNumber: e.topicNumber,
                chapterTitle: e.title,
                lessons: e.entries[0].entries.map((e) => ({
                  lessonNumber: e.sectionNumber,
                  lessonTitle: e.title,
                })),
              }))
            )
            .flat();
        var y;
        console.log(w);
        const k = (function (e, s, t, n) {
          const o = [],
            a = e && e.find((e) => e.courseProgress === n);
          if (a) {
            const { lessonProgress: e } = a,
              r = e[e.length - 1],
              i =
                s && s.find((e) => e.lessons.some((e) => e.lessonNumber === r));
            if (i) {
              const { lessons: a } = i,
                l = a.findIndex((e) => e.lessonNumber === r);
              if (l === a.length - 1) {
                o.push(...e);
                const a =
                    s.findIndex((e) => e.chapterNumber === i.chapterNumber) + 1,
                  r = s[a];
                if (r) {
                  var c;
                  const e =
                    t &&
                    (null === (c = t.find((e) => e.courseProgress === n)) ||
                    void 0 === c
                      ? void 0
                      : c.chapterProgress);
                  if (e && e.includes(i.chapterNumber)) {
                    const e = r.lessons[0];
                    o.push(e.lessonNumber);
                  }
                }
              } else {
                const s = a[l + 1];
                o.push(...e, s.lessonNumber);
              }
            }
          }
          return o;
        })(x, w, O, s);
        console.log(k);
        const T = (function (e, s, t) {
            const n = [],
              o = e && e.find((e) => e.courseProgress === t);
            return (
              o &&
                s &&
                s.forEach((e) => {
                  const s = e.lessons[e.lessons.length - 1].lessonNumber;
                  o.lessonProgress.includes(s) && n.push(e.chapterNumber);
                }),
              n
            );
          })(x, w, s),
          C = (function (e, s) {
            const t = [];
            return (
              e &&
                e.forEach((e) => {
                  e.lessons.some((e) => s.includes(e.lessonNumber)) &&
                    t.push(e.chapterNumber);
                }),
              t
            );
          })(w, k);
        console.log(T), console.log(C);
        const S =
          x && x.find((s) => s.courseProgress === e.courseTitleUserIsOn);
        console.log(S);
        const I =
          O && O.find((s) => s.courseProgress === e.courseTitleUserIsOn);
        console.log(I);
        const E = new Set(
          (null === S || void 0 === S ? void 0 : S.lessonProgress) || []
        );
        console.log(E);
        const L = new Set(
          (null === I || void 0 === I ? void 0 : I.chapterProgress) || []
        );
        console.log(L);
        const z = e.lessonNumber
          ? e.lessonNumber.substring(0, e.lessonNumber.lastIndexOf("."))
          : e.chapterNumber;
        console.log(z);
        const D = w && w.find((e) => e.chapterNumber === z);
        console.log(D);
        const M = (null === D || void 0 === D ? void 0 : D.lessons.length) || 0;
        console.log(M);
        const P = L.has(z) ? 1 : 0;
        console.log(P);
        let B = 0;
        null === D ||
          void 0 === D ||
          D.lessons.forEach((e) => {
            E.has(e.lessonNumber) && B++;
          }),
          console.log(B);
        const F = Math.ceil(((B + P) / (M + 1)) * 100);
        return (
          console.log(F),
          Object(l.jsx)("div", {
            children: Object(l.jsx)("div", {
              style: {
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                maxWidth: "85%",
                marginLeft: "7%",
              },
              children: Object(l.jsx)("div", {
                style: {
                  flex: 1,
                  backgroundColor: "#f0f0f0",
                  borderRadius: 20,
                },
                children: Object(l.jsx)(v.a.div, {
                  style: {
                    width: "".concat(F, "%"),
                    backgroundColor: "rgb(80, 200, 120)",
                    height: 15,
                    borderRadius: "inherit",
                    textAlign: "center",
                    lineHeight: "20px",
                    color: "white",
                  },
                  initial: { width: 0 },
                  animate: { width: "".concat(F, "%") },
                  transition: { duration: 0.5, ease: "easeInOut" },
                }),
              }),
            }),
          })
        );
      };
      function w(e) {
        const {
            setSubContainer: s,
            setSubContainerEntries: t,
            courseDetails: o,
            courseTitleUserIsOn: a,
            chapterProgressData: c,
          } = m(),
          [r, i] = Object(n.useState)(""),
          [d, u] = Object(n.useState)(""),
          [h, b] = Object(n.useState)(!0),
          [p, g] = Object(n.useState)("#dd6260");
        Object(n.useEffect)(() => {
          const s =
            "https://qaleelo-assets.s3.us-east-2.amazonaws.com/" +
            o.courseTitle.replace(/\s/g, "") +
            "/sectionImages/" +
            e.number +
            ".1.png";
          j(s);
        }, []);
        const j = async (e) => {
            const s = localStorage.getItem(e);
            if (s) x(s);
            else
              try {
                const s = await fetch(e, {
                  method: "GET",
                  headers: { "Cache-Control": "no-cache" },
                });
                if (s.ok) {
                  const t = await s.blob(),
                    n = new FileReader();
                  n.readAsDataURL(t),
                    (n.onloadend = () => {
                      const s = n.result,
                        t = new Image();
                      (t.src = s),
                        (t.onload = () => {
                          const s = new O.a().getColor(t),
                            n = "rgb("
                              .concat(s[0], ", ")
                              .concat(s[1], ", ")
                              .concat(s[2], ")");
                          x(n), localStorage.setItem(e, n);
                        });
                    });
                } else console.error("Image fetch failed:", s.status);
              } catch (t) {
                console.error("Error fetching image:", t);
              }
          },
          x = (e) => {
            i(e);
            const s = f(e);
            u(s > 0.5 ? "#000" : "#fff"), b(!1);
          },
          f = (e) => {
            const s = e.match(/\d+/g);
            return (0.299 * s[0] + 0.587 * s[1] + 0.114 * s[2]) / 255;
          };
        Object(n.useEffect)(() => {
          if (a && c && c.length > 0) {
            const s = c.find((e) => e.courseProgress === a);
            s && s.chapterProgress.includes(e.number)
              ? g("rgb(80, 200, 120)")
              : g("#dd6260");
          }
        }, [a, c]);
        const v = "https://qaleelo-assets.s3.us-east-2.amazonaws.com/"
          .concat(o.courseTitle.replace(/\s/g, ""), "/sectionImages/")
          .concat(e.number, ".1.png");
        return Object(l.jsxs)("div", {
          className: "sidenavRow",
          style: {
            ...e.styleVariable,
            backgroundColor: r,
            opacity: "locked" === e.lockState && "1.1" !== e.number ? 0.6 : 1,
          },
          onClick: () => e.entries && (s(!0), void t(e.entries)),
          children: [
            Object(l.jsx)("div", {
              className: "circle",
              style: {
                backgroundColor: p,
                opacity:
                  "locked" === e.lockState && "1.1" !== e.number ? 0.8 : 1,
              },
              children: Object(l.jsx)("span", {
                className: "circle-number",
                children: e.number,
              }),
            }),
            "locked" === e.lockState && "1.1" !== e.number
              ? Object(l.jsx)("div", {
                  style: {
                    position: "relative",
                    width: "250px",
                    height: "250px",
                    backgroundImage: "url(".concat(v, ")"),
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    borderRadius: "10%",
                    float: "left",
                    opacity: 0.8,
                  },
                  children: Object(l.jsx)("img", {
                    src: "https://qaleelo-assets.s3.us-east-2.amazonaws.com/General/CanvaGeneratedImages/lockwhite.png",
                    alt: "",
                    style: {
                      position: "absolute",
                      left: 0,
                      top: 0,
                      right: 0,
                      bottom: 0,
                      display: "block",
                      margin: "auto",
                      width: "100px",
                    },
                  }),
                })
              : Object(l.jsx)("div", {
                  style: {
                    position: "relative",
                    width: "250px",
                    height: "250px",
                    backgroundImage: "url(".concat(v, ")"),
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    borderRadius: "10%",
                    float: "left",
                  },
                }),
            Object(l.jsxs)("div", {
              style: { display: "flex", flexDirection: "column" },
              children: [
                " ",
                Object(l.jsx)("div", {
                  style: { marginTop: "20px", maxWidth: "92%" },
                  children: Object(l.jsx)(N, {
                    chapterNumber: e.number,
                    courseTitleUserIsOn: a,
                  }),
                }),
                Object(l.jsx)("p", {
                  className: "sidenavRowText",
                  style: { color: d },
                  children: h ? "Loading..." : "".concat(e.title),
                }),
              ],
            }),
          ],
        });
      }
      var y = t(394);
      var k = t(4);
      var T,
        C,
        S,
        I,
        E = (e) => {
          const s =
              e.progressData &&
              e.progressData.find(
                (s) => s.courseProgress === e.courseTitleUserIsOn
              ),
            t =
              e.chapterProgressData &&
              e.chapterProgressData.find(
                (s) => s.courseProgress === e.courseTitleUserIsOn
              ),
            n = new Set(
              (null === s || void 0 === s ? void 0 : s.lessonProgress) || []
            ),
            o = new Set(
              (null === t || void 0 === t ? void 0 : t.chapterProgress) || []
            );
          let a = 0,
            c = 0;
          e.simplifiedChaptersLessonsData &&
            e.simplifiedChaptersLessonsData.forEach((e) => {
              (a += e.lessons.length), c++;
            });
          let r = n.size + o.size;
          const i = Math.ceil((r / (a + c)) * 100);
          return Object(l.jsxs)("div", {
            children: [
              Object(l.jsxs)("div", {
                style: {},
                className: "LessonTitleContainer",
                children: [
                  Object(l.jsx)("span", {
                    className: "LessonNumber",
                    style: { color: "#80e8a2" },
                    children: "Course Progress",
                  }),
                  " ",
                ],
              }),
              Object(l.jsxs)("div", {
                style: {
                  display: "flex",
                  alignItems: "center",
                  maxWidth: "85%",
                  marginLeft: "7%",
                },
                children: [
                  Object(l.jsx)("span", {
                    style: {
                      marginRight: "25px",
                      color: "#80e8a2",
                      fontSize: "3vh",
                    },
                    children: "".concat(i, "%"),
                  }),
                  Object(l.jsx)("div", {
                    style: {
                      flex: 1,
                      backgroundColor: "#f0f0f0",
                      borderRadius: 20,
                      maxWidth: "82%",
                    },
                    children: Object(l.jsx)(v.a.div, {
                      style: {
                        width: "".concat(i, "%"),
                        backgroundColor: "rgb(80, 200, 120)",
                        height: 30,
                        borderRadius: "inherit",
                        textAlign: "center",
                        lineHeight: "20px",
                        color: "white",
                      },
                      initial: { width: 0 },
                      animate: { width: "".concat(i, "%") },
                      transition: { duration: 0.5, ease: "easeInOut" },
                    }),
                  }),
                ],
              }),
            ],
          });
        };
      t(99);
      function L(e) {
        const {
            setSubContainer: s,
            setSubContainerEntries: t,
            courseDetails: o,
            progressData: a,
            courseTitleUserIsOn: c,
          } = m(),
          [r, i] = Object(n.useState)(""),
          [d, u] = Object(n.useState)(""),
          [h, b] = Object(n.useState)("#dd6260");
        console.log(a),
          console.log(c),
          Object(n.useEffect)(() => {
            const s =
              "https://qaleelo-assets.s3.us-east-2.amazonaws.com/" +
              c +
              "/sectionImages/" +
              e.number +
              ".png";
            console.log(e.number), console.log(e.chapter), p(s);
          }, []),
          Object(n.useEffect)(() => {
            if (c && a && a.length > 0) {
              const s = a.find((e) => e.courseProgress === c);
              s && s.lessonProgress.includes(e.number)
                ? b("rgb(80, 200, 120)")
                : b("#dd6260");
            }
          }, [c, a]);
        const p = async (e) => {
            try {
              const s = await fetch(e, {
                method: "GET",
                headers: { "Cache-Control": "no-cache" },
              });
              if (s.ok) {
                const e = await s.blob(),
                  t = new FileReader();
                t.readAsDataURL(e),
                  (t.onloadend = () => {
                    const e = t.result,
                      s = new Image();
                    (s.src = e),
                      (s.onload = () => {
                        const e = new O.a().getColor(s),
                          t = "rgb("
                            .concat(e[0], ", ")
                            .concat(e[1], ", ")
                            .concat(e[2], ")");
                        g(t);
                      });
                  });
              } else console.error("Image fetch failed:", s.status);
            } catch (s) {
              console.error("Error fetching image:", s);
            }
          },
          g = (e) => {
            i(e);
            const s = j(e);
            u(s > 0.5 ? "#000" : "#fff");
          },
          j = (e) => {
            const s = e.match(/\d+/g);
            return (0.299 * s[0] + 0.587 * s[1] + 0.114 * s[2]) / 255;
          },
          x = "https://qaleelo-assets.s3.us-east-2.amazonaws.com/"
            .concat(
              o.courseTitle && o.courseTitle.replace(/\s/g, ""),
              "/sectionImages/"
            )
            .concat(e.number, ".png");
        return Object(l.jsxs)("div", {
          className: "sidenavRowLesson",
          style: {
            backgroundColor: "white",
            width: e.width,
            marginLeft: e.marginLeft,
            borderRadius: e.borderRadius,
          },
          children: [
            Object(l.jsx)("div", {
              className: "circleLesson",
              style: {
                backgroundColor: h,
                opacity: "locked" === e.lockState ? 0.5 : 1,
              },
              children: Object(l.jsx)("span", {
                className: "circle-numberLesson",
                children: e.number,
              }),
            }),
            "locked" === e.lockState
              ? Object(l.jsx)("div", {
                  style: {
                    position: "relative",
                    width: "250px",
                    height: "250px",
                    backgroundImage: "url(".concat(x, ")"),
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    borderRadius: "50%",
                    float: "left",
                    opacity: 0.5,
                  },
                  children: Object(l.jsx)("img", {
                    src: "https://qaleelo-assets.s3.us-east-2.amazonaws.com/General/CanvaGeneratedImages/lockwhite.png",
                    alt: "",
                    style: {
                      position: "absolute",
                      left: 0,
                      top: 0,
                      right: 0,
                      bottom: 0,
                      display: "block",
                      margin: "auto",
                      width: "100px",
                    },
                  }),
                })
              : Object(l.jsx)("div", {
                  style: {
                    position: "relative",
                    width: "250px",
                    height: "250px",
                    backgroundImage: "url(".concat(x, ")"),
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    borderRadius: "50%",
                    float: "left",
                  },
                }),
            Object(l.jsx)("p", {
              className: "sidenavRowLessonText",
              children: e.title,
            }),
          ],
        });
      }
      function z(e) {
        const {
            setSubContainer: s,
            setSubContainerEntries: t,
            courseDetails: o,
            courseTitleUserIsOn: a,
            chapterProgressData: c,
          } = m(),
          [r, i] = Object(n.useState)(""),
          [d, u] = Object(n.useState)(""),
          [h, b] = Object(n.useState)("white");
        Object(n.useEffect)(() => {
          if ((null == c && b("#a678de"), a && c)) {
            const s = c.find((e) => e.courseProgress === a);
            s && s.chapterProgress.includes(e.number)
              ? b("rgb(80, 200, 120)")
              : b("#a678de");
          }
        }, [a, c]);
        const p =
          "https://qaleelo-assets.s3.us-east-2.amazonaws.com/General/QuizImage.png";
        return Object(l.jsxs)("div", {
          className: "sidenavRowLesson",
          style: {
            backgroundColor: "white",
            width: e.width,
            marginLeft: e.marginLeft,
            borderRadius: e.borderRadius,
          },
          children: [
            Object(l.jsx)("div", {
              className: "circleQuiz",
              style: {
                backgroundColor: h,
                opacity: "locked" === e.lockState ? 0.5 : 1,
              },
              children: Object(l.jsx)("span", {
                className: "circle-numberLesson",
                children: e.number,
              }),
            }),
            "locked" === e.lockState
              ? Object(l.jsx)("div", {
                  style: {
                    position: "relative",
                    width: "250px",
                    height: "250px",
                    backgroundImage: "url(".concat(p, ")"),
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    borderRadius: "80%",
                    float: "left",
                    opacity: 0.5,
                  },
                  children: Object(l.jsx)("img", {
                    src: "https://qaleelo-assets.s3.us-east-2.amazonaws.com/General/CanvaGeneratedImages/lockblack.png",
                    alt: "",
                    style: {
                      position: "absolute",
                      left: 0,
                      top: 0,
                      right: 0,
                      bottom: 0,
                      display: "block",
                      margin: "auto",
                      width: "100px",
                      opacity: "1",
                    },
                  }),
                })
              : Object(l.jsx)("div", {
                  style: {
                    position: "relative",
                    width: "250px",
                    height: "250px",
                    backgroundImage: "url(".concat(p, ")"),
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    borderRadius: "80%",
                    float: "left",
                  },
                }),
            Object(l.jsxs)("div", {
              children: [
                Object(l.jsx)("p", {
                  style: {
                    margin: 0,
                    marginTop: "25px",
                    color: "#a678de",
                    fontSize: "2vh",
                    fontWeight: "bold",
                  },
                  children: "Chapter Quiz",
                }),
                Object(l.jsx)("p", {
                  className: "sidenavRowLessonText",
                  style: { marginTop: 0 },
                  children: e.title,
                }),
              ],
            }),
          ],
        });
      }
      x.b.div(
        T ||
          (T = Object(j.a)([
            "\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  height: 100%; /* Ensure the div takes full height */\n",
          ]))
      );
      const D = x.b.div(
          C ||
            (C = Object(j.a)([
              "\n  position: relative;\n  width: 60%;\n  /* max-width: 700px; */\n  /* margin: 50px; */\n  margin-right: 50px;\n",
            ]))
        ),
        M = x.b.input(
          S ||
            (S = Object(j.a)([
              '\n  width: 100%;\n  height: 80px;\n  padding: 10px;\n  padding-left: 70px;\n  font-family: "Quicksand", sans-serif;\n  font-size: 3vh;\n  margin-left: 29%;\n  border: none;\n  border-radius: 4px;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n',
            ]))
        );
      x.b.div(
        I ||
          (I = Object(j.a)([
            "\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  left: 10px;\n  font-size: 2vh;\n  margin-left: 20%;\n",
          ]))
      );
      function P(e) {
        const {
            courseDetails: s,
            courseTitleUserIsOn: t,
            entryStore: o,
            isDarkMode: a,
            setIsDarkMode: c,
            setNavOpen: r,
          } = m(),
          [i, d] = Object(n.useState)(""),
          [u, h] = Object(n.useState)([]);
        Object(n.useEffect)(() => {
          if (o && i) {
            const e = o
              .map((e) => {
                const s = e.entries.filter((e) => {
                  const s = e.title.toLowerCase().includes(i.toLowerCase()),
                    t =
                      e.entries &&
                      e.entries.some((e) =>
                        e.entries.some(
                          (e) =>
                            e.title &&
                            e.title.toLowerCase().includes(i.toLowerCase())
                        )
                      );
                  return s || t;
                });
                return { ...e, entries: s };
              })
              .filter((e) => e.entries.length > 0);
            h(e);
          } else h(o);
        }, [o, i]),
          console.log(o),
          console.log(o, t);
        const [b, p] = Object(n.useState)(null);
        let g = window.location.href;
        console.log(g);
        let j = g.split("/");
        console.log(j);
        let x = j[j.length - 1];
        console.log(x);
        var f = [];
        (f = x.includes("%") ? x.split("%23") : x.split("#")), console.log(f);
        let O = f[0];
        f[1];
        return (
          console.log(O),
          console.log("progressData:", e.progressData),
          console.log("chapterProgressData:", e.chapterProgressData),
          console.log(
            "simplifiedChaptersLessonsData:",
            e.simplifiedChaptersLessonsData
          ),
          console.log("unlockedLessons:", e.unlockedLessons),
          console.log("unlockedChapters:", e.unlockedChapters),
          console.log("unlockedQuizzes:", e.unlockedQuizzes),
          console.log("isLastLessonOfChapter:", e.isLastLessonOfChapter),
          console.log("isFirstLessonOfChapter:", e.isFirstLessonOfChapter),
          console.log(
            "chapterOfLastCompletedLesson:",
            e.chapterOfLastCompletedLesson
          ),
          console.log("lastUnlockedLessonNumber:", e.lastUnlockedLessonNumber),
          console.log("lastUnlockedLessonTitle:", e.lastUnlockedLessonTitle),
          Object(l.jsxs)("div", {
            className: "sideNavContainer ".concat(a ? "dark" : "light"),
            style:
              "exiting" === e.state
                ? { animation: "moveMainContainer .3s forwards" }
                : "entering" === e.state
                ? { animation: "moveMainContainer .3s reverse backwards" }
                : null,
            children: [
              Object(l.jsxs)("div", {
                className: "sidenavHeader",
                style: {
                  background: "#8747d4",
                  position: "sticky",
                  top: "0",
                  zIndex: "2000",
                },
                children: [
                  s.courseTitle &&
                    Object(l.jsx)("img", {
                      className: "courseSideNavImage",
                      src:
                        "https://qaleelo-assets.s3.us-east-2.amazonaws.com/" +
                        s.courseTitle.replace(/\s/g, "") +
                        "/courseImage/" +
                        s.courseTitle.replace(/\s/g, "") +
                        ".png",
                      alt: "",
                    }),
                  Object(l.jsx)(E, {
                    progressData: e.progressData,
                    chapterProgressData: e.chapterProgressData,
                    simplifiedChaptersLessonsData:
                      e.simplifiedChaptersLessonsData,
                    courseTitleUserIsOn: t,
                  }),
                  null == e.isLessonProgressEmpty
                    ? Object(l.jsx)("div", {})
                    : e.isLastLessonOfChapter && !e.isFirstLessonOfChapter
                    ? Object(l.jsxs)("div", {
                        children: [
                          Object(l.jsxs)("div", {
                            style: {},
                            className: "LessonTitleContainer",
                            children: [
                              Object(l.jsx)("span", {
                                className: "LessonNumber",
                                style: { color: "#80e8a2" },
                                children: "Continue",
                              }),
                              " ",
                            ],
                          }),
                          " ",
                          Object(l.jsx)(k.c, {
                            to: "/"
                              .concat(t, "/quiz/")
                              .concat(
                                e.chapterOfLastCompletedLesson.chapterNumber
                              ),
                            children: Object(l.jsx)(v.a.div, {
                              onClick: e.closeNav ? e.closeNav : () => r(!1),
                              whileTap: { scale: 0.8 },
                              transition: {
                                type: "spring",
                                stiffness: 400,
                                damping: 17,
                              },
                              children: Object(l.jsx)(v.a.div, {
                                animate: { y: [-5, 5, -5] },
                                transition: { duration: 2, repeat: 1 / 0 },
                                children: Object(l.jsx)(z, {
                                  number:
                                    e.chapterOfLastCompletedLesson
                                      .chapterNumber,
                                  title:
                                    e.chapterOfLastCompletedLesson.chapterTitle,
                                  width: "90%",
                                  marginLeft: "5%",
                                }),
                              }),
                            }),
                          }),
                        ],
                      })
                    : Object(l.jsxs)("div", {
                        children: [
                          Object(l.jsxs)("div", {
                            style: {},
                            className: "LessonTitleContainer",
                            children: [
                              Object(l.jsx)("span", {
                                className: "LessonNumber",
                                style: { color: "#80e8a2" },
                                children: "Continue",
                              }),
                              " ",
                            ],
                          }),
                          Object(l.jsx)(k.c, {
                            to: "/"
                              .concat(t, "/lesson/")
                              .concat(e.lastUnlockedLessonNumber),
                            children: Object(l.jsx)(v.a.div, {
                              onClick: e.closeNav ? e.closeNav : () => r(!1),
                              whileTap: { scale: 0.8 },
                              transition: {
                                type: "spring",
                                stiffness: 400,
                                damping: 17,
                              },
                              children: Object(l.jsx)(v.a.div, {
                                animate: { y: [-5, 5, -5] },
                                transition: { duration: 2, repeat: 1 / 0 },
                                children: Object(l.jsx)(L, {
                                  backgroundColor: "white",
                                  number: e.lastUnlockedLessonNumber,
                                  title: e.lastUnlockedLessonTitle,
                                  width: "90%",
                                  marginLeft: "5%",
                                  borderRadius:
                                    "14% 2% 2% 14% / 50% 10% 10% 50%",
                                }),
                              }),
                            }),
                          }),
                        ],
                      }),
                ],
              }),
              Object(l.jsx)(D, {
                style: { marginTop: "3vh" },
                children: Object(l.jsx)(M, {
                  style: { borderRadius: "2% 2% 2% 2% / 15% 15% 15% 15%" },
                  type: "text",
                  placeholder: "Search",
                  value: i,
                  onChange: (e) => d(e.target.value),
                }),
              }),
              Object(l.jsx)("div", {
                className: "sideNavChapterHeader",
                children: Object(l.jsx)("p", { children: "Chapters" }),
              }),
              u &&
                u.map((s, t) =>
                  Object(l.jsxs)("div", {
                    className: "sidenavContentChapter",
                    children: [
                      Object(l.jsxs)("div", {
                        className: "sidenavContentHeaderMainMenu",
                        children: [
                          s.topicHeaderNumber && s.topicHeaderNumber,
                          ": \xa0",
                          s.title,
                        ],
                      }),
                      s.entries.map((s, t) =>
                        Object(l.jsx)(l.Fragment, {
                          children: Object(l.jsx)(w, {
                            number: s.topicNumber,
                            title: s.title,
                            entries: s.entries,
                            styleVariable:
                              s.topicNumber == O
                                ? { background: "#dfdfdf" }
                                : {},
                            lockState:
                              e.unlockedChapters &&
                              e.unlockedChapters.includes(s.topicNumber)
                                ? "unlocked"
                                : "locked",
                          }),
                        })
                      ),
                    ],
                  })
                ),
              Object(l.jsx)("div", { style: { minHeight: "400px" } }),
            ],
          })
        );
      }
      var B = t(151),
        F = t(8);
      t(327);
      var A = (e) => {
        let { setIsLoggedIn: s } = e;
        const t = Object(F.f)();
        return Object(l.jsx)("div", {
          style: { position: "absolute", top: "120px", right: "40px" },
          children: Object(l.jsx)("div", {
            id: !0,
            clientId: "signOutButton",
            children: Object(l.jsx)(B.GoogleLogout, {
              clientId:
                "327893164342-c3b9mfr2efkdubjop3l9hvmd37sopr7i.apps.googleusercontent.com",
              buttonText: "Logout",
              onLogoutSuccess: (e) => {
                console.log("log out successful!"), t.replace("/LogoutMessage");
              },
              text: "signin_with",
              width: "300px",
              size: "large",
            }),
          }),
        });
      };
      var U = (e) => {
        const {
          courseTitleUserIsOn: s,
          entryStore: t,
          isDarkMode: o,
          subContainer: a,
          setCourseTitleUserIsOn: c,
          courseDetails: r,
          setCourseDetails: d,
          topicDatafromBackEnd: u,
          setTopicDatafromBackEnd: h,
          exampleDatafromBackEnd: b,
          setExampleDatafromBackEnd: p,
          setEntryStore: g,
          setIsDarkMode: j,
          progressData: x,
          setProgressData: f,
          chapterProgressData: O,
          setChapterProgressData: N,
        } = m();
        Object(n.useEffect)(() => {
          const e = localStorage.getItem("userEmail");
          if (!e)
            return void console.error("User email not found in local storage");
          (async () => {
            try {
              const s = await i.a.get("/fetchProgressRecord", {
                params: { userEmail: e },
              });
              f(s.data);
            } catch (s) {
              console.error("Error fetching progress data:", s);
            }
          })();
        }, []),
          console.log(x),
          console.log(s),
          Object(n.useEffect)(() => {
            const e = localStorage.getItem("userEmail");
            if (!e)
              return void console.error(
                "User email not found in local storage"
              );
            (async () => {
              try {
                const s = await i.a.get("/fetchChapterProgressRecord", {
                  params: { userEmail: e },
                });
                N(s.data);
              } catch (s) {
                console.error("Error fetching chapter progress data:", s);
              }
            })();
          }, []),
          console.log(O),
          console.log(s);
        const w =
          (y = t) &&
          y
            .map((e) =>
              e.entries.map((e) => ({
                chapterNumber: e.topicNumber,
                chapterTitle: e.title,
                lessons: e.entries[0].entries.map((e) => ({
                  lessonNumber: e.sectionNumber,
                  lessonTitle: e.title,
                })),
              }))
            )
            .flat();
        var y;
        console.log(w);
        const k = (function (e, s, t, n) {
          const o = [],
            a = e && e.find((e) => e.courseProgress === n);
          if (a) {
            const { lessonProgress: e } = a,
              r = e[e.length - 1],
              i =
                s && s.find((e) => e.lessons.some((e) => e.lessonNumber === r));
            if (i) {
              const { lessons: a } = i,
                l = a.findIndex((e) => e.lessonNumber === r);
              if (l === a.length - 1) {
                o.push(...e);
                const a =
                    s.findIndex((e) => e.chapterNumber === i.chapterNumber) + 1,
                  r = s[a];
                if (r) {
                  var c;
                  const e =
                    t &&
                    (null === (c = t.find((e) => e.courseProgress === n)) ||
                    void 0 === c
                      ? void 0
                      : c.chapterProgress);
                  if (e && e.includes(i.chapterNumber)) {
                    const e = r.lessons[0];
                    o.push(e.lessonNumber);
                  }
                }
              } else {
                const s = a[l + 1];
                o.push(...e, s.lessonNumber);
              }
            }
          }
          return o;
        })(
          e.progressData ? e.progressData : x,
          w,
          e.chapterProgressData ? e.ChapterProgressBar : O,
          s
        );
        console.log(k);
        const T = (function (e, s, t) {
            const n = [],
              o = e && e.find((e) => e.courseProgress === t);
            return (
              o &&
                s &&
                s.forEach((e) => {
                  const s = e.lessons[e.lessons.length - 1].lessonNumber;
                  o.lessonProgress.includes(s) && n.push(e.chapterNumber);
                }),
              n
            );
          })(e.progressData ? e.progressData : x, w, s),
          C = (function (e, s) {
            const t = [];
            return (
              e &&
                e.forEach((e) => {
                  e.lessons.some((e) => s.includes(e.lessonNumber)) &&
                    t.push(e.chapterNumber);
                }),
              t
            );
          })(w, k);
        console.log(T), console.log(C);
        const S = e.progressData
          ? e.progressData.find(
              (s) => s.courseProgress === e.courseTitleUserIsOn
            )
          : x && x.find((s) => s.courseProgress === e.courseTitleUserIsOn);
        console.log(S);
        const I = e.chapterProgressData
          ? e.chapterProgressData.find(
              (s) => s.courseProgress === e.courseTitleUserIsOn
            )
          : O && O.find((s) => s.courseProgress === e.courseTitleUserIsOn);
        console.log(I);
        const E = new Set(
          (null === S || void 0 === S ? void 0 : S.lessonProgress) || []
        );
        console.log(E);
        const L = new Set(
          (null === I || void 0 === I ? void 0 : I.chapterProgress) || []
        );
        console.log(L);
        const z = e.lessonNumber
          ? e.lessonNumber.substring(0, e.lessonNumber.lastIndexOf("."))
          : e.chapterNumber;
        console.log(z);
        const D = w && w.find((e) => e.chapterNumber === z);
        console.log(D);
        const M = (null === D || void 0 === D ? void 0 : D.lessons.length) || 0;
        console.log(M);
        const P = L.has(z) ? 1 : 0;
        console.log(P);
        let B = 0;
        null === D ||
          void 0 === D ||
          D.lessons.forEach((e) => {
            E.has(e.lessonNumber) && B++;
          }),
          console.log(B);
        const F = Math.ceil(((B + P) / (M + 1)) * 100);
        return (
          console.log(F),
          Object(l.jsxs)("div", {
            children: [
              Object(l.jsxs)("div", {
                style: {},
                className: "LessonTitleContainer",
                children: [
                  Object(l.jsx)("span", {
                    className: "LessonNumber",
                    style: { color: e.color ? e.color : "rgb(80, 200, 120)" },
                    children: "Chapter Progress",
                  }),
                  " ",
                ],
              }),
              Object(l.jsxs)("div", {
                style: {
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  maxWidth: "85%",
                  marginLeft: "7%",
                },
                children: [
                  Object(l.jsx)("span", {
                    style: {
                      marginRight: "25px",
                      color: e.color ? e.color : "rgb(80, 200, 120)",
                      fontSize: "3vh",
                      fontWeight: "bold",
                    },
                    children: "".concat(F, "%"),
                  }),
                  Object(l.jsx)("div", {
                    style: {
                      flex: 1,
                      backgroundColor: "#f0f0f0",
                      borderRadius: 20,
                    },
                    children: Object(l.jsx)(v.a.div, {
                      style: {
                        width: "".concat(F, "%"),
                        backgroundColor: "rgb(80, 200, 120)",
                        height: 30,
                        borderRadius: "inherit",
                        textAlign: "center",
                        lineHeight: "20px",
                        color: "white",
                      },
                      initial: { width: 0 },
                      animate: { width: "".concat(F, "%") },
                      transition: { duration: 0.5, ease: "easeInOut" },
                    }),
                  }),
                ],
              }),
            ],
          })
        );
      };
      function R(e) {
        const {
            subContainerEntries: s,
            setSubContainer: t,
            courseTitleUserIsOn: o,
            isDarkMode: a,
            progressData: c,
            setProgressData: r,
            chapterProgressData: i,
            setChapterProgressData: d,
            entryStore: u,
            setNavOpen: h,
          } = m(),
          [b, p] = Object(n.useState)("");
        return (
          console.log(s),
          Object(n.useEffect)(() => {
            let e = window.location.href;
            console.log(e);
            let s = e.split("/");
            console.log(s);
            let t = s[s.length - 1];
            console.log(t);
            var n = [];
            (n = t.includes("%") ? t.split("%23") : t.split("#")),
              console.log(n);
            let o = n[1];
            console.log(o), p(o);
          }, []),
          Object(l.jsxs)("div", {
            className: "sub-container ".concat(a ? "dark" : "light"),
            style:
              "entering" === e.state
                ? { animation: "moveSubContainer .3s forwards" }
                : "entered" === e.state
                ? { transform: "translateX(0px)" }
                : { animation: "moveSubContainer .3s reverse backwards" },
            children: [
              Object(l.jsx)("div", {
                className: "sidenavHeader",
                style: {
                  background: "#8747d4",
                  position: "sticky",
                  top: "0",
                  zIndex: "2000",
                },
                children:
                  s &&
                  s.map((e, s) =>
                    Object(l.jsxs)("div", {
                      children: [
                        Object(l.jsxs)("div", {
                          style: { color: "white" },
                          className: "LessonTitleContainer",
                          children: [
                            Object(l.jsxs)("span", {
                              className: "LessonNumber",
                              children: ["Chapter ", e.topicNumber],
                            }),
                            " ",
                            Object(l.jsx)("br", {}),
                            Object(l.jsx)("span", {
                              className: "LessonTitle",
                              children: e.title,
                            }),
                          ],
                        }),
                        Object(l.jsx)(U, {
                          chapterNumber: e.topicNumber,
                          courseTitleUserIsOn: o,
                          color: "#80e8a2",
                        }),
                      ],
                    })
                  ),
              }),
              Object(l.jsx)("div", {
                className: "sub-header",
                onClick: () => t(!1),
                children: Object(l.jsx)("i", { class: "fas fa-arrow-left" }),
              }),
              Object(l.jsx)("div", {
                className: "sideNavChapterHeader",
                children: Object(l.jsx)("p", { children: "Lessons" }),
              }),
              s &&
                s.map((t, n) =>
                  Object(l.jsxs)(l.Fragment, {
                    children: [
                      t.entries.map((s) =>
                        (e.unlockedLessons &&
                          e.unlockedLessons.includes(s.sectionNumber)) ||
                        "1.1.1" == s.sectionNumber
                          ? Object(l.jsx)(
                              k.c,
                              {
                                to: "/"
                                  .concat(o, "/lesson/")
                                  .concat(s.sectionNumber),
                                children: Object(l.jsx)("div", {
                                  onClick: e.closeNav
                                    ? e.closeNav
                                    : () => h(!1),
                                  children: Object(l.jsx)(L, {
                                    number: s.sectionNumber,
                                    title: s.title,
                                    lockState: "unlocked",
                                    styleVariable:
                                      s.sectionNumber == b
                                        ? { background: "#ebebeb" }
                                        : {},
                                  }),
                                }),
                              },
                              s.sectionNumber
                            )
                          : Object(l.jsx)(
                              "div",
                              {
                                children: Object(l.jsx)("div", {
                                  children: Object(l.jsx)(L, {
                                    number: s.sectionNumber,
                                    title: s.title,
                                    lockState: "locked",
                                    styleVariable:
                                      s.sectionNumber == b
                                        ? { background: "#ebebeb" }
                                        : {},
                                  }),
                                }),
                              },
                              s.sectionNumber
                            )
                      ),
                      n === s.length - 1 &&
                      e.unlockedQuizzes &&
                      e.unlockedQuizzes.includes(t.topicNumber)
                        ? Object(l.jsx)(k.c, {
                            to: "/".concat(o, "/quiz/").concat(t.topicNumber),
                            children: Object(l.jsx)("div", {
                              onClick: e.closeNav ? e.closeNav : () => h(!1),
                              style: { marginTop: "100px" },
                              children: Object(l.jsx)(z, {
                                title: t.title,
                                number: t.topicNumber,
                                lockState: "unlocked",
                              }),
                            }),
                          })
                        : Object(l.jsx)("div", {
                            style: { marginTop: "100px" },
                            children: Object(l.jsx)(z, {
                              title: t.title,
                              number: t.topicNumber,
                              lockState: "locked",
                            }),
                          }),
                    ],
                  })
                ),
              Object(l.jsx)("div", { style: { minHeight: "400px" } }),
            ],
          })
        );
      }
      function G(e) {
        let {
          subContainer: s,
          courseTitleUserIsOn: t,
          setCourseTitleUserIsOn: o,
          courseDetails: a,
          setCourseDetails: c,
          topicDatafromBackEnd: r,
          setTopicDatafromBackEnd: d,
          exampleDatafromBackEnd: u,
          setExampleDatafromBackEnd: h,
          entryStore: b,
          setEntryStore: p,
          isDarkMode: g,
          setIsDarkMode: j,
          progressData: x,
          setProgressData: f,
          chapterProgressData: O,
          setChapterProgressData: v,
          setSubContainer: N,
        } = m();
        Object(n.useEffect)(() => {
          const e = localStorage.getItem("userEmail");
          if (!e)
            return void console.error("User email not found in local storage");
          (async () => {
            try {
              const s = await i.a.get("/fetchProgressRecord", {
                params: { userEmail: e },
              });
              f(s.data);
            } catch (s) {
              console.error("Error fetching progress data:", s);
            }
          })();
        }, []),
          console.log(x),
          console.log(t),
          Object(n.useEffect)(() => {
            const e = localStorage.getItem("userEmail");
            if (!e)
              return void console.error(
                "User email not found in local storage"
              );
            (async () => {
              try {
                const s = await i.a.get("/fetchChapterProgressRecord", {
                  params: { userEmail: e },
                });
                v(s.data);
              } catch (s) {
                console.error("Error fetching chapter progress data:", s);
              }
            })();
          }, []),
          console.log(O),
          console.log(t);
        const w =
          (T = b) &&
          T.map((e) =>
            e.entries.map((e) => ({
              chapterNumber: e.topicNumber,
              chapterTitle: e.title,
              lessons: e.entries[0].entries.map((e) => ({
                lessonNumber: e.sectionNumber,
                lessonTitle: e.title,
              })),
            }))
          ).flat();
        var T;
        console.log(w);
        const C = (function (e, s, t, n) {
          const o = [],
            a = e && e.find((e) => e.courseProgress === n);
          if (a) {
            const { lessonProgress: e } = a,
              r = e[e.length - 1],
              i =
                s && s.find((e) => e.lessons.some((e) => e.lessonNumber === r));
            if (i) {
              const { lessons: a } = i,
                l = a.findIndex((e) => e.lessonNumber === r);
              if (l === a.length - 1) {
                o.push(...e);
                const a =
                    s.findIndex((e) => e.chapterNumber === i.chapterNumber) + 1,
                  r = s[a];
                if (r) {
                  var c;
                  const e =
                    t &&
                    (null === (c = t.find((e) => e.courseProgress === n)) ||
                    void 0 === c
                      ? void 0
                      : c.chapterProgress);
                  if (e && e.includes(i.chapterNumber)) {
                    const e = r.lessons[0];
                    o.push(e.lessonNumber);
                  }
                }
              } else {
                const s = a[l + 1];
                o.push(...e, s.lessonNumber);
              }
            }
          }
          return o;
        })(x, w, O, t);
        console.log(C);
        const S = (function (e, s, t) {
            const n = [],
              o = e && e.find((e) => e.courseProgress === t);
            return (
              o &&
                s &&
                s.forEach((e) => {
                  const s = e.lessons[e.lessons.length - 1].lessonNumber;
                  o.lessonProgress.includes(s) && n.push(e.chapterNumber);
                }),
              n
            );
          })(x, w, t),
          I = (function (e, s) {
            const t = [];
            return (
              e &&
                e.forEach((e) => {
                  e.lessons.some((e) => s.includes(e.lessonNumber)) &&
                    t.push(e.chapterNumber);
                }),
              t
            );
          })(w, C);
        console.log(S), console.log(I);
        const E = C[C.length - 1];
        const L = (function (e) {
          if (w)
            for (let s of w)
              for (let t of s.lessons)
                if (t.lessonNumber === e) return t.lessonTitle;
          return null;
        })(E);
        console.log(E, L);
        const z = x && x.find((e) => e.courseProgress === t),
          D = z && z.lessonProgress.slice(-1)[0],
          M = w && w.find((e) => e.lessons.some((e) => e.lessonNumber === D)),
          B = M && M.lessons.slice(-1)[0].lessonNumber === D;
        console.log(B);
        const F = C.slice(-1)[0],
          A = w && w.find((e) => e.lessons.some((e) => e.lessonNumber === F)),
          U = A && A.lessons[0].lessonNumber === F;
        console.log(U);
        const G = z && 0 === z.lessonProgress.length;
        return (
          console.log(G),
          Object(l.jsxs)("div", {
            className: "sidenav",
            style:
              "entering" === e.state
                ? { animation: "moveSideBar .3s forwards" }
                : "entered" === e.state
                ? { transform: "translateX(-0px)" }
                : { animation: "moveSideBar .3s reverse backwards" },
            children: [
              Object(l.jsxs)("div", {
                className: "sidenavHeader",
                style: {
                  display: "flex",
                  background: "#8747d4",
                  borderBottom: "1px solid white",
                },
                children: [
                  Object(l.jsxs)(k.c, {
                    to: "/",
                    onClick: () => N(!1),
                    children: [
                      " ",
                      Object(l.jsx)("div", {
                        className: "homeBtn",
                        children: Object(l.jsx)("i", {
                          class: "fa-solid fa-house",
                        }),
                      }),
                    ],
                  }),
                  Object(l.jsx)("div", {
                    className: "newCloseBtn",
                    onClick: e.click,
                    children: Object(l.jsx)("i", {
                      class: "fa-solid fa-xmark",
                    }),
                  }),
                ],
              }),
              Object(l.jsx)(y.a, {
                in: !s,
                timeout: 300,
                unmountOnExit: !0,
                mountOnEnter: !0,
                children: (s) =>
                  Object(l.jsx)(P, {
                    state: s,
                    closeNav: e.click,
                    progressData: x,
                    chapterProgressData: O,
                    simplifiedChaptersLessonsData: w,
                    unlockedLessons: C,
                    unlockedChapters: I,
                    unlockedQuizzes: S,
                    isLastLessonOfChapter: B,
                    isFirstLessonOfChapter: U,
                    chapterOfLastCompletedLesson: M,
                    lastUnlockedLessonNumber: E,
                    lastUnlockedLessonTitle: L,
                    isLessonProgressEmpty: G,
                  }),
              }),
              Object(l.jsx)(y.a, {
                in: s,
                timeout: 300,
                unmountOnExit: !0,
                mountOnEnter: !0,
                children: (s) =>
                  Object(l.jsx)(R, {
                    state: s,
                    closeNav: e.click,
                    unlockedLessons: C,
                    unlockedChapters: I,
                    unlockedQuizzes: S,
                  }),
              }),
            ],
          })
        );
      }
      var W, Q, H, Y, K, V;
      x.b.nav(
        W ||
          (W = Object(j.a)([
            "\n  background: #eb8381;\n  /* top: 80; */\n  height: 6vh;\n  transform: translateY(",
            ");\n  transition: 0.2s;\n  display: flex;\n  justify-content: space-between;\n",
          ])),
        (e) => e.navTop + "vh"
      ),
        x.b.button(
          Q ||
            (Q = Object(j.a)([
              '\n  font-family: "Quicksand", sans-serif;\n  padding: 7px 12px;\n  /* margin: 20px; */\n  text-transform: uppercase;\n  /* font-size: 15px; */\n  font-size: 2.5vh;\n  overflow: hidden;\n  border: 0;\n  border-radius: 5px;\n  background: #8747d4;\n  color: white;\n  transition: all 0.25s ease;\n  cursor: pointer;\n  height: 6vh;\n\n  &:active {\n    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.5);\n    background: #f2b1ae;\n  }\n',
            ]))
        ),
        x.b.div(
          H ||
            (H = Object(j.a)(["\n  display: flex;\n  align-items: center;\n"]))
        ),
        x.b.img(
          Y ||
            (Y = Object(j.a)([
              "\n  width: 6vh; /* Adjust the width as needed */\n  height: 6vh; /* Adjust the height as needed */\n  margin-left: 70px; /* Adjust the margin as needed */\n",
            ]))
        ),
        x.b.button(
          K ||
            (K = Object(j.a)([
              '\n  background: red;\n  position: relative;\n  font-family: "Quicksand", sans-serif;\n  padding: 7px 12px;\n  text-transform: uppercase;\n  /* font-size: 15px; */\n  font-size: 4vh;\n  font-weight: bold;\n  overflow: hidden;\n  border: 0;\n  border-radius: 5px;\n  background: #eb3535;\n  color: #f8f6f0;\n  height: 6vh;\n\n  transition: all 0.25s ease;\n  cursor: pointer;\n  margin-right: 20px;\n\n  &:active {\n    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.5);\n    background: #f2b1ae;\n  }\n',
            ]))
        ),
        x.b.button(
          V ||
            (V = Object(j.a)([
              '\n  background: none;\n  border: none;\n  font-family: "Quicksand", sans-serif;\n  font-size: 1.5vh;\n  font-weight: bold;\n  color: #f8f6f0;\n  cursor: pointer;\n  outline: none;\n  position: relative;\n  padding: 0;\n  margin: 0;\n  width: 70px;\n  height: 35px;\n  background-color: #bbb;\n  border-radius: 35px;\n  transition: background-color 0.3s;\n\n  &:after {\n    content: "";\n    position: absolute;\n    top: 2.5px;\n    left: 2.5px;\n    width: 30px;\n    height: 30px;\n    border-radius: 50%;\n    background-color: white;\n    transition: left 0.3s;\n  }\n\n  &.study {\n    background-color: #eb8381;\n    &:after {\n      left: 37.5px;\n    }\n  }\n',
            ]))
        );
      var q;
      t(328), t(152);
      x.b.button(
        q ||
          (q = Object(j.a)([
            '\n  font-family: "Century Gothic", serif;\n  padding: 10px 50px;\n  color: ',
            ";\n  font-size: 50px;\n",
          ])),
        (e) => (e.mouse ? "red" : "blue")
      );
      var _, J;
      x.b.button(
        _ ||
          (_ = Object(j.a)([
            '\n  background: red;\n  font-family: "Quicksand", sans-serif;\n  padding: 7px 12px;\n  text-transform: uppercase;\n  font-size: 2vh;\n  overflow: hidden;\n  border: 0;\n  border-radius: 5px;\n  background: #eb3535;\n  color: white;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);\n  transition: all 0.25s ease;\n  cursor: pointer;\n  &:active {\n    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.5);\n    background: #f2b1ae;\n  }\n',
          ]))
      ),
        x.b.button(
          J ||
            (J = Object(j.a)([
              '\n  background: red;\n  font-family: "Quicksand", sans-serif;\n  padding: 7px 12px;\n  text-transform: uppercase;\n  font-size: 25px;\n  overflow: hidden;\n  border: 0;\n  border-radius: 5px;\n  background: #eb3535;\n  color: white;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);\n  transition: all 0.25s ease;\n\n  &:active {\n    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.5);\n    background: #f2b1ae;\n  }\n',
            ]))
        );
      var X, $, Z, ee, se, te, ne, oe, ae, ce, re;
      const ie = Object(x.c)(
          X ||
            (X = Object(j.a)([
              "\n0%{transform: scale(1)}\n20%{transform: scale(1.2)}\n50%{transform: scale(1)}\n75%{transform: scale(1.2)}\n100%{transform: scale(1)}\n",
            ]))
        ),
        le = Object(x.c)(
          $ ||
            ($ = Object(j.a)([
              "\n0%{transform: scale(1)}\n50%{transform: scale(2)}\n100%{transform: scale(1)}\n",
            ]))
        ),
        de =
          (Object(x.c)(
            Z || (Z = Object(j.a)(["\n0%{opacity: 0}\n100%{opacity: 1}\n"]))
          ),
          x.b.div(
            ee ||
              (ee = Object(j.a)([
                '\n  /* box-shadow: 0 0.1rem 0.5rem rgba(0, 0, 0, 0.2); */\n  border-radius: 5px;\n  padding: 10px;\n  /* background: #252525; */\n  margin-top: 40px;\n  font-family: "Quicksand", sans-serif;\n',
              ]))
          )),
        me = x.b.div(
          se ||
            (se = Object(j.a)([
              "\n  /* font-size: 17px; */\n  font-size: 2.5vh;\n  font-weight: bold;\n  text-align: center;\n  color: #eb8381;\n  padding: 20px;\n",
            ]))
        ),
        ue = x.b.div(
          te ||
            (te = Object(j.a)([
              "\n  font-size: 2.2vh;\n  text-align: center;\n  font-family: Quicksand;\n  border-radius: 15px;\n  padding: 10px;\n  color: #252525;\n  display: flex;\n  background: ",
              ";\n  margin-bottom: 10px;\n  margin-top: 10px;\n  transition: transform 300ms;\n  justify-content: center;\n  animation: ",
              ";\n\n  &:hover {\n    cursor: pointer;\n    box-shadow: 0 0.1rem 0.5rem rgba(0, 0, 0, 0.2);\n    transform: scale(1.02);\n  }\n",
            ])),
          (e) => (e.answerClicked == e.answer ? e.answerColor : "#fcebeb"),
          (e) =>
            e.answerClicked == e.answer && "#DAF7A6" == e.answerColor
              ? Object(x.a)(
                  ne ||
                    (ne = Object(j.a)([
                      "\n          ",
                      " 1s cubic-bezier(1,-0.74,.42,.57)\n        ",
                    ])),
                  le
                )
              : e.answerClicked == e.answer && "#ff726f" == e.answerColor
              ? Object(x.a)(
                  oe ||
                    (oe = Object(j.a)(["\n          ", " 400ms\n        "])),
                  ie
                )
              : "none"
        ),
        he = x.b.div(
          ae ||
            (ae = Object(j.a)([
              "\n  font-size: 2vh;\n  display: ",
              ";\n  align-items: center;\n  justify-content: center;\n  animation: ",
              ";\n",
            ])),
          (e) => (e.answerClicked == e.answer ? "flex" : "none"),
          (e) =>
            e.answerClicked == e.answer && "#DAF7A6" == e.answerColor
              ? Object(x.a)(
                  ce || (ce = Object(j.a)(["\n          shakeY 1s\n        "]))
                )
              : e.answerClicked == e.answer && "#ff726f" == e.answerColor
              ? Object(x.a)(
                  re || (re = Object(j.a)(["\n          fadeIn 1s\n        "]))
                )
              : "none"
        );
      var be,
        pe,
        ge,
        je,
        xe,
        fe,
        Oe,
        ve,
        Ne,
        we,
        ye,
        ke = (e) => {
          console.log(e);
          const { exampleDatafromBackEnd: s, courseTitleUserIsOn: t } = m();
          console.log(s);
          const [o, a] = Object(n.useState)("#fcebeb"),
            [c, r] = Object(n.useState)("NoAnswer"),
            [i, d] = Object(n.useState)(!1);
          const [u, h] = Object(n.useState)(
            e.sectionExample && e.sectionExample.answers
          );
          Object(n.useEffect)(() => {
            let s =
              e.sectionExample &&
              (function (e) {
                let s,
                  t = e.length;
                for (; 0 != t; )
                  (s = Math.floor(Math.random() * t)),
                    t--,
                    ([e[t], e[s]] = [e[s], e[t]]);
                return e;
              })(e.sectionExample.answers);
            h(s);
          }, [e.sectionExample]),
            console.log(e.sectionExample && e.sectionExample.answers);
          let b = [],
            p = s.filter((s) => s.sectionNumber == e.section);
          return (
            (b =
              p.length > 3
                ? ((e, s) => {
                    const t = [];
                    for (let n = 0; n < s; ) {
                      const s = Math.floor(Math.random() * e.length);
                      t.includes(e[s]) || (t.push(e[s]), n++);
                    }
                    return t;
                  })(p, 3)
                : p),
            console.log(b),
            Object(l.jsxs)(de, {
              children: [
                Object(l.jsx)(me, {
                  children: e.sectionExample && e.sectionExample.question,
                }),
                u &&
                  u.map((e) =>
                    Object(l.jsxs)(l.Fragment, {
                      children: [
                        Object(l.jsx)(ue, {
                          onClick: () => {
                            return (
                              (s = e.isCorrect),
                              (t = e.answer),
                              r(t),
                              d(!0),
                              console.log(c),
                              void (1 == s
                                ? (a("#DAF7A6"), console.log(o))
                                : a("#ff726f"))
                            );
                            var s, t;
                          },
                          answerColor: o,
                          answer: e.answer,
                          answerClicked: c,
                          children: Object(l.jsx)("p", { children: e.answer }),
                        }),
                        Object(l.jsx)(he, {
                          answerClicked: c,
                          answer: e.answer,
                          answerColor: o,
                          children:
                            0 == e.isCorrect
                              ? Object(l.jsxs)(l.Fragment, {
                                  children: [
                                    Object(l.jsx)("p", {
                                      style: {
                                        color: "red",
                                        display: "inline",
                                        fontSize: "25px",
                                        margin: "0 10px",
                                      },
                                      children: "\u2716",
                                    }),
                                    Object(l.jsx)("p", {
                                      style: { display: "inline" },
                                      children: e.explanation,
                                    }),
                                  ],
                                })
                              : Object(l.jsxs)(l.Fragment, {
                                  children: [
                                    Object(l.jsx)("p", {
                                      style: {
                                        color: "green",
                                        display: "inline",
                                        fontSize: "25px",
                                        margin: "0 10px 0 0",
                                      },
                                      children: "\u2713",
                                    }),
                                    " ",
                                    Object(l.jsx)("p", {
                                      children: "Correct!",
                                    }),
                                  ],
                                }),
                        }),
                      ],
                    })
                  ),
              ],
            })
          );
        };
      navigator.vibrate =
        navigator.vibrate ||
        navigator.webkitVibrate ||
        navigator.mozVibrate ||
        navigator.msVibrate;
      const Te = Object(x.c)(
        be ||
          (be = Object(j.a)([
            "\n0%{transform: scale(1); box-shadow: 0 0 0px rgba(0,0,0,0);}\n20%{transform: scale(1.01); background: #fcebeb; box-shadow: 0 0 20px #eb8381;}\n50%{transform: scale(1); box-shadow: 0 0 0px rgba(0,0,0,0);}\n",
          ]))
      );
      console.log("Rendered");
      const Ce = x.b.button(
          pe ||
            (pe = Object(j.a)([
              '\n  background: red;\n  font-family: "Quicksand", sans-serif;\n  padding: 7px 12px;\n  margin-right: "20px";\n  text-transform: uppercase;\n  /* font-size: 15px; */\n  font-size: 2vh;\n  overflow: hidden;\n  border: 0;\n  border-radius: 5px;\n  background: #fcebeb;\n  color: #252525;\n  transition: all 0.25s ease;\n  cursor: pointer;\n\n  &:active {\n    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.5);\n    background: #fcebeb;\n  }\n',
            ]))
        ),
        Se =
          (x.b.button(
            ge ||
              (ge = Object(j.a)([
                '\n  background: red;\n  font-family: "Quicksand", sans-serif;\n  padding: 7px 12px;\n  margin: 20px;\n  text-transform: uppercase;\n  /* font-size: 15px; */\n  font-size: 3vh;\n  overflow: hidden;\n  border: 0;\n  border-radius: 5px;\n  background: #967bb6;\n  color: white;\n  transition: all 0.25s ease;\n  cursor: pointer;\n\n  &:active {\n    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.5);\n    background: #f2b1ae;\n  }\n',
              ]))
          ),
          x.b.div(
            je ||
              (je = Object(j.a)([
                '\n  color: #eb8381;\n  /* font-size: 1rem; */\n  /* font-size: clamp(4vh, 30px, 30px); */\n  /* font-size: min(2rem, 4vh); */\n  font-size: 4vh;\n  display: block;\n  margin: 30px;\n  font-family: "Quicksand", sans-serif;\n\n  /* @media (max-width: 40em) {\n    font-size: 5vh;\n  } */\n\n  /* justify-content: space-between; */\n',
              ]))
          )),
        Ie = x.b.div(
          xe ||
            (xe = Object(j.a)([
              '\n  background: #f8f6f0;\n  color: #252525;\n  /* height: 30vh; */\n  /* font-size: 1.2rem; */\n  font-size: 2.2vh;\n\n  white-space: pre-line;\n  margin: 10px 30px;\n  padding: 20px;\n  box-shadow: 0 0.1rem 0.1rem rgba(0, 0, 0, 0.2);\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  position: relative;\n\n  font-family: "Quicksand", sans-serif;\n  border-radius: 1rem;\n  /* padding: 20px; */\n',
            ]))
        ),
        Ee = x.b.p(
          fe ||
            (fe = Object(j.a)([
              '\n  color: #eb8381;\n  /* font-size: 20px; */\n  /* font-size: clamp(3vh, 20px, 20px); */\n  font-size: 3vh;\n  display: block;\n  margin-bottom: 50px;\n  font-family: "Quicksand", sans-serif;\n',
            ]))
        ),
        Le = x.b.div(
          Oe ||
            (Oe = Object(j.a)([
              '\n  /* height: 30vh; */\n  /* font-size: 20px; */\n  /* display: flex;\n  flex-direction: column; */\n  background: #252525;\n  color: #f8f6f0;\n  font-size: 2vh;\n  white-space: pre-line;\n  margin: 10px 30px;\n  padding: 20px;\n  box-shadow: 0 0.1rem 0.5rem rgba(0, 0, 0, 0.5);\n  display: block;\n  position: relative;\n  align-items: center;\n  font-family: "Quicksand", sans-serif;\n  border-radius: 1rem;\n  /* padding: 20px; */\n  animation: ',
              ';\n\n  .sectionImage {\n    display: block;\n    margin: 0 auto; /* This will center the image horizontally */\n    border-radius: 4rem;\n    width: 100%;\n    height: 100%;\n    object-fit: contain;\n  }\n\n  @media (min-width: 1050px) {\n    /* Apply styles for desktop devices with a screen width of 768px and above */\n    .sectionImage {\n      max-width: 25%; /* Adjust the maximum width as needed for desktop view */\n      margin-right: 60px; /* Add some spacing between the image and text on desktop */\n      display: inline;\n      vertical-align: middle;\n    }\n\n    .sectionText {\n      display: inline-block;\n      max-width: 70%;\n      font-size: 3vh;\n      vertical-align: middle;\n    }\n  }\n\n  .complete-button {\n    background: #fcebeb;\n    color: black;\n    padding: 7px 12px;\n    border: none;\n    border-radius: 15px;\n    cursor: pointer;\n    font-size: 14px;\n    display: block;\n    margin: auto;\n    font-family: "Quicksand", sans-serif;\n    font-size: 2vh;\n    margin-top: 75px;\n    text-transform: uppercase;\n    cursor: pointer;\n  }\n\n  .completed-button {\n    background: #18a558;\n    color: white;\n    padding: 7px 12px;\n    border: none;\n    border-radius: 15px;\n    cursor: pointer;\n    font-size: 14px;\n    display: block;\n    margin: auto;\n    font-family: "Quicksand", sans-serif;\n    font-size: 2.5vh;\n    margin-top: 75px;\n    text-transform: uppercase;\n    cursor: pointer;\n  }\n',
            ])),
          (e) =>
            e.sectionNumber == e.currentUrlSectionID
              ? Object(x.a)(
                  ve || (ve = Object(j.a)(["\n          ", " 2s\n        "])),
                  Te
                )
              : "none"
        ),
        ze = x.b.div(Ne || (Ne = Object(j.a)(["\n  margin: 0 auto;\n"]))),
        De = x.b.p(
          we ||
            (we = Object(j.a)([
              '\n  background: #eb8381;\n  align-items: center;\n  color: #252525;\n  /* font-size: 18px; */\n  font-size: 2.5vh;\n  display: inline-block;\n  margin-bottom: 10px;\n  padding-right: 10px;\n  font-family: "Quicksand", sans-serif;\n  border-radius: 5px;\n',
            ]))
        ),
        Me = x.b.p(
          ye ||
            (ye = Object(j.a)([
              "\n  /* font-size: 15px; */\n  font-size: 2vh;\n  margin-left: 30px;\n",
            ]))
        );
      var Pe = (e) => {
        let {
          courseTitleUserIsOn: s,
          setCourseTitleUserIsOn: t,
          courseDetails: o,
          setCourseDetails: a,
        } = m();
        console.log(o),
          Object(n.useEffect)(() => {
            t(e.match.params.courseTitle);
          }, []),
          console.log(s),
          console.log(e.match.params.courseTitle),
          Object(n.useEffect)(() => {
            i()("/coursesData").then((s) => {
              console.log(s.data);
              let t = s.data.find(
                (s) =>
                  s.courseTitle.replace(/\s/g, "") ===
                  e.match.params.courseTitle
              );
              a(t);
            });
          }, [s]),
          console.log(o);
        const [c, r] = Object(n.useState)([]),
          [d, u] = Object(n.useState)([]);
        console.log(e.match), console.log(e.match.params.topicNumber);
        let h = e.match.params.topicNumber;
        if (h.includes("%")) {
          let e = h.split("%");
          h = e[0];
        }
        console.log(h),
          Object(n.useEffect)(() => {
            i()(
              "/"
                .concat(s, "/topicRESTCAll/")
                .concat(h, "?collectionName=")
                .concat(o.courseTopicsCollectionName, "&modelName=")
                .concat(o.courseTopicsModelName)
            ).then((e) => {
              u(e.data), console.log(e.data);
            });
          }, [h, o]),
          Object(n.useEffect)(() => {
            i()(
              "/"
                .concat(s, "/lessonRESTCAll/2.1.2?collectionName=")
                .concat(o.courseTopicsCollectionName, "&modelName=")
                .concat(o.courseTopicsModelName)
            ).then((e) => {
              console.log(e.data);
            });
          }, [h, o]),
          console.log(d),
          Object(n.useEffect)(() => {
            i()(
              "/examplesData?collectionName="
                .concat(o.courseExamplesCollectionName, "&modelName=")
                .concat(o.courseExamplesModelName)
            ).then((e) => {
              r(e.data), console.log(e.data);
            });
          }, [h, o]),
          console.log(c);
        let b = window.location.href;
        console.log(b);
        let p = b.split("/");
        console.log(p);
        let g = p[p.length - 1];
        console.log(g);
        var j = [];
        (j = g.includes("%") ? g.split("%23") : g.split("#")), console.log(j);
        let x = j[1];
        console.log(x),
          Object(n.useEffect)(() => {
            void 0 === x && window.scrollTo({ top: 0, behavior: "smooth" });
          }, [b]),
          Object(n.useEffect)(() => {
            if (x) {
              const e = document.getElementById(x);
              e && e.scrollIntoView();
            }
          }),
          console.log(b);
        const f = [];
        d.sections && d.sections.map((e) => f.push(e.sectionNumber)),
          console.log(f);
        const O = (e) => {
            let s = 0 !== c.length && c.filter((s) => s.sectionNumber == e);
            return s[Math.floor(Math.random() * s.length)];
          },
          v = (e, s) => {
            const t = [];
            for (let n = 0; n < s; ) {
              const s = Math.floor(Math.random() * e.length);
              t.includes(e[s]) || (t.push(e[s]), n++);
            }
            return t;
          };
        let N = Math.ceil(100 / f.length);
        console.log(N);
        let w = [],
          y = [],
          k = [],
          T = [];
        f.map((e) => {
          let s = 0 !== c.length && c.filter((s) => s.sectionNumber == e);
          console.log(s),
            s.length > N
              ? ((w = v(s, N)), console.log(w), (k = y.concat(k, w)))
              : (k = y.concat(k, s)),
            console.log(y),
            console.log(k);
        }),
          console.log(y),
          console.log(k),
          (T = k.length > 100 ? v(k, 100) : k),
          console.log(T);
        const [C, S] = Object(n.useState)([]);
        return "undefined" === d || null === d || 0 === d.length
          ? Object(l.jsx)("div", { children: "Loading" })
          : Object(l.jsxs)("div", {
              children: [
                Object(l.jsxs)(Se, {
                  id: "Topic",
                  children: [
                    d.topicNumber,
                    " \xa0 ",
                    d.topicTitle,
                    d.topicYoutubeLink &&
                      Object(l.jsx)("a", {
                        href: d.topicYoutubeLink,
                        style: { fontSize: 25, marginLeft: "20px" },
                        target: "_blank",
                        rel: "noopener noreferrer",
                        children: Object(l.jsx)(Ce, {
                          children: Object(l.jsx)("b", { children: "Watch" }),
                        }),
                      }),
                    "\xa0 \xa0",
                    Object(l.jsx)(Ce, {
                      onClick: () => {
                        let e =
                            o.courseTitle +
                            "\nTopic " +
                            d.topicNumber +
                            " - " +
                            d.topicTitle,
                          t =
                            o.courseTitle +
                            "\nTopic " +
                            d.topicNumber +
                            " - " +
                            d.topicTitle +
                            "\n\n" +
                            d.topicDescription;
                        navigator.share
                          ? navigator.share({
                              title: e,
                              text: t,
                              url: "/#/"
                                .concat(s, "/topic/")
                                .concat(d.topicNumber),
                            })
                          : navigator.clipboard.writeText(
                              "/#/".concat(s, "/topic/").concat(d.topicNumber)
                            );
                      },
                      children: Object(l.jsx)("b", { children: "share" }),
                    }),
                  ],
                }),
                Object(l.jsx)(Ie, {
                  children: Object(l.jsx)("p", {
                    children: d.topicDescription,
                  }),
                }),
                Object(l.jsx)("hr", {
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
                d.sections &&
                  d.sections.map((e) =>
                    Object(l.jsxs)("div", {
                      children: [
                        Object(l.jsxs)(Le, {
                          currentUrlSectionID: x,
                          sectionNumber: e.sectionNumber,
                          id: e.sectionNumber,
                          children: [
                            Object(l.jsxs)(Ee, {
                              children: [
                                Object(l.jsxs)("b", {
                                  children: [
                                    e.sectionNumber,
                                    " \xa0 ",
                                    e.sectionTitle,
                                  ],
                                }),
                                e.sectonYoutubeLink &&
                                  Object(l.jsx)("a", {
                                    href: e.sectonYoutubeLink,
                                    style: { marginLeft: "20px" },
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    children: Object(l.jsx)(Ce, {
                                      children: Object(l.jsx)("b", {
                                        children: "Watch",
                                      }),
                                    }),
                                  }),
                                "\xa0 \xa0",
                                Object(l.jsx)(Ce, {
                                  onClick: () => {
                                    let t = decodeURIComponent(
                                        "/#/"
                                          .concat(s, "/topic/")
                                          .concat(d.topicNumber, "%23")
                                          .concat(e.sectionNumber)
                                      ),
                                      n =
                                        o.courseTitle +
                                        "\nSection " +
                                        e.sectionNumber +
                                        " - " +
                                        e.sectionTitle +
                                        "\n\n" +
                                        e.sectionDescription +
                                        "\n\n" +
                                        e.sectionNotes.join(" "),
                                      a =
                                        o.courseTitle +
                                        "\nSection " +
                                        e.sectionNumber +
                                        " - " +
                                        e.sectionTitle;
                                    navigator.share
                                      ? navigator.share({
                                          title: a,
                                          text: n,
                                          url: t,
                                        })
                                      : navigator.clipboard.writeText(
                                          "/#/"
                                            .concat(s, "/topic/")
                                            .concat(d.topicNumber, "#")
                                            .concat(e.sectionNumber)
                                        );
                                  },
                                  children: Object(l.jsx)("b", {
                                    children: "share",
                                  }),
                                }),
                              ],
                            }),
                            Object(l.jsxs)(ze, {
                              children: [
                                Object(l.jsx)("img", {
                                  className: "sectionImage",
                                  src:
                                    "https://qaleelo-assets.s3.us-east-2.amazonaws.com/" +
                                    o.courseTitle.replace(/\s/g, "") +
                                    "/sectionImages/" +
                                    e.sectionNumber +
                                    ".png",
                                  alt: "",
                                }),
                                Object(l.jsxs)("div", {
                                  className: "sectionText",
                                  children: [
                                    Object(l.jsx)("p", {
                                      children: e.sectionDescription,
                                    }),
                                    e.sectionNotes &&
                                      e.sectionNotes.map((e, s) =>
                                        Object(l.jsx)(l.Fragment, {
                                          children:
                                            0 !== e.length &&
                                            Object(l.jsxs)("div", {
                                              children: [
                                                Object(l.jsx)(De, {
                                                  children: Object(l.jsx)(
                                                    "div",
                                                    {
                                                      className: "noteTitle",
                                                      children: Object(l.jsxs)(
                                                        "b",
                                                        {
                                                          children: [
                                                            "\xa0 Note ",
                                                            s + 1,
                                                          ],
                                                        }
                                                      ),
                                                    }
                                                  ),
                                                }),
                                                Object(l.jsx)(Me, {
                                                  className: "noteDescription",
                                                  children: e,
                                                }),
                                              ],
                                            }),
                                        })
                                      ),
                                  ],
                                }),
                              ],
                            }),
                            o.isQuizInStudyMode &&
                              Object(l.jsx)(ke, {
                                topicNumber: h,
                                section: e.sectionNumber,
                                sectionTitle: e.sectionTitle,
                                sectionExample: O(e.sectionNumber),
                              }),
                          ],
                        }),
                        Object(l.jsx)("hr", {
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
                    })
                  ),
              ],
            });
      };
      const Be = Object(n.createContext)(),
        Fe = Object(n.createContext)();
      var Ae, Ue, Re, Ge, We, Qe;
      Object(x.c)(
        Ae || (Ae = Object(j.a)(["\n0%{opacity: 0}\n100%{opacity: 1}\n"]))
      ),
        x.b.button(
          Ue ||
            (Ue = Object(j.a)([
              '\n  background: red;\n  font-family: "Quicksand", sans-serif;\n  padding: 7px 12px;\n  text-transform: uppercase;\n  font-size: 2vh;\n  overflow: hidden;\n  border: 0;\n  border-radius: 5px;\n  background: #967bb6;\n  color: white;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);\n  transition: all 0.25s ease;\n  cursor: pointer;\n  &:active {\n    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.5);\n    background: #f2b1ae;\n  }\n',
            ]))
        );
      const He = x.b.div(
          Re ||
            (Re = Object(j.a)([
              '\n  /* box-shadow: 0 0.1rem 0.5rem rgba(0, 0, 0, 0.2); */\n  border-radius: 5px;\n  padding: 10px;\n  /* background: #252525; */\n  /* margin-top: 80px; */\n  font-family: "Quicksand", sans-serif;\n',
            ]))
        ),
        Ye = x.b.div(
          Ge ||
            (Ge = Object(j.a)([
              "\n  /* font-size: 17px; */\n  font-size: 2.5vh;\n  font-weight: bold;\n  text-align: center;\n  color: #a678de;\n  padding: 20px;\n",
            ]))
        ),
        Ke = Object(x.b)(v.a.div)(
          We ||
            (We = Object(j.a)([
              "\n  font-size: 2.5vh;\n  font-weight: bold;\n  /* border-radius: 15px; */\n  /* padding: 10px; */\n  text-align: center;\n  font-family: Quicksand;\n  display: flex;\n  background: ",
              ";\n\n  transition: transform 300ms;\n  justify-content: center;\n  pointer-events: ",
              ";\n\n  &:hover {\n    cursor: pointer;\n  }\n",
            ])),
          (e) =>
            e.answerClicked == e.answer && e.submitted
              ? e.answerColor
              : e.answerClicked == e.answer
              ? "#b8b8b8"
              : "#D2CFE6",
          (e) => (e.submitted ? "none" : "auto")
        ),
        Ve = x.b.div(
          Qe ||
            (Qe = Object(j.a)([
              "\n  /* font-size: 2vh; */\n  display: ",
              ";\n  align-items: center;\n  justify-content: center;\n",
            ])),
          (e) => (e.answerClicked == e.answer && e.submitted ? "flex" : "none")
        );
      var qe,
        _e,
        Je,
        Xe,
        $e,
        Ze,
        es,
        ss = (e) => {
          const { courseTitleUserIsOn: s, entryStore: t, isDarkMode: o } = m(),
            [a, c] = Object(n.useContext)(Be),
            [r, i] = Object(n.useContext)(Fe),
            [d, u] = Object(n.useState)("#e8e2ef"),
            [h, b] = Object(n.useState)("NoAnswer"),
            [p, g] = Object(n.useState)(!1),
            [j, x] = Object(n.useState)("noSelection");
          Object(n.useEffect)(() => {
            0 == a.length && b("NoAnswer");
          }, [r]);
          const f = (s, t) => {
            b(t),
              g(!0),
              1 == s
                ? (u("#DAF7A6"),
                  x(!0),
                  (function (e) {
                    const s = [...a];
                    (s[e] = 1), c(s), console.log(a);
                  })(e.exampleIndex),
                  console.log(e.exampleIndex))
                : (u("#ff726f"),
                  x(!1),
                  (function (e) {
                    const s = [...a];
                    (s[e] = 0), c(s), console.log(a);
                  })(e.exampleIndex));
          };
          const O = e.example.sectionNumber,
            N = (function (e) {
              if (t)
                for (const s of t)
                  for (const t of s.entries)
                    for (const s of t.entries)
                      for (const t of s.entries)
                        if (t.sectionNumber === e) return t.title;
              return null;
            })(O);
          return (
            null !== N
              ? console.log("Section Title for ".concat(O, ": ").concat(N))
              : console.log(
                  "Section with Section Number ".concat(O, " not found.")
                ),
            Object(l.jsxs)(He, {
              className: "LessonExampleBox",
              children: [
                Object(l.jsx)(Ye, { children: e.example.question }),
                e.example &&
                  e.example.answers.map((t) =>
                    Object(l.jsxs)(l.Fragment, {
                      children: [
                        Object(l.jsx)(Ke, {
                          className: "LessonExampleAnswerBox",
                          whileHover: { scale: 1.2 },
                          whileTap: { scale: 0.8 },
                          transition: {
                            type: "spring",
                            stiffness: 400,
                            damping: 17,
                          },
                          onClick: () => f(t.isCorrect, t.answer),
                          answerColor: d,
                          answer: t.answer,
                          answerClicked: h,
                          submitted: r,
                          sumCorrect: a,
                          children: Object(l.jsx)("div", {
                            className: "LessonExampleAnswer",
                            children: t.answer,
                          }),
                        }),
                        Object(l.jsx)(Ve, {
                          answerClicked: h,
                          answer: t.answer,
                          answerColor: d,
                          selectedAnswer: j,
                          submitted: r,
                          children:
                            0 == t.isCorrect
                              ? Object(l.jsxs)("div", {
                                  style: { width: "90% " },
                                  children: [
                                    Object(l.jsxs)("div", {
                                      className:
                                        "LessonExampleAnswerExplanationContainer ".concat(
                                          o ? "darkThemeFont" : "lightThemeFont"
                                        ),
                                      children: [
                                        Object(l.jsx)("i", {
                                          class: "wrongCross fa-solid fa-xmark",
                                        }),
                                        Object(l.jsx)("p", {
                                          style: { display: "inline" },
                                          className:
                                            "LessonExampleAnswerExplanation",
                                          children: t.explanation,
                                        }),
                                      ],
                                    }),
                                    Object(l.jsxs)(v.a.div, {
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
                                        Object(l.jsxs)("div", {
                                          style: {},
                                          className: "LessonTitleContainer",
                                          children: [
                                            Object(l.jsx)("span", {
                                              className: "LessonNumber",
                                              children: "Revise Lesson",
                                            }),
                                            " ",
                                          ],
                                        }),
                                        Object(l.jsx)(k.c, {
                                          to: "/"
                                            .concat(s, "/lesson/")
                                            .concat(e.example.sectionNumber),
                                          children: Object(l.jsx)(v.a.div, {
                                            whileTap: { scale: 0.8 },
                                            transition: {
                                              type: "spring",
                                              stiffness: 400,
                                              damping: 17,
                                            },
                                            children: Object(l.jsx)(L, {
                                              number: e.example.sectionNumber,
                                              title: N,
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
                              : Object(l.jsxs)(l.Fragment, {
                                  children: [
                                    Object(l.jsx)("i", {
                                      class:
                                        "correctCheckMark fa-solid fa-check",
                                    }),
                                    Object(l.jsx)("p", {
                                      className:
                                        "LessonExampleAnswerExplanation ".concat(
                                          o ? "darkThemeFont" : "lightThemeFont"
                                        ),
                                      children: "Correct!",
                                    }),
                                  ],
                                }),
                        }),
                      ],
                    })
                  ),
              ],
            })
          );
        },
        ts = (t(330), t(25));
      const ns = x.b.button(
          qe ||
            (qe = Object(j.a)([
              '\n  background: red;\n  font-family: "Quicksand", sans-serif;\n  padding: 7px 100px;\n  text-transform: uppercase;\n  font-size: 2vh;\n  overflow: hidden;\n  border: 0;\n  border-radius: 5px;\n  background: #967bb6;\n  color: white;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);\n  transition: all 0.25s ease;\n  cursor: pointer;\n\n  &:active {\n    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.5);\n    background: #f2b1ae;\n  }\n',
            ]))
        ),
        os = x.b.div(
          _e ||
            (_e = Object(j.a)([
              "\n  background: ",
              ";\n  font-size: 40px;\n  white-space: pre-line;\n  margin: 10px 30px;\n\n  box-shadow: 10px 15px 15px rgba(0, 0, 0, 0.767);\n  display: ",
              '; /* Display score card only when button is clicked, ie. when submitted state is true */\n  flex-wrap: wrap;\n  position: relative;\n  align-items: center;\n  justify-content: space-around;\n  /* text-align: center; */\n  flex-direction: column;\n  font-family: "Quicksand", sans-serif;\n  border-radius: 1rem;\n  padding: 20px;\n  padding-left: 60px;\n',
            ])),
          (e) => (100 == e.scorePercentage ? "#f6ffe6" : "#e8c6c5"),
          (e) => (e.submitted ? "flex" : "none")
        ),
        as = x.b.p(
          Je ||
            (Je = Object(j.a)([
              '\n  font-size: 5vh;\n  font-family: "Quicksand", sans-serif;\n  text-align: center;\n  font-weight: 900;\n  margin: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n',
            ]))
        ),
        cs = x.b.div(
          Xe ||
            (Xe = Object(j.a)([
              "\n  font-size: 3vh;\n  text-align: center;\n  font-weight: 900;\n  margin: 0;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  animation: ",
              ";\n\n  @media (max-width: 1200px) {\n    flex-basis: 100%;\n    margin-bottom: 20px;\n  }\n",
            ])),
          (e) =>
            e.submitted && 100 == e.scorePercentage
              ? Object(x.a)(
                  $e ||
                    ($e = Object(j.a)(["\n          shakeY 1s 1s\n        "]))
                )
              : e.submitted && e.scorePercentage < 100
              ? Object(x.a)(
                  Ze ||
                    (Ze = Object(j.a)(["\n          shakeX 1s 1s\n        "]))
                )
              : "none"
        ),
        rs = x.b.div(
          es ||
            (es = Object(j.a)([
              "\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n\n  @media (max-width: 1200px) {\n    flex-basis: 100%;\n    margin-top: 30px;\n  }\n",
            ]))
        );
      var is,
        ls,
        ds,
        ms,
        us = (e) => {
          const { exampleDatafromBackEnd: s, courseTitleUserIsOn: t } = m();
          console.log(s);
          const [o, a] = Object(n.useContext)(Be),
            [c, r] = Object(n.useState)("#f8f8f8"),
            [d, u] = Object(n.useState)(null),
            [h, b] = Object(n.useContext)(Fe),
            p = Object(F.g)(),
            g = o.reduce(function (e, s) {
              return e + s;
            }, 0),
            j = Math.round((g / o.length) * 100),
            [x, f] = Object(n.useState)(!1);
          100 !== j ||
            x ||
            (async function () {
              const s = localStorage.getItem("userEmail");
              console.log(s), console.log(t), console.log(e.topicNumber);
              const n = {
                userEmail: s,
                chapterProgress: [
                  { courseProgress: t, chapterProgress: [e.topicNumber] },
                ],
              };
              try {
                await i.a.post("/insertChapterProgressRecord", n),
                  console.log("Chapter progress data sent successfully!"),
                  f(!0);
              } catch (o) {
                console.error("Error sending chapter progress data:", o);
              }
            })(),
            Object(n.useEffect)(() => {
              const e = localStorage.getItem("userEmail");
              if (!e)
                return void console.error(
                  "User email not found in local storage"
                );
              x &&
                (async () => {
                  try {
                    const s = await i.a.get("/fetchChapterProgressRecord", {
                      params: { userEmail: e },
                    });
                    u(s.data);
                  } catch (s) {
                    console.error("Error fetching chapter progress data:", s);
                  }
                })();
            }, [x]);
          e.goBackTo,
            "Topic" == e.comingFrom
              ? "/".concat(t, "/topic/").concat(e.topicNumber)
              : "Section" == e.comingFrom
              ? "/"
                  .concat(t, "/topic/")
                  .concat(e.topicNumber, "#")
                  .concat(e.sectionNumber)
              : "ScoreCard" == e.comingFrom && e.sections.constructor == Array
              ? "/".concat(t, "/topic/").concat(e.topicNumber)
              : "ScoreCard" == e.comingFrom
              ? "/"
                  .concat(t, "/topic/")
                  .concat(e.topicNumber, "#")
                  .concat(p.state.sectionNumber)
              : "/".concat(t, "/topic/").concat(e.topicNumber);
          let O =
            "Topic" == e.comingFrom
              ? "/".concat(t, "/quiz/").concat(e.topicNumber)
              : "Section" == e.comingFrom
              ? "/"
                  .concat(t, "/quiz/")
                  .concat(e.topicNumber, "/")
                  .concat(e.sectionNumber)
              : "ScoreCard" == e.comingFrom && e.sections.constructor == Array
              ? "/".concat(t, "/quiz/").concat(e.topicNumber)
              : "ScoreCard" == e.comingFrom
              ? "/"
                  .concat(t, "/quiz/")
                  .concat(e.topicNumber, "/")
                  .concat(p.state.sectionNumber)
              : "/".concat(t, "/quiz/").concat(e.topicNumber);
          const N = (e, s) => {
            const t = [];
            for (let n = 0; n < s; ) {
              const s = Math.floor(Math.random() * e.length);
              t.includes(e[s]) || (t.push(e[s]), n++);
            }
            return t;
          };
          console.log(e.comingFrom),
            console.log(e.sections),
            console.log(e.topicNumber),
            console.log(e.sectionNumber);
          let w = Math.ceil(5 / e.sections.length),
            y = [],
            T = [],
            C = [],
            S = [];
          if ("Topic" == e.comingFrom)
            e.sections.map((e) => {
              let t = s.filter((s) => s.sectionNumber == e);
              t.length > w
                ? ((y = N(t, w)), T.push.apply(T, y))
                : T.push.apply(T, t);
            }),
              T.length > 5 ? ((C = N(T, 5)), (S = C)) : ((C = T), (S = C));
          else if ("Section" == e.comingFrom) {
            let t = s.filter((s) => s.sectionNumber == e.sections);
            t.length > 5 ? ((y = N(t, 5)), (S = y)) : ((y = t), (S = y));
          } else if ("ScoreCard" == e.comingFrom)
            if (e.sections.constructor == Array)
              e.sections.map((e) => {
                let t = s.filter((s) => s.sectionNumber == e);
                t.length > w
                  ? ((y = N(t, w)), T.push.apply(T, y))
                  : T.push.apply(T, t);
              }),
                T.length > 5 ? ((C = N(T, 5)), (S = C)) : ((C = T), (S = C));
            else {
              let t = s.filter((s) => s.sectionNumber == e.sections);
              t.length > 5 ? ((y = N(t, 5)), (S = y)) : ((y = t), (S = y));
            }
          console.log(C), console.log(y);
          return Object(l.jsxs)(os, {
            submitted: h,
            scorePercentage: j,
            children: [
              100 === j
                ? Object(l.jsxs)(cs, {
                    submitted: h,
                    scorePercentage: j,
                    children: [
                      Object(l.jsx)("p", {
                        style: {
                          color: "green",
                          display: "inline",
                          fontSize: "50px",
                          margin: "0 10px 0 0",
                        },
                        children: "\u2713",
                      }),
                      Object(l.jsx)("p", {
                        children: "Congratulations you got them all right!",
                      }),
                    ],
                  })
                : Object(l.jsxs)(cs, {
                    submitted: h,
                    scorePercentage: j,
                    children: [
                      Object(l.jsx)("p", {
                        style: {
                          color: "#ff726f",
                          display: "inline",
                          fontSize: "50px",
                          margin: "0 10px",
                        },
                        children: "\u2716",
                      }),
                      Object(l.jsx)("p", { children: "Not quite there yet!" }),
                    ],
                  }),
              Object(l.jsxs)("div", {
                children: [
                  Object(l.jsxs)("div", {
                    style: {
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-around",
                      fontSize: "3vh",
                    },
                    children: [
                      Object(l.jsx)("p", { children: "Score" }),
                      Object(l.jsxs)(as, { children: [g, "/", o.length] }),
                    ],
                  }),
                  Object(l.jsxs)("div", {
                    style: {
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-around",
                      fontSize: "3vh",
                    },
                    children: [
                      Object(l.jsx)("p", {
                        style: { marginRight: "50px" },
                        children: "Percentage",
                      }),
                      Object(l.jsxs)(as, { children: [j, "%"] }),
                    ],
                  }),
                ],
              }),
              100 == j &&
                !1 !== e.nextChapterFirstLessonNumber &&
                Object(l.jsxs)(v.a.div, {
                  className: "LessonExampleNextLessonBox",
                  style: {
                    marginTop: "0",
                    marginBottom: "4vh",
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  },
                  initial: { opacity: 0, scale: 0.5 },
                  animate: { opacity: 1, scale: [1, 1.03, 1] },
                  transition: {
                    duration: 2,
                    delay: 0.5,
                    ease: [0, 0.71, 0.2, 1.01],
                  },
                  children: [
                    Object(l.jsxs)("div", {
                      style: { width: "100%" },
                      children: [
                        " ",
                        Object(l.jsx)(U, {
                          chapterNumber: e.chapterNumber,
                          courseTitleUserIsOn: t,
                          chapterProgressData: d,
                        }),
                      ],
                    }),
                    Object(l.jsxs)("div", {
                      style: { marginLeft: "0", width: "100%" },
                      className: "LessonTitleContainerOnSideNav",
                      children: [
                        Object(l.jsxs)("div", {
                          children: [
                            Object(l.jsxs)("span", {
                              className: "LessonNumber",
                              children: ["Next Chapter ", e.nextChapterNumber],
                            }),
                            " ",
                          ],
                        }),
                        Object(l.jsxs)("div", {
                          style: { fontSize: "2vh", textAlign: "center" },
                          children: [
                            " ",
                            Object(l.jsx)("span", {
                              className: "LessonTitle",
                              children: e.nextChapterTitle,
                            }),
                          ],
                        }),
                      ],
                    }),
                    Object(l.jsx)("div", {
                      style: { width: "100%" },
                      children: Object(l.jsx)(k.c, {
                        to: "/"
                          .concat(t, "/lesson/")
                          .concat(e.nextChapterFirstLessonNumber),
                        children: Object(l.jsx)(v.a.div, {
                          whileTap: { scale: 0.8 },
                          transition: {
                            type: "spring",
                            stiffness: 400,
                            width: "100%",
                            damping: 17,
                          },
                          children: Object(l.jsx)(L, {
                            number: e.nextChapterFirstLessonNumber,
                            title: e.nextChapterFirstLessonTitle,
                            marginLeft: "0",
                            borderRadius: "14% 2% 2% 14% / 50% 10% 10% 50%",
                          }),
                        }),
                      }),
                    }),
                  ],
                }),
              100 == j &&
                0 == e.nextChapterFirstLessonNumber &&
                Object(l.jsxs)(v.a.div, {
                  className: "LessonExampleNextLessonBox",
                  style: {
                    marginTop: "0",
                    marginBottom: "4vh",
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignContent: "center",
                  },
                  initial: { opacity: 0, scale: 0.5 },
                  animate: { opacity: 1, scale: [1, 1.03, 1] },
                  transition: {
                    duration: 2,
                    delay: 0.5,
                    ease: [0, 0.71, 0.2, 1.01],
                  },
                  children: [
                    Object(l.jsxs)("div", {
                      style: { width: "95%" },
                      children: [
                        " ",
                        Object(l.jsx)(U, {
                          chapterNumber: e.chapterNumber,
                          courseTitleUserIsOn: t,
                          chapterProgressData: d,
                        }),
                      ],
                    }),
                    Object(l.jsxs)("div", {
                      style: { textAlign: "center", width: "100%" },
                      className: "LessonTitleContainer",
                      children: [
                        Object(l.jsx)("span", { className: "LessonNumber" }),
                        " ",
                        Object(l.jsx)("br", {}),
                        Object(l.jsxs)("span", {
                          className: "LessonTitle",
                          children: [
                            " ",
                            "This is the end",
                            Object(l.jsx)("br", {}),
                            " of the Course!",
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              100 !== j &&
                Object(l.jsx)(rs, {
                  children: Object(l.jsx)(k.c, {
                    to: {
                      pathname: O,
                      state: {
                        comingFrom: "ScoreCard",
                        sections: e.sections,
                        scoreCardSelectedQuizQuestons: S,
                        sectionNumber: e.sectionNumber,
                      },
                    },
                    children: Object(l.jsx)(ns, {
                      style: { marginBottom: 20 },
                      onClick: () => {
                        b(!1), a([]);
                      },
                      children: "Try Again",
                    }),
                  }),
                }),
            ],
          });
        };
      t.p, t(82);
      x.b.div(
        is ||
          (is = Object(j.a)([
            "\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  height: 100%; /* Ensure the div takes full height */\n",
          ]))
      ),
        x.b.div(
          ls ||
            (ls = Object(j.a)([
              "\n  position: relative;\n  width: 100%;\n  max-width: 700px;\n  margin-bottom: 20px;\n  margin-right: 50px;\n",
            ]))
        ),
        x.b.input(
          ds ||
            (ds = Object(j.a)([
              '\n  width: 100%;\n  height: 80px;\n  padding: 10px;\n  padding-left: 70px;\n  font-family: "Quicksand", sans-serif;\n  font-size: 3vh;\n\n  border: none;\n  border-radius: 4px;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n',
            ]))
        ),
        x.b.div(
          ms ||
            (ms = Object(j.a)([
              "\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  left: 10px;\n  font-size: 3vh;\n",
            ]))
        );
      t(19);
      var hs, bs, ps, gs, js;
      x.b.nav(
        hs ||
          (hs = Object(j.a)([
            "\n  background: #d0bad9;\n  /* top: 80; */\n  height: 6vh;\n  transform: translateY(",
            ");\n  transition: 0.2s;\n  display: flex;\n  justify-content: space-between;\n",
          ])),
        (e) => e.navTop + "vh"
      ),
        x.b.div(
          bs ||
            (bs = Object(j.a)(["\n  display: flex;\n  align-items: center;\n"]))
        ),
        x.b.img(
          ps ||
            (ps = Object(j.a)([
              "\n  width: 6vh; /* Adjust the width as needed */\n  height: 6vh; /* Adjust the height as needed */\n  margin-left: 70px; /* Adjust the margin as needed */\n",
            ]))
        ),
        x.b.button(
          gs ||
            (gs = Object(j.a)([
              '\n  background: red;\n  position: relative;\n  font-family: "Quicksand", sans-serif;\n  padding: 7px 12px;\n  text-transform: uppercase;\n  /* font-size: 15px; */\n  font-size: 4vh;\n  font-weight: bold;\n  overflow: hidden;\n  border: 0;\n  border-radius: 5px;\n  background: #8747d4;\n  color: #f8f6f0;\n  height: 6vh;\n\n  transition: all 0.25s ease;\n  cursor: pointer;\n  margin-right: 20px;\n\n  &:active {\n    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.5);\n    background: #f2b1ae;\n  }\n',
            ]))
        ),
        x.b.button(
          js ||
            (js = Object(j.a)([
              '\n  background: red;\n  font-family: "Quicksand", sans-serif;\n  padding: 7px 12px;\n  /* margin: 20px; */\n  text-transform: uppercase;\n  /* font-size: 15px; */\n  font-size: 2.5vh;\n  overflow: hidden;\n  border: 0;\n  border-radius: 5px;\n  background: #eb3535;\n  color: white;\n  transition: all 0.25s ease;\n  cursor: pointer;\n  height: 6vh;\n\n  &:active {\n    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.5);\n    background: #f2b1ae;\n  }\n',
            ]))
        );
      var xs;
      const fs = x.b.nav(
        xs ||
          (xs = Object(j.a)([
            "\n  /* background: #dd6260; */\n  background: #8747d4;\n  /* top: 80; */\n  height: 6vh;\n  transform: translateY(",
            ");\n  transition: 0.2s;\n  display: flex;\n  justify-content: space-between;\n",
          ])),
        (e) => e.navTop + "vh"
      );
      function Os(e) {
        const [s, t] = Object(n.useState)([]),
          {
            courseTitleUserIsOn: o,
            entryStore: a,
            setEntryStore: c,
            courseDetails: r,
            setSubContainerEntries: d,
            subContainer: u,
            setSubContainer: h,
            rowClicked: b,
            setRowClicked: p,
            isDarkMode: g,
            setIsDarkMode: j,
            navOpen: x,
            setNavOpen: O,
          } = m();
        console.log(o, r, a);
        Object(n.useEffect)(() => {
          i()(
            "/"
              .concat(o, "/sideBarData?collectionName=")
              .concat(r.courseTopicsCollectionName, "&modelName=")
              .concat(r.courseTopicsModelName)
          ).then((e) => {
            c(e.data), console.log(e.data);
          });
        }, [r]),
          console.log(
            "/api/"
              .concat(o, "/sideBarData?collectionName=")
              .concat(r.courseTopicsCollectionName, "&modelName=")
              .concat(r.courseTopicsModelName)
          ),
          console.log(a);
        const [v, N] = Object(n.useState)("0"),
          [w, k] = Object(n.useState)("0"),
          [T, C] = Object(n.useState)("0"),
          [S, I] = Object(n.useState)("0"),
          [E, L] = Object(n.useState)(0);
        var z = window.scrollY;
        window.addEventListener("scroll", function () {
          z < window.scrollY ? L(-6) : L(0), (z = window.scrollY);
        });
        const D = () => {
          O(!1);
        };
        return Object(l.jsxs)("div", {
          style: { display: "unset" },
          children: [
            Object(l.jsxs)(fs, {
              style: { position: "sticky", top: 0, zIndex: 1e4 },
              navTop: E,
              children: [
                Object(l.jsxs)("div", {
                  children: [
                    Object(l.jsx)(f, {
                      click: () => {
                        O(!0);
                      },
                    }),
                    " ",
                  ],
                }),
                Object(l.jsxs)("div", {
                  className: "toggle-container",
                  children: [
                    " ",
                    Object(l.jsx)("input", {
                      type: "checkbox",
                      id: "toggle_checkbox",
                      checked: g,
                      onChange: () => {
                        j(!g);
                      },
                    }),
                    Object(l.jsxs)("label", {
                      for: "toggle_checkbox",
                      children: [
                        Object(l.jsxs)("div", {
                          id: "star",
                          children: [
                            Object(l.jsx)("div", {
                              class: "star",
                              id: "star-1",
                              children: "\u2605",
                            }),
                            Object(l.jsx)("div", {
                              class: "star",
                              id: "star-2",
                              children: "\u2605",
                            }),
                          ],
                        }),
                        Object(l.jsx)("div", { id: "moon" }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            Object(l.jsx)(y.a, {
              in: x && a,
              timeout: 300,
              mountOnEnter: !0,
              unmountOnExit: !0,
              children: (e) =>
                Object(l.jsx)(l.Fragment, {
                  children: Object(l.jsx)(G, { state: e, click: D }),
                }),
            }),
          ],
        });
      }
      var vs, Ns, ws, ys, ks, Ts;
      const Cs = x.b.p(
          vs ||
            (vs = Object(j.a)([
              '\n  color: #eb8381;\n  /* font-size: 3vh; */\n  font-family: "Quicksand", sans-serif;\n  justify-content: center;\n  text-align: center;\n  /* margin: 30px 30px; */\n  display: flex;\n\n  /* justify-content: space-between; */\n',
            ]))
        ),
        Ss =
          (x.b.div(
            Ns ||
              (Ns = Object(j.a)([
                "\n  display: flex;\n  justify-content: center;\n",
              ]))
          ),
          x.b.button(
            ws ||
              (ws = Object(j.a)([
                '\n  background: red;\n  font-family: "Quicksand", sans-serif;\n  padding: 7px 12px;\n  margin: 20px;\n  text-transform: uppercase;\n  /* font-size: 15px; */\n  font-size: 3vh;\n  overflow: hidden;\n  border: 0;\n  border-radius: 5px;\n  background: #eb3535;\n  color: white;\n  transition: all 0.25s ease;\n  cursor: pointer;\n\n  &:active {\n    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.5);\n    background: #f2b1ae;\n  }\n',
              ]))
          ),
          x.b.button(
            ys ||
              (ys = Object(j.a)([
                '\n  background: red;\n  font-family: "Quicksand", sans-serif;\n  padding: 7px 12px;\n  text-transform: uppercase;\n  font-size: 3vh;\n  overflow: hidden;\n  border: 0;\n  border-radius: 5px;\n  background: #8747d4;\n  color: white;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);\n  transition: all 0.25s ease;\n  cursor: pointer;\n\n  &:active {\n    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.5);\n    background: #f2b1ae;\n  }\n',
              ]))
          ));
      x.b.button(
        ks ||
          (ks = Object(j.a)([
            '\n  background: red;\n  font-family: "Quicksand", sans-serif;\n  padding: 7px 12px;\n  margin-right: "20px";\n  text-transform: uppercase;\n  /* font-size: 15px; */\n  font-size: 2vh;\n  overflow: hidden;\n  border: 0;\n  border-radius: 5px;\n  background: #e8e2ef;\n  color: #252525;\n  transition: all 0.25s ease;\n  cursor: pointer;\n\n  &:active {\n    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.5);\n    background: #e8e2ef;\n  }\n',
          ]))
      ),
        x.b.div(
          Ts ||
            (Ts = Object(j.a)([
              '\n  color: #9589be;\n  /* font-size: 1rem; */\n  /* font-size: clamp(4vh, 30px, 30px); */\n  /* font-size: min(2rem, 4vh); */\n  font-size: 4vh;\n  display: block;\n  margin: 30px;\n  font-family: "Quicksand", sans-serif;\n\n  /* @media (max-width: 40em) {\n    font-size: 5vh;\n  } */\n\n  /* justify-content: space-between; */\n',
            ]))
        );
      var Is = (e) => {
        let {
          courseTitleUserIsOn: s,
          setCourseTitleUserIsOn: t,
          courseDetails: o,
          setCourseDetails: a,
          entryStore: c,
          setEntryStore: r,
          setSubContainerEntries: d,
          setSubContainer: u,
          navOpen: h,
        } = m();
        console.log(o),
          Object(n.useEffect)(() => {
            t(e.match.params.courseTitle);
          }, []),
          console.log(s),
          console.log(e.match.params.courseTitle),
          console.log(o);
        const [b, p] = Object(n.useState)(!1),
          [g, j] = Object(n.useState)([]),
          [x, f] = Object(n.useState)("none"),
          O = Object(F.g)();
        Object(n.useEffect)(
          () => window.scrollTo({ top: 0, behavior: "smooth" }),
          [b]
        ),
          console.log(x),
          console.log(O),
          console.log(O.state),
          Object(n.useEffect)(() => {
            i()("/coursesData").then((s) => {
              console.log(s.data);
              let t = s.data.find(
                (s) =>
                  s.courseTitle.replace(/\s/g, "") ===
                  e.match.params.courseTitle
              );
              a(t);
            });
          }, [s]),
          console.log(o),
          console.log(e.match),
          console.log(e.match.params.topicNumber);
        let v = e.match.params.topicNumber;
        console.log(v), console.log(o);
        const [N, w] = Object(n.useState)([]);
        Object(n.useEffect)(() => {
          i()(
            "/examplesData?collectionName="
              .concat(o.courseExamplesCollectionName, "&modelName=")
              .concat(o.courseExamplesModelName)
          ).then((e) => {
            w(e.data), console.log(e.data);
          });
        }, [o]),
          console.log(N);
        const [y, k] = Object(n.useState)([]);
        console.log(s),
          Object(n.useEffect)(() => {
            i()(
              "/"
                .concat(s, "/topicRESTCAll/")
                .concat(v, "?collectionName=")
                .concat(o.courseTopicsCollectionName, "&modelName=")
                .concat(o.courseTopicsModelName)
            ).then((e) => {
              k(e.data), console.log(e.data);
            });
          }, [v, o]),
          console.log(y),
          Object(n.useEffect)(() => {
            i()(
              "/"
                .concat(s, "/sideBarData?collectionName=")
                .concat(o.courseTopicsCollectionName, "&modelName=")
                .concat(o.courseTopicsModelName)
            ).then((e) => {
              r(e.data), console.log(e.data);
            });
          }, [y.topicNumber]),
          console.log(c),
          console.log(c),
          Object(n.useEffect)(() => {
            let e = !1;
            const s = y.topicNumber;
            if (c)
              for (const t of c) {
                for (const n of t.entries) {
                  for (const t of n.entries)
                    if (t.topicNumber === s) {
                      (e = !0), d(n.entries), u(!0);
                      break;
                    }
                  if (e) break;
                }
                if (e) break;
              }
          }, [h, o, y]);
        const T = (function (e) {
          let s = !1;
          if (c)
            for (const t of c) {
              for (const n of t.entries)
                if (n.topicNumber === e) {
                  (s = !0), console.log(e);
                  const n = t.entries.findIndex((s) => s.topicNumber === e);
                  console.log(n), console.log(t.title);
                  const o = c.findIndex(
                    (s) =>
                      s.topicHeaderNumber === String(Math.floor(parseFloat(e)))
                  );
                  if (
                    (console.log(c),
                    console.log(Math.floor(parseFloat(e))),
                    console.log(t.topicHeaderNumber, o),
                    n !== t.entries.length - 1)
                  ) {
                    return t.entries[n + 1];
                  }
                  if (n == t.entries.length - 1 && o !== c.length - 1) {
                    return c[o + 1].entries[0];
                  }
                  break;
                }
              if (s) break;
            }
          return s || console.log("Current topic not found."), null;
        })(v);
        var C = "",
          S = "",
          I = "",
          E = "";
        T
          ? (console.log("Next Chapter Number:", T.entries[0].topicNumber),
            console.log("Next Chapter Title:", T.entries[0].title),
            console.log(
              "Next Chapter First Lesson Number:",
              T.entries[0].entries[0].sectionNumber
            ),
            console.log(
              "Next Chapter First Lesson Title:",
              T.entries[0].entries[0].title
            ),
            (S = T.entries[0].topicNumber),
            (C = T.entries[0].title),
            (I = T.entries[0].entries[0].sectionNumber),
            (E = T.entries[0].entries[0].title))
          : (console.log("No next topic."),
            (S = !1),
            (C = !1),
            (I = !1),
            (E = !1));
        const [L, z] = Object(n.useState)([]);
        Object(n.useEffect)(() => {
          i()(
            "/"
              .concat(s, "/topicNumbersList?collectionName=")
              .concat(o.courseTopicsCollectionName, "&modelName=")
              .concat(o.courseTopicsModelName)
          ).then((e) => {
            z(e.data), console.log(e.data);
          });
        }, [y.topicNumber]),
          console.log(L);
        const D = [];
        y.sections && y.sections.map((e) => D.push(e.sectionNumber)),
          console.log(D);
        let M = Math.ceil(100 / D.length);
        console.log(M);
        let P = [],
          B = [],
          A = [],
          U = [];
        const R = (e, s) => {
          const t = [];
          for (let n = 0; n < s; ) {
            const s = Math.floor(Math.random() * e.length);
            t.includes(e[s]) || (t.push(e[s]), n++);
          }
          return t;
        };
        D.map((e) => {
          let s = N && 0 !== N.length && N.filter((s) => s.sectionNumber == e);
          console.log(s),
            s.length > M
              ? ((P = R(s, M)), console.log(P), (A = B.concat(A, P)))
              : (A = B.concat(A, s)),
            console.log(B),
            console.log(A);
        }),
          console.log(B),
          console.log(A),
          (U = A.length > 100 ? R(A, 100) : A),
          console.log(U),
          Object(n.useEffect)(() => {
            p(!1), j([]);
          }, [y.topicNumber]);
        const G = g.reduce(function (e, s) {
            return e + s;
          }, 0),
          W = Math.round((G / g.length) * 100);
        return Object(l.jsx)(Be.Provider, {
          value: [g, j],
          children: Object(l.jsx)(Fe.Provider, {
            value: [b, p],
            children: Object(l.jsxs)(l.Fragment, {
              children: [
                Object(l.jsx)(Os, {}),
                Object(l.jsx)("div", {
                  className: "Quiz",
                  children: Object(l.jsxs)("div", {
                    className: "QuizContainer",
                    children: [
                      Object(l.jsxs)("div", {
                        style: {},
                        className: "LessonTitleContainer",
                        children: [
                          Object(l.jsxs)("span", {
                            className: "LessonNumber",
                            children: ["Chapter Quiz ", y.topicNumber],
                          }),
                          " ",
                          Object(l.jsx)("br", {}),
                          Object(l.jsx)("span", {
                            className: "LessonTitle",
                            children: y.topicTitle,
                          }),
                          b &&
                            100 == W &&
                            Object(l.jsx)(ts.a, {
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
                      b
                        ? Object(l.jsx)(us, {
                            sections: O.state
                              ? "Topic" == O.state.comingFrom
                                ? O.state.sectionList
                                : "Section" == O.state.comingFrom
                                ? O.state.section
                                : "ScoreCard" == O.state.comingFrom
                                ? O.state.sections
                                : "none"
                              : D,
                            comingFrom:
                              O.state &&
                              ("Topic" == O.state.comingFrom
                                ? "Topic"
                                : "Section" == O.state.comingFrom
                                ? "Section"
                                : "ScoreCard" == O.state.comingFrom
                                ? "ScoreCard"
                                : "none"),
                            whereDidIComeFrom: x,
                            topicNumber: e.match.params.topicNumber,
                            sectionNumber:
                              O.state &&
                              ("Section" == O.state.comingFrom
                                ? O.state.section
                                : "ScoreCard" == O.state.comingFrom
                                ? O.state.sectionNumber
                                : "none"),
                            nextChapterNumber: S,
                            nextChapterTitle: C,
                            nextChapterFirstLessonNumber: I,
                            nextChapterFirstLessonTitle: E,
                            chapterNumber: y.topicNumber,
                          })
                        : Object(l.jsx)(Cs, {}),
                      U.map((s, t) =>
                        Object(l.jsxs)(
                          "div",
                          {
                            children: [
                              Object(l.jsx)(ss, {
                                topicNumber: e.match.params.topicNumber,
                                example: s,
                                exampleIndex: t,
                              }),
                              t !== U.length - 1
                                ? Object(l.jsx)("hr", {
                                    style: {
                                      width: "70%",
                                      backgroundColor: "#9589be",
                                      height: 2,
                                      borderRadius: 20,
                                      border: 0,
                                      marginTop: "10%",
                                      marginBottom: "10%",
                                    },
                                  })
                                : Object(l.jsx)("div", {
                                    style: {
                                      marginTop: "10%",
                                      marginBottom: "30%",
                                    },
                                  }),
                            ],
                          },
                          t
                        )
                      ),
                      0 == g.includes(void 0) && g.length == U.length && 0 == b
                        ? Object(l.jsx)("div", {
                            style: {
                              display: "flex",
                              justifyContent: "center",
                              marginBottom: "100px",
                              position: "fixed",
                              bottom: "0px",
                              left: "50%",
                              transform: "translateX(-50%)",
                            },
                            children: Object(l.jsx)(Ss, {
                              onClick: () => p(!0),
                              children: Object(l.jsx)("b", {
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
      };
      t(339), t(57);
      var Es = function (e) {
        return Object(l.jsx)("div", {
          className: "courseIconAndTitle",
          children: Object(l.jsxs)("div", {
            children: [
              Object(l.jsx)("img", {
                className: "courseImage",
                src: e.img,
                alt: "",
              }),
              " ",
            ],
          }),
        });
      };
      t(132);
      var Ls,
        zs,
        Ds = function (e) {
          const { topicDatafromBackEnd: s, exampleDatafromBackEnd: t } = m(),
            [o, a] = Object(n.useState)(0),
            [c, r] = Object(n.useState)(0),
            [d, u] = Object(n.useState)(0),
            [h, b] = Object(n.useState)(0);
          let {
            courseTitleUserIsOn: p,
            setCourseTitleUserIsOn: g,
            courseDetails: j,
            setCourseDetails: x,
            setTopicDatafromBackEnd: f,
            setExampleDatafromBackEnd: O,
            entryStore: v,
            setEntryStore: N,
            subContainer: w,
          } = m();
          return (
            Object(n.useEffect)(() => {
              e.courseDetails &&
                i()(
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
                ).then((e) => {
                  let s = 0,
                    t = 0,
                    n = 0;
                  for (let o = 0; o < e.data.length; o++)
                    (s += e.data[o].sections.length),
                      0 !== e.data[o].sections.length && (t += 1),
                      e.data[o].topicYoutubeLink && (n += 1);
                  r(s), u(n);
                  b(1.5 * s), console.log(e.data);
                }),
                e.courseDetails &&
                  i()(
                    "/examplesData?collectionName="
                      .concat(
                        e.courseDetails.courseExamplesCollectionName,
                        "&modelName="
                      )
                      .concat(e.courseDetails.courseExamplesModelName)
                  ).then((e) => {
                    a(e.data.length), console.log(e.data);
                  });
            }, [e.courseDetails]),
            console.log(v, s, t),
            console.log(c),
            console.log(d),
            console.log(0),
            console.log(s),
            console.log(o),
            console.log(h),
            Object(l.jsxs)("div", {
              className: "courseStatBanner",
              style: { color: e.color },
              children: [
                Object(l.jsxs)("div", {
                  className: "courseStat",
                  children: [
                    Object(l.jsx)("div", {
                      className: "courseStatImage",
                      children: Object(l.jsx)("i", {
                        class: "fa-solid fa-clipboard-question",
                      }),
                    }),
                    Object(l.jsxs)("div", {
                      className: "courseStatDescription",
                      children: [
                        Object(l.jsx)("div", {
                          className: "courseStatNumber",
                          children: o,
                        }),
                        " ",
                        Object(l.jsx)("div", {
                          className: "courseStatName",
                          children: "Questions",
                        }),
                      ],
                    }),
                  ],
                }),
                Object(l.jsxs)("div", {
                  className: "courseStat",
                  children: [
                    Object(l.jsx)("div", {
                      className: "courseStatImage",
                      children: Object(l.jsx)("i", {
                        class: "fa-solid fa-graduation-cap",
                      }),
                    }),
                    Object(l.jsxs)("div", {
                      className: "courseStatDescription",
                      children: [
                        Object(l.jsx)("div", {
                          className: "courseStatNumber",
                          children: c,
                        }),
                        " ",
                        Object(l.jsx)("div", {
                          className: "courseStatName",
                          children: "Lessons",
                        }),
                      ],
                    }),
                  ],
                }),
                d > 0 &&
                  Object(l.jsxs)("div", {
                    className: "courseStat",
                    children: [
                      Object(l.jsx)("div", {
                        className: "courseStatImage",
                        children: Object(l.jsx)("i", {
                          class: "fa-solid fa-play",
                        }),
                      }),
                      Object(l.jsxs)("div", {
                        className: "courseStatDescription",
                        children: [
                          Object(l.jsx)("div", {
                            className: "courseStatNumber",
                            children: d,
                          }),
                          " ",
                          Object(l.jsx)("div", {
                            className: "courseStatName",
                            children: "Videos",
                          }),
                        ],
                      }),
                    ],
                  }),
                Object(l.jsxs)("div", {
                  className: "courseStat",
                  children: [
                    Object(l.jsx)("div", {
                      className: "courseStatImage",
                      children: Object(l.jsx)("i", {
                        class: "fa-solid fa-clock",
                      }),
                    }),
                    Object(l.jsxs)("div", {
                      className: "courseStatDescription",
                      children: [
                        Object(l.jsx)("div", {
                          className: "courseStatNumber",
                          children: h,
                        }),
                        " ",
                        Object(l.jsx)("div", {
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
      const Ms = x.b.button(
          Ls ||
            (Ls = Object(j.a)([
              '\n  background: red;\n  position: relative;\n  font-family: "Quicksand", sans-serif;\n  /* padding-left: 15px; */\n  /* padding-right: 15px; */\n  /* margin: 30px; */\n  text-transform: uppercase;\n  /* font-size: 15px; */\n  font-size: 1.4vh;\n  font-weight: bold;\n  overflow: hidden;\n  border: 0;\n  border-radius: 20% 20% 20% 20% / 50% 50% 50% 50%;\n  background: none;\n  color: #dd6260;\n  height: 6vh;\n  text-decoration: underline;\n\n  transition: all 0.25s ease;\n  cursor: pointer;\n  margin-right: 20px;\n',
            ]))
        ),
        Ps = x.b.button(
          zs ||
            (zs = Object(j.a)([
              '\n  background: #8747d4;\n  position: relative;\n  font-family: "Quicksand", sans-serif;\n  padding-left: 15px;\n  padding-right: 15px;\n  /* margin-bottom: 10px; */\n\n  /* font-size: 15px; */\n  font-size: 3vh;\n  font-weight: bold;\n  overflow: hidden;\n  border: 0;\n  border-radius: 15%;\n\n  color: white;\n  height: 6vh;\n\n  transition: all 0.25s ease;\n  cursor: pointer;\n  margin-right: 20px;\n  margin-bottom: 40px;\n\n  &:active {\n    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.5);\n    background: #f2b1ae;\n  }\n',
            ]))
        );
      var Bs = function (e) {
        const [s, t] = Object(n.useState)(""),
          [o, a] = Object(n.useState)(""),
          [c, r] = Object(n.useState)(!0),
          [i, d] = Object(n.useState)(!1),
          m = (e) => {
            t(e);
            const s = u(e);
            a(s > 0.5 ? "#000" : "#fff"), r(!1);
          },
          u = (e) => {
            const s = e.match(/\d+/g);
            return (0.299 * s[0] + 0.587 * s[1] + 0.114 * s[2]) / 255;
          };
        return (
          Object(n.useEffect)(() => {
            (async (e) => {
              const s = localStorage.getItem(e);
              if (s) m(s);
              else
                try {
                  const s = await fetch(e, {
                    method: "GET",
                    headers: { "Cache-Control": "no-cache" },
                  });
                  if (s.ok) {
                    const t = await s.blob(),
                      n = new FileReader();
                    n.readAsDataURL(t),
                      (n.onloadend = () => {
                        const s = n.result,
                          t = new Image();
                        (t.src = s),
                          (t.onload = () => {
                            const s = new O.a().getColor(t),
                              n = "rgb("
                                .concat(s[0], ", ")
                                .concat(s[1], ", ")
                                .concat(s[2], ")");
                            m(n), localStorage.setItem(e, n);
                          });
                      });
                  } else console.error("Image fetch failed:", s.status);
                } catch (t) {
                  console.error("Error fetching image:", t);
                }
            })(
              "https://qaleelo-assets.s3.us-east-2.amazonaws.com/" +
                e.course.courseTitle.replace(/\s/g, "") +
                "/courseImage/" +
                e.course.courseTitle.replace(/\s/g, "") +
                ".png"
            );
          }, []),
          Object(l.jsxs)("div", {
            className: "courseFullDetails",
            style: { backgroundColor: s },
            children: [
              Object(l.jsxs)("div", {
                className: "courseHeader",
                children: [
                  Object(l.jsx)(Es, {
                    img:
                      "https://qaleelo-assets.s3.us-east-2.amazonaws.com/" +
                      e.course.courseTitle.replace(/\s/g, "") +
                      "/courseImage/" +
                      e.course.courseTitle.replace(/\s/g, "") +
                      ".png",
                    title: e.course.courseTitle,
                    description: e.course.courseDescription,
                  }),
                  Object(l.jsx)("div", {
                    className: "courseDescriptionANDGoals",
                    children: Object(l.jsx)(Ds, {
                      courseDetails: e.course,
                      color: o,
                    }),
                  }),
                ],
              }),
              Object(l.jsxs)("h1", {
                className: "courseDescription",
                style: { color: o },
                children: [
                  e.course.courseDescription,
                  Object(l.jsx)("br", {}),
                  Object(l.jsx)(Ms, {
                    onClick: () => {
                      d(!i);
                    },
                    style: { color: o },
                    children: i ? "Hide Course Details" : "Show Course Details",
                  }),
                  "\u200b",
                ],
              }),
              Object(l.jsx)("div", {
                style: { textAlign: "center" },
                children: Object(l.jsx)(k.c, {
                  to: "/".concat(
                    e.course.courseTitle.replace(/\s/g, ""),
                    "/start"
                  ),
                  children: Object(l.jsx)(Ps, { children: "Start" }),
                }),
              }),
              i &&
                Object(l.jsxs)("div", {
                  className: "courseGoals",
                  children: [
                    Object(l.jsxs)("div", {
                      className: "courseGoalsDescription",
                      style: { color: o },
                      children: [
                        Object(l.jsx)("div", {
                          className: "courseGoalsHeader",
                          style: { color: o },
                          children: "You will learn",
                        }),
                        0 === Object.entries(e.course).length
                          ? Object(l.jsx)("div", { children: "Loading" })
                          : e.course.courseGoals.map((e, s) =>
                              Object(l.jsx)("p", { children: e })
                            ),
                      ],
                    }),
                    Object(l.jsxs)("div", {
                      className: "courseReference",
                      children: [
                        e.course.courseTitle &&
                          Object(l.jsx)("img", {
                            className: "courseReferenceImage",
                            src:
                              "https://qaleelo-assets.s3.us-east-2.amazonaws.com/" +
                              e.course.courseTitle.replace(/\s/g, "") +
                              "/courseReferenceImage/" +
                              e.course.courseTitle.replace(/\s/g, "") +
                              ".png",
                            alt: "",
                          }),
                        Object(l.jsx)("div", {
                          className: "courseReferenceDescription",
                          style: { color: o },
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
      var Fs,
        As,
        Us,
        Rs,
        Gs = function () {
          const [e, s] = Object(n.useState)([]);
          Object(n.useEffect)(() => {
            i()("/coursesData").then((e) => {
              s(e.data), console.log(e.data);
            });
          }, []),
            console.log(e);
          const t = Object(F.f)();
          return (
            Object(n.useEffect)(() => {
              sessionStorage.getItem("isLoggedIn") || t.replace("/");
            }, []),
            Object(l.jsxs)("div", {
              children: [
                Object(l.jsx)("div", {
                  className: "sideNavChapterHeader",
                  children: Object(l.jsx)("p", { children: "Courses" }),
                }),
                Object(l.jsx)(A, {}),
                Object(l.jsx)("div", {
                  className: "courseCardsContainer",
                  children: e.map((e, s) =>
                    Object(l.jsx)(l.Fragment, {
                      children:
                        e.courseIsActive && Object(l.jsx)(Bs, { course: e }),
                    })
                  ),
                }),
              ],
            })
          );
        };
      x.b.div(
        Fs ||
          (Fs = Object(j.a)([
            "\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  height: 100%; /* Ensure the div takes full height */\n",
          ]))
      ),
        x.b.div(
          As ||
            (As = Object(j.a)([
              "\n  position: relative;\n  width: 100%;\n  max-width: 700px;\n  margin-bottom: 20px;\n  margin-right: 90px;\n",
            ]))
        ),
        x.b.input(
          Us ||
            (Us = Object(j.a)([
              '\n  width: 100%;\n  height: 80px;\n  padding: 10px;\n  padding-left: 100px;\n  font-family: "Quicksand", sans-serif;\n  font-size: 3vh;\n\n  border: none;\n  border-radius: 4px;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n',
            ]))
        ),
        x.b.div(
          Rs ||
            (Rs = Object(j.a)([
              "\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  left: 10px;\n  font-size: 3vh;\n",
            ]))
        );
      var Ws, Qs;
      function Hs(e) {
        let {
          subContainer: s,
          courseTitleUserIsOn: t,
          setCourseTitleUserIsOn: n,
          courseDetails: o,
          setCourseDetails: a,
          topicDatafromBackEnd: c,
          setTopicDatafromBackEnd: r,
          exampleDatafromBackEnd: i,
          setExampleDatafromBackEnd: d,
          entryStore: u,
          setEntryStore: h,
          progressData: b,
          setProgressData: p,
          chapterProgressData: g,
          setChapterProgressData: j,
        } = m();
        return Object(l.jsxs)("div", {
          className: "SidenavLandingPage",
          children: [
            Object(l.jsx)(y.a, {
              in: !s,
              timeout: 300,
              unmountOnExit: !0,
              mountOnEnter: !0,
              children: (s) =>
                Object(l.jsx)(P, {
                  state: s,
                  closeNav: e.click,
                  progressData: e.progressData,
                  chapterProgressData: e.chapterProgressData,
                  simplifiedChaptersLessonsData:
                    e.simplifiedChaptersLessonsData,
                  unlockedLessons: e.unlockedLessons,
                  unlockedChapters: e.unlockedChapters,
                  unlockedQuizzes: e.unlockedQuizzes,
                  isLastLessonOfChapter: e.isLastLessonOfChapter,
                  isFirstLessonOfChapter: e.isFirstLessonOfChapter,
                  chapterOfLastCompletedLesson: e.chapterOfLastCompletedLesson,
                  lastUnlockedLessonNumber: e.lastUnlockedLessonNumber,
                  lastUnlockedLessonTitle: e.lastUnlockedLessonTitle,
                  isLessonProgressEmpty: e.isLessonProgressEmpty,
                }),
            }),
            Object(l.jsx)(y.a, {
              in: s,
              timeout: 300,
              unmountOnExit: !0,
              mountOnEnter: !0,
              children: (s) =>
                Object(l.jsx)(R, {
                  state: s,
                  closeNav: e.click,
                  unlockedLessons: e.unlockedLessons,
                  unlockedChapters: e.unlockedChapters,
                  unlockedQuizzes: e.unlockedQuizzes,
                }),
            }),
          ],
        });
      }
      x.b.div(
        Ws ||
          (Ws = Object(j.a)([
            "\n  background: #dd6260;\n  /* top: 80; */\n  /* height: ",
            "vh; */\n  transform: translateY(",
            ");\n  transition: 0.2s;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n\n  font-family: Quicksand;\n  /* justify-content: space-between; */\n",
          ])),
        10,
        (e) => e.navTop + "vh"
      ),
        x.b.button(
          Qs ||
            (Qs = Object(j.a)([
              '\n  background: red;\n  font-family: "Quicksand", sans-serif;\n  padding: 7px 12px;\n  /* margin-right: "20px"; */\n\n  /* font-size: 15px; */\n  font-size: 5vh;\n  overflow: hidden;\n  border: 0;\n  border-radius: 15px;\n  background: #8747d4;\n  color: white;\n  /* box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5); */\n  transition: all 0.25s ease;\n  cursor: pointer;\n  display: block;\n  margin: 0 auto;\n  /* margin-top: 40px; */\n  display: block;\n  textdecoration: none;\n\n  &:active {\n    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.5);\n    background: #f2b1ae;\n  }\n',
            ]))
        );
      var Ys = function (e) {
          let {
              courseTitleUserIsOn: s,
              setCourseTitleUserIsOn: t,
              courseDetails: o,
              setCourseDetails: a,
              topicDatafromBackEnd: c,
              setTopicDatafromBackEnd: r,
              exampleDatafromBackEnd: d,
              setExampleDatafromBackEnd: u,
              entryStore: h,
              setEntryStore: b,
              subContainer: p,
              progressData: g,
              setProgressData: j,
              chapterProgressData: x,
              setChapterProgressData: f,
            } = m(),
            O = window.location.href;
          console.log(O);
          let v = O.split("/");
          console.log(v);
          let N = v[v.length - 1];
          console.log(N);
          var w = [];
          (w = N.includes("%") ? N.split("%23") : N.split("#")), console.log(w);
          let y = w[1];
          console.log(y),
            Object(n.useEffect)(() => {
              void 0 === y && window.scrollTo({ top: 0, behavior: "smooth" });
            }, [O]),
            Object(n.useEffect)(() => {
              if (y) {
                const e = document.getElementById(y);
                e && e.scrollIntoView();
              }
            }),
            console.log(O),
            Object(n.useEffect)(() => {
              t(e.match.params.courseTitle);
            }, []),
            console.log(s),
            Object(n.useEffect)(() => {
              i()("/coursesData").then((e) => {
                console.log(e.data);
                let t = e.data.find(
                  (e) => e.courseTitle.replace(/\s/g, "") === s
                );
                a(t);
              });
            }, [s]),
            console.log(o),
            Object(n.useEffect)(() => {
              o &&
                i()(
                  "/"
                    .concat(s, "/sideBarData?collectionName=")
                    .concat(o.courseTopicsCollectionName, "&modelName=")
                    .concat(o.courseTopicsModelName)
                ).then((e) => {
                  b(e.data), console.log(e.data);
                }),
                o &&
                  i()(
                    "/"
                      .concat(s, "/topicsData?collectionName=")
                      .concat(o.courseTopicsCollectionName, "&modelName=")
                      .concat(o.courseTopicsModelName)
                  ).then((e) => {
                    r(e.data), console.log(e.data);
                  }),
                o &&
                  i()(
                    "/examplesData?collectionName="
                      .concat(o.courseExamplesCollectionName, "&modelName=")
                      .concat(o.courseExamplesModelName)
                  ).then((e) => {
                    u(e.data), console.log(e.data);
                  });
            }, [o]),
            console.log(h, c, d);
          const [k, T] = Object(n.useState)(0);
          var C = window.scrollY;
          window.addEventListener("scroll", function () {
            C < window.scrollY ? T(-{ navBarHeight: 10 }) : T(0),
              (C = window.scrollY);
          }),
            Object(n.useEffect)(() => {
              const e = localStorage.getItem("userEmail");
              if (!e)
                return void console.error(
                  "User email not found in local storage"
                );
              (async () => {
                try {
                  const s = await i.a.get("/fetchProgressRecord", {
                    params: { userEmail: e },
                  });
                  j(s.data);
                } catch (s) {
                  console.error("Error fetching progress data:", s);
                }
              })();
            }, []),
            console.log(g),
            console.log(s),
            Object(n.useEffect)(() => {
              const e = localStorage.getItem("userEmail");
              if (!e)
                return void console.error(
                  "User email not found in local storage"
                );
              (async () => {
                try {
                  const s = await i.a.get("/fetchChapterProgressRecord", {
                    params: { userEmail: e },
                  });
                  f(s.data);
                } catch (s) {
                  console.error("Error fetching chapter progress data:", s);
                }
              })();
            }, []),
            console.log(x),
            console.log(s);
          const S =
            (I = h) &&
            I.map((e) =>
              e.entries.map((e) => ({
                chapterNumber: e.topicNumber,
                chapterTitle: e.title,
                lessons: e.entries[0].entries.map((e) => ({
                  lessonNumber: e.sectionNumber,
                  lessonTitle: e.title,
                })),
              }))
            ).flat();
          var I;
          console.log(S);
          const E = (function (e, s, t, n) {
            const o = [],
              a = e && e.find((e) => e.courseProgress === n);
            if (a) {
              const { lessonProgress: e } = a,
                r = e[e.length - 1],
                i =
                  s &&
                  s.find((e) => e.lessons.some((e) => e.lessonNumber === r));
              if (i) {
                const { lessons: a } = i,
                  l = a.findIndex((e) => e.lessonNumber === r);
                if (l === a.length - 1) {
                  o.push(...e);
                  const a =
                      s.findIndex((e) => e.chapterNumber === i.chapterNumber) +
                      1,
                    r = s[a];
                  if (r) {
                    var c;
                    const e =
                      t &&
                      (null === (c = t.find((e) => e.courseProgress === n)) ||
                      void 0 === c
                        ? void 0
                        : c.chapterProgress);
                    if (e && e.includes(i.chapterNumber)) {
                      const e = r.lessons[0];
                      o.push(e.lessonNumber);
                    }
                  }
                } else {
                  const s = a[l + 1];
                  o.push(...e, s.lessonNumber);
                }
              }
            }
            return o;
          })(g, S, x, s);
          console.log(E);
          const L = (function (e, s, t) {
              const n = [],
                o = e && e.find((e) => e.courseProgress === t);
              return (
                o &&
                  s &&
                  s.forEach((e) => {
                    const s = e.lessons[e.lessons.length - 1].lessonNumber;
                    o.lessonProgress.includes(s) && n.push(e.chapterNumber);
                  }),
                n
              );
            })(g, S, s),
            z = (function (e, s) {
              const t = [];
              return (
                e &&
                  e.forEach((e) => {
                    e.lessons.some((e) => s.includes(e.lessonNumber)) &&
                      t.push(e.chapterNumber);
                  }),
                t
              );
            })(S, E);
          console.log(L), console.log(z);
          const D = E[E.length - 1],
            M = (function (e) {
              if (S)
                for (let s of S)
                  for (let t of s.lessons)
                    if (t.lessonNumber === e) return t.lessonTitle;
              return null;
            })(D);
          console.log(D, M);
          const P = g && g.find((e) => e.courseProgress === s),
            B = P && P.lessonProgress.slice(-1)[0],
            F = S && S.find((e) => e.lessons.some((e) => e.lessonNumber === B)),
            A = F && F.lessons.slice(-1)[0].lessonNumber === B;
          console.log(A);
          const U = E.slice(-1)[0],
            R = S && S.find((e) => e.lessons.some((e) => e.lessonNumber === U)),
            G = R && R.lessons[0].lessonNumber === U;
          console.log(G);
          const W = P && 0 === P.lessonProgress.length;
          return (
            console.log(W),
            o
              ? Object(l.jsx)("div", {
                  children: Object(l.jsx)(Hs, {
                    progressData: g,
                    chapterProgressData: x,
                    simplifiedChaptersLessonsData: S,
                    unlockedLessons: E,
                    unlockedChapters: z,
                    unlockedQuizzes: L,
                    isLastLessonOfChapter: A,
                    isFirstLessonOfChapter: G,
                    chapterOfLastCompletedLesson: F,
                    lastUnlockedLessonNumber: D,
                    lastUnlockedLessonTitle: M,
                    isLessonProgressEmpty: W,
                  }),
                })
              : Object(l.jsx)("div", { children: "Loading" })
          );
        },
        Ks = t(87),
        Vs = t(156),
        qs = t.n(Vs);
      t(340);
      var _s = (e) => {
        let { setIsLoggedIn: s, setTokenExpiration: t } = e;
        const n = () => {
          const e = Object(Ks.b)({
            onSuccess: async (e) => {
              console.log(e);
              const n = await i.a
                .get("https://www.googleapis.com/oauth2/v3/userinfo", {
                  headers: { Authorization: "Bearer ".concat(e.access_token) },
                })
                .then((e) => e.data);
              (() => {
                s(!0);
                const e = new Date("9999-12-31T23:59:59");
                t(e),
                  localStorage.setItem("isLoggedIn", !0),
                  localStorage.setItem("tokenExpiration", e.getTime());
              })(),
                console.log(n);
              const o = qs()().format("DD-MM-YYYY hh:mm:ss");
              console.log(o);
              const a = {
                userEmail: n.email,
                userFamilyName: n.family_name,
                userGivenName: n.given_name,
                userPicture: n.picture,
                loginDateTime: o,
              };
              console.log(a),
                localStorage.setItem("userEmail", n.email),
                console.log(localStorage.getItem("userEmail")),
                fetch("/insertLoginRecord", {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify(a),
                })
                  .then((e) => {
                    if (e.ok) return e.json();
                    throw new Error("Network response was not ok.");
                  })
                  .then((e) => {
                    console.log(e);
                  })
                  .catch((e) => {
                    (e instanceof SyntaxError &&
                      e.message.includes("Unexpected token 'U'")) ||
                      console.error("Error from fetch:", e);
                  });
            },
          });
          return Object(l.jsx)("div", {
            onClick: () => {
              e();
            },
            style: {
              display: "flex",
              alignItems: "center",
              padding: "6px 12px",
              borderRadius: "300px",
              backgroundColor: "white",
              color: "black",
              fontSize: "2.5vh",
              cursor: "pointer",
              width: "80%",
              textAlign: "center",
            },
            children: Object(l.jsxs)("div", {
              style: {
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              },
              children: [
                Object(l.jsx)("img", {
                  src: "https://qaleelo-assets.s3.us-east-2.amazonaws.com/General/CanvaGeneratedImages/GoogleLogo.png",
                  alt: "Google logo",
                  style: { width: "10%", height: "auto", marginRight: "50px" },
                }),
                Object(l.jsx)("div", { children: "Continue with Google" }),
              ],
            }),
          });
        };
        return Object(l.jsxs)("div", {
          style: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            flexDirection: "column",
          },
          children: [
            Object(l.jsxs)("div", {
              children: [
                Object(l.jsx)("div", {
                  className: "LoginMessageHeader",
                  children: "Time to Log In!",
                }),
                Object(l.jsxs)("div", {
                  className: "LoginMessage",
                  children: [
                    " ",
                    "Save your progress,",
                    Object(l.jsx)("br", {}),
                    " sync across devices",
                    Object(l.jsx)("br", {}),
                    " and more",
                  ],
                }),
              ],
            }),
            Object(l.jsx)(Ks.a, {
              clientId:
                "327893164342-c3b9mfr2efkdubjop3l9hvmd37sopr7i.apps.googleusercontent.com",
              children: Object(l.jsx)(n, {}),
            }),
          ],
        });
      };
      t(341);
      var Js,
        Xs,
        $s,
        Zs,
        et = (e) => {
          let { setIsLoggedIn: s } = e;
          const t = Object(F.f)();
          return (
            Object(n.useEffect)(() => {
              const e = setTimeout(() => {
                t.push("/"), s(!1), localStorage.clear();
              }, 2e3);
              return () => {
                clearTimeout(e);
              };
            }, [t, s]),
            Object(l.jsx)("div", {
              className: "message-container",
              children: Object(l.jsx)("h1", {
                children:
                  "You have logged out successfully! Redirecting you to the Login Page again...",
              }),
            })
          );
        },
        st = t(29),
        tt = t.n(st);
      t(147), t(59);
      const nt = x.b.div(
          Js ||
            (Js = Object(j.a)([
              '\n  /* box-shadow: 0 0.1rem 0.5rem rgba(0, 0, 0, 0.2); */\n  border-radius: 5px;\n  padding: 10px;\n  /* background: #252525; */\n  /* margin-top: 80px; */\n  font-family: "Quicksand", sans-serif;\n',
            ]))
        ),
        ot = x.b.div(
          Xs ||
            (Xs = Object(j.a)([
              "\n  /* font-size: 17px; */\n  font-size: 2.5vh;\n  font-weight: bold;\n  text-align: center;\n  color: #a678de;\n  padding: 20px;\n",
            ]))
        ),
        at = Object(x.b)(v.a.div)(
          $s ||
            ($s = Object(j.a)([
              "\n  font-size: 2.5vh;\n  font-weight: bold;\n  text-align: center;\n  font-family: Quicksand;\n  /* border-radius: 15px; */\n  /* padding: 10px; */\n  color: #252525;\n  display: flex;\n  background: ",
              ";\n  /* margin: 20px; */\n  transition: transform 300ms;\n  justify-content: center;\n\n  &:hover {\n    cursor: pointer;\n  }\n",
            ])),
          (e) => (e.answerClicked == e.answer ? e.answerColor : "#D2CFE6")
        ),
        ct = x.b.div(
          Zs ||
            (Zs = Object(j.a)([
              "\n  /* font-size: 2vh; */\n  display: ",
              ";\n  align-items: center;\n  justify-content: center;\n",
            ])),
          (e) => (e.answerClicked == e.answer ? "flex" : "none")
        );
      var rt = (e) => {
          console.log(e);
          const {
            courseTitleUserIsOn: s,
            entryStore: t,
            isDarkMode: o,
            subContainer: a,
            setCourseTitleUserIsOn: c,
            courseDetails: r,
            setCourseDetails: d,
            topicDatafromBackEnd: u,
            setTopicDatafromBackEnd: h,
            exampleDatafromBackEnd: b,
            setExampleDatafromBackEnd: p,
            setEntryStore: g,
            setIsDarkMode: j,
          } = m();
          console.log(t);
          const [x, f] = Object(n.useState)("#e8e2ef"),
            [O, N] = Object(n.useState)("NoAnswer"),
            [w, y] = Object(n.useState)(!1),
            [T, C] = Object(n.useState)(!1),
            [S, I] = Object(n.useState)(null),
            E = Object(n.useRef)(null),
            [D, M] = Object(n.useState)(!1),
            [P, B] = Object(n.useState)({}),
            [F, A] = Object(n.useState)([]);
          window.innerWidth;
          return (
            Object(n.useEffect)(() => {
              const e = localStorage.getItem("userEmail");
              if (!e)
                return void console.error(
                  "User email not found in local storage"
                );
              T &&
                (async () => {
                  try {
                    const s = await i.a.get("/fetchProgressRecord", {
                      params: { userEmail: e },
                    });
                    I(s.data);
                  } catch (s) {
                    console.error("Error fetching progress data:", s);
                  }
                })();
            }, [T]),
            console.log(S),
            Object(n.useEffect)(() => {
              var s = ((s) => {
                let t =
                  0 !== e.exampleDatafromBackEnd.length &&
                  e.exampleDatafromBackEnd.filter((e) => e.sectionNumber == s);
                return t[Math.floor(Math.random() * t.length)];
              })(e.lessonNumber);
              B(s),
                A(
                  (function (e) {
                    const s = [...e];
                    for (let t = s.length - 1; t > 0; t--) {
                      const e = Math.floor(Math.random() * (t + 1));
                      [s[t], s[e]] = [s[e], s[t]];
                    }
                    return s;
                  })(s.answers)
                );
            }, []),
            Object(l.jsxs)(nt, {
              className: "LessonExampleBox",
              children: [
                Object(l.jsx)(ot, { children: P && P.question }),
                F.map((t) =>
                  Object(l.jsxs)(l.Fragment, {
                    children: [
                      Object(l.jsx)(at, {
                        className: "LessonExampleAnswerBox",
                        whileHover: { scale: 1.2 },
                        whileTap: { scale: 0.8 },
                        transition: {
                          type: "spring",
                          stiffness: 400,
                          damping: 17,
                        },
                        onClick: () =>
                          (async (t, n) => {
                            if ((N(n), y(!0), !0 !== t || T)) f("#ff726f");
                            else {
                              f("#DAF7A6"), M(!0);
                              const t = 1e3;
                              setTimeout(() => {
                                window.scrollBy({ top: t, behavior: "smooth" });
                              }, 300);
                              const n = localStorage.getItem("userEmail");
                              console.log(n),
                                console.log(s),
                                console.log(e.currentSectionNumber);
                              const a = {
                                userEmail: n,
                                progress: [
                                  {
                                    courseProgress: s,
                                    lessonProgress: [e.currentSectionNumber],
                                  },
                                ],
                              };
                              try {
                                await i.a.post("/insertProgressRecord", a),
                                  console.log(
                                    "Progress data sent successfully!"
                                  ),
                                  C(!0);
                              } catch (o) {
                                console.error(
                                  "Error sending progress data:",
                                  o
                                );
                              }
                            }
                          })(t.isCorrect, t.answer),
                        answerColor: x,
                        answer: t.answer,
                        answerClicked: O,
                        children: Object(l.jsx)("div", {
                          className: "LessonExampleAnswer",
                          children: t.answer,
                        }),
                      }),
                      Object(l.jsx)(ct, {
                        answerClicked: O,
                        answer: t.answer,
                        answerColor: x,
                        children:
                          0 == t.isCorrect
                            ? Object(l.jsxs)("div", {
                                className:
                                  "LessonExampleAnswerExplanationContainer ".concat(
                                    o ? "darkThemeFont" : "lightThemeFont"
                                  ),
                                children: [
                                  Object(l.jsx)("i", {
                                    class: "wrongCross fa-solid fa-xmark",
                                  }),
                                  Object(l.jsx)("p", {
                                    style: { display: "inline" },
                                    className: "LessonExampleAnswerExplanation",
                                    children: t.explanation,
                                  }),
                                ],
                              })
                            : Object(l.jsxs)(l.Fragment, {
                                children: [
                                  Object(l.jsx)("i", {
                                    class: "correctCheckMark fa-solid fa-check",
                                  }),
                                  D &&
                                    Object(l.jsx)(ts.a, {
                                      autoStart: !0,
                                      duration: 5e3,
                                      particleCount: 100,
                                      spread: 360,
                                      origin: { x: 0.8, y: 0.5 },
                                      force: 0.8,
                                      width: 1600,
                                    }),
                                  Object(l.jsx)("p", {
                                    className:
                                      "LessonExampleAnswerExplanation ".concat(
                                        o ? "darkThemeFont" : "lightThemeFont"
                                      ),
                                    children: "Correct!",
                                  }),
                                  D &&
                                    Object(l.jsx)(ts.a, {
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
                  })
                ),
                D &&
                  0 == e.nextLessonNumber &&
                  Object(l.jsxs)(v.a.div, {
                    ref: E,
                    className: "LessonExampleNextLessonBox",
                    initial: { opacity: 0, scale: 0.5 },
                    animate: { opacity: 1, scale: [1, 1.03, 1] },
                    transition: {
                      duration: 0.8,
                      delay: 0.3,
                      ease: [0, 0.71, 0.2, 1.01],
                    },
                    children: [
                      " ",
                      Object(l.jsx)(U, {
                        lessonNumber: e.currentSectionNumber,
                        courseTitleUserIsOn: s,
                        progressData: S,
                      }),
                      Object(l.jsxs)("div", {
                        style: {},
                        className: "LessonTitleContainer",
                        children: [
                          Object(l.jsx)("span", {
                            className: "LessonNumber",
                            children: "End Of Chapter",
                          }),
                          " ",
                        ],
                      }),
                      Object(l.jsx)(k.c, {
                        to: "/".concat(s, "/quiz/").concat(e.chapterNumber),
                        children: Object(l.jsx)(v.a.div, {
                          whileTap: { scale: 0.8 },
                          transition: {
                            type: "spring",
                            stiffness: 400,
                            damping: 17,
                          },
                          children: Object(l.jsx)(z, {
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
                D &&
                  !1 !== e.nextLessonNumber &&
                  Object(l.jsxs)(v.a.div, {
                    ref: E,
                    className: "LessonExampleNextLessonBox",
                    initial: { opacity: 0, scale: 0.5 },
                    animate: { opacity: 1, scale: [1, 1.03, 1] },
                    transition: {
                      duration: 0.8,
                      delay: 0.3,
                      ease: [0, 0.71, 0.2, 1.01],
                    },
                    children: [
                      Object(l.jsx)(U, {
                        lessonNumber: e.currentSectionNumber,
                        courseTitleUserIsOn: s,
                        progressData: S,
                      }),
                      Object(l.jsxs)("div", {
                        style: {},
                        className: "LessonTitleContainer",
                        children: [
                          Object(l.jsx)("span", {
                            className: "LessonNumber",
                            children: "Next Lesson",
                          }),
                          " ",
                        ],
                      }),
                      Object(l.jsx)(k.c, {
                        to: "/"
                          .concat(s, "/lesson/")
                          .concat(e.nextLessonNumber),
                        children: Object(l.jsx)(v.a.div, {
                          whileTap: { scale: 0.8 },
                          transition: {
                            type: "spring",
                            stiffness: 400,
                            damping: 17,
                          },
                          children: Object(l.jsx)(L, {
                            backgroundColor: "white",
                            number: e.nextLessonNumber,
                            title: e.nextLessonTitle,
                            chapter: e.chapterTitle,
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
        it = t(157),
        lt = t.n(it);
      var dt = function (e) {
        const [s, t] = Object(n.useState)(null);
        return (
          Object(n.useEffect)(() => {
            const s = e.lottieFile;
            fetch(s)
              .then((e) => e.json())
              .then((e) => t(e))
              .catch((e) => console.error("Error fetching animation:", e));
          }, []),
          Object(l.jsx)(v.a.div, {
            className: e.className,
            style: e.style,
            initial: e.initial,
            animate: e.animate,
            exit: e.exit,
            transition: e.transition,
            children:
              s &&
              Object(l.jsx)(lt.a, {
                animationData: s,
                speed: e.speed,
                loop: e.loop,
              }),
          })
        );
      };
      var mt = (e) => {
        const [s, t] = Object(n.useState)(-1),
          [o, a] = Object(n.useState)({}),
          [c, r] = Object(n.useState)(!0),
          [d, u] = Object(n.useState)(!1),
          [h, b] = Object(n.useState)(null);
        let {
          courseDetails: p,
          setCourseDetails: g,
          courseTitleUserIsOn: j,
          setCourseTitleUserIsOn: x,
          entryStore: f,
          isDarkMode: O,
          subContainerEntries: N,
          setSubContainerEntries: w,
          subContainer: y,
          setSubContainer: k,
          navOpen: T,
          setNavOpen: C,
          progressData: S,
        } = m();
        console.log(f),
          Object(n.useEffect)(() => {
            let e = !1;
            const s = o.sectionNumber;
            if (f)
              for (const t of f) {
                for (const n of t.entries) {
                  for (const t of n.entries) {
                    for (const o of t.entries)
                      if (o.sectionNumber === s) {
                        (e = !0), w(n.entries), k(!0);
                        break;
                      }
                    if (e) break;
                  }
                  if (e) break;
                }
                if (e) break;
              }
          }, [T, p, o]);
        const I = o.sectionNumber,
          E = (function (e) {
            let s = null,
              t = null,
              n = !1;
            if (f)
              for (const o of f) {
                for (const a of o.entries) {
                  for (const o of a.entries) {
                    for (const a of o.entries)
                      if (a.sectionNumber === e) {
                        n = !0;
                        const a = o.entries.findIndex(
                          (s) => s.sectionNumber === e
                        );
                        if (a !== o.entries.length - 1) {
                          const e = o.entries[a + 1];
                          (s = e.sectionNumber), (t = e.title);
                        }
                        break;
                      }
                    if (n) break;
                  }
                  if (n) break;
                }
                if (n) break;
              }
            return null !== s && { nextSectionNumber: s, nextSectionTitle: t };
          })(I);
        var L = "",
          z = "";
        !1 === E
          ? (console.log("No next section."), (L = !1), (z = !1))
          : (console.log("Next Section Number:", E.nextSectionNumber),
            console.log("Next Section Title:", E.nextSectionTitle),
            (L = E.nextSectionNumber),
            (z = E.nextSectionTitle)),
          console.log(L, z);
        const D = (function (e, s) {
          if (s)
            for (const t of s)
              for (const s of t.entries)
                for (const t of s.entries)
                  for (const s of t.entries)
                    if (s.sectionNumber === e)
                      return {
                        chapterTitle: t.title,
                        chapterNumber: t.topicNumber,
                      };
          return null;
        })(o.sectionNumber, f);
        var M = "",
          P = "";
        D
          ? (console.log("Chapter Title:", D.chapterTitle),
            console.log("Chapter Number:", D.chapterNumber),
            (M = D.chapterTitle),
            (P = D.chapterNumber))
          : console.log("Section not found."),
          console.log(p),
          console.log(f),
          Object(n.useEffect)(() => {
            x(e.match.params.courseTitle);
          }, []),
          console.log(j),
          console.log(e.match.params.courseTitle),
          Object(n.useEffect)(() => {
            i()("/coursesData").then((s) => {
              console.log(s.data);
              let t = s.data.find(
                (s) =>
                  s.courseTitle.replace(/\s/g, "") ===
                  e.match.params.courseTitle
              );
              g(t);
            });
          }, [j]),
          console.log(p),
          console.log(p),
          console.log(e.match.params.courseTitle),
          console.log(e.match),
          console.log(e.match.params.lessonNumber);
        let B = e.match.params.lessonNumber;
        console.log(B),
          console.log(p.courseTopicsCollectionName),
          console.log(p.courseTopicsModelName),
          Object(n.useEffect)(() => {
            i()(
              "/"
                .concat(e.match.params.courseTitle, "/lessonRESTCAll/")
                .concat(B, "?collectionName=")
                .concat(p.courseTopicsCollectionName, "&modelName=")
                .concat(p.courseTopicsModelName)
            ).then((e) => {
              a(e.data);
            });
          }, [B, p]),
          console.log(
            "/api/"
              .concat(e.match.params.courseTitle, "/lessonRESTCAll/")
              .concat(B, "?collectionName=")
              .concat(p.courseTopicsCollectionName, "&modelName=")
              .concat(p.courseTopicsModelName)
          ),
          console.log(o),
          Object(n.useEffect)(() => {
            const e = S && S.find((e) => e.courseProgress === j);
            console.log(e),
              b(
                new Set(
                  (null === e || void 0 === e ? void 0 : e.lessonProgress) || []
                )
              ),
              console.log(h);
          }, [o]),
          console.log(S),
          console.log(j);
        const [F, A] = Object(n.useState)([]);
        Object(n.useEffect)(() => {
          i()(
            "/examplesData?collectionName="
              .concat(p.courseExamplesCollectionName, "&modelName=")
              .concat(p.courseExamplesModelName)
          ).then((e) => {
            A(e.data), console.log(e.data);
          });
        }, [B, p]),
          console.log(F);
        const U = () => {
          t((e) => e + 1);
        };
        Object(n.useEffect)(() => {
          if (d) {
            const e = document.getElementById("lessonExample");
            e && e.scrollIntoView({ behavior: "smooth" });
          }
        }, [d]);
        window.innerWidth;
        return (
          Object(n.useEffect)(() => {
            if (s > 0) {
              const e = document.getElementById("section-".concat(s - 1));
              e && e.scrollIntoView({ behavior: "smooth" });
            }
          }, [s]),
          Object(n.useEffect)(() => {
            r(!1);
            const e = setTimeout(() => {
              r(!0);
            }, 5e3);
            return () => clearTimeout(e);
          }, [s]),
          Object(n.useEffect)(() => {
            t(-1), u(!1);
          }, [B, o]),
          console.log(s),
          h && h.has(o.sectionNumber)
            ? "undefined" === o || null === o || 0 === o.length
              ? Object(l.jsx)("div", { children: "Loading" })
              : Object(l.jsxs)("div", {
                  children: [
                    Object(l.jsx)(Os, {}),
                    Object(l.jsx)("div", {
                      className: "Lesson",
                      children: Object(l.jsxs)("div", {
                        className: "LessonContainer",
                        children: [
                          Object(l.jsxs)("div", {
                            style: {},
                            className: "LessonTitleContainer",
                            children: [
                              Object(l.jsxs)("span", {
                                className: "LessonNumber",
                                children: ["Lesson ", o.sectionNumber],
                              }),
                              " ",
                              Object(l.jsx)("br", {}),
                              Object(l.jsx)("span", {
                                className: "LessonTitle",
                                children: o.sectionTitle,
                              }),
                            ],
                          }),
                          o.lessonAnimation &&
                            o.lessonAnimation.map((e, s) =>
                              "multiSection" == e.className
                                ? Object(l.jsx)(
                                    v.a.div,
                                    {
                                      className: e.className,
                                      style: e.style,
                                      children: e.subSections.map((e, s) =>
                                        Object(l.jsx)(
                                          v.a.div,
                                          {
                                            className: e.className,
                                            style: e.style,
                                            children: e.miniSections.map(
                                              (e, s) =>
                                                "LottieAnimation" ===
                                                e.className
                                                  ? Object(l.jsx)(
                                                      dt,
                                                      {
                                                        lottieFile:
                                                          e.lottieFilePath,
                                                        className: e.className,
                                                        style: e.style,
                                                        speed: e.speed,
                                                        loop: e.loop,
                                                      },
                                                      s
                                                    )
                                                  : Object(l.jsx)(
                                                      v.a.div,
                                                      {
                                                        className: ""
                                                          .concat(
                                                            e.className,
                                                            " "
                                                          )
                                                          .concat(
                                                            O
                                                              ? "darkThemeFont"
                                                              : "lightThemeFont"
                                                          ),
                                                        style: e.style,
                                                        children: Object(
                                                          l.jsxs
                                                        )("div", {
                                                          style: e.contentStyle,
                                                          children: [
                                                            tt()(e.content),
                                                            " ",
                                                          ],
                                                        }),
                                                      },
                                                      s
                                                    )
                                            ),
                                          },
                                          s
                                        )
                                      ),
                                    },
                                    s
                                  )
                                : Object(l.jsx)(
                                    v.a.div,
                                    {
                                      className: e.className,
                                      style: e.style,
                                      children: e.subSections.map((e, s) =>
                                        "YouTubeVideo" == e.className
                                          ? Object(l.jsx)("div", {
                                              style: e.style,
                                              children: Object(l.jsx)("div", {
                                                className: "ratio ratio-16x9",
                                                children: Object(l.jsx)(
                                                  "iframe",
                                                  {
                                                    src: e.videoLink,
                                                    title: "YouTube video",
                                                    allowFullScreen: !0,
                                                    style: {
                                                      width: "100%",
                                                      height: "100%",
                                                    },
                                                    allow: "autoplay",
                                                  }
                                                ),
                                              }),
                                            })
                                          : "LottieAnimation" == e.className
                                          ? Object(l.jsx)(
                                              dt,
                                              {
                                                lottieFile: e.lottieFilePath,
                                                className: e.className,
                                                style: e.style,
                                                speed: e.speed,
                                                loop: e.loop,
                                              },
                                              s
                                            )
                                          : Object(l.jsx)(
                                              v.a.div,
                                              {
                                                className: ""
                                                  .concat(e.className, " ")
                                                  .concat(
                                                    O
                                                      ? "darkThemeFont"
                                                      : "lightThemeFont"
                                                  ),
                                                style: e.style,
                                                children: Object(l.jsxs)(
                                                  "div",
                                                  {
                                                    style: e.contentStyle,
                                                    children: [
                                                      tt()(e.content),
                                                      " ",
                                                    ],
                                                  }
                                                ),
                                              },
                                              s
                                            )
                                      ),
                                    },
                                    s
                                  )
                            ),
                          Object(l.jsx)("div", {
                            style: { minHeight: "50px", zIndex: 999 },
                          }),
                        ],
                      }),
                    }),
                  ],
                })
            : "undefined" === o || null === o || 0 === o.length
            ? Object(l.jsx)("div", { children: "Loading" })
            : Object(l.jsxs)("div", {
                children: [
                  Object(l.jsx)(Os, {}),
                  Object(l.jsxs)("div", {
                    className: "Lesson",
                    children: [
                      Object(l.jsxs)("div", {
                        className: "LessonContainer",
                        children: [
                          Object(l.jsxs)("div", {
                            style: {},
                            className: "LessonTitleContainer",
                            children: [
                              Object(l.jsxs)("span", {
                                className: "LessonNumber",
                                children: ["Lesson ", o.sectionNumber],
                              }),
                              " ",
                              Object(l.jsx)("br", {}),
                              Object(l.jsx)("span", {
                                className: "LessonTitle",
                                children: o.sectionTitle,
                              }),
                            ],
                          }),
                          o.lessonAnimation &&
                            o.lessonAnimation.map(
                              (e, t) =>
                                t <= s &&
                                ("multiSection" == e.className
                                  ? Object(l.jsx)(
                                      v.a.div,
                                      {
                                        id: "section-".concat(t),
                                        className: e.className,
                                        style: e.style,
                                        initial: e.initial,
                                        animate: e.animate,
                                        exit: e.exit,
                                        transition: e.transition,
                                        children: e.subSections.map((e, s) =>
                                          Object(l.jsx)(
                                            v.a.div,
                                            {
                                              id: "subSection-".concat(t),
                                              className: e.className,
                                              style: e.style,
                                              initial: e.initial,
                                              animate: e.animate,
                                              exit: e.exit,
                                              transition: e.transition,
                                              children: e.miniSections.map(
                                                (e, s) =>
                                                  "LottieAnimation" ===
                                                  e.className
                                                    ? Object(l.jsx)(
                                                        dt,
                                                        {
                                                          lottieFile:
                                                            e.lottieFilePath,
                                                          className:
                                                            e.className,
                                                          style: e.style,
                                                          initial: e.initial,
                                                          animate: e.animate,
                                                          exit: e.exit,
                                                          transition:
                                                            e.transition,
                                                          speed: e.speed,
                                                          loop: e.loop,
                                                        },
                                                        s
                                                      )
                                                    : Object(l.jsx)(
                                                        v.a.div,
                                                        {
                                                          className: ""
                                                            .concat(
                                                              e.className,
                                                              " "
                                                            )
                                                            .concat(
                                                              O
                                                                ? "darkThemeFont"
                                                                : "lightThemeFont"
                                                            ),
                                                          style: e.style,
                                                          initial: e.initial,
                                                          animate: e.animate,
                                                          exit: e.exit,
                                                          transition:
                                                            e.transition,
                                                          children: Object(
                                                            l.jsxs
                                                          )("div", {
                                                            style:
                                                              e.contentStyle,
                                                            children: [
                                                              tt()(e.content),
                                                              " ",
                                                            ],
                                                          }),
                                                        },
                                                        s
                                                      )
                                              ),
                                            },
                                            t
                                          )
                                        ),
                                      },
                                      t
                                    )
                                  : Object(l.jsx)(
                                      v.a.div,
                                      {
                                        id: "section-".concat(t),
                                        className: e.className,
                                        style: e.style,
                                        initial: e.initial,
                                        animate: e.animate,
                                        exit: e.exit,
                                        transition: e.transition,
                                        children: e.subSections.map((e, s) =>
                                          "YouTubeVideo" == e.className
                                            ? Object(l.jsx)("div", {
                                                style: e.style,
                                                children: Object(l.jsx)("div", {
                                                  className: "ratio ratio-16x9",
                                                  children: Object(l.jsx)(
                                                    "iframe",
                                                    {
                                                      src: e.videoLink,
                                                      title: "YouTube video",
                                                      allowFullScreen: !0,
                                                      style: {
                                                        width: "100%",
                                                        height: "100%",
                                                      },
                                                      allow: "autoplay",
                                                    }
                                                  ),
                                                }),
                                              })
                                            : "LottieAnimation" == e.className
                                            ? Object(l.jsx)(
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
                                                s
                                              )
                                            : Object(l.jsx)(
                                                v.a.div,
                                                {
                                                  className: ""
                                                    .concat(e.className, " ")
                                                    .concat(
                                                      O
                                                        ? "darkThemeFont"
                                                        : "lightThemeFont"
                                                    ),
                                                  style: e.style,
                                                  initial: e.initial,
                                                  animate: e.animate,
                                                  exit: e.exit,
                                                  transition: e.transition,
                                                  children: Object(l.jsxs)(
                                                    "div",
                                                    {
                                                      style: e.contentStyle,
                                                      children: [
                                                        tt()(e.content),
                                                        " ",
                                                      ],
                                                    }
                                                  ),
                                                },
                                                s
                                              )
                                        ),
                                      },
                                      t
                                    ))
                            ),
                          o.lessonAnimation &&
                            d &&
                            Object(l.jsx)(v.a.div, {
                              id: "lessonExample",
                              initial: { scale: 0 },
                              animate: { scale: 1 },
                              transition: {
                                type: "spring",
                                stiffness: 260,
                                damping: 10,
                              },
                              children: Object(l.jsx)(rt, {
                                currentSectionNumber: I,
                                nextLessonNumber: L,
                                nextLessonTitle: z,
                                chapterNumber: P,
                                chapterTitle: M,
                                lessonNumber: o.sectionNumber,
                                exampleDatafromBackEnd: F,
                              }),
                            }),
                          Object(l.jsx)("div", {
                            style: { minHeight: "1000px", zIndex: 999 },
                          }),
                        ],
                      }),
                      o.lessonAnimation &&
                        s < o.lessonAnimation.length - 1 &&
                        Object(l.jsx)("div", {
                          className: "forwardButton",
                          onClick: U,
                        }),
                      o.lessonAnimation &&
                        s == o.lessonAnimation.length - 1 &&
                        0 == d &&
                        Object(l.jsx)("div", {
                          className: "forwardButton",
                          onClick: () => {
                            u(!0);
                          },
                        }),
                      -1 == s &&
                        Object(l.jsx)(v.a.div, {
                          className: "".concat(
                            O
                              ? "forwardButtonVisibleDark"
                              : "forwardButtonVisibleLight"
                          ),
                          onClick: U,
                          initial: { opacity: 0 },
                          animate: { opacity: 1 },
                          transition: {
                            duration: 0.5,
                            repeat: 1 / 0,
                            repeatType: "reverse",
                          },
                          children: "Tap anywhere",
                        }),
                      o.lessonAnimation &&
                        s > -1 &&
                        s < 1 &&
                        1 !== o.lessonAnimation.length &&
                        c &&
                        Object(l.jsx)(v.a.div, {
                          className: "".concat(
                            O
                              ? "forwardButtonVisibleDark"
                              : "forwardButtonVisibleLight"
                          ),
                          onClick: U,
                          initial: { opacity: 0 },
                          animate: { opacity: 1 },
                          transition: {
                            duration: 0.5,
                            repeat: 1 / 0,
                            repeatType: "reverse",
                          },
                          children: "Tap anywhere",
                        }),
                    ],
                  }),
                ],
              })
        );
      };
      const ut = [
        [
          "https://qaleelo-assets.s3.us-east-2.amazonaws.com/KalimaTawheed/sectionImages/1.1.1.png",
          "https://qaleelo-assets.s3.us-east-2.amazonaws.com/KalimaTawheed/sectionImages/1.1.2.png",
          "https://qaleelo-assets.s3.us-east-2.amazonaws.com/KalimaTawheed/sectionImages/1.1.3.png",
          "https://qaleelo-assets.s3.us-east-2.amazonaws.com/KalimaTawheed/sectionImages/1.1.4.png",
          "https://qaleelo-assets.s3.us-east-2.amazonaws.com/KalimaTawheed/sectionImages/1.1.5.png",
          "https://qaleelo-assets.s3.us-east-2.amazonaws.com/KalimaTawheed/sectionImages/2.1.1.png",
          "https://qaleelo-assets.s3.us-east-2.amazonaws.com/KalimaTawheed/sectionImages/2.1.2.png",
          "https://qaleelo-assets.s3.us-east-2.amazonaws.com/KalimaTawheed/sectionImages/2.1.3.png",
          "https://qaleelo-assets.s3.us-east-2.amazonaws.com/KalimaTawheed/sectionImages/3.1.1.png",
          "https://qaleelo-assets.s3.us-east-2.amazonaws.com/KalimaTawheed/sectionImages/3.1.2.png",
          "https://qaleelo-assets.s3.us-east-2.amazonaws.com/KalimaTawheed/sectionImages/3.1.3.png",
          "https://qaleelo-assets.s3.us-east-2.amazonaws.com/KalimaTawheed/sectionImages/3.3.1.png",
          "https://qaleelo-assets.s3.us-east-2.amazonaws.com/KalimaTawheed/sectionImages/3.3.2.png",
          "https://qaleelo-assets.s3.us-east-2.amazonaws.com/KalimaTawheed/sectionImages/3.3.3.png",
          "https://qaleelo-assets.s3.us-east-2.amazonaws.com/KalimaTawheed/sectionImages/3.3.4.png",
          "https://qaleelo-assets.s3.us-east-2.amazonaws.com/KalimaTawheed/sectionImages/3.3.5.png",
          "https://qaleelo-assets.s3.us-east-2.amazonaws.com/KalimaTawheed/sectionImages/3.3.6.png",
          "https://qaleelo-assets.s3.us-east-2.amazonaws.com/KalimaTawheed/sectionImages/3.3.7.png",
          "https://qaleelo-assets.s3.us-east-2.amazonaws.com/KalimaTawheed/sectionImages/4.1.1.png",
          "https://qaleelo-assets.s3.us-east-2.amazonaws.com/KalimaTawheed/sectionImages/4.1.2.png",
          "https://qaleelo-assets.s3.us-east-2.amazonaws.com/KalimaTawheed/sectionImages/4.1.3.png",
          "https://qaleelo-assets.s3.us-east-2.amazonaws.com/KalimaTawheed/sectionImages/4.1.4.png",
          "https://qaleelo-assets.s3.us-east-2.amazonaws.com/KalimaTawheed/sectionImages/4.1.5.png",
          "https://qaleelo-assets.s3.us-east-2.amazonaws.com/KalimaTawheed/sectionImages/4.1.6.png",
        ],
        [
          "https://qaleelo-assets.s3.us-east-2.amazonaws.com/BasicArabicGrammer/sectionImages/1.1.1.png",
          "https://qaleelo-assets.s3.us-east-2.amazonaws.com/BasicArabicGrammer/sectionImages/1.1.2.png",
          "https://qaleelo-assets.s3.us-east-2.amazonaws.com/BasicArabicGrammer/sectionImages/1.2.1.png",
          "https://qaleelo-assets.s3.us-east-2.amazonaws.com/BasicArabicGrammer/sectionImages/1.2.2.png",
          "https://qaleelo-assets.s3.us-east-2.amazonaws.com/BasicArabicGrammer/sectionImages/2.4.2.png",
          "https://qaleelo-assets.s3.us-east-2.amazonaws.com/BasicArabicGrammer/sectionImages/1.3.1.png",
          "https://qaleelo-assets.s3.us-east-2.amazonaws.com/BasicArabicGrammer/sectionImages/1.3.2.png",
          "https://qaleelo-assets.s3.us-east-2.amazonaws.com/BasicArabicGrammer/sectionImages/1.3.3.png",
          "https://qaleelo-assets.s3.us-east-2.amazonaws.com/BasicArabicGrammer/sectionImages/1.3.4.png",
          "https://qaleelo-assets.s3.us-east-2.amazonaws.com/BasicArabicGrammer/sectionImages/2.1.1.png",
          "https://qaleelo-assets.s3.us-east-2.amazonaws.com/BasicArabicGrammer/sectionImages/2.1.2.png",
          "https://qaleelo-assets.s3.us-east-2.amazonaws.com/BasicArabicGrammer/sectionImages/2.1.3.png",
          "https://qaleelo-assets.s3.us-east-2.amazonaws.com/BasicArabicGrammer/sectionImages/2.1.4.png",
          "https://qaleelo-assets.s3.us-east-2.amazonaws.com/BasicArabicGrammer/sectionImages/2.2.1.png",
          "https://qaleelo-assets.s3.us-east-2.amazonaws.com/BasicArabicGrammer/sectionImages/2.2.3.png",
          "https://qaleelo-assets.s3.us-east-2.amazonaws.com/BasicArabicGrammer/sectionImages/2.2.2.png",
          "https://qaleelo-assets.s3.us-east-2.amazonaws.com/BasicArabicGrammer/sectionImages/2.2.4.png",
          "https://qaleelo-assets.s3.us-east-2.amazonaws.com/BasicArabicGrammer/sectionImages/2.3.1.png",
          "https://qaleelo-assets.s3.us-east-2.amazonaws.com/BasicArabicGrammer/sectionImages/2.3.2.png",
          "https://qaleelo-assets.s3.us-east-2.amazonaws.com/BasicArabicGrammer/sectionImages/2.3.3.png",
          "https://qaleelo-assets.s3.us-east-2.amazonaws.com/BasicArabicGrammer/sectionImages/2.3.4.png",
          "https://qaleelo-assets.s3.us-east-2.amazonaws.com/BasicArabicGrammer/sectionImages/2.3.5.png",
          "https://qaleelo-assets.s3.us-east-2.amazonaws.com/BasicArabicGrammer/sectionImages/2.3.6.png",
          "https://qaleelo-assets.s3.us-east-2.amazonaws.com/BasicArabicGrammer/sectionImages/2.4.1.png",
        ],
        [
          "https://qaleelo-assets.s3.us-east-2.amazonaws.com/The6PillarsOfIman/sectionImages/1.1.1.png",
          "https://qaleelo-assets.s3.us-east-2.amazonaws.com/The6PillarsOfIman/sectionImages/1.1.2.png",
          "https://qaleelo-assets.s3.us-east-2.amazonaws.com/The6PillarsOfIman/sectionImages/1.1.3.png",
          "https://qaleelo-assets.s3.us-east-2.amazonaws.com/The6PillarsOfIman/sectionImages/1.1.4.png",
          "https://qaleelo-assets.s3.us-east-2.amazonaws.com/The6PillarsOfIman/sectionImages/1.2.1.png",
          "https://qaleelo-assets.s3.us-east-2.amazonaws.com/The6PillarsOfIman/sectionImages/1.3.1.png",
          "https://qaleelo-assets.s3.us-east-2.amazonaws.com/The6PillarsOfIman/sectionImages/1.3.2.png",
          "https://qaleelo-assets.s3.us-east-2.amazonaws.com/The6PillarsOfIman/sectionImages/1.3.3.png",
          "https://qaleelo-assets.s3.us-east-2.amazonaws.com/The6PillarsOfIman/sectionImages/1.3.4.png",
          "https://qaleelo-assets.s3.us-east-2.amazonaws.com/The6PillarsOfIman/sectionImages/1.4.1.png",
          "https://qaleelo-assets.s3.us-east-2.amazonaws.com/The6PillarsOfIman/sectionImages/1.4.2.png",
          "https://qaleelo-assets.s3.us-east-2.amazonaws.com/The6PillarsOfIman/sectionImages/1.4.3.png",
          "https://qaleelo-assets.s3.us-east-2.amazonaws.com/The6PillarsOfIman/sectionImages/1.4.4.png",
          "https://qaleelo-assets.s3.us-east-2.amazonaws.com/The6PillarsOfIman/sectionImages/1.4.5.png",
          "https://qaleelo-assets.s3.us-east-2.amazonaws.com/The6PillarsOfIman/sectionImages/1.4.6.png",
          "https://qaleelo-assets.s3.us-east-2.amazonaws.com/The6PillarsOfIman/sectionImages/2.1.1.png",
          "https://qaleelo-assets.s3.us-east-2.amazonaws.com/The6PillarsOfIman/sectionImages/2.1.2.png",
          "https://qaleelo-assets.s3.us-east-2.amazonaws.com/The6PillarsOfIman/sectionImages/2.1.3.png",
          "https://qaleelo-assets.s3.us-east-2.amazonaws.com/The6PillarsOfIman/sectionImages/2.1.4.png",
          "https://qaleelo-assets.s3.us-east-2.amazonaws.com/The6PillarsOfIman/sectionImages/3.1.1.png",
          "https://qaleelo-assets.s3.us-east-2.amazonaws.com/The6PillarsOfIman/sectionImages/3.1.2.png",
          "https://qaleelo-assets.s3.us-east-2.amazonaws.com/The6PillarsOfIman/sectionImages/3.1.3.png",
          "https://qaleelo-assets.s3.us-east-2.amazonaws.com/The6PillarsOfIman/sectionImages/3.1.4.png",
          "https://qaleelo-assets.s3.us-east-2.amazonaws.com/The6PillarsOfIman/sectionImages/3.1.5.png",
        ],
      ];
      var ht = function () {
        return Object(l.jsxs)("div", {
          className: "WelcomeMessageContainer",
          children: [
            Object(l.jsx)("div", {
              className: "GetStartedImagesContainer",
              children: ut.map((e, s) =>
                Object(l.jsx)(
                  "div",
                  {
                    className: "GetStartedRow",
                    children: e.map((e, t) =>
                      Object(l.jsx)(
                        v.a.img,
                        {
                          src: e,
                          alt: "Image ".concat(t + 1),
                          className: "GetStartedImage",
                          initial: {
                            x: 0 === s ? "-2200%" : 1 === s ? "0%" : "-2200%",
                          },
                          animate: {
                            x: 0 === s ? "0%" : 1 === s ? "-2200%" : "0%",
                          },
                          transition: {
                            repeat: 1 / 0,
                            duration: 50,
                            ease: "linear",
                          },
                        },
                        t
                      )
                    ),
                  },
                  s
                )
              ),
            }),
            Object(l.jsxs)("div", {
              className: "WelcomeMessageFooter",
              children: [
                Object(l.jsxs)("div", {
                  className: "MessageTopSection",
                  children: [
                    Object(l.jsx)("div", {
                      className: "GetStartedHeader",
                      children: "HH Courses",
                    }),
                    Object(l.jsx)("div", {
                      className: "WelcomeMessageText",
                      style: { paddingTop: 0 },
                      children: "Interactive Islamic Studies",
                    }),
                  ],
                }),
                Object(l.jsx)("div", {
                  className: "MessageMiddleSection",
                  children: Object(l.jsx)(k.c, {
                    to: "/WelcomeMessageOne",
                    style: {
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "100%",
                    },
                    children: Object(l.jsx)("button", {
                      className: "GetStartedButton",
                      children: "Get Started",
                    }),
                  }),
                }),
                Object(l.jsxs)("div", {
                  className: "MessageBottomSection",
                  children: [
                    " ",
                    Object(l.jsx)(k.c, {
                      to: "/LoginPage",
                      children: Object(l.jsxs)("p", {
                        className: "GetStartedLoginText",
                        children: [
                          "Already have an account?",
                          " ",
                          Object(l.jsx)("span", {
                            style: { color: "#8747d4" },
                            children: "Log In",
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      };
      var bt = function () {
        return Object(l.jsxs)("div", {
          className: "WelcomeMessageContainer",
          children: [
            Object(l.jsxs)("div", {
              className: "WelcomeMessageImagesContainer",
              children: [
                Object(l.jsx)("div", {
                  children: Object(l.jsx)(dt, {
                    lottieFile:
                      "https://qaleelo-assets.s3.us-east-2.amazonaws.com/General/LottieFiles/bookTurning.json",
                    style: { width: "600px" },
                  }),
                }),
                Object(l.jsx)("div", {
                  children: Object(l.jsx)(dt, {
                    lottieFile:
                      "https://qaleelo-assets.s3.us-east-2.amazonaws.com/General/LottieFiles/happyStudent.json",
                    style: { width: "400px" },
                  }),
                }),
              ],
            }),
            Object(l.jsxs)("div", {
              className: "WelcomeMessageFooter",
              children: [
                Object(l.jsx)("div", {
                  className: "MessageTopSection",
                  children: Object(l.jsxs)("div", {
                    className: "WelcomeMessageText",
                    children: [
                      Object(l.jsx)("b", {
                        style: { color: "#dd6260" },
                        children: "HH Courses",
                      }),
                      " help you learn complex Islamic topics effectively.",
                    ],
                  }),
                }),
                Object(l.jsx)("div", {
                  className: "MessageMiddleSection",
                  children: Object(l.jsx)(k.c, {
                    to: "/WelcomeMessageTwo",
                    style: {
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "100%",
                    },
                    children: Object(l.jsx)("button", {
                      className: "GetStartedButton",
                      children: "Continue",
                    }),
                  }),
                }),
                Object(l.jsx)("div", { className: "MessageBottomSection" }),
              ],
            }),
          ],
        });
      };
      var pt = function () {
        return Object(l.jsxs)("div", {
          className: "WelcomeMessageContainer",
          children: [
            Object(l.jsx)("div", {
              className: "WelcomeMessageImagesContainer",
              children: Object(l.jsx)("div", {
                children: Object(l.jsx)(dt, {
                  lottieFile:
                    "https://qaleelo-assets.s3.us-east-2.amazonaws.com/General/LottieFiles/InteractiveLesson.json",
                  style: { width: "800px", marginTop: "400px" },
                }),
              }),
            }),
            Object(l.jsxs)("div", {
              className: "WelcomeMessageFooter",
              children: [
                Object(l.jsx)("div", {
                  className: "MessageTopSection",
                  children: Object(l.jsxs)("div", {
                    className: "WelcomeMessageText",
                    children: [
                      Object(l.jsx)("b", {
                        style: { color: "#dd6260" },
                        children: "Lessons",
                      }),
                      " are bite sized, visual, and tappable to hold your attention.",
                    ],
                  }),
                }),
                Object(l.jsx)("div", {
                  className: "MessageMiddleSection",
                  children: Object(l.jsx)(k.c, {
                    to: "/WelcomeMessageThree",
                    style: {
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "100%",
                    },
                    children: Object(l.jsx)("button", {
                      className: "GetStartedButton",
                      children: "Continue",
                    }),
                  }),
                }),
                Object(l.jsx)("div", { className: "MessageBottomSection" }),
              ],
            }),
          ],
        });
      };
      var gt = function () {
        return Object(l.jsxs)("div", {
          className: "WelcomeMessageContainer",
          children: [
            Object(l.jsx)("div", {
              className: "WelcomeMessageImagesContainer",
              children: Object(l.jsx)("div", {
                children: Object(l.jsx)(dt, {
                  lottieFile:
                    "https://qaleelo-assets.s3.us-east-2.amazonaws.com/General/LottieFiles/quizQuestion.json",
                  style: { width: "800px", marginTop: "400px" },
                }),
              }),
            }),
            Object(l.jsxs)("div", {
              className: "WelcomeMessageFooter",
              children: [
                Object(l.jsx)("div", {
                  className: "MessageTopSection",
                  children: Object(l.jsxs)("div", {
                    className: "WelcomeMessageText",
                    children: [
                      "Then ",
                      Object(l.jsx)("b", {
                        style: { color: "#dd6260" },
                        children: "quizzes",
                      }),
                      " help you commit key concepts to long term memory.",
                    ],
                  }),
                }),
                Object(l.jsx)("div", {
                  className: "MessageMiddleSection",
                  children: Object(l.jsx)(k.c, {
                    to: "/WelcomeMessageFour",
                    style: {
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "100%",
                    },
                    children: Object(l.jsx)("button", {
                      className: "GetStartedButton",
                      children: "Continue",
                    }),
                  }),
                }),
                Object(l.jsx)("div", { className: "MessageBottomSection" }),
              ],
            }),
          ],
        });
      };
      var jt,
        xt,
        ft,
        Ot,
        vt = function () {
          return Object(l.jsxs)("div", {
            className: "WelcomeMessageContainer",
            children: [
              Object(l.jsx)("div", {
                className: "WelcomeMessageImagesContainer",
                children: Object(l.jsx)("div", {
                  children: Object(l.jsx)(dt, {
                    lottieFile:
                      "https://qaleelo-assets.s3.us-east-2.amazonaws.com/General/LottieFiles/rocketLaunchDemo.json",
                    style: { width: "800px", marginTop: "400px" },
                  }),
                }),
              }),
              Object(l.jsxs)("div", {
                className: "WelcomeMessageFooter",
                children: [
                  Object(l.jsx)("div", {
                    className: "MessageTopSection",
                    children: Object(l.jsxs)("div", {
                      className: "WelcomeMessageText",
                      children: [
                        "Let's us show you how it works",
                        Object(l.jsx)("br", {}),
                        " with a quick demo!",
                      ],
                    }),
                  }),
                  Object(l.jsx)("div", {
                    className: "MessageMiddleSection",
                    children: Object(l.jsx)(k.c, {
                      to: "/LessonDemo",
                      style: {
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: "100%",
                      },
                      children: Object(l.jsx)("button", {
                        className: "GetStartedButton",
                        children: "Continue",
                      }),
                    }),
                  }),
                  Object(l.jsx)("div", { className: "MessageBottomSection" }),
                ],
              }),
            ],
          });
        };
      const Nt = x.b.div(
          jt ||
            (jt = Object(j.a)([
              '\n  /* box-shadow: 0 0.1rem 0.5rem rgba(0, 0, 0, 0.2); */\n  border-radius: 5px;\n  padding: 10px;\n  /* background: #252525; */\n  /* margin-top: 80px; */\n  font-family: "Quicksand", sans-serif;\n',
            ]))
        ),
        wt = x.b.div(
          xt ||
            (xt = Object(j.a)([
              "\n  /* font-size: 17px; */\n  font-size: 2.5vh;\n  font-weight: bold;\n  text-align: center;\n  color: #a678de;\n  padding: 20px;\n",
            ]))
        ),
        yt = Object(x.b)(v.a.div)(
          ft ||
            (ft = Object(j.a)([
              "\n  font-size: 2.5vh;\n  font-weight: bold;\n  text-align: center;\n  font-family: Quicksand;\n  /* border-radius: 15px; */\n  /* padding: 10px; */\n  color: #252525;\n  display: flex;\n  background: ",
              ";\n  /* margin: 20px; */\n  transition: transform 300ms;\n  justify-content: center;\n\n  &:hover {\n    cursor: pointer;\n  }\n",
            ])),
          (e) => (e.answerClicked == e.answer ? e.answerColor : "#D2CFE6")
        ),
        kt = x.b.div(
          Ot ||
            (Ot = Object(j.a)([
              "\n  /* font-size: 2vh; */\n  display: ",
              ";\n  align-items: center;\n  justify-content: center;\n",
            ])),
          (e) => (e.answerClicked == e.answer ? "flex" : "none")
        );
      var Tt = (e) => {
        console.log(e);
        const { courseTitleUserIsOn: s, entryStore: t, isDarkMode: o } = m();
        console.log(t);
        const [a, c] = Object(n.useState)("#e8e2ef"),
          [r, i] = Object(n.useState)("NoAnswer"),
          [d, u] = Object(n.useState)(!1),
          h = Object(n.useRef)(null),
          [b, p] = Object(n.useState)(!1),
          [g, j] = Object(n.useState)({}),
          [x, f] = Object(n.useState)([]),
          O = window.innerWidth <= 768;
        return (
          Object(n.useEffect)(() => {
            var s = ((s) => {
              let t =
                0 !== e.exampleDatafromBackEnd.length &&
                e.exampleDatafromBackEnd.filter((e) => e.sectionNumber == s);
              return t[Math.floor(Math.random() * t.length)];
            })(e.lessonNumber);
            j(s),
              f(
                (function (e) {
                  const s = [...e];
                  for (let t = s.length - 1; t > 0; t--) {
                    const e = Math.floor(Math.random() * (t + 1));
                    [s[t], s[e]] = [s[e], s[t]];
                  }
                  return s;
                })(s.answers)
              );
          }, []),
          Object(l.jsxs)(Nt, {
            className: "LessonExampleBox",
            children: [
              Object(l.jsx)(wt, { children: g && g.question }),
              x.map((s) =>
                Object(l.jsxs)(l.Fragment, {
                  children: [
                    Object(l.jsx)(yt, {
                      className: "LessonExampleAnswerBox",
                      whileHover: { scale: 1.2 },
                      whileTap: { scale: 0.8 },
                      transition: {
                        type: "spring",
                        stiffness: 400,
                        damping: 17,
                      },
                      onClick: () =>
                        ((s, t) => {
                          if ((i(t), u(!0), 1 == s)) {
                            c("#DAF7A6"), p(!0);
                            const s = O ? 1e3 : 300;
                            setTimeout(() => {
                              window.scrollBy({ top: s, behavior: "smooth" });
                            }, 300),
                              console.log(a),
                              localStorage.getItem("chapterTitle") ||
                                localStorage.setItem(
                                  "chapterTitle",
                                  e.chapterTitle
                                ),
                              console.log(localStorage.getItem("chapterTitle"));
                            let t =
                              JSON.parse(
                                localStorage.getItem("chapterTitles")
                              ) || [];
                            t.includes(e.chapterTitle) ||
                              t.push(e.chapterTitle),
                              localStorage.setItem(
                                "chapterTitles",
                                JSON.stringify(t)
                              ),
                              console.log(t);
                            let n =
                              JSON.parse(
                                localStorage.getItem("lessonProgress")
                              ) || [];
                            n.includes(e.currentSectionNumber) ||
                              n.push(e.currentSectionNumber),
                              localStorage.setItem(
                                "lessonProgress",
                                JSON.stringify(n)
                              ),
                              console.log(n),
                              console.log(e.currentSectionNumber);
                          } else c("#ff726f");
                        })(s.isCorrect, s.answer),
                      answerColor: a,
                      answer: s.answer,
                      answerClicked: r,
                      children: Object(l.jsx)("div", {
                        className: "LessonExampleAnswer",
                        children: s.answer,
                      }),
                    }),
                    Object(l.jsx)(kt, {
                      answerClicked: r,
                      answer: s.answer,
                      answerColor: a,
                      children:
                        0 == s.isCorrect
                          ? Object(l.jsxs)("div", {
                              className:
                                "LessonExampleAnswerExplanationContainer ".concat(
                                  o ? "darkThemeFont" : "lightThemeFont"
                                ),
                              children: [
                                Object(l.jsx)("i", {
                                  class: "wrongCross fa-solid fa-xmark",
                                }),
                                Object(l.jsx)("p", {
                                  style: { display: "inline" },
                                  className: "LessonExampleAnswerExplanation",
                                  children: s.explanation,
                                }),
                              ],
                            })
                          : Object(l.jsxs)(l.Fragment, {
                              children: [
                                Object(l.jsx)("i", {
                                  class: "correctCheckMark fa-solid fa-check",
                                }),
                                b &&
                                  Object(l.jsx)(ts.a, {
                                    autoStart: !0,
                                    duration: 5e3,
                                    particleCount: 100,
                                    spread: 360,
                                    origin: { x: 0.8, y: 0.5 },
                                    force: 0.8,
                                    width: 1600,
                                  }),
                                Object(l.jsx)("p", {
                                  className:
                                    "LessonExampleAnswerExplanation ".concat(
                                      o ? "darkThemeFont" : "lightThemeFont"
                                    ),
                                  children: "Correct!",
                                }),
                                b &&
                                  Object(l.jsx)(ts.a, {
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
                })
              ),
              b &&
                0 == e.nextLessonNumber &&
                Object(l.jsxs)(v.a.div, {
                  ref: h,
                  className: "LessonExampleNextLessonBox",
                  initial: { opacity: 0, scale: 0.5 },
                  animate: { opacity: 1, scale: [1, 1.03, 1] },
                  transition: {
                    duration: 0.8,
                    delay: 0.3,
                    ease: [0, 0.71, 0.2, 1.01],
                  },
                  children: [
                    Object(l.jsxs)("div", {
                      style: {},
                      className: "LessonTitleContainer",
                      children: [
                        Object(l.jsx)("span", {
                          className: "LessonNumber",
                          children: "End Of Chapter",
                        }),
                        " ",
                      ],
                    }),
                    Object(l.jsx)(k.c, {
                      to: "/".concat(s, "/quiz/").concat(e.chapterNumber),
                      children: Object(l.jsx)(v.a.div, {
                        whileTap: { scale: 0.8 },
                        transition: {
                          type: "spring",
                          stiffness: 400,
                          damping: 17,
                        },
                        children: Object(l.jsx)(z, {
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
              b &&
                !1 !== e.nextLessonNumber &&
                Object(l.jsx)(v.a.div, {
                  ref: h,
                  className: "LessonExampleNextLessonBox",
                  initial: { opacity: 0, scale: 0.5 },
                  animate: { opacity: 1, scale: [1, 1.03, 1] },
                  transition: {
                    duration: 0.8,
                    delay: 0.3,
                    ease: [0, 0.71, 0.2, 1.01],
                  },
                  children: Object(l.jsx)(v.a.div, {
                    whileTap: { scale: 0.8 },
                    transition: { type: "spring", stiffness: 400, damping: 17 },
                    className: "MessageMiddleSection",
                    style: { marginTop: "150px" },
                    children: Object(l.jsx)(k.c, {
                      to: "/WelcomeMessageFive",
                      style: {
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: "100%",
                      },
                      children: Object(l.jsx)("button", {
                        className: "GetStartedButton",
                        children: "Continue",
                      }),
                    }),
                  }),
                }),
            ],
          })
        );
      };
      var Ct = (e) => {
        const [s, t] = Object(n.useState)(-1),
          [o, a] = Object(n.useState)({}),
          [c, r] = Object(n.useState)(!0),
          [d, u] = Object(n.useState)(!1);
        let {
          courseDetails: h,
          setCourseDetails: b,
          courseTitleUserIsOn: p,
          setCourseTitleUserIsOn: g,
          entryStore: j,
          isDarkMode: x,
        } = m();
        console.log(h),
          console.log(j),
          Object(n.useEffect)(() => {
            g(e.match.params.courseTitle);
          }, []),
          console.log(p),
          console.log(e.match.params.courseTitle);
        let f = "KalimaTawheed",
          O = "3.1.1",
          N = "kalimaTawheedTopics",
          w = "kalimaTawheedTopic";
        console.log(e.match), console.log(e.match.params.lessonNumber);
        let y = e.match.params.lessonNumber;
        console.log(y),
          console.log(h.courseTopicsCollectionName),
          console.log(h.courseTopicsModelName),
          Object(n.useEffect)(() => {
            i()(
              "/"
                .concat(f, "/lessonRESTCAll/")
                .concat(O, "?collectionName=")
                .concat(N, "&modelName=")
                .concat(w)
            ).then((e) => {
              a(e.data);
            });
          }, []),
          console.log(
            "/api/"
              .concat(f, "/lessonRESTCAll/")
              .concat(O, "?collectionName=")
              .concat(N, "&modelName=")
              .concat(w)
          ),
          console.log(o);
        const [k, T] = Object(n.useState)([]);
        Object(n.useEffect)(() => {
          i()(
            "/examplesData?collectionName="
              .concat("kalimaTawheedExamples", "&modelName=")
              .concat("kalimaTawheedExample")
          ).then((e) => {
            T(e.data), console.log(e.data);
          });
        }, []),
          console.log(k);
        const C = () => {
          t((e) => e + 1);
        };
        Object(n.useEffect)(() => {
          if (d) {
            const e = document.getElementById("lessonExample");
            e && e.scrollIntoView({ behavior: "smooth" });
          }
        }, [d]);
        window.innerWidth;
        return (
          Object(n.useEffect)(() => {
            if (s > 0) {
              const e = document.getElementById("section-".concat(s - 1));
              e && e.scrollIntoView({ behavior: "smooth" });
            }
          }, [s]),
          Object(n.useEffect)(() => {
            r(!1);
            const e = setTimeout(() => {
              r(!0);
            }, 5e3);
            return () => clearTimeout(e);
          }, [s]),
          Object(n.useEffect)(() => {
            t(-1), u(!1);
          }, [y, o]),
          console.log(s),
          "undefined" === o || null === o || 0 === o.length
            ? Object(l.jsx)("div", { children: "Loading" })
            : Object(l.jsx)("div", {
                children: Object(l.jsxs)("div", {
                  className: "Lesson",
                  children: [
                    Object(l.jsxs)("div", {
                      className: "LessonContainer",
                      children: [
                        Object(l.jsxs)("div", {
                          style: {},
                          className: "LessonTitleContainer",
                          children: [
                            Object(l.jsxs)("span", {
                              className: "LessonNumber",
                              children: ["Lesson ", o.sectionNumber],
                            }),
                            " ",
                            Object(l.jsx)("br", {}),
                            Object(l.jsx)("span", {
                              className: "LessonTitle",
                              children: o.sectionTitle,
                            }),
                          ],
                        }),
                        o.lessonAnimation &&
                          o.lessonAnimation.map(
                            (e, t) =>
                              t <= s &&
                              ("multiSection" == e.className
                                ? Object(l.jsx)(
                                    v.a.div,
                                    {
                                      id: "section-".concat(t),
                                      className: e.className,
                                      style: e.style,
                                      initial: e.initial,
                                      animate: e.animate,
                                      exit: e.exit,
                                      transition: e.transition,
                                      children: e.subSections.map((e, s) =>
                                        Object(l.jsx)(
                                          v.a.div,
                                          {
                                            id: "subSection-".concat(t),
                                            className: e.className,
                                            style: e.style,
                                            initial: e.initial,
                                            animate: e.animate,
                                            exit: e.exit,
                                            transition: e.transition,
                                            children: e.miniSections.map(
                                              (e, s) =>
                                                "LottieAnimation" ===
                                                e.className
                                                  ? Object(l.jsx)(
                                                      dt,
                                                      {
                                                        lottieFile:
                                                          e.lottieFilePath,
                                                        className: e.className,
                                                        style: e.style,
                                                        initial: e.initial,
                                                        animate: e.animate,
                                                        exit: e.exit,
                                                        transition:
                                                          e.transition,
                                                        speed: e.speed,
                                                        loop: e.loop,
                                                      },
                                                      s
                                                    )
                                                  : Object(l.jsx)(
                                                      v.a.div,
                                                      {
                                                        className: ""
                                                          .concat(
                                                            e.className,
                                                            " "
                                                          )
                                                          .concat(
                                                            x
                                                              ? "darkThemeFont"
                                                              : "lightThemeFont"
                                                          ),
                                                        style: e.style,
                                                        initial: e.initial,
                                                        animate: e.animate,
                                                        exit: e.exit,
                                                        transition:
                                                          e.transition,
                                                        children: Object(
                                                          l.jsxs
                                                        )("div", {
                                                          style: e.contentStyle,
                                                          children: [
                                                            tt()(e.content),
                                                            " ",
                                                          ],
                                                        }),
                                                      },
                                                      s
                                                    )
                                            ),
                                          },
                                          s
                                        )
                                      ),
                                    },
                                    t
                                  )
                                : Object(l.jsx)(
                                    v.a.div,
                                    {
                                      id: "section-".concat(t),
                                      className: e.className,
                                      style: e.style,
                                      initial: e.initial,
                                      animate: e.animate,
                                      exit: e.exit,
                                      transition: e.transition,
                                      children: e.subSections.map((e, s) =>
                                        "YouTubeVideo" == e.className
                                          ? Object(l.jsx)("div", {
                                              style: e.style,
                                              children: Object(l.jsx)("div", {
                                                className: "ratio ratio-16x9",
                                                children: Object(l.jsx)(
                                                  "iframe",
                                                  {
                                                    src: e.videoLink,
                                                    title: "YouTube video",
                                                    allowFullScreen: !0,
                                                    style: {
                                                      width: "100%",
                                                      height: "100%",
                                                    },
                                                    allow: "autoplay",
                                                  }
                                                ),
                                              }),
                                            })
                                          : "LottieAnimation" == e.className
                                          ? Object(l.jsx)(
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
                                              s
                                            )
                                          : Object(l.jsx)(
                                              v.a.div,
                                              {
                                                className: ""
                                                  .concat(e.className, " ")
                                                  .concat(
                                                    x
                                                      ? "darkThemeFont"
                                                      : "lightThemeFont"
                                                  ),
                                                style: e.style,
                                                initial: e.initial,
                                                animate: e.animate,
                                                exit: e.exit,
                                                transition: e.transition,
                                                children: Object(l.jsxs)(
                                                  "div",
                                                  {
                                                    style: e.contentStyle,
                                                    children: [
                                                      tt()(e.content),
                                                      " ",
                                                    ],
                                                  }
                                                ),
                                              },
                                              s
                                            )
                                      ),
                                    },
                                    t
                                  ))
                          ),
                        o.lessonAnimation &&
                          d &&
                          Object(l.jsx)(v.a.div, {
                            id: "lessonExample",
                            initial: { scale: 0 },
                            animate: { scale: 1 },
                            transition: {
                              type: "spring",
                              stiffness: 260,
                              damping: 10,
                            },
                            children: Object(l.jsx)(Tt, {
                              lessonNumber: o.sectionNumber,
                              exampleDatafromBackEnd: k,
                            }),
                          }),
                        Object(l.jsx)("div", {
                          style: { minHeight: "1000px", zIndex: 999 },
                        }),
                      ],
                    }),
                    o.lessonAnimation &&
                      s < o.lessonAnimation.length - 1 &&
                      Object(l.jsx)("div", {
                        className: "forwardButton",
                        onClick: C,
                      }),
                    o.lessonAnimation &&
                      s == o.lessonAnimation.length - 1 &&
                      0 == d &&
                      Object(l.jsx)("div", {
                        className: "forwardButton",
                        onClick: () => {
                          u(!0);
                        },
                      }),
                    -1 == s &&
                      Object(l.jsx)(v.a.div, {
                        className: "".concat(
                          x
                            ? "forwardButtonVisibleDark"
                            : "forwardButtonVisibleLight"
                        ),
                        onClick: C,
                        initial: { opacity: 0 },
                        animate: { opacity: 1 },
                        transition: {
                          duration: 0.5,
                          repeat: 1 / 0,
                          repeatType: "reverse",
                        },
                        children: "Tap anywhere",
                      }),
                    o.lessonAnimation &&
                      s > -1 &&
                      s < 1 &&
                      1 !== o.lessonAnimation.length &&
                      c &&
                      Object(l.jsx)(v.a.div, {
                        className: "".concat(
                          x
                            ? "forwardButtonVisibleDark"
                            : "forwardButtonVisibleLight"
                        ),
                        onClick: C,
                        initial: { opacity: 0 },
                        animate: { opacity: 1 },
                        transition: {
                          duration: 0.5,
                          repeat: 1 / 0,
                          repeatType: "reverse",
                        },
                        children: "Tap anywhere",
                      }),
                  ],
                }),
              })
        );
      };
      var St = function () {
        return Object(l.jsxs)("div", {
          className: "WelcomeMessageContainer",
          children: [
            Object(l.jsx)("div", {
              className: "WelcomeMessageImagesContainer",
              children: Object(l.jsx)("div", {
                children: Object(l.jsx)(dt, {
                  lottieFile:
                    "https://qaleelo-assets.s3.us-east-2.amazonaws.com/General/LottieFiles/busyLife.json",
                  style: { width: "800px", marginTop: "400px" },
                }),
              }),
            }),
            Object(l.jsxs)("div", {
              className: "WelcomeMessageFooter",
              children: [
                Object(l.jsxs)("div", {
                  className: "MessageTopSection",
                  children: [
                    Object(l.jsx)("div", {
                      className: "GetStartedHeader",
                      style: { fontSize: "4vh" },
                      children: "Just 5 minutes a day",
                    }),
                    Object(l.jsxs)("div", {
                      className: "WelcomeMessageText",
                      style: { paddingTop: 0 },
                      children: [
                        "We understand you're busy. ",
                        Object(l.jsx)("br", {}),
                        "So we designed the lessons to fit your schedule.",
                      ],
                    }),
                  ],
                }),
                Object(l.jsx)("div", {
                  className: "MessageMiddleSection",
                  children: Object(l.jsx)(k.c, {
                    to: "/WelcomeMessageCourses",
                    style: {
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "100%",
                    },
                    children: Object(l.jsx)("button", {
                      className: "GetStartedButton",
                      children: "Continue",
                    }),
                  }),
                }),
                Object(l.jsx)("div", { className: "MessageBottomSection" }),
              ],
            }),
          ],
        });
      };
      var It,
        Et,
        Lt = function () {
          return Object(l.jsxs)("div", {
            className: "WelcomeMessageContainer",
            children: [
              Object(l.jsx)("div", {
                className: "WelcomeMessageImagesContainer",
                children: Object(l.jsx)("div", {
                  children: Object(l.jsx)(dt, {
                    lottieFile:
                      "https://qaleelo-assets.s3.us-east-2.amazonaws.com/General/LottieFiles/scheduleClean.json",
                    style: { width: "800px", marginTop: "400px" },
                  }),
                }),
              }),
              Object(l.jsxs)("div", {
                className: "WelcomeMessageFooter",
                children: [
                  Object(l.jsxs)("div", {
                    className: "MessageTopSection",
                    children: [
                      Object(l.jsx)("div", {
                        className: "GetStartedHeader",
                        style: { fontSize: "4vh" },
                        children: "Turn on Notifications",
                      }),
                      Object(l.jsx)("div", {
                        className: "WelcomeMessageText",
                        style: { paddingTop: 0 },
                        children:
                          "We will remind you to learn so it becomes a habit!",
                      }),
                    ],
                  }),
                  Object(l.jsx)("div", {
                    className: "MessageMiddleSection",
                    children: Object(l.jsx)(k.c, {
                      to: "/WelcomeMessageSeven",
                      style: {
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: "100%",
                      },
                      children: Object(l.jsx)("button", {
                        className: "GetStartedButton",
                        children: "Enable Notifications",
                      }),
                    }),
                  }),
                  Object(l.jsx)("div", { className: "MessageBottomSection" }),
                ],
              }),
            ],
          });
        };
      const zt = x.b.button(
        It ||
          (It = Object(j.a)([
            '\n  background: red;\n  position: relative;\n  font-family: "Quicksand", sans-serif;\n  /* padding-left: 15px; */\n  /* padding-right: 15px; */\n  /* margin: 30px; */\n  text-transform: uppercase;\n  /* font-size: 15px; */\n  font-size: 1.4vh;\n  font-weight: bold;\n  overflow: hidden;\n  border: 0;\n  border-radius: 20% 20% 20% 20% / 50% 50% 50% 50%;\n  background: none;\n  color: #dd6260;\n  height: 6vh;\n  text-decoration: underline;\n\n  transition: all 0.25s ease;\n  cursor: pointer;\n  margin-right: 20px;\n',
          ]))
      );
      x.b.button(
        Et ||
          (Et = Object(j.a)([
            '\n  background: red;\n  position: relative;\n  font-family: "Quicksand", sans-serif;\n  padding-left: 15px;\n  padding-right: 15px;\n  /* margin-bottom: 10px; */\n  text-transform: uppercase;\n  /* font-size: 15px; */\n  font-size: 1.8vh;\n  font-weight: bold;\n  overflow: hidden;\n  border: 0;\n  border-radius: 20% 20% 20% 20% / 50% 50% 50% 50%;\n  background: none;\n  color: yellow;\n  height: 6vh;\n\n  transition: all 0.25s ease;\n  cursor: pointer;\n  margin-right: 20px;\n\n  &:active {\n    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.5);\n    background: #f2b1ae;\n  }\n',
          ]))
      );
      var Dt = function (e) {
        const [s, t] = Object(n.useState)(""),
          [o, a] = Object(n.useState)(""),
          [c, r] = Object(n.useState)(!0),
          [i, d] = Object(n.useState)(!1),
          m = (e) => {
            t(e);
            const s = u(e);
            a(s > 0.5 ? "#000" : "#fff"), r(!1);
          },
          u = (e) => {
            const s = e.match(/\d+/g);
            return (0.299 * s[0] + 0.587 * s[1] + 0.114 * s[2]) / 255;
          };
        return (
          Object(n.useEffect)(() => {
            (async (e) => {
              const s = localStorage.getItem(e);
              if (s) m(s);
              else
                try {
                  const s = await fetch(e, {
                    method: "GET",
                    headers: { "Cache-Control": "no-cache" },
                  });
                  if (s.ok) {
                    const t = await s.blob(),
                      n = new FileReader();
                    n.readAsDataURL(t),
                      (n.onloadend = () => {
                        const s = n.result,
                          t = new Image();
                        (t.src = s),
                          (t.onload = () => {
                            const s = new O.a().getColor(t),
                              n = "rgb("
                                .concat(s[0], ", ")
                                .concat(s[1], ", ")
                                .concat(s[2], ")");
                            m(n), localStorage.setItem(e, n);
                          });
                      });
                  } else console.error("Image fetch failed:", s.status);
                } catch (t) {
                  console.error("Error fetching image:", t);
                }
            })(
              "https://qaleelo-assets.s3.us-east-2.amazonaws.com/" +
                e.course.courseTitle.replace(/\s/g, "") +
                "/courseImage/" +
                e.course.courseTitle.replace(/\s/g, "") +
                ".png"
            );
          }, []),
          Object(l.jsxs)("div", {
            className: "courseFullDetails",
            style: { backgroundColor: s },
            children: [
              Object(l.jsxs)("div", {
                className: "courseHeader",
                children: [
                  Object(l.jsx)(Es, {
                    img:
                      "https://qaleelo-assets.s3.us-east-2.amazonaws.com/" +
                      e.course.courseTitle.replace(/\s/g, "") +
                      "/courseImage/" +
                      e.course.courseTitle.replace(/\s/g, "") +
                      ".png",
                    title: e.course.courseTitle,
                    description: e.course.courseDescription,
                  }),
                  Object(l.jsx)("div", {
                    className: "courseDescriptionANDGoals",
                    children: Object(l.jsx)(Ds, {
                      courseDetails: e.course,
                      color: o,
                    }),
                  }),
                ],
              }),
              Object(l.jsxs)("h1", {
                className: "courseDescription",
                style: { color: o },
                children: [
                  e.course.courseDescription,
                  Object(l.jsx)("br", {}),
                  Object(l.jsx)(zt, {
                    onClick: () => {
                      d(!i);
                    },
                    style: { color: o },
                    children: i ? "Hide Course Details" : "Show Course Details",
                  }),
                  "\u200b",
                ],
              }),
              i &&
                Object(l.jsxs)("div", {
                  className: "courseGoals",
                  children: [
                    Object(l.jsxs)("div", {
                      className: "courseGoalsDescription",
                      style: { color: o },
                      children: [
                        Object(l.jsx)("div", {
                          className: "courseGoalsHeader",
                          style: { color: o },
                          children: "You will learn",
                        }),
                        0 === Object.entries(e.course).length
                          ? Object(l.jsx)("div", { children: "Loading" })
                          : e.course.courseGoals.map((e, s) =>
                              Object(l.jsx)("p", { children: e })
                            ),
                      ],
                    }),
                    Object(l.jsxs)("div", {
                      className: "courseReference",
                      children: [
                        e.course.courseTitle &&
                          Object(l.jsx)("img", {
                            className: "courseReferenceImage",
                            src:
                              "https://qaleelo-assets.s3.us-east-2.amazonaws.com/" +
                              e.course.courseTitle.replace(/\s/g, "") +
                              "/courseReferenceImage/" +
                              e.course.courseTitle.replace(/\s/g, "") +
                              ".png",
                            alt: "",
                          }),
                        Object(l.jsx)("div", {
                          className: "courseReferenceDescription",
                          style: { color: o },
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
      var Mt = function () {
        const [e, s] = Object(n.useState)([]);
        return (
          Object(n.useEffect)(() => {
            i()("/coursesData").then((e) => {
              s(e.data), console.log(e.data);
            });
          }, []),
          console.log(e),
          Object(l.jsx)("div", {
            children: Object(l.jsx)("div", {
              className: "courseCardsContainer",
              children: e.map((e, s) =>
                Object(l.jsx)(l.Fragment, {
                  children:
                    e.courseIsActive && Object(l.jsx)(Dt, { course: e }),
                })
              ),
            }),
          })
        );
      };
      var Pt = function () {
        return Object(l.jsxs)("div", {
          className: "WelcomeMessageContainer",
          children: [
            Object(l.jsx)("div", {
              className: "WelcomeMessageImagesContainerScrollable",
              children: Object(l.jsx)("div", {
                children: Object(l.jsx)(Mt, {}),
              }),
            }),
            Object(l.jsxs)("div", {
              className: "WelcomeMessageFooter",
              children: [
                Object(l.jsxs)("div", {
                  className: "MessageTopSection",
                  children: [
                    Object(l.jsx)("div", {
                      className: "GetStartedHeader",
                      style: { fontSize: "4vh" },
                      children: "Many Courses",
                    }),
                    Object(l.jsx)("div", {
                      className: "WelcomeMessageText",
                      style: { paddingTop: 0 },
                      children: "And we will keep adding more!",
                    }),
                  ],
                }),
                Object(l.jsx)("div", {
                  className: "MessageMiddleSection",
                  children: Object(l.jsx)(k.c, {
                    to: "/WelcomeMessageNotifications",
                    style: {
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "100%",
                    },
                    children: Object(l.jsx)("button", {
                      className: "GetStartedButton",
                      children: "Continue",
                    }),
                  }),
                }),
                Object(l.jsx)("div", { className: "MessageBottomSection" }),
              ],
            }),
          ],
        });
      };
      var Bt = function () {
        return Object(l.jsxs)("div", {
          className: "WelcomeMessageContainer",
          children: [
            Object(l.jsx)("div", {
              className: "WelcomeMessageImagesContainer",
              children: Object(l.jsx)("div", {
                children: Object(l.jsx)(dt, {
                  lottieFile:
                    "https://qaleelo-assets.s3.us-east-2.amazonaws.com/General/LottieFiles/MuslimWomen.json",
                  style: { width: "800px", marginTop: "400px" },
                }),
              }),
            }),
            Object(l.jsxs)("div", {
              className: "WelcomeMessageFooter",
              children: [
                Object(l.jsx)("div", {
                  className: "MessageTopSection",
                  children: Object(l.jsxs)("div", {
                    className: "WelcomeMessageText",
                    style: { fontStyle: "Italic" },
                    children: [
                      '"I felt I can do the courses longer than I would read the same content in a book."',
                      Object(l.jsx)("br", {}),
                      " - User",
                    ],
                  }),
                }),
                Object(l.jsx)("div", {
                  className: "MessageMiddleSection",
                  children: Object(l.jsx)(k.c, {
                    to: "/LoginPage",
                    style: {
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "100%",
                    },
                    children: Object(l.jsx)("button", {
                      className: "GetStartedButton",
                      children: "Continue",
                    }),
                  }),
                }),
                Object(l.jsx)("div", { className: "MessageBottomSection" }),
              ],
            }),
          ],
        });
      };
      const Ft = (e) => {
        let {
          component: s,
          isLoggedIn: t,
          isTokenExpired: n,
          renewSession: o,
          ...a
        } = e;
        return Object(l.jsx)(F.a, {
          ...a,
          render: (e) =>
            t && !n
              ? Object(l.jsx)(s, { ...e })
              : Object(l.jsx)(k.a, { to: "/" }),
        });
      };
      var At = function () {
        const {
            courseTitleUserIsOn: e,
            entryStore: s,
            isDarkMode: t,
            setIsDarkMode: o,
          } = m(),
          [a, c] = Object(n.useState)(!1),
          [r, i] = Object(n.useState)(null);
        return (
          Object(F.f)(),
          Object(n.useEffect)(() => {
            const e = localStorage.getItem("isLoggedIn"),
              s = localStorage.getItem("tokenExpiration");
            if (e && s) {
              const e = parseInt(s);
              e > Date.now()
                ? (c(!0), i(e))
                : (localStorage.removeItem("isLoggedIn"),
                  localStorage.removeItem("tokenExpiration"));
            }
          }, []),
          (document.body.className = t ? "darkbody" : "lightbody"),
          Object(l.jsx)("div", {
            className: "App",
            children: Object(l.jsx)(k.b, {
              children: Object(l.jsxs)(F.c, {
                children: [
                  Object(l.jsx)(F.a, {
                    path: "/",
                    exact: !0,
                    render: () =>
                      a ? Object(l.jsx)(Gs, {}) : Object(l.jsx)(ht, {}),
                  }),
                  Object(l.jsx)(F.a, {
                    path: "/LoginPage",
                    exact: !0,
                    render: () =>
                      a
                        ? Object(l.jsx)(Gs, {})
                        : Object(l.jsx)(_s, {
                            setIsLoggedIn: c,
                            setTokenExpiration: i,
                          }),
                  }),
                  Object(l.jsx)(F.a, {
                    path: "/WelcomeMessageOne",
                    exact: !0,
                    component: bt,
                  }),
                  Object(l.jsx)(F.a, {
                    path: "/WelcomeMessageTwo",
                    exact: !0,
                    component: pt,
                  }),
                  Object(l.jsx)(F.a, {
                    path: "/WelcomeMessageThree",
                    exact: !0,
                    component: gt,
                  }),
                  Object(l.jsx)(F.a, {
                    path: "/WelcomeMessageFour",
                    exact: !0,
                    component: vt,
                  }),
                  Object(l.jsx)(F.a, {
                    path: "/WelcomeMessageFive",
                    exact: !0,
                    component: St,
                  }),
                  Object(l.jsx)(F.a, {
                    path: "/WelcomeMessageNotifications",
                    exact: !0,
                    component: Lt,
                  }),
                  Object(l.jsx)(F.a, {
                    path: "/WelcomeMessageSeven",
                    exact: !0,
                    component: Bt,
                  }),
                  Object(l.jsx)(F.a, {
                    path: "/WelcomeMessageCourses",
                    exact: !0,
                    component: Pt,
                  }),
                  Object(l.jsx)(F.a, {
                    path: "/LoginPage",
                    exact: !0,
                    component: _s,
                  }),
                  Object(l.jsx)(F.a, {
                    path: "/LessonDemo",
                    exact: !0,
                    component: Ct,
                  }),
                  Object(l.jsx)(Ft, {
                    path: "/CourseMenuPage",
                    exact: !0,
                    component: Gs,
                    isLoggedIn: a,
                  }),
                  Object(l.jsx)(Ft, {
                    path: "/:courseTitle/topic/:topicNumber",
                    component: Pe,
                    isLoggedIn: a,
                  }),
                  Object(l.jsx)(Ft, {
                    path: "/:courseTitle/quiz/:topicNumber",
                    component: Is,
                    isLoggedIn: a,
                  }),
                  Object(l.jsx)(Ft, {
                    path: "/:courseTitle/start",
                    component: Ys,
                    isLoggedIn: a,
                  }),
                  Object(l.jsx)(Ft, {
                    path: "/:courseTitle/lesson/:lessonNumber",
                    component: mt,
                    isLoggedIn: a,
                  }),
                  Object(l.jsx)(F.a, {
                    path: "/LogoutMessage",
                    render: () => Object(l.jsx)(et, { setIsLoggedIn: c }),
                  }),
                ],
              }),
            }),
          })
        );
      };
      const Ut = Boolean(
        "localhost" === window.location.hostname ||
          "[::1]" === window.location.hostname ||
          window.location.hostname.match(
            /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
          )
      );
      function Rt(e, s) {
        navigator.serviceWorker
          .register(e)
          .then((e) => {
            e.onupdatefound = () => {
              const t = e.installing;
              null != t &&
                (t.onstatechange = () => {
                  "installed" === t.state &&
                    (navigator.serviceWorker.controller
                      ? (console.log(
                          "New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."
                        ),
                        s && s.onUpdate && s.onUpdate(e))
                      : (console.log("Content is cached for offline use."),
                        s && s.onSuccess && s.onSuccess(e)));
                });
            };
          })
          .catch((e) => {
            console.error("Error during service worker registration:", e);
          });
      }
      c.a.render(
        Object(l.jsx)("div", {
          children: Object(l.jsx)(u, { children: Object(l.jsx)(At, {}) }),
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
            window.addEventListener("load", () => {
              const s = "".concat("", "/service-worker.js");
              Ut
                ? (!(function (e, s) {
                    fetch(e, { headers: { "Service-Worker": "script" } })
                      .then((t) => {
                        const n = t.headers.get("content-type");
                        404 === t.status ||
                        (null != n && -1 === n.indexOf("javascript"))
                          ? navigator.serviceWorker.ready.then((e) => {
                              e.unregister().then(() => {
                                window.location.reload();
                              });
                            })
                          : Rt(e, s);
                      })
                      .catch(() => {
                        console.log(
                          "No internet connection found. App is running in offline mode."
                        );
                      });
                  })(s, e),
                  navigator.serviceWorker.ready.then(() => {
                    console.log(
                      "This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA"
                    );
                  }))
                : Rt(s, e);
            });
          }
        })();
    },
    57: function (e, s, t) {},
    59: function (e, s, t) {},
    82: function (e, s, t) {},
  },
  [[386, 1, 2]],
]);
//# sourceMappingURL=main.a55af780.chunk.js.map
