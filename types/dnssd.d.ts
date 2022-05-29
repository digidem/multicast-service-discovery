declare module '@gravitysoftware/dnssd' {
	export function tcp(...args: string[]): ServiceType;
	export function tcp(service: string|string[]): ServiceType;

	interface AdvertisementOptions {
		name?: string,
		host?: string,
		txt?: string[],
		subtypes?: Object,
		interface?: Object,
		hostTTl?: number,
		serviceTTl?: number
	}

	export class Advertisement {
		constructor(
			type: ServiceType,
			port: number,
			options?: AdvertisementOptions
		);

		on(event: 'error', listener: (error: Error) => void): void;
		start(): void;
		stop(immediate: Boolean): void;
	}
	
	export class Browser {
		constructor(type: ServiceType);

		on(event: 'error', listener: (error: Error) => void): void;
		on(event: 'serviceUp', listener: (service: ServiceType) => void): this;
		on(event: 'serviceDown', listener: (service: ServiceType) => void): this;
		start(): void;
		stop(): void;
	}
	
	export class ServiceType {
		
	}

}
