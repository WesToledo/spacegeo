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

      log.spent_time.hours += diff.hours.toFixed(0);
      log.spent_time.minutes += diff.minutes.toFixed(0);
      log.spent_time.seconds += parseInt(diff.seconds.toFixed(0));

      console.log("Diff", diff);

      if (log.spent_time.seconds >= 60) {
        var minutes_from_seconds = Math.ceil(
          log.spent_time.seconds.toFixed(0) / 60
        );

        log.spent_time.minutes += minutes_from_seconds.toFixed(0);
        log.spent_time.seconds = parseInt(
          log.spent_time.seconds.toFixed(0) % 60
        );
      }

      if (log.spent_time.minutes >= 60) {
        var hours_from_minutes = Math.ceil(
          log.spent_time.minutes.toFixed(0) / 60
        );
        log.spent_time.hours += hours_from_minutes;
        log.spent_time.minutes = parseInt(log.spent_time.minutes % 60);
      }

      log.last_access = new Date().toISOString();
      log.start_date = new Date().toISOString();

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
