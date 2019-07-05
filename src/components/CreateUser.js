import React from "react";
import { Route } from 'react-router-dom';

const CreateUser = props =>{

  return (
    <div className='createUser'> 
      <form>
        <div>
          <input type="text" name="username" placeholder="Username" />
          <label htmlFor="username">Username</label><br/><br/>
        </div>
        <div>
          <input type="password" name="password" placeholder="Password" />
          <label htmlFor="password">Password</label>
        </div>
        <input type="submit" value="Login" />
      </form>
    </div>
  );
}

export default CreateUser;