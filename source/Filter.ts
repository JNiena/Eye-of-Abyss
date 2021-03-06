export class Filter {

	private words: string[];

	public constructor(words: string[] = []) {
		this.words = words;
	}

	public add(word: string): void {
		this.words.push(word.toLowerCase());
	}

	public remove(word: string): void {
		this.words = this.words.filter(element => element !== word.toLowerCase());
	}

	public get(): string[] {
		return this.words;
	}

	public complies(element: string): boolean {
		for (let i = 0; i < this.words.length; i++) {
			if (element.toLowerCase().includes(this.words[i].toLowerCase())) return true;
		}
		return false;
	}

}