import { GitHubCalendar } from "react-github-calendar";

type GitHubHeatmapProps = {
  username: string;
};

export default function ContributionsGitHub({ username }: GitHubHeatmapProps) {
  return (
    <div className="ghCal rounded-2xl p-6 bg-white/5 backdrop-blur-md border border-white/10">
      <h3 className="text-xl font-semibold text-[#E9EDC9] mb-4">
        Activité GitHub
      </h3>

      <GitHubCalendar
        username={username}
        blockSize={12}
        blockMargin={8}
        fontSize={16}
        showWeekdayLabels
        theme={{
          dark: ["#0A0A0A", "#2F3323", "#656D4A", "#8F9A6A", "#E9EDC9"],
          light: ["#f8e9f0", "#f2b6cf", "#ea7ba7", "#d95c93", "#ff5c9a"],
        }}
      />
    </div>
  );
}
