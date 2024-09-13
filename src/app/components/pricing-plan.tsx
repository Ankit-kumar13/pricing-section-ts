import React from "react";

interface PricingPlanProps {
    popularity: string;
    currency: string;
    totalPrice: string;
    pricesCurrencyDesc: string;
    paymentPlanHeading: string;
    paymnentPlanDesc: string;
    paymentCtaLabel: string;
}

const PricingPlan: React.FC<PricingPlanProps> = (props: PricingPlanProps) => {
    return (
        <div className="pricing-plan-card-wrapper border p-8 rounded-md shadow-lg text-center">
            <span className="bg-green-50 p-2 rounded-xl text-green-700">{props.popularity}</span>
            <p className="font-bold text-6xl">{props.currency} {props.totalPrice}</p>
            <p className="text-sm text-neutral-600">{props.pricesCurrencyDesc}</p>

            <h3 className="text-xl text-neutral-900 pt-8">{props.paymentPlanHeading}</h3>
            <p className="text-xl text-neutral-900 pb-8">{props.paymnentPlanDesc}</p>
            <button className="w-full bg-indigo-700 text-white py-3 rounded">{props.paymentCtaLabel}</button>
        </div>
    )
}

export default PricingPlan;