import React, {Component} from 'react';
import Clarifai from 'clarifai';
import Navigation from './Components/Navigation/Navigation';
import Logo from './Components/Logo/Logo';
import ImageLinkForm from './Components/ImageLinkForm/ImageLinkForm';
import FaceRecognition from './Components/FaceRecognition/FaceRecognition';
import './App.css';

const app = new Clarifai.App({
    apiKey: 'f3961472e5b14872a68401cbe231ff94'
   });

class App extends Component {
    constructor() {
        super();
        this.state = {
            input: '',
            imageURL: '',
        }
    }

    onInputChange = (event) => {
        this.setState({input: event.target.value});
    }

    onButtonSubmit = () => {
        this.setState({imageURL: this.state.input})
		  console.log("CHMO");
        app.models.predict(Clarifai.FACE_DETECT_MODEL , this.state.input).then(
            function(response) {
                console.log(response.outputs[0].data.regions[0].region_info.bounding_box);
            },
            function(err) {
            // there was an error
            }
        );
    }

    render() {
        return (
            <div className="App">
                <Navigation />
                <Logo />
                <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit} />
                <FaceRecognition imageURL={this.state.imageURL}/>
            </div>
          );
    }
    
}

export default App;

