import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  appBar: {
    borderRadius: 3,
    margin: '1em 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'left',
    alignItems: 'center',
    backgroundColor: '#000'
  },
  heading: {
    color: 'rgba(255, 255, 255, 1)',
    textAlign: 'center',
    width: '100%',
  },
  image: {
    marginRight: '2em'
  },
  form: {
    backgroundColor: '#000'
  },
  typography: {
    fontFamily: [
      'Orbitron',
      'cursive',
    ].join(','),
  }
}));
