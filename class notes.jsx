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
