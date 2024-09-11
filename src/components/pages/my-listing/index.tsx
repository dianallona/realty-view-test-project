import ListingDetails from "./listing-details";
import SetupListing from "./setup-listing";

const MyListing = () => {
  return (
    <section className="grid md:grid-cols-2 min-h-[calc(100vh-61px)] w-full ">
      <SetupListing />
      <ListingDetails />
    </section>
  );
};

export default MyListing;
