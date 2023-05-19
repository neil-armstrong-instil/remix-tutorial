import {joinPageLoader} from "~/routes/join/server/loader/JoinPageLoader";
import {joinPageAction} from "~/routes/join/server/actions/JoinPageAction";
import {JoinPage} from "~/routes/join/view/JoinPage";
import {joinPageMeta} from "~/routes/join/view/meta/JoinPageMeta";

export const loader = joinPageLoader;
export const action = joinPageAction;

export const meta = joinPageMeta;
export default JoinPage;