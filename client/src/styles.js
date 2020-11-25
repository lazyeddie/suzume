import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  appBar: {
    backgroundColor: 'transparent',
    borderRadius: 15,
    width: 'fit-content',
    margin: '30px auto 30px 10px',
    padding: '20px 50px',
    display: 'flex',
    justifySelf: 'left',
  },
  heading: {
    color: 'rgba(10,183,255, 1)',
    // align: 'left',
  },
  [theme.breakpoints.down('xs')]: {
    mainContainer: {
    flexDirection: "column-reverse"
    }
  }
  
}));