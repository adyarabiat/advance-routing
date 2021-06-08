import React from "react";

import MainNavigation from "./MainNavigation";

import styles from "./Layout.module.css";

const Layout = (props) => {
   return (
      <React.Fragment>
         <MainNavigation />
         <main className={styles.main}>{props.children}</main>
      </React.Fragment>
   );
};

export default Layout;
