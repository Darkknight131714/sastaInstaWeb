import React from "react";
import './App.css';
class App extends React.Component {

	// Constructor
	constructor(props) {
		super(props);

		this.state = {
			items: [],
			DataisLoaded: false
		};
	}

	// ComponentDidMount is used to
	// execute the code
	componentDidMount() {
		fetch(
'https://sastainsta.onrender.com/')
			.then((res) => res.json())
			.then((json) => {
				this.setState({
					items: json,
					DataisLoaded: true
				});
			})
	}
	render() {
		const { DataisLoaded, items } = this.state;
		if (!DataisLoaded) return <div>
			<h1> Sasta Insta loading.... </h1> </div> ;

		return (
		<div className = "App">
			<h1> Sasta Insta </h1>
      {
				items.map((item) => (
          <div style={{height:600, width:600, border:5,borderColor:"black",borderStyle:"solid", marginTop:10, marginLeft:"auto", marginRight:"auto"}}>
			<div  style={{padding:4}}>
			<img style={{height:50, width:50, borderRadius:"50%", float:"left", padding:7}} src={item.profile}/>
            <h2>{item.name}</h2>
			</div>
            <img style={{maxHeight:500, maxWidth:500}} src={item.url} />
          </div>
        ))
      }
	  </div>
	);
}
}

export default App;
