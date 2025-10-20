export interface WalletDataProps {
  balance: string;
  total_payout: string;
  total_revenue: string;
  pending_payout: string;
  ledger_balance: string;
}

export interface TransactionMetadata {
  name: string;
  type: string;
  email: string;
  quantity: number;
  country: string;
  product_name: string;
}

export interface Transaction {
  amount: number;
  metadata: TransactionMetadata;
  payment_reference: string;
  status: string;
  type: "deposit" | "withdrawal";
  date: string;
}

export type ChartData = {
  month: string;
  balance: number;
};

export interface User {
  first_name: string;
  last_name: string;
  email: string;
}
