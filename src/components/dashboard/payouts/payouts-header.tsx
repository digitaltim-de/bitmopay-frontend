"use client";

export function PayoutsHeader() {
  return (
    <div className="mb-6 flex flex-col md:flex-row md:items-center md:justify-between">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Payouts</h1>
        <p className="text-gray-500 dark:text-gray-400">Request withdrawals of your earned funds</p>
      </div>
    </div>
  );
}
