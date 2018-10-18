import React, {Component} from 'react';
import DashGrid from './containers/DashGrid';
import Toolbar from "./components/Toolbar";

export default class App extends Component {
    render() {
        return (
            <div>
                <Toolbar/>
                <DashGrid/>
            </div>
        )
    }
}
