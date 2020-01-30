import React, { useState } from 'react';
import { Typography, makeStyles, TextField, Button, Container, FormControl, InputLabel, Select, MenuItem, CssBaseline, Chip, Avatar, ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails } from '@material-ui/core';
import useInputState from '../Hooks/useInputState';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { currencies } from '../currencyData';
import Axios from 'axios';
import { serverUrl } from '../constants';
import { authHeader } from '../utils/authHeader';
import { ExpandMore } from '@material-ui/icons';

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  title: {
    backgroundColor: theme.palette.primary.main,
    padding: theme.spacing(3),
    margin: "0 -20px",
    color: "white",
  },
  memberSelector: {
    marginTop: theme.spacing(2)
  },
  photoSelector: {
    marginTop: theme.spacing(2)
  }
}));

function CreateGroup(props) {
  const classes = useStyles();
  const {history} = props;
  const [name, setName] = useInputState('');
  const [groupType, setGroupType] = useInputState('');
  const [currency, setCurrency] = useInputState('INR');
  const [friends, setFriends] = useState([]);
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
    fetchFriends();
  }, []);
  const fetchFriends = async () => {
    const response = await Axios.get(`${serverUrl}/friend/group-meta`, authHeader);
    console.log(response);
    setFriends(response.data.friends);
    setLoading(false);
  }
  const handleAcChange = (e, value) => {
    setMembers(value.map(v => v._id))
  }
  const handleSave = async e => {
    e.preventDefault();
    const response = await Axios.post(`${serverUrl}/group/new`, {name, groupType, members, currency}, authHeader);
    history.push(`/group/${response.data.groupId}`);
  }
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline/>
      <Typography className={classes.title} component="h1" variant="h5">Create New Group</Typography>
        <form className={classes.form}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Name"
            name="name"
            autoFocus
            onChange={setName}
            value={name}
          />
          <FormControl required fullWidth variant="outlined" className={classes.formControl}>
            <InputLabel ref={inputLabel}>
              Type
            </InputLabel>
            <Select
              value={groupType}
              onChange={setGroupType}
              labelWidth={labelWidth}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value="Apartment">Apartment</MenuItem>
              <MenuItem value="Trip">Trip</MenuItem>
              <MenuItem value="Project">Project</MenuItem>
              <MenuItem value="Other">Other</MenuItem>
            </Select>
          </FormControl>
          <div className={classes.memberSelector}>
            { !loading && 
              <Autocomplete
                multiple
                autoComplete={true}
                options={friends}
                getOptionLabel={friend => friend.name.full}
                defaultValue={[friends[0]]}
                onChange={handleAcChange}
                free
                renderTags={(value, getTagProps) =>
                  value.map((option, index) => (
                    <Chip avatar={<Avatar src={option.picture}></Avatar>} disabled={index === 0} label={option.name.full} {...getTagProps({ index })} />
                  ))
                }
                renderInput={params => (
                  <TextField
                    {...params}
                    label="Members"
                    variant="outlined"
                    placeholder="Group Members"
                    fullWidth
                  />
                )}
              />
            }
          </div>
          <div className={classes.currencySelector}>
            <TextField
              fullWidth
              select
              label="Default Currency"
              value={currency}
              onChange={setCurrency}
              variant="outlined" margin="normal"
            >
              {currencies.map(currency => (
                <MenuItem key={currency.code} value={currency.code}>
                  {`${currency.symbol_native} ${currency.code} ${currency.name}`}
                </MenuItem>
              ))}
            </TextField>
          </div>
          <Button
            fullWidth
            variant="contained"
            color="secondary"
            onClick={handleSave}
            className={classes.submit}
          >
            Save
          </Button>
          <div>
            <ExpansionPanel>
              <ExpansionPanelSummary
                expandIcon={<ExpandMore />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className={classes.heading}>Advanced Options</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Typography>
                  Create group with some initial balances. Remember, that the complete sum of all the balance must be equal to zero.
                </Typography>
              </ExpansionPanelDetails>
            </ExpansionPanel>
          </div>
        </form>
    </Container>
  )
}

export default CreateGroup;