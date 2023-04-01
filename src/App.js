import React from "react";
import './App.css';
import loader from './assets/loader.gif'
import heart from './assets/heart.png'
import comment from './assets/comment.png'
// import Comment from './components/comment'

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
		if (!DataisLoaded) return <div className="LoaderPage">
			<img src={loader} style={{}} className="Loader" alt=""/> </div> ;

		return (
		<div className = "App">
			<h1> Sasta Insta </h1>
      {
				items.map((item) => (
          <div className="itemBox">
			<div  style={{padding:4}}>
			<img style={{height:50, width:50, borderRadius:"50%", float:"left", padding:7}} src={item.profile} alt=""/>
            <h2>{item.name}</h2>
			</div>
			<div style={{height:500}}>
            <img style={{maxHeight:500, maxWidth:500}} src={item.url} alt=""/>
			</div>
			<div className="reaction">
				<img src={heart} alt="" style={{height:24, width:24, marginRight:10}}/><span>{item.likedby.length}</span>
				<img src={comment} alt="" style={{height:24, width:24, marginLeft:10, marginRight:10}}/><span>{item.comment.length}</span>
			</div>
			{/* <Comment/> */}
          </div>
        ))
      }
	  </div>
	);
}
}

export default App;
