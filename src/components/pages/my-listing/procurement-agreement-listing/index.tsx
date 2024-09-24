import { FC } from "react";
import ListingImageLayout from "../../../layout/listing-image-layout";
import { TListingImages } from "../listing-details/listing-images";
import ProcurementAgreementListingComponent from "./procurement-agreement-listing-component";

interface TProcurementAgreementListing extends TListingImages {}
const ProcurementAgreementListing: FC<TProcurementAgreementListing> = ({
  onClose,
}) => {
  return (
    <ListingImageLayout onClose={onClose}>
      <ProcurementAgreementListingComponent />
    </ListingImageLayout>
  );
};

export default ProcurementAgreementListing;
