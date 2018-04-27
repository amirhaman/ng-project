import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-one',
  template: `
  <div class="content sidebar">
  <article>
    <div class="clearfix article-head">
        <h1>Year 10 (next year)</h1>
        <p>0 credit earned</p>
    </div>
    <div class="clearfix article-body">
      <div class="slot-available">
        <div class="info-container">
          <p>Available Slot</p>
        </div>
      </div>
      <div class="slot-available">
        <div class="info-container">
          <p>Available Slot</p>
        </div>
      </div>
      <div class="slot-available">
        <div class="info-container">
          <p>Available Slot</p>
        </div>
      </div>
      <div class="slot-available">
        <div class="info-container">
          <p>Available Slot</p>
        </div>
      </div>
      <div class="slot-available">
        <div class="info-container">
          <p>Available Slot</p>
        </div>
      </div>
      <div class="slot-available">
        <div class="info-container">
          <p>Available Slot</p>
        </div>
      </div>
      <div class="slot-available">
        <div class="info-container">
          <p>Available Slot</p>
        </div>
      </div>
      <div class="slot-available">
        <div class="info-container">
          <p>Available Slot</p>
        </div>
      </div>
    </div>
  </article>
</div>
  `,
  styleUrls: [`../../../styles.scss`]
})
export class OneComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
