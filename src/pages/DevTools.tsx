import { Helmet } from "react-helmet";
import { PageHeader } from "@/components/PageHeader";
import { ToolCard } from "@/components/ToolCard";
import { 
  Code,
  Terminal,
  FileJson,
  Binary,
  Database,
  GitBranch,
  Regex,
  FileCode,
  Webhook,
  Bug
} from "lucide-react";

const devTools = [
  {
    title: "JSON Formatter",
    description: "Format and validate JSON data with syntax highlighting and error detection.",
    icon: <FileJson className="h-6 w-6" />,
    to: "/dev-tools/json-formatter"
  },
  {
    title: "Code Beautifier",
    description: "Beautify and format code in multiple programming languages.",
    icon: <Code className="h-6 w-6" />,
    to: "/dev-tools/code-beautifier"
  },
  {
    title: "Base64 Encoder/Decoder",
    description: "Convert text and files to and from Base64 encoding.",
    icon: <Binary className="h-6 w-6" />,
    to: "/dev-tools/base64"
  },
  {
    title: "SQL Formatter",
    description: "Format SQL queries with proper indentation and syntax highlighting.",
    icon: <Database className="h-6 w-6" />,
    to: "/dev-tools/sql-formatter"
  },
  {
    title: "Git Diff Viewer",
    description: "View and analyze Git diffs with syntax highlighting.",
    icon: <GitBranch className="h-6 w-6" />,
    to: "/dev-tools/git-diff"
  },
  {
    title: "Regex Tester",
    description: "Test and debug regular expressions with real-time matching.",
    icon: <Regex className="h-6 w-6" />,
    to: "/dev-tools/regex"
  },
  {
    title: "HTML Formatter",
    description: "Format and beautify HTML code with proper indentation.",
    icon: <FileCode className="h-6 w-6" />,
    to: "/dev-tools/html-formatter"
  },
  {
    title: "API Tester",
    description: "Test API endpoints with custom headers and parameters.",
    icon: <Webhook className="h-6 w-6" />,
    to: "/dev-tools/api-tester"
  },
  {
    title: "Terminal Emulator",
    description: "Browser-based terminal emulator for quick command testing.",
    icon: <Terminal className="h-6 w-6" />,
    to: "/dev-tools/terminal"
  },
  {
    title: "Debug Console",
    description: "Advanced console for debugging JavaScript code.",
    icon: <Bug className="h-6 w-6" />,
    to: "/dev-tools/debug"
  }
];

const DevTools = () => {
  return (
    <>
      <Helmet>
        <title>Free Online Developer Tools - Code Formatting & Testing</title>
        <meta name="description" content="Free online developer tools for code formatting, testing, and debugging. Essential tools for programmers including JSON formatter, regex tester, and more." />
        <meta name="keywords" content="developer tools, code formatter, json formatter, regex tester, api tester, sql formatter, git diff viewer, base64 encoder" />
        <meta property="og:title" content="Free Online Developer Tools - Code Formatting & Testing" />
        <meta property="og:description" content="Free online developer tools for code formatting, testing, and debugging. No installation required." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourwebsite.com/dev-tools" />
        <link rel="canonical" href="https://yourwebsite.com/dev-tools" />
        <meta name="robots" content="index, follow" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "Free Online Developer Tools",
              "description": "Free online developer tools for code formatting, testing, and debugging.",
              "url": "https://yourwebsite.com/dev-tools",
              "mainEntity": {
                "@type": "SoftwareApplication",
                "name": "Developer Tools",
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
          title="Developer Tools"
          description="Free online tools for code formatting, testing, and debugging"
          category="Development"
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {devTools.map((tool) => (
            <ToolCard key={tool.title} {...tool} />
          ))}
        </div>
      </div>
    </>
  );
};

export default DevTools;