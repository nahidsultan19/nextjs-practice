export const metadata = {
    title: 'Dashboard',
    description: 'next app',
}

const DashboardLayout = ({ children }) => {
    return (
        <div>
            <h2>Dashboard Sidebar</h2>
            {children}
        </div>
    );
};

export default DashboardLayout; 