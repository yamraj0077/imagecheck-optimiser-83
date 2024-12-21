import { Helmet } from "react-helmet";
import { PageHeader } from "@/components/PageHeader";
import { ToolCard } from "@/components/ToolCard";
import { 
  Video,
  AudioLines,
  VideoOff,
  Music,
  Mic,
  Film,
  Camera,
  AudioWaveform,
  Headphones,
  Radio
} from "lucide-react";

const mediaTools = [
  {
    title: "Video Converter",
    description: "Convert videos between different formats including MP4, AVI, MOV, and more.",
    icon: <Video className="h-6 w-6" />,
    to: "/media-tools/convert"
  },
  {
    title: "Audio Converter",
    description: "Convert audio files between MP3, WAV, AAC, and other popular formats.",
    icon: <AudioLines className="h-6 w-6" />,
    to: "/media-tools/audio-convert"
  },
  {
    title: "Video Compressor",
    description: "Reduce video file size while maintaining quality for easier sharing.",
    icon: <VideoOff className="h-6 w-6" />,
    to: "/media-tools/compress"
  },
  {
    title: "Audio Editor",
    description: "Edit audio files with basic tools like trim, merge, and effects.",
    icon: <Music className="h-6 w-6" />,
    to: "/media-tools/audio-editor"
  },
  {
    title: "Voice Recorder",
    description: "Record voice memos and audio directly from your browser.",
    icon: <Mic className="h-6 w-6" />,
    to: "/media-tools/voice-recorder"
  },
  {
    title: "Video Editor",
    description: "Basic video editing tools for trimming, merging, and adding effects.",
    icon: <Film className="h-6 w-6" />,
    to: "/media-tools/video-editor"
  },
  {
    title: "Screen Recorder",
    description: "Record your screen and webcam for tutorials and presentations.",
    icon: <Camera className="h-6 w-6" />,
    to: "/media-tools/screen-recorder"
  },
  {
    title: "Audio Extractor",
    description: "Extract audio tracks from video files in various formats.",
    icon: <AudioWaveform className="h-6 w-6" />,
    to: "/media-tools/audio-extract"
  },
  {
    title: "Audio Mixer",
    description: "Mix multiple audio tracks together with volume control.",
    icon: <Headphones className="h-6 w-6" />,
    to: "/media-tools/audio-mixer"
  },
  {
    title: "Podcast Editor",
    description: "Edit and enhance podcast audio with specialized tools.",
    icon: <Radio className="h-6 w-6" />,
    to: "/media-tools/podcast-editor"
  }
];

const MediaTools = () => {
  return (
    <>
      <Helmet>
        <title>Free Online Media Tools - Edit, Convert & Process Audio/Video</title>
        <meta name="description" content="Free online media tools to edit, convert, compress, and process audio and video files. Easy-to-use tools for audio editing, video conversion, and more." />
        <meta name="keywords" content="media editor, video converter, audio editor, compress video, screen recorder, voice recorder, podcast editor, free media tools" />
        <meta property="og:title" content="Free Online Media Tools - Edit, Convert & Process Audio/Video" />
        <meta property="og:description" content="Free online media tools to edit, convert, compress, and process audio and video files. No installation required." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourwebsite.com/media-tools" />
        <link rel="canonical" href="https://yourwebsite.com/media-tools" />
        <meta name="robots" content="index, follow" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "Free Online Media Tools",
              "description": "Free online media tools to edit, convert, compress, and process audio and video files.",
              "url": "https://yourwebsite.com/media-tools",
              "mainEntity": {
                "@type": "SoftwareApplication",
                "name": "Media Tools",
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
          title="Media Tools"
          description="Free online tools to edit, convert, compress, and process your audio and video files"
          category="Media Processing"
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {mediaTools.map((tool) => (
            <ToolCard key={tool.title} {...tool} />
          ))}
        </div>
      </div>
    </>
  );
};

export default MediaTools;