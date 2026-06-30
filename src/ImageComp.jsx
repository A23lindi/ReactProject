import React from "react";
import image from "./image/PorcheTaycan.jpg";
const ImageComp = () => {
    return (
        <div>
            <img src={image} alt="Porsche Taycan" style={{width: "500px",
                    height: "300px",         
                     objectFit: "cover"}} />   

        </div>
    )
}           

export default ImageComp;   
