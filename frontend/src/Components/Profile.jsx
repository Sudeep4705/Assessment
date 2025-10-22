import AccountCircleIcon from '@mui/icons-material/AccountCircle';
export default function Profile(){
    return(
        <>
  <div className="flex justify-center items-center min-h-screen bg-white text-black">
      <div className="w-full max-w-md p-6 rounded-2xl shadow-md border border-gray-200">
        <div className="flex flex-col items-center mb-6">
          <AccountCircleIcon className="text-gray-500" sx={{ fontSize: 60 }} />
          <h2 className="text-xl font-semibold text-gray-800 mt-2">Profile</h2>
        </div>

        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Role</label>
            <input
              type="text"
              placeholder="Your role"
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Bio</label>
            <textarea
              placeholder="Write something about yourself"
              rows="3"
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            ></textarea>
          </div>

          <div className="flex justify-center">
            <button
              type="button"
              className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
        </>
    )
}