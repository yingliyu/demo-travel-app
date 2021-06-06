!(function (e) {
  var t,
    n,
    o,
    a,
    i,
    d,
    l =
      '<svg><symbol id="travel-back" viewBox="0 0 1024 1024"><path d="M744.336696 1018.434783c-8.147478 0-16.294957-2.960696-22.728348-8.926609L212.390957 536.464696C205.601391 530.142609 201.728 521.282783 201.728 512s3.85113-18.142609 10.662957-24.464696l509.217391-473.043478c13.445565-12.510609 34.637913-11.798261 47.170783 1.736348 12.55513 13.512348 11.776 34.637913-1.736348 47.193043L284.204522 512l482.860522 448.578783c13.512348 12.53287 14.313739 33.680696 1.736348 47.170783C762.234435 1014.850783 753.307826 1018.434783 744.336696 1018.434783z"  ></path></symbol><symbol id="travel-search" viewBox="0 0 1024 1024"><path d="M935.12 968a32 32 0 0 1-22.64-9.36L684.32 730a378.08 378.08 0 0 1-246.08 90.16 382.08 382.08 0 1 1 381.36-382.08 385.04 385.04 0 0 1-9.44 84.88 32 32 0 0 1-62.4-14.16 317.36 317.36 0 1 0-309.52 247.36 314.88 314.88 0 0 0 224-93.12 32 32 0 0 1 45.28 0l249.84 250.32a32 32 0 0 1-22.24 54.64z"  ></path><path d="M736.88 608m-32 0a32 32 0 1 0 64 0 32 32 0 1 0-64 0Z"  ></path></symbol><symbol id="travel-arrowdown" viewBox="0 0 1024 1024"><path d="M987.2 397.248L553.344 831.072a64 64 0 0 1-90.528 0L29.056 397.248A64 64 0 0 1 74.304 288h867.616a64 64 0 0 1 45.248 109.248z"  ></path></symbol></svg>',
    c = (c = document.getElementsByTagName("script"))[
      c.length - 1
    ].getAttribute("data-injectcss");
  if (c && !e.__iconfont__svg__cssinject__) {
    e.__iconfont__svg__cssinject__ = !0;
    try {
      document.write(
        "<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>"
      );
    } catch (e) {
      console && console.log(e);
    }
  }
  function s() {
    i || ((i = !0), o());
  }
  (t = function () {
    var e, t, n;
    ((n = document.createElement("div")).innerHTML = l),
      (l = null),
      (t = n.getElementsByTagName("svg")[0]) &&
        (t.setAttribute("aria-hidden", "true"),
        (t.style.position = "absolute"),
        (t.style.width = 0),
        (t.style.height = 0),
        (t.style.overflow = "hidden"),
        (e = t),
        (n = document.body).firstChild
          ? (t = n.firstChild).parentNode.insertBefore(e, t)
          : n.appendChild(e));
  }),
    document.addEventListener
      ? ~["complete", "loaded", "interactive"].indexOf(document.readyState)
        ? setTimeout(t, 0)
        : ((n = function () {
            document.removeEventListener("DOMContentLoaded", n, !1), t();
          }),
          document.addEventListener("DOMContentLoaded", n, !1))
      : document.attachEvent &&
        ((o = t),
        (a = e.document),
        (i = !1),
        (d = function () {
          try {
            a.documentElement.doScroll("left");
          } catch (e) {
            return void setTimeout(d, 50);
          }
          s();
        })(),
        (a.onreadystatechange = function () {
          "complete" == a.readyState && ((a.onreadystatechange = null), s());
        }));
})(window);
