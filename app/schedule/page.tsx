import Image from "next/image";
import ImagePlaceholder from "../../components/ImagePlaceholder";
import ScheduleImage from '@/public/images/schedule/beb99ab6843a4d7c2d4b3bab27857a6b.webp'

interface ScheduleItem {
  time: string;
  activity: string;
}

interface ScheduleDay {
  dayTitle: string;
  items: ScheduleItem[];
}

interface EventSchedule {
  number: number;
  title: string;
  date: string;
  timeControl: string;
  days: ScheduleDay[];
}

const scheduleData: EventSchedule[] = [
  {
    number: 1,
    title: "EVENT 1 - CLASSICAL OPEN",
    date: "24 - 27 MAY 2027",
    timeControl: "60 + 30",
    days: [
      {
        dayTitle: "24 MAY 2027",
        items: [
          { time: "1300 - 1400", activity: "PLAYER’S BRIEFING" },
          { time: "1400 - 1700", activity: "ROUND 1" },
        ],
      },
      {
        dayTitle: "25 MAY 2027",
        items: [
          { time: "0830 - 1200", activity: "ROUND 2" },
          { time: "1200 - 1300", activity: "BREAK" },
          { time: "1300 - 1630", activity: "ROUND 3" },
          { time: "1630 - 2000", activity: "ROUND 4" },
        ],
      },
      {
        dayTitle: "26 MAY 2027",
        items: [
          { time: "0830 - 1200", activity: "ROUND 5" },
          { time: "1200 - 1300", activity: "BREAK" },
          { time: "1300 - 1630", activity: "ROUND 6" },
          { time: "1630 - 2000", activity: "ROUND 7" },
        ],
      },
      {
        dayTitle: "27 MAY 2027",
        items: [
          { time: "0830 - 1200", activity: "ROUND 8" },
          { time: "1200 - 1430", activity: "BREAK" },
          { time: "1430 - 1800", activity: "ROUND 9" },
          { time: "1800 - 2000", activity: "PRIZE GIVING" },
        ],
      },
    ],
  },
  {
    number: 2,
    title: "EVENT 2 - RAPID AGE GROUP",
    date: "28 MAY 2027",
    timeControl: "15 + 5",
    days: [
      {
        dayTitle: "28 MAY 2027",
        items: [
          { time: "0830 - 0900", activity: "PLAYER’S BRIEFING" },
          { time: "0900 - 0950", activity: "ROUND 1" },
          { time: "0950 - 1040", activity: "ROUND 2" },
          { time: "1040 - 1130", activity: "ROUND 3" },
          { time: "1130 - 1220", activity: "ROUND 4" },
          { time: "1220 - 1430", activity: "LUNCH" },
          { time: "1430 - 1520", activity: "ROUND 5" },
          { time: "1520 - 1610", activity: "ROUND 6" },
          { time: "1610 - 1700", activity: "ROUND 7" },
          { time: "1730 - 1900", activity: "PRIZE GIVING" },
        ],
      },
    ],
  },
  {
    number: 3,
    title: "EVENT 3 - RAPID OPEN",
    date: "29 MAY 2027",
    timeControl: "15 + 5",
    days: [
      {
        dayTitle: "29 MAY 2027",
        items: [
          { time: "0830 - 0900", activity: "PLAYER’S BRIEFING" },
          { time: "0900 - 0950", activity: "ROUND 1" },
          { time: "0950 - 1040", activity: "ROUND 2" },
          { time: "1040 - 1130", activity: "ROUND 3" },
          { time: "1130 - 1220", activity: "ROUND 4" },
          { time: "1220 - 1400", activity: "LUNCH" },
          { time: "1400 - 1450", activity: "ROUND 5" },
          { time: "1450 - 1540", activity: "ROUND 6" },
          { time: "1540 - 1630", activity: "ROUND 7" },
          { time: "1700 - 1800", activity: "PRIZE GIVING" },
        ],
      },
    ],
  },
  {
    number: 4,
    title: "EVENT 4 - BLITZ",
    date: "29 MAY 2027",
    timeControl: "3 + 2",
    days: [
      {
        dayTitle: "29 MAY 2027",
        items: [
          { time: "1800 - 1815", activity: "ROUND 1" },
          { time: "1815 - 1830", activity: "ROUND 2" },
          { time: "1830 - 1845", activity: "ROUND 3" },
          { time: "1845 - 1900", activity: "ROUND 4" },
          { time: "1900 - 1915", activity: "ROUND 5" },
          { time: "1915 - 1940", activity: "BREAK" },
          { time: "1940 - 1955", activity: "ROUND 6" },
          { time: "1955 - 2010", activity: "ROUND 7" },
          { time: "2010 - 2025", activity: "ROUND 8" },
          { time: "2025 - 2040", activity: "ROUND 9" },
          { time: "2040 - 2140", activity: "PRIZE GIVING" },
        ],
      },
    ],
  },
  {
    number: 5,
    title: "EVENT 5 - RAPID TEAM",
    date: "30 MAY 2027",
    timeControl: "15 + 5",
    days: [
      {
        dayTitle: "30 MAY 2027",
        items: [
          { time: "0830 - 0900", activity: "PLAYER’S BRIEFING" },
          { time: "0900 - 1000", activity: "ROUND 1" },
          { time: "1000 - 1100", activity: "ROUND 2" },
          { time: "1100 - 1200", activity: "ROUND 3" },
          { time: "1200 - 1300", activity: "ROUND 4" },
          { time: "1300 - 1430", activity: "LUNCH" },
          { time: "1430 - 1530", activity: "ROUND 5" },
          { time: "1530 - 1630", activity: "ROUND 6" },
          { time: "1630 - 1730", activity: "ROUND 7" },
          { time: "1800 - 1900", activity: "PRIZE GIVING" },
        ],
      },
    ],
  },
];

