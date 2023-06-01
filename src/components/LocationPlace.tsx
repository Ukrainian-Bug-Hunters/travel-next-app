import * as React from "react";
import Image from "next/image";

const LocationPlace = ({
  locationName,
  commuteTime,
}: {
  locationName: string;
  commuteTime: number;
}) => {
  return (
    <div className="location-item flex">
      <Image
        src="/images/los-angeles.png"
        alt="Landscape picture"
        width={50}
        height={50}
      />
      <div className="location-description cursor-pointer flex-col pl-2">
        <p className="text cursor-pointer text-[16px] font-semibold">
          {locationName}
        </p>
        <p className="text cursor-pointer text-[14px] font-light ">
          {commuteTime} minute drive
        </p>
      </div>
    </div>
  );
};

export default LocationPlace;
