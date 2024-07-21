export default function NewDetails() {
  return (
    <main className="custom-bg min-h-screen flex items-center justify-center">
      <div className="w-full max-w-2xl p-8 bg-white rounded-lg shadow-lg">
        <div className="text-center mb-6">
          <div className="text-2xl font-bold">Zavi Homeschool</div>
          <div className="custom-header py-2 mt-2 rounded">
            <div className="text-white font-semibold">Report</div>
          </div>
        </div>
        <form method="post">
          <div className="grid grid-cols-3 gap-4 mb-4">
            <div className="col-span-1">
              <label
                htmlFor="subject"
                className="block font-medium text-gray-700"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div className="col-span-1">
              <label
                htmlFor="grade"
                className="block font-medium text-gray-700"
              >
                Grade
              </label>
              <input
                type="text"
                id="grade"
                name="grade"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div className="col-span-1">
              <label
                htmlFor="yearTerm"
                className="block font-medium text-gray-700"
              >
                Year/Term
              </label>
              <input
                type="text"
                id="yearTerm"
                name="yearTerm"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
          </div>
          <div className="mb-4">
            <label
              htmlFor="overview"
              className="block font-medium text-gray-700"
            >
              Overview
            </label>
            <textarea
              id="overview"
              name="overview"
              rows={3}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            ></textarea>
          </div>
          <div className="mb-4">
            <label
              htmlFor="strength"
              className="block font-medium text-gray-700"
            >
              Strength
            </label>
            <textarea
              id="strength"
              name="strength"
              rows={3}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            ></textarea>
          </div>
          <div className="mb-4">
            <label
              htmlFor="challenges"
              className="block font-medium text-gray-700"
            >
              Areas of Challenges/Improvements
            </label>
            <textarea
              id="challenges"
              name="challenges"
              rows={3}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            ></textarea>
          </div>
          <div className="mb-4">
            <label
              htmlFor="recommendation"
              className="block font-medium text-gray-700"
            >
              Recommendation for Further Improvement
            </label>
            <textarea
              id="recommendation"
              name="recommendation"
              rows={3}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            ></textarea>
          </div>
          <div className="mb-4">
            <label
              htmlFor="conclusion"
              className="block font-medium text-gray-700"
            >
              Conclusion
            </label>
            <textarea
              id="conclusion"
              name="conclusion"
              rows={3}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            ></textarea>
          </div>
          <div className="mb-4">
            <label
              htmlFor="portfolio"
              className="block font-medium text-gray-700"
            >
              Portfolio (Link)
            </label>
            <input
              type="text"
              id="portfolio"
              name="portfolio"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div className="text-right">
            <button
              type="submit"
              className="px-4 py-2 bg-indigo-600 text-white rounded-md shadow-sm hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
