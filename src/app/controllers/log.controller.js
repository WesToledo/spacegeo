const LogSchema = require("../models/log");

function fullTimeDiff(date_future, date_now) {
  // get total seconds between the times
  var delta = Math.abs(date_future - date_now) / 1000;

  // calculate (and subtract) whole days
  var days = Math.floor(delta / 86400);
  delta -= days * 86400;

  // calculate (and subtract) whole hours
  var hours = Math.floor(delta / 3600) % 24;
  delta -= hours * 3600;

  // calculate (and subtract) whole minutes
  var minutes = Math.floor(delta / 60) % 60;
  delta -= minutes * 60;

  // what's left is seconds
  var seconds = delta % 60;

  return {
    days,
    hours,
    minutes,
    seconds,
  };
}

async function log(req, res) {
  try {
    const { user } = req.body;
    console.log("received", user);

    const log = await LogSchema.findOne({ user: user });
    // console.log("LOG", log);

    if (log) {
      const diff = fullTimeDiff(new Date(log.start_date), new Date());

      console.log("Diff", diff);

      const minutes = Math.ceil(diff.seconds.toFixed(0) / 60);

      log.spent_time.hours += diff.hours;
      log.spent_time.minutes += parseInt(
        diff.minutes.toFixed(0) + minutes.toFixed(0)
      );
      log.spent_time.seconds = diff.seconds.toFixed(0) % 60;

      log.last_access = new Date().toISOString();
      log.start_date = new Date().toISOString();

      console.log("updated", {
        minutes: parseInt(diff.minutes.toFixed(0) + minutes.toFixed(0)),
        seconds: diff.seconds.toFixed(0) % 60,
      });

      await log.save();
      return res.send();
    } else {
      await LogSchema.create({ user, start_date: new Date().toISOString() });
      return res.send();
    }
  } catch (err) {
    console.log(err);
    return res.status(400).send({ error: "Erro ao registrar log" });
  }
}

module.exports = { log };
