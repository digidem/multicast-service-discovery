/// <reference types="gravitysoftware__dnssd" />
export class MdnsDiscovery extends TypedEmitter<MdnsDiscoveryEvents> {
    constructor();
    lookup(serviceType: dnssd.ServiceType | string): Promise<void>;
    stopLookup(): Promise<void>;
    announce(serviceType: dnssd.ServiceType | string, options: {
        port: number;
        txt: object;
    }): void;
    updateTxt(txt: object): void;
    createServiceType(options: dnssd.ServiceTypeOptions): dnssd.ServiceType;
    unannounce(immediate?: boolean | undefined): void;
    destroy(): void;
    #private;
}
export type MdnsDiscoveryEvents = {
    service: (service: dnssd.ServiceType) => void;
    serviceDown: (serviceDown: dnssd.ServiceType) => void;
    serviceChanged: (serviceChanged: dnssd.ServiceType) => void;
    stopAnnouncing: (stopAnnouncing: void) => void;
    stopLookup: (stopLookup: void) => void;
    error: (error: Error) => void;
};
import { TypedEmitter } from "tiny-typed-emitter";
import dnssd from "@gravitysoftware/dnssd";
//# sourceMappingURL=index.d.ts.map