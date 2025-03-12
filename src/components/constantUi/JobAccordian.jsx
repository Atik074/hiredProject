import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import faqs from "../../data/faq.json";

const JobAccordian = () => {
  return (
    <Accordion type="single" collapsible className="w-full my-48 mx-auto px-8">
        <h2 className="text-center text-[28px] font-bold mb-12 underline underline-offset-8">Your Questions Answer About Us</h2>
      {faqs.map((faq) => (
        <AccordionItem
          key={faq.id}
          value={faq.id}
          className="border-b border-gray-300"
        >
          <AccordionTrigger className="py-5 px-8 text-[20px] font-medium text-gray-900 bg-white rounded-md shadow-md hover:bg-gray-100 hover:shadow-lg transition-all duration-300 ease-in-out  mb-4">
            {faq.question}
          </AccordionTrigger>
          <AccordionContent className="px-8 py-6 text-[19px] text-gray-800 bg-gray-50 border rounded-md shadow-sm mb-4">
            {faq.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default JobAccordian;
