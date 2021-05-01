/** @jsxImportSource @emotion/react */
import { jsx, css } from "@emotion/react";
import * as React from "react";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import PersonIcon from "@material-ui/icons/Person";
import Typography from "@material-ui/core/Typography";
import { Avatar, Container, TextField } from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signoutRequest } from "../modules/user";

const sections = [
  { title: "Market", url: "market" },
  { title: "Events", url: "#" },
  { title: "Community", url: "#" },
  { title: "FAQ", url: "#" },
  { title: "About", url: "#" },
];

function Header({ user }) {
  const dispatch = useDispatch();
  const history = useHistory();
  const handlehistory = (e) => {
    user.data ? history.push("/mypage") : history.push("/login");
  };
  return (
    <div
      css={{
        width: "100%",
        boxShadow: "0px 5px 11px 0px #E5E5E5",
        marginBottom: "1rem",
      }}
    >
      <Container maxWidth="lg">
        <Toolbar sx={{ alignItems: "center" }}>
          <Link to="/">
            <Avatar src="https://i.postimg.cc/QdNLR1CX/logo-fullsize.png" />
          </Link>
          <Link
            to="/"
            css={{
              display: "flex",
              flex: 1,
              alignItems: "center",
              marginTop: "0.5rem",
            }}
          >
            <img
              src="https://i.postimg.cc/zfDxr1p3/2021-05-01-10-05-53.png"
              alt="logo"
              style={{ width: "6rem" }}
            />
          </Link>
          <TextField label="아이템 검색하기" size="small" sx={{ flex: 3 }} />
          <IconButton>
            <SearchIcon />
          </IconButton>
          <IconButton onClick={handlehistory}>
            <PersonIcon />
          </IconButton>
          {user.data ? (
            <Button
              color="inherit"
              variant="outlined"
              size="small"
              sx={{ textDecoration: "none" }}
              onClick={() => {
                dispatch(signoutRequest());
              }}
            >
              LOG OUT
            </Button>
          ) : (
            <Link to="/signup">
              <Button
                variant="outlined"
                size="small"
                sx={{ textDecoration: "none" }}
              >
                Sign up
              </Button>
            </Link>
          )}
        </Toolbar>
        <Toolbar
          component="nav"
          variant="dense"
          sx={{ justifyContent: "space-between", overflowX: "auto" }}
        >
          {sections.map((section) => (
            <Link
              to={`/${section.url}`}
              key={section.title}
              style={{
                flex: 1,
                height: "3rem",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexShrink: 0,
              }}
            >
              {section.title}
            </Link>
          ))}
        </Toolbar>
      </Container>
    </div>
  );
}

export default React.memo(Header);
