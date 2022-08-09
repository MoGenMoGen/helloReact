import React from 'react'
import If from '../If'
class compose extends React.Component {
    render() {
        return (
            <div>
                {
                    If(this.props.children)(<div>{this.props.children}</div>, <div>组合</div>)
                }
            </div>
        )
    }
}


export default compose;

