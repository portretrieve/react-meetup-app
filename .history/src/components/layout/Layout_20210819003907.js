import classes from "./Layout.module.css";
import MainNavigation from "./MainNavigation";
function Layout() {
  return (
    <div>
      <MainNavigation></MainNavigation>
      <main>{props.children}</main>
    </div>
  );
}

export default Layout;
