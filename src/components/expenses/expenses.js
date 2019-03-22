import React, { Component } from 'react';
import firebase from '/Users/telenotesuser/Desktop/Training/DRM/src/firebase.js';
import { Tabs, Tab, Grid, Cell, DataTable, TableHeader } from 'react-mdl';

class Expenses extends Component {
    constructor(props) {
        super(props) ;
            this.state = { 
                // open: false,
                activeTab: 0,
                currentExpense: '',
                place: '',
                category: '',
                responsibility: '',
                price: '',
                notResponsible: '',
                expenses: [],
            };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        const expensesRef = firebase.database().ref('expenses');
        expensesRef.on('value', (snapshot) => {
          let expenses = snapshot.val();
          let newState = [];
          for (let expense in expenses) {
            newState.push({
              id: expense,
              currentExpense: expenses[expense].currentExpense,
              place: expenses[expense].place,
              category: expenses[expense].category,
              responsibility: expenses[expense].responsibility,
              price: expenses[expense].price,
              notResponsible: expenses[expense].notResponsible,
            });
          }
          this.setState({
            expenses: newState
          });
        });
    }


    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const expensesRef = firebase.database().ref('expenses');
        const expense = {
          currentExpense: this.state.currentExpense,
          place: this.state.place,
          category: this.state.category,
          responsibility: this.state.responsibility,
          price: this.state.price,
          notResponsible: this.state.notResponsible,
        }
        expensesRef.push(expense);
        this.setState({
            currentExpense: '',
            place: '',
            category: '',
            responsibility: '',
            price: '',
            notResponsible: '',
        });
      }
    
      removeExpense(expenseId) {
        const expenseRef = firebase.database().ref(`/expenses/${expenseId}`);
        expenseRef.remove();
      }

    toggleCategories() {
        if(this.state.activeTab === 0) {
            return(
                <div>
                    <h1>All Expenses</h1>
                    <div>
                        <form onSubmit={this.handleSubmit} className="form-inline" col={2}>
                            <h3>Create a New Expense</h3>
                            <div className="form-group" col={2}>
                                <label for="currentExpense">Expense: </label>
                                <input type="text" className="form-control" name="currentExpense" placeholder="What did you pay for?" onChange={this.handleChange} value={this.state.currentExpense} />
                            </div>
                            <br />
                            <div className="form-group" col={2}>
                                <label for="place">Place: </label>
                                <input type="text" className="form-control" name="place" placeholder="Where did you pay for it?" onChange={this.handleChange} value={this.state.place} />
                            </div>
                            <br />
                            <div className="form-group">
                                <label for="category">Category: </label>
                                <select class="form-control" type="select" name="category" onChange={this.handleChange} value={this.state.category}>
                                    <option>Child Support</option>
                                    <option>Phone</option>
                                    <option>Clothing</option>
                                    <option>School/School Activities</option>
                                    <option>Other</option>
                                </select>                            
                            </div>
                            <br />
                            <div className="form-group">
                                <label for="responsibility">My Responsibility: </label>
                                <input type="text" className="form-control" name="responsibility" placeholder="What is your percentage responsibility for the expense" onChange={this.handleChange} value={this.state.responsibility} />
                            </div>
                            <br />
                            <div className="form-group">
                                <label for="price">Price: </label>
                                <input type="text" className="form-control" name="price" placeholder="How much did it cost?" onChange={this.handleChange} value={this.state.price} />
                            </div>
                            <br />
                            <div className="form-group">
                                <label for="notResponsibile">Co-Parent Responsibility: </label>
                                <input type="text" className="form-control" name="notResponsible" placeholder="How much is not your responsibility" onChange={this.handleChange} value={this.state.notResponsible} />
                            </div>
                            <br />
                            <div>
                                <button>Add Expense</button>
                            </div>
                        </form>
                    </div>
                    <section className='display-item'>
                        <div className="wrapper">
                            <ul>
                            {this.state.expenses.map((expense) => {
                                return (
                                    <table id="example" class="table table-striped table-bordered">
                                        <thead>
                                            <tr>
                                                <th>Expense</th>
                                                <th>Place</th>
                                                <th>Category</th>
                                                <th>My Responsibility</th>
                                                <th>Price</th>
                                                <th>Co-Parent Responsibility</th>
                                            </tr>
                                        </thead>
                                        <tbody key={expense.id}>
                                            <td>{expense.currentExpense}</td>
                                            <td>{expense.place}</td>
                                            <td>{expense.category}</td>
                                            <td>{expense.responsibility}</td>
                                            <td>{expense.price}</td>
                                            <td>{expense.notResponsible}</td>
                                            <button onClick={() => this.removeExpense(expense.id)}>Delete Expense</button>
                                        </tbody>
                                    </table>
                                )
                            })}
                            </ul>
                        </div>
                    </section>
                    </div>
            )
        } else if(this.state.activeTab === 1) {
                return (
                <div>
                    <h1>Unpaid Expenses</h1>
                    <DataTable
                        selectable
                        shadow={0}
                        rowKeyColumn="id"
                        rows={[
                        ]}
                    >
                        <TableHeader name="currentExpense" tooltip="What did you pay for?">Expense</TableHeader>
                        <TableHeader numeric name="place" tooltip="Where did you pay for it?">Place</TableHeader>
                        <TableHeader numeric name="category" tooltip="Genterally what is it for?">Category</TableHeader>
                        <TableHeader numeric name="responsibility" tooltip="What is your percentage responsibility for the expense">Percentage Responsibilty</TableHeader>
                        <TableHeader numeric name="price" cellFormatter={(price) => `$${price.toFixed(2)}`} tooltip="How much did it cost?">Price</TableHeader>
                        <TableHeader numeric name="notResponsible" cellFormatter={(price) => `$${price.toFixed(2)}`} tooltip="How much is not your responsibility">Custody Responsibilty</TableHeader>
                        <TableHeader numeric name="attachment" tooltip="This is the amount due for repayment">Attachement</TableHeader>
                    </DataTable>
                </div>
            )
        } else if(this.state.activeTab === 2) {
            return(
                <div>
                    <h1>Paid Expenses</h1>
                    <DataTable
                        selectable
                        shadow={0}
                        rowKeyColumn="id"
                        rows={[

                        ]}
                    >
                        <TableHeader name="currentExpense" tooltip="What did you pay for?">Expense</TableHeader>
                        <TableHeader numeric name="place" tooltip="Where did you pay for it?">Place</TableHeader>
                        <TableHeader numeric name="category" tooltip="Genterally what is it for?">Category</TableHeader>
                        <TableHeader numeric name="responsibility" tooltip="What is your percentage responsibility for the expense">Percentage Responsibilty</TableHeader>
                        <TableHeader numeric name="price" cellFormatter={(price) => `$${price.toFixed(2)}`} tooltip="How much did it cost?">Price</TableHeader>
                        <TableHeader numeric name="notResponsible" cellFormatter={(price) => `$${price.toFixed(2)}`} tooltip="How much is not your responsibility">Custody Responsibilty</TableHeader>
                        <TableHeader numeric name="attachment" tooltip="This is the amount due for repayment">Attachement</TableHeader>
                    </DataTable>
                </div>
            )
        }
    }


    render() {
        return(
            <div style={{height: '100%'}} className="category-tabs">
                <Tabs activeTab={this.state.activeTabe} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>All</Tab>
                    <Tab>Unpaid</Tab>
                    <Tab>Paid</Tab>
                </Tabs>

                    <Grid>
                        <Cell col={12}>
                            <div className="content">{this.toggleCategories()}</div>
                        </Cell>
                    </Grid>
            </div>
        )
    }
}

export default Expenses;