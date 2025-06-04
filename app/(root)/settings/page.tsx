import { getCurrentUser } from "@/lib/actions/auth.action";

const SettingsPage = async () => {
  const user = await getCurrentUser();

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-gray-900 dark:text-white">Settings</h1>
        <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
          Manage your account settings and preferences
        </p>
      </div>

      <div className="card">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
              Name
            </label>
            <p className="mt-1 text-gray-900 dark:text-white">{user?.name}</p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
              Email
            </label>
            <p className="mt-1 text-gray-900 dark:text-white">{user?.email}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
