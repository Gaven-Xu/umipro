// 框架与组件
import { PureComponent } from 'react';
import { TabBar } from 'antd-mobile';
import router from 'umi/router';

import styles from './BasicLayout.less';

// 结构子组件
const {
    Item: TabItem
} = TabBar;
export default class BasicLayout extends PureComponent {

    generateTabItem(menu) {
        return menu.map((item, index) => {
            return (
                <TabItem key={index} badge={0}
                    onPress={() => {
                        router.push(item.path)
                    }}
                />
            )
        })
    }

    render() {

        const menu = [
            {
                name: '精选',
                path: '/',
            }, {
                name: '书房',
                path: '/book',
            }, {
                name: '我的',
                path: '/self',
            }
        ];

        return (
            <div className={styles.container}>
                <div className={styles.content}>
                    {this.props.children}
                </div>
                <div className={styles.nav}>
                    <TabBar>
                        {this.generateTabItem(menu)}
                    </TabBar>
                </div>
            </div>
        )
    }
}