import React from "react";
import { cn } from "@/lib/utils";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

export function Container({ children, className, ...props }: ContainerProps) {
  return (
    <div
      className={cn("w-full max-w-[1280px] mx-auto px-4 sm:px-6 xl:px-0", className)}
      {...props}
    >
      {children}
    </div>
  );
}

export default Container;
