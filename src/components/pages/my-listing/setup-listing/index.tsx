import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { ReactComponent as EyeIcon } from "../../../../assets/icons/eye.svg";
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

const formSchema = z.object({
  email: z.string().email(),
  password: z.string().min(4),
  licenseState: z.string(),
  licenseType: z.string(),
  howDidYouHearAboutUs: z.string(),
});

const SetupListing = () => {
  const state = useBoundStore();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      licenseState: "",
      licenseType: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log("im here");
    state.setCurrentPage("showing-availability");
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="bg-gray-25 flex flex-col gap-4 md:px-5 md:pt-14 px-4 pt-5 pb-10 md:pb-0 md:mb-0 mb-16 xl:pt-14 xl:px-36"
      >
        <div className="grid gap-4 border-b border-gray-100 pb-4">
          <div>
            <h1 className="text-gray-800 text-heading-3 font-bold mb-1">
              Welcome, Juanita!
            </h1>
            <h2 className="text-gray-800 text-heading-2">
              Let's get you and your listing set up.
            </h2>
          </div>
          <h3 className="text-gray-600 text-body">
            You will have a chance to add/edit details later.
          </h3>
          <a
            href="/"
            className="text-accent-purple hover:font-semibold text-body"
          >
            Have an account? Sign In
          </a>
        </div>

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="py-2 md:py-3">
              <FormLabel className="!text-tokens-tertiary text-body">
                Update Email Address (Optional)
              </FormLabel>
              <FormControl>
                <Input
                  className="bg-input-field p-3 placeholder:text-input-placeholder text-body rounded-sm focus:!outline-gray-300 focus:!ring-1"
                  placeholder="Caryl@Realty.com"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem className="py-2 md:py-3">
              <FormLabel className="!text-tokens-tertiary text-body">
                Choose a Password
              </FormLabel>
              <FormControl>
                <div className="relative">
                  <Input
                    type="password"
                    className="bg-input-field p-3 placeholder:text-input-placeholder text-body rounded-sm focus:!outline-gray-300 focus:!ring-1"
                    placeholder=""
                    {...field}
                  />
                  <EyeIcon className="absolute right-3 top-3" />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="grid md:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="licenseState"
            render={({ field }) => (
              <FormItem className="w-full py-2 md:py-3">
                <FormLabel className="!text-tokens-tertiary text-body">
                  License State
                </FormLabel>
                <FormControl>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <SelectTrigger className="focus:!outline-gray-300 focus:!ring-1 text-body  text-black placeholder:text-input-placeholder bg-input-field">
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
          <FormField
            control={form.control}
            name="licenseType"
            render={({ field }) => (
              <FormItem className="w-full py-2 md:py-3">
                <FormLabel className="!text-tokens-tertiary text-body">
                  License Type
                </FormLabel>
                <FormControl>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <SelectTrigger className="focus:!outline-gray-300 focus:!ring-1 text-body text-black placeholder:text-input-placeholder bg-input-field">
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
        </div>
        <div className="grid gap-2.5 py-4">
          <Button type="submit" className="bg-accent-purple w-full rounded-lg">
            Next: Set Up Showing Availability
          </Button>
          <p className="w-full text-center text-body text-tokens-tertiary">
            RealtyView is forever-free. We don’t required your credit card.
          </p>
        </div>
      </form>
    </Form>
  );
};

export default SetupListing;
