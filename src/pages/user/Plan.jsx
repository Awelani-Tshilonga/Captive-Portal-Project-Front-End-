import { useNavigate } from "react-router-dom";
import Icon from "../assets/wifi.png";
import logo from "../assets/Logo.jpeg";

export default function Plan() {
  const navigate = useNavigate();

  const plans = [
    {
      id: "daily",
      title: "R15 per Day",
      label: "Popular",
      details: [
        "24-hour Access",
        "Basic speed 50Mbps",
        "Unlimited Data",
        "Priority Support",
        "Ad-free Browsing",
      ],
      button: "Select Daily Pro",
    },
    {
      id: "weekly",
      title: "R79 per Week",
      label: "Best Value",
      details: [
        "7-Day Access",
        "Premium speed 100Mbps",
        "10GB Data allowance",
        "Priority Support",
        "Ad-free Browsing",
      ],
      button: "Select Weekly Pro",
    },
    {
      id: "monthly",
      title: "R249 per Month",
      label: "Premium",
      details: [
        "30-Day Access",
        "Ultra speed 200Mbps",
        "Unlimited Data",
        "VIP Support",
        "Ad-free Browsing",
      ],
      button: "Select Monthly Pro",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-green-400 p-6 flex flex-col items-center">
      {/* Logo */}
      <div className="mb-8">
        <img src={logo} alt="logo" className="h-16 w-16 rounded-full shadow-md" />
      </div>

      {/* Heading */}
      <h2 className="text-2xl font-semibold text-white mb-8 text-center drop-shadow-lg">
        Choose Your Plan
      </h2>

      {/* Plan Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full max-w-6xl">
        {plans.map((plan) => (
          <div
            key={plan.id}
            className="relative bg-white border-4 border-green-400 rounded-2xl shadow-lg p-6 transition hover:scale-105 hover:shadow-2xl"
          >
            {/* Label */}
            <span className="absolute top-0 left-0 bg-green-500 text-white text-xs font-semibold px-3 py-1 rounded-br-lg">
              {plan.label}
            </span>

            {/* Icon */}
            <div className="flex justify-center mb-3">
              <img src={Icon} alt="wifi icon" className="bg-green-400 p-2 rounded-full h-12 w-12" />
            </div>

            {/* Title */}
            <h3 className="text-lg font-bold text-blue-600 mb-3 text-center">
              {plan.title}
            </h3>

            {/* Details */}
            <ul className="text-sm text-gray-700 space-y-2 mb-6 list-disc list-inside">
              {plan.details.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>

            {/* Button */}
            <button
              onClick={() => navigate("/payy")} // ✅ All buttons go to /payy
              className="w-full bg-gradient-to-r from-blue-500 to-green-400 text-white py-2 rounded-lg hover:opacity-90 transition"
            >
              {plan.button}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}