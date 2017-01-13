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
