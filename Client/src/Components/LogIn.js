import React, { Fragment,useState } from 'react'
import LockOpenSharpIcon from '@material-ui/icons/LockOpenSharp';
import Particles from "react-tsparticles";
import { Alert } from '@material-ui/lab';
import {Link} from "react-router-dom";
function LogIn() {
    const [login,setLogin] = useState({
        password:"",
        email:"",
    })
    const onChange = e=>{
        setLogin({...login,[e.target.name]:e.target.value})
    }
    return (
        <Fragment>
            <Particles
            style={{
                width: "100%",
                height:"120vh",
                zIndex: 1,
                position:"absolute",
            }}
        id="tsparticles"
        options={ {
            fpsLimit: 60,
            particles: {
              number: {
                value: 60,
                density: {
                  enable: true,
                  value_area: 1000
                }
              },
              color: {
                value: ["#344455", "#ffffff"]
              },
              shape: {
                type: "edge",
                stroke: {
                  width: 0,
                  color: "#000000"
                },
                polygon: {
                  nb_sides: 5
                },
                image: {
                  src: "img/github.svg",
                  width: 100,
                  height: 100
                }
              },
              opacity: {
                value: 0.5,
                random: false,
                anim: {
                  enable: false,
                  speed: 1,
                  opacity_min: 0.1,
                  sync: false
                }
              },
              size: {
                value: 4,
                random: true,
                anim: {
                  enable: false,
                  speed: 40,
                  size_min: 0.1,
                  sync: false
                }
              },
              line_linked: {
                enable: true,
                distance: 50,
                color: "#fff",
                opacity: 0.5,
                width: 1
              },
              move: {
                enable: true,
                speed: 3,
                direction: "none",
                random: false,
                straight: false,
                out_mode: "out",
                bounce: false,
                attract: {
                  enable: false,
                  rotateX: 600,
                  rotateY: 1200
                }
              }
            },
            retina_detect: true
          }}
      />
<div className ="container2 login" style={{height:"120vh"}}>
  <div className ="container mt-5 mt-lg-0" style={{position:"absolute",zIndex:2,left:"50%",top:"50%",transform:"translate(-50%,-50%)"}}>
    <div className ="login-container-wrapper clearfix">
      <div className ="logo">
          <LockOpenSharpIcon fontSize="large"/>
      </div>
      <h1 className ="text-center text-white">Contact Keeper </h1>
      <div className ="welcome"><strong>Welcome,</strong> please login</div>
      <form className ="form-horizontal login-form mt-3" >
        <div className ="form-group relative">
          <input id="login_username" value={login.email} className ="form-control input-lg" type="email"  placeholder="Email" name="email" onChange={onChange} required />
          <i className ="fa fa-user"></i>
        </div>
        <div className ="form-group relative password">
          <input id="login_password" value={login.password } className ="form-control input-lg" type="password" placeholder="Password" name="password" onChange={onChange} required />
          <i className ="fa fa-lock"></i>
        </div>
        <div className ="form-group">
          <button type="submit" className ="btn btn-success btn-lg btn-block">Login</button>
        </div>
        <hr className="hr-text" data-content="OR" />
        <button className ="loginBtn loginBtn--facebook" style={{height:52,width:"100%",paddingLeft:"30%"}}>
            Login with Facebook
        </button>
        <div className ="checkbox text-center mt-3">
          <label> <Link className ="forget" to="/register" title="forget">Do not have an account ? Register here </Link> </label>
        </div>
      </form>
    </div>
  </div>

</div>
        </ Fragment>
    )
}

export default LogIn