import { useState } from "react";
import { ReactComponent as ChevronDownIcon } from "../../../../assets/icons/chevron-down.svg";
import { ReactComponent as ChevronUpIcon } from "../../../../assets/icons/chevron-up.svg";
import { ReactComponent as MailIcon } from "../../../../assets/icons/mail.svg";
import { ReactComponent as MessageDotsSquareIcon } from "../../../../assets/icons/message-dots-square.svg";
import { ReactComponent as PhoneIcon } from "../../../../assets/icons/phone.svg";
import profileImg from "../../../../assets/images/person.png";
import SampleCompanyLogo from "../../../../assets/images/sample-company-logo.png";
import { cn } from "../../../../lib/utils";
import { useBoundStore } from "../../../../stores/useBoundStores";
import ListingImageLayout from "../../../layout/listing-image-layout";
import { Button } from "../../../ui/button";

const ListingAgent = () => {
  const state = useBoundStore();
  const [open, setIsOpen] = useState(true);

  const handleOnClickOpenAccordion = () => {
    setIsOpen((value) => !value);
  };
  return (
    <ListingImageLayout>
      <div
        className="bg-white rounded-xl my-3"
        style={{
          boxShadow:
            "0px -1px 3px 0px rgba(16, 24, 40, 0.08), 0px 1px 3px 0px rgba(16, 24, 40, 0.08)",
        }}
      >
        <p className="text-body font-bold p-3">Listing Agent</p>
        <div className="flex flex-col gap-2 p-3 xl:flex-row xl:justify-between">
          <div className="flex gap-2">
            <img
              src={profileImg}
              alt="profile-img"
              className="rounded-full w-20 h-20"
            />
            <div className="grid gap-1">
              <p className="text-xl font-bold truncate">Juanita Florencia</p>
              <div className="flex gap-1.5 truncate">
                <span>
                  <PhoneIcon />
                </span>{" "}
                <p className="text-neutral-500 text-body truncate">
                  305-394-0000
                </p>
              </div>
              <div className="flex gap-1.5 truncate">
                <span>
                  <MailIcon />
                </span>{" "}
                <p className="text-neutral-500 text-body truncate">
                  juanita@axeresidential.com
                </p>
              </div>
            </div>
          </div>

          <Button
            variant="outline"
            className="!text-body border !border-secondary-border rounded-md w-full xl:w-fit text-accent-purple flex gap-1.5"
          >
            <span>
              <MessageDotsSquareIcon />
            </span>
            Message Juanita
          </Button>
        </div>
        <div
          className={cn("flex bg-brand-25 p-3 rounded-b-xl items-center", {
            hidden: state.progressState === "confirm-company-brokerage",
          })}
        >
          <div className="rounded-sm bg-skeleton w-5 h-5 mr-2" />
          <div className="flex-1 rounded-2xl bg-skeleton h-3 mr-1" />
          <ChevronDownIcon width={14} height={14} />
        </div>
        <div
          className={cn(
            "bg-brand-25 p-3 rounded-b-xl items-center cursor-pointer group",
            {
              hidden: state.progressState !== "confirm-company-brokerage",
            }
          )}
          onClick={handleOnClickOpenAccordion}
        >
          <div
            className={cn("flex items-center w-full h-[22px]", {
              "mb-2": open,
            })}
          >
            <img
              src={SampleCompanyLogo}
              alt="sample-company-logo"
              className="rounded-sm mr-2"
              width={20}
              height={20}
            />
            <p className="truncate h-full text-body text-neutral-500 text-ellipsis group-hover:font-bold">
              21 CENTURY PROPERTIES OF NY AND BUILDERS INC
            </p>
            <span className="w-3.5 h-3.5 ml-auto">
              {open ? (
                <ChevronUpIcon width={14} height={14} />
              ) : (
                <ChevronDownIcon width={14} height={14} />
              )}
            </span>
          </div>
          <div
            className={cn("grid gap-2", {
              hidden: !open,
            })}
          >
            <p className="text-body text-neutral-500">Miami Beach, FL</p>
            <p className="text-body text-neutral-500 flex">
              <span className="mr-1.5">
                <PhoneIcon width={16} height={16} />
              </span>
              305-394-7926
            </p>
            <p className="text-body text-neutral-500 flex">
              <span className="mr-1.5">
                <MailIcon width={16} height={16} />
              </span>
              christine@agentcenturyny.com
            </p>
          </div>
        </div>
      </div>
    </ListingImageLayout>
  );
};

export default ListingAgent;
