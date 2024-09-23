import { FC, PropsWithChildren } from "react";
import ListingImages, {
  TListingImages,
} from "../pages/my-listing/listing-details/listing-images";

interface TListingImagesLayout extends TListingImages {}

const ListingImageLayout: FC<PropsWithChildren<TListingImagesLayout>> = ({
  children,
  onClose,
}) => {
  return (
    <div className="bg-white h-full">
      <div
        className="mx-0 pt-10 px-4 md:mt-5 xl:my-5 md:mx-5 xl:mx-10.5 md:p-5 rounded-xl h-full md:h-fit !bg-white"
        style={{
          boxShadow:
            "2px -2px 6px 0px rgba(0, 0, 0, 0.05), -2px 2px 6px 0px rgba(0, 0, 0, 0.05)",
        }}
      >
        <ListingImages onClose={onClose} />
        {children}
      </div>
    </div>
  );
};

export default ListingImageLayout;
