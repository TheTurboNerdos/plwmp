import React, {Component} from 'react';
import Widget from './Widget';
import StaticInfo from '../components/StaticInfo';

import styles from '../styles/components/dash-grid.sass';


/**
 *
 * The DashGrid.
 * This class is here to be the grid layout for the project.
 *
 */
export default class DashGrid extends Component {
    render() {
        return (
            <div className={styles.dashGrid}>
                <StaticInfo/>
                <StaticInfo/>
            </div>
        )
    }
}
