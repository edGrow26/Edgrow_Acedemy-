"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, PhoneCall, AlertCircle, ArrowRight, ShieldCheck, XCircle } from "lucide-react";
import { applicationSchema, ApplicationFormData } from "@/lib/validation";
import { Course } from "@/lib/types";
import { dictionary } from "@/lib/i18n";

interface ApplicationFormProps {
  course?: Course;
  allCourses?: Course[];
}

export default function ApplicationForm({ course, allCourses = [] }: ApplicationFormProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState<ApplicationFormData | null>(null);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const t = dictionary.en;

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ApplicationFormData>({
    resolver: zodResolver(applicationSchema),
    defaultValues: {
      courseId: course?.id || (allCourses[0]?.id ?? ""),
      fullName: "",
      phone: "",
      email: "",
    },
  });

  const onSubmit = async (data: ApplicationFormData) => {
    setSubmitError(null);
    try {
      const response = await fetch("/api/course-applications", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          selectedCourseId: data.courseId,
          fullName: data.fullName,
          phoneNumber: data.phone,
          email: data.email || "",
        }),
      });

      if (!response.ok) {
        const err = await response.json();
        throw new Error(err.error || "Failed to submit application");
      }

      // Only mark as submitted after Sanity confirms success
      setSubmittedData(data);
      setIsSubmitted(true);
      reset();
    } catch (error: any) {
      console.error("Failed to submit to Sanity:", error);
      setSubmitError(
        error?.message || "Something went wrong. Please try again or contact us directly."
      );
    }
  };

  return (
    <div
      id="apply-form"
      className="p-6 sm:p-8 rounded-2xl border shadow-2xl relative overflow-hidden backdrop-blur-xl"
      style={{
        backgroundColor: "var(--glass-bg)",
        borderColor: "var(--border)",
      }}
    >
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#0066D6]/10 rounded-full blur-3xl pointer-events-none" />

      <AnimatePresence mode="wait">
        {isSubmitted ? (
          <motion.div
            key="success-message"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="text-center py-8 space-y-6"
          >
            <div className="w-16 h-16 rounded-full bg-[#00BFA5]/20 text-[#00BFA5] mx-auto flex items-center justify-center border border-[#00BFA5]/30">
              <CheckCircle2 className="w-10 h-10 animate-bounce" />
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl font-bold" style={{ color: "var(--text-primary)" }}>
                Application Submitted Successfully!
              </h3>
              <p className="text-sm max-w-md mx-auto leading-relaxed" style={{ color: "var(--text-body)" }}>
                {t.successMessage}
              </p>
            </div>

            {submittedData && (
              <div
                className="p-4 rounded-xl text-xs space-y-1.5 max-w-sm mx-auto text-left border"
                style={{
                  backgroundColor: "var(--surface)",
                  borderColor: "var(--border)",
                  color: "var(--text-secondary)",
                }}
              >
                <p><strong>Applicant Name:</strong> {submittedData.fullName}</p>
                <p><strong>WhatsApp Number:</strong> {submittedData.phone}</p>
                <p><strong>Status:</strong> Pending WhatsApp Verification</p>
              </div>
            )}

            <button
              type="button"
              onClick={() => setIsSubmitted(false)}
              className="inline-flex items-center gap-2 text-xs font-bold text-[#0066D6] hover:underline"
            >
              Submit Another Application
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="application-form"
            onSubmit={handleSubmit(onSubmit)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="space-y-5"
          >
            <div>
              <h3 className="text-xl sm:text-2xl font-bold" style={{ color: "var(--text-primary)" }}>
                {t.applyFormTitle}
              </h3>
              <p className="text-xs font-medium mt-1" style={{ color: "var(--text-secondary)" }}>
                Fill in your details. Our admin team will contact you on WhatsApp to finalize your enrolment.
              </p>
            </div>

            {/* Course Select */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold uppercase tracking-wider block" style={{ color: "var(--text-primary)" }}>
                Selected Course
              </label>
              {course ? (
                <div
                  className="p-3 rounded-xl border text-sm font-semibold flex items-center justify-between"
                  style={{
                    backgroundColor: "var(--surface)",
                    borderColor: "var(--border)",
                    color: "var(--text-primary)",
                  }}
                >
                  <span>{course.title}</span>
                  <span className="text-xs text-[#0066D6] font-bold">Rs. {course.fee.toLocaleString()}</span>
                  <input type="hidden" {...register("courseId")} value={course.id} />
                </div>
              ) : (
                <select
                  {...register("courseId")}
                  className="w-full p-3 rounded-xl border text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-[#0066D6]"
                  style={{
                    backgroundColor: "var(--surface)",
                    borderColor: "var(--border)",
                    color: "var(--text-primary)",
                  }}
                >
                  {allCourses.map((c) => (
                    <option key={c.id} value={c.id}>
                      {c.title} - Rs. {c.fee.toLocaleString()}
                    </option>
                  ))}
                </select>
              )}
              {errors.courseId && (
                <p className="text-xs text-red-500 font-semibold">{errors.courseId.message}</p>
              )}
            </div>

            {/* Full Name */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold uppercase tracking-wider block" style={{ color: "var(--text-primary)" }}>
                {t.fullNameLabel} <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                {...register("fullName")}
                placeholder="e.g. Kajan Tharmalingam"
                className={`w-full p-3 rounded-xl border text-sm focus:outline-none focus:ring-2 transition-all ${
                  errors.fullName ? "border-red-500 ring-1 ring-red-500" : "focus:ring-[#0066D6]"
                }`}
                style={{
                  backgroundColor: "var(--surface)",
                  borderColor: errors.fullName ? "#ef4444" : "var(--border)",
                  color: "var(--text-primary)",
                }}
              />
              {errors.fullName && (
                <p className="text-xs text-red-500 font-semibold flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5" />
                  {errors.fullName.message}
                </p>
              )}
            </div>

            {/* Phone Number (Mandatory) */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold uppercase tracking-wider block" style={{ color: "var(--text-primary)" }}>
                {t.phoneLabel} <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <PhoneCall className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#00BFA5]" />
                <input
                  type="text"
                  {...register("phone")}
                  placeholder={t.phonePlaceholder}
                  className={`w-full pl-10 pr-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2 transition-all ${
                    errors.phone ? "border-red-500 ring-1 ring-red-500" : "focus:ring-[#0066D6]"
                  }`}
                  style={{
                    backgroundColor: "var(--surface)",
                    borderColor: errors.phone ? "#ef4444" : "var(--border)",
                    color: "var(--text-primary)",
                  }}
                />
              </div>
              {errors.phone ? (
                <p className="text-xs text-red-500 font-semibold flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5" />
                  {errors.phone.message}
                </p>
              ) : (
                <p className="text-[11px]" style={{ color: "var(--text-muted)" }}>
                  Valid Sri Lankan phone formats: 0771234567 or +94771234567.
                </p>
              )}
            </div>

            {/* Email (Optional) */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold uppercase tracking-wider block" style={{ color: "var(--text-primary)" }}>
                {t.emailLabel}
              </label>
              <input
                type="email"
                {...register("email")}
                placeholder="your.name@example.com"
                className="w-full p-3 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-[#0066D6]"
                style={{
                  backgroundColor: "var(--surface)",
                  borderColor: "var(--border)",
                  color: "var(--text-primary)",
                }}
              />
              {errors.email && (
                <p className="text-xs text-red-500 font-semibold">{errors.email.message}</p>
              )}
            </div>

            {/* Policy Checkbox Notice */}
            <div className="p-3 rounded-xl bg-[#0066D6]/10 border border-[#0066D6]/20 text-xs space-y-1">
              <div className="flex items-center gap-1.5 font-bold text-[#0066D6]">
                <ShieldCheck className="w-4 h-4" />
                <span>Verified WhatsApp Enrolment Process</span>
              </div>
              <p style={{ color: "var(--text-body)" }}>
                Upon submission, our admin team will reach out via WhatsApp to verify your registration and send payment bank details.
              </p>
            </div>

            {/* Submit Error Message */}
            {submitError && (
              <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/30 flex items-start gap-2 text-xs">
                <XCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                <p className="text-red-400 font-medium">{submitError}</p>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3.5 px-4 rounded-xl text-sm font-bold text-white shadow-xl transition-all duration-200 hover:opacity-90 active:scale-98 flex items-center justify-center gap-2"
              style={{ background: "linear-gradient(135deg, var(--primary-blue), var(--accent-teal))" }}
            >
              {isSubmitting ? (
                <span>Submitting...</span>
              ) : (
                <>
                  <span>{t.submitApplication}</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
