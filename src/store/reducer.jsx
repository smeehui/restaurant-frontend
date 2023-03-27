import useLocalStorage from "~/hooks/useLocalStorage";
import { API_CALLED, CALLING_API, TOGGLE_SIDEBAR } from "./constants";

const { get, save } = useLocalStorage();
const initState = {
    isShowSidebar: get("isShowSidebar") || false,
    isCallingApi: false,
};
console.log(initState);

const reducer = (state, action, args) => {
    switch (action) {
        case TOGGLE_SIDEBAR:
            state = { ...state, isShowSidebar: !state.isShowSidebar };
            save("isShowSidebar", state.isShowSidebar);
            break;
        case CALLING_API:
            state = { ...state, isCallingApi: true };
            break;
        case API_CALLED:
            state = { ...state, isCallingApi: false };
            break;

        default:
            throw new Error("Invalid action	");
    }
    return state;
};

export { initState };
export default reducer;
