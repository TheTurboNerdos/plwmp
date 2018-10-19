import React, {Component} from 'react';
import {} from 'antd';
import Widget from "../containers/Widget";


const pStyles = {
    marginBottom: 4
};

export default class StaticInfo extends Component {
    render() {
        return (
            <Widget
                className={"widgetWidthTwo"}
                title={"Team Turbo's Time Estimations"}
            >
                <p style={pStyles}><a>Task 1</a>: Complete this example. <span style={{color: "#52c41a"}}>75% (On Time)</span></p>
                <p style={pStyles}><a>Task 2</a>: Do another example. <span style={{color: "#faad14"}}>0% (Warning, you may run out of time)</span></p>
                <p style={pStyles}><a>Task 3</a>: This is filler text. <span style={{color: "#f5222d"}}>10% (Very behind on time)</span></p>
            </Widget>
        )
    }
}