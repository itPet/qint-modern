import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    // Change navbar on scroll
    $(document).scroll(() => {
      if (100 < $(document).scrollTop()) {
        // If navbar is below image
        $('.navbar').addClass('qd-bg-dark');
        $('.navbar').removeClass('qd-padding');
      } else {
        // If navbar is on image
        $('.navbar').removeClass('qd-bg-dark');
        $('.navbar').addClass('qd-padding');
      }
    });

    // Change logo on hover
    // $('navbar-brand').hover(
    //   function () {
    //     console.log('iside hover');
    //     $('qd-logo').attr('src', '../../assets/images/qint.png');
    //   },
    //   function () {
    //     // out
    //     console.log('out');
    //   }
    // );
  }
}
