import { Component, Input, ViewChild, NgZone, OnInit } from '@angular/core';
import { MapsAPILoader, AgmMap  } from '@agm/core';
import { GoogleMapsAPIWrapper } from '@agm/core/services';
import { Router }              from '@angular/router';
import {LOC, loc} from '../data/data.model';
//import { AgmSnazzyInfoWindowModule } from '@agm/snazzy-info-window';
declare var google: any;

interface Marker {
  lat: number;
  lng: number;
  label?: string;
  draggable: boolean;
}

interface Location {
  lat: number;
  lng: number;
  viewport?: Object;
  zoom: number;
  marker?: Marker;
}


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})

export class MapComponent implements OnInit {
  current_location:loc ;
  circleRadius:number = 1000; // km
  geocoder:any;
  
  public location:Location = {
    lat: 20.6139,
    lng: 85.2090,
    marker: {
      lat: 28.6139,
      lng: 77.2090,
      draggable: true
    },
    zoom: 4
  };
  locList: loc[] = LOC;
  @ViewChild(AgmMap) map: AgmMap;

  constructor(public mapsApiLoader: MapsAPILoader,
              private zone: NgZone,
              private wrapper: GoogleMapsAPIWrapper,
              private router: Router) {
    this.mapsApiLoader = mapsApiLoader;
    this.zone = zone;
    this.wrapper = wrapper;
    this.mapsApiLoader.load().then(() => {
      this.geocoder = new google.maps.Geocoder();
    });
  }


  ngOnInit() {
      this.location.marker.draggable = true;
      this.locList = LOC;
  }
  current_location_text:string='';
  clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label || index}`)
    this.current_location =  this.locList[index];
    
    this.current_location_text =this.current_location.city+" "+ this.current_location.river;

    //= this.locList[index].city +" "+  label  ;
  }
  
  updateOnMap(index: number) {
    console.log(`submit: ${index}`)
    this.router.navigate(['/work2']);
  }

/*
  findLocation(address) {
    if (!this.geocoder) this.geocoder = new google.maps.Geocoder()
    this.geocoder.geocode({
      'address': address
    }, (results, status) => {
      console.log(results);
      if (status == google.maps.GeocoderStatus.OK) {
        for (var i = 0; i < results[0].address_components.length; i++) {
          let types = results[0].address_components[i].types
          console.log(types);
          if (types.indexOf('locality') != -1) {
            this.location.address_level_2 = results[0].address_components[i].long_name
          }
          if (types.indexOf('country') != -1) {
            this.location.address_country = results[0].address_components[i].long_name
          }
          if (types.indexOf('postal_code') != -1) {
            this.location.address_zip = results[0].address_components[i].long_name
          }
          if (types.indexOf('administrative_area_level_1') != -1) {
            this.location.address_state = results[0].address_components[i].long_name
          }
        }
        if (results[0].geometry.location) {
          this.location.lat = results[0].geometry.location.lat();
          this.location.lng = results[0].geometry.location.lng();
          this.location.marker.lat = results[0].geometry.location.lat();
          this.location.marker.lng = results[0].geometry.location.lng();
          this.location.marker.draggable = true;
          this.location.viewport = results[0].geometry.viewport;
        }

        this.map.triggerResize()
      } else {
        alert("Sorry, this search produced no results.");
      }
    })
  }

  findAddressByCoordinates() {
    this.geocoder.geocode({
      'location': {
        lat: this.location.marker.lat,
        lng: this.location.marker.lng
      }
    }, (results, status) => {
      this.decomposeAddressComponents(results);
    })
  }

  decomposeAddressComponents(addressArray) {
    if (addressArray.length == 0) return false;
    let address = addressArray[0].address_components;
    console.log(address);
    for(let element of address) {
      console.log(element);
      if (element.length == 0 && !element['types']) continue
      if (element['types'].indexOf('street_number') > -1) {
        this.location.address_level_1 = element['long_name'];
        continue;
      }
      if (element['types'].indexOf('route') > -1) {
        this.location.address_level_1 += ', ' + element['long_name'];
        continue;
      }
      if (element['types'].indexOf('locality') > -1) {
        this.location.address_level_2 = element['long_name'];
        continue;
      }
      if (element['types'].indexOf('administrative_area_level_1') > -1) {
        this.location.address_state = element['long_name'];
        continue;
      }
      if (element['types'].indexOf('country') > -1) {
        this.location.address_country = element['long_name'];
        continue;
      }
      if (element['types'].indexOf('postal_code') > -1) {
        this.location.address_zip = element['long_name'];
        continue;
      }
    }
  }

  updateOnMap() {
    console.log('updating')
    let full_address:string = this.location.address_level_1 || ""
    if (this.location.address_level_2) full_address = full_address + " " + this.location.address_level_2
    if (this.location.address_state) full_address = full_address + " " + this.location.address_state
    if (this.location.address_country) full_address = full_address + " " + this.location.address_country
    this.findLocation(full_address);
    console.log(full_address);
  }
*/
  circleRadiusInKm() {
    return this.circleRadius / 1000;
  }

  milesToRadius(value) {
     this.circleRadius = value / 0.00062137;
  }

  circleRadiusInMiles() {
    return this.circleRadius * 0.00062137;
  }

  markerDragEnd(m: any, $event: any) {
   this.location.marker.lat = m.coords.lat;
   this.location.marker.lng = m.coords.lng;
   //this.findAddressByCoordinates();
  }

  updateOnMap2() {
    console.log('updating')
    this.location.lat = this.locList[0].lat;
    this.location.lng = this.locList[0].lng;
    this.location.marker.lat = this.locList[0].lat;
    this.location.marker.lng = this.locList[0].lng;
    this.location.marker.label = this.locList[0].city;
    this.location.marker.draggable = true;
    //this.location.viewport = results[0].geometry.viewport;
    //onsole.log(full_address);
  }
  updateOnMap3() {
    console.log('updating')
    this.location.lat = 16.5062;
    this.location.lng = 80.6480;
    this.location.marker.lat = 16.5062;
    this.location.marker.lng = 80.6480;
    this.location.marker.label = 'test';
    this.location.marker.draggable = true;
    //this.location.viewport = results[0].geometry.viewport;
    //onsole.log(full_address);
  }
}
