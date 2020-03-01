import React, { Component } from 'react'
import styles from '../style.scss';
import { connect } from 'react-redux';
import { createItem } from '../actions/action';

    class AddItem extends Component {
        constructor(props) {
            super(props);
            this.state = {
                name: '',
                price: ''
            };

            this.onChange = this.onChange.bind(this);
            this.onSubmit = this.onSubmit.bind(this);
        }

        onChange(e) {
            this.setState({ [e.target.name]: e.target.value });
        }

        onSubmit(e) {
            e.preventDefault();
            const newItem = {
                name: this.state.name,
                price: this.state.price,
            }
          this.props.createItem(newItem);  
        }
        render() {

            return (
                <div className={styles.list}>
                    <h1 className={styles.head}>Add Item</h1>
                    <form onSubmit={this.onSubmit} className={styles.AddItem}>
                        <input className={styles.Item} name="name" type="text" placeholder="Name"
                            onChange={this.onChange} value={this.state.name} />
                        <input className={styles.Items} name="price" type="text" placeholder="Price"
                            onChange={this.onChange} value={this.state.price} />
                        <br />
                        <br />
                        <button type="submit" className={styles.itembtn}>Add</button>
                    </form>
                </div>
            )
        }

    }

    const mapDispatchToProps = dispatch => {
        return {
            createItem: item => dispatch(createItem(item)),
            deleteItem: item => dispatch(deleteItem(item))
        }
    }


export default connect(null, mapDispatchToProps)(AddItem);
