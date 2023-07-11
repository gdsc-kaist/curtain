import type {Perm} from './auth';

export {};

declare namespace Express {
    export interface Request {
        perm?: (action: Perm) => boolean;
    }
}
