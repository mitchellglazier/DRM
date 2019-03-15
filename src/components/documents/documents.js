import React, { Component } from 'react';

class Documents extends Component {
    constructor(props) {
    super(props);
        
    this.state = {imageURL: ''};
        
    this.handleUploadImage = this.handleUploadImage.bind(this);
    }
        
    handleUploadImage(ev) {ev.preventDefault();
        
        const data = new FormData();
        data.append('file', this.uploadInput.files[0]);
        data.append('filename', this.fileName.value);
        
        fetch('http://localhost:4000/upload', {
            method: 'POST',
            body: data
            }).then(response => {
            response.json().then(body => {
            this.setState({ imageURL: `http://localhost:4000/${body.file}` });
            });
        });
    }
    
    render() {
        return (
            <div style={{height: '100%'}}>
                <h1>Divorce Documents</h1>
                <form onSubmit={this.handleUploadImage}>
                    <div>
                        <input ref={ref => {this.uploadInput = ref;}} type="file"/>
                    </div>
                    <br />
                    <div>
                        <input ref={ref => {this.fileName = ref;}} type="text" placeholder="Name of Document"/>
                    </div>
                    <br />
                    <div>
                        <button>Upload</button>
                    </div>
                    <hr />
                    <p>Uploaded Documents:</p>
                    <img src={this.state.imageURL} alt="img" />
            </form>
            </div>
        );
    }
}

export default Documents;