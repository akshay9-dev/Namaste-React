# Namaste React

# Parcel

- Dev Build
  -Local Server
- HMR = Hot Module Replacement
- File Watching algorithm - written in c++
- Catching - Faster Build
- Image Optimization
- Minification
- Bundling
- Compress
- Consistent Hashing
- Code Splitting
- Differential Bundling- support other browswes
- Diagnostic
- Error Handling
- HTTPs
- Tree Shaking - remove unused code
- Different dev and prod bundles

# food oedering app

/\*\*

- Header
- - LOGO
- - Nav Items
- Body
- - Search
- - RestaurantContainer
- - ReataurantCard
-      -RestaurantCard
-          -image
-          -Nameof restaurant, Star ratings, cuisine, delivery Time
- footer
- - copyright
- - Link
- -contact
  \*/

Two types of Export/Import

1.  Default Export: Used when there is only one thing to export.

export defult <name of variable/component>
import component from "<file_path>"

2.  Named Export/Import: Used when we have multiple things to export.

export const componnt
import {component} from "<file_path>"

You can use Named export/import even when there is only one file/thing to export.

# React Hooks

They are normal JS function which are wrote by Facebook developers.
There are two most important hooks,

1.  Usestate() : used to make superpowerful state variables in react
2.  useEffect

# Reconciliation Algorithm(React fiber):

# diff algorithm:

Whenever theree is a change in state variabl, react will find out the difference between the virtual dom of bothe updated stat and before update and re render the component(that is it will update the dom).
It find out the difference between virtual DOM's of updated and initial variabl and changes actual DOM. It will calculate the difference and it will then actually updated the DOM on every render cycle. We know that the react creates the object when we create the element or component. So react will first find the differencebetween the two objects and after that it will updated thye actual dom. Where the objects are virtual dom.

Whenever someone ask you why react is fast say that because react does efficient dom manipulation because it has virtual dom. it find outs the difference between the virtualdoms by comparing it and thyen updates the actual dom(that is UI) using diff agorithm .

When ever the state vriable updated react keep eye on it and triggers differ algorithm.

# 2 Types of Routing in web apps

1. Client Side Routing:
   In this the routing is handled on the browser side itself without making a netwrok call to the server.
2. Servr Side Routing:
   In this we make make a request to the server/a network call to the server and the server returns the new HTML pge.
