function capitalize(string) {
  return typeof string === 'string' && string.length
    ? string.charAt(0).toUpperCase() + string.slice(1)
    : '';
}

function removeElement(arr, value) {
  const index = arr.indexOf(value);
  if (index > -1) arr.splice(index, 1);
  return arr;
}

function escapeMarkdown(str) {
  return str.replace(/([*_~|\\`>])/g, '\\$1');
}

function trimArray(arr, maxLen = 10) {
  if (arr.length > maxLen) {
    const len = arr.length - maxLen;
    arr = arr.slice(0, maxLen);
    arr.push(`et **${len}** autres...`);
  }
  return arr;
}

function trimStringFromArray(arr, maxLen = 2048, joinChar = '\n') {
  let string = arr.join(joinChar);
  const diff = maxLen - 15;
  if (string.length > maxLen) {
    string = string.slice(0, diff);
    string = string.slice(0, string.lastIndexOf(joinChar));
    string += `\nEt **${arr.length - string.split('\n').length}** autres...`;
  }
  return string;
}

function getRange(arr, current, interval) {
  const max = Math.min(arr.length, current + interval);
  const start = current + 1;
  return (arr.length === 1 || arr.length === start || interval === 1)
    ? `[${start}]`
    : `[${start} - ${max}]`;
}

function getValueType(value) {
  if (value === null || value === undefined) return String(value).toLowerCase();
  return value.constructor.name.toLowerCase();
}

function getOrdinalNumeral(number) {
  number = number.toString();
  if (['11', '12', '13'].includes(number)) return number + 'th';
  if (number.endsWith('1')) return number + 'st';
  if (number.endsWith('2')) return number + 'nd';
  if (number.endsWith('3')) return number + 'rd';
  return number + 'th';
}

function getStatus(...args) {
  return args.every(Boolean) ? 'activé' : 'désactivé';
}

function getMemberFromMention(message, mention) {
  if (!mention || !message.guild) return;
  const matches = mention.match(/^<@!?(\d+)>$/);
  if (!matches) return;
  return message.guild.members.cache.get(matches[1]);
}

function getRoleFromMention(message, mention) {
  if (!mention || !message.guild) return;
  const matches = mention.match(/^<@&(\d+)>$/);
  if (!matches) return;
  return message.guild.roles.cache.get(matches[1]);
}

function getChannelFromMention(message, mention) {
  if (!mention || !message.guild) return;
  const matches = mention.match(/^<#(\d+)>$/);
  if (!matches) return;
  return message.guild.channels.cache.get(matches[1]);
}

module.exports = {
  capitalize,
  removeElement,
  escapeMarkdown,
  trimArray,
  trimStringFromArray,
  getRange,
  getValueType,
  getOrdinalNumeral,
  getStatus,
  getMemberFromMention,
  getRoleFromMention,
  getChannelFromMention
};