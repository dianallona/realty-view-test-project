import { FC } from "react";
import ListingImageLayout from "../../../layout/listing-image-layout";
import { TListingImages } from "../listing-details/listing-images";
import ShowingDetailsComponent from "./showing-details-component";

interface TShowingDetails extends TListingImages {}
const ShowingDetails: FC<TShowingDetails> = ({ onClose }) => {
  return (
    <ListingImageLayout onClose={onClose}>
      <ShowingDetailsComponent />
    </ListingImageLayout>
  );
};

export default ShowingDetails;
