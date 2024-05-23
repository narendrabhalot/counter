const Count = require('../models/counterModel')
const addCount = async (req, res) => {
    try {
        let countData = await Count.find();

        if (countData.length === 0) {
            const newCount = new Count({ count: 1 });
            await newCount.save();
            console.log(newCount.count)
            return res.send({ status: true, count: newCount.count });
        } else {
            countData[0].count++;
            await countData[0].save();
            console.log(countData[0].count)
            return res.send({ status: true, count: countData[0].count });
        }
    } catch (error) {
        return res.status(500).send({ status: false, message: error.message });
    }
};


// Decrement counter
const decreaseCount = async (req, res) => {
    let countData = await Count.find();
    if (countData[0].count > 0) {
        countData[0].count--;
        await countData[0].save();

        console.log(countData[0].count)
        return res.send({ status: true, count: countData[0].count });
    }
}


module.exports = { addCount, decreaseCount }