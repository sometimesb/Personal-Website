export default function showSideBar() {
  const sidebar = document.querySelector('.sidebar');
  sidebar.style.display = sidebar.style.display === 'none' ? 'flex' : 'none';
}
