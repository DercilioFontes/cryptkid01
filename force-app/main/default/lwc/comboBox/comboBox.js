import { LightningElement, track } from "lwc";

export default class ComboboxBasic extends LightningElement {
  @track value = 0;

  get options() {
    return [
      { label: "Bitcoin - 2,000.00", value: 2000 },
      { label: "Ethereum - 1,500.00", value: 1500 },
      { label: "XRP - 1,000.00", value: 1000 },
      { label: "Tether - 500.00", value: 500 },
      { label: "Bitcoin Cash - 250.00", value: 250 }
    ];
  }

  handleChange(event) {
    this.value = event.detail.value;
  }
}
