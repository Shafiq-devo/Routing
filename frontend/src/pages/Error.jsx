import MainNavigation from "../components/MainNavigation";
import PageContent from "../components/PageContent";
import { useRouteError } from "react-router-dom";

function ErrorShowing() {
    const error = useRouteError();  // ✅ Call the hook properly

    let title = "Could not fetch data";
    let message = "Not found!";

    if (error.status === 500) {  // ✅ Use comparison (===)
        // message = JSON.parse(error.data).message; // ✅ Use existing `message` variable
        message = (error.data).message; // ✅ Use existing `message` variable
    }
    if (error.status === 404) {  // ✅ Use comparison (===)
        message = JSON.parse(error.data).message; // ✅ Use existing `message` variable
    }

    return (
        <PageContent title={title}>
            <MainNavigation/>
            <p>{message}</p>
        </PageContent>
    );
}

export default ErrorShowing;
