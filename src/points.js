var topRightlayout = {
    "icon-image": "{icon}-15",
    "text-field": "{title}",
    "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
    "text-offset": [4, -2],
    "text-anchor": "top"
};

var straightUp = {
    "icon-image": "{icon}-15",
    "text-field": "{title}",
    "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
    "text-offset": [0, -4],
    "text-anchor": "top"
};

var straightDown = {
    "icon-image": "{icon}-15",
    "text-field": "{title}",
    "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
    "text-offset": [0, 1],
    "text-anchor": "top"
};

var farLeft = {
    "icon-image": "{icon}-15",
    "text-field": "{title}",
    "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
    "text-offset": [-6, -1],
    "text-anchor": "top"
};

var downLeft = {
    "icon-image": "{icon}-15",
    "text-field": "{title}",
    "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
    "text-offset": [-2, .5],
    "text-anchor": "top"
};

var paint = {
    "text-color": "#ffffff"
};

export var points = {
    POINTS_FOR_LINE1: {
        "id": "points",
        "type": "symbol",
        "source": {
            "type": "geojson",
            "data": {
                "type": "FeatureCollection",
                "features": [{
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-122.40342378616332, 37.787691357771685]
                    },
                    "properties": {
                        "title": "3rd & Market",
                        "icon": "circle"
                    }
                }, {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-122.42189884185791, 37.76493060428678]
                    },
                    "properties": {
                        "title": "16th & Valencia",
                        "icon": "circle"
                    }
                }]
            }
        },
        "layout": topRightlayout,
        "paint": paint
    },
    POINTS_FOR_LINE2: {
        "id": "points2",
        "type": "symbol",
        "source": {
            "type": "geojson",
            "data": {
                "type": "FeatureCollection",
                "features": [{
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-122.42628693580627, 37.77648994014245]
                    },
                    "properties": {
                        "title": "Hayes & Laguna",
                        "icon": "circle"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-122.42052555084229, 37.750519188303834]
                    },
                    "properties": {
                        "title": "25th & Valencia",
                        "icon": "circle"
                    }
                }, {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-122.39484071731566, 37.79452499974094]
                    },
                    "properties": {
                        "title": "The Ferries",
                        "icon": "circle"
                    }
                }]
            }
        },
        "layout": topRightlayout,
        "paint": paint
    },
    POINTS_FOR_LINE3: {
        "id": "points3",
        "type": "symbol",
        "source": {
            "type": "geojson",
            "data": {
                "type": "FeatureCollection",
                "features": [{
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-122.39194393157958,37.77817746896081]
                    },
                    "properties": {
                        "title": "4th & King",
                        "icon": "circle"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-122.41196393966673, 37.805850835522065]
                    },
                    "properties": {
                        "title": "Powell & Bay",
                        "icon": "circle"
                    }
                }]
            }
        },
        "layout": straightUp,
        "paint": paint
    },
    POINTS_FOR_LINE4: {
        "id": "points4",
        "type": "symbol",
        "source": {
            "type": "geojson",
            "data": {
                "type": "FeatureCollection",
                "features": [{
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-122.40344524383545,37.78765744233973]
                    },
                    "properties": {
                        "title": "3rd & Market",
                        "icon": "circle"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-122.41599798202516, 37.74918732658949]
                    },
                    "properties": {
                        "title": "26th & Valencia",
                        "icon": "circle"
                    }
                }]
            }
        },
        "layout": topRightlayout,
        "paint": paint
    },
    POINTS_FOR_LINE5: {
        "id": "points5",
        "type": "symbol",
        "source": {
            "type": "geojson",
            "data": {
                "type": "FeatureCollection",
                "features": [{
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-122.41342842578888,37.80468315094074]
                    },
                    "properties": {
                        "title": "Francisco & Mason",
                        "icon": "circle"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-122.3939609527588,37.776311856964824]
                    },
                    "properties": {
                        "title": "4th & King",
                        "icon": "circle"
                    }
                }]
            }
        },
        "layout": straightUp,
        "paint": paint
    },
    POINTS_FOR_LINE6: {
        "id": "points6",
        "type": "symbol",
        "source": {
            "type": "geojson",
            "data": {
                "type": "FeatureCollection",
                "features": [{
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-122.41379857063293, 37.74930609230181]
                    },
                    "properties": {
                        "title": "26th & Folsom",
                        "icon": "circle"
                    }
                }
                ]
            }
        },
        "layout": topRightlayout,
        "paint": paint
    },
    POINTS_FOR_LINE7: {
        "id": "points7",
        "type": "symbol",
        "source": {
            "type": "geojson",
            "data": {
                "type": "FeatureCollection",
                "features": [{
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-122.39883184432982,37.7998659919698]
                    },
                    "properties": {
                        "title": "Vallejo & Ferries",
                        "icon": "circle"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-122.40544080734254, 37.77133383456146]
                    },
                    "properties": {
                        "title": "8th & Brannan",
                        "icon": "circle"
                    }
                }
                ]
            }
        },
        "layout": topRightlayout,
        "paint": paint
    },
    POINTS_FOR_LINE8: {
        "id": "points8",
        "type": "symbol",
        "source": {
            "type": "geojson",
            "data": {
                "type": "FeatureCollection",
                "features": [{
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-122.41082668304442, 37.78323134491339]
                    },
                    "properties": {
                        "title": "Turk & Taylor",
                        "icon": "circle"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-122.44603872299193, 37.78352812218871]
                    },
                    "properties": {
                        "title": "Cemetary (Presidio) Ave & Post",
                        "icon": "circle"
                    }
                }
                ]
            }
        },
        "layout": topRightlayout,
        "paint": paint
    },
    POINTS_FOR_LINE9: {
        "id": "points9",
        "type": "symbol",
        "source": {
            "type": "geojson",
            "data": {
                "type": "FeatureCollection",
                "features": [{
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-122.41817593574524, 37.74903462753638]
                    },
                    "properties": {
                        "title": "26th & Mission",
                        "icon": "circle"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-122.40563392639159, 37.79055715554363]
                    },
                    "properties": {
                        "title": "Bush & Dupont (Grant)",
                        "icon": "circle"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-122.39260911941528, 37.79371110035437]
                    },
                    "properties": {
                        "title": "Mission & Ferries",
                        "icon": "circle"
                    }
                }
                ]
            }
        },
        "layout": topRightlayout,
        "paint": paint
    },
    POINTS_FOR_LINE10: {
        "id": "points10",
        "type": "symbol",
        "source": {
            "type": "geojson",
            "data": {
                "type": "FeatureCollection",
                "features": [{
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-122.42264986038208, 37.772410879746595]
                    },
                    "properties": {
                        "title": "Market & Valencia",
                        "icon": "circle"
                    }
                }
                ]
            }
        },
        "layout": topRightlayout,
        "paint": paint
    },
    POINTS_FOR_LINE11: {
        "id": "points11",
        "type": "symbol",
        "source": {
            "type": "geojson",
            "data": {
                "type": "FeatureCollection",
                "features": [{
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-122.40202903747559, 37.789098834471204]
                    },
                    "properties": {
                        "title": "Market & Post",
                        "icon": "circle"
                    }
                }, {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [ -122.3938751220703, 37.72653352421511]
                    },
                    "properties": {
                        "title": "Bay View Racecourse",
                        "icon": "circle"
                    }
                }
                ]
            }
        },
        "layout": topRightlayout,
        "paint": paint
    },
    POINTS_FOR_LINE12: {
        "id": "points12",
        "type": "symbol",
        "source": {
            "type": "geojson",
            "data": {
                "type": "FeatureCollection",
                "features": [{
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-122.40106344223022, 37.7985774069670]
                    },
                    "properties": {
                        "title": "Broadway & Battery",
                        "icon": "circle"
                    }
                }, {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-122.42181301116943, 37.79594930209237]
                    },
                    "properties": {
                        "title": "Broadway & Polk",
                        "icon": "circle"
                    }
                }, {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-122.41475343704224, 37.776277936310926]
                    },
                    "properties": {
                        "title": "9th & Mission",
                        "icon": "circle"
                    }
                }
                ]
            }
        },
        "layout": topRightlayout,
        "paint": paint
    },
    POINTS_FOR_LINE13: {
        "id": "points13",
        "type": "symbol",
        "source": {
            "type": "geojson",
            "data": {
                "type": "FeatureCollection",
                "features": [{
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-122.44588851928712, 37.78255299238057]
                    },
                    "properties": {
                        "title": "Lone Mountain",
                        "icon": "circle"
                    }
                }, {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-122.44138240814209, 37.79254110427786]
                    },
                    "properties": {
                        "title": "Divisadero & Pacific",
                        "icon": "circle"
                    }
                }, {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-122.44732618331908, 37.80515573694268]
                    },
                    "properties": {
                        "title": "Harbor View & Baker",
                        "icon": "circle"
                    }
                }
                ]
            }
        },
        "layout": farLeft,
        "paint": paint
    },
    POINTS_FOR_LINE14: {
        "id": "points14",
        "type": "symbol",
        "source": {
            "type": "geojson",
            "data": {
                "type": "FeatureCollection",
                "features": [{
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-122.42683410644533, 37.77927985391918]
                    },
                    "properties": {
                        "title": "McAllister & Laguna",
                        "icon": "circle"
                    }
                }, {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-122.43518114089966, 37.76265753623352]
                    },
                    "properties": {
                        "title": "Market & Castro",
                        "icon": "circle"
                    }
                }
                ]
            }
        },
        "layout": farLeft,
        "paint": paint
    },
    POINTS_FOR_LINE15: {
        "id": "points15",
        "type": "symbol",
        "source": {
            "type": "geojson",
            "data": {
                "type": "FeatureCollection",
                "features": [{
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-122.40480780601501, 37.79447413129194]
                    },
                    "properties": {
                        "title": "Clay & Kearny",
                        "icon": "circle"
                    }
                }, {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-122.45839834213257, 37.7743105117552]
                    },
                    "properties": {
                        "title": "1st & Golden Gate Park",
                        "icon": "circle"
                    }
                }
                ]
            }
        },
        "layout": topRightlayout,
        "paint": paint
    },
    POINTS_FOR_LINE16: {
        "id": "points16",
        "type": "symbol",
        "source": {
            "type": "geojson",
            "data": {
                "type": "FeatureCollection",
                "features": [{
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-122.40442156791686, 37.792659800376455]
                    },
                    "properties": {
                        "title": "California & Kearny",
                        "icon": "circle"
                    }
                }, {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-122.45923519134521, 37.78570727882306]
                    },
                    "properties": {
                        "title": "California & 1st Ave",
                        "icon": "circle"
                    }
                }
                ]
            }
        },
        "layout": topRightlayout,
        "paint": paint
    },
    POINTS_FOR_LINE17: {
        "id": "points17",
        "type": "symbol",
        "source": {
            "type": "geojson",
            "data": {
                "type": "FeatureCollection",
                "features": [{
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-122.4032950401306, 37.79555931727373]
                    },
                    "properties": {
                        "title": "Montgomery & Columnbus",
                        "icon": "circle"
                    }
                }, {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-122.45311975479126, 37.800247476638305]
                    },
                    "properties": {
                        "title": "Presidio",
                        "icon": "circle"
                    }
                }, {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-122.40348815917969, 37.78799659595888]
                    },
                    "properties": {
                        "title": "Kearny & Central",
                        "icon": "circle"
                    }
                }, {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-122.4584197998047, 37.77427659018304]
                    },
                    "properties": {
                        "title": "1st and Fulton",
                        "icon": "circle"
                    }
                }
                ]
            }
        },
        "layout": straightDown,
        "paint": paint
    },
    POINTS_FOR_LINE18: {
        "id": "points18",
        "type": "symbol",
        "source": {
            "type": "geojson",
            "data": {
                "type": "FeatureCollection",
                "features": [{
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-122.42008566856384, 37.74581939097872]
                    },
                    "properties": {
                        "title": "Valencia & 28th",
                        "icon": "circle"
                    }
                }, {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-122.4535596370697, 37.769188178104585]
                    },
                    "properties": {
                        "title": "Haight & Stanyan",
                        "icon": "circle"
                    }
                }, {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-122.43933320045471, 37.78248515678485]
                    },
                    "properties": {
                        "title": "O'Farrell and Divisadero",
                        "icon": "circle"
                    }
                }, {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-122.4546754360199, 37.77476845145604]
                    },
                    "properties": {
                        "title": "Fulton and Stanyan",
                        "icon": "circle"
                    }
                }
                ]
            }
        },
        "layout": downLeft,
        "paint": paint
    }
};