import React from 'react';
import { Route } from 'react-router-dom';
import HeaderContainer from './header/header-container';
import ChartContainer from './chart/chart-container';
import GridContainer from './grid/grid-container';
import Footer from './footer/footer';
const App = () => (
    <div className="main">
        <Route path="/" component={HeaderContainer} />
        <div className="container">
            <Route path="/" component={ChartContainer} />
            <Route path="/" component={GridContainer} />
        </div>
        <Footer />
    </div>
);

export default App;