// 框架与组件
import { PureComponent } from 'react';
import { TabBar } from 'antd-mobile';
import { FaHome, FaHSquare, FaUsers } from 'react-icons/lib/fa'
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
                icon: <FaHome />
            }, {
                name: '书房',
                path: '/book',
                icon: <FaHSquare />
            }, {
                name: '我的',
                path: '/self',
                icon: <FaUsers />
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