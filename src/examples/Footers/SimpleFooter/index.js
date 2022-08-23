/**
=========================================================
* Material Kit 2 React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Container from "@mui/material/Container";
// import Link from "@mui/material/Link";
// import Icon from "@mui/material/Icon";

// Material Kit 2 React components
import MKBox from "components/MKBox";
// import MKTypography from "components/MKTypography";

// Material Kit 2 React base styles
import typography from "assets/theme/base/typography";

function SimpleFooter({ light }) {
  const { size } = typography;

  return (
    <Container>
      <MKBox
        width="100%"
        display="flex"
        flexDirection={{ xs: "column", lg: "row" }}
        justifyContent="center"
        alignItems="center"
        textAlign="center"
      >
        <MKBox
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexWrap="wrap"
          color={light ? "white" : "text"}
          fontSize={size.sm}
          textAlign="center"
        >
          &copy; {new Date().getFullYear()}, Todos direitos reservados.
        </MKBox>
      </MKBox>
    </Container>
  );
}

// Setting default values for the props of SimpleFooter
SimpleFooter.defaultProps = {
  light: false,
};

// Typechecking props for the SimpleFooter
SimpleFooter.propTypes = {
  light: PropTypes.bool,
};

export default SimpleFooter;
