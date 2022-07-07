/// <reference types="gravitysoftware__dnssd" />
export class MdnsDiscovery extends TypedEmitter<MdnsDiscoveryEvents> {
    constructor();
    lookup(serviceType: import('@gravitysoftware/dnssd').ServiceIdentifier | string): Promise<void>;
    stopLookup(): Promise<void>;
    announce(serviceType: import('@gravitysoftware/dnssd').ServiceIdentifier | string, options: import('@gravitysoftware/dnssd').Service): void;
    updateTxt(txt: object): void;
    createServiceType(options: import('@gravitysoftware/dnssd').Service): dnssd.ServiceType;
    unannounce(immediate?: boolean | undefined): void;
    destroy(): void;
    #private;
}
export type MdnsDiscoveryEvents = {
    service: (service: import('@gravitysoftware/dnssd').Service) => void;
    serviceDown: (serviceDown: import('@gravitysoftware/dnssd').Service) => void;
    serviceChanged: (serviceChanged: import('@gravitysoftware/dnssd').Service) => void;
    stopAnnouncing: (stopAnnouncing: void) => void;
    stopLookup: (stopLookup: void) => void;
    error: (error: Error) => void;
};
import { TypedEmitter } from "tiny-typed-emitter";
import dnssd from "@gravitysoftware/dnssd";
//# sourceMappingURL=index.d.ts.map