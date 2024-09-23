import { FC } from "react";
import ListingImageLayout from "../../../layout/listing-image-layout";
import AddressCard from "./address-card";
import ListingDetailsCard from "./listing-details-card";
import { TListingImages } from "./listing-images";

interface TListingDetails extends TListingImages {}
const ListingDetails: FC<TListingDetails> = ({ onClose }) => {
  return (
    <ListingImageLayout onClose={onClose}>
      <ListingDetailsCard />
      <AddressCard />
    </ListingImageLayout>
  );
};

export default ListingDetails;
