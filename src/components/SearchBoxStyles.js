// Generated by BUCKLESCRIPT VERSION 2.1.0, PLEASE EDIT WITH CARE
'use strict';

var Css   = require("bs-css/src/Css.js");
var Theme = require("../styles/Theme.js");

var root = Css.style(/* :: */[
      Css.position(/* Relative */1),
      /* :: */[
        Css.flex(1),
        /* [] */0
      ]
    ]);

var fakeInput = Css.style(/* :: */[
      Css.display(/* Flex */3),
      /* :: */[
        Css.backgroundColor(Theme.Panel[/* Color */0][/* background */0]),
        /* :: */[
          Css.fontSize(Css.em(1.2)),
          /* :: */[
            Css.width(Css.pct(100)),
            /* :: */[
              Css.alignItems(/* Center */2),
              /* :: */[
                Css.unsafe("padding", "0 .5em"),
                /* [] */0
              ]
            ]
          ]
        ]
      ]
    ]);

var searchIcon = Css.style(/* :: */[
      Css.unsafe("fill", Theme.Color[/* primary */0]),
      /* :: */[
        Css.opacity(0.75),
        /* :: */[
          Css.margin(Css.em(0.5)),
          /* [] */0
        ]
      ]
    ]);

var input = Css.style(/* :: */[
      Css.unsafe("padding", ".75em .25em"),
      /* :: */[
        Css.width(Css.pct(100)),
        /* :: */[
          Css.color(Theme.Color[/* primary */0]),
          /* :: */[
            Css.selector("::placeholder", /* :: */[
                  Css.color(Theme.Color[/* primary */0]),
                  /* [] */0
                ]),
            /* [] */0
          ]
        ]
      ]
    ]);

var results = Css.style(/* :: */[
      Css.position(/* Absolute */2),
      /* :: */[
        Css.zIndex(10),
        /* :: */[
          Css.unsafe("marginTop", ".5ex"),
          /* :: */[
            Css.width(Css.pct(100)),
            /* :: */[
              Css.boxShadow(Theme.Shadow[/* overlay */0]),
              /* :: */[
                Css.color(Theme.Color[/* text */4]),
                /* :: */[
                  Css.selector("& > div", /* :: */[
                        Css.margin(Css.zero),
                        /* :: */[
                          Css.borderTop(Css.px(1), /* Solid */2, Theme.Color[/* subtleBorder */6]),
                          /* [] */0
                        ]
                      ]),
                  /* [] */0
                ]
              ]
            ]
          ]
        ]
      ]
    ]);

exports.root       = root;
exports.fakeInput  = fakeInput;
exports.searchIcon = searchIcon;
exports.input      = input;
exports.results    = results;
/* root Not a pure module */
