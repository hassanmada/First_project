import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";




export default function Payement() {
    return (
        <div style={{ width: "500px", marginRight: "100px" }}>
            <PayPalScriptProvider options={{ "client-id": "AS6xVER81rV5QSky6VdzipDSGFFxQfLUEGX-CRnbnGIrd2uQNB8q8T3kCm3QvLWcQZp5A25UfACcEUtR" }}>
                <PayPalButtons
                    createOrder={(data, actions) => {
                        return actions.order.create({
                            purchase_units: [
                                {
                                    amount: {
                                        value: 3000,
                                    },
                                },
                            ],
                        });
                    }}
                    onApprove={(data, actions) => {
                        return actions.order.capture().then(function (details) {
                            console.log(data)
                            // This function shows a transaction success message to your buyer.
                            // alert('Transition completer par ' + details.payer.name.given_name);
                            alert("Transition completer par" + details.payer.name.given_name + "Merci")
                        })
                    }} />

            </PayPalScriptProvider>
        </div>
    )
}