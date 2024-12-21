import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { BookOpen } from "lucide-react";

interface ManualSection {
  title: string;
  content: string;
}

interface ToolManualProps {
  sections: ManualSection[];
}

export const ToolManual = ({ sections }: ToolManualProps) => {
  return (
    <div className="mt-8">
      <div className="flex items-center gap-2 mb-4">
        <BookOpen className="h-5 w-5 text-primary" />
        <h2 className="text-2xl font-semibold">User Manual</h2>
      </div>
      <Accordion type="single" collapsible className="w-full">
        {sections.map((section, index) => (
          <AccordionItem key={index} value={`section-${index}`}>
            <AccordionTrigger>{section.title}</AccordionTrigger>
            <AccordionContent>
              <p className="text-muted-foreground">{section.content}</p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};