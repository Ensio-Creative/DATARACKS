import { Link, useParams, type MetaDescriptor } from "react-router";
import { solutions, stringToSlug } from "../home";
import { ArrowDown } from "lucide-react";

// --- Normalizer ---
function normalize(str: string) {
    return str
        .toLowerCase()
        .replace(/&/g, "and")
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "");
}

// --- Component ---
export default function ProductDetail() {
    const { slug } = useParams<{ slug: string }>();

    const solution = solutions.find((s) => normalize(s.title) === normalize(slug || ""));

    if (!solution) {
        return (
            <div className="max-w-5xl mx-auto text-center py-24">
                <h1 className="text-3xl font-semibold mb-4 text-gray-800">
                    Product Not Found
                </h1>
                <p className="text-gray-500">
                    We couldn’t find a product that matches “{slug}”.
                </p>
            </div>
        );
    }

    const otherSolutions = solutions
        .filter((s) => s.title !== solution.title)
        .slice(0, 3);


    return (
        <section className="mt-20">
            <div className="grid md:grid-cols-2">
                <div className="bg-[#F5F5F5] p-20 flex flex-col justify-center">
                    <h1 className="text-4xl md:text-[72px] font-light mb-6 text-[#0F0765]">
                        {solution.title}
                    </h1>

                    <button onClick={() => {
                        window.scrollBy({
                            top: 500, // adjust this value as needed
                            behavior: "smooth",
                        });
                    }} className="flex gap-4">
                        <div className="bg-[#0F0765] text-white p-2">
                            <ArrowDown />
                        </div>
                        <span className="font-light my-auto">Explore</span>
                    </button>
                </div>

                <img
                    src={`/images/solutions/${solution.image}`}
                    alt={solution.title}
                    className="w-full md:h-[550px] object-cover"
                />
            </div>
            <div className="max-w-5xl mx-auto px-4 my-20">
                <div className="text-lg text-gray-700 leading-relaxed">
                    {solution.content || (
                        <p className="text-gray-600">
                            Details for <strong>{solution.title}</strong> are coming soon.
                        </p>
                    )}
                </div>
            </div>

            <section className="bg-[#F5F5F5]">
                <div className="max-w-7xl mx-auto px-4 py-16">
                    <h3 className="text-4xl font-light mb-6">Other Solutions</h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                        {otherSolutions.map((item) => (
                            <Link
                                key={item.title}
                                to={`/solutions/${stringToSlug(item.title)}`}
                                className="bg-white"
                            >
                                <img
                                    src={`/images/solutions/${item.image}`}
                                    alt={item.title}
                                    className="w-full h-56 object-cover "
                                />
                                <div className="p-6">
                                    <h3 className="text-xl font-light">
                                        {item.title}
                                    </h3>

                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </section>
    );
}

// --- Meta Tags ---
export function meta({ params }: { params: { slug: string } }): MetaDescriptor[] {
    const { slug } = params;
    const solution = solutions.find((s) => normalize(s.title) === normalize(slug || ""));

    if (!solution) {
        return [
            { title: "Product Not Found | Dataracks" },
            {
                name: "description",
                content: "We couldn’t find the product you were looking for.",
            },
        ];
    }

    return [{ title: `${solution.title} | Dataracks` }];
}
