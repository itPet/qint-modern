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

  videoList = [
    'blue-circut',
    'blue-up',
    'discreet-binary',
    'green-circut',
    'pulsing-circut',
    'sideway-circut',
    'network-black',
  ];
  timesClicked = 0;

  changeBackground() {
    $('video').attr(
      'src',
      '../assets/videos/' + this.videoList[this.timesClicked] + '.mp4'
    );
    $('video').prop('muted', true); // Required for autoplay to work
    $('video').trigger('play');
    this.timesClicked++;

    if (this.timesClicked > 6) {
      this.timesClicked = 0;
    }

    if (this.timesClicked === 3) {
      $('video').css({
        opacity: '1',
        '-moz-opacity': '1',
        '-webkit-opacity': '1',
        filter: 'alpha(opacity=1)',
      });
    } else if (this.timesClicked === 4) {
      $('video').css({
        opacity: '0.5',
        '-moz-opacity': '0.5',
        '-webkit-opacity': '0.5',
        filter: 'alpha(opacity=50)',
      });
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
