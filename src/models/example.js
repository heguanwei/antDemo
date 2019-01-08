
export default {

  namespace: 'example',

  state: {},

  

  effects: {
    // *fetch({ payload }, { call, put }) {  // eslint-disable-line
    //   yield put({ type: 'save' });
    // },
  },

  reducers: {
    setState(state, action) {
      return { ...state, ...action.payload };
    },
  },
  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
      // console.log(history);
      return history.listen(({pathname}) => {
        if(pathname === '/'){
          console.log("IndexPage");
          debugger
        }
      })
    },
  },

};
