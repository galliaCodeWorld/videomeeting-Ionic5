export class PhoneContactType {
	constructor() {
		this.avatarDataUri = "";
		this.avatarFileName = "";
		this.isMember = false;
		this.memberId = 0;
		this.phoneContactId = 0;
	}

	phoneContactId?: number;
	created?: Date;
	memberId?: number;
	email: string;
	name: string;
	avatarDataUri?: string;
	avatarFileName?: string;
	isMember?: boolean;
}