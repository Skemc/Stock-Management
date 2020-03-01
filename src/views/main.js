import React, { Component } from 'react'
import AddItem from './addItem';
import ViewItem from './viewItem';
import style from '../style.scss';

class main extends Component {
    render() {
        return (
            <div>
                <div className={style.main}>
                    <AddItem />
                    <hr />
                    <ViewItem />
                </div>
            </div>
        )
    }
}
export default main;
