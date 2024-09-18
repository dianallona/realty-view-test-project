import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { ReactComponent as ArrowLeftIcon } from "../../../../assets/icons/arrow-left.svg";
import { cn } from "../../../../lib/utils";
import { useBoundStore } from "../../../../stores/useBoundStores";
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
  interval: z.number(),
  schedule: z.string(),
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

const ShowingAvailability = () => {
  const state = useBoundStore();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      interval: 30,
      schedule: "Monday",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  const handleOnClickBack = () => {
    state.setCurrentPage("setup-listing");
  };
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="px-5 md:px-7 pb-4"
      >
        <h1 className="flex items-center tracking-[-0.2px] gap-2.5 text-heading-2 xl:text-heading-4 font-bold py-4 md:pt-14 border-b border-gray-100">
          <span
            className="hidden md:block cursor-pointer hover:scale-110"
            onClick={handleOnClickBack}
          >
            <ArrowLeftIcon width={24} height={24} />
          </span>
          Setup your showing availability
        </h1>

        <FormField
          control={form.control}
          name="interval"
          render={({ field }) => (
            <FormItem className="w-full pb-4 pt-5">
              <FormLabel className="text-tokens-tertiary !text-body mb-1.5">
                Interval
              </FormLabel>
              <FormControl>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={String(field.value)}
                >
                  <SelectTrigger className="focus:!outline-gray-300 focus:!ring-1 !text-body text-black placeholder:text-input-placeholder bg-input-field">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem className="cursor-pointer" value="30">
                        30 Minutes
                      </SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <ul className="mb-5">
          {daysOfTheWeek.map((value) => (
            <li className="flex flex-col justify-between xl:flex-row xl:items-center w-full py-4 gap-2.5 xl:gap-0">
              <FormField
                control={form.control}
                name="schedule"
                render={({ field }) => (
                  <FormItem className="flex gap-1.5 w-44">
                    <FormControl>
                      <div className="flex gap-2 items-center">
                        <Switch
                          className="w-8.5 h-4"
                          checked={field.value === value}
                          onCheckedChange={() => {
                            console.log("here", value);
                            form.setValue("schedule", value);
                            form.trigger();
                          }}
                        />
                        <p className="text-body text-gray-800">{value}</p>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div
                className={cn("gap-4 w-full xl:w-fit flex", {
                  hidden: form.getValues("schedule") !== value,
                })}
              >
                <div className="relative w-full xl:w-[162px]">
                  <p className="text-body absolute top-2.5 left-2.5 text-input-label">
                    From
                  </p>
                  <Input
                    type="time"
                    className="p-2.5 !text-body flex justify-end bg-input-field text-gray-800"
                    value="09:00"
                  />
                </div>
                <div className="relative w-full xl:w-[162px]">
                  <p className="text-body absolute top-2.5 left-2.5 text-input-label">
                    To
                  </p>
                  <Input
                    type="time"
                    className="p-2.5 !text-body !text-right flex justify-end bg-input-field text-gray-800"
                    value="21:00"
                  />
                </div>
              </div>
            </li>
          ))}
        </ul>
        <Button className="!text-body py-2.5 px-4 my-4 w-full">
          Next: Setup Showing Instructions
        </Button>
      </form>
    </Form>
  );
};

export default ShowingAvailability;
