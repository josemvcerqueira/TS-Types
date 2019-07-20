type BankAccType = {
	money: number;
	deposit: (arg: number) => void;
};

let bankAccount: BankAccType = {
	money: 2000,
	deposit(value) {
		this.money += value;
	},
};

let myself: {
	name: string;
	bankAccount: BankAccType;
	hobbies: string[];
} = {
	name: 'Max',
	bankAccount: bankAccount,
	hobbies: ['Sports', 'Cooking'],
};

myself.bankAccount.deposit(3000);

console.log(myself);
