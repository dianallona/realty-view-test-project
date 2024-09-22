import { ReactComponent as ChevronDownIcon } from "../../../../assets/icons/chevron-down.svg";
import { ReactComponent as MailIcon } from "../../../../assets/icons/mail.svg";
import { ReactComponent as MessageDotsSquareIcon } from "../../../../assets/icons/message-dots-square.svg";
import { ReactComponent as PhoneIcon } from "../../../../assets/icons/phone.svg";
import profileImg from "../../../../assets/images/person.png";
import { Button } from "../../../ui/button";
import ListingImages from "../listing-details/listing-images";

const ListingAgent = () => {
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
                <p className="text-xl font-bold">Juanita Florencia</p>
                <p className="text-neutral-500 text-body flex gap-1.5">
                  <span>
                    <PhoneIcon />
                  </span>{" "}
                  305-394-0000
                </p>
                <p className="text-neutral-500 text-body flex gap-1.5">
                  <span>
                    <MailIcon />
                  </span>{" "}
                  juanita@axeresidential.com
                </p>
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
          <div className="flex bg-brand-25 p-3 rounded-b-xl items-center">
            <div className="rounded-sm bg-skeleton w-5 h-5 mr-2" />
            <div className="flex-1 rounded-2xl bg-skeleton h-3 mr-1" />
            <ChevronDownIcon width={14} height={14} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListingAgent;
