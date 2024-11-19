import React from "react";
import { AppProvider, Page, ThemeProvider } from "@shopify/polaris";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";

const App: React.FC = () => {
  const [searchValue, setSearchValue] = React.useState<string>("");

  const handleSearchChange = (value: string) => setSearchValue(value);

  return (
    <AppProvider i18n={{}}>
      <div style={{ minHeight: "100vh", color: "white" }}>
        <ThemeProvider theme="light">
          <Router>
            <Header onSearchChange={handleSearchChange} />
            <Page fullWidth>
              <Routes>
                <Route
                  path="/"
                  element={<HomePage searchTerm={searchValue} />}
                />
                <Route path="/product/:id" element={<ProductPage />} />
              </Routes>
            </Page>
          </Router>
        </ThemeProvider>
      </div>
    </AppProvider>
  );
};

export default App;
