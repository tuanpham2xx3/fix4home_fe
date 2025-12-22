import BookingCard from "@/components/booking/BookingCard";
import EmptyBookings from "@/components/booking/EmptyBookings";
import { myBookingsMock } from "@/mocks/myBookings";

const MyBookingsPage = () => {
  const bookings = myBookingsMock;

  return (
    <div className="min-h-screen bg-light font-sans">
      <div className="mx-auto max-w-6xl px-4 py-10">
        {/* Header */}
        <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="font-heading text-2xl font-semibold text-secondary">
              Lịch hẹn của tôi
            </h1>
            <p className="mt-1 text-sm text-muted">
              Quản lý các lịch sửa chữa bạn đã đặt
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="mt-8">
          {bookings.length === 0 ? (
            <EmptyBookings />
          ) : (
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {bookings.map((booking) => (
                <BookingCard
                  key={booking.id}
                  title={booking.title}
                  date={booking.date}
                  time={booking.time}
                  address={booking.address}
                  phone={booking.phone}
                  status={booking.status}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyBookingsPage;
