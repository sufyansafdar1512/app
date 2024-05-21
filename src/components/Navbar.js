import React from 'react'
// import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
export default function Navbar(props) {
  //   const [myStyle, setMyStyle] = useState({
  //     color: 'black',
  //     backgroundColor: 'white'
  // })

  // const [btntext, setBtnText] = useState("Enable Dark Mode")

  // const toggleStyle = () =>{
  //     if(myStyle.color === 'black'){
  //         setMyStyle({
  //             color: 'white',
  //             backgroundColor: 'black',
  //             border: '1px solid white'
  //         })
  //         setBtnText("Enable Dark Mode")
  //     }
  //     else{
  //         setMyStyle({
  //             color: 'black',
  //             backgroundColor: 'white'
  //         })
  //         setBtnText("Enable Light Mode")
  //     }
  // }

  return (
    <>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            TextUtils
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
            </ul>
            {/* <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-primary" type="submit">Search</button>
        </form> */}
         {/* <div className={`form-check form-switch text-${props.mode === 'green'? 'white':'grey'}`}>
  <input className="form-check-input" onClick={props.greenMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable green mode</label> */}
  {/* <button className="btn btn-success" onClick={props.greenMode}>Green</button> */}
{/* </div> */}
            <div className={`form-check form-switch text-${props.mode === "dark" ? "white" : "grey"}`}>
              <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
                Enable dark mode
              </label>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

// Navbar.propTypes = {
//   title: PropTypes.string,
//   about: PropTypes.string
// }

// Navbar.defaultProps = {
//   title: 'titile ishre',
//   about: 'about is hree'
// };