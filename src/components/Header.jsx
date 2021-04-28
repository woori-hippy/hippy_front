import * as React from "react";
import PropTypes from "prop-types";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import PersonIcon from "@material-ui/icons/Person";
import Typography from "@material-ui/core/Typography";
import { Avatar, Link, TextField } from "@material-ui/core";
import { Link as LinkRouter } from "react-router-dom";
import { css } from "@emotion/react";

function Header(props) {
  const { sections, title } = props;

  return (
    <React.Fragment>
      <Toolbar sx={{ borderBottom: 1, borderColor: "divider" }}>
        <LinkRouter to="/">
          <Avatar src="https://i.postimg.cc/QdNLR1CX/logo-fullsize.png" />
        </LinkRouter>
        <Typography
          component="h2"
          variant="h5"
          color="#1B7EA6"
          align="left"
          noWrap
          sx={{ flex: 1 }}
        >
          {title}
        </Typography>
        <TextField label="아이템 검색하기" size="small" sx={{ flex: 3 }} />
        <IconButton>
          <SearchIcon />
        </IconButton>
        <LinkRouter to="/login">
          <IconButton>
            <PersonIcon />
          </IconButton>
        </LinkRouter>
        <LinkRouter to="/signup">
          <Button
            variant="outlined"
            size="small"
            sx={{ textDecoration: "none" }}
          >
            Sign up
          </Button>
        </LinkRouter>
      </Toolbar>
      <Toolbar
        component="nav"
        variant="dense"
        sx={{ justifyContent: "space-between", overflowX: "auto" }}
      >
        {sections.map((section) => (
          <Link
            color="inherit"
            noWrap
            key={section.title}
            variant="body2"
            href={section.url}
            sx={{ p: 1, flexShrink: 0 }}
          >
            {section.title}
          </Link>
        ))}
      </Toolbar>
    </React.Fragment>
  );
}

Header.propTypes = {
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    })
  ).isRequired,
  title: PropTypes.string.isRequired,
};

export default Header;
