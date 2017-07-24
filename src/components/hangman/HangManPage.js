import React,{PropTypes} from 'react';

class HangManPage extends React.Component{

    constructor() {
        super();
        this.state = {
            lettersUsed: [],
            word: "mean"
        };

        this.onLetterClick = this.onLetterClick.bind(this);
    }

    /*----- Render The Letter of the word ----*/
    getLetterPlaces(){
        let renderItems = this.state.word.split("");

        return(
            <div>
                {renderItems.map((item, index) => (
                    <span className="indent" key={index}>_</span>
                ))}
            </div>
        );
    }

    /*----- Render The Alphabet ----*/
    getAlphabet(){
       let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

        return(
            <div className="alphabetContainer">
                {alphabet.map((item, index) => (
                    <button className="alphabet" onClick={this.onLetterClick} value={item} key={index}>{item}</button>
                ))}
            </div>
        );
    }

    onLetterClick(event){
        event.setAttribute("disabled");
        console.log(event.target.value);

    }

    render(){
        return(
           <div className="wrapper">
               <h1>Hang Man</h1>
               <div className="word">
                   {this.getLetterPlaces()}
               </div>
               <div className="alphabetWrapper">
                   {this.getAlphabet()}
               </div>
           </div>
        );
    }
}

export default HangManPage;