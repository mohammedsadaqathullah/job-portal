import React, { useContext, useState } from 'react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { InputAdornment } from '@mui/material';
import { ArrowDropDown } from '@mui/icons-material';
import DataContext from '../../DataContext';

const LocationInput = () => {
    const { location, handleChangeTwo, handleCloseTwo, handleOpenTwo, openTwo } = useContext(DataContext)

    return (
        <span className="inputBoxCont">
            <p className='title'>Location</p>

            <FormControl sx={{
                color: "#BCBCBC",
                width: 386,
                borderRadius: 10,
                borderColor: "black",
                fontFamily: "'Satoshi', sans-serif",
                "& .MuiOutlinedInput-root": {
                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                        borderColor: "transparent"
                    },
                },
                "& .MuiInputLabel-root": {
                    color: "black",
                }
            }} >

                {!location && (
                    <InputLabel
                        shrink={!!location}
                        sx={{
                            color: "#BCBCBC !important",
                            fontFamily: "'Satoshi', sans-serif",
                            fontWeight: 550,

                        }}>
                        Choose Preferred Location
                    </InputLabel>
                )}
                <Select
                    open={openTwo}
                    onClose={handleCloseTwo}
                    onOpen={handleOpenTwo}
                    value={location}
                    onChange={handleChangeTwo}
                    IconComponent={() => <InputAdornment position="end"><ArrowDropDown sx={{ display: "none" }} /></InputAdornment>}
                    className='dropDownInputBox'
                    sx={{
                        fontFamily: "'Satoshi', sans-serif",
                        borderColor: "none",
                        borderRadius: '12px', // Apply border-radius to the Select input
                        '& .MuiOutlinedInput-root': {
                            borderRadius: '12px', // Apply border-radius to the entire input
                        },
                        '& .MuiOutlinedInput-notchedOutline': {
                            borderRadius: '12px', // Apply border-radius to the input's border
                        },
                        '& .MuiSelect-icon': {
                            right: '10px', // Adjust position of the dropdown icon if needed
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
                    <MenuItem
                        value={"Chennai"}
                        sx={{
                            fontFamily: "'Satoshi', sans-serif",
                            fontSize: 16,
                            height: 48,
                            "&:hover": {
                                backgroundColor: "#F1F1F1",
                            },
                            "&.Mui-selected": {
                                backgroundColor: "transparent",
                            },
                            "&.Mui-focusVisible": {
                                backgroundColor: "transparent",
                            },
                            "&.Mui-selected:hover": {
                                backgroundColor: "#F1F1F1",
                            },
                        }}>
                        Chennai
                    </MenuItem>
                    <MenuItem
                        value={"Coimbatore"}
                        sx={{
                            fontFamily: "'Satoshi', sans-serif",
                            fontSize: 16,
                            height: 48,
                            "&:hover": {
                                backgroundColor: "#F1F1F1",
                            },
                            "&.Mui-selected": {
                                backgroundColor: "transparent",
                            },
                            "&.Mui-focusVisible": {
                                backgroundColor: "transparent",
                            },
                            "&.Mui-selected:hover": {
                                backgroundColor: "#F1F1F1",
                            },
                        }}>
                        Coimbator
                    </MenuItem>
                    <MenuItem
                        value={"Bangalore"}
                        sx={{
                            fontFamily: "'Satoshi', sans-serif",
                            fontSize: 16,
                            height: 48,
                            backgroundColor: "none",
                            "&:hover": {
                                backgroundColor: "#F1F1F1",
                            },
                            "&.Mui-selected": {
                                backgroundColor: "transparent",
                            },
                            "&.Mui-focusVisible": {
                                backgroundColor: "transparent",
                            },
                            "&.Mui-selected:hover": {
                                backgroundColor: "#F1F1F1",
                            },
                        }}>Bangalore
                    </MenuItem>
                </Select>
            </FormControl>



            {/* <select name="loc" className='dropDownInputBox'
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                required>
                <option value="" >
                    Choose Preferred Location
                </option>
                <option value="Onsite" className='option2'>Chennai</option>
            </select> */}
        </span>
    )
}

export default LocationInput;