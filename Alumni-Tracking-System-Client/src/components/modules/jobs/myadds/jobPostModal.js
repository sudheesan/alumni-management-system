import React, { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import { Divider, Grid } from "@mui/material";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import { Button } from "@mui/material";
import UploadFile from "@mui/icons-material/UploadFile";
import PostAddSharp from "@mui/icons-material/PostAddSharp";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  "Oliver Hansen",
  "Van Henry",
  "April Tucker",
  "Ralph Hubbard",
  "Omar Alexander",
  "Carlos Abbott",
  "Miriam Wagner",
  "Bradley Wilkerson",
  "Virginia Andrews",
  "Kelly Snyder",
];

export default function MyJobPostModal(props) {
  const { openModal, jobDetail, handleClose } = props;

  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  const [selectedFile, setSelectedFile] = useState(null);
  const [isFilePicked, setIsFilePicked] = useState(false);

  const handleFileUpload = (event) => {
    setSelectedFile(event.target.files[0]);
    setIsFilePicked(true);
  };

  return (
    <div>
      <Modal
        onClose={handleClose}
        open={openModal}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: 800, height: 600, maxHeight: 600 }}>
          <Grid container direction="column" rowSpacing={2}>
            <Grid item>Add a new job Add</Grid>
            <Grid item>
              <Divider light={false} />
            </Grid>
            <Grid item>
              <Grid
                wrap="wrap"
                height="550px"
                rowSpacing={2}
                container
                direction="column"
              >
                <Grid item md={4}>
                  <TextField
                    id="outlined-multiline-static"
                    label="Description"
                    multiline
                    rows={3}
                    variant="outlined"
                    style={{ width: 300 }}
                  />
                </Grid>
                <Grid item md={4}>
                  <TextField
                    id="outlined-multiline-static"
                    label="benifits"
                    multiline
                    rows={10}
                    variant="outlined"
                    style={{ width: 300 }}
                  />
                </Grid>
                <Grid item md={4}>
                  <div>
                    <FormControl sx={{ m: 1, width: 300 }}>
                      <InputLabel id="demo-multiple-checkbox-label">
                        Tag
                      </InputLabel>
                      <Select
                        labelId="demo-multiple-checkbox-label"
                        id="demo-multiple-checkbox"
                        multiple
                        value={personName}
                        onChange={handleChange}
                        input={<OutlinedInput label="Tag" />}
                        renderValue={(selected) => selected.join(", ")}
                        MenuProps={MenuProps}
                      >
                        {names.map((name) => (
                          <MenuItem key={name} value={name}>
                            <Checkbox checked={personName.indexOf(name) > -1} />
                            <ListItemText primary={name} />
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </div>
                </Grid>
                <Grid item md={4}>
                  <Grid container direction="column">
                    <Grid item>
                      <Button
                        fullWidth
                        variant="contained"
                        component="label"
                        color="primary"
                      >
                        <UploadFile />
                        <input type="file" onChange={handleFileUpload} hidden />
                        <span>Upload Image</span>
                      </Button>
                    </Grid>
                    <Grid item>
                      {" "}
                      <Box
                        fullWidth
                        component="div"
                        sx={{ p: 2, border: "1px dashed grey" }}
                      >
                        {`You selected: ${
                          selectedFile ? selectedFile.name : ""
                        }`}
                      </Box>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid textAlign="center" item>
                  <Button
                    size="large"
                    disabled={!isFilePicked}
                    variant="contained"
                    color="primary"
                    endIcon={<PostAddSharp />}  
                  >
                    Post
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </div>
  );
}
