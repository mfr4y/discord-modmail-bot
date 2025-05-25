global.__basedir = __dirname;

if (Number(process.version.slice(1).split(".")[0]) < 16) {
  console.error("Node 16.0.0 ou supérieur requis. Veuillez mettre à jour Node.");
  process.exit(1);
}

const { Client, Collection, GatewayIntentBits, Partials } = require('discord.js');
const config = require('./config.json');
const { readdir } = require('fs').promises;
const path = require('path');

const client = new Client({
  allowedMentions: { parse: ['users', 'roles'] },
  fetchAllMembers: true,
  intents: [
    GatewayIntentBits.AutoModerationConfiguration,
    GatewayIntentBits.AutoModerationExecution,
    GatewayIntentBits.DirectMessageReactions,
    GatewayIntentBits.DirectMessageTyping,
    GatewayIntentBits.DirectMessages,
    GatewayIntentBits.GuildModeration,
    GatewayIntentBits.GuildEmojisAndStickers,
    GatewayIntentBits.GuildIntegrations,
    GatewayIntentBits.GuildInvites,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildMessageReactions,
    GatewayIntentBits.GuildMessageTyping,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildPresences,
    GatewayIntentBits.GuildScheduledEvents,
    GatewayIntentBits.GuildVoiceStates,
    GatewayIntentBits.GuildWebhooks,
    GatewayIntentBits.Guilds,
    GatewayIntentBits.MessageContent
  ],
  partials: [
    Partials.Channel,
    Partials.GuildMember,
    Partials.GuildScheduledEvent,
    Partials.Message,
    Partials.Reaction,
    Partials.ThreadMember,
    Partials.User
  ]
});

console.clear();
client.slash = new Collection();
client.db = require('./src/utils/db.js');
client.logger = require('./src/utils/logger');
client.utils = require('./src/utils/utils.js');

client.logger.loading('Initialisation...');

async function loadHandlers(client, directory) {
  try {
    const handlerFiles = await readdir(path.resolve(__dirname, directory));
    const handlerModules = handlerFiles.filter(file => file.endsWith('.js'));
    for (const file of handlerModules) {
      try {
        const handler = require(path.resolve(__dirname, directory, file));
        handler(client);
        client.logger.ok(`Handler chargé : ${file}`);
      } catch (err) {
        client.logger.error(`Erreur lors du chargement du handler ${file}`, err);
      }
    }
  } catch (err) {
    client.logger.error('Erreur lors du chargement des handlers', err);
    process.exit(1);
  }
}

(async () => {
  await loadHandlers(client, './src/utils/handlers');
  require('./slashCommands.js');
  client.login(config.token)
    .then(() => client.logger.ok('Bot connecté avec succès !'))
    .catch(err => {
      client.logger.error('Erreur lors de la connexion du bot', err);
      process.exit(1);
    });
})();

process.on("unhandledRejection", (err, reason, p) => {
  client.logger.error('UnhandledRejection', { err, reason, p });
});

process.on("uncaughtException", (err, origin) => {
  client.logger.error('UncaughtException', { err, origin });
});
