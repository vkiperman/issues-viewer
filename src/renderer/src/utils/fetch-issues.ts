export const fetchIssues = async (
  repo: string,
  page: number = 1,
  perPage: number = 30,
  token: string
) => {
  const headers: Record<string, string> = {
    Accept: 'application/vnd.github+json',
  };

  headers.Authorization = `token ${token}`;

  const res = await fetch(
    `https://api.github.com/repos/${repo}/issues?state=open&page=${page}&per_page=${perPage}`,
    { headers }
  );

  if (!res.ok) {
    throw new Error(`Error fetching issues: ${res.statusText}`);
  }

  return res.json();
};
