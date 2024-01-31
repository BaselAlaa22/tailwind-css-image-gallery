import Tags from "./Tags";
function Cards(props) {
  return (
    <div className="max-w-sm rounded shadow-lg">
      <img src={props.imageURL} alt="" className="w-full" />
      <div className="px-6 py-4">
        <p className="font-bold text-purple-400 text-xl mb-2">
          Photo by {props.user}
        </p>
        <ul>
          <li>
            <strong>Views:</strong>
            {props.views}
          </li>
          <li>
            <strong>Downloads:</strong>
            {props.downloads}
          </li>
          <li>
            <strong>Likes:</strong>
            {props.likes}
          </li>
        </ul>
      </div>
      <Tags tags={props.tags} />
    </div>
  );
}

export default Cards;
