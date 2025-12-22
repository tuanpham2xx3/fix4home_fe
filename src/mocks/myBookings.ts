// src/mocks/myBookings.ts
import { Booking } from "@/types/booking";

export const myBookingsMock: Booking[] = [
  {
    id: 1,
    title: "Sửa máy giặt",
    date: "20/01/2026",
    time: "09:00",
    address: "Hải Châu, Đà Nẵng",
    phone: "0915 269 839",
    status: "PENDING",
  },
  {
    id: 2,
    title: "Vệ sinh máy lạnh",
    date: "15/01/2026",
    time: "14:00",
    address: "Thanh Khê, Đà Nẵng",
    phone: "0987 123 456",
    status: "COMPLETED",
  },
  {
    id: 3,
    title: "Sửa điện nước",
    date: "10/01/2026",
    time: "08:00",
    address: "Sơn Trà, Đà Nẵng",
    phone: "0909 888 999",
    status: "CANCELLED",
  },
];
