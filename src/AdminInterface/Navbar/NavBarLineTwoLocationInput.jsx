import { useContext } from 'react';
import { styled } from '@mui/material/styles';
import { FormControl, InputLabel, Select, MenuItem, InputAdornment } from '@mui/material';
import ArrowDropDown from '@mui/icons-material/ArrowDropDown';
import DataContext from '../DataContext';

const NavBarLineTwoLocationInput = () => {
    const { locationOpen, handleLocationClose, handleLocationOpen, dummy, setDummy } = useContext(DataContext);

    return (
        <FormControl
            className='location'
            sx={{
                marginTop: 2.5,
                color: "#686868",
                width: 300,
                height: 48,
                borderRight: "1px solid #EAEAEA ",
                fontFamily: "'Satoshi', sans-serif",
                fontWeight: 500,
                "& .MuiOutlinedInput-root": {
                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                        borderColor: "transparent", // Remove focus border color
                        borderWidth: "1px", // Ensure the border width remains but transparent
                    },
                    "&.Mui-focused": {
                        backgroundColor: "transparent", // Ensure no background change on focus
                    },
                    "&:hover .MuiOutlinedInput-notchedOutline": {
                        borderColor: "transparent", // Remove hover outline
                    },

                },
            }}
        >
            <InputLabel
                sx={{
                    fontSize: "16px",
                    fontFamily: "'Satoshi', sans-serif",
                    fontWeight: 500,
                    color: "rgba(104, 104, 104, 1)", // Apply label color here
                    "&.Mui-focused": {
                        color: "rgba(104, 104, 104, 1)", // Ensure label color remains the same on focus
                    },
                }}
                shrink={dummy || false}
            >
                Preferred Location
            </InputLabel>

            <Select
                open={locationOpen}
                onClose={handleLocationClose}
                onOpen={handleLocationOpen}
                value={dummy || ''}
                onChange={(e) => setDummy(e.target.value)}
                IconComponent={() => <InputAdornment position="end"><ArrowDropDown sx={{ display: "none" }} /></InputAdornment>}
                sx={{
                    fontSize: "16px",
                    fontWeight: 500,
                    border: "none",
                    fontFamily: "'Satoshi', sans-serif",
                    "& .MuiOutlinedInput-root": {
                        border: "none", // Remove all borders
                    },
                    "& .MuiOutlinedInput-notchedOutline": {
                        border: "none", // Remove default outlined border
                    },
                    "&.Mui-focused": {
                        backgroundColor: "transparent", // Ensure the background color remains the same on focus
                    },

                }}
                MenuProps={{
                    sx: {
                        marginTop: 1,
                        boxShadow: "0px 0px 14px 0px #93939340",
                        borderRadius: '10px',
                        '& .MuiPaper-root': {
                            borderRadius: '10px', // Apply border-radius to the dropdown menu
                        },
                    },
                }}
            >
                {["Chennai", "Coimbatore", "Bangalore"].map((city) => (
                    <MenuItem
                        key={city}
                        value={city}
                        sx={{
                            fontSize: "16px", // Match search font size
                            fontFamily: "'Satoshi', sans-serif",
                            fontWeight: 500,
                            color: "rgba(104, 104, 104, 1)", // Match search font color
                            height: 48,
                            "&:hover": {
                                backgroundColor: "#F1F1F1",
                            },
                        }}
                    >
                        {city}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
}

export default NavBarLineTwoLocationInput;
