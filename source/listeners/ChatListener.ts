import {EventListener} from "../EventListener";
import {DiscordBot} from "../discordBot";
import {MinecraftBot} from "../minecraftBot";
import {Whitelist} from "../whitelist";
import {Files} from "../files";

export class ChatListener implements EventListener {

	public handle: any;

	constructor(channelID: string, discordBot: DiscordBot, minecraftBot: MinecraftBot) {
		this.handle = (username: string, message: string) => {
			let toSend: string = username + " » " + message.replace("@", "");
			if (!minecraftBot.config.get()["whitelist"]["enabled"] || new Whitelist(minecraftBot.config.get()["whitelist"]["filter"]).processText(toSend)) {
				discordBot.send(toSend, channelID).then();
			}
			if (minecraftBot.config.get()["log"]["enabled"]) {
				Files.write(minecraftBot.config.get()["log"]["path"], toSend + "\n");
			}
		};
	}

}