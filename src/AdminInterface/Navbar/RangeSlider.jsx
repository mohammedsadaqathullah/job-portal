import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import DataContext from '../DataContext';

function valuetext(value) {
    return `${value}°C`;
}

export default function RangeSlider() {

    const { handleChange, value } = React.useContext(DataContext)
    return (
        <>

            <Box sx={{ width: 248 }}>
                <Slider
                    value={value} // Current range values
                    onChange={handleChange} // Event handler for slider change
                    valueLabelDisplay="off" // Show value as a tooltip above the slider
                    getAriaLabel={() => 'range'} // Accessible label for the slider
                    getAriaValueText={valuetext} // Format value label text
                    min={1} // Minimum value of the range
                    max={35} // Maximum value of the range
                    step={0.5}
                    size="small"
                    sx={(t) => ({
                        color: "black",
                        '& .MuiSlider-thumb': {
                            color: "white",
                            border: "6px solid black",
                            width: "17px",
                            height: "17px"
                        }
                    })}


                />
            </Box>
        </>
    );
}
