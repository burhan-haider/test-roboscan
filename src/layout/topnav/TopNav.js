import React, { useState } from 'react'
import {
    Box,
    Button,
    AppBar,
    Toolbar,
    Typography,
    Menu,
    MenuItem,
} from '@mui/material'
import { MdAdb } from 'react-icons/md'
import { pages } from '../../data/dummyData'
import logo from 'assets/logo.png'

const TopNav = (props) => {
    const [anchorEl, setAnchorEl] = useState(null)
    const {setSelectedSection} = props;

    const handleClick = (index, event) => {
        setAnchorEl({ [index]: event.currentTarget })
    }
    const handleClose = () => {
        setAnchorEl(null)
    }

    return (
        <AppBar
            position="sticky"
            className="bg-app-dark shadow-app-dark min-w-[100vw]"
        >
            <Toolbar disableGutters>
                <Box className="min-w-[80px] pl-6">
                    <a href="#" onClick={()=>{setSelectedSection(null)}}>
                        <img src={logo} alt={'logo'} className="h-[75px] w-auto" />
                    </a>
                </Box>
                <Box
                    sx={{
                        flexGrow: 1,
                        display: { xs: 'none', md: 'flex' },
                    }}
                    className="ml-5"
                >
                    {pages.map((page, index) => (
                        <React.Fragment key={page.id}>
                            {/* <Button
                                id={page.title}
                                className={
                                    'text-white rounded-none mx-0 min-w-[180px] my-0 hover:bg-[#2b313f] text-base min-h-[90px]' +
                                    ' ' +
                                    (Boolean(anchorEl && anchorEl[index]) &&
                                        'bg-[#2b313f]')
                                }
                                aria-controls={
                                    Boolean(anchorEl && anchorEl[index])
                                        ? `basic-menu-${index}`
                                        : undefined
                                }
                                aria-haspopup="true"
                                aria-expanded={
                                    Boolean(anchorEl && anchorEl[index])
                                        ? 'true'
                                        : undefined
                                }
                                onClick={(e) => handleClick(index, e)}
                            >
                                {page.title}
                            </Button> */}
                            <Menu
                                id={`basic-menu-${index}`}
                                anchorEl={anchorEl && anchorEl[index]}
                                open={Boolean(anchorEl && anchorEl[index])}
                                onClose={handleClose}
                                PaperProps={{
                                    sx: {
                                        borderRadius: 0,
                                        minWidth: '180px',
                                        marginTop: '3px',
                                    },
                                }}
                                MenuListProps={{
                                    'aria-labelledby': page.title,
                                    sx: {
                                        bgcolor: '#2b313f',
                                        minWidth: '160px',
                                        color: 'white',
                                        borderRadius: 0,
                                    },
                                }}
                            >
                                {page.menu.map((sub, subIndex) => (
                                    <MenuItem
                                        sx={{
                                            '&:hover': {
                                                bgcolor: '#e0e0e0',
                                                color: '#1e212c',
                                            },
                                        }}
                                        onClick={handleClose}
                                        key={subIndex}
                                    >
                                        {sub}
                                    </MenuItem>
                                ))}
                            </Menu>
                        </React.Fragment>
                    ))}
                </Box>
            </Toolbar>
        </AppBar>
    )
}

export default TopNav
