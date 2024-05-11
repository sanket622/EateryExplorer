#parcel
-- Dev Build
-- Local Server
-- HMR => Hot Module Replacement
-- File Watching Algorithm => written in c++
-- caching => Faster Builds
-- Most expensive thing in our browser is to load image,parcel do image optimization for us.
-- minification
-- bundling
-- compress
-- parcel is one of reasons to make react fast and is  not doing on its own ,it has some libraries and manages them.
-- consistent Hashing
-- code splitting
-- Differential Bundling => helps in running our apps on older browsers as well.
-- Diagnostic
-- Error Handling
-- Https
-- Tree Shaking => remove unused code
-- Different dev and prod bundles

// Namaste Food 

/**
 * Header
 *  - Logo
 *  - Nav items
 * Body
 * - Search
 * - RestaurantContainer
 * - RestaurantCard 
 *   - image
 *   - name of res,star Rating,cuisines
 * Footer
 * - Copyright
 * - Links
 * - Address
 * - contact
 */


Two types of Export/Import

- Default Export/Import

export default component;
import component from "path";

- Named Export/Import

export const Component;
import {component} from "path";


# React Hooks
(Normal JS utility functions)
- useState() => superpowerful state variable in react 
- useEffect() => 
 
2 types of routing
- client side routing
- server side routing


- React context
- props drilling

# Redux Toolkit
- Install @reduxjs.toolkit and react-redux
- Build our store
- connect our store to our app
- slice(cartSlice)
- dispatch(action)
- Selector