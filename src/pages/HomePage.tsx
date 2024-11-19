import React from "react";
import { Page, Text, BlockStack, InlineGrid } from "@shopify/polaris";
import CustomCard from "../components/CustomCard";
import { products } from "../data.ts";

interface HomePageProps {
  searchTerm: string;
}

const HomePage: React.FC<HomePageProps> = ({ searchTerm }) => {
  const filterProducts = (productList: typeof products.featuredProducts) => {
    if (!searchTerm?.trim()) {
      return productList;
    }

    return productList.filter((product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  const renderSection = (
    title: string,
    productList: typeof products.featuredProducts
  ) => (
    <BlockStack gap="300">
      <Text as="h2" fontWeight="bold" variant="headingLg">
        {title}
      </Text>
      <InlineGrid
        columns={{ xs: 1, sm: 2, md: 3 }}
        gap={{ xs: "200", sm: "300", md: "400" }}
      >
        {productList.map((product) => (
          <CustomCard
            key={product.id}
            id={product.id}
            title={product.title}
            description={product.description}
            image={product.image}
          />
        ))}
      </InlineGrid>
    </BlockStack>
  );

  return (
    <Page fullWidth>
      <BlockStack gap="500" align="start" as="div">
        {renderSection(
          "Featured Products",
          filterProducts(products.featuredProducts)
        )}
        {renderSection(
          "Top Categories",
          filterProducts(products.topCategories)
        )}
        {renderSection(
          "Exclusive Deals",
          filterProducts(products.exclusiveDeals)
        )}
      </BlockStack>
    </Page>
  );
};

export default HomePage;
