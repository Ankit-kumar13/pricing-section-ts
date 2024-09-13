import React from "react";
import checkIcon from '../check-fill.png';
import Image from "next/image";

interface PaymentFeatures {
    paymentFeaturesHeading: string;
    paymentKeyFeatures: string[];
}


const PaymentPlanFeatures: React.FC<PaymentFeatures> = ({paymentFeaturesHeading, paymentKeyFeatures}) => {
    return (
        <div className="payment-features">
            <h3 className="payment-features-heading text-4xl text-neutral-900">{paymentFeaturesHeading}</h3>
            <ul className="list-image-none features-list">
                {
                    paymentKeyFeatures.map((feature, index) => (

                        <li key={index} className="payment-feature-item text-lg text-neutral-600 pb-5">
                            <Image src={checkIcon} alt="Icon" width={24} height={24} className="inline-block mr-3"/>
                            {feature}
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default PaymentPlanFeatures;