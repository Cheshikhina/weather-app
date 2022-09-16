const Logger = class {
  static levels = {
    NONE: 0,
    INFO: 1,
    ERROR: 2,
    DEBUG: 3,
  };

  currentLevel =
    process.env.NODE_ENV !== "production"
      ? Logger.levels.DEBUG
      : Logger.levels.NONE;
  buffer = [];

  info(...msg) {
    if ([Logger.levels.NONE, Logger.levels.ERROR].includes(this.currentLevel)) {
      this.buffer.push({
        msg,
        level: Logger.levels.INFO,
        type: "info",
      });
      return;
    }

    console.info(...msg);
  }

  log(...msg) {
    if ([Logger.levels.NONE, Logger.levels.ERROR].includes(this.currentLevel)) {
      this.buffer.push({
        msg,
        level: Logger.levels.INFO,
        type: "log",
      });
      return;
    }

    console.log(...msg);
  }

  warn(...msg) {
    if ([Logger.levels.NONE, Logger.levels.ERROR].includes(this.currentLevel)) {
      this.buffer.push({
        msg,
        level: Logger.levels.INFO,
        type: "warn",
      });
      return;
    }

    console.warn(...msg);
  }

  error(...msg) {
    if (this.currentLevel < Logger.levels.ERROR) {
      this.buffer.push({
        msg,
        level: Logger.levels.ERROR,
        type: "error",
      });
      return;
    }

    console.error(...msg);
  }

  debug(...msg) {
    if (this.currentLevel !== Logger.levels.DEBUG) {
      this.buffer.push({
        msg,
        level: Logger.levels.DEBUG,
        type: "log",
      });
      return;
    }

    console.log(...msg);
  }

  setlevels(level) {
    this.currentLevel = level;

    this.buffer = this.buffer.reduce((acc, item) => {
      if ([item.level, Logger.levels.DEBUG].includes(this.currentLevel)) {
        console[item.type](...item.msg);
      } else {
        acc.push(item);
      }

      return acc;
    }, []);
  }
};

exports.logger = new Logger();
