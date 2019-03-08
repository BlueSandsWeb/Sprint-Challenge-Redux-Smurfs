import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';

// actions
import { getSmurfs } from '../actions';

// Components
import Smurf from './Smurf';
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      height: '',
    }
  }

  componentDidMount() {
    this.props.getSmurfs();
  }

  render() {
    if(this.props.fetchingSmurfs){
      return <h3>Loading Smurf Data</h3>;
    }
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>
          <form>
            <input type="text" name="name" value={this.state.name} />
          </form>
        </div>
        <div>
          {this.props.smurfs.map(smurf => {
            return (
              <Smurf smurf={smurf} key={smurf.id} />
            );
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    fetchingSmurfs: state.fetchingSmurfs,
    addingSmurf: state.addingSmurf,
    updatingSmurf: state.updatingSmurf,
    deletingSmurf: state.deletingSmurf,
    error: state.error,
  }
};

export default connect(mapStateToProps, { getSmurfs })(App);
