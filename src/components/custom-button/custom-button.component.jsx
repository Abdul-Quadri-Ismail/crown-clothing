import React from 'react';
import { CustomButtonComponent } from "./custom-button.style";
 
const CustomButton=({children,...otherprops})=>(

    <CustomButtonComponent {...otherprops}>
    {children}
    </CustomButtonComponent>
);

export default CustomButton;

