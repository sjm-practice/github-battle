# Github-battle
A practice application to learn react (done as a code along for Tyler McGinnis' [ReactJS Program](http://www.reactjsprogram.com/), React Fundamentals).

And... doing the follow up course, refactoring this project to use ES6/7.


## Notes
### Components & Render
* render needs to return one element
    * which can contain mulitple child elements
    * but it can not return multiple elements (or un-parented children - orphans?)
* render is a pure function
    * always returns the same result when passing the same arguments
    * only may change variables within its scope
    * no side effects
* React Components should follow the FIRST acronym (per Addy Osmani)
    * Focused
    * Independent
    * Reusable
    * Small
    * Testable
* this.props.children provides access to the value or components between the opening and closing tags
    * seems analogous to innerHTML
    * ie. `<Clock>12:49am</Clock>`  is the "12:49am"
    * if there are multiple components children will be an array

### React Router
* React Router, is (or is like) a component
    * [tutorial](https://github.com/reactjs/react-router-tutorial/tree/master/lessons)
    * defined like a component
    * and rendered (by calling render)
* Link component associates an element (or text) to a route
    * activeStyle is an attribute, which executes a style on the element when its route is active
    * activeClass is an attribute, which executes a class on the element " " " "
* Params
    * params defined for route by `<Route path="/pathname/:param1Name/:param2Name" component={componentName}/>`
    * param values made available to route components on `this.props.params.paramName`
* Index Route (IndexRoute) allows you to set a component to be rendered for the index / root route
    * using IndexLink instead of Link for the link to the route, prevents the index link from being active all of the time (note, normally parent routes are active when child routes are active)
    * an alternative is to use the onlyActiveOnIndex property with Link
* Programatical Navigation - [get access to router via contextType, then push desired path](https://github.com/reactjs/react-router-tutorial/tree/master/lessons/12-navigating)
    
### React Life Cycle Events
* two primary categories of events, Mount/Unmount & Receive New Data
* Mount / Unmount Examples
    * establish default props in our component
    * set some initial state
    * make an ajax request to fetch some data
    * set up any listeners
    * remove any listeners, for unmount
* Common Life Cycle Events
    * getInitialState
    * componentWillMount  (runs before render)
    * componentDidMount   (runs after render)
    * componentWillReceiveProps (anytime component receives new props)
    * componentWillUnmount (when navigating away from component)
    
### This
* __Implicit binding__ (this is, what is left of the dot at call time)
* __Explicit binding__ (you pass in this, using __.call__ - myfunc.call(this_context))
    * __.call__ and __.apply__ invoke the function, where the context of this is passed in 
    * note, the first argument of call is 'this / context', any subsequent arguments simply become parameters
        * `myfunc.call(this_context, arg1, arg2, arg3);`
    * note, apply is the same as call, but you can pass all the arguments in an array
        * `myfunc.apply(this_context, array_of_args);
    * __.bind__ takes the same args as .call, but instead of invoking the function, returns a new function with the passed in context and arguments set
        * `var newFn = myFunc.bind(this_context, arg1, arg2);`
* __new binding__ (used in constructors to create / set member properties)
* __window binding__ (if now this context is set for an object or function, defaults to window)
    * `window.age = 35;`
    * use of an this that did not have its context set, would resort to window's this
    * note, 'use strict'; prevents this case (window binding)
  
### Reusable Components
* getDefaultProps - specify default props for a component
* React.cloneElement - allows you to provide new / different props to an element or elements (children)
    * `React.cloneElement(FriendList, {friends: ["Jake", "Joe"]);`
  
### ES6/7
* let and const are block scoped, var is function scoped
* const prevents changing what the variable references, but does allow changing the value (is mutable)
* arrow functions, more concise syntax AND share lexical this with the parent scope
    * arrow functions do not create a new context, so the "this" keyword inside the arrow function will be that of its parent
        * bind isn't needed in this case
* also with arrow functions, if function is only one statement, return keyword and '{' and '}' can be omitted
    * implicit return (return is implied)
    * `myArray.map((currNum) => currNum * 2);`
* async / await
    * every async function you write will return a promise
    * every thing you await will ordinarily be a promise
    * to use await, make sure the function you are in is an async function
    * try / catch
        * `try {`
        * `  var user = await getUser();`
        * `  console.log(user);`
        * `} catch(err) {`
        * `  console.log("error:", err);`
        * `}`
* class
    * one tricky thing to remember when creating a class, __if passing a function that contains this, down to another function (ie via props)__, the `this` is not automatically bound to that function being passed (like it was if using React.createClass) and the context will change
    * so, pass using an arrow function to have `this` bound to that function
    * `<ConfirmBattle onInitiateBattle={() => this.handleInitiateBattle()} />`
    * be aware, __IF the passed function takes argument__, it must be passed via the arrow function
    * `<ConfirmBattle onInitiateBattle={(event) => this.handleInitiateBattle(event)} />`
