import React from 'react'
import TextField from '@mui/material/TextField';
import { Button, Typography } from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import GitHubIcon from '@mui/icons-material/GitHub';

const Login = () => {
  
  const google=()=>{
    window.open("http://localhost:5000/auth/google", "_self");
  }

  const github=()=>{
    window.open("http://localhost:5000/auth/github", "_self");
  }

  //for facebook domain required...
  const facebook=()=>{
    window.open("http://localhost:5000/auth/facebook", "_self");
  }
  
  // const handleSubmit=(e)=>{
    // e.preventDefault();
  // }

  return (
    <div>
        <div className='container' style={{border:'1px solid white',width:'400px',marginTop:'20px',padding:'40px',borderRadius:'10px',boxShadow: 'rgb(38, 57, 77) 0px 20px 30px -10px'}}>
          <Typography variant='h3' style={{textAlign:'center'}}><LoginIcon size='large' />Login</Typography>
          {/* <form onSubmit={handleSubmit}> */}
            <TextField fullWidth label="Enter your email" id="fullWidth" sx={{margin:'5px 0px'}} name='email' required/>
            <TextField fullWidth label="Enter the password" id="fullWidth" sx={{margin:'5px 0px'}} name='password' required/>
            <Button variant='contained' style={{backgroundColor:'black',width:'320px',margin:'5px 0px'}}>Submit</Button>
          {/* </form> */}
          <Typography style={{textAlign:'center',fontWeight:'bolder'}}>OR</Typography>
          <Button variant='contained' style={{backgroundColor:'red',width:'320px',margin:'5px 0px'}} onClick={google}><GoogleIcon />&nbsp;Signin With Google</Button>
          <Typography style={{textAlign:'center',fontWeight:'bolder'}}>OR</Typography>
          <Button variant='contained' color='primary' style={{width:'320px',margin:'5px 0px'}} onClick={facebook}><FacebookIcon />&nbsp;Signin With Facebook</Button>
          <Typography style={{textAlign:'center',fontWeight:'bolder'}}>OR</Typography>
          <Button variant='contained' style={{backgroundColor:'grey',width:'320px',margin:'5px 0px'}} onClick={github}><GitHubIcon />&nbsp;Signin With Github</Button>
        </div>        
    </div>
  )
}

export default Login
