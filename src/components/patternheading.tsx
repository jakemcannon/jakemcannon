import Link from "next/link";
import styles from "@/styles/Articles.module.css";

interface PatternProps {
  tags: string[];
}

export default function PatternHeading({ tags }: PatternProps) {
  return (
    <>
      <ul className={styles.list}>
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
