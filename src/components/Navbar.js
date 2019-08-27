import React from 'react';
// import { Input, Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import Login from '../views/Login';
import SignUp from '../views/SignUp';

function Navbar(props) {
    return(
        <nav>
            <div className="nav-wrapper  teal lighten-4">
                {
                    localStorage.token ? 
                        <div className="logged-in">
                            <Link to="/" onClick={(e) => props.handleLogout(e)}>Logout</Link> |
                            <Link to="/quiz" >Quiz</Link> |
                            <Link to="/profile" > My Profile</Link>
                        </div>
                    :
                        <div className="logged-out">
                            <Link to='/login' component={Login}>Login</Link> |
                            <Link to='/sign_up' component={SignUp}> Sign Up</Link>
                        </div>   

                }

            </div>
        </nav>
    )
}


export default Navbar



//   state = {
//     activeItem: ' ' ,
//   }

//   image = require('../images/logo.png')

//   render() {
//     return (
//       <Menu secondary>
//       <Menu.Item>
//           <img
//           src={this.image} alt="logo"
//           style={{
//             alignSelf: 'center',
//             height: 70,
//             width: 125,
//             borderWidth: 1,
//           }}
//           />
//         </Menu.Item>

//         <Menu.Item
//           name='Home'
//           active={this.state.activeItem === 'home'}
//           onClick={this.props.handleClick}
//         />

//         <Menu.Item
//           name='New User'
//           active={this.state.activeItem === 'newUser'}
//           onClick={this.props.handleClick}
//         />

//         <Menu.Menu position='right' name='input'>
//           <Menu.Item>
//           LOGIN HERE:
//             <Input name='username' type='text' placeholder='Username'
//             onChange={(e) => this.props.onUChange("username", e.target.value)}/>
//           </Menu.Item>
//           <Menu.Item>
//             <Input name='password' type='password' placeholder='Password'
//             onChange={(e) => this.props.onUChange("password", e.target.value)}/>
//           </Menu.Item>
//           <Menu.Item
//             name='submit'

//             onClick={(e) => this.props.handleSubmit(e)}
//           />
//         </Menu.Menu>
//       </Menu>
//     )
//   }
// }

// export default Header;
