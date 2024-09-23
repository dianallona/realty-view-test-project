import { FC } from "react";
import ListingImageLayout from "../../../layout/listing-image-layout";
import { TListingImages } from "../listing-details/listing-images";

interface TShowingDetails extends TListingImages {}
const ShowingDetails: FC<TShowingDetails> = ({ onClose }) => {
  return (
    <ListingImageLayout onClose={onClose}>
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
    </ListingImageLayout>
  );
};

export default ShowingDetails;
