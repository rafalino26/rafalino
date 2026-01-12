"use client";

import { useTheme } from "next-themes";
import { FiMoon, FiSun } from "react-icons/fi";
import clsx from "clsx";
import { useSyncExternalStore } from "react";

function useIsClient() {
  return useSyncExternalStore(
    () => () => {}, // subscribe (no-op)
    () => true,     // client snapshot
    () => false     // server snapshot
  );
}

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const isClient = useIsClient();

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      aria-label="Toggle theme"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={clsx(
        "h-10 w-10 rounded-xl border",
        "border-[rgb(var(--border))] bg-[rgb(var(--card))]",
        "flex items-center justify-center",
        "hover:shadow-sm transition"
      )}
    >
      {/* Render icon only on client to avoid hydration mismatch */}
      {isClient ? (isDark ? <FiSun /> : <FiMoon />) : null}
    </button>
  );
}
