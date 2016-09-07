# Github-battle
A practice application to learn react.


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
    