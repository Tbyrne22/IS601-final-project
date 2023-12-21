import { Container, Grid, Typography, Button } from '@mui/material';
import * as React from 'react';
import Box from '@mui/material/Box';
import '../globals.css';
import MediaCard from '../components/MediaCard';
import Link from '@mui/material/Link';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faTools, faWind, faLightbulb, faChartBar, faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';



const projectsContainer = {
    background: 'var(--background-color-primary)',
    textAlign:'center',
    color: 'var(--font-color-secondary)',
    py:{xs: 8}
};

export default function ProjectSection() {
    return (
        <Box component="section" sx={{...projectsContainer}}>
            <a name="project_section"></a>
            <Typography color="inherit" align="center" variant="h3" component="h3" marked="center">
                <span style={{ color: 'var(--font-color-secondary)' }}>My</span>{' '}
                <span style={{ color: 'var(--font-color-primary)' }}>Projects</span>
            </Typography>
            <Container sx={{mt:'64px'}}>
                <Link href="/projects" sx={{textDecoration: 'none', '&:hover': {opacity: 0.6}}}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={4}>
                    <MediaCard 
                        title="Porfolio Web Design" 
                        image="/images/pexels-kevin-ku-577585.jpg"
                        text="Designed a portfolio website using html, css, Figma, and github."
                        />
                    </Grid>
                    <Grid item xs={12} md={4}>
                    <MediaCard 
                        title="Breaker Installations and Replacements" 
                        image="/images/pexels-blue-arauz-13287450.jpg"
                        text="Lead designer for high voltage breakers for projects and emergencies."
                        />
                    </Grid>
                    <Grid item xs={12} md={4}>
                    <MediaCard 
                        title="Transformer Replacements" 
                        image="/images/pexels-finn-whelen-6225047.jpg"
                        text="Designer for the replacement of 26-4kV transformers."
                        />
                    </Grid>
                    <Grid item xs={12} md={4}>
                    <MediaCard 
                        title="Horizontal-Axis Wind Turbine" 
                        image="/images/pexels-pixabay-414837.jpg"
                        text="Designed a horizontal-axis turbine for my undergrad practicum"
                        />
                    </Grid>
                    <Grid item xs={12} md={4}>
                    <MediaCard 
                        title="Transformer Design Specifications" 
                        image="/images/pexels-pixabay-416405.jpg"
                        text="Developing design specifications for new power transformers."
                        />
                    </Grid>
                    <Grid item xs={12} md={4}>
                    <MediaCard 
                        title="Risk Analysis" 
                        image="/images/pexels-luca-nardone-3651820.jpg"
                        text="Developing risk assessment models for station outages."
                        />
                    </Grid>
                </Grid>
                </Link>
            </Container>
        </Box>
    );
  }