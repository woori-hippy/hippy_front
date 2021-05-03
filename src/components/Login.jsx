/** @jsxImportSource @emotion/react */
import { jsx, css } from "@emotion/react";
import * as React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { useRef } from "react";
import { useHistory } from "react-router";
import { Link as LinkRoute } from "react-router-dom";
import GoogleLogin from "react-google-login";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function Login({ onLogin, onOauthKakao, onOauthGoogle }) {
  const history = useHistory();
  const emailRef = useRef();
  const pwdRef = useRef();

  const handleLogin = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = pwdRef.current.value;
    onLogin(email, password);
  };

  const handleOauthKakao = (e) => {
    e.preventDefault();
    onOauthKakao();
  };

  const handleOauthGoogle = (result) => {
    onOauthGoogle(result);
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "#1B7EA6" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box
          component="form"
          noValidate
          sx={{
            width: "100%", // Fix IE11 issue.
            mt: 1,
          }}
        >
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            inputRef={emailRef}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            inputRef={pwdRef}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{
              mt: 3,
              mb: 1,
              height: "3.5rem",
              backgroundColor: "#3887A6",
              fontSize: "1.2rem",
              fontWeight: "bold",
            }}
            onClick={handleLogin}
          >
            로그인
          </Button>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{
              mt: 2,
              mb: 2,
              height: "3.5rem",
              backgroundColor: "transparent",
              backgroundImage:
                "url(https://i.postimg.cc/qMtHXhX0/kakao-login-medium-wide.png)",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
            onClick={handleOauthKakao}
          ></Button>

          <GoogleLogin
            clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
            render={(props) => (
              <button
                css={css`
                  width: 100%;
                  height: 3.5rem;
                  border-radius: 8px;
                  margin-top: 0.5rem;
                  background-color: transparent;
                  cursor: pointer;
                  border: 1.5px solid black;
                  outline: 0;
                  position: relative;
                  display: flex;
                  justify-content: center;
                  p {
                    margin: auto 0;
                    font-size: 1.2rem;
                    font-weight: bold;
                  }
                `}
                onClick={props.onClick}
              >
                <img
                  src="https://i.postimg.cc/X73FC2HF/google-icon.png"
                  alt="google"
                  css={css`
                    position: absolute;
                    left: 2px;
                    top: 2px;
                    width: auto;
                    height: 90%;
                  `}
                />
                <p>구글 로그인</p>
              </button>
            )}
            onSuccess={(result) => handleOauthGoogle(result.tokenObj)}
            onFailure={(result) => console.log(result)}
            cookiePolicy={"single_host_origin"}
          />

          <Grid container>
            <Grid item xs></Grid>
            <Grid item>
              <LinkRoute
                to="/signup"
                css={css`
                  font-size: 0.8rem;
                  color: #1b7ea6;
                `}
              >
                Don't have an account? Sign Up
              </LinkRoute>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Copyright sx={{ mt: 8, mb: 4 }} />
    </Container>
  );
}
