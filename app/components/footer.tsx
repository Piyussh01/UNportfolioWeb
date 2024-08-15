import Link from "next/link";
import { ArrowUpRightIcon } from "@heroicons/react/24/solid";

const links = [
  { href: "https://scholar.google.com/citations?user=x3P-xIMAAAAJ&hl=en", label: "google scholar" },
  { href: "mailto:unath@asu.edu", label: "mail" },
  { href: "https://github.com/utkarshnath", label: "github" },
  { href: "https://www.linkedin.com/in/utkarsh-nath-39793398/", label: "linkedIn" },
];

export default function Footer() {
  return (
    <footer className="mb-8">
      <ul className="font-sm mt-4 flex flex-col space-x-0 space-y-2 md:flex-row md:space-x-4 md:space-y-0">
        {links.map((link, index) => (
          <li key={index}>
            <a
              className="flex items-center text-neutral-600 hover:text-neutral-800 dark:text-neutral-400 dark:hover:text-neutral-200 transition-colors"
              rel="noopener noreferrer"
              target={link.href.startsWith("mailto:") ? "_self" : "_blank"}
              href={link.href}
            >
              <ArrowUpRightIcon className="w-3 h-3 mr-1" />
              <span className="h-7">{link.label}</span>
            </a>
          </li>
        ))}
      </ul>
      <p className="mt-4 text-neutral-600 dark:text-neutral-400">
        © {new Date().getFullYear()} Utkarsh Nath
      </p>
    </footer>
  );
}
