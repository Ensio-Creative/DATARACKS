import { useState } from "react";
// import { ChevronDown } from "lucide-react";

interface AccordionItem {
    title: string;
    content: string;
}

interface AccordionProps {
    items: AccordionItem[];
}

export default function Accordion({ items }: AccordionProps) {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const toggleItem = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="w-full divide-y divide-[#CFCFCF]">
            {items.map((item, index) => (
                <div key={index}>
                    <button
                        onClick={() => toggleItem(index)}
                        className="w-full flex justify-between items-center py-6 text-left transition-all"
                    >
                        <span className="">{item.title}</span>

                        <button className="bg-[#EAF4FF] w-8 h-8 rounded-full">
                            {activeIndex === index ? '-' : '+'}
                        </button>
                        {/* <ChevronDown
                            className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${activeIndex === index ? "rotate-180" : ""
                                }`}
                        /> */}
                    </button>
                    <div
                        className={`overflow-hidden transition-all duration-300 ${activeIndex === index ? "max-h-40" : "max-h-0"
                            }`}
                    >
                        <p className="px-6 pb-4 text-gray-600">{item.content}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}
