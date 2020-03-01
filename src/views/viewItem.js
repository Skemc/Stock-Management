import React, { Component } from 'react'
import style from '../style.scss';
import { connect } from 'react-redux';
import { deleteItem } from '../actions/action';

class viewItem extends Component {
    componentWillReceiveProps(nextProps) {
        if (nextProps.newItem) {
            this.props.items.push(nextProps.newItem)
        }
    }

    

    render() {
        const allItems = this.props.items.map((item, index) => (

            <tbody  key={item.id}>
                <tr id={style.items}>
                    <td>{item.name}</td>
                    <td>{item.price}</td>
                    <td id={style.delete} onClick={() => this.props.deleteItem(index)}>Delete</td>
                </tr>
            </tbody>
        ))

        return (
            <div>
                <h1 id={style.all}>All Items</h1>
                {/* <table>
                    {allItems}
                </table> */}
                <table id={style.items} >
                    <tr>
                        <th>Item</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                    {allItems} 
                </table>
            </div>
        )
    }
}
const mapStateToProps = state => ({
    items: state.Items.items,
    newItem: state.Items.item
});
const mapDispatchToProps = dispatch => {
    return {
        deleteItem: item => dispatch(deleteItem(item))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(viewItem);
