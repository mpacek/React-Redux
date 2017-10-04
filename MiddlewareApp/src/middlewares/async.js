export default function({ dispatch }) {
  return next => action => {
    // If action does not have payload,
    // or, the payload does not have a .then property
    // we do not care about it, send it on
    if (!action.payload || !action.payload.then) {
      return next(action);
    }

    // Make sure the acion's promose resolves
    action.payload
      .then(function(response) {
        const newAction = { ...action,  payload: response };
        dispatch(newAction);
      });
  }
}
