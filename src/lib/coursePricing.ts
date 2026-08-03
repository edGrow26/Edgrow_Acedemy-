export type CourseDiscountType = "percent" | "fixed";

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
}): CoursePricingInfo {
  const baseFee = Math.max(0, course.fee || 0);
  const couponCode = course.couponCode?.trim();
  const discountValue = typeof course.discountValue === "number" ? course.discountValue : 0;
  const hasDiscount = Boolean(couponCode && discountValue > 0);

  if (!hasDiscount) {
    return {
      baseFee,
      discountedFee: baseFee,
      discountAmount: 0,
      hasDiscount: false,
      couponCode,
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
    couponCode,
    discountLabel,
  };
}
