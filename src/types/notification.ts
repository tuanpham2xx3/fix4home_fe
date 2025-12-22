export type NotificationType =
  | "BOOKING_SUCCESS"
  | "TECH_ACCEPTED"
  | "TECH_ON_THE_WAY"
  | "BOOKING_COMPLETED"
  | "NEW_MESSAGE"
  | "PROMOTION";

export interface Notification {
  id: number;
  title: string;
  message: string;
  type: NotificationType;
  createdAt: string;
  isRead: boolean;
}
