import { FC } from "react";
import ListingImageLayout from "../../../layout/listing-image-layout";
import { TListingImages } from "../listing-details/listing-images";
import ListingAgentComponent from "./listing-agent-component";

interface TListingAgent extends TListingImages {}
const ListingAgent: FC<TListingAgent> = ({ onClose }) => {
  return (
    <ListingImageLayout onClose={onClose}>
      <ListingAgentComponent />
    </ListingImageLayout>
  );
};

export default ListingAgent;
