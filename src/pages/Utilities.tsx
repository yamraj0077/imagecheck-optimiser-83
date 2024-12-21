import { Helmet } from "react-helmet";
import { PageHeader } from "@/components/PageHeader";
import { ToolCard } from "@/components/ToolCard";
import { 
  Calculator,
  Clock,
  Calendar,
  Hash,
  Ruler,
  Binary,
  Percent,
  Scale,
  Timer,
  Coins
} from "lucide-react";

const utilities = [
  {
    title: "Calculator",
    description: "Advanced calculator with scientific and programming functions.",
    icon: <Calculator className="h-6 w-6" />,
    to: "/utilities/calculator"
  },
  {
    title: "Time Zone Converter",
    description: "Convert times between different time zones worldwide.",
    icon: <Clock className="h-6 w-6" />,
    to: "/utilities/timezone"
  },
  {
    title: "Date Calculator",
    description: "Calculate time differences and add/subtract dates.",
    icon: <Calendar className="h-6 w-6" />,
    to: "/utilities/date"
  },
  {
    title: "Hash Generator",
    description: "Generate various hash values for text and files.",
    icon: <Hash className="h-6 w-6" />,
    to: "/utilities/hash"
  },
  {
    title: "Unit Converter",
    description: "Convert between different units of measurement.",
    icon: <Ruler className="h-6 w-6" />,
    to: "/utilities/units"
  },
  {
    title: "Number Base Converter",
    description: "Convert numbers between different number systems.",
    icon: <Binary className="h-6 w-6" />,
    to: "/utilities/base"
  },
  {
    title: "Percentage Calculator",
    description: "Calculate percentages and percentage changes.",
    icon: <Percent className="h-6 w-6" />,
    to: "/utilities/percentage"
  },
  {
    title: "BMI Calculator",
    description: "Calculate Body Mass Index (BMI) and health metrics.",
    icon: <Scale className="h-6 w-6" />,
    to: "/utilities/bmi"
  },
  {
    title: "Countdown Timer",
    description: "Create customizable countdown timers for events.",
    icon: <Timer className="h-6 w-6" />,
    to: "/utilities/countdown"
  },
  {
    title: "Currency Converter",
    description: "Convert between different currencies with live rates.",
    icon: <Coins className="h-6 w-6" />,
    to: "/utilities/currency"
  }
];

const Utilities = () => {
  return (
    <>
      <Helmet>
        <title>Free Online Utility Tools - Calculators & Converters</title>
        <meta name="description" content="Free online utility tools including calculators, converters, and timers. Essential tools for everyday calculations and conversions." />
        <meta name="keywords" content="calculator, unit converter, time zone converter, currency converter, bmi calculator, percentage calculator" />
        <meta property="og:title" content="Free Online Utility Tools - Calculators & Converters" />
        <meta property="og:description" content="Free online utility tools including calculators, converters, and timers. No installation required." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourwebsite.com/utilities" />
        <link rel="canonical" href="https://yourwebsite.com/utilities" />
        <meta name="robots" content="index, follow" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "Free Online Utility Tools",
              "description": "Free online utility tools including calculators, converters, and timers.",
              "url": "https://yourwebsite.com/utilities",
              "mainEntity": {
                "@type": "SoftwareApplication",
                "name": "Utility Tools",
                "applicationCategory": "WebApplication",
                "operatingSystem": "Any",
                "offers": {
                  "@type": "Offer",
                  "price": "0",
                  "priceCurrency": "USD"
                }
              }
            }
          `}
        </script>
      </Helmet>
      <div className="container py-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
        <PageHeader
          title="Utility Tools"
          description="Free online tools for calculations and conversions"
          category="Utilities"
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {utilities.map((tool) => (
            <ToolCard key={tool.title} {...tool} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Utilities;