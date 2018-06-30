import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
  welcomebox: {
  	padding: "1em"
  },
  button: {
    margin: theme.spacing.unit,
    color: "#fff"
  }
});

function PaperSheet(props) {
  const { classes } = props;

  return (
    <div className={`${classes.welcomebox} welcome`}>
      <Paper className={classes.root} elevation={1}>
        <Typography variant="headline" component="h3">
          Welcome to my blog!
        </Typography>
        <Typography component="p">
          Introduction and subscibe button.
        </Typography>
        <hr />
        <form noValidate autoComplete="off">
        <TextField
          required
          id="required"
          label="Required"
          defaultValue="Email"
          className={classes.textField}
          margin="normal"
        />
        <Button variant="contained" size="large" color="primary" className={classes.button}>
          Subscribe
        </Button>
        </form>
      </Paper>
    </div>
  );
}

PaperSheet.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PaperSheet);