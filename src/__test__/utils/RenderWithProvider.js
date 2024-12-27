import { MemoryRouter} from "react-router-dom";
import { Provider } from "react-redux";
import { Store } from "../../Redux/Store/Store";
import { render } from "@testing-library/react";

const RenderWithProvider = (children) => {
    return {
        ...render(
            <Provider store={Store}>
              <MemoryRouter initialEntries={["/", "/"]}>
                {children}
              </MemoryRouter>
            </Provider>
        )
    }
}

export default RenderWithProvider
