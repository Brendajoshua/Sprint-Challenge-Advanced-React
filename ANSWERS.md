- [ ] Why would you use class component over function components (removing hooks from the question)?

Class components are helpful when you need to maintain state and control state in that component. You can have more control in the lifecycle method.

- [ ] Name three lifecycle methods and their purposes.

1. componentDidMount() - This method is invoked immediately after the component has mounted, any API calls that are required and node initialization can be performed in this method. 

2. ComponentDidUpdate() - This method is invoked when their is some change in the DOM, this method is useful for updating the DOM after some changes. 

3. ComponenetWillUnmount() - This method is invoked after the component has been destroyed. It is useful for performing any needed cleanup.

- [ ] What is the purpose of a custom hook?

A custom hook allow us to apply non-visual behavior and stateful logic throughout our components by reusing the same hook over and over again

- [ ] Why is it important to test our apps?

To catch potential errors/bugs in development and avoid deploying broken code.