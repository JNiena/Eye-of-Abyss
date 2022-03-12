import {EventListener} from "../EventListener";
import {MinecraftBot} from "../minecraftBot";
import {DiscordBot} from "../discordBot";

export class FirstSpawnListener implements EventListener {

	public handle: any;

	constructor(channelID: string, discordBot: DiscordBot, minecraftBot: MinecraftBot) {
		this.handle = () => {
			minecraftBot.chat(minecraftBot.config.get()["joinMessage"]);
			discordBot.send("**Successfully connected.**", channelID).then();
		};
	}

}