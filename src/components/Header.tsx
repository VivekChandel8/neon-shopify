import React from "react";
import { Icon, TextField, Text } from "@shopify/polaris";
import { SearchIcon, PersonIcon, CartIcon } from "@shopify/polaris-icons";
import { useNavigate } from "react-router-dom";
import styles from "./Header.module.css";

interface SearchProps {
  onSearchChange: (value: string) => void;
}

const Header: React.FC<SearchProps> = ({ onSearchChange }) => {
  const [searchValue, setSearchValue] = React.useState<string>("");
  const navigate = useNavigate();

  const handleSearchChange = (value: string) => {
    setSearchValue(value);
    onSearchChange(value);
  };

  return (
    <div>
      <header className={styles.header}>
        <div onClick={() => navigate("/")} className={styles.brand}>
          <Text as="h1" variant="headingLg">
            Neon Store
          </Text>
        </div>

        {/* Search Bar */}
        <div className={styles.searchBar}>
          <TextField
            prefix={<Icon source={SearchIcon} />}
            placeholder="Search products"
            value={searchValue}
            onChange={handleSearchChange}
            autoComplete="on"
            label=""
          />
        </div>

        {/* Icons */}
        <div className={styles.iconGroup}>
          <div className={styles.icon}>
            <Icon tone="base" source={PersonIcon} />
          </div>
          <div className={styles.icon}>
            <Icon tone="base" source={CartIcon} />
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
