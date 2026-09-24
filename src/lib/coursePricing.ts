export type CourseDiscountType = "percent" | "fixed";

export type CourseFeeBucket = "budget" | "mid" | "premium";

const dayNamePattern = /\b(?:monday|tuesday|wednesday|thursday|friday|saturday|sunday)\b/i;

export function getCourseClassDays(classDays?: string): string {
  return classDays && dayNamePattern.test(classDays) ? classDays : "Monday";
}

export function getCourseFeeBucket(fee: number): CourseFeeBucket {
  if (fee < 20000) return "budget";
  if (fee <= 30000) return "mid";
  return "premium";
}

export interface CoursePricingInfo {
  baseFee: number;
  discountedFee: number;
  discountAmount: number;
  hasDiscount: boolean;
  couponCode?: string;
  discountLabel: string;
}

export function getCoursePricingInfo(course: {
  fee: number;
  couponCode?: string;
  discountType?: CourseDiscountType;
  discountValue?: number;
}, enteredCouponCode?: string): CoursePricingInfo {
  const baseFee = Math.max(0, course.fee || 0);
  const configuredCouponCode = course.couponCode?.trim();
  const couponCode = enteredCouponCode?.trim();
  const discountValue = typeof course.discountValue === "number" ? course.discountValue : 0;
  const hasDiscount = Boolean(
    couponCode &&
    configuredCouponCode &&
    couponCode.toLowerCase() === configuredCouponCode.toLowerCase() &&
    discountValue > 0
  );

  if (!hasDiscount) {
    return {
      baseFee,
      discountedFee: baseFee,
      discountAmount: 0,
      hasDiscount: false,
      couponCode: configuredCouponCode,
      discountLabel: "",
    };
  }

  let discountAmount = 0;

  if (course.discountType === "fixed") {
    discountAmount = Math.min(baseFee, discountValue);
  } else {
    discountAmount = Math.round((baseFee * discountValue) / 100);
  }

  const discountedFee = Math.max(0, baseFee - discountAmount);
  const discountLabel = course.discountType === "fixed"
    ? `Rs. ${discountAmount.toLocaleString()} off`
    : `${discountValue}% off`;

  return {
    baseFee,
    discountedFee,
    discountAmount,
    hasDiscount: true,
    couponCode: configuredCouponCode,
    discountLabel,
  };
}
