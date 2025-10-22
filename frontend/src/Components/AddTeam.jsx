import GroupAddIcon from "@mui/icons-material/GroupAdd";

export default function AddTeam() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-white">
      <div className="w-full max-w-md p-6 rounded-2xl shadow-md border border-gray-200">
        <div className="flex flex-col items-center mb-6">
          <GroupAddIcon className="text-blue-500" sx={{ fontSize: 50 }} />
          <h2 className="text-xl font-semibold text-gray-800 mt-2">
            Add Team Member
          </h2>
        </div>

        <form className="space-y-4">
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Enter full name"
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400 text-black"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter email address"
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400 text-black"
            />
          </div>

          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Role
            </label>
            <select
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400 text-black"
            >
              <option value="">Select role</option>
              <option value="developer">Developer</option>
              <option value="designer">Designer</option>
              <option value="manager">Manager</option>
              <option value="tester">Tester</option>
            </select>
          </div>
          <div className="flex justify-between items-center pt-2">
            <button
              type="button"
              className="px-5 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
            >
              Send Invite
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
