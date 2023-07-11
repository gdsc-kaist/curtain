import {router} from "funcky";
import {accountGet} from "$obj/account";

export type Perm = 'admin';

export default router(async ({use}) => {
    use('*', async (req: any, _, next) => {
        const {id, v, expire} = req.auth || {};
        if (!v || v !== authVersion) req.auth = null;
        else if (expire && expire < Date.now()) req.auth = null;
        else if (id) req.auth = await accountGet(id);
        else req.auth = null;
        req.perm = (action: Perm) => (!action.startsWith('block') && req.auth?.permission?.admin) || req.auth?.permission?.[action];
        next();
    });
});

export const authVersion = 2;