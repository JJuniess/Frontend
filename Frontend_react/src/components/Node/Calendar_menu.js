import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import Calendar from './Calendar.js' 

export default function Calendar_menu(){
  return(
  <PopupState variant="popover" popupId="demo-popup-menu">
    {(popupState) => (
      <React.Fragment>
        <Button variant="contained" sx={{ marginLeft: "80%", marginRight: "auto" }}{...bindTrigger(popupState)}>
          Date Search
        </Button>
        <Menu {...bindMenu(popupState)}>
          <MenuItem onClick={popupState}><Calendar></Calendar></MenuItem>
        </Menu>
      </React.Fragment>
    )}
  </PopupState>
  );
}

