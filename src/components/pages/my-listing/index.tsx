import { useState } from "react";
import { ReactComponent as ArrowLeftIcon } from "../../../assets/icons/arrow-left.svg";
import { ReactComponent as EyeLightIcon } from "../../../assets/icons/eye-light.svg";
import { useBoundStore } from "../../../stores/useBoundStores";
import { Button } from "../../ui/button";
import { Drawer, DrawerContent, DrawerTrigger } from "../../ui/drawer";
import { ScrollArea } from "../../ui/scroll-area";
import ListingDetails from "./listing-details";
import ScheduledDate from "./scheduled-date";
import SetupListing from "./setup-listing";
import ShowingAvailability from "./showing-availability";

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
    <section className="min-h-[calc(100vh-61px)] w-full bg-gray-25">
      <div className="hidden md:grid md:grid-cols-2">
        {state.progressState === "setup-listing" && (
          <>
            <SetupListing />
            <ListingDetails />
          </>
        )}
        {state.progressState === "showing-availability" && (
          <>
            <ShowingAvailability />
            <ScheduledDate />
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
                <ArrowLeftIcon width={24} height={24} />
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
          {state.progressState === "showing-availability" && (
            <ShowingAvailability />
          )}
          <DrawerContent
            className="h-[calc(100vh-24px)] mx-2"
            style={{
              boxShadow:
                " 2px -2px 6px 0px rgba(0, 0, 0, 0.05), -2px 2px 6px 0px rgba(0, 0, 0, 0.05)",
            }}
          >
            <ScrollArea>
              {state.progressState === "setup-listing" && (
                <ListingDetails onClose={handleOnCloseDrawer} />
              )}
              {state.progressState === "showing-availability" && (
                <ScheduledDate />
              )}
            </ScrollArea>
          </DrawerContent>
        </Drawer>
      </div>
    </section>
  );
};

export default MyListing;
