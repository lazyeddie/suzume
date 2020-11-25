import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  mainContainer: {
    display: 'flex',
    flexDirection: 'column-reverse',
    alignItems: 'center',
  },
  smMargin: {
    margin: theme.spacing(5),
  },
  actionDiv: {
    textAlign: 'center',
  },
  // container: {
  //   width: '60vw',
  // }
}));
