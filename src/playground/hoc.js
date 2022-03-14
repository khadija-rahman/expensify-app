// higher order component - a componenet that renders another component
// reuse code
// render hijacking
// prop manipulation
// abstract state

import React from "react";
import ReactDOM from "react-dom";
console.log(ReactDOM);
const Info = (props) => (
  <div>
    <h1>Info </h1>
    <p>The info is {props.info}</p>
  </div>
);

const withAdminWarning = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAdmin && <p>This is private info. Please dont share.</p>}
      <WrappedComponent {...props} />
    </div>
  );
};
//this is the higher order component - function that takes component in
const requireAuthentication = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAuthenticated ? (
        <WrappedComponent {...props} />
      ) : (
        <p>please login to view info</p>
      )}
    </div>
  );
};
//const newComponent = higherOrderComponent(originalComponent)
const AdminInfo = withAdminWarning(Info);
//require authentication
const AuthInfo = requireAuthentication(Info);
// ReactDOM.render(
//   <AdminInfo isAdmin={false} info="there are details" />,
//   document.getElementById("app")
// );
ReactDOM.render(
  <AuthInfo isAuthenticated={true} info="there are details" />,
  document.getElementById("app")
);
