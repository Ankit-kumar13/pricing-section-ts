import React from "react";

interface PaymentHeaderProps {
    paymentFrequency: string;
    paymentHeader: string;
    paymentDescription: string;
}

const PaymentCardHeader: React.FC<PaymentHeaderProps> = ({paymentFrequency, paymentHeader, paymentDescription }) => {
    return (
        <div className="rounded-md text-center">
            <h2 className=" text-indigo-700 font-semibold text-base">
                {paymentFrequency}
            </h2>
            <p className="text-neutral-900 font-semibold text-5xl">{paymentHeader}</p>
            <p className="mt-2 text-neutral-600 font-normal text-xl">{paymentDescription}</p>
        </div>
    )
}

export default PaymentCardHeader;