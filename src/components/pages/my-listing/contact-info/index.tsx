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
  mobile_number: z.string(),
  officeNumber: z.string(),
  email: z.string().email(),
});
const ContactInfo = () => {
  const state = useBoundStore();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {},
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
        <h1 className="flex items-center tracking-[-0.2px] gap-2.5 text-heading-2 xl:text-heading-3 font-bold py-4 md:pt-14 border-b border-gray-100">
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
            name="mobile_number"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel className="text-tokens-tertiary !text-body mb-1.5">
                  Mobile Number
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
            name="officeNumber"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel className="text-tokens-tertiary !text-body mb-1.5">
                  Office Number
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
        </div>
        <Button className="!text-body py-4 px-4 mt-5 w-full">
          Next: Confirm Company & Brokerage Details
        </Button>
      </form>
    </Form>
  );
};

export default ContactInfo;
