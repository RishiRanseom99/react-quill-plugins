import React from 'react'
import './style.css'
import WidgetItem from './WidgetProduct';
 function ProductCollectionWidget(props) {
    return (
        <div className="product_collection-container">
        <div className="product_collection-widget">
            <div className="widget-heading">
                <button onClick={()=>{props.widgetToggler(true)}}>X</button>
            </div>
            <div className="widget-items">
                <WidgetItem/>
                <WidgetItem/>
            </div>
        </div>
     </div>
    )
}

export default ProductCollectionWidget
