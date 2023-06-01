import React from "react";
import { styled, useTheme } from "@mui/material/styles";
import {
  Box,
  Drawer as MuiDrawer,
  AppBar as MuiAppBar,
  Toolbar,
  List,
  CssBaseline,
  Typography,
  Divider,
  IconButton,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import {
  Menu as MenuIcon,
  ChevronLeft as ChevronLeftIcon,
  ChevronRight as ChevronRightIcon,
  People as PeopleIcon,
  Dashboard as DashboardIcon,
  Search as SearchIcon,
  Groups as GroupsIcon,
  CalendarMonth as CalendarMonthIcon,
  LibraryBooks as LibraryBooksIcon,
  FormatListBulleted as FormatListBulletedIcon,
  Settings as SettingsIcon,
  Group as GroupIcon,
  AccountBox as AccountBoxIcon,
} from "@mui/icons-material";
import { useLocation, useNavigate, Outlet as Outlet } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import "./AppLayout.css";
import UpdateLastTimeOnline from "../pages/UserOverview/UpdateLastTimeOnline";

export default function AppLayout() {
  const location = useLocation();
  const { pathname } = location;
  const { user, logout } = useAuth0();
  const navigate = useNavigate();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const getTitle = () => {
    switch (pathname) {
      case "/":
      case "/overview":
        return "OVERVIEW";
      case "/search":
        return "SEARCH";
      case "/workspaces":
        return "WORKSPACES";
      case "/social":
        return "SOCIAL";
      case "/calendar":
        return "CALENDAR";
      case "/articles":
        return "ARTICLES";
      case "/forum":
        return "FORUM";
      case "/settings":
        return "SETTINGS";
      case "/organization":
        return "ORGANIZATION";
      case "/profile":
        return "PROFILE";
      case pathname.match(/\/workspace\/[a-z0-9]{24}/)?.input:
        return "WORKSPACE";
      case "/workspace/join-room":
        return "JOIN A ROOM";
      default:
        return "404";
    }
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: "hidden",
  });

  const closedMixin = (theme) => ({
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up("sm")]: {
      width: `calc(${theme.spacing(8)} + 1px)`,
    },
  });

  const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  }));

  const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== "open",
  })(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),
  }));

  const Drawer = styled(MuiDrawer, {
    shouldForwardProp: (prop) => prop !== "open",
  })(({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
    boxSizing: "border-box",
    ...(open && {
      ...openedMixin(theme),
      "& .MuiDrawer-paper": openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      "& .MuiDrawer-paper": closedMixin(theme),
    }),
  }));

  const drawerWidth = 240;

  return (
    <main className="main">
      <UpdateLastTimeOnline />
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar position="fixed" open={open} style={{ background: "#2E3B55" }}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{
                marginRight: 5,
                ...(open && { display: "none" }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap component="div">
              {getTitle()}
            </Typography>

            <Box sx={{ marginLeft: "auto" }}>
              <div className="topbar__profile">
                <div className="topbar__profile__dropdown">
                  <div className="topbar__profile__dropdown__button">
                    <span>{user && user.given_name}</span>
                    <font-awesome-icon icon="fa-solid fa-chevron-down" />
                  </div>
                  <div className="topbar__profile__dropdown__content">
                    <ul>
                      <li onClick={() => navigate("/profile")}>
                        <font-awesome-icon icon="fa-solid fa-user" />
                        <span>Profile</span>
                      </li>
                      <li
                        onClick={() =>
                          logout({
                            logoutParams: { returnTo: window.location.origin },
                          })
                        }
                      >
                        <font-awesome-icon icon="fa-solid fa-arrow-right-from-bracket" />
                        <span>Logout</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <img
                  src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                  alt="profile picture"
                />
              </div>
            </Box>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          open={open}
          PaperProps={{
            sx: {
              backgroundColor: "#1f1f2b",
              color: "#9395a1",
            },
          }}
        >
          <DrawerHeader style={{ background: "#2E3B55" }}>
            <IconButton onClick={handleDrawerClose} style={{ color: "white" }}>
              {theme.direction === "rtl" ? (
                <ChevronRightIcon />
              ) : (
                <ChevronLeftIcon />
              )}
            </IconButton>
          </DrawerHeader>
          <Divider />
          <List>
            {[
              {
                label: "Overview",
                link: "/overview",
                icon: <DashboardIcon style={{ color: "white" }} />,
              },
              {
                label: "Search",
                link: "/search",
                icon: <SearchIcon style={{ color: "white" }} />,
              },
              {
                label: "Workspaces",
                link: "/workspaces",
                icon: <GroupsIcon style={{ color: "white" }} />,
              },
              {
                label: "Social",
                link: "/social",
                icon: <PeopleIcon style={{ color: "white" }} />,
              },
              {
                label: "Calendar",
                link: "/calendar",
                icon: <CalendarMonthIcon style={{ color: "white" }} />,
              },
              {
                label: "Articles",
                link: "/articles",
                icon: <LibraryBooksIcon style={{ color: "white" }} />,
              },
              {
                label: "Forum",
                link: "/forum",
                icon: <FormatListBulletedIcon style={{ color: "white" }} />,
              },
            ].map((item, index) => (
              <ListItem
                key={item.label}
                disablePadding
                sx={{ display: "block" }}
              >
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                  }}
                  onClick={() => navigate(item.link)}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                    }}
                  >
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={item.label}
                    sx={{ opacity: open ? 1 : 0 }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {[
              {
                label: "Settings",
                link: "/settings",
                icon: <SettingsIcon style={{ color: "white" }} />,
              },
              {
                label: "Organization",
                link: "/organization",
                icon: <GroupIcon style={{ color: "white" }} />,
              },
              {
                label: "Profile",
                link: "/profile",
                icon: <AccountBoxIcon style={{ color: "white" }} />,
              },
            ].map((item, index) => (
              <ListItem
                key={item.label}
                disablePadding
                sx={{ display: "block" }}
              >
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                  }}
                  onClick={() => navigate(item.link)}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                    }}
                  >
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={item.label}
                    sx={{ opacity: open ? 1 : 0 }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Drawer>
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <DrawerHeader />
          <Outlet />
        </Box>
      </Box>
    </main>
  );
}
