import { fetchIssues } from '@renderer/utils/fetch-issues';
import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import IssuesTable from './IssuesTable';
import Form from './Form';

export default function GitHubIssuesViewer() {
  const [repo, setRepo] = useState('');
  const [token, setToken] = useState('');
  const [page, setPage] = useState(1);
  const perPage = 30;
  const [submittedRepo, setSubmittedRepo] = useState('');

  const { data: issues, isLoading, isError, refetch } = useQuery({
    queryKey: ['issues', repo, token, page ],
    queryFn: () => fetchIssues(repo, page, perPage, token),
    enabled: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedRepo(repo);
    setPage(1);
    refetch();
  };

  const handleNext = () => {
    setPage(p => p + 1);
  };

  const handlePrev = () => {
    if (page > 1) {
      setPage(p => p - 1);
    }
  };

  useEffect(() => { submittedRepo && refetch(); }, [page, submittedRepo]);

  const buttonCss = 'bg-gray-300 px-4 py-2 rounded disabled:opacity-50';

  return (
    <div className="p-4 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">GitHub Issues Viewer</h1>
      <Form handleSubmit={handleSubmit} setRepo={setRepo} setToken={setToken} repo={repo} token={token} />

      {isLoading && <p>Loading...</p>}
      {isError && <p className="text-red-500">Error fetching issues.</p>}

      {issues ? (
        <div>
          {issues.length ? (
            <IssuesTable issues={issues} />
          ) : (
            <p className="mt-4">There are no {page > 1 && 'more'} issues for {submittedRepo || repo}</p>
          )}
          <div className="flex justify-between mt-4">
            <button
              onClick={handlePrev}
              disabled={page === 1}
              className={buttonCss}
            >
              Previous
            </button>
            <span className="px-4 py-2">Page {page}</span>
            <button
              onClick={handleNext}
              disabled={issues.length < perPage}
              className={buttonCss}
            >
              Next
            </button>
          </div>
        </div>
      ) : (
        !(isLoading || isLoading) && <p className="mt-4">Enter a repository and token to view issues.</p>
      )}
    </div>
  );
}