export class MdnsDiscovery extends TypedEmitter<MdnsDiscoveryEvents> {
    constructor();
    lookup(name: string): Promise<void>;
    stopLookup(): Promise<void>;
    announce(name: string, options: {
        port: number;
        txt: object;
    }): void;
    updateTxt(txt: object): void;
    unannounce(immediate?: boolean | undefined): void;
    destroy(): void;
    #private;
}
export type MdnsDiscoveryEvents = {
    service: (service: import('@gravitysoftware/dnssd').ServiceType) => void;
    serviceDown: (serviceDown: import('@gravitysoftware/dnssd').ServiceType) => void;
    serviceChanged: (serviceChanged: import('@gravitysoftware/dnssd').ServiceType) => void;
    stopped: (stopped: void) => void;
    error: (error: Error) => void;
};
import { TypedEmitter } from "tiny-typed-emitter";
//# sourceMappingURL=index.d.ts.map