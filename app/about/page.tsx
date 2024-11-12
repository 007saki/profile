import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import { Container } from "@mui/material";

export default function About() {
  return (
    <Container
      sx={{
        height: "90vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      maxWidth="lg"
    >
      <Card sx={{ maxWidth: 600 }}>
        <CardActionArea>
          <CardMedia
          />

          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              About
            </Typography>
            <Typography>
              I am a dedicated and driven professional with a passion for
              technology and its potential to solve real-world challenges.
              Currently, I am focused on developing interactive, user-friendly
              websites and applications, with a particular emphasis on
              JavaScript—an essential tool in modern web development. My
              approach is centered on continuous learning and improvement,
              ensuring that I stay ahead of industry trends and best practices.
              </Typography> <br />
              <Typography>
              I thrive on creating seamless digital experiences that combine
              both functionality and creativity, aiming to deliver solutions
              that not only meet but exceed user expectations. I am committed to
              leveraging my skills and knowledge to contribute to projects that
              make a meaningful impact, always striving to refine my craft and
              drive innovation in every endeavor.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
        </CardActions>
      </Card>
    </Container>
  );
}
