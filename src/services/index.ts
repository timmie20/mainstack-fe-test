import { apiGet } from "@/lib/api";
import type { Transaction, User, WalletDataProps } from "@/types";

export const getTransactions = () => apiGet<Transaction[]>("/transactions");

export const getUsers = () => apiGet<User>("/user");

export const getWallet = () => apiGet<WalletDataProps>("/wallet");
