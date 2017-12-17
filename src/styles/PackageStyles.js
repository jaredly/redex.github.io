// Generated by BUCKLESCRIPT VERSION 2.1.0, PLEASE EDIT WITH CARE
'use strict';

var Block  = require("bs-platform/lib/js/block.js");
var Colors = require("./Colors.js");
var Glamor = require("bs-glamor/src/glamor.js");

var header = Glamor.css(/* :: */[
      Glamor.background(Colors.Inverted[/* background */0]),
      /* :: */[
        Glamor.color(Colors.Inverted[/* text */2]),
        /* :: */[
          Glamor.padding("2em 4em"),
          /* [] */0
        ]
      ]
    ]);

var unpublished = Glamor.css(/* :: */[
      Glamor.background(Colors.Inverted[/* crosshatchBackground */1]),
      /* [] */0
    ]);

var props = Glamor.css(/* :: */[
      Glamor.display("flex"),
      /* :: */[
        Glamor.justifyContent("flex-end"),
        /* :: */[
          Glamor.alignItems("baseline"),
          /* :: */[
            /* Selector */Block.__(1, [
                "& > *",
                /* :: */[
                  Glamor.marginLeft("1em"),
                  /* [] */0
                ]
              ]),
            /* [] */0
          ]
        ]
      ]
    ]);

var title = Glamor.css(/* :: */[
      Glamor.padding("1em 0 0"),
      /* :: */[
        Glamor.display("flex"),
        /* :: */[
          Glamor.alignItems("baseline"),
          /* [] */0
        ]
      ]
    ]);

var owner = Glamor.css(/* :: */[
      Glamor.display("block"),
      /* :: */[
        Glamor.opacity(".75"),
        /* :: */[
          Glamor.fontSize(".85em"),
          /* :: */[
            Glamor.fontVariant("small-caps"),
            /* [] */0
          ]
        ]
      ]
    ]);

var name = Glamor.css(/* :: */[
      Glamor.fontSize("1.5rem"),
      /* :: */[
        Glamor.fontWeight("bold"),
        /* :: */[
          Glamor.textDecoration("none"),
          /* :: */[
            Glamor.lineHeight("1.45"),
            /* :: */[
              /* Selector */Block.__(1, [
                  "&:hover",
                  /* :: */[
                    Glamor.textDecoration("underline"),
                    /* [] */0
                  ]
                ]),
              /* [] */0
            ]
          ]
        ]
      ]
    ]);

var fields = Glamor.css(/* [] */0);

var version = Glamor.css(/* :: */[
      Glamor.fontSize(".85em"),
      /* :: */[
        Glamor.fontStyle("italic"),
        /* :: */[
          Glamor.marginLeft(".5em"),
          /* :: */[
            Glamor.opacity(".75"),
            /* [] */0
          ]
        ]
      ]
    ]);

var unpublishedLabel = Glamor.css(/* :: */[
      Glamor.fontSize(".85em"),
      /* :: */[
        Glamor.fontStyle("italic"),
        /* :: */[
          Glamor.marginLeft(".5em"),
          /* :: */[
            Glamor.color(Colors.bad),
            /* :: */[
              Glamor.background("white"),
              /* :: */[
                Glamor.padding(".2ex 1ex"),
                /* :: */[
                  Glamor.borderRadius("1.4ex"),
                  /* :: */[
                    Glamor.alignSelf("center"),
                    /* [] */0
                  ]
                ]
              ]
            ]
          ]
        ]
      ]
    ]);

var description = Glamor.css(/* :: */[
      Glamor.marginBottom(".5em"),
      /* :: */[
        Glamor.textOverflow("ellipsis"),
        /* :: */[
          Glamor.overflow("hidden"),
          /* :: */[
            Glamor.opacity(".75"),
            /* [] */0
          ]
        ]
      ]
    ]);

