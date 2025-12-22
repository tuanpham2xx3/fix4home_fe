const EmptyBookings = () => {
  return (
    <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-gray-300 bg-white px-6 py-16 text-center">
      <div className="text-4xl">📅</div>

      <h3 className="mt-4 text-lg font-semibold text-dark">
        Bạn chưa có lịch hẹn nào
      </h3>

      <p className="mt-2 max-w-md text-sm text-muted">
        Khi bạn đặt dịch vụ sửa chữa, lịch hẹn sẽ hiển thị tại đây
      </p>

      <a
        href="/don-lich"
        className="
          mt-6 inline-flex items-center justify-center
          rounded-lg bg-primary px-6 py-3
          font-medium text-dark
          hover:brightness-95 transition
        "
      >
        Đặt lịch ngay
      </a>
    </div>
  );
};

export default EmptyBookings;
