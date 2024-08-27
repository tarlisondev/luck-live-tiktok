const config = require("../config/config");
const { addNumber } = require("../services/service");
const { WebcastPushConnection } = require('tiktok-live-connector');

let tiktokLiveConnection = new WebcastPushConnection(config.live);

tiktokLiveConnection.connect().then(() => { console.log("Connected") }).catch((error) => { console.log("No connected") });

try {

    tiktokLiveConnection.on('gift', async data => {
        if (data.giftType === 1 && !data.repeatEnd) {
            await addNumber(data.uniqueId);
        } else {

            for (let i = 0; i < data.repeatCount; i++) {
                await addNumber(data.uniqueId);
            }
        }
    })

} catch (error) { console.log(error) }
