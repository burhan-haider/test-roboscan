import React, { useState } from 'react'
import { Box, Switch, Stack, Typography, InputBase, Button } from '@mui/material'
import { styled } from '@mui/material/styles'

import ExportDropdown from './ExportDropdown'
import FreezeDropdown from './FreezeDropdown'
import ReorderDropdown from './ReorderDropdown'
import { BiSearch } from 'react-icons/bi'
import { RiEye2Fill } from 'react-icons/ri'
import { FaFilter } from 'react-icons/fa'
import { MdNotInterested } from 'react-icons/md'

const Toolbar = (props) => {
    const {
        checkedState,
        setCheckedState,
        columns,
        setColumns,
        gridElement,
        title,
        utilColumn,
        isSelected,
        selectedRows,
        showSelected,
        setShowSelected,
        setCurrentPage,
        selectedGridElement,
        searchString,
        setSearchString,
        filterActive,
        setFilterActive
    } = props

    const CustomSwitch = styled(Switch)(({ theme }) => ({
        width: 50,
        height: 25,
        padding: 0,
        borderRadius: 50,
        display: 'flex',
        '&:active': {
            '& .MuiSwitch-switchBase.Mui-checked': {
                transform: 'translateX(9px)',
            },
        },
        '& .MuiSwitch-switchBase': {
            padding: 2,
            '&.Mui-checked': {
                transform: 'translateX(26px)',
                color: '#fff',
                '& + .MuiSwitch-track': {
                    opacity: 1,
                    backgroundColor: '#1a212c',
                },
            },
        },
        '& .MuiSwitch-thumb': {
            boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
            width: 20,
            height: 20,
            borderRadius: 50,
            transition: theme.transitions.create(['width'], {
                duration: 200,
            }),
        },
        '& .MuiSwitch-track': {
            borderRadius: 16 / 2,
            opacity: 1,
            backgroundColor: '#1a212c',
            boxSizing: 'border-box',
        },
    }))

    return (
        <Box className="flex flex-row justify-between">
            <Box className="bg-white border-solid border-[1px] border-app-dark px-4 rounded-full flex flex-row justify-between items-center my-[11px]">
                <InputBase
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="Search"
                    inputProps={{ 'aria-label': 'search mails' }}
                    onChange={(e) => setSearchString(e.target.value)}
                />
                <BiSearch size={24} />
            </Box>
            <Box className="flex flex-row-reverse justify-start ">
                {isSelected && (
                    <Stack
                        flex
                        flexDirection={'row'}
                        justifyContent={'space-between'}
                        alignItems="center"
                        className="ml-2"
                    >
                        <Typography
                            className={`mr-3 font-bold ${
                                showSelected
                                    ? 'text-slate-400'
                                    : 'text-app-dark'
                            }`}
                        >
                            All
                        </Typography>
                        <CustomSwitch
                            checked={showSelected}
                            onChange={() => {
                                setShowSelected(!showSelected)
                                setCurrentPage(1)
                            }}
                            icon={<RiEye2Fill size={22} />}
                            checkedIcon={<RiEye2Fill size={22} />}
                        />
                        <Typography
                            className={`ml-3 font-bold ${
                                !showSelected
                                    ? 'text-slate-400'
                                    : 'text-app-dark'
                            }`}
                        >
                            Selected
                        </Typography>
                    </Stack>
                )}

                <ExportDropdown
                    title={title}
                    btnText={'Export'}
                    gridElement={gridElement}
                    isSelected={isSelected}
                    selectedGridElement={selectedGridElement}
                />
                <FreezeDropdown
                    checkedState={checkedState}
                    setCheckedState={setCheckedState}
                    columns={columns}
                    setColumns={setColumns}
                    utilColumn={utilColumn}
                />
                <ReorderDropdown
                    checkedState={checkedState}
                    setCheckedState={setCheckedState}
                    columns={columns}
                    setColumns={setColumns}
                    utilColumn={utilColumn}
                />

                <Button
                    className="rounded-lg px-5 py-2 normal-case bg-app-dark hover:bg-black mx-2 my-3 text-sm"
                    variant="contained"
                    size="small"
                    onClick={()=>setFilterActive(!filterActive)}
                >
                    {filterActive ? <MdNotInterested size={16} className="mr-3" /> : <FaFilter size={14} className="mr-3" /> }
                    {filterActive ? 'Remove Filters' : 'Add Filters'}
            </Button>

            </Box>
        </Box>
    )
}

export default Toolbar
