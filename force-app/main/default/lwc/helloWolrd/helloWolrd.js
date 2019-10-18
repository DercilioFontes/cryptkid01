import { LightningElement, track } from 'lwc';

export default class HelloWolrd extends LightningElement {
  @track greeting = 'World';
  changehandler(event) {
    this.greeting = event.target.value;
  }

}