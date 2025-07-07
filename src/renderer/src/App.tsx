import GitHubIssuesViewer from './components/GitHubIssuesViewer'

function App(): React.JSX.Element {

  // const handleContextMenu = event => {
  //   event.preventDefault();
  //   const { clientX: x, clientY: y } = event;
  //   window.electron.ipcRenderer.send('show-context-menu', { x, y });
  // };
  

  return (<GitHubIssuesViewer />)
}

export default App
