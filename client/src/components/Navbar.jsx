import React from 'react'
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import {useNavigate} from 'react-router-dom';

const Navbar = ({user}) => {
    const logout = () => {
        window.open("http://localhost:5000/auth/logout", "_self");
    };
    const navigate=useNavigate();
    const logIn=()=>{
        navigate('/login')
    }

    return (
    <div>
        <nav class="navbar navbar-expand-lg" style={{backgroundColor:'lightcoral'}}>
        <div class="container-fluid">
            <a class="navbar-brand">PassportJs</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page">{user ? user.displayName : "none" }</a>
                </li>
            </ul>

            <div class="d-flex" role="search">  {/*  to='/' */}
                {user ? (<><Avatar alt="Remy Sharp" src={user ? user.photos[0].value :"https://png.pngtree.com/png-clipart/20201128/ourmid/pngtree-man-avatar-png-image_2444892.jpg"} />
                <Button variant="contained" style={{marginLeft:'10px'}} onClick={logout}><LogoutIcon />Logout</Button> </>) :
                (<Button variant="contained" style={{marginLeft:'10px'}} onClick={logIn}><LoginIcon />Login</Button>)}
            </div>
            
            </div>
        </div>
        </nav>
    </div>
  )
}

export default Navbar
