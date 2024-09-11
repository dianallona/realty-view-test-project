import ListingDetails from "./listing-details";
import SetupListing from "./setup-listing";

const MyListing = () => {
  return (
    <section className="grid grid-cols-2 h-[calc(100vh-61px)]">
      <SetupListing />
      <ListingDetails />
    </section>
  );
};

export default MyListing;
