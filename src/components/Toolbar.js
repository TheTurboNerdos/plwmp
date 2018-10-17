import React, {Component} from 'react';
import {Menu} from 'antd';


export default class Toolbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            current: '2'
        }
    }

    handleClick = (e) => {
        this.setState({
            current: e.key
        });
    };

    render() {
        return(
            <Menu
                onClick={this.handleClick}
                selectedKeys={[this.state.current]}
                mode='horizontal'
                theme='dark'
            >
                <Menu.Item key='1'>
                    Item
                </Menu.Item>
                <Menu.Item key='2'>
                    Item
                </Menu.Item>
                <Menu.Item key='3'>
                    Item
                </Menu.Item>
                <Menu.Item key='4'>
                    Item
                </Menu.Item>
            </Menu>
        )
    }
}
