import {MinecraftBot} from "../MinecraftBot";
import {DiscordBot} from "../DiscordBot";
import {Config} from "../Config";

export class ErrorListener {

	public constructor(minecraftBot: MinecraftBot, discordBot: DiscordBot) {
		let config: Config = minecraftBot.config;
		let channelID: string = config.get()["discord"]["channelID"];
		let roleID: string = config.get()["discord"]["roleID"];

		minecraftBot.on("error", (error: Error) => {
			discordBot.send(`<@&${roleID}> **ERROR: ${error.message}**`, channelID).then();
		});
	}

}