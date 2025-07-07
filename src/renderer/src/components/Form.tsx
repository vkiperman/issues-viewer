export default function Form({ handleSubmit, setRepo, setToken, repo, token }) {
  return (
    <form onSubmit={handleSubmit} className="mb-4 flex items-center">
        <input
          type="text"
          placeholder="e.g., gitkraken/repo"
          value={repo}
          onChange={(e) => setRepo(e.target.value)}
          className="border p-2 mr-2 w-64"
          required
        />
        <input
          type="password"
          placeholder="GitHub Token"
          value={token}
          onChange={(e) => setToken(e.target.value)}
          className="border p-2 mr-2"
          required
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2">View&nbsp;Issues</button>
      </form>
  );
}