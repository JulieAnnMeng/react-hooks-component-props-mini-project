function Article({title, date="January 1, 1970", preview, minutes}) {
    return (
        <div>
            <h3>{title}</h3>
            <small>
                {date} {minutes} min read
            </small>
            <p>{preview}</p>
            <p></p>
        </div>
    );
}

export default Article;
