type RepoCardProps = {
  name: string;
  description?: string;
  language?: string;
  url: string;
};

export default function RepoCard({
  name,
  description,
  language,
  url,
}: RepoCardProps) {
  return (
    <a
      href={url}
      target="_blank"
      className="block rounded-xl p-4 text-[#FFE5B4] bg-white/5 border border-white/10 hover:bg-white/10 transition"
    >
      <h4 className="font-semibold text-[#FFBF69]">{name}</h4>
      {description && <p className="text-sm opacity-80 mt-1">{description}</p>}
      {language && <p className="text-xs opacity-50 mt-3">{language}</p>}
    </a>
  );
}
