"use client";

interface CustomTooltipProps {
  active?: boolean;
  payload?: any[];
  label?: string;
}

export function CustomTooltip({ active, payload, label }: CustomTooltipProps) {
  if (active && payload && payload.length) {
    return (
      <div className="rounded-md border bg-white p-3 shadow-lg">
        <p className="mb-1 text-sm font-medium text-gray-900">{label}</p>
        {payload.map((entry: any, index: number) => (
          <p key={`item-${index}`} className="text-sm" style={{ color: entry.color }}>
            <span className="font-medium">{entry.name}:</span>{" "}
            {entry.name === "total"
              ? entry.value.toLocaleString()
              : `$${entry.value.toLocaleString()}`}
          </p>
        ))}
      </div>
    );
  }
  return null;
}
