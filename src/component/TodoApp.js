import React, { Component } from "react";
import "./TodoApp.css";

class TodoApp extends Component {
    state = {
        inputvalue: "",
        itemlist: [],
    };

    handleChange = (event) => {
        this.setState({
            inputvalue: event.target.value,
        });
    };

    storeItems = (event) => {
        event.preventDefault();
        const { inputvalue } = this.state;
        this.setState({
            itemlist: [...this.state.itemlist, inputvalue],
            inputvalue: "",
        });
    };

    deleteItem = (index) => {
        this.setState({
            itemlist: this.state.itemlist.filter((value, indexkey) => {
                return (index !== indexkey);
            }),
        })
    };

    render() {
        const { inputvalue } = this.state;
        const { itemlist } = this.state;

        return (
            <div className="todo-container">
                <form className="input-section" onSubmit={this.storeItems}>
                    <h1>St.Mary</h1>
                    <input type="text" value={inputvalue} onChange={this.handleChange} placeholder="Enter Items..." />
                </form>

                <ul>
                    {itemlist.map((value, index) => {
                        return (
                            <li key={index}>
                                {value}
                                <i onClick={() => this.deleteItem(index)} className="fas fa-trash-alt"></i>
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    }
}

export default TodoApp;
