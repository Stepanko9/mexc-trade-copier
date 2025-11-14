export interface AppConfig {
    apiEndpoint: string;
    apiKey: string;
    timeout: number;
}

export interface ReplicationSettings {
    source: string;
    destination: string;
    frequency: number;
}