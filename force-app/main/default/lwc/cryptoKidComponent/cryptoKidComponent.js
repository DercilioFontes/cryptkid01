import { LightningElement, track } from "lwc";
import apex from '@salesforce/apex';


export default class ComboboxBasic extends LightningElement {
  @track value = 0;
  @track valueFormated = 0;
  data = [];

  public ComboboxBasic() {
    // axios.get("api.coincap.io/v2/assets?limit=10")
    //   .then(response => {
    //     // eslint-disable-next-line no-console
    //     console.log(response.data);
    //     this.data = response.data;
    //   })

    apex.get()
  }

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
    this.valueFormated = this.value.toLocaleString("en-US", {
      style: "decimal",
      maximumFractionDigits: 2
    });
  }
}
