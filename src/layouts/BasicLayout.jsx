import { PureComponent } from 'react';
import styles from './BasicLayout.less';

export default class BasicLayout extends PureComponent {
    render() {
        return (
            <>
                <div className={styles.content}>
                    {this.props.children}
                </div>
                <div className={styles.nav}></div>
            </>
        )
    }
}