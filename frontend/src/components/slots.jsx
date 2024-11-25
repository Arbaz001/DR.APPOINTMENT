import React, { useState } from 'react';

const weekDays = [
  { day: "MON", date: "10" },
  { day: "TUE", date: "11" },
  { day: "WED", date: "12" },
  { day: "THU", date: "13" },
  { day: "FRI", date: "14" },
  { day: "SAT", date: "15" },
  { day: "SUN", date: "16" },
];

const timeSlots = [
  "8:00 am", "8:30 am", "9:00 am", "9:30 am",
  "10:00 am", "10:30 am", "11:00 am", "11:30 am"
];

export default function BookingSlots() {
  const [selectedDay, setSelectedDay] = useState("10");
  const [selectedTime, setSelectedTime] = useState("9:00 am");

  return (
    <div className="max-w-3xl mx-auto p-6 mt-7 rounded-2xl border-2 shadow-lg hover:shadow-2xl hover:shadow-primary hover:transition-all hover:duration-200  ">
      <h2 className="text-[25px] font-bold text-[#565656] mb-6">Booking slots</h2>
      
      <div className="space-y-8">
        {/* Week Days */}
        <div className="flex gap-4 overflow-x-auto pb-2">
          {weekDays.map(({ day, date }) => (
            <button
              key={day}
              onClick={() => setSelectedDay(date)}
              className={`flex flex-col items-center justify-center min-w-[5rem] h-20 rounded-2xl border transition-colors hover:shadow-md hover:shadow-primary hover:transition-all hover:duration-200 ${
                selectedDay === date
                  ? "bg-primary text-white border-primary" 
                  : "border-gray-200 text-gray-600 hover:bg-gray-50"
              }`}
            >
              <span className="text-sm">{day}</span>
              <span className="text-xl font-semibold">{date}</span>
            </button>
          ))}
        </div>

        {/* Time Slots */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {timeSlots.map((time) => (
            <button
              key={time}
              onClick={() => setSelectedTime(time)}
              className={`py-3 px-6 rounded-2xl border text-sm transition-colors hover:shadow-md hover:shadow-primary hover:transition-all hover:duration-200 ${
                selectedTime === time
                  ? "bg-primary text-white border-primary" 
                  : "border-gray-200 text-gray-600 hover:bg-gray-50"
              }`}
            >
              {time}
            </button>
          ))}
        </div>

        {/* Book Button */}
        <button 
          className="w-full bg-primary text-white py-4 rounded-full text-lg font-medium hover:bg-primary transition-colors hover:shadow-md hover:shadow-primary hover:transition-all hover:duration-200"
          onClick={() => alert(`Booking for ${selectedDay} at ${selectedTime}`)}
        >
          Book an appointment
        </button>
      </div>
    </div>
  );
}

