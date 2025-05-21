import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import PasswordForm from "./components/PasswordForm";

const Security = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle password update
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Security Settings</CardTitle>
        </CardHeader>
        <CardContent>
          <PasswordForm onSubmit={handleSubmit} />
        </CardContent>
      </Card>
    </div>
  );
};

export default Security;
