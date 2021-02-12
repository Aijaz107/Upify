import React from 'react';
// import {Jumbotron,Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../../CSS/HomePage/WelcomeNote.css";
// import SearchField from 'react-search-field';
import { useState } from 'react';
import { Paper, Container } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
// import FormHelperText from '@material-ui/core/FormHelperText';
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';



import { TextField, Button, MenuItem, Select, InputLabel, Checkbox, ListItemText, Input } from '@material-ui/core';
import '../../../CSS/AuthStyles/auth.css';
import NavbarLogin from '../NavbarLogin';
import Footer from '../../Footer';

const UploadInternships = () => {
    const [register, setRegister] = useState({
        title: "",
        description: "",
        comp_name: "",
        domain: "",
        req_skills: "",
        add_skills: "",
        duration: "",
        location: "",
        education: "",
        experience: "",
        ctc: "",
        link: "",
    });

    const [submit, setSubmit] = useState({
        title: "",
        description: "",
        comp_name: "",
        domain: "",
        req_skills: "",
        add_skills: "",
        duration: "",
        location: "",
        education: "",
        experience: "",
        ctc: "",
        link: "",
    })

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setRegister((prev) => {
            return ({
                ...prev,
                [name]: value
            });
        })
    };
    const isMatching = () => {
        if (register.password === register.cpassword) {
            setSubmit(register);
            setRegister({
                title: "",
                description: "",
                comp_name: "",
                domain: "",
                req_skills: "",
                add_skills: "",
                duration: "",
                location: "",
                education: "",
                experience: "",
                ctc: "",
                link: "",
                email: "",
                password: "",
                cpassword: "",
                interests: []
            })
        } else {
            alert('password not matching');
        }
    }
    const submitFunc = (event) => {
        event.preventDefault();
        isMatching();
    }

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
    const domain = [
        'Data Science',
        'Blockchan',
        'Cyber Security',
        'Cloud Computing',
        'Programming'
    ];

    const useStyles = makeStyles((theme) => ({
        formControl: {
            margin: theme.spacing(1),
            minWidth: "30rem",
            alignContent: "Left"
        },
        selectEmpty: {
            marginLeft: theme.spacing(1),
        },
    }));
    const classes = useStyles();

    //   function SimpleSelect() {
    //     const classes = useStyles();
    //     // const [age, setAge] = React.useState('');

    //     // const handleChange = (event) => {
    //     //   setAge(event.target.value);
    //     };
    const [value, setValue] = React.useState('female');

    const handleChangeRadio = (event) => {
        setValue(event.target.value);
    };
    return (
        <>
            <NavbarLogin />
            {/* <h2>{`${submit.username} ${submit.email} ${submit.password} ${submit.cpassword} ${submit.interests}`}</h2> */}
            <Container maxWidth="sm" className="upload-container">
                <Paper elevation={3} className="signupPaper">
                    <Paper className="signin" id="paper">
                        <form onSubmit={submitFunc} id="myform">
                            <TextField className="myinput" name="title" value={register.title} onChange={handleChange} fullWidth={true} label="Internship Title" variant="standard" required={true} />
                            <TextField className="myinput" name="description" value={register.description} onChange={handleChange} fullWidth={true} label="Internship Description" variant="standard" required={true} />
                            <TextField className="myinput" name="comp_name" value={register.comp_name} onChange={handleChange} fullWidth={true} label="Company Hiring For/Company Name" variant="standard" required={true} />
                            <FormControl className={classes.formControl} fullWidth={true} >
                                <InputLabel id="demo-simple-select-label">Domain</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    onChange={handleChange}
                                    name="domain"
                                    value={register.domain}

                                >
                                    <MenuItem value={0}>Data Science</MenuItem>
                                    <MenuItem value={1}>Blockchan</MenuItem>
                                    <MenuItem value={2}>Cyber Security</MenuItem>
                                    <MenuItem value={3}>Cloud Computing</MenuItem>
                                    <MenuItem value={4}>Programming</MenuItem>
                                </Select>
                            </FormControl>
                            <TextField className="myinput" name="req_skills" value={register.req_skills} onChange={handleChange} fullWidth={true} label="Required Skills" variant="standard" required={true} />
                            <TextField className="myinput" name="add_skills" value={register.add_skills} onChange={handleChange} fullWidth={true} label="Additional Skills" variant="standard" required={true} />
                            <TextField className="myinput" name="duration" value={register.duration} onChange={handleChange} fullWidth={true} label="Internship Duration" variant="standard" required={true} />
                            <TextField className="myinput" name="location" value={register.location} onChange={handleChange} fullWidth={true} label="Locations(s)" variant="standard" required={true} />
                            <TextField className="myinput" name="education" value={register.education} onChange={handleChange} fullWidth={true} label="Education" variant="standard" required={true} />
                            <InputLabel style={{ textAlign: "left" }}>Experience</InputLabel>
                            <FormControl className={classes.formControl} fullWidth={true} >
                                <InputLabel id="demo-simple-select-label">Min Exp</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    onChange={handleChange}
                                    name="minExp"
                                    value={register.minExp}

                                >
                                    <MenuItem value={0}>Zero</MenuItem>
                                    <MenuItem value={1}>One Year</MenuItem>
                                    <MenuItem value={2}>Two Year</MenuItem>
                                </Select>
                            </FormControl>
                            <FormControl className={classes.formControl} fullWidth={true} >
                                <InputLabel id="demo-simple-select-helper-label">Max Exp</InputLabel>
                                <Select
                                    labelId="demo-simple-select-helper-label"
                                    id="demo-simple-select-helper"
                                    value={register.maxExp}
                                    name="maxExp"
                                    onChange={handleChange}
                                >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value={0}>Zero</MenuItem>
                                    <MenuItem value={1}>One Year</MenuItem>
                                    <MenuItem value={2}>Two Year</MenuItem>
                                </Select>
                            </FormControl>

                            {/* <FormHelperText>Some important helper text</FormHelperText> */}

                            {/* <InputLabel id="demo-simple-select-label" style={{textAlign:"left"}} fullWidth={true}>CTC</InputLabel> */}
                            <br />
                            <br />
                            <FormControl component="fieldset" fullWidth={true} style={{ alignItems: "left" }}>
                                <FormLabel component="legend" style={{ textAlign: "left" }}>CTC</FormLabel>
                                <RadioGroup aria-label="gender" name="ctc" value={value} onChange={handleChangeRadio}>
                                    <FormControlLabel value="best_in_industry" control={<Radio />} label="Best_in_industry" />
                                    <FormControlLabel value="undisclosed" control={<Radio />} label="Undisclosed" />
                                    {/* <FormControlLabel value="_." control={<Radio />} label="." /> */}
                                    {/* <FormControlLabel value="disabled" disabled control={<Radio />} label="(Disabled option)" /> */}
                                </RadioGroup>
                            </FormControl>
                            <TextField className="myinput" name="link" value={register.link} onChange={handleChange} fullWidth={true} label="Registration Link" variant="standard" required={true} />

                            {/* <FormControl component="fieldset" fullWidth={true} style={{ alignItems: "left" }}>
                                <FormLabel component="legend" style={{ textAlign: "left" }}>Salary Stucture</FormLabel>
                                <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChangeRadio}>
                                    <FormControlLabel value="withstipend" control={<Radio />} label="With Stipend" />
                                    <FormControlLabel value="withoutstipend" control={<Radio />} label="With Out Stipend" />
                                    <FormControlLabel value="_." control={<Radio />} label="." />
                                    <FormControlLabel value="disabled" disabled control={<Radio />} label="(Disabled option)" />
                                </RadioGroup>
                            </FormControl> */}

                            <form className={classes.container} noValidate>
                                <TextField style={{ alignItems: "left" }}
                                    id="date"
                                    label="Last date to Apply"
                                    type="date"
                                    defaultValue="2021-01-01"
                                    className={classes.textField}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />

                                {/* <TextField
                                    id="time"
                                    label="Alarm clock"
                                    type="time"
                                    defaultValue="07:30"
                                    className={classes.textField}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    inputProps={{
                                        step: 300, // 5 min
                                    }}
                                /> */}
                            </form>

                            {/* 
                <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={register.experience}
          
          onChange={handleChange}
          autoWidth
             >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select> */}
                            {/* <TextField type="email" className="myinput" name="email" value={register.email} onChange={handleChange} fullWidth={true} label="Email" variant="standard" required={true} />
                <TextField type="password" className="myinput" name="password" value={register.password} onChange={handleChange} fullWidth={true} label="password" variant="standard" required={true} />
                <TextField type="password" className="myinput" name="cpassword" value={register.cpassword} onChange={handleChange} fullWidth={true} label="confirm password" variant="standard" required={true} />
                <InputLabel style={{textAlign:"left"}}>Interest</InputLabel>
                <Select
                  fullWidth={true}
                  multiple
                  name="interests"
                  value={register.interests}
                  onChange={handleChange}
                  input={<Input />}
                  MenuProps={MenuProps}
                  renderValue={(selected) => selected.join(' | ')}
                >
                {domain.map((name) => (
                  <MenuItem key={name} value={name}>
                    <Checkbox checked={register.interests.indexOf(name) > -1} />
                    <ListItemText primary={name} />
                  </MenuItem>
                ))}
                </Select> */}
                            <Button className="myinput" type="submit" fullWidth={true} variant="outlined" color="secondary" href="/home">submit</Button>
                        </form>
                    </Paper>
                </Paper>
            </Container>
            <Footer />

        </>
    );
}

export default UploadInternships;