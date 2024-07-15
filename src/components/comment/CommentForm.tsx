const CommentForm = () => {
  return (
    <div className="space-y-3">
      <textarea
        className="mt-4 w-full rounded-md ring-inset ring-2 ring-primary-500 dark:ring-primary-600 p-3 text-left text-gray-700 focus:outline-none dark:bg-gray-100"
        placeholder="What do you think?"
      />
      <div className="flex justify-start space-x-3">
        <button className="w-full sm:w-24 p-2 rounded-md bg-primary-500 hover:bg-primary-600 dark:bg-primary-600 text-white">
          Send
        </button>
        <button className="w-full sm:w-24 p-2 rounded-md bg-white text-primary-500 ring-inset ring-1 ring-primary-500 dark:bg-gray-100  dark:text-primary-600 dark:ring-primary-600">
          Clear
        </button>
      </div>
    </div>
  );
};

export default CommentForm;
