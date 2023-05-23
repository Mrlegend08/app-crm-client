import React from "react";
import { Button, TextField } from "@mui/material";
import siteLogo from "../../assets/images/site-logo.png";
import DashboardCustomizeIcon from "@mui/icons-material/DashboardCustomize";
import FullscreenIcon from "@mui/icons-material/Fullscreen";
import FullscreenExitIcon from "@mui/icons-material/FullscreenExit";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import MoveToInboxIcon from '@mui/icons-material/MoveToInbox';
import SupportIcon from '@mui/icons-material/Support';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import "./index.scss";
const Header = () => {
  const lengRef = React.useRef(null)
  const userRef = React.useRef(null)
  const [rotate, setRotate] = React.useState(false)
  const [fullscreen, setFullscreen] = React.useState(true);
  function fullScreen() {
    setFullscreen(false)
    document.documentElement.requestFullscreen();
  }
  function exitFullScreen() {
    setFullscreen(true)
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    }
  }
  document.addEventListener("click", (evt) => {
    if (evt.target.matches(".site-header__lang-icon") || evt.target.matches("[d]")) {
      userRef.current.classList.remove("site-header__user-list-open")
    } else if (evt.target.matches(".MuiButton-root") || evt.target.matches(".MuiSvgIcon-fontSizeLarge") || evt.target.matches(".MuiSvgIcon-fontSizeSmall") || rotate === true) {
      lengRef.current.classList.remove("site-header__user-lang-open")
    } else {
      lengRef.current.classList.remove("site-header__user-lang-open")
      userRef.current.classList.remove("site-header__user-list-open")
      setRotate(!rotate)
    }
  })
  function openLang() {
    lengRef.current.classList.add("site-header__user-lang-open")
  }
  function openList() {
    if (rotate === true) {
      userRef.current.classList.remove("site-header__user-list-open")
      console.log(rotate)
    } else {
      userRef.current.classList.add("site-header__user-list-open")
    }
    setRotate(!rotate)
  }
  return (
    <>
      <header className="site-header">
        <div className="site-header__wrapper">
          <form onSubmit={(evt) => evt.preventDefault()} className="site-header__search-form">
            <TextField
              id="filled-search fullWidth"
              fullWidth
              label="Qidiruv"
              type="search"
              variant="outlined"
            />
          </form>
          <img
            className="site-header__logo-img"
            src={siteLogo}
            alt="Site logo"
            width={152}
            height={48}
          />
          <div className="site-header__user-flex">
            <span onClick={() => openLang()} style={{ cursor: "pointer" }} className="site-header__lang-icon" ><DashboardCustomizeIcon onClick={() => openLang()} style={{ cursor: "pointer" }} className="site-header__lang-icon" /></span>
            <ul ref={lengRef} className="site-header__user-lang"
            >
              <li className="site-header__user-lang-item">ru</li>
              <li className="site-header__user-lang-item">uz</li>
              <li className="site-header__user-lang-item">en</li>
            </ul>
            <span>   {fullscreen ? (
              <FullscreenIcon
                onClick={() => fullScreen()}
                style={{ cursor: "pointer" }}
              />
            ) : (
              <FullscreenExitIcon
                onClick={() => exitFullScreen()}
                style={{ cursor: "pointer" }}
              />
            )}</span>
            <Button style={{ color: "black" }} className="site-header__user-btn"
              onClick={() => openList()}
              variant="text"><AccountCircleIcon fontSize="large" /> <KeyboardArrowDownIcon className={rotate ? "rotate" : "unrotate"} fontSize="small" /> </Button>
            <ul ref={userRef} className="site-header__user-list">
              <li className="site-header__user-item"> <PersonIcon /> My Profile</li>
              <li className="site-header__user-item"> <SettingsIcon /> Edit Profile </li>
              <li className="site-header__user-item"> <MoveToInboxIcon /> Inbox </li>
              <li className="site-header__user-item"> <SupportIcon />  Help </li>
              <li className="site-header__user-item"> <PowerSettingsNewIcon /> Sign Out </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
