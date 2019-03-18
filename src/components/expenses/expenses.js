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

    toggleCategories() {
        if(this.state.activeTab === 0) {
            return(
                <div>
                    <h1>All Expenses</h1>
                    <div>
                        <form onSubmit={this.handleSubmit}>
                            <input type="text" name="currentExpense" placeholder="What did you pay for?" onChange={this.handleChange} value={this.state.currentExpense} />
                            <input type="text" name="place" placeholder="Where did you pay for it?" onChange={this.handleChange} value={this.state.place} />
                            <input type="text" name="category" placeholder="Generally what is it for?" onChange={this.handleChange} value={this.state.category} />
                            <input type="text" name="responsibility" placeholder="What is your percentage responsibility for the expense" onChange={this.handleChange} value={this.state.responsibility} />
                            <input type="text" name="price" placeholder="How much did it cost?" onChange={this.handleChange} value={this.state.price} />
                            <input type="text" name="notResponsible" placeholder="How much is not your responsibility" onChange={this.handleChange} value={this.state.notResponsible} />
                            <button>Add Item</button>
                        </form>
                    </div>
                    <section className='display-item'>
  <div className="wrapper">
    <ul>
      {this.state.expenses.map((expense) => {
        return (
          <li key={expense.id}>
            <h3>{expense.currentExpense}</h3>
            <p>Place: {expense.place}</p>
            <p>Category: {expense.category}</p>
            <p>My Responsibility: {expense.responsibility}</p>
            <p>Price: {expense.price}</p>
            <p>Co-Parent Responsibility: {expense.notResponsible}</p>
          </li>
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