import { Component } from 'react';
import { add } from '@/utils/urlHandle';

export default class Index extends Component {
    render() {
        // var a = add(1, 7)
        return (
            <div>
                {add(1, 8)}
            </div>
        )

    }
}