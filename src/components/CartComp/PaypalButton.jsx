import React from "react";
import PaypalExpressBtn from "react-paypal-express-checkout";
import SuccessPurchacMsg from "./SuccessPurchacMsg";

export default class MyApp extends React.Component {
  render() {
    const onSuccess = payment => {
      console.log("The payment was succeeded!", payment);

      setTimeout(() => {
        return <SuccessPurchacMsg />;
      }, 4000);

      this.props.clearCart();
      this.props.history.push("/");
    };

    const onCancel = data => {
      console.log("The payment was cancelled!", data);
    };

    const onError = err => {
      console.log("Error!", err);
    };

    let env = "sandbox";
    let currency = "USD";

    const client = {
      sandbox:
        "AY-7PKPMnMmKFQ93Poy9FC3DWu_84da7rIW2rOD-ssy7aFXi6ZtDlGbTa3ZnzLsjfT3umGtq5-VziZws",
      production: "YOUR-PRODUCTION-APP-ID"
    };
    return (
      <PaypalExpressBtn
        env={env}
        client={client}
        currency={currency}
        total={this.props.total}
        onError={onError}
        onSuccess={onSuccess}
        onCancel={onCancel}
      />
    );
  }
}
