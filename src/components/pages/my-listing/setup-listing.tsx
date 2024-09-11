import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { ReactComponent as EyeIcon } from "../../../assets/icons/eye.svg";
import { Button } from "../../ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../ui/form";
import { Input } from "../../ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../ui/select";

const formSchema = z.object({
  email: z.string().email(),
  password: z.string().min(4),
  licenseState: z.string(),
  licenseType: z.string(),
  howDidYouHearAboutUs: z.string(),
});

const SetupListing = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      licenseState: "",
      licenseType: "",
      howDidYouHearAboutUs: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-4 md:pl-11.5 md:pr-22 md:pt-18 px-4 pt-5 md:bg-gray-25 pb-10 md:pb-0 md:mb-0 mb-16"
      >
        <div className="grid gap-1.5">
          <h1 className="text-zinc-600 text-heading font-bold">
            Welcome, [First_Name]! Let's get you and your listing set up.
          </h1>
          <h2 className="text-black font-bold text-xl">
            You will have a chance to add/edit details later.
          </h2>
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
                    <SelectTrigger className="focus:!outline-gray-300 focus:!ring-1 text-body text-input-placeholder bg-input-field">
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
                    <SelectTrigger className="focus:!outline-gray-300 focus:!ring-1 text-body text-input-placeholder bg-input-field">
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
        <FormField
          control={form.control}
          name="howDidYouHearAboutUs"
          render={({ field }) => (
            <FormItem className="md:hidden w-full py-2 md:py-3">
              <FormLabel className="!text-tokens-tertiary text-body">
                How did you hear about us?
              </FormLabel>
              <FormControl>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <SelectTrigger className="focus:!outline-gray-300 focus:!ring-1 text-body text-input-placeholder bg-input-field">
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
        <Button type="submit" className="bg-accent-purple w-full rounded-lg">
          Set Up Showing Availability
        </Button>
        <p className="w-full text-center text-body text-tokens-secondary">
          RealtyView is forever-free. We don’t required your credit card.
        </p>
      </form>
    </Form>
  );
};

export default SetupListing;
