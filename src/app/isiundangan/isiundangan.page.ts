import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { GoogleMap, Marker } from '@capacitor/google-maps';

@Component({
  selector: 'app-isiundangan',
  templateUrl: './isiundangan.page.html',
  styleUrls: ['./isiundangan.page.scss'],
})
export class IsiundanganPage implements OnInit {
  map!: GoogleMap;

  constructor(private navCtrl: NavController) { }

  async ngOnInit() {
    this.createMap();
    this.startCountdown();
  }

  async createMap() {
    // Ensure the map element is available
    const mapElement = document.getElementById('map') as HTMLElement;
    if (!mapElement) {
      console.error('Map element not found');
      return;
    }

    // Define your map options
    const mapOptions = {
      id: 'my-cool-map',
      element: mapElement,
      apiKey: 'AIzaSyAhoJluocBfOgtfpMg2zMnuJzedRhU5bSY',
      config: {
        center: {
          lat: -7.776878546382574, 
          lng: 110.43451764042238,
        },
        zoom: 12,
      },
    };

    // Create the map
    this.map = await GoogleMap.create({
      id: mapOptions.id,
      element: mapOptions.element,
      apiKey: mapOptions.apiKey,
      config: mapOptions.config,
    });

    this.addMarkers();
  }

  async addMarkers() {
    const markers: Marker[] = [
      {
        coordinate: {
          lat: -7.73654433375349, 
          lng: 110.44293356868015,
        },
        title : 'Akad Nikah',
        snippet : 'Jl. Raya Sambiroto, Sambiroto, Purwomartani, Kec. Kalasan, Kabupaten Sleman, Daerah Istimewa Yogyakarta',
      },
      {
        coordinate: {
          lat: -7.809048046143258, 
          lng: 110.43775457009322,
        },
        title : 'Ijab Kabul',
        snippet : 'Jl. Sekarsuli - Berbah, Kemasan, Sendangtirto, Kec. Berbah, Kabupaten Sleman, Daerah Istimewa Yogyakarta ',
      },
    ];
    await this.map.addMarkers(markers);
  }

  goBack() {
    this.navCtrl.back();
  }

  startCountdown() {
    const countdownDate = new Date('Jul 20, 2024 06:00:00').getTime();
    const countdownElement = document.getElementById('time');

    if (!countdownElement) {
      console.error('Countdown element not found');
      return;
    }

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      countdownElement.innerHTML = `${hours}:${minutes}:${seconds}`;

      if (distance < 0) {
        clearInterval(interval);
        countdownElement.innerHTML = 'EXPIRED';
      }
    }, 1000);
  }
}