import {Component, OnInit} from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-browsinghystry',
  templateUrl: './browsinghystry.component.html',
  styleUrls: ['./browsinghystry.component.css']
})
export class BrowsinghystryComponent implements OnInit {


  constructor() {
  }

  ngOnInit() {
    $('#btnDropdown').click(
      function () {
        $('#history-bar-bottom').fadeToggle('slow');
      }
    );
  }

}