var tags = Glamor.css(/* :: */[
      /* Selector */Block.__(1, [
          "& span",
          /* :: */[
            Glamor.fontSize(".85em"),
            /* :: */[
              Glamor.background(Colors.Inverted[/* block */3]),
              /* :: */[
                Glamor.padding("0 1ex"),
                /* :: */[
                  Glamor.opacity("1"),
                  /* :: */[
                    /* Selector */Block.__(1, [
                        "&:hover",
                        /* :: */[
                          Glamor.background(Colors.Inverted[/* highlightedBlock */4]),
                          /* :: */[
                            Glamor.cursor("pointer"),
                            /* [] */0
                          ]
                        ]
                      ]),
                    /* [] */0
                  ]
                ]
              ]
            ]
          ]
        ]),
      /* [] */0
    ]);

var tagsIcon = Glamor.css(/* :: */[
      Glamor.opacity(".25"),
      /* [] */0
    ]);

var right = Glamor.css(/* :: */[
      Glamor.textAlign("right"),
      /* [] */0
    ]);

var updated = Glamor.css(/* :: */[
      Glamor.fontSize(".85em"),
      /* :: */[
        Glamor.whiteSpace("nowrap"),
        /* [] */0
      ]
    ]);

var license = Glamor.css(/* :: */[
      Glamor.fontSize(".85em"),
      /* :: */[
        Glamor.whiteSpace("nowrap"),
        /* :: */[
          Glamor.border("1px solid " + Colors.Inverted[/* text */2]),
          /* :: */[
            Glamor.padding("0 1ex"),
            /* [] */0
          ]
        ]
      ]
    ]);

var nolicense = Glamor.css(/* :: */[
      Glamor.color(Colors.bad),
      /* :: */[
        Glamor.fontSize(".85em"),
        /* :: */[
          Glamor.whiteSpace("nowrap"),
          /* :: */[
            Glamor.fontWeight("bold"),
            /* :: */[
              Glamor.background(Colors.Inverted[/* text */2]),
              /* :: */[
                Glamor.padding("0 1ex"),
                /* :: */[
                  Glamor.borderRadius("1.4ex"),
                  /* [] */0
                ]
              ]
            ]
          ]
        ]
      ]
    ]);

var stars = Glamor.css(/* :: */[
      Glamor.fontSize(".85em"),
      /* :: */[
        Glamor.whiteSpace("nowrap"),
        /* [] */0
      ]
    ]);

var starIcon = Glamor.css(/* :: */[
      Glamor.marginLeft(".25em"),
      /* :: */[
        Glamor.transform("translateY(-1px)"),
        /* :: */[
          Glamor.opacity(".5"),
          /* [] */0
        ]
      ]
    ]);

var links = Glamor.css(/* :: */[
      Glamor.marginTop("3em"),
      /* :: */[
        /* Selector */Block.__(1, [
            "& > a",
            /* :: */[
              Glamor.color("white"),
              /* :: */[
                Glamor.textDecoration("none"),
                /* :: */[
                  Glamor.marginRight("2em"),
                  /* :: */[
                    Glamor.fontVariant("small-caps"),
                    /* :: */[
                      /* Selector */Block.__(1, [
                          "&:hover",
                          /* :: */[
                            Glamor.textDecoration("underline"),
                            /* [] */0
                          ]
                        ]),
                      /* :: */[
                        /* Selector */Block.__(1, [
                            "&:not([href])",
                            /* :: */[
                              Glamor.textDecoration("none"),
                              /* :: */[
                                Glamor.opacity(".25"),
                                /* [] */0
                              ]
                            ]
                          ]),
                        /* [] */0
                      ]
                    ]
                  ]
                ]
              ]
            ]
          ]),
        /* [] */0
      ]
    ]);

