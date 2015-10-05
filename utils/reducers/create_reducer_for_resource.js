const arrayOfEmptyObjects = Array.apply(null, Array(20)).map(() => { return {} });

export default (actionTypes) =>
  (state = {isFetching: false, data: arrayOfEmptyObjects, pager: {}}, action) => {
    switch (action.type) {
      case actionTypes.begin: {
        return {...state,
                isFetching: true,
                data: (state.data.length !== 0) ? state.data : arrayOfEmptyObjects
               };
      }
      case actionTypes.success: {
        const { pager } = action.payload;
        const data = action.payload.result;

        return { data, pager, isFetching: false };
      }
      default:
        return state;
    }
}
