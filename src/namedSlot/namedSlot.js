import React, { Component } from 'react'
export default class namedSlot extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render() {
        let children = Array.isArray(this.props.children) ? this.props.children : [this.props.children];
    //   console.log(children);
        const slots = children.reduce((slots, item) => {
            slots[item.props.slot] = item
            return slots
        }, {});
        // console.log(slots);
        return (
            <div>
                {slots.hView}
                {slots['pView']}
            </div>
        )
    }
}
