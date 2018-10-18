import React from 'react';
import styles from '../styles/components/widget.sass';

/**
 *
 * The Widget.
 * Acts as a container for other widgets.
 *
 */
const Widget = (props) => {
    return (
        <div className={styles.singleItem}>
            {props.children}
        </div>
    )
};

export default Widget;