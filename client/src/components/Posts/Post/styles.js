import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
  media: {
    height: 180,
    borderBottom: '1px solid #fff',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    backgroundBlendMode: 'darken',
  },
  border: {
    border: 'solid',
  },
  fullHeightCard: {
    height: '100%',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderRadius: '3px',
    height: '100%',
    position: 'relative',
    border: '1px solid #fff',
    backgroundColor: '#000',
    color: 'white',
  },
  overlay: {
    position: 'absolute',
    top: '20px',
    left: '20px',
    color: 'white',
  },
  overlay2: {
    position: 'absolute',
    top: '20px',
    right: '20px',
    color: 'white',
  },
  grid: {
    display: 'flex',
    color: 'white',
  },
  details: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '1em',
    color: 'white',
  },
  title: {
    padding: '0 16px',
    fontFamily: 'Orbitron'
  },
  cardActions: {
    padding: '0 16px 8px 16px',
    display: 'flex',
    justifyContent: 'space-between',
  },
  typography: {
    fontFamily: [
      'Orbitron',
      'cursive',
    ].join(','),
  }
});
