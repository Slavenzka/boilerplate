import { combineReducers } from 'redux'
import { elasticAdaptiveReducer } from 'store/reducers/elasticAdaptive'
import { uiReducer } from 'store/reducers/ui'

const rootReducer = combineReducers({
  elastic: elasticAdaptiveReducer,
  ui: uiReducer,
})

export default rootReducer