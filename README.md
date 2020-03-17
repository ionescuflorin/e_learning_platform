# 1.Planning your app
1.1.Create a mockup
1.2.Break the UI into components
1.3.Arrange all components in a hierarchy
App
|__Header
| |__Logo
|__Search bar
| |__Input field
| |__Button
|__Card
| |__Weather details
|   |__Icon
|   |__Temperature
|   |__Description
|   |__Date
|__Footer
| |__Logo
1.4 Define where state should live


2. Organizing our project
2.1 Folder structure
Elements
Buttons, Icons, Inputs, etc. — all those are elements which are used over and over again. They are low-level items, reused in multiple components.
Components
Even though almost everything is called a component in React, I use a more precise definition for the term in my folder structure.
Containers
As a third and last type of component, there are containers. Containers are our state-managing components.

2.2 Class-based vs. functional components
2.3 CSS modules or SASS

3. Building the app
3.1 Build a static version of your application
3.2 Identify and implement the minimal state your app needs
3.3 Add functions to mutate state and thus make the UI interactive


# 2. Functionalities
* Layout Anonymous
    * *Header*
      * offer bar
      * nav bar
      * hero image
    * *Main-1*
      * marketing banner
    * *Main-2*
      * categories
      * final CTA
    * *Main-3*
      * used by
    * *Footer*
      * nav
      * languages

# 3. Tech stack
-   node-sass
-   css lib (flexbox grid)
-   react