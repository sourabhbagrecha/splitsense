import React from 'react';
import { Typography, makeStyles, TextField, Button, Container, FormControl, InputLabel, Select, MenuItem, CssBaseline, Chip } from '@material-ui/core';
import useInputState from '../Hooks/useInputState';
import Autocomplete from '@material-ui/lab/Autocomplete';

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
    width: '100%', // Fix IE 11 issue.
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
  currencySelector: {
    marginTop: theme.spacing(2)
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
  const [name, setName] = useInputState('');
  const [groupType, setGroupType] = useInputState('');
  const [currency, setCurrency] = useInputState('INR');
  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);
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
            label="Group Name"
            name="name"
            autoFocus
            onChange={setName}
            value={name}
          />
          <FormControl required fullWidth variant="outlined" className={classes.formControl}>
            <InputLabel ref={inputLabel}>
              Group Type
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
            <Autocomplete
              multiple
              options={top100Films}
              getOptionLabel={option => option.title}
              defaultValue={[top100Films[6], top100Films[13]]}
              renderTags={(value, getTagProps) =>
                value.map((option, index) => (
                  <Chip label={option.title} {...getTagProps({ index })} disabled={index === 0} />
                ))
              }
              renderInput={params => (
                <TextField
                  {...params}
                  label="Group Members"
                  variant="outlined"
                  placeholder="Add Members"
                  fullWidth
                />
              )}
            />
          </div>
          <FormControl required fullWidth variant="outlined" className={classes.currencySelector}>
            <InputLabel ref={inputLabel}>
              Default Currency
            </InputLabel>
            <Select
              value={currency}
              onChange={setCurrency}
              labelWidth={labelWidth}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value="INR">INR - Indian Rupees</MenuItem>
              <MenuItem value="USD">USD - United States Dollar</MenuItem>
              <MenuItem value="AUD">AUD - Australian Dollar</MenuItem>
              <MenuItem value="EUR">EUR - Euro</MenuItem>
            </Select>
          </FormControl>
          {/* <div className={classes.photoSelector}>  
          <label htmlFor="contained-button-file">
          <input
            accept="image/*"
            className={classes.input}
            id="contained-button-file"
            multiple
            type="file"
          />
            <Button variant="contained" color="primary" component="span">
              Upload
            </Button>
          </label>
            
    
          </div> */}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="secondary"
            className={classes.submit}
          >
            Save
          </Button>
        </form>
    </Container>
  )
}

export default CreateGroup

const top100Films = [
  { title: 'The Shawshank Redemption', year: 1994 },
  { title: 'The Godfather', year: 1972 },
  { title: 'The Godfather: Part II', year: 1974 },
  { title: 'The Dark Knight', year: 2008 },
  { title: '12 Angry Men', year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: 'Pulp Fiction', year: 1994 },
  { title: 'The Lord of the Rings: The Return of the King', year: 2003 },
  { title: 'The Good, the Bad and the Ugly', year: 1966 },
  { title: 'Fight Club', year: 1999 },
  { title: 'The Lord of the Rings: The Fellowship of the Ring', year: 2001 },
  { title: 'Star Wars: Episode V - The Empire Strikes Back', year: 1980 },
  { title: 'Forrest Gump', year: 1994 },
  { title: 'Inception', year: 2010 },
  { title: 'The Lord of the Rings: The Two Towers', year: 2002 },
  { title: "One Flew Over the Cuckoo's Nest", year: 1975 },
  { title: 'Goodfellas', year: 1990 },
  { title: 'The Matrix', year: 1999 }
]