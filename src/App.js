import { createMuiTheme, ThemeProvider, responsiveFontSizes } from '@material-ui/core/styles';
import React from 'react';
import { CssBaseline } from '@material-ui/core';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavigationBar from './components/navbar/NavigationBar';
import About from './components/sites/About';
import NoMatch from './components/sites/NoMatch';
import Music from './components/sites/Music';
import Photography from './components/sites/Photography';
import Home from './components/sites/Home';
import { ParallaxProvider } from 'react-scroll-parallax';


var theme = createMuiTheme({
  palette: {
    type: 'light',
    primary1Color: "#e65100",
    primary2Color: "#ef6c00",
    accent1Color: "#009688",
    accent3Color: "#00897b",
    primary3Color: "#f57c00",
    accent2Color: "#26a69a",
    background: {
      default: "#ffffff",
    }
  },
  typography: {
    fontFamily: [
      'Quicksand',
    ].join(','),
  },
  overrides: {
    MuiTab: {
      wrapper: {
        flexDirection: 'row',
      },
    },
  },
});
theme = responsiveFontSizes(theme);


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      initializing: true,
      width: undefined,
      mobileView: false,
    }
  }

  updateWidth = () => {
    const width = window.innerWidth
    var mobileView = false;
    if (width < 850) {
      mobileView = true;
    }
    this.setState({
      width: width,
      mobileView: mobileView
    });
  }

  componentDidMount() {
    window.addEventListener('resize', () => this.updateWidth());
    this.setState({
      initializing: false,
      width: window.innerWidth
    });
    this.updateWidth();
  }
  componentWillUnmount() {
    window.removeEventListener('resize', () => this.updateWidth());
  }

  render() {
    console.log(process.env.PUBLIC_URL)
    return (
      <React.Fragment>
        <ParallaxProvider>
          <ThemeProvider theme={theme} >
            <CssBaseline />
            <BrowserRouter basename={process.env.PUBLIC_URL}>
            <NavigationBar mobile={this.state.mobileView} />
              <Switch>
                <Route exact path="/">
                  <Home/>
                </Route>
                <Route path="/photography">
                  <Photography/>
                </Route>
                <Route path="/music">
                  <Music/>
                </Route>
                <Route path="/about">
                  <About/>
                </Route>
                <Route>
                  <NoMatch />
                </Route>
              </Switch>
            </BrowserRouter>
          </ThemeProvider>
        </ParallaxProvider>
      </React.Fragment>
    );
  }
}

export default App;