import {router, uuid} from "funcky";

export default router(async ({get}) => {
    get('/uuid', async () => ({data: uuid()}))
    get('/:ping', async ({params: {ping}}) => {
        return {data: ping};
    })
});