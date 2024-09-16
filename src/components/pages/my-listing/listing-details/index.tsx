import AddressCard from "./address-card";
import ListingDetailsCard from "./listing-details-card";
import ListingImages from "./listing-images";

const ListingDetails = () => {
  return (
    <div className="px-16 py-6 md:gap-5 hidden md:flex md:flex-col">
      <ListingImages />
      <ListingDetailsCard />
      <AddressCard />
    </div>
  );
};

export default ListingDetails;
