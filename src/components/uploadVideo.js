import axios from 'axios'; 

import React,{Component} from 'react'; 

class App extends Component { 

	// state = { 

	// // Initially, no file is selected 
	// selectedFile: null
	// }; 
	
	// On file select (from the pop up) 
	// onFileChange = event => { 
	
	// // Update the state 
	// this.setState({ selectedFile: event.target.files[0] }); 
	
	// }; 
	
	// File content to be displayed after 
	// file upload is complete 
	fileData = () => { 
	
	if (this.props.selectedFile) { 
		
		return ( 
		<div> 
			<h2>File Details:</h2> 
			<p>File Name: {this.props.selectedFile.name}</p> 
			<p>File Type: {this.props.selectedFile.type}</p> 
			<p> 
			{/* Last Modified:{this.state.selectedFile.lastModified.toDateString()}  */}
			</p> 
		</div> 
		); 
	} else { 
		return ( 
		<div> 
			<br /> 
		</div> 
		); 
	} 
	}; 
	
	render() { 
	
	return ( 
		<div> 
			<div> 
				<input type="file" onChange={this.props.onFileChange} /> 
			</div> 
		{this.fileData()} 
		</div> 
	); 
	} 
} 

export default App; 
