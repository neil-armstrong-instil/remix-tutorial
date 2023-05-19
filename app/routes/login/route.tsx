import {loginPageLoader} from "~/routes/login/server/loader/LoginPageLoader";
import {loginPageAction} from "~/routes/login/server/actions/LoginPageAction";
import {LoginPage} from "~/routes/login/view/LoginPage";
import {loginPageMeta} from "~/routes/login/view/meta/LoginPageMeta";

export const loader = loginPageLoader;
export const action = loginPageAction;

export const meta = loginPageMeta;
export default LoginPage;
