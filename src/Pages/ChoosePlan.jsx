import { useNavigate } from "react-router-dom";
import wifiIcon from "../assets/wifi.png";
import crownIcon from "../assets/crown.png";
import logo from "../assets/Logo.jpeg";

export default function Plans() {
  const navigate = useNavigate();

  const plans = [
    {
      id: "free",
      title: "Free Wi-Fi Access",
      icon: wifiIcon,
      label: "Popular",
      button: "Get Free Access",
      path: "/App",
      features: [
        "Register once to enjoy free internet with local ads and offers",
        "Quick registration process",
        "Basic internet access",
        "Local deals and offers",
        "Community announcements",
        "Municipal service updates",
      ],
    },
    {
      id: "premium",
      title: "Premium Wi-Fi Access",
      icon: crownIcon,
      label: "Premium",
      button: "Get Premium Access",
      path: "/Premium",
      features: [
        "Lightning-fast speed up to 200Mbps",
        "Unlimited data usage",
        "Ad-free browsing experience",
        "Priority customer support",
        "No interruptions or throttling",
        "Best for streaming and gaming",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-green-400 p-6 flex flex-col items-center">
      {/* Logo */}
      <div className="mb-8">
        <img src={logo} alt="Logo" className="h-24 w-24 rounded-full shadow-md" />
      </div>

      {/* Heading */}
      <h2 className="text-2xl font-semibold text-white mb-8 text-center drop-shadow-lg">
        Choose Your Plan
      </h2>

      {/* Plans Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full max-w-5xl">
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
              <img
                src={plan.icon}
                alt={`${plan.id}-icon`}
                className="bg-green-400 p-2 rounded-full h-12 w-12"
              />
            </div>

            {/* Title */}
            <h3 className="text-lg font-bold text-blue-600 mb-3 text-center">
              {plan.title}
            </h3>

            {/* Features */}
            <ul className="text-sm text-gray-700 space-y-2 mb-6 list-disc list-inside">
              {plan.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>

            {/* Button */}
            <button
              onClick={() => navigate(plan.path)}
              className="w-full bg-gradient-to-r from-blue-500 to-green-400 text-white py-2 rounded-lg hover:opacity-90 transition"
            >
              {plan.button}
            </button>
          </div>
        ))}
      </div>

      {/* Navigation Dots */}
      <div className="flex justify-center space-x-4 mt-8">
        <button
          className="w-5 h-5 rounded-full bg-gray-400 hover:bg-gray-600 transition"
          onClick={() => navigate("/App")}
        ></button>
        <button
          className="w-5 h-5 rounded-full bg-gray-400 hover:bg-gray-600 transition"
          onClick={() => navigate("/Plans")}
        ></button>
        <button
          className="w-5 h-5 rounded-full bg-gray-400 hover:bg-gray-600 transition"
          onClick={() => navigate("/Premium")}
        ></button>
      </div>
    </div>
  );
}
