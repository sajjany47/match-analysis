"use client";

import { useEffect, useState } from "react";

interface CountdownTimerProps {
  targetDate: string;
}

export default function CountdownTimer({ targetDate }: CountdownTimerProps) {
  console.log(targetDate);
  const calculateTimeLeft = () => {
    const difference = new Date(targetDate).getTime() - new Date().getTime();

    if (difference <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
        isExpired: true,
      };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
      isExpired: false,
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const formatTime = (value: number) => {
    return value < 10 ? `0${value}` : value;
  };

  if (timeLeft.isExpired) {
    return (
      <div className="text-center py-2 bg-red-100 text-red-600 dark:bg-red-900 dark:text-red-300 rounded-md">
        Match in progress
      </div>
    );
  }

  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-4 gap-2 text-center">
        <div className="flex flex-col">
          <div className="bg-primary text-primary-foreground rounded-md py-1 px-2 text-lg font-bold">
            {formatTime(timeLeft.days)}
          </div>
          <span className="text-xs mt-1">Days</span>
        </div>

        <div className="flex flex-col">
          <div className="bg-primary text-primary-foreground rounded-md py-1 px-2 text-lg font-bold">
            {formatTime(timeLeft.hours)}
          </div>
          <span className="text-xs mt-1">Hours</span>
        </div>

        <div className="flex flex-col">
          <div className="bg-primary text-primary-foreground rounded-md py-1 px-2 text-lg font-bold">
            {formatTime(timeLeft.minutes)}
          </div>
          <span className="text-xs mt-1">Mins</span>
        </div>

        <div className="flex flex-col">
          <div className="bg-primary text-primary-foreground rounded-md py-1 px-2 text-lg font-bold">
            {formatTime(timeLeft.seconds)}
          </div>
          <span className="text-xs mt-1">Secs</span>
        </div>
      </div>
    </div>
  );
}
