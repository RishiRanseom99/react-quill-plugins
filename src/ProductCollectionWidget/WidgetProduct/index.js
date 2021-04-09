import React,{useState} from 'react'
import './style.css'
function WidgetItem() {
    const [customizeUiToggler, setCustomizeUiToggler] = useState(false)
    const handleCustomize = ()=>{
        setCustomizeUiToggler(true)
    }
    return (
        <>
        <div className="widget-item">
            <button className="widget-item-btn" onClick={handleCustomize}>Customize</button>
            <button className="widget-item-btn">Delete</button>
        </div>
        {
            customizeUiToggler && (
                <div className="widget-item-customize">
                    <button onClick={()=>{setCustomizeUiToggler(false)}}>X</button>
                    <form className="widget-item-form">
                        {/* <p className="widget-item-form-heading">Link</p> */}
                        <input type="text" placeholder="Enter the Link"/>
                        <textarea placeholder="Attach the image here"/>
                        <button type='button'>Save</button>
                    </form>
                </div>
            )
        }
        </>
    )
}

export default WidgetItem
