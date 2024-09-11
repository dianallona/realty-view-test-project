import SetupListing from "./setup-listing";

const MyListing = () => {
  return (
    <section className="grid grid-cols-2 h-[calc(100vh-53px)]">
      <SetupListing />
      <div>hey</div>
    </section>
  );
};

export default MyListing;
