import { useState, useEffect } from "react";
import { GoogleLogin } from "react-google-login";
import { gapi } from "gapi-script";
import GoogleIcon from "@mui/icons-material/Google";

// react-router-dom components
import { Link } from "react-router-dom";

// @mui material components
import Card from "@mui/material/Card";
import Switch from "@mui/material/Switch";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKInput from "components/MKInput";
import MKButton from "components/MKButton";
import MKAvatar from "components/MKAvatar";

// Material Kit 2 React example components
// import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import SimpleFooter from "examples/Footers/SimpleFooter";

// Material Kit 2 React page layout routes
// import routes from "routes";

// Images
import bgImage from "assets/images/bg-fundo.jpg";
import logo from "../../../assets/images/logos/gray-logos/logo-bompalpite.png";

const CLIENT_ID = "243631319046-7kso3focrirdb135ua5o4j590ldhn74b.apps.googleusercontent.com";
function SignInBasic() {
  const [rememberMe, setRememberMe] = useState(false);

  const handleSetRememberMe = () => setRememberMe(!rememberMe);

  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: process.env.REACT_PUBLIC_GOOGLE_CLIENT_ID,
        scope: "email",
      });
      // const request = gapi.server.plus.people.get({ userId: "102147307918874735077" });
      // console.log(request);
    }

    gapi.load("client:auth2", start);
  }, []);

  const onSuccess = (response) => {
    console.log("[LOGIN SUCCESS] currentUser:", response.profileObj);
  };

  const onFailure = (response) => {
    console.log("[LOGIN FAILED] response:", response);
  };
  return (
    <>
      <MKBox
        position="absolute"
        top={0}
        left={0}
        zIndex={1}
        width="100%"
        minHeight="100vh"
        sx={{
          backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
            `${linearGradient(
              rgba(gradients.dark.main, 0.6),
              rgba(gradients.dark.state, 0.6)
            )}, url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "grid",
          placeItems: "center",
        }}
      />
      <MKBox px={1} width="100%" height="100vh" mx="auto" position="relative" zIndex={2}>
        <Grid container spacing={1} justifyContent="center" alignItems="center" height="100%">
          <Grid item xs={11} sm={9} md={5} lg={4} xl={3}>
            <Card>
              <MKBox
                position="relative"
                variant="gradient"
                bgColor="success"
                borderRadius="lg"
                coloredShadow="success"
                mx={2}
                mt={-3}
                p={2}
                mb={1}
                textAlign="center"
              >
                <Grid flexDirection="column" alignContent="center" container>
                  <MKAvatar src={logo} alt="Avatar" size="xxl" variant="square" />
                  <MKTypography variant="h5" fontWeight="medium" color="white" mt={1}>
                    Bom Palpite
                  </MKTypography>
                </Grid>
              </MKBox>
              <MKBox pt={4} pb={3} px={3}>
                <MKBox component="form" role="form">
                  <MKBox mb={2}>
                    <MKInput type="email" label="E-mail" fullWidth />
                  </MKBox>
                  <MKBox mb={2}>
                    <MKInput type="password" label="Senha" fullWidth />
                  </MKBox>
                  <MKBox display="flex" alignItems="center" ml={-1}>
                    <Switch checked={rememberMe} onChange={handleSetRememberMe} />
                    <MKTypography
                      variant="button"
                      fontWeight="regular"
                      color="text"
                      onClick={handleSetRememberMe}
                      sx={{ cursor: "pointer", userSelect: "none", ml: -1 }}
                    >
                      &nbsp;&nbsp;Lembrar-me
                    </MKTypography>
                  </MKBox>
                  <MKBox mt={4} mb={1}>
                    <MKButton variant="gradient" color="success" fullWidth>
                      Entrar
                    </MKButton>
                  </MKBox>
                  <MKBox mt={1} mb={1}>
                    <GoogleLogin
                      clientId={CLIENT_ID}
                      render={(renderProps) => (
                        <MKButton
                          onClick={renderProps.onClick}
                          disabled={renderProps.disabled}
                          variant="gradient"
                          color="light"
                          fullWidth
                        >
                          <GoogleIcon color="secondary" />
                          &nbsp;&nbsp;Entrar com Google
                        </MKButton>
                      )}
                      buttonText="Entrar com Google"
                      onSuccess={onSuccess}
                      onFailure={onFailure}
                      cookiePolicy="single_host_origin"
                    />
                  </MKBox>
                  <MKBox mt={3} mb={1} textAlign="center">
                    <MKTypography variant="button" color="text">
                      Não tem uma conta?{" "}
                      <MKTypography
                        component={Link}
                        to="/authentication/sign-up/cover"
                        variant="button"
                        color="info"
                        fontWeight="medium"
                        textGradient
                      >
                        Cadastre-se
                      </MKTypography>
                    </MKTypography>
                  </MKBox>
                </MKBox>
              </MKBox>
            </Card>
          </Grid>
        </Grid>
      </MKBox>
      <MKBox width="100%" position="relative" zIndex={2} bottom="1.625rem">
        <SimpleFooter light />
      </MKBox>
    </>
  );
}

export default SignInBasic;
