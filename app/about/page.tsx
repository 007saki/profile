import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import { Box } from "@mui/material";

export default function About() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "90vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Typography gutterBottom variant="h5" component="div">
        About
      </Typography>
      <Card
        sx={{
          maxWidth: "80%",
          bgcolor: "black",
          color: "white",
          overflowY: "scroll",
          height: "70vh",
        }}
      >
        <CardActionArea>
          <CardMedia />
          <CardContent>
            <Typography sx={{ fontFamily: "monospace", fontSize: "14px" }}>
              The purpose of this website is to display my knowledge in web
              development using Javascript. I am using a Javascript library
              called Next JS and there are several benefits of using a web
              application such as this:
            </Typography>{" "}
            <br />
            <br />
            <br />
              <Typography
                sx={{ mr: 3, fontFamily: "monospace", fontSize: "14px" }}
              >
                1. Accessibility Web applications are accessible from any device
                with an internet connection and a browser, allowing users to
                access them on desktops, tablets, or mobile devices. They
                eliminate the need for platform-specific versions, making them
                platform-agnostic and accessible across various operating
                systems (Windows, macOS, Linux, etc.).
              </Typography>{" "}
              <br />
            <br />
            <br />
            <Typography sx={{ fontFamily: "monospace", fontSize: "14px" }}>
              2. No Installation Required Users don’t need to download or
              install web applications; they simply open a browser and start
              using them. This reduces the burden on device storage and
              simplifies the user experience.
            </Typography>{" "}
            <br />
            <br />
            <Typography sx={{ fontFamily: "monospace", fontSize: "14px" }}>
              3. Easy Maintenance and Updates Updates and bug fixes can be
              applied centrally on the server, ensuring all users get the latest
              version without needing individual downloads or installations.
              This centralized control allows for rapid deployment and better
              security, as vulnerabilities can be addressed quickly.
            </Typography>{" "}
            <br />
            <br />
            <Typography sx={{ fontFamily: "monospace", fontSize: "14px" }}>
              4. Cross-Platform Compatibility Most modern web applications work
              seamlessly across various devices and screen sizes, thanks to
              responsive design and browser compatibility. This
              cross-compatibility reduces the need to develop separate
              applications for different platforms (e.g., Android and iOS).
            </Typography>{" "}
            <br />
            <br />
            <Typography sx={{ fontFamily: "monospace", fontSize: "14px" }}>
              5. Scalability Web applications can be easily scaled to handle
              increasing user demand by upgrading server infrastructure or using
              cloud services. This flexibility allows businesses to grow their
              user base without having to redesign or rebuild their application.
            </Typography>{" "}
            <br />
            <br />
            <Typography sx={{ fontFamily: "monospace", fontSize: "14px" }}>
              6. Data Security and Backup Data in web applications is typically
              stored on remote servers or cloud services, reducing the risk of
              data loss from device issues. Centralized storage allows for
              regular backups and enhanced security measures, ensuring data
              integrity and availability.
            </Typography>{" "}
            <br />
            <br />
            <Typography sx={{ fontFamily: "monospace", fontSize: "14px" }}>
              7. Cost Efficiency Web applications reduce costs associated with
              platform-specific development, maintenance, and distribution.
              Since they’re hosted on a server, there’s typically no need for
              expensive distribution channels, like app stores.
            </Typography>{" "}
            <br />
            <br />
            <Typography sx={{ fontFamily: "monospace", fontSize: "14px" }}>
              8. Enhanced Collaboration and Real-Time Communication Web
              applications can be easily designed to support collaborative
              features, allowing multiple users to work on the same data
              simultaneously. Real-time updates ensure that users see the latest
              changes, which is especially useful for applications like project
              management tools, file-sharing platforms, and team communication
              software.
            </Typography>{" "}
            <br />
            <br />
            <Typography sx={{ fontFamily: "monospace", fontSize: "14px" }}>
              9. Increased Reach Since web applications can be accessed
              globally, businesses can reach a larger audience. This global
              accessibility is ideal for businesses looking to expand their
              presence without geographical constraints.
            </Typography>{" "}
            <br />
            <br />
            <Typography sx={{ fontFamily: "monospace", fontSize: "14px" }}>
              10. Analytics and Personalization Web applications can integrate
              with analytics tools to track user behavior, helping businesses
              understand user preferences and make data-driven decisions. This
              data can also be used to personalize user experiences, increasing
              engagement and satisfaction.
            </Typography>{" "}
            <br />
            <br />
            <Typography sx={{ fontFamily: "monospace", fontSize: "14px" }}>
              11. Reduced Hardware Requirements Users can run web applications
              with minimal hardware requirements because most processing is done
              on the server. This reduces the need for powerful devices,
              allowing users to access the application even on lower-spec
              devices.
            </Typography>{" "}
            <br />
          </CardContent>
        </CardActionArea>
        <CardActions>
        </CardActions>
      </Card>
    </Box>
  );
}
