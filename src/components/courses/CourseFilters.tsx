"use client";

import { Search, RotateCcw } from "lucide-react";
import { CourseFilterState } from "@/lib/types";
import { dictionary } from "@/lib/i18n";

interface CourseFiltersProps {
  filters: CourseFilterState;
  onChange: (updated: CourseFilterState) => void;
  topics: string[];
}

export default function CourseFilters({ filters, onChange, topics }: CourseFiltersProps) {
  const t = dictionary.en;

  const handleReset = () => {
    onChange({
      feeBucket: "",
      duration: "",
      scheduleSlot: "",
      topic: "",
      searchQuery: "",
    });
  };

  return (
    <div
      className="p-5 sm:p-6 rounded-2xl border space-y-6 shadow-xl backdrop-blur-md mb-8"
      style={{
        backgroundColor: "var(--glass-bg)",
        borderColor: "var(--border)",
      }}
    >
      {/* Top Search Bar & Reset */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        
        <div className="relative w-full sm:max-w-md">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2" style={{ color: "var(--text-muted)" }} />
          <input
            type="text"
            value={filters.searchQuery}
            onChange={(e) => onChange({ ...filters, searchQuery: e.target.value })}
            placeholder="Search courses by keyword or topic..."
            className="w-full pl-10 pr-4 py-2.5 rounded-xl border text-xs focus:outline-none focus:ring-2 focus:ring-[#0066D6] transition-all"
            style={{
              backgroundColor: "var(--surface)",
              borderColor: "var(--border)",
              color: "var(--text-primary)",
            }}
          />
        </div>

        <button
          type="button"
          onClick={handleReset}
          className="flex items-center gap-1.5 text-xs font-semibold px-3 py-2 rounded-xl border transition-colors hover:text-[#0066D6] self-end sm:self-auto"
          style={{
            backgroundColor: "var(--surface)",
            borderColor: "var(--border)",
            color: "var(--text-secondary)",
          }}
        >
          <RotateCcw className="w-3.5 h-3.5 text-[#00BFA5]" />
          Reset Filters
        </button>

      </div>

      {/* Filter Chips Groups */}
      <div className="space-y-4 pt-2 border-t" style={{ borderColor: "var(--border)" }}>
        
        {/* Topic Filters */}
        <div className="space-y-2">
          <label className="text-xs font-bold uppercase tracking-wider block" style={{ color: "var(--text-primary)" }}>
            {t.filterTopic}
          </label>
          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={() => onChange({ ...filters, topic: "" })}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                filters.topic === ""
                  ? "bg-[#0066D6] text-white shadow-md"
                  : "hover:bg-[#0066D6]/10 text-slate-300"
              }`}
              style={{
                backgroundColor: filters.topic === "" ? "var(--primary-blue)" : "var(--surface)",
                color: filters.topic === "" ? "#FFFFFF" : "var(--text-body)",
                border: "1px solid var(--border)",
              }}
            >
              {t.allTopics}
            </button>
            {topics.map((tItem) => (
              <button
                key={tItem}
                type="button"
                onClick={() => onChange({ ...filters, topic: tItem })}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                  filters.topic === tItem
                    ? "bg-[#0066D6] text-white shadow-md"
                    : "hover:bg-[#0066D6]/10"
                }`}
                style={{
                  backgroundColor: filters.topic === tItem ? "var(--primary-blue)" : "var(--surface)",
                  color: filters.topic === tItem ? "#FFFFFF" : "var(--text-body)",
                  border: "1px solid var(--border)",
                }}
              >
                {tItem}
              </button>
            ))}
          </div>
        </div>

        {/* Schedule & Duration & Fee Buckets Row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
          
          {/* Fee Range */}
          <div className="space-y-1.5">
            <label className="text-[11px] font-bold uppercase tracking-wider block" style={{ color: "var(--text-secondary)" }}>
              {t.filterFee}
            </label>
            <select
              value={filters.feeBucket}
              onChange={(e) => onChange({ ...filters, feeBucket: e.target.value })}
              className="w-full px-3 py-2 rounded-xl border text-xs font-medium focus:outline-none focus:ring-2 focus:ring-[#0066D6]"
              style={{
                backgroundColor: "var(--surface)",
                borderColor: "var(--border)",
                color: "var(--text-primary)",
              }}
            >
              <option value="">All Fee Ranges</option>
              <option value="budget">Budget-Friendly (&lt; Rs. 20,000)</option>
              <option value="mid">Mid-Range (Rs. 20,000 - 30,000)</option>
              <option value="premium">Premium Pro (&gt; Rs. 30,000)</option>
            </select>
          </div>

          {/* Duration */}
          <div className="space-y-1.5">
            <label className="text-[11px] font-bold uppercase tracking-wider block" style={{ color: "var(--text-secondary)" }}>
              {t.filterDuration}
            </label>
            <select
              value={filters.duration}
              onChange={(e) => onChange({ ...filters, duration: e.target.value })}
              className="w-full px-3 py-2 rounded-xl border text-xs font-medium focus:outline-none focus:ring-2 focus:ring-[#0066D6]"
              style={{
                backgroundColor: "var(--surface)",
                borderColor: "var(--border)",
                color: "var(--text-primary)",
              }}
            >
              <option value="">All Durations</option>
              <option value="under-1-month">Under 1 Month</option>
              <option value="1-3-months">1 - 3 Months</option>
              <option value="3-plus-months">3+ Months</option>
            </select>
          </div>

          {/* Schedule Slot */}
          <div className="space-y-1.5">
            <label className="text-[11px] font-bold uppercase tracking-wider block" style={{ color: "var(--text-secondary)" }}>
              {t.filterSchedule}
            </label>
            <select
              value={filters.scheduleSlot}
              onChange={(e) => onChange({ ...filters, scheduleSlot: e.target.value })}
              className="w-full px-3 py-2 rounded-xl border text-xs font-medium focus:outline-none focus:ring-2 focus:ring-[#0066D6]"
              style={{
                backgroundColor: "var(--surface)",
                borderColor: "var(--border)",
                color: "var(--text-primary)",
              }}
            >
              <option value="">All Time Slots</option>
              <option value="morning">Morning Classes</option>
              <option value="evening">Evening Classes</option>
              <option value="weekend">Weekend Classes</option>
            </select>
          </div>

        </div>

      </div>

    </div>
  );
}
