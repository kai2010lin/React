npm init// to create package.json which is used for dependency list
npm install express@4 --save//express is web server --save stores dependency @ specify version
npm install				// package.json to reinstall all dependency, in the correct folder

babel lib //to enable ES6 feature and translate JSX


var GreeterWord = React.createClass(

  render: function(){       //required, return jsx file
    return (
      <div>
        <h1>Hello React!</h1>
      </div>
    )
  }
);

ReactDOM.render(
  <GreeterWord/>
  document.getElementById("app");
};

//customed value

var Greeter = React.createClass({
  render: function () {
    var name = this.props.name;
    return (
      <div>
        <h1>Hello </h1>
      <p>This is from a component!</p>
      </div>
    );
  }
});

ReactDOM.render(
  <Greeter name="Kyle"/>,
  document.getElementById('app')
);

//with default

var Greeter = React.createClass({
  getDefaultProps: function (){
    return {
      name : "React"
    }
  },

  render: function () {
    var name = this.props.name;
    return (
      <div>
        <h1>Hello {name}!</h1>
        <p>This is form a component!</p>
      </div>
    );
  }
});


ReactDOM.render(
  <Greeter />,
  document.getElementById('app')
);
///use variables


var fullname =  "N M B";

ReactDOM.render(
  <Greeter name={fullname}/>,  //{} means js expression
  document.getElementById('app')
);


////
var Greeter = React.createClass({
  getDefaultProps: function (){
    return {
      name    : "React",
      message : "default message"
    };
  },
onButtonClick: function (event){
  event.preventDefault(); //prevent refresh, single page application idead
  var name = this.refs.name.value;
  alert(name);
},
  render: function () {
    var name = this.props.name;
    var message = this.props.message;
    return (
      <div>
        <h1>Hello {name}!</h1>
        <p>{message + "!@!@!@!@!@!"}</p>
      <form onSubmit={this.onButtonClick}>//expecting a function
        <input type="text" ref="name">//ref is react like id in js
        </input>
        <button>Set name</button>
      </form>
      </div>
    );
  }
});

var fullname =  "N M B";
var message = "this is a cosssmponent";

ReactDOM.render(
  <Greeter name={fullname} message={message}/>,  //{} means js expression
  document.getElementById('app')
);


//////event handler

var Greeter = React.createClass({
  getDefaultProps: function (){
    return {
      name    : "React",
      message : "default message"
    };
  },
onButtonClick: function (event){
  event.preventDefault(); //prevent refresh, single page application idead
  var name = this.refs.name.value;
  alert(name);
},
  render: function () {
    var name = this.props.name;
    var message = this.props.message;
    return (
      <div>
        <h1>Hello {name}!</h1>
        <p>{message + "!@!@!@!@!@!"}</p>
      <form onSubmit={this.onButtonClick}>//expecting a function
        <input type="text" ref="name">//ref is react like id in js
        </input>
        <button>Set name</button>
      </form>
      </div>
    );
  }
});

var fullname =  "N M B";
var message = "this is a cosssmponent";

ReactDOM.render(
  <Greeter name={fullname} message={message}/>,  //{} means js expression
  document.getElementById('app')
);

////maintain a state, prop is internal maintained not changeable, statble can be changed
var Greeter = React.createClass({
  getDefaultProps: function (){
    return {
      name    : "React",
      message : "default message"
    };
  },

getInitialState:  function(){
  return{                       //internal state
      name: this.props.name
  }
},

onButtonClick: function (event){
  event.preventDefault(); //prevent refresh, single page application idead
  var nameRef = this.refs.name;
  var name = nameRef.value;
  this.setState({         //refresh the component when necessary,not all
    name: name
  });
},
  render: function () {
    var name = this.state.name;
    var message = this.props.message;
    return (
      <div>
        <h1>Hello {name}!</h1>
        <p>{message + "!@!@!@!@!@!"}</p>
      <form onSubmit={this.onButtonClick}>//expecting a function
        <input type="text" ref="name">//ref is react like id in js
        </input>
        <button>Set name</button>
      </form>
      </div>
    );
  }
});

var fullname =  "N M B";
var message = "this is a cosssmponent";

ReactDOM.render(
  <Greeter name={fullname} message={message}/>,  //{} means js expression
  document.getElementById('app')
);
// to decide weather something should be a prop or state, think if it should be changeable
// by the component


////nested componnent, single responsibility component
////greeter component maintains state and automatically changes its children


var GreeterMessage = React.createClass({
    render: function () {
      var name = this.props.name;
      var message = this.props.message;

      return (
        <div>
          <h1>Hello {name}!</h1>
          <p>{message}</p>
        </div>
      );
    }
});



