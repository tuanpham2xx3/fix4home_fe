// src/types/booking.ts

export type BookingStatus = "PENDING" | "COMPLETED" | "CANCELLED";

export interface Booking {
  id: number;
  title: string;
  date: string;
  time: string;
  address: string;
  phone: string;
  status: BookingStatus;
}
