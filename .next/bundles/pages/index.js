window.__NEXT_REGISTER_PAGE('/', function() {
  var comp = (module.exports = webpackJsonp(
    [2],
    {
      331: function(e, t, a) {
        e.exports = a(332);
      },
      332: function(e, t, a) {
        'use strict';
        function s(e) {
          return e && e.__esModule ? e : { default: e };
        }
        Object.defineProperty(t, '__esModule', { value: !0 });
        var n = a(30),
          l = s(n),
          r = a(6),
          u = s(r),
          i = a(2),
          o = s(i),
          d = a(3),
          c = s(d),
          f = a(9),
          m = s(f),
          p = a(10),
          h = s(p),
          _ = a(17),
          g = s(_),
          v = a(123),
          x = (s(v), a(0)),
          y = s(x),
          E = a(138),
          j = s(E),
          k = a(122),
          b = s(k),
          w = a(139),
          N = a(59),
          q = a(141),
          M = a(58),
          P = a(333),
          S = s(P),
          T = a(334),
          C = s(T),
          D = a(337),
          R = s(D),
          I = a(338),
          F = s(I),
          U = a(339),
          O = s(U),
          B = a(155),
          z = s(B),
          A = (a(25),
          (function(e) {
            function t() {
              return (
                (0, o.default)(this, t), (0, m.default)(this, (t.__proto__ || (0, u.default)(t)).apply(this, arguments))
              );
            }
            return (
              (0, h.default)(t, e),
              (0, c.default)(
                t,
                [
                  {
                    key: 'render',
                    value: function() {
                      return y.default.createElement(
                        b.default,
                        null,
                        this.props.playing.track
                          ? y.default.createElement(F.default, {
                              track: this.props.playing.track,
                              user: this.props.playing.user,
                              position: this.props.playing.position
                            })
                          : null,
                        y.default.createElement(
                          'div',
                          { className: 'jsx-3999345043 app' },
                          y.default.createElement(g.default, {
                            styleId: '3999345043',
                            css: ['.app.jsx-3999345043{margin:20px;padding:20px;}']
                          }),
                          y.default.createElement(
                            'div',
                            { style: { float: 'left' }, className: 'jsx-3999345043' },
                            y.default.createElement(C.default, {
                              items: this.props.queue,
                              session: this.props.session
                            }),
                            null !== this.props.session.user ? y.default.createElement(R.default, null) : null,
                            null !== this.props.session.user ? y.default.createElement(O.default, null) : null
                          ),
                          y.default.createElement(
                            'div',
                            { style: { float: 'right', width: '150px' }, className: 'jsx-3999345043' },
                            y.default.createElement(S.default, { items: this.props.users })
                          )
                        )
                      );
                    }
                  }
                ],
                [
                  {
                    key: 'getInitialProps',
                    value: function(e) {
                      var t = (e.req, e.store);
                      e.isServer;
                      return l.default.all([
                        t.dispatch((0, N.fetchQueue)()),
                        t.dispatch((0, q.fetchUsers)()),
                        t.dispatch((0, M.fetchPlayingContext)())
                      ]);
                    }
                  }
                ]
              ),
              t
            );
          })(y.default.Component)),
          V = function(e) {
            return { playing: e.playback, queue: e.queue, users: e.users, session: e.session };
          };
        t.default = (0, j.default)(w.initStore, V, null)((0, z.default)(A));
      },
      333: function(e, t, a) {
        'use strict';
        function s(e) {
          return e && e.__esModule ? e : { default: e };
        }
        Object.defineProperty(t, '__esModule', { value: !0 });
        var n = a(17),
          l = s(n),
          r = a(0),
          u = s(r),
          i = a(25);
        t.default = function(e) {
          var t = e.items;
          return u.default.createElement(
            'div',
            { className: 'jsx-1123997634' },
            u.default.createElement(l.default, {
              styleId: '1123997634',
              css: [
                '.user-list.jsx-1123997634{list-style:none;margin:0;padding:0;}',
                '.user-list__item.jsx-1123997634{display:block;margin-bottom:0.5em;}',
                '.user-image.jsx-1123997634{border-radius:50%;}',
                '.user-name.jsx-1123997634{line-height:30px;}',
                '.media.jsx-1123997634,.media__bd.jsx-1123997634{overflow:hidden;_overflow:visible;zoom:1;}',
                '.media.jsx-1123997634 .media__img.jsx-1123997634{float:left;margin-right:10px;}',
                '.header-2.jsx-1123997634{color:#999;font-size:11px;text-transform:uppercase;}'
              ]
            }),
            u.default.createElement(
              'h2',
              { className: 'jsx-1123997634 header-2' },
              u.default.createElement(i.FormattedMessage, { id: 'online' })
            ),
            u.default.createElement(
              'ul',
              { className: 'jsx-1123997634 user-list' },
              t.map(function(e, t) {
                var a = e.display_name || e.id;
                return u.default.createElement(
                  'li',
                  { key: t, className: 'jsx-1123997634 user-list__item media' },
                  u.default.createElement(
                    'div',
                    { className: 'jsx-1123997634 media__img' },
                    u.default.createElement('img', {
                      src: (e.images && e.images.length && e.images[0].url) || '/static/user-icon.png',
                      width: '30',
                      height: '30',
                      alt: a,
                      title: a,
                      className: 'jsx-1123997634 user-image'
                    })
                  ),
                  u.default.createElement('div', { className: 'jsx-1123997634 user-name media__bd' }, a)
                );
              })
            ),
            u.default.createElement('div', { style: { clear: 'both' }, className: 'jsx-1123997634' })
          );
        };
      },
      334: function(e, t, a) {
        'use strict';
        function s(e) {
          return e && e.__esModule ? e : { default: e };
        }
        Object.defineProperty(t, '__esModule', { value: !0 });
        var n = a(6),
          l = s(n),
          r = a(2),
          u = s(r),
          i = a(3),
          o = s(i),
          d = a(9),
          c = s(d),
          f = a(10),
          m = s(f),
          p = a(17),
          h = s(p),
          _ = a(0),
          g = s(_),
          v = a(45),
          x = a(25),
          y = a(335),
          E = s(y),
          j = a(59),
          k = a(336),
          b = (function(e) {
            function t() {
              return (
                (0, u.default)(this, t), (0, c.default)(this, (t.__proto__ || (0, l.default)(t)).apply(this, arguments))
              );
            }
            return (
              (0, m.default)(t, e),
              (0, o.default)(t, [
                {
                  key: 'render',
                  value: function() {
                    var e = this,
                      t = this.props,
                      a = t.items,
                      s = t.session;
                    return g.default.createElement(
                      'div',
                      { style: { paddingBottom: '10px' } },
                      g.default.createElement(
                        'h2',
                        null,
                        g.default.createElement(x.FormattedMessage, { id: 'queue.title' })
                      ),
                      0 === a.length
                        ? g.default.createElement(
                            'p',
                            null,
                            g.default.createElement(x.FormattedMessage, { id: 'queue.empty' })
                          )
                        : g.default.createElement(
                            'table',
                            { className: 'jsx-1423284646 queue' },
                            g.default.createElement(h.default, {
                              styleId: '1423284646',
                              css: ['.queue.jsx-1423284646{max-width:550px;}']
                            }),
                            g.default.createElement(
                              'tbody',
                              { className: 'jsx-1423284646' },
                              a.map(function(t, a) {
                                return g.default.createElement(E.default, {
                                  item: t,
                                  session: s,
                                  index: a,
                                  key: a,
                                  onVoteUp: function() {
                                    return e.props.voteUp(t.id);
                                  },
                                  onRemoveItem: function() {
                                    return e.props.queueRemoveTrack(t.id);
                                  }
                                });
                              })
                            )
                          )
                    );
                  }
                }
              ]),
              t
            );
          })(g.default.PureComponent),
          w = function(e) {
            return {
              voteUp: function(t) {
                return e((0, k.voteUp)(t));
              },
              queueRemoveTrack: function(t) {
                return e((0, j.queueRemoveTrack)(t));
              }
            };
          },
          N = function(e) {
            return { queue: e.queue };
          };
        t.default = (0, v.connect)(N, w)(b);
      },
      335: function(e, t, a) {
        'use strict';
        Object.defineProperty(t, '__esModule', { value: !0 });
        var s = a(0),
          n = (function(e) {
            return e && e.__esModule ? e : { default: e };
          })(s);
        t.default = function(e) {
          var t = e.index,
            a = e.item,
            s = e.session,
            l = e.onRemoveItem,
            r = e.onVoteUp,
            u =
              a.voters &&
              s.user &&
              0 ===
                a.voters.filter(function(e) {
                  return e.id === s.user.id;
                }).length
                ? n.default.createElement('button', { onClick: r }, '▲')
                : null;
          return n.default.createElement(
            'tr',
            null,
            n.default.createElement(
              'td',
              { style: { paddingRight: '10px' } },
              n.default.createElement('img', { src: a.track.album.images[2].url, width: '40', height: '40' })
            ),
            n.default.createElement('td', { style: { paddingRight: '10px' } }, t + 1),
            n.default.createElement('td', { style: { paddingRight: '10px' } }, a.track.name),
            n.default.createElement(
              'td',
              { style: { paddingRight: '10px' } },
              a.track.artists
                .map(function(e) {
                  return e.name;
                })
                .join(', ')
            ),
            n.default.createElement(
              'td',
              { style: { paddingRight: '10px' } },
              a.user && (a.user.display_name || a.user.id)
            ),
            n.default.createElement(
              'td',
              null,
              a.user && s.user && a.user.id === s.user.id
                ? n.default.createElement(
                    'button',
                    {
                      onClick: function() {
                        l(a.id);
                      }
                    },
                    'X'
                  )
                : u
            ),
            n.default.createElement(
              'td',
              null,
              a.voters && a.voters.length > 0
                ? n.default.createElement('span', null, 1 === a.voters.length ? '1 vote' : a.voters.length + ' votes')
                : ''
            )
          );
        };
      },
      336: function(e, t, a) {
        'use strict';
        Object.defineProperty(t, '__esModule', { value: !0 }), (t.voteUpSuccess = t.voteUp = void 0);
        var s = a(4),
          n = (function(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e) for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && (t[a] = e[a]);
            return (t.default = e), t;
          })(s);
        (t.voteUp = function(e) {
          return { type: n.VOTE_UP, id: e };
        }),
          (t.voteUpSuccess = function() {
            return { type: n.VOTE_UP_SUCCESS };
          });
      },
      337: function(e, t, a) {
        'use strict';
        function s(e) {
          return e && e.__esModule ? e : { default: e };
        }
        Object.defineProperty(t, '__esModule', { value: !0 });
        var n = a(6),
          l = s(n),
          r = a(2),
          u = s(r),
          i = a(3),
          o = s(i),
          d = a(9),
          c = s(d),
          f = a(10),
          m = s(f),
          p = a(17),
          h = s(p),
          _ = a(0),
          g = s(_),
          v = a(45),
          x = a(25),
          y = a(154),
          E = a(59),
          j = (function(e) {
            function t() {
              return (
                (0, u.default)(this, t), (0, c.default)(this, (t.__proto__ || (0, l.default)(t)).apply(this, arguments))
              );
            }
            return (
              (0, m.default)(t, e),
              (0, o.default)(t, [
                {
                  key: 'render',
                  value: function() {
                    var e = this,
                      t = this.props,
                      a = t.results,
                      s = t.focus;
                    return g.default.createElement(
                      'ul',
                      { className: 'jsx-407124332 add-to-queue__search-results' },
                      g.default.createElement(h.default, {
                        styleId: '407124332',
                        css: [
                          '.add-to-queue__search-results.jsx-407124332{border:1px solid #999;list-style:none;margin:0;padding:0;}',
                          '.add-to-queue__search-results-item.jsx-407124332{padding:5px 0 5px 5px;}',
                          '.add-to-queue__search-results-item--focused.jsx-407124332{background-color:#eee;}'
                        ]
                      }),
                      a.map(function(t, a) {
                        var n = s === a,
                          l =
                            'add-to-queue__search-results-item' +
                            (n ? ' add-to-queue__search-results-item--focused' : '');
                        return g.default.createElement(
                          'li',
                          {
                            key: t.id,
                            onClick: function() {
                              return e.props.onSelect(t.id);
                            },
                            className: 'jsx-407124332 ' + (l || '')
                          },
                          t.name,
                          ' - ',
                          t.artists[0].name
                        );
                      })
                    );
                  }
                }
              ]),
              t
            );
          })(_.Component),
          k = (function(e) {
            function t() {
              var e, a, s, n;
              (0, u.default)(this, t);
              for (var r = arguments.length, i = Array(r), o = 0; o < r; o++) i[o] = arguments[o];
              return (
                (a = s = (0, c.default)(this, (e = t.__proto__ || (0, l.default)(t)).call.apply(e, [this].concat(i)))),
                (s.state = { text: s.props.text || '', focus: -1 }),
                (s.handleChange = function(e) {
                  var t = e.target.value;
                  s.setState({ text: t }),
                    '' !== t ? s.props.searchTracks(t) : (s.setState({ focus: -1 }), s.props.searchTracksReset());
                }),
                (s.handleSelectElement = function(e) {
                  s.setState({ text: '' }), s.props.queueTrack(e), s.props.searchTracksReset();
                }),
                (s.handleBlur = function(e) {}),
                (s.handleFocus = function(e) {
                  '' !== e.target.value && s.props.searchTracks(e.target.value);
                }),
                (s.handleKeyDown = function(e) {
                  switch (e.keyCode) {
                    case 38:
                      s.setState({ focus: s.state.focus - 1 });
                      break;
                    case 40:
                      s.setState({ focus: s.state.focus + 1 });
                      break;
                    case 13:
                      var t = !1;
                      if (-1 !== s.state.focus) s.props.queueTrack(s.props.search.results[s.state.focus].id), (t = !0);
                      else {
                        var a = e.target.value.trim();
                        0 !== a.length && (s.props.queueTrack(a), (t = !0));
                      }
                      t && (s.setState({ text: '' }), s.props.searchTracksReset(), s.setState({ focus: -1 }));
                  }
                }),
                (n = a),
                (0, c.default)(s, n)
              );
            }
            return (
              (0, m.default)(t, e),
              (0, o.default)(t, [
                {
                  key: 'render',
                  value: function() {
                    var e = this.props.intl.formatMessage({ id: 'queue.add' }),
                      t = this.props.search.results;
                    return g.default.createElement(
                      'div',
                      { onBlur: this.handleBlur, className: 'jsx-3496109256 add-to-queue' },
                      g.default.createElement(h.default, {
                        styleId: '3496109256',
                        css: ['.add-to-queue__input.jsx-3496109256{padding:5px;width:400px;}']
                      }),
                      g.default.createElement('input', {
                        placeholder: e,
                        value: this.state.text,
                        onChange: this.handleChange,
                        onKeyDown: this.handleKeyDown,
                        onFocus: this.handleFocus,
                        className: 'jsx-3496109256 add-to-queue__input'
                      }),
                      t &&
                        g.default.createElement(j, {
                          results: t,
                          onSelect: this.handleSelectElement,
                          focus: this.state.focus
                        })
                    );
                  }
                }
              ]),
              t
            );
          })(_.Component),
          b = function(e) {
            return {
              queueTrack: function(t) {
                return e((0, E.queueTrack)(t));
              },
              searchTracks: function(t) {
                return e((0, y.searchTracks)(t));
              },
              searchTracksReset: function() {
                return e((0, y.searchTracksReset)());
              }
            };
          },
          w = function(e) {
            return { search: e.search };
          };
        t.default = (0, v.connect)(w, b)((0, x.injectIntl)(k));
      },
      338: function(e, t, a) {
        'use strict';
        function s(e) {
          return e && e.__esModule ? e : { default: e };
        }
        Object.defineProperty(t, '__esModule', { value: !0 });
        var n = a(6),
          l = s(n),
          r = a(2),
          u = s(r),
          i = a(3),
          o = s(i),
          d = a(9),
          c = s(d),
          f = a(10),
          m = s(f),
          p = a(17),
          h = s(p),
          _ = a(0),
          g = s(_),
          v = (function(e) {
            function t() {
              (0, u.default)(this, t);
              var e = (0, c.default)(this, (t.__proto__ || (0, l.default)(t)).call(this));
              return (
                (e.state = { start: Date.now(), currentPosition: 0 }),
                (e.timer = null),
                (e.tick = function() {
                  e.setState({ currentPosition: Date.now() - e.state.start + (e.props.position || 0) });
                }),
                e
              );
            }
            return (
              (0, m.default)(t, e),
              (0, o.default)(t, [
                {
                  key: 'componentWillReceiveProps',
                  value: function(e) {
                    (this.props.position === e.position && this.props.track === e.track) ||
                      this.setState({ start: Date.now(), currentPosition: 0 });
                  }
                },
                {
                  key: 'componentDidMount',
                  value: function() {
                    this.timer = setInterval(this.tick, 300);
                  }
                },
                {
                  key: 'componentWillUnmount',
                  value: function() {
                    clearInterval(this.timer);
                  }
                },
                {
                  key: 'render',
                  value: function() {
                    var e = +((100 * this.state.currentPosition) / this.props.track.duration_ms).toFixed(2) + '%',
                      t = this.props.user.display_name || this.props.user.id;
                    return g.default.createElement(
                      'div',
                      { className: 'jsx-2557752171 now-playing' },
                      g.default.createElement(h.default, {
                        styleId: '2557752171',
                        css: [
                          '.now-playing.jsx-2557752171{background-color:#424d58;color:#fff;height:250px;position:relative;width:100%;}',
                          '.now-playing__text.jsx-2557752171{padding:40px;}',
                          '.now-playing__bd.jsx-2557752171{padding-left:30px;}',
                          '.now-playing__track-name.jsx-2557752171{font-size:2em;padding-top:1.2em;}',
                          '.now-playing__artist-name.jsx-2557752171{font-size:1.2em;padding-bottom:2em;padding-top:0.5em;}',
                          '.now-playing__user.jsx-2557752171{padding-top:0.5em;}',
                          '.now-playing__progress_bar.jsx-2557752171{bottom:0;background-color:#D00;height:5px;position:absolute;width:100%;}',
                          '.media.jsx-2557752171,.media__bd.jsx-2557752171{overflow:hidden;_overflow:visible;zoom:1;}',
                          '.media.jsx-2557752171 .media__img.jsx-2557752171{float:left;margin-right:10px;}',
                          '.user-image.jsx-2557752171{border-radius:50%;}',
                          '.user-name.jsx-2557752171{line-height:30px;}'
                        ]
                      }),
                      g.default.createElement(
                        'div',
                        { className: 'jsx-2557752171 now-playing__text media' },
                        g.default.createElement(
                          'div',
                          { className: 'jsx-2557752171 media__img' },
                          g.default.createElement('img', {
                            src: this.props.track.album.images[1].url,
                            width: '170',
                            height: '170',
                            className: 'jsx-2557752171'
                          })
                        ),
                        g.default.createElement(
                          'div',
                          { className: 'jsx-2557752171 now-playing__bd media__bd' },
                          g.default.createElement(
                            'div',
                            { className: 'jsx-2557752171 now-playing__track-name' },
                            this.props.track.name
                          ),
                          g.default.createElement(
                            'div',
                            { className: 'jsx-2557752171 now-playing__artist-name' },
                            this.props.track.artists
                              .map(function(e) {
                                return e.name;
                              })
                              .join(', ')
                          ),
                          g.default.createElement(
                            'div',
                            { className: 'jsx-2557752171 media__img' },
                            g.default.createElement('img', {
                              src:
                                (this.props.user.images &&
                                  this.props.user.images.length &&
                                  this.props.user.images[0].url) ||
                                '/static/user-icon.png',
                              width: '30',
                              height: '30',
                              alt: t,
                              title: t,
                              className: 'jsx-2557752171 user-image'
                            })
                          ),
                          g.default.createElement('div', { className: 'jsx-2557752171 user-name media__bd' }, t)
                        )
                      ),
                      g.default.createElement(
                        'div',
                        { className: 'jsx-2557752171 now-playing__progress' },
                        g.default.createElement('div', {
                          style: { width: e },
                          className: 'jsx-2557752171 now-playing__progress_bar'
                        })
                      )
                    );
                  }
                }
              ]),
              t
            );
          })(g.default.PureComponent);
        t.default = v;
      },
      339: function(e, t, a) {
        'use strict';
        function s(e) {
          return e && e.__esModule ? e : { default: e };
        }
        Object.defineProperty(t, '__esModule', { value: !0 });
        var n = a(6),
          l = s(n),
          r = a(2),
          u = s(r),
          i = a(3),
          o = s(i),
          d = a(9),
          c = s(d),
          f = a(10),
          m = s(f),
          p = a(17),
          h = s(p),
          _ = a(0),
          g = s(_),
          v = a(45),
          x = a(25),
          y = a(135),
          E = a(88),
          j = a(140),
          k = (function(e) {
            function t() {
              return (
                (0, u.default)(this, t), (0, c.default)(this, (t.__proto__ || (0, l.default)(t)).apply(this, arguments))
              );
            }
            return (
              (0, m.default)(t, e),
              (0, o.default)(t, [
                {
                  key: 'render',
                  value: function() {
                    var e = this.props,
                      t = e.devices,
                      a = e.isFetching,
                      s = e.fetchAvailableDevices,
                      n = e.transferPlaybackToDevice;
                    return g.default.createElement(
                      'div',
                      { style: { paddingBottom: '10px' } },
                      g.default.createElement(
                        'h2',
                        null,
                        g.default.createElement(x.FormattedMessage, { id: 'devices.title' })
                      ),
                      g.default.createElement(h.default, { styleId: y.ButtonStyle.__hash, css: y.ButtonStyle }),
                      g.default.createElement(h.default, { styleId: y.ButtonDarkStyle.__hash, css: y.ButtonDarkStyle }),
                      g.default.createElement(
                        'button',
                        {
                          className: 'btn btn--dark',
                          disabled: a,
                          onClick: function() {
                            s();
                          }
                        },
                        g.default.createElement(x.FormattedMessage, { id: 'devices.fetch' })
                      ),
                      0 === t.length
                        ? g.default.createElement(
                            'p',
                            null,
                            g.default.createElement(x.FormattedMessage, { id: 'devices.empty' })
                          )
                        : g.default.createElement(
                            'table',
                            null,
                            g.default.createElement(
                              'tbody',
                              null,
                              t.map(function(e) {
                                return g.default.createElement(
                                  'tr',
                                  null,
                                  g.default.createElement(
                                    'td',
                                    null,
                                    e.is_active
                                      ? g.default.createElement('strong', null, 'Active ->')
                                      : g.default.createElement(
                                          'button',
                                          {
                                            onClick: function() {
                                              n(e.id);
                                            }
                                          },
                                          g.default.createElement(x.FormattedMessage, { id: 'devices.transfer' })
                                        )
                                  ),
                                  g.default.createElement('td', null, e.name),
                                  g.default.createElement('td', null, e.type),
                                  g.default.createElement('td', null, e.volume)
                                );
                              })
                            )
                          )
                    );
                  }
                }
              ]),
              t
            );
          })(g.default.PureComponent),
          b = function(e) {
            return {
              fetchAvailableDevices: function(t) {
                return e((0, E.fetchAvailableDevices)(t));
              },
              transferPlaybackToDevice: function(t) {
                return e((0, E.transferPlaybackToDevice)(t));
              }
            };
          },
          w = function(e) {
            return { isFetching: (0, j.getIsFetchingDevices)(e), devices: (0, j.getDevices)(e) };
          };
        t.default = (0, v.connect)(w, b)(k);
      }
    },
    [331]
  ));
  return { page: comp.default };
});
