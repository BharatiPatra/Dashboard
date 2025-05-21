import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Edit } from "lucide-react";

const ProfileHeader = ({ profileData, isEditing, setIsEditing, onSave }) => (
  <CardHeader className="pb-4">
    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
      <div className="flex items-center gap-4">
        <Avatar className="h-20 w-20 cursor-pointer">
          <AvatarImage src="" alt={profileData.name} />
          <AvatarFallback className="text-xl">
            {profileData.avatar}
          </AvatarFallback>
        </Avatar>
        <div>
          <CardTitle>{profileData.name}</CardTitle>
          <CardDescription className="mt-1">{profileData.role}</CardDescription>
          <div className="flex items-center gap-2 mt-2">
            <Badge variant="outline">{profileData.company}</Badge>
            <Badge variant="secondary">Pro Plan</Badge>
          </div>
        </div>
      </div>
      {!isEditing ? (
        <Button
          variant="outline"
          size="sm"
          className="cursor-pointer w-full sm:w-auto"
          onClick={() => setIsEditing(true)}
        >
          <Edit className="h-4 w-4 mr-2" />
          Edit Profile
        </Button>
      ) : (
        <div className="flex gap-2 w-full sm:w-auto">
          <Button
            variant="outline"
            size="sm"
            className="cursor-pointer flex-1 sm:flex-none"
            onClick={() => setIsEditing(false)}
          >
            Cancel
          </Button>
          <Button
            size="sm"
            onClick={onSave}
            className="cursor-pointer flex-1 sm:flex-none"
          >
            <Check className="h-4 w-4 mr-2" />
            Save
          </Button>
        </div>
      )}
    </div>
  </CardHeader>
);

export default ProfileHeader;
