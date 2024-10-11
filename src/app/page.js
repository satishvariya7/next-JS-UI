"use client";
import { makeStyles } from "@mui/styles";
import "bootstrap/dist/css/bootstrap.min.css";
import headerLogo from "../images/header.png";
import womanLogo from "../images/woman.png";
import storeLogo from "../images/store.png";
import Image from "next/image";
import {
  AccessTime,
  AddCircleOutline,
  DescriptionOutlined,
  Dns,
  FolderZip,
  Lock,
  Search,
  Settings,
  StarRounded,
} from "@mui/icons-material";
import {
  Button,
  Checkbox,
  FormControlLabel,
  Grid2,
  TextField,
} from "@mui/material";
import { formField } from "./utils";
import { useState } from "react";

const useStyles = makeStyles({
  sideBar: {
    width: "25%",
    alignItems: "center",
    borderRight: "1px solid gray",
  },
  content: { width: "75%", padding: "30px 70px 30px 70px" },
  root: { display: "flex" },
  sideBarMain: {
    padding: "13px",
    display: "flex",
    borderBottom: "1px solid gray",
  },
  templates: {
    margin: "0px",
    alignItems: "center",
    display: "flex",
    fontWeight: "bold",
    cursor: "pointer",
  },
  resumizeme: {
    margin: "0px",
    alignItems: "center",
    display: "flex",
    cursor: "pointer",
  },
  search: {
    margin: "0px",
    alignItems: "center",
    display: "flex",
    fontWeight: "bold",
    cursor: "pointer",
  },
  software: {
    margin: "0px",
    alignItems: "center",
    display: "flex",
    cursor: "pointer",
  },
  hardware: {
    margin: "0px",
    alignItems: "center",
    display: "flex",
    cursor: "pointer",
  },
  network: {
    margin: "0px",
    alignItems: "center",
    display: "flex",
    cursor: "pointer",
  },
  technical: {
    margin: "0px",
    alignItems: "center",
    display: "flex",
    cursor: "pointer",
  },
  administrator: {
    margin: "0px",
    alignItems: "center",
    display: "flex",
    cursor: "pointer",
  },
  analysis: {
    margin: "0px",
    alignItems: "center",
    display: "flex",
    cursor: "pointer",
  },
  computerT: {
    margin: "0px",
    alignItems: "center",
    display: "flex",
    cursor: "pointer",
  },
  pastSearch: {
    margin: "0px",
    alignItems: "center",
    display: "flex",
    cursor: "pointer",
  },
  boardMain: {
    display: "flex",
    padding: "7px 10px 7px 10px",
    alignItems: "center",
  },
  myBoard: {
    margin: "0px",
    alignItems: "center",
    display: "flex",
    fontWeight: "bold",
    fontSize: "17px",
    cursor: "pointer",
  },
  profileMain: {
    padding: "13px",
    display: "flex",
    height: "17rem",
    alignItems: "end",
  },
  profile: { borderTop: "1px solid gray", display: "flex", width: "100%" },
  imageMain: {
    display: "flex",
    width: "50%",
    marginTop: "10px",
    alignItems: "center",
  },
  womanLogo: {
    width: "30px",
    height: "30px",
    marginRight: "10px",
    cursor: "pointer",
  },
  name: {
    margin: "0px",
    alignItems: "center",
    display: "flex",
    cursor: "pointer",
  },
  settingMain: {
    display: "flex",
    width: "50%",
    justifyContent: "end",
    marginTop: "10px",
  },
  storeMain: {
    width: "11%",
    padding: "10px 0px 10px 0px",
    alignItems: "center",
    display: "flex",
  },
  deleteMain: {
    marginTop: "23px",
    border: "1px solid gray",
    borderRadius: "7px",
    padding: "13px",
  },
  contentMain: {
    padding: "20px",
    backgroundColor: "#008B5D",
    borderRadius: "7px",
    color: "#fff",
    display: "flex",
  },
});

