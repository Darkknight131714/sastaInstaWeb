import React, {useState, useEffect} from "react";
import './App.css';
import Dashboard from "./pages/Home";

const App = () => {
	return (
		<>
			<Dashboard/>
		</>
	)
}

export default App

// {modal && (
// 	<div className="modal">
// 	<div onClick={toggleModal} className="overlay"></div>
// 	<div className="modal-content">
// 		<h2>Comments</h2>
// 		{console.log(item.comment)}
// 		{
// 			item?.comment?.map((comm) => {
// 				{/* console.log(comm) */}
// 				return(
// 					<div>
// 					<h2>{comm}</h2>
// 					</div>
// 				)
// 			})
// 		}
// 		<button className="close-modal" onClick={toggleModal}>
// 		Close
// 		</button>
	

// 	</div>
// 	</div>
// )}