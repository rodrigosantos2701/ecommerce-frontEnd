import { createStore } from 'redux';

let creditCardHistory = []
let checkOutHistory = []
let history = []
let list = []
let newData = []


const INITIAL_STATE = {
  data: [],
  checkout: {},
  creditCardData: {},
  activeButtonDisable: true,
  pix: true,

};

function productsReducer(state = INITIAL_STATE, action) {
  switch (action.type) {

    case 'ADD_PRODUCT':
      return {
          ...state,
        data: [...state.data, action ]
    }
    break;


    case 'DELETE_PRODUCT':
      return {
        ...state,
        data: state.data.filter((data, index) => data.id !== action.payload)
      }
      break;

    case 'ADD_CHECKOUT':
      state = {
        ...state,
      }
      let checkOutHistory = action
      return { ...state, checkout: checkOutHistory }
      break;

    case 'ADD_CREDIT_CARD':
      state = {
        ...state,
      }
      let creditCardHistory = action
      return { ...state, creditCardData: creditCardHistory }
      break;

    case 'SET_ACTIVE_BUTTON':
      return { ...state, activeButtonDisable: action.payload }
      break;

    case 'SET_PIX':
      return { ...state, pix: action.payload }
      break;

    case 'ADD_QUANTITY':
      let index = state.data.findIndex((data => data.id == action.id));
      newData = [...state.data];
      newData[index].purchase = action.purchase
      return { ...state, data: newData }
      break;
  
    break;
    
    case 'REMOVE_QUANTITY':
      let objIndex = state.data.findIndex((data => data.id == action.id));
      newData = [...state.data];
      newData[objIndex].purchase = action.purchase
      return { ...state, data: newData }
      break;
  
    default:
      return state;

  }
}



const store = createStore(productsReducer);

export default store;