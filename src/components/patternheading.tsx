import Link from "next/link";

interface PatternProps {
  tags: string[];
}

export default function PatternHeading({ tags }: PatternProps) {
  return (
    <>
      <ul>
        {tags.map((tag) => (
          <li key={tag}>
            <Link key={tag} href={`/tags/${tag}`}>
              {tag}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
