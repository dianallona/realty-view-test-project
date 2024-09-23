import {
  addDays,
  endOfWeek,
  format,
  isBefore,
  isWithinInterval,
  startOfWeek,
} from "date-fns";
import { useState } from "react";
import { Row, RowProps } from "react-day-picker";
import { cn } from "../../../../lib/utils";
import { buttonVariants } from "../../../ui/button";
import { Calendar } from "../../../ui/calendar";
import ListingImages from "../listing-details/listing-images";
import TimeSchedule from "./time-schedule";

const ScheduledDate = () => {
  const [currentWeek, setCurrentWeek] = useState(new Date());

  // Handle navigation (default next/previous buttons)
  const handleMonthChange = (newDate: Date) => {
    const newWeekStart = startOfWeek(newDate, { weekStartsOn: 0 });
    setCurrentWeek(newWeekStart);
  };

  // Function to handle moving to the previous week
  const handlePreviousWeek = () => {
    const prevWeek = addDays(currentWeek, -7);

    if (
      isBefore(prevWeek.setHours(0, 0, 0, 0), new Date().setHours(0, 0, 0, 0))
    )
      return;

    setCurrentWeek(prevWeek);
  };

  // Function to handle moving to the next week
  const handleNextWeek = () => {
    setCurrentWeek(addDays(currentWeek, 7));
  };

  const Caption = () => <></>;

  const CurrentWeekRow = (props: RowProps) => {
    const isDateInCurrentWeek = (dateToCheck: Date) => {
      const start = startOfWeek(currentWeek);
      const end = endOfWeek(currentWeek);
      return isWithinInterval(dateToCheck, { start, end });
    };
    const isNotCurrentWeek = props.dates.every(
      (date) => !isDateInCurrentWeek(date)
    );
    if (isNotCurrentWeek) return <></>;
    return <Row {...props} />;
  };

  return (
    <div className="bg-white h-full">
      <div
        className="mx-0 pt-10 px-4 md:mt-5 xl:my-5 md:mx-5 xl:mx-10.5 md:p-5 rounded-xl h-full md:h-fit !bg-white"
        style={{
          boxShadow:
            "2px -2px 6px 0px rgba(0, 0, 0, 0.05), -2px 2px 6px 0px rgba(0, 0, 0, 0.05)",
        }}
      >
        <ListingImages />

        <div className="bg-gray-25 rounded-xl p-3 border border-gray-200">
          <div className="bg-white rounded-xl p-3 border border-gray-200">
            <div className="flex flex-col xl:flex-row justify-between gap-2">
              <p className="text-tokens-tertiary text-body">Scheduled Date</p>
              <p className="text-gray-800 text-body">
                {format(currentWeek, "EEEE, MMMM do yyyy")}
              </p>
            </div>
            <hr className="bg-gray-200 my-2" />
            <div className="flex justify-between items-center my-2 border border-gray-200 rounded-lg">
              {/* <Button
                variant="ghost"
                onClick={handlePreviousWeek}
                className="!w-fit !h-fit !p-1"
              >
                <ChevronRight width={24} height={24} className="rotate-180" />
              </Button> */}
              <Calendar
                className="flex-1 px-2 py-4"
                classNames={{
                  day: cn(
                    buttonVariants({ variant: "ghost" }),
                    "w-full p-0 font-normal aria-selected:opacity-100"
                  ),
                }}
                components={{ Caption, Row: CurrentWeekRow }}
                mode="single"
                defaultMonth={currentWeek}
                selected={currentWeek}
                onMonthChange={handleMonthChange}
                month={currentWeek}
                modifiers={{
                  disabled: { before: new Date() },
                }}
                disableNavigation
                showOutsideDays
                onDayClick={(e) => {
                  setCurrentWeek(e);
                }}
              />
              {/* <Button
                variant="ghost"
                onClick={handleNextWeek}
                className="!w-fit !h-fit !p-1"
              >
                <ChevronRight width={24} height={24} />
              </Button> */}
            </div>
            <TimeSchedule date={currentWeek} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScheduledDate;
