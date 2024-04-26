export const MovieView = ({ movie }) => {
    return (
        <div>
            <div>
                <img src={movie.imagePath} />
            </div>
            <div>
                <span>Title: </span>
                <span>{movie.Title}</span>
            </div>
            <div>
                <span>Description: </span>
                <span>{movie.Description}</span>
            </div>
        </div>
    );
};