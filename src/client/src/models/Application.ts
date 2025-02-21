export interface ApplicationVersion {
    label: string;
    key: string;
}

export interface Application {
    name: string;
    description: string;
    tags: string;
    icon: string;
    versions: ApplicationVersion[];
}

export interface ApplicationChoice extends Application {
    selectedVersion: string;
}