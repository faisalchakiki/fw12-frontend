import {createSlice} from '@reduxjs/toolkit';
import {transactionAction} from '../actions/transactions';

const initialState = {
  dateBooking: null,
  timeBooking: null,
  idMovie: null,
  idCinema: null,
  nameCinema: null,
  nameMovie: null,
  price: null,
  logoCinema: null,
  idPayMethod: null,
  seatSelected: null,
};

const transactionReducer = createSlice({
  name: 'transaction',
  initialState,
  reducers: {
    chooseMovie: (state, action) => {
      const {
        idMovie,
        idCinema,
        nameMovie,
        dateBooking,
        timeBooking,
        nameCinema,
        logoCinema,
        price,
      } = action.payload;
      return (state = {
        ...state,
        ...{
          idMovie,
          idCinema,
          nameMovie,
          dateBooking,
          timeBooking,
          nameCinema,
          logoCinema,
          price,
        },
      });
    },
    chooseSeats: (state, action) => {
      state.seatSelected = action.payload;
    },
  },
  extraReducers: build => {
    build.addCase(transactionAction.fulfilled, (state, {payload}) => {
      return (state = {
        ...state,
        ...{
          idCinema : null,
          nameMovie : null,
          dateBooking : null,
          timeBooking : null,
          nameCinema : null,
          logoCinema : null,
          price : null,
        },
      });
    });
  },
});

export const {chooseMovie, chooseSeats} = transactionReducer.actions;
export default transactionReducer.reducer;
