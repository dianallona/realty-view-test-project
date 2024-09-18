import { addMinutes, format, isEqual, set } from "date-fns";
import { FC } from "react";

const timeSched = [
  {
    timeOfTheDay: "Morning",
    start: "09:00",
    end: "11:30",
  },
  {
    timeOfTheDay: "Afternoon",
    start: "12:00",
    end: "18:00",
  },
  {
    timeOfTheDay: "Evening",
    start: "18:00",
    end: "21:00",
  },
];

type TTimeSchedule = {
  date: Date;
};

const TimeSchedule: FC<TTimeSchedule> = ({ date }) => {
  return (
    <div className="grid gap-4">
      {timeSched.map((value, index) => {
        const start = value.start.split(":");
        const startHour = Number(start[0]) || 0;
        const startMin = Number(start[1]) || 0;

        const end = value.end.split(":");
        const endHour = Number(end[0]) || 0;
        const endMin = Number(end[1]) || 0;

        let startTime = set(date, {
          hours: startHour,
          minutes: startMin,
          seconds: 0,
        });
        let endTime = set(date, {
          hours: endHour,
          minutes: endMin,
          seconds: 0,
        });

        let currentTime = startTime;
        const timeRange = [currentTime];

        while (!isEqual(endTime, timeRange[timeRange.length - 1])) {
          currentTime = addMinutes(currentTime, 30);
          timeRange.push(currentTime);
        }

        return (
          <div key={`time-of-the-day-${index}`} className="grid gap-1">
            <p className="text-tokens-secondary text-body">
              {value.timeOfTheDay}
            </p>
            <div className="flex flex-wrap gap-4 mt-2">
              {timeRange.map((range) => (
                <span className="whitespace-nowrap w-fit text-center py-1 px-2 border border-gray-300 rounded-lg text-body cursor-pointer hover:bg-accent-purple hover:text-white">
                  {format(range, "h:mm aa")}
                </span>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TimeSchedule;
