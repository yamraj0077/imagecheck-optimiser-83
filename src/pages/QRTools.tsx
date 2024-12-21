import { Helmet } from "react-helmet";
import { PageHeader } from "@/components/PageHeader";
import { ToolCard } from "@/components/ToolCard";
import { 
  QrCode,
  Scan,
  Link,
  Mail,
  Phone,
  MapPin,
  Wifi,
  Calendar,
  CreditCard,
  Share2
} from "lucide-react";

const qrTools = [
  {
    title: "QR Code Generator",
    description: "Create custom QR codes for text, URLs, and more with logo options.",
    icon: <QrCode className="h-6 w-6" />,
    to: "/qr-tools/generator"
  },
  {
    title: "QR Code Scanner",
    description: "Scan QR codes using your device's camera or uploaded images.",
    icon: <Scan className="h-6 w-6" />,
    to: "/qr-tools/scanner"
  },
  {
    title: "URL QR Code",
    description: "Generate QR codes for websites and landing pages.",
    icon: <Link className="h-6 w-6" />,
    to: "/qr-tools/url"
  },
  {
    title: "Email QR Code",
    description: "Create QR codes for email addresses with pre-filled subject and body.",
    icon: <Mail className="h-6 w-6" />,
    to: "/qr-tools/email"
  },
  {
    title: "Phone QR Code",
    description: "Generate QR codes for phone numbers and contact information.",
    icon: <Phone className="h-6 w-6" />,
    to: "/qr-tools/phone"
  },
  {
    title: "Location QR Code",
    description: "Create QR codes for addresses and GPS coordinates.",
    icon: <MapPin className="h-6 w-6" />,
    to: "/qr-tools/location"
  },
  {
    title: "WiFi QR Code",
    description: "Generate QR codes for WiFi network credentials.",
    icon: <Wifi className="h-6 w-6" />,
    to: "/qr-tools/wifi"
  },
  {
    title: "Event QR Code",
    description: "Create QR codes for calendar events and appointments.",
    icon: <Calendar className="h-6 w-6" />,
    to: "/qr-tools/event"
  },
  {
    title: "Payment QR Code",
    description: "Generate QR codes for payment information and cryptocurrency addresses.",
    icon: <CreditCard className="h-6 w-6" />,
    to: "/qr-tools/payment"
  },
  {
    title: "vCard QR Code",
    description: "Create QR codes for sharing contact information.",
    icon: <Share2 className="h-6 w-6" />,
    to: "/qr-tools/vcard"
  }
];

const QRTools = () => {
  return (
    <>
      <Helmet>
        <title>Free Online QR Code Tools - Generate & Scan QR Codes</title>
        <meta name="description" content="Free online QR code tools to create and scan QR codes. Generate QR codes for URLs, text, contact info, WiFi, and more. No registration required." />
        <meta name="keywords" content="qr code generator, qr code scanner, create qr code, wifi qr code, vcard qr code, url qr code" />
        <meta property="og:title" content="Free Online QR Code Tools - Generate & Scan QR Codes" />
        <meta property="og:description" content="Free online QR code tools to create and scan QR codes. No installation or registration required." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourwebsite.com/qr-tools" />
        <link rel="canonical" href="https://yourwebsite.com/qr-tools" />
        <meta name="robots" content="index, follow" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "Free Online QR Code Tools",
              "description": "Free online QR code tools to create and scan QR codes.",
              "url": "https://yourwebsite.com/qr-tools",
              "mainEntity": {
                "@type": "SoftwareApplication",
                "name": "QR Code Tools",
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
          title="QR Code Tools"
          description="Free online tools to create and scan QR codes"
          category="QR Codes"
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {qrTools.map((tool) => (
            <ToolCard key={tool.title} {...tool} />
          ))}
        </div>
      </div>
    </>
  );
};

export default QRTools;