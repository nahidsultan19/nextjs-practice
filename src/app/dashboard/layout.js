import SideBar from "./SideBar";

export const metadata = {
    title: 'Dashboard',
    description: 'next app',
}

const DashboardLayout = ({ children }) => {
    return (
        <div className="flex container mx-auto">
            <SideBar />
            {children}
        </div>
    );
};

export default DashboardLayout; 