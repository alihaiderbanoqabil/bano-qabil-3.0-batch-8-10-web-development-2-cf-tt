import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//     numOfCakes: 20,
// };

// const cakeSlice = createSlice({
//   name: 'cake',
//   initialState,
//   reducers: {
//     ordered: (state) => {
//       state.numOfCakes--;
//     },
//     restocked: (state, action) => {
//       state.numOfCakes += action.payload;
//     },
//   },
// });

// const cakeSlice = createSlice({
//     initialState: {
//         numOfCakes: 20,
//     },
//     name: "cake",
//     reducers: {
//         ordered: (state, action) => {
//             state.numOfCakes--;
//         },
//         restocked: (state, action) => {
//             state.numOfCakes = state.numOfCakes + action.payload;
//         },
//         // getUser: () => {},
//     },
// });

// export default cakeSlice.reducer;
// export const cakeActions = cakeSlice.actions;


const initialState = {
    numOfCakes: 20,
};
const cakeSlice = createSlice({
    initialState: initialState,
    name: 'cake',
    reducers: {
        order1Cake: (state, action) => {
            console.log(state, 'state');
            console.log(action, 'action');

            state.numOfCakes--;
        },
        orderSpecificNumberOfCakes: (state, action) => {
            console.log(state, 'state');
            console.log(action, 'action', +action.payload);
            state.numOfCakes = state.numOfCakes - +action.payload;
        },
        restockSpecificNumberOfCakes: (state, action) => {
            state.numOfCakes = state.numOfCakes + action.payload;
        },
    }
})

export default cakeSlice.reducer;
export const { order1Cake, orderSpecificNumberOfCakes, restockSpecificNumberOfCakes } = cakeSlice.actions;
