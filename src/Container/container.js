import React from "react";
import './container.css'

const Container = (props) => {
    return(
       <div className="container container-wrapper">{props.children}</div>
    )
}
export default Container;