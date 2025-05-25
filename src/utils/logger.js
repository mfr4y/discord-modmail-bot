const path = require('path');
const fs = require('fs');
const colors = require('colors/safe');

const logFilePath = path.join(__basedir, 'logs/full.log');
const errorFilePath = path.join(__basedir, 'logs/error.log');

const LEVELS = {
  info: { color: colors.bgCyan, label: '[INFO]', file: logFilePath },
  command: { color: colors.bgMagenta, label: '[COMMAND]', file: logFilePath },
  error: { color: colors.bgRed, label: '[ERROR]', file: errorFilePath },
  loading: { color: colors.bgBlue, label: '[LOADING]', file: logFilePath },
  warn: { color: colors.bgYellow, label: '[WARN]', file: logFilePath },
  cron: { color: colors.bgBlue, label: '[CRON]', file: logFilePath },
  ok: { color: colors.bgGreen, label: '[LOADED]', file: logFilePath }
};

function getTimestamp() {
  const now = new Date();
  return now.toLocaleString('fr-FR', { hour12: false });
}

function formatExtra(extra) {
  if (typeof extra === 'object') {
    try {
      return JSON.stringify(extra, null, 2);
    } catch {
      return '[Objet non sérialisable]';
    }
  }
  return extra ? String(extra) : '';
}

function writeLog(file, message) {
  try {
    fs.appendFileSync(file, message + '\n');
  } catch (err) {
    console.error(colors.bgRed('[LOGGER ERROR]'), 'Impossible d\'écrire dans le fichier de log:', err);
  }
}

const logger = {};

for (const [level, { color, label, file }] of Object.entries(LEVELS)) {
  logger[level] = (message, extra = '') => {
    const timestamp = getTimestamp();
    const formatted = `${colors.gray(timestamp)} ${color(label)} : ${message} ${formatExtra(extra)}`;
    const logMsg = `${timestamp} ${label} : ${message} ${formatExtra(extra)}`;
    console.log(formatted);
    writeLog(file, logMsg);
  };
}

module.exports = logger;
