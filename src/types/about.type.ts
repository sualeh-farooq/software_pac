import { ReactNode } from "react";

// 1. Export types for use in other files
export type StatCardData = {
  value: string;
  label: string;
  icon: ReactNode;
};

export type Service = {
  title: string;
  summary: string;
}  