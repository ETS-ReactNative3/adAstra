import { combineReducers } from "redux";
import CosmicObjectsReducer from "./cosmic_objects_reducer";
import calendarsReducer from "./calendar_reducer";
import PostReducer from "./posts_reducer";

export default combineReducers({
  calendars: calendarsReducer,
  cosmicObjects: CosmicObjectsReducer,
  posts: PostReducer
});
