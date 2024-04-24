import { Dispatch, SetStateAction, useState } from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import FaceRetouchingNaturalSharpIcon from "@mui/icons-material/FaceRetouchingNaturalSharp";
import PsychologyIcon from "@mui/icons-material/Psychology";
import TimelineIcon from "@mui/icons-material/Timeline";
import styles from "./drawer-styles.module.css";
import { MENU_CONTENT } from "../content/content";
import { getTypeFromString } from "../../helpers/content";
import { motion } from "framer-motion";

const ANCHOR = "right";

const icons = [
  <FaceRetouchingNaturalSharpIcon />,
  <PsychologyIcon />,
  <TimelineIcon />,
];

type Props = {
  setContent: Dispatch<SetStateAction<MENU_CONTENT>>;
};

const Drawer = (props: Props) => {
  const { setContent } = props;

  const [open, setOpen] = useState(false);

  const toggleDrawer =
    (isOpen: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setOpen(isOpen);
    };

  const menu = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
      style={{ backgroundColor: "black", height: "100%" }}
    >
      <List
        style={{
          backgroundColor: "black",
          color: "white",
        }}
      >
        {/* {["PROFILE", "SKILLS", "EXPERIENCE"].map((text, index) => ( */}
        {["PROFILE", "SKILLS"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton
              onClick={() => setContent(getTypeFromString(text.toLowerCase()))}
            >
              <ListItemIcon style={{ color: "#70F26C" }}>
                {icons[index]}
              </ListItemIcon>
              <div className={`${styles["menu-item-text"]}`}>{text}</div>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      {/* <Divider style={{ borderColor: "white", borderWidth: "0.1px" }} />
      <List style={{ backgroundColor: "black", color: "white" }}>
        {["SNIPPETS"].map((text) => (
          <ListItem key={text} disablePadding>
            <ListItemButton
              onClick={() => setContent(getTypeFromString(text.toLowerCase()))}
            >
              <ListItemIcon style={{ color: "#70F26C" }}>
                <LightbulbSharpIcon />
              </ListItemIcon>
              <div className={`${styles["menu-item-text"]}`}>{text}</div>
            </ListItemButton>
          </ListItem>
        ))}
      </List> */}
    </Box>
  );

  return (
    <div>
      <motion.button
        className={`${styles["menu-title"]}`}
        onClick={toggleDrawer(true)}
        whileHover={{ scale: [null, 1.5, 1.4], x: [null, 15, 12] }}
        transition={{ duration: 0.3 }}
      >
        MENU
      </motion.button>

      <SwipeableDrawer
        anchor={ANCHOR}
        open={open}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
        {menu()}
      </SwipeableDrawer>
    </div>
  );
};

export default Drawer;
