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
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../ui/select";
import { Textarea } from "../../../ui/textarea";

const formSchema = z.object({
  showing_instructions: z.string(),
  showing_remarks: z.string(),
  access_type: z.string(),
  access_code: z.string(),
});

const SetupShowingInstructions = () => {
  const state = useBoundStore();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      showing_instructions: "",
      showing_remarks: "",
      access_type: "",
      access_code: "",
    },
  });

  const handleOnClickBack = () => {
    state.setCurrentPage("setup-showing-availability");
  };

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    state.setCurrentPage("procurement-agreement");
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="px-5 md:px-7 xl:px-16 2xl:px-36 pb-4"
      >
        <h1 className="flex items-center tracking-[-0.2px] gap-2.5 text-heading-2 xl:text-heading-3 font-bold py-4 md:pt-14">
          <span
            className="hidden md:block cursor-pointer hover:scale-110"
            onClick={handleOnClickBack}
          >
            <ArrowLeftIcon width={20} height={20} />
          </span>
          Setup Showing Instructions
        </h1>
        <p className="text-gray-600 text-body pb-4 border-b border-gray-100">
          Add showing instructions and remarks for other Agents.
        </p>

        <div>
          <h2 className="text-gray-800 text-heading font-bold pt-5 pb-4">
            Showing Instructions
          </h2>
          <FormField
            control={form.control}
            name="showing_instructions"
            render={({ field }) => (
              <FormItem className="w-full pb-4 pt-5">
                <FormLabel className="text-tokens-tertiary !text-body mb-1.5 flex justify-between">
                  <p>Showing Instructions</p>
                  <p>{form.getValues("showing_instructions").length}/100</p>
                </FormLabel>
                <FormControl>
                  <Textarea
                    className="bg-input-field text-gray-800"
                    maxLength={100}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="showing_remarks"
            render={({ field }) => (
              <FormItem className="w-full pb-4 pt-5">
                <FormLabel className="text-tokens-tertiary !text-body mb-1.5 flex justify-between">
                  <p>Showing Remarks</p>
                  <p>{form.getValues("showing_remarks").length}/100</p>
                </FormLabel>
                <FormControl>
                  <Textarea
                    className="bg-input-field text-gray-800"
                    maxLength={100}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="grid grid-cols-1 xl:grid-cols-2 xl:gap-5 items-center">
            <FormField
              control={form.control}
              name="access_type"
              render={({ field }) => (
                <FormItem className="w-full pb-4 pt-5">
                  <FormLabel className="!text-tokens-tertiary !text-body mb-1.5">
                    Access Type
                  </FormLabel>
                  <FormControl>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={String(field.value)}
                    >
                      <SelectTrigger className="focus:!outline-gray-300 focus:!ring-1 !text-body text-input-placeholder placeholder:text-input-placeholder bg-input-field">
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectItem className="cursor-pointer" value="30">
                            Access Type 1
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
              name="access_code"
              render={({ field }) => (
                <FormItem className="py-2 md:py-3">
                  <FormLabel className="!text-tokens-tertiary !text-body mb-1.5">
                    Access Code
                  </FormLabel>
                  <FormControl>
                    <Input
                      className="bg-input-field p-3 placeholder:text-input-placeholder text-body rounded-sm focus:!outline-gray-300 focus:!ring-1"
                      placeholder="Placeholder"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button type="submit" className="!text-body py-2.5 px-4 my-4 w-full">
            Next: Procurement Agreement
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default SetupShowingInstructions;
