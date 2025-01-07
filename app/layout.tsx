import type { Metadata } from "next";
import "./globals.css";
import ResponsiveAppBar from "@/navbar";
import { Box } from "@mui/material";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "This is a portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ResponsiveAppBar />
        <Box sx={{overflowY:'auto', height:'90vh'}}>{children}</Box>
      </body>
    </html>
  );
}
