window.__NEXT_REGISTER_PAGE('/about', function() {
  var comp = (module.exports = webpackJsonp(
    [5],
    {
      249: function(e, t, a) {
        e.exports = a(250);
      },
      250: function(e, t, a) {
        'use strict';
        function s(e) {
          return e && e.__esModule ? e : { default: e };
        }
        Object.defineProperty(t, '__esModule', { value: !0 });
        var n = a(17),
          l = s(n),
          c = a(0),
          r = s(c),
          u = a(122),
          o = s(u),
          d = a(138),
          f = s(d),
          p = a(139),
          i = a(155),
          m = s(i),
          h = function() {
            return r.default.createElement(
              o.default,
              null,
              r.default.createElement(l.default, {
                styleId: '2365714594',
                css: ['p.jsx-2365714594{margin:20px;padding:20px;}']
              }),
              r.default.createElement(
                'p',
                { className: 'jsx-2365714594' },
                'This is a personal project by ',
                r.default.createElement(
                  'a',
                  { href: 'https://jmperezperez.com', className: 'jsx-2365714594' },
                  'José M. Pérez'
                ),
                ' that uses',
                ' ',
                r.default.createElement(
                  'a',
                  { href: 'https://github.com/zeit/next.js', className: 'jsx-2365714594' },
                  'Next.js'
                ),
                ' and',
                ' ',
                r.default.createElement(
                  'a',
                  {
                    href: 'https://developer.spotify.com/web-api/web-api-connect-endpoint-reference/',
                    className: 'jsx-2365714594'
                  },
                  "Spotify's Connect API endpoints."
                ),
                '. You can see the source code ',
                r.default.createElement(
                  'a',
                  { href: 'https://github.com/JMPerez/c', className: 'jsx-2365714594' },
                  'on GitHub'
                ),
                '.'
              )
            );
          };
        t.default = (0, f.default)(p.initStore, null, null)((0, m.default)(h));
      }
    },
    [249]
  ));
  return { page: comp.default };
});
