import React from "react";
import product from "./product";
function Image() {
    return (
        <div>
            <img src={product.image} alt="Jersy" style={{ width: "250px", height: "250px" }}/>
        </div>
    );
}
export default Image;