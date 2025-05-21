import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const ProfileForm = ({ user, onSubmit }) => (
  <form onSubmit={onSubmit} className="space-y-4 sm:space-y-6">
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
      <div className="space-y-2">
        <Label htmlFor="name" className="text-sm">
          Full Name
        </Label>
        <Input
          id="name"
          defaultValue={user.name}
          className="bg-background text-sm sm:text-base"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="email" className="text-sm">
          Email
        </Label>
        <Input
          id="email"
          type="email"
          defaultValue={user.email}
          className="bg-background text-sm sm:text-base"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="phone" className="text-sm">
          Phone
        </Label>
        <Input
          id="phone"
          defaultValue={user.phone}
          className="bg-background text-sm sm:text-base"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="location" className="text-sm">
          Location
        </Label>
        <Input
          id="location"
          defaultValue={user.location}
          className="bg-background text-sm sm:text-base"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="website" className="text-sm">
          Website
        </Label>
        <Input
          id="website"
          defaultValue={user.website}
          className="bg-background text-sm sm:text-base"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="timezone" className="text-sm">
          Timezone
        </Label>
        <Input
          id="timezone"
          defaultValue={user.timezone}
          className="bg-background text-sm sm:text-base"
        />
      </div>
    </div>
    <div className="space-y-2">
      <Label htmlFor="bio" className="text-sm">
        Bio
      </Label>
      <Textarea
        id="bio"
        defaultValue={user.bio}
        className="bg-background min-h-[100px] text-sm sm:text-base"
      />
    </div>
    <div className="flex flex-col sm:flex-row justify-end gap-3">
      <Button type="button" variant="outline" className="w-full sm:w-auto">
        Cancel
      </Button>
      <Button type="submit" className="w-full sm:w-auto">
        Save Changes
      </Button>
    </div>
  </form>
);

export default ProfileForm;
