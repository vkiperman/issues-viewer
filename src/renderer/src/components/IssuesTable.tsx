

const formatterUS = new Intl.DateTimeFormat(navigator.language, {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  hour: '2-digit',
  minute: '2-digit',
});

export default function IssuesTable({ issues }) {

  return (
    <table className="mt-4 w-full text-sm">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 text-left">Issue #</th>
          <th className="p-2 text-left">Title</th>
          <th className="p-2 text-right">Created At</th>
        </tr>
      </thead>
      <tbody>
        {issues.map(issue => (
          <tr key={issue.id} className="border p-2 rounded hover:bg-gray-100">
            <td className='p-2'>#{issue.number}</td>
            <td className='p-2'>
              <a href={issue.html_url} target="_blank" rel="noreferrer" className="text-blue-600 flex justify-between">
                {issue.title} 
              </a>
            </td>
            <td className='p-2 text-right'><span>{formatterUS.format(new Date(issue.created_at))}</span></td>
          </tr>
        ))}
        </tbody>
    </table>
  );
}