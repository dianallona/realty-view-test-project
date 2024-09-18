import { FC } from "react";
import AddressCard from "./address-card";
import ListingDetailsCard from "./listing-details-card";
import ListingImages, { TListingImages } from "./listing-images";

interface TListingDetails extends TListingImages {
  onClose?: () => void;
}
const ListingDetails: FC<TListingDetails> = ({ onClose }) => {
  return (
    <div className="bg-white h-full rounded-t-xl md:rounded-none">
      <div
        className="rounded-t-xl md:rounded-xl shadow-card bg-white px-4 pt-10 md:m-5 xl:p-5 md:p-4 xl:mx-10.5 py-10 gap-5 flex flex-col overflow-y-scroll"
        style={{
          boxShadow:
            "2px -2px 6px 0px rgba(0, 0, 0, 0.05), -2px 2px 6px 0px rgba(0, 0, 0, 0.05)",
        }}
      >
        <ListingImages onClose={onClose} />
        <ListingDetailsCard />
        <AddressCard />
      </div>
    </div>
  );
};

export default ListingDetails;
