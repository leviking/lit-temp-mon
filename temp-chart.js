import {html, render, svg} from 'https://unpkg.com/lit-html@0.10.2/lit-html.js'
import {repeat}       from 'https://unpkg.com/lit-html@0.10.2/lib/repeat.js'
import {until}        from 'https://unpkg.com/lit-html@0.10.2/lib/until.js'
import {Chartist.core}     from 'https://cdn.jsdelivr.net/chartist.js/latest/chartist.min.js'

export default class TemperatureChart extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode: 'open'});
    this.data = {
      labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
      series: [
        [5, 2, 4, 2, 0]
      ]
    };
	
    this.options = {
      width: 300,
      height: 200
    };
	
  }

  render() {
   new Chartist.Line(this.$.chart, this.data, this.options);
    return html`
      <style>
        :host {
          display: block;
        }
	table { 
	  text-align: right;
	  border-spacing: 5px;
	  width: calc(100vw-5em);
	  margin: auto
	}
	table, th, td {
	  border: 1px solid black;
	  border-collapse: collapse;
	}
	th, td {
	  padding: 5px
	}
	#thinking {
	  font-size: 50vh;
	  text-align: center;
	  margin: auto;
	}
      </style>
      <div class='ct-chart' id='chart'>
      </div>
    `;
  }
}
customElements.define('temp-chart', TemperatureChart);


