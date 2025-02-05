import React from "react";
import ProfileSidebar from "./ProfileSidebar";
import ProfileContent from "./ProfileContent";

const ProfileContainer = () => {
  return (
    <div className="flex">
      <ProfileSidebar />
      <ProfileContent />
    </div>
  );
};

export default ProfileContainer;
