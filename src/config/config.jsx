// import { HOME, DASHBOARD, MANAGE_USER, MANAGE_PRODUCT } from "./routes" ;

import { CASHIER, DASHBOARD, HOME, MANAGE_PRODUCT, MANAGE_USER, NEW_USER, REPORT } from "./routes";

const config = {
   routes:{
      home: HOME,
      dashboard: DASHBOARD,
      userManagement: MANAGE_USER,
      newUser: NEW_USER,
      productManagement: MANAGE_PRODUCT,
      report: REPORT,
      cashier: CASHIER
   }
}
export default config;