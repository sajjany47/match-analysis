/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import moment from "moment";
import { useEffect, useState } from "react";

interface CountdownTimerProps {
  targetDate: string;
  matchStatus?: string;
}

export default function CountdownTimer({ targetDate }: CountdownTimerProps) {
  const calculateTimeLeft = () => {
    // const difference = new Date(targetDate).getTime() - new Date().getTime();
    const currentDateTime = moment().format("YYYY-MM-DD HH:mm:ss");
    const givenDateTime = moment(targetDate, "Do MMM, YYYY HH:mm").format(
      "YYYY-MM-DD HH:mm:ss"
    );
    const difference = moment(givenDateTime).diff(moment(currentDateTime));
    if (difference <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
        isExpired: true,
      };
    }
    const duration = moment.duration(difference);
    return {
      days: Math.floor(duration.asDays()),
      hours: duration.hours(),
      minutes: duration.minutes(),
      seconds: duration.seconds(),
      isExpired: false,
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const formatTime = (value: number) => {
    return value < 10 ? `0${value}` : value.toString();
  };

  if (timeLeft.isExpired) {
    return (
      <div className="text-center py-2 bg-amber-100 text-amber-800 rounded-md text-sm font-medium">
        Match starting soon!
      </div>
    );
  }

  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-4 gap-1 w-full">
        {[
          { value: timeLeft.days, label: "Days" },
          { value: timeLeft.hours, label: "Hours" },
          { value: timeLeft.minutes, label: "Mins" },
          { value: timeLeft.seconds, label: "Secs" },
        ].map((item, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="bg-blue-600 text-white rounded-md py-1 px-2 w-full text-center text-sm font-bold">
              {formatTime(item.value)}
            </div>
            <span className="text-xs text-gray-500 mt-1">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
