export enum ApiItemFields {
    LASTVOLUME= 'LASTVOLUME',
    CHANGEPCT24HOUR= 'CHANGEPCT24HOUR',
    VOLUME24HOUR= 'VOLUME24HOUR',
}

export interface ApiResponse {
    DISPLAY?: {
        [key: string]: {
            [key: string]: {
                [ApiItemFields.LASTVOLUME]: number;
                [ApiItemFields.CHANGEPCT24HOUR]: number,
                [ApiItemFields.VOLUME24HOUR]: number
            }
        }
    }
    RAW: {
        [key: string]: {
            [key: string]: {
                PRICE: number
            }
        }
    }
}