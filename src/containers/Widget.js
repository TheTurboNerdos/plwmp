import React, {Component} from 'react';
import styles from '../styles/components/widget.sass';
import {Card, Button} from "antd";

/**
 *
 * The Widget.
 * Acts as a container for other widgets.
 *
 */
export default class Widget extends Component {
    constructor(props) {
        super(props);
        this.state = {
            oneSize: false
        };
    }

    updateSize = () => {
        this.setState(prevState => ({
            oneSize: !prevState.oneSize
        }));
    };

    componentDidMount() {

    }

    render() {
        const {oneSize} = this.state;
        const {children, className, title} = this.props;
        return (
            <Card
                className={[styles.widget, styles.widgetHeightFour, styles[oneSize ? "widgetWidthOne" : className]]}
                extra={<Button onClick={() => {this.updateSize()}}>Resize</Button>}
                title={title}
            >
                {children}
            </Card>
        )
    }
}
