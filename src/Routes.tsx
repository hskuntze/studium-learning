import Navbar from "components/Navbar";
import { CustomRouter } from "CustomRouter";
import Offer from "pages/Offer";
import ContentDetails from "pages/ContentDetails";
import Home from "pages/Home";
import { Routes as Switch, Route } from "react-router-dom";
import history from "util/navigate";
import Auth from "pages/Auth";
import PrivateRoute from "components/PrivateRoute";

const Routes = () => {
  return (
    <CustomRouter history={history}>
      <Navbar />
      <Switch>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        <Route
          path="/offer"
          element={
            <PrivateRoute
              roles={[
                "ROLE_VISITOR",
                "ROLE_STUDENT",
                "ROLE_INSTRUCTOR",
                "ROLE_ADMIN",
              ]}
            >
              <Offer />
            </PrivateRoute>
          }
        />
        <Route
          path="/offer/contentDetails/:offerId"
          element={
            <PrivateRoute
              roles={["ROLE_STUDENT", "ROLE_INSTRUCTOR", "ROLE_ADMIN"]}
            >
              <ContentDetails />
            </PrivateRoute>
          }
        />
      </Switch>
    </CustomRouter>
  );
};

export default Routes;
