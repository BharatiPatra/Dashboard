import InfoField from "./InfoField";
import SocialProfiles from "./SocialProfiles";

const ProfileInfo = ({ profileData }) => (
  <div className="space-y-4">
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <InfoField label="Email" value={profileData.email} />
      <InfoField label="Phone" value={profileData.phone} />
      <InfoField label="Location" value={profileData.location} />
      <InfoField label="Timezone" value={profileData.timezone} />
      <InfoField
        label="Website"
        value={
          <a
            href={profileData.website}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline break-all"
          >
            {profileData.website}
          </a>
        }
      />
      <InfoField label="Member Since" value={profileData.joinDate} />
    </div>

    <div>
      <h3 className="text-sm font-medium text-muted-foreground mb-1">Bio</h3>
      <p className="text-sm sm:text-base whitespace-pre-wrap">
        {profileData.bio}
      </p>
    </div>

    <SocialProfiles profiles={profileData.socialProfiles} />
  </div>
);

export default ProfileInfo;
