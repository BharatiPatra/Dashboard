import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ProfileHeader from "./components/ProfileHeader";
import ProfileInfo from "./components/ProfileInfo";
import ProfileForm from "./components/ProfileForm";
import { userData } from "./DummyData";

const ProfileContent = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [user, setUser] = useState(userData);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    setIsEditing(false);
  };

  return (
    <div className="space-y-4 sm:space-y-6">
      <Card className="border-0 shadow-none sm:border sm:shadow-sm">
        <CardHeader className="p-3 sm:p-6">
          <CardTitle className="text-base sm:text-lg">
            Profile Information
          </CardTitle>
        </CardHeader>
        <CardContent className="p-3 sm:p-6 pt-0">
          {isEditing ? (
            <ProfileForm user={user} onSubmit={handleSubmit} />
          ) : (
            <div className="space-y-4 sm:space-y-6">
              <ProfileHeader
                profileData={user}
                isEditing={isEditing}
                setIsEditing={setIsEditing}
                onSave={handleSubmit}
              />
              <ProfileInfo profileData={user} />
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default ProfileContent;
