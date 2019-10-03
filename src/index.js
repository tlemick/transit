import React from 'react'
import ReactDOM from 'react-dom'
import mapboxgl from 'mapbox-gl'
import {lines} from './lines'
import {points} from './points'
import {fills} from './fills'
import {chapters} from './chapters'
import './App.css'

mapboxgl.accessToken = 'pk.eyJ1IjoidGxlbWljayIsImEiOiJjamlkc3p4b24wMjdqM3Ftd3BxNDYxdWh5In0.FlyDqJn6slEJuQUcKJgfUw';


class Application extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      lng: -122.4370,
      lat: 37.7639,
      zoom: 12.19,
      linesAdded: 0,
      bear: 0.11,
      pit: 0
    };
  }

  componentDidMount() {
    const { lng, lat, zoom, bear, pit } = this.state;

    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/tlemick/cjodpogj432aa2srxsw1sccvk',
      center: [lng, lat],
      bearing: bear,
      pitch: pit,
      zoom
    });


    map.on('load', function () {
      map.addSource("san_francisco_grid", fills.san_francisco_grid);
      map.addLayer({
        "id": "san_francisco_grid",
        "type": "fill",
        "source": "san_francisco_grid",
        "paint": {
          "fill-color": "red",
          "fill-opacity": 0,
        },
        "filter": ["==", "$type", "Polygon"]
      });
      map.addSource("soma_grid", fills.soma_grid);
      map.addLayer({
        "id": "soma_grid",
        "type": "fill",
        "source": "soma_grid",
        "paint": {
          "fill-color": "red",
          "fill-opacity": 0,
        },
        "filter": ["==", "$type", "Polygon"]
      });
      map.addSource("landsend_grid", fills.landsend_grid);
      map.addLayer({
        "id": "landsend_grid",
        "type": "fill",
        "source": "landsend_grid",
        "paint": {
          "fill-color": "#f6f6f4",
          "fill-opacity": 0,
        },
        "filter": ["==", "$type", "Polygon"]
      });
      map.addSource("southernest_grid", fills.southernest_grid);
      map.addLayer({
        "id": "southernest_grid",
        "type": "fill",
        "source": "southernest_grid",
        "paint": {
          "fill-color": "#f6f6f4",
          "fill-opacity": 0,
        },
        "filter": ["==", "$type", "Polygon"]
      });
      map.addSource("panhandle_grid", fills.panhandle_grid);
      map.addLayer({
        "id": "panhandle_grid",
        "type": "fill",
        "source": "panhandle_grid",
        "paint": {
          "fill-color": "#f6f6f4",
          "fill-opacity": 0,
        },
        "filter": ["==", "$type", "Polygon"]
      });
      map.addSource("presidio_grid", fills.presidio_grid);
      map.addLayer({
        "id": "presidio_grid",
        "type": "fill",
        "source": "presidio_grid",
        "paint": {
          "fill-color": "#f6f6f4",
          "fill-opacity": 0,
        },
        "filter": ["==", "$type", "Polygon"]
      });
      map.addSource("pacheights_grid", fills.pacheights_grid);
      map.addLayer({
        "id": "pacheights_grid",
        "type": "fill",
        "source": "pacheights_grid",
        "paint": {
          "fill-color": "#f6f6f4",
          "fill-opacity": 0,
        },
        "filter": ["==", "$type", "Polygon"]
      });
      map.addSource("vanness_grid", fills.vanness_grid);
      map.addLayer({
        "id": "vanness_grid",
        "type": "fill",
        "source": "vanness_grid",
        "paint": {
          "fill-color": "#f6f6f4",
          "fill-opacity": 0,
        },
        "filter": ["==", "$type", "Polygon"]
      });
      map.addSource("bay_view_grid", fills.bay_view_grid);
      map.addLayer({
        "id": "bay_view_grid",
        "type": "fill",
        "source": "bay_view_grid",
        "paint": {
          "fill-color": "#f6f6f4",
          "fill-opacity": 0
        },
        "filter": ["==", "$type", "Polygon"]
      });
      map.addSource("westernaddition_grid", fills.westernaddition_grid);
      map.addLayer({
        "id": "westernaddition_grid",
        "type": "fill",
        "source": "westernaddition_grid",
        "paint": {
          "fill-color": "#f6f6f4",
          "fill-opacity": 0,
        },
        "filter": ["==", "$type", "Polygon"]
      });
      map.addSource("castro_grid", fills.castro_grid);
      map.addLayer({
        "id": "castro_grid",
        "type": "fill",
        "source": "castro_grid",
        "paint": {
          "fill-color": "#f6f6f4",
          "fill-opacity": 0,
        },
        "filter": ["==", "$type", "Polygon"]
      });
      map.addSource("hayes_grid", fills.hayes_grid);
      map.addLayer({
        "id": "hayes_grid",
        "type": "fill",
        "source": "hayes_grid",
        "paint": {
          "fill-color": "#f6f6f4",
          "fill-opacity": 0,
        },
        "filter": ["==", "$type", "Polygon"]
      });
      map.addSource("mission_grid", fills.mission_grid);
      map.addLayer({
        "id": "mission_grid",
        "type": "fill",
        "source": "mission_grid",
        "paint": {
          "fill-color": "#f6f6f4",
          "fill-opacity": 0,
        },
        "filter": ["==", "$type", "Polygon"]
      });
      map.addSource("glenpark_grid", fills.glenpark_grid);
      map.addLayer({
        "id": "glenpark_grid",
        "type": "fill",
        "source": "glenpark_grid",
        "paint": {
          "fill-color": "#f6f6f4",
          "fill-opacity": 0,
        },
        "filter": ["==", "$type", "Polygon"]
      });
      map.addSource("excelsior_grid", fills.excelsior_grid);
      map.addLayer({
        "id": "excelsior_grid",
        "type": "fill",
        "source": "excelsior_grid",
        "paint": {
          "fill-color": "#f6f6f4",
          "fill-opacity": 0,
        },
        "filter": ["==", "$type", "Polygon"]
      });
      map.addSource("twinpeaks_grid", fills.twinpeaks_grid);
      map.addLayer({
        "id": "twinpeaks_grid",
        "type": "fill",
        "source": "twinpeaks_grid",
        "paint": {
          "fill-color": "#f6f6f4",
          "fill-opacity": 0,
        },
        "filter": ["==", "$type", "Polygon"]
      });
      map.addSource("tenderloin_grid", fills.tenderloin_grid);
      map.addLayer({
        "id": "tenderloin_grid",
        "type": "fill",
        "source": "tenderloin_grid",
        "paint": {
          "fill-color": "#f6f6f4",
          "fill-opacity": 0,
        },
        "filter": ["==", "$type", "Polygon"]
      });
      map.addSource("nob_hill_grid_base", fills.nob_hill_grid_base);
      map.addLayer({
        "id": "nob_hill_grid_base",
        "type": "fill",
        "source": "nob_hill_grid_base",
        "paint": {
          "fill-color": "#E9E0D5",
          "fill-opacity": 0,
        },
        "filter": ["==", "$type", "Polygon"]
      });
      map.addSource("nob_hill_grid_1", fills.nob_hill_grid_1);
      map.addLayer({
        "id": "nob_hill_grid_1",
        "type": "fill",
        "source": "nob_hill_grid_1",
        "paint": {
          "fill-color": "#DFCFBF",
          "fill-opacity": 0,
        },
        "filter": ["==", "$type", "Polygon"]
      });
      map.addSource("nob_hill_grid_2", fills.nob_hill_grid_2);
      map.addLayer({
        "id": "nob_hill_grid_2",
        "type": "fill",
        "source": "nob_hill_grid_2",
        "paint": {
          "fill-color": "#D7C0AA",
          "fill-opacity": 0,
        },
        "filter": ["==", "$type", "Polygon"]
      });
      map.addSource("nob_hill_grid_3", fills.nob_hill_grid_3);
      map.addLayer({
        "id": "nob_hill_grid_3",
        "type": "fill",
        "source": "nob_hill_grid_3",
        "paint": {
          "fill-color": "#CEB296",
          "fill-opacity": 0,
        },
        "filter": ["==", "$type", "Polygon"]
      });
      map.addSource("nob_hill_grid_4", fills.nob_hill_grid_4);
      map.addLayer({
        "id": "nob_hill_grid_4",
        "type": "fill",
        "source": "nob_hill_grid_4",
        "paint": {
          "fill-color": "#C5A381",
          "fill-opacity": 0,
        },
        "filter": ["==", "$type", "Polygon"]
      });
      map.addSource("twin_peaks_base", fills.twin_peaks_base);
      map.addLayer({
        "id": "twin_peaks_base",
        "type": "fill",
        "source": "twin_peaks_base",
        "paint": {
          "fill-color": "#E9E0D5",
          "fill-opacity": 0,
        },
        "filter": ["==", "$type", "Polygon"]
      });
      map.addSource("twin_peaks_2", fills.twin_peaks_2);
      map.addLayer({
        "id": "twin_peaks_2",
        "type": "fill",
        "source": "twin_peaks_2",
        "paint": {
          "fill-color": "#DFCFBF",
          "fill-opacity": 0,
        },
        "filter": ["==", "$type", "Polygon"]
      });
      map.addSource("twin_peaks_3", fills.twin_peaks_3);
      map.addLayer({
        "id": "twin_peaks_3",
        "type": "fill",
        "source": "twin_peaks_3",
        "paint": {
          "fill-color": "#D7C0AA",
          "fill-opacity": 0,
        },
        "filter": ["==", "$type", "Polygon"]
      });
      map.addSource("twin_peaks_4", fills.twin_peaks_4);
      map.addLayer({
        "id": "twin_peaks_4",
        "type": "fill",
        "source": "twin_peaks_4",
        "paint": {
          "fill-color": "#CEB296",
          "fill-opacity": 0,
        },
        "filter": ["==", "$type", "Polygon"]
      });
      map.addSource("twin_peaks_5", fills.twin_peaks_5);
      map.addLayer({
        "id": "twin_peaks_5",
        "type": "fill",
        "source": "twin_peaks_5",
        "paint": {
          "fill-color": "#C5A381",
          "fill-opacity": 0,
        },
        "filter": ["==", "$type", "Polygon"]
      });
      map.addSource("twin_peaks_6", fills.twin_peaks_6);
      map.addLayer({
        "id": "twin_peaks_6",
        "type": "fill",
        "source": "twin_peaks_6",
        "paint": {
          "fill-color": "#BD946D",
          "fill-opacity": 0,
        },
        "filter": ["==", "$type", "Polygon"]
      });
      map.addSource("twin_peaks_7", fills.twin_peaks_7);
      map.addLayer({
        "id": "twin_peaks_7",
        "type": "fill",
        "source": "twin_peaks_7",
        "paint": {
          "fill-color": "#B07D4D",
          "fill-opacity": 0,
        },
        "filter": ["==", "$type", "Polygon"]
      });
      map.addSource("dogpatch_grid", fills.dogpatch_grid);
      map.addLayer({
        "id": "dogpatch_grid",
        "type": "fill",
        "source": "dogpatch_grid",
        "paint": {
          "fill-color": "#f6f6f4",
          "fill-opacity": 0,
        },
        "filter": ["==", "$type", "Polygon"]
      });
      map.addSource("p_base", fills.p_base);
      map.addLayer({
        "id": "p_base",
        "type": "fill",
        "source": "p_base",
        "paint": {
          "fill-color": "#E9E0D5",
          "fill-opacity": 0,
        },
        "filter": ["==", "$type", "Polygon"]
      });
      map.addSource("bernal_grid", fills.bernal_grid);
      map.addLayer({
        "id": "bernal_grid",
        "type": "fill",
        "source": "bernal_grid",
        "paint": {
          "fill-color": "#f6f6f4",
          "fill-opacity": 0,
        },
        "filter": ["==", "$type", "Polygon"]
      });
      map.addSource("fire", fills.fire);
      map.addLayer({
        "id": "fire",
        "type": "fill",
        "source": "fire",
        "paint": {
          "fill-color": "#FF5655",
          "fill-opacity": 0,
        },
        "filter": ["==", "$type", "Polygon"]
      });
      map.addSource("b_base", fills.b_base);
      map.addLayer({
        "id": "b_base",
        "type": "fill",
        "source": "b_base",
        "paint": {
          "fill-color": "#E9E0D5",
          "fill-opacity": 0,
        },
        "filter": ["==", "$type", "Polygon"]
      });
      map.addSource("p_2", fills.p_2);
      map.addLayer({
        "id": "p_2",
        "type": "fill",
        "source": "p_2",
        "paint": {
          "fill-color": "#DFCFBF",
          "fill-opacity": 0,
        },
        "filter": ["==", "$type", "Polygon"]
      });
      map.addSource("p_3", fills.p_3);
      map.addLayer({
        "id": "p_3",
        "type": "fill",
        "source": "p_3",
        "paint": {
          "fill-color": "#D7C0AA",
          "fill-opacity": 0,
        },
        "filter": ["==", "$type", "Polygon"]
      });
      map.addSource("p_4", fills.p_4);
      map.addLayer({
        "id": "p_4",
        "type": "fill",
        "source": "p_4",
        "paint": {
          "fill-color": "#CEB296",
          "fill-opacity": 0,
        },
        "filter": ["==", "$type", "Polygon"]
      });
      map.addSource("p_5", fills.p_5);
      map.addLayer({
        "id": "p_5",
        "type": "fill",
        "source": "p_5",
        "paint": {
          "fill-color": "#C5A381",
          "fill-opacity": 0,
        },
        "filter": ["==", "$type", "Polygon"]
      });
      map.addSource("b_2", fills.b_2);
      map.addLayer({
        "id": "b_2",
        "type": "fill",
        "source": "b_2",
        "paint": {
          "fill-color": "#DFCFBF",
          "fill-opacity": 0,
        },
        "filter": ["==", "$type", "Polygon"]
      });
      map.addSource("b_3", fills.b_3);
      map.addLayer({
        "id": "b_3",
        "type": "fill",
        "source": "b_3",
        "paint": {
          "fill-color": "#D7C0AA",
          "fill-opacity": 0,
        },
        "filter": ["==", "$type", "Polygon"]
      });
      map.addSource("b_4", fills.b_4);
      map.addLayer({
        "id": "b_4",
        "type": "fill",
        "source": "b_4",
        "paint": {
          "fill-color": "#CEB296",
          "fill-opacity": 0,
        },
        "filter": ["==", "$type", "Polygon"]
      });
      map.addSource("b_5", fills.b_5);
      map.addLayer({
        "id": "b_5",
        "type": "fill",
        "source": "b_5",
        "paint": {
          "fill-color": "#C5A381",
          "fill-opacity": 0,
        },
        "filter": ["==", "$type", "Polygon"]
      });
      map.addSource("tele_hill_base", fills.tele_hill_base);
      map.addLayer({
        "id": "tele_hill_base",
        "type": "fill",
        "source": "tele_hill_base",
        "paint": {
          "fill-color": "#E9E0D5",
          "fill-opacity": 0,
        },
        "filter": ["==", "$type", "Polygon"]
      });
      map.addSource("tele_hill_grid_2", fills.tele_hill_2);
      map.addLayer({
        "id": "tele_hill_grid_2",
        "type": "fill",
        "source": "tele_hill_grid_2",
        "paint": {
          "fill-color": "#DFCFBF",
          "fill-opacity": 0,
        },
        "filter": ["==", "$type", "Polygon"]
      });
      map.addSource("tele_hill_grid_3", fills.tele_hill_3);
      map.addLayer({
        "id": "tele_hill_grid_3",
        "type": "fill",
        "source": "tele_hill_grid_3",
        "paint": {
          "fill-color": "#D7C0AA",
          "fill-opacity": 0,
        },
        "filter": ["==", "$type", "Polygon"]
      });
      map.addSource("tele_hill_grid_4", fills.tele_hill_4);
      map.addLayer({
        "id": "tele_hill_grid_4",
        "type": "fill",
        "source": "tele_hill_grid_4",
        "paint": {
          "fill-color": "#CEB296",
          "fill-opacity": 0,
        },
        "filter": ["==", "$type", "Polygon"]
      });
      map.addSource("tele_hill_grid_5", fills.tele_hill_5);
      map.addLayer({
        "id": "tele_hill_grid_5",
        "type": "fill",
        "source": "tele_hill_grid_5",
        "paint": {
          "fill-color": "#C5A381",
          "fill-opacity": 0,
        },
        "filter": ["==", "$type", "Polygon"]
      });
      map.addSource("yb_grid", fills.yb_grid);
      map.addLayer({
        "id": "yb_grid",
        "type": "fill",
        "source": "yb_grid",
        "paint": {
          "fill-color": "#f6f6f4",
          "fill-opacity": 0,
        },
        "filter": ["==", "$type", "Polygon"]
      });
      map.addSource("southern_grid", fills.southern_grid);
      map.addLayer({
        "id": "southern_grid",
        "type": "fill",
        "source": "southern_grid",
        "paint": {
          "fill-color": "#f6f6f4",
          "fill-opacity": 0,
        },
        "filter": ["==", "$type", "Polygon"]
      });
      map.addSource("great_south_grid", fills.great_south_grid);
      map.addLayer({
        "id": "great_south_grid",
        "type": "fill",
        "source": "great_south_grid",
        "paint": {
          "fill-color": "#f6f6f4",
          "fill-opacity": 0,
        },
        "filter": ["==", "$type", "Polygon"]
      });
      map.addSource("presidio_heights_grid", fills.presidio_heights_grid);
      map.addLayer({
        "id": "presidio_heights_grid",
        "type": "fill",
        "source": "presidio_heights_grid",
        "paint": {
          "fill-color": "#f6f6f4",
          "fill-opacity": 0,
        },
        "filter": ["==", "$type", "Polygon"]
      });
      map.addSource("mission_swamp", fills.mission_swamp);
      map.addLayer({
        "id": "mission_swamp",
        "type": "fill",
        "source": "mission_swamp",
        "paint": {
          "fill-color": "#85b7d1",
          "fill-opacity": 0,
          "fill-pattern": "rain"
        },
        "filter": ["==", "$type", "Polygon"]
      });
      map.addSource("mission_creek", fills.mission_creek);
      map.addLayer({
        "id": "mission_creek",
        "type": "fill",
        "source": "mission_creek",
        "paint": {
          "fill-color": "#85b7d1",
          "fill-opacity": 0,
        },
        "filter": ["==", "$type", "Polygon"]
      });
      map.addSource("mission_bay", fills.mission_bay);
      map.addLayer({
        "id": "mission_bay",
        "type": "fill",
        "source": "mission_bay",
        "paint": {
          "fill-color": "#85b7d1",
          "fill-opacity": 0,
        },
        "filter": ["==", "$type", "Polygon"]
      });
      map.addSource("mission_swamp_2", fills.mission_swamp_2);
      map.addLayer({
        "id": "mission_swamp_2",
        "type": "fill",
        "source": "mission_swamp_2",
        "paint": {
          "fill-color": "#85b7d1",
          "fill-opacity": 0,
          "fill-pattern": "rain"
        },
        "filter": ["==", "$type", "Polygon"]
      });
      map.addSource("islais_swamp", fills.islais_swamp);
      map.addLayer({
        "id": "islais_swamp",
        "type": "fill",
        "source": "islais_swamp",
        "paint": {
          "fill-opacity": 0,
          "fill-pattern": "rain"
        },
        "filter": ["==", "$type", "Polygon"]
      });
      map.addSource("islais_bay", fills.islais_bay);
      map.addLayer({
        "id": "islais_bay",
        "type": "fill",
        "source": "islais_bay",
        "paint": {
          "fill-opacity": 0,
          "fill-color": "#85b7d1",
        },
        "filter": ["==", "$type", "Polygon"]
      });
      map.addSource("islais_creek", fills.islais_creek);
      map.addLayer({
        "id": "islais_creek",
        "type": "fill",
        "source": "islais_creek",
        "paint": {
          "fill-opacity": 0,
          "fill-color": "#85b7d1",
        },
        "filter": ["==", "$type", "Polygon"]
      });
      map.addSource("bay_view_waters", fills.bay_view_waters);
      map.addLayer({
        "id": "bay_view_waters",
        "type": "fill",
        "source": "bay_view_waters",
        "paint": {
          "fill-opacity": 0,
          "fill-color": "#85b7d1",
        },
        "filter": ["==", "$type", "Polygon"]
      });
      map.addSource("bay_view_waters_2", fills.bay_view_waters_2);
      map.addLayer({
        "id": "bay_view_waters_2",
        "type": "fill",
        "source": "bay_view_waters_2",
        "paint": {
          "fill-opacity": 0,
          "fill-color": "#85b7d1",
        },
        "filter": ["==", "$type", "Polygon"]
      });
      map.addSource("east_bay_waters", fills.east_bay_waters);
      map.addLayer({
        "id": "east_bay_waters",
        "type": "fill",
        "source": "east_bay_waters",
        "paint": {
          "fill-opacity": 0,
          "fill-color": "#85b7d1",
        },
        "filter": ["==", "$type", "Polygon"]
      });
      map.addSource("financial_waters", fills.financial_waters);
      map.addLayer({
        "id": "financial_waters",
        "type": "fill",
        "source": "financial_waters",
        "paint": {
          "fill-opacity": 0,
          "fill-color": "#85b7d1",
        },
        "filter": ["==", "$type", "Polygon"]
      });
      map.addSource("north_shore_waters", fills.north_shore_waters);
      map.addLayer({
        "id": "north_shore_waters",
        "type": "fill",
        "source": "north_shore_waters",
        "paint": {
          "fill-color": "#85b7d1",
          "fill-opacity": 0,
        },
        "filter": ["==", "$type", "Polygon"]
      });
      map.addSource("hunters_point", fills.hunters_point);
      map.addLayer({
        "id": "hunters_point",
        "type": "fill",
        "source": "hunters_point",
        "paint": {
          "fill-color": "#85b7d1",
          "fill-opacity": 0,
        },
        "filter": ["==", "$type", "Polygon"]
      });
      map.addSource("marina_grid", fills.marina_grid);
      map.addLayer({
        "id": "marina_grid",
        "type": "fill",
        "source": "marina_grid",
        "paint": {
          "fill-color": "#f6f6f4",
          "fill-opacity": 0,
        },
        "filter": ["==", "$type", "Polygon"]
      });
      map.addSource("nopa_grid", fills.nopa_grid);
      map.addLayer({
        "id": "nopa_grid",
        "type": "fill",
        "source": "nopa_grid",
        "paint": {
          "fill-color": "#f6f6f4",
          "fill-opacity": 0,
        },
        "filter": ["==", "$type", "Polygon"]
      });
      map.addSource("cuts_cheat", fills.cuts_cheat);
      map.addLayer({
        "id": "cuts_cheat",
        "type": "fill",
        "source": "cuts_cheat",
        "paint": {
          "fill-color": "#f6f6f4",
          "fill-opacity": 0,
        },
        "filter": ["==", "$type", "Polygon"]
      });
      map.addSource("duboce_grid", fills.duboce_grid);
      map.addLayer({
        "id": "duboce_grid",
        "type": "fill",
        "source": "duboce_grid",
        "paint": {
          "fill-color": "#f6f6f4",
          "fill-opacity": 0,
        },
        "filter": ["==", "$type", "Polygon"]
      });
      map.addSource("haight_grid", fills.haight_grid);
      map.addLayer({
        "id": "haight_grid",
        "type": "fill",
        "source": "haight_grid",
        "paint": {
          "fill-color": "#f6f6f4",
          "fill-opacity": 0,
        },
        "filter": ["==", "$type", "Polygon"]
      });
      map.addSource("inner_richmond_grid", fills.inner_richmond_grid);
      map.addLayer({
        "id": "inner_richmond_grid",
        "type": "fill",
        "source": "inner_richmond_grid",
        "paint": {
          "fill-color": "#f6f6f4",
          "fill-opacity": 0,
        },
        "filter": ["==", "$type", "Polygon"]
      });
      map.addSource("merrit_sands", fills.merrit_sands);
      map.addLayer({
        "id": "merrit_sands",
        "type": "fill",
        "source": "merrit_sands",
        "paint": {
          "fill-color": "#85b7d1",
          "fill-opacity": 0,
          "fill-pattern": "polka-dots"
        },
        "filter": ["==", "$type", "Polygon"]
      });
      map.addSource("mission_sands", fills.mission_sands);
      map.addLayer({
        "id": "mission_sands",
        "type": "fill",
        "source": "mission_sands",
        "paint": {
          "fill-color": "#85b7d1",
          "fill-opacity": 0,
          "fill-pattern": "polka-dots"
        },
        "filter": ["==", "$type", "Polygon"]
      });
      map.addSource("panhandle_sands", fills.panhandle_sands);
      map.addLayer({
        "id": "panhandle_sands",
        "type": "fill",
        "source": "panhandle_sands",
        "paint": {
          "fill-color": "#85b7d1",
          "fill-opacity": 0,
          "fill-pattern": "polka-dots"
        },
        "filter": ["==", "$type", "Polygon"]
      });
      map.addSource("richmond_sands", fills.richmond_sands);
      map.addLayer({
        "id": "richmond_sands",
        "type": "fill",
        "source": "richmond_sands",
        "paint": {
          "fill-color": "#85b7d1",
          "fill-opacity": 0,
          "fill-pattern": "polka-dots"
        },
        "filter": ["==", "$type", "Polygon"]
      });
      map.addSource("inner_richmond_sands", fills.inner_richmond_sands);
      map.addLayer({
        "id": "inner_richmond_sands",
        "type": "fill",
        "source": "inner_richmond_sands",
        "paint": {
          "fill-color": "#85b7d1",
          "fill-opacity": 0,
          "fill-pattern": "polka-dots"
        },
        "filter": ["==", "$type", "Polygon"]
      });
      map.addSource("park_sands", fills.gg_park);
      map.addLayer({
        "id": "park_sands",
        "type": "fill",
        "source": "park_sands",
        "paint": {
          "fill-color": "#85b7d1",
          "fill-opacity": 0,
          "fill-pattern": "polka-dots"
        },
        "filter": ["==", "$type", "Polygon"]
      });
      map.addSource("sunset_sands", fills.sunset_sands);
      map.addLayer({
        "id": "sunset_sands",
        "type": "fill",
        "source": "sunset_sands",
        "paint": {
          "fill-color": "#85b7d1",
          "fill-opacity": 0,
          "fill-pattern": "polka-dots"
        },
        "filter": ["==", "$type", "Polygon"]
      });
      map.addSource("full_sunset", fills.full_sunset);
      map.addLayer({
        "id": "full_sunset",
        "type": "fill",
        "source": "full_sunset",
        "paint": {
          "fill-color": "deeppink",
          "fill-opacity": 0
        },
        "filter": ["==", "$type", "Polygon"]
      });
      map.addSource("nopa_sands", fills.nopa_sands);
      map.addLayer({
        "id": "nopa_sands",
        "type": "fill",
        "source": "nopa_sands",
        "paint": {
          "fill-color": "#85b7d1",
          "fill-opacity": 0,
          "fill-pattern": "polka-dots"
        },
        "filter": ["==", "$type", "Polygon"]
      });
      map.addSource("presidio_heights_sands", fills.presidio_heights_sands);
      map.addLayer({
        "id": "presidio_heights_sands",
        "type": "fill",
        "source": "presidio_heights_sands",
        "paint": {
          "fill-color": "#85b7d1",
          "fill-opacity": 0,
          "fill-pattern": "polka-dots"
        },
        "filter": ["==", "$type", "Polygon"]
      });
      map.addSource("inner_sunset_sands", fills.inner_sunset_sands);
      map.addLayer({
        "id": "inner_sunset_sands",
        "type": "fill",
        "source": "inner_sunset_sands",
        "paint": {
          "fill-color": "#85b7d1",
          "fill-opacity": 0,
          "fill-pattern": "polka-dots"
        },
        "filter": ["==", "$type", "Polygon"]
      });
      map.addSource("inner_sunset_grid", fills.inner_sunset_sands);
      map.addLayer({
        "id": "inner_sunset_grid",
        "type": "fill",
        "source": "inner_sunset_grid",
        "paint": {
          "fill-color": "#f6f6f4",
          "fill-opacity": 0,
        },
        "filter": ["==", "$type", "Polygon"]
      });
      map.addSource("richmond_grid", fills.richmond_grid);
      map.addLayer({
        "id": "richmond_grid",
        "type": "fill",
        "source": "richmond_grid",
        "paint": {
          "fill-color": "#f6f6f4",
          "fill-opacity": 0,
        },
        "filter": ["==", "$type", "Polygon"]
      });
      map.addSource("soma_sands", fills.soma_sands);
      map.addLayer({
        "id": "soma_sands",
        "type": "fill",
        "source": "soma_sands",
        "paint": {
          "fill-color": "#85b7d1",
          "fill-opacity": 0,
          "fill-pattern": "polka-dots"
        },
        "filter": ["==", "$type", "Polygon"]
      });
      map.addSource("folsom_cut", fills.folsom_cut);
      map.addLayer({
        "id": "folsom_cut",
        "type": "fill",
        "source": "folsom_cut",
        "paint": {
          "fill-color": "#85b7d1",
          "fill-opacity": 0,
          "fill-pattern": "polka-dots"
        },
        "filter": ["==", "$type", "Polygon"]
      });
      map.addSource("howard_cut", fills.howard_cut);
      map.addLayer({
        "id": "howard_cut",
        "type": "fill",
        "source": "howard_cut",
        "paint": {
          "fill-color": "#85b7d1",
          "fill-opacity": 0,
          "fill-pattern": "polka-dots"
        },
        "filter": ["==", "$type", "Polygon"]
      });
      map.addSource("mission_cut", fills.mission_cut);
      map.addLayer({
        "id": "mission_cut",
        "type": "fill",
        "source": "mission_cut",
        "paint": {
          "fill-color": "#85b7d1",
          "fill-opacity": 0,
          "fill-pattern": "polka-dots"
        },
        "filter": ["==", "$type", "Polygon"]
      });
      map.addSource("valencia_cut", fills.valencia_cut);
      map.addLayer({
        "id": "valencia_cut",
        "type": "fill",
        "source": "valencia_cut",
        "paint": {
          "fill-color": "#85b7d1",
          "fill-opacity": 0,
          "fill-pattern": "polka-dots"
        },
        "filter": ["==", "$type", "Polygon"]
      });
      map.addSource("hayes_sands", fills.hayes_sands);
      map.addLayer({
        "id": "hayes_sands",
        "type": "fill",
        "source": "hayes_sands",
        "paint": {
          "fill-color": "#85b7d1",
          "fill-opacity": 0,
          "fill-pattern": "polka-dots"
        },
        "filter": ["==", "$type", "Polygon"]
      });
      map.addSource("gg_park", fills.gg_park);
      map.addLayer({
        "id": "gg_park",
        "type": "fill",
        "source": "gg_park",
        "paint": {
          "fill-color": "#96c5ad",
          "fill-opacity": 0,
        },
        "filter": ["==", "$type", "Polygon"]
      });
      map.addSource("cemeteries", fills.cemeteries);
      map.addLayer({
        "id": "cemeteries",
        "type": "fill",
        "source": "cemeteries",
        "paint": {
          "fill-color": "#E3ECE7",
          "fill-outline-color": "#9CC4AE",
          "fill-opacity": 0,
        },
        "filter": ["==", "$type", "Polygon"]
      });
      map.addSource("expo", fills.expo);
      map.addLayer({
        "id": "expo",
        "type": "fill",
        "source": "expo",
        "paint": {
          "fill-color": "deeppink",
          "fill-opacity": 0,
        },
        "filter": ["==", "$type", "Polygon"]
      });
      map.addSource("expo2", fills.expo2);
      map.addLayer({
        "id": "expo2",
        "type": "fill",
        "source": "expo2",
        "paint": {
          "fill-color": "deeppink",
          "fill-opacity": 0,
        },
        "filter": ["==", "$type", "Polygon"]
      });    
    });

    map.on('move', () => {
      const { lng, lat } = map.getCenter();

      this.setState({
        lng: lng.toFixed(4),
        lat: lat.toFixed(4),
        bear: map.getBearing(2),
        zoom: map.getZoom().toFixed(2),
        pit: map.getPitch()
      });
    });

    var baseSpeed = 65;

    var animateInLine = function(dasLine, speedOverride) {
      var speed = baseSpeed;
      if (speedOverride) {
        speed = speedOverride;
      }

      if (dasLine.source.data.geometry) {
        var rawCoordinates = dasLine.source.data.geometry.coordinates.slice();
        var coordinates = [];
        for (var i = 0 ; i < rawCoordinates.length; i++) {
          coordinates.push(rawCoordinates[i]);
          if (i < rawCoordinates.length - 1) {
            var x0 = rawCoordinates[i][0];
            var y0 = rawCoordinates[i][1];
            var x1 = rawCoordinates[i+1][0];
            var y1 = rawCoordinates[i+1][1];
            var distance = Math.sqrt(Math.pow(y1-y0, 2) + Math.pow(x1-x0, 2));
            var quotient = 0.020312983445281558 / speed;
            var steps = distance / quotient;
            for (var j = 0; j < steps - 1; j++) {
              var x = x0 + (x1 - x0) / steps * (j+1);
              var y = y0 + (y1 - y0) / steps * (j+1);
              coordinates.push([x, y]);
            }
          }
        }
        var liveData = JSON.parse(JSON.stringify(dasLine.source.data));
        liveData.geometry.coordinates = [coordinates[0]];
        var newLine = JSON.parse(JSON.stringify(dasLine));
        newLine.source.data = liveData;
        map.addLayer(newLine);
        var i = 0;
        var animateLine = function(timestamp) {
          if (liveData.geometry.coordinates.length == coordinates.length) {
            return;
          }
          liveData.geometry.coordinates = liveData.geometry.coordinates.concat([coordinates[i]]);
          map.getSource(newLine.id).setData(liveData);
          i++;
          requestAnimationFrame(animateLine);
        };
        animateLine();
      } else {
        var rawCoordinatesArray = [];
        var coordinatesArray = [];
        var featuresLength = dasLine.source.data.features.length;
        for (var k = 0; k < featuresLength; k++) {
          rawCoordinatesArray.push(dasLine.source.data.features[k].geometry.coordinates.slice());
          coordinatesArray.push([rawCoordinatesArray[k][0]]);


          for (var i = 0 ; i < rawCoordinatesArray[k].length; i++) {
            coordinatesArray[k].push(rawCoordinatesArray[k][i]);
            if (i < rawCoordinatesArray[k].length - 1) {
              var x0 = rawCoordinatesArray[k][i][0];
              var y0 = rawCoordinatesArray[k][i][1];
              var x1 = rawCoordinatesArray[k][i+1][0];
              var y1 = rawCoordinatesArray[k][i+1][1];
              var distance = Math.sqrt(Math.pow(y1-y0, 2) + Math.pow(x1-x0, 2));
              var quotient = 0.020312983445281558 / speed;
              var steps = distance / quotient;
              for (var j = 0; j < steps - 1; j++) {
                var x = x0 + (x1 - x0) / steps * (j+1);
                var y = y0 + (y1 - y0) / steps * (j+1);
                coordinatesArray[k].push([x, y]);
              }
            }
          }
        }
        
        var liveData = JSON.parse(JSON.stringify(dasLine.source.data));
        for (var k = 0; k < featuresLength; k++) {
          liveData.features[k].geometry.coordinates = [coordinatesArray[k][0]];
        }
        var newLine = JSON.parse(JSON.stringify(dasLine));
        newLine.source.data = liveData;
        map.addLayer(newLine);
        var i = [];
        for (var k = 0; k < featuresLength; k++) {
          i.push(1);
        }
        var animateLine = function(timestamp) {
          var hitTheEnd = 0;
          for (var k = 0; k < featuresLength; k++) {
            if (liveData.features[k].geometry.coordinates.length == coordinatesArray[k].length) {
              hitTheEnd++;
            } else {
              liveData.features[k].geometry.coordinates = liveData.features[k].geometry.coordinates.concat([coordinatesArray[k][i[k]]]);
              i[k] = i[k] + 1;
            }
          }
          if (hitTheEnd == featuresLength) {
            return;
          }
          map.getSource(newLine.id).setData(liveData);
          requestAnimationFrame(animateLine);
        };
        animateLine();
      }
    };

    map.on('click', () => proceedAlong(this, this.state));

    var proceedAlong = function(ref, state) {
      ref.setState((prevState, props) => ({
        linesAdded: state.linesAdded + 1
      }));
      if (state.linesAdded == 1) {
        map.setPaintProperty("cuts_cheat", "fill-opacity", 1);
        map.setPaintProperty("mission_bay", "fill-opacity", 1);
        map.setPaintProperty("mission_swamp", "fill-opacity", 1);
        map.setPaintProperty("mission_creek", "fill-opacity", 1);
        map.setPaintProperty("mission_swamp_2", "fill-opacity", 1);
        map.setPaintProperty("islais_creek", "fill-opacity", 1);
        map.setPaintProperty("islais_swamp", "fill-opacity", 1);
        map.setPaintProperty("islais_bay", "fill-opacity", 1);
        map.setPaintProperty("east_bay_waters", "fill-opacity", 1);
        map.setPaintProperty("bay_view_waters_1", "fill-opacity", 1);
        map.setPaintProperty("bay_view_waters_2", "fill-opacity", 1);
        map.setPaintProperty("financial_waters", "fill-opacity", 1);
        map.setPaintProperty("north_shore_waters", "fill-opacity", 1);
        map.setPaintProperty("hunters_point", "fill-opacity", 1);
        map.setPaintProperty("yb_grid", "fill-opacity", 1);
        map.setPaintProperty("mission_grid", "fill-opacity", 1);
        map.setPaintProperty("bernal_grid", "fill-opacity", 1);
        map.setPaintProperty("dogpatch_grid", "fill-opacity", 1);
        map.setPaintProperty("presidio_heights_grid", "fill-opacity", 1);
        map.setPaintProperty("southern_grid", "fill-opacity", 1);
        map.setPaintProperty("great_south_grid", "fill-opacity", 1);
        map.setPaintProperty("nopa_grid", "fill-opacity", 1);
        map.setPaintProperty("haight_grid", "fill-opacity", 1);
        map.setPaintProperty("duboce_grid", "fill-opacity", 1);
        map.setPaintProperty("presidio_grid", "fill-opacity", 1);
        map.setPaintProperty("inner_richmond_grid", "fill-opacity", 1);
        map.setPaintProperty("landsend_grid", "fill-opacity", 1);
        map.setPaintProperty("glenpark_grid", "fill-opacity", 1);
        map.setPaintProperty("westernaddition_grid", "fill-opacity", 1);
        map.setPaintProperty("castro_grid", "fill-opacity", 1);
        map.setPaintProperty("twinpeaks_grid", "fill-opacity", 1);
        map.setPaintProperty("marina_grid", "fill-opacity", 1);
        map.setPaintProperty("hayes_grid", "fill-opacity", 1);
        map.setPaintProperty("tenderloin_grid", "fill-opacity", 1);
        map.setPaintProperty("merrit_sands", "fill-opacity", 1);
        map.setPaintProperty("mission_sands", "fill-opacity", 1);
        map.setPaintProperty("panhandle_sands", "fill-opacity", 1);
        map.setPaintProperty("richmond_sands", "fill-opacity", 1);
        map.setPaintProperty("inner_richmond_sands", "fill-opacity", 1);
        map.setPaintProperty("park_sands", "fill-opacity", 1);
        map.setPaintProperty("sunset_sands", "fill-opacity", 1);
        map.setPaintProperty("inner_sunset_sands", "fill-opacity", 1);
        map.setPaintProperty("valencia_cut", "fill-opacity", 1);
        map.setPaintProperty("howard_cut", "fill-opacity", 1);
        map.setPaintProperty("mission_cut", "fill-opacity", 1);
        map.setPaintProperty("folsom_cut", "fill-opacity", 1);
        map.setPaintProperty("soma_sands", "fill-opacity", 1);
        map.setPaintProperty("bay_view_grid", "fill-opacity", 1);
        map.setPaintProperty("hayes_sands", "fill-opacity", 1);
        map.setPaintProperty("presidio_heights_sands", "fill-opacity", 1);
        map.setPaintProperty("nopa_sands", "fill-opacity", 1);
        map.setPaintProperty("nob_hill_grid_base", "fill-opacity", 1);
        map.setPaintProperty("twin_peaks_base", "fill-opacity", 1);
        map.setPaintProperty("tele_hill_base", "fill-opacity", 1);
        map.setPaintProperty("p_base", "fill-opacity", 1);
        map.setPaintProperty("b_base", "fill-opacity", 1);
        map.setPaintProperty("nob_hill_grid_base", "fill-opacity", 1);
        map.setPaintProperty("nob_hill_grid_1", "fill-opacity", 1);
        map.setPaintProperty("nob_hill_grid_2", "fill-opacity", 1);
        map.setPaintProperty("nob_hill_grid_3", "fill-opacity", 1);
        map.setPaintProperty("nob_hill_grid_4", "fill-opacity", 1);
        map.setPaintProperty("tele_hill_grid_2", "fill-opacity", 1);
        map.setPaintProperty("tele_hill_grid_3", "fill-opacity", 1);
        map.setPaintProperty("tele_hill_grid_4", "fill-opacity", 1);
        map.setPaintProperty("tele_hill_grid_5", "fill-opacity", 1);
        map.setPaintProperty("p_2", "fill-opacity", 1);
        map.setPaintProperty("p_3", "fill-opacity", 1);
        map.setPaintProperty("p_4", "fill-opacity", 1);
        map.setPaintProperty("p_5", "fill-opacity", 1);
        map.setPaintProperty("b_2", "fill-opacity", 1);
        map.setPaintProperty("b_3", "fill-opacity", 1);
        map.setPaintProperty("b_4", "fill-opacity", 1);
        map.setPaintProperty("b_5", "fill-opacity", 1);
        map.setPaintProperty("twin_peaks_2", "fill-opacity", 1);
        map.setPaintProperty("twin_peaks_3", "fill-opacity", 1);
        map.setPaintProperty("twin_peaks_4", "fill-opacity", 1);
        map.setPaintProperty("twin_peaks_5", "fill-opacity", 1);
        map.setPaintProperty("twin_peaks_6", "fill-opacity", 1);
        map.setPaintProperty("twin_peaks_7", "fill-opacity", 1);
        map.setPaintProperty("excelsior_grid", "fill-opacity", 1);
      } else if (state.linesAdded == 2) {
        map.setPaintProperty("san_francisco_grid", "fill-opacity", .1);
        map.setPaintProperty("soma_grid", "fill-opacity", .1);
        animateInLine(lines.highways);
      } else if (state.linesAdded == 3) {
        map.setPaintProperty("soma_grid", "fill-opacity", 0);
      } else if (state.linesAdded == 4) {
        map.setPaintProperty("san_francisco_grid", "fill-opacity", 0);
        map.setPaintProperty("soma_grid", "fill-opacity", .1);
      } else if (state.linesAdded == 5) {
        map.setPaintProperty("soma_grid", "fill-opacity", 0);
        map.flyTo(chapters.scene1);
      } else if (state.linesAdded == 6) {
        animateInLine(lines.SFMSRR_01);
        map.setPaintProperty("valencia_cut", "fill-opacity", 0);
      } else if (state.linesAdded == 7) {
        animateInLine(lines.SFMSRR_02);
        map.setPaintProperty("hayes_sands", "fill-opacity", 0);
        map.setPaintProperty("hayes_grid", "fill-color", "#4F7A3A");
        map.setPaintProperty("hayes_grid", "fill-opacity", .1);
        map.setPaintProperty("mission_grid", "fill-color", "#4F7A3A");
        map.setPaintProperty("mission_grid", "fill-opacity", .1);
      } else if (state.linesAdded == 8) {
        animateInLine(lines.OMR_01);
        map.setPaintProperty("hayes_grid", "fill-opacity", 0);
        map.setPaintProperty("mission_grid", "fill-opacity", 0);
        map.setPaintProperty(lines.SFMSRR_02.id, 'line-opacity', .2);
        map.setPaintProperty(lines.SFMSRR_01.id, 'line-opacity', .2);
        } else if (state.linesAdded == 9) {
        animateInLine(lines.OMR_02);
        map.setPaintProperty("howard_cut", "fill-opacity", 0);
        map.setPaintProperty("tenderloin_grid", "fill-opacity", 0);
      } else if (state.linesAdded == 10) {
        animateInLine(lines.NBMRR_01);
        map.setPaintProperty(lines.OMR_01.id, 'line-opacity', .2);
        map.setPaintProperty(lines.OMR_02.id, 'line-opacity', .2);
      } else if (state.linesAdded == 11) {
        animateInLine(lines.NBMRR_02);
        map.setPaintProperty("folsom_cut", "fill-opacity", 0);
      } else if (state.linesAdded == 12) {
        animateInLine(lines.CRC_01);
        map.setPaintProperty("soma_sands", "fill-opacity", 0);
        map.setPaintProperty(lines.NBMRR_01.id, 'line-opacity', .2);
        map.setPaintProperty(lines.NBMRR_02.id, 'line-opacity', .2);  
      } else if (state.linesAdded == 13) {
        animateInLine(lines.CRC_02);
        map.setPaintProperty("cemeteries", "fill-opacity", 1);
      } else if (state.linesAdded == 14) {
        animateInLine(lines.CityRC_01);
        map.setPaintProperty(lines.CRC_01.id, 'line-opacity', .2);
        map.setPaintProperty(lines.CRC_02.id, 'line-opacity', .2);  
        map.setPaintProperty("financial_waters", "fill-opacity", 0);
        map.setPaintProperty("mission_cut", "fill-opacity", 0);
      } else if (state.linesAdded == 15) {
        animateInLine(lines.SFSJRR_01, 10);
        animateInLine(lines.SFSJRR_02);
        map.setPaintProperty(lines.CityRC_01.id, 'line-opacity', .2);
      } else if (state.linesAdded == 16) {
        map.flyTo(chapters.scene2);
        animateInLine(lines.MISSION_Bridges);
        map.setPaintProperty(lines.SFSJRR_01.id, 'line-opacity', .2);
        map.setPaintProperty(lines.SFSJRR_02.id, 'line-opacity', .2);  
      } else if (state.linesAdded == 17) {
        animateInLine(lines.PBVRRC_01);
      } else if (state.linesAdded == 18) {
        map.setPaintProperty(lines.PBVRRC_01.id, 'line-opacity', .2);
        map.setPaintProperty(lines.MISSION_Bridges.id, 'line-opacity', .2);
        map.flyTo(chapters.scene3);
      } else if (state.linesAdded == 19) {
        animateInLine(lines.SSR_01);
      } else if (state.linesAdded == 20) {
        map.setPaintProperty("panhandle_sands", "fill-opacity", 0);
        map.setPaintProperty("vanness_grid", "fill-opacity", 0);
        map.setPaintProperty("westernaddition_grid", "fill-opacity", .1);
        map.setPaintProperty("westernaddition_grid", "fill-color", "#8477B0");
        animateInLine(lines.SSR_02);
      } else if (state.linesAdded == 21) {
        map.setPaintProperty("westernaddition_grid", "fill-opacity", 0);
        animateInLine(lines.SFMSRR_03);
        map.setPaintProperty(lines.SSR_01.id, 'line-opacity', .2);
        map.setPaintProperty(lines.SSR_02.id, 'line-opacity', .2);
        map.setPaintProperty(lines.SFMSRR_01.id, 'line-opacity', 1);
        map.setPaintProperty(lines.SFMSRR_02.id, 'line-opacity', 1); 
        map.setPaintProperty("mission_sands", "fill-opacity", 0);
        map.setPaintProperty("duboce_grid", "fill-opacity", .1);
        map.setPaintProperty("duboce_grid", "fill-color", "#4F7A3A");
      } else if (state.linesAdded == 22) {
        map.setPaintProperty("park_sands", "fill-opacity", 0);
        map.setPaintProperty("gg_park", "fill-opacity", .2);
        map.setPaintProperty("pacheights_grid", "fill-opacity", 0);
        map.setPaintProperty("duboce_grid", "fill-opacity", 0);
        map.setPaintProperty(lines.SFMSRR_01.id, 'line-opacity', .2);
        map.setPaintProperty(lines.SFMSRR_02.id, 'line-opacity', .2);
        map.setPaintProperty(lines.SFMSRR_03.id, 'line-opacity', .2); 
        animateInLine(lines.CSHRR_01);
        map.setPaintProperty("presidio_heights_grid", "fill-opacity", .1);
        map.setPaintProperty("presidio_heights_grid", "fill-color", "#F59421");
        map.setPaintProperty("presidio_heights_sands", "fill-opacity", 0);
      } else if (state.linesAdded == 23) {
        map.setPaintProperty(lines.CSHRR_01.id, 'line-opacity', .2);
        map.setPaintProperty("presidio_heights_grid", "fill-opacity", 0);
        animateInLine(lines.CSRWCC_01);
      } else if (state.linesAdded == 24) {
        map.setPaintProperty(lines.CSRWCC_01.id, 'line-opacity', .2);
        animateInLine(lines.PFRRC_01);
        animateInLine(lines.PFRRC_02);
        map.setPaintProperty("presidio_grid", "fill-opacity", .2);
        map.setPaintProperty("presidio_grid", "fill-color", "#96c5ad");
      } else if (state.linesAdded == 25) {
        map.setPaintProperty(lines.PFRRC_01.id, 'line-opacity', .2);
        map.setPaintProperty(lines.PFRRC_02.id, 'line-opacity', .2);
        map.setPaintProperty(lines.SFMSRR_01.id, 'line-opacity', 1);
        map.setPaintProperty(lines.SFMSRR_02.id, 'line-opacity', 1);
        map.setPaintProperty(lines.SFMSRR_03.id, 'line-opacity', 1);  
        animateInLine(lines.SFMSRR_04);
        map.setPaintProperty("nopa_sands", "fill-opacity", 0);
        map.setPaintProperty("nopa_grid", "fill-color", "#4F7A3A");
        map.setPaintProperty("nopa_grid", "fill-opacity", .1);
        map.setPaintProperty("haight_grid", "fill-color", "#4F7A3A");
        map.setPaintProperty("haight_grid", "fill-opacity", .1);
      } else if (state.linesAdded == 26) {
        map.setPaintProperty("haight_grid", "fill-opacity", 0);
        map.setPaintProperty("nopa_grid", "fill-opacity", 0);
        map.flyTo(chapters.scene4);
      } else if (state.linesAdded == 27) {
        animateInLine(lines.PORC_01);
        map.setPaintProperty("panhandle_grid", "fill-opacity", 0);
      } else if (state.linesAdded == 28) {
        map.setPaintProperty(lines.PORC_01.id, 'line-opacity', .2);
        map.setPaintProperty(lines.SFMSRR_01.id, 'line-opacity', .2);
        map.setPaintProperty(lines.SFMSRR_02.id, 'line-opacity', .2);
        map.setPaintProperty(lines.SFMSRR_03.id, 'line-opacity', .2);
        map.setPaintProperty(lines.SFMSRR_04.id, 'line-opacity', .2);  
        animateInLine(lines.PSRR_01);
      } else if (state.linesAdded == 29) {
        map.setPaintProperty(lines.PSRR_01.id, 'line-color', "#F59421");
        map.setPaintProperty(lines.CSHRR_01.id, 'line-color', '#F59421');
        map.setPaintProperty(lines.CSHRR_01.id, 'line-opacity', 1);
        animateInLine(lines.FCHRC_01);
      } else if (state.linesAdded == 30) {
        animateInLine(lines.FCHRC_02);
        map.setPaintProperty("inner_richmond_sands", "fill-opacity", 0);
        map.setPaintProperty("inner_richmond_grid", "fill-opacity", .1);
        map.setPaintProperty("inner_richmond_grid", "fill-color", "#F59421");
      } else if (state.linesAdded == 31) {
        map.setPaintProperty("inner_richmond_grid", "fill-opacity", 0);
        map.setPaintProperty(lines.CSHRR_01.id, 'line-opacity', .2);
        map.setPaintProperty(lines.PSRR_01.id, 'line-opacity', .2);
        map.setPaintProperty(lines.FCHRC_01.id, 'line-opacity', .2);
        map.setPaintProperty(lines.FCHRC_02.id, 'line-opacity', .2);
        map.flyTo(chapters.scene5);
      } else if (state.linesAdded == 32) {
        map.setPaintProperty(lines.OMR_01.id, 'line-opacity', 1);
        map.setPaintProperty(lines.OMR_02.id, 'line-opacity', 1);  
        animateInLine(lines.OMR_03);
        map.setPaintProperty("mission_swamp", "fill-opacity", 0);
        map.setPaintProperty("mission_creek", "fill-opacity", 0);
        map.setPaintProperty("mission_swamp_2", "fill-opacity", 0);
        map.setPaintProperty("dogpatch_grid", "fill-opacity", 0);
        map.setPaintProperty("cuts_cheat", "fill-opacity", 0);
      } else if (state.linesAdded == 33) {
        map.setPaintProperty(lines.OMR_03.id, 'line-opacity', .2);
        map.setPaintProperty(lines.OMR_01.id, 'line-opacity', .2);
        map.setPaintProperty(lines.OMR_02.id, 'line-opacity', .2);
        map.setPaintProperty(lines.SFMSRR_01.id, 'line-opacity', 1);
        map.setPaintProperty(lines.SFMSRR_02.id, 'line-opacity', 1);
        map.setPaintProperty(lines.SFMSRR_03.id, 'line-opacity', 1);
        map.setPaintProperty(lines.SFMSRR_04.id, 'line-opacity', 1);  
        animateInLine(lines.SFMSRR_05);
        map.setPaintProperty("castro_grid", "fill-opacity", .1);
        map.setPaintProperty("castro_grid", "fill-color", "#4F7A3A");
      } else if (state.linesAdded == 34) {
        map.setPaintProperty(lines.SFMSRR_01.id, 'line-opacity', .2);
        map.setPaintProperty(lines.SFMSRR_02.id, 'line-opacity', .2);
        map.setPaintProperty(lines.SFMSRR_03.id, 'line-opacity', .2);
        map.setPaintProperty(lines.SFMSRR_04.id, 'line-opacity', .2);
        map.setPaintProperty(lines.SFMSRR_05.id, 'line-opacity', .2);
        map.setPaintProperty(lines.CSRWCC_01.id, 'line-opacity', 1);
        map.setPaintProperty("castro_grid", "fill-opacity", 0);
        map.setPaintProperty("marina_grid", "fill-opacity", .2);
        map.setPaintProperty("marina_grid", "fill-color", "#8ECCEF");
        animateInLine(lines.CSRWCC_02);
      } else if (state.linesAdded == 35) {
        map.setPaintProperty("marina_grid", "fill-opacity", 0);
        animateInLine(lines.CSRWCC_03);
      } else if (state.linesAdded == 36) {
        animateInLine(lines.SFSJRR_03);
        map.setPaintProperty(lines.CSRWCC_02.id, 'line-opacity', .2);
        map.setPaintProperty(lines.CSRWCC_01.id, 'line-opacity', .2);
        map.setPaintProperty(lines.CSRWCC_03.id, 'line-opacity', .2);
        map.setPaintProperty(lines.SFSJRR_01.id, 'line-opacity', 1);
        map.setPaintProperty(lines.SFSJRR_02.id, 'line-opacity', 0);  
      } else if (state.linesAdded == 37) {
        map.setPaintProperty(lines.SFSJRR_01.id, 'line-opacity', .2);
        map.setPaintProperty(lines.SFSJRR_03.id, 'line-opacity', .2);  
        animateInLine(lines.SFSMRC_01);
      } else if (state.linesAdded == 38) {
        animateInLine(lines.SFSMRC_02);
      } else if (state.linesAdded == 39) {
        map.setPaintProperty(lines.SFSMRC_01.id, 'line-opacity', .2);
        map.setPaintProperty(lines.SFSMRC_02.id, 'line-opacity', .2);
        map.setPaintProperty("inner_sunset_sands", "fill-opacity", 0);
        map.setPaintProperty("inner_sunset_grid", "fill-opacity", .1);
        map.setPaintProperty("inner_sunset_grid", "fill-color", "#4F7A3A");
        map.setPaintProperty(lines.SFMSRR_01.id, 'line-opacity', 1);
        map.setPaintProperty(lines.SFMSRR_02.id, 'line-opacity', 1);
        map.setPaintProperty(lines.SFMSRR_03.id, 'line-opacity', 1);
        map.setPaintProperty(lines.SFMSRR_04.id, 'line-opacity', 1);
        map.setPaintProperty(lines.SFMSRR_05.id, 'line-opacity', 1);
        map.setPaintProperty(lines.PORC_01.id, 'line-opacity', 1);
        animateInLine(lines.SFMSRR_06); 
      } else if (state.linesAdded == 40) {
        map.setPaintProperty("inner_sunset_grid", "fill-opacity", 0);
        map.setPaintProperty(lines.PSRR_01.id, 'line-color', "#4F7A3A");
        map.setPaintProperty(lines.PSRR_01.id, 'line-opacity', 1);
        map.setPaintProperty(lines.CSHRR_01.id, 'line-color', '#4F7A3A');
        map.setPaintProperty(lines.CSHRR_01.id, 'line-opacity', 1);
        map.setPaintProperty(lines.FCHRC_01.id, 'line-color', "#4F7A3A");
        map.setPaintProperty(lines.FCHRC_01.id, 'line-opacity', 1);
        map.setPaintProperty(lines.FCHRC_02.id, 'line-color', "#4F7A3A");
        map.setPaintProperty(lines.FCHRC_02.id, 'line-opacity', 1);
        map.setPaintProperty(lines.OMR_01.id, 'line-color', "#4F7A3A");
        map.setPaintProperty(lines.OMR_01.id, 'line-opacity', 1);
        map.setPaintProperty(lines.OMR_02.id, 'line-color', "#4F7A3A");
        map.setPaintProperty(lines.OMR_02.id, 'line-opacity', 1);
        map.setPaintProperty(lines.OMR_03.id, 'line-color', "#4F7A3A");
        map.setPaintProperty(lines.OMR_03.id, 'line-opacity', 1);
        map.setPaintProperty(lines.NBMRR_01.id, 'line-color', "#4F7A3A");
        map.setPaintProperty(lines.NBMRR_01.id, 'line-opacity', 1);
        map.setPaintProperty(lines.NBMRR_02.id, 'line-color', "#4F7A3A");
        map.setPaintProperty(lines.NBMRR_02.id, 'line-opacity', 1);
        map.setPaintProperty(lines.CRC_01.id, 'line-color', "#4F7A3A");
        map.setPaintProperty(lines.CRC_01.id, 'line-opacity', 1);
        map.setPaintProperty(lines.CRC_02.id, 'line-color', "#4F7A3A");
        map.setPaintProperty(lines.CRC_02.id, 'line-opacity', 1);
        map.setPaintProperty(lines.CityRC_01.id, 'line-color', "#4F7A3A");
        map.setPaintProperty(lines.CityRC_01.id, 'line-opacity', 1);
        map.setPaintProperty(lines.PBVRRC_01.id, 'line-color', "#4F7A3A");
        map.setPaintProperty(lines.PBVRRC_01.id, 'line-opacity', 1);
      } else if (state.linesAdded == 41) {
        map.setPaintProperty(lines.PSRR_01.id, 'line-opacity', .2);
        map.setPaintProperty(lines.CSHRR_01.id, 'line-opacity', .2);
        map.setPaintProperty(lines.SFMSRR_01.id, 'line-opacity', .2);
        map.setPaintProperty(lines.SFMSRR_02.id, 'line-opacity', .2);
        map.setPaintProperty(lines.SFMSRR_03.id, 'line-opacity', .2);
        map.setPaintProperty(lines.SFMSRR_04.id, 'line-opacity', .2);
        map.setPaintProperty(lines.SFMSRR_05.id, 'line-opacity', .2);
        map.setPaintProperty(lines.SFMSRR_06.id, 'line-opacity', .2);
        map.setPaintProperty(lines.NBMRR_01.id, 'line-opacity', .2);
        map.setPaintProperty(lines.NBMRR_02.id, 'line-opacity', .2);
        map.setPaintProperty(lines.SFSMRC_01.id, 'line-opacity', .2);
        map.setPaintProperty(lines.SFSMRC_02.id, 'line-opacity', .2);
        map.setPaintProperty(lines.PORC_01.id, 'line-opacity', .2);
        map.setPaintProperty(lines.CRC_01.id, 'line-opacity', .2);
        map.setPaintProperty(lines.CRC_02.id, 'line-opacity', .2);
        map.setPaintProperty(lines.CityRC_01.id, 'line-opacity', .2);
        map.setPaintProperty(lines.PBVRRC_01.id, 'line-opacity', .2);
        map.setPaintProperty(lines.FCHRC_01.id, 'line-opacity', .2);
        map.setPaintProperty(lines.FCHRC_02.id, 'line-opacity', .2);
        map.setPaintProperty(lines.OMR_01.id, 'line-opacity', .2);
        map.setPaintProperty(lines.OMR_02.id, 'line-opacity', .2);
        map.setPaintProperty(lines.OMR_03.id, 'line-opacity', .2);
        map.setPaintProperty(lines.SSR_01.id, 'line-opacity', 1);
        map.setPaintProperty(lines.SSR_02.id, 'line-opacity', 1);
        animateInLine(lines.SSR_03);
        map.setPaintProperty("landsend_grid", "fill-opacity", 0);  
        map.setPaintProperty("richmond_sands", "fill-opacity", 0);
        map.setPaintProperty("richmond_grid", "fill-opacity", .1);
        map.setPaintProperty("richmond_grid", "fill-color", "#8477B0");
      } else if (state.linesAdded == 42) {
        map.setPaintProperty("richmond_grid", "fill-opacity", 0);
        map.setPaintProperty(lines.SSR_01.id, 'line-color', "#4F7A3A");
        map.setPaintProperty(lines.SSR_02.id, 'line-color', "#4F7A3A");
        map.setPaintProperty(lines.SSR_03.id, 'line-color', "#4F7A3A");
        map.setPaintProperty(lines.SFSMRC_01.id, 'line-color', "#4F7A3A");
        map.setPaintProperty(lines.SFSMRC_02.id, 'line-color', "#4F7A3A");
        map.setPaintProperty(lines.PSRR_01.id, 'line-opacity', 1);
        map.setPaintProperty(lines.CSHRR_01.id, 'line-opacity', 1);
        map.setPaintProperty(lines.SFSMRC_01.id, 'line-opacity', 1);
        map.setPaintProperty(lines.SFSMRC_02.id, 'line-opacity', 1);
        map.setPaintProperty(lines.OMR_01.id, 'line-opacity', 1);
        map.setPaintProperty(lines.OMR_02.id, 'line-opacity', 1);
        map.setPaintProperty(lines.OMR_03.id, 'line-opacity', 1);
        map.setPaintProperty(lines.FCHRC_01.id, 'line-opacity', 1);
        map.setPaintProperty(lines.FCHRC_02.id, 'line-opacity', 1);
        map.setPaintProperty(lines.SFMSRR_01.id, 'line-opacity', 1);
        map.setPaintProperty(lines.SFMSRR_02.id, 'line-opacity', 1);
        map.setPaintProperty(lines.SFMSRR_03.id, 'line-opacity', 1);
        map.setPaintProperty(lines.SFMSRR_04.id, 'line-opacity', 1);
        map.setPaintProperty(lines.SFMSRR_05.id, 'line-opacity', 1);
        map.setPaintProperty(lines.SFMSRR_06.id, 'line-opacity', 1);
        map.setPaintProperty(lines.PORC_01.id, 'line-opacity', 1);
        map.setPaintProperty(lines.NBMRR_01.id, 'line-opacity', 1);
        map.setPaintProperty(lines.NBMRR_02.id, 'line-opacity', 1);
        map.setPaintProperty(lines.CRC_01.id, 'line-opacity', 1);
        map.setPaintProperty(lines.CRC_02.id, 'line-opacity', 1);
        map.setPaintProperty(lines.CityRC_01.id, 'line-opacity', 1);
        map.setPaintProperty(lines.PBVRRC_01.id, 'line-opacity', 1);  
      } else if (state.linesAdded == 43) {
        map.flyTo(chapters.zoomedOutCentrail);
      } else if (state.linesAdded == 44) {
        map.flyTo(chapters.zoomedOutCentrail);
        map.setPaintProperty("glenpark_grid", "fill-opacity", .1);
        map.setPaintProperty("glenpark_grid", "fill-color", "#4F7A3A");
        map.setPaintProperty("excelsior_grid", "fill-opacity", .1);
        map.setPaintProperty("excelsior_grid", "fill-color", "#4F7A3A");
        map.setPaintProperty("bernal_grid", "fill-opacity", .1);
        map.setPaintProperty("bernal_grid", "fill-color", "#4F7A3A");
        animateInLine(lines.SFMSRR_07);
      } else if (state.linesAdded == 45) {
        map.setPaintProperty("glenpark_grid", "fill-opacity", 0);
        map.setPaintProperty("excelsior_grid", "fill-opacity", 0);
        map.setPaintProperty("bernal_grid", "fill-opacity", 0);
        map.flyTo(chapters.aldgate);
      } else if (state.linesAdded == 46) {
        animateInLine(lines.SFMSRR_08);
      } else if (state.linesAdded == 47) {
        map.setPaintProperty(lines.PSRR_01.id, 'line-opacity', .2);
        map.setPaintProperty(lines.CSHRR_01.id, 'line-opacity', .2);
        map.setPaintProperty(lines.FCHRC_01.id, 'line-opacity', .2);
        map.setPaintProperty(lines.FCHRC_02.id, 'line-opacity', .2);
        map.setPaintProperty(lines.SSR_01.id, 'line-opacity', .2);
        map.setPaintProperty(lines.SSR_02.id, 'line-opacity', .2);
        map.setPaintProperty(lines.SSR_03.id, 'line-opacity', .2);
        map.setPaintProperty(lines.SFSMRC_01.id, 'line-opacity', .2);
        map.setPaintProperty(lines.SFSMRC_02.id, 'line-opacity', .2);
        map.setPaintProperty(lines.SFSMRC_01.id, 'line-opacity', .2);
        map.setPaintProperty(lines.SFSMRC_02.id, 'line-opacity', .2);
        map.setPaintProperty(lines.OMR_01.id, 'line-opacity', .2);
        map.setPaintProperty(lines.OMR_02.id, 'line-opacity', .2);
        map.setPaintProperty(lines.OMR_03.id, 'line-opacity', .2);
        map.setPaintProperty(lines.SFMSRR_01.id, 'line-opacity', .2);
        map.setPaintProperty(lines.SFMSRR_02.id, 'line-opacity', .2);
        map.setPaintProperty(lines.SFMSRR_03.id, 'line-opacity', .2);
        map.setPaintProperty(lines.SFMSRR_04.id, 'line-opacity', .2);
        map.setPaintProperty(lines.SFMSRR_05.id, 'line-opacity', .2);
        map.setPaintProperty(lines.SFMSRR_06.id, 'line-opacity', .2);
        map.setPaintProperty(lines.PORC_01.id, 'line-opacity', .2);
        map.setPaintProperty(lines.NBMRR_01.id, 'line-opacity', .2);
        map.setPaintProperty(lines.NBMRR_02.id, 'line-opacity', .2);
        map.setPaintProperty(lines.CRC_01.id, 'line-opacity', .2);
        map.setPaintProperty(lines.CRC_02.id, 'line-opacity', .2);
        map.setPaintProperty(lines.CityRC_01.id, 'line-opacity', .2);
        map.setPaintProperty(lines.PBVRRC_01.id, 'line-opacity', .2);
        map.setPaintProperty(lines.SFMSRR_07.id, 'line-opacity', .2);
        map.setPaintProperty(lines.SFMSRR_08.id, 'line-opacity', .2);
        map.setPaintProperty("fire", "fill-opacity", .7);  
      } else if (state.linesAdded == 48) {
        map.setPaintProperty("fire", "fill-opacity", 0);  
        map.flyTo(chapters.Oakland);
      } else if (state.linesAdded == 49) {
        animateInLine(lines.LINE_OaklandTraction, 35);
      } else if (state.linesAdded == 51) {
        map.setPaintProperty(lines.LINE_OaklandTraction.id, 'line-opacity', .2);
        animateInLine(lines.LINE_KeySystem);
      } else if (state.linesAdded == 52) {
        animateInLine(lines.KeySystemPier, 10);
      } else if (state.linesAdded == 53) {
        animateInLine(lines.KeySystemFerryRoute, 10);
      } else if (state.linesAdded == 54) {
        animateInLine(lines.NWPacFerryRoute, 10);
        map.setPaintProperty(lines.LINE_KeySystem.id, 'line-opacity', .2);
        map.setPaintProperty(lines.KeySystemFerryRoute.id, 'line-opacity', .2);
        map.setPaintProperty(lines.KeySystemPier.id, 'line-opacity', .2);  
        map.flyTo(chapters.Marin);
      } else if (state.linesAdded == 55) {
        animateInLine(lines.NWPAC, 10);
      } else if (state.linesAdded == 56) {
        map.setPaintProperty(lines.NWPAC.id, 'line-opacity', .2);
        map.setPaintProperty(lines.NWPacFerryRoute.id, 'line-opacity', .2);  
        map.flyTo(chapters.zoomedOutCentrail2);
      } else if (state.linesAdded == 57) {
        map.setPaintProperty(lines.PSRR_01.id, 'line-opacity', 1);
        map.setPaintProperty(lines.CSHRR_01.id, 'line-opacity', 1);
        map.setPaintProperty(lines.FCHRC_01.id, 'line-opacity', 1);
        map.setPaintProperty(lines.FCHRC_02.id, 'line-opacity', 1);
        map.setPaintProperty(lines.SSR_01.id, 'line-opacity', 1);
        map.setPaintProperty(lines.SSR_02.id, 'line-opacity', 1);
        map.setPaintProperty(lines.SSR_03.id, 'line-opacity', 1);
        map.setPaintProperty(lines.SFSMRC_01.id, 'line-opacity', 1);
        map.setPaintProperty(lines.SFSMRC_02.id, 'line-opacity', 1);
        map.setPaintProperty(lines.SFSMRC_01.id, 'line-opacity', 1);
        map.setPaintProperty(lines.SFSMRC_02.id, 'line-opacity', 1);
        map.setPaintProperty(lines.OMR_01.id, 'line-opacity', 1);
        map.setPaintProperty(lines.OMR_02.id, 'line-opacity', 1);
        map.setPaintProperty(lines.OMR_03.id, 'line-opacity', 1);
        map.setPaintProperty(lines.SFMSRR_01.id, 'line-opacity', 1);
        map.setPaintProperty(lines.SFMSRR_02.id, 'line-opacity', 1);
        map.setPaintProperty(lines.SFMSRR_03.id, 'line-opacity', 1);
        map.setPaintProperty(lines.SFMSRR_04.id, 'line-opacity', 1);
        map.setPaintProperty(lines.SFMSRR_05.id, 'line-opacity', 1);
        map.setPaintProperty(lines.SFMSRR_06.id, 'line-opacity', 1);
        map.setPaintProperty(lines.PORC_01.id, 'line-opacity', 1);
        map.setPaintProperty(lines.NBMRR_01.id, 'line-opacity', 1);
        map.setPaintProperty(lines.NBMRR_02.id, 'line-opacity', 1);
        map.setPaintProperty(lines.CRC_01.id, 'line-opacity', 1);
        map.setPaintProperty(lines.CRC_02.id, 'line-opacity', 1);
        map.setPaintProperty(lines.CityRC_01.id, 'line-opacity', 1);
        map.setPaintProperty(lines.PBVRRC_01.id, 'line-opacity', 1);
        map.setPaintProperty(lines.SFMSRR_07.id, 'line-opacity', 1);
        map.setPaintProperty(lines.SFMSRR_08.id, 'line-opacity', 1);
        map.setPaintProperty(lines.SFMSRR_09.id, 'line-opacity', 1);  
        animateInLine(lines.SFMSRR_09);
        map.setPaintProperty("sunset_sands", "fill-opacity", 0);
      } else if (state.linesAdded == 58) {
        map.setPaintProperty(lines.SFMSRR_09.id, 'line-opacity', .2);
        map.setPaintProperty(lines.PSRR_01.id, 'line-opacity', .2);
        map.setPaintProperty(lines.CSHRR_01.id, 'line-opacity', .2);
        map.setPaintProperty(lines.FCHRC_01.id, 'line-opacity', .2);
        map.setPaintProperty(lines.FCHRC_02.id, 'line-opacity', .2);
        map.setPaintProperty(lines.SSR_01.id, 'line-opacity', .2);
        map.setPaintProperty(lines.SSR_02.id, 'line-opacity', .2);
        map.setPaintProperty(lines.SSR_03.id, 'line-opacity', .2);
        map.setPaintProperty(lines.SFSMRC_01.id, 'line-opacity', .2);
        map.setPaintProperty(lines.SFSMRC_02.id, 'line-opacity', .2);
        map.setPaintProperty(lines.SFSMRC_01.id, 'line-opacity', .2);
        map.setPaintProperty(lines.SFSMRC_02.id, 'line-opacity', .2);
        map.setPaintProperty(lines.OMR_01.id, 'line-opacity', .2);
        map.setPaintProperty(lines.OMR_02.id, 'line-opacity', .2);
        map.setPaintProperty(lines.OMR_03.id, 'line-opacity', .2);
        map.setPaintProperty(lines.SFMSRR_01.id, 'line-opacity', .2);
        map.setPaintProperty(lines.SFMSRR_02.id, 'line-opacity', .2);
        map.setPaintProperty(lines.SFMSRR_03.id, 'line-opacity', .2);
        map.setPaintProperty(lines.SFMSRR_04.id, 'line-opacity', .2);
        map.setPaintProperty(lines.SFMSRR_05.id, 'line-opacity', .2);
        map.setPaintProperty(lines.SFMSRR_06.id, 'line-opacity', .2);
        map.setPaintProperty(lines.PORC_01.id, 'line-opacity', .2);
        map.setPaintProperty(lines.NBMRR_01.id, 'line-opacity', .2);
        map.setPaintProperty(lines.NBMRR_02.id, 'line-opacity', .2);
        map.setPaintProperty(lines.CRC_01.id, 'line-opacity', .2);
        map.setPaintProperty(lines.CRC_02.id, 'line-opacity', .2);
        map.setPaintProperty(lines.CityRC_01.id, 'line-opacity', .2);
        map.setPaintProperty(lines.PBVRRC_01.id, 'line-opacity', .2);
        map.setPaintProperty(lines.SFMSRR_07.id, 'line-opacity', .2);
        map.setPaintProperty(lines.SFMSRR_08.id, 'line-opacity', .2);
        map.setPaintProperty(lines.SFMSRR_09.id, 'line-opacity', .2);  
        map.setPaintProperty(lines.MISSION_Bridges.id, 'line-opacity', 0);
        map.flyTo(chapters.sfProper);
      } else if (state.linesAdded == 59) {
        map.setPaintProperty("mission_bay", "fill-opacity", 0);
        map.setPaintProperty("islais_creek", "fill-opacity", 0);
        map.setPaintProperty("islais_swamp", "fill-opacity", 0);
        map.setPaintProperty("islais_bay", "fill-opacity", 0);
        map.setPaintProperty("bay_view_waters_1", "fill-opacity", 0);
        map.setPaintProperty("bay_view_waters_2", "fill-opacity", 0);
        map.setPaintProperty("financial_waters", "fill-opacity", 0);  
      } else if (state.linesAdded == 60) {
        map.setPaintProperty(lines.SFSJRR_01.id, 'line-opacity', 1);
        map.setPaintProperty(lines.SFSJRR_03.id, 'line-opacity', 1);  
        animateInLine(lines.SFSJRR_04, 35);
      } else if (state.linesAdded == 61) {
        map.setPaintProperty(lines.SFSJRR_01.id, 'line-opacity', .2);
        map.setPaintProperty(lines.SFSJRR_03.id, 'line-opacity', .2);
        map.setPaintProperty(lines.SFSJRR_04.id, 'line-opacity', .2);  
        animateInLine(lines.MUNI_01);
      } else if (state.linesAdded == 62) {
        map.setPaintProperty(lines.PFRRC_01.id, 'line-opacity', 1);
        map.setPaintProperty(lines.PFRRC_02.id, 'line-opacity', 1);
        map.setPaintProperty(lines.PFRRC_01.id, 'line-color', 'deeppink');
        map.setPaintProperty(lines.PFRRC_02.id, 'line-color', 'deeppink');
      } else if (state.linesAdded == 63) {
        map.setPaintProperty("north_shore_waters", "fill-opacity", 0);
        map.setPaintProperty("expo", "fill-opacity", .3);
        map.setPaintProperty("expo2", "fill-opacity", .3);  
        animateInLine(lines.MUNI_02);
      } else if (state.linesAdded == 64) {
        map.flyTo(chapters.zoomedOutCentrail);
        animateInLine(lines.TwinPeaksTunnel);
      } else if (state.linesAdded == 65) {
        animateInLine(lines.MUNI_03);
        map.setPaintProperty("full_sunset", "fill-opacity", .1);
        map.setPaintProperty("expo", "fill-opacity", 0);
        map.setPaintProperty("expo2", "fill-opacity", 0);  
      } else if (state.linesAdded == 66) {
        animateInLine(lines.MUNI_04);
        map.setPaintProperty("full_sunset", "fill-opacity", 0);
      } else if (state.linesAdded == 67) {
        animateInLine(lines.NLineTunnel);
      } else if (state.linesAdded == 68) {
        animateInLine(lines.MUNI_05);
      } else if (state.linesAdded == 69) {
        map.flyTo(chapters.Transbay);
      } else if (state.linesAdded == 70) {
        map.setPaintProperty(lines.KeySystemFerryRoute.id, 'line-opacity', 0);
        map.setPaintProperty(lines.KeySystemPier.id, 'line-opacity', 0);
        map.setPaintProperty(lines.LINE_OaklandTraction.id, 'line-opacity', 1);
        map.setPaintProperty(lines.LINE_KeySystem.id, 'line-opacity', 1);  
      } else if (state.linesAdded == 71) {
        animateInLine(lines.transbay_bridge, 10);
      } else if (state.linesAdded == 72) {
        map.flyTo(chapters.sfProper);
      } else if (state.linesAdded == 73) {
        map.setPaintProperty(lines.PSRR_01.id, 'line-opacity', 1);
        map.setPaintProperty(lines.CSHRR_01.id, 'line-opacity', 1);
        map.setPaintProperty(lines.FCHRC_01.id, 'line-opacity', 1);
        map.setPaintProperty(lines.FCHRC_02.id, 'line-opacity', 1);
        map.setPaintProperty(lines.SSR_01.id, 'line-opacity', 1);
        map.setPaintProperty(lines.SSR_02.id, 'line-opacity', 1);
        map.setPaintProperty(lines.SSR_03.id, 'line-opacity', 1);
        map.setPaintProperty(lines.SFSMRC_01.id, 'line-opacity', 1);
        map.setPaintProperty(lines.SFSMRC_02.id, 'line-opacity', 1);
        map.setPaintProperty(lines.SFSMRC_01.id, 'line-opacity', 1);
        map.setPaintProperty(lines.SFSMRC_02.id, 'line-opacity', 1);
        map.setPaintProperty(lines.OMR_01.id, 'line-opacity', 1);
        map.setPaintProperty(lines.OMR_02.id, 'line-opacity', 1);
        map.setPaintProperty(lines.OMR_03.id, 'line-opacity', 1);
        map.setPaintProperty(lines.SFMSRR_01.id, 'line-opacity', 1);
        map.setPaintProperty(lines.SFMSRR_02.id, 'line-opacity', 1);
        map.setPaintProperty(lines.SFMSRR_03.id, 'line-opacity', 1);
        map.setPaintProperty(lines.SFMSRR_04.id, 'line-opacity', 1);
        map.setPaintProperty(lines.SFMSRR_05.id, 'line-opacity', 1);
        map.setPaintProperty(lines.SFMSRR_06.id, 'line-opacity', 1);
        map.setPaintProperty(lines.PORC_01.id, 'line-opacity', 1);
        map.setPaintProperty(lines.NBMRR_01.id, 'line-opacity', 1);
        map.setPaintProperty(lines.NBMRR_02.id, 'line-opacity', 1);
        map.setPaintProperty(lines.CRC_01.id, 'line-opacity', 1);
        map.setPaintProperty(lines.CRC_02.id, 'line-opacity', 1);
        map.setPaintProperty(lines.CityRC_01.id, 'line-opacity', 1);
        map.setPaintProperty(lines.PBVRRC_01.id, 'line-opacity', 1);
        map.setPaintProperty(lines.SFMSRR_07.id, 'line-opacity', 1);
        map.setPaintProperty(lines.SFMSRR_08.id, 'line-opacity', 1);
        map.setPaintProperty(lines.SFMSRR_09.id, 'line-opacity', 1);
        map.setPaintProperty(lines.PSRR_01.id, 'line-color', "deeppink");
        map.setPaintProperty(lines.CSHRR_01.id, 'line-color', "deeppink");
        map.setPaintProperty(lines.FCHRC_01.id, 'line-color', "deeppink");
        map.setPaintProperty(lines.FCHRC_02.id, 'line-color', "deeppink");
        map.setPaintProperty(lines.SSR_01.id, 'line-color', "deeppink");
        map.setPaintProperty(lines.SSR_02.id, 'line-color', "deeppink");
        map.setPaintProperty(lines.SSR_03.id, 'line-color', "deeppink");
        map.setPaintProperty(lines.SFSMRC_01.id, 'line-color', "deeppink");
        map.setPaintProperty(lines.SFSMRC_02.id, 'line-color', "deeppink");
        map.setPaintProperty(lines.SFSMRC_01.id, 'line-color', "deeppink");
        map.setPaintProperty(lines.SFSMRC_02.id, 'line-color', "deeppink");
        map.setPaintProperty(lines.OMR_01.id, 'line-color', "deeppink");
        map.setPaintProperty(lines.OMR_02.id, 'line-color', "deeppink");
        map.setPaintProperty(lines.OMR_03.id, 'line-color', "deeppink");
        map.setPaintProperty(lines.SFMSRR_01.id, 'line-color', "deeppink");
        map.setPaintProperty(lines.SFMSRR_02.id, 'line-color', "deeppink");
        map.setPaintProperty(lines.SFMSRR_03.id, 'line-color', "deeppink");
        map.setPaintProperty(lines.SFMSRR_04.id, 'line-color', "deeppink");
        map.setPaintProperty(lines.SFMSRR_05.id, 'line-color', "deeppink");
        map.setPaintProperty(lines.SFMSRR_06.id, 'line-color', "deeppink");
        map.setPaintProperty(lines.PORC_01.id, 'line-color', "deeppink");
        map.setPaintProperty(lines.NBMRR_01.id, 'line-color', "deeppink");
        map.setPaintProperty(lines.NBMRR_02.id, 'line-color', "deeppink");
        map.setPaintProperty(lines.CRC_01.id, 'line-color', "deeppink");
        map.setPaintProperty(lines.CRC_02.id, 'line-color', "deeppink");
        map.setPaintProperty(lines.CityRC_01.id, 'line-color', "deeppink");
        map.setPaintProperty(lines.PBVRRC_01.id, 'line-color', "deeppink");
        map.setPaintProperty(lines.SFMSRR_07.id, 'line-color', "deeppink");
        map.setPaintProperty(lines.SFMSRR_08.id, 'line-color', "deeppink");
        map.setPaintProperty(lines.SFMSRR_09.id, 'line-color', "deeppink");
      } else if (state.linesAdded == 74) {
        map.setPaintProperty(lines.CSRWCC_01.id, 'line-opacity', 1);
        map.setPaintProperty(lines.CSRWCC_02.id, 'line-opacity', 1);
        map.setPaintProperty(lines.CSRWCC_03.id, 'line-opacity', 1);  
        map.setPaintProperty(lines.CSRWCC_01.id, 'line-color', "deeppink");
        map.setPaintProperty(lines.CSRWCC_02.id, 'line-color', "deeppink");
        map.setPaintProperty(lines.CSRWCC_03.id, 'line-color', "deeppink");  
      } else if (state.linesAdded == 75) {
        map.flyTo(chapters.zoomedOutTop);
      } else if (state.linesAdded == 76) {
        map.setPaintProperty(lines.NWPAC.id, 'line-opacity', 1);
        map.setPaintProperty(lines.NWPacFerryRoute.id, 'line-opacity', 1);
      } else if (state.linesAdded == 77) {
        map.setPaintProperty(lines.LINE_OaklandTraction.id, 'line-opacity', 0);
        map.setPaintProperty(lines.LINE_KeySystem.id, 'line-opacity', 0);  
        map.setPaintProperty(lines.transbay_bridge.id, 'line-opacity', 0);  
      } else if (state.linesAdded == 78) {
        map.flyTo(chapters.Marin);
        animateInLine(lines.gg_bridge);
      } else if (state.linesAdded == 79) {
        map.setPaintProperty(lines.NWPAC.id, 'line-opacity', 0);
        map.setPaintProperty(lines.NWPacFerryRoute.id, 'line-opacity', 0);
        map.setPaintProperty(lines.gg_bridge.id, 'line-opacity', 0);
      } else if (state.linesAdded == 80) {
        map.flyTo(chapters.original);
      } else if (state.linesAdded == 81) {
        map.setPaintProperty(lines.CSRWCC_01.id, 'line-opacity', 0);
        map.setPaintProperty(lines.CSRWCC_02.id, 'line-opacity', 0);
        map.setPaintProperty(lines.CSRWCC_03.id, 'line-opacity', 0);  
        map.setPaintProperty(lines.PSRR_01.id, 'line-opacity', 0);
        map.setPaintProperty(lines.CSHRR_01.id, 'line-opacity', 0);
        map.setPaintProperty(lines.FCHRC_01.id, 'line-opacity', 0);
        map.setPaintProperty(lines.FCHRC_02.id, 'line-opacity', 0);
        map.setPaintProperty(lines.SSR_01.id, 'line-opacity', 0);
        map.setPaintProperty(lines.SSR_02.id, 'line-opacity', 0);
        map.setPaintProperty(lines.SSR_03.id, 'line-opacity', 0);
        map.setPaintProperty(lines.SFSMRC_01.id, 'line-opacity', 0);
        map.setPaintProperty(lines.SFSMRC_02.id, 'line-opacity', 0);
        map.setPaintProperty(lines.SFSMRC_01.id, 'line-opacity', 0);
        map.setPaintProperty(lines.SFSMRC_02.id, 'line-opacity', 0);
        map.setPaintProperty(lines.OMR_01.id, 'line-opacity', 0);
        map.setPaintProperty(lines.OMR_02.id, 'line-opacity', 0);
        map.setPaintProperty(lines.OMR_03.id, 'line-opacity', 0);
        map.setPaintProperty(lines.SFMSRR_01.id, 'line-opacity', 0);
        map.setPaintProperty(lines.SFMSRR_02.id, 'line-opacity', 0);
        map.setPaintProperty(lines.SFMSRR_03.id, 'line-opacity', 0);
        map.setPaintProperty(lines.SFMSRR_04.id, 'line-opacity', 0);
        map.setPaintProperty(lines.SFMSRR_05.id, 'line-opacity', 0);
        map.setPaintProperty(lines.SFMSRR_06.id, 'line-opacity', 0);
        map.setPaintProperty(lines.PORC_01.id, 'line-opacity', 0);
        map.setPaintProperty(lines.NBMRR_01.id, 'line-opacity', 0);
        map.setPaintProperty(lines.NBMRR_02.id, 'line-opacity', 0);
        map.setPaintProperty(lines.CRC_01.id, 'line-opacity', 0);
        map.setPaintProperty(lines.CRC_02.id, 'line-opacity', 0);
        map.setPaintProperty(lines.CityRC_01.id, 'line-opacity', 0);
        map.setPaintProperty(lines.PBVRRC_01.id, 'line-opacity', 0);
        map.setPaintProperty(lines.SFMSRR_07.id, 'line-opacity', 0);
        map.setPaintProperty(lines.SFMSRR_08.id, 'line-opacity', 0);
        map.setPaintProperty(lines.SFMSRR_09.id, 'line-opacity', 0);
        map.setPaintProperty(lines.MUNI_01.id, 'line-opacity', 0);
        map.setPaintProperty(lines.MUNI_02.id, 'line-opacity', 0);
        map.setPaintProperty(lines.PFRRC_01.id, 'line-opacity', 0);
        map.setPaintProperty(lines.PFRRC_02.id, 'line-opacity', 0);
        map.setPaintProperty(lines.SFSJRR_01.id, 'line-opacity', 0);
        map.setPaintProperty(lines.SFSJRR_02.id, 'line-opacity', 0);
        map.setPaintProperty(lines.SFSJRR_03.id, 'line-opacity', 0);
        map.setPaintProperty(lines.SFSJRR_04.id, 'line-opacity', 0);
      } else if (state.linesAdded == 82) {
        animateInLine(lines.national_register);
      }
    };

    var foceClick = function(b, ex) {
      proceedAlong(b, b.state);
    };

    var timeouts_relative = [3, 5, 5, 5, 6, 6, 6, 6, 6, 6, 6, 7, 7, 7, 7, 7, 7, 7, 7, 12, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 8, 9, 7, 7];
    var timeouts = new Array(timeouts_relative.length);
    timeouts[0] = timeouts_relative[0];
    for (var ll = 1; ll < timeouts_relative.length; ll++) {
      timeouts[ll] = timeouts_relative[ll] + timeouts[ll - 1];
    };
    // var timeouts = [2, 7, 9, 11, 15, 19, 21, 25, 28, 32, 35, 39, 41, 60, 65, 70, 75, 80, 85, 90, 100, 105, 110, 115, 120, 125];

    for (var i = 0; i < timeouts.length; i++) {
      setTimeout(function() {foceClick(this, this.map);}.bind(this), timeouts[i] * 1000);
    };
  }

  render() {
    const { lng, lat, zoom, linesAdded, bear, pit } = this.state;
  

    return (
      <div>          
        <div ref={el => this.mapContainer = el} className="absolute top right left bottom" />
      </div>
    );
  }
}

ReactDOM.render(<Application />, document.getElementById('app'));