export default function Home() {
  const classes = useStyles();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    city: "",
    postalCode: "",
    address: "",
    email: "",
    phone: "",
    password: "",
  });

  const [termCondition, setTermCondition] = useState(false);

  const [validation, setValidation] = useState({
    firstName: false,
    lastName: false,
    city: false,
    postalCode: false,
    address: false,
    email: false,
    phone: false,
    password: false,
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setFormData({ ...formData, [name]: value });
    setValidation({ ...validation, [name]: false });
  };

  const formValidation = () => {
    let isValid = true;
    const newValidation = { ...validation };
    Object.keys(formData).forEach((key) => {
      if (formData[key] === "") {
        newValidation[key] = true;
        isValid = false;
      }
    });
    setValidation(newValidation);
    return isValid;
  };

  const handleSaveClick = () => {
    const isValid = formValidation();
    if (isValid) {
      //Do whatever after isValid is true, and is valid is true when any field are not empty!
    }
  };

  return (
    <div className={classes.root}>
      <div className={classes.sideBar}>
        <div className={classes.sideBarMain}>
          <Image
            src={headerLogo}
            alt="logo"
            style={{
              width: "30px",
              height: "35px",
              marginRight: "5px",
              cursor: "pointer",
            }}
          />
          <h5 className={classes.resumizeme}>Resumizeme</h5>
        </div>
        <div>
          <div style={{ display: "flex", padding: "15px 10px 7px 10px" }}>
            <DescriptionOutlined
              sx={{ marginRight: "5px", cursor: "pointer" }}
            />
            <h6 className={classes.templates}>My templates</h6>
          </div>
          <div style={{ display: "flex", padding: "7px 10px 7px 10px" }}>
            <Search sx={{ marginRight: "5px", cursor: "pointer" }} />
            <h6 className={classes.search}>Search</h6>
          </div>
          <div style={{ display: "flex", padding: "7px 10px 7px 10px" }}>
            <StarRounded
              sx={{ color: "gold", marginRight: "5px", cursor: "pointer" }}
            />
            <h6 className={classes.software}>Software Engineer</h6>
          </div>
          <div style={{ display: "flex", padding: "7px 10px 7px 10px" }}>
            <StarRounded
              sx={{ color: "gold", marginRight: "5px", cursor: "pointer" }}
            />
            <h6 className={classes.hardware}>Computer hardware engineer</h6>
          </div>
          <div style={{ display: "flex", padding: "7px 10px 7px 10px" }}>
            <StarRounded
              sx={{ color: "gold", marginRight: "5px", cursor: "pointer" }}
            />
            <h6 className={classes.network}>Network Engineer</h6>
          </div>
          <div style={{ display: "flex", padding: "7px 10px 7px 10px" }}>
            <StarRounded
              sx={{ color: "gold", marginRight: "5px", cursor: "pointer" }}
            />
            <h6 className={classes.technical}>Technical Support</h6>
          </div>
          <div style={{ display: "flex", padding: "7px 10px 7px 10px" }}>
            <StarRounded
              sx={{ color: "gold", marginRight: "5px", cursor: "pointer" }}
            />
            <h6 className={classes.administrator}>Network Administrator</h6>
          </div>
          <div style={{ display: "flex", padding: "7px 10px 7px 10px" }}>
            <StarRounded
              sx={{ color: "gold", marginRight: "5px", cursor: "pointer" }}
            />
            <h6 className={classes.analysis}>Data analysis</h6>
          </div>
          <div style={{ display: "flex", padding: "7px 10px 7px 10px" }}>
            <StarRounded
              sx={{ color: "gold", marginRight: "5px", cursor: "pointer" }}
            />
            <h6 className={classes.computerT}>Computer Technical</h6>
          </div>
          <div style={{ display: "flex", padding: "7px 10px 7px 10px" }}>
            <AccessTime sx={{ marginRight: "5px", cursor: "pointer" }} />
            <h6 className={classes.pastSearch}>Past Search 1</h6>
          </div>
          <div style={{ display: "flex", padding: "7px 10px 7px 10px" }}>
            <AccessTime sx={{ marginRight: "5px", cursor: "pointer" }} />
            <h6 className={classes.pastSearch}>Past Search 2</h6>
          </div>
          <div style={{ display: "flex", padding: "7px 10px 7px 10px" }}>
            <AccessTime sx={{ marginRight: "5px", cursor: "pointer" }} />
            <h6 className={classes.pastSearch}>Computers and information</h6>
          </div>
          <div className={classes.boardMain}>
            <div className="w-50 d-flex">
              <Dns
                sx={{ fontSize: "30px", marginRight: "5px", cursor: "pointer" }}
              />
              <h6 className={classes.myBoard}>My Boards</h6>
            </div>
            <div className="w-50 justify-content-end d-flex">
              <AddCircleOutline sx={{ color: "gray", cursor: "pointer" }} />
            </div>
          </div>
          <div style={{ display: "flex", padding: "7px 10px 7px 10px" }}>
            <FolderZip
              sx={{ color: "goldenrod", marginRight: "5px", cursor: "pointer" }}
            />
            <h6 className={classes.pastSearch}>Board 1</h6>
          </div>
          <div style={{ display: "flex", padding: "7px 10px 7px 10px" }}>
            <FolderZip
              sx={{ color: "goldenrod", marginRight: "5px", cursor: "pointer" }}
            />
            <h6 className={classes.pastSearch}>Board 2</h6>
          </div>
          <div style={{ display: "flex", padding: "7px 10px 7px 10px" }}>
            <FolderZip
              sx={{ color: "goldenrod", marginRight: "5px", cursor: "pointer" }}
            />
            <h6 className={classes.pastSearch}>Board 3</h6>
          </div>
          <div style={{ display: "flex", padding: "7px 10px 7px 10px" }}>
            <Lock
              sx={{ color: "goldenrod", marginRight: "5px", cursor: "pointer" }}
            />
            <h6 className={classes.pastSearch}>Board agent 1</h6>
          </div>
          <div style={{ display: "flex", padding: "7px 10px 7px 10px" }}>
            <Lock
              sx={{ color: "goldenrod", marginRight: "5px", cursor: "pointer" }}
            />
            <h6 className={classes.pastSearch}>Board agent 2</h6>
          </div>
          <div style={{ display: "flex", padding: "7px 10px 7px 10px" }}>
            <Lock
              sx={{ color: "goldenrod", marginRight: "5px", cursor: "pointer" }}
            />
            <h6 className={classes.pastSearch}>Board agent 3</h6>
          </div>
        </div>
        <div className={classes.profileMain}>
          <div className={classes.profile}>
            <div className={classes.imageMain}>
              <Image
                src={womanLogo}
                alt="woman-logo"
                className={classes.womanLogo}
              />
              <h6 className={classes.name}>Carla</h6>
            </div>
            <div className={classes.settingMain}>
              <Settings style={{ cursor: "pointer" }} />
            </div>
          </div>
        </div>
      </div>
      <div className={classes.content}>
        <div className={classes.contentMain}>
          <div className={classes.storeMain}>
            <Image
              src={storeLogo}
              alt="store-logo"
              style={{ width: "70px", height: "70px" }}
            />
          </div>
          <div style={{ width: "89%" }}>
            <h4>Premium Account</h4>
            <p className="m-0">
              You have a premium account, granting you access to all the
              remarkable features offered by ResumeDone. With this privilege,
              you can indulge in the freedom of downloading an unlimited number
              of resumes and cover letters in both PDF and Word formats.
            </p>
          </div>
        </div>
        <div style={{ marginTop: "23px" }}>
          <h4 style={{ fontWeight: "bold" }}>Personal information</h4>
          <div style={{ marginTop: "23px" }}>
            <Grid2 container spacing={2}>
              {formField?.map((item, index) => (
                <Grid2 key={index} size={item?.size}>
                  <TextField
                    variant="outlined"
                    fullWidth
                    type={item?.type}
                    name={item?.name}
                    label={item?.label}
                    value={formData[item?.name]}
                    onChange={(e) => handleChange(e)}
                    error={validation[item?.name]}
                    helperText={
                      validation[item?.name] ? `${item?.name} is required!` : ""
                    }
                  />
                </Grid2>
              ))}
              <Grid2 size={12}>
                <span>
                  Use this email to login to your{" "}
                  <span style={{ color: "#1688FE", cursor: "pointer" }}>
                    resumedone.io
                  </span>{" "}
                  account and receive notification.
                </span>
              </Grid2>
              <Grid2 size={12}>
                <Button
                  sx={{ backgroundColor: "#1688FE", width: "13rem" }}
                  variant="contained"
                  onClick={() => handleSaveClick()}
                >
                  Save
                </Button>
              </Grid2>
              <Grid2 size={12}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={termCondition}
                      onChange={(e) => setTermCondition(e.target.checked)}
                    />
                  }
                />
                <span>
                  Show my profile to serious employers on{" "}
                  <span style={{ color: "#1976d2", cursor: "pointer" }}>
                    hirethebest.io
                  </span>{" "}
                  for free
                </span>
              </Grid2>
            </Grid2>
          </div>
        </div>
        <div className={classes.deleteMain}>
          <h5>Delete account</h5>
          <p style={{ color: "gray" }}>
            if you delete your account you'll be permanently removing it from
            our systems - you can't undo it.
          </p>
          <h6 style={{ color: "tomato" }}>Yes, delete my account</h6>
        </div>
        <div
          style={{
            marginTop: "23px",
            borderBottom: "1px solid gray",
          }}
        >
          <span>
            <span style={{ color: "#1976d2", fontWeight: "600" }}>
              Get in touch with our support team
            </span>{" "}
            if you have any question or want to leave some feedback.
          </span>
          <p>We'll be happy to hear from you.</p>
        </div>
        <Grid2 container style={{ marginTop: "23px" }}>
          <Grid2 size={2}>
            <span style={{ cursor: "pointer", color: "gray" }}>
              Terms & Conditions
            </span>
          </Grid2>
          <Grid2 size={2}>
            <span style={{ cursor: "pointer", color: "gray" }}>
              Privacy Policy
            </span>
          </Grid2>

          <Grid2 size={1}>
            <span style={{ cursor: "pointer", color: "gray" }}>FAQ</span>
          </Grid2>
          <Grid2 size={2}>
            <span style={{ cursor: "pointer", color: "gray" }}>Contact Us</span>
          </Grid2>
        </Grid2>
      </div>
    </div>
  );
}
