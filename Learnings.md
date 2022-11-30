### React Router 

- React Router enables "Client Side Routing" and the navigation among views of different component in a application.
- Allows changing the browser URL and Keeps the UI in sync with the URL.

### Main Components of React Router :

- BrowserRouter : BrowserRouter is a router implementation that uses the HTML5 history API(pushState , replaceState and popState event) to keep the UI in sync with the URL. 
    - It is the Parent Component that is used to store all of the other compnents.

- Routes : New Component in V6. So now Instead of Switch we use Routes .
- Route : Route is the conditionally shown component that renders some UI when its path matches the current URL.

    - path : attribute used to slash named paths 
      - "/" 
      - "/contact"
      - "*" : used for error pages , when no path matches , this route is loaded.

    - element : attribute used to provide the component to be loaded when the path is matched with the current URL.


### Header 

- Navlink 
- 