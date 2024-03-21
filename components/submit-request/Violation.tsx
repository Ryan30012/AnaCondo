export default function Violation() {
  return (
    <form>
      <div data-testid="violation" className="max-w-sm mb-4">
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your email
          </label>
          <input
            type="email"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="name@email.com"
            required
          />
        </div>
        <label
          htmlFor="common-room"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Select a common room
        </label>
        <select
          id="common-room"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-lime-500 focus:border-lime-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-lime-500 dark:focus:border-lime-500"
        >
          <option selected>Choose a common violation</option>
          <option value="pets">Pets</option>
          <option value="noise">Noise</option>
          <option value="smells">Smells</option>
          <option value="parking">Parking</option>
          <option value="maintenance">Maintenance</option>
          <option value="renovation">Renovation</option>
          <option value="trash-recycling">Trash/Recycling</option>
          <option value="community-rules">Community Rules</option>
        </select>
        <div className="my-5">
          <label
            htmlFor="new-violation"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your violation not listed?
          </label>
          <input
            type="new-violation"
            id="new-violation"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="New violation"
          />
        </div>
        <div className="violation-submit-button mt-4">
          <button
            className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800"
            type="submit"
          >
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Submit
            </span>
          </button>
        </div>
      </div>
    </form>
  );
}
