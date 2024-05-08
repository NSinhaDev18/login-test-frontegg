import './App.css';
// import { useEffect } from 'react';
import { useAuth, AdminPortal ,useLoginWithRedirect, ContextHolder } from "@frontegg/react";

function App() {
  const { user, isAuthenticated } = useAuth();
  const loginWithRedirect = useLoginWithRedirect();

  // Uncomment this to redirect to login automatically
  // useEffect(() => {
  //   if (!isAuthenticated) {
  // loginWithRedirect();
  //   }
  // }, [isAuthenticated, loginWithRedirect]);

  const logout = () => {
    const baseUrl = ContextHolder.getContext().baseUrl;
    window.location.href = `${baseUrl}/oauth/logout?post_logout_redirect_uri=${window.location}`;
  };

  //Show Admin portal
  const handleClick = () => {
    AdminPortal.show();
  };

  return (
    <div className="App">
      { isAuthenticated ? (
        <div>
          <div className='card'>
            <h3>Profile picture</h3>
            <img src={user?.profilePictureUrl || undefined} alt={user?.name}/>
          </div>
          <div className='card'>
            <span><b>Name:</b> {user?.name}</span>
          </div>
          <div>
          <button className="btn" onClick={handleClick}>Settings</button>
          </div>
          <div>
            <button className="btn" onClick={() => logout()}>Click to logout</button>
          </div>
        </div>
      ) : (
        <div>
          <h1>This is the home page.</h1>
          <button className="btn" onClick={() => loginWithRedirect()}>Click me to login</button>
        </div>
      )}
    </div>
  );
}

export default App;