var GreeterForm = React.createClass({
  onFormSubmit: function (e) {
    e.preventDefault();

    var name = this.refs.name.value;
    var message = this.refs.message.value;

    if (name.length > 0) {
      this.refs.name.value = '';
      this.props.onNewName(name);
    }

    if (message.length > 0) {
      this.refs.message.value = '';
      this.props.onNewMessage(message);
    }

  },
  render: function () {
    return (
      <form onSubmit={this.onFormSubmit}>
        <input type="text" ref="name" placeholder="Enter Name"/><br/>
        <textarea ref="message" placeholder="Enter Message"/><br/>
        <button>Set Name and Message</button>
      </form>
    );
  }
});



var Greeter = React.createClass({
  getDefaultProps: function () {
    return {
      name: 'React',
      message: 'This is the default message!'
    };
  },
  getInitialState: function () {
    return {
        name: this.props.name,
        message: this.props.message
    };
  },
  handleNewName: function (name) {
    this.setState({
      name: name
    });
  },
  handleNewMessage: function (message) {
    this.setState({
      message: message
    });
  },
  render: function () {
    var name = this.state.name;
    var message = this.state.message;

    return (
      <div>
        <GreeterMessage name={name} message={message}/>
        <GreeterForm onNewName={this.handleNewName} onNewMessage={this.handleNewMessage}/>
      </div>
    );
  }
});

var firstName = 'Andrew';

ReactDOM.render(
  <Greeter/>,
  document.getElementById('app')
);

/////////

npm install -g webpack@1.12.13//gloabl -g give acess in the terminal, does not update package.json and node_modules

webpack -h // to test

npm install --save react@0.14.7 react-dom@0.14.7

babel and webpack are not in production but in test environment

npm install --save-dev webpack@1.12.13 babel-core@6.5.1 babel-loader@6.2.2 babel-preset-es2015@6.5.0 babel-preset-react@6.5.0

webpack path/app.js path/bundle.js


create components folder. inside of "components" which coponent has one line "module.exports = name". require the "/path/name", you can use function

module.exports = {
  entry: './public/app.js',
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
};

webpack.config.js

//__dirname is directly useable in node.js

// webpack -w, deteck everything in the background if you make any any change

module.exports = {
  entry: './public/app.jsx',												//required modules, if the it is required, put into bundle.js 
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    root: __dirname,
    alias: {
      Greeter: 'public/components/Greeter.jsx',											//for require
      GreeterMessage: 'public/components/GreeterMessage.jsx',
      GreeterForm: 'public/components/GreeterForm.jsx'
    },
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        },
        test: /\.jsx?$/,																	//regex
        exclude: /(node_modules|bower_components)/
      }
    ]
  }
};
////react router

//component
var Main = React.createClass({
  render: function () {
    return (
      <div>														//return only 1 root element, bundled in div
        <Nav/>
        <h2>Main Component</h2>
      </div>
    );
  }
});

//app.jsx

var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>

    </Route>
  </Router>,
  document.getElementById('app')
);

//router{
	route {
		indexroute
	}}
	
//nav.jsx
var React = require('react');
var {Link} = require('react-router');

var Nav = React.createClass({
  render: function () {
    return (
      <div>
        <h2>Nav Component</h2>
        <Link to="/" activeClassName="active" activeStyle={{fontWeight:'bold'}}>Get Weather</Link>//activeStyle expect an object, so {{}}
        <Link to="/about" activeClassName="active" activeStyle={{fontWeight:'bold'}}>About</Link>//find url matching regex to main, then put active
        <Link to="/examples" activeClassName="active" activeStyle={{fontWeight:'bold'}}>Examples</Link>
      </div>
    );
  }
});

module.exports = Nav;

//
<IndexLink to="/" activeClassName="active" activeStyle={{fontWeight:'bold'}}>Get Weather</IndexLink>//fix the problem of always highlight
<Link to="/about" activeClassName="active" activeStyle={{fontWeight:'bold'}}>About</Link>
<Link to="/examples" activeClassName="active" activeStyle={{fontWeight:'bold'}}>Examples</Link>


//not a prop
<input type="text" placeholder="Enter City"></input>//type is not a prop, since "input" is not react component



//every time your change webpack.config.js, you need to restart webpack mannually, even if your are using webpack -w

//return always use div to wrap around

//<form> is right <Form> is not


  <WeatherForm onSearch={handleSearch}/>// wrong
  
    <WeatherForm onSearch={this.handleSearch}/>//right 
	
	
	
	    var name = this.state.name;
    var location = this.state.temp;
	
	//same as, es6 feature
    var {name, location} = this.state;
	


var React = require('react');

var WeatherDisplay = React.createClass({
  var {name, location} = this.props;//传给children的参数就是props

  render: function () {
    return (
      <div>
        <h3>location is {}</h3>
      </div>
    )
  }
});

