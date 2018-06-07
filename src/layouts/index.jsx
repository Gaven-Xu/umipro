import BasicLayout from './BasicLayout';

export default function ({ children }) {
    return (
        <BasicLayout children={children} />
    )
}

/**
export default function (props) {

    if(props.location.path === '/login'){
        return (
            <LoginLayout>
                {props.children}
            </LoginLayout>
        )
    }

    if(props.location.path === '/adimn'){
        return (
            <AdminLayout>
                {props.children}
            </AdminLayout>
        )
    }

    if(props.location.path === '/activities'){
        return (
            <ActivityLayout>
                {props.children}
            </ActivityLayout>
        )
    }

    return (
        <BasicLayout>
            {props.children}
        </BasicLayout>
    )

}
 */


