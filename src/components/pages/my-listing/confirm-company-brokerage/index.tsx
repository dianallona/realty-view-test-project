import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { ReactComponent as ArrowLeftIcon } from "../../../../assets/icons/arrow-left.svg";
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

const formSchema = z.object({
  companyName: z.string(),
  address: z.string(),
  unit: z.number(),
  city: z.string(),
  state: z.string(),
  country: z.string(),
  zipCode: z.string(),
  firstName: z.string(),
  lastName: z.string(),
  email: z.string(),
  phoneNumber: z.string(),
});

const ConfirmCompanyBrokerage = () => {
  const state = useBoundStore();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      companyName: "",
      address: "",
      unit: 1,
      city: "",
      state: "",
      country: "",
      zipCode: "",
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    state.setCurrentPage("contact-info");
  };

  const handleOnClickBack = () => {
    state.setCurrentPage("setup-showing-instructions");
  };
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="px-5 md:px-7 xl:px-16 2xl:px-36 pb-4"
      >
        <h1 className="mb-5 flex items-center tracking-[-0.2px] gap-2.5 text-heading-2 xl:text-heading-3 font-bold py-4 md:pt-14 border-b border-gray-100">
          <span
            className="hidden md:block cursor-pointer hover:scale-110"
            onClick={handleOnClickBack}
          >
            <ArrowLeftIcon width={20} height={20} />
          </span>
          Confirm Your Contact Info
        </h1>
        <div className="grid gap-4 mb-5">
          <FormField
            control={form.control}
            name="companyName"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel className="text-tokens-tertiary !text-body mb-1.5">
                  Company Name
                </FormLabel>
                <FormControl>
                  <Input
                    className="bg-input-field p-3 placeholder:text-input-placeholder text-body rounded-sm focus:!outline-gray-300 focus:!ring-1"
                    placeholder=""
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex flex-col gap-4 xl:flex-row">
            <FormField
              control={form.control}
              name="address"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel className="text-tokens-tertiary !text-body mb-1.5">
                    Address
                  </FormLabel>
                  <FormControl>
                    <Input
                      className="bg-input-field p-3 placeholder:text-input-placeholder text-body rounded-sm focus:!outline-gray-300 focus:!ring-1"
                      placeholder=""
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="unit"
              render={({ field }) => (
                <FormItem className="w-full xl:w-[120px]">
                  <FormLabel className="text-tokens-tertiary !text-body mb-1.5">
                    Unit
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      className="bg-input-field p-3 placeholder:text-input-placeholder text-body rounded-sm focus:!outline-gray-300 focus:!ring-1"
                      placeholder=""
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="grid gap-4 xl:grid-cols-2">
            <FormField
              control={form.control}
              name="city"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel className="text-tokens-tertiary !text-body mb-1.5">
                    City
                  </FormLabel>
                  <FormControl>
                    <Input
                      className="bg-input-field p-3 placeholder:text-input-placeholder text-body rounded-sm focus:!outline-gray-300 focus:!ring-1"
                      placeholder=""
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="state"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel className="text-tokens-tertiary !text-body mb-1.5">
                    State
                  </FormLabel>
                  <FormControl>
                    <Input
                      className="bg-input-field p-3 placeholder:text-input-placeholder text-body rounded-sm focus:!outline-gray-300 focus:!ring-1"
                      placeholder=""
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="grid gap-4 xl:grid-cols-2">
            <FormField
              control={form.control}
              name="country"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel className="text-tokens-tertiary !text-body mb-1.5">
                    Country
                  </FormLabel>
                  <FormControl>
                    <Input
                      className="bg-input-field p-3 placeholder:text-input-placeholder text-body rounded-sm focus:!outline-gray-300 focus:!ring-1"
                      placeholder=""
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="zipCode"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel className="text-tokens-tertiary !text-body mb-1.5">
                    Zip Code
                  </FormLabel>
                  <FormControl>
                    <Input
                      className="bg-input-field p-3 placeholder:text-input-placeholder text-body rounded-sm focus:!outline-gray-300 focus:!ring-1"
                      placeholder=""
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <hr className="bg-gray-100" />
          <h2 className="text-heading font-bold">Broker Info</h2>
          <div className="grid gap-4">
            <div className="grid gap-4 xl:grid-cols-2">
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel className="text-tokens-tertiary !text-body mb-1.5">
                      First Name
                    </FormLabel>
                    <FormControl>
                      <Input
                        className="bg-input-field p-3 placeholder:text-input-placeholder text-body rounded-sm focus:!outline-gray-300 focus:!ring-1"
                        placeholder=""
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel className="text-tokens-tertiary !text-body mb-1.5">
                      Last Name
                    </FormLabel>
                    <FormControl>
                      <Input
                        className="bg-input-field p-3 placeholder:text-input-placeholder text-body rounded-sm focus:!outline-gray-300 focus:!ring-1"
                        placeholder=""
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="grid gap-4 xl:grid-cols-2">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel className="text-tokens-tertiary !text-body mb-1.5">
                      Email Address
                    </FormLabel>
                    <FormControl>
                      <Input
                        className="bg-input-field p-3 placeholder:text-input-placeholder text-body rounded-sm focus:!outline-gray-300 focus:!ring-1"
                        placeholder=""
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phoneNumber"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel className="text-tokens-tertiary !text-body mb-1.5">
                      Phone Number
                    </FormLabel>
                    <FormControl>
                      <Input
                        className="bg-input-field p-3 placeholder:text-input-placeholder text-body rounded-sm focus:!outline-gray-300 focus:!ring-1"
                        placeholder=""
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
        </div>
        <Button className="!text-body py-4 px-4 mt-5 w-full">
          Submit & Review
        </Button>
      </form>
    </Form>
  );
};

export default ConfirmCompanyBrokerage;
