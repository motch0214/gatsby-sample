import { Link } from "gatsby"
import React, { useState } from "react"

import IconButton from "@material-ui/core/IconButton"
import Menu from "@material-ui/core/Menu"
import MenuItem from "@material-ui/core/MenuItem"
import ImageIcon from "@material-ui/icons/Image"
import InsertDriveFileIcon from "@material-ui/icons/InsertDriveFile"
import MenuIcon from "@material-ui/icons/Menu"

import styles from "./Header.module.css"

const Header: React.FC = () => {
  const [anchor, setAnchor] = useState<HTMLElement | null>(null)

  return (
    <div className="flex items-center justify-end w-full max-w-4xl px-4 py-2 mx-auto">
      <IconButton className="p-2" onClick={(e) => setAnchor(e.currentTarget)}>
        <MenuIcon />
      </IconButton>
      <Menu
        classes={{ list: styles.menu }}
        anchorEl={anchor}
        getContentAnchorEl={null}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        open={!!anchor}
        onClose={() => setAnchor(null)}
      >
        <MenuItem>
          <Link className={styles.item} to="/privacy">
            <div className={styles.icon}>
              <InsertDriveFileIcon />
            </div>
            Privacy Policy
          </Link>
        </MenuItem>
        <MenuItem>
          <Link className={styles.item} to="/gallary">
            <div className={styles.icon}>
              <ImageIcon />
            </div>
            Gallary
          </Link>
        </MenuItem>
      </Menu>
    </div>
  )
}

export default Header
