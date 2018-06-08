import BasicLayout from './BasicLayout';
import ActivityLayout from './ActivityLayout';

export default function ({ children, location }) {

    if (/^\/activity/.test(location.path)) {
        return (<ActivityLayout children={children} />);
    }

    return (<BasicLayout children={children} />);
}