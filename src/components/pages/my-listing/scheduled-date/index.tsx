import { FC } from "react";
import ListingImageLayout from "../../../layout/listing-image-layout";
import { TListingImages } from "../listing-details/listing-images";
import ScheduledDateComponent from "./scheduled-date-component";

interface TScheduledDate extends TListingImages {}
const ScheduledDate: FC<TScheduledDate> = ({ onClose }) => {
  return (
    <ListingImageLayout onClose={onClose}>
      <ScheduledDateComponent />
    </ListingImageLayout>
  );
};

export default ScheduledDate;
