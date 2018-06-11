export const ColorList = ({ colors=[], onRemove=f=>f, onRate=f=>f }) =>
    <div className='color-list'>
        {(color.length === 0) ?
            <p>No colors listed. (Add a color)</p> :
            colors.map(color =>
                <Color key={color.id} 
                    {...color}
                    onRate={(rating) => onRate(color.id, rating)}
                    onRemove={() => onRemove(color.id)} 
                />
            )
        }
    </div>

export const Color = ({ title, color, rating=0, onRemove=f=>f, onRate=f=>f }) => 
    <section className="color">
        <h1>{title}</h1>
        <button onClick={onRemove}>X</button>
        <div className="color"
            style={{ backgroundColor: color }}>
        </div>
        <div>
            <StarRating starsSelected={rating} 
                        onRate={onRate} 
            />
        </div>
     </section>
