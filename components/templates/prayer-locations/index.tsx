import mosques from "./data/mosques.json";
import rooms from "./data/rooms.json";
import PrayerLocationCard from "./location-card";

const PrayerLocations = () => {
  return (
    <>
      <div>
        <h1 className="my-4 text-4xl font-bold">Groningen Prayer Rooms</h1>
        <p>
          List of mosques and prayer rooms in Groningen. Not all are listed
          here, for example UMCG has a prayer room, but have not been there yet.
        </p>
      </div>
      <div>
        <h2 className="my-4 text-2xl font-bold">Locations</h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {mosques.map((mosque, index) => (
            <PrayerLocationCard key={index} location={mosque} />
          ))}
          {rooms.map((room, index) => (
            <PrayerLocationCard key={index} location={room} />
          ))}
        </div>
      </div>
    </>
  );
};

export default PrayerLocations;
