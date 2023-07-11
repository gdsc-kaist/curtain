import App, {log} from 'funcky';
import auth from "./auth";
import test from "$api/test";

declare const config: {
    version: string,
    commitHash: string,
    commitCount: number,
    buildDate: string,
    cors: string[],
    binary: boolean,
};
config.cors = ['http://localhost:5173'];

App({
    config, port: 3000, name: 'curtain', cb: async ({r, u}) => {
        await r('*', auth);

        await u('/test', test);
    }
}).then();

process.on('uncaughtException', (e) => {
    log.error('Uncaught exception: ' + e);
    console.trace(e);
});
