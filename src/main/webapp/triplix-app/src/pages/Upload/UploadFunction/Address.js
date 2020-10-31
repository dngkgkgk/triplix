import React, { useState } from "react";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import InputBase from "@material-ui/core/InputBase";
import Paper from "@material-ui/core/Paper";
import SearchIcon from "@material-ui/icons/Search";
import ClearTwoToneIcon from "@material-ui/icons/ClearTwoTone";
import MapDialog from "./MapDialog";
export const AddressTtile = styled.p`
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 29px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #ffffff;
  padding-top: 30px;
`;

const useStyles = makeStyles((theme) => ({
  root: {
    height: "40px",
    width: "100%",
    background: "#FFFFFF",
    border: "2px solid #FF534B",
    boxSizing: "border-box",
    borderRadius: "22.5px",
    marginTop: "10px",
  },
  input: {
    marginLeft: theme.spacing(1),
    width: "80%",
  },
  iconButton: {
    padding: 9,
  },
  closeButton: {
    float: "right",
    padding: 8,
  },
}));

function Address(props) {
  const classes = useStyles(props);
  const [open, setOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState();
  const [address, setAddress] = useState(props.address);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value);
  };
  return (
    <div
      style={{
        height: "100%",
        width: "100%",
      }}
    >
      <AddressTtile>위치추가</AddressTtile>

      <Paper component="form" className={classes.root}>
        <IconButton
          // type="submit"
          className={classes.iconButton}
          onClick={() => props.resetSearchLocation()}
        >
          <SearchIcon />
        </IconButton>
        <InputBase
          className={classes.input}
          placeholder="위치 검색"
          //value={props.address}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              props.setAddress("");
            }
          }}
          onChange={(e) => props.setAddress(e.target.value)}
          // inputProps={{ 'aria-label': 'search google maps' }}
        />
        <IconButton
          className={classes.closeButton}
          aria-label="directions"
          onClick={() => {
            props.setAddress("");
          }}
        >
          <ClearTwoToneIcon />
        </IconButton>
        <MapDialog
          selectedValue={selectedValue}
          open={open}
          onClose={handleClose}
          address={address}
        />
      </Paper>
    </div>
  );
}

export default Address;
