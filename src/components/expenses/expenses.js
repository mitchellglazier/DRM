import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, DataTable, TableHeader, Button } from 'react-mdl';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';

class Expenses extends Component {
    state = {
        open: false
    };
    constructor(props) {
        super(props) ;
            this.state = { activeTab: 0};
    }

    handleClickOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    toggleCategories() {
        if(this.state.activeTab === 0) {
            return(
                <div>
                    <h1>All Expenses</h1>
                    <div>
                        <Button style={{marginBottom: '2em' }} raised colored ripple onClick={this.handleClickOpen}>New Expense</Button>
                        <Dialog
                            open={this.state.open}
                            onClose={this.handleClose}
                            aria-labelledby="form-dialog-title"
                            >
                        <DialogTitle id="form-dialog-title">Create New Expense</DialogTitle>
                        <DialogContent>
                            <DialogContentText>
                                Please fill out all fields for more accurate reporting
                                </DialogContentText>
                                
                                <TextField
                                autoFocus
                                margin="dense"
                                id="expense"
                                label="Expense"
                                type="expense"
                                fullWidth
                                />

                                <TextField
                                autoFocus
                                margin="dense"
                                id="place"
                                label="Place"
                                type="place"
                                fullWidth
                                />

                                <InputLabel style={{marginRight: '1em' }}>Category</InputLabel>
                                <Select style={{marginTop: '1em' }}>
                                    <MenuItem value="Medical">Medical</MenuItem>
                                    <MenuItem value="Phone">Phone</MenuItem>
                                    <MenuItem value="Child Support">Child Support</MenuItem>
                                    <MenuItem value="Clothes">Clothes</MenuItem>
                                    <MenuItem value="Miscellaneous">Miscellaneous</MenuItem>
                                </Select>

                                <TextField
                                autoFocus
                                margin="dense"
                                id="responsibility"
                                label="Percentage Responsibility"
                                type="responsibility"
                                fullWidth
                                />

                                <TextField
                                autoFocus
                                margin="dense"
                                id="price"
                                label="Price"
                                type="price"
                                fullWidth
                                />

                                <TextField
                                autoFocus
                                margin="dense"
                                id="notResponsible"
                                label="Custody Responsibility"
                                type="notResponsible"
                                fullWidth
                                />

                            </DialogContent>
                            <DialogActions>
                                <Button onClick={this.handleClose} color="primary">
                                    Cancel
                                </Button>
                                <Button onClick={this.handleClose} color="primary">
                                    Create
                                </Button>
                            </DialogActions>
                        </Dialog>
                    </div>
                
                    <DataTable
                        selectable
                        shadow={0}
                        rowKeyColumn="id"
                        rows={[
                            {id: 1001, expense: 'Winter Coat', place: 'Kohls', category: 'Clothes', responsibility: '50%', price: 40.00, notResponsible: 20.00, attachement: true, },
                            {id: 1002, expense: 'Medications', place: 'Wallgreens', category: 'Medical', responsibility: '0%', price: 10.00, notResponsible: 10.00, attachement: true, },
                            {id: 1003, expense: 'school lunches', place: 'Walmart', category: 'Food', responsibility: '75%', price: 40.00, notResponsible: 10.00, attachement: false, },
                        ]}
                    >
                        <TableHeader name="expense" tooltip="What did you pay for?">Expense</TableHeader>
                        <TableHeader numeric name="place" tooltip="Where did you pay for it?">Place</TableHeader>
                        <TableHeader numeric name="category" tooltip="Genterally what is it for?">Category</TableHeader>
                        <TableHeader numeric name="responsibility" tooltip="What is your percentage responsibility for the expense">Percentage Responsibilty</TableHeader>
                        <TableHeader numeric name="price" cellFormatter={(price) => `$${price.toFixed(2)}`} tooltip="How much did it cost?">Price</TableHeader>
                        <TableHeader numeric name="notResponsible" cellFormatter={(price) => `$${price.toFixed(2)}`} tooltip="How much is not your responsibility">Custody Responsibilty</TableHeader>
                        <TableHeader numeric name="attachment" tooltip="This is the amount due for repayment">Attachement</TableHeader>
                    </DataTable>
                </div>
            )
        } else if(this.state.activeTab === 1) {
            return(
                <div>
                    <h1>Unpaid Expenses</h1>
                    <DataTable
                        selectable
                        shadow={0}
                        rowKeyColumn="id"
                        rows={[

                        ]}
                    >
                        <TableHeader name="expense" tooltip="What did you pay for?">Expense</TableHeader>
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
                        <TableHeader name="expense" tooltip="What did you pay for?">Expense</TableHeader>
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