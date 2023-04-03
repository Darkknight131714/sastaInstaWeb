import React, {useState, useEffect} from "react";
import '../App.css';
import loader from '../assets/loader.gif'
import title from '../assets/title.svg'
import { getPostDetails } from "../services/api";
// import data from '../components/sastainsta.json'
import Post from '../components/Post.js'


const Home = (props) => {
	
	const [items, setItems] = useState([]);
	const [dataIsLoaded, setDataIsLoaded] = useState(false);
    // console.log(data);
	useEffect(() => {
	  const getData = async () => {
		const data = await getPostDetails();
        console.log(data);

        
		// console.log(data);
		if(data) {
			setItems(data?.data);
			setDataIsLoaded(true);
		}
	}
	getData();
	}, [])

	return (
		<>
        
			{
				!dataIsLoaded ? 
				<div className="LoaderPage">
					<img src={loader} style={{}} className="Loader" alt="" /> 
				</div>
				: ""
			}

			<div className = "Home" style={{paddingTop:50}}>
				<div>
					<img src={title} className="title" alt=""/>
				</div>
				{
					items?.map((item) => {
						{/* console.log(item) */}
						return (
							<Post item={item}/>
						)
					})
				}
			</div>
		</>
	)
}

export default Home