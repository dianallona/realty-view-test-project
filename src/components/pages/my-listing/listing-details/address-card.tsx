import { Card, CardContent, CardHeader, CardTitle } from "../../../ui/card";

const address = [
  {
    title: "Address 1",
    description: "901 Stillwater Dr",
  },
  {
    title: "Address 2 / Unit",
    description: "-",
  },
  {
    title: "Neighborhood",
    description: "-",
  },
  {
    title: "City",
    description: "Miami Beach",
  },
  {
    title: "State",
    description: "FL",
  },
  {
    title: "Zipcode",
    description: "33141",
  },
];

const AddressCard = () => {
  return (
    <Card className="w-full rounded-xl border border-gray-200 !shadow-none">
      <CardHeader className="border-b border-gray-200 !p-0">
        <CardTitle className="p-3 text-gray-800 text-heading font-bold">
          Address
        </CardTitle>
      </CardHeader>
      <CardContent className="!px-0 !py-2">
        <ul className="grid grid-cols-3">
          {address.map((value, index) => (
            <li key={`listing-details-${index}`} className="py-2.5 px-3">
              <p className="flex flex-col gap-1 text-gray-800 text-body">
                <span className="text-caption text-tokens-secondary">
                  {value.title}
                </span>
                {value.description}
              </p>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default AddressCard;
