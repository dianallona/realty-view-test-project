import { useBoundStore } from "../../../../stores/useBoundStores";
import { Button } from "../../../ui/button";

const ListingUpdated = () => {
  const state = useBoundStore();
  const handleOnClickGoToApp = () => {
    state.setCurrentPage("setup-listing");
  };

  return (
    <div className="w-full h-full flex items-center justify-center px-5">
      <div
        className="flex flex-col justify-center p-5 max-h-[348px] md:max-w-[536px] md:max-h-[348px] w-full h-full rounded-xl my-auto"
        style={{
          boxShadow:
            "2px -2px 6px 0px rgba(0, 0, 0, 0.05), -2px 2px 6px 0px rgba(0, 0, 0, 0.05)",
        }}
      >
        <h1 className="mb-2 text-center text-heading-3 font-bold text-gray-800 xl:text-heading-4">
          Your listing updated!
        </h1>
        <p className="mb-5 text-center text-gray-650 xl:text-heading">
          The message about next.
        </p>
        <Button
          className="!text-body !p-5 my-4 mx-auto"
          onClick={handleOnClickGoToApp}
        >
          Go to app
        </Button>
      </div>
    </div>
  );
};

export default ListingUpdated;
