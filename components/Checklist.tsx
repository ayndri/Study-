"use client";

import { useEffect, useState } from "react";
import { get, set } from "@/lib/store";

export default function Checklist({ storeKey, items }: { storeKey: string; items: [string, string][] }) {
  const [done, setDone] = useState<Record<number, boolean>>({});

  useEffect(() => {
    setDone(get<Record<number, boolean>>(storeKey, {}));
  }, [storeKey]);

  function toggle(i: number) {
    const next = { ...done, [i]: !done[i] };
    setDone(next);
    set(storeKey, next);
  }

  return (
    <ul className="check">
      {items.map(([title, desc], i) => (
        <li key={i} className={done[i] ? "done" : ""} onClick={() => toggle(i)}>
          <input type="checkbox" checked={!!done[i]} readOnly />
          <span className="ct">
            <span>{title}</span>
            <small>{desc}</small>
          </span>
        </li>
      ))}
    </ul>
  );
}
