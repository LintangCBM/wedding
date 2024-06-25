import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-isiundangan',
  templateUrl: './isiundangan.page.html',
  styleUrls: ['./isiundangan.page.scss'],
})
export class IsiundanganPage implements OnInit {
  constructor(private navCtrl: NavController) { }

  goBack() {
    this.navCtrl.back();
  }

  ngOnInit() {
    this.startCountdown();
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