
export default function ColorPicker() {
    const updateProperty = (key, val) => {
        document.documentElement.style.setProperty(key, val);
    }
    return (
        <div style={{display:"flex", justifyContent:"flex-start", alignItems:"center", gap:"1em"}}>
            <h3>Customize Color</h3>
            <input 
            id="color-picker" 
            type="color" 
            defaultValue = {getComputedStyle(document.documentElement).getPropertyValue('--secondary-base')}
            onChange={(e) => {
                const newColor = e.target.value;
                updateProperty("--secondary-base", newColor );
            }}
        />
        </div>
    )
}