var readme = Glamor.css(/* :: */[
      Glamor.background("white"),
      /* :: */[
        Glamor.padding("2em 4em"),
        /* :: */[
          /* Selector */Block.__(1, [
              "& h1",
              /* :: */[
                Glamor.fontSize("2.25rem"),
                /* :: */[
                  Glamor.fontWeight("bold"),
                  /* :: */[
                    Glamor.lineHeight("1.1"),
                    /* :: */[
                      Glamor.marginBottom("1.45rem"),
                      /* [] */0
                    ]
                  ]
                ]
              ]
            ]),
          /* :: */[
            /* Selector */Block.__(1, [
                "& h2",
                /* :: */[
                  Glamor.fontSize("1.62671rem"),
                  /* :: */[
                    Glamor.fontWeight("bold"),
                    /* :: */[
                      Glamor.lineHeight("1.1"),
                      /* :: */[
                        Glamor.marginBottom("1.45rem"),
                        /* [] */0
                      ]
                    ]
                  ]
                ]
              ]),
            /* :: */[
              /* Selector */Block.__(1, [
                  "& h3",
                  /* :: */[
                    Glamor.fontSize("1.38316rem"),
                    /* :: */[
                      Glamor.fontWeight("bold"),
                      /* :: */[
                        Glamor.lineHeight("1.1"),
                        /* :: */[
                          Glamor.marginBottom("1.45rem"),
                          /* [] */0
                        ]
                      ]
                    ]
                  ]
                ]),
              /* :: */[
                /* Selector */Block.__(1, [
                    "& p",
                    /* :: */[
                      Glamor.marginBottom("1.45rem"),
                      /* :: */[
                        /* Selector */Block.__(1, [
                            "& *:last-child",
                            /* :: */[
                              Glamor.marginBottom("0"),
                              /* [] */0
                            ]
                          ]),
                        /* [] */0
                      ]
                    ]
                  ]),
                /* :: */[
                  /* Selector */Block.__(1, [
                      "& b, & strong",
                      /* :: */[
                        Glamor.fontWeight("bold"),
                        /* [] */0
                      ]
                    ]),
                  /* :: */[
                    /* Selector */Block.__(1, [
                        "& i, & em",
                        /* :: */[
                          Glamor.fontStyle("italic"),
                          /* [] */0
                        ]
                      ]),
                    /* :: */[
                      /* Selector */Block.__(1, [
                          "& ol, & ul",
                          /* :: */[
                            Glamor.margin("0"),
                            /* :: */[
                              Glamor.marginLeft("1.45rem"),
                              /* :: */[
                                Glamor.marginBottom("1.45rem"),
                                /* :: */[
                                  Glamor.listStylePosition("outside"),
                                  /* :: */[
                                    Glamor.listStyleImage("none"),
                                    /* [] */0
                                  ]
                                ]
                              ]
                            ]
                          ]
                        ]),
                      /* :: */[
                        /* Selector */Block.__(1, [
                            "& li",
                            /* :: */[
                              Glamor.marginBottom("calc(1.45rem / 2)"),
                              /* :: */[
                                /* Selector */Block.__(1, [
                                    "& > ol, & > ul",
                                    /* :: */[
                                      Glamor.marginLeft("1.45rem"),
                                      /* :: */[
                                        Glamor.marginBottom("calc(1.45rem / 2)"),
                                        /* :: */[
                                          Glamor.marginTop("calc(1.45rem / 2)"),
                                          /* [] */0
                                        ]
                                      ]
                                    ]
                                  ]),
                                /* :: */[
                                  /* Selector */Block.__(1, [
                                      "& *:last-child",
                                      /* :: */[
                                        Glamor.marginBottom("0"),
                                        /* [] */0
                                      ]
                                    ]),
                                  /* :: */[
                                    /* Selector */Block.__(1, [
                                        "& > p",
                                        /* :: */[
                                          Glamor.marginBottom("calc(1.45rem / 2)"),
                                          /* [] */0
                                        ]
                                      ]),
                                    /* [] */0
                                  ]
                                ]
                              ]
                            ]
                          ]),
                        /* :: */[
                          /* Selector */Block.__(1, [
                              "& ol",
                              /* :: */[
                                Glamor.listStyleType("decimal"),
                                /* :: */[
                                  /* Selector */Block.__(1, [
                                      "& li",
                                      /* :: */[
                                        Glamor.paddingLeft("0"),
                                        /* [] */0
                                      ]
                                    ]),
                                  /* [] */0
                                ]
                              ]
                            ]),
                          /* :: */[
                            /* Selector */Block.__(1, [
                                "& ul",
                                /* :: */[
                                  Glamor.listStyleType("disc"),
                                  /* :: */[
                                    /* Selector */Block.__(1, [
                                        "& li",
                                        /* :: */[
                                          Glamor.paddingLeft("0"),
                                          /* [] */0
                                        ]
                                      ]),
                                    /* [] */0
                                  ]
                                ]
                              ]),
                            /* :: */[
                              /* Selector */Block.__(1, [
                                  "& code",
                                  /* :: */[
                                    Glamor.background("hsla(0, 0%, 0%, 0.04)"),
                                    /* :: */[
                                      Glamor.fontFamily("'SFMono-Regular', Consolas, 'Roboto Mono', 'Droid Sans Mono', 'Liberation Mono', Menlo, Courier, monospace;"),
                                      /* :: */[
                                        Glamor.fontSize("0.85rem"),
                                        /* :: */[
                                          Glamor.lineHeight("1.45rem"),
                                          /* :: */[
                                            Glamor.padding(".2em 0"),
                                            /* [] */0
                                          ]
                                        ]
                                      ]
                                    ]
                                  ]
                                ]),
                              /* :: */[
                                /* Selector */Block.__(1, [
                                    "& pre",
                                    /* :: */[
                                      Glamor.marginBottom("1.45rem"),
                                      /* :: */[
                                        Glamor.fontSize("0.85rem"),
                                        /* :: */[
                                          Glamor.lineHeight("1.42"),
                                          /* :: */[
                                            Glamor.background("hsla(0, 0%, 0%, 0.04)"),
                                            /* :: */[
                                              Glamor.borderRadius("3px"),
                                              /* :: */[
                                                Glamor.overflow("auto"),
                                                /* :: */[
                                                  Glamor.wordWrap("normal"),
                                                  /* :: */[
                                                    Glamor.padding("1.45rem"),
                                                    /* :: */[
                                                      /* Selector */Block.__(1, [
                                                          "& code",
                                                          /* :: */[
                                                            Glamor.background("none"),
                                                            /* :: */[
                                                              Glamor.lineHeight("1.42"),
                                                              /* [] */0
                                                            ]
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
                                    ]
                                  ]),
                                /* :: */[
                                  /* Selector */Block.__(1, [
                                      "& a",
                                      /* :: */[
                                        Glamor.color("#dd4c39"),
                                        /* :: */[
                                          Glamor.textDecoration("none"),
                                          /* :: */[
                                            /* Selector */Block.__(1, [
                                                "&:hover",
                                                /* :: */[
                                                  Glamor.textDecoration("underline"),
                                                  /* [] */0
                                                ]
                                              ]),
                                            /* [] */0
                                          ]
                                        ]
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
                ]
              ]
            ]
          ]
        ]
      ]
    ]);

exports.header           = header;
exports.unpublished      = unpublished;
exports.props            = props;
exports.title            = title;
exports.owner            = owner;
exports.name             = name;
exports.fields           = fields;
exports.version          = version;
exports.unpublishedLabel = unpublishedLabel;
exports.description      = description;
exports.tags             = tags;
exports.tagsIcon         = tagsIcon;
exports.right            = right;
exports.updated          = updated;
exports.license          = license;
exports.nolicense        = nolicense;
exports.stars            = stars;
exports.starIcon         = starIcon;
exports.links            = links;
exports.readme           = readme;
/* header Not a pure module */