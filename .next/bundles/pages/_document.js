window.__NEXT_REGISTER_PAGE('/_document', function() {
  var comp = (module.exports = webpackJsonp(
    [1],
    {
      119: function(e, t, n) {
        e.exports = n(237);
      },
      229: function(e, t, n) {
        e.exports = n(230);
      },
      230: function(e, t, n) {
        'use strict';
        function r(e) {
          return e && e.__esModule ? e : { default: e };
        }
        Object.defineProperty(t, '__esModule', { value: !0 });
        var u = n(34),
          a = r(u),
          l = n(41),
          i = r(l),
          o = n(6),
          s = r(o),
          c = n(2),
          d = r(c),
          f = n(3),
          _ = r(f),
          p = n(9),
          h = r(p),
          m = n(231),
          y = r(m),
          v = n(10),
          k = r(v),
          E = n(0),
          g = r(E),
          x = n(235),
          P = r(x),
          T = n(119),
          N = r(T),
          b = (function(e) {
            function t() {
              return (
                (0, d.default)(this, t), (0, h.default)(this, (t.__proto__ || (0, s.default)(t)).apply(this, arguments))
              );
            }
            return (
              (0, k.default)(t, e),
              (0, _.default)(
                t,
                [
                  {
                    key: 'render',
                    value: function() {
                      return g.default.createElement(
                        'html',
                        null,
                        g.default.createElement(
                          x.Head,
                          null,
                          g.default.createElement('title', null, 'Media Impact'),
                          g.default.createElement('link', { rel: 'shortcut icon', href: '/static/c-icon-128.png' }),
                          g.default.createElement('meta', {
                            name: 'viewport',
                            content: 'initial-scale=1.0,user-scalable=no,maximum-scale=1,width=device-width'
                          }),
                          g.default.createElement(
                            'style',
                            null,
                            'body { margin: 0px ; background: #fff;} /* custom! */'
                          )
                        ),
                        g.default.createElement(
                          'body',
                          { className: 'custom_class' },
                          this.props.customValue,
                          g.default.createElement(x.Main, null),
                          g.default.createElement('script', {
                            dangerouslySetInnerHTML: { __html: this.props.localeDataScript }
                          }),
                          g.default.createElement(x.NextScript, null),
                          g.default.createElement('script', {
                            dangerouslySetInnerHTML: {
                              __html:
                                "(function(b,o,i,l,e,r){b.GoogleAnalyticsObject=l;b[l]||(b[l]=function(){(b[l].q=b[l].q||[]).push(arguments)});b[l].l=+new Date;e=o.createElement(i);r=o.getElementsByTagName(i)[0];e.src='//www.google-analytics.com/analytics.js';r.parentNode.insertBefore(e,r)}(window,document,'script','ga'));ga('create','UA-39254352-1');ga('send','pageview');"
                            }
                          })
                        )
                      );
                    }
                  }
                ],
                [
                  {
                    key: 'getInitialProps',
                    value: (function() {
                      function e(e) {
                        return n.apply(this, arguments);
                      }
                      var n = (0, i.default)(
                        a.default.mark(function e(n) {
                          var r, u, l, i, o, c, d, f, _, p;
                          return a.default.wrap(
                            function(e) {
                              for (;;)
                                switch ((e.prev = e.next)) {
                                  case 0:
                                    return (
                                      (e.next = 2),
                                      (0, y.default)(t.__proto__ || (0, s.default)(t), 'getInitialProps', this).call(
                                        this,
                                        n
                                      )
                                    );
                                  case 2:
                                    return (
                                      (r = e.sent),
                                      (u = n.req),
                                      (l = u.locale),
                                      (i = u.localeDataScript),
                                      (o = n.renderPage()),
                                      (c = o.html),
                                      (d = o.head),
                                      (f = o.errorHtml),
                                      (_ = o.chunks),
                                      (p = (0, N.default)()),
                                      e.abrupt('return', {
                                        html: c,
                                        head: d,
                                        errorHtml: f,
                                        chunks: _,
                                        styles: p,
                                        locale: l,
                                        localeDataScript: i
                                      })
                                    );
                                  case 7:
                                  case 'end':
                                    return e.stop();
                                }
                            },
                            e,
                            this
                          );
                        })
                      );
                      return e;
                    })()
                  }
                ]
              ),
              t
            );
          })(P.default);
        t.default = b;
      },
      231: function(e, t, n) {
        'use strict';
        function r(e) {
          return e && e.__esModule ? e : { default: e };
        }
        t.__esModule = !0;
        var u = n(6),
          a = r(u),
          l = n(232),
          i = r(l);
        t.default = function e(t, n, r) {
          null === t && (t = Function.prototype);
          var u = (0, i.default)(t, n);
          if (void 0 === u) {
            var l = (0, a.default)(t);
            return null === l ? void 0 : e(l, n, r);
          }
          if ('value' in u) return u.value;
          var o = u.get;
          if (void 0 !== o) return o.call(r);
        };
      },
      232: function(e, t, n) {
        e.exports = { default: n(233), __esModule: !0 };
      },
      233: function(e, t, n) {
        n(234);
        var r = n(1).Object;
        e.exports = function(e, t) {
          return r.getOwnPropertyDescriptor(e, t);
        };
      },
      234: function(e, t, n) {
        var r = n(19),
          u = n(83).f;
        n(79)('getOwnPropertyDescriptor', function() {
          return function(e, t) {
            return u(r(e), t);
          };
        });
      },
      235: function(e, t, n) {
        'use strict';
        function r(e) {
          return e && e.__esModule ? e : { default: e };
        }
        function u(e) {
          return '/' === e ? '/index.js' : e + '.js';
        }
        Object.defineProperty(t, '__esModule', { value: !0 }), (t.NextScript = t.Main = t.Head = void 0);
        var a = n(23),
          l = r(a),
          i = n(6),
          o = r(i),
          s = n(2),
          c = r(s),
          d = n(3),
          f = r(d),
          _ = n(9),
          p = r(_),
          h = n(10),
          m = r(h),
          y = n(0),
          v = r(y),
          k = n(15),
          E = r(k),
          g = n(236),
          x = r(g),
          P = n(119),
          T = r(P),
          N = (function(e) {
            function t() {
              return (
                (0, c.default)(this, t), (0, p.default)(this, (t.__proto__ || (0, o.default)(t)).apply(this, arguments))
              );
            }
            return (
              (0, m.default)(t, e),
              (0, f.default)(
                t,
                [
                  {
                    key: 'getChildContext',
                    value: function() {
                      return { _documentProps: this.props };
                    }
                  },
                  {
                    key: 'render',
                    value: function() {
                      return v.default.createElement(
                        'html',
                        null,
                        v.default.createElement(b, null),
                        v.default.createElement(
                          'body',
                          null,
                          v.default.createElement(S, null),
                          v.default.createElement(A, null)
                        )
                      );
                    }
                  }
                ],
                [
                  {
                    key: 'getInitialProps',
                    value: function(e) {
                      var t = e.renderPage,
                        n = t();
                      return {
                        html: n.html,
                        head: n.head,
                        errorHtml: n.errorHtml,
                        chunks: n.chunks,
                        styles: (0, T.default)()
                      };
                    }
                  }
                ]
              ),
              t
            );
          })(y.Component);
        (N.childContextTypes = { _documentProps: E.default.any }), (t.default = N);
        var b = (t.Head = (function(e) {
          function t() {
            return (
              (0, c.default)(this, t), (0, p.default)(this, (t.__proto__ || (0, o.default)(t)).apply(this, arguments))
            );
          }
          return (
            (0, m.default)(t, e),
            (0, f.default)(t, [
              {
                key: 'getChunkPreloadLink',
                value: function(e) {
                  var t = this.context._documentProps.__NEXT_DATA__,
                    n = t.buildStats,
                    r = t.assetPrefix,
                    u = t.buildId,
                    a = n ? n[e].hash : u;
                  return v.default.createElement('link', {
                    key: e,
                    rel: 'preload',
                    href: r + '/_next/' + a + '/' + e,
                    as: 'script'
                  });
                }
              },
              {
                key: 'getPreloadMainLinks',
                value: function() {
                  return this.context._documentProps.dev
                    ? [
                        this.getChunkPreloadLink('manifest.js'),
                        this.getChunkPreloadLink('commons.js'),
                        this.getChunkPreloadLink('main.js')
                      ]
                    : [this.getChunkPreloadLink('app.js')];
                }
              },
              {
                key: 'getPreloadDynamicChunks',
                value: function() {
                  var e = this.context._documentProps,
                    t = e.chunks,
                    n = e.__NEXT_DATA__,
                    r = n.assetPrefix,
                    u = n.buildId;
                  return t.map(function(e) {
                    return v.default.createElement('link', {
                      key: e,
                      rel: 'preload',
                      href: r + '/_next/' + u + '/webpack/chunks/' + e,
                      as: 'script'
                    });
                  });
                }
              },
              {
                key: 'render',
                value: function() {
                  var e = this.context._documentProps,
                    t = e.head,
                    n = e.styles,
                    r = e.__NEXT_DATA__,
                    a = r.pathname,
                    l = r.buildId,
                    i = r.assetPrefix,
                    o = u(a);
                  return v.default.createElement(
                    'head',
                    this.props,
                    (t || []).map(function(e, t) {
                      return v.default.cloneElement(e, { key: t });
                    }),
                    v.default.createElement('link', {
                      rel: 'preload',
                      href: i + '/_next/' + l + '/page' + o,
                      as: 'script'
                    }),
                    v.default.createElement('link', {
                      rel: 'preload',
                      href: i + '/_next/' + l + '/page/_error.js',
                      as: 'script'
                    }),
                    this.getPreloadDynamicChunks(),
                    this.getPreloadMainLinks(),
                    n || null,
                    this.props.children
                  );
                }
              }
            ]),
            t
          );
        })(y.Component));
        b.contextTypes = { _documentProps: E.default.any };
        var S = (t.Main = (function(e) {
          function t() {
            return (
              (0, c.default)(this, t), (0, p.default)(this, (t.__proto__ || (0, o.default)(t)).apply(this, arguments))
            );
          }
          return (
            (0, m.default)(t, e),
            (0, f.default)(t, [
              {
                key: 'render',
                value: function() {
                  var e = this.context._documentProps,
                    t = e.html,
                    n = e.errorHtml,
                    r = this.props.className;
                  return v.default.createElement(
                    'div',
                    { className: r },
                    v.default.createElement('div', { id: '__next', dangerouslySetInnerHTML: { __html: t } }),
                    v.default.createElement('div', { id: '__next-error', dangerouslySetInnerHTML: { __html: n } })
                  );
                }
              }
            ]),
            t
          );
        })(y.Component));
        (S.propTypes = { className: E.default.string }), (S.contextTypes = { _documentProps: E.default.any });
        var A = (t.NextScript = (function(e) {
          function t() {
            return (
              (0, c.default)(this, t), (0, p.default)(this, (t.__proto__ || (0, o.default)(t)).apply(this, arguments))
            );
          }
          return (
            (0, m.default)(t, e),
            (0, f.default)(t, [
              {
                key: 'getChunkScript',
                value: function(e) {
                  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    n = this.context._documentProps.__NEXT_DATA__,
                    r = n.buildStats,
                    u = n.assetPrefix,
                    a = n.buildId,
                    i = r ? r[e].hash : a;
                  return v.default.createElement(
                    'script',
                    (0, l.default)({ key: e, type: 'text/javascript', src: u + '/_next/' + i + '/' + e }, t)
                  );
                }
              },
              {
                key: 'getScripts',
                value: function() {
                  return this.context._documentProps.dev
                    ? [
                        this.getChunkScript('manifest.js'),
                        this.getChunkScript('commons.js'),
                        this.getChunkScript('main.js')
                      ]
                    : [this.getChunkScript('app.js', { async: !0 })];
                }
              },
              {
                key: 'getDynamicChunks',
                value: function() {
                  var e = this.context._documentProps,
                    t = e.chunks,
                    n = e.__NEXT_DATA__,
                    r = n.assetPrefix,
                    u = n.buildId;
                  return v.default.createElement(
                    'div',
                    null,
                    t.map(function(e) {
                      return v.default.createElement('script', {
                        async: !0,
                        key: e,
                        type: 'text/javascript',
                        src: r + '/_next/' + u + '/webpack/chunks/' + e
                      });
                    })
                  );
                }
              },
              {
                key: 'render',
                value: function() {
                  var e = this.context._documentProps,
                    t = e.staticMarkup,
                    n = e.__NEXT_DATA__,
                    r = e.chunks,
                    a = n.pathname,
                    l = n.buildId,
                    i = n.assetPrefix,
                    o = u(a);
                  return (
                    (n.chunks = r),
                    v.default.createElement(
                      'div',
                      null,
                      t
                        ? null
                        : v.default.createElement('script', {
                            nonce: this.props.nonce,
                            dangerouslySetInnerHTML: {
                              __html:
                                '\n          __NEXT_DATA__ = ' +
                                (0, x.default)(n) +
                                '\n          module={}\n          __NEXT_LOADED_PAGES__ = []\n          __NEXT_LOADED_CHUNKS__ = []\n\n          __NEXT_REGISTER_PAGE = function (route, fn) {\n            __NEXT_LOADED_PAGES__.push({ route: route, fn: fn })\n          }\n\n          __NEXT_REGISTER_CHUNK = function (chunkName, fn) {\n            __NEXT_LOADED_CHUNKS__.push({ chunkName: chunkName, fn: fn })\n          }\n        '
                            }
                          }),
                      v.default.createElement('script', {
                        async: !0,
                        id: '__NEXT_PAGE__' + a,
                        type: 'text/javascript',
                        src: i + '/_next/' + l + '/page' + o
                      }),
                      v.default.createElement('script', {
                        async: !0,
                        id: '__NEXT_PAGE__/_error',
                        type: 'text/javascript',
                        src: i + '/_next/' + l + '/page/_error.js'
                      }),
                      t ? null : this.getDynamicChunks(),
                      t ? null : this.getScripts()
                    )
                  );
                }
              }
            ]),
            t
          );
        })(y.Component));
        (A.propTypes = { nonce: E.default.string }), (A.contextTypes = { _documentProps: E.default.any });
      },
      236: function(e, t, n) {
        'use strict';
        function r(e) {
          return a[e];
        }
        function u(e) {
          return i[e];
        }
        var a = { '&': '\\u0026', '>': '\\u003e', '<': '\\u003c', '\u2028': '\\u2028', '\u2029': '\\u2029' },
          l = /[&><\u2028\u2029]/g;
        e.exports = function(e) {
          return JSON.stringify(e).replace(l, r);
        };
        var i = { '\u2028': '\\u2028', '\u2029': '\\u2029' },
          o = /[\u2028\u2029]/g;
        e.exports.sanitize = function(e) {
          return e.replace(o, u);
        };
      },
      237: function(e, t, n) {
        'use strict';
        function r(e) {
          return e && e.__esModule ? e : { default: e };
        }
        function u() {
          var e = (0, f.flush)(),
            t = [],
            n = !0,
            r = !1,
            u = void 0;
          try {
            for (var a, l = (0, s.default)(e); !(n = (a = l.next()).done); n = !0) {
              var o = (0, i.default)(a.value, 2),
                c = o[0],
                _ = o[1];
              t.push(
                d.default.createElement('style', {
                  id: '__' + c,
                  key: '__' + c,
                  dangerouslySetInnerHTML: { __html: _ }
                })
              );
            }
          } catch (e) {
            (r = !0), (u = e);
          } finally {
            try {
              !n && l.return && l.return();
            } finally {
              if (r) throw u;
            }
          }
          return t;
        }
        function a() {
          var e = (0, f.flush)(),
            t = '',
            n = !0,
            r = !1,
            u = void 0;
          try {
            for (var a, l = (0, s.default)(e); !(n = (a = l.next()).done); n = !0) {
              var o = (0, i.default)(a.value, 2);
              t += '<style id="__' + o[0] + '">' + o[1] + '</style>';
            }
          } catch (e) {
            (r = !0), (u = e);
          } finally {
            try {
              !n && l.return && l.return();
            } finally {
              if (r) throw u;
            }
          }
          return t;
        }
        Object.defineProperty(t, '__esModule', { value: !0 });
        var l = n(53),
          i = r(l),
          o = n(64),
          s = r(o);
        (t.default = u), (t.flushToHTML = a);
        var c = n(0),
          d = r(c),
          f = n(120);
      }
    },
    [229]
  ));
  return { page: comp.default };
});
