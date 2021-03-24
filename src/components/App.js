import React from 'react'
import Drawer from './Drawer/Drawer';
import { ThemeProvider } from '@material-ui/styles'
import theme from './ui/Theme'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import SignInSide from '../components/Login/Login'
import { Provider } from 'react-redux';
import store from '../store'

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Router>
          <div>
            <Switch>
              <Route exact path="/dashboard" component={Drawer} />
              <Route exact path="/" component={SignInSide} />
            </Switch>
          </div>
        </Router>

      </ThemeProvider>
    </Provider>

  );
}

export default App;
