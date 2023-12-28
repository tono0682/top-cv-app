
export default function ColorPicker() {
    const updateProperty = (key, val) => {
        document.documentElement.style.setProperty(key, val);
    }
    return (
        <input 
            id="color-picker" 
            type="color" 
            defaultValue = {getComputedStyle(document.documentElement).getPropertyValue('--secondary-base')}
            onChange={(e) => {
                const newColor = e.target.value;
                updateProperty("--secondary-base", newColor );
            }}
        />
    )
}