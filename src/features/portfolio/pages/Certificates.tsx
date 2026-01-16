import { Badge } from "@/shared/ui/badge";
import { CERTIFICATES_LIST } from "@/features/portfolio/data/certificates";
import type { Certificate } from "@/features/portfolio/types";

export default function Certificates() {

    return (
        <section>
            <div className="flex flex-col -mt-4">
                <div className="divide-y divide-border">
                    {CERTIFICATES_LIST.map((item: Certificate, index: number) => (
                        <div key={index} className="flex flex-col py-3">
                            <div className="flex items-center justify-between">
                                <h4 className="font-heading font-medium text-lg leading-tight">
                                    <a href={item.link} target="_blank" rel="noopener noreferrer">
                                        {item.name}
                                    </a>
                                </h4>
                                <Badge>{item.date}</Badge>
                            </div>

                            <p className="text-muted-foreground text-sm">{item.issuer}</p>
                            <p className="text-sm mt-2">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
