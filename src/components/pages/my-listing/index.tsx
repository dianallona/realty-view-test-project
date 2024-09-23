import { useState } from "react";
import { ReactComponent as ArrowLeftIcon } from "../../../assets/icons/arrow-left.svg";
import { ReactComponent as EyeLightIcon } from "../../../assets/icons/eye-light.svg";
import { useBoundStore } from "../../../stores/useBoundStores";
import { Button } from "../../ui/button";
import { Drawer, DrawerContent, DrawerTrigger } from "../../ui/drawer";
import ConfirmCompanyBrokerage from "./confirm-company-brokerage";
import ContactInfo from "./contact-info";
import ListingAgent from "./listing-agent";
import ListingDetails from "./listing-details";
import ProcurementAgreement from "./procurement-agreement";
import ProcurementAgreementListing from "./procurement-agreement-listing";
import ScheduledDate from "./scheduled-date";
import SetupListing from "./setup-listing";
import SetupShowingAvailability from "./setup-showing-availability";
import SetupShowingInstructions from "./setup-showing-instructions";
import ShowingDetails from "./showing-details";

const MyListing = () => {
  const state = useBoundStore();
  const [isOpen, setIsOpen] = useState(false);

  const handleOnClickOpenDrawer = () => {
    setIsOpen(true);
  };

  const handleOnCloseDrawer = () => {
    setIsOpen(false);
  };

  return (
    <section className="h-[calc(100vh-61px)] w-full bg-gray-25 overflow-auto">
      <div className="hidden md:grid md:grid-cols-2 h-full">
        {state.progressState === "setup-listing" && (
          <>
            <SetupListing />
            <ListingDetails />
          </>
        )}
        {state.progressState === "setup-showing-availability" && (
          <>
            <SetupShowingAvailability />
            <ScheduledDate />
          </>
        )}
        {state.progressState === "setup-showing-instructions" && (
          <>
            <SetupShowingInstructions />
            <ShowingDetails />
          </>
        )}
        {state.progressState === "procurement-agreement" && (
          <>
            <ProcurementAgreement />
            <ProcurementAgreementListing />
          </>
        )}
        {state.progressState === "contact-info" && (
          <>
            <ContactInfo />
            <ListingAgent />
          </>
        )}
        {state.progressState === "confirm-company-brokerage" && (
          <>
            <ConfirmCompanyBrokerage />
            <ListingAgent />
          </>
        )}
      </div>
      <div className="md:hidden">
        <Drawer
          open={isOpen}
          onRelease={handleOnCloseDrawer}
          onOpenChange={setIsOpen}
        >
          <DrawerTrigger asChild>
            <div className="flex items-center justify-between px-5 pt-4">
              <span>
                <ArrowLeftIcon width={20} height={20} />
              </span>
              <Button
                variant="ghost"
                className="text-body text-gray-500 gap-0.5 !px-0 !py-0"
                onClick={handleOnClickOpenDrawer}
              >
                Preview Listing
                <span>
                  <EyeLightIcon width={16} height={16} />
                </span>
              </Button>
            </div>
          </DrawerTrigger>

          {state.progressState === "setup-listing" && <SetupListing />}
          {state.progressState === "setup-showing-availability" && (
            <SetupShowingAvailability />
          )}
          {state.progressState === "setup-showing-instructions" && (
            <SetupShowingInstructions />
          )}
          {state.progressState === "procurement-agreement" && (
            <>
              <ProcurementAgreement />
            </>
          )}
          {state.progressState === "contact-info" && <ContactInfo />}
          {state.progressState === "confirm-company-brokerage" && (
            <>
              <ConfirmCompanyBrokerage />
            </>
          )}
          <DrawerContent
            className="h-[calc(100vh-24px)] mx-2"
            style={{
              boxShadow:
                " 2px -2px 6px 0px rgba(0, 0, 0, 0.05), -2px 2px 6px 0px rgba(0, 0, 0, 0.05)",
            }}
          >
            {state.progressState === "setup-listing" && (
              <ListingDetails onClose={handleOnCloseDrawer} />
            )}
            {state.progressState === "setup-showing-availability" && (
              <ScheduledDate />
            )}
            {state.progressState === "setup-showing-instructions" && (
              <ShowingDetails />
            )}
            {state.progressState === "procurement-agreement" && (
              <ProcurementAgreementListing />
            )}
            {state.progressState === "contact-info" && <ListingAgent />}
            {state.progressState === "confirm-company-brokerage" && (
              <>
                <ListingAgent />
              </>
            )}
          </DrawerContent>
        </Drawer>
      </div>
    </section>
  );
};

export default MyListing;
