import './Sidebar.css';
import { SidebarItems } from './components/SidebarItems';
import { ApiItems } from './apiCalls/fetchMostPopular/types';

interface SidebarProps {
  data: ApiItems[];
}

export const Sidebar = ({ data }: SidebarProps) => (
  <div className="sidebar">
    <div className="title">Popular pairs</div>
    <SidebarItems items={data} />
    <div className="divider"></div>
  </div>
);
