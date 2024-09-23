import ListingImageLayout from "../../../layout/listing-image-layout";

const ProcurementAgreementListing = () => {
  return (
    <ListingImageLayout>
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
    </ListingImageLayout>
  );
};

export default ProcurementAgreementListing;
