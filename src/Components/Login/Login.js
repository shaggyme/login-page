import React from 'react';
import classes from './LoginStyles.module.css';
import { Grid, Paper ,TextField, Button, Typography, Link } from '@material-ui/core';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import logo from '../../Assets/Images/logo.svg';
import image from '../../Assets/Images/iitp1.jpg';

const Login=()=> {

return(
        <div className={classes.loginContainer}>
            <Grid>
                <Grid>
                <div>
                <h2 className={classes.textStyle1}>Welcome to IIT Patna Academic Portal</h2>
                </div>
                    <Paper style = {{height:'auto'}} className={classes.paperStyle}>
                    <Grid align='center'>
                    <img className={classes.logoStyle} src={logo} alt='logo'></img>
                    <h3>Sign in</h3>
                    </Grid>
                    <TextField className={classes.TypographytextStyle} label='Username' placeholder='Enter Username' fullWidth required/>
                    <TextField className={classes.TypographytextStyle} label='Passsword' placeholder='Enter Password' type='password' fullWidth required/>
                    <FormControlLabel 
                    control={
                    <Checkbox 
                        name="CheckedB"
                        color="primary"
                        />
                    }
                    label="Remember me" 
                    />
                    <Button className={classes.btStyle} type='submit' color='primary' fullWidth variant="contained"> Sign In</Button>
                    <Typography>
                    <Link href="#" style = {{fontSize:'80%', padding:'5px 0px'}}>
                        Forgot password ?
                    </Link>
                    </Typography>
                    <Typography style = {{fontSize:'80%'}}> Do you have an account ?
                    <Link href="#" style = {{margin:'initial'}}>
                        Sign up
                    </Link>
                    </Typography>
                    </Paper>  
                </Grid>
            </Grid>
        </div>
    )
}

export default Login