import Transaction from "../Transaction";
import Wallet from "../Wallet";

// Transaction
export interface AddExpenseResponse {
    srcWallet: Wallet;
    transaction: Transaction;
}

export interface AddIncomeResponse {
    dstWallet: Wallet;
    transaction: Transaction;
}

export interface AddTransferResponse {
    dstWallet: Wallet;
    srcWallet: Wallet;
    transaction: Transaction;
}

export interface ListTransactionsResponse {
    length: number;
    items: Transaction[];
}

export interface DeleteTransactionResponse {
    isSuccess: boolean;
}

// Category
export interface AddCategoryResponse {
    isSuccess: boolean;
}

export interface RemoveCategoryResponse {
    isSuccess: boolean;
}
