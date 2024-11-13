


import { Container, Divider, Grid2, List, Typography } from '@mui/material'
import React from 'react'

const About = () => {
  return (
    <Container>
      <Grid2 mt={2}>
        <Typography variant="h4">About Me</Typography> <br />
        <Divider />
        <Typography mt={2} ml={4}>
          Hello! I am Sakiasi Baleiwai, a dedicated and passionate web developer
          with a strong foundation in building and optimizing interactive,
          user-focused websites and applications. With a background in both
          frontend and backend technologies, I bring a balanced approach to each
          project, ensuring the visual appeal and functionality work together to
          create an exceptional user experience.
        </Typography>{" "}
        <br />
        <Typography mt={2} ml={4} variant="h6">
          My Journey
        </Typography>
        <Typography mt={2} ml={6}>
          I began my career in web development with a curiosity for how websites
          function and a love for problem-solving. Over the years, I have
          developed a diverse skill set that allows me to adapt to different
          challenges, from creating seamless user interfaces to developing
          robust server-side functionalities. With hands-on experience in
          technologies like [React, Node.js, MySQL, or other relevant tools],
          I have had the opportunity to work on projects ranging from simple
          websites to complex applications that solve real-world problems.
        </Typography>
        <Typography mt={2} ml={4} variant="h6">
          My Approach
        </Typography>
        <Typography mt={2} ml={6}>
          I believe that every project is unique and should reflect the brand or
          purpose behind it. That is why I approach each project with a fresh
          perspective, focusing on understanding the target audience and the
          goals of the site or application. I work closely with clients and team
          members to ensure that each project not only looks great but also
          performs smoothly and meets accessibility and responsiveness
          standards.
        </Typography>
        <Typography mt={2} ml={4} variant="h6">
          Areas of Expertise
        </Typography>
        <List sx={{ listStyle: "inherit" }}>
          <List sx={{ ml: 8, display: "list-item" }}>
            Frontend Development: Proficient in HTML, CSS, JavaScript, and
            frameworks like [React, Vue.js, or other frameworks you use],
            creating engaging and intuitive user interfaces.
          </List>
          <List sx={{ ml: 8, display: "list-item" }}>
            Backend Development: Skilled in [Node.js, Express, MySQL, or your
            backend stack] for building and maintaining efficient databases,
            APIs, and server-side applications.
          </List>
          <List sx={{ ml: 8, display: "list-item" }}>
            Responsive Design: Ensuring all sites and applications are
            mobile-friendly and accessible across various devices.
          </List>
          <List sx={{ ml: 8, display: "list-item" }}>
            Project Management: Familiar with agile methodologies and capable of
            managing projects from concept to completion, prioritizing clear
            communication and organization.
          </List>
        </List>
        <Typography mt={2} ml={4} variant="h6">
          What I’m Working On
        </Typography>
        <Typography mt={2} ml={6}>
          Currently, I’m building a personal portfolio site, and im looking to
          contributing to an open-source project, and working on a new web
          application. This projects has allowed me to dive deeper into
          specialized technologies and skills. I’m excited to see where it
          leads!.
        </Typography>
        <Typography mt={2} ml={4} variant="h6">
          Let’s Connect
        </Typography>
        <Typography mt={2} ml={6}>
          If you’re interested in collaborating, have a project in mind, or just
          want to say hi, feel free to reach out. I am always open to new
          opportunities and love connecting with people who are passionate about
          web development and technology. Thank you for stopping by my page, and
          I look forward to connecting with you!
        </Typography>
      </Grid2>
    </Container>
  );
}

export default About