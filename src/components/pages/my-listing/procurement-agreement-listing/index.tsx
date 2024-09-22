import ListingImages from "../listing-details/listing-images";

const ProcurementAgreementListing = () => {
  return (
    <div className="bg-white">
      <div
        className="mx-0 pt-10 pb-4 px-4 md:mt-5 xl:my-5 md:mx-5 xl:mx-10.5 md:p-5 rounded-xl h-fit !bg-white"
        style={{
          boxShadow:
            "2px -2px 6px 0px rgba(0, 0, 0, 0.05), -2px 2px 6px 0px rgba(0, 0, 0, 0.05)",
        }}
      >
        <ListingImages />
        <h2 className="text-gray-800 text-heading font-bold py-3">
          Procurement Agreement
        </h2>
        <div className="bg-gray-50 rounded-sm p-2.5 my-3">
          <p className="text-body text-tokens-secondary">
            For the successful procurement of a Buyer for my listing,{" "}
            <strong className="text-gray-800">
              21 CENTURY PROPERTIES OF N Y AND BUILDERS INC
            </strong>{" "}
            is willing to pay{" "}
            <strong className="text-gray-800">123 NAP, LLC $200</strong> of the
            purchase price upon the successful closing of the transaction.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProcurementAgreementListing;
