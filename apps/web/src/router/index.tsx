import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthPage, DashboardPage } from "@pages";

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<AuthPage />} />
                <Route path="/" element={<DashboardPage />} />
            </Routes>
        </BrowserRouter>
    );
};
