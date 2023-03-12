import useLocalStorage from "~/hooks/useLocalStorage";
import { TOGGLE_SIDEBAR } from "./constants";

const { get, save } = useLocalStorage();
const initState = { isShowSidebar: get("isShowSidebar") || false };
console.log(initState);

const reducer = (state, action, args) => {
    switch (action) {
        case TOGGLE_SIDEBAR:
            state = { ...state, isShowSidebar: !state.isShowSidebar };
            save("isShowSidebar",state.isShowSidebar)
            break;

        default:
            throw new Error("Invalid action	");
    }
    return state;
};

export { initState };
export default reducer;
