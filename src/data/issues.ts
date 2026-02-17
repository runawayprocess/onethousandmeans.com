export interface Issue {
  number: number;
  title: string;
  slug: string;
  accentColor: string;
  published: boolean;
}

export const issues: Issue[] = [
  {
    number: 1,
    title: 'ABUNDANCE',
    slug: 'issue-1',
    accentColor: '#FF2A4F',
    published: false,
  },
];

export function getCurrentIssue(): Issue | undefined {
  // Return the latest published issue, or the latest issue if none published
  const published = issues.filter(i => i.published);
  if (published.length > 0) {
    return published[published.length - 1];
  }
  return issues[issues.length - 1];
}

export function getPublishedIssues(): Issue[] {
  return issues.filter(i => i.published);
}
