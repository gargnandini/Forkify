// Global app controller//

import str from './models/Search';
//import { add, multiply, ID} from './views/searchView';
import * as searchView from './views/searchView';

console.log(`Using imported functions! ${searchView.add(searchView.ID, 2)} and ${searchView.multiply(searchView.ID, 2)}, ${str}`);