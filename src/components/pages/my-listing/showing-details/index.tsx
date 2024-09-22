import ListingImages from "../listing-details/listing-images";

const ShowingDetails = () => {
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
          Showing Details
        </h2>
        <div className="bg-gray-50 rounded-sm py-2.5 px-3">
          <ul className="mb-5">
            <li className="py-2.5">
              <p className="text-caption text-tokens-secondary mb-1">
                Showing Instructions
              </p>
              <p className="text-body text-gray-800">
                These are showing instructions....
              </p>
            </li>
            <li className="py-2.5">
              <p className="text-caption text-tokens-secondary mb-1">
                Showing Remarks
              </p>
              <p className="text-body text-gray-800">
                These are showing remarks....
              </p>
            </li>
          </ul>
          <ul className="grid grid-cols-2 gap-5">
            <li className="py-2.5">
              <p className="text-caption text-tokens-secondary mb-1">
                Lockbox or Keypad
              </p>
              <p className="text-body text-gray-800">-</p>
            </li>
            <li className="py-2.5">
              <p>
                <p className="text-caption text-tokens-secondary mb-1">
                  Access Code
                </p>
                <p className="text-body text-gray-800">-</p>
              </p>
            </li>
            <li className="py-2.5">
              <p>
                <p className="text-caption text-tokens-secondary mb-1">
                  Occupancy Status
                </p>
                <p className="text-body text-gray-800">-</p>
              </p>
            </li>
            <li className="py-2.5">
              <p>
                <p className="text-caption text-tokens-secondary mb-1">
                  Require Agency Disclosure
                </p>
                <p className="text-body text-gray-800">-</p>
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ShowingDetails;
