"use client";

import { useEffect, useState } from "react";
import { content } from "@/src/data/content";

const romeTimeFormatter = new Intl.DateTimeFormat("en-GB", {
  timeZone: "Europe/Rome",
  weekday: "short",
  hour: "2-digit",
  minute: "2-digit",
  hourCycle: "h23",
});

const weekdayIndexes = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function getMinutesSinceMidnight(time: string) {
  const [hours, minutes] = time.split(":").map(Number);
  return hours * 60 + minutes;
}

function isRestaurantOpen(now: Date) {
  const parts = romeTimeFormatter.formatToParts(now);
  const weekday = parts.find((part) => part.type === "weekday")?.value;
  const hour = Number(parts.find((part) => part.type === "hour")?.value);
  const minute = Number(parts.find((part) => part.type === "minute")?.value);
  const weekdayIndex = weekdayIndexes.indexOf(weekday ?? "");

  if (weekdayIndex < 0 || !Number.isInteger(hour) || !Number.isInteger(minute)) {
    return false;
  }

  const currentMinutes = hour * 60 + minute;

  return content.contact.hours.some(
    (schedule) =>
      schedule.weekdays.some((day) => day === weekdayIndex) &&
      schedule.periods.some(
        (period) =>
          period.opensAt !== null &&
          period.closesAt !== null &&
          currentMinutes >= getMinutesSinceMidnight(period.opensAt) &&
          currentMinutes < getMinutesSinceMidnight(period.closesAt),
      ),
  );
}

export function OpeningStatus() {
  const [isOpen, setIsOpen] = useState<boolean | null>(null);

  useEffect(() => {
    function updateStatus() {
      setIsOpen(isRestaurantOpen(new Date()));
    }

    updateStatus();
    const intervalId = window.setInterval(updateStatus, 60_000);
    window.addEventListener("focus", updateStatus);

    return () => {
      window.clearInterval(intervalId);
      window.removeEventListener("focus", updateStatus);
    };
  }, []);

  if (isOpen === null) return null;

  return (
    <span className="brand-status" data-status={isOpen ? "open" : "closed"} role="status">
      <span className="brand-status-dot" aria-hidden="true" />
      {isOpen ? content.header.openingNow : content.header.closedNow}
    </span>
  );
}
