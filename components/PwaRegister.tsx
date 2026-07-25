"use client";

import { useEffect } from "react";

export default function PwaRegister() {
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.register("/sw.js").catch(() => {
        /* abaikan bila gagal (mis. mode dev tertentu) */
      });
    }
  }, []);
  return null;
}
