import React from 'react';

const appointments = [
  {
    id: 1,
    doctor: {
      name: "Dr. Richard James",
      specialization: "General physician",
      image: "/src/assets/doc1.png",
    },
    address: {
      street: "57th Cross, Richmond",
      area: "Circle, Church Road, London"
    },
    dateTime: "25 July, 2024 | 8:30 PM",
    isPaid: false
  },

];

export default function MyAppointments() {
  return (
    <div className="w-full mx-auto p-6">
      <h1 className="text-2xl font-semibold text-gray-800 mb-6">
        My Appointments
      </h1>

      <div className="space-y-4">
        {appointments.map((appointment) => (
          <div
            key={appointment.id}
            className="bg-white rounded-lg border border-gray-200 p-4 flex flex-col sm:flex-row items-start sm:items-center gap-4 justify-between shadow-lg hover:shadow-2xl hover:shadow-primary hover:transition-all hover:duration-200"
          >
            <div className="flex gap-4">
              <img
                src={appointment.doctor.image}
                alt={appointment.doctor.name}
                className="w-35 h-40 rounded-lg object-cover bg-primary"
              />

              <div className="space-y-1">
                <h2 className="text-gray-800 font-bold">
                  {appointment.doctor.name}
                </h2>
                <p className="text-sm text-gray-600 font-bold">
                  {appointment.doctor.specialization}
                </p>

                <div className="space-y-0.5">
                  <p className="text-sm text-gray-600 font-bold">
                    Address:
                  </p>
                  <p className="text-sm text-gray-600 font-bold">
                    {appointment.address.street}
                  </p>
                  <p className="text-sm text-gray-600 font-bold">
                    {appointment.address.area}
                  </p>
                </div>

                <p className="text-sm text-gray-600 font-bold">
                  <span className="font-medium">Date & Time: </span>
                  {appointment.dateTime}
                </p>
              </div>
            </div>

            <div className="w-full sm:w-auto flex flex-col gap-2">
              <button
                className="w-full sm:w-32 bg-primary text-white py-2 px-4 rounded-lg  transition-colors font-bold hover:shadow-md hover:shadow-primary hover:transition-all hover:duration-200"
              >
                Pay here
              </button>
              <button
                className="w-full sm:w-32 border border-gray-200  py-2 px-4 rounded-lg bg-red-800 text-white transition-colors font-bold hover:shadow-md hover:shadow-red-800 hover:transition-all hover:duration-200"
              >
                Cancel appointment
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

