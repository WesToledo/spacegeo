const LogSchema = require("../models/log");

function timeDiffCalc(dateFuture, dateNow) {
  let diffInMilliSeconds = Math.abs(dateFuture - dateNow) / 1000;

  // calculate minutes
  const minutes = Math.floor(diffInMilliSeconds / 60) % 60;
  diffInMilliSeconds -= minutes * 60;
  console.log("minutes", minutes);

  return minutes;
}

async function log(req, res) {
  try {
    const { user } = req.body;
    console.log(user);

    const log = await LogSchema.findOne({ user: user });

    if (log) {
      const diff = timeDiffCalc(new Date(), new Date(log.last_access));

      log.spent_time += diff;
      log.last_access = new Date().toISOString();

      await log.save();
    } else {
      await LogSchema.create({ user, last_access: new Date().toISOString() });
    }
  } catch (err) {
    console.log(err);
    return res.status(400).send({ error: "Erro ao registrar log" });
  }
}

module.exports = { log };
