import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { ReactComponent as ArrowLeftIcon } from "../../../../assets/icons/arrow-left.svg";
import { ReactComponent as CurrencyDollarIcon } from "../../../../assets/icons/currency-dollar.svg";
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
import { Label } from "../../../ui/label";
import { RadioGroup, RadioGroupItem } from "../../../ui/radio-group";

const formSchema = z.object({
  payment_terms: z.string(),
  amount: z.number(),
});

const ProcurementAgreement = () => {
  const state = useBoundStore();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      payment_terms: "fixedAmount",
      amount: 0,
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
        <h1 className="flex items-center tracking-[-0.2px] gap-2.5 text-heading-2 xl:text-heading-3 font-bold py-4 md:pt-14 border-b border-gray-100">
          <span
            className="hidden md:block cursor-pointer hover:scale-110"
            onClick={handleOnClickBack}
          >
            <ArrowLeftIcon width={20} height={20} />
          </span>
          Procurement Agreement
        </h1>
        <div className="grid gap-4 mb-5">
          <h2 className="text-heading font-bold pt-6">
            Are you offering compensation for procurement?
          </h2>

          <FormField
            control={form.control}
            name="payment_terms"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel className="text-tokens-tertiary !text-body mb-1.5">
                  Payment Terms
                </FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="flex gap-8"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem
                        value="percentage"
                        id="percentage"
                        className={cn({
                          "!border-gray-300": field.value !== "percentage",
                        })}
                      />
                      <Label
                        htmlFor="percentage"
                        className={cn({
                          "text-input-label": field.value !== "percentage",
                        })}
                      >
                        Percentage (%){" "}
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem
                        value="fixedAmount"
                        id="fixedAmount"
                        className={cn({
                          "!border-gray-300": field.value !== "fixedAmount",
                        })}
                      />
                      <Label
                        htmlFor="fixedAmount"
                        className={cn({
                          "text-input-label": field.value !== "fixedAmount",
                        })}
                      >
                        Fixed amount ($)
                      </Label>
                    </div>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="amount"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel className="text-tokens-tertiary !text-body mb-1.5">
                  Amount
                </FormLabel>
                <FormControl>
                  <div className="relative">
                    <span className="absolute top-2.5 left-3">
                      <CurrencyDollarIcon width={20} height={20} />
                    </span>
                    <Input
                      type="number"
                      className="bg-input-field p-3 pl-9 placeholder:text-input-placeholder text-body rounded-sm focus:!outline-gray-300 focus:!ring-1"
                      {...field}
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <p className="text-body text-tokens-secondary">
            For the successful procurement of a Buyer for my listing,{" "}
            <strong className="text-gray-800">
              21 CENTURY PROPERTIES OF NY AND BUILDERS INC
            </strong>{" "}
            is willing to pay [
            <strong className="text-gray-800">Company Name</strong>] $200 of the
            purchase price upon the successful closing of the transaction.
          </p>
        </div>
        <Button className="!text-body py-4 px-4 mt-5 w-full">
          Next: Contact Info
        </Button>
      </form>
    </Form>
  );
};

export default ProcurementAgreement;
