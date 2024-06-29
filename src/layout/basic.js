import { StrictMode } from "react";
import { Outlet } from "react-router-dom";
import Header from "./header";
import Footer from "./footer";

const Basic = () => {
    return (
        <StrictMode>
            <div className="d-flex flex-column min-vh-100">
                <Header />
                <br></br>
                <main className="flex-grow-1">
                    <Outlet />
                </main>
                <Footer />
            </div>
        </StrictMode>
    );
}
export default Basic;
