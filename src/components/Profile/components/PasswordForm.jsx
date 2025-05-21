import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const FormField = ({ label, id, type = "password" }) => (
  <div className="space-y-2">
    <Label htmlFor={id}>{label}</Label>
    <Input id={id} type={type} className="bg-background" />
  </div>
);

const PasswordForm = ({ onSubmit }) => (
  <form onSubmit={onSubmit} className="space-y-6">
    <div className="space-y-4">
      <FormField label="Current Password" id="current-password" />
      <FormField label="New Password" id="new-password" />
      <FormField label="Confirm New Password" id="confirm-password" />
    </div>
    <div className="flex justify-end gap-3">
      <Button type="button" variant="outline">
        Cancel
      </Button>
      <Button type="submit">Update Password</Button>
    </div>
  </form>
);

export default PasswordForm;
