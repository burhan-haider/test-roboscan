import React, { useState, useEffect } from 'react'
import { Box } from '@mui/material'
import SideNav from './sidenav'
import TopNav from './topnav'

const Layout = ({ children }) => {

    const [expanded, setExpanded] = useState([])
    const [selectedSection, setSelectedSection] = useState(null);

    return (
        <Box className="w-[100vw]">
            <TopNav setSelectedSection={setSelectedSection} />
            <Box className="flex flex-row w-[100vw]">
                <Box className="min-w-[80px] h-[100vh]">
                    <SideNav 
                        expanded={expanded} 
                        setExpanded={setExpanded}
                        selectedSection={selectedSection} 
                        setSelectedSection={setSelectedSection}
                    />
                </Box>
                <Box className="w-[calc(100vw-80px)]">
                    {React.cloneElement(children, {
                        expanded: expanded,
                        setExpanded: setExpanded,
                        selectedSection: selectedSection,
                        setSelectedSection: setSelectedSection
                    })}
                </Box>
            </Box>
            {/* <Grid container>
                <Grid item className="w-[100px]">
                    <SideNav />
                </Grid>
                <Grid item xs>
                    <Box>{children}</Box>
                </Grid>
            </Grid> */}
        </Box>
    )
}

export default Layout
