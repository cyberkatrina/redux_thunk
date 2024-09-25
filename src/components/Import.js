import React from "react";
import {
  Button,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Container,
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const Import = (props) => {

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [currentIdx, setCurrentIdx] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event, idx) => {
    setAnchorEl(event.currentTarget);
    setCurrentIdx(idx)
  };

  const handleClose = () => {
    setAnchorEl(null);
    setCurrentIdx(null)
  };

  return (
    <Container maxWidth="lg">
      <Button onClick={props.fetchMakes} variant="contained" color="primary" style={{marginTop: '10px'}}>
        Import
      </Button>
      <h2>COUNT: {props.makes.length}</h2>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>Make</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.makes.map((make) => (
            <TableRow key={make.id}>
              <TableCell component="th" scope="row">
                {make.MakeId}
              </TableCell>
              <TableCell>{make.MakeName}</TableCell>
              <TableCell>
                <div>
                  <IconButton
                    aria-label="more"
                    id="long-button"
                    aria-controls={open ? "long-menu" : undefined}
                    aria-expanded={open ? "true" : undefined}
                    aria-haspopup="true"
                    onClick={handleClick}
                  >
                    <MoreVertIcon />
                  </IconButton>
                  <Menu
                    id="long-menu"
                    MenuListProps={{
                      "aria-labelledby": "long-button",
                    }}
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                  >
                    <MenuItem onClick={() => {
                      props.removeCar(currentIdx); // Use the stored index for deletion
                      handleClose(); // Close the menu
                    }}>
                        Delete
                    </MenuItem>
                  </Menu>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Container>
  );
};

export default Import;
