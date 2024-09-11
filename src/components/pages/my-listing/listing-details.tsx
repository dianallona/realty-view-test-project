import { ReactComponent as BookmarkIcon } from "../../../assets/icons/bookmark.svg";
import { ReactComponent as MoreVerticalIcon } from "../../../assets/icons/more-vertical.svg";
import { ReactComponent as ShareIcon } from "../../../assets/icons/share.svg";
import { ReactComponent as XIcon } from "../../../assets/icons/x.svg";
import Listing1 from "../../../assets/images/listing_1.png";
import Listing2 from "../../../assets/images/listing_2.png";
import Listing3 from "../../../assets/images/listing_3.png";
import { Button } from "../../ui/button";
import { Carousel, CarouselContent, CarouselItem } from "../../ui/carousel";
import AddressCard from "./address-card";
import ListingDetailsCard from "./listing-details-card";

const carouselImages = [
  {
    src: Listing1,
    alt: "Listing 1",
  },
  {
    src: Listing2,
    alt: "Listing 2",
  },
  {
    src: Listing3,
    alt: "Listing 3",
  },
];

const ListingDetails = () => {
  return (
    <section className="px-16 py-6 grid gap-5">
      <div>
        <div className="flex justify-between px-8 pt-3">
          <div>
            <h1 className="text-gray-800 text-heading-2 font-bold">
              901 Stillwater Dr
            </h1>
            <p className="text-body text-gray-600">Miami Beach, FL 33141</p>
          </div>
          <div className="flex gap-3 items-center">
            <div className="p-1 cursor-pointer hover:bg-gray-100 rounded-full">
              <BookmarkIcon />
            </div>
            <div className="p-1 cursor-pointer hover:bg-gray-100 rounded-full">
              <MoreVerticalIcon />
            </div>
            <div className="p-1 cursor-pointer hover:bg-gray-100 rounded-full">
              <XIcon />
            </div>
          </div>
        </div>

        <Carousel className="w-full py-5">
          <CarouselContent>
            {carouselImages.map((value, index) => (
              <CarouselItem key={index} className="max-w-[226px] h-[195px]">
                <img
                  src={value.src}
                  alt={value.alt}
                  className="w-full h-full object-cover rounded-lg"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <div className="flex justify-between pb-2">
          <div className="flex gap-4">
            <Button>Schedule a Showing</Button>
            <Button
              variant="outline"
              className="border !border-gray-300 !text-gray-300"
              disabled
            >
              Submit an Offer
            </Button>
          </div>
          <p className="flex items-center text-accent-purple text-body gap-1 cursor-pointer hover:font-semibold">
            <span>
              <ShareIcon />
            </span>
            Share
          </p>
        </div>
      </div>
      <ListingDetailsCard />
      <AddressCard />
    </section>
  );
};

export default ListingDetails;
