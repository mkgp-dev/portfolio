import { CERTIFICATES_LIST } from "@/constants/certificates";
import type { CertificateDefinition } from "@/types";

export default function Certificates() {

    return (
        <div className="divide-y divide-border">
            {CERTIFICATES_LIST.map((item: CertificateDefinition, index: number) => (
                <div key={index} className="flex flex-col py-3">
                    <div className="flex items-center justify-between">
                        <h4 className="font-heading font-medium text-lg">
                            <a href={item.link} target="_blank" rel="noopener noreferrer">
                                {item.name}
                            </a>
                        </h4>
                        <p className="text-muted-foreground text-sm">{item.date}</p>
                    </div>
                    
                    <p className="text-muted-foreground text-sm -mt-2">{item.issuer}</p>
                    <p className="text-sm">{item.description}</p>
                </div>
            ))}
        </div>
    );
}