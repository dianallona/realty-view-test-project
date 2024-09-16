import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { ReactComponent as ArrowLeftIcon } from "../../../../assets/icons/arrow-left.svg";
import { Button } from "../../../ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../../ui/form";
import { Input } from "../../../ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../ui/select";
import { Switch } from "../../../ui/switch";

const formSchema = z.object({
  interval: z.string(),
  schedule: z.string(),
});

const ShowingAvailability = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      interval: "",
      schedule: "",
    },
  });

  const daysOfTheWeek = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="px-7 pb-4">
        <h1 className="text-xl md:text-heading-3 font-bold py-2.5 flex gap-4 items-center">
          <span>
            <ArrowLeftIcon width={24} height={24} />
          </span>
          Setup your showing availability
        </h1>
        <FormField
          control={form.control}
          name="interval"
          render={({ field }) => (
            <FormItem className="w-full py-3 md:py-3">
              <FormLabel className="text-tokens-tertiary !text-caption mb-1.5">
                Interval
              </FormLabel>
              <FormControl>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <SelectTrigger className="focus:!outline-gray-300 focus:!ring-1 !text-caption text-input-placeholder bg-input-field">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem className="cursor-pointer" value="Sample 1">
                        Sample 1
                      </SelectItem>
                      <SelectItem className="cursor-pointer" value="Sample 2">
                        Sample 2
                      </SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <ul className="pb-2.5">
          {daysOfTheWeek.map((value) => (
            <li className="flex items-center w-full py-2.5">
              <div className="flex gap-1.5 w-44">
                <Switch className="w-8.5 h-4" />
                <p className="text-caption text-gray-800">{value}</p>
              </div>
              <div className="flex gap-3 w-full">
                <div className="relative w-full">
                  <p className="text-caption absolute top-2.5 left-2.5 text-input-label">
                    From
                  </p>
                  <Input
                    type="time"
                    className="p-2.5 !text-caption !text-right flex justify-end bg-input-field text-gray-800"
                    defaultValue="09:00"
                  />
                </div>
                <div className="relative w-full">
                  <p className="text-caption absolute top-2.5 left-2.5 text-input-label">
                    To
                  </p>
                  <Input
                    type="time"
                    className="p-2.5 !text-caption !text-right flex justify-end bg-input-field text-gray-800"
                    defaultValue="21:00"
                  />
                </div>
              </div>
            </li>
          ))}
        </ul>
        <div className="flex gap-4.5 justify-end pt-2.5">
          <Button variant="outline" className="!text-caption">
            Back
          </Button>
          <Button className="!text-caption">Next</Button>
        </div>
      </form>
    </Form>
  );
};

export default ShowingAvailability;
