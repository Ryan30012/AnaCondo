export default function NewFacility() {
  return (
    <form className="">
      <div className="max-w-sm mb-4">
        <label
          htmlFor="facility"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Enter new Facility of Choice
        </label>
        <textarea
          id="facility"
          name="facility"
          rows={1}
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Gym, Pool, Conference Room, Sitting Area..."
        ></textarea>
      </div>

      <div className="max-w-sm mb-4">
        <label
          htmlFor="facilityLocation"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Enter the location
        </label>
        <textarea
          id="facilityLocation"
          name="facilityLocation"
          rows={1}
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="First Floor, Rooftop, 15th floor..."
        ></textarea>
      </div>

      <div>
        <label
          htmlFor="facilitiesDetails"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          New Facility Details
        </label>
        <textarea
          id="message"
          name="facilitiesDetails"
          rows={4}
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Add any extra information about your new facility (if needed)"
        ></textarea>
      </div>

      <div className="mb-5"></div>
      <div className="max-w-sm mb-4">
        <label
          htmlFor="uploadFile"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Upload Pictures - BluePrints
        </label>
        <input type="file" />
        <button
          //   onClick={handleUpload}
          name="file"
          className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800"
        >
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            Upload
          </span>
        </button>

        <div className="facility-submit-button mt-4">
          <button
            name="submitNewFacReq"
            className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800"
            type="submit"
          >
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Submit New Facility Request
            </span>
          </button>
        </div>
      </div>
    </form>
  );
}
