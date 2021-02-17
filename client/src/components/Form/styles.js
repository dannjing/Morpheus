
import { red } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      border: '8px solid #fff',
    },
  },
  paper: {
    padding: theme.spacing(2),
    backgroundColor: '#000',
    border: '1px solid #fff',
    borderRadius: theme.shape.borderRadius,
    padding: '1em',
  },
  textField:{
    fontFamily: 'Orbitron',
    border: '0px solid #333',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: '#fff',
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    backgroundColor: '#000',
    borderRadius: theme.shape.borderRadius,
  },
  fileInput: {
    width: '90%',
    margin: '0',
    padding: '0.5em',
    backgroundColor: '#fff',
  },
  buttonSubmit: {
    marginBottom: 1,
    width: '30%',
    margin: '.5em',
    fontWeight: 'bold'
  },
  cssLabel: {
    color: "#3366ff",
    "&.Mui-focused": {
      color: "#23A5EB"
    }
  },
  cssOutlinedInput: {
    "&:not(hover):not($disabled):not($cssFocused):not($error) $notchedOutline": {
      borderColor: "#3366ff" //default
    },
    "&:hover:not($disabled):not($cssFocused):not($error) $notchedOutline": {
      borderColor: "#3366ff" //hovered #DCDCDC
    },
    "&$cssFocused $notchedOutline": {
      borderColor: "#23A5EB" //focused
    }
  },
  notchedOutline: {},
  cssFocused: {},
  error: {},
  disabled: {}
}));
