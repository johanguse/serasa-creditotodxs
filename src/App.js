import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Signup } from "./pages/Signup";
import { Dashboard } from "./pages/Dashboard";
import { AuthProvider } from "./contexts/Auth";
import { Login } from "./pages/Login";
import { PrivateRoute } from "./components/PrivateRoute";
import { PlanDetails } from "./pages/PlanDetails";

export function App() {
  return (
    <>
      <Router>
        <AuthProvider>
          <Switch>
            <PrivateRoute exact path="/" component={Dashboard} />
            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login} />
            <Route path="/plans/:planId" component={PlanDetails} />
          </Switch>
        </AuthProvider>
      </Router>
      <footer className="flex justify-center my-5 text-gray-500 text-sm">
        <p>&copy;{new Date().getFullYear()}. All right reserved.</p>
      </footer>
    </>
  );
}
