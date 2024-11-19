import React from "react";
import { MediaCard } from "@shopify/polaris";
import { useNavigate } from "react-router-dom";

interface CustomCardProps {
  id: number;
  title: string;
  description: string;
  image: string;
}

const CustomCard: React.FC<CustomCardProps> = ({ id, title, description, image }) => {
  const navigate = useNavigate();

  return (
    <MediaCard
      title={title}
      primaryAction={{
        content: "View Demo",
        onAction: () => navigate(`/product/${id}`),
      }}
      description={description}
      popoverActions={[{ content: "Dismiss", onAction: () => {} }]}
    >
      <img
        alt="product-image"
        width="100%"
        height="100%"
        style={{
          objectFit: "cover",
          objectPosition: "center",
        }}
        src={image}
      />
    </MediaCard>
  );
};

export default CustomCard;
