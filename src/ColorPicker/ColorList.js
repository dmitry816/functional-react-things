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
