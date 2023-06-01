import LocationPlace from "~/components/LocationPlace";

const NearbyLocations = () => {
  return (
    <div className="nearby-locations-bg justify-left flex h-[250px] flex-col">
      <div className="my-8  pl-20">
        <h2 className="cursor-default text-[26px] font-bold text-black">
          Explore nearby
        </h2>
        <div className="locations-grid grid grid-cols-4 grid-rows-2 gap-4 pt-4">
          <LocationPlace locationName={"Los Angeles"} commuteTime={15} />
          <LocationPlace locationName={"Los Angeles"} commuteTime={15} />
          <LocationPlace locationName={"Los Angeles"} commuteTime={15} />
          <LocationPlace locationName={"Los Angeles"} commuteTime={15} />
          <LocationPlace locationName={"Los Angeles"} commuteTime={15} />
          <LocationPlace locationName={"Los Angeles"} commuteTime={15} />
          <LocationPlace locationName={"Los Angeles"} commuteTime={15} />
          <LocationPlace locationName={"Los Angeles"} commuteTime={15} />
        </div>
      </div>
    </div>
  );
};

export default NearbyLocations;
