export class MdnsDiscovery extends TypedEmitter<MdnsDiscoveryEvents> {
    constructor();
    lookup(serviceType: ServiceType | string): Promise<void>;
    stopLookup(): Promise<void>;
    announce(serviceType: ServiceType | string, options: Service): void;
    updateTxt(txt: {
        [x: string]: any;
    }): void;
    createServiceType(options: ServiceType): dnssd.ServiceType;
    unannounce(immediate?: boolean | undefined): void;
    destroy(): void;
    #private;
}
export type Service = {
    host: string;
    port: number;
    txt: {
        [x: string]: any;
    };
    addresses?: string[] | undefined;
};
export type ServiceType = {
    name: string;
    protocol: string;
    subtypes: string[];
};
export type MdnsDiscoveryEvents = {
    service: (service: Service) => void;
    serviceDown: (serviceDown: Service) => void;
    serviceChanged: (serviceChanged: Service) => void;
    stopAnnouncing: (stopAnnouncing: void) => void;
    stopLookup: (stopLookup: void) => void;
    error: (error: Error) => void;
};
import { TypedEmitter } from "tiny-typed-emitter";
import dnssd from "@gravitysoftware/dnssd";
