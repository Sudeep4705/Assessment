import LockIcon from "@mui/icons-material/Lock";

export default function AccountSettings() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-white text-black">
      <div className="w-full max-w-md p-6 rounded-2xl shadow-md border border-gray-200">
        <div className="flex flex-col items-center mb-6">
          <LockIcon className="text-gray-500" sx={{ fontSize: 50 }} />
          <h2 className="text-xl font-semibold text-gray-800 mt-2">
            Account Settings
          </h2>
        </div>

        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Current Password
            </label>
            <input
              type="password"
              placeholder="Enter current password"
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              New Password
            </label>
            <input
              type="password"
              placeholder="Enter new password"
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Confirm New Password
            </label>
            <input
              type="password"
              placeholder="Re-enter new password"
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="flex justify-between items-center pt-2">
            <button
              type="button"
              className="px-5 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
            >
              Save Changes
            </button>
            <button
              type="button"
              className="px-5 py-2 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400 transition"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
