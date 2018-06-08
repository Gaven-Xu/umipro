import { PureComponent } from 'react';
import router from 'umi/router';

import styles from './ActivityLayout.less';

export default class ActivityLayout extends PureComponent {
    render() {
        return (
            <div className={styles.container}>
                <div className={styles.back}></div>
            </div>
        )
    }
}