import { useState } from "react";
import { FadeLoader } from "react-spinners";
const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "#1623e9",
};

function LoadApp() {
    let [loading] = useState(true);
    let [color] = useState('#1623e9');

    return (
        <div className="sweet-loading">
            <FadeLoader
                color={color}
                loading={loading}
                cssOverride={override}
                size={500}
                aria-label="Loading"
                data-testid="loader"
            />
        </div>
    );
}
export default LoadApp