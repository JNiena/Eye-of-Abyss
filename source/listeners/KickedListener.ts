import {EventListener} from "../EventListener";
import {DiscordBot} from "../discordBot";
import {MinecraftBot} from "../minecraftBot";

export class KickedListener implements EventListener {

	public handle: any;

	constructor(channelID: string, discordBot: DiscordBot, minecraftBot: MinecraftBot, setupBehavior: Function) {
		this.handle = (reason: string) => {
			discordBot.send(`<@&${minecraftBot.config.get()["discord"]["pingRoleID"]}> **The bot has disconnected! Reason: ${JSON.parse(reason)["text"]}**`, channelID).then();
			if (minecraftBot.config.get()["autoRejoin"]["enabled"]) {
				discordBot.send(`**Attempting to reconnect in ${minecraftBot.config.get()["autoRejoin"]["delay"] / 1000} seconds...**`, channelID).then();
				minecraftBot.reconnect(() => {
					setupBehavior(minecraftBot);
				});
			}
		};
	}

}