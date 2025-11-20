import { useState } from "react";
import AnimatedProfileRing from "../AnimatedProfileRing/AnimatedProfileRing";

const ProfileSection = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Profile Image + Click Handler */}
      <div onClick={() => setOpen(true)} className="cursor-pointer">
        <AnimatedProfileRing
          className="w-3 h-3"
          src="https://i.ibb.co.com/3GC2TL8/yousufalidev1.png"
          alt="yousufalidev"
        />
      </div>

      {/* Show Modal if open */}
      {open && (
        <ImageModal
          src="https://i.ibb.co.com/3GC2TL8/yousufalidev1.png"
          alt="yousufalidev"
          onClose={() => setOpen(false)}
        />
      )}
    </>
  );
};

export default ProfileSection;
