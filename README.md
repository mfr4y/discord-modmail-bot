# **Discord Modmail Bot (v14)**

Un bot de modmail simple à utiliser utilisant la dernière version de Discord.js en slash commands

## **Fonctionnalités**
> - Système de tickets en envoyant un message privé au bot
> - Tous les tickets sont stockés dans une catégorie afin de simplifier la centralisation des tickets
> - Un rôle support peut être configuré pour donner l'accès de tous les tickets aux membres possédant ce rôle

## **Configuration :**
> 1. Création d'un bot discord sur [le portail de développement de Discord](https://discord.com/developers/applications)
> 2. Créez un dossier puis clonez le dépôt github avec la commande
>   ```shell
>   git clone https://github.com/infuzzz/discord-modmail-bot.git
>   ```
> 3. Installez les dépendance avec npm (assurez vous d'avoir installé [Node.js](https://nodejs.org/fr))
> 4. Configurez le fichier `config.json`
>   ```json
>   {
>    "token": "(token du bot, disponible sur le portail de développement Discord)",
>    "clientId": "(identifiant du bot)",
>    "guildId": "(identifiant du serveur)",
>    "color": "#FFFFFF"
>   }
>   ```
> 5. Lancez le bot avec la commande
>   ```shell
>   node index.js
>   ```

## **Images**

#### Bot
![Bot](https://cdn.discordapp.com/attachments/937757443893637231/1276895413932261507/image.png?ex=677d2b86&is=677bda06&hm=c437e237ee407fccdd45467bccc959cb6896b33438207085b793a9e8707d6268&)

#### Configuration
![Configuration](https://cdn.discordapp.com/attachments/937757443893637231/1276895754945953883/image.png?ex=677d2bd7&is=677bda57&hm=f4de31d6521a8102dbb6d339fc5dab655faa4953431e166a23390c62e6913a00&)

#### Ticket en privé (côté membre)
![Ticket en privé (côté membre)](https://cdn.discordapp.com/attachments/937757443893637231/1276896351396958338/image.png?ex=677d2c65&is=677bdae5&hm=e55b0175216981e5d191c980717699a6ab1c13fe35f2c0a79b5160d9353e6228&)

#### Ticket en privé (côté staff)
![Ticket en privé (côté staff)](https://cdn.discordapp.com/attachments/937757443893637231/1276896383810539712/image.png?ex=677d2c6d&is=677bdaed&hm=5d86b6819f1ea41e60ce715b3ab55601d5717b480e152bcb9c5c13e197d02b05&)

#### Fermeture ticket (côté membre)
![Fermeture ticket (côté membre)](https://cdn.discordapp.com/attachments/937757443893637231/1276896616808190023/image.png?ex=677d2ca5&is=677bdb25&hm=26348ba20f3ae721688e42ac629c6f77b66a93cc5e3d6eb1d1ae7678a1275719&)

## Contribution
> Pour me soutenir vous pouvez ajouter une étoile au dépôt et/ou me faire un don sur [BuyMeACoffee](https://buymeacoffee.com/mmonfray)
