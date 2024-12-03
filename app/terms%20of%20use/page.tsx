import React from 'react';
import { Container, Typography, Divider, Box } from '@mui/material';
import Link from 'next/link';
import { OpenInNew } from '@mui/icons-material';

const TermsOfUse = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h4" gutterBottom>
        Terms of Use
      </Typography>
      <Divider sx={{ mb: 3 }} />

      <Box mb={4}>
        <Typography variant="h6" gutterBottom>
          1. Introduction
        </Typography>
        <Typography>
          Welcome to my portfolio page. By accessing or using this website and
          its services, you agree to be bound by the following Terms of Use.
          Please read them carefully, as they contain important information
          regarding your legal rights, remedies, and obligations.
        </Typography>
      </Box>

      <Box mb={4}>
        <Typography variant="h6" gutterBottom>
          2. Acceptance of Terms
        </Typography>
        <Typography>
          By using this website, you confirm that you accept these terms and
          agree to comply with them. If you do not agree to these terms, you
          must not use this website or its services.
        </Typography>
      </Box>

      <Box mb={4}>
        <Typography variant="h6" gutterBottom>
          3. Modifications to Terms
        </Typography>
        <Typography>
          I may revise these terms at any time by updating this page. You are
          expected to check this page periodically to stay informed of any
          changes, as they are binding on you.
        </Typography>
      </Box>

      <Box mb={4}>
        <Typography variant="h6" gutterBottom>
          4. Use of Our Services
        </Typography>
        <Typography>
          You agree to use this website and its services only for lawful
          purposes and in accordance with these terms. You are prohibited from
          using the services in any way that could damage or impair the website
          or interfere with any other user’s access or use.
        </Typography>
      </Box>

      <Box mb={4}>
        <Typography variant="h6" gutterBottom>
          5. Intellectual Property
        </Typography>
        <Typography>
          All content on this website, including text, graphics, logos, and
          images, is the property of Sakeasi Baleiwai Komaidrakulu and is
          protected by applicable intellectual property laws. You may not
          reproduce, distribute, or otherwise use any content without prior
          written consent.
        </Typography>
      </Box>

      <Box mb={4}>
        <Typography variant="h6" gutterBottom>
          6. Limitation of Liability
        </Typography>
        <Typography>
          In no event will I or my affiliates be liable for any direct,
          indirect, incidental, special, or consequential damages resulting from
          your use of, or inability to use, this website or its services.
        </Typography>
      </Box>

      <Box mb={4}>
        <Typography variant="h6" gutterBottom>
          7. Termination
        </Typography>
        <Typography>
          I reserve the right to terminate or suspend your access to this
          website or its services at my sole discretion, without notice, for
          conduct that I believe violates these terms or is harmful to other
          users or my business interests.
        </Typography>
      </Box>

      <Box mb={4}>
        <Typography variant="h6" gutterBottom>
          8. Governing Law
        </Typography>
        <Typography>
          These terms are governed by and construed in accordance with the laws
          of Fiji. You agree to submit to the exclusive jurisdiction of the
          courts in Fiji for any dispute arising under or related to these
          terms.
        </Typography>
      </Box>

      <Box mb={4}>
        <Typography variant="h6" gutterBottom>
          9. Contact Us
        </Typography>
        <Typography>
          If you have any questions about these Terms of Use, please contact me
          at{" "}
          <Typography component={Link} href={"/contact"} color="primary">
            here
            <OpenInNew fontSize="small" />
          </Typography>
          .
        </Typography>
      </Box>
    </Container>
  );
};

export default TermsOfUse;
