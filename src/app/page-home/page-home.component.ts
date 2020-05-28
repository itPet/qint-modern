import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import {
  faDatabase,
  faServer,
  faDigitalTachograph,
  faNetworkWired,
  faCogs,
  faLock,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-page-home',
  templateUrl: './page-home.component.html',
  styleUrls: ['./page-home.component.css'],
})
export class PageHomeComponent implements OnInit {
  // Icons
  faDatabase = faDatabase;
  faServer = faServer;
  faDigitalTachograph = faDigitalTachograph;
  faNetworkWired = faNetworkWired;
  faCogs = faCogs;
  faLock = faLock;

  constructor() {}

  ngOnInit() {
    // Play background video
    $('video').prop('muted', true); // Required for autoplay to work
    $('video').trigger('play');
  }

  /* ################################################################ */
  // REMOVE THIS: for demo purposes only
  moveDemoText(e) {
    $('.cursorText').css({ left: e.clientX + 10, top: e.clientY + 10 });
  }

  hideText() {
    $('.cursorText').css({ display: 'none' });
  }

  showText() {
    $('.cursorText').css({ display: 'inline' });
  }

  videoList = ['blue-circut', 'green-circut', 'network-black'];
  timesClicked = 2;

  changeBackground() {
    $('video').attr(
      'src',
      '../assets/videos/' + this.videoList[this.timesClicked] + '.mp4'
    );
    $('video').prop('muted', true); // Required for autoplay to work
    $('video').trigger('play');
    this.timesClicked++;

    if (this.timesClicked > 2) {
      this.timesClicked = 0;
    }
  }

  toggleIcons() {
    if ($('span').hasClass('qd-circle')) {
      $('span').removeClass('qd-circle');
      $('fa-icon').css({ color: '#6087ce' });
    } else {
      $('span').addClass('qd-circle');
      $('fa-icon').css({ color: 'white' });
    }
  }

  // END REMOVE THIS
}
