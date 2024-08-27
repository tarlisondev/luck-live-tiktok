
const User = require("../models/user");
const Raffle = require("../models/raffle");

function randomNumber(amount) {

    let numbers = [];
    let str = String(amount);
    let digit = Number(str.length);

    for (let i = 0; i < amount; i++) numbers.push(i.toString().padStart(digit, "0"));

    return numbers;
}

async function addNumber(uniqueId) {

    try {

        let list = await Raffle.find();

        list.map(async (item) => {
            const random = Math.floor(Math.random() * item.numbers.length);
            const number = item.numbers[random];
            await User.create({ name: uniqueId, number: number });
            await Raffle.findByIdAndUpdate(item._id, { numbers: item.numbers.filter(item => item !== number) });
        })

    } catch (error) { console.log(error) }
}

module.exports = { randomNumber, addNumber };
