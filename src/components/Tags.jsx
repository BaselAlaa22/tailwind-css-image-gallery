function Tags(props) {
  const tags = props.tags.split(",");
  return (
    <div className="px-6 py-2">
      {tags.map((tag, index) => {
        return (
          <span
            key={index}
            className="inline-block bg-gray-200 rounded-full 
            px-4 py-1 text-sm font-semibold text-gray-700 mr-2 mb-4"
          >
            #{tag}
          </span>
        );
      })}
    </div>
  );
}

export default Tags;
