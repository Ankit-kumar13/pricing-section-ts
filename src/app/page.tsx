import "./globals.css";
import PaymentCardHeader from "./components/pricing-header";
import PaymentPlanFeatures from "./components/pricing-feature";
import PricingPlan from "./components/pricing-plan";

export default function Home() {
  const paymentFeatures = [
    "128 available credits for all images",
    "Up to 3 users",
    "24 hour response time",
    "Advanced analytics"
  ];

  const pricingPlanProps = {
    popularity: "Popular",
    currency: "$",
    totalPrice: "699",
    pricesCurrencyDesc: "Prices in USD",
    paymentPlanHeading: "Pay once, use it forever.",
    paymnentPlanDesc: "No strings attached.",
    paymentCtaLabel: "Buy now"
};

  return (
    <>
      <div className="payment-page-wrapper">
        <PaymentCardHeader paymentFrequency="One time purchase" paymentHeader="Pay as you need" paymentDescription="We offer one-time purchases with credits, for you to use as needed. Always active."/>
        <div className="price-wrapper">
          <PaymentPlanFeatures paymentFeaturesHeading="Unlock creativity once, enjoy forever" paymentKeyFeatures={paymentFeatures}/>
          <PricingPlan {...pricingPlanProps} />
        </div>
      </div>
    </>
  );
}
