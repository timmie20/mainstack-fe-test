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
