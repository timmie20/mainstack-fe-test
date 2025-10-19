import { apiGet } from "@/lib/api";
import type { Transaction, WalletDataProps } from "@/types";

// Fetch transactions
export const getTransactions = () => apiGet<Transaction[]>("/transactions");

// // Fetch users
// export const getUsers = () => apiGet<User[]>("/users");

// Fetch wallet data
export const getWallet = () => apiGet<WalletDataProps>("/wallet");
