import React from 'react';
import Navigation from './Components/Navigation/Navigation';
import Logo from './Components/Logo/Logo';
import ImageLinkForm from './Components/ImageLinkForm/ImageLinkForm';
import './App.css';

function App() {
	return (
    	<div className="App">
      		{/* <h1>Magic Brain will detect faces in your pictures</h1> */}
			<Navigation />
			<Logo />
			<ImageLinkForm />
			{/* <FaceRecognition /> */}
    	</div>
  	);
}

export default App;
