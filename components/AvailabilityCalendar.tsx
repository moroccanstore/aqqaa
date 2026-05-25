"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface AvailabilityCalendarProps {
  blockedDates?: string[]; // ISO date strings: "2025-06-15"
  label?: string;
  bookedLabel?: string;
  availableLabel?: string;
}

const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];
const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export function AvailabilityCalendar({
  blockedDates = [],
  label = "Availability",
  bookedLabel = "Booked",
  availableLabel = "Available",
}: AvailabilityCalendarProps) {
  const today = new Date();
  const [viewDate, setViewDate] = useState(new Date(today.getFullYear(), today.getMonth(), 1));

  const year = viewDate.getFullYear();
  const month = viewDate.getMonth();

  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const prevMonth = () => setViewDate(new Date(year, month - 1, 1));
  const nextMonth = () => setViewDate(new Date(year, month + 1, 1));

  const isBlocked = (day: number) => {
    const dateStr = `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
    return blockedDates.includes(dateStr);
  };

  const isPast = (day: number) => {
    const d = new Date(year, month, day);
    return d < new Date(today.getFullYear(), today.getMonth(), today.getDate());
  };

  const cells: (number | null)[] = [
    ...Array(firstDay).fill(null),
    ...Array.from({ length: daysInMonth }, (_, i) => i + 1),
  ];

  return (
    <div className="bg-zinc-950 border border-white/5 p-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <h3 className="text-gold text-[10px] tracking-[0.5em] uppercase">{label}</h3>
        <div className="flex items-center gap-4">
          <button
            onClick={prevMonth}
            className="w-8 h-8 flex items-center justify-center text-zinc-500 hover:text-white transition-colors"
            aria-label="Previous month"
          >
            <ChevronLeft size={16} />
          </button>
          <span className="text-sm font-serif tracking-wider text-white min-w-[130px] text-center">
            {MONTHS[month]} {year}
          </span>
          <button
            onClick={nextMonth}
            className="w-8 h-8 flex items-center justify-center text-zinc-500 hover:text-white transition-colors"
            aria-label="Next month"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>

      {/* Day labels */}
      <div className="grid grid-cols-7 mb-3">
        {DAYS.map((d) => (
          <div key={d} className="text-center text-[9px] tracking-[0.2em] uppercase text-zinc-600 py-1">
            {d}
          </div>
        ))}
      </div>

      {/* Calendar grid */}
      <div className="grid grid-cols-7 gap-1">
        {cells.map((day, i) => {
          if (!day) return <div key={`empty-${i}`} />;

          const past = isPast(day);
          const blocked = isBlocked(day);

          return (
            <div
              key={day}
              className={`
                aspect-square flex items-center justify-center text-xs font-light rounded-sm transition-colors
                ${past ? "text-zinc-700 cursor-not-allowed" : ""}
                ${!past && blocked ? "bg-red-950/40 text-red-400 border border-red-900/30 cursor-not-allowed" : ""}
                ${!past && !blocked ? "text-zinc-300 hover:bg-gold/10 hover:text-gold cursor-default" : ""}
              `}
              title={blocked ? bookedLabel : !past ? availableLabel : ""}
            >
              {day}
              {blocked && (
                <span className="sr-only">{bookedLabel}</span>
              )}
            </div>
          );
        })}
      </div>

      {/* Legend */}
      <div className="flex items-center gap-8 mt-6 pt-6 border-t border-white/5">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-gold/20 border border-gold/30 rounded-sm" />
          <span className="text-[9px] tracking-widest uppercase text-zinc-500">{availableLabel}</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-red-950/40 border border-red-900/30 rounded-sm" />
          <span className="text-[9px] tracking-widest uppercase text-zinc-500">{bookedLabel}</span>
        </div>
      </div>
    </div>
  );
}
