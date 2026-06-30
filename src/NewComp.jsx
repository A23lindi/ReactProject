import React from "react";
import image from "./image/PorcheTaycan.jpg";
import image1 from "./image/Mercedes.jpg";
import './index.css';
const NewComp = () => {
    return (
        <div>
            <h1 className="styletittle">Car Gallery</h1>
            <img src={image} alt="Porsche Taycan" style={{width: "500px",
                 height: "300px",
                  objectFit: "cover"}} />
            <img src={image1} alt="Mercedes" style={{width: "500px",
                 height: "300px",
                  objectFit: "cover"}} />
        </div>
    )
}
export default NewComp;