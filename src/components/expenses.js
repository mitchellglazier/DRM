import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell } from 'react-mdl';

class Expenses extends Component {
    constructor(props) {
        super(props) ;
            this.state = { activeTab: 0};
    }

    toggleCategories() {
        if(this.state.activeTab === 0) {
            return(
                <div>
                    <h1>All Expenses</h1>
                </div>
            )
        } else if(this.state.activeTab === 1) {
            return(
                <div>
                    <h1>Unpaid Expenses</h1>
                </div>
            )
        } else if(this.state.activeTab === 2) {
            return(
                <div>
                    <h1>Paid Expenses</h1>
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