export default function Schedule() {
  return (
    <div className="flex flex-col w-full bg-black min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full min-h-[45vh] md:min-h-[50vh] flex flex-col items-center justify-center">
        <Image src={ScheduleImage} alt="Schedule Hero Image" className="absolute inset-0 w-full h-full border-none !p-0 opacity-90 object-cover" priority placeholder="blur" />
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 animate-swipe-up">
          <h1 className="font-main-title text-gold font-bold tracking-widest drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)] text-[min(8vw,4.5rem)] leading-none text-center">
            SCHEDULE
          </h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="w-full py-24 px-6 md:px-24 flex flex-col items-center gap-24">
        {scheduleData.map((event) => (
          <div key={event.number} className="flex flex-col items-center w-full max-w-4xl">
            <div className="text-center mb-8">
              <h2 className="font-main-title text-gold text-2xl md:text-3xl font-bold tracking-wider mb-2">
                {event.title}
              </h2>
              <p className="font-main-title text-white font-bold text-sm md:text-base tracking-widest mb-2">
                {event.date}
              </p>
              <span className="inline-block bg-gold/10 border border-gold/40 text-gold px-4 py-1 rounded-full text-xs md:text-sm font-semibold tracking-wider">
                Time Control: {event.timeControl}
              </span>
            </div>

            {/* Timetable Card */}
            <div className="w-full bg-[#111] border border-gold/30 rounded-xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.6)] mb-8">
              {event.days.map((day, dayIndex) => (
                <div key={dayIndex} className={dayIndex > 0 ? "border-t border-gold/20" : ""}>
                  <div className="bg-gold/15 px-6 py-3 border-b border-gold/20">
                    <h3 className="font-main-title text-gold font-bold text-sm md:text-base tracking-wider">
                      {day.dayTitle}
                    </h3>
                  </div>
                  <div className="divide-y divide-white/5">
                    {day.items.map((item, itemIndex) => (
                      <div
                        key={itemIndex}
                        className="flex flex-col sm:flex-row sm:items-center justify-between px-6 py-3.5 hover:bg-white/5 transition-colors text-sm md:text-base"
                      >
                        <span className="font-mono text-gold/90 font-medium tracking-wide sm:w-1/3">
                          {item.time}
                        </span>
                        <span className={`font-content font-medium sm:w-2/3 ${
                          item.activity.includes("PRIZE GIVING")
                            ? "text-gold font-bold"
                            : item.activity.includes("BRIEFING")
                            ? "text-blue-300 font-semibold"
                            : item.activity.includes("BREAK") || item.activity.includes("LUNCH")
                            ? "text-gray-400 italic"
                            : "text-white"
                        }`}>
                          {item.activity}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Poster / Graphic Placeholder */}
            <ImagePlaceholder
              text={`Event ${event.number} Schedule Poster`}
              className="w-full h-auto aspect-[4/3] md:aspect-[3/2] object-contain border-none !bg-white/10"
            />
          </div>
        ))}
      </section>
    </div>
  );
}
