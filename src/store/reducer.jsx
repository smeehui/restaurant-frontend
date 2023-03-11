import { TOGGLE_SIDEBAR } from "./constants";

const initState = { isShowSidebar: true };

const reducer = (state, action, args) => {
    switch (action) {
        case TOGGLE_SIDEBAR:
            state = { ...state, isShowSidebar: !state.isShowSidebar };
            break;

        default:
            throw new Error("Invalid action	");
    }
    return state;
};

export { initState };
export default reducer;
