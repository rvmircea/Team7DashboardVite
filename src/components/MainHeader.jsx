import classes from './MainHeader.module.css';

const MainHeader = ({ loggedIn }) => {
  return (
    <header className={classes['main-header']}>
      <h1>ITDP Dashboard</h1>
      {
        loggedIn && <button onClick={() => window.location.reload(false)}>{loggedIn ? "Logout" : <></>}</button>
      }
    </header>
  );
};

export default MainHeader;
