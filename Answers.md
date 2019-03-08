1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

  .map(), .filter() and .reduce() are the three Array/Object methods that do not produce side effects because they return a new array. The method we use to create a new object is .map().


2.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

  The store is where the state for the application lives.  Ideally all of the data lives within the store, which is why it is known as the single source of truth.
  The reducer is a pure function that takes an action and decides how to transform the state.
  The actions are plain objects that describe what you want the reducer to do with the state


3.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

  Component state lives in a component and has to be passed down to child components and grandchild components, etc.  Application state is global and seperated from the components. Application state does not have to be passed down to child components, it is called through a connect function.

  Component state is best used when the data is going to be created and consumed in the same component or even with one child component.  Application state is great for data that is going to be passed around more than one component, especially if they are far apart on the component inheritance tree.  Application state is also beneficial for applications with large amounts of data to pass around.


4.  What is middleware?

  Middleware is a function that interrupts a process with it's own functionality, in order to extend or alter the functionality of a process that is already occuring.  For instance we use Middleware to monitor actions that are dispatched with redux logger, or enable us to work with actions and the store asynchonously using Redux Thunk.
  


5.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

  Redux Thunk gives us the ability to handle asynchronous operations in our action creators.  It allows the action creators to fire one action and then wait for another promised input to then fire a different action later, typically when new data arrives.

6.  Which `react-redux` method links up our `components` with our `redux store`?

  connect() is the function that links components to the redux store.