// Generated by BUCKLESCRIPT VERSION 2.1.0, PLEASE EDIT WITH CARE
'use strict';

var Css         = require("bs-css/src/Css.js");
var Link        = require("../bindings/gatsby/link.js");
var Utils       = require("../utils/Utils.js");
var Helpers     = require("../utils/Helpers.js");
var ReasonReact = require("reason-react/src/ReasonReact.js");

var colors = /* array */[
  "#323299",
  "#3f3fbf",
  "#324c99",
  "#3f59bf",
  "#326599",
  "#3f72bf",
  "#327f99",
  "#3f8cbf",
  "#329932",
  "#32994c",
  "#329966",
  "#32997f",
  "#329999",
  "#3fa5bf",
  "#4c3299",
  "#593fbf",
  "#5959a5",
  "#6565cc",
  "#5972a5",
  "#657fcc",
  "#598ca5",
  "#6598cc",
  "#4c9932",
  "#59a559",
  "#59a572",
  "#59a58c",
  "#59a5a5",
  "#65b2cc",
  "#653299",
  "#723fbf",
  "#7259a5",
  "#7f65cc",
  "#669932",
  "#72a559",
  "#7f3299",
  "#8c3fbf",
  "#8c59a5",
  "#9865cc",
  "#7f9932",
  "#8ca559",
  "#993232",
  "#99324c",
  "#993266",
  "#99327f",
  "#993299",
  "#a53fbf",
  "#994c32",
  "#a55959",
  "#a55972",
  "#a5598c",
  "#a559a5",
  "#b265cc",
  "#996632",
  "#a57259",
  "#997f32",
  "#a58c59",
  "#999932",
  "#a5a559",
  "#bf3f3f",
  "#bf3f59",
  "#bf3f72",
  "#bf3f8c",
  "#bf3fa5",
  "#bf3fbf",
  "#bf593f",
  "#cc6565",
  "#cc657f",
  "#cc6599",
  "#cc65b2",
  "#cc65cc",
  "#bf723f",
  "#cc7f65",
  "#bf8c3f",
  "#cc9965",
  "#bfa53f",
  "#ccb265"
];

var style = Css.style(/* :: */[
      Css.display(/* InlineBlock */11),
      /* :: */[
        Css.opacity(0.75),
        /* :: */[
          Css.fontSize(Css.em(0.85)),
          /* :: */[
            Css.marginLeft(Css.em(0.5)),
            /* :: */[
              Css.unsafe("whiteSpace", "nowrap"),
              /* :: */[
                Css.backgroundColor(Css.hex("fff3")),
                /* :: */[
                  Css.unsafe("padding", "0 1ex"),
                  /* :: */[
                    Css.textDecoration(/* None */0),
                    /* :: */[
                      Css.hover(/* :: */[
                            Css.opacity(1),
                            /* :: */[
                              Css.unsafe("textDecoration", "underline"),
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
        ]
      ]
    ]);

function makeStyle(name) {
  return {
          borderColor: Utils.selectColor(colors, name)
        };
}

var component = ReasonReact.statelessComponent("Tag");

function make(name, _) {
  var newrecord = component.slice();
  newrecord[/* render */9] = (function () {
      return ReasonReact.element(/* None */0, /* None */0, Link.make("/keywords/" + name, /* Some */[style], /* None */0, /* array */[Helpers.text(name)]));
    });
  return newrecord;
}

exports.colors    = colors;
exports.style     = style;
exports.makeStyle = makeStyle;
exports.component = component;
exports.make      = make;
/* style Not a pure module */