module.exports = WeatherDisplay;

callback is for asynchronous function

//traidtional call back
function getTempCallback (lcoation, callback) {
  callback(undefined, 78);
  callback('City not found');
}


getTempCallback("Philadelphia", function (err, temp){
  if(err){
    console.log('err', err);
  }
  else{
    console.log('success', temp);
  }
});

//use promise

function getTempPromise (lcoation) {
  return new Promise(function(resolve, reject){
    resolve(79);
    reject("city not found");
  });
}

getTempPromise().then(function(temp){
  console.log("success : " + temp);
},
function(err){
  console.log("fail : " + err);
})

//another example

function addPromise (a, b) {
  return new Promise(function(resolve, reject){
    if ((typeof a === 'number') && (typeof b === 'number'))
    resolve(a + b);
    reject("data are corrupted");
  });
}

addPromise(3,4).then(function(sum){
  console.log("sum is " + sum);
}, function(err){
  console.log("error is " + err);
})

addPromise("string", "string").then(function(sum){
  console.log("sum is " + sum);
}, function(err){
  console.log("error is " + err);
});

addPromise(2).then(function(sum){
  console.log("sum is " + sum);
}, function(err){
  console.log("error is " + err);
});
////


var React = require('react');
var axios = require('axios');

const OPEN_POKEMON_URL = 'http://pokeapi.co/api/v2/pokemon/';

var Nav = React.createClass({
  render: function () {
    return (
    );
  }
});

module.exports = {
  getName : function(number){
      var encodeLocation = encodeURIComponent(number);
      var requestURL = `${OPEN_POKEMON_URL}${number}\`
  }//inside of `${}`, everything is regular js
}
///


handleSearch: function(location){
    //this.setState({
    //    location : location,
    //    name: 'balala'
    //});

    var that = this;
    PokemonAPI.getName(location).then(function(name){//getName(return a priomise. 2 consecutive promise calls)
      alert("3");
      that.setState({
        location : location,
        name: name
      })
    }, function(errorMessage){
      alert(errorMessage);
      alert("4");
    });
  },
  
  ///pokemonAPI.jsx
var React = require('react');
var axios = require('axios');

const OPEN_POKEMON_URL = 'http://pokeapi.co/api/v2/pokemon/';

module.exports = {
  getName : function(number){
      var encodeLocation = encodeURIComponent(number);
      var requestURL = `${OPEN_POKEMON_URL}${number}/`;

      return axios.get(requestURL).then(function(res){
        if(res.data.cod && res.data.message){
          throw new Error(res.data.message);
        }
        else{
          alert("1");
          return res.data.name; //根据实际的json结构，name选项
        }
      }, function(res){
        alert("2");
        throw new Error(res.data.message);
      })
  }
}

//debugger;to set 断点
// use console to see values


//es6 features, replace anonymous function with arrow function

var name = ['1', '2', '3'];

name.forEach(function(name){
  console.log('ForEach', name);
})

name.forEach((name) => {
  console.log('arrow', name);
})

name.forEach((name) => console.log('arrowshorter', name));

var returnME = (name) => name + '!';//()=> works just like a function, return what is in behind

console.log(returnME('Kai'));

//this binding of arrow is its parent, annooyous function's this refer to itself

var ob1 = {
  FullName: "Kai",
  Greet:  function (){
    name.forEach(function(name){
      console.log(this.FullName + ' says hi to ' + name);
    })
  }
}

ob1.Greet();

var ob2 = {
  FullName: "Kai",
  Greet:  function (){
    name.forEach((name) => {
      console.log(this.FullName + ' says hi to ' + name);
    })
  }
}

ob2.Greet();

var ob3 = {
  FullName: "Kai",
  Greet:  function (){
    name.forEach((name) => {
      console.log(this.FullName + ' says hi to ' + name);
    })
  }
}

ob3.Greet.call(ob3);


function add (a, b){
  return a + b;
}
console.log(add(1, 3));
console.log(add(2, 4));

var func1 = (a, b) => {return a + b}
var func2 = (a, b) => a + b;
console.log(func1(2,2));
console.log(func2(4,4));

//stateless functional component

var React = require('react');

var About = React.createClass({
  render: function () {
    return (
      <h3>About Component</h3>
    )
  }
});

var About = (props)=>{
  return (
    <h3>About Component</h3>
  )
}
module.exports = About;//replace with function

//if it use this.props => props, use only if no state used and have functions other than render

var WeatherDisplay = React.createClass({
  render: function () {
    var {name, location} = this.props;

    return (
        <h3>{location} is {name}</h3>
    )
  }
});

var WeatherDisplay = ({name, location}) => {
  return (
      <h3>{location} is {name}</h3>
  )
}

  