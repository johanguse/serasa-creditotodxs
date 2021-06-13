import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Signup } from './Signup'
import { Dashboard } from './Dashboard'
import { AuthProvider } from '../contexts/Auth'
import { Login } from './Login'
import { PrivateRoute } from './PrivateRoute'

export function App() {
  return (
    <div className="app-auth">
      <div className="flex flex-col justify-center mx-auto mb-5 space-y-8">
        <h1 className="font-bold text-center text-4xl text-pink-500">Programa #Código para <span className="text-pink-800">todXs - Mobile</span></h1>
        <Router>
          <AuthProvider>
            <Switch>
              <PrivateRoute exact path="/" component={Dashboard} />
              <Route path="/signup" component={Signup} />
              <Route path="/login" component={Login} />
            </Switch>
          </AuthProvider>
        </Router>
      </div>
      <div className="flex justify-center text-gray-500 text-sm">
        <p>&copy;{new Date().getFullYear()}. All right reserved.</p>
      </div>
    </div>
  )
}
