import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { CreditCard, Download, FileText, History, Eye } from "lucide-react";
import { billingHistory } from "./DummyData";

// Payment method item component
const PaymentMethodItem = () => (
  <div className="flex flex-col sm:flex-row sm:items-center justify-between p-3 border rounded-md gap-3 sm:gap-4">
    <div className="flex items-center gap-3">
      <CreditCard className="h-4 w-4 sm:h-5 sm:w-5 text-muted-foreground" />
      <div>
        <p className="font-medium text-sm sm:text-base">Visa ending in 4242</p>
        <p className="text-xs sm:text-sm text-muted-foreground">
          Expires 12/2024
        </p>
      </div>
    </div>
    <Button
      variant="outline"
      size="sm"
      className="h-8 sm:h-9 text-xs sm:text-sm cursor-pointer"
    >
      Update
    </Button>
  </div>
);

// Invoice item component
const InvoiceItem = ({ invoice }) => (
  <div className="flex flex-col sm:flex-row sm:items-center justify-between p-3 border rounded-md gap-3 sm:gap-4">
    <div>
      <div className="flex items-center gap-2">
        <FileText className="h-3 w-3 sm:h-4 sm:w-4 text-muted-foreground" />
        <span className="font-medium text-sm sm:text-base">{invoice.id}</span>
        <Badge
          variant={invoice.status === "paid" ? "success" : "secondary"}
          className="text-xs sm:text-sm"
        >
          {invoice.status}
        </Badge>
      </div>
      <div className="text-xs sm:text-sm text-muted-foreground mt-1">
        {invoice.date} • {invoice.plan} Plan
      </div>
    </div>
    <div className="flex items-center gap-2 sm:gap-4">
      <span className="font-medium text-sm sm:text-base">{invoice.amount}</span>
      <Button
        variant="ghost"
        size="icon"
        className="h-8 w-8 sm:h-9 sm:w-9 cursor-pointer"
      >
        <Download className="h-3 w-3 sm:h-4 sm:w-4" />
      </Button>
    </div>
  </div>
);

// Setting item component
const SettingItem = ({ title, description, children }) => (
  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4">
    <div>
      <h3 className="font-medium text-sm sm:text-base">{title}</h3>
      <p className="text-xs sm:text-sm text-muted-foreground">{description}</p>
    </div>
    {children}
  </div>
);

const BillingInvoice = () => {
  return (
    <div className="space-y-4 sm:space-y-6 min-h-0">
      <Card>
        <CardHeader>
          <CardTitle className="text-base sm:text-lg">Payment Method</CardTitle>
          <CardDescription className="text-xs sm:text-sm">
            Manage your payment details and billing address
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <PaymentMethodItem />

          <div>
            <h3 className="font-medium text-sm sm:text-base mb-2">
              Billing Address
            </h3>
            <div className="text-xs sm:text-sm text-muted-foreground">
              <p>John Doe</p>
              <p>123 Main Street</p>
              <p>San Francisco, CA 94103</p>
              <p>United States</p>
            </div>
            <Button
              variant="link"
              className="p-0 h-auto mt-1 text-xs sm:text-sm cursor-pointer"
            >
              Edit address
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4">
          <div>
            <CardTitle className="text-base sm:text-lg">
              Billing History
            </CardTitle>
            <CardDescription className="text-xs sm:text-sm">
              View and download your invoices
            </CardDescription>
          </div>
          <Button
            variant="outline"
            size="sm"
            className="h-8 sm:h-9 text-xs sm:text-sm gap-1 cursor-pointer"
          >
            <History className="h-3 w-3 sm:h-4 sm:w-4" />
            <span>View All</span>
          </Button>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {billingHistory.map((invoice) => (
              <div
                key={invoice.id}
                className="p-4 border rounded-lg dark:border-gray-800"
              >
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="font-medium dark:text-white">
                      Invoice #{invoice.id}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {invoice.date}
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="text-sm font-medium dark:text-white">
                      ${invoice.amount}
                    </span>
                    <div
                      className={`text-xs ${
                        invoice.status === "paid"
                          ? "text-green-600 dark:text-green-400"
                          : "text-red-600 dark:text-red-400"
                      }`}
                    >
                      {invoice.status}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="dark:text-gray-300 dark:border-gray-700 dark:hover:bg-gray-800"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="dark:text-gray-300 dark:border-gray-700 dark:hover:bg-gray-800"
                  >
                    <Eye className="w-4 h-4 mr-2" />
                    View
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-base sm:text-lg">
            Billing Settings
          </CardTitle>
          <CardDescription className="text-xs sm:text-sm">
            Manage your billing preferences
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <SettingItem
            title="Email Receipts"
            description="Send receipts to your email"
          >
            <Switch defaultChecked className="cursor-pointer" />
          </SettingItem>

          <Separator />

          <SettingItem
            title="Auto-renew Subscription"
            description="Automatically renew your subscription"
          >
            <Switch defaultChecked className="cursor-pointer" />
          </SettingItem>
        </CardContent>
      </Card>
    </div>
  );
};

export default BillingInvoice;
