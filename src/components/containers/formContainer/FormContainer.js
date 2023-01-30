import React, { useState } from 'react'
import {
    TextField,
    Box,
    Typography,
    Grid,
    Checkbox,
    Button,
    RadioGroup,
    Radio,
    FormControl,
    FormLabel,
    FormControlLabel,
} from '@mui/material'
import moment from 'moment'
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment'
import Modal from 'components/common/Modal'
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers'

const FormContainer = (props) => {
    const { formDetails, expanded, sectionId } = props

    const isExpanded =
        expanded.includes(sectionId) || sectionId === 0 ? true : false

    const [modalOpen, setModalOpen] = useState(false)
    const [modalContentType, setModalContentType] = useState('')

    const dataToShow =
        expanded.includes(sectionId) ||  sectionId === 0
            ? formDetails
            : formDetails.length > 2 ? formDetails.filter(e=>e.inputType !== 'textarea').slice(0, 3) : formDetails.slice(0, 3);

    const functionByType = (field) => {
        if (field.function && field.function === 'modal') {
            setModalContentType(field.modalDetails.moduleType || 'error_404')
            setModalOpen(true)
        }
    }

    return (
        <Box>
            <Grid container className="mt-8">
                {formDetails &&
                    dataToShow.map((field, index) => (
                        <React.Fragment key={index}>
                            {field.inputType === 'button' ? (
                                <Grid item xs={12}>
                                    <Box
                                        key={index}
                                        className="flex justify-start items-center mb-5"
                                    >
                                        <Button
                                            className="rounded-lg px-5 py-2 normal-case bg-app-dark hover:bg-black mx-2 my-3 text-sm text-white"
                                            variant="contained"
                                            onClick={() =>
                                                functionByType(field)
                                            }
                                        >
                                            {field.label}
                                        </Button>
                                    </Box>
                                </Grid>
                            ) : (
                                <>
                                    {field.inputType === 'text' ? (
                                        <Grid
                                            item
                                            lg={
                                                !isExpanded ||
                                                (formDetails.length % 2 !== 0 &&
                                                    index ===
                                                        formDetails.length - 1)
                                                    ? 12
                                                    : 6
                                            }
                                            xs={12}
                                        >
                                            {/* <Box className="flex flex-row justify-start items-start mb-5"> */}
                                            <Box className="flex flex-col justify-start items-start mb-6 pr-5">
                                                <Typography className="mr-5 min-w-fit mb-2 ml-2 text-base">
                                                    {field.name}
                                                </Typography>

                                                <TextField
                                                    value={field.value||"N.A"}
                                                    variant="outlined"
                                                    className="w-full mr-5 bg-white"
                                                    sx={{
                                                        "& .MuiInputBase-input.Mui-disabled": {
                                                          WebkitTextFillColor: "#444",
                                                        },
                                                    }}
                                                    disabled
                                                />
                                            </Box>
                                        </Grid>
                                    ) : field.inputType === 'textarea' ? (
                                        <Grid item xs={12}>
                                            {/* <Box className="flex flex-row justify-start items-start mb-5"> */}
                                            <Box className="flex flex-col justify-start items-start mb-6 mr-5">
                                                <Typography className="mr-5 min-w-fit mb-2 ml-2 text-base">
                                                    {field.name}
                                                </Typography>

                                                <TextField
                                                    value={field.value||"N.A"}
                                                    variant="outlined"
                                                    className="w-full bg-white text-black"
                                                    sx={{
                                                        "& .MuiInputBase-input.Mui-disabled": {
                                                          WebkitTextFillColor: "#444",
                                                        },
                                                    }}
                                                    multiline
                                                    rows={4}
                                                    disabled
                                                />
                                            </Box>
                                        </Grid>
                                    ) : field.inputType === 'checkbox' ? (
                                        <Grid 
                                            item 
                                            lg={
                                                !isExpanded ||
                                                (formDetails.length % 2 !== 0 &&
                                                    index ===
                                                        formDetails.length - 1)
                                                    ? 12
                                                    : 4
                                            }
                                            xs={12} 
                                        >
                                            <Box key={index} className="flex flex-row justify-start items-center" >
                                                <Checkbox size='sm' />
                                                <Typography className="min-w-fit ml-2 mt-1 text-base">
                                                    {field.name}
                                                </Typography>
                                            </Box>
                                        </Grid>
                                    ) : field.inputType === 'radio' ? (
                                        <Grid item xs={12} key={index}>
                                            <Box className="flex flex-row justify-start items-center mt-5 mb-5">
                                                <Typography className="min-w-fit mr-10 text-base">
                                                    {field.name}
                                                </Typography>
                                                <RadioGroup
                                                    name={field.name}
                                                    value={field.value||"N.A"}
                                                    className="flex flex-row justify-between items-center w-[25%]"
                                                >
                                                    {/* {field.options.map(
                                                        (option, index) => (
                                                            <FormControlLabel
                                                                value={option}
                                                                control={
                                                                    <Radio />
                                                                }
                                                                label={option}
                                                                disabled
                                                                key={option}
                                                            />
                                                        )
                                                    )} */}
                                                </RadioGroup>
                                            </Box>
                                        </Grid>
                                    ) : field.inputType === 'date' ? (
                                        <Grid 
                                            item 
                                            lg={
                                                !isExpanded ||
                                                (formDetails.length % 2 !== 0 &&
                                                    index ===
                                                        formDetails.length - 1)
                                                    ? 12
                                                    : 6
                                            }
                                            xs={12}
                                        >
                                            <Box className="flex flex-col justify-start items-start mb-6" >
                                                <Typography className="mr-5 min-w-fit mb-2 ml-2 text-base">
                                                    {field.name}
                                                </Typography>
                                                <LocalizationProvider dateAdapter={AdapterMoment}>
                                                    <DatePicker
                                                        value={field.value|| moment()}
                                                        renderInput={(params)=>
                                                            <TextField 
                                                                sx={{
                                                                    "& .MuiInputBase-input.Mui-disabled": {
                                                                    WebkitTextFillColor: "#444",
                                                                    },
                                                                }} 
                                                                style={{
                                                                    width: 'calc(100% - 20px)', 
                                                                    background: 'white'
                                                                }} 
                                                                {...params} 
                                                            />
                                                        }
                                                        onChange={()=>{}}
                                                        disabled
                                                    />
                                                </LocalizationProvider>
                                            </Box>
                                        </Grid>
                                    ) : (
                                        <Box key={index}>
                                            <Typography className='text-base'>
                                                Unknown Type of Input
                                            </Typography>
                                        </Box>
                                    )}
                                </>
                            )}
                        </React.Fragment>
                    ))}
                <Modal
                    contentType={modalContentType}
                    setModalOpen={setModalOpen}
                    modalOpen={modalOpen}
                />
            </Grid>
        </Box>
    )
}

export default FormContainer
