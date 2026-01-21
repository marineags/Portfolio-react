import { GitHubCalendar } from "react-github-calendar";

type GitHubHeatmapProps = {
  username: string;
};

export default function ContributionsGitHub({ username }: GitHubHeatmapProps) {
  return (
    <div className="ghCal rounded-2xl p-6 bg-white/5 backdrop-blur-md border border-white/10">
      <h3 className="text-xl font-semibold text-[#EFD3D6] mb-4">
        Activité GitHub
      </h3>

      <GitHubCalendar
        username={username}
        blockSize={12}
        blockMargin={8}
        fontSize={16}
        showWeekdayLabels
        theme={{
          dark: ["#d56b7700", "#d56b7735", "#d56b779d", "#d56b77", "#e3b8be"],
          light: ["#f8e9f0", "#f2b6cf", "#ea7ba7", "#d95c93", "#ff5c9a"],
        }}
      />
    </div>
  );
}
