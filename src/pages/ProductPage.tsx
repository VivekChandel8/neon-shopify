import React, { useCallback, useState } from "react";
import {
  Button,
  Card,
  Layout,
  Page,
  ChoiceList,
  ColorPicker,
  BlockStack,
  Box,
  Text,
  Checkbox,
} from "@shopify/polaris";
import { useParams } from "react-router-dom";
import { products } from "../data.ts";

const ProductPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  let productId: number;
  if (id) {
    productId = parseInt(id, 10);
  }

  const product = Object.values(products)
    .flat()
    .find((p) => p.id === productId);

  // State management
  const [font, setFont] = useState<string[]>(["nexa"]);
  const [color, setColor] = useState({
    hue: 120,
    brightness: 1,
    saturation: 1,
  });
  const [checked, setChecked] = useState(false);

  const handleCheckChange = useCallback(
    (newChecked: boolean) => setChecked(newChecked),
    []
  );
  const handleFontChange = useCallback((value: string[]) => setFont(value), []);


  if (!product) {
    return (
      <Page fullWidth>
        <Text variant="headingLg" as="h1">
          Product not found
        </Text>
      </Page>
    );
  }

  return (
    <Page fullWidth>
      <Layout>
        <Layout.Section>
          <Card background="bg-surface-secondary">
            <img
              alt={product.title}
              width="100%"
              height="100%"
              style={{
                objectFit: "cover",
                objectPosition: "center",
              }}
              src={product.image}
            />
          </Card>
        </Layout.Section>
        <Layout.Section variant="oneThird">
          <Card>
            <BlockStack gap="500">
              {/* Title and Description */}
              <Box>
                <Text as="h1" variant="headingLg">
                  {product.title}
                </Text>
                <Text as="p">{product.description}</Text>
              </Box>
              {/* Font Choice */}
              <Box>
                <ChoiceList
                  title="Choose a font"
                  tone="magic"
                  choices={[
                    { label: "Nexa", value: "nexa" },
                    { label: "Pixar", value: "pixar" },
                    { label: "Alkes", value: "alkes" },
                  ]}
                  selected={font}
                  onChange={handleFontChange}
                />
              </Box>
              {/* Color Picker */}
              <Box>
                <Text as="h4" id="color-picker-label" variant="headingMd">
                  Choose a color
                </Text>
                <ColorPicker onChange={setColor} color={color} />
              </Box>
              {/* Checkbox */}
              <Box>
                <Checkbox
                  label="Include Cleaning Kit"
                  checked={checked}
                  onChange={handleCheckChange}
                />
              </Box>
              {/* Add to Cart Button */}
              <Box>
                <Button variant="primary" fullWidth>
                  Add To Cart
                </Button>
              </Box>
            </BlockStack>
          </Card>
        </Layout.Section>
      </Layout>
    </Page>
  );
};

export default ProductPage;
