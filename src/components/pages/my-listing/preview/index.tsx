import { useState } from "react";
import ReactConfetti from "react-confetti";
import { createPortal } from "react-dom";
import useWindowSize from "react-use/lib/useWindowSize";
import { ReactComponent as ArrowLeft } from "../../../../assets/icons/arrow-left.svg";
import { useBoundStore } from "../../../../stores/useBoundStores";
import ListingImageLayout from "../../../layout/listing-image-layout";
import { Button } from "../../../ui/button";
import ListingAgentComponent from "../listing-agent/listing-agent-component";
import AddressCard from "../listing-details/address-card";
import ListingDetailsCard from "../listing-details/listing-details-card";
import ProcurementAgreementListingComponent from "../procurement-agreement-listing/procurement-agreement-listing-component";
import ScheduledDateComponent from "../scheduled-date/scheduled-date-component";
import ShowingDetailsComponent from "../showing-details/showing-details-component";
import ListingUpdated from "./listing-updated";

const Preview = () => {
  const state = useBoundStore();
  const { width, height } = useWindowSize();
  const [isDone, setIsDone] = useState(false);

  const handleOnClickDone = () => {
    setIsDone(true);
  };

  const handleOnClickBackToEdit = () => {
    state.setCurrentPage("confirm-company-brokerage");
  };
  return (
    <>
      {isDone ? (
        <ListingUpdated />
      ) : (
        <ListingImageLayout className="[&>div]:md:max-w-[405px] [&>div]:xl:max-w-[620px] [&>div]:w-full [&>div]:mx-auto">
          <ReactConfetti
            width={width}
            height={height}
            recycle={false}
            numberOfPieces={500}
          />
          <div className="grid gap-5 relative">
            <ListingDetailsCard />
            <AddressCard />
            <ScheduledDateComponent />
            <ShowingDetailsComponent />
            <ProcurementAgreementListingComponent />
            <ListingAgentComponent />
            {createPortal(
              <div
                className="flex flex-col md:flex-row-reverse md:justify-between gap-1.5 sticky bottom-0 bg-white p-5"
                style={{ boxShadow: "0px -2px 6px 0px rgba(0, 0, 0, 0.05)" }}
              >
                <Button
                  variant="default"
                  className="!text-body md:!max-w-[150px] w-full"
                  onClick={handleOnClickDone}
                >
                  Done
                </Button>
                <Button
                  variant="outline"
                  className="!text-body md:!max-w-[150px] w-full"
                  onClick={handleOnClickBackToEdit}
                >
                  <span className="mr-1.5">
                    <ArrowLeft width={12} height={12} />
                  </span>
                  Back to edit
                </Button>
              </div>,
              document.body
            )}
          </div>
        </ListingImageLayout>
      )}
    </>
  );
};

export default Preview;
