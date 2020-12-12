const counterReducer = (state, action) => {
    switch (action) {
      case 'INCREMENT':
        return state + 1
      case 'DECREMENT':
        return state-1
        case 'NEUTRAL':
        return state=0
    }
  }

  export default counterReducer;