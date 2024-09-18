import { cn } from "../../../../lib/utils";
import { Card, CardContent, CardHeader, CardTitle } from "../../../ui/card";

const listingDetails = [
  {
    title: "List Price",
    description: "$3,250,000",
  },
  {
    title: "Annual Taxes",
    description: "$10,000",
  },
  {
    title: "HOA Expenses",
    description: "$2,000",
  },
  {
    title: "Other Monthly Expenses",
    description: "$500",
  },
  {
    title: "Occupancy Status",
    description: "Owner Occupied",
  },
  {
    title: "Has Lis Pendens",
    description: "No",
  },
  {
    title: "Listing Type",
    description: "Exclusive Right To Sell",
  },
  {
    title: "Sale Type",
    description: "Standard",
  },
  {
    title: "MLS Number",
    description: "-",
  },
  {
    title: "Date Listed",
    description: "December 26, 2023",
  },
  {
    title: "Listing Expiration Date",
    description: "May 24, 2024",
  },
  {
    title: "Listing Status",
    description: "Active",
  },
];
const ListingDetailsCard = () => {
  return (
    <Card className="w-full rounded-xl border border-gray-200 !shadow-none">
      <CardHeader className="border-b border-gray-200 !p-0">
        <CardTitle className="p-3 text-gray-800 text-heading font-bold">
          Listing Details
        </CardTitle>
      </CardHeader>
      <CardContent className="!px-0 !py-2">
        <ul className="grid grid-cols-3">
          {listingDetails.map((value, index) => (
            <li
              key={`listing-details-${index}`}
              className="flex flex-col gap-1 py-2.5 px-3"
            >
              <span className="text-caption text-tokens-secondary">
                {value.title}
              </span>
              <p
                className={cn("w-fit text-gray-800 text-body rounded-md", {
                  "bg-green-100 px-1 py-0.5 text-green-600":
                    value.description === "Active",
                })}
              >
                {value.description}
              </p>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default ListingDetailsCard;
