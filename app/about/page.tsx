import {
  Avatar,
  Box,
  Container,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography
} from '@mui/material';
import { Code, Person, Work, ConnectWithoutContact, OpenInNew } from '@mui/icons-material';
import React from 'react';
import Link from 'next/link';

const About = () => {
  return (
    <Container maxWidth="md">
      <Box sx={{ p: 4, mt: 4 }}>
        <Box display="flex" flexDirection="column" alignItems="center" mb={3}>
          <Avatar src="sakiasi.JPG" sx={{ width: 100, height: 100, mb: 2 }}>
            SB
          </Avatar>
          <Typography variant="h4" color="primary">
            Sakiasi Baleiwai
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" gutterBottom>
            Passionate Web Developer
          </Typography>
          <Divider sx={{ width: "100%", mb: 3 }} />
        </Box>

        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography
              alignItems={"center"}
              display={"flex"}
              variant="h6"
              color="secondary"
              gutterBottom
            >
              <Person sx={{ mr: 2 }} /> About Me
            </Typography>
            <Typography>
              Hello! I am Sakiasi Baleiwai, a dedicated web developer with a
              strong foundation in building and optimizing interactive,
              user-focused websites and applications. I bring a balanced
              approach to each project, ensuring both visual appeal and
              functionality to create an exceptional user experience.
            </Typography>
          </Grid>

          <Grid item xs={12}>
            <Typography
              display={"flex"}
              alignItems={"center"}
              variant="h6"
              color="secondary"
              gutterBottom
            >
              <Work sx={{ mr: 2 }} /> My Journey
            </Typography>
            <Typography>
              I began my career in web development with a curiosity about how
              websites function and a love for problem-solving. Over the years,
              I’ve adapted to different challenges and gained experience in
              various technologies like React, Node.js, and MySQL, working on
              projects ranging from simple websites to complex applications.
            </Typography>
          </Grid>

          <Grid item xs={12}>
            <Typography variant="h6" color="secondary" gutterBottom>
              My Approach
            </Typography>
            <Typography>
              Each project is unique and should reflect its brand or purpose. I
              approach each project with a fresh perspective, understanding the
              target audience and goals, ensuring accessibility and responsive
              design. Collaborating with clients and teams to achieve
              outstanding results is my priority.
            </Typography>
          </Grid>

          <Grid item xs={12}>
            <Typography
              display={"flex"}
              alignItems={"center"}
              variant="h6"
              color="secondary"
              gutterBottom
            >
              <Code sx={{ mr: 2 }} /> Areas of Expertise
            </Typography>
            <List>
              <ListItem>
                <ListItemIcon>
                  <Code />
                </ListItemIcon>
                <ListItemText
                  primary="Frontend Development"
                  secondary="Proficient in HTML, CSS, JavaScript, and frameworks like React for creating engaging UIs."
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <Code />
                </ListItemIcon>
                <ListItemText
                  primary="Backend Development"
                  secondary="Experienced with Node.js, Express, MySQL for efficient databases and APIs."
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <Code />
                </ListItemIcon>
                <ListItemText
                  primary="Responsive Design"
                  secondary="Skilled in mobile-friendly and accessible designs across devices."
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <Code />
                </ListItemIcon>
                <ListItemText
                  primary="Project Management"
                  secondary="Familiar with agile methodologies and managing projects from start to finish."
                />
              </ListItem>
            </List>
          </Grid>

          <Grid item xs={12}>
            <Typography variant="h6" color="secondary" gutterBottom>
              What I’m Working On
            </Typography>
            <Typography>
              I’m currently building a personal portfolio site, contributing to
              an open-source project, and working on a new web application.
              These projects help me explore specialized technologies and
              skills, and I’m excited to see where they lead!
            </Typography>
          </Grid>

          <Grid item xs={12}>
            <Typography
              display={"flex"}
              alignItems={"center"}
              variant="h6"
              color="secondary"
              gutterBottom
            >
              <ConnectWithoutContact sx={{ mr: 2 }} /> Let’s Connect
            </Typography>
            <Typography>
              If you’re interested in collaborating, have a project in mind, or
              just want to say hi, feel free to{" "}
              {
                <Typography component={Link} href={"/contact"} color="primary">
                  reach out <OpenInNew fontSize='small'/>
                </Typography>
              }
              . I’m always open to new opportunities and love connecting with
              others passionate about web development!
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default